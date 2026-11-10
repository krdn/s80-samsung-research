import { z } from 'zod';
import { STOCKS, type Price, type SourceDocument } from '../shared/schema.ts';
import { Store, hash, DomainError } from './db.ts';
import { credential } from './credentials.ts';
import { iso, providerDefaults, seoulDate } from './feeds.ts';

const KRX_ENDPOINT = 'https://data-dbg.krx.co.kr/svc/apis/sto/stk_bydd_trd';
const KRX_DOC = 'https://openapi.krx.co.kr/contents/OPP/USES/service/OPPUSES002_S2.cmd?BO_ID=JvJFzlAENzZlPBDNGAWC';
const DART_ENDPOINT = 'https://opendart.fss.or.kr/api/list.json';
const CORPORATIONS = [{ symbol: '005930', code: '00126380', name: '삼성전자' }, { symbol: '000660', code: '00164779', name: 'SK하이닉스' }] as const;
export const API_DAILY_LIMIT = 24;
export function useApiBudget(store: Store, now: Date, requestLimit = API_DAILY_LIMIT): void {
  store.transaction(() => {
    const key = `officialRequests:${seoulDate(now)}`;
    const count = store.meta<number>(key, 0);
    if (count >= Math.min(API_DAILY_LIMIT, requestLimit)) throw new DomainError('공식 API 호출 한도 도달. 예약 작업은 수동 실행 예산을 남깁니다.', 'API_BUDGET');
    store.setMeta(key, count + 1);
  });
}
async function safeJson(url: URL, init: RequestInit, fetcher: typeof fetch): Promise<unknown> {
  try {
    const response = await fetcher(url, { ...init, signal: AbortSignal.timeout(15000), redirect: 'error' });
    if (!response.ok) throw new DomainError(`공식 API HTTP ${response.status}. 키·서비스별 이용 승인·IP 제한을 확인하세요.`, 'PROVIDER_HTTP');
    const text = await response.text();
    if (text.length > 5_000_000) throw new DomainError('공식 API 응답 크기 제한 초과', 'RESPONSE_LIMIT');
    return JSON.parse(text);
  } catch (error) {
    if (error instanceof DomainError) throw error;
    // URL에는 DART의 인증 인자가 있을 수 있어 원본 오류/요청을 출력하지 않는다.
    throw new DomainError('공식 API 연결·응답 형식 확인 필요', 'PROVIDER_CONNECTION');
  }
}
const KrxRow = z.object({ BAS_DD: z.string(), ISU_CD: z.string(), ISU_NM: z.string(), MKT_NM: z.string(), TDD_CLSPRC: z.string(), CMPPREVDD_PRC: z.string(), ACC_TRDVOL: z.string() });
export function parseKrx(data: unknown, date: string, now: Date): Price[] {
  const { OutBlock_1: rows } = z.object({ OutBlock_1: z.array(KrxRow) }).parse(data);
  const prices: Price[] = [];
  for (const stock of STOCKS) {
    const row = rows.find((r) => r.ISU_CD === stock.symbol);
    if (!row) continue;
    if (row.ISU_NM !== stock.name || row.MKT_NM !== 'KOSPI' || row.BAS_DD.replaceAll('/', '').replaceAll('-', '') !== date.replaceAll('-', '')) throw new DomainError('KRX 종목명·시장·기준일 불일치', 'KRX_IDENTITY');
    const close = Number(row.TDD_CLSPRC.replaceAll(',', ''));
    if (!Number.isFinite(close) || close <= 0) throw new DomainError('KRX 종가 형식 오류', 'KRX_PRICE');
    prices.push({ id: `krx:${stock.symbol}:${date}:${hash(row).slice(0, 12)}`, symbol: stock.symbol, date, close, observedAt: iso(now), sourceUrl: KRX_DOC,
      firstSeenAt: iso(now), final: date < seoulDate(now), comparable: false, note: 'KRX 일별 종가. 기업행사 조정·거래정지 비교 가능성 미확인으로 예측 입력/성과 평가 보류.', revision: 1 });
  }
  if (prices.length !== 0 && prices.length !== 2) throw new DomainError('KRX 두 종목 중 일부 자료 누락', 'KRX_PARTIAL');
  return prices;
}
export async function collectKrx(store: Store, date: string, now: Date, key: string, fetcher: typeof fetch = fetch, requestLimit = API_DAILY_LIMIT): Promise<number> {
  if (date >= seoulDate(now)) throw new DomainError('KRX 일별 API는 당일 확정 종가를 보장하지 않습니다.', 'KRX_NOT_FINAL');
  useApiBudget(store, now, requestLimit);
  const url = new URL(KRX_ENDPOINT); url.searchParams.set('basDd', date.replaceAll('-', ''));
  const response = await safeJson(url, { headers: { AUTH_KEY: key, Accept: 'application/json' } }, fetcher);
  const rows = parseKrx(response, date, new Date(Math.max(now.getTime(), Date.now())));
  store.transaction(() => {
    for (const price of rows) {
      if (store.get('prices', price.id)) continue;
      const revisions = store.all('prices').filter((p) => p.symbol === price.symbol && p.date === price.date);
      store.insert('prices', { ...price, revision: Math.max(0, ...revisions.map((p) => p.revision)) + 1 });
      store.setMeta(`priceFirstSeen:${price.id}`, iso(now));
    }
  });
  return rows.length;
}
const DartItem = z.object({ corp_code: z.string(), corp_name: z.string(), stock_code: z.string(), report_nm: z.string(), rcept_no: z.string().regex(/^\d{14}$/), rcept_dt: z.string().regex(/^\d{8}$/) });
export function parseDart(data: unknown, symbol: typeof STOCKS[number]['symbol'], now: Date): { documents: SourceDocument[]; pages: number } {
  const result = z.object({ status: z.string(), total_page: z.coerce.number().optional(), list: z.array(DartItem).optional() }).parse(data);
  if (result.status === '013') return { documents: [], pages: 0 };
  if (result.status !== '000') throw new DomainError(`DART 응답 코드 ${/^\d{3}$/.test(result.status) ? result.status : '형식 오류'}: 인증·이용 조건을 확인하세요.`, 'DART_STATUS');
  const documents = (result.list ?? []).map((row): SourceDocument => {
    const corporation = CORPORATIONS.find((c) => c.symbol === symbol)!;
    if (row.stock_code !== symbol || row.corp_code !== corporation.code || !row.corp_name.includes(corporation.name)) throw new DomainError('DART 종목·고유번호 불일치', 'DART_IDENTITY');
    const date = `${row.rcept_dt.slice(0, 4)}-${row.rcept_dt.slice(4, 6)}-${row.rcept_dt.slice(6)}`;
    const upperBound = new Date(`${date}T23:59:59+09:00`);
    // API는 일자만 제공한다. 시간 정밀도를 표시하고 예측 근거에서는 제외한다.
    return { id: `dart:${row.rcept_no}`, providerId: 'dart', title: row.report_nm,
      url: `https://dart.fss.or.kr/dsaf001/main.do?rcpNo=${row.rcept_no}`, publisher: '금융감독원 DART', language: 'ko', region: '한국', topic: '기업·공시',
      publishedAt: iso(upperBound), firstSeenAt: iso(now), modifiedAt: null, timestampPrecision: 'date',
      hash: hash(row), eventKey: `dart:${row.rcept_no}`, storagePolicy: '공시 제목·원문 링크·접수일만 저장. 발행시각 미제공: 날짜 상한값이며 예측 근거에서 제외.', classification: '공식 발표', symbols: [symbol] };
  });
  return { documents, pages: result.total_page ?? 1 };
}
export async function collectDart(store: Store, now: Date, key: string, fetcher: typeof fetch = fetch, requestLimit = API_DAILY_LIMIT): Promise<number> {
  let added = 0;
  const since = new Date(now.getTime() - 7 * 86400000);
  for (const corporation of CORPORATIONS) {
    let pages = 1;
    for (let page = 1; page <= pages; page++) {
      if (page > 5) throw new DomainError('DART 수집 페이지 한도 초과. 일부 수집이며 완료로 표시하지 않습니다.', 'DART_PAGE_LIMIT');
      useApiBudget(store, now, requestLimit);
      const url = new URL(DART_ENDPOINT);
      url.search = new URLSearchParams({ crtfc_key: key, corp_code: corporation.code, bgn_de: seoulDate(since).replaceAll('-', ''), end_de: seoulDate(now).replaceAll('-', ''), page_count: '100', page_no: String(page), last_reprt_at: 'N' }).toString();
      const response = await safeJson(url, {}, fetcher);
      const result = parseDart(response, corporation.symbol, new Date(Math.max(now.getTime(), Date.now())));
      pages = result.pages;
      store.transaction(() => {
        for (const document of result.documents) if (!store.get('documents', document.id)) { store.insert('documents', document); added++; }
      });
    }
  }
  return added;
}
export async function collectOfficial(store: Store, now = new Date(), options: { providers?: ('krx' | 'dart')[]; requestLimit?: number } = {}): Promise<{ krx: string; dart: string }> {
  const results = { krx: '', dart: '' };
  for (const provider of ['krx', 'dart'] as const) {
    if (options.providers && !options.providers.includes(provider)) continue;
    const previous = store.get('providers', provider) ?? providerDefaults().find((p) => p.id === provider)!;
    const key = await credential(provider);
    if (!key) {
      results[provider] = '보안 저장소/환경변수의 키 미설정';
      store.upsert('providers', { ...previous, status: 'unconfigured', message: results[provider] });
      continue;
    }
    try {
      let count = 0;
      if (provider === 'krx') {
        // 최근 7개 달력 날짜 중 자료가 있는 첫 날만 조회. 빈 응답을 휴장으로 추정하지 않는다.
        for (let back = 1; back <= 7 && count === 0; back++) count = await collectKrx(store, seoulDate(new Date(now.getTime() - back * 86400000)), now, key, fetch, options.requestLimit);
        if (!count) throw new DomainError('최근 7일 KRX 가격 미확보. 휴장·공급 지연·이용 승인을 확인하세요.', 'KRX_EMPTY');
      } else count = await collectDart(store, now, key, fetch, options.requestLimit);
      results[provider] = provider === 'krx' ? `공식 가격 ${count}건 확보. 조정·캘린더 확인 전 예측 사용 보류.` : `공시 ${count}건 신규 확보. 접수일만 있어 예측 근거에서는 제외.`;
      store.upsert('providers', { ...previous, status: 'ok', lastAttemptAt: iso(now), lastSuccessAt: iso(now), documentCount: provider === 'krx' ? store.all('prices').filter((p) => p.id.startsWith('krx:')).length : store.all('documents').filter((d) => d.providerId === 'dart').length, message: results[provider] });
    } catch (error) {
      results[provider] = error instanceof DomainError ? error.message : '공식 응답 스키마 불일치. 제공자 계약 확인 필요.';
      store.upsert('providers', { ...previous, status: 'error', lastAttemptAt: iso(now), message: results[provider] });
    }
  }
  return results;
}
