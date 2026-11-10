# 실행 상태 — 삼전닉스

- 업데이트: 2026-11-07 23시대 KST. 상태 `awaiting_user`, 단계 `08 로컬 부분 전달`.
- 프로젝트: `/home/gon/dev/test/test-samjeonnix`, 실제 호스트 `krdn-lenovo`.
- 목표: 두 종목의 출처·예측·평가·개선 이력을 로컬 웹앱으로 연결하고 검증·실행·복구·잔여 실운영 조건을 인계. **전체 제품은 미완료**다.
- 기준: HERDR-PROJECT.md R01~R07·AC01~AC12, HERDR-OPERATIONS.md, docs/PROJECT-BRIEF.md. 이전 명세 작성에서 이번 구현 요청으로 확대했다. 원래 AC는 축소하지 않는다.
- 허용: 프로젝트 내 구현·로컬 실행·검증·유용한 독립 Herdr 작업자, krdn/test-samjeonnix 비공개 생성·push·PR. 추가 비용·merge·공개 변경·운영 배포 미승인.
- 주 책임자: 현재 Codex 세션. 처음 관찰한 전경 t3m. 환경 HC_TERMINAL_ID=t2d와 불일치하므로 새 실행은 절대 cwd·명시 이름/라벨을 사용한다. 이번 자식 실제 parent는 t2d, die_with_parent=false를 기록하며 t3m 소유로 가장하지 않는다.

## 구현과 검증

- React/TypeScript·Node24/Fastify·SQLite·pnpm. 7개 화면, live/demo DB 분리, 시점 필터·불변 예측/입력·평가 정정·오류 가설·후보 병행·과거 재생·승격 차단.
- 공식 RSS 4곳 최초65개 원문 수집, 엔티티 디코딩 정정2개를 새 개정으로 추가. 본문 독해·독립 사건·인과 분석은 미구현.
- KRX/DART 어댑터와 OS 보안 저장소 경로 구현. 보안 저장소 등록은 확인했으나 실제 호출에서 KRX HTTP401, DART 코드100으로 실패. DART 저장값은 공식40자리 길이와 다르며 안전 재입력도 길이 검사를 통과하지 못해 기존 값을 유지했다. KRX 서비스 승인은 사용자 답변 ‘확인 필요’. 한국투자증권·공식 거래 캘린더·가격 비교 가능성은 후속 연결.
- `pnpm check`: 타입·31개 테스트·빌드 PASS. `docs/verification/check.txt`.
- `scripts/verify-browser.py`: 37개 검사 PASS, 14화면 axe 위반0, 390px 흐름·키보드·필터·표·API 실패/회복. 추가 320px 4화면 가로 넘침 없음. 실제 Fed 원문 링크 새 탭 열기·제목 확인, 승격 차단 오류 확인.
- live/demo 백업 사본 readOnly 검사 및 재시작 후 원래 예측/평가/방법 불변 확인. `docs/verification/runtime-persistence.json`.
- 외부 리뷰 claude-opus-5-5/high 요청·반환 일치. 가격정정·분모·RSS·기준선·복원·재시도 등 수정. 수정분1회 집중 확인에서 원래 지적1~9 해결, 새 CRITICAL/HIGH 없음. 남은 LOW 조건은 review-resolution.md에 보존. 원문/처리: docs/verification/external-review.md, review-resolution.md.
- 원래 AC의 PASS/NOT_RUN 및 근거: docs/verification/acceptance.md. 테스트 성공을 실제 시세·08시·예측력 검증으로 확장하지 않는다.

## 실행 앱과 복구

- 앱: http://127.0.0.1:4318, Herdr terminal `t3y`, name `samjeonnix-web-final`, cwd 일치, `--outlive-parent`. 시작 `pnpm build && pnpm start`; 중지 `herdr-core keys t3y ctrl+c` 또는 실행 터미널 Ctrl+C.
- 지도: http://127.0.0.1:4319, terminal `t3w`, name `samjeonnix-map`. `.project-map/project.json`/`index.html`, AI 실행 미연결. 렌더 후 미리보기 재시작 필요 여부 확인.
- 데이터: data/live.sqlite, data/demo.sqlite. 백업: backups/live-20261107-verify.sqlite, backups/demo-20261107-verify.sqlite. Git 제외. 복구는 README의 새 폴더 방식.
- 부모 종료 비종속 설정은 확인했다. 실제 로그아웃·세션 종료·OS 재부팅 뒤 지속 실행은 미검증. 상주 서비스·자동 재시작은 설치하지 않았다.

## GitHub

- 저장소 https://github.com/krdn/test-samjeonnix private 확인. 기준 명세 main `7578907a7ac0dd9a5434c75cb8c2f448e1a61c42` 원격 일치.
- branch `feat/local-research-workbench`, 구현 commit `f876a4738fd621212d3c5ffded99b47a84913d6f` push 후 원격 SHA 일치. 기준 이슈 https://github.com/krdn/test-samjeonnix/issues/1 OPEN. Draft PR https://github.com/krdn/test-samjeonnix/pull/2 OPEN·draft·head 확인. 구현 SHA의 push/PR Actions 두 실행 PASS: https://github.com/krdn/test-samjeonnix/actions/runs/42383233932. 문서 전달 후 최신 head는 PR에서 재조회한다.
- 기능별 사용/제약: .github/project-management.md. rulesets는 현 private 플랜에서403, 보호 설정을 변경하지 않았다.

## 적용 스킬과 협업

| 스킬 | 실제 읽은 경로·참조 | 적용 근거 |
|---|---|---|
| gon-project-lifecycle | /home/gon/.agents/skills/gon-project-lifecycle/SKILL.md; project-start, work-cycle, github-management, delivery | 기준 재사용·권한·원격 기준본·이슈·검증과 인계 연결 |
| gon-web-engineering | /home/gon/.agents/skills/gon-web-engineering/SKILL.md; architecture, project-setup, frontend, backend-data, verification | 기술 대안·계약·DB 불변·웹/API·검사 |
| agent-browser | /home/gon/.agents/skills/agent-browser/SKILL.md; 실제 CLI core/help | 독립 세션에서 14화면·모바일·오류·원문 이동·접근성 |
| gon-project-map | /home/gon/.agents/skills/gon-project-map/SKILL.md; data-contract | 6노드 지도·렌더·초안 저장/복원/복사·모바일 확인 |

T001 Codex gpt-6-astra/high, Herdr t3p: UI 소유권 반환 완료, docs/ai/results/T001.md 수용. 요청 모델·argv·수신은 확인, 반환 모델은 unverified. 이후 수정·통합 검증은 주 책임자가 수행한다. 추가 작업자 없음.

## 미완료와 다음 행동

| 미완료 | 영향·다음 행동 | 담당·재개 조건 |
|---|---|---|
| KRX/DART 인증 실패 | KRX401은 키·서비스 승인 확인, DART100은40자리 키 재입력 필요. GUI secret-prompt→secret-tool, 비밀값 채팅 금지 | 사용자 유효 키 안전 입력·서비스 승인 확인, 주 책임자 재검사 |
| KRX 08시 자료 공급/07:40 마감 충돌 | docs/research/krx-contract.md. 한국투자증권 포함 공급자 가용성·공식 캘린더·조정 근거 검증 | 주 책임자, API 권한·자료 확보 |
| 원문 해석·사건 독립성·실제 원인 조사 | 지금은 RSS 메타데이터·가격 빈도 기준선. 품질 자료와 승인된 모델 경로 필요 | 주 책임자, 원문 이용권·비용/모델 결정 |
| 실제08시·120일 자료/20일 전향·승격 | 모의 검사와 실운영을 구분. 기준 미정으로 승격 계속 차단 | 상시 실행 환경·기간별 자료 확보 후 |
| merge·운영 배포·상주 서비스 | 현재 로컬 비공개 작업대 | 별도 사용자 요청 |

실패 기록: commit 때 기존 graphify 훅이 설치 Python을 찾지 못해 경고했으나 commit은 성공했다. 전역 훅을 수정하거나 graphify 성공으로 표현하지 않았다. core PATH의 pnpm 미발견은 절대 실행파일로 해결. 빌드 후 서버를 재시작해야 새 정적 자산 경로가 등록됨. a11y 색 대비·landmark 수정 후 재검사. 브라우저 대기는 관찰한 제목/로딩 상태를 사용하며 없는 문구를 기다리지 않는다.

다음 한 가지 행동: DART40자리 키 보안 재입력·KRX 서비스 승인 확인 후 `pnpm official`의 인증·실제 자료를 확인하고 공식 캘린더·가격 비교 가능성 연결을 진행한다. 전체 제품 수용 기준은 완료로 닫지 않는다.

재개 첫 요청: `$gon-project-lifecycle` 현재 HERDR 두 문서, 이 STATE, PROJECT-BRIEF, GitHub 이슈/PR과 검증 결과를 읽고 첫 미완료인 공식 데이터 연결부터 이어가라. 실제 사용자 답변·권한은 보존하며 전체 제품 완료로 처리하지 말라.

## 2026-11-10 별도 연구 요청

- 사용자 목표: 삼성전자 다음 거래일 상승·하락 방향 적중률80%를 위한 API·논문·알고리즘 연구 문서. 기존 앱의 공식 데이터 연결 재개와 구분한다.
- 현재 탭의 주 책임자 `t4r`, 전문 pane `t4s`(데이터), `t4t`(퀀트), `t4v`(산업)에서 독립 연구·상호 반박·최종 응답을 수행했다. 동시 작업자2명 상한을 지켰다.
- [통합 연구 문서](research/samsung-direction-80-research-2026-11.md), [역할별 근거·토론과 통합 결정](research/samsung-forecast-2026-11/06-discussion-record.md), [문서 검토·검증](research/samsung-forecast-2026-11/07-review-and-verification.md).
- 연구 문서의 성능 실증은0건이다.80% 달성·보장, API 인증 성공·07:40 수신, 미래250거래일 성과를 주장하지 않는다. 기존 제품의 미완료 AC는 그대로 남는다.
- 앱·DB·공유계약·설정·기존 예측은 변경하지 않았다. 이번 연구의 commit·push·PR·배포는 수행하지 않았다.

## 2026-11-10 Buzz 정기 연구 구성

- 사용자 요청으로 Herdr에서 Buzz를 직접 조작해 비공개 `S80-삼성전자-예측연구` 채널을 생성했다. 임시 Orca 실행은 사용자 정정 뒤 종료했으며 이후 사용하지 않았다.
- 기존 총괄·R1·R2·R3·외부검토 역할을 이어받은 전용 Buzz 신원5개를 생성·실행하고 소유자와 멤버십을 재조회했다. 이름은 `S80-총괄`, `S80-R1-데이터`, `S80-R2-퀀트`, `S80-R3-산업`, `S80-외부검토`다. 원래 Herdr 세션 자체와 동일 신원은 아니다.
- 5개 실제 회신·파일 SHA, 총괄↔퀀트 팀 왕복, 고정 root, 정확 후보 SHA 외부검토 PASS를 확인했다. 초기 총괄 bootstrap의 스레드 불일치와 비차단 cwd 표현 지적은 시범 이력에 보존했다. 연구 정본 전체의 재승인이나 예측 성능 PASS가 아니다.
- 매주 화·금18:30 KST Workflow를 소유자 신원으로 활성화하고 서버 상태를 재조회했다. 같은 Workflow를 수동 실행해 실제 메시지·총괄 수신·새 run 및 데이터/퀀트 독립 조사 요청 발행을 확인했다. 첫 갱신은 진행 중이며 완료·첫 달력 예약 발생·80% 성능은 미검증이다.
- [운영 상태](research/samsung-forecast-2026-11/buzz/STATUS.md), [계약·중지·재개](research/samsung-forecast-2026-11/buzz/OPERATING-CONTRACT.md), [실제 구성](research/samsung-forecast-2026-11/buzz/TEAM.json), [시범 결과](research/samsung-forecast-2026-11/buzz/runs/bootstrap-20261110/pilot-result.md), [첫 갱신 근거](research/samsung-forecast-2026-11/buzz/evidence/first-refresh-live.json).
- 새 연구는 독립 조사→산업 검토→교차반박·답변→문서 검사→외부검토→버전 보존·정본 갱신/NO_CHANGE로 연결한다. 현재 TEAM·운영 계약은 요청 입력 SHA 보존을 위해 동결했다. 실제 진행은 run manifest를 조회한다. Buzz Desktop·네트워크가 실행 중이어야 하며 재부팅 후 재개는 미검증이다.
- 기존 앱의 공식 데이터 인증·실운영 AC는 여전히 미완료다. 이번 구성으로 앱·DB·공유계약·기존 예측·다른 에이전트의 모델/권한을 변경하거나 commit·push·배포하지 않았다.
- 최초 실갱신 도중 운영자 측 TEAM 진행 상태 추가가 동결 입력 SHA를 바꿔 두 역할이 올바르게 BLOCKED 처리했다. TEAM은 요청 당시 바이트로 복원했고, 작업자 종료와 이전 run 종결 뒤 새 Workflow 요청으로 재개했다. 진행 상태는 별도 evidence로 분리했다. 실패·복구 이력은 첫 갱신 근거에 보존하며 연구 성공으로 바꾸지 않는다.
- 재개한 새 run에서 데이터·퀀트 각각 입력10개 일치와 실제 공식 원문·방법론 조사를 관찰했다. 현재 연구는 Buzz에서 진행 중이다. 구성·실행 확인의 완료와 후속 연구 갱신 완료를 구분한다.
