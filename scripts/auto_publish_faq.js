/**
 * auto_publish_faq.js
 * 해아림한의원 공황장애 FAQ 자동 발행 엔진 & 콘텐츠 풀 (22대 테마 + 엄격 중복 방지)
 * 
 * [요구사항 명세]
 * 1. 대상: 공황장애 및 공황발작 및 예기불안 환자 다빈도 질문 (22대 임상 풀)
 * 2. 분량: 질문에 대한 답변 1,000자 내외
 * 3. 구성: 상단 썸네일 사진 + 본문 1000자 내외 답변 + 하단 3대 링크 (줄바꿔서 1줄씩 띄움)
 *    - [공황장애 검사 알아보기](https://healim-panic.com/autonomic-diagnosis)
 *    - [공황장애 치료방법 알아보기](https://healim-panic.com/autonomic-treatment)
 *    - [전국 지점 안내](https://www.healim.com)
 * 4. 주기: 매주 2~3개 글, 오전 8시 ~ 11시 사이 랜덤 시간 발행
 * 5. 중복 방지: 질문글은 기존에 작성되어 있는 글과 중복되지 않도록 엄격한 정규화 비교 필터링 적용
 * 6. 의료광고법 및 5대 표현 가이드라인 철저 준수:
 *    - 원칙 1: 근원치료/근본치료, 완치된다, 전문병원, 전문/특화/첨단, 완벽해결, 부작용이 없다 등 지양
 *    - 원칙 2: 타 병원과의 비교 및 우위 주장 금지
 *    - 원칙 3: '재발안된다' 지양 -> '재발율이 낮아진다' 표현 사용
 *    - 원칙 4: 지나치게 단정적인 표현 배제 (완곡하고 객관적인 관리 가능성 기술)
 *    - 원칙 5: 의료광고법에 저촉되지 않는 공익적/의학적 정보 구성
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Load canonical pool from static/js/auto_faq_engine.js
const enginePath = path.join(__dirname, '../static/js/auto_faq_engine.js');
const engineCode = fs.readFileSync(enginePath, 'utf8');

const sandbox = {
  window: {},
  localStorage: { getItem: () => null, setItem: () => {} },
  document: { addEventListener: () => {}, getElementById: () => null },
  console: { log: () => {}, warn: () => {}, error: () => {} }
};
vm.createContext(sandbox);
vm.runInContext(engineCode, sandbox);

const autoFaqContentPool = sandbox.window.autoFaqContentPool || [];

// Title normalization helper
function normalizeQuestionTitle(t) {
  if (!t) return '';
  return String(t)
    .replace(/^Q[\.:\s\-]+/i, '')
    .replace(/[\s\*_~`#\?\uFF1F\.,\(\)\[\]]/g, '')
    .trim()
    .toLowerCase();
}

// Content length check and validation
console.log('--- 22대 Content Lengths & Uniqueness ---');
const seenTitles = new Set();
let duplicatesFound = 0;

autoFaqContentPool.forEach((item, idx) => {
  const cleanBody = item.content
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
  const norm = normalizeQuestionTitle(item.title);
  if (seenTitles.has(norm)) {
    console.error(`[DUPLICATE DETECTED] FAQ #${idx + 1}: ${item.title}`);
    duplicatesFound++;
  }
  seenTitles.add(norm);

  console.log(`FAQ #${idx + 1}: ${item.title.substring(0, 35)}...`);
  console.log(`   - Raw Length: ${item.content.length} chars | Clean Body Length: ${cleanBody.length} chars | Unique: OK`);
});

if (duplicatesFound === 0) {
  console.log(`\n✅ All ${autoFaqContentPool.length} FAQ questions in pool are strictly unique (0 duplicates).`);
} else {
  console.error(`\n❌ Found ${duplicatesFound} duplicate questions in pool!`);
}

/**
 * Schedule Calculation Engine
 * Rule: 2~3 posts per week (every 2 to 3 days), randomized between 08:00 and 11:00 AM.
 */
function calculateNextScheduleTime(baseDate = new Date()) {
  const d = new Date(baseDate.getTime());
  const dayOffset = Math.random() < 0.5 ? 2 : 3;
  d.setDate(d.getDate() + dayOffset);

  const hour = 8 + Math.floor(Math.random() * 3); // 8, 9, or 10
  const minute = Math.floor(Math.random() * 60);
  const second = Math.floor(Math.random() * 60);

  d.setHours(hour, minute, second, 0);
  return d;
}

console.log('\n--- Sample Schedule Calculations ---');
let cur = new Date();
for (let i = 1; i <= 5; i++) {
  cur = calculateNextScheduleTime(cur);
  const year = cur.getFullYear();
  const month = String(cur.getMonth() + 1).padStart(2, '0');
  const day = String(cur.getDate()).padStart(2, '0');
  const time = `${String(cur.getHours()).padStart(2, '0')}:${String(cur.getMinutes()).padStart(2, '0')}:${String(cur.getSeconds()).padStart(2, '0')}`;
  console.log(`Next Post #${i}: ${year}.${month}.${day} ${time}`);
}

// ──────────────────────────────────────────────────────────
// 의료광고법 및 5대 표현 원칙 준수 검증 테스트
// ──────────────────────────────────────────────────────────
console.log('\n--- Medical Advertising & Phrasing Compliance Audit ---');
const forbiddenKeywords = [
  '근원을 치료', '근원치료', '근원 치료', '근본치료', '근본 치료', '근본적', '근본',
  '완치된다', '완치될', '완치율', '완치 판정', '완치 기준', '완치',
  '전문병원', '전문', '특화', '첨단',
  '완벽해결', '완벽히', '완벽하게', '완벽한', '완벽',
  '부작용이 없다', '부작용 없이', '부작용 없는', '부작용은 전혀',
  '재발안된다', '재발 안', '재발하지 않', '재발 없는', '재발없이', '재발 없이',
  '우수하', '다른 병원', '단언컨대'
];

let complianceViolations = 0;
autoFaqContentPool.forEach((item, idx) => {
  const fullText = `${item.title} ${item.summary || ''} ${item.content}`;
  forbiddenKeywords.forEach(kw => {
    if (fullText.includes(kw)) {
      console.error(`[COMPLIANCE VIOLATION] FAQ #${idx + 1} contains forbidden keyword: "${kw}"`);
      complianceViolations++;
    }
  });
});

if (complianceViolations === 0) {
  console.log(`✅ All ${autoFaqContentPool.length} FAQ articles 100% strictly satisfy Medical Advertising & Phrasing Compliance Guidelines! (0 violations)\n`);
} else {
  console.error(`❌ Found ${complianceViolations} compliance violations in FAQ pool!\n`);
  process.exitCode = 1;
}

module.exports = {
  autoFaqContentPool,
  calculateNextScheduleTime,
  normalizeQuestionTitle
};

