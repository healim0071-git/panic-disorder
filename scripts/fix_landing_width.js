const fs = require('fs');
const path = require('path');

const slugs = [
  "acute-panic-attack",
  "chest-oppression-dyspnea",
  "chest-tightness-symptom",
  "claustrophobia-fear",
  "core-panic-signs",
  "dyspnea-breathing-difficulty",
  "early-panic-signs",
  "enclosed-spaces-phobia",
  "heart-palpitations-symptom",
  "overcome-panic-guide",
  "panic-causes-deep",
  "panic-core",
  "panic-disorder-cure-care",
  "panic-medication-tapering",
  "panic-self-checklist",
  "panicsymptom",
  "stress-induced-panic",
  "when-chest-feels-tight"
];

const newStyle = `<style>
    :root {
      --primary-teal: #1c6e78;
      --dark-teal: #0d3a42;
      --light-teal: #edf7f8;
      --border-teal: #badfe3;
      --healim-container-max: 1280px; /* panic-clinic GNB 바(max-w-7xl)와 동일한 최적 폭 */
    }
    * {
      box-sizing: border-box;
    }
    body {
      font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
      color: #333333;
      background-color: #f8fafb;
      line-height: 1.65;
      overflow-x: hidden;
      word-break: keep-all;
      overflow-wrap: break-word;
      margin: 0;
      padding: 0;
    }

    /* 1. 가로폭 제한 및 중앙 정렬 (panic-clinic 및 상단 GNB 바 정렬 완벽 일치) */
    .landing-hero-container,
    .landing-main-container,
    .max-w-7xl,
    .max-w-5xl,
    main {
      width: 100% !important;
      max-width: var(--healim-container-max) !important;
      margin-left: auto !important;
      margin-right: auto !important;
      box-sizing: border-box !important;
    }

    /* Hero 섹션 배경 및 내부 컨테이너 폭 제한 */
    section.bg-gradient-to-b {
      width: 100%;
      background: linear-gradient(180deg, rgba(237, 247, 248, 0.9) 0%, rgba(243, 249, 250, 0.5) 60%, #f8fafb 100%);
      border-bottom: 1px solid #e0eaec;
    }
    section.bg-gradient-to-b > div,
    .landing-hero-container {
      width: 100% !important;
      max-width: var(--healim-container-max) !important;
      margin-left: auto !important;
      margin-right: auto !important;
      padding-left: 1.25rem !important;
      padding-right: 1.25rem !important;
      box-sizing: border-box !important;
    }

    /* 메인 본문 컨테이너 */
    main,
    .landing-main-container {
      padding-left: 1.25rem !important;
      padding-right: 1.25rem !important;
      padding-top: 2.5rem !important;
      padding-bottom: 3.5rem !important;
    }

    /* 본문 주요 아티클 카드 스타일 */
    main section.bg-white {
      width: 100% !important;
      box-sizing: border-box !important;
      border: 1px solid #e0eaec !important;
      border-radius: 1.25rem !important;
      box-shadow: 0 4px 20px -2px rgba(13, 58, 66, 0.05) !important;
      transition: all 0.25s ease !important;
    }
    main section.bg-white:hover {
      box-shadow: 0 10px 25px -3px rgba(13, 58, 66, 0.08) !important;
      border-color: #badfe3 !important;
    }

    /* 2. 독립적인 반응형 그리드 시스템 (Tailwind 미디어 쿼리 누락 대비 완전 보장) */
    .grid {
      display: grid !important;
    }
    .grid-cols-1,
    [class*="grid-cols-1"] {
      grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
    }
    .gap-4 { gap: 1rem !important; }
    .gap-5 { gap: 1.25rem !important; }
    .gap-6 { gap: 1.5rem !important; }
    .gap-8 { gap: 2rem !important; }

    @media (min-width: 640px) {
      [class*="sm:grid-cols-2"] {
        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      }
      .sm\\:px-6 {
        padding-left: 1.5rem !important;
        padding-right: 1.5rem !important;
      }
      section.bg-gradient-to-b > div,
      .landing-hero-container,
      main,
      .landing-main-container {
        padding-left: 1.5rem !important;
        padding-right: 1.5rem !important;
      }
    }

    @media (min-width: 768px) {
      [class*="md:grid-cols-2"] {
        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      }
      [class*="md:grid-cols-3"] {
        grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
      }
      main section.bg-white {
        padding: 2.25rem 2.5rem !important;
      }
    }

    @media (min-width: 1024px) {
      [class*="lg:grid-cols-3"] {
        grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
      }
      .lg\\:px-8 {
        padding-left: 2rem !important;
        padding-right: 2rem !important;
      }
      section.bg-gradient-to-b > div,
      .landing-hero-container,
      main,
      .landing-main-container {
        padding-left: 2rem !important;
        padding-right: 2rem !important;
      }
    }

    /* 3. 모바일 최적화 (스마트폰 360px ~ 640px) */
    @media (max-width: 640px) {
      h1 {
        font-size: 1.65rem !important;
        line-height: 1.35 !important;
        letter-spacing: -0.02em !important;
      }
      .healim-hero-badge {
        font-size: 0.75rem !important;
        padding: 0.25rem 0.65rem !important;
      }
      main,
      .landing-main-container {
        padding-top: 1.5rem !important;
        padding-bottom: 2rem !important;
        padding-left: 1rem !important;
        padding-right: 1rem !important;
      }
      section.bg-gradient-to-b > div,
      .landing-hero-container {
        padding-left: 1rem !important;
        padding-right: 1rem !important;
        padding-top: 2rem !important;
        padding-bottom: 2.25rem !important;
      }
      main section.bg-white {
        padding: 1.25rem 1rem !important;
        border-radius: 1rem !important;
        margin-bottom: 1.25rem !important;
      }
      .healim-main-btn {
        width: 100% !important;
        max-width: 100% !important;
        padding: 0.95rem 1.25rem !important;
        font-size: 0.98rem !important;
        box-sizing: border-box !important;
      }
      [class*="grid-cols-"] {
        grid-template-columns: 1fr !important;
      }
    }

    /* 4. 공통 UI 컴포넌트 */
    .healim-hero-badge {
      background: rgba(28, 110, 120, 0.08);
      color: #1c6e78;
      border: 1px solid rgba(28, 110, 120, 0.2);
    }
    .healim-main-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      background: linear-gradient(135deg, #1c6e78 0%, #0d3a42 100%);
      color: #ffffff !important;
      font-size: 1.05rem;
      font-weight: 700;
      padding: 1.1rem 2.2rem;
      border-radius: 9999px;
      box-shadow: 0 10px 25px -5px rgba(13, 58, 66, 0.35);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      text-decoration: none;
    }
    .healim-main-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 15px 30px -5px rgba(13, 58, 66, 0.45);
      background: linear-gradient(135deg, #228490 0%, #114c57 100%);
    }
    details.faq-item {
      background: #ffffff;
      border: 1px solid #e0eaec;
      border-radius: 0.875rem;
      padding: 1rem 1.25rem;
      margin-bottom: 0.875rem;
      transition: all 0.2s ease;
    }
    details.faq-item[open] {
      border-color: #badfe3;
      background: #fcfefe;
      box-shadow: 0 4px 12px rgba(28, 110, 120, 0.06);
    }
    details.faq-item summary {
      cursor: pointer;
      font-weight: 700;
      color: #0d3a42;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    details.faq-item summary::-webkit-details-marker {
      display: none;
    }
    .faq-answer {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid #edf2f4;
    }
  </style>`;

let count = 0;

for (const slug of slugs) {
  const file1 = path.join(__dirname, '..', 'static', `${slug}.html`);
  const dirPath = path.join(__dirname, '..', 'static', slug);
  const file2 = path.join(dirPath, 'index.html');

  if (!fs.existsSync(file1)) {
    console.error(`File not found: ${file1}`);
    continue;
  }

  let html = fs.readFileSync(file1, 'utf8');

  // Replace <style>...</style>
  html = html.replace(/<style>[\s\S]*?<\/style>/i, newStyle);

  // Update Hero section container class
  html = html.replace(
    /<div class="max-w-5xl mx-auto px-4 sm:px-6 text-center">/g,
    '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center landing-hero-container">'
  );

  // Update Main container class
  html = html.replace(
    /<main class="max-w-5xl mx-auto px-4 sm:px-6 py-12">/g,
    '<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 landing-main-container">'
  );

  fs.writeFileSync(file1, html, 'utf8');

  if (fs.existsSync(dirPath)) {
    fs.writeFileSync(file2, html, 'utf8');
  }

  count++;
  console.log(`[${count}/${slugs.length}] Updated ${slug}.html and ${slug}/index.html`);
}

console.log(`\nSuccessfully updated all ${count} landing pages!`);
