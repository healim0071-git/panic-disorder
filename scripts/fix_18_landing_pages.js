const fs = require('fs');
const path = require('path');

const slugs = [
  "panicsymptom",
  "chest-tightness-symptom",
  "heart-palpitations-symptom",
  "claustrophobia-fear",
  "enclosed-spaces-phobia",
  "panic-causes-deep",
  "stress-induced-panic",
  "panic-core",
  "when-chest-feels-tight",
  "chest-oppression-dyspnea",
  "panic-medication-tapering",
  "early-panic-signs",
  "panic-self-checklist",
  "overcome-panic-guide",
  "core-panic-signs",
  "acute-panic-attack",
  "dyspnea-breathing-difficulty",
  "panic-disorder-cure-care"
];

const newStyle = `  <style>
    :root {
      --primary-teal: #1c6e78;
      --dark-teal: #0d3a42;
      --light-teal: #edf7f8;
      --border-teal: #badfe3;
      --healim-container-max: 1280px;
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

    /* 1. Header & GNB Safe Visibility */
    #nav-toggle { display: none !important; }
    #hide-button { display: none !important; }
    #nav-toggle:checked ~ label #show-button { display: none !important; }
    #nav-toggle:checked ~ label #hide-button { display: block !important; }
    .hidden { display: none !important; }
    .healim-top-bar {
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      width: 100% !important;
      max-width: var(--healim-container-max) !important;
      margin: 0 auto !important;
    }
    .healim-auth-links {
      display: flex !important;
      align-items: center !important;
      gap: 0.5rem !important;
    }
    @media (min-width: 1024px) {
      .healim-mobile-nav-btn,
      .lg\\:hidden,
      [class*="lg:hidden"] {
        display: none !important;
      }
      #nav-menu {
        display: flex !important;
      }
    }
    @media (max-width: 1023px) {
      .healim-mobile-nav-btn {
        display: flex !important;
      }
      #nav-menu:not(.mobile-open) {
        display: none !important;
      }
    }

    /* 2. 가로폭 제한 및 중앙 정렬 (panic-clinic 및 상단 GNB 바 정렬 완벽 일치) */
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

    /* 3. 치료후기 사진 크기 및 블러 효과 완벽 보장 */
    .bottom-review-blurred-img {
      width: 100% !important;
      height: 100% !important;
      max-height: 11rem !important;
      object-fit: cover !important;
      display: block !important;
      filter: blur(4px);
      -webkit-filter: blur(4px);
      transition: filter 0.3s ease;
    }
    .bottom-review-blurred-img:hover {
      filter: blur(2px);
      -webkit-filter: blur(2px);
    }
    div.h-44,
    [class*="h-44"] {
      height: 11rem !important;
      max-height: 11rem !important;
      position: relative !important;
      overflow: hidden !important;
    }
    .relative { position: relative !important; }
    .overflow-hidden { overflow: hidden !important; }
    .rounded-xl { border-radius: 0.75rem !important; }

    /* 4. 푸터 16개 지점 안내 및 전화 아이콘 깨짐 방지 */
    .branch-card {
      background-color: #09292e !important;
      color: #ffffff !important;
      border: 1px solid rgba(28, 110, 120, 0.35) !important;
      border-radius: 0.5rem !important;
      box-sizing: border-box !important;
    }
    .branch-card h3 {
      color: #ffffff !important;
      font-weight: 700 !important;
    }
    .branch-tel-btn {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 0.25rem !important;
      background-color: #133e46 !important;
      color: #f4d07e !important;
      border: 1px solid rgba(28, 110, 120, 0.5) !important;
      text-decoration: none !important;
      border-radius: 0.375rem !important;
      box-sizing: border-box !important;
      cursor: pointer !important;
    }
    .branch-tel-btn:hover {
      background-color: #1c6e78 !important;
      color: #ffffff !important;
    }
    .branch-tel-btn svg {
      width: 14px !important;
      height: 14px !important;
      max-width: 16px !important;
      max-height: 16px !important;
      flex-shrink: 0 !important;
      color: #f4d07e !important;
      fill: currentColor !important;
      display: inline-block !important;
      vertical-align: middle !important;
    }

    /* 5. 그리드 시스템 보장 */
    .grid {
      display: grid !important;
    }
    .gap-2 { gap: 0.5rem !important; }
    .gap-3 { gap: 0.75rem !important; }
    .gap-4 { gap: 1rem !important; }
    .gap-5 { gap: 1.25rem !important; }
    .gap-6 { gap: 1.5rem !important; }
    .gap-8 { gap: 2rem !important; }

    @media (min-width: 640px) {
      .sm\\:grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      }
      .sm\\:px-6 {
        padding-left: 1.5rem !important;
        padding-right: 1.5rem !important;
      }
    }

    @media (min-width: 768px) {
      .md\\:grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      }
      .md\\:grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
      }
      main section.bg-white {
        padding: 2.25rem 2.5rem !important;
      }
    }

    @media (min-width: 1024px) {
      .lg\\:grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
      }
      .lg\\:px-8 {
        padding-left: 2rem !important;
        padding-right: 2rem !important;
      }
    }

    @media (max-width: 640px) {
      h1 {
        font-size: 1.65rem !important;
        line-height: 1.35 !important;
        letter-spacing: -0.02em !important;
      }
      main,
      .landing-main-container {
        padding-top: 1.5rem !important;
        padding-bottom: 2rem !important;
        padding-left: 1rem !important;
        padding-right: 1rem !important;
      }
      main section.bg-white {
        padding: 1.25rem 1rem !important;
        border-radius: 1rem !important;
        margin-bottom: 1.25rem !important;
      }
      main .grid-cols-1,
      main [class*="grid-cols-"] {
        grid-template-columns: 1fr !important;
      }
      footer .grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
      }
    }

    /* 6. 모달 팝업 스타일 */
    .healim-modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(13, 58, 66, 0.65);
      backdrop-filter: blur(4px);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      box-sizing: border-box;
    }
    .healim-modal-dialog {
      background: #ffffff;
      border-radius: 1rem;
      max-width: 720px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      padding: 1.5rem;
      box-shadow: 0 20px 40px rgba(0,0,0,0.25);
      box-sizing: border-box;
      position: relative;
    }
    .healim-modal-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    .btn-modal-close {
      background: none;
      border: none;
      font-size: 1.75rem;
      line-height: 1;
      cursor: pointer;
      color: #666;
      padding: 0;
    }
    .btn-modal-close:hover {
      color: #000;
    }

    /* 7. 공통 UI 컴포넌트 */
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

const newCssLinks = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
  <link rel="stylesheet" href="/css/_entry.css" />
  <link rel="stylesheet" href="/css/_entry.e5e3a97ee441c082d15776815013189e2bc2aa6deda6cb591a3af76ad8c2ddd7.css" />
  <link rel="stylesheet" href="/css/custom.min.css" />
  <link rel="stylesheet" href="/css/custom.min.9b914fe96770688965b359c550fef3d86c82f1e19deab78c7a8a575a9b89d732.css" />`;

const modalAndScripts = `  <!-- Common Bottom Section Universal Detail Modal Backdrop -->
  <div class="healim-modal-backdrop" id="commonBottomDetailModalBackdrop" style="display: none;" onclick="if(event.target === this) closeCommonBottomDetailModal();">
    <div class="healim-modal-dialog">
      <div class="healim-modal-header">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="post-badge inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#edf7f8] text-[#1c6e78] border border-[#badfe3]" id="commonBottomModalCategory">분류</span>
          <h3 class="healim-modal-title" id="commonBottomModalTitle" style="margin: 0; font-size: 1.15rem; line-height: 1.4;">제목</h3>
        </div>
        <button type="button" class="btn-modal-close" onclick="closeCommonBottomDetailModal()">&times;</button>
      </div>
      <div class="flex items-center justify-between text-xs text-[#888888] pb-3 border-b border-[#edf2f4] mb-4">
        <div>
          작성자: <strong class="text-[#0d3a42]" id="commonBottomModalAuthor">해아림한의원</strong>
          <span class="mx-2">|</span>
          등록일: <span id="commonBottomModalDate">2026.09.09</span>
        </div>
        <div>
          조회수: <span id="commonBottomModalViews">1</span>
        </div>
      </div>
      <div id="commonBottomModalYoutubeArea" class="mb-4" style="display: none;"></div>
      <div id="commonBottomModalImageArea" class="mb-4" style="display: none;">
        <img id="commonBottomModalImage" src="" alt="첨부 사진" class="w-full max-h-[380px] object-contain rounded-xl border border-[#badfe3] bg-[#f8fafb]" onerror="if(!this.dataset.fallback){this.dataset.fallback=1;this.src='/images/faq/faq_1_exam.svg';}else{this.parentElement.style.display='none';}" />
        <div id="commonBottomModalBlurNotice" class="mt-2 text-xs text-[#1c6e78] font-semibold flex items-center justify-between bg-[#f0f7f8] px-3 py-1.5 rounded-lg border border-[#badfe3]" style="display: none;">
          <span class="flex items-center gap-1.5"><span>🔒</span> <span>회원 인증 열람: 의료법 제56조에 따라 로그인 회원에게 제공되는 원본 치료후기 사진입니다.</span></span>
        </div>
      </div>
      <div id="commonBottomModalContent" class="text-sm text-[#333333] leading-relaxed py-2 min-h-[120px]">
        내용이 여기에 표시됩니다.
      </div>
      <div class="modal-footer mt-4 pt-3 border-t border-[#edf2f4] flex items-center justify-between">
        <a id="commonBottomModalMoreLink" href="/community/" class="text-xs text-[#1c6e78] font-bold hover:underline flex items-center gap-1">
          <span>커뮤니티에서 더 많은 글 보기</span>
          <span>&gt;</span>
        </a>
        <button type="button" class="px-4 py-2 bg-[#1c6e78] text-white text-xs font-bold rounded-lg hover:bg-[#0d3a42] transition-colors" onclick="closeCommonBottomDetailModal()">닫기</button>
      </div>
    </div>
  </div>
  <script src="/js/auto_faq_engine.js"></script>
  <script src="/js/auto_column_engine.js?v=1793118558"></script>
  <script src="/js/auto_review_engine.js"></script>
  <script src="/js/healim_cloud_db.js"></script>
  <script src="/js/healim_bottom_engine.js"></script>
</body>`;

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

  // 1. Replace CSS stylesheet links in head
  // Pattern covers pretendard and any _entry or custom.min link
  const cssPattern = /(?:<link rel="stylesheet" href="[^"]*pretendard[^"]*" \/>\s*)?<link rel="stylesheet" href="[^"]*\/css\/_entry[^"]*" \/>\s*<link rel="stylesheet" href="[^"]*\/css\/custom\.min[^"]*" \/>/i;
  if (cssPattern.test(html)) {
    html = html.replace(cssPattern, newCssLinks);
  } else {
    // Fallback: replace any _entry CSS link
    html = html.replace(/<link rel="stylesheet" href="[^"]*\/css\/_entry[^"]*" \/>/gi, newCssLinks);
  }

  // 2. Replace <style>...</style>
  html = html.replace(/<style>[\s\S]*?<\/style>/i, newStyle);

  // 3. Ensure branch phone SVG has width="16" height="16"
  html = html.replace(
    /<svg class="w-3 h-3 md:w-4 md:h-4 text-\[#f4d07e\] flex-shrink-0" fill="currentColor"/g,
    '<svg class="w-3 h-3 md:w-4 md:h-4 text-[#f4d07e] flex-shrink-0" width="16" height="16" fill="currentColor"'
  );

  // 4. Ensure universal modal and scripts are present before </body>
  if (!html.includes('commonBottomDetailModalBackdrop')) {
    html = html.replace(/<\/body>/i, modalAndScripts);
  } else if (!html.includes('/js/healim_bottom_engine.js')) {
    html = html.replace(/<\/body>/i, '  <script src="/js/healim_bottom_engine.js"></script>\n</body>');
  }

  fs.writeFileSync(file1, html, 'utf8');

  if (fs.existsSync(dirPath)) {
    fs.writeFileSync(file2, html, 'utf8');
  }

  count++;
  console.log(`[${count}/${slugs.length}] Successfully fixed ${slug}.html and ${slug}/index.html`);
}

console.log(`\nAll ${count} landing pages fixed successfully!`);