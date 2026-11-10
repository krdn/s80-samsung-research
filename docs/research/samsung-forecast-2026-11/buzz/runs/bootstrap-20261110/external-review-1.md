# S80-외부검토 review-1

판정: **PASS**. 대상은 운영 시범 인계문서 `candidate.md`이며, 연구 정본 교체 후보가 아니다. 성능·연구 내용 검토가 아니다.

- run_id `bootstrap-20261110`, phase `review-1`
- 요청: 총괄 `24cbe20db5832c55e3594bb099972876424bec14bac98b83d6ddf573d80d67fa`. 서명자는 TEAM의 coordinator 공개키와 같다. auth 태그의 소유자는 TEAM `owner_pubkey`다.
- 고정 root: `2bbdec4c573e1abdedfd7d805892f29bf529e1630cd0164fdd7e9d6e1b86c789`. 요청 이벤트의 e 태그와 일치한다. 회신도 이 root에 `--reply-to`로 단다.
- 시작 점검:
  - `buzz/STOP`이 없다.
  - TEAM의 review 공개키는 `75e1c1fe…49e7`이고 상태는 `bootstrap_reply_and_artifact_verified`다. 총괄 공개키는 `4d8b5a72…8bfe3`다.
  - 운영 계약(`9720ab3c…df817`)을 다시 읽었다.

## 입력 SHA 대조

요청에 적힌 입력 13개의 SHA256을 직접 재계산했다. **13개 모두 일치한다.**
- 대상 `candidate.md`: `b65f2bbc71615475cf0be504dacec9c4f219f6b034f442ecae999a06c728f229`
- 기준연구: `107b4db7…004c`. TEAM의 baseline과 같으므로 canonical 문서는 변경되지 않았다.
- `candidate.diff`: `/dev/null`에 대한 신규 추가 diff다. 추가된 줄을 모으면 `candidate.md`와 바이트 단위로 같다.

## 점검 결과

| 항목 | 결과 | 근거 |
|---|---|---|
| 사실·추론 구분 | 충족 | 표의 세 쟁점은 각 역할 bootstrap 문구와 맞는다(data 07:40/07:55, quant U_on, industry 반박1 구분). 합의를 성능 증거로 쓰지 않는다고 명시한다. |
| 초기 라우팅 결함 보존 | 충족 | THREAD_MISMATCH를 보존하고, 최초 bootstrap 전체 라우팅이 PASS라고 주장하지 않는다. 증거 JSON의 소유자 지시 `a895fb70…`와 맞는다. |
| team-probe root | 충족 | 아래 두 이벤트의 root 태그가 고정 root와 같다. 회신의 reply 태그는 요청 id와 같고, 서명자는 quant 공개키다. quant-probe SHA `e7086c33…`가 일치한다. |
| 모델 UI·제공자 경계 | 충족 | UI 선택값과 제안 effort를 반환 증거로 쓰지 않는다. 총괄의 `gpt-6-astra/medium`은 로컬 기본 설정값으로만 표기한다(bootstrap-coordinator:19와 일치). |
| cwd 구분 | 충족(경미 지적1) | 세션 초기 cwd와 명령 cwd를 구분한다. 런타임 설정이 적용되었다고 단정하지 않는다. |
| 성능·정기운영 미검증 | 충족 | 정기갱신·재부팅 재개·원문 재검증·실제 모델·방향80%를 미검증으로 표시한다. A_all·보합·보류·미평가 정책을 보존한다. |
| 소유자 pilot 요구 | 충족 | owner_request_event_id와 thread_root_event_id를 manifest에서 구분한다. R2 요청을 재발행하지 않았다. 외부검토 root 검사를 별도 항목으로 남긴다. |
| 검사 기록 | 충족 | STE 검사는 NOT_RUN이며 통과로 취급하지 않는다. 링크 11개가 모두 존재한다. |

검토한 team-probe 이벤트:
- 요청 `a62c48f0…`
- 회신 `d36b4582…`

## 지적 (비차단)

**L1. [낮음] 세션 초기 cwd 일반화**
- 위치: `candidate.md` "모델과 실행 환경" 절, "세션 초기 cwd는 `/home/gon/.buzz`였다."
- 문제: 주어가 모든 역할로 읽힌다. 실제로 초기 cwd를 기록한 역할은 총괄(bootstrap-coordinator:13), 데이터(bootstrap-data:7), 외부검토 셋이다. 퀀트와 산업 bootstrap은 프로젝트 cwd만 기록했다.
- 영향: 모델·성능 판정에는 영향이 없다. 기록 범위를 조금 넓게 표현했을 뿐이다.
- 최소 수정문: "총괄·데이터·외부검토 bootstrap은 세션 초기 cwd `/home/gon/.buzz`를 기록했다. 퀀트·산업은 프로젝트 명령 cwd만 기록했다."

주요 결함은 없다. L1은 다음 정기 run에 반영해도 되며, review-2가 필요하지 않다.

## 한계·미검증

- 실행 모델: 하네스 표시는 `claude-opus-5-5`다. 제공자 반환 메타데이터를 확인하지 못했으므로 실제 모델과 effort는 **UNVERIFIED**다. 모델은 자동 대체하지 않았다.
- 검토하지 않은 것: 이벤트 서명의 암호학적 검증, 원문 웹 재조사, 기준연구 전체(외부 PASS 이력 없음), 방향80% 성능.
- 변경: 이 파일과 `review-verdict-1.json`만 새로 작성했다. candidate·canonical·manifest·다른 역할 파일은 수정하지 않았다.
