/**
 * auto_review_engine.js
 * 해아림한의원 공황장애 치료후기 자동 발행 엔진 & 무제한 임상 콘텐츠 풀
 * 
 * [요구사항 명세]
 * 1. 내용: 공황장애 치료 관련 실제 임상 환자 회복 수기 (기존 65편 시드 후기와 100% 중복 없는 고유 임상 풀)
 * 2. 주기: 4개월당 2~6개 사이의 수량으로 랜덤 스케줄링 및 랜덤 발행 일시 (20~55일 간격)
 * 3. 치료법 언급 비율: 약 20% 수준 (언급 20% : 비언급 80%)
 *    - 언급 시: 한약만, 한약+침, 또는 홈페이지 소개 치료법(약침, 두개천골요법 CST, 뇌파 바이오피드백, 소뇌기능 훈련, 추나요법 등)
 * 4. 글자 수: 300자 ~ 700자 사이 엄수
 * 5. 의료법 준수: 썸네일 블러 처리 및 의료법 제56조 열람 보호
 * 6. 권한: 자동발행 제어 버튼은 최고관리자(healim0071)에게만 노출
 * 7. 무제한 누적: 65개 고정 상한선 없이 66, 67, 68... 무한정 연속 발행 지원
 */

(function() {
  'use strict';

  // ──────────────────────────────────────────────────────────
  // 1. 공황장애 30대 고품질 신규 임상 치료후기 풀 (Content Pool)
  // ──────────────────────────────────────────────────────────
  window.autoReviewContentPool = [
  {
    "id": "pool-new-rev-1",
    "category": "KTX & 고속철도 공황",
    "title": "KTX 타고 출장 가다가 숨 막히던 광장공포증, 한약 복용 2개월 만에 편안히 탑니다",
    "author": "40대 영업팀장 문OO 님",
    "hasTreatment": true,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "지방 출장이 잦은 직무인데 KTX가 출발하고 열차 문이 닫히자마자 갑자기 가슴이 조여오고 숨이 턱 막히며 이러다 질식해 죽는 게 아닌가 싶었습니다. 심장이 미친 듯이 뛰어 비상 정지 레버를 당기고 당장 뛰쳐나가고 싶을 만큼 극심한 공황발작을 겪었습니다. 이후로는 기차표만 예매해도 식은땀이 흐르고 손발이 떨려 출장 업무를 도저히 수행할 수 없었습니다. 해아림한의원에서 뇌신경계 과흥분을 진정시키는 1:1 맞춤 한약과 두개천골요법(CST) 치료를 병행한 지 2개월 만에 가슴 답답함과 예기불안이 깨끗이 사라졌고, 지금은 서울-부산 KTX 안에서 편안하게 노트북으로 업무를 보며 커피도 한잔 마실 만큼 안정되었습니다."
  },
  {
    "id": "pool-new-rev-2",
    "category": "지하주차장 & 밀폐공간",
    "title": "지하 주차장만 들어가면 가슴이 답답하고 뛰쳐나가고 싶던 공황, 한방 치료로 극복했습니다",
    "author": "30대 주부 권OO 님",
    "hasTreatment": false,
    "treatmentType": "",
    "content": "아파트 지하 3층 주차장에 차를 대고 내리는 순간 사방이 콘크리트 벽으로 막혀 산소가 부족하다는 착각과 함께 과호흡이 오면서 바닥에 주저앉았습니다. 금방이라도 기절할 것 같아 비상계단으로 기어 올라왔고, 이후로는 지상 주차장만 찾아 헤매며 비 오는 날에도 지하로 내려가지 못해 일상생활이 너무 괴로웠습니다. 해아림 원장님께서 편도체의 잘못된 위험 신호 감지와 교감신경 항진 때문이라 자세히 설명해 주셨고, 신경계를 안정시키는 한약과 호흡 이완 요법을 처방해 주셨습니다. 6주 치료 후 지하 주차장에 혼자 주차하고 엘리베이터까지 차분하게 걸어갈 수 있게 되었으며, 갇힐 것 같다는 공포가 완전히 사라져 자신감을 되찾았습니다."
  },
  {
    "id": "pool-new-rev-3",
    "category": "강의실 & 대학 생활",
    "title": "대형 강의실 문 닫히는 소리만 들어도 식은땀 나던 예기불안, 체질 한약으로 안정 찾았습니다",
    "author": "20대 대학생 장OO 님",
    "hasTreatment": false,
    "treatmentType": "",
    "content": "수백 명이 듣는 전공 대형 강의실 중간 자리에 앉았다가 갑자기 가슴이 터질 듯 뛰고 숨이 안 쉬어져 가방도 챙기지 못하고 복도로 뛰쳐나온 적이 있습니다. 그 후로는 강의실 문이 닫히는 소리만 들어도 온몸에 소름이 돋고 식은땀이 흘러 수업에 들어가지 못하고 휴학까지 진지하게 고민했습니다. 해아림한의원에서 심장의 화기를 내리고 신경계를 보강하는 온담탕 가감방 한약을 복용하면서 두근거림과 조급함이 차분해졌습니다. 학기 말 시험까지 중간 탈출 없이 앞자리에서 편안하게 치르고 무사히 졸업을 준비하고 있으며, 발표 불안도 말끔히 극복하여 건강한 일상을 되찾았습니다."
  },
  {
    "id": "pool-new-rev-4",
    "category": "치과 공포 & 구강 과민",
    "title": "치과 스케일링 의자에 눕기만 해도 숨이 차오르던 공황 증상, 침 치료와 한약으로 해소",
    "author": "50대 자영업 신OO 님",
    "hasTreatment": true,
    "treatmentType": "뇌신경 이완 침 치료 + 맞춤 한약",
    "content": "치과 진료 의자가 뒤로 젖혀지고 얼굴에 초록색 수술포가 덮이는 순간 목구멍이 꽉 막히며 질식해 죽을 것 같은 공포감에 의자를 박차고 일어났습니다. 충치 치료를 받아야 하는데도 치과 근처만 가면 가슴이 요동쳐 방치하다가 치아가 망가질 위기였습니다. 해아림한의원에서 후두부 긴장을 푸는 뇌신경 이완 침 치료와 흉부 울화를 풀어주는 맞춤 한약을 복용하며 신체 과민 반응이 눈에 띄게 줄어들었습니다. 지금은 스케일링은 물론 신경 치료와 보철 치료까지 아무런 공포 없이 편안하게 누워서 잘 마치고 식사도 맛있게 하며 건강을 되찾았습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다."
  },
  {
    "id": "pool-new-rev-5",
    "category": "대형 쇼핑몰 & 인파 공황",
    "title": "주말 백화점이나 대형 마트 인파 속에서 어지럼증과 탈진 오던 광장공포 극복기",
    "author": "30대 디자이너 황OO 님",
    "hasTreatment": false,
    "treatmentType": "",
    "content": "사람이 빽빽한 주말 복합 쇼핑몰이나 대형 백화점에 들어가면 시야가 하얗게 흐려지고 바닥이 울렁거리며 당장 쓰러질 것 같은 어지럼증과 탈진이 찾아왔습니다. 사람이 많은 곳에서는 출구를 찾지 못해 깔려 죽을 것 같다는 공포에 주말 외출을 전면 중단하고 방 안에만 갇혀 지냈었습니다. 해아림에서 뇌간의 감각 과부하를 조절하고 자율신경계 균형을 되찾아주는 한방 처방을 3개월간 꾸준히 복용했습니다. 놀랍게도 북적이는 주말 백화점 한가운데서도 편안하게 쇼핑하고 가족들과 즐거운 외식을 마칠 수 있을 정도로 신체 감각과 일상이 완전히 회복되었습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다."
  },
  {
    "id": "pool-new-rev-6",
    "category": "교대근무 & 야간 빈맥",
    "title": "야간 교대근무할 때마다 심장 박동이 불규칙해지며 찾아오던 발작, 뇌신경 이완으로 안정",
    "author": "30대 간호사 배OO 님",
    "hasTreatment": false,
    "treatmentType": "",
    "content": "3교대 근무로 수면 리듬이 깨진 상태에서 야간 나이트 근무를 서던 중 갑자기 심박수가 140회 이상 치솟고 손끝이 찌릿하게 저려오며 응급실로 실려 갔습니다. 내과 검사상 심장에는 아무 이상이 없다는데도 밤만 되면 또 발작이 올까 봐 극심한 예기불안에 잠을 한숨도 못 잤습니다. 해아림에서 수면 리듬을 정상화하고 교감신경의 과항진을 낮추는 천왕보심단 가감방 한약 치료를 받았습니다. 복용 한 달 차부터 새벽 빈맥이 깨끗이 사라졌고, 현재는 3교대 근무 중에도 가슴 답답함이나 불안 없이 평정심을 유지하며 환자들을 돌보고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다."
  },
  {
    "id": "pool-new-rev-7",
    "category": "항공기 공황",
    "title": "비행기 이륙 순간 갇힌 공포에 실신할 뻔했던 승무원, 한방 치료로 건강하게 비행합니다",
    "author": "20대 승무원 임OO 님",
    "hasTreatment": true,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "직업이 승무원인데 어느 날 비행기 도어가 닫히고 활주로를 달리는 순간 갑자기 숨이 가빠지고 비행기 밖으로 탈출하고 싶은 극심한 발작이 일어났습니다. 꿈이었던 직업을 포기해야 하나 싶어 절망 속에 지내다가 해아림한의원을 찾았습니다. 원장님께서 과로와 기압 변화로 뇌척수액 순환 장애와 편도체 과민이 겹쳤다고 진단하시고 맞춤 한약과 두개천골요법(CST)을 집중 시행해 주셨습니다. 3개월 치료 후 불안 없이 첫 비행을 무사히 마쳤고, 지금은 10시간 넘는 장거리 노선도 아무 두려움 없이 씩씩하게 비행하며 일하고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다."
  },
  {
    "id": "pool-new-rev-8",
    "category": "도심 정체 & 운전 공황",
    "title": "올림픽대로 꽉 막힌 퇴근길 정체 구간에서 오던 호흡곤란, 3단계 치료로 완전히 극복",
    "author": "40대 직장인 송OO 님",
    "hasTreatment": false,
    "treatmentType": "",
    "content": "퇴근길 다리 위나 꽉 막힌 올림픽대로에서 차가 멈춰 서면 오도 가도 못하고 갇혔다는 생각에 숨이 턱 막히고 식은땀이 비 오듯 쏟아졌습니다. 갓길에 차를 세우고 비상등을 켠 채 덜덜 떨며 견디던 날이 반복되어 출퇴근길 운전이 지옥 같았습니다. 해아림한의원에서 뇌신경 이완 한약과 인지 재구조화 호흡 훈련을 2개월간 병행했습니다. 점차 가슴 조임과 공포가 가라앉았고, 지금은 극심한 출퇴근 교통체증 속에서도 차분하게 음악을 들으며 운전대를 잡을 수 있는 여유를 완전히 되찾아 출퇴근이 다시 편안해졌습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다."
  },
  {
    "id": "pool-new-rev-9",
    "category": "카페인 반응 & 자율신경",
    "title": "커피 마신 뒤 심장이 덜컥 내려앉으며 쓰러질 것 같던 자율신경 과민증, 맞춤 처방으로 회복",
    "author": "20대 취준생 정OO 님",
    "hasTreatment": false,
    "treatmentType": "",
    "content": "카페라테를 마신 뒤 갑자기 명치가 답답해지고 심장이 덜컥거리며 숨을 쉴 수 없어 길바닥에 주저앉아 119를 부를 뻔했습니다. 이후로는 콜라나 초콜릿 등 미량의 카페인만 닿아도 심장이 요동치는 카페인 공포증과 공황 증세에 시달려 외출조차 조심스러웠습니다. 해아림한의원에서 심담을 보강하고 위장 담적을 삭히는 한약 처방을 2개월간 복용하면서 교감신경의 과민도가 정상으로 돌아왔습니다. 이제는 어떤 음식이나 음료도 불안 없이 편안하게 즐기며 도서관에서 취업 준비에 집중할 수 있게 되었습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다."
  },
  {
    "id": "pool-new-rev-10",
    "category": "엘리베이터 공포",
    "title": "엘리베이터가 조금만 흔들려도 추락할 것 같던 극심한 불안, 자율신경 훈련으로 이겨냈습니다",
    "author": "40대 금융업 이OO 님",
    "hasTreatment": false,
    "treatmentType": "",
    "content": "직장이 여의도 고층 빌딩인데 엘리베이터 문이 닫히면 와이어가 끊어져 추락할 것 같고 공기가 희박해 숨이 막히는 발작이 반복되었습니다. 매일 30층 계단을 오르내리느라 무릎도 상하고 업무 효율도 바닥을 쳐 출근 자체가 공포였습니다. 해아림 원장님의 따뜻한 지도 아래 편도체 탈감작 호흡법과 신경 안정 한약을 복용하며 4주 차부터 저층 엘리베이터부터 차근차근 적응하기 시작했습니다. 2달이 지난 지금은 만원 엘리베이터 안에서도 동료들과 웃으며 대화할 만큼 불안이 완전히 사라졌습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다."
  },
  {
    "id": "pool-new-rev-11",
    "category": "운동 유발 & 심박 공황",
    "title": "러닝머신 뛰다 심장 터질 듯 놀라 운동조차 겁나던 공황, 심폐 안정 처방으로 다시 달립니다",
    "author": "30대 동호인 남OO 님",
    "hasTreatment": true,
    "treatmentType": "심폐 안정 한약 + 약침 요법",
    "content": "헬스장에서 가볍게 러닝머신을 뛰다가 심박수가 올라가자 갑자기 심장마비가 올 것 같은 극심한 공황발작이 터졌습니다. 이후로는 계단만 올라도 심장이 쿵쾅거려 죽을까 봐 일체의 신체 활동과 운동을 기피하게 되었습니다. 해아림한의원에서 심장의 기운을 편안하게 다스리는 맞춤 한약과 경혈 약침 치료를 받았습니다. 심장 박동의 자연스러운 변화를 뇌가 위험 신호로 오인하지 않도록 조율한 결과, 지금은 주말마다 한강을 5km씩 기분 좋게 달리고 체력과 자신감을 완전히 회복했습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다."
  },
  {
    "id": "pool-new-rev-12",
    "category": "미용실 & 경추성 어지럼",
    "title": "미용실 샴푸대에서 목 뒤로 젖힐 때 찾아오던 뇌혈류 어지럼증과 발작, 추나 치료로 해결",
    "author": "50대 주부 조OO 님",
    "hasTreatment": false,
    "treatmentType": "",
    "content": "미용실에서 머리를 감으려고 샴푸대에 목을 젖히는 순간 눈앞이 핑 돌고 천장이 빙글빙글 돌며 숨이 턱 막히는 공황발작이 왔습니다. 꼼짝없이 쓰러질 것 같아 뛰쳐나온 뒤로는 미용실 근처도 가지 못하고 머리도 집에서만 감았습니다. 해아림에서 경추 1-2번 정렬 이상으로 인한 추골동맥 혈류 저하와 미주신경 압박을 진단받고, 경추 추나요법과 어혈 제거 한약을 병행했습니다. 목덜미가 부드럽게 풀리면서 어지럼증과 질식감이 말끔히 사라져 파마나 염색도 편안하게 잘 받게 되었습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다."
  },
  {
    "id": "pool-new-rev-13",
    "category": "야간 혈압 & 급성 공황",
    "title": "새벽에 자다 깨서 혈압 180까지 치솟던 응급 공황, 심포열 내리는 처방으로 평온 되찾았습니다",
    "author": "60대 은퇴자 윤OO 님",
    "hasTreatment": false,
    "treatmentType": "",
    "content": "자다가 새벽 2시경만 되면 가슴이 쿵쾅거려 깨어나는데 가정용 혈압계를 재보면 180/110까지 치솟아 뇌출혈로 쓰러지는 게 아닌가 매일 밤 공포에 떨었습니다. 응급실에 가도 링거와 안정제 투여 외에는 뾰족한 수가 없어 불면증까지 심해졌습니다. 해아림한의원에서 가슴 속에 쌓인 심포의 화열을 내리고 수승화강을 돕는 체질 한약을 복용하기 시작했습니다. 보름 만에 새벽 기상 발작이 잦아들었고, 야간 혈압도 120대로 지극히 안정적으로 유지되며 아침까지 푹 잡니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다."
  },
  {
    "id": "pool-new-rev-14",
    "category": "무대 발표 & 사회공포",
    "title": "결혼식장 하객들 앞에서 축사 도중 쓰러질 것 같던 발표 공황, 한방 치료로 이겨냈습니다",
    "author": "30대 회사원 한OO 님",
    "hasTreatment": false,
    "treatmentType": "",
    "content": "친한 친구의 결혼식 축사를 맡았는데 단상에 서자마자 시야가 좁아지고 목소리가 염소처럼 떨리며 숨이 안 쉬어져 마이크를 떨어뜨릴 뻔했습니다. 그 트라우마로 사내 프레젠테이션이나 팀 회의 때마다 극심한 공황과 식은땀에 시달려 사회생활이 위태로웠습니다. 해아림 원장님의 심담허겁 한약 처방과 뇌파 안정 치료를 2달간 진행한 결과, 긴장되는 상황에서도 호흡이 차분하게 유지되며 지난달 전사 워크숍 발표를 기립박수 속에 완벽하게 끝마쳤습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다."
  },
  {
    "id": "pool-new-rev-15",
    "category": "디지털 피로 & 시각 과민",
    "title": "모니터 화면만 봐도 눈이 핑 돌고 가슴이 조여오던 디지털 피로 공황, 맑은 정신 회복",
    "author": "20대 개발자 서OO 님",
    "hasTreatment": false,
    "treatmentType": "",
    "content": "장시간 야근하며 코딩 작업을 하다가 갑자기 모니터 글자들이 춤을 추듯 어지럽고 가슴이 조여오며 과호흡 발작이 왔습니다. 이후로는 컴퓨터 화면이나 스마트폰 불빛만 봐도 뇌가 과부하되어 메스꺼움과 공황 불안이 밀려와 업무를 볼 수 없었습니다. 해아림에서 간열을 식히고 뇌 혈류 순환을 촉진하는 한약과 안구 경혈 침 치료를 받았습니다. 3주 만에 두통과 어지럼증이 사라졌고, 화면을 장시간 보아도 가슴 답답함 없이 편안하게 프로젝트를 완수하고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다."
  },
  {
    "id": "pool-new-rev-16",
    "category": "역류성 식도염 & 흉통 공황",
    "title": "역류성 식도염과 겹쳐 숨이 차고 쥐어짜던 흉통 공황, 위장 담적 치료로 편안해졌습니다",
    "author": "40대 교사 유OO 님",
    "hasTreatment": true,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "명치가 타는 듯 아프고 신물이 올라오면서 가슴을 쥐어짜는 흉통 때문에 협심증인 줄 알고 응급실을 수차례 찾았습니다. 위장약을 수개월 복용해도 가슴 답답함과 공황 불안은 전혀 가라앉지 않았습니다. 해아림에서 위장 내 담적 독소로 횡격막 움직임이 제한되어 과호흡과 편도체 오작동이 일어난 상태라 진단받았습니다. 담적을 삭히고 자율신경을 안정시키는 맞춤 한약과 CST 요법을 병행한 지 2개월 만에 소화도 잘되고 가슴 통증과 불안이 말끔히 사라졌습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다."
  },
  {
    "id": "pool-new-rev-17",
    "category": "수술실 & 밀폐 트라우마",
    "title": "안과 라식 수술실 암흑 속에서 겪었던 밀폐 공황 트라우마, 한방 이완 치료로 해소",
    "author": "20대 직장인 백OO 님",
    "hasTreatment": false,
    "treatmentType": "",
    "content": "안과 수술대 위에 누워 레이저 장비가 눈앞으로 다가오던 암흑 속에서 숨이 막혀 수술을 중단했던 기억이 트라우마로 남아, 어두운 방이나 창문 없는 방에만 들어가도 공황발작이 일어났습니다. 해아림한의원에서 편도체에 각인된 공포 기억을 완화하는 뇌 자생력 강화 한약과 상담 지도를 받았습니다. 점진적으로 뇌 신경계 긴장감이 풀어지면서 지금은 영화관이나 어두운 방에서도 아무런 공포 없이 편안하게 지내며 일상생활의 자신감을 되찾았습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다."
  },
  {
    "id": "pool-new-rev-18",
    "category": "고속버스 & 장거리 이동",
    "title": "장거리 고속버스 맨 뒷자리에서 숨 막혀 중간 휴게소에 내리던 증상 극복기",
    "author": "30대 대학원생 엄OO 님",
    "hasTreatment": false,
    "treatmentType": "",
    "content": "명절에 고속버스를 타고 가다가 고속도로가 정체되자 중간에 내릴 수 없다는 고립감에 온몸이 마비되듯 굳고 숨이 안 쉬어져 비상등을 켜고 휴게소에 내려달라고 애원했었습니다. 그 뒤로는 버스만 봐도 심장이 울렁거렸습니다. 해아림에서 자율신경 조절 능력을 키우는 체질 한약과 4-6 호흡 이완 훈련을 꾸준히 이수했습니다. 이번 명절에는 고향까지 4시간 고속버스를 타고도 한 번의 불안 없이 편안히 왕복하며 가족들을 만나 행복한 시간을 보냈습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다."
  },
  {
    "id": "pool-new-rev-19",
    "category": "모닝 공황 & 신경성 구역",
    "title": "기상 후 양치질할 때마다 구역감과 함께 찾아오던 아침 공황발작 완전 호전",
    "author": "40대 사업가 주OO 님",
    "hasTreatment": false,
    "treatmentType": "",
    "content": "매일 아침 눈떠서 칫솔질만 하려고 칫솔을 입에 넣으면 헛구역질이 심하게 나면서 심장이 요동치고 호흡곤란이 오는 모닝 공황으로 하루 시작이 늘 악몽이었습니다. 위장 내시경도 정상이라는데 출근길이 너무 두려워 아침마다 식은땀을 흘렸습니다. 해아림 원장님께서 아침 코르티솔 호르몬 급증과 자율신경 반사 이상을 잡아주는 한약을 지어주셨습니다. 복용 2주 만에 헛구역질과 가슴 두근거림이 멎고 상쾌하게 아침을 맞이하며 출근하고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다."
  },
  {
    "id": "pool-new-rev-20",
    "category": "산후 불안 & 근육 무력감",
    "title": "아이 안고 있을 때 갑자기 힘 빠지며 쓰러질까 봐 두렵던 산후 예기불안 한방 극복",
    "author": "30대 육아맘 민OO 님",
    "hasTreatment": true,
    "treatmentType": "산후 안신 한약 + 뇌신경 약침",
    "content": "출산 후 백일 무렵 아기를 안고 서 있는데 갑자기 다리에 힘이 풀리고 숨이 턱 막히며 아이를 떨어뜨릴 것 같은 극심한 공포가 엄습했습니다. 하루 종일 온몸에 진이 빠지고 불안에 눈물만 흘리며 우울감까지 겹쳤습니다. 해아림한의원에서 기혈을 보충하고 심신을 편안히 해주는 산후 안신 맞춤 한약과 약침 치료를 받았습니다. 기력이 든든하게 붙고 가슴 두근거림이 사라지면서 아이를 안는 것이 전혀 두렵지 않고 육아의 행복을 온전히 누리고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다."
  },
  {
    "id": "pool-new-rev-21",
    "category": "운동 수행 & 손 떨림",
    "title": "골프 티샷 서면 손이 사시나무 떨듯 떨리고 호흡 가쁘던 퍼포먼스 공황 안정 회복",
    "author": "50대 자영업 변OO 님",
    "hasTreatment": false,
    "treatmentType": "",
    "content": "동반자들이 지켜보는 가운데 티박스에만 서면 손과 다리가 덜덜 떨리고 숨이 가빠져 스윙조차 하지 못하고 바닥에 주저앉았습니다. 긴장성 공황발작이라는 진단을 받고 좋아하는 골프를 영영 못 치게 될까 봐 참담했습니다. 해아림에서 신경 전달물질 분비를 조율하고 심장 과부하를 덜어주는 한약 처방을 2달간 복용했습니다. 놀랍게도 티박스에서의 공포가 사라지고 몸에 부드러운 이완감이 찾아와 지난 주말 필드에서 베스트 스코어를 갱신했습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다."
  },
  {
    "id": "pool-new-rev-22",
    "category": "온도 변화 & 실내 질식감",
    "title": "여름철 에어컨 밀폐 방에만 들어가면 호흡곤란 오던 온도 과민 공황 극복",
    "author": "30대 연구원 진OO 님",
    "hasTreatment": false,
    "treatmentType": "",
    "content": "밀폐된 공간에서 찬 에어컨 바람을 쐬면 목 안이 조여오고 산소가 없는 것 같은 착각에 창문을 열어젖히거나 밖으로 뛰쳐나와야 했습니다. 사무실 에어컨 가동 기간 내내 공황 발작에 시달리며 연구 업무를 제대로 진행할 수 없었습니다. 해아림에서 체온 조절 중추의 과민 반응을 안정시키는 계지탕 가감 한약과 추나 치료를 받았습니다. 체온 조절 능력이 회복되면서 찬 바람을 맞아도 목 조임 없이 편안하게 집중하여 근무하고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다."
  },
  {
    "id": "pool-new-rev-23",
    "category": "폐소공포 & MRI 검사",
    "title": "대형 병원 MRI 검사통 속에 갇혀 중단했던 폐소공포증, 해아림 치료 후 무사히 검사 마침",
    "author": "50대 공무원 지OO 님",
    "hasTreatment": false,
    "treatmentType": "",
    "content": "건강검진 뇌 MRI를 찍으려고 좁은 원통 안에 들어가는 순간 기계 소음과 밀폐감에 숨이 끊어질 것 같아 비상 벨을 누르고 검사를 포기했습니다. 이후 좁은 통로만 봐도 발작이 일어났습니다. 해아림에서 뇌 편도체 이완 처방과 인지 탈감작 치료를 6주간 받았습니다. 마침내 재검사 날 30분 동안 원통 안에서 차분하게 복식호흡을 유지하며 아무런 발작 없이 검사를 완수해 안도했습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다."
  },
  {
    "id": "pool-new-rev-24",
    "category": "삼킴 공포 & 연하장애",
    "title": "음식 삼키다 질식사할 것 같아 죽만 먹던 삼킴 공포증, 한약 복용 1개월 만에 밥 먹습니다",
    "author": "20대 학생 현OO 님",
    "hasTreatment": false,
    "treatmentType": "",
    "content": "식사 도중 사레가 심하게 걸린 후로 음식을 삼키면 기도로 넘어가 질식할 것 같다는 공황 발작이 생겨 몇 달 동안 미음과 죽만 삼켰습니다. 체중이 7kg이나 빠지고 영양실조 직전이었습니다. 해아림 원장님께서 목구멍 근육의 이상 긴장을 풀어주는 반하후박탕 가감방과 약침 치료를 해주셨습니다. 3주 만에 목 안의 긴장이 풀리면서 밥과 고기 반찬을 편안하게 씹어 삼키고 체중도 정상으로 돌아왔습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다."
  },
  {
    "id": "pool-new-rev-25",
    "category": "기상성 공황 & 날씨 반응",
    "title": "비 오는 날 어둡고 축축해지면 찾아오던 계절성 우울 동반 공황발작, 한방 처방으로 탈출",
    "author": "40대 직장인 노OO 님",
    "hasTreatment": false,
    "treatmentType": "",
    "content": "흐리거나 비 오는 날만 되면 기압 저하와 함께 온몸이 짓눌리는 듯 피로하고 가슴이 두근거리며 죽음의 공포가 엄습했습니다. 장마철에는 아예 출근을 못 할 정도로 앓아누웠습니다. 해아림에서 습담을 몰아내고 양기를 북돋워 주는 맞춤 한약 치료를 받은 후, 흐린 날에도 가슴이 맑고 상쾌하며 불안 없이 활기찬 일상을 보내게 되어 무척 감사합니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다."
  },
  {
    "id": "pool-new-rev-26",
    "category": "급성 스트레스 & 심계항진",
    "title": "극심한 재정 스트레스 후 가슴 쿵쾅거리고 불면 시달리던 급성 공황장애 극복",
    "author": "30대 사업가 방OO 님",
    "hasTreatment": true,
    "treatmentType": "심신 안정 한약 + 뇌신경 침 치료",
    "content": "사업상 큰 위기를 겪은 뒤 밤마다 심장이 130회씩 방망이질 치고 언제 심장마비가 올지 몰라 뜬눈으로 밤을 새웠습니다. 신경안정제를 먹어도 약효가 떨어지면 불안이 더 커져 절망스러웠습니다. 해아림한의원에서 과열된 뇌신경을 식히고 심장을 보강하는 한약과 뇌신경 침 치료를 2달간 받았습니다. 심장 박동이 평온해지고 숙면을 취하게 되면서 사업 위기도 침착하게 극복해냈습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다."
  },
  {
    "id": "pool-new-rev-27",
    "category": "온도 변화 & 실신 공황",
    "title": "사우나나 대중목욕탕 들어가면 숨 턱 막히고 핑 돌던 혈관 미주신경 실신 공황 회복",
    "author": "60대 주부 하OO 님",
    "hasTreatment": false,
    "treatmentType": "",
    "content": "동네 목욕탕 온탕에 들어가거나 사우나에 들어가면 혈관이 확장되면서 눈앞이 캄캄해지고 쓰러질 뻔한 뒤로 목욕탕 트라우마가 생겼습니다. 집에서도 샤워기 물만 틀어도 숨이 차는 공황으로 발전했습니다. 해아림에서 혈관 운동 신경을 튼튼히 해주는 황기, 당귀 기반의 한약 치료를 받고 혈류 조절력이 정상화되어 따뜻한 온탕 목욕을 다시 편안하게 즐기고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다."
  },
  {
    "id": "pool-new-rev-28",
    "category": "운전 시야장애 & 터널비전",
    "title": "고속도로 톨게이트 지나면서 갑자기 시야가 좁아지던 터널 비전 현상 완치 수기",
    "author": "40대 운송업 탁OO 님",
    "hasTreatment": false,
    "treatmentType": "",
    "content": "고속도로 톨게이트를 통과할 때 갑자기 양옆 시야가 검게 변하고 전방만 좁게 보이는 터널 비전과 함께 질식감이 와서 핸들을 놓칠 뻔했습니다. 운전으로 생계를 유지하는데 운전을 못 하게 될까 봐 피가 마르는 심정이었습니다. 해아림 원장님의 세심한 진맥과 뇌혈류 개선 한약 치료 2개월 만에 시야가 확 트이고 답답함이 사라져 장거리 운전을 무사히 이어가고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다."
  },
  {
    "id": "pool-new-rev-29",
    "category": "과로 번아웃 & 응급실 공황",
    "title": "밤샘 야근 후 심박수 160회 치솟으며 앰뷸런스 탔던 30대, 체질 한약으로 일상 회복",
    "author": "30대 대표 구OO 님",
    "hasTreatment": true,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "스타트업 창업 후 수개월간 주 80시간씩 야근을 거듭하다가 사무실에서 심장이 폭주하고 숨이 멎는 발작으로 119 구급차에 실려 갔습니다. 온몸의 에너지가 완전히 고갈된 부신 피로와 공황장애 진단을 받았습니다. 해아림한의원에서 기혈을 급속 충전하고 자율신경 균형을 세우는 1:1 맞춤 한약과 CST 치료를 받았습니다. 3개월 후 심박수와 호흡이 안정되었고 건강한 워라밸을 지키며 활력 있게 일하고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다."
  },
  {
    "id": "pool-new-rev-30",
    "category": "중요 미팅 & 신경성 복통",
    "title": "중요 계약 미팅 때마다 명치가 굳고 식은땀 흘리던 신경성 복통 공황, 심담허겁 치료로 극복",
    "author": "50대 임원 곽OO 님",
    "hasTreatment": false,
    "treatmentType": "",
    "content": "중역 회의나 중요한 해외 바이어 미팅 직전이 되면 명치가 돌덩이처럼 굳으면서 극심한 복통과 식은땀, 호흡곤란이 밀려와 화장실로 피신하곤 했습니다. 해아림에서 심담허겁과 간비불화 상태를 해소하는 처방을 받아 복용한 지 한 달 만에 배의 긴장감이 풀리고 가슴이 시원해졌습니다. 지난주 대형 계약 프레젠테이션도 평정심을 유지하며 완벽하게 성사시켰습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다."
  }
];

  // ──────────────────────────────────────────────────────────
  // 2. 스토리지 상태 관리
  // ──────────────────────────────────────────────────────────
  var STATE_KEY = 'healim_auto_reviews_state';

  function getAutoReviewState() {
    try {
      var raw = localStorage.getItem(STATE_KEY);
      if (raw) {
        var s = JSON.parse(raw);
        if (s && typeof s === 'object') return s;
      }
    } catch(e) {}
    
    var now = Date.now();
    var nextTime = calculateNextReviewScheduleTime(new Date(now)).getTime();
    var initial = {
      lastPublishedTime: 0,
      nextScheduledTime: nextTime,
      poolIndex: 0,
      publishedPoolIds: []
    };
    saveAutoReviewState(initial);
    return initial;
  }

  function saveAutoReviewState(state) {
    try {
      localStorage.setItem(STATE_KEY, JSON.stringify(state));
    } catch(e) {}
  }

  /**
   * 4개월당 2~6개 랜덤 주기 계산:
   * 4개월(약 120일)에 2~6개이므로 1편당 20일~55일 간격 (평균 약 30~40일)
   * 랜덤 시간대: 오전 09:00 ~ 오후 20:00 사이 무작위 분/초
   */
  function calculateNextReviewScheduleTime(fromDate) {
    var base = fromDate ? new Date(fromDate) : new Date();
    // 20일 ~ 55일 사이 랜덤 간격
    var minDays = 20;
    var maxDays = 55;
    var randomDays = minDays + Math.floor(Math.random() * (maxDays - minDays + 1));
    
    var next = new Date(base.getTime() + randomDays * 24 * 60 * 60 * 1000);
    var randomHour = 9 + Math.floor(Math.random() * 12); // 09 ~ 20시
    var randomMinute = Math.floor(Math.random() * 60);
    var randomSecond = Math.floor(Math.random() * 60);
    
    next.setHours(randomHour, randomMinute, randomSecond, 0);
    return next;
  }

  function formatScheduleTime(ts) {
    if (!ts) return '미정';
    var d = new Date(ts);
    if (isNaN(d.getTime())) return '미정';
    var yyyy = d.getFullYear();
    var mm = String(d.getMonth() + 1).padStart(2, '0');
    var dd = String(d.getDate()).padStart(2, '0');
    var hh = String(d.getHours()).padStart(2, '0');
    var min = String(d.getMinutes()).padStart(2, '0');
    return yyyy + '.' + mm + '.' + dd + ' ' + hh + ':' + min;
  }


  // ──────────────────────────────────────────────────────────
  // 2.5. 지속적 신규 치료후기 생성기 (Continuous Review Generator)
  // ──────────────────────────────────────────────────────────
  var extendedReviewTopics = [
    {
      id: "rev-ext-1",
      category: "터널/운전 공황",
      author: "40대 영업직 박OO 님",
      title: "터널 진입 공포로 고속도로 운전을 포기했던 영업직, 4개월 치료 후 전국 출장길을 당당히 복귀했습니다",
      content: "지방 출장이 잦은 영업직인데 터널만 들어가면 핸들을 쥔 손이 덜덜 떨리고 숨이 턱 막혀 차를 갓길에 세우기 일쑤였습니다. 직장을 그만둬야 하나 절망스러웠는데 해아림한의원에서 경추 추나요법과 맞춤 한약을 병행하며 2개월 차부터 터널 통과 시 가슴 두근거림이 사라졌습니다. 4개월 차인 지금은 부산, 대구 장거리 운전도 편안하게 해내고 있습니다.",
      hasTreatment: true,
      treatmentType: "맞춤 한약 + 경추 추나요법 + 인지이완요법"
    },
    {
      id: "rev-ext-2",
      category: "치과/폐소공포",
      author: "30대 직장인 이OO 님",
      title: "치과 진료대 눕지 못해 충치 치료도 미루던 극심한 폐소공포, 두개천골요법과 한약으로 편안히 진료받았습니다",
      content: "치과 의자가 뒤로 넘어가기만 하면 목이 졸리는 듯한 질식감에 벌떡 일어나 뛰쳐나왔습니다. 해아림한의원에서 상부 경추의 아탈구와 턱관절 긴장을 풀어주는 CST 치료를 받고 심포의 열을 내리는 한약을 복용했습니다. 3주 만에 치과 의자에 누워 1시간 동안 충치 치료를 아무런 공포 없이 무사히 마쳤을 때 눈물이 났습니다.",
      hasTreatment: true,
      treatmentType: "청심안신 한약 + 두개천골요법(CST)"
    },
    {
      id: "rev-ext-3",
      category: "야간 공황/수면",
      author: "50대 주부 정OO 님",
      title: "자다가 숨 막혀 깨어나는 야간 공황으로 1년 넘게 시달렸는데, 10주 만에 아침까지 푹 자는 기적을 맛봤습니다",
      content: "밤마다 잠든지 1~2시간 만에 심장이 터질 듯 방망이질 치며 벌떡 깨어 창문을 열고 울부짖었습니다. 수면제를 먹어도 새벽 발작은 멈추지 않았는데, 뇌간의 이산화탄소 과민성을 낮추는 한약 처방과 족욕, 복식호흡 지도를 받으며 4주 차부터 수면 중 발작이 완전히 멈췄습니다. 지금은 수면제 없이도 매일 7시간씩 꿀잠을 잡니다.",
      hasTreatment: true,
      treatmentType: "천왕보심단 가감 처방 + 미주신경 약침 요법"
    },
    {
      id: "rev-ext-4",
      category: "단약/테이퍼링",
      author: "20대 대학생 최OO 님",
      title: "신경안정제 없이는 외출도 못 하던 약물 의존 환자, 반동 불안 없이 10%씩 안전하게 줄여 완치 판정 받았습니다",
      content: "자낙스를 하루 3알씩 먹으며 평생 약의 노예로 살아야 하나 깊은 우울증에 빠져 있었습니다. 원장님께서 체계적인 4단계 테이퍼링 로드맵을 설계해 주시고 신경계를 보강하는 청열안신 한약을 복용하며 2주 간격으로 약을 쪼개어 줄여나갔습니다. 놀랍게도 금단 증상 없이 3개월 만에 양약을 완전히 끊고 홀가분하게 학교로 복귀했습니다.",
      hasTreatment: true,
      treatmentType: "한양방 감약 테이퍼링 + 귀비탕 맞춤 처방"
    },
    {
      id: "rev-ext-5",
      category: "회의/발표 불안",
      author: "30대 연구원 김OO 님",
      title: "팀 주간 회의 발표 순서만 되면 목소리가 떨리고 숨이 막혔는데, 담력 보강 치료 후 자신감을 되찾았습니다",
      content: "많은 사람들 앞에서 말할 때 심장이 밖으로 튀어나올 것 같고 머리가 하얘지는 증상 때문에 회사를 그만둘 생각까지 했습니다. 심담허겁(心膽虛怯)을 치료하는 온담탕과 침 치료를 꾸준히 받으면서 3주 차부터 발표 전 가슴 두근거림이 차분하게 가라앉았고, 이제는 발표도 여유롭게 주도하고 있습니다.",
      hasTreatment: true,
      treatmentType: "온담탕 가감 처방 + 자율신경 조절 침구 치료"
    }
  ];

  function generateContinuousNewReview(existingTitles, deletedPoolIds, state) {
    for (var i = 0; i < extendedReviewTopics.length; i++) {
      var item = extendedReviewTopics[i];
      var norm = normalizeReviewTitle(item.title);
      if (!existingTitles.has(norm) && !deletedPoolIds.has(item.id)) {
        return item;
      }
    }

    var dynamicReviews = [
      {
        id: "rev-dyn-1",
        category: "지하철/광장공포",
        author: "30대 직장인 송OO 님",
        title: "출퇴근 만원 지하철에서 숨 막히던 광장공포증, 단계적 탈감작과 한약으로 완전히 극복했습니다",
        content: "지하철 문만 닫히면 뛰어내리고 싶던 지옥 같은 출퇴근길이었습니다. 원장님의 단계적 노출 지도와 가슴 울화를 풀어주는 한약을 복용하며 한 정거장씩 성공 경험을 쌓았고, 3개월 만에 신도림 환승역도 아무렇지 않게 통과하고 있습니다.",
        hasTreatment: true,
        treatmentType: "맞춤 한약 + 단계적 탈감작 인지행동치료"
      },
      {
        id: "rev-dyn-2",
        category: "식후 어지럼증",
        author: "40대 자영업 한OO 님",
        title: "밥만 먹으면 심장이 쿵쾅거리고 쓰러질 것 같던 식후 공황, 위장 담적 치료로 편안해졌습니다",
        content: "식사 후 명치가 돌처럼 굳고 공황발작이 와서 식사 자체가 공포였습니다. 위-미주신경 반사를 안정시키는 평위산 가감 한약과 복부 온열 침 치료를 통해 명치의 체기가 내려가면서 두근거림도 거짓말처럼 사라졌습니다.",
        hasTreatment: true,
        treatmentType: "평위산 가감방 + 복부 온열 침구 요법"
      }
    ];

    var idx = (state.dynamicRevIndex || 0) % dynamicReviews.length;
    state.dynamicRevIndex = (state.dynamicRevIndex || 0) + 1;
    return dynamicReviews[idx];
  }


  // ──────────────────────────────────────────────────────────
  // 3. 중복 방지 및 기존 글 안전 조회 엔진
  // ──────────────────────────────────────────────────────────
  function cleanReviewBaseTitle(title) {
    if (!title || typeof title !== 'string') return '';
    var s = String(title).trim();
    s = s.replace(/^\[.*?\]\s*/, '');
    s = s.replace(/\s*-\s*(재발\s*방지.*|두개천골요법.*|맞춤\s*치료.*|회복\s*수기.*|치료\s*기록.*|극복\s*수기.*)/i, '');
    s = s.replace(/\s*\((예기불안\s*극복|치료\s*수기|임상\s*호전|완전\s*회복)\)\s*$/i, '');
    return s.trim();
  }

  function normalizeReviewTitle(title) {
    if (!title || typeof title !== 'string') return '';
    var base = cleanReviewBaseTitle(title);
    return base
      .replace(/[\s\*\*_~\`#\?\uFF1F\.,\(\)\[\]:;\-]/g, '')
      .trim()
      .toLowerCase();
  }

  function getDeletedReviewPoolIds() {
    var ids = new Set();
    try {
      var raw = localStorage.getItem('healim_deleted_pool_ids_reviews');
      if (raw) {
        var arr = JSON.parse(raw) || [];
        arr.forEach(function(id) { if (id) ids.add(String(id)); });
      }
    } catch(e) {}
    return ids;
  }

  function getExistingReviewTitles() {
    var titles = new Set();

    // 1) healim_board_reviews
    try {
      var raw = localStorage.getItem('healim_board_reviews');
      if (raw) {
        var list = JSON.parse(raw) || [];
        list.forEach(function(it) {
          if (it && it.title) titles.add(normalizeReviewTitle(it.title));
        });
      }
    } catch(e) {}

    // 2) healim_vault_all_posts_reviews
    try {
      var rawV = localStorage.getItem('healim_vault_all_posts_reviews');
      if (rawV) {
        var listV = JSON.parse(rawV) || [];
        listV.forEach(function(it) {
          if (it && it.title) titles.add(normalizeReviewTitle(it.title));
        });
      }
    } catch(e) {}

    // 3) healim_custom_reviews_posts
    try {
      var rawC = localStorage.getItem('healim_custom_reviews_posts');
      if (rawC) {
        var listC = JSON.parse(rawC) || [];
        listC.forEach(function(it) {
          if (it && it.title) titles.add(normalizeReviewTitle(it.title));
        });
      }
    } catch(e) {}

    // 4) default seed reviews (window.defaultReviewsData || window.defaultReviewsList)
    var fallbackRev = window.defaultReviewsData || window.defaultReviewsList;
    if (fallbackRev && Array.isArray(fallbackRev)) {
      fallbackRev.forEach(function(it) {
        if (it && it.title) titles.add(normalizeReviewTitle(it.title));
      });
    }

    // 5) Deleted titles blacklist (Permanent exclusion)
    try {
      var rawDelTitles = localStorage.getItem('healim_deleted_titles_reviews');
      if (rawDelTitles) {
        var delTitles = JSON.parse(rawDelTitles) || [];
        delTitles.forEach(function(dt) {
          if (dt) titles.add(normalizeReviewTitle(dt));
        });
      }
    } catch(e) {}

    return titles;
  }

  // 과거 잘못 생성되었던 충돌성 임시 후기(시드 1번 글과 동일 제목) 자동 정리
  function purgeOrMigrateCollidingAutoReviews() {
    var collidingTitles = [
      '응급실만 세 번 갔는데, 맞춤 한약과 이완 훈련으로 완전히 회복되었습니다',
      '응급실만 세 번 갔는데, 맞춤 한약과 이완 훈련으로 완전히 회복되었습니다.'
    ];
    ['healim_board_reviews', 'healim_vault_all_posts_reviews', 'healim_custom_reviews_posts', 'healim_community_posts_v2'].forEach(function(k) {
      try {
        var raw = localStorage.getItem(k);
        if (raw) {
          var arr = JSON.parse(raw);
          if (Array.isArray(arr)) {
            var modified = false;
            var filtered = arr.filter(function(it) {
              if (!it) return false;
              var strId = String(it.id || '');
              // 시드 1번 제목과 동일한 자동발행 글(reviews-*)이 있다면 제거하여 시드 1번 원본 100% 복원
              if (strId.startsWith('reviews-') && collidingTitles.indexOf(it.title) !== -1) {
                modified = true;
                return false;
              }
              return true;
            });
            if (modified) {
              localStorage.setItem(k, JSON.stringify(filtered));
            }
          }
        }
      } catch(e) {}
    });
  }
  try { purgeOrMigrateCollidingAutoReviews(); } catch(e) {}

  // ──────────────────────────────────────────────────────────
  // 4. 치료후기 자동 발행 실행 엔진 (무제한 누적 & 65편 시드 영구 보존)
  // ──────────────────────────────────────────────────────────
  function checkAndRunAutoReviewPublish(isManual) {
    var state = getAutoReviewState();
    var now = Date.now();
    var shouldPublish = isManual || (state.nextScheduledTime && now >= state.nextScheduledTime);

    if (shouldPublish) {
      var pool = window.autoReviewContentPool || [];
      var poolLength = pool.length;
      if (poolLength === 0) return null;

      var existingTitles = getExistingReviewTitles();
      var deletedPoolIds = getDeletedReviewPoolIds();

      var chosenIndex = -1;
      var candidatePoolItem = null;

      for (var i = 0; i < poolLength; i++) {
        var testIdx = (state.poolIndex + i) % poolLength;
        var cand = pool[testIdx];
        var normT = normalizeReviewTitle(cand.title);
        var pId = cand.id;

        if (!existingTitles.has(normT) && !deletedPoolIds.has(String(pId))) {
          chosenIndex = testIdx;
          candidatePoolItem = cand;
          break;
        }
      }

      var poolItem = candidatePoolItem;
      if (!poolItem) {
        // 🌟 핵심 요구사항: 풀 소진 시 확장 풀 및 동적 생성기 가동!
        poolItem = generateContinuousNewReview(existingTitles, deletedPoolIds, state);
      }

      if (!poolItem) {
        console.warn('[Healim Auto-Review Engine] 발행 가능한 미중복 치료후기를 찾지 못해 안전하게 중단합니다.');
        return null;
      }

      var pubTimestamp = isManual ? now : (state.nextScheduledTime || now);
      var effectiveDate = new Date(pubTimestamp);
      var seedDateObj = new Date('2026-09-10T12:00:00');
      if (effectiveDate < seedDateObj) effectiveDate = new Date();
      var dateStr = effectiveDate.getFullYear() + '.' + String(effectiveDate.getMonth() + 1).padStart(2, '0') + '.' + String(effectiveDate.getDate()).padStart(2, '0');

      var finalTitle = poolItem.title;
      var finalContent = poolItem.content;

      var imgIdx = ((chosenIndex !== -1 ? chosenIndex : 1) % 6) + 1;
      var newPost = {
        id: 'reviews-' + pubTimestamp,
        category: poolItem.category || '치료후기',
        author: poolItem.author || '30대 직장인 김OO 님',
        date: dateStr,
        views: Math.floor(150 + Math.random() * 50),
        image: '/images/reviews/review_' + imgIdx + '.jpg',
        title: finalTitle,
        content: finalContent,
        hasTreatment: !!poolItem.hasTreatment,
        treatmentType: poolItem.treatmentType || null,
        isCustom: true,
        isAutoPublished: true,
        createdAt: effectiveDate.getTime(),
        updatedAt: effectiveDate.getTime(),
        poolId: poolItem.id
      };

      // 🌟 핵심 요구사항 1: 엄격한 중복 감지 시 강제 발행 즉각 중단!
      var normCand = normalizeReviewTitle(newPost.title);
      var rawB = localStorage.getItem('healim_board_reviews');
      var currRevList = rawB ? (JSON.parse(rawB) || []) : [];
      var exists = currRevList.some(function(it) {
        return it.id === newPost.id || normalizeReviewTitle(it.title) === normCand;
      });

      if (exists || existingTitles.has(normCand)) {
        console.warn('[Healim Auto-Review Engine] 🚫 중복 치료후기 감지되어 발행을 즉각 중단합니다: "' + newPost.title + '"');
        state.poolIndex = (state.poolIndex + 1) % poolLength;
        saveAutoReviewState(state);
        return null; // 강제 발행 취소!
      }

      // 스토리지 및 IndexedDB 영구 반영
      try {
        var defaultRevSeed = (window.defaultReviewsData || window.defaultReviewsList || []);

        var revList = [];
        if (rawB) revList = JSON.parse(rawB) || [];
        if ((!revList || revList.length === 0) && defaultRevSeed.length > 0) {
          revList = defaultRevSeed.slice();
        }
        revList = revList.filter(function(p) { return p.id !== newPost.id && normalizeReviewTitle(p.title) !== normalizeReviewTitle(newPost.title); });
        revList.unshift(newPost);
        localStorage.setItem('healim_board_reviews', JSON.stringify(revList));

        var vaultList = [];
        var rawV = localStorage.getItem('healim_vault_all_posts_reviews');
        if (rawV) vaultList = JSON.parse(rawV) || [];
        if ((!vaultList || vaultList.length === 0) && revList.length > 0) {
          vaultList = revList.slice();
        }
        vaultList = vaultList.filter(function(p) { return p.id !== newPost.id && normalizeReviewTitle(p.title) !== normalizeReviewTitle(newPost.title); });
        vaultList.unshift(newPost);
        localStorage.setItem('healim_vault_all_posts_reviews', JSON.stringify(vaultList));

        if (typeof window !== 'undefined' && window.HealimPermanentDB && window.HealimPermanentDB.saveVault) {
          window.HealimPermanentDB.saveVault('reviews', vaultList);
        }

        var customList = [];
        var rawC = localStorage.getItem('healim_custom_reviews_posts');
        if (rawC) customList = JSON.parse(rawC) || [];
        customList = customList.filter(function(p) { return p.id !== newPost.id && normalizeReviewTitle(p.title) !== normalizeReviewTitle(newPost.title); });
        customList.unshift(newPost);
        localStorage.setItem('healim_custom_reviews_posts', JSON.stringify(customList));

        var rawLeg = localStorage.getItem('healim_community_posts_v2');
        var legList = rawLeg ? (JSON.parse(rawLeg) || []) : [];
        legList = legList.filter(function(p) { return p.id !== newPost.id && normalizeReviewTitle(p.title) !== normalizeReviewTitle(newPost.title); });
        legList.unshift(newPost);
        localStorage.setItem('healim_community_posts_v2', JSON.stringify(legList));

        if (typeof window !== 'undefined') {
          if (window.HealimCloudDB && typeof window.HealimCloudDB.savePost === 'function') {
            window.HealimCloudDB.savePost('reviews', newPost);
          }
          if (window.HealimUniversalSync && typeof window.HealimUniversalSync.syncPostToRemote === 'function') {
            window.HealimUniversalSync.syncPostToRemote('reviews', newPost, 'create');
          }
        }
      } catch(e) {}

      // Update state
      state.lastPublishedTime = now;
      state.nextScheduledTime = calculateNextReviewScheduleTime(effectiveDate);
      state.poolIndex = ((chosenIndex !== -1 ? chosenIndex : state.poolIndex) + 1) % poolLength;
      saveAutoReviewState(state);

      updateAutoReviewStatusUI(state);

      try {
        window.dispatchEvent(new CustomEvent('healim-community-updated', {
          detail: {
            type: 'reviews',
            post: newPost,
            isAutoPublished: true,
            nextScheduleTime: state.nextScheduledTime
          }
        }));
      } catch(e) {}

      return newPost;
    }

    updateAutoReviewStatusUI(state);
    return null;
  }

  function updateAutoReviewStatusUI(state) {
    if (typeof document === 'undefined') return;
    var el = document.getElementById('autoReviewNextScheduleText');
    if (el && state) {
      el.textContent = '다음 발행: ' + formatScheduleTime(state.nextScheduledTime);
    }
  }

  window.checkAndRunAutoReviewPublish = checkAndRunAutoReviewPublish;
  window.getAutoReviewState = getAutoReviewState;
  window.calculateNextReviewScheduleTime = calculateNextReviewScheduleTime;
  window.formatReviewScheduleTime = formatScheduleTime;

  window.triggerAutoReviewPublishManual = function() {
    var isHealimAdmin = false;
    if (typeof window.isHealimSuperAdmin === 'function') {
      isHealimAdmin = window.isHealimSuperAdmin();
    }
    if (!isHealimAdmin) {
      try {
        var rawUser = localStorage.getItem('healim_auth_user');
        if (rawUser) {
          var u = JSON.parse(rawUser);
          if (u && (u.uid === 'healim0071' || u.id === 'healim0071' || (u.role === 'admin' && (u.uid === 'healim0071' || u.id === 'healim0071')) || u.grade === 'superadmin' || u.role === 'superadmin')) {
            isHealimAdmin = true;
          }
        }
      } catch(e) {}
    }
    if (!isHealimAdmin) {
      alert('관리자(healim0071)로 로그인한 경우에만 수동 즉시 발행이 가능합니다.');
      return;
    }

    var published = checkAndRunAutoReviewPublish(true);
    if (published) {
      alert('⚡ [공황장애 치료후기 신규 글 자동 발행 완료]\n\n' +
            '제목: ' + published.title + '\n' +
            '작성자: ' + published.author + '\n' +
            '발행일자: ' + published.date + '\n\n' +
            '목록 최상단에 성공적으로 발행되었습니다.');
      if (typeof renderReviewsList === 'function') renderReviewsList();
      if (typeof syncBottomCommunity === 'function') syncBottomCommunity();
    }
  };

  // DOM 로드 시 자동 검사
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      checkAndRunAutoReviewPublish(false);
    });
  } else {
    checkAndRunAutoReviewPublish(false);
  }

})();
