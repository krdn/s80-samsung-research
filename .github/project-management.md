# GitHub 기록 기준

기준 저장소: https://github.com/krdn/s80-samsung-research (현재 공개 저장소; 이번 작업에서 공개 범위 변경 없음).
사용자 요청: S80 연구에 사용된 Buzz 설정·작동·진화 방법과 작업 산출물을 새 저장소에 보존.

| 기능 | 적용 |
| --- | --- |
| documents | used: 연구 보존본, 운영·복원·진화 가이드, inventory |
| pull_requests | used: 초기 안내 main 이후 보존 자료 branch의 PR·검사·merge |
| actions | used: SHA256·JSON 검사, 정확한 PR head와 main 상태 확인 |
| security | used: 인증 저장소 제외, 내용 패턴 검사. 서버 secret scanning 설정은 미확인 |
| issues | not_applicable: 이번 보존 완료는 PR로 추적. 개선 후보는 아직 실행 요청 아님 |
| projects, milestones, labels_assignees | not_applicable: 단일 보존 작업, 일정·담당 추가 지정 없음 |
| discussions, wiki | not_applicable: docs 사용 |
| releases, deployments, packages_pages | not_applicable: 저장 요청이며 배포·릴리스·공개 사이트 요청 없음 |
| rules_access | not_applicable: private 기본 생성, 추가 보호·권한 설정 변경 없음 |
| insights | not_applicable: 운영 지표 수집 없음 |

원본 test-samjeonnix의 PR과 미커밋 파일은 변경하지 않는다. 이 저장소의 병합은 기존 Buzz 운영 적용을 의미하지 않는다. 과거 검토 PASS는 이번 보존 작업의 외부검토 결과가 아니다. 이번 작업은 문서·보존 작업이므로 별도 모델 리뷰를 실행하지 않는다.

2026-11-10 소유자 요청: 완료 문서와 중요한 과정을 항상 이 저장소에 보존한다. 이번 후속 스냅샷은 기존 PR 경로와 SHA/JSON 검사로 전달한다. 배포·릴리스·추가 Project는 해당하지 않는다.
