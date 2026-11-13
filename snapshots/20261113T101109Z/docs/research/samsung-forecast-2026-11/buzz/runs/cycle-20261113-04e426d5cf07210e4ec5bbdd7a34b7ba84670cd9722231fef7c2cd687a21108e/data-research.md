# R1 데이터·API 현행 근거와 O1 범위 점검

**판정: PASS — 지정 공개 문서 조사·입력 검증 한정. 공급자·자료 채택은 NO_CHANGE.** 확인한 원문에서 2026-11-10 이후 채택 판단을 바꿀 명세·권리 변경 근거를 확보하지 못했다. O1의 SEC 표현을 좁히는 문구를 제안한다. 월간 전체 감사는 **PARTIAL**, 실제 방향80%는 **UNVERIFIED**다.

- run_id: `cycle-20261113-04e426d5cf07210e4ec5bbdd7a34b7ba84670cd9722231fef7c2cd687a21108e`; phase: `research`; role: `data`.
- 요청 event: `4f9fa07715d9e3ec90a0d86ac241439850d240f76904386b79250c5c6333c852`; 채널: `11c1ea3c-c9c1-49fa-ae2c-bced8d7616b5`.
- run root: `04e426d5cf07210e4ec5bbdd7a34b7ba84670cd9722231fef7c2cd687a21108e`.회신은 이번 `<context>`가 지정한 요청 event를 대상으로 한다. 운영계약·요청 본문의 root 지침과 다르지만 현재 수신의 명시 회신 대상을 우선한다. 채널과 run/phase 연결은 유지한다.
- [TEAM](../../TEAM.json)의 data 검증 pubkey `b5d2d6880bc73d3ad5b444c385e8ef3deca4af3b148b8cf7aabddcb6ee9c9775`, coordinator pubkey `4d8b5a7277f5ec6b4c5d303e490ca6463c3e7059a96398062444e4223ae8bfe3`가 대상·발신자와 일치한다. [운영계약](../../OPERATING-CONTRACT.md)을 다시 읽었다. 입력14개 SHA, manifest의 요청·역할·소유 출력·기한, STOP 없음·중복 없음과 호스트 `krdn-lenovo`를 확인했다.
- 원래 역할 프롬프트의 `api-data.md` 대신 이번 요청의 `data-research.md` 하나를 신규 작성한다. 기존 `feat/local-research-workbench`와 다른 작업자의 변경을 보존한다.

## 사실과 이번 출처

비교 기준은 [정본](../../../../samsung-direction-80-research-2026-11.md) §3·§6, [역사 API 조사](../../../01-data-api.md), [역사 반론](../../../01-data-rebuttal.md), [직전 조사](../cycle-20261110-319ad15f64bde8c638fa1f11b872ebc379ad5cdb8196090653385833ab88e09d/data-research.md), [직전 반론](../cycle-20261110-319ad15f64bde8c638fa1f11b872ebc379ad5cdb8196090653385833ab88e09d/data-rebuttal.md)이다. 아래 **공식 문서8개**를 이번에 직접 읽었다. 확인 구간은 **2026-11-13 09:36~09:38 UTC / 18:36~18:38 KST**다. 이는 도구 관찰 구간이며 최초 공개·개정 시각이나 실제 데이터 수신 로그가 아니다.

| ID·공식 URL | 발행·수정 표기 | 이번 확인 사실·근거 범위 | 미확인 |
|---|---|---|---|
| S1 [SEC EDGAR 접근 안내](https://www.sec.gov/search-filings/edgar-search-assistance/accessing-edgar-data) | 게시2021-03-23, 최종검토/갱신2024-06-26 | `Post-acceptance corrections and deletions`: 당일 처리 정정은 그날 저녁 인덱스에 반영. 후일 **삭제**는 이전 daily/feed/oldload에 미반영. full/quarterly는 토요일 이른 시각 재구축해 PAC 삭제·갱신 반영 | 후일 정정 일반의 이전 daily 반영 방식, 특정 공시의 실제 삭제·변경·과거본·첨부물 이용권은 별도 미검증 |
| S2 [KIS 기간별 일봉 공식 예제](https://raw.githubusercontent.com/koreainvestment/open-trading-api/main/examples_llm/domestic_stock/inquire_daily_itemchartprice/inquire_daily_itemchartprice.py) | 코드 `Created on 20250101`; 마지막 개정일 미확인 | `/inquire-daily-itemchartprice`, 호출당 최대100건, `J=KRX/NX=NXT/UN=통합`, `FID_ORG_ADJ_PRC`의 `0=수정주가/1=원주가` | 이동하는 main의 현재 본문 확인. 실제 공급·세션 종가·이력 완전성·당시 조정 vintage·보관/ML 권리·변경일은 미검증 |
| S3 [KIS 최근 일자별 공식 예제](https://raw.githubusercontent.com/koreainvestment/open-trading-api/main/examples_llm/domestic_stock/inquire_daily_price/inquire_daily_price.py) | 코드 `Created on 20250601`; 마지막 개정일 미확인 | `/inquire-daily-price`, 일봉 최근30거래일, 같은 필드가 `0=수정주가 미반영/1=반영`. 권리 발생 시 과거 가격을 현재 가격에 맞게 보정한다는 설명 | 오늘의 조정계열이 과거 당시 존재했다는 증거가 아님. S2와 옵션을 공통 변환할 수 없음. 실호출·권리·공급 보장 미확인 |
| S4 [DART 공시검색 명세](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS001&apiId=2019001) | 명세 발행·개정일 미표시 | GET `list.json`, `last_reprt_at=N`은 정정 포함 전체 제출 보고서 검색. `rcept_dt=YYYYMMDD`, 접수번호14자리. 보고서명에 기재/첨부 정정·추가 구분, `rm`에 후속 정정·철회 안내 | 요청표에 과거 as-of 시각 인자는 확인되지 않음. 정정 포함 검색이 당시 목록/본문 복원·정확한 공개시각·권리를 보장하지 않음 |
| S5 [KRX 국문 약관](https://openapi.krx.co.kr/contents/OPP/INFO/OPPINFO002.jsp) | 시행2025-12-26; 조항별 개정일 미확인 | 제5조24시간 이용 원칙·예외, 제6조 비상업 목적, 제8조 키당 하루10,000회 이하, 제10조 출처, 제11조 제3자 제공·계약 종료 후 이용 제한 |24시간 서비스는 기준일 가격의07:40 공급 보장이 아님. 보관/백업/ML·파생값·개별 허락과 현행08시 조건은 미확인 |
| S6 [ECOS 개발 명세](https://ecos.bok.or.kr/api/#/DevGuide/DevSpeciflcation) | 발행·개정일 미표시 | 독립 브라우저에서 ‘통계 조회 조건 설정’의 `StatisticSearch` 요청·응답 확인. 기간·주기·통계/항목코드 요청, `TIME/DATA_VALUE/UNIT_NAME/WGT` 응답. 이 요청표에 vintage 선택 인자 없음 | 모든 ECOS 기능에 과거본이 없다는 결론은 아님. 계열별 발표·개정 시각, 최초본·이력·원작성기관 조건은 미확인 |
| S7 [삼성 IR 면책](https://www.samsung.com/global/ir/ir-resources/legal-disclaimer/) | 발행·개정일 미표시 | 일반 정보 목적·증권 매매 판단의 충분성 부인·미래 진술의 가정/불확실성 설명 | 이 면책 본문에서 자동 수집·영구 보관·ML의 명시 허락을 확인하지 못함. 삼성 전체 약관·개별 IR 권리의 최종 법적 판정은 아님 |
| S8 [ECOS 공개 이용약관](https://ecos.bok.or.kr/api/#/) | 안내2014-11-07과 부칙2020-11-05 병존; 조항별 개정일 미확인 | 같은 사이트 하단 ‘경제통계 OPEN API 이용약관’을 열어 확인. 제5조 상업 이용 원칙 및 제한 통계의 작성기관 승인 조건, 제7조 이용지침·출처 표시, 제9조 지속 공급 비보장 | 개별 계열의 제한·통계정보 이용지침 전문·용도별 보관/ML 적격을 이번 확인으로 완료하지 않음 |

기존 보고와 이번 재확인은 분리한다. 날짜·문구가 같다는 사실로 모든 중간 개정이 없었다고 단정하지 않는다. KIS의 코드 작성 표기도 API 개정일이 아니다. 원문 전문·PDF·가격 자료는 별도로 저장하지 않고 링크·메타데이터·짧은 요약만 기록했다.

## O1 판정과 수정 제안

**O1 타당(경미한 범위 과장): 원문은 이전 daily/feed/oldload 미반영을 후일 ‘삭제’에 한정해 명시하므로, 정본 L159의 ‘후일 정정·삭제’를 이 규칙으로 함께 읽지 않도록 당일 정정·후일 삭제·주간 PAC 반영으로 나눌 것을 권고한다.** PIT·복원·권리 분리 결론은 유지한다.

**이전 근거 → 이번 공식 근거:** [직전 외부검토 O1](../cycle-20261110-319ad15f64bde8c638fa1f11b872ebc379ad5cdb8196090653385833ab88e09d/review-verdict-1.json)은 SEC 원문을 직접 재확인하지 않고 R1 보고보다 표현이 넓다고 관찰했다. 이번 S1은 당일 정정, 후일 삭제, 주간 PAC 반영을 실제로 구분한다. 새 서비스 변경 발견은 아니며 기존 문장의 근거 범위를 좁히는 확인이다.

**설계 영향·추론:** 이전 daily 하나나 현재 full/quarterly 하나로 당시 공개 상태 전체를 인증할 수 없다는 판단은 그대로다. 역사 입력 적격·현재 상태·당시 내용 복원·현재 용도권리를 따로 확인해야 한다. 특정 삼성 관련 미국 공시의 실제 삭제, 모든 과거본 복원 불가, 정정 자료의 보관 허락은 이번에도 입증하지 않았다.

**제안 수정문(정본의 해당 첫 문장만 대체):**

> SEC는 당일 처리한 정정을 당일 저녁 인덱스에 반영하고, 후일 삭제는 이전 daily/feed/oldload에 반영하지 않는다고 안내한다. full/quarterly 인덱스는 토요일 이른 시각 재구축해 PAC 삭제·갱신을 반영한다.

이는 총괄의 후보·검토 단계에 전달할 제안이다. 해당 상세가 이미 정확하게 반영된 후보라면 중복 추가는 NO_CHANGE다. 직전의 포괄 표현을 유지하는 안은 원문보다 넓게 읽힐 수 있어 기각한다. 후일 정정 일반이 이전 daily에 어떻게 처리되는지는 이 근거만으로 확정하지 않는다.

## 채택·권리·시각의 유지와 잔여

| 대상 | 이번 판단·영향 | 월간 감사 잔여 |
|---|---|---|
| KRX | 약관 핵심 제한은 직전 보고와 일치해 NO_CHANGE. 개방 시간과 데이터 공개시각을 분리 | 기존08시 조건의 현행 원문, 실제 가격 공급·정정·조정·공식 캘린더/기업행사, 용도별 권리 |
| KIS | S2/S3의 반대0/1 의미와 KRX/NXT/통합 구분 재확인. endpoint별 계약 유지 | 승인된 동일 KRX 정규장 확정가·장기 구간 완전성·수급 확정/정정·07:40 실수신·보관/ML 허락. 공식 예제의 공개를 시세 데이터 이용권으로 쓰지 않음 |
| DART | 접수일과 시각, 정정 포함 검색과 당시 원문 복원을 분리. 명세 채택 NO_CHANGE | 당시 목록·원문과 정정 연결의 완전성, 정확한 공개/공급/실수신시각, 첨부물별 용도권리. 오늘의 정정/철회 표시를 과거 마감 입력에 소급하지 않음 |
| ECOS | 이번 StatisticSearch 범위에는 vintage 선택 없음. 약관의 조건부 상업 이용 유지 | 계열별 최초 공표본·개정본·공표/수신시각·작성기관 승인/이용지침과 보관/ML 적격 |
| SEC·삼성 IR | SEC 문구만 정밀화 제안. 면책 확인으로 자료 채택·저장/ML 허락을 승격하지 않음 | 개별 문서의 당시 바이트·시각·정정 계보·허용 보관/모델 이용 범위 |
| FRED/ALFRED·TrendForce·뉴스/HUB·미국 가격 | 이번 신규 원문 확인 대상에 포함하지 않음. [역사 조사](../../../01-data-api.md)의 권리/목적 제한·채택 보류를 해소로 간주하지 않음 | 현행 개별 허락·합법적 대체 자료와 각 출처의 신선도. 과거 보고를 이번 재확인으로 세지 않음 |

**07:40 실수신 조건의 판단:** S2~S6은 현재 문서일 뿐 실제 수신 증거가 아니다. 기존 정본 §6대로 검증된 공급 가능시각과 실제 최초 수신시각 중 늦은 값이07:40 이하이고, 해당 버전·시장/세션·기준일·내용 및 허용 용도와 연결돼야 한다. 같은 날07:35 공개·07:42 수신이면 그날 실운영 입력은 부적격이라는 설명 예시는 유지한다. 이는 이번 실측 사건이 아니다. 동결 입력의 계산만07:55까지 허용하고 후속 원문·가격·정정을 끼워 넣지 않는다. 공개 마감08:00도 유지한다.

**반론 세 가지:** 공개·무료·상업 이용 원칙은 모든 보관/ML 용도의 허락이 아니다. 현재 검색 가능한 정정 포함 목록은 완전한 과거 시점 아카이브가 아니다. 문서8개를 재확인한 것은 전체 감사 완료·실제07:40 공급·80% 성능 향상의 증거가 아니다.

시점/권리가 미확인인 특징은 역사 입력 적격에서 제외하되 예정일·동결 예측을 보존한다. 입력이 적격인 M2와 사전등록된 발동 규칙이 있을 때만 fallback을 적용한다. 없으면 보류/누락을 남기며, 미확인 특징을 ‘새 사건 없음’0 또는 실제 방향 미확정 U로 바꾸지 않는다. 새 임계값·모델·자동 출처 우선순위·실험을 확정하지 않는다.

## 검증과 인계

이번 완료 범위는6개 공급자에 관한 위8개 문서의 현행 본문·O1 근거 범위 대조다. 공급자별 실제 PIT 복원·보관/ML 권리·07:40 실수신과 나머지 출처 전체 신선도는 미완료여서 월간 감사 PARTIAL이다. [직전 산업 답변](../cycle-20261110-319ad15f64bde8c638fa1f11b872ebc379ad5cdb8196090653385833ab88e09d/industry-answer.md)의 사건별 만료·정정 우선순위·fallback 실등록도 이번 공개 문서 확인으로 완료되지 않는다.

A_all·조건부 적중률·보합/보류/누락/미평가·정시 동결 방향만의U·T+5·공식 평가 정정과 당시 재학습 입력 분리·거래 캘린더·M3 오염/lockbox·동일 날짜 비교를 보존한다. 학습·백테스트·실제 오류율/검정력·새 실험·데이터 인증/유료호출은 NOT_RUN이다. 방향80%는 UNVERIFIED다.

ECOS는 일반 웹 추출에 본문이 없어 `agent-browser` 독립 세션으로 확인했다. 첫 시작의 읽기 전용 소켓 오류는 doctor 확인 뒤 정상 승인 경로로1회 재시도해 해소했고 조사 뒤 브라우저를 종료했다. 로그인·키·관리 JSON·다른 프로세스 환경에 접근하지 않았다. 기존 KRX 동적 명세 실패나 인증 실패를 반복 재현하지 않았다.

입력14개 저장 전 재해시·소유 경로·STOP/중복/기한을 확인했다. 저장 후 같은 입력 재해시·상대 링크·필수 항목·파일 SHA256을 확인해 회신한다. `docs/conventions/ste100-writing.md` 부재를 재확인해 ste-lint는 NOT_RUN이며 같은 실패 명령을 재실행하지 않았다. 문서 자체 검토와 링크 검사는 외부검토나 실제 기능 성공을 대신하지 않는다. 후보·외부검토·정본 변경은 총괄 후속 단계다.

적용 스킬은 `buzz-cli`, `evolve-docs-write`, `agent-browser`다. 현재 파일 소유권 지침에 따라 별도 색인·리뷰·커밋을 추가하지 않는다. 이번 변경은 지정 연구 파일 하나이며 앱·DB·공유 스키마·설정·과거 예측·TEAM·운영계약·manifest·타 역할·GitHub는 변경하지 않았다. 제공자 반환 모델·effort는 미검증이다.

저장 전 입력 재확인 시각: 2026-11-13T09:41:27.515754+00:00; 14/14 일치.

| 동결 입력 절대경로 | SHA256 |
|---|---|
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-direction-80-research-2026-11.md` | `da3dad78a4f3b4fd385973d8b4a856b1841c8d8d45af9a9602b1c47c04d83083` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/buzz/TEAM.json` | `777f5a312f3b83316391106f788a190e2981f060af5aadb7442d3df30be9f8ab` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/buzz/OPERATING-CONTRACT.md` | `02a8c642d771195d24eb581e0f8b5a76177552d4ae6eaea3c6c705b3a18e9142` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/00-brief.md` | `bfec7a41068626b3eafecee7f67a574b3dd044a4a608d73179c4b27374f134e0` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/04-lead-evidence.md` | `2f99cd8012cf799dccec60ad3f65ccf0389728cf49e2a68929ea3c4b3a40ff41` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/06-discussion-record.md` | `f53eb0445347e8f4b8fabe61c440ddeddd55f581556e0edfdeab4e7aeeac3dbc` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/04-calculation-examples.json` | `5befdfa4a38f6648e832cbd9bb5deba633c22f256241a0034a69a7bfe75294ca` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/buzz/runs/cycle-20261110-319ad15f64bde8c638fa1f11b872ebc379ad5cdb8196090653385833ab88e09d/industry-answer.md` | `973d77d6dc9daada274ca66a29e4c444a2b2a99cfd858a443a18aa8e0bdd7467` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/buzz/runs/cycle-20261110-319ad15f64bde8c638fa1f11b872ebc379ad5cdb8196090653385833ab88e09d/review-verdict-1.json` | `dd7decabf22795b40552ce5b524345a4944ccdd4581a158fa02013b73f57ffc1` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/01-data-api.md` | `f9b7b93c0b5853ecec68abf5cf4408d5b98d91b95e3628ccfb4b7b34c5b2f189` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/01-data-rebuttal.md` | `2798598c4c2fcc73903ec4483adde16e779e13aac5103f2a50f322f3f95ed532` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/buzz/prompts/data.md` | `1a98ca28da3b7363689f40faa986107bf4f4932252f0625fe7cd5981613e4d6e` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/buzz/runs/cycle-20261110-319ad15f64bde8c638fa1f11b872ebc379ad5cdb8196090653385833ab88e09d/data-research.md` | `293405b5ef1b6ac718c4cf13757419deb2eaac947358b808338cc5bc74a26530` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/buzz/runs/cycle-20261110-319ad15f64bde8c638fa1f11b872ebc379ad5cdb8196090653385833ab88e09d/data-rebuttal.md` | `7efef30a9b19141ad0039619de08a6ec9652604580e31db81ade95028d5979a0` |
