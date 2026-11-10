# S80 삼성전자 예측 연구 · Buzz 운영 기록

삼성전자 다음 거래일 방향 예측 80% 목표를 연구한 자료와 Buzz 연구팀의 설정·운영·실패·복구 이력을 보존한다. 80%는 연구 목표이며 실증된 성능이 아니다.

## 먼저 읽기

| 목적 | 문서 |
| --- | --- |
| 채널에서 실행·조회·중지·재개 | [사용 설명서](docs/guides/operate.md) |
| Buzz 설정 확인·새 환경 재구성 | [설정과 복원](docs/guides/setup-restore.md) |
| 연구·프롬프트·운영 개선과 되돌리기 | [업그레이드와 진화](docs/guides/evolution.md) |
| 현재 확인 상태·기존 기록의 불일치 | [인계 상태](docs/ARCHIVE-STATUS.md) |
| 저장 범위·무결성·제외 항목 | [보존 정책](archive/README.md) |
| 연구의 최신 내용 | [최신 통합 연구 문서](snapshots/20261110T132851Z/docs/research/samsung-direction-80-research-2026-11.md) |
| 갱신 내역 | [최신 변경·과정](snapshots/20261110T132851Z/README.md) |
| 시간 지연 원인·개선 교훈 | [이전 과정 분석](docs/incidents/2026-11-10-buzz-migration-latency.md) |

## 구성

- `docs/research/samsung-forecast-2026-11/`: 데이터·퀀트·산업 조사, 반론, 계산, 통합 결정, 외부검토.
- 하위 `buzz/`: TEAM, 운영 계약, Canvas, 역할별 프롬프트, 활성/중지 Workflow YAML.
- 하위 `buzz/runs/`, `versions/`, `evidence/`: 실행별 요청·결과·검토·파일 해시·실패·전후 버전.
- `archive/`: 원본 파일 목록·SHA256, 현재 서버 조회, 검사 기록.
- 루트 HERDR 문서와 `docs/STATE.md`, `server/official.ts`는 출처를 이해하기 위한 기존 제품의 참조 사본이다. 웹앱 전체 소스나 설치 패키지가 아니다.

## 바로 사용

기존 krdn-lenovo의 Buzz Desktop에서 Gon 계정으로 `S80-삼성전자-예측연구` 채널을 연다. 실제 멘션 대상을 선택하고 보낸다.

```text
@S80-총괄 현재 진행 상태와 마지막 결과를 알려줘. 새 run은 시작하지 마.
```

진행 중인 작업이 없고 중지 상태가 아니면:

```text
@S80-총괄 [S80-CYCLE] 지금 연구를 갱신해. 운영 계약에 따라 조사·토론·검사·외부검토를 진행하고 결과와 남은 문제를 알려줘.
```

2026-11-10 서버 조회에서 화·금 18:30 KST 예약 활성화를 확인했다. 최신 보존 run은 2026-11-10 22:21 KST에 완료된 문서 갱신이며 [스냅샷](snapshots/20261110T132851Z/README.md)에 있다. 현재 온라인 상태, 예약 시각의 정확한 발화, 재부팅 복원, 80% 성능을 이 사실로 증명하지 않는다.

## 이 저장소의 역할

기존 실행 경로는 `/home/gon/dev/test/test-samjeonnix`다. 이 저장소를 clone해도 기존 Buzz가 새 폴더로 자동 이동하지 않는다. 운영 중 원본 파일을 바꾸거나 두 경로를 동시에 실행하지 않는다. 새 환경 복원은 설정 가이드에 따라 비활성 예약에서 시작한다.

원본 파일의 절대경로·신원 ID·서명·해시를 변경하지 않았다. 이들은 과거 증거다. 새 설치에서는 별도 구성으로 경로와 신원을 바꾼다. 인증키·비밀번호·Buzz 개인키·OS keyring·전역 DB는 포함하지 않는다.

원본 제품: [krdn/test-samjeonnix](https://github.com/krdn/test-samjeonnix). 본 저장소는 연구 보존과 운영 문서용이다. 자동 주문·서비스 배포·자동 모델 학습은 구현하지 않았다.

완료 문서와 중요한 과정은 소유자 요청에 따라 항상 이 저장소에 새 스냅샷·PR로 보존한다. 원격 main과 SHA를 확인하기 전에는 GitHub 저장 완료로 보고하지 않는다.
