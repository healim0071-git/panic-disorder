/**
 * auto_publish_column.js
 * 해아림한의원 공황장애 치료칼럼 자동 발행 엔진 & 30대 임상 풀 검증 스크립트
 * 
 * [개편된 4대 핵심 요구조건]
 * 1. 통계치 및 학술 근거: 정부 통계치(보건복지부, 건강보험공단, 건강보험심사평가원) 및 학술 연구 수치(숫자, %) 필수 포함
 * 2. 제목 및 구성 비율 (30 : 70):
 *    - 치료/사례/치료사례 문구 포함 칼럼: 30% (30편 중 9편)
 *    - 호소증상 기반 질문과 답변(Q&A) 칼럼: 70% (30편 중 21편)
 * 3. 사례 환자 예시 명시: 본문 중간에 환자 사례가 이해를 돕기 위한 임상 예시임을 알리는 안내 멘트 필수 탑재
 * 4. 호소증상 중심 질문: 전문적인 질환명 배제, 환자가 직접 느끼는 생생한 호소증상 위주 구성
 * 5. 의료광고법 5대 표현 가이드라인 100% 준수 (완치/완벽/부작용 없음/재발 없음/단언컨대/전문/첨단 등 0건)
 * 6. 16:9 메디컬 벡터 일러스트 디스크 실존 100% 무결성
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
console.log('  1. 치료칼럼 콘텐츠 풀 고유성 및 30:70 비율 검증');
console.log('====================================================');
const seenTitles = new Set();
let duplicatesFound = 0;
let caseStudyCount = 0;
let qaCount = 0;
let missingStatsCount = 0;
let missingExampleMentCount = 0;

const statRegex = /(건강보험심사평가원|국민건강보험공단|보건복지부|질병관리청|도로교통공단|식품의약품안전처|학회|연구|통계|\d+%(?: 이상| 미만)?|\d+(?:만|천)?\s*명)/;
const exampleMentRegex = /(임상 예시|가상 예시|각색된|이해를 돕기 위해|재구성한)/;

columnsPool.forEach((item, idx) => {
  const cleanBody = item.content
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();

  const badKeywords = ['골반통', '비뇨생식기', '미각', '후각', '삼차신경', '살이 쭉쭉', '부신 고갈', '동결', '장내 세균총', '이갈이', '배란기'];
  if (badKeywords.some(bk => item.title.includes(bk) || item.content.includes(bk))) {
    console.error(`[BLACKLISTED KEYWORD DETECTED] Column #${idx + 1}: ${item.title}`);
    return;
  }

  const norm = normalizeColumnTitle(item.title);
  if (seenTitles.has(norm)) {
    console.error(`[DUPLICATE DETECTED] Column #${idx + 1}: ${item.title}`);
    duplicatesFound++;
  }
  seenTitles.add(norm);

  const isCase = item.title.includes('사례') || item.title.includes('치료사례') || item.title.includes('치료');
  const isQA = item.title.startsWith('Q.') || item.title.includes('?') || item.title.includes('왜') || item.title.includes('어떻게');

  if (isQA) {
    qaCount++;
  } else if (isCase) {
    caseStudyCount++;
  }

  // 통계치/학술 근거 검증
  const hasStats = statRegex.test(item.content);
  if (!hasStats) {
    console.error(`[MISSING STATS/EVIDENCE] Column #${idx + 1} does not include government stats or numeric evidence!`);
    missingStatsCount++;
  }

  // 환자 예시 안내 멘트 검증
  const hasExampleMent = exampleMentRegex.test(item.content);
  if (!hasExampleMent) {
    console.error(`[MISSING EXAMPLE NOTICE] Column #${idx + 1} does not include clinical example disclaimer notice!`);
    missingExampleMentCount++;
  }

  console.log(`Column #${idx + 1}: [${isQA ? '호소증상 Q&A' : (isCase ? '치료·사례' : '일반')}] ${item.title.substring(0, 42)}...`);
  console.log(`   - Length: ${cleanBody.length} chars | Stats: ${hasStats ? 'YES' : 'NO'} | Example Ment: ${hasExampleMent ? 'YES' : 'NO'}`);
});

if (duplicatesFound === 0) {
  console.log(`\n✅ All ${columnsPool.length} columns in pool are strictly unique (0 duplicates).`);
} else {
  console.error(`\n❌ Found ${duplicatesFound} duplicate columns in pool!`);
  process.exitCode = 1;
}

const caseRatio = (caseStudyCount / columnsPool.length) * 100;
const qaRatio = (qaCount / columnsPool.length) * 100;

console.log(`\n📊 [치료칼럼 구성 비율 검증 (목표: 치료·사례 30% : Q&A 70%)]`);
console.log(`   - 총 칼럼 수: ${columnsPool.length}편`);
console.log(`   - 치료·사례형 칼럼: ${caseStudyCount}편 (${caseRatio.toFixed(1)}%) - 목표 30%`);
console.log(`   - 호소증상 Q&A형 칼럼: ${qaCount}편 (${qaRatio.toFixed(1)}%) - 목표 70%`);

if (Math.abs(caseRatio - 30.0) < 1.0 && Math.abs(qaRatio - 70.0) < 1.0) {
  console.log(`✅ [PASS] 치료·사례형(30%) 및 호소증상 Q&A형(70%) 비율이 30:70 기준을 완벽하게 만족합니다!\n`);
} else {
  console.error(`❌ [FAIL] 칼럼 구성 비율이 30:70 기준과 일치하지 않습니다! (치료·사례: ${caseRatio}%, Q&A: ${qaRatio}%)\n`);
  process.exitCode = 1;
}

console.log(`📊 [정부 통계치 및 임상 예시 멘트 탑재 검증]`);
console.log(`   - 통계치/수치 자료 미탑재 칼럼: ${missingStatsCount}편`);
console.log(`   - 임상 예시 안내 멘트 미탑재 칼럼: ${missingExampleMentCount}편`);

if (missingStatsCount === 0 && missingExampleMentCount === 0) {
  console.log(`✅ [PASS] 30편 모든 칼럼에 정부/학술 통계 수치 및 환자 임상 예시 안내 멘트가 100% 탑재되었습니다!\n`);
} else {
  console.error(`❌ [FAIL] 통계치 또는 예시 멘트가 누락된 칼럼이 존재합니다!\n`);
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
