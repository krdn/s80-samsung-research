# R2 원문 신선도·사건 규칙 통계 명세 감사

**판정: NO_CHANGE — 모델·검정법·수치 임계값과 현행 연구 계약.** 이번에는 기존 잔여 문헌의 관련 절과 검정 적용의 추가 근거를 확인했다. 문서 감사 범위는 PASS이며, 실제 등록·검정 적격성·성능의 통과가 아니다. 월간 전체 감사는 **PARTIAL**, 새 실험은 **NOT_RUN**, 삼성전자005930 방향80%는 **UNVERIFIED**다.

- run_id: `cycle-20261113-04e426d5cf07210e4ec5bbdd7a34b7ba84670cd9722231fef7c2cd687a21108e`; phase: `research`; role: `quant`.
- 요청 event: `f1bc8fbfdec266d4be046fcaf0bab80041a1d510b708b108d50cf2898cc1de99`; 채널: `11c1ea3c-c9c1-49fa-ae2c-bced8d7616b5`.
- TEAM·운영계약을 재독했다. 현재 호스트는 `krdn-lenovo`, CLI 자기 프로필과 TEAM의 quant 공개키는 `699ae7aed2d0b586228e7e293a0bb28c17f8009a46fcb8762d814743cab4c915`로 일치했다. 발신 공개키는 TEAM coordinator와 일치한다.
- 요청·manifest의 역할/단계/출력·입력14개 SHA256을 대조했다. 모두 일치하며 STOP·동일 phase 산출물이 없었다. 현재 요청이 지정한 `quant-research.md` 하나를 소유한다.
- 회신은 요청·운영계약이 명시한 run root `04e426d5cf07210e4ec5bbdd7a34b7ba84670cd9722231fef7c2cd687a21108e`를 사용한다. 최신 수신 event 대신 이 root를 사용하는 이유는 run 연결의 명시 지시다.

## 직전 검토 O2·O3 판정

**O2: 의미 오류가 아니다.** [기준 문서](../../../../samsung-direction-80-research-2026-11.md) L190·195·197은 등록 항목, 한계, 내부 선택에 같은 고정열/전체 절차 구분을 반복한다. 서로 충돌하지 않으며, 반복 축약을 방법론 변경으로 취급하지 않는다.

**O3: 문맥상 의미 오류는 없으나 단독 문장은 모호하다.** 같은 문서 L159의 ‘자체 입력’은 L165와 [직전 산업 답변](../cycle-20261110-319ad15f64bde8c638fa1f11b872ebc379ad5cdb8196090653385833ab88e09d/industry-answer.md) L25에 비추어 M2 자체 입력을 뜻하고, 사전등록 대상은 fallback 적용 규칙을 포함한다. 필요한 경우의 편집안은 ‘M2 자체 입력이 적격이고, fallback 발동·적용 규칙이 시험 전에 등록된 경우에만 M2를 적용한다’다. 이는 명료화 제안이며 새 정책·현재 등록 완료의 주장이 아니다. 이 파일에서 정본은 수정하지 않았다.

## 사실·추론·제안

**F1 — 새로 읽은 기존 원논문의 적용 범위:** Giacomini·White(2006)는 모델뿐 아니라 추정법·추정창을 포함한 예측 방법을 비교한다. §3.1은 방향 손실을 열거하며, §6은 내부 모형 선택을 수행하는 방법도 예시로 평가한다. 유한한 최대 추정창, 혼합·모멘트·양의 정부호 분산 등의 조건이 있고, 통상적인 expanding 추정은 제시된 기본 틀에서 제외된다[S1]. 과거 논문의 추가 대조이며 2026-11-10 이후 새 발표가 아니다.

**추론:** 손실의 불연속성이나 내부 선택만으로 모든 예측 비교 검정이 불가능하다고 결론 낼 수 없다. 반대로 이 논문을 현재 M2/M3의 자동 적용 근거로 삼을 수도 없다. 사건 추출·상태 유지/만료·LLM 버전·fallback까지 포함한 실제 정보 범위와 추정법이 가정에 대응하는지 남아 있다. rolling이라는 이름만 확인해서는 부족하다. 이 결과는 [직전 R2의 검정별 가정 대응 요구](../cycle-20261110-319ad15f64bde8c638fa1f11b872ebc379ad5cdb8196090653385833ab88e09d/quant-research.md)를 지지하며 반증하지 않는다.

**제안 D1:** S1을 후속 적용 가능성 검토의 근거로만 보관한다. 검정 교체·가족 보정 대체·단측 전환은 채택하지 않는다. 상대 예측력의 조건부 귀무가설은 절대 A_all≥80%, 현재의 양측95% percentile 구간, 다수 후보 탐색 통제와 같지 않다. 적격성·유한표본 점검이 없으면 통계적 승격을 보류한다. 새 표나 수치 문턱을 정본에 추가할 필요는 없다.

**F2 — 남은 문헌 대조:** Guo의 temperature scaling은 argmax 예측을 보존하며, SelectiveNet은 선택 영역의 위험과 coverage를 구분한다[S2·S3]. Gibbs·Candès의 결과는 예측집합과 국소 regret/포함률이며, 장기 포함률 보장에는 설정별 조건이 있다[S4]. PBO/CSCV는 여러 시도의 선택 과적합을 진단하고 강한 자기상관 등 구현 한계도 명시한다[S5]. Glasserman·Lin은 과거 뉴스와 LLM 학습 기간의 중첩 및 기업 지식의 방해 효과를 분리한다[S6].

**추론·결정 D2:** 보정·선택·conformal·PBO·익명화 중 어느 하나도 현재 삼성전자 전체 예정일 방향80%의 근거를 대신하지 않는다. 익명화가 현재 폐쇄 모델의 미래 지식 제거를 인증한다는 해석도 채택하지 않는다. 현재 모델 순서·오염 통제·미사용 시험을 유지한다. 기존 판단을 바꿀 반대 근거는 이번 읽은 범위에서 확보하지 못했다.

## 사건 만료·정정·fallback의 실제 등록에 남은 것

아래는 기존 §6의 네 등록 항목을 채울 때 확인할 내용이다. 새 운영 규칙을 확정한 표가 아니다. 사건의 산업적 단계·출처 충돌 판단은 R3의 증거가 필요하며, 통계 논문에서 만료 일수나 공식 출처 우선순위를 도출하지 않는다.

| 기존 항목 안의 대상 | 등록에서 확인할 내용·현재 한계 |
|---|---|
| 사건 유지·만료 | 동일 사건·revision·새 단계의 구분, 언제부터 사용하고 무엇으로 종료하는지, 재인용/수신만으로 재발동하지 않는 처리를 재현 가능하게 연결한다. 숫자 만료 기간·발동 상세의 실등록 근거는 이번 입력에서 미확인이다 |
| 정정·충돌 | 전후 버전·내용·당시 가용시각과 해당 속성을 연결하고, 충돌/시각 불명 때 사용할 수 있는 범위와 보류 처리를 고정한다. 후일 평가 정정과 과거 재학습 입력을 분리한다. 새 출처 순위·정정 중요도 문턱은 확정하지 않는다 |
| M2 fallback | M3 입력/처리 실패의 발동 조건, M2 자체 자료·시각·권리 적격, 반환할 예측·확률·보류 상태와 횟수 집계를 시험 전에 고정한다. 전체 예정일에서 평가할 M3 절차에 포함하고 사건 부분 진단을 별도로 읽는다. M2도 부적격이면 임의 대체하지 않는다 |
| 재학습·내부 선택 | 추출 버전·연결/만료/충돌/fallback 규칙을 개발 성적으로 선택했는지와 탐색 가족을 남긴다. 실제 손실·추정창·검정 정리의 대응을 기록한다. 시험 성적을 본 사람의 규칙 변경은 새 후보이며 최종창을 재사용하지 않는다 |

**예시(새 실험 아님):** 산업 자료를 읽지 못한 날짜는 ‘새 사건 없음’이 아니다. 미리 등록된 적격 M2 fallback을 적용한 결과도 전체 M3 절차의 결과로 남긴다. 그 날짜를 삭제하거나, 나중 방향을 보고 M2/M3 중 맞은 쪽을 고르면 검증 무효다. fallback의 제공률 기여와 사건 자체의 추가 가치는 별도 판단한다.

**핵심 반론:** ① 방향 손실을 다룬 논문이 있어도 A_all의 보합·보류·누락·평가불가까지 동일하게 검증된 것은 아니다. ② 날짜가 많아도 희소한 장기 사건의 독립 표본이 늘지는 않는다. ③ 원칙 문장·검정 이름·문서 PASS는 실제 등록/실행의 증거가 아니다. 따라서 실제 가정·표본이 부족하면 통계 보류, 관측 목표 미달이면 미달, 미실행이면 NOT_RUN을 유지한다.

## 원문·신선도와 감사 범위

이번 핵심 대상은 8개다. 6개는 아래 관련 본문을 직접 확인했고, 1개는 원문 검색 색인만 확인했으며, 1개는 접근 차단이다. 논문 전체·재현코드·원데이터를 실행하지 않았다. 조회 구간은 2026-11-13T09:36~09:38 UTC다. 정정·후속 논문의 전부 부재를 확인한 것이 아니다. 날짜 제한 검색도 새 채택을 정당화할 직접 원문을 제공하지 못했으며, 검색 미발견을 부재 증명으로 사용하지 않는다.

| ID·발행/개정 | URL·직접 확인 범위 | 적용 한계·미확인 |
|---|---|---|
| S1 Giacomini·White, 2006-11, Econometrica 74:1545–1578 | [원논문 사본](https://economia.uc3m.es/jgonzalo/teaching/PhdTimeSeries/GiacominiWhite.pdf), §2~3·Theorem1·§6; [출판사 서지](https://doi.org/10.1111/j.1468-0262.2006.00718.x) | 미국 월별 거시 예시. 005930·07:40·A_all·현재 내부 선택/손실의 적격성과 오류율은 미검증. 코드 미실행 |
| S2 Guo 등, ICML 2017, PMLR70:1321–1330 | [원문](https://proceedings.mlr.press/v70/guo17a/guo17a.pdf), §4.2·§5의 temperature scaling·영상/문서 실험 | 보정과 적중률을 분리. 확률 문턱/보류 정책까지 바꾸면 argmax 보존과 별개다. 코드·최신 정정 전수 대조 미수행 |
| S3 Geifman·El-Yaniv, ICML 2019, PMLR97:2151–2159 | [원문](https://proceedings.mlr.press/v97/geifman19a/geifman19a.pdf), §2의 i.i.d.·risk/coverage·§6 | 금융 시계열 보장 아님. 논문이 연결한 SelectiveNet 공개 코드의 현행 내용·실행은 미검증 |
| S4 Gibbs·Candès, JMLR25(162), 2024-05 게재/개정 | [원문](https://www.jmlr.org/papers/volume25/22-1218/22-1218.pdf), §1·§3.3 Theorem6·실험 소개 | 변동성·COVID 예시이며 방향80% 아님. 논문의 DtACI 코드 링크 존재만 확인, 코드·사용 설정 재현 없음 |
| S5 Bailey 등, 2015-02-27 원고, 표지 revised February2015 | [저자 원문](https://www.davidhbailey.com/dhbpapers/backtest-prob.pdf), Algorithm2.3·§5.1 | 동시 날짜별 후보 성능 행렬·대칭 분할의 한계 확인. 시간순 최종 시험을 대체하지 않음. 게재본/코드와 현 원고 차이 미대조 |
| S6 Glasserman·Lin, 2023-09-29 v1 | [버전 이력](https://arxiv.org/abs/2309.17322), [본문](https://arxiv.org/html/2309.17322v1), §1~2 | 이번 arXiv 이력에는 v1만 표시됨. 미국 뉴스·GPT3.5 포트폴리오 연구이며 삼성전자 방향 성적 아님. 데이터 권리·모델 지식 마감의 현재 적격성·코드 미검증 |
| S7 Choi·Song, CSAM 2021;28(4):329 | [원문 DOI](https://doi.org/10.29220/csam.2021.28.4.329)의 검색 색인 Table7 | 색인은 삼성전자 1D-CNN d=10의0.544를 표시. 직접 DOI는 redirect 접근불가, 학회 주소는 timeout. 본문/정정·기간/분모·코드의 신규 직접 감사 완료로 세지 않음. 수치 새 채택 없음 |
| S8 Ludwig 등 NBER w33344, 기존 문서의2025/2026 참조 | [공식 페이지](https://www.nber.org/papers/w33344) | HTTP403 Forbidden. 이번 발행·최신 개정·본문·재현코드 미확인. 재인증·다른 키 사용 없음. 해당 출처 감사는 BLOCKED_SOURCE_ACCESS |

**이번 완료 범위:** S1의 검정/추정/손실 적용 범위를 추가 확인하고, S2~S6의 표시된 관련 절을 재점검했다. 이는 직전 보고를 새 조사로 복사한 것이 아니라 이번 공개 원문 조회 범위다. S2~S6에서도 파일 내용의 전후 바이트 동일성·모든 후속 정정 부재를 입증하지 않았다.

**월간 잔여 범위:** 기존02의 Gu·Kelly·Xiu, XGBoost/LightGBM, Fischer·Krauss/TFT/DLinear, 2017 선택적 분류, Barber 및 초기 ACI, Wilson 원자료, Politis·Romano 스캔, FinCAD와 나머지 오염 문헌의 현행 원문/개정/코드 대조. 이번 S7 직접 본문·S8 접근과 모든 통계 절차의 실제 가정 대응·유한표본 검증도 남는다. 공급자별 PIT·권리·07:40 실수신은 R1/R3 범위이며 해소됐다고 쓰지 않는다. 월간 전체 감사는 PARTIAL을 유지한다.

## 유지 계약·변경·검사

A_all·조건부 적중률·보합 학습 제외·전체 예정일 원장·정시 방향만의 U_on·T+5·최신 공식 정정 주 점수·임시휴장 정책을 보존한다. 재학습 당시 가용 개정과 후일 평가 정정을 분리한다. 기준선→M1 로지스틱→M2 얕은 XGBoost→M3 사건 추가, 동일 날짜 비교·Brier 공통 유효 비보합 표본·고정 기준선·양측95%·블록 민감도를 유지한다. M3의2026 겹치는 역사는 개발자료이며 적격 lockbox와 동결 후 전향을 대신하지 않는다.

변경은 이 신규 파일 하나다. 기존 작업 branch `feat/local-research-workbench`를 사용하며 다른 미커밋 변경을 보존한다. 현재 연구 전용 지시에 따라 프로젝트 진입점의 앱 재개 지시는 적용하지 않는다. 명시 파일 소유권에 따라 문서 스킬의 별도 색인·추가 리뷰/커밋은 확장하지 않으며, 통합·외부검토는 총괄의 지정 단계다. buzz-cli와 evolve-docs-write를 적용했다.

검사 범위는 입력14/14 재해시·TEAM/CLI 신원·요청/manifest·STOP/중복/기한·로컬 링크·코드펜스·필수 판정·인용 범위다. 프로젝트의 `docs/conventions/ste100-writing.md` 부재를 확인해 ste-lint는 NOT_RUN이다. 새 실험·학습·백테스트·오류율/검정력·08시 실동작은 NOT_RUN/UNVERIFIED다.

## 동결 입력

아래14개를 실제 읽고 요청 SHA와 대조했다. 경로와 SHA는 이번 요청의 입력이며 과거 보고의 옛 SHA를 대신 쓰지 않는다.

| 입력 절대경로 | SHA256 |
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
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/02-quant-validation.md` | `f41330c27d57b873b1d2b88d1ac7ec0a684dee0ff87c7f8823a655f77f20ac7d` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/02-quant-rebuttal.md` | `3f513a5c52621f0cbd564befd95e7ef95296a8fb564148ce922fc33c05459edd` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/buzz/prompts/quant.md` | `bde8afa49848d295236207ce6699ce0c13d725d485c36836617e04522ef2daa2` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/buzz/runs/cycle-20261110-319ad15f64bde8c638fa1f11b872ebc379ad5cdb8196090653385833ab88e09d/quant-research.md` | `9851e92e2002ca028d8c3b526fd29c16b1344991aa6c480b76f3a09c87813e6d` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/buzz/runs/cycle-20261110-319ad15f64bde8c638fa1f11b872ebc379ad5cdb8196090653385833ab88e09d/quant-rebuttal.md` | `d5fb1b31902e634389c1ca36a6f7d98519ae693f46c5b588e9334abdcb227d97` |

작성 시각: 2026-11-13T09:40:07.583372+00:00 UTC. 독립 조사15분 이내.
