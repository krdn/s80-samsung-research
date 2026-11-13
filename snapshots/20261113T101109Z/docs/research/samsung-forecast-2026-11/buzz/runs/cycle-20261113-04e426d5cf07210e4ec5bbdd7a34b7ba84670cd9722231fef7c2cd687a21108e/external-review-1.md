# S80 외부검토 review-1 — cycle-20261113-04e426d5…

**판정: PASS.** 대상 후보 SHA256 `7b9d88f7961a60681763f8f60b6b95bbc6637342e0b15fe38f1f9313542711b8`이 요청값과 일치한다. 미해결 주요 결함은 없다. 비차단 관찰 2건만 남긴다. 방향80%는 **UNVERIFIED**, 새 실험 **NOT_RUN**, 월간 감사 **PARTIAL**을 유지한다.

- 검토 시각: 2026-11-13T10:08Z 전후(UTC). 검토자: S80-외부검토(pubkey `75e1c1fe…49e7`, TEAM.json L260 role=review 확인).
- 실행 모델: 세션 자가보고 claude-opus-5-5. 제공자 반환 모델·effort는 **UNVERIFIED**.
- 이 판정은 문서 정합성 판정이다. 역할 3개의 합의 수나 이 PASS를 성능 근거로 세지 않는다.

## 1. 입력 검증 (사실)

- 요청 입력 17개 SHA256을 직접 재계산했다. 17/17 일치. baseline·before.md 모두 `da3dad78…3d04083`.
- `diff -u baseline candidate`를 직접 생성해 `candidate.diff`와 대조했다. 헤더 외 내용이 일치한다(DIFF_MATCH).
- STOP 파일 없음. external-review-1.md·review-verdict-1.json 기존 파일 없음(중복 처리 아님).
- 후보 상대링크 고유 대상 15개를 canonical 위치(`docs/research/`) 기준으로 직접 확인했다. 누락 0. 총 개수 32는 document-checks.json 보고 인용이다.
- 핵심 계약어 출현 수를 baseline·후보에서 비교했다. A_all 9/9, 보합 5/5, 보류 23/23, T+5 1/1, 07:40 9/9, 07:55 1/1, 08:00 3/3, M3 10/10, lockbox 6/6, 양측 4/4, 95% 6/6, 다중 1/1. diff가 L159·문서 끝 외 다른 줄을 건드리지 않으므로 해당 계약 문장은 원문 그대로다.
- Wilson 예시 4개 재계산은 document-checks.json 보고 인용이며 직접 재계산하지 않았다. diff에 새 수치가 없어 이번 판정에 영향이 없다.

## 2. 변경 (1) — L159 SEC 첫 문장 대체

**SEC 원문 직접 확인(사실).** https://www.sec.gov/search-filings/edgar-search-assistance/accessing-edgar-data, 게시 2021-03-23, "Last Reviewed or Updated: June 26, 2024". 2026-11-13T10:08Z에 HTTP로 직접 받아 `Post-acceptance corrections and deletions` 절을 읽었다. 원문 범위:

1. "Corrections processed during a given business day will be incorporated in the indexes built that evening."
2. "removals processed on subsequent business days will not be reflected in any previous daily, feed, or oldload index."
3. "The full and quarterly index files are rebuilt weekly, early on Saturday mornings, so that any post-acceptance correction (PAC) deletes or updates are incorporated."

**판정: 원문 범위를 넘지 않는다.** 후보의 "당일 처리한 정정→당일 저녁 인덱스", "후일 삭제→이전 daily/feed/oldload 미반영", "full/quarterly 토요일 이른 시각 재구축→PAC 삭제·갱신 반영"은 위 세 문장에 각각 대응한다. 직전 O1(‘후일 정정·삭제’ 포괄 표현)은 해소됐다. 원문은 후일 *정정*(삭제가 아닌 갱신)의 이전 daily 처리를 따로 말하지 않는다. 새 확인 절이 이를 "정한 것이 아니다"라고 명시해 과잉 일반화를 막는다.

**뒤 문장과의 충돌: 없다(추론).** 이어지는 "어느 하나도 당시 공개 상태 전체의 완전한 대용으로 쓰지 않는다", 적격성·현재 상태·복원·권리 분리, 예정일·동결 예측 보존, 적격 자체 입력+사전등록 M2 fallback·없으면 보류, "특정 공시의 실제 삭제나 보관 허용을 확인한 결론이 아니다"는 그대로다. 새 첫 문장은 인덱스 반영 방식을 설명할 뿐 PIT 적격을 승격하지 않는다. 오히려 "이전 daily가 후일 삭제를 반영하지 않는다"는 사실이 "현재 full/quarterly를 당시 상태 대용으로 쓰지 않는다"는 뒤 문장의 근거가 된다.

## 3. 변경 (2) — 문서 끝 run 확인 절

- 기존 cycle-20261110 확인 절(L237~243)과 모순 없다. 신규 채택 없음, 사건 규칙 실등록 미완료, PARTIAL·NOT_RUN·UNVERIFIED가 같다.
- NVIDIA 인사·Micron 일정을 "감시용 연구 사실"로 한정하고 삼성 주문·출하 증거·새 특징·방향 부호·만료 규칙으로 쓰지 않는다. R3 industry-answer L3·R2 quant-rebuttal의 결론과 일치한다(보고 인용).
- "Micron 공지는 일부 역할이 본문에 접근하지 못했다"는 R1 data-rebuttal(접근 실패)·R3 industry-answer L51(접근 실패)과 R2·R3 research(본문 확인 보고)의 혼재를 정확히 반영한다. 이 검토는 NVIDIA·Micron 원문을 직접 확인하지 않았다(역할 보고 인용).
- "NBER w33344 접근 실패"는 quant-research.md L57(HTTP403, BLOCKED_SOURCE_ACCESS)과 일치한다.
- O3·D1을 반영하지 않은 결정: 후보 L159에 "자체 입력이 적격이고 사전등록된 M2 fallback만 적용하며 없으면 보류"가 이미 있다. R1·R2·R3가 정본 L165·190~197에 같은 조건이 있다고 보고했다. 중복 추가하지 않은 것은 결함이 아니다.

## 4. 핵심 검토 항목

| 항목 | 결과 |
|---|---|
| 실측 없는 80% 달성·보장 | 없음. UNVERIFIED 유지 |
| 다른 지표로 교체 | 없음 |
| 누수·PIT | 새 입력·특징 채택 없음. SEC 문장은 역사 적격을 승격하지 않음 |
| 분모 선택·A_all | 계약 문장 미변경 |
| 정정 선택 | SEC 설명을 타 기관 공통 우선순위로 확대하지 않음을 명시 |
| 비교 기준선·검정 선택 | 미변경. D1(Giacomini·White) 미채택 |
| LLM 오염 | 새 산업 사실을 과거 입력으로 소급하지 않음 |
| 미승인 자료 | 유료·인증 자료 없음 |

## 5. 비차단 관찰

- **N1 (반복, 문서 끝 L249 부근).** 새 절의 마지막 문단("전체 월간 감사는 여전히 PARTIAL이다… 실측 성능 향상의 근거가 아니다")이 직전 절 마지막 문단과 거의 같다. 충돌은 없다. run별 기록 형식이라 수정 불요. 원하면 차기에 "직전 절과 같음, 추가 미완료: NBER w33344 접근 실패"로 줄일 수 있다.
- **N2 (L159 "토요일 이른 시각").** 원문도 시간대를 밝히지 않는다. 후보도 시간대를 붙이지 않아 정확하다. 이 시각을 07:40 KST 마감과 맞춰 쓰려면 시간대 미확인을 별도로 기록해야 한다. 현 문서는 그렇게 쓰지 않으므로 수정 불요.

## 6. 미확인·잔여

- NVIDIA·Micron 원문, Wilson 재계산, 링크 총수 32: 이 검토에서 직접 확인하지 않음(보고 인용).
- 공급자별 과거본·07:40 실수신·용도별 권리, 사건 만료·정정 우선순위·fallback 실등록, 오류율/검정력: 미완료.
- 제공자 반환 모델·effort: UNVERIFIED. ste-lint: 기준 파일 부재로 NOT_RUN(보고 인용).
