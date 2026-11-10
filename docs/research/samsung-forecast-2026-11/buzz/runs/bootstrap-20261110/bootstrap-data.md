# S80-R1-데이터 bootstrap

- 판정: PASS / BOOTSTRAP_DONE. 연구 성능이나 정기 운영의 PASS를 뜻하지 않는다.
- run_id: `bootstrap-20261110`; phase: `bootstrap`; 요청: `44753f1417eaed41134393f08f0ebb70f8597061b592ed3061ce1e5e4dbb7159`.
- 확인 시각: 2026-11-10T12:41:42+09:00.
- 이름·역할: `S80-R1-데이터` / `data`. 이전 R1t4s의 데이터/API·시점·이용권 책임을 인계하며, 동일 CLI 세션 신원이라고 주장하지 않는다.
- 실제 작업 cwd: `/home/gon/dev/test/test-samjeonnix` (`pwd`); 호스트: `krdn-lenovo` (`hostname`). 초기 세션 cwd `/home/gon/.buzz`에서 프로젝트 작업 디렉터리로 전환해 확인했다.
- 공개키: `b5d2d6880bc73d3ad5b444c385e8ef3deca4af3b148b8cf7aabddcb6ee9c9775`. [TEAM.json](../../TEAM.json)의 data 역할과 런타임 `git config --get user.email`의 공개키 부분이 일치한다. 공식 CLI `channels members` 재조회에서 본인·총괄의 bot 멤버십과 Gon의 owner 신원을 확인했다. 비밀키 값은 읽거나 출력하지 않았다.
- 실행모델 확인 범위: 현재 세션은 Codex/GPT-6 계열로 안내되지만, 정확한 제공자 응답 모델 ID·effort는 확인하지 못했다. TEAM의 `model_selected_ui=gpt-6.1-sol`, 제안 `effort_proposed=xhigh`는 선택/제안 기록이며 실제 실행 증명이 아니다. 모델 식별은 `UNVERIFIED`로 남긴다.

## 기준과 인계 쟁점

사실: 기준연구 [삼성전자 방향 연구](../../../../samsung-direction-80-research-2026-11.md)의 `sha256sum`은 `107b4db7d9bb9235347c40ec1db32eb5c0ac404cdb6a54c4f68b6fabb932004c`로 TEAM의 baseline과 같다. [운영 계약](../../OPERATING-CONTRACT.md)과 [데이터 프롬프트](../../prompts/data.md)를 읽었다. 프롬프트 SHA는 `1a98ca28da3b7363689f40faa986107bf4f4932252f0625fe7cd5981613e4d6e`로 TEAM 등록값과 같다.

핵심 쟁점 하나는 **07:40에 알려진 원자료와 사후에 조회한 최신 자료의 구별**이다. 기존 [01-data-api.md](../../../01-data-api.md) §F1~F3은 KRX 08시 공급 조건의 재확인 실패, KIS endpoint별 수정주가 0/1 의미 차이, DART 접수일만으로 시각을 증명할 수 없는 문제를 기록한다. [01-data-rebuttal.md](../../../01-data-rebuttal.md)의 최종 응답은 07:40까지 수신한 원자료·개정 목록·해시를 고정하고, 07:55까지 그 입력의 처리만 허용하도록 보완한다.

추론: 07:55까지 새 원문이나 정정을 추가하면 07:40 동결 계약을 위반한다. 제안: 후속 승인 조사에서도 원자료 `available_at`·실제 수신 시각과 파생값 `computed_at`을 분리해 검증한다. 반론: 현재 API의 과거 일자 조회 성공·수정주가 옵션·긴 가격 이력만으로 당시 원문 및 개정본을 복원했다고 판단할 수 없다.

미검증: 이번 bootstrap에서 외부 API 명세·약관을 새로 조사하거나 인증 호출하지 않았다. 실제 07:40 공급, 당시 버전 복원, 저장·ML 이용권과 FRED/ALFRED·TrendForce 권리 차단의 해결 여부는 미확인이다. 기존 문서의 관찰을 현행 재검증으로 표현하지 않는다. 방향80% 달성은 `UNVERIFIED`; A_all·조건부 적중률·보합·보류·미평가 정책을 유지한다.

기존 본인 파일 SHA256:

- `01-data-api.md`: `f9b7b93c0b5853ecec68abf5cf4408d5b98d91b95e3628ccfb4b7b34c5b2f189`.
- `01-data-rebuttal.md`: `2798598c4c2fcc73903ec4483adde16e779e13aac5103f2a50f322f3f95ed532`.

변경은 이 bootstrap 파일 신규 작성 하나다. 정기 전체조사·다른 역할 호출은 시작하지 않았다. 결과의 경로·SHA를 같은 요청 스레드에서 총괄에게 한 번 회신한 뒤 대기한다. 파일 자체 SHA는 자기참조를 피하기 위해 회신에 기록한다.
