# R2 시간 의존·퇴화·다중 탐색 감사

**판정: PASS — 독립 문서 감사와 설명 계산에 한정.** 이전 개발단계 검증 구체화 제안을 새 원문 3개와 250일 가상 반례에 근거해 재제안한다. 채택·통계 절차 검증·삼성전자 방향80% 달성을 뜻하지 않는다. 기존 평가 계약과 모델 비교 순서를 유지한다.

- run_id: `cycle-20261110-9ecb6f2e506723c98bea23a56d4a7faed09d5fc196ceed01b5bb4aecbcea0917`; phase: `research`; role: `quant`.
- 요청 event: `8f5248bf4491f11af148484e787f8f76065595cd6e6feb12bf945de80277f189`; 채널: `11c1ea3c-c9c1-49fa-ae2c-bced8d7616b5`.
- 요청·운영계약이 명시한 고정 회신 root: `9ecb6f2e506723c98bea23a56d4a7faed09d5fc196ceed01b5bb4aecbcea0917`. 기본 회신 대상보다 이 명시 지시를 적용한다.
- TEAM과 공식 CLI `users get`의 R2 공개키: `699ae7aed2d0b586228e7e293a0bb28c17f8009a46fcb8762d814743cab4c915`. 총괄 발신키는 TEAM coordinator와 일치한다. 운영계약·현재 Canvas를 확인했다.
- 입력10개 SHA256 전부 일치. 시작 시 STOP 없음, 이 run/phase의 결과 파일 없음. 명시 요청·manifest의 역할 소유 경로인 `quant-research.md`를 사용한다. 기존 역할 프롬프트의 `quant-methods.md`보다 이번 구체적 소유 경로를 따른다.
- 이전 run manifest의 `NOT_ADOPTED_PENDING_NEW_RUN_DISCUSSION_AND_REVIEW`는 보존한다. 이번 보고는 자동 재개나 채택이 아니다.

## 사실과 판단

| 쟁점 | 확인한 사실 | 추론·제안 |
|---|---|---|
| 시간 의존·재학습 | Hansen의 SPA는 손실차이 벡터의 정상성·혼합·양의 분산을 가정한다. 저자는 recursive/expanding 추정을 해당 틀에서 제외하고 fixed/rolling을 구분한다[S1] | 현재 canonical §6의 rolling/expanding 두 선택지 모두에 SPA/Reality Check라는 이름만 붙여 검증됐다고 쓰면 안 된다. 후보별 재학습 방식과 실제 적용 정리를 등록하고, 가정 적합성과 유한표본 오류를 확인한다. rolling 자체도 시장 정상성을 보장하지 않는다 |
| 퇴화·포함률 | 아래 가상 정상 Markov 적중열에서는 250일 경험적 percentile 구간의 전체 포함률이 93.45% 이하가 되는 반례가 있다 | 블록 길이5/10/20·10,000회라는 규격만으로 명목95%를 보장할 수 없다. 표본 분산0이 모집단 분산0의 증명은 아니다. 관측 성적은 보존하고 추론 적격성을 별도 판정한다 |
| 블록 길이 | Patton·Politis·White(2009)는 기존 자동 선택의 분산 상수·시뮬레이션을 정정한다[S2] | 추후 자동 선택 구현 시 정정본·구현 버전을 검사한다. 평균 분산 추정에 관한 최적 길이가 이진 비율 percentile 구간·다중검정에도 최적이라고 전이하지 않는다. 현재 고정10일을 자동 대체하지 않는다 |
| 다중 탐색 | SPA의 귀무는 고정 기준선보다 우수한 후보가 없다는 가족 단위 주장이다. 원문은 무관한 열등 후보가 RC 검정력을 약화시킬 수 있음을 다룬다[S1] | 원장에 남긴 모델·특징·보정·문턱·프롬프트·사건 정의·기간 선택을 가족 범위에 포함한다. 유리한 검정·가족·기준선을 사후 선택하지 않는다. SPA의 가족 귀무 기각만으로 선택 후보의 개별 우월성이나 절대80%가 입증되지는 않는다 |
| 검증의 검증 | Morris 등은 ADEMP와 Monte Carlo 오차·실패 표본 보고를 제시한다[S3] | 외부 반복 R과 각 표본 안 bootstrap 반복 B를 구분한다. B=10,000은 실제 포함률·검정력을 평가하는 독립 모의자료 R=10,000과 다르다. 실패·퇴화 반복을 버리고 성공한 반복만으로 포함률을 계산하지 않는다 |

**제안 P1 — 최종 개봉 전 등록할 최소 항목:** 대상은 `A_all` 구간의 포함률, 80% 경계에서 오류율, 고정 기준선 대비 후보 가족의 오류율·최소 개선폭에서 검정력이다. 가상 생성 조건은 독립·약/강 의존·국면 변화·상수/거의 상수 손실차이·사건 군집·운영 실패를 구분한다. 국면 변화에는 정상 평균과 다른 추론 대상을 먼저 정의한다. 후보 hit·선택·보류·평가 상태·기준선 손실을 같은 날짜 벡터로 생성·재표집한다. 이 절차는 실제 학습을 포함한 전 과정 검증인지, 이미 고정된 예측열의 조건부 추론 검사인지 명시한다.

수용 가능한 포함률 오차·가족 오류율·검정력과 Monte Carlo 정밀도, 퇴화 처리·fallback을 결과 확인 전에 정한다. 허용폭·실제 기간·검증 실행이 미정인 현재는 **등록 미완료·효과 미검증**이다. 시뮬레이션을 통과해도 그 생성 조건 밖 시장의 보장이 아니다.

## 새 가상 반례와 직접 계산

실제 금융 데이터가 아닌 **설명용 정상 2상태 Markov 적중열**이다. `P(H_t=1)=p=0.8`, 정상분포에서 시작하고 `rho=0.95`로 둔다. 전이는 `P(1|1)=p+rho(1-p)=0.99`, `P(1|0)=p(1-rho)=0.04`다. 이 체인은 비주기·기약이며 자기상관은 `rho^lag`다.

250개 hit가 모두1일 확률은 `p * 0.99^249 = 0.065501831`이다. 이 표본에서는 어떤 날짜 블록을 뽑아도 평균이1이므로 경험적 percentile 구간은 `[1,1]`이고 참평균0.8을 포함하지 않는다. 따라서 다른 모든 표본에서 참값을 포함해도 **전체 포함률≤0.934498169**다. 블록 길이5/10/20 모두 같은 문제다. 이는 유한표본 구간의 반례이며 canonical의 기준선 paired 조건까지 포함한 전체 합격 규칙의 오합격률을 계산한 결과는 아니다.

동일 p·n에서 기존 양측95% Wilson 하한≥0.8의 문턱은213회다. Markov 전이별 정확한 적중횟수 분포를 동적계획으로 합산하면 이 사건 확률은 아래와 같다. 의존 자료에 i.i.d. Wilson을 잘못 사용했을 때의 **가상 경계 기각 빈도**이며 실제 bootstrap 검정력·삼성전자 성적이 아니다.

| rho | P(Wilson 하한≥0.8) |
|---|---:|
| 0 | 0.021197472 |
| 0.5 | 0.123624656 |
| 0.95 | 0.435511936 |

Python3 표준 라이브러리로 직접 실행한 재현 코드다. 난수 시뮬레이션이 아니며 Monte Carlo 오차는 없다. 부동소수점 반올림은 남는다.

```python
from math import sqrt
from statistics import NormalDist

p, n = 0.8, 250
z = NormalDist().inv_cdf(0.975)
def lower(k, n):
    q = k / n
    return (q + z*z/(2*n) - z*sqrt(q*(1-q)/n + z*z/(4*n*n))) / (1+z*z/n)
threshold = next(k for k in range(n+1) if lower(k, n) >= p)
print('threshold', threshold)
for rho in (0, 0.5, 0.95):
    a, b = p + rho*(1-p), p*(1-rho)
    states = {(0, 0): 1-p, (1, 1): p}
    for t in range(1, n):
        nxt = {}
        for (h, last), weight in states.items():
            r = a if last else b
            nxt[h, 0] = nxt.get((h, 0), 0) + weight*(1-r)
            nxt[h+1, 1] = nxt.get((h+1, 1), 0) + weight*r
        states = nxt
    assert abs(sum(states.values()) - 1) < 1e-10
    tail = sum(w for (h, last), w in states.items() if h >= threshold)
    print(rho, format(tail, '.9f'))
all_hit = p * (p + 0.95*(1-p))**(n-1)
print(format(all_hit, '.9f'), format(1-all_hit, '.9f'))
```

## 계약 유지와 반론

1. **절차가 더 복잡해진다는 반론:** canonical은 이미 적절성·검정력 점검을 요구한다. P1은 이를 검증 가능한 입력·출력으로 좁히는 제안이다. SPA·자동 블록 선택을 새 필수 기능으로 추가하거나 지금 구현하는 제안은 기각한다. 구조 변화가 크면 근거 부족을 허용한다.
2. **퇴화 표본은 드물다는 반론:** 실제005930에서 빈도·rho를 측정하지 않았다. 반례는 보편95% 보장을 반박하며 실제 시장의 발생률을 추정하지 않는다. 상수 표본을 제거한 조건부 포함률로 문제를 숨기지 않는다. bootstrap이 항상 실패한다거나80%가 불가능하다는 결론도 기각한다.
3. **여러 조건을 모두 통과하니 다중성은 없다는 반론:** 사전 고정한 한 후보의 모든 요건을 동시에 요구하는 구조와 여러 후보·기간 중 하나라도 통과하면 승격하는 구조를 구분한다. 블록 민감도 세 개를 모두 요구하는 조건을 세 번 중 하나를 고르는 탐색으로 세지 않는다. 최종 주장과 실제 선택 구조에 맞춰 가족 통제를 정한다.

`A_all=H/N`, 조건부 적중률, 보합학습제외, 예정일 원장, 정시 방향이 동결된 `U_on`만의 상한, T+5 종결, 최신 공식 정정의 주 점수, 임시휴장 개정 정책을 유지한다. 평가 정정은 과거 학습 입력으로 소급하지 않는다. M1→정규화 로지스틱→얕은 XGBoost→사건 추가의 비교는 같은 종목·날짜·라벨·PIT 조건으로 짝짓는다. Brier는 공통 유효 비보합 표본과 제외 사유를 공개한다.

2026 산업사건을 참고한 M3의 겹치는 역사는 개발자료다. 후보선택에 쓴 외부 fold를 최종 시험으로 재사용하지 않는다. 적격 lockbox·동결 후 미래 검증, 기준선 개발 선택·고정, 양측95%의2.5% 하한 규격을 유지한다. 단측95%로 바꿔 합격을 쉽게 만드는 안은 채택하지 않는다. 예측구간 포함률과 방향 적중률, 역할 합의와 실측 표본 수를 구분한다.

## 원문·신선도·미확인

이번 핵심 원문은3개다. 아래는 발행 메타데이터와 직접 읽은 범위이며, 이번 날짜에 새로 발행된 논문이라는 뜻은 아니다. URL의 이후 개정 여부는 아래 확인시각 이후 미확인이다. 전체 원문·표·코드의 재현 실행을 주장하지 않는다.

| ID·발행 | 직접 확인한 원문·범위 | 재현·오염·전이 제한 |
|---|---|---|
| S1 Hansen, JBES 2005년10월, DOI 10.1198/073500105000000063 | [논문 PDF](https://bashtage.github.io/kevinsheppard.com/files/teaching/mfe/advanced-econometrics/Hansen.pdf), pp.365–367의 도입·Assumption1, §3의 bootstrap, §5의 인플레이션·rolling 설명 | 미국 연간 인플레이션의 손실 비교이며005930 방향 실험이 아니다. 원 자료 vintage·정보 마감·전체 원코드 실행은 이번 미검증. 저자 구현 취득·실행 없음 |
| S2 Patton·Politis·White, Econometric Reviews 2009, 온라인2009-02-03 | [저자기관 PDF](https://public.econ.duke.edu/~ap172/Patton_Politis_White_2009.pdf), pp.372–375 정정·AR(1) 설정·표. [출판사 서지](https://www.tandfonline.com/doi/abs/10.1080/07474930802459016) | 가상 시계열의 분산·블록 길이 목적이다. 금융 방향 정확도·percentile 포함률 보장이 아니다. 수정 Matlab 코드 링크 존재만 확인, 취득·실행 미실시 |
| S3 Morris·White·Crowther, Statistics in Medicine 2019;38:2074–2102, DOI 10.1002/sim.8086 | [출판사 원문](https://onlinelibrary.wiley.com/doi/pdfdirect/10.1002/sim.8086), §3 ADEMP·§5/Table6의 오류·포함률·검정력·MCSE·반복수 | 통계 방법 평가 지침이며 금융 예측 연구가 아니다. 부록·보조코드 전체 실행 없음. 시장·07:40 마감·005930 분모가 있는 연구로 전이하지 않음 |

신선도 점검은 이번 신규 근거3개에 한정한다. 기존02의14개 논문·Choi/Song Table7·FinCAD·NBER를 모두 다시 확인하지 않았다. 새 검색 제목만으로 최신 방향80% 근거를 추가하지 않았다. 새 알고리즘의005930 실증 우월성을 확보하지 못했으므로 모델 순서를 유지한다.

이전 실패의 처리: 앞 run의 DART 원문 차단 해소는 R1 소유 판단이며 이번 R2가 해결로 표시하지 않는다. 과거 실패 URL을 이유 없이 반복하지 않았다. 이번 S3의 PMC CAPTCHA와 UCL timeout 뒤 공식 출판사 공개 원문으로 확인했다. 인증·다른 키 우회는 없다. Canvas의 sandbox DNS 오류는 공식 승인 경로로 동일 조회1회 재시도해 읽었다. 실제 공급·PIT·권리·예측·구간 포함률·오류율·검정력은 미검증이다.

## 변경·검사·인계

변경은 이 역할 파일의 신규 작성뿐이다. 기존00~08·canonical·TEAM·운영계약·manifest·타 역할 파일은 보존한다. 기존 미커밋 변경을 되돌리지 않았고 GitHub·앱·DB·설정·예측을 변경하지 않았다. 별도 모델 호출·에이전트 생성·재위임은0회다.

직접 계산은 가상 분포의 정확 합산과 반례뿐이다. 삼성전자 학습·백테스트·전체 모의 검정력 평가를 실행하지 않았다. 이 보고의 PASS는 연구 산출물 범위이며 통계 방법·canonical 채택·실증80%의 PASS가 아니다. 후속 교차토론은 별도 phase 요청에서 처리한다.

입력 재확인·원문 확인 종료 시각: 2026-11-10T10:30:47.835218+00:00 (UTC).

입력 SHA256 재계산 결과10/10 일치:

| 입력 절대경로 | SHA256 |
|---|---|
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-direction-80-research-2026-11.md` | `107b4db7d9bb9235347c40ec1db32eb5c0ac404cdb6a54c4f68b6fabb932004c` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/buzz/TEAM.json` | `777f5a312f3b83316391106f788a190e2981f060af5aadb7442d3df30be9f8ab` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/buzz/OPERATING-CONTRACT.md` | `4c62ea31fed9fb2ec4c0bd94fc45095876dc1bd024f9f8eba3c3ca9575df33d0` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/00-brief.md` | `bfec7a41068626b3eafecee7f67a574b3dd044a4a608d73179c4b27374f134e0` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/06-discussion-record.md` | `f53eb0445347e8f4b8fabe61c440ddeddd55f581556e0edfdeab4e7aeeac3dbc` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/04-lead-evidence.md` | `2f99cd8012cf799dccec60ad3f65ccf0389728cf49e2a68929ea3c4b3a40ff41` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/04-calculation-examples.json` | `5befdfa4a38f6648e832cbd9bb5deba633c22f256241a0034a69a7bfe75294ca` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/02-quant-validation.md` | `f41330c27d57b873b1d2b88d1ac7ec0a684dee0ff87c7f8823a655f77f20ac7d` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/02-quant-rebuttal.md` | `3f513a5c52621f0cbd564befd95e7ef95296a8fb564148ce922fc33c05459edd` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/buzz/prompts/quant.md` | `bde8afa49848d295236207ce6699ce0c13d725d485c36836617e04522ef2daa2` |

검사 결과: 내장 Python 예제 재실행 PASS(213 및 표의 값 일치, 분포 질량 오차<1e-10); 입력10개 재해시 PASS; STOP 없음; 대상 신규 파일 확인 PASS. Markdown 코드펜스 균형·외부 출처 링크 형식 수동 확인. 문서 ste-lint는 NOT_RUN: 처음 cwd에서 repo root를 찾지 못해 --project-root로 보정했으나 저장소의 `docs/conventions/ste100-writing.md`가 없어 종료했다. 기준 파일을 임의 생성하지 않았고 린트 통과로 보고하지 않는다.
