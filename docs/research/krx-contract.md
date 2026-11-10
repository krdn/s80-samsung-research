# KRX 계약 확인

확인: 2026-11-07. 공식 출처: https://openapi.krx.co.kr/contents/OPP/USES/service/OPPUSES002_S2.cmd?BO_ID=JvJFzlAENzZlPBDNGAWC

공식 상세 페이지 내 개발 명세의 input은 basDd, output은 OutBlock_1이다. AUTH_KEY 헤더 인증. 일별매매정보는 요청 당일 자료를 제외하며 최신 기준 거래일은 공급일 08시 이후 조회 조건이 있다. 따라서 07:40 마감에 직전 거래일 종가를 확보할 수 있는지 보장되지 않는다. 실제 공급 시각은 연결 후 별도 관찰한다.

출력 필드: BAS_DD(기준일자), ISU_CD(종목코드), ISU_NM(종목명), MKT_NM(시장구분), SECT_TP_NM(소속부), TDD_CLSPRC(종가), CMPPREVDD_PRC(대비), FLUC_RT(등락률), TDD_OPNPRC(시가), TDD_HGPRC(고가), TDD_LWPRC(저가), ACC_TRDVOL(거래량), ACC_TRDVAL(거래대금), MKTCAP(시가총액), LIST_SHRS(상장주식수)

이 수집은 공식 개발 명세를 확인한 결과이며 계정의 API 이용 승인·실데이터 호출 완료가 아니다.
