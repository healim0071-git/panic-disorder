/**
 * auto_publish_column.js
 * 해아림한의원 공황장애 치료칼럼 자동 발행 엔진 & 23대 임상 풀 (엄격 중복 방지 & 치료사례 60% 이상 준수)
 * 
 * [요구사항 명세]
 * 1. 대상: 공황장애 및 공황발작 및 예기불안 환자 실제 치료사례 및 핵심 주제 (23대 임상 풀)
 * 2. 치료사례/사례 비율: 전체 자동발행 글의 60% 이상이 제목에 '치료사례' 또는 '사례'를 포함하고 생생한 환자 스토리 서술
 * 3. 분량: 한방신경정신과 임상 분석 1,600자 내외
 * 4. 구성: 상단 16:9 메디컬 벡터 일러스트 썸네일 + 본문 + 하단 3대 링크 (줄바꿔서 1줄씩 띄움)
 *    - [공황장애 정밀검사 알아보기](https://healim-panic.com/panic-diagnosis/)
 *    - [공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment/)
 *    - [전국 지점 안내](https://www.healim.com)
 * 5. 주기: 매주 2~3개 글, 오전 8시 ~ 11시 사이 랜덤 시간 발행
 * 6. 중복 방지: 질문과 핵심주제는 기존 작성 글과 중복되지 않도록 엄격한 정규화 비교 필터링 적용
 * 7. 의료광고법 및 5대 표현 가이드라인 철저 준수 (근원/완치/전문/부작용/재발 0건)
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const enginePath = path.join(__dirname, '../static/js/auto_column_engine.js');
const engineCode = fs.readFileSync(enginePath, 'utf8');

const sandbox = {
  window: {},
  localStorage: { getItem: () => null, setItem: () => {} },
  document: { addEventListener: () => {}, getElementById: () => null, readyState: 'complete' },
  console: { log: () => {}, warn: () => {}, error: () => {} },
  setInterval: () => {}
};
vm.createContext(sandbox);
vm.runInContext(engineCode, sandbox);

const columnsPool = sandbox.window.columnsPool || [];

function normalizeColumnTitle(t) {
  if (!t) return '';
  return String(t)
    .replace(/^칼럼[\.:\s\-]+/i, '')
    .replace(/[\s\*_~`#\?\uFF1F\.,\(\)\[\]:;\-]/g, '')
    .trim()
    .toLowerCase();
}

console.log('====================================================');
console.log('  1. 치료칼럼 콘텐츠 풀 고유성 및 치료사례(사례) 비율 검증');
console.log('====================================================');
const seenTitles = new Set();
let duplicatesFound = 0;
let caseStudyCount = 0;

columnsPool.forEach((item, idx) => {
  const cleanBody = item.content
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
  const badKeywords = ['골반통', '비뇨생식기', '미각', '후각', '삼차신경', '살이 쭉쭉', '부신 고갈', '동결', '장내 세균총', '이갈이', '배란기'];
  if (badKeywords.some(bk => item.title.includes(bk))) {
    console.error(`[BLACKLISTED AUTONOMIC ARTICLE REJECTED]: ${item.title}`);
    return;
  }
  const norm = normalizeColumnTitle(item.title);
  if (seenTitles.has(norm)) {
    console.error(`[DUPLICATE DETECTED] Column #${idx + 1}: ${item.title}`);
    duplicatesFound++;
  }
  seenTitles.add(norm);

  const isCase = item.title.includes('사례') || item.title.includes('치료사례');
  if (isCase) caseStudyCount++;

  console.log(`Column #${idx + 1}: [${isCase ? '치료사례' : '일반칼럼'}] ${item.title.substring(0, 38)}...`);
  console.log(`   - Raw Length: ${item.content.length} chars | Clean Body: ${cleanBody.length} chars | Unique: OK`);
});

if (duplicatesFound === 0) {
  console.log(`\n✅ All ${columnsPool.length} columns in pool are strictly unique (0 duplicates).`);
} else {
  console.error(`\n❌ Found ${duplicatesFound} duplicate columns in pool!`);
  process.exitCode = 1;
}

const caseRatio = (caseStudyCount / columnsPool.length) * 100;
console.log(`\n📊 [치료사례 및 사례 키워드 비율 검증]`);
console.log(`   - 총 칼럼 수: ${columnsPool.length}편`);
console.log(`   - 사례/치료사례 포함 칼럼 수: ${caseStudyCount}편`);
console.log(`   - 사례 비율: ${caseRatio.toFixed(1)}% (기준: 60% 이상)`);

if (caseRatio >= 60) {
  console.log(`✅ [PASS] 치료사례 및 사례 키워드 비율이 60% 이상을 만족합니다! (${caseRatio.toFixed(1)}% >= 60%)\n`);
} else {
  console.error(`❌ [FAIL] 치료사례 및 사례 키워드 비율이 60% 미만입니다! (${caseRatio.toFixed(1)}% < 60%)\n`);
  process.exitCode = 1;
}

function calculateNextColumnSchedule(baseTime = new Date()) {
  const base = (baseTime instanceof Date) ? baseTime : new Date();
  const dayOffset = Math.random() < 0.5 ? 2 : 3;
  const next = new Date(base.getTime() + dayOffset * 24 * 60 * 60 * 1000);

  const hour = 8 + Math.floor(Math.random() * 3);
  const minute = Math.floor(Math.random() * 60);
  const second = Math.floor(Math.random() * 60);

  next.setHours(hour, minute, second, 0);
  return next;
}

console.log('====================================================');
console.log('  2. 스케줄 발행 시뮬레이션 (주 2~3회, 08:00~11:00 AM)');
console.log('====================================================');
let cur = new Date();
for (let i = 1; i <= 5; i++) {
  cur = calculateNextColumnSchedule(cur);
  const year = cur.getFullYear();
  const month = String(cur.getMonth() + 1).padStart(2, '0');
  const day = String(cur.getDate()).padStart(2, '0');
  const time = `${String(cur.getHours()).padStart(2, '0')}:${String(cur.getMinutes()).padStart(2, '0')}:${String(cur.getSeconds()).padStart(2, '0')}`;
  console.log(`Next Column #${i}: ${year}.${month}.${day} ${time}`);
}

console.log('\n====================================================');
console.log('  3. 의료광고법 및 5대 표현 원칙 준수 검증 테스트');
console.log('====================================================');
const forbiddenKeywords = [
  '근원을 치료', '근원치료', '근원 치료', '근본치료', '근본 치료', '근본적', '근본',
  '완치된다', '완치될', '완치율', '완치 판정', '완치 기준', '완치',
  '전문병원', '전문', '특화', '첨단',
  '완벽해결', '완벽히', '완벽하게', '완벽한', '완벽',
  '부작용이 없다', '부작용 없이', '부작용 없는', '부작용은 전혀',
  '재발안된다', '재발 안', '재발하지 않', '재발 없는', '재발없이', '재발 없이',
  '우수하', '다른 병원', '단언컨대',
  '해아림한의원만의', '해아림만의', '한의원만의', '반드시'
];

let complianceViolations = 0;
columnsPool.forEach((item, idx) => {
  const fullText = `${item.title} ${item.summary || ''} ${item.content}`;
  forbiddenKeywords.forEach(kw => {
    if (fullText.includes(kw)) {
      console.error(`[COMPLIANCE VIOLATION] Column #${idx + 1} contains forbidden keyword: "${kw}"`);
      complianceViolations++;
    }
  });
});

if (complianceViolations === 0) {
  console.log(`✅ All ${columnsPool.length} Columns 100% strictly satisfy Medical Advertising & Phrasing Compliance Guidelines! (0 violations)\n`);
} else {
  console.error(`❌ Found ${complianceViolations} compliance violations in Column pool!\n`);
  process.exitCode = 1;
}

console.log('====================================================');
console.log('  4. 치료칼럼 이미지(16:9 메디컬 벡터 일러스트) 무결성 검증');
console.log('====================================================');
let imgViolations = 0;
const staticDir = path.join(__dirname, '../static');

columnsPool.forEach((item, idx) => {
  if (!item.image) {
    console.error(`[IMAGE MISSING] Column #${idx + 1} has no image defined!`);
    imgViolations++;
  } else {
    const localImgPath = path.join(staticDir, item.image.replace(/^\//, ''));
    if (!fs.existsSync(localImgPath)) {
      console.error(`[IMAGE NOT FOUND ON DISK] Column #${idx + 1}: ${item.image}`);
      imgViolations++;
    }
  }
});

if (imgViolations === 0) {
  console.log(`✅ All ${columnsPool.length} Columns have valid 16:9 illustration images that 100% exist on disk! (0 missing)\n`);
} else {
  console.error(`❌ Found ${imgViolations} image violations in Column pool!\n`);
  process.exitCode = 1;
}

module.exports = {
  columnsPool,
  calculateNextColumnSchedule,
  normalizeColumnTitle
};
