# R3 반론 — PIT·사건 계보·fallback·검정 적용

**PASS — 이번 R1/R2 제안의 산업 적용 검토 한정.** SEC 문구 정밀화(O1)·M2 fallback 명료화(O3)를 조건부 지지한다. Giacomini·White(2006)는 후속 검토 근거 보관(D1)에 동의하되 새 검정 채택은 NO_CHANGE다. 산업 모수 UNKNOWN, 실제 등록 미완료, 월간 감사 PARTIAL, 방향80% UNVERIFIED, 새 실험 NOT_RUN을 유지한다.

- run_id: `cycle-20261113-04e426d5cf07210e4ec5bbdd7a34b7ba84670cd9722231fef7c2cd687a21108e`; phase: `research`; role: `industry`.
- 요청: `1d7edef3e9fb801f66fed3b2d6149fb7dd4302dbda8218540285150093538843`. 산업 조사와 같은 요청·동결 입력10개를 사용한다.
- [이번 R1](data-research.md)·[이번 R2](quant-research.md), [정본](../../../../samsung-direction-80-research-2026-11.md) §5~6, [직전 R3 답변](../cycle-20261110-319ad15f64bde8c638fa1f11b872ebc379ad5cdb8196090653385833ab88e09d/industry-answer.md)을 대조했다. 기업 원문은 [이번 산업 조사](industry-scenarios.md) S1~S8의 확인 범위를 인용한다. 이 반론에서 별도 원문 조회를 추가하지 않았다.
- 신원·발신자·STOP·중복·기한·권한 확인은 산업 조사에 연결한다. 현재 context의 명시 reply-to를 사용하며 run root·phase를 함께 적는다.

## 사실·추론·제안의 대조

| 쟁점 | 확인 사실과 R3 판단 | 반론·반증/실패조건 |
|---|---|---|
| R1 O1: SEC 세 범위 | R1 S1은 당일 처리 정정→당일 저녁 인덱스, 후일 삭제→옛 daily/feed/oldload 미반영, full/quarterly→토요일 PAC 반영으로 구분했다. R3는 이번 SEC 원문을 독립 재조회하지 않았다. 정확한 범위로 줄이는 수정은 산업 PIT와 충돌하지 않음 | SEC 서비스 설명을 삼성 DART·IR·TSMC 전체의 정정 처리 규칙으로 확대하면 근거 범위 오류. 당시 수신·본문 복원·현재 상태·용도별 권리는 계속 별도다. R1 근거 범위와 같은 상세가 이미 있으면 중복 추가 NO_CHANGE |
| R2 O3: fallback | 제안문 ‘M2 자체 입력이 적격이고, fallback 발동·적용 규칙이 시험 전에 등록된 경우에만 M2 적용’은 정본 L165·직전 R3와 일치. 모호함을 줄이는 편집으로 지지 | 문장 존재를 실등록·현재 실행 증거로 읽으면 실패. M2도 시각/권리 부적격이면 대체 불가. M3 결측을 확인된 무사건0이나 U로 바꾸거나 해당 날짜를 삭제하면 평가 무효 |
| R2 D1: Giacomini·White | R2는 방향 손실·추정법/추정창·내부 선택을 포함하되 유한 최대 추정창 등 조건이 있다고 보고. 원논문의 후속 적용 검토용 보관에 동의. R3의 이번 논문 독립 감사는 아님 | rolling 명칭·방향 손실 가능성만으로 희소/지속 사건·변하는 추출기·fallback·전체 A_all 손실의 조건 충족을 인정할 수 없음. 상대 예측력 검정이 절대80%·White RC·양측95% 기준을 대체하지 않음 |
| 유지/만료·정정·단계 | 직전 답변과 정본에 원칙은 있지만 사건별 상세 실등록은 미확인. 새 URL·재수신·동일 분기/월의 재인용은 새로운 시장 사건이 아님 | 정확한 가용시각·계보가 불명인데 최신 자료 우선·신호 무기한 유지·만료 재시작을 적용하면 PIT/선택 오류. 상세 규칙을 성적 뒤에 고르면 새 후보와 새 미사용 시험이 필요 |
| 새 NVIDIA 사건 | S5는11월12일 실제 경영진 변경 발표이며 회사의 연속성 기대와 구분 가능. 삼성 주문·납품 변경은 공지가 입증하지 않음 | ‘새 사건이 있다’와 ‘삼성 방향 feature로 적격하다’는 별개. 고객사 사임을 HBM 주문 취소·양산 지연으로 매핑하면 사건 종류/전달 경로 오류. 새 자동 부호·기간·모수는 채택하지 않음 |
| Micron 예정 행사·BOK 목록 | S6은 미래 행사 공지, S8은 새 통계 제목/날짜 목록. 실제 발언·거시 수치·공표시각은 별도 확인 필요 | 일정만으로 미래 가이던스·자료 내용을 생성하거나 월간/분기 숫자를07:40 일별 FX·수급으로 대체하면 누수·대체 측정 오류 |

**추론:** O1/O3는 기존 규칙의 의미를 좁히거나 명료화한다. 작은 문구 제안 두 개가 사건 등록·자료 권리·실수신·통계 검증의 잔여를 해결하지는 않는다. D1도 연구 참고문헌 보강에 한정하면 기존 계약과 충돌하지 않는다. 이미 대응된 설명은 추가 반복하지 않는다.

**제안:** 총괄 후보에서는 O1/O3의 해당 문장만 필요한 경우 다듬고, 이번 산업 신규 공지는 출처·범위·미확인으로 보관한다. 새 이벤트 모형·거버넌스 특징·만료 일수·출처 우선순위·검정법을 추가하는 안은 현재 근거·범위를 넘으므로 기각한다. 원래 예측·입력·예정일 원장은 보존한다.

## 사건별 판단 경계

| 사례 | 현재 구분과 적격성 한계 | 철회·보류 |
|---|---|---|
| 삼성 배당 | S4는 기존3Q26 결의 재확인. 별도 지급 완료·정정의 이번 증거 없음. 직전 답변의 지급 예정일을 이번 신규 원문 확인처럼 쓰지 않음 | 예정일 경과·새 링크만으로 지급 완료나 새 단계 생성 금지. 같은 결의 출처 수가 늘어도 독립 호재/사건수를 늘리지 않음 |
| TSMC 월매출 | S7은 직전 확인한 같은 회사·보고월·연결 범위의 발표. 정정 전후 연결은 미확인 | 같은 월의 재확인으로 새 사건 발동·만료 재시작 금지. 삼성 수주/연결손익·surprise로 바꾸면 근거 부족 |
| NVIDIA 변경과 이후 실적/콜 | 실제 인사 변경과 예정 실적 공지는 행위·내용이 다름. 하나의 공지에 함께 있어도 독립 방향 증거 두 개로 합산하지 않음 | 후속 문서의 내용·발표/수신/권리·사전등록 규칙이 없으면 과거 입력 부적격. 인사 변화가 없었다고 사실을 지우지 않으며 신호 사용과 연구 기록 보존을 구분 |
| zHBM·HBM4 | S2의 개발 구조 설명과 S1의 기존 HBM4 판매는 제품·단계가 다름 | 개발 계획을 상용화·납품·매출로 합치면 라벨 무효. 시장 방향 오답과 별도로 기록 |

실제 공식 출처 간 충돌을 이번에 발견했다고 주장하지 않는다. 충돌 시 영향받은 속성과 그 신호는 보류하고 확인된 사실·버전 이력은 보존한다. 회사·기간·제품·행위·범위·시각이 대응하지 않으면 최신 문서가 옛 문서를 정정한다고 단정하지 않는다. 유지/만료가 미등록인 신호를 무기한 활성화하지 않는 직전 원칙을 유지한다.

## R1/R2에게 직접 묻는 핵심 질문

아래는 총괄이 다음 교차검토 phase에 전달할 질문이다. 별도 멘션·직접 호출·재위임은 하지 않았다. 상대가 답했거나 합의했다고 쓰지 않는다.

1. **R1:** SEC O1 대체문이 DART·삼성 IR·해외 회사 공지의 공통 정정 우선순위를 정한 것이 아님을 확인하는가? 날짜만 있는 NVIDIA11월12일 공지·TSMC 같은 보고월 재확인에서, 당시 사용 적격·현재 상태·내용 복원·용도별 권리 중 무엇이 미확인이며, 정확한 시각 부재를 이유로 역사 feature를 제외해도 예정일·동결 예측은 남기는가?
2. **R2:** O3 명료화와 D1을 채택해도 실제 만료/충돌/fallback 규칙 등록과 검정 적격성은 미완료인가? 인사 변경처럼 희소한 사건·같은 분기 상태·M2 fallback이 섞인 전체 예정일에서, 방향 손실·보합/보류/누락을 포함한 실제 A_all 손실·재학습/내부 선택을 어떤 가정에 대응해야 하며, 그 대응·유한표본 근거가 없으면 통계적 승격을 계속 보류하는가?

핵심 반론은 세 가지다. 공식 기업 발표의 존재는 삼성에 대한 순효과·기대 대비 surprise의 증거가 아니다. 문구 명료화·다른 역할의 동의는 실제 규칙 등록이 아니다. 긴 날짜 원장과 많은 재인용은 희소 사건의 독립 표본을 늘리지 않는다. 산업상관·좋은 실적·LLM 합의도 방향80%를 입증하지 않는다.

## 검증·인계

입력10/10·TEAM/CLI 공개키·요청/manifest·STOP/중복/기한을 확인했다. 저장 전후 재해시·두 소유 출력·상대 링크·코드펜스·필수 상태·공식 대상8개·시각 변환을 확인해 회신한다. ste-lint는 프로젝트 기준 파일 부재로 NOT_RUN이다. 새 실험·학습·백테스트·실제 오류율/검정력·정시 운영 검증은 NOT_RUN/UNVERIFIED다.

산업 조사와 이 반론만 신규 작성한다. 역사00~08·정본·TEAM·계약·manifest·타 역할·앱·DB·설정·과거 예측·GitHub는 수정하지 않는다. 현재 지정 phase 뒤의 교차검토·industry-answer·후보·외부검토는 별도 요청이다. 적용 스킬은 buzz-cli·evolve-docs-write다. 연구 전용 소유권이 스킬의 색인/추가 리뷰/커밋 절차보다 우선한다.

## 동결 입력

아래10개를 읽고 요청 SHA와 대조했다. 과거 답변에 적힌 옛 SHA를 이번 입력으로 대신 쓰지 않는다.

| 입력 절대경로 | SHA256 |
|---|---|
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-direction-80-research-2026-11.md` | `da3dad78a4f3b4fd385973d8b4a856b1841c8d8d45af9a9602b1c47c04d83083` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/buzz/TEAM.json` | `777f5a312f3b83316391106f788a190e2981f060af5aadb7442d3df30be9f8ab` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/buzz/OPERATING-CONTRACT.md` | `02a8c642d771195d24eb581e0f8b5a76177552d4ae6eaea3c6c705b3a18e9142` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/buzz/runs/cycle-20261113-04e426d5cf07210e4ec5bbdd7a34b7ba84670cd9722231fef7c2cd687a21108e/data-research.md` | `9d90bafa83c973725c0337d90c993bf2db717c05e987e0dfc14a1770fee8b2b0` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/buzz/runs/cycle-20261113-04e426d5cf07210e4ec5bbdd7a34b7ba84670cd9722231fef7c2cd687a21108e/quant-research.md` | `d19c266b50f32507d74140ff4b999e9b5dc06d6398ec1dca54a283d196f0713a` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/00-brief.md` | `bfec7a41068626b3eafecee7f67a574b3dd044a4a608d73179c4b27374f134e0` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/03-industry-scenarios.md` | `6fcdd15f8e584b003b90acfa782d461fac4ba107c81c02fcfa08f6bc452f1821` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/03-industry-rebuttal.md` | `4393109803545d78cb11e204ce27e3247d382d213a1cd940ce51f54c46aac746` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/buzz/prompts/industry.md` | `1818b8812ca3f63b6e112754cb9956942c97a35c09ead7675565dffac0b8b7dc` |
| `/home/gon/dev/test/test-samjeonnix/docs/research/samsung-forecast-2026-11/buzz/runs/cycle-20261110-319ad15f64bde8c638fa1f11b872ebc379ad5cdb8196090653385833ab88e09d/industry-answer.md` | `973d77d6dc9daada274ca66a29e4c444a2b2a99cfd858a443a18aa8e0bdd7467` |
