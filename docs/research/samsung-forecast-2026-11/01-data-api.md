# R1 데이터/API·시점 독립 조사

확인일: **2026-11-10 KST**. 입력 revision `b5610db`. 계약: [00-brief.md](00-brief.md), [HERDR-PROJECT.md](../../../HERDR-PROJECT.md), [HERDR-OPERATIONS.md](../../../HERDR-OPERATIONS.md). 공개 문서 연구이며 인증 API의 자료 접근·정시 공급·예측 성능은 검증하지 않았다. R2·R3 문서는 읽지 않았다.

**결론:** 80%는 삼성전자 보통주 `005930`의 **다음 거래일 방향 적중률 목표**다. 달성 근거는 아직 없다. 우선 확보할 것은 07:40 이전의 비교 가능한 KRX 가격, 당시 공시 원문, 거래 캘린더·기업행사와 수집 시각이다. KIS는 가격 후보, KRX Open API는 지연 대조 후보로 둔다. FRED/ALFRED와 메모리 가격은 기술적 가용성 외에 이용권 문제가 있어 모델 입력 채택을 보류한다. 아래 채택 구분은 조사자의 제안이며 구현·계약 승인 결과가 아니다.

## 1. API별 확인과 한계

각 행의 링크는 2026-11-10에 실제 열어 확인한 공식 출처다. **확인**은 문서 내용, **미확인**은 실호출·권리·보장 범위의 빈칸이다. 공개 문서 확인을 계정의 서비스 승인으로 해석하지 않는다.

| 공급자·우선순위 제안 | 데이터·endpoint·인증 | 이력·시점·정정 | 요금·권리·남은 확인 |
|---|---|---|---|
| **KRX: 가격 대조 필수 후보** | [유가증권 일별매매정보](https://openapi.krx.co.kr/contents/OPP/USES/service/OPPUSES002_S2.cmd?BO_ID=JvJFzlAENzZlPBDNGAWC), 헤더 `AUTH_KEY` 확인. 기존 어댑터는 `https://data-dbg.krx.co.kr/svc/apis/sto/stk_bydd_trd?basDd=YYYYMMDD` 사용: [server/official.ts](../../../server/official.ts). [이용방법](https://openapi.krx.co.kr/contents/OPP/INFO/OPPINFO003.jsp)은 키 승인과 개별 API 활용 승인을 분리한다. | 공식 상세 페이지는 **2010-01-04부터**, 명세 최근 수정 **2026-01-16** 표시. 기존 [KRX 조사](../krx-contract.md)는 직전 개장일 자료를 **08시 이후** 조회하는 조건을 기록했다. 이번에는 동적 상세가 비었고 직접 HTTP는 403, 브라우저는 오류 페이지여서 **08시 조건·정정 시각 재확인 불가**. | [약관](https://openapi.krx.co.kr/contents/OPP/INFO/OPPINFO002.jsp) 제6조 비상업 목적, 제8조 키당 하루 10,000회 이하, 제10조 출처 표시, 제11조 제3자 제공 금지·계약 종료 후 이용 제한 확인. 무료 요금표·원천 데이터 장기 보관 범위·공개 서비스 권리는 별도 미확인. |
| **KIS: 마감 전 가격 필수 후보** | 공식 [기간별 일봉 예제](https://github.com/koreainvestment/open-trading-api/blob/main/examples_llm/domestic_stock/inquire_daily_itemchartprice/inquire_daily_itemchartprice.py): `/uapi/domestic-stock/v1/quotations/inquire-daily-itemchartprice`, TR `FHKST03010100`. [공식 인증 예제](https://github.com/koreainvestment/open-trading-api/blob/main/examples_llm/kis_auth.py)는 App Key/Secret으로 `/oauth2/tokenP` 접근 토큰을 발급한다. [가입 안내](https://apiportal.koreainvestment.com/about-howto)는 검색 수록 본문에서 계좌·ID 연결·서비스 신청을 요구하나 현재 렌더링 본문은 비었다. | **호출당 최대 100건**이며 전체 이력이 100일이라는 뜻은 아니다. 시작·종료일과 `D/W/M/Y` 지원. 최초 조회 가능일·장기 구간 누락·07:40 공급 SLA는 미확인. `J=KRX`, `NX=NXT`, `UN=통합`; 평가용은 `J`로 제한하고 정규장 종가 의미도 대조해야 한다. | [공식 도구 소개](https://apiportal.koreainvestment.com/tools)의 검색 수록 본문은 기본 무료라고 안내하나 현재 렌더링 본문에는 금액 안내가 없다. 따라서 **최신 요금·계정별 호출 한도·보관·화면 재표시/재배포 허용 범위는 미확인**. 계좌가 있다고 공개 앱 시세 이용권까지 있다고 판단하지 않는다. |
| **KIS: 수급 선택 후보** | [주식현재가 투자자](https://github.com/koreainvestment/open-trading-api/blob/main/examples_llm/domestic_stock/inquire_investor/inquire_investor.py) `/uapi/domestic-stock/v1/quotations/inquire-investor`; [종목별 투자자매매동향 일별](https://github.com/koreainvestment/open-trading-api/blob/main/examples_llm/domestic_stock/investor_trade_by_stock_daily/investor_trade_by_stock_daily.py) `/uapi/domestic-stock/v1/quotations/investor-trade-by-stock-daily`. | 전자는 공식 예제에 **당일 자료 장 종료 후 제공** 명시. 후자는 날짜·시장 구분을 받는다. 종목 수급과 시장 전체 수급을 혼합하지 않는다. 과거 최대 길이, 확정/추정 구분, 장후 정정 완료 시각은 미확인. | KIS 가격과 같은 계약 확인 필요. 결측 수급을 0으로 바꾸지 않는다. 수급 이력의 실제 확보 길이가 짧으면 해당 기간 모델로 따로 평가한다. |
| **Open DART: 공시 필수 후보** | [공시검색 명세](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS001&apiId=2019001): `https://opendart.fss.or.kr/api/list.json`, `crtfc_key` 40자리. [원문 명세](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS001&apiId=2019003): `/api/document.xml`, `rcept_no`로 ZIP 원문 조회. | `last_reprt_at=N`은 정정 포함 제출 보고서 전체, `Y`는 최종보고서만. `rcept_dt`는 **YYYYMMDD**, 시각이 아니다. [재무 주요계정](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS003&apiId=2019017)은 2015년 이후 제공하며 `rcept_no`를 반환한다. 이 시작일을 모든 공시 원문에 일반화하지 않는다. | [소개](https://opendart.fss.or.kr/intro/main.do)는 개인·기업·기관의 원문 추출 활용을 안내한다. 최신 과금표·첨부물별 권리·공급 SLA·당시 버전의 완전성은 미확인. 재무 API의 일반적인 요청 제한 오류 안내는 20,000건 이상이지만 설정에 따라 다르므로 보장 한도로 쓰지 않는다. |
| **ECOS: 거시 선택 후보** | [개발 명세](https://ecos.bok.or.kr/api/#/DevGuide/DevSpeciflcation)를 실제 브라우저에서 확인. `https://ecos.bok.or.kr/api/StatisticSearch/{key}/{json\|xml}/{kr\|en}/{start}/{end}/{statCode}/{cycle}/{startTime}/{endTime}/{itemCode1}` 형태. `StatisticTableList`, `StatisticItemList`로 목록·항목 조사. 별도 통계메타DB 탭은 전환되지 않아 상세 미확인. 키 필요. | 조회 명세는 기간·주기·항목을 받으며 `TIME`, `DATA_VALUE`, `UNIT_NAME` 등을 반환한다. 항목 목록에는 `START_TIME`, `END_TIME`, `DATA_CNT`가 있다. **확인한 StatisticSearch에는 과거 공개본을 지정하는 vintage 인자가 없다.** 관측월을 공개일로 쓰면 안 된다. 실제 이력 시작일은 통계별 확인, 공표·개정 시각은 원작성기관 발표와 수집본 대조 필요. | 같은 사이트 하단 이용약관 제5조는 상업적 이용을 허용하되 제한 통계는 작성기관 승인, 제7조는 ECOS 출처 표시를 요구한다. 가격표·과다호출 수치·최초 공표본 보관 기능은 미확인. 자료별 권리를 따로 확인한다. |
| **FRED/ALFRED: 권리 해결 전 보류** | [관측 API](https://fred.stlouisfed.org/docs/api/fred/series_observations.html): `https://api.stlouisfed.org/fred/series/observations`, 키·`series_id` 필요. `realtime_start/end`, `vintage_dates`, `output_type` 지원. | [실시간 기간 설명](https://fred.stlouisfed.org/docs/api/fred/realtime_period.html): 기본 조회는 오늘 알고 있는 과거 값, ALFRED는 과거 당시 알려진 값. **vintage는 날짜 단위**이므로 같은 날 07:40 이전 공개를 단독 증명하지 못한다. 계열별 시작일·vintage 보존 범위·제공 지연은 별도 확인. | [현행 통합 약관](https://fred.stlouisfed.org/legal/terms/)은 무료 API를 안내하면서, 서비스 금지 항목과 API 금지 (k)에 AI·ML 개발/학습 관련 이용 제한, (l)에 저장·캐시·아카이브 관련 제한을 명시한다. 제3자 계열 저작권도 별도다. **무료·public domain 표시만으로 학습/스냅샷 허용을 판단하지 않는다.** 적용 범위·허락을 확인하거나 원작성기관의 허용 자료를 별도 조사한다. |
| **SEC: 해외 기업 공시 선택 후보** | [공식 API](https://www.sec.gov/search-filings/edgar-application-programming-interfaces): `https://data.sec.gov/submissions/CIK##########.json`, `/api/xbrl/companyfacts/CIK##########.json`. **키 불필요**. [접근 지침](https://www.sec.gov/search-filings/edgar-search-assistance/accessing-edgar-data)은 식별 User-Agent와 최대 10요청/초 안내. | submissions 최근 묶음은 최소 1년 또는 1,000건 중 큰 범위, 이전 이력은 추가 파일 연결. EDGAR는 1994/95 시작, XBRL 의무화는 2009년부터라 동등한 전체 재무 이력은 아니다. 통상 처리 지연은 submissions 1초 미만·XBRL 1분 미만, 혼잡 시 증가. 정정·삭제도 발생한다. | 공개 공시는 무료 접근. 공개 자료의 재사용 안내는 [SEC FAQ](https://www.sec.gov/about/webmaster-frequently-asked-questions). 개별 첨부물의 제3자 권리까지 일괄 보장하지 않는다. 삼성의 한국 정규장 가격·공시를 대체하지 않으며 해외 고객·경쟁사 사건에 사용한다. |
| **삼성 IR: 원문 확인 필수 후보** | [실적 발표](https://www.samsung.com/global/ir/financial-information/earnings-release/)에서 PDF·webcast, [사업보고서](https://www.samsung.com/global/ir/reports-disclosures/business-report/)에서 과거 분기 자료 확인. 공개 목록에 키 불필요. | 실적 자료 목록은 2011년까지 표시된다. 이는 모든 파일의 완전성·당시 원문 보존 보장이 아니다. 공개 API endpoint와 개정 시각·과거 공개시각 API는 이번 조사에서 확인하지 못했다. 현재 같은 URL의 파일을 당시 원문으로 가정하지 않는다. | 열람에 결제를 요구하지 않은 공개 목록이다. 자동 수집·본문 영구 저장·재배포 이용권은 미확인. DART 원문 및 발표 일정과 대조하고 허용 범위 내 링크·메타데이터·해시를 기록한다. |

### F1. KRX 08시와 07:40의 충돌

기존 조사에 기록된 08시 조건이 유지된다면 공급은 마감보다 **20분 늦다**(08:00−07:40). 따라서 KRX Open API만으로 직전 거래일 종가를 매일 제때 확보하는 설계는 성립하지 않는다. 이 계산은 조건부 판단이며 이번 실측 결과가 아니다. 24시간 API 운영은 데이터의 24시간 갱신 보장이 아니다.

**제안 D1:** 허용된 대체 공급자에서 전일 장후 가격을 확보·보존하고, 다음날 마감 전 같은 값과 시장·기준일을 검증한다. 이후 KRX와 대조할 때 차이가 나면 입력과 예측을 덮어쓰지 않고 가격·평가 정정을 새 개정으로 남긴다. 대체 공급의 이용권·가격 비교 가능성·시점 증거가 없으면 예측을 보류한다. 08시 이후 받은 값을 07:40 입력으로 소급하는 대안은 기각한다.

### F2. KIS 수정주가 값의 함정

[기간별 API](https://github.com/koreainvestment/open-trading-api/blob/main/examples_llm/domestic_stock/inquire_daily_itemchartprice/inquire_daily_itemchartprice.py)는 `FID_ORG_ADJ_PRC=0` 수정주가, `1` 원주가다. 반면 [최근 일자별 API](https://github.com/koreainvestment/open-trading-api/blob/main/examples_llm/domestic_stock/inquire_daily_price/inquire_daily_price.py)는 `0` 미반영, `1` 반영이며 **최근 30거래일** 제한이다. 같은 필드명을 공통 변환하면 뜻을 뒤집는다.

**제안 D2:** endpoint별 의미를 고정하고 원주가·기업행사·조정 계수를 따로 보존한다. 지금 받은 수정주가를 과거 시점에 존재한 가격 수준으로 간주하지 않는다. 최신 수정계열의 수익률이 비교 가능한지, 배당 포함 여부·권리락 처리·거래량 조정은 별도 계약 실험으로 확인한다. 거래소 코드를 `J`로 고정해도 일봉의 세션 범위까지 증명한 것은 아니다.

### F3. 공시·거시의 과거 값은 당시 정보와 다르다

DART는 접수번호별 원문을 확보하고 정정 전후를 별도 사건으로 연결한다. 최신 재무 API 값을 사업연도에 맞춰 과거 모든 날짜에 채우는 방식은 기각한다. SEC도 `companyfacts`의 기간 종료일만 보고 쓰지 말고 접수번호·공개/접수 시각·원문과 연결한다. SEC의 접수 시점과 실제 배포가 다른 경우도 [공식 접근 지침](https://www.sec.gov/search-filings/edgar-search-assistance/accessing-edgar-data)에 있으므로 가용 시각을 보수적으로 잡는다.

예를 들어 **가상** 공시가 07:35 공개되고 시스템이 07:42 수집했다면 그날 07:40 실운영 입력에는 넣지 않는다. 역사적 백테스트에서 과거 공개시각·원문을 복원한 결과는 실운영 수집 성적과 구분한다. ECOS의 관측기간, DART의 접수일, ALFRED의 vintage 날짜만으로 마감 준수를 판정할 수 없다.

## 2. 뉴스·메모리 가격의 실제 접근 범위

**F4. 뉴스 API는 기사 원문 사용권과 다르다.** [NAVER 뉴스 검색 명세](https://developers.naver.com/docs/serviceapi/search/news/news.md)는 기존 endpoint `https://openapi.naver.com/v1/search/news.json`, Client ID/Secret, 제목·원문 링크·요약·`pubDate`를 설명한다. `pubDate`는 네이버에 제공된 시각일 수 있다. 검색 결과는 원문 전체나 과거 정정본 아카이브가 아니다.

또 [공식 이관 공지](https://developers.naver.com/notice/article/32530)는 **2026-07-31 이후 신규 신청을 NAVER API HUB로 제한**, 기존 개발자센터 지원 종료를 **2027-06-30**으로 명시한다. 신규 연결에 옛 문서의 무료 한도·인증·endpoint를 그대로 적용하지 않는다. HUB의 최신 가격·원문 저장·모델 이용·재표시 권리는 미확인이다. 초기에는 기업·기관의 허용된 발표/RSS와 링크 확인을 우선하고 뉴스는 선택 자료로 둔다.

**F5. 메모리 가격은 공개 화면과 자동 이용권을 분리한다.** [TrendForce 가격 화면](https://www.trendforce.com/price/dram/dram_spot)은 품목·시각·GMT+8 표시와 회원 전용 계약가격 자료를 제공한다. DRAM spot·contract·module은 서로 다른 지표다. 이 확인으로 무료 공개 DRAM/NAND 이력 API가 있다고 결론 낼 수 없다. `api.dramexchange.com`의 [확인된 FAQ](https://api.dramexchange.com/service/faq.aspx)는 WitsView 디스플레이 자료 안내여서 메모리 API 증거로 쓸 수 없다.

[TrendForce 약관](https://www.trendforce.com/about/terms)은 개인·비상업 제한, 무허가 복제/배포 제한뿐 아니라 §5(h)에 예측시장·투기 활동 관련 사용 제한을 둔다. **제안 D3:** 본 주가 예측 목적의 허용 범위·시계열 저장·ML 사용·재배포를 확인하기 전 수집/모델 입력을 보류한다. 가격·역사 길이·정정 로그·API 제공 방식은 미확인이며 회원 결제가 그 권리를 모두 부여한다고 추론하지 않는다.

## 3. 시점 계약과 목표 분모 제안

자료마다 `provider`, `instrument`, `venue`, `session`, `observation_period`, `published_at`, `available_at`, `first_seen_at`, `retrieved_at`, `revision_id`, `supersedes`, `content_hash`, `rights_scope`, `unit`, `timezone`을 기록한다. 이 필드들은 **설계 제안**이며 현재 스키마 구현 주장이 아니다. 스냅샷 보관 권리가 없는 공급자는 허용 가능한 메타데이터만 남기고 재현 한계를 표시한다.

- 실운영 입력은 검증된 공개/가용 시각과 실제 수집 시각이 모두 **07:40 KST 이하**인 버전만 사용한다. 시각 불명·시간대 불명·지연·결측은 기록하고 제외한다. 과거 자료 복원에서는 당시 실제 수집 기록 유무를 별도로 표시한다.
- 라벨은 직전 거래일 KRX 정규장 종가 대비 다음 거래일 종가의 부호다. `r=(C_t/C_prev−1)`에서 `r>0` 상승, `r<0` 하락. **정확한 보합 `r=0`은 별도 건수·비율로 공개**하고 이진 평가 제외 정책은 사전 고정한다. ±0.5% 3분류와 섞지 않는다.
- 기업행사로 비교 가격이 달라지면 당시 확인 가능한 조정 근거를 사용한다. 근거 미확보·거래 정지·확정가 미확보는 사유별 미평가로 남긴다. 휴장일을 가격 0·수익률 0으로 채우지 않는다.
- 예정 거래일 전체를 고정 장부로 두고 `적중/실제 평가한 상승·하락 예측 수`, `예측 제공률`, `보류·누락·보합·미평가 수`를 함께 공개한다. 높은 확신의 일부 날짜만 고른 80%는 전체 거래일 방향 적중률로 표시하지 않는다. 분모 세부 통계·합격 기준은 R2 검토 대상이다.

## 4. 접근 승인 뒤 필요한 계약 실험

아래는 **미실행 제안**이다. 이번 조사에서는 계정·키·보안 저장소를 읽거나 인증 호출을 하지 않았다.

| 실험 | 기록할 증거·실패 판정 |
|---|---|
| E1. 공급 시각 | 승인된 가격원에서 전일 장후·다음날 07:35/07:40/08:00/08:05에 같은 기준일을 비교한다. HTTP 성공 외에 기준일·005930 행·시장·세션·결측·수집 시각을 저장한다. 07:40 이전 미확보면 그 공급자를 필수 아침 입력으로 채택하지 않는다. 시각들은 실험 제안이며 SLA가 아니다. |
| E2. 긴 일봉·기업행사 | KIS 기간을 나눠 100건 초과 구간을 조회하고 경계 중복·거래일 누락·최초 날짜를 조사한다. 분할 등 기업행사 구간에서 두 endpoint의 원/수정 값, KRX 가격과 조정 근거를 대조한다. 계열을 오늘 다시 받았을 때의 변화도 기록한다. |
| E3. 수급·거래소 | 같은 날 `J/NX/UN`과 종목/시장 수급을 비교하고, 추정→확정·정정 시각 및 공급 이력 길이를 확인한다. 통합 가격 또는 장중 추정치를 KRX 확정 라벨에 섞으면 실패다. |
| E4. 원문과 개정 | DART 최초/정정 접수번호의 원문·해시·가용 시각, 재무 API가 가리킨 접수번호를 대조한다. SEC도 acceptance·배포·최초 수집을 비교한다. 당시 원문이 없으면 복원된 시점 데이터라고 인증하지 않는다. |
| E5. 거시·권리 | 선택 계열의 공표 일정·타임존·개정 전후를 확인한다. FRED/ALFRED는 ML·저장 권리 해결이 먼저다. ECOS도 항목별 최초/최종 시점·작성기관 권리를 기록한다. 권리 미확정 상태의 자동 수집은 실험에 포함하지 않는다. |
| E6. 표시·보관 계약 | 공급자별 개인 연구, 특징값 계산, 원문/수치 저장, 백업, 모델 입력, 타인 열람을 각각 확인한다. 공개 조회 성공·무료 호출·코드 MIT 라이선스를 데이터 이용허락으로 대체하면 실패다. |

**미해결 질문:** KIS의 실제 승인 계정에서 KRX 전일 확정 종가를 언제부터 받을 수 있는가? KRX 08시 조건의 현행 원문과 정정 정책은 무엇인가? 과거 원문·수급의 당시 버전은 어디까지 복원 가능한가? FRED/ALFRED 및 메모리 자료는 이 프로젝트의 ML·불변 스냅샷 용도를 어떤 조건에서 허용하는가? 공식 거래 캘린더·기업행사·미국 시장 가격의 허용된 공급자는 무엇인가? 각 답변이 확보되기 전 해당 자료는 조건부 후보로 유지한다.

## 5. 핵심 반론 세 가지

1. **“공식 API를 많이 붙이면 80%에 가까워진다.”** 권위·신선도는 데이터 품질이다. 방향 예측력은 별도 실증 문제다. 출처 추가가 정정 누수·선택 편향을 늘릴 수도 있다. 허용된 동일 시점 자료에서 기준선 대비 효과를 검증해야 한다.
2. **“지금 조회한 수정주가·최종 공시·거시 값으로 긴 백테스트를 만들면 된다.”** 최신 정정값, 미래 기업행사 반영, 공개 지연을 제거하지 않으면 당시 실행 불가능한 성적이다. 원문/개정별 시점 증거가 없으면 한계를 밝힌 과거 재생 연구로 구분한다.
3. **“무료 데이터이고 개인 연구이므로 저장·학습·공개도 된다.”** KRX 제3자 제공, FRED ML/저장, TrendForce 목적 제한은 서로 다르다. 사용 목적별 허락을 확보하거나 이용이 허용된 원자료로 대체해야 한다. 권리 확인만으로 예측 성능이 생기는 것도 아니다.

## 6. 수행 기록

- **변경:** 이 파일만 작성. 다른 작업자의 변경, 앱·DB·설정·STATE·GitHub는 수정하지 않았다. 반박 파일은 후속 지정 전 작성하지 않는다.
- **확인:** 연결 검색 도구로 공식 페이지·공식 KIS 저장소를 열어 확인했고, `urllib`로 공개 예제 본문을 대조했다. 별도 `agent-browser --session samsung-r1-api-20261110`에서 ECOS `StatisticSearch` 요청/응답 명세와 이용약관을 읽고 브라우저를 종료했다. KRX는 검색 도구에서 정적 설명·약관·이용방법 확인, 동적 명세 재확인 실패를 위에 분리했다.
- **검증 범위:** 문서 링크·내용 정합성 자체 점검. API 인증·가격/공시 실제 응답·07:40 가용성·08시 운영·성능 검증은 `NOT_RUN`. 연구 문서만 바꿔 타입 검사·앱 테스트·빌드는 실행하지 않는다. 외부 리뷰·교차토론은 이번 독립 1차 역할 범위에 포함하지 않았다.
- **검사 결과:** 로컬 링크 검사 35개 중 깨진 상대 링크 0개, 필수 조사 항목 존재 확인. `evolve docs ste-lint --strict docs/research/samsung-forecast-2026-11/01-data-api.md`는 종료코드 2: 프로젝트의 `docs/conventions/ste100-writing.md`가 없어 실행 실패. 문체 검사 통과로 표시하지 않으며 소유권 밖 표준 파일을 만들지 않았다. 주 책임자의 추가 조사·검사 중단 요청에 따라 검사 범위를 확장하지 않는다.
- **모델:** 현재 Codex 기본 모델·effort 상속. 제공자 반환 메타데이터로 실제 모델 신원을 확인하지 못해 `unverified`.
- **적용 스킬:** `gon-project-lifecycle`의 `/home/gon/.agents/skills/gon-project-lifecycle/SKILL.md`·`references/work-cycle.md`: 계약·권한·소유권과 실제/미검증 구분에 적용. `evolve-docs-write`의 `/home/gon/.codex/skills/evolve-docs-write/SKILL.md`: 출처·확인/추론·한계와 실험 제안에 적용. 부속 template 파일은 해당 설치 경로에 없어 읽지 못했다. 사용자 지정 소유권에 따라 별도 색인·리뷰 산출물은 만들지 않았다. `agent-browser`의 `/home/gon/.agents/skills/agent-browser/SKILL.md`와 `agent-browser skills get core`: 독립 브라우저 세션의 공개 문서 확인에 적용. `gon-web-engineering`은 구현·웹/API/DB 변경이 없는 문서 조사라 `not_applicable`.
- **인계:** 결과 저장 후 `herdr-core send t4r`로 R1 1차 결과를 보고하고 토론 후속 지시를 기다린다. 전체 연구 통합·기술 채택·운영 성공을 완료로 표시하지 않는다.
