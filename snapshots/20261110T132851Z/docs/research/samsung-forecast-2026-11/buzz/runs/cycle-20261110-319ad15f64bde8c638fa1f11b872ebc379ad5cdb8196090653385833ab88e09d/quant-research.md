# R2 등록 4항목 충분성·통계 가정 감사

**판정: PASS — 지정 문서 감사 범위.** 기존 4항목은 필요한 범주를 담는다. 그러나 실제 등록·실행의 충분조건은 아니다. 새 제안 P2는 재학습 방식과 검정 적용 근거의 대응을 기존 항목 안에 명시하는 한 문장이다. 모델·통계법·수치 임계값의 즉시 변경은 **NO_CHANGE**다. 삼성전자 방향80%와 실제 오류율·검정력은 **UNVERIFIED**, 월간 전체 감사는 **PARTIAL**이다.

- run_id: `cycle-20261110-319ad15f64bde8c638fa1f11b872ebc379ad5cdb8196090653385833ab88e09d`; phase: `research`; role: `quant`.
- 요청 event: `8fc45b084cb8db4d007749b485b8de289429162366aca0f5791c5f82e575c18b`; 채널: `11c1ea3c-c9c1-49fa-ae2c-bced8d7616b5`.
- TEAM quant와 공식 CLI 자기 프로필 공개키는 `699ae7aed2d0b586228e7e293a0bb28c17f8009a46fcb8762d814743cab4c915`로 일치했다. 발신키는 TEAM coordinator `4d8b5a7277f5ec6b4c5d303e490ca6463c3e7059a96398062444e4223ae8bfe3`와 일치한다. 운영 계약을 다시 읽었다.
- manifest의 요청ID·채널·role·phase·입력14개 SHA를 요청과 대조했다. 모두 일치했다. 시작 시 STOP과 동일 phase 산출물이 없었다. 이번 명시 요청의 소유 경로 `quant-research.md`를 사용한다.
- 회신은 요청·운영 계약이 지정한 run root `319ad15f64bde8c638fa1f11b872ebc379ad5cdb8196090653385833ab88e09d`다. 최신 수신 event를 기본 회신 대상으로 쓰지 않는 이유는 run 연결의 명시 지시다.

## 사실·추론·제안

[현재 기준 문서 §6](../../../../samsung-direction-80-research-2026-11.md)은 네 항목을 구체화하고 미정이면 등록 미완료라고 이미 적었다. [직전 외부검토 O1](../cycle-20261110-9ecb6f2e506723c98bea23a56d4a7faed09d5fc196ceed01b5bb4aecbcea0917/review-verdict-1.json)은 White RC와 rolling/expanding 적용 범위를 남겼다. 아래는 새 원문 대조 결과이며 새 시장 실험 결과가 아니다.

| 쟁점 | 이번 확인 사실 | 적용 판단·반증 조건 |
|---|---|---|
| 정상성·시간 의존 | Hansen Assumption 1은 손실차이 벡터의 엄격 정상성·혼합·모멘트·양의 분산을 요구하고 recursive 추정을 배제한다[S1]. White는 누적 자료 추정을 기본 틀에서 다루고 rolling도 별도로 설명한다[S4] | SPA의 제외를 RC 전체에 전이하지 않는다. 반대로 어느 이름도 현재 nested 선택·보정·이진 적중손실에 자동 적용되지 않는다. 추정 방식과 실제 사용할 정리의 가정 대응이 없으면 통계 주장 보류 |
| 선택 편향 | White는 고정 기준선 대비 후보 가족의 최상 성능을 다룬다. 교차검증에 대한 엄밀한 확장은 해당 논문 범위 밖이라고 명시한다[S4, p.1108] | 현재 시간순 내부 선택 전체가 RC 원문 하나로 검증됐다고 쓰지 않는다. 후보 가족·선택·기준선 고정·최종창 분리를 함께 점검한다. RC 기각을 절대80%나 선택 후보 개별 효과의 자동 증명으로 쓰지 않는다 |
| 퇴화·실패 | Morris 등은 수렴 실패에 따른 결측이 무작위가 아닐 수 있고, fallback을 포함하면 평가 대상 방법이 달라짐을 설명한다[S2, §3.4·5.1] | 실패 반복 삭제 금지는 유지한다. 계산불가 구간을 임의로 성공/실패 숫자로 치환하지 않는다. 전체 반복 수·계산가능 수·실패 사유와 사전 fallback을 공개한다. 조건부 포함률만으로 전체 절차를 통과시키지 않는다 |
| 블록 규격 | Patton 등은 자동 블록 길이의 분산 상수와 알고리즘을 정정한다[S3]. Hansen Lemma 1도 표본 증가에 따른 블록 모수 조건을 둔다[S1] | 고정250일·평균10일·B=10,000이라는 설계값 자체가 유한표본95% 보장은 아니다. 5/10/20 민감도와 개발 점검은 유지한다. 자동 길이·새 문턱·블록 수 하한을 지금 확정하지 않는다 |

**추론:** 네 항목의 제목은 충분한 분류다. 구체적 추론 대상·생성 조건·판정 규칙이 채워졌는지는 별도다. 정상성이 확인되지 않은 자료에서 상수 모평균을 추론하는지, 정해진 미래 창의 평균 성적을 기술하는지부터 구분해야 한다. rolling 전환이나 정상성 검정 하나의 비기각만으로 필요한 모든 가정이 성립했다고 인정할 근거는 이번 확보하지 않았다.

**제안 P2 — 기존 ‘검증 대상·자료’ 또는 ‘주장·판정’ 셀에 추가할 문장:**

> 재학습 방식(rolling/expanding/fixed), 손실함수와 내부 선택 절차에 적용할 검정·정리·가정 및 개발 점검 근거를 함께 등록하며, 대응이 미확인되면 통계적 승격을 보류한다.

사실→의미→제안: White 원문은 Hansen과 다른 추정 틀을 다룬다 → 검정명만으로 적용 적격성을 결정할 수 없다 → 대응 근거를 기존 등록 안에 넣는다. 새 검정을 의무화하거나 전면 방법론을 바꾸는 대안은 증거·실행 범위를 넘어 기각한다. 기존 실제 등록에 이 대응이 이미 구체적으로 있으면 **중복 추가는 NO_CHANGE**다. 최종 채택은 총괄과 후속 검토의 책임이다.

## 네 항목의 현재 충족 상태

| 항목 | 문서에 있는 것 | 아직 충족했다고 볼 수 없는 것 |
|---|---|---|
| 검증 대상·자료 | 고정열/전체 절차 구분, PIT·권리·lockbox 요구 | 실제 적격 날짜·당시 버전·접근 이력·실제/가상 생성 조건 및 추론 대상 확정 |
| 반복·오류 처리 | 날짜 벡터, 결측·보류·fallback, R/B·퇴화 보존 | 재현 가능한 반복 절차·난수 상태/구현 버전, 계산불가 처리·fallback 발동 상세와 결과. 이 상세는 재현성 제안이며 이번 구현하지 않음 |
| 주장·판정 | 포함률·80% 경계 오류율·가족 오류율·paired 검정력·MCSE 구분 | 각 허용폭·대안 효과·정밀도 목표·가족/검정/재학습 대응의 실제 사전 동결과 실행 결과 |
| 실패·보고 | 무효·통계 보류·관측 미달·NOT_RUN 구분 | 실제 반복별 실패 원장·계산가능 분모·민감도 불일치 결과. 실패가 없었다는 새 실험 증거는 없음 |

허용폭·검정력·정밀도·최소 사건 수·분산 epsilon을 근거 없이 새 숫자로 채우지 않는다. 고정열 검사만 시행하면 추출·선택·재학습 전체를 확인한 것으로 쓰지 않는다. 실제 산업 모수는 UNKNOWN으로 두고, 가상 생성 조건의 성공을 시장의 검정력으로 바꾸지 않는다. 새 모의실험·학습·백테스트·통계 계산은 이번 **NOT_RUN**이다.

## 반론과 유지 조건

1. **“네 항목이 채택됐으니 검증 완료다.”** 채택된 것은 등록 요구다. 수치·입력·코드·실행 결과가 미정인 상태를 통과로 바꿀 수 없다. 직전 문서 PASS도 이 범위에 한정됐다.
2. **“Hansen이 recursive를 제외하니 expanding은 전부 금지다.”** White의 기본 틀과 다르다. 가정 대응 없는 포괄 금지와 자동 허용을 모두 기각한다. 특히 적중 여부는 추정 계수에 대한 불연속 손실이 될 수 있어 White 부록의 미분가능 조건을 그대로 충족한다고 간주할 수 없다[S4]. 이는 적용 근거 확인 요구이며 RC가 반드시 불가능하다는 결론은 아니다.
3. **“실패 반복을 삭제하지 말라는 것은 결측 구간을 모두 오답으로 넣으라는 뜻이다.”** A_all 원장의 보류 정답0 정책과 모의 추론 계산불가 상태는 다르다. 후자는 상태와 분모를 공개하고 사전 규칙대로 판정한다. 성공 반복만 남긴 포함률을 무조건부 성능으로 표현하지 않는다[S2].

A_all·조건부 적중률·보합 학습 제외·예정일 원장·정시 방향만의 U_on·T+5·최신 공식 정정 주 점수·임시휴장 정책을 유지한다. 평가 정정을 과거 학습 입력으로 소급하지 않는다. 같은 종목·날짜·라벨·PIT에서 기준선→M1 정규화 로지스틱→M2 얕은 XGBoost→M3 사건 추가를 비교한다. Brier 공통 유효 비보합 표본과 제외 수도 유지한다.

M3의2026 겹치는 역사는 개발자료다. 선택에 쓴 외부 fold를 최종시험으로 재사용하지 않는다. 자격 있는 lockbox·동결 후 전향, 양측95%의2.5% 하한·블록 민감도·개발에서 고정한 기준선을 유지한다. 산업 사건의 재인용·revision·단계·만료 규칙은 [직전 산업 답변](../cycle-20261110-9ecb6f2e506723c98bea23a56d4a7faed09d5fc196ceed01b5bb4aecbcea0917/industry-answer.md)의 제안과 미등록 상태를 보존하며 R2가 확정하지 않는다.

## 출처·신선도·미확인

핵심 조사 대상은 원논문5개 이내다. S1~S3은 직전에도 사용한 논문을 이번 다시 대조한 것이며, S4는 기존02에 있던 논문의 미확인 적용 범위를 이번 추가 점검했다. 새 발표 논문이나 새 시장 성과로 표시하지 않는다. 원문 전체·코드·데이터 재현은 하지 않았다. 링크·메타데이터·요약만 기록하고 PDF를 프로젝트에 저장하지 않는다.

| ID·발행일 | URL·이번 직접 확인 범위 | 적용 범위·미확인 |
|---|---|---|
| S1 Hansen, JBES 2005년10월, 23(4):365–380 | [논문 사본](https://bashtage.github.io/kevinsheppard.com/files/teaching/mfe/advanced-econometrics/Hansen.pdf), §2 Assumption1·§3 Lemma1·recursive 설명 | SPA의 손실차이 추론·가상 실험·인플레이션 예시. 005930 방향/07:40 계약의 검증 아님. 원코드·vintage·현 설계 가정 충족 미검증 |
| S2 Morris·White·Crowther, Statistics in Medicine 2019;38:2074–2102 | [출판사 공개 원문](https://onlinelibrary.wiley.com/doi/pdfdirect/10.1002/sim.8086), Table1·§3.4·§5.1·ADEMP/MCSE 설명 | 통계 방법의 모의 평가 지침. 금융 시장·방향 분모·정보 마감 근거 아님. 부록 코드 실행 없음 |
| S3 Patton·Politis·White, Econometric Reviews 2009;28(4):372–375 | [저자기관 원문](https://public.econ.duke.edu/~ap172/Patton_Politis_White_2009.pdf), pp.372–375 정정·블록 길이·AR(1) 표 | 가상 시계열 분산 추정·길이 선택. 방향 비율 percentile 구간의 포함률/80% 증거 아님. 수정 코드 취득·실행 없음 |
| S4 White, Econometrica 2000년9월;68(5):1097–1126 | [논문 사본](https://bashtage.github.io/kevinsheppard.com/files/teaching/mfe/advanced-econometrics/White.pdf), §2.a–c·pp.1108,1117–1119 부록 A/B·기본 추정·rolling·교차검증 한계 | 후보 가족 대비 고정 기준선 추론. 현재 이진손실/nested 절차의 적격성을 증명하지 않음. 수익률·회귀 예시를005930 이진80%로 전이하지 않음. 원 데이터/원코드 미실행 |
| S5 Politis·Romano, JASA 1994년12월;89:1303–1313 | [스캔 사본](https://users.ssc.wisc.edu/~behansen/718/Politis%20Romano.pdf), PDF 응답은 확인했으나 이번 본문 텍스트를 확보하지 못함 | 이번 추가 방법 판단의 직접 본문 근거로 사용하지 않음. 정상성·블록 가정은 읽을 수 있는 S1/S4에서 확인. 새로 전편 검증했다고 쓰지 않음 |

White 출판사 [서지/초록](https://onlinelibrary.wiley.com/doi/abs/10.1111/1468-0262.00152)의 웹 공개일 표시는2003-12-10이고, 읽은 게재본 표지는2000년9월이다. 웹 표시일을 새 논문의 발행일로 혼동하지 않는다. White의 다른 공개 사본2개는 timeout으로 본문 확보에 실패했고, 기존02가 연결한 사본에서 확인했다. Hansen의 별도 URL도 접근 실패 후 기존 사본으로 확인했다. 같은 실패 URL 재시도·인증 우회는 하지 않았다.

이번 신선도 확인은 위 원문·서지의 접근 가능성과 읽은 범위에 한정한다. 정정본·후속 연구 전부의 부재를 확인한 것은 아니다. 월간 전체 감사의 **남은 범위**는 기존02의 나머지 알고리즘/보정/conformal/선택적 예측/PBO·Wilson 원자료, Choi·Song Table7, FinCAD·NBER/LLM 오염 문헌의 최신 개정·재현코드 대조다. S5 본문도 이번 미확인이다. API·IR 권리/실수신 신선도는 R1/R3 책임이며 이 문서로 해소하지 않는다. 따라서 전체 감사 완료를 선언하지 않는다.

## 변경·검사·인계

변경은 요청된 신규 역할 파일 하나다. canonical·TEAM·운영 계약·manifest·역사00~08·타 역할 파일은 수정하지 않는다. 기존 미커밋 변경을 보존한다. 앱·DB·설정·GitHub·과거 예측·유료/인증 데이터 호출·외부 모델 호출·에이전트 생성·재위임은 수행하지 않았다. 소유권 제한에 따라 색인·STATE를 추가하지 않는다. 후속 외부검토는 총괄의 지정 단계에 맡긴다.

검사: 입력14개 해시·역할·요청/manifest 일치·STOP/중복 확인, 로컬 상대링크 해소·Markdown 코드펜스 균형·필수 상태·출처 범위·추론/제안 구분을 확인한다. ste-lint는 기존 보고의 기준 파일 부재를 현재도 확인해 NOT_RUN이며 같은 실패 명령을 반복하지 않는다. 논문 본문 조회 성공을 실제 통계 절차 성공으로 보고하지 않는다.

도구: buzz-cli(역할 확인·결과 회신), evolve-docs-write(근거·추론·제안·한계와 링크 검사). 프로젝트의 미완료 앱 재개 규칙은 현재 연구 전용 범위와 충돌하므로 적용하지 않는다. 스킬의 색인·별도 리뷰/commit 절차도 명시 소유권·단계 범위 밖으로 확장하지 않는다.

원문 조사·입력 재확인 시각: 2026-11-10T12:56:50.843612+00:00 UTC. 독립 조사15분 이내.

입력14/14 재계산 일치:

| 입력 절대경로 | SHA256 |
|---|---|
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-direction-80-research-2026-11.md` | `2ade10a204dbc0210f4e71c15083c77f9848fa150230ad02effce7e7ad7c07cc` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/buzz/TEAM.json` | `777f5a312f3b83316391106f788a190e2981f060af5aadb7442d3df30be9f8ab` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/buzz/OPERATING-CONTRACT.md` | `4c62ea31fed9fb2ec4c0bd94fc45095876dc1bd024f9f8eba3c3ca9575df33d0` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/00-brief.md` | `bfec7a41068626b3eafecee7f67a574b3dd044a4a608d73179c4b27374f134e0` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/04-lead-evidence.md` | `2f99cd8012cf799dccec60ad3f65ccf0389728cf49e2a68929ea3c4b3a40ff41` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/06-discussion-record.md` | `f53eb0445347e8f4b8fabe61c440ddeddd55f581556e0edfdeab4e7aeeac3dbc` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/04-calculation-examples.json` | `5befdfa4a38f6648e832cbd9bb5deba633c22f256241a0034a69a7bfe75294ca` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/buzz/runs/cycle-20261110-9ecb6f2e506723c98bea23a56d4a7faed09d5fc196ceed01b5bb4aecbcea0917/industry-answer.md` | `04aefaadb3ae2bed443f4c79e38e7fb71cbf10e158463dc17a537b876d8fd620` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/buzz/runs/cycle-20261110-9ecb6f2e506723c98bea23a56d4a7faed09d5fc196ceed01b5bb4aecbcea0917/review-verdict-1.json` | `39016a5be53f819f2c0ae1a97e4b092686012df0818f34b22e2a7922b2742a8b` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/02-quant-validation.md` | `f41330c27d57b873b1d2b88d1ac7ec0a684dee0ff87c7f8823a655f77f20ac7d` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/02-quant-rebuttal.md` | `3f513a5c52621f0cbd564befd95e7ef95296a8fb564148ce922fc33c05459edd` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/buzz/prompts/quant.md` | `bde8afa49848d295236207ce6699ce0c13d725d485c36836617e04522ef2daa2` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/buzz/runs/cycle-20261110-9ecb6f2e506723c98bea23a56d4a7faed09d5fc196ceed01b5bb4aecbcea0917/quant-research.md` | `06eefed88629947c796c005b1c5604e44661ef0e7106d1f3acc5ce4cacd872b2` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/buzz/runs/cycle-20261110-9ecb6f2e506723c98bea23a56d4a7faed09d5fc196ceed01b5bb4aecbcea0917/quant-rebuttal.md` | `d70635aff4bbdbc37139a92600a074443edeb601a97e2591e443be8d3fb59efa` |
