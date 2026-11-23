/**
 * scripts/publish_hub_article.js
 * 해아림한의원 공황장애 클리닉 서버/CI 공식 자동발행 & 즉시발행 엔진
 *
 * PC·모바일·모든 방문자 및 검색엔진(SEO/AEO)에 100% 동일하게 반영되도록
 * 정적 웹 허브(data/healim_community_hub.json & static/data/healim_community_hub.json)와
 * SEO 아카이브(content/columns/_index.md & content/faq/_index.md)를 원자적으로 갱신합니다.
 *
 * 사용법:
 *   node scripts/publish_hub_article.js --type=scheduled
 *   node scripts/publish_hub_article.js --type=column --force
 *   node scripts/publish_hub_article.js --type=faq --force
 *   node scripts/publish_hub_article.js --type=both --force
 *   node scripts/publish_hub_article.js --type=column --force --custom-title="제목"
 *   node scripts/publish_hub_article.js --type=both --force --dry-run
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT_DIR = path.join(__dirname, '..');
const DATA_HUB_PATH = path.join(ROOT_DIR, 'data', 'healim_community_hub.json');
const STATIC_HUB_PATH = path.join(ROOT_DIR, 'static', 'data', 'healim_community_hub.json');
const COLUMNS_MD_PATH = path.join(ROOT_DIR, 'content', 'columns', '_index.md');
const FAQ_MD_PATH = path.join(ROOT_DIR, 'content', 'faq', '_index.md');
const STATIC_DIR = path.join(ROOT_DIR, 'static');

const KST_OFFSET_MS = 9 * 60 * 60 * 1000;

const FORBIDDEN_KEYWORDS = [
  '근원을 치료', '근원치료', '근원 치료', '근본치료', '근본 치료', '근본적', '근본',
  '완치된다', '완치될', '완치율', '완치 판정', '완치 기준', '완치',
  '전문병원', '전문', '특화', '첨단',
  '완벽해결', '완벽히', '완벽하게', '완벽한', '완벽',
  '부작용이 없다', '부작용 없이', '부작용 없는', '부작용은 전혀',
  '재발안된다', '재발 안', '재발하지 않', '재발 없는', '재발없이', '재발 없이',
  '우수하', '다른 병원', '단언컨대',
  '해아림한의원만의', '해아림만의', '한의원만의', '반드시'
];

function parseArgs(argv) {
  const args = { type: 'scheduled', force: false, dryRun: false, customTitle: '' };
  argv.forEach(arg => {
    if (arg.startsWith('--type=')) args.type = arg.slice(7).trim().toLowerCase();
    else if (arg === '--force') args.force = true;
    else if (arg === '--dry-run') args.dryRun = true;
    else if (arg.startsWith('--custom-title=')) args.customTitle = arg.slice(15).trim();
  });
  return args;
}

function getKstParts(ts) {
  const d = new Date(ts + KST_OFFSET_MS);
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds()
  };
}

function pad2(n) {
  return String(n).padStart(2, '0');
}

function formatKstDate(ts) {
  const p = getKstParts(ts);
  return `${p.year}.${pad2(p.month)}.${pad2(p.day)}`;
}

function formatKstDateTime(ts) {
  const p = getKstParts(ts);
  return `${p.year}.${pad2(p.month)}.${pad2(p.day)} ${pad2(p.hour)}:${pad2(p.minute)}`;
}

/**
 * 주 2~3회(2일 또는 3일 간격), 한국시간 오전 08:00~10:59 랜덤 스케줄 생성
 */
function calculateNextKstSchedule(baseTs, minOffsetDays) {
  const p = getKstParts(baseTs);
  const offsetDays = typeof minOffsetDays === 'number'
    ? minOffsetDays
    : (Math.random() < 0.5 ? 2 : 3);
  const hour = 8 + Math.floor(Math.random() * 3); // 8, 9, 10 KST
  const minute = Math.floor(Math.random() * 60);
  const second = Math.floor(Math.random() * 60);

  const utcMs = Date.UTC(p.year, p.month - 1, p.day + offsetDays, hour - 9, minute, second);
  return {
    nextScheduledTime: utcMs,
    nextScheduledDate: formatKstDate(utcMs),
    nextScheduledDisplay: formatKstDateTime(utcMs)
  };
}

function loadEngineSandbox(relPath) {
  const fullPath = path.join(ROOT_DIR, relPath);
  const code = fs.readFileSync(fullPath, 'utf8');
  const storage = new Map();
  const sandbox = {
    window: { location: { hostname: 'localhost' } },
    localStorage: {
      getItem: k => (storage.has(k) ? storage.get(k) : null),
      setItem: (k, v) => storage.set(k, String(v)),
      removeItem: k => storage.delete(k)
    },
    document: {
      readyState: 'complete',
      addEventListener: () => {},
      getElementById: () => null
    },
    console: { log: () => {}, warn: () => {}, error: () => {} },
    setInterval: () => {},
    setTimeout: fn => fn(),
    Date,
    Math,
    Set,
    Array,
    Object,
    String,
    Number,
    RegExp,
    JSON
  };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);
  return sandbox.window;
}

function validateComplianceAndImage(post, label) {
  const fullText = `${post.title || ''} ${post.summary || ''} ${post.content || ''}`;
  const violations = FORBIDDEN_KEYWORDS.filter(kw => fullText.includes(kw));
  if (violations.length > 0) {
    throw new Error(`[의료광고법 금지어 감지] ${label} ("${post.title}"): ${violations.join(', ')}`);
  }
  if (!post.image) {
    throw new Error(`[이미지 누락] ${label} ("${post.title}")`);
  }
  const diskPath = path.join(STATIC_DIR, post.image.replace(/^\//, ''));
  if (!fs.existsSync(diskPath)) {
    throw new Error(`[이미지 파일 없음] ${label}: ${post.image}`);
  }
}

function escapeHtml(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildNextColumnPost(hub, colWin, nowTs, customTitle) {
  const normalize = colWin.normalizeColumnTitle || (t => String(t || '').trim().toLowerCase());
  const sanitize = colWin.sanitizeColumnMedicalCompliance || (t => t);

  const existingTitles = new Set();
  const existingPoolIds = new Set();
  const deletedSet = new Set((hub.deleted_ids || []).map(String));

  (hub.columns || []).forEach(c => {
    if (c && c.title) existingTitles.add(normalize(c.title));
    if (c && c.poolId) existingPoolIds.add(String(c.poolId));
  });

  const dateStr = formatKstDate(nowTs);
  let article = null;
  let nextPoolIndex = (hub.auto_schedule && hub.auto_schedule.columns && typeof hub.auto_schedule.columns.poolIndex === 'number')
    ? hub.auto_schedule.columns.poolIndex
    : 0;

  if (customTitle) {
    const generated = colWin.generateCustomColumnContentByTitle(customTitle);
    if (!generated) throw new Error('맞춤 제목 칼럼 생성에 실패했습니다.');
    article = {
      idPrefix: `col-custom-title-${nowTs}`,
      title: generated.title,
      summary: generated.summary,
      content: generated.content,
      image: generated.image
    };
  } else {
    const pool = colWin.columnsPool || [];
    let selectedIdx = -1;
    for (let i = 0; i < pool.length; i++) {
      const idx = (nextPoolIndex + i) % pool.length;
      const cand = pool[idx];
      const norm = normalize(cand.title);
      const pId = String(cand.idPrefix || cand.id || '');
      if (!existingTitles.has(norm) && !existingPoolIds.has(pId) && !deletedSet.has(pId)) {
        selectedIdx = idx;
        article = cand;
        nextPoolIndex = (idx + 1) % pool.length;
        break;
      }
    }

    if (!article && typeof colWin.generateContinuousNewColumn === 'function') {
      const dynState = {
        dynamicIndex: (hub.auto_schedule && hub.auto_schedule.columns && hub.auto_schedule.columns.dynamicIndex) || 0
      };
      article = colWin.generateContinuousNewColumn(existingTitles, deletedSet, dynState);
      if (hub.auto_schedule && hub.auto_schedule.columns) {
        hub.auto_schedule.columns.dynamicIndex = dynState.dynamicIndex;
      }
    }
  }

  if (!article) {
    throw new Error('발행 가능한 미중복 치료칼럼을 찾을 수 없습니다.');
  }

  const cleanTitle = sanitize(article.title);
  const cleanSummary = sanitize(article.summary || cleanTitle);
  const cleanContent = sanitize(
    String(article.content || '')
      .replace(/\\r\\n/g, '\n')
      .replace(/\\n/g, '\n')
      .replace(/\\r/g, '\n')
  );

  if (existingTitles.has(normalize(cleanTitle))) {
    throw new Error(`중복 치료칼럼 감지되어 발행을 중단합니다: ${cleanTitle}`);
  }

  const newPost = {
    id: `col-auto-${nowTs}`,
    poolId: article.idPrefix || `col-pool-${nowTs}`,
    category: '칼럼',
    author: '해아림한의원',
    date: dateStr,
    views: Math.floor(Math.random() * 90) + 165,
    image: article.image || '/images/columns/column_30_cure_homeostasis.svg',
    title: cleanTitle,
    summary: cleanSummary,
    content: cleanContent,
    isAutoPublished: true,
    isCustom: true,
    createdAt: nowTs,
    updatedAt: nowTs
  };

  validateComplianceAndImage(newPost, '치료칼럼');
  return { post: newPost, nextPoolIndex };
}

function buildNextFaqPost(hub, faqWin, nowTs) {
  const normalize = faqWin.normalizeQuestionTitle || (t => String(t || '').trim().toLowerCase());
  const sanitize = faqWin.sanitizeFaqMedicalCompliance || (t => t);
  const enforceLen = faqWin.enforceFaqTargetLength || (t => t);

  const existingTitles = new Set();
  const existingPoolIds = new Set();
  const deletedSet = new Set((hub.deleted_ids || []).map(String));

  (hub.faq || []).forEach(f => {
    if (f && f.title) existingTitles.add(normalize(f.title));
    if (f && f.poolId) existingPoolIds.add(String(f.poolId));
  });

  const pool = faqWin.autoFaqContentPool || [];
  let nextPoolIndex = (hub.auto_schedule && hub.auto_schedule.faq && typeof hub.auto_schedule.faq.poolIndex === 'number')
    ? hub.auto_schedule.faq.poolIndex
    : 0;
  const dynState = {
    dynamicFaqIndex: (hub.auto_schedule && hub.auto_schedule.faq && typeof hub.auto_schedule.faq.dynamicFaqIndex === 'number')
      ? hub.auto_schedule.faq.dynamicFaqIndex
      : 4
  };

  let article = null;
  for (let i = 0; i < pool.length; i++) {
    const idx = (nextPoolIndex + i) % pool.length;
    const cand = pool[idx];
    const norm = normalize(cand.title);
    const pId = String(cand.id || '');
    if (!existingTitles.has(norm) && !existingPoolIds.has(pId) && !deletedSet.has(pId)) {
      article = cand;
      nextPoolIndex = (idx + 1) % pool.length;
      break;
    }
  }

  if (!article && typeof faqWin.generateContinuousNewFaq === 'function') {
    const skipIds = new Set([...deletedSet, ...existingPoolIds]);
    article = faqWin.generateContinuousNewFaq(existingTitles, skipIds, dynState);
  }

  if (!article) {
    throw new Error('발행 가능한 미중복 FAQ를 찾을 수 없습니다.');
  }

  const dateStr = formatKstDate(nowTs);
  const cleanTitle = sanitize(article.title);
  const cleanSummary = sanitize(article.summary || cleanTitle);
  const cleanContent = enforceLen(sanitize(article.content));

  if (cleanContent.length < 900 || cleanContent.length > 1000) {
    throw new Error(`FAQ 글자 수 규격(900~1000자) 위반: ${cleanContent.length}자 ("${cleanTitle}")`);
  }

  if (existingTitles.has(normalize(cleanTitle))) {
    throw new Error(`중복 FAQ 감지되어 발행을 중단합니다: ${cleanTitle}`);
  }

  const newPost = {
    id: `faq-auto-${nowTs}`,
    poolId: article.id || `faq-pool-${nowTs}`,
    category: article.category || '공황장애FAQ',
    author: '해아림한의원',
    date: dateStr,
    views: Math.floor(Math.random() * 80) + 145,
    title: cleanTitle,
    summary: cleanSummary,
    image: article.image || '/images/faq/faq_1_exam.svg',
    content: cleanContent,
    isAutoPublished: true,
    isCustom: true,
    createdAt: nowTs,
    updatedAt: nowTs
  };

  validateComplianceAndImage(newPost, 'FAQ');
  return { post: newPost, nextPoolIndex, nextDynamicFaqIndex: dynState.dynamicFaqIndex };
}

function updateColumnsSeoArchive(post, totalCount) {
  if (!fs.existsSync(COLUMNS_MD_PATH)) return;
  let md = fs.readFileSync(COLUMNS_MD_PATH, 'utf8');

  // Update count mentions (e.g. 45편 -> 46편)
  md = md.replace(/(임상 사례 분석\s*)\d+(편)/g, `$1${totalCount}$2`);
  md = md.replace(/(치료사례 칼럼\s*)\d+(편)/g, `$1${totalCount}$2`);
  md = md.replace(/(치료칼럼\s*)\d+(편 전체 목록)/g, `$1${totalCount}$2`);

  // Insert SEO article at top of sr-only archive if not already present
  if (!md.includes(post.title)) {
    const marker = '<h2>공황장애 치료 칼럼 및 임상 사례 분석 아카이브</h2>';
    const snippet = [
      '',
      '        <article itemscope itemtype="https://schema.org/BlogPosting">',
      `        <h3 itemprop="headline">${escapeHtml(post.title)}</h3>`,
      `        <p itemprop="description">${escapeHtml(post.summary || post.title)}</p>`,
      `        <span itemprop="author">${escapeHtml(post.author || '해아림한의원')}</span>`,
      `        <time itemprop="datePublished">${escapeHtml(post.date)}</time>`,
      '        </article>',
      ''
    ].join('\n');
    if (md.includes(marker)) {
      md = md.replace(marker, `${marker}\n${snippet}`);
    }
  }
  fs.writeFileSync(COLUMNS_MD_PATH, md, 'utf8');
}

function updateFaqSeoArchive(post, totalCount) {
  if (!fs.existsSync(FAQ_MD_PATH)) return;
  let md = fs.readFileSync(FAQ_MD_PATH, 'utf8');

  // Update count mentions (e.g. 36문답 -> 37문답)
  md = md.replace(/(자주 묻는 질문\(FAQ\)\s*)\d+(문답)/g, `$1${totalCount}$2`);
  md = md.replace(/(공황장애 자주 묻는 질문\s*)\d+(문답 전문)/g, `$1${totalCount}$2`);

  if (!md.includes(post.title)) {
    const markerRegex = /<h2>공황장애 자주 묻는 질문 \d+문답 전문<\/h2>/;
    const match = md.match(markerRegex);
    const snippet = [
      '',
      '        <article itemscope itemtype="https://schema.org/Question">',
      `        <h3 itemprop="name">${escapeHtml(post.title)}</h3>`,
      '        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">',
      `        <p itemprop="text"><strong>[핵심 답변]</strong> ${escapeHtml(post.summary || post.title)}</p>`,
      '        </div>',
      '        </article>',
      ''
    ].join('\n');
    if (match) {
      md = md.replace(match[0], `${match[0]}\n${snippet}`);
    }
  }
  fs.writeFileSync(FAQ_MD_PATH, md, 'utf8');
}

function ensureScheduleInitialized(hub, nowTs) {
  if (!hub.auto_schedule || typeof hub.auto_schedule !== 'object') {
    hub.auto_schedule = {};
  }
  const latestCol = (hub.columns || [])[0];
  const latestFaq = (hub.faq || [])[0];

  if (!hub.auto_schedule.columns) {
    hub.auto_schedule.columns = {
      cadence: '주 2~3회 (오전 08:00~11:00 KST)',
      lastPublishedDate: latestCol ? latestCol.date : '',
      lastPublishedTime: latestCol ? (latestCol.createdAt || 0) : 0,
      poolIndex: 0,
      dynamicIndex: 0,
      ...calculateNextKstSchedule(nowTs, 0)
    };
  }
  if (!hub.auto_schedule.faq) {
    hub.auto_schedule.faq = {
      cadence: '주 2~3회 (오전 08:00~11:00 KST)',
      lastPublishedDate: latestFaq ? latestFaq.date : '',
      lastPublishedTime: latestFaq ? (latestFaq.createdAt || 0) : 0,
      poolIndex: 22,
      dynamicFaqIndex: 4,
      ...calculateNextKstSchedule(nowTs, 0)
    };
  }
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const nowTs = Date.now();
  const todayKst = formatKstDate(nowTs);

  console.log('════════════════════════════════════════════════════════════════');
  console.log(`  해아림 공황장애 서버 자동/즉시 발행 엔진 (KST: ${formatKstDateTime(nowTs)})`);
  console.log(`  모드: --type=${args.type} | force=${args.force} | dryRun=${args.dryRun}`);
  console.log('════════════════════════════════════════════════════════════════');

  const hub = JSON.parse(fs.readFileSync(DATA_HUB_PATH, 'utf8'));
  ensureScheduleInitialized(hub, nowTs);

  const wantColumn = args.type === 'column' || args.type === 'columns' || args.type === 'both' || args.type === 'scheduled';
  const wantFaq = args.type === 'faq' || args.type === 'both' || args.type === 'scheduled';

  let publishedItems = [];

  if (wantColumn) {
    const colSched = hub.auto_schedule.columns;
    const alreadyToday = !args.force && (
      colSched.lastPublishedDate === todayKst ||
      (hub.columns || []).some(c => c && c.date === todayKst && c.isAutoPublished)
    );
    const isDue = args.force || (!alreadyToday && (!colSched.nextScheduledDate || todayKst >= colSched.nextScheduledDate));

    if (isDue) {
      const colWin = loadEngineSandbox('static/js/auto_column_engine.js');
      const { post, nextPoolIndex } = buildNextColumnPost(hub, colWin, nowTs, args.customTitle);
      hub.columns.unshift(post);
      const nextSched = calculateNextKstSchedule(nowTs);
      hub.auto_schedule.columns = {
        ...colSched,
        lastPublishedDate: todayKst,
        lastPublishedTime: nowTs,
        poolIndex: nextPoolIndex,
        ...nextSched
      };
      publishedItems.push({ board: 'columns', post, total: hub.columns.length, next: nextSched.nextScheduledDisplay });
      console.log(`✅ [치료칼럼 발행 준비] #${hub.columns.length} "${post.title}" (${post.date}) -> 다음 예정: ${nextSched.nextScheduledDisplay} KST`);
    } else {
      console.log(`⏭️ [치료칼럼 스킵] 오늘(${todayKst})은 예정일이 아닙니다. (다음 예정: ${colSched.nextScheduledDisplay} KST)`);
    }
  }

  if (wantFaq) {
    const faqSched = hub.auto_schedule.faq;
    const alreadyToday = !args.force && (
      faqSched.lastPublishedDate === todayKst ||
      (hub.faq || []).some(f => f && f.date === todayKst && f.isAutoPublished)
    );
    const isDue = args.force || (!alreadyToday && (!faqSched.nextScheduledDate || todayKst >= faqSched.nextScheduledDate));

    if (isDue) {
      const faqWin = loadEngineSandbox('static/js/auto_faq_engine.js');
      const { post, nextPoolIndex, nextDynamicFaqIndex } = buildNextFaqPost(hub, faqWin, nowTs + 1);
      hub.faq.unshift(post);
      const nextSched = calculateNextKstSchedule(nowTs);
      hub.auto_schedule.faq = {
        ...faqSched,
        lastPublishedDate: todayKst,
        lastPublishedTime: nowTs,
        poolIndex: nextPoolIndex,
        dynamicFaqIndex: nextDynamicFaqIndex,
        ...nextSched
      };
      publishedItems.push({ board: 'faq', post, total: hub.faq.length, next: nextSched.nextScheduledDisplay });
      console.log(`✅ [FAQ 발행 준비] #${hub.faq.length} "${post.title}" (${post.date}, ${post.content.length}자) -> 다음 예정: ${nextSched.nextScheduledDisplay} KST`);
    } else {
      console.log(`⏭️ [FAQ 스킵] 오늘(${todayKst})은 예정일이 아닙니다. (다음 예정: ${faqSched.nextScheduledDisplay} KST)`);
    }
  }

  if (publishedItems.length === 0) {
    console.log('\nℹ️ 오늘 발행할 대상이 없어 파일 변경 없이 종료합니다.');
    return;
  }

  hub.updated_at = Date.now();
  hub.version = Math.max(Number(hub.version || 21), 21);

  if (args.dryRun) {
    console.log('\n🧪 [DRY-RUN] 실제 파일 저장을 건너뛰었습니다.');
    return;
  }

  const serialized = JSON.stringify(hub, null, 2);
  fs.writeFileSync(DATA_HUB_PATH, serialized, 'utf8');
  fs.writeFileSync(STATIC_HUB_PATH, serialized, 'utf8');

  publishedItems.forEach(item => {
    if (item.board === 'columns') updateColumnsSeoArchive(item.post, item.total);
    if (item.board === 'faq') updateFaqSeoArchive(item.post, item.total);
  });

  console.log(`\n🎉 총 ${publishedItems.length}편 공식 정적 허브 & SEO 아카이브 반영 완료!`);
  console.log(`   - 치료칼럼 총 ${hub.columns.length}편 / FAQ 총 ${hub.faq.length}편`);
}

if (require.main === module) {
  main();
}

module.exports = { buildNextColumnPost, buildNextFaqPost, calculateNextKstSchedule };
