---
title: "해아림 커뮤니티 | 공황장애 FAQ, 치료후기, 유튜브 영상, 의료 칼럼"
seo:
  title: "공황장애 치료후기, 자주묻는질문, 공황장애 치료사례칼럼 | 해아림한의원 커뮤니티"
description: "공황장애 극복 환자들의 실제 치료 후기 74편, 자주 묻는 질문(FAQ) 32문답, 원장단 유튜브 영상 15편 및 16년 임상 노하우가 담긴 공황장애 치료사례칼럼 40편을 공유합니다."
keywords: "공황장애치료후기, 자주묻는질문, 공황장애치료사례칼럼, 공황장애치료사례, 공황장애FAQ, 공황장애극복사례, 공황장애칼럼, 해아림한의원후기, 공황장애유튜브, 해아림TV, 공황장애상담"
type: landing
sections:
  - block: markdown
    content:
      title: ""
      text: |

        <div class="mb-8 text-center md:text-left">
        <span class="inline-block px-3 py-1 bg-[#eaf3f4] text-[#1c6e78] font-bold text-xs rounded-full uppercase tracking-wider mb-2">Community &amp; Insights</span>
        <h1 class="text-3xl md:text-4xl font-extrabold text-[#0d3a42] leading-tight mb-3">
        해아림 커뮤니티
        </h1>
        <p class="text-[#555555] text-base md:text-lg leading-relaxed max-w-none lg:whitespace-nowrap break-keep">
        전국 16개 네트워크 해아림한의원의 축적된 임상 노하우와 치료 정보, 환자 호전 사례, 원장단 의학 칼럼 및 영상을 공유합니다.
        </p>
        </div>

        <!-- 5-Tab Community Navigation Bar -->
        <!-- 5-Tab Community Navigation Bar -->
        <div class="community-tabs-container">
        <ul class="community-tabs-list" id="communityTabList">
        <li>
        <a href="/faq" class="community-tab-btn" style="text-decoration:none; display:inline-flex; align-items:center; justify-content:center;">
        FAQ 공황장애 치료 정보
        </a>
        </li>
        <li>
        <a href="/reviews" class="community-tab-btn" style="text-decoration:none; display:inline-flex; align-items:center; justify-content:center;">
        공황장애 치료후기 <span class="lock-tag">🔒 회원전용</span>
        </a>
        </li>
        <li>
        <a href="/youtube" class="community-tab-btn" style="text-decoration:none; display:inline-flex; align-items:center; justify-content:center;">
        공황장애 유튜브
        </a>
        </li>
        <li>
        <a href="/columns" class="community-tab-btn" style="text-decoration:none; display:inline-flex; align-items:center; justify-content:center;">
        공황장애 치료 칼럼
        </a>
        </li>
        <li>
        <a href="https://www.healim.com/5-6" target="_blank" rel="noopener noreferrer" class="community-tab-btn" style="text-decoration:none; display:inline-flex; align-items:center; justify-content:center;">
        한약과 비용고시
        </a>
        </li>
        </ul>
        </div>

        <!-- ══════════════════════════════════════════════════════════════
        TAB 1: FAQ 공황장애 치료 정보
        ══════════════════════════════════════════════════════════════ -->
        <div id="tab-pane-faq" class="tab-pane-content">
        <div id="faq" class="scroll-mt-28"></div>
        <!-- Control Bar with Auto-Publishing Status (healim0071 Admin Only) -->
        <div class="board-control-bar" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.75rem;">
        <div id="autoFaqStatusBadge" class="flex items-center gap-2 text-xs text-[#0d3a42] bg-[#f0f7f8] border border-[#badfe3] px-3.5 py-2 rounded-lg" style="display: none;">
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span><strong>공황장애 FAQ 자동 발행</strong>: 주 2~3회 (오전 08:00~11:00 랜덤)</span>
          <span class="text-[#888888] mx-1">|</span>
          <span id="autoFaqNextScheduleText" class="text-[#1c6e78] font-semibold">다음 예정: 확인 중...</span>
          <button type="button" id="btnTriggerFaqPublish" onclick="triggerAutoFaqPublishManual()" class="ml-1 text-xs px-2.5 py-1 bg-white border border-[#badfe3] rounded hover:bg-[#eaf3f4] text-[#1c6e78] font-bold transition-colors shadow-2xs" title="스케줄 대기 없이 지금 즉시 1편 자동 발행">⚡ 즉시 1편 발행</button>
        </div>
        <div class="board-actions" style="margin-left: auto;">
        <button type="button" class="btn-write-post" id="btnWriteFaq" onclick="openWriteModal('faq')" style="display: none;">
        <span>✏️ FAQ작성</span>
        </button>
        </div>
        </div>

        <!-- FAQ Accordion & List -->
        <div id="faqListContainer" class="space-y-3 mb-6">
        <!-- Dynamic FAQ items rendered by JS -->
        </div>
        <div class="healim-pagination-wrapper mb-10" id="faqPaginationContainer"></div>
        </div>

        <!-- ══════════════════════════════════════════════════════════════
        TAB 2: 치료후기 (의료법 제56조 로그인 잠금 게이트)
        ══════════════════════════════════════════════════════════════ -->
        <div id="tab-pane-reviews" class="tab-pane-content hidden">
        <div id="reviews" class="scroll-mt-16 md:scroll-mt-24"></div>
        <!-- Control Bar with Auto-Publishing Status (healim0071 Superadmin Only) -->
        <div class="board-control-bar" id="reviewAdminControlBar" style="display: none; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.75rem;">
        <div id="autoReviewStatusBadge" class="flex items-center gap-2 text-xs text-[#0d3a42] bg-[#f0f7f8] border border-[#badfe3] px-3.5 py-2 rounded-lg" style="display: none;">
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span><strong>공황장애 치료후기 자동 발행</strong>: 4개월당 2~6회 (랜덤 일시)</span>
          <span class="text-[#888888] mx-1">|</span>
          <span id="autoReviewNextScheduleText" class="text-[#1c6e78] font-semibold">다음 예정: 확인 중...</span>
          <button type="button" id="btnTriggerReviewPublish" onclick="triggerAutoReviewPublishManual()" class="ml-1 text-xs px-2.5 py-1 bg-white border border-[#badfe3] rounded hover:bg-[#eaf3f4] text-[#1c6e78] font-bold transition-colors shadow-2xs" title="스케줄 대기 없이 지금 즉시 1편 자동 발행">⚡ 즉시 1편 발행</button>
        </div>
        <div class="board-actions" style="margin-left: auto;">
        <button type="button" class="btn-write-post" id="btnWriteReview" onclick="checkAuthAndOpenWrite('reviews')" style="display: none;">
        <span>✏️ 치료후기 작성</span>
        </button>
        </div>
        </div>

        <!-- Review Notice Banner (Visible only for logged-in members; hidden when locked to avoid duplicate message & extra height) -->
        <div id="reviewNoticeBanner" class="bg-[#f2f7f8] border border-[#cde3e6] p-3.5 rounded-xl mb-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-[#0d3a42]" style="display: none;">
        <div class="flex items-center gap-2">
        <span class="font-bold px-2 py-0.5 bg-[#1c6e78] text-white rounded">의료법 제56조 준수</span>
        <span>치료후기는 환자의 개인정보 보호 및 의료법령에 의거하여 정회원 로그인 후 열람이 가능합니다.</span>
        </div>
        </div>

        <!-- Review Content Area (Wrapped with Lock Gate) -->
        <div class="review-lock-wrapper" id="reviewLockWrapper">
        <!-- Gate Overlay (Shown when logged out) -->
        <div class="review-gate-overlay" id="reviewGateOverlay">
        <div class="review-gate-card">
        <div class="lock-icon-circle">🔒</div>
        <h3>의료법 제56조 회원 열람 안내</h3>
        <p>
        의료법 제56조 및 보건복지부 유권해석에 따라, 환자 치료후기 및 전후 호전 사례는 <strong>로그인한 회원에게만 열람이 허용</strong>됩니다.<br>
        간편 로그인 또는 회원가입 후 진솔한 실제 치료후기를 확인하세요.
        </p>
        <div class="gate-actions">
        <a href="/login/?back_url=L2NvbW11bml0eS8jcmV2aWV3cw==" id="btnGateLogin" class="btn-gate-login">
        🔑 로그인하기
        </a>
        <a href="/site_join_type_choice/?back_url=L2NvbW11bml0eS8jcmV2aWV3cw==" id="btnGateJoin" class="btn-gate-join">
        회원가입
        </a>
        </div>
        </div>
        </div>

        <!-- Review Rows Table & Pagination (Blurred when locked) -->
        <div class="review-blurred-content bg-white" style="min-height: 480px;">
        <div id="reviewListContainer" class="healim-reviews-table">
        <!-- Dynamic Review Rows rendered by JS -->
        </div>
        <div class="healim-pagination-wrapper pt-4 pb-6" id="reviewsPaginationContainer"></div>
        </div>
        </div>
        </div>

        <!-- ══════════════════════════════════════════════════════════════
        TAB 3: 공황장애 유튜브
        ══════════════════════════════════════════════════════════════ -->
        <div id="tab-pane-youtube" class="tab-pane-content hidden">
        <div id="youtube" class="scroll-mt-28"></div>
        <div class="board-control-bar" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.5rem;">
        <div class="flex items-center gap-2 text-xs text-[#0d3a42] bg-[#f0f7f8] px-3.5 py-2 rounded-lg border border-[#cde3e6]" id="youtubeSyncStatus">
        <span class="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <span><strong>해아림TV 공식 채널</strong> 매일 00:00 자동 연동 활성화</span>
        <span class="text-[#888888] mx-1">|</span>
        <a href="https://www.youtube.com/@healimtv" target="_blank" rel="noopener noreferrer" class="text-[#1c6e78] font-bold hover:underline inline-flex items-center gap-1">@healimtv 바로가기 ↗</a>
        <button type="button" onclick="syncHealimtvChannel(true)" class="ml-1 text-xs px-2.5 py-1 bg-white border border-[#badfe3] rounded hover:bg-[#eaf3f4] text-[#1c6e78] transition-colors" title="채널 최신 영상 즉시 새로고침">🔄 최신 동기화</button>
        </div>
        <div class="board-actions">
        <button type="button" class="btn-write-post" id="btnWriteYoutube" onclick="openWriteModal('youtube')" style="display: none;">
        <span>📹 영상 등록</span>
        </button>
        </div>
        </div>

        <!-- YouTube Card Grid -->
        <div class="youtube-grid mb-8" id="youtubeListContainer">
        <!-- Dynamic Video Cards rendered by JS -->
        </div>

        <!-- YouTube Pagination -->
        <div class="healim-pagination-wrapper mb-12" id="youtubePaginationContainer">
        <!-- Dynamic Pagination Buttons rendered by JS -->
        </div>
        </div>

        <!-- ══════════════════════════════════════════════════════════════
        TAB 4: 공황장애 치료 칼럼
        ══════════════════════════════════════════════════════════════ -->
        <div id="tab-pane-columns" class="tab-pane-content hidden">
        <div id="columns" class="scroll-mt-28"></div>
        <div class="board-control-bar" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.75rem;">
        <div id="autoColumnStatusBadge" class="flex items-center gap-2 text-xs text-[#0d3a42] bg-[#f0f7f8] border border-[#badfe3] px-3.5 py-2 rounded-lg" style="display: none;">
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span><strong>공황장애 치료칼럼 자동 발행</strong>: 주 2~3회 (오전 08:00~11:00 랜덤)</span>
          <span class="text-[#888888] mx-1">|</span>
          <span id="autoColumnNextScheduleText" class="text-[#1c6e78] font-semibold">다음 예정: 확인 중...</span>
          <button type="button" id="btnTriggerColumnPublish" onclick="triggerAutoColumnPublishManual()" class="ml-1 text-xs px-2.5 py-1 bg-white border border-[#badfe3] rounded hover:bg-[#eaf3f4] text-[#1c6e78] font-bold transition-colors shadow-2xs" title="스케줄 대기 없이 지금 즉시 1편 자동 발행">⚡ 즉시 1편 발행</button>
          <button type="button" id="btnOpenCustomTitleColumnModal" onclick="openCustomTitleColumnModal()" class="ml-1 text-xs px-2.5 py-1 bg-[#1c6e78] text-white rounded hover:bg-[#0d3a42] font-bold transition-colors shadow-2xs" title="제목을 직접 입력하여 맞춤 임상 칼럼 생성 및 발행">✍️ 제목설정발행</button>
        </div>
        <div class="board-actions" style="margin-left: auto;">
        <button type="button" class="btn-write-post" id="btnWriteColumn" onclick="openWriteModal('columns')" style="display: none;">
        <span>✍️ 칼럼 작성</span>
        </button>
        </div>
        </div>

        <!-- Column Table List -->
        <div class="healim-table-container mb-10">
        <table class="healim-table healim-column-table">
        <thead>
        <tr>
        <th class="col-th-num" style="width: 7%; text-align: center;">번호</th>
        <th class="col-th-title">제목</th>
        <th class="col-desktop-only" style="width: 17%; text-align: center;">작성자</th>
        <th class="col-desktop-only" style="width: 13%; text-align: center;">등록일</th>
        <th class="col-desktop-only" style="width: 8%; text-align: center;">조회</th>
        <th class="col-desktop-only" style="width: 130px; text-align: center; display: none;" id="colManageTh">관리</th>
        </tr>
        </thead>
        <tbody id="columnListContainer">
        <!-- Dynamic Column items rendered by JS -->
        </tbody>
        </table>
        </div>
        <div class="healim-pagination-wrapper mb-10" id="columnsPaginationContainer"></div>
        </div>

        <!-- ══════════════════════════════════════════════════════════════
        해아림 도서 및 하단 배너
        ══════════════════════════════════════════════════════════════ -->
        <div class="healim-book-section mt-12">
        <div class="max-w-xs mx-auto mb-5">
        <img src="/images/book_panic_disorder.jpg" alt="해아림한의원 네트워크 원장단 저서 - 걱정마 공황장애" class="rounded-xl shadow-lg mx-auto" style="max-height: 280px; object-fit: contain;">
        </div>
        <p class="healim-book-label">해아림한의원 네트워크 원장단 저서</p>
        <h3 class="healim-book-title">불안장애·공황장애 극복지침서</h3>
        <p class="text-sm text-[#555555] max-w-md mx-auto mb-4 leading-relaxed">
        원인 모를 신체화 증상과 예기불안, 공황 발작을 이겨내고 온전한 일상을 되찾기 위한 실전 치유 가이드
        </p>
        <div class="text-center">
        <div class="healim-book-badge">걱정마 공황장애</div>
        </div>
        </div>

        <div class="text-center my-10">
        <a href="#branches" class="btn-healim" style="padding: 0.85rem 2.25rem; font-size: 1.05rem;">가까운 16개 지점 찾기 &gt;</a>
        </div>

        <!-- ══════════════════════════════════════════════════════════════
        UNIVERSAL WRITE MODAL (healim-tic 1:1 Spec)
        ══════════════════════════════════════════════════════════════ -->
        <div class="healim-modal-backdrop" id="writeModalBackdrop">
        <div class="healim-modal-dialog healim-write-dialog">
        <!-- Top Bar: Left < (Back), Center Dynamic Title, Right 작성 Submit Button -->
        <div class="healim-write-header">
        <button type="button" class="healim-write-back-btn" onclick="closeWriteModal()" title="뒤로가기">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
        </button>
        <h3 class="healim-write-title" id="writeModalTitle">FAQ</h3>
        <button type="submit" form="writePostForm" class="healim-write-submit-btn">작성</button>
        </div>

        <form id="writePostForm" onsubmit="handlePostSubmit(event)" class="healim-write-form">
        <input type="hidden" id="postBoardType" value="faq" />
        <input type="hidden" id="postEditId" value="" />

        <!-- Category Pills Row (Hidden for all boards) -->
        <div id="categoryFormGroup" class="healim-write-cat-row" style="display: none;">
        <span class="cat-label">분류:</span>
        <div id="categoryPillsWrapper" class="cat-pills-wrapper">
        <!-- Dynamically populated pills -->
        </div>
        <input type="hidden" id="postCategory" value="" />
        </div>

        <!-- Row 1: Split 2 columns: 작성자 이름 | 비밀번호 -->
        <div class="healim-write-row-split">
        <div class="healim-write-col">
        <input type="text" id="postAuthor" value="해아림한의원" placeholder="해아림한의원" required />
        </div>
        <div class="healim-write-col">
        <input type="password" id="postPassword" placeholder="비밀번호" oninput="checkAdminPassword(this.value)" />
        </div>
        </div>

        <!-- Row 2: Full-width 제목 -->
        <div class="healim-write-row-title">
        <input type="text" id="postTitle" placeholder="제목" required />
        </div>

        <!-- Youtube Video URL (Only for Youtube board) -->
        <div id="youtubeUrlGroup" class="healim-write-youtube-group" style="display: none;">
        <label for="postYoutubeUrl">유튜브 영상 URL 또는 영상 ID</label>
        <input type="text" id="postYoutubeUrl" class="modal-input" placeholder="예: https://www.youtube.com/watch?v=51rIQ1T5dIU" />
        </div>

        <!-- Row 3: Left [대표 이미지 설정] & Chip | Right [🔒] Secret Post Toggle -->
        <div id="imageUploadGroup" class="healim-write-row-meta">
        <div class="healim-write-meta-left">
        <input type="file" id="postImageInput" accept="image/*" style="display: none;" onchange="handleImageSelect(event)" />
        <input type="file" id="postInlineImageInput" accept="image/*" multiple style="display: none;" onchange="handleInlineImageSelect(event)" />
        <button type="button" class="btn-set-featured-img" onclick="document.getElementById('postImageInput').click()" title="대표 이미지 파일 첨부">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
        <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
        <span>대표 이미지 설정</span>
        </button>
        <div id="selectedImageChip" class="selected-img-chip" style="display: none;">
        <span id="selectedImageName">선택된 사진 없음</span>
        <button type="button" id="btnRemoveImage" onclick="removeSelectedImage()" title="삭제">&times;</button>
        </div>
        </div>
        <div id="secretFormGroup" class="healim-write-meta-right">
        <input type="checkbox" id="postIsSecret" style="display: none;" onchange="updateSecretLockState()" />
        <button type="button" id="btnToggleSecret" onclick="toggleSecretPost()" title="비밀글 설정 (클릭하여 켜기/끄기)">
        <svg id="secretLockIcon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
        </button>
        </div>
        </div>

        <!-- Attached Representative Image Preview Container -->
        <div id="imagePreviewContainer" style="display: none; padding: 10px 20px; background: #f8fafb; border-bottom: 1px solid #edf2f4;">
        <div class="healim-preview-card">
        <img id="imagePreview" src="" alt="대표 이미지 미리보기" />
        <button type="button" class="btn-remove-preview" onclick="removeSelectedImage()" title="사진 제거">&times;</button>
        <span class="preview-badge">대표 이미지</span>
        </div>
        </div>

        <!-- Row 4: healim-tic Rich Text Editor Icon Toolbar -->
        <div class="healim-toolbar-row">
        <button type="button" class="healim-tool-btn" title="본문 사진 첨부 (커서 위치에 삽입)" onmousedown="event.preventDefault()" onclick="triggerInlineImageUpload()">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </button>
        <button type="button" class="healim-tool-btn" title="영상 링크" onmousedown="event.preventDefault()" onclick="insertEditorFormat('video')">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
        </button>
        <button type="button" class="healim-tool-btn" title="링크 삽입" onmousedown="event.preventDefault()" onclick="insertEditorFormat('link')">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        </button>
        <button type="button" class="healim-tool-btn" title="자료/문서 서식" onmousedown="event.preventDefault()" onclick="insertEditorFormat('doc')">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
        </button>
        <span class="healim-tool-sep">|</span>
        <button type="button" class="healim-tool-btn" title="글자 크기 / 제목" onmousedown="event.preventDefault()" onclick="insertEditorFormat('heading')">
        <span style="display:inline-flex;align-items:center;gap:1px;font-size:13px;font-weight:700;font-family:sans-serif;">T<span style="font-size:10px;">T</span><svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="margin-left:1px;"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
        </button>
        <button type="button" class="healim-tool-btn" title="굵게 (Bold)" onmousedown="event.preventDefault()" onclick="insertEditorFormat('bold')">
        <strong style="font-size: 13.5px; font-weight: 800;">B</strong>
        </button>
        <button type="button" class="healim-tool-btn" title="기울임 (Italic)" onmousedown="event.preventDefault()" onclick="insertEditorFormat('italic')">
        <em style="font-size: 13.5px; font-family: serif; font-weight: bold;">I</em>
        </button>
        <button type="button" class="healim-tool-btn" title="밑줄 (Underline)" onmousedown="event.preventDefault()" onclick="insertEditorFormat('underline')">
        <u style="font-size: 13.5px; font-weight: 600;">U</u>
        </button>
        <button type="button" class="healim-tool-btn" title="취소선 (Strike)" onmousedown="event.preventDefault()" onclick="insertEditorFormat('strike')">
        <s style="font-size: 13.5px; font-weight: 600;">S</s>
        </button>
        <button type="button" class="healim-tool-btn" title="가운데 정렬" onmousedown="event.preventDefault()" onclick="insertEditorFormat('align')">
        <span style="display:inline-flex;align-items:center;gap:1px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="21" y1="6" x2="3" y2="6"/><line x1="17" y1="12" x2="7" y2="12"/><line x1="19" y1="18" x2="5" y2="18"/></svg><svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="margin-left:1px;"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
        </button>
        <button type="button" class="healim-tool-btn" title="글자색" onmousedown="event.preventDefault()" onclick="insertEditorFormat('color')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
        </button>
        <button type="button" class="healim-tool-btn" title="서식 지우기" onmousedown="event.preventDefault()" onclick="insertEditorFormat('clear')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2l4 4"/><path d="M14.5 5.5l4 4"/><path d="M2.5 17.5l9.5-9.5 4 4-9.5 9.5H2.5v-4z"/></svg>
        </button>
        <span class="healim-tool-sep">|</span>
        <button type="button" class="healim-tool-btn" title="인용구" onmousedown="event.preventDefault()" onclick="insertEditorFormat('quote')">
        <span style="font-size: 15px; font-weight: bold; line-height: 1;">❝</span>
        </button>
        <button type="button" class="healim-tool-btn" title="구분선" onmousedown="event.preventDefault()" onclick="insertEditorFormat('hr')">
        <span style="font-size: 14px; font-weight: bold; line-height: 1;">―</span>
        </button>
        <button type="button" class="healim-tool-btn" title="글머리 기호 목록" onmousedown="event.preventDefault()" onclick="insertEditorFormat('ul')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="9" y1="6" x2="20" y2="6"/><line x1="9" y1="12" x2="20" y2="12"/><line x1="9" y1="18" x2="20" y2="18"/><circle cx="4" cy="6" r="2" fill="currentColor"/><circle cx="4" cy="12" r="2" fill="currentColor"/><circle cx="4" cy="18" r="2" fill="currentColor"/></svg>
        </button>
        <button type="button" class="healim-tool-btn" title="번호 목록" onmousedown="event.preventDefault()" onclick="insertEditorFormat('ol')">
        <span style="display:inline-flex;align-items:center;gap:1px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="10" y1="6" x2="21" y2="6"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="18" x2="21" y2="18"/><path d="M4 6h1v4"/><path d="M4 10h2"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/></svg><svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="margin-left:1px;"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
        </button>
        </div>

        <!-- Row 5: Content Area with Rich Visual WYSIWYG Editor -->
        <div class="healim-write-row-content">
        <div id="postContentEditor" class="healim-content-editor" contenteditable="true" data-placeholder="내용을 입력해주세요. (사진 아이콘 클릭 또는 사진 복사 붙여넣기(Ctrl+V)로 본문에 사진을 넣을 수 있습니다)"></div>
        <textarea id="postContent" style="display: none !important;" tabindex="-1" aria-hidden="true" disabled></textarea>
        </div>

        <!-- Admin-only Custom Date & Views Override (healim0071 / Super Admin) -->
        <div id="adminCustomOptionsGroup" class="healim-admin-override-box" style="display: none;">
        <div class="override-title">
        <span>👑 최고관리자 권한: 작성일자 및 조회수 임의 지정</span>
        </div>
        <div class="override-inputs">
        <div>
        <label for="postCustomDate">작성일자 지정 (선택)</label>
        <input type="text" id="postCustomDate" class="modal-input" placeholder="예: 2026.08.15 (미입력시 오늘)" />
        </div>
        <div>
        <label for="postCustomViews">초기 조회수 설정 (선택)</label>
        <input type="number" id="postCustomViews" class="modal-input" placeholder="예: 1250 (미입력시 1)" />
        </div>
        </div>
        </div>
        </form>
        </div>
        </div>

        <!-- ══════════════════════════════════════════════════════════════
        UNIVERSAL DETAIL VIEW MODAL
        ══════════════════════════════════════════════════════════════ -->
        <!-- CUSTOM TITLE COLUMN MODAL (제목설정 맞춤 치료칼럼 즉시발행 모달) -->
        <div class="healim-modal-backdrop" id="customColumnModalBackdrop" style="z-index: 100050;">
        <div class="healim-modal-dialog" style="max-width: 740px; width: 95%; max-height: 92vh; display: flex; flex-direction: column;">
        <!-- Header -->
        <div class="healim-modal-header" style="padding-bottom: 0.85rem; border-bottom: 1px solid #e2e8ea; display: flex; align-items: center; justify-content: space-between;">
        <div class="flex items-center gap-2">
        <span class="px-2 py-0.5 text-xs font-bold bg-[#1c6e78] text-white rounded">치료칼럼</span>
        <h3 class="text-base font-bold text-[#0d3a42] m-0">✍️ 제목설정 맞춤 치료칼럼 즉시발행</h3>
        </div>
        <button type="button" class="btn-modal-close text-xl text-gray-500 hover:text-gray-800 cursor-pointer p-1" onclick="closeCustomTitleColumnModal()">&times;</button>
        </div>

        <!-- Body (Scrollable) -->
        <div style="overflow-y: auto; padding: 1rem 0; flex: 1;">
        <div class="p-3 bg-[#f0f7f8] border border-[#badfe3] rounded-lg text-xs text-[#0d3a42] leading-relaxed mb-4">
        💡 <strong>발행 안내</strong>: 발행하고자 하는 칼럼의 제목(환자 호소 증상, 연령, 질환 등)을 입력하고 바로 아래의 <strong>[제목작성 즉시발행]</strong> 버튼을 누르면, 세팅된 임상 기준(정부 통계치, 1:1 환자 맞춤 탕약 처방, 자율신경 기전, 필수 3대 링크 등)에 맞춘 고품질 본문이 자동 생성됩니다. 생성된 본문은 직접 수정이 가능하며, 하단의 <strong>[확인 (포스팅)]</strong>을 누르면 치료칼럼에 즉시 발행됩니다.
        </div>

        <!-- 1. 제목 입력란 -->
        <div class="mb-3">
        <label for="customColTitleInput" class="block text-xs font-bold text-[#0d3a42] mb-1.5 flex items-center justify-between">
        <span>칼럼 제목 <span class="text-rose-500">*</span></span>
        <span class="text-[11px] text-gray-500 font-normal">예: 운전 중 터널 진입 공포와 식은땀으로 갓길에 차를 세우던 터널 공황 치료사례</span>
        </label>
        <input type="text" id="customColTitleInput" class="w-full px-3.5 py-2.5 text-sm border border-[#badfe3] rounded-lg focus:outline-none focus:border-[#1c6e78] focus:ring-1 focus:ring-[#1c6e78] bg-white font-semibold text-[#222222]" placeholder="발행할 칼럼의 제목을 구체적으로 입력하세요.." />
        </div>

        <!-- 2. 바로 아래 붙어있는 제목작성 즉시발행 버튼 -->
        <div class="mb-4">
        <button type="button" id="btnGenerateCustomColContent" onclick="generateCustomColumnContentByTitle()" class="w-full py-2.5 px-4 bg-gradient-to-r from-[#1c6e78] to-[#0d3a42] hover:from-[#0d3a42] hover:to-[#1c6e78] text-white text-sm font-bold rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer">
        <span>⚡ 제목작성 즉시발행 (제목 맞춤형 본문 자동 생성)</span>
        </button>
        </div>

        <!-- 3. 핵심 요약 (선택) -->
        <div class="mb-3">
        <label for="customColSummaryInput" class="block text-xs font-bold text-[#0d3a42] mb-1">핵심 요약 (목록 노출용)</label>
        <input type="text" id="customColSummaryInput" class="w-full px-3 py-2 text-xs border border-[#badfe3] rounded-lg focus:outline-none focus:border-[#1c6e78] bg-white text-[#444444]" placeholder="본문 생성 시 자동 추출되며 필요시 직접 수정할 수 있습니다." />
        </div>

        <!-- 4. 본문 내용 에디터 (수정 가능한 상태) -->
        <div class="mb-3">
        <label for="customColContentInput" class="block text-xs font-bold text-[#0d3a42] mb-1 flex items-center justify-between">
        <span>칼럼 본문 내용 (자유롭게 검토 및 수정 가능) <span class="text-rose-500">*</span></span>
        <span id="customColCharCount" class="text-[11px] text-gray-500 font-normal">0자</span>
        </label>
        <textarea id="customColContentInput" rows="13" class="w-full px-3.5 py-2.5 text-xs border border-[#badfe3] rounded-lg focus:outline-none focus:border-[#1c6e78] bg-[#fbfdfd] leading-relaxed text-[#333333] font-sans" oninput="var cc = document.getElementById('customColCharCount'); if (cc) cc.textContent = this.value.length + '자';" placeholder="상단에 제목을 입력한 후 [제목작성 즉시발행] 버튼을 누르면 이곳에 맞춤 칼럼 본문이 자동 생성되어 수정 가능한 상태로 표시됩니다.."></textarea>
        </div>

        <input type="hidden" id="customColImageInput" value="/images/columns/column_1_palpitation.svg" />
        </div>

        <!-- Footer: 아래에 있는 확인 버튼 -->
        <div class="modal-footer pt-3 border-t border-[#edf2f4] flex items-center justify-between">
        <span class="text-xs text-gray-500">작성자: <strong>해아림한의원</strong> | 카테고리: <strong>칼럼</strong></span>
        <div class="flex items-center gap-2">
        <button type="button" onclick="closeCustomTitleColumnModal()" class="px-4 py-2 text-xs font-medium text-[#666666] bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer">취소</button>
        <button type="button" id="btnConfirmPublishCustomColumn" onclick="publishCustomColumnPost()" class="px-5 py-2 text-xs font-bold text-white bg-[#0d3a42] hover:bg-[#1c6e78] rounded-lg shadow-sm transition-all flex items-center gap-1.5 cursor-pointer">
        <span>✅ 확인 (치료칼럼에 즉시 포스팅)</span>
        </button>
        </div>
        </div>
        </div>
        </div>

        <div class="healim-modal-backdrop" id="detailModalBackdrop">
        <div class="healim-modal-dialog">
        <div class="healim-modal-header">
        <div class="flex items-center gap-2">
        <span class="post-badge" id="detailModalCategory">분류</span>
        <h3 class="healim-modal-title" id="detailModalTitle" style="margin: 0; font-size: 1.15rem;">제목</h3>
        </div>
        <button type="button" class="btn-modal-close" onclick="closeDetailModal()">&times;</button>
        </div>
        <div class="flex items-center justify-between text-xs text-[#888888] pb-3 border-b border-[#edf2f4] mb-4">
        <div>
        작성자: <strong class="text-[#0d3a42]" id="detailModalAuthor">원장단</strong>
        <span class="mx-2">|</span>
        등록일: <span id="detailModalDate">2026.09.06</span>
        </div>
        <div>
        조회수: <span id="detailModalViews">1</span>
        </div>
        </div>
        <div id="detailModalYoutubeArea" class="mb-4" style="display: none;"></div>
        <div id="detailModalImageArea" class="mb-4" style="display: none;">
        <img id="detailModalImage" src="" alt="첨부 사진" class="w-full max-h-[380px] object-contain rounded-xl border border-[#badfe3] bg-[#f8fafb]" onerror="if(!this.dataset.fallback){this.dataset.fallback='1'; this.src=(window.currentDetailBoardType==='faq'?'/images/faq/faq_1_exam.svg':'/images/columns/column_30_cure_homeostasis.svg');}else{this.parentElement.style.display='none';}" />
        </div>
        <div id="detailModalContent" class="text-sm text-[#333333] leading-relaxed py-2 min-h-[120px]">
        내용이 여기에 표시됩니다.
        </div>
        <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center;">
        <div class="flex items-center gap-2">
        <button type="button" id="btnDetailModalEdit" style="display:none; background:#1c6e78; color:white; padding:8px 14px; border-radius:6px; font-size:12px; font-weight:600; border:none; cursor:pointer;" onclick="handleEditCurrentPost()">✏️ 수정</button>
        <button type="button" id="btnDetailModalDelete" style="display:none; background:#dc2626; color:white; padding:8px 14px; border-radius:6px; font-size:12px; font-weight:600; border:none; cursor:pointer;" onclick="handleDeleteCurrentPost()">🗑️ 최고관리자 권한 삭제</button>
        </div>
        <div>
        <button type="button" class="btn-modal-cancel" onclick="closeDetailModal()">닫기</button>
        </div>
        </div>
        </div>
        </div>

        <!-- ══════════════════════════════════════════════════════════════
        COMMUNITY JAVASCRIPT LOGIC
        ══════════════════════════════════════════════════════════════ -->
        <script>
        (function() {
          // Instant client redirect for legacy hash URLs (#columns, #faq, #reviews, #youtube)
          var hash = (window.location.hash || '').replace('#', '');
          var pathMap = { columns: '/columns', faq: '/faq', reviews: '/reviews', youtube: '/youtube' };
          if (pathMap[hash]) {
            window.location.replace(pathMap[hash]);
          }
        })();
        </script>
        <script src="/js/auto_faq_engine.js"></script>
        <script src="/js/auto_column_engine.js?v=1792982911417"></script>
        <script src="/js/auto_review_engine.js"></script>
        <script src="/js/healim_cloud_db.js"></script>
        <script>window.DEFAULT_COMMUNITY_TAB = 'faq';</script>
        
        <script>
        // Instant Zero-Delay URL Sanitizer (Ensures NEVER has #hash)
        (function() {
          if (window.location.hash) {
            try {
              history.replaceState(null, null, window.location.pathname.replace(/\/+$/, '') + window.location.search);
            } catch(e) {}
          }
        })();
        </script>
        <script src="/js/healim_community_engine.js?v=20261027_clean_v3_fixed"></script>
---
