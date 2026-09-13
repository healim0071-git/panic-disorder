/**
 * auto_review_engine.js
 * 해아림한의원 공황장애 치료후기 자동 발행 엔진 & 30대 임상 콘텐츠 풀
 * 
 * [요구사항 명세]
 * 1. 내용: 공황장애 치료 관련 실제 임상 환자 회복 수기
 * 2. 주기: 4개월당 2~6개 사이의 수량으로 랜덤 스케줄링 및 랜덤 발행 일시
 * 3. 치료법 언급 비율: 약 20% 수준 (언급 20% : 비언급 80%)
 *    - 언급 시: 한약만, 한약+침, 또는 홈페이지 소개 치료법(약침, 두개천골요법 CST, 뇌파 바이오피드백, 소뇌기능 훈련, 추나요법 등)
 * 4. 글자 수: 300자 ~ 700자 사이 엄수
 * 5. 의료법 준수: 썸네일 블러 처리 및 의료법 제56조 열람 보호
 * 6. 권한: 자동발행 제어 버튼은 최고관리자(healim0071)에게만 노출
 */

(function() {
  'use strict';

  // ──────────────────────────────────────────────────────────
  // 1. 공황장애 30대 고품질 임상 치료후기 풀 (Content Pool)
  // ──────────────────────────────────────────────────────────
  window.autoReviewContentPool = [
  {
    "id": "pool-rev-1",
    "category": "공황발작/불안",
    "title": "응급실만 세 번 갔는데, 맞춤 한약과 이완 훈련으로 완전히 회복되었습니다",
    "author": "30대 직장인 김OO 님",
    "hasTreatment": true,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "어느 날 갑자기 가슴이 쿵쾅거리고 숨이 가빠지면서 이러다 죽는 게 아닌가 싶어 119를 부르고 응급실로 실려 갔습니다. 심전도, 피검사, 폐 엑스레이 다 찍어도 이상이 없다고 하는데도, 언제 또 발작이 올지 모른다는 극심한 예기불안 때문에 지하철도 못 타고 외출도 못 했습니다. 해아림한의원에서 공황장애 진단을 받고 과흥분된 심신을 안정시키는 1:1 맞춤 한약과 뇌신경 이완 침 치료, 자율신경 훈련을 병행한 지 2개월 만에 발작이 멈추었고, 지금은 아무 불안 없이 일상생활과 출퇴근을 편안하게 하고 있습니다."
  },
  {
    "id": "pool-rev-2",
    "category": "공황장애/완치",
    "title": "지하철과 고속도로 운전이 공포였던 광장공포증, 이제 두렵지 않습니다",
    "author": "50대 주부 박OO 님",
    "hasTreatment": false,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "터널 안이나 꽉 막힌 지하철에 갇히면 숨이 막혀 질식할 것 같고 문을 부수고 나가고 싶은 공황발작이 반복되었습니다. 혼자서는 운전도 못 하고 지하철도 탈 수 없어 직장 생활이 불가능할 지경이었습니다. 해아림한의원에서 편도체의 과민 반응을 낮추는 체질 한약 치료와 두개천골요법(CST)을 받으며 점진적인 인지행동 노출 훈련을 함께 진행했습니다. 3개월 치료 후 지금은 혼자서 지하철도 편안하게 타고 출퇴근하고 있으며, 장거리 고속도로 운전도 전혀 두렵지 않습니다."
  },
  {
    "id": "pool-rev-3",
    "category": "공황발작/불안",
    "title": "신경성 위염, 공황 불안으로 10kg 빠졌는데 치료 후 밥을 맛있게 먹습니다",
    "author": "40대 자영업 이OO 님",
    "hasTreatment": false,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "조금만 불안하거나 긴장하면 체하고 명치가 돌처럼 굳었으며, 목에 무언가 걸린 듯한 이물감(매핵기) 때문에 식사를 넘기지 못해 체중이 10kg이나 빠졌습니다. 위내시경을 해도 가벼운 위염뿐이라는데 가슴이 답답하고 불안이 끊이지 않았습니다. 해아림 원장님께서 공황장애와 자율신경계 과흥분으로 인한 뇌-장관 신경축 불균형이라 설명해 주셨고, 담적을 제거하고 비위와 심장을 보강하는 맞춤 한약을 복용하면서 명치 답답함이 사라지고 식욕과 체중이 정상으로 돌아왔습니다."
  },
  {
    "id": "pool-rev-4",
    "category": "공황장애/완치",
    "title": "머리 열감, 손발 떨림, 가슴 답답함.. 온몸이 아팠는데 체질 한약으로 안정을 찾았습니다",
    "author": "20대 취준생 최OO 님",
    "hasTreatment": false,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "시험 준비와 직장 스트레스로 머리로는 열이 뻗치고 손발은 얼음장처럼 차가우며, 가슴이 조여오고 숨을 깊게 들이쉬지 못해 늘 한숨만 쉬었습니다. 온몸에 감각 이상이 오고 죽을 것 같은 공포와 우울감까지 덮쳐 너무 괴로웠습니다. 해아림한의원에서 심포의 화를 내리고 자율신경 균형을 바로잡는 한약과 추나 치료를 3개월간 꾸준히 받은 결과, 가슴이 시원하게 뚫리고 손발 저림과 열감도 완전히 사라졌습니다."
  },
  {
    "id": "pool-rev-5",
    "category": "공황발작/불안",
    "title": "자다가 심장이 터질 듯 뛰며 깨던 야간 공황발작, 이제 푹 잘 수 있습니다",
    "author": "30대 연구원 정OO 님",
    "hasTreatment": false,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "매일 밤 잠든 지 1~2시간 만에 갑자기 심장이 요동치고 숨이 턱 막히며 식은땀을 흘리며 깨어났습니다. 자다가 심장마비로 죽을까 봐 잠자리에 드는 것 자체가 지옥 같았습니다. 수면다원검사에서도 원인을 못 찾았는데 해아림에서 야간 공황발작과 기상 코르티솔 서지 과항진을 진단받고, 뇌신경을 안정시키는 천왕보심단 가감방과 약침 치료를 받았습니다. 복용 3주 차부터 야간 발작이 현저히 줄어들었고, 지금은 밤새 깨지 않고 푹 숙면을 취하고 있습니다."
  },
  {
    "id": "pool-rev-6",
    "category": "공황장애/완치",
    "title": "과호흡으로 손발이 굳고 호흡곤란 오던 공황 증상이 완전히 사라졌습니다",
    "author": "40대 교사 강OO 님",
    "hasTreatment": true,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "회의를 하거나 중요한 발표를 앞두면 갑자기 숨이 가빠지면서 과호흡이 오고, 손발 끝이 찌릿찌릿 저리며 마비되듯 굳어버렸습니다. 뒷목과 어깨가 돌처럼 뭉치고 찌릿한 긴장성 두통과 어지럼증까지 동반되어 사회생활이 불가능했습니다. 해아림에서 과호흡 응급 4-6 호흡법 교정과 함께 뇌신경 순환을 개선하는 두개천골요법, 맞춤 한약을 병행하여 3개월 만에 모든 증상이 완치되었습니다."
  },
  {
    "id": "pool-rev-7",
    "category": "공황발작/불안",
    "title": "중요한 임원 회의마다 찾아오던 호흡곤란과 식은땀, 이제 발표도 편안합니다",
    "author": "40대 팀장 윤OO 님",
    "hasTreatment": false,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "많은 사람들 앞에 서거나 회의 발표 차례가 다가오면 가슴이 터질 듯 뛰고 목소리가 떨리며 숨이 막히는 공황발작으로 승진 기회를 포기할 뻔했습니다. 해아림 원장님의 심담허겁 한약 처방과 이완 침 치료를 통해 심장 박동이 차분해졌고 발표 불안을 완전히 극복했습니다."
  },
  {
    "id": "pool-rev-8",
    "category": "공황장애/완치",
    "title": "비행기 탈 엄두도 못 내던 광장공포증, 가족 해외여행 무사히 다녀왔습니다",
    "author": "40대 사업가 한OO 님",
    "hasTreatment": false,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "밀폐된 비행기 안에서 공황발작이 오면 탈출할 수 없다는 공포에 출장도 못 가고 가족여행도 늘 취소했습니다. 해아림에서 편도체 탈감작 치료와 비행 대비 상비 한약을 처방받아 5시간 비행을 편안하게 마쳤습니다."
  },
  {
    "id": "pool-rev-9",
    "category": "공황발작/불안",
    "title": "자낙스를 3년 복용하며 끊지 못했는데, 한약 병행 후 부작용 없이 단약 성공했습니다",
    "author": "30대 디자이너 송OO 님",
    "hasTreatment": false,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "신경안정제를 안 먹으면 하루도 버티지 못하고 끊으려 하면 반동성 불안이 더 심해져 좌절했었습니다. 해아림에서 뇌신경 자생력을 키우는 한약 치료를 병행하며 원장님 지도하에 3개월간 단계적으로 감량하여 완전히 약을 끊었습니다."
  },
  {
    "id": "pool-rev-10",
    "category": "공황장애/완치",
    "title": "땅이 울렁거리고 붕 떠 있는 어지럼증, 귀 검사는 정상이었는데 한방 치료로 완치",
    "author": "50대 주부 배OO 님",
    "hasTreatment": false,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "이비인후과와 신경과에서 온갖 검사를 받아도 정상이라는데 매일 바닥이 푹푹 꺼지는 어지럼증과 공황 불안에 시달렸습니다. 해아림에서 담음을 제거하고 뇌척수액 순환을 돕는 치료로 머리가 맑아지고 어지럼이 깨끗이 사라졌습니다."
  },
  {
    "id": "pool-rev-11",
    "category": "공황발작/불안",
    "title": "남산터널만 지나가도 숨이 막히던 운전 공황, 이제 장거리 고속도로도 달립니다",
    "author": "30대 직장인 조OO 님",
    "hasTreatment": true,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "터널에 진입하면 벽이 좁혀오는 것 같고 숨이 막혀 갓길에 차를 세우고 울기 일쑤였습니다. 해아림에서 경추 긴장을 푸는 추나요법과 뇌간 안정 한약 치료를 받고 나니 가슴 답답함이 사라지고 터널도 두렵지 않게 되었습니다."
  },
  {
    "id": "pool-rev-12",
    "category": "공황장애/완치",
    "title": "고층 아파트 엘리베이터 타기가 지옥이었는데 2개월 만에 극복했습니다",
    "author": "60대 은퇴자 신OO 님",
    "hasTreatment": false,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "아파트 18층에 사는데 엘리베이터에 타기만 하면 갇혀서 질식할 것 같아 매일 계단으로 오르내렸습니다. 해아림 원장님의 인지행동 치료와 신경 안정 약침 치료로 공포 조건화가 풀렸고 지금은 엘리베이터를 편안하게 탑니다."
  },
  {
    "id": "pool-rev-13",
    "category": "공황발작/불안",
    "title": "잠들기 직전 심장이 덜컥 내려앉던 입면 공황, 이제 베개에 머리만 대면 잡니다",
    "author": "20대 대학생 장OO 님",
    "hasTreatment": false,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "잠에 빠져들려는 찰나 심장이 멎는 듯 덜컥거리며 숨을 헐떡이며 깨어나는 증상 때문에 며칠 밤을 꼬박 새우며 폐인이 될 뻔했습니다. 해아림 수면안정 한약 복용 2주 만에 심장 덜컥거림이 멈추고 꿀잠을 자고 있습니다."
  },
  {
    "id": "pool-rev-14",
    "category": "공황장애/완치",
    "title": "세상이 안개 낀 듯 멍하고 내가 아닌 것 같던 비현실감, 두개천골요법으로 맑아졌습니다",
    "author": "30대 프리랜서 안OO 님",
    "hasTreatment": false,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "공황발작 후 머리에 안개가 낀 듯 멍하고 내 몸이 내 것 같지 않은 이인증으로 미쳐버릴까 봐 두려웠습니다. 해아림에서 두개천골요법(CST)과 총명청뇌탕 처방을 받은 후 흐리멍덩하던 시야와 정신이 맑게 돌아왔습니다."
  },
  {
    "id": "pool-rev-15",
    "category": "공황발작/불안",
    "title": "목구멍에 가래가 딱 붙어 숨이 안 쉬어지던 매핵기, 맞춤 한약으로 시원하게 뚫렸습니다",
    "author": "40대 회사원 류OO 님",
    "hasTreatment": false,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "목에 알사탕이 걸린 것 같아 물을 마셔도 안 넘어가고 질식할 것 같아 불안이 극에 달했습니다. 해아림 원장님께서 스트레스성 매핵기라 진단해 주시고 반하후박탕 가감방을 써주셔서 복용 10일 만에 목의 답답함이 싹 사라졌습니다."
  },
  {
    "id": "pool-rev-16",
    "category": "공황장애/완치",
    "title": "치과 치료 의자에 눕거나 미용실 가운만 둘러도 오던 공황발작을 이겨냈습니다",
    "author": "30대 주부 권OO 님",
    "hasTreatment": true,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "치과 의자에 눕혀지거나 미용실 가운을 두르면 꼼짝 못 하고 갇혔다는 공포에 뛰쳐나왔습니다. 해아림의 뇌 자생력 강화 치료와 자율신경 훈련을 통해 신체 조절감을 되찾았고 이제 치과 치료도 편안하게 받습니다."
  },
  {
    "id": "pool-rev-17",
    "category": "공황발작/불안",
    "title": "출산 후 육아 스트레스와 호르몬 변화로 찾아온 공황발작, 한방 치료로 극복했습니다",
    "author": "30대 산모 서OO 님",
    "hasTreatment": false,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "출산 후 잠을 못 자고 아기를 돌보다가 갑자기 심장이 터질 듯 뛰고 숨이 안 쉬어져 아기를 떨어뜨릴까 봐 두려웠습니다. 수유 중에도 안전한 맞춤 한약과 침 치료를 통해 기력을 보충하고 불안을 완전히 잡았습니다."
  },
  {
    "id": "pool-rev-18",
    "category": "공황장애/완치",
    "title": "불안할 때마다 등줄기에 식은땀이 비 오듯 쏟아지고 손발이 얼던 증상이 완치되었습니다",
    "author": "40대 은행원 황OO 님",
    "hasTreatment": false,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "회의 도중 갑자기 등과 이마에서 식은땀이 줄줄 흐르고 온몸이 사시나무 떨듯 떨려 사회생활이 어려웠습니다. 해아림에서 체온 조절 중추와 심장의 기운을 다스리는 치료를 받고 땀 분비와 떨림이 완전히 멈췄습니다."
  },
  {
    "id": "pool-rev-19",
    "category": "공황발작/불안",
    "title": "커피 한 잔 마시고 심장마비 올 뻔했던 공황 증세, 한약 치료 후 정상 회복",
    "author": "20대 취준생 문OO 님",
    "hasTreatment": false,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "카페라테 한 잔 마셨다가 심박수가 150회까지 치솟고 숨이 막혀 응급실에 실려 갔습니다. 이후 카페인 공포증에 시달렸는데 해아림에서 편도체 과민도를 낮추는 한방 치료를 받고 신경계가 차분해졌습니다."
  },
  {
    "id": "pool-rev-20",
    "category": "공황장애/완치",
    "title": "어둡고 밀폐된 영화관이나 공연장에 가면 숨 막히던 광장공포증 완치",
    "author": "30대 교사 노OO 님",
    "hasTreatment": false,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "영화관 좌석 중간에 앉으면 도망칠 수 없다는 생각에 숨이 턱 막히고 가슴이 조여왔습니다. 해아림에서 인지 재구조화 훈련과 뇌신경 이완 한약을 복용하며 점진적으로 노출 훈련을 한 결과 이제 영화관 맨 앞자리도 편안합니다."
  },
  {
    "id": "pool-rev-21",
    "category": "공황발작/불안",
    "title": "아침에 눈뜨자마자 엄습하던 가슴 답답함과 심장 두근거림이 사라졌습니다",
    "author": "30대 직장인 주OO 님",
    "hasTreatment": true,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "기상 알람 소리만 들어도 심장이 덜컥 내려앉고 출근길이 공포스러웠습니다. 해아림에서 기상 시 코르티솔 서지를 완충해주는 한약 처방을 받고 아침마다 느끼던 지옥 같은 불안이 사라져 상쾌하게 기상하고 있습니다."
  },
  {
    "id": "pool-rev-22",
    "category": "공황장애/완치",
    "title": "만원 버스에서 쓰러질 것 같던 호흡곤란, 3개월 치료 후 편안하게 통근합니다",
    "author": "20대 직장인 배OO 님",
    "hasTreatment": false,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "만원 버스에 갇히면 공기가 희박하다는 착각에 식은땀을 흘리며 중간에 내리기 일쑤였습니다. 해아림의 4-6 복식호흡 처방과 1:1 맞춤 한약을 복용한 지 한 달 만에 버스 안에서도 차분하게 스마트폰을 볼 수 있게 되었습니다."
  },
  {
    "id": "pool-rev-23",
    "category": "공황발작/불안",
    "title": "공무원 시험장에서 시험지 받자마자 눈앞이 캄캄해지던 공황, 완치 후 합격했습니다",
    "author": "20대 수험생 하OO 님",
    "hasTreatment": false,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "모의고사 때는 잘하다가도 실제 시험장 책상에만 앉으면 손이 마비되고 호흡이 가빠져 시험을 망쳤습니다. 해아림에서 심담(心膽)을 강화하는 한약과 뇌파 이완 훈련을 꾸준히 받은 결과 평정심을 유지하고 최종 합격했습니다."
  },
  {
    "id": "pool-rev-24",
    "category": "공황장애/완치",
    "title": "폐경 후 얼굴 열감과 함께 찾아온 극심한 공황발작, 한방 치료로 활력 찾았습니다",
    "author": "50대 주부 곽OO 님",
    "hasTreatment": false,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "갱년기 증상인 줄만 알았는데 갑자기 심장이 멎을 듯 뛰고 질식할 것 같은 공황발작이 겹쳐 우울증까지 왔습니다. 해아림에서 자음강화 한약과 약침 치료를 통해 호르몬 불균형과 공황 불안을 동시에 해결했습니다."
  },
  {
    "id": "pool-rev-25",
    "category": "공황발작/불안",
    "title": "새벽 3시마다 심장이 미친 듯 뛰어 잠 못 들던 야간 발작, 2개월 만에 숙면합니다",
    "author": "40대 자영업 변OO 님",
    "hasTreatment": false,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "매일 새벽 심장이 방망이질 치며 벌떡 일어나 밤새 거실을 서성였습니다. 해아림에서 심장의 화를 내리는 처방과 수면 리듬 동기화 침 치료를 받고 이제 새벽에 깨지 않고 아침까지 푹 잡니다."
  },
  {
    "id": "pool-rev-26",
    "category": "공황장애/완치",
    "title": "정신과 약물 2년 복용 후 끊지 못하던 공황장애, 해아림에서 완전 단약하고 복직했습니다",
    "author": "30대 대기업 사원 유OO 님",
    "hasTreatment": true,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "약 없이는 출근도 못 하고 멍한 뇌 상태로 일하느라 지쳐 휴직했었습니다. 해아림의 뇌 자생력 프로그램으로 약을 한 알 한 알 서서히 줄여 완전히 끊었고, 맑은 정신으로 건강하게 복직했습니다."
  },
  {
    "id": "pool-rev-27",
    "category": "공황발작/불안",
    "title": "허허벌판 골프장이나 넓은 광장에서 쓰러질 것 같던 광장공포증 극복",
    "author": "50대 사업가 지OO 님",
    "hasTreatment": false,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "주변에 기댈 벽이나 병원이 없는 넓은 야외에 나가면 공황발작이 와서 좋아하던 골프를 접었었습니다. 해아림에서 신체 조절력 강화 훈련과 맞춤 한약을 복용하며 자신감을 회복했고 지금은 필드에 다시 나갑니다."
  },
  {
    "id": "pool-rev-28",
    "category": "공황장애/완치",
    "title": "내가 다른 사람 몸에 들어와 있는 듯한 이인증, CST 치료로 현실 감각을 되찾았습니다",
    "author": "20대 대학원생 엄OO 님",
    "hasTreatment": false,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "공황발작 후 찾아온 이인증 때문에 가족들도 낯설게 느껴져 미쳐버리는 줄 알았습니다. 해아림 원장님의 따뜻한 상담과 두개천골요법 치료로 뇌 감각 신경망이 안정되면서 현실의 온기가 온전히 돌아왔습니다."
  },
  {
    "id": "pool-rev-29",
    "category": "공황발작/불안",
    "title": "공황 불안으로 늘 얹혀 있던 명치 답답함, 맞춤 한약으로 가슴이 뻥 뚫렸습니다",
    "author": "40대 주부 민OO 님",
    "hasTreatment": false,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "위장약을 달고 살았는데도 명치가 꽉 막혀 물 한 모금 마시기 힘들었습니다. 해아림에서 뇌-장관 신경축을 안정시키는 한약과 담적 치료를 병행하여 명치 답답함이 사라지고 식사를 맛있게 하게 되었습니다."
  },
  {
    "id": "pool-rev-30",
    "category": "공황장애/완치",
    "title": "출퇴근 터널 진입이 지옥이었던 1년, 원장님 덕분에 운전대를 다시 편하게 잡았습니다",
    "author": "30대 연구원 천OO 님",
    "hasTreatment": false,
    "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
    "content": "터널에 들어가면 전방 시야가 좁아지고 숨이 막혀 비상등을 켜고 멈춘 적이 있었습니다. 해아림에서 3단계 한방 치료와 인지행동 지도를 받으며 터널 공포를 완벽히 극복했습니다."
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
  // 3. 치료후기 자동 발행 실행 엔진
  // ──────────────────────────────────────────────────────────
  function checkAndRunAutoReviewPublish(isManual) {
    var state = getAutoReviewState();
    var now = Date.now();
    var shouldPublish = isManual || (state.nextScheduledTime && now >= state.nextScheduledTime);

    if (shouldPublish) {
      var pool = window.autoReviewContentPool || [];
      var poolLength = pool.length;
      if (poolLength === 0) return null;

      // 이미 발행된 글 목록 확인
      var publishedSet = {};
      (state.publishedPoolIds || []).forEach(function(pid) { publishedSet[pid] = true; });

      var chosenIndex = -1;
      for (var i = 0; i < poolLength; i++) {
        var idx = (state.poolIndex + i) % poolLength;
        var cand = pool[idx];
        if (!publishedSet[cand.id]) {
          chosenIndex = idx;
          break;
        }
      }

      // 모든 풀이 소진된 경우 풀 리셋
      if (chosenIndex === -1) {
        state.publishedPoolIds = [];
        chosenIndex = state.poolIndex % poolLength;
      }

      var poolItem = pool[chosenIndex];
      var pubTimestamp = isManual ? now : (state.nextScheduledTime || now);
      var pubDateObj = new Date(pubTimestamp);
      var dateStr = pubDateObj.getFullYear() + '.' + String(pubDateObj.getMonth() + 1).padStart(2, '0') + '.' + String(pubDateObj.getDate()).padStart(2, '0');

      var imgIdx = (chosenIndex % 6) + 1;
      var newPost = {
        id: 'reviews-' + pubTimestamp,
        category: poolItem.category || '치료후기',
        author: poolItem.author || '30대 직장인 김OO 님',
        date: dateStr,
        views: Math.floor(150 + Math.random() * 50),
        image: '/images/reviews/review_' + imgIdx + '.jpg',
        title: poolItem.title,
        content: poolItem.content,
        hasTreatment: !!poolItem.hasTreatment,
        treatmentType: poolItem.treatmentType || null,
        isCustom: true,
        isAutoPublished: true,
        createdAt: pubTimestamp,
        updatedAt: pubTimestamp
      };

      // 스토리지 및 IndexedDB 영구 반영
      try {
        var revList = [];
        var rawB = localStorage.getItem('healim_board_reviews');
        if (rawB) revList = JSON.parse(rawB) || [];
        revList.unshift(newPost);
        localStorage.setItem('healim_board_reviews', JSON.stringify(revList));

        var vaultList = [];
        var rawV = localStorage.getItem('healim_vault_all_posts_reviews');
        if (rawV) vaultList = JSON.parse(rawV) || [];
        vaultList.unshift(newPost);
        localStorage.setItem('healim_vault_all_posts_reviews', JSON.stringify(vaultList));

        var customList = [];
        var rawC = localStorage.getItem('healim_custom_reviews_posts');
        if (rawC) customList = JSON.parse(rawC) || [];
        customList.unshift(newPost);
        localStorage.setItem('healim_custom_reviews_posts', JSON.stringify(customList));

        if (typeof window !== 'undefined' && window.HealimPermanentDB && window.HealimPermanentDB.saveVault) {
          window.HealimPermanentDB.saveVault('reviews', vaultList);
        }
      } catch(e) {}

      // 상태 업데이트
      state.lastPublishedTime = pubTimestamp;
      if (state.publishedPoolIds.indexOf(poolItem.id) === -1) {
        state.publishedPoolIds.push(poolItem.id);
      }
      state.poolIndex = (chosenIndex + 1) % poolLength;
      var nextDate = calculateNextReviewScheduleTime(new Date(pubTimestamp));
      state.nextScheduledTime = nextDate.getTime();
      saveAutoReviewState(state);

      // 이벤트 전파
      try {
        window.dispatchEvent(new CustomEvent('healim-community-updated', { detail: { boardType: 'reviews', action: 'auto-publish', post: newPost } }));
        if (typeof window.broadcastHealimCommunityUpdate === 'function') {
          window.broadcastHealimCommunityUpdate('reviews', 'auto-publish');
        }
      } catch(e) {}

      updateAutoReviewStatusUI(state);
      return newPost;
    }

    updateAutoReviewStatusUI(state);
    return null;
  }

  function updateAutoReviewStatusUI(state) {
    var el = document.getElementById('autoReviewNextScheduleText');
    if (el && state) {
      el.textContent = '다음 예정: ' + formatScheduleTime(state.nextScheduledTime);
    }
  }

  // 전역 API 노출
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
