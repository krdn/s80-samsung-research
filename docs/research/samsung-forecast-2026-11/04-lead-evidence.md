# 통합 책임자의 독립 확인

확인일: 2026-11-10 KST. 아래는 연구 자료와 계산 예시이며 삼성전자 모델의 실측 성적이 아니다.

| ID | 확인 근거 | 확인한 사실과 한계 |
|---|---|---|
| E01 | [Choi·Song, CSAM 2021, DOI](https://doi.org/10.29220/csam.2021.28.4.329), [저자 소속 대학 기록](https://pure.ewha.ac.kr/en/publications/is-it-possible-to-forecast-kospi-direction-using-deep-learning-me/) | 원문 검색 색인의 §2·§3·Table 7을 확인했다. 2016-01-04~2019-12-30 자료, 삼성전자 일별 방향 1D-CNN d=10의 평균 정확도 0.544. 36개 test set 평균이며 현재 삼성전자 모델의 기대 성능이나 상한이 아니다. DOI 직접 열기는 timeout/redirect 오류였으므로 원문 직접 접속 검증과 구분한다. |
| E02 | [Gu·Kelly·Xiu, NBER 25398](https://www.nber.org/papers/w25398) | 비선형 상호작용을 이용한 자산 위험 프리미엄 예측 연구다. 삼성전자 다음날 방향 80%의 증거로 전용하지 않는다. |
| E03 | [Chen·Guestrin, XGBoost](https://arxiv.org/abs/1603.02754) | 정규화된 tree boosting을 비교 후보로 삼을 근거다. 특정 종목의 정확도 보장은 없다. |
| E04 | [Guo 등, ICML 2017](https://proceedings.mlr.press/v70/guo17a.html) | 모델 confidence와 실제 정답 확률이 다를 수 있다. 원 실험은 이미지·문서 분류이며 주가에 그대로 검증된 보정법은 아니다. |
| E05 | [Geifman·El-Yaniv, ICML 2019](https://proceedings.mlr.press/v97/geifman19a.html) | 예측 보류는 risk–coverage 절충을 만든다. 일부 날짜만 맞힌 결과를 매일 예측 성적으로 바꾸면 안 된다. |
| E06 | [Bailey 등, 저자 원문](https://www.davidhbailey.com/dhbpapers/backtest-prob.pdf) | 다수 전략 중 좋은 백테스트를 고르는 선택 과정 자체가 과적합을 만든다. 원문은 투자 전략 백테스트를 다루며 방향 정확도 추정과 동일 문제는 아니다. |
| E07 | [Glasserman·Lin, 2023](https://arxiv.org/abs/2309.17322), [Ludwig 등, NBER 33344](https://www.nber.org/papers/w33344) | 과거 뉴스의 발행 시각만 제한해도 LLM 학습에 포함된 미래 정보가 제거되는 것은 아니다. 폐쇄 모델의 과거 텍스트 replay는 오염 가능성을 표시한다. |
| E08 | [Gibbs·Candès, NeurIPS 2021](https://proceedings.neurips.cc/paper_files/paper/2021/hash/0d441de75945e5acbc865406fc9a2559-Abstract.html), [Zaffran 등, ICML 2022](https://proceedings.mlr.press/v162/zaffran22a/zaffran22a.pdf) | conformal은 예측집합 포함률 문제다. 장기 포함률·구간 폭·조건부/단기 실패를 함께 봐야 하며 방향 80% 보장이 아니다. |
| E09 | [NIST Wilson 식](https://itl.nist.gov/div898/software/dataplot/refman2/auxillar/agrecoul.htm), [계산 파일](04-calculation-examples.json) | Python 표준 math로 양측 95% Wilson 구간을 계산했다. 200/250=80%의 하한은 약74.60%, 215/250=86%는 약81.15%. 독립성 가정의 설명용 예제다. |
| E10 | [로컬 공식 API 검사 기록](../../verification/official-live-check.json), [기존 KRX 계약](../krx-contract.md) | 저장된 2026-11-07 검사 기록은 KRX401·DART100·수집0건이다. 이번 연구에서 재인증·키 접근·인증 실호출을 하지 않았으며 현재 자격 증명 상태를 새로 판정하지 않았다. |

## 계산 재현

`04-calculation-examples.json`의 `z=1.959963984540054`와 `correct`, `n`에 대해 `p=correct/n`을 사용한다.

```text
den = 1 + z²/n
center = (p + z²/(2n)) / den
half = z × sqrt(p(1-p)/n + z²/(4n²)) / den
interval = [center-half, center+half]
```

250일 중 50일만 예측해40일 맞히면 선택 적중률80%, 제공률20%, 전체 예정일 대비 정답률16%다. 보류를 허용하더라도 세 숫자를 함께 공개해야 한다.

## 해석

삼성전자에서 80%를 달성한 실험은 이 작업에서 실행하지 않았다. 공개 논문의 다른 시장·기간 성과, 전문가 역할의 합의, 모델 confidence, 넓은 예측구간은 그 대체 증거가 될 수 없다. 이 판단은 확인 자료를 결합한 연구자의 종합이다.
