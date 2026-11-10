# R2 원논문·통계 설계 감사

판정: **PASS — 문서 감사 수행 한정**. 모델 순서·평가 계약을 유지하며 추론 적격성 검사를 보완 제안한다. 삼성전자 방향80% 달성·학습·백테스트 결과가 아니다.

- run_id: `cycle-20261110-1a1c2c91b8f227cb25759ceaf5bbc073d17fe664e291e1a08e9f1d60250f0f41`; phase: `research`; role: `quant`.
- 요청 이벤트: `81050b01eca34bdc62c1e4ee48e06c78baef423dff85d647db0001c5809894dd`.
- 회신 root: `1a1c2c91b8f227cb25759ceaf5bbc073d17fe664e291e1a08e9f1d60250f0f41`. 이번 요청의 명시적 고정 root 지시를 적용한다.
- 채널: `11c1ea3c-c9c1-49fa-ae2c-bced8d7616b5`; 실제 cwd: `/home/gon/dev/test/test-samjeonnix`.
- 시작·작성 직전 STOP 없음. TEAM quant와 실제 CLI 공개키는 `699ae7aed2d0b586228e7e293a0bb28c17f8009a46fcb8762d814743cab4c915`로 일치한다. 총괄 발신 공개키는 TEAM coordinator `4d8b5a7277f5ec6b4c5d303e490ca6463c3e7059a96398062444e4223ae8bfe3`와 일치한다. 운영 계약을 다시 읽었다.
- 입력10개 SHA 전부 일치. 이번 run/phase 결과 파일이 없음을 확인하고 신규 작성했다. 이전 run의 BLOCKED 파일은 보존한다.

## 사실·추론·제안

| 쟁점 | 확인·판단 및 권고 |
| --- | --- |
| 예정일 분모와 상한 | **사실:** 기준연구 §2는 보합·보류·누락·지연·종결 평가불가를 N에 남기고 정답0으로 처리한다. 기준연구의 U는 정시 방향이 있는 평가 대기일로 정의되어 R2 반박의 U_on과 같다. **제안:** 기호만 보고 결함으로 판정하지 말고 정의를 검사한다. 구조적 비적중 사유는 합집합으로 집계한다. |
| 평가 개정과 PIT | **사실:** T+5는 연구 종결 정책이며 공급 SLA가 아니다. 최신 공식 정정을 주 점수에 일관 적용하고 최초 마감·정정 이력을 보존한다. **추론:** 평가 개정은 당시 가용했던 학습 라벨과 별개다. **실패 조건:** 최신 정정으로 과거 입력·예측을 다시 만들거나 유리한 평가 버전만 선택하면 검증 무효다. |
| 동일 날짜 비교 | **제안:** M1→M2→M3는 전체 예정일의 hit 벡터를 같은 달력·라벨 개정에서 짝짓는다. Brier는 양쪽의 정시 유효 확률·비보합·평가 완료가 공통인 날짜와 제외 수를 공개한다. 사건일만 사후 선택하거나 긴 M2 성적에서 짧은 M3 성적을 차감하면 기각한다. 결측 fallback·제공률도 절차 일부다. |
| lockbox와 LLM 오염 | **사실:** 기준연구 §6은 2026 사건을 참고한 M3의 겹치는 역사를 개발자료로 분류한다. **추론:** 익명화·디코딩 완화 논문이 존재해도 이 기간이 미사용 시험으로 바뀌지 않는다. **채택:** 동결 후 전향 검증 유지. **기각:** 새 논문만으로 오염 제거·삼성전자80%를 인정하는 안. |
| bootstrap 적격성 | **사실:** White §2.c·부록은 의존·정상성·비퇴화 및 표본과 함께 변하는 블록 조건 아래의 점근 근거다[S1]. 길이10·민감도5/20·10,000회는 규격이며250일에서 실제95% 포함률 보장이 아니다. **제안:** 개봉 전 개발단계에서 p=0.8 근방·양의 의존·구조 변화·퇴화 손실차이의 오류율과 검정력을 점검한다. 상수 hit·상수 paired 차이 등 퇴화 표본은 추론 적격성을 별도 검토하고 자동 통계 합격을 보류한다. |
| 다중 탐색 | **사실:** White는 후보군 최상 모델이 고정 기준선보다 낫지 않다는 결합 귀무를 다룬다[S1]. **제안:** 특징·보정·문턱·프롬프트·익명화/완화까지 실험 원장과 후보 가족에 포함한다. 날짜별 손실차이를 보존하고 보정법·alpha·가족 범위를 개봉 전에 확정한다. 단순 시도 수 기록이나 후보 하나의 구간만으로 통제가 끝나지 않는다. |

**반론1:** 모든 조건을 동시에 요구하는 합격 규칙을 여러 후보 중 하나라도 통과하면 되는 탐색과 혼동하지 않는다. 오류 통제는 최종 주장·선택 구조에 맞춰 정한다. 사후 유리한 보정법 선택은 허용하지 않는다.

**반론2:** A_all은 순수 방향 능력과 제공 품질의 결합이다. 이 한계를 이유로 분모를 사후 축소하지 않고 조건부 적중률·제공률을 병기한다.

**반론3:** bootstrap 경계 문제나 새 논문의 한계는80% 불가능성의 증명이 아니다. 근거 부족한 통계 승격을 막는 조건이다. 이번에 기존 판정법을 교체하지 않는다.

## 설명 계산과 재현

독립·동일 Bernoulli 시행을 가정한 **가상 계산**이다. 금융 성적·실제 검정력·권장 표본 수가 아니다. 기존 양측95% Wilson 규격에서 n=250일 때 하한≥0.8의 최소 적중은213회다. 실제 p를0.8/0.85/0.9로 가정하면 해당 사건 확률은 **0.021197/0.508273/0.993774**다. 250일 자체가 충분성 보장은 아니다. 실제 블록 규격은 별도 검정력 점검이 필요하다.

20개 hit가 모두1이면 어떤 경험적 날짜 블록 재표집도 평균1이므로 percentile 구간은[1,1]이다. p=0.9인 독립 시행에서도 이 표본은 확률0.9^20≈0.121577로 발생하며 그 구간은 참값0.9를 포함하지 않는다. 단순 percentile 방식의 유한표본 경계 반례이며 실제250일·금융자료 반례 실측이 아니다.

직접 실행한 Python3 표준 라이브러리 계산:

```python
from math import comb, sqrt
from statistics import NormalDist
z = NormalDist().inv_cdf(0.975)
def lower(k, n):
    p = k / n
    return (p + z*z/(2*n) - z*sqrt(p*(1-p)/n + z*z/(4*n*n))) / (1+z*z/n)
n = 250
threshold = next(k for k in range(n+1) if lower(k, n) >= 0.8)
print(threshold)
for p in (0.8, 0.85, 0.9):
    print(round(sum(comb(n,k)*p**k*(1-p)**(n-k) for k in range(threshold,n+1)), 6))
print(round(0.9**20, 6))
```

## 원문7개의 확인 범위

모든 항목은 아래 확인 시각(Asia/Seoul)까지 이번 조사 중 조회했다. 발행일은 원문 표시 기준이다. 원문 복제 없이 URL·메타데이터·요약만 남겼다. 인용된 실험은 저자 결과이며 이번 재현이 아니다.

| ID·원문/발행·수정 | 이번 확인 범위·미확인 | 채택·기각 |
| --- | --- | --- |
| S1 [White, A Reality Check for Data Snooping](https://bashtage.github.io/kevinsheppard.com/files/teaching/mfe/advanced-econometrics/White.pdf), Econometrica 2000년9월, 수정일 불명 | 원논문PDF §2의 결합 귀무·stationary bootstrap 및 부록 조건. 전체 후보별 손실 계열·비퇴화 등 가정 필요. 이번 적용 실험 없음 | 후보군을 고려할 근거 유지. 임의 시장 변화·고정250일 유한표본 보장으로 확장하지 않음 |
| S2 [Glasserman·Lin](https://arxiv.org/html/2309.17322v1), 2023-09-29 v1 | §2·§3. 미국주 뉴스 제목·GPT-3.5·학습창 안팎과 회사명 익명화 비교. 익명화로 창내 수익이 개선되는 distraction의 반대 근거도 확인. 재현코드 취득·실행 없음 | 오염 위험 유지. 오염이 항상 성적을 높이거나 익명화로 완전 제거된다는 단정 기각 |
| S3 [Li·Wang·Ma, FinCAD](https://arxiv.org/html/2605.24564v1), 2026-05-23 v1 | §3·§4·부록G. 두 logit 차감과 종목/날짜별 강도. 미국 대형주 buy/sell/hold·다음 시가 체결, 수익/Sharpe 과제. 교정 라벨은63일 후·소폭 수익 제외로 본 과제와 다름. 상위 코드 참조는 있으나 저자의 완전한 재현 패키지는 이번 미확인 | 새 반대 가설로 기록. 005930 일간 전체 예정일80%나 lockbox 재자격 근거로 기각. 모델 변경·구현 없음 |
| S4 [Chen·Guestrin, XGBoost](https://arxiv.org/abs/1603.02754), 최초2016-03-09/현 표시v3 2016-06-10 | 이번에는 서지·저자 초록만 재확인. 효율·희소자료 처리 설명. 금융 실험표·재현코드는 이번 재감사하지 않음 | 소규모 비교 후보 유지. 새 삼성전자 정확도 근거로 삼지 않음 |
| S5 [Politis·Romano, The Stationary Bootstrap](https://users.ssc.wisc.edu/~behansen/718/Politis%20Romano.pdf), 1994, 수정일 불명 | PDF timeout과1회 재시도 실패. JSTOR는 본문을 반환하지 않음. 이번 본문 갱신 확인 미완료. S1의 자체 방법 설명이 S5 직접 재확인을 대체하지 않음 | 기존 인용의 재검증 성공으로 표시하지 않음. 추가 반복 없음 |
| S6 [Choi·Song DOI](https://doi.org/10.29220/csam.2021.28.4.329), 2021, 수정일 불명 | DOI redirect 접근 불가·출판사 본문timeout. 이번Table7 직접 재확인 실패.54.4% 등은 기준연구·04-lead-evidence의 기존 기록이며 이번 새 측정 아님 | 기존 사례를 상한·기대값으로 바꾸지 않음. 재접속 성공 주장 없음 |
| S7 [Ludwig 등 NBER33344](https://www.nber.org/papers/w33344), 기준기록2025/2026, 이번 발행/수정일 미확인 |403. 인증 우회·재시도 없음. 이번 본문 미확인 | 새 근거로 확장하지 않음 |

## 월초 감사·미해결·변경

- 출처 신선도: 직접 확인과 본문 실패를 구분했다. S3는 새 오염 완화 연구지만 전향 검증 요건 완화에는 불충분하다. 새 알고리즘 채택 변경은 없다. 기존 논문14개 모두를 재검증했다고 주장하지 않는다.
- 미해결: PIT·권리를 만족하는 실제 기간, 후보별 lockbox 자격, 자기상관·구조 변화, Brier 공통 표본의 선택성, 전체 후보군 다중성, 고정 bootstrap 오류율·검정력. 개봉 전에 등록·검사가 필요하다.
- 반복 실패: 이전 run 입력 SHA 불일치는 이번10개 일치로 해소 확인. S5 timeout은1회 재시도 뒤 종료. S6 출판사 실패와 S7의403은 성공 취급·인증 우회 없이 기록. 기존 API 인증 재실행은0회다.
- 변경 제안: canonical §6의 기존 적절성·검정력 점검을 ‘퇴화 표본·실제 포함률·검정력의 개발단계 검증’으로 구체화한다. 금융 최종 추론을 단순 Wilson으로 대체하는 변경은 아니다. 채택 여부는 총괄과 후속 검토가 결정한다.
- 변경 파일은 이 quant-research.md 하나다. 기존02·canonical·TEAM·계약·manifest·타 역할 수정 없음. 새 모델·학습·백테스트·과거 예측 재작성·에이전트 생성 없음.
- 실제 제공자 모델ID/effort·방법론 실효성·방향80%는 미검증. 독립보고 뒤 별도 phase 요청을 기다린다.

## 입력 SHA 기록

기준 디렉터리: `/home/gon/dev/test/test-samjeonnix/docs/research/`. 아래는 상대경로와 직접 재계산값이다.

| 경로 | SHA256 |
| --- | --- |
| samsung-direction-80-research-2026-11.md | 107b4db7d9bb9235347c40ec1db32eb5c0ac404cdb6a54c4f68b6fabb932004c |
| samsung-forecast-2026-11/buzz/TEAM.json | 777f5a312f3b83316391106f788a190e2981f060af5aadb7442d3df30be9f8ab |
| samsung-forecast-2026-11/buzz/OPERATING-CONTRACT.md | 4c62ea31fed9fb2ec4c0bd94fc45095876dc1bd024f9f8eba3c3ca9575df33d0 |
| samsung-forecast-2026-11/00-brief.md | bfec7a41068626b3eafecee7f67a574b3dd044a4a608d73179c4b27374f134e0 |
| samsung-forecast-2026-11/06-discussion-record.md | f53eb0445347e8f4b8fabe61c440ddeddd55f581556e0edfdeab4e7aeeac3dbc |
| samsung-forecast-2026-11/04-lead-evidence.md | 2f99cd8012cf799dccec60ad3f65ccf0389728cf49e2a68929ea3c4b3a40ff41 |
| samsung-forecast-2026-11/04-calculation-examples.json | 5befdfa4a38f6648e832cbd9bb5deba633c22f256241a0034a69a7bfe75294ca |
| samsung-forecast-2026-11/02-quant-validation.md | f41330c27d57b873b1d2b88d1ac7ec0a684dee0ff87c7f8823a655f77f20ac7d |
| samsung-forecast-2026-11/02-quant-rebuttal.md | 3f513a5c52621f0cbd564befd95e7ef95296a8fb564148ce922fc33c05459edd |
| samsung-forecast-2026-11/buzz/prompts/quant.md | bde8afa49848d295236207ce6699ce0c13d725d485c36836617e04522ef2daa2 |

확인 시각: 2026-11-10T13:08:31.359576+09:00
