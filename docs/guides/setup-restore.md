# Buzz 설정 확인과 복원

이 저장소는 재구성에 필요한 문서·프롬프트·증거를 보존한다. 실행 중인 Buzz 전체를 복제하는 이미지나 자동 설치기는 아니다. 원본 신원의 개인키는 OS의 기존 보안 저장소에 남아 있다.

## 기존 구성

| 항목 | 기록된 값 |
| --- | --- |
| 호스트·경로 | krdn-lenovo, /home/gon/dev/test/test-samjeonnix |
| Relay | https://buzz.krdn.kr |
| 채널 | S80-삼성전자-예측연구, private |
| 채널 ID | 11c1ea3c-c9c1-49fa-ae2c-bced8d7616b5 |
| Workflow ID | 05956bbb-d982-47c1-9297-1aaa4b35a7bc |
| 예약 | 화·금18:30 KST, UTC cron `0 30 9 * * TUE,FRI *` |
| 소유자 응답 정책 | owner-only, 같은 소유자의 팀 멘션은 실제 왕복 검사 |
| 동시 실행 | 전체 run 1, 전문 작업자 2, 각 에이전트 subprocess 1 |
| 모델 | 총괄·데이터·퀀트·산업: UI 저장 gpt-6.1-sol; 외부검토: UI opus |
| 모델 검증 | 제공자 반환 모델·effort 미검증. proposed effort는 적용 증거 아님 |

[TEAM.json](../research/samsung-forecast-2026-11/buzz/TEAM.json)은 신원·프롬프트 경로·과거 확인 근거다. [현재 서버 조회](../../archive/live-20261110/)는 별도 시각의 서버 상태다. 과거 draft의 saved:false를 최종 생성 실패로 해석하지 않는다. 후속 프로필·회신·산출물 증거를 함께 읽는다.

## 필요한 파일

| 파일 | 책임 |
| --- | --- |
| buzz/prompts/COMMON.md | 공통 범위·출처·권한·회신 규칙 |
| buzz/prompts/coordinator.md | 총괄 배분·상태·검토·정본 반영 |
| buzz/prompts/data.md | 데이터 조사 |
| buzz/prompts/quant.md | 방법론·통계 조사 |
| buzz/prompts/industry.md | 산업 조사와 반론 |
| buzz/prompts/review.md | 읽기 전용 외부검토 |
| buzz/OPERATING-CONTRACT.md | 실행·중복 방지·중지·승격 계약 |
| buzz/CHANNEL-CANVAS.md | 채널 안내 |
| buzz/workflow-disabled.yaml | 예약 비활성 구성 |
| buzz/workflow-ready.yaml | 검증 후 활성 구성 |

위 경로의 공통 접두사는 `docs/research/samsung-forecast-2026-11/`다. 역할별 프롬프트에는 공통 내용이 이미 포함돼 있으므로 중복으로 붙이지 않는다.

## 같은 컴퓨터에서 보존본 확인

```sh
gh repo clone krdn/s80-samsung-research
cd s80-samsung-research
sha256sum -c archive/SHA256SUMS
```

검사는 보존된 원본 바이트를 확인한다. 실행 중인 원본 프로젝트로 전체 폴더를 덮어쓰지 않는다. 현재 Buzz의 경로는 clone 위치로 자동 바뀌지 않는다.

## 새 컴퓨터 또는 새 팀으로 재구성

1. 현재 Buzz와 사용하는 Codex·Claude 실행 환경을 설치하고 각 도구의 정상 인증을 확인한다. 버전별 설치 명령은 해당 도구의 현재 도움말을 확인한다.
2. 프로젝트를 clone하고 SHA256 검사를 수행한다. 새 실행 경로를 정한다.
3. 원본 스냅샷 대신 `deployment/<설치명>/`에 새 TEAM·계약·프롬프트·Workflow 사본을 준비한다.
4. 새 사본의 기존 절대경로를 새 실행 경로로 바꾼다. 과거 runs·versions·evidence는 변경하지 않는다.
5. Buzz에서 소유자 계정으로 전용 비공개 채널을 만든다. 새 채널 ID를 사본에 반영한다.
6. Agents에서 전용 다섯 역할을 생성한다. 해당 역할 프롬프트, 로컬 실행 환경, 모델, 응답 정책, subprocess 상한을 확인한다. 저장 전 초안은 실행 신원이 아니다.
7. 생성된 다섯 공개 신원 ID를 새 TEAM에 기록하고 같은 채널에 가입시킨다. 기존 범용 에이전트를 바꾸지 않는다.
8. 새 채널 Canvas를 설정한다. 새 Workflow는 먼저 disabled 상태로 만든다. 기존 Workflow ID는 재사용하지 않는다.
9. 각 역할에게 bootstrap 파일 접근·회신을 요청한다. 요청 채널·스레드·서명 신원·파일 SHA를 확인한다.
10. 총괄↔전문 역할 왕복과 정확한 후보 SHA의 외부검토를 한 번 수행한다. 소유자-only 팀 통신이 실패하면 원인을 확인한다.
11. 시범 결과와 중복 방지·STOP 동작을 확인한 뒤 소유자가 예약을 활성화한다. 실제 첫 예약의 메시지·run·결과를 따로 기록한다.

기존 신원과 새 설치를 동시에 실행하지 않는다. 운영 환경을 바꾸려면 기존 run을 먼저 종료한다. 위 복원 절차 전체를 새 컴퓨터에서 실행한 증거는 아직 없다.

## 기존 환경 읽기 전용 확인

```sh
buzz-gon channels members --channel 11c1ea3c-c9c1-49fa-ae2c-bced8d7616b5
buzz-gon users get --name S80-총괄 --owner me
buzz-gon workflows get --workflow 05956bbb-d982-47c1-9297-1aaa4b35a7bc
```

`buzz-gon`은 기존 호스트의 인증 실행기다. 새 컴퓨터에 자동 설치되지 않는다. 연결이 필요하면 해당 호스트의 안전한 인증 절차를 사용한다. 개인키·API 키를 채팅, Git, argv로 옮기지 않는다.
