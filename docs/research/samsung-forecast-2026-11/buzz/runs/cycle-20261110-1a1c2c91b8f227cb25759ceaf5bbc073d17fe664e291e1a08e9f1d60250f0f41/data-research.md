# R1 데이터·API 독립 재점검

판정: **BLOCKED — DART 검색 명세의 현행 본문 확인 미완료**. 읽은 7개 공식 원문에서는 기존 채택·기각을 바꿀 근거를 찾지 못했다. 전체 출처가 최신이라는 판정이나 예측 성능 검증은 아니다. 방향80%는 미검증 목표다.

- run_id: `cycle-20261110-1a1c2c91b8f227cb25759ceaf5bbc073d17fe664e291e1a08e9f1d60250f0f41`
- phase: `research`; role: `data`; 요청: `22023f2cd6933176372dae2553501264e7a0b6f67ab3b74bf932ada3b704ef63`
- 채널: `11c1ea3c-c9c1-49fa-ae2c-bced8d7616b5`; 고정 root: `1a1c2c91b8f227cb25759ceaf5bbc073d17fe664e291e1a08e9f1d60250f0f41`
- 명령 cwd: `/home/gon/dev/test/test-samjeonnix`; 기존 브랜치 `feat/local-research-workbench` 사용. 새 작업자 생성 없음.
- 시작 및 저장 직전 요청 입력10개 SHA256 일치, STOP 없음. TEAM의 data `b5d2d6880bc73d3ad5b444c385e8ef3deca4af3b148b8cf7aabddcb6ee9c9775`, coordinator `4d8b5a7277f5ec6b4c5d303e490ca6463c3e7059a96398062444e4223ae8bfe3`가 수신 대상·발신자와 일치한다. manifest의 같은 run/phase·출력 경로·요청 event도 대조했다.
- TEAM SHA: `777f5a312f3b83316391106f788a190e2981f060af5aadb7442d3df30be9f8ab`; 계약 SHA: `4c62ea31fed9fb2ec4c0bd94fc45095876dc1bd024f9f8eba3c3ca9575df33d0`.

## 사실과 출처 신선도

요청 질문은 “공급 시각·정정/vintage·원문 보관 및 모델 입력 이용권에 실제 변경 근거가 있는가”이다. 이전 근거는 [R1 조사](../../../01-data-api.md), [R1 토론](../../../01-data-rebuttal.md), 기준 연구의 §3·§6이다. 아래 URL8개만 시도했다. 원문 전체·가격 데이터는 저장하지 않고 링크·메타데이터·요약만 기록했다. 변경일을 확인하지 못한 자료는 오늘 확인했다는 이유로 오늘 개정된 것으로 쓰지 않는다.

| ID·공식 원문 | 발행·수정일 | 이번 확인 사실·범위 | 미확인·결정 영향 |
|---|---|---|---|
| S1 [KIS 기간별 일봉](https://raw.githubusercontent.com/koreainvestment/open-trading-api/main/examples_llm/domestic_stock/inquire_daily_itemchartprice/inquire_daily_itemchartprice.py) | 파일 머리말 생성 2025-01-01; 현행 수정일 불명 | `inquire-daily-itemchartprice`, TR `FHKST03010100`; `0` 수정주가·`1` 원주가, 호출당 최대100건, `J=KRX/NX=NXT/UN=통합` 확인 | 장기 이력 완전성·07:40 공급 보장·배당 처리·데이터 이용권은 예제 코드로 증명되지 않음. 기존 조건부 후보 유지 |
| S2 [KIS 최근 일자별](https://raw.githubusercontent.com/koreainvestment/open-trading-api/main/examples_llm/domestic_stock/inquire_daily_price/inquire_daily_price.py) | 파일 머리말 생성 2025-06-01; 현행 수정일 불명 | `inquire-daily-price`, TR `FHKST01010400`; `0` 수정 미반영·`1` 반영, D는 최근30거래일. 현재 주가에 맞춘 과거 보정 설명 확인 | S1과 같은 옵션값으로 공통 변환하는 안은 계속 기각. 오늘 보정계열이 과거에도 존재했다는 증거 아님 |
| S3 [DART 공시검색](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS001&apiId=2019001) | 불명 | 최초 열기와 허용된 일시 실패 재시도1회 모두 timeout | 현행 `rcept_dt`·`last_reprt_at` 명세 재확인 실패. 기존 기록의 YYYYMMDD·N/Y 의미를 새로운 원문 확인으로 승격하지 않음 |
| S4 [KRX 유가증권 일별매매정보](https://openapi.krx.co.kr/contents/OPP/USES/service/OPPUSES002_S2.cmd?BO_ID=JvJFzlAENzZlPBDNGAWC) | 등록 2020-09-22; 표시 최근 수정 2026-01-16 | 2010-01-04부터 제공, AUTH_KEY 안내를 읽음. 출력 표와 샘플 URL은 비어 있음 | 이번 추출 범위에는 08시 조건·조정주가 정의·정정 정책이 없음. 08시 조건 폐지나 07:40 공급 가능을 추론하지 않음. 후행 대조 후보 유지 |
| S5 [ECOS 개발 명세](https://ecos.bok.or.kr/api/#/DevGuide/DevSpeciflcation) | 명세 발행·수정일 불명 | 브라우저의 통계 조회 조건 설정에서 `StatisticSearch` 요청표 확인. 기간·주기·항목코드1~4, 출력 `TIME/DATA_VALUE/UNIT_NAME` 확인. 확인한 요청표에 vintage 선택 인자가 없음 | ECOS 전체에 과거본이 전혀 없다는 주장 아님. 계열별 공표·개정 시각·최초본 복원은 여전히 미확인. 최신값 과거 소급 기각 유지 |
| S6 [FRED 통합 약관](https://fred.stlouisfed.org/legal/terms/) | 해당 API 조항 개정일 불명 | API 금지(k)에 AI·ML 개발/학습 관련 이용, (l)에 저장·캐시·아카이브 관련 제한이 현재 본문에 있음 | 날짜 단위 vintage의 기술적 존재가 권리를 해결하지 않음. ALFRED 별도 API 명세는 이번8개 범위에서 재열지 않음. 허락 없는 학습·불변 스냅샷 채택 보류 유지 |
| S7 [TrendForce 약관](https://www.trendforce.com/about/terms) | 해당 조항 개정일 불명 | §3 개인·비상업 제한, §5(h) 미래 사건 기반 투기 활동 등에 대한 목적 제한, §6 복제·파생물·수집 도구 관련 제한 확인 | 본 연구에 대한 구체적 허락·별도 계약은 미확인. 가격 공개 화면 또는 결제가 모델 입력·파생값 보관권을 부여한다는 추론 기각 유지 |
| S8 [DART 원문 파일](https://opendart.fss.or.kr/guide/detail.do?apiGrpCd=DS001&apiId=2019003) | 발행·수정일 불명 | GET `api/document.xml`, 40자리 키·14자리 `rcept_no`, ZIP 응답 명세 확인 | 인증 호출·특정 최초/정정 원문·실제 공개시각·첨부물 권리는 미검증. 접수번호별 조회 명세가 과거본 완전성을 증명하지 않음 |

## 추론·제안과 수정문

**추론:** 기존 연구와 같은 날 재확인한 S1·S2·S4~S8은 기존 보수적 계약을 지지한다. 변경 이력·개정일을 확보하지 못한 자료가 있어 “공급자 전체 변경 없음”이나 “모든 권리 감사 완료”라고 결론 내릴 수 없다. S3 미확인 때문에 이번 전체 현행 명세 감사는 BLOCKED다. canonical 내용 변경 권고는 없다.

**제안:** 기존 기준 연구의 다음 문장을 유지한다. 이는 새 기능이나 새 실험 결과가 아니다.

> 원자료의 공개·가용 시각과 실제 수신이 모두07:40:00 KST 이내인 입력만 동결한다.07:55:00까지는 그 입력의 파싱·계산만 허용하며 추가 원문·가격·정정을 외부에서 보충하지 않는다. 변환 코드·모델 버전과 실패 상태를 보존한다. 사후 정정은 새 개정으로 연결하고 기존 입력·예측을 덮어쓰지 않는다.

S1·S2의 endpoint별 옵션 분리, KRX 정규장 평가와 NX/UN 혼합 금지, DART 최초/정정 접수번호 연결, ECOS 최신값 소급 금지, FRED·TrendForce 보류도 유지한다. DART 접수일을 시각으로 간주하지 않는 기존 제약은 안전을 위해 보존하되, 이번에 S3 본문을 새로 검증했다고 쓰지 않는다.

## 반론·실패 조건·미해결

1. **“접수번호·vintage가 있으면 PIT가 해결된다.”** 버전 식별과07:40 이전 실제 가용·수신은 별개다. 과거 원문·시각을 복원하지 못하면 역사 입력 적격성이 없다. 당시 복원이 불가능한 자료는 권리 확인 후 전향 관찰 후보로만 남긴다.
2. **“공식 코드가 있으니 무료 수집·ML 이용도 승인됐다.”** 예제의 코드 이용과 원천 데이터 저장·모델 입력·사건 추출·파생값 보관·재표시는 별도 확인 대상이다. S6·S7의 제한을 해결한 허락은 발견하지 못했다.
3. **“접속 실패가 있었으니 공급자가 바뀌었거나 API가 폐지됐다.”** timeout·빈 추출은 관찰 경로의 한계다. 실제 서비스 폐지·신규 공급시각의 근거가 아니다. KRX08시 조건도 현행 폐지·유지 모두 이번 페이지로 확정하지 않는다.

07:40 미수신, 시각/시간대 불명, 정정 전후 복원 불가, KRX/NXT 세션 불일치, 저장·ML 이용권 미확정은 기존 채택 실패 조건으로 유지한다. 처리 실패를 마감 연장으로 감추지 않고08:00 보류·지연을 원장에 남긴다. A_all·조건부 적중률·보합·보류·미평가 정책은 바꾸지 않는다.

월 첫 실행 감사의 남은 항목은 S3 현행 본문, KRX 공급/정정 조건과 가격 정의, 공급자별 실제 수신·권리, ECOS 계열별 최초본 복원이다. SEC·삼성IR·뉴스 및 전체 공식 문서 집합은 이번 핵심8개 범위 밖이며 새로 감사하지 않았다. 동일한 인증 실패를 재현하지 않았고 키·관리 JSON·다른 프로세스 환경도 읽지 않았다.

## 수행·검증 범위

- 사실 확인7개, 실패1개. S3는 timeout 뒤1회만 재시도하고 중단했다. 인증 API 실호출·예측·학습·공급시각 실측은 NOT_RUN이다.
- ECOS 웹 추출은 본문0행이었다. 독립 `agent-browser` 세션이 socket 쓰기 제한으로 시작 실패해 로컬 doctor 확인 후 승인된 동일 실행을1회 재시도했다. StatisticSearch 메뉴의 지연 렌더링 뒤 요청·응답표를 읽고 세션을 종료했다. UI 시각 품질 검증은 작업 범위가 아니다.
- 이번 작성은 이 파일 하나다. 기존 연구·canonical·manifest·TEAM·STOP·STATE·앱·DB·설정·GitHub는 수정하지 않는다. 다른 역할 파일을 읽거나 변경하지 않았다.
- 문서 자체 점검은 입력10개 해시·STOP·상대 링크·필수 항목으로 한정한다. 타입 검사·앱 테스트·빌드는 문서 연구와 무관하여 NOT_RUN이다. 전용 문체 lint·독립 외부검토는 이번 역할 단계에서 실행하지 않았으며 통과로 표시하지 않는다. 통합 후보의 문서검사·외부검토는 총괄 후속 단계다.
- 적용 지침: `buzz-cli`의 결과 회신, `evolve-docs-write`의 출처·사실/추론/제안 구분, `agent-browser`의 독립 세션·관찰 후 조작. 지정 파일 경계를 우선해 별도 색인·검사 산출물은 만들지 않았다.
- 실제 제공자 반환 모델·effort는 미검증이다. 문서 존재·동료 동의는 방향80%의 실증 근거가 아니다.

확인 시간대: Asia/Seoul(KST, UTC+09:00). 웹 확인은 이번 요청 수신 2026-11-10 13:03:08 이후부터 아래 작성 시각 사이에 수행했다. 개별 초 단위 접속 시각은 도구가 반환하지 않아 별도 보장하지 않는다.
작성 시각: 2026-11-10T13:06:30.306965+09:00
