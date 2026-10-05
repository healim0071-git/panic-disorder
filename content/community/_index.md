---
title: "해아림 커뮤니티 | 공황장애 FAQ, 치료후기, 유튜브 영상, 의료 칼럼"
seo:
  title: "공황장애 FAQ 및 치료후기, 전문 칼럼 | 해아림한의원 커뮤니티"
description: "공황장애 극복 환자들의 실제 치료 후기 74편, 자주 묻는 질문(FAQ) 32문답, 원장단 유튜브 영상 15편 및 16년 임상 노하우가 담긴 전문 의학 칼럼 40편을 공유합니다."
keywords: "공황장애치료후기, 공황장애FAQ, 공황장애극복사례, 공황장애칼럼, 해아림한의원후기, 공황장애유튜브, 해아림TV, 공황장애상담"
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

        <!-- 4-Tab Community Navigation Bar -->
        <div class="community-tabs-container">
        <ul class="community-tabs-list" id="communityTabList">
        <li>
        <button type="button" class="community-tab-btn active" data-tab="faq" onclick="switchCommunityTab('faq')">
        FAQ 공황장애 치료 정보
        </button>
        </li>
        <li>
        <button type="button" class="community-tab-btn" data-tab="reviews" onclick="switchCommunityTab('reviews')">
        치료후기 <span class="lock-tag">🔒 회원전용</span>
        </button>
        </li>
        <li>
        <button type="button" class="community-tab-btn" data-tab="youtube" onclick="switchCommunityTab('youtube')">
        공황장애 유튜브
        </button>
        </li>
        <li>
        <button type="button" class="community-tab-btn" data-tab="columns" onclick="switchCommunityTab('columns')">
        공황장애 치료 칼럼
        </button>
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
        <script src="/js/auto_faq_engine.js"></script>
        <script src="/js/auto_column_engine.js"></script>
        <script src="/js/auto_review_engine.js"></script>
        <script src="/js/healim_cloud_db.js"></script>
        <script>        (function() {
        // --- Healim Community Epoch System (Zero-Data-Loss & Zero-Cross-Pollution Architecture) ---
        var CURRENT_COMMUNITY_EPOCH = '20260916_panic_v15';
        try {
          var userEpoch = localStorage.getItem('healim_community_epoch');
          if (userEpoch !== CURRENT_COMMUNITY_EPOCH) {
            console.log('[Healim Master Hub] Epoch upgrade detected (' + userEpoch + ' -> ' + CURRENT_COMMUNITY_EPOCH + '). Cleanly harmonizing board vaults...');
            ['faq', 'reviews', 'columns', 'youtube'].forEach(function(k) {
              localStorage.removeItem('healim_board_' + k);
              localStorage.removeItem('healim_vault_all_posts_' + k);
            });
            // Force purge any obsolete dysautonomia posts
            try {
              ['healim_board_columns', 'healim_vault_all_posts_columns'].forEach(function(ck) {
                var raw = localStorage.getItem(ck);
                if (raw) {
                  var arr = JSON.parse(raw);
                  if (Array.isArray(arr)) {
                    var cleaned = arr.filter(function(p) {
                      if (!p || !p.title) return false;
                      var t = p.title;
                      return !(['골반통', '비뇨생식기', '미각', '후각', '삼차신경', '살이 쭉쭉', '부신 고갈', '동결', '장내 세균총', '이갈이', '배란기'].some(function(bk) { return t.indexOf(bk) !== -1; }));
                    });
                    localStorage.setItem(ck, JSON.stringify(cleaned));
                  }
                }
              });
            } catch(e) {}
            localStorage.removeItem('healim_community_posts_v2');
            localStorage.removeItem('healim_deleted_post_ids');
            localStorage.setItem('healim_community_epoch', CURRENT_COMMUNITY_EPOCH);
            if (typeof window !== 'undefined' && window.indexedDB) {
              try { window.indexedDB.deleteDatabase('HealimCommunityDB'); } catch(e) {}
            }
          }
        } catch(e) {}
        // --- Seed Data ---
        var defaultFaqData = [
          {
              "id": "faq-auto-20261005-ext9",
              "category": "계절/기상",
              "author": "해아림한의원",
              "date": "2026.10.05",
              "views": 320,
              "image": "/images/faq/faq_14_weather.svg",
              "title": "환절기나 날씨가 흐릴 때 유독 공황장애 증상이 심해지는 이유는 무엇인가요? - 기상 반응",
              "summary": "저기압 전선 통과 시 체내 히스타민 분비 증가와 세로토닌 합성 저하의 기상병(氣象病) 기전.",
              "content": "환절기 기온 변화가 극심하거나 비가 내리기 전날 하늘이 잔뜩 찌푸릴 때 가슴이 유독 조여오고 울렁거리며 공황 증상이 악화되는 것을 호소하시는 분들이 많습니다. 이는 날씨와 대기 환경 변화가 인체 자율신경계에 직접적인 영향을 미치는 '기상병(Weather Sensitivity)'의 의학적 반응 메커니즘입니다.\n\n비가 오기 전 저기압 전선이 다가오면 대기 중 산소 분압이 낮아지고 체표에 가해지는 공기 압력이 감소합니다. 이에 따라 인체는 말초 혈관이 늘어나고 부교감신경이 순간적으로 처지며 나른함과 저혈압 경향을 보이게 됩니다. 신체는 이에 저항하여 혈압과 혈류를 유지하기 위해 교감신경을 무리하게 항진시키는데, 이 조절 과정에서 자율신경계 균형이 크게 흔들리게 됩니다. 더욱이 일조량이 줄어들면 뇌 속 행복 호르몬인 세로토닌 합성이 감소하고 멜라토닌 분비 리듬이 교란되어 기분 저하와 불안이 증폭됩니다. 기압이 내려가는 날에는 과도한 일정을 피하고 충분한 수면을 취하여 신체적 피로 누적을 방지하는 배려가 필요합니다.\n\n한의학에서는 날씨 변화에 취약한 상태를 체내 수분 대사 장애인 '습담(濕痰)'과 외부 기후 변화에 민감한 '풍한(風寒)'의 복합 작용으로 설명합니다. 이를 다스리기 위해 실내 조명을 평소보다 밝게 유지하고 가벼운 실내 체조로 기혈 순환을 촉진하는 습관이 유익합니다. 날씨가 궂은 날에는 따뜻한 온수를 수시로 마시며 위장을 따뜻하게 보호해 주는 것도 좋습니다. 해아림한의원에서는 습담을 제거하고 비위와 심신을 따뜻하게 북돋우는 맞춤 한약 처방을 통해 계절과 날씨 변동에도 흔들리지 않는 튼튼한 체내 균형을 만들어 드립니다.\n\n[공황장애 정밀검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
              "isAutoPublished": true,
              "isCustom": true,
              "createdAt": 1791168000000,
              "updatedAt": 1791168000000,
              "poolId": "faq-ext-9"
          },
          {
              "id": "faq-auto-20261003-ext7",
              "category": "시각/VDT",
              "author": "해아림한의원",
              "date": "2026.10.03",
              "views": 345,
              "image": "/images/faq/faq_13_vision.svg",
              "title": "스마트폰이나 모니터를 오래 보면 어지럽고 불안해져요 - 시각 피로와 공황장애",
              "summary": "청색광(블루라이트)과 경추 굴곡 자세가 유발하는 시각 피질 과부하 및 VDT 자율신경 증후군.",
              "content": "고개를 숙인 채 스마트폰 화면의 짧은 영상들을 연속해서 넘겨보거나, 어두운 실내에서 고화질 모니터를 장시간 응시하다가 갑자기 머리가 핑 돌고 가슴이 답답해지며 공황감을 호소하는 분들이 최근 급증하고 있습니다. 이는 현대인들에게 흔한 VDT(Visual Display Terminal) 증후군과 자율신경 실조증이 결합되어 나타나는 전형적인 시각 유발성 불안 반응입니다.\n\n모니터의 강한 청색광과 빠른 화면 전환은 뇌의 후두엽 시각 피질에 엄청난 양의 감각 정보를 쏟아붓습니다. 뇌 신경망이 피로해진 상태에서 처리 용량을 초과하는 시각 자극이 지속되면, 뇌간의 망상체 활성화 시스템(RAS)이 과잉 흥분하여 교감신경 경보를 울리게 됩니다. 더욱이 고개를 숙이는 거북목 자세는 상부 경추의 후두하근을 강하게 긴장시켜 척추동맥을 압박하고 뇌 혈류 공급을 저하시켜 어지럼증과 비현실감을 유발합니다. 장시간 컴퓨터 작업 시에는 모니터 상단을 눈높이보다 약간 낮게 배치하여 목의 과신전을 줄이고, 주기적으로 어깨와 견갑골을 부드럽게 돌려주는 체조가 유익합니다.\n\n이를 예방하기 위해서는 45분 작업 후 10분간 먼 곳을 바라보며 안구 피로를 풀고, 턱을 가볍게 당기는 경추 스트레칭을 생활화하는 것이 권장됩니다. 잠들기 최소 1시간 전에는 스마트폰 사용을 멀리하여 송과체의 멜라토닌 생성을 보호해야 합니다. 해아림한의원에서는 상부 경추의 구조적 압박을 해소하고 후두하 신경 긴장을 풀어주는 두개천골요법과 한방 추나요법을 통해 뇌 순환을 개선하며, 눈과 뇌의 피로를 씻어내는 맞춤 한약으로 시각적 자극에 대한 신경계 저항력을 높여드립니다.\n\n[공황장애 정밀검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
              "isAutoPublished": true,
              "isCustom": true,
              "createdAt": 1790995200000,
              "updatedAt": 1790995200000,
              "poolId": "faq-ext-7"
          },
          {
              "id": "faq-auto-20261001-ext6",
              "category": "음주/숙취",
              "author": "해아림한의원",
              "date": "2026.10.01",
              "views": 380,
              "image": "/images/faq/faq_15_alcohol.svg",
              "title": "술 마신 다음 날 유독 심장이 뛰고 불안해요 - 숙취성 공황의 원인과 예방 관리",
              "summary": "알코올 해독 과정의 아세트알데히드 독성과 GABA 결핍이 부르는 반동성 패닉 기전.",
              "content": "술자리에서는 긴장이 풀리고 편안하던 기분이 다음 날 아침 눈을 뜨자마자 가슴이 쿵쾅거리고 숨이 막히며 극도의 공포로 뒤바뀌는 현상을 '숙취 공황(Hangxiety)'이라고 부릅니다. 이는 단순한 기분 탓이 아니라 알코올이 체내에서 분해되는 대사 과정에서 일어나는 매우 뚜렷한 신경생리학적 변화 때문입니다.\n\n음주 중에는 알코올이 뇌의 진정성 신경전달물질인 GABA 수용체를 인위적으로 자극하여 일시적인 이완을 제공합니다. 하지만 수면을 취하는 동안 알코올이 간에서 분해되면서 혈중 알코올 농도가 급격히 떨어지면, 억제되었던 흥분성 신경전달물질인 글루타메이트가 폭발적으로 반동 분비됩니다. 여기에 알코올 대사 산물인 아세트알데히드의 독성, 이뇨 작용으로 인한 탈수와 전해질 손실, 혈당 저하가 한꺼번에 맞물려 심장이 마구 뛰고 혈압이 요동치는 교감신경 폭풍이 형성됩니다. 주변 환경을 어둡고 조용하게 유지하면서 실내 환기를 시켜 신선한 산소를 공급하고, 깊은 복식호흡을 5분 이상 유지하면 교감신경의 흥분을 한결 빠르게 가라앉힐 수 있습니다.\n\n공황장애 환자에게 음주는 이미 취약해진 자율신경계에 기름을 붓는 것과 다름없으므로 회복기에는 금주를 실천하는 것이 필수적입니다. 숙취 증상이 올라올 때는 미온수와 전해질을 충분히 보충하고 조용한 방에 누워 안정을 취해야 합니다. 가슴에 손을 얹고 호흡을 천천히 가다듬으면 신체 경보가 점차 누그러집니다. 충분한 수면과 휴식을 통해 간 기능을 보호하는 것이 중요합니다. 해아림한의원에서는 간의 해독 대사를 촉진하고 뇌신경 흥분을 진정시키는 한약 처방을 통해 무너진 체내 항상성을 정상 궤도로 되돌려 드립니다.\n\n[공황장애 정밀검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
              "isAutoPublished": true,
              "isCustom": true,
              "createdAt": 1790822400000,
              "updatedAt": 1790822400000,
              "poolId": "faq-ext-6"
          },
          {
              "id": "faq-auto-20260929-ext5",
              "category": "감별 진단",
              "author": "해아림한의원",
              "date": "2026.09.29",
              "views": 410,
              "image": "/images/faq/faq_27_chestpain.svg",
              "title": "공황장애와 심장병 차이는 무엇인가요? - 가슴 통증과 부정맥 감별 진단",
              "summary": "심장이 한 박자 덜컹 내려앉는 기외수축과 공황발작 빈맥의 심장내과적 감별 진단.",
              "content": "일상생활 중 갑자기 가슴속에서 심장이 '덜컹' 하고 아래로 뚝 떨어지거나 맥박이 한 박자 건너뛰는 듯한 섬뜩한 느낌을 경험하는 분들이 많습니다. 의학적으로는 이를 조기 심실수축(PVC) 혹은 기외수축이라고 부르며, 정상적인 심장 구조를 가진 건강한 성인에게도 피로나 스트레스, 수면 부족 시 하루 수십 회에서 수백 회까지 비교적 흔하게 나타나는 양성 부정맥의 일종입니다.\n\n문제는 공황장애 환자분들의 경우 심장 감각에 대한 내수용 감각(Interoceptive Awareness)이 지나치게 과민해져 있다는 점입니다. 일반인이라면 대수롭지 않게 넘길 한 번의 덜컹거림을 심장마비나 돌연사의 전조로 강하게 확대 해석하면서, 이로 인해 교감신경이 급발진하여 걷잡을 수 없는 공황발작으로 번지게 됩니다. 심장이 쿵 내려앉는 순간 즉시 맥박을 재거나 스마트워치에 집착하는 행동은 오히려 교감신경을 자극하므로, 시선을 외부 활동으로 돌리는 의식적 노력이 바람직합니다.\n\n24시간 홀터 심전도와 심장초음파 검사에서 기질적 심장 질환이 배제되었다면, 이는 심장 자체가 병든 것이 아니라 자율신경계 과흥분이 심근 신경을 자극하여 나타나는 기능적 현상입니다. 카페인과 니코틴, 알코올을 피하고 수면 리듬을 일정하게 유지하는 것만으로도 기외수축의 빈도는 현저히 줄어듭니다. 한의학에서는 심장의 음혈(陰血)을 보충하고 허열을 가라앉히는 자감초탕이나 천왕보심단 가감 처방을 통해 심근의 민감도를 낮추어 줍니다. 또한 흉곽 호흡근의 긴장을 풀어주는 침 치료를 병행하여 가슴 두근거림에 대한 불안의 고리를 끊어낼 수 있도록 돕습니다.\n\n[공황장애 정밀검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
              "isAutoPublished": true,
              "isCustom": true,
              "createdAt": 1790649600000,
              "updatedAt": 1790649600000,
              "poolId": "faq-ext-5"
          },
          {
              "id": "faq-auto-20260927-ext3",
              "category": "전조 증상",
              "author": "해아림한의원",
              "date": "2026.09.27",
              "views": 445,
              "image": "/images/faq/faq_10_sweat.svg",
              "title": "갑작스러운 한기와 오한으로 이가 덜덜 떨리는데 이것도 공황발작의 전조 증상인가요?",
              "summary": "시상하부 체온 조절 중추의 일시적 혼선과 말초 혈관 수축으로 인한 급성 오한 반응 분석.",
              "content": "공황발작이라고 하면 대개 식은땀이나 열감, 가슴 두근거림만을 떠올리기 쉽지만, 실제 임상에서는 한겨울에 얼음물에 들어간 것처럼 온몸에 닭살이 돋고 이가 딱딱 부딪힐 정도로 심한 한기(Chills)와 오한을 호소하시는 분들이 적지 않습니다. 이는 극심한 불안과 스트레스로 인해 교감신경이 폭주하면서 피부와 사지 말단의 모세혈관이 급격히 수축하여 체표 온도가 떨어지기 때문에 나타나는 생리적 현상입니다.\n\n동시에 뇌 시상하부의 체온 조절 중추가 자율신경의 급변에 일시적으로 혼선을 빚으면서, 체온이 실제로 크게 떨어지지 않았음에도 뇌가 신체를 춥다고 인식하여 근육을 격렬하게 수축시키는 떨림 반응을 유도합니다. 이러한 신체 떨림은 질환이 악화된 신호라기보다는 교감신경 과항진에 따른 일시적 신경 반응이므로 과도한 공포를 가질 필요는 없습니다. 몸이 심하게 떨릴 때는 억지로 참으려 애쓰기보다 '자율신경이 균형을 잡기 위해 반응하는 중'이라고 담담하게 받아들이는 인지적 전환이 증상 완화에 큰 도움이 됩니다.\n\n오한이 찾아왔을 때는 당황하지 마시고 따뜻한 물을 천천히 섭취하며 얇은 담요를 둘러 체온을 보온해 주는 것이 좋습니다. 아울러 길게 내쉬는 복식호흡을 통해 긴장된 말초 혈류를 안정시켜 주는 관리가 권장됩니다. 평소 손발이 차고 추위를 잘 타는 경향이 있다면 찬 음식 섭취를 줄이고 족욕을 생활화하는 것이 도움이 됩니다. 한의학에서는 상열하한(上熱下寒)의 체내 기혈 불균형을 다스리는 계지탕이나 사역탕 계열의 가감 처방을 적용하여 자율신경계 조절력을 강화하고 체온 조절 기능을 원활하게 회복하도록 돕습니다.\n\n[공황장애 정밀검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
              "isAutoPublished": true,
              "isCustom": true,
              "createdAt": 1790476800000,
              "updatedAt": 1790476800000,
              "poolId": "faq-ext-3"
          },
          {
              "id": "faq-auto-20260925-ext2",
              "category": "온열 주의",
              "author": "해아림한의원",
              "date": "2026.09.25",
              "views": 480,
              "image": "/images/faq/faq_3_thermal.svg",
              "title": "공황장애 환자는 사우나, 찜질방, 뜨거운 온천욕을 피해야 하나요? 가슴이 답답해집니다.",
              "summary": "체온 상승과 말초 혈관 확장이 유발하는 심박수 급상승과 미주신경 반사성 어지럼증 해설.",
              "content": "사우나나 찜질방처럼 40도를 웃도는 고온 다습한 밀폐 공간에 들어가면 인체는 체온을 낮추기 위해 말초 혈관을 급격하게 확장시킵니다. 이 과정에서 혈압이 일시적으로 떨어지며, 심장은 뇌와 중요 장기로 혈액을 신속히 공급하기 위해 분당 심박수를 빠르게 끌어올리게 됩니다. 공황장애를 겪는 분들의 예민해진 뇌 편도체는 이러한 뜨거운 열기와 빠른 심장 박동을 위험 신호로 오인하여 급격한 답답함과 탈출 충동을 유발할 수 있습니다.\n\n또한 밀폐된 공간에서 숨이 차오르고 땀이 비 오듯 쏟아지면 탈수 증상과 전해질 불균형이 동반되어 가슴 답답함이나 어지럼증이 한층 가중됩니다. 특히 급성기 환자분들은 사우나 문을 열고 즉시 나가지 못할 것 같다는 폐소공포와 예기불안이 겹치면서 공황 증상으로 이어지는 경우가 많습니다. 가슴이 답답해질 때는 즉시 밖으로 나와 시원한 공기를 쐬며 심호흡을 하시고, 옷차림을 가볍게 하여 체온 발산을 유도하는 대처가 권장됩니다.\n\n따라서 증상이 안정될 때까지는 고온 사우나나 장시간 찜질을 자제하시는 것이 안전합니다. 목욕을 원하실 때는 37~38도 정도의 미온수에서 10~15분 이내로 가볍게 반신욕을 시행하시는 것이 부교감신경 활성화와 자율신경 안정에 훨씬 유익합니다. 목욕 후에는 시원한 물을 충분히 섭취해 체수분을 보충해 주셔야 합니다. 안전한 생활 관리를 실천하는 것이 평온한 일상을 지키는 든든한 밑거름입니다. 해아림한의원에서는 체내 열감의 상충(上衝)을 가라앉히고 심포(心包)의 긴장을 완화하는 맞춤 한약과 경혈 자극 치료를 통해 환경 변화에 흔들리지 않는 신체 조절력을 길러드립니다.\n\n[공황장애 정밀검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
              "isAutoPublished": true,
              "isCustom": true,
              "createdAt": 1790304000000,
              "updatedAt": 1790304000000,
              "poolId": "faq-ext-2"
          },
          {
              "id": "faq-auto-20260923-ext4",
              "category": "운동 관리",
              "author": "해아림한의원",
              "date": "2026.09.23",
              "views": 510,
              "image": "/images/faq/faq_12_lifestyle.svg",
              "title": "공황장애 운동해도 되나요? 헬스나 유산소 운동 시 심장이 빨리 뛰어 불안해요",
              "summary": "운동으로 인한 생리적 빈맥과 공황발작의 차이점 및 안전한 단계별 심박수 적응 훈련법.",
              "content": "러닝머신을 뛰거나 근력 운동을 할 때 심장이 빠르게 박동하고 호흡이 가빠지면, 공황장애 환자분들의 뇌는 이를 과거의 발작 기억과 결부시켜 '다시 위험이 시작되었다'고 잘못 판단하는 경향이 있습니다. 그 결과 운동 자체를 기피하게 되고, 신체 활동량이 줄어들면서 심폐 지구력과 자율신경계 조절 탄력성이 오히려 더 떨어지는 악순환에 놓이게 됩니다.\n\n그러나 적절한 유산소 운동은 뇌 유래 신경영양인자(BDNF) 생성을 촉진하고 신경 전달 물질의 균형을 잡아주어 장기적인 회복에 매우 중요한 역할을 합니다. 운동 시 심장이 뛰는 것은 근육에 산소를 공급하기 위한 지극히 건강하고 정상적인 생리 반응입니다. 핵심은 심장의 뜀박질에 대한 인지적 공포를 줄여나가는 '단계적 심박수 적응(Desensitization)'입니다. 운동 강도는 옆 사람과 편안하게 대화를 나눌 수 있는 수준을 유지하는 것이 교감신경의 과도한 폭주를 막고 부교감신경의 활성화를 돕는 핵심 요령입니다.\n\n처음부터 과격한 인터벌 트레이닝이나 무거운 웨이트 트레이닝을 하기보다는, 평지를 편안하게 걷는 가벼운 산책부터 시작하여 점진적으로 빠른 걸음 20분 수준으로 운동량을 늘려가는 방법이 권장됩니다. 운동 후에는 가벼운 스트레칭과 복식호흡으로 부교감신경을 유도하는 마무리 습관이 좋습니다. 운동 중 두근거림이 느껴질 때는 '이것은 건강한 운동 자극이다'라고 스스로에게 되뇌어 주는 인지 재구성이 큰 힘이 됩니다. 해아림한의원에서는 환자분의 체력과 자율신경 검사 결과를 면밀히 평가하여, 무리 없는 맞춤형 운동 가이드와 신경 안정 한약 처방을 함께 제시해 드립니다.\n\n[공황장애 정밀검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
              "isAutoPublished": true,
              "isCustom": true,
              "createdAt": 1790131200000,
              "updatedAt": 1790131200000,
              "poolId": "faq-ext-4"
          },
          {
              "id": "faq-auto-20260920-ext1",
              "category": "약물 관리",
              "author": "해아림한의원",
              "date": "2026.09.20",
              "views": 530,
              "image": "/images/faq/faq_17_weight.svg",
              "title": "공황장애 약 먹고 살이 찌거나 낮에 너무 졸린데 부작용인가요? - 항우울제·신경안정제 관리",
              "summary": "항우울제 및 항불안제 복용 중 나타나는 대사 저하, 주간 졸림증의 원인과 안전한 관리 방안.",
              "content": "정신건강의학과에서 처방받는 SSRI(선택적 세로토닌 재흡수 억제제)는 뇌 시냅스 내 세로토닌 농도를 조절하여 불안을 완화하지만, 5-HT2C 수용체에 작용하면서 식욕 조절 중추를 자극하고 인슐린 저항성을 유발해 체중 증가로 이어질 수 있습니다. 또한 벤조디아제핀계 항불안제는 중추신경계의 GABA 수용체를 강화하여 급성 불안을 신속하게 가라앉히는 반면, 주간 진정 작용과 나른함, 집중력 저하 같은 무기력감을 동반하기 쉽습니다.\n\n이러한 현상은 약물 복용 초기나 용량 조절 과정에서 비교적 흔히 관찰되는 반응입니다. 간혹 불편감 때문에 환자 임의로 복용을 갑자기 중단하는 경우가 있는데, 이는 급격한 반동성 불안이나 자율신경계 과각성을 초래할 수 있어 주의가 필요합니다. 주간 졸림증이 심한 경우에는 의료진과 상의하여 복용 시간대를 취침 전으로 변경하거나 서서히 단계적인 조절을 진행하는 것이 바람직합니다. 조급한 마음에 혼자서 판단하기보다는 정기적인 상담을 통해 몸의 반응을 면밀히 관찰하며 대처하는 지혜가 요구됩니다. 일상에서는 낮 시간 가벼운 햇볕 쬐기와 규칙적인 산책을 병행하면 세로토닌 활성화에 도움이 됩니다.\n\n한의학에서는 비위(脾胃)에 정체된 수습(水濕)과 담음(痰飲)을 배출시키는 보비조습(補脾燥濕) 계열 처방과 뇌 혈류 순환을 돕는 침구 요법을 병행합니다. 이를 통해 양약의 안정 효과는 보존하면서도 대사 기능 저하와 주간 피로감을 완충하는 데 도움을 드립니다. 아울러 상부 경추와 뇌막의 긴장을 이완하는 두개천골요법을 병행하면 자율신경계의 자생력을 북돋워 장기적인 약물 의존 부담을 덜어가는 데 기여할 수 있습니다.\n\n[공황장애 정밀검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
              "isAutoPublished": true,
              "isCustom": true,
              "createdAt": 1789872000000,
              "updatedAt": 1789872000000,
              "poolId": "faq-ext-1"
          },
          {
              "id": "faq-auto-20260918-ext10",
              "category": "양한방 병용",
              "author": "해아림한의원",
              "date": "2026.09.18",
              "views": 550,
              "image": "/images/faq/faq_8_tapering.svg",
              "title": "공황장애 정신과 약과 한약을 함께 먹어도 안전한가요? - 한양방 병용과 안전한 감약",
              "summary": "양약과 한약의 상호작용 및 1시간 시간차 복용 원칙, 정기 간기능 검사를 통한 안전성 입증.",
              "content": "공황장애 치료를 시작할 때 기존에 정신건강의학과에서 처방받아 복용 중이던 항우울제나 신경안정제를 복용하면서 한약 치료를 함께 병행해도 되는지, 혹시 간이나 신장에 무리가 가지는 않을지 염려하시는 분들이 많습니다. 결론부터 말씀드리면, 양약과 한약은 인체 내에서 작용하는 경로와 기전이 상이하므로 올바른 복약 지도를 준수한다면 안전하게 병용 치료가 가능합니다.\n\n오히려 치료 초기에는 양약으로 급성기 신체 불안과 심한 공황발작을 완화하면서, 한약 치료를 통해 뇌 신경계의 자생력을 강화하고 자율신경 불균형을 교정하는 '한양방 병용 치료'가 매우 유용한 시너지 효과를 냅니다. 특히 추후 양약의 복용량을 조금씩 줄여나가는 감약(테이퍼링) 과정에서 발생하기 쉬운 반동성 불안이나 금단 증상을 한약이 든든하게 완충해 주는 방어막 역할을 수행합니다. 한의학과 양의학의 장점을 조화롭게 결합한 통합적 관리는 약물 내성과 의존성에 대한 불안을 해소하고, 환자 스스로 신경계를 다스릴 수 있는 자생적 힘을 키워주는 데 훌륭한 길잡이가 됩니다.\n\n안전한 상호 흡수를 위해 양약과 한약은 위장관 내 간섭을 피할 수 있도록 대략 1시간 정도의 시간 간격을 두고 복용하시는 원칙을 권장합니다. 아울러 처방 전 복용 중인 모든 약물 내역을 의료진에게 정확히 고지하는 것이 중요합니다. 해아림한의원에서 처방하는 모든 규격품 의약품용 한약재는 식품의약품안전처(KFDA)의 엄격한 hGMP 품질 검사를 통과한 정품만을 사용하며, 정기적인 간기능 및 신장기능 혈액검사를 병행하여 환자분들이 걱정 없이 편안하게 치료에 집중하실 수 있도록 철저한 안전 관리를 제공합니다.\n\n[공황장애 정밀검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
              "isAutoPublished": true,
              "isCustom": true,
              "createdAt": 1789699200000,
              "updatedAt": 1789699200000,
              "poolId": "faq-ext-10"
          },
          {
              "id": "faq-auto-20260916-ext8",
              "category": "안전 팩트",
              "author": "해아림한의원",
              "date": "2026.09.16",
              "views": 580,
              "image": "/images/faq/faq_25_safety.svg",
              "title": "어지럽고 쓰러질 것 같은데 실제로 기절하거나 죽을 수도 있나요? - 안전 팩트 체크",
              "summary": "실신을 유발하는 저혈압과 공황발작 고혈압의 의학적 모순 분석 및 실신 공포의 허구성 규명.",
              "content": "공황발작을 겪는 분들이 가장 절박하게 토로하는 두려움 중 하나는 '머리가 너무 어지러운데 이러다 기절해서 뇌를 다치거나 죽는 것이 아닐까' 하는 생각입니다. 발작 순간 주변 세상이 아득해지고 땅이 꺼지는 듯한 느낌이 들기 때문에 곧 의식을 잃을 것 같은 공포에 휩싸이게 됩니다. 그러나 인체 생리학적 관점에서 볼 때 전형적인 공황발작 중에 사람이 실제로 실신(기절)할 가능성은 거의 없습니다.\n\n사람이 기절하는 의학적 기전은 혈압이 급격히 떨어지거나 심박수가 저하되어 뇌로 올라가는 혈류량이 순간적으로 부족해지는 상태, 즉 뇌 허혈 때문입니다. 반면 공황발작이 일어나면 체내에서는 아드레날린이 대량 분비되어 심장이 평소보다 훨씬 강하고 빠르게 박동하며 전신 혈압이 일시적으로 상승합니다. 즉, 뇌로 가는 혈액이 부족하기는커녕 강력하게 공급되고 있는 상태이므로 의식을 잃는 기절 반응은 생리학적으로 일어나기 어렵습니다. 스스로에게 '내 심장은 건강하며 뇌혈류는 안전하게 유지되고 있다'는 긍정적 자기 확신을 반복해서 전달하면 편도체의 비상 경보가 차분하게 진정될 수 있습니다.\n\n어지럽고 붕 뜨는 감각은 과호흡으로 인해 뇌혈관이 일시적으로 수축하거나 긴장으로 인한 전정신경계 감각 과민에 불과합니다. 따라서 발작이 와도 기절하지 않는다는 사실을 기억하시고, 벽에 등을 기대고 앉아 천천히 호흡을 고르는 것이 안전합니다. 주변의 단단한 물체를 손으로 만지며 감각을 현실에 두는 그라운딩도 유용합니다. 해아림한의원에서는 객관적인 자율신경 검사를 통해 뇌혈류 안정성을 확인해 드리고, 신경계를 든든히 보강하는 한방 치료로 어지럼증에 대한 불안을 덜어드립니다.\n\n[공황장애 정밀검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
              "isAutoPublished": true,
              "isCustom": true,
              "createdAt": 1789526400000,
              "updatedAt": 1789526400000,
              "poolId": "faq-ext-8"
          },
          {
              "id": "faq-auto-22-1788884900000",
              "category": "증상 확인",
              "author": "해아림한의원",
              "date": "2026.09.10",
              "views": 2980,
              "image": "/images/faq/faq_1_exam.svg",
              "title": "갑자기 심장이 뛰고 숨이 막히는데 공황장애일까요? - 검사에서는 정상인데 나타나는 원인",
              "summary": "심장내과나 응급실 검사상 정상이어도 갑작스러운 심계항진과 호흡곤란이 오는 신경성 공황발작의 원인과 감별법",
              "content": "갑자기 심장이 터질 듯 뛰고 숨이 턱 막히는 증상은 공황장애의 가장 대표적인 신체화 반응입니다. 응급실이나 심장내과에서 심전도, 피검사, 엑스레이 검사를 받아도 '이상 없음' 판정이 나오는 이유는 심장 자체의 기질적 이상이 아니라, 뇌 편도체와 자율신경계가 과열되어 비상 사이렌을 잘못 울린 기능성 신경계 과항진이기 때문입니다.\n\n이러한 증상은 위험한 심장마비나 질식이 아니므로 생명에 지장을 주지 않습니다. 뇌간의 호흡 조절 센서가 과도하게 민감해지면서 교감신경을 급격히 자극하여 심박수를 급증시키고 흉곽 근육을 수축시켜 숨이 막히는 착각을 유발하는 생리적 반응입니다.\n\n갑작스러운 두근거림과 질식감이 찾아왔을 때 실천할 수 있는 대처법입니다.\n1. 코로 4초간 천천히 숨을 들이마시고, 입술을 오므려 6초간 길게 내쉬는 복식호흡을 3분간 이어갑니다.\n2. '내 심장은 건강하며, 이것은 뇌의 일시적인 가짜 경보일 뿐 10~15분 내에 가라앉는다'는 의학적 사실을 되새깁니다.\n3. 차가운 물 한 모금을 입안에 머금었다가 천천히 삼키며 미주신경을 자극해 심박을 진정시킵니다.\n\n해아림한의원에서는 과열된 심장과 뇌신경을 진정시키는 자율신경 맞춤 한약(시호가용골모려탕, 영계출감탕 등)과 미주신경을 안정시키는 약침, 두개천골요법(CST)을 통해 예민해진 자율신경의 균형을 되찾아드립니다. 서울(강남·노원), 대구, 부산, 인천, 대전, 수원, 울산, 광주 등 전국 16개 네트워크 해아림한의원에서 체계적인 진료를 받으실 수 있습니다.\n\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)"
          },
          {
              "id": "faq-auto-21-1788884890000",
              "category": "응급 대처",
              "author": "해아림한의원",
              "date": "2026.09.08",
              "views": 3120,
              "image": "/images/faq/faq_25_safety.svg",
              "title": "숨이 막히는 느낌과 죽을 것 같은 공포: 공황발작 시 3분 응급 대처법",
              "summary": "급성 발작 시 3분 안에 뇌 편도체의 비상 경보를 끄고 심신을 안정시키는 4-6 복식호흡과 5-4-3-2-1 그라운딩 기법",
              "content": "공황발작이 시작되어 죽을 것 같은 극심한 공포와 숨막힘이 밀려올 때는 즉각적인 '4-6 복식호흡'과 '5-4-3-2-1 그라운딩(감각 접지)'을 시행하면 3분 안에 신체 경보를 가라앉힐 수 있습니다. 공황발작은 교감신경의 일시적 폭주로 나타나는 현상이며, 어떤 경우에도 질식하거나 심장이 멎지 않으므로 안심하셔도 좋습니다.\n\n발작 발생 시 뇌의 공포 회로를 차단하는 3단계 실전 매뉴얼입니다.\n1. 4-6 구순 호흡: 가슴으로 얕게 몰아쉬는 숨을 멈추고, 배를 부풀리며 코로 4초 들이마신 후 촛불을 끄듯 입술을 모아 6초간 가늘고 길게 내쉽니다. 호흡을 길게 내쉬는 순간 부교감신경 브레이크가 작동합니다.\n2. 5-4-3-2-1 감각 접지: 눈에 보이는 사물 5가지 이름 대기, 손으로 만져지는 촉감 4가지 느끼기, 들리는 소리 3가지 집중하기, 맡을 수 있는 냄새 2가지 찾기, 입안의 맛 1가지 느끼기로 공포에 사로잡힌 뇌의 주의를 현실 감각으로 되돌립니다.\n3. 찬물 자극: 찬물로 세안을 하거나 시원한 물을 천천히 씹듯이 마시면 잠수 반사(Diving Reflex)가 유도되어 분당 심박수가 즉각 떨어집니다.\n\n평소 이러한 응급 기법을 훈련해 두면 예기불안을 줄이는 데 큰 도움이 됩니다. 해아림한의원에서는 응급 상황에서도 당황하지 않도록 1:1 감각 이완 훈련과 자율신경 조절 한약 처방을 병행하여 공황의 불안 회로를 체계적으로 다스려드립니다. 대구, 서울, 부산 등 전국 16개 지점 어디서나 편안한 진료를 만나실 수 있습니다.\n\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)"
          },
          {
              "id": "faq-auto-20-1788884880000",
              "category": "치료 방법",
              "author": "해아림한의원",
              "date": "2026.09.05",
              "views": 2650,
              "image": "/images/faq/faq_8_tapering.svg",
              "title": "공황장애 약 꼭 먹어야 하나요? 약 없이 치료할 수 있나요? - 항불안제 줄여가는 방법",
              "summary": "신경안정제 복용 부담과 부작용 걱정을 덜고 자율신경의 자생력을 키우는 한방 치료와 안전한 감약(테이퍼링) 전략",
              "content": "공황장애 진단을 받았다고 해서 평생 정신과 양약을 복용해야 하는 것은 아닙니다. 급성기 발작이 너무 심할 때는 신경안정제를 통해 신체적 고통을 일시적으로 낮추는 것이 도움이 될 수 있으나, 약물에만 의존하기보다는 뇌신경계가 스스로 자율신경을 조절할 수 있는 자생력을 키우는 치료를 병행하는 것이 바람직합니다.\n\n항불안제나 항우울제를 복용 중인 환자분들이 약물 의존과 졸림, 무기력 등 부작용 부담을 덜고 회복하는 원칙입니다.\n1. 임의 중단 금지: 양약을 갑자기 한 번에 끊으면 심한 반동 불안이나 불면, 식은땀 등 금단 증상이 발생할 수 있으므로 단계별 감약(테이퍼링)을 거쳐야 합니다.\n2. 한양방 병용의 완충 작용: 신경 안정과 뇌혈류를 개선하는 맞춤 한약을 병용하면서 뇌의 저항력을 기르면, 양약 용량을 점진적으로 줄여갈 때 생기는 반동 증상을 부드럽게 완충할 수 있습니다.\n3. 비약물적 조절력 강화: 이완 요법과 인지 행동 훈련을 병행하여 약물 없이도 일상 스트레스를 조절할 수 있는 심신의 맷집을 길러줍니다.\n\n해아림한의원에서는 환자분의 복약 상태와 증상 경과를 정밀하게 평가하여, 몸에 무리를 주지 않고 신경계 균형을 되찾아 약물 의존도를 단계적으로 낮출 수 있도록 돕습니다. 서울 강남·노원, 대구, 부산, 대전, 인천 등 전국 16개 네트워크에서 안심 진료를 지원합니다.\n\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)"
          },
          {
              "id": "faq-auto-19-1788884870000",
              "category": "일상 극복",
              "author": "해아림한의원",
              "date": "2026.09.03",
              "views": 2840,
              "image": "/images/faq/faq_2_panic.svg",
              "title": "공황장애 지하철 못 타겠어요 - 대중교통이나 갇힌 공간에서 숨 막힐 때 대처법",
              "summary": "지하철, 버스, 엘리베이터 등 밀폐 공간에서 급증하는 광장공포증의 원인과 안전한 탑승을 돕는 단계별 훈련법",
              "content": "지하철이나 만원 버스, 엘리베이터에 탔을 때 숨이 턱 막히고 문을 부수고 뛰쳐나가고 싶은 충동이 드는 것은 공황장애 환자의 약 50% 이상이 겪는 전형적인 광장공포증 증상입니다. 이는 갇힌 공간 자체의 위험 때문이 아니라, '이곳에서 발작이 오면 즉시 탈출할 수 없고 도움을 받지 못할 것'이라는 뇌 편도체의 착각 때문입니다.\n\n대중교통 탑승 시 불안을 잠재우는 실천 수칙입니다.\n1. 통로 쪽 좌석 및 출입문 근처 확보: 언제든 내릴 수 있다는 심리적 안전지대(Safe Zone)를 확보하면 편도체의 과잉 경보가 크게 완화됩니다.\n2. 시각 초점 분산: 흔들리는 차창 밖이나 스마트폰의 현란한 영상 대신, 이어폰으로 편안한 음악을 듣거나 먼 곳의 고정된 점을 응시합니다.\n3. 점진적 탑승 훈련: 처음부터 긴 구간을 타기보다, 1~2정거장만 타고 내려서 안정을 취한 뒤 점차 탑승 거리를 늘려가는 체계적 탈감작 훈련을 진행합니다.\n\n탈출 불가능성에 대한 공포는 뇌 신경계의 예민도를 안정시키면 자연스럽게 줄어듭니다. 해아림한의원에서는 뇌신경 전달물질의 균형을 맞추는 안신(安神) 한약과 함께 자율신경 반응을 안정시키는 침구 치료를 통해 두려움 없이 대중교통을 이용하실 수 있도록 돕고 있습니다. 전국 16개 지점에서 가까운 해아림을 찾으실 수 있습니다.\n\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)"
          },
          {
              "id": "faq-auto-18-1788884860000",
              "category": "원인/수면",
              "author": "해아림한의원",
              "date": "2026.09.01",
              "views": 2470,
              "image": "/images/faq/faq_5_sleep.svg",
              "title": "자다가 갑자기 숨이 턱 막히고 심장이 빨리 뛰어요 - 수면 부족과 야간 공황 원인",
              "summary": "깊은 수면 중 불시에 나타나는 야간 공황발작(Nocturnal Panic)의 뇌간 메커니즘과 편안한 숙면을 돕는 치료법",
              "content": "편안히 잠을 자던 중 새벽 2~3시경에 갑자기 숨이 턱 막히고 심장이 쿵쾅거리며 죽을 것 같은 공포로 벌떡 깨어나는 현상을 '야간 공황발작(Nocturnal Panic)'이라고 부릅니다. 이는 악몽을 꾸는 렘(REM)수면 상태가 아니라, 오히려 깊은 비렘(NREM) 수면 단계에서 뇌간의 호흡 감각 중추가 미세한 이산화탄소 상승을 질식 위험으로 착각해 교감신경을 번쩍 깨우기 때문입니다.\n\n수면 부족과 만성 피로는 야간 공황을 유발하는 주요 촉발 요인입니다. 몸이 극도로 피로하면 자율신경계의 조율 능력이 떨어져 수면 중에도 혈관과 호흡근의 긴장도가 높아집니다.\n\n야간 공황을 예방하기 위한 숙면 가이드입니다.\n1. 침실 환경 최적화: 실내 온도를 20~22도로 선선하게 유지하고, 침구류를 가볍게 하여 흉부 압박을 줄입니다.\n2. 취침 2시간 전 디지털 디톡스: 스마트폰과 모니터의 블루라이트를 차단하여 멜라토닌 분비와 부교감신경 이완을 돕습니다.\n3. 온수 복부 찜질: 잠들기 전 아랫배를 따뜻하게 찜질하면 하초로 혈류가 모이면서 뇌의 상열감이 가라앉습니다.\n\n해아림한의원에서는 심장과 뇌를 안정시키는 산조인, 천왕보심단 계열 맞춤 처방을 통해 야간 수면 뇌파를 안정시키고 깊은 잠을 이룰 수 있도록 치료합니다. 대구, 서울, 부산 등 전국 16개 지점에서 숙면과 일상의 평온을 되찾아드립니다.\n\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)"
          },
          {
              "id": "faq-auto-17-1788884850000",
              "category": "일상 극복",
              "author": "해아림한의원",
              "date": "2026.08.29",
              "views": 2790,
              "image": "/images/faq/faq_20_morning.svg",
              "title": "공황장애 운전해도 되나요? - 운전 중 갑자기 불안해지고 숨 막힐 때 대처법",
              "summary": "고속도로, 터널, 교량 주행 시 갑자기 핸들을 놓칠 것 같은 운전 공황의 신경생리적 이유와 안전 운전 극복 가이드",
              "content": "공황장애 환자분들이 가장 많이 질문하시는 것 중 하나가 '운전을 해도 안전한가'입니다. 공황장애가 있다고 해서 운전을 무조건 포기해야 하는 것은 아닙니다. 다만 고속도로 정체 구간, 긴 터널, 높은 다리 위처럼 '즉시 차를 갓길에 세울 수 없다'는 압박감이 드는 도로에서는 급성 운전 공황이 찾아올 수 있으므로 주의 깊은 단계적 관리가 필요합니다.\n\n운전 중 갑자기 가슴이 답답하고 불안이 치솟을 때의 행동 수칙입니다.\n1. 비상등 켜고 최하위 차로 이동: 속도를 무리하게 올리지 말고 비상등을 켠 채 가장 바깥 차로로 주행하며, 필요시 갓길이나 휴게소에 정차합니다.\n2. 창문 열고 환기: 시원한 바깥바람을 쐬며 산소를 환기하고, 라디오를 틀어 차분한 목소리에 귀를 기울여 감각을 분산합니다.\n3. 심호흡과 발바닥 접지: 운전대를 너무 꽉 쥐지 말고 어깨의 힘을 뺀 뒤, 코로 4초 들이마시고 입으로 6초 내쉬며 발바닥이 페달과 차량 바닥에 닿아 있는 안정된 감각을 확인합니다.\n\n운전 공황은 시각적 폐쇄감과 탈출 불안이 결합한 증상으로, 신경계의 긴장을 낮추면 편안한 주행이 가능해집니다. 해아림한의원에서는 뇌신경계 긴장을 풀어주는 맞춤 한약과 두개경추 교정 치료로 운전 중 돌발 불안을 낮추어 드립니다. 서울, 대구, 부산 등 전국 16개 지점에서 안전한 일상 복귀를 응원합니다.\n\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)"
          },
          {
              "id": "faq-auto-16-1788884840000",
              "category": "증상 대처",
              "author": "해아림한의원",
              "date": "2026.08.26",
              "views": 2910,
              "image": "/images/faq/faq_7_brainfog.svg",
              "title": "갑자기 숨이 안 쉬어지고 손발이 저리고 떨려요 - 과호흡 증상과 올바른 호흡법",
              "summary": "가슴이 조이고 손발이 찌릿하게 마비되는 과호흡 증후군의 원인과 위험한 종이봉투 대신 안전한 4-6 구순 호흡법",
              "content": "숨이 가빠지면서 손발 끝이 찌릿하게 저리고 입술 주위가 마비되며 경련이 일어날 것 같은 증상은 공황발작 시 흔히 동반되는 '과호흡 증후군'입니다. 숨이 부족하다고 느껴 가슴으로 헐떡거리며 숨을 너무 빠르게 몰아쉬면, 혈액 속 이산화탄소가 과도하게 빠져나가 혈액이 알칼리화(호흡성 알칼리증)됩니다. 이로 인해 뇌와 손발 말초 혈관이 수축하여 저림과 마비감이 나타나는 것입니다.\n\n과호흡 증상이 나타났을 때 기억해야 할 핵심 원칙입니다.\n1. 종이봉투 호흡의 주의점: 과거에 쓰이던 종이봉투 호흡은 체내 산소 농도를 급격히 떨어뜨려 저산소증을 유발할 위험이 있어 최근에는 권장되지 않습니다.\n2. 안전한 4-6 구순 복식호흡: 들이마시는 숨을 줄이고 내쉬는 숨을 길게 가져가야 합니다. 코로 4초간 부드럽게 들이마시고, 입술을 둥글게 모아 6초 이상 천천히 길게 내쉬면 체내 이산화탄소 농도가 정상을 되찾으며 마비감이 빠르게 풀립니다.\n3. 양손 주먹 쥐었다 펴기: 손가락을 가볍게 쥐었다 펴면서 혈액 순환을 돕고 말초 감각을 깨워줍니다.\n\n과호흡은 폐나 기도의 질환이 아니므로 숨이 막혀 질식사하는 일은 결코 일어나지 않습니다. 해아림한의원에서는 호흡을 주관하는 폐와 신장의 기운을 돕고 자율신경을 안정시키는 맞춤 처방을 통해 과호흡 재발을 예방합니다. 전국 16개 네트워크 해아림한의원에서 체계적인 진료를 제공합니다.\n\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)"
          },
          {
              "id": "faq-auto-15-1788884830000",
              "category": "원인/재발",
              "author": "해아림한의원",
              "date": "2026.08.23",
              "views": 3340,
              "image": "/images/faq/faq_9_cst.svg",
              "title": "공황장애가 재발하는 이유는 무엇인가요? - 이유 없이 불안하고 심장 뛸 때 극복법",
              "summary": "발작이 끝난 후에도 24시간 불안이 이어지는 예기불안의 뇌과학적 원인과 신경계 과민도를 낮추는 인지행동 치법",
              "content": "공황발작 증상이 가라앉았는데도 '또다시 발작이 오면 어쩌지'라는 걱정 때문에 하루 종일 일상이 마비되는 상태를 '예기불안'이라고 부릅니다. 공황장애가 재발하는 가장 큰 원인은 증상 자체가 남아있어서라기보다는, 편도체가 공포 기억을 강하게 각인하여 사소한 신체 변화(가벼운 두근거림, 피로감, 체기)에도 비상벨을 울리기 때문입니다.\n\n예기불안의 악순환을 끊고 재발률을 낮추는 생활 실천법입니다.\n1. 신체 감각과 공황 분리하기: 계단을 오를 때 심장이 뛰거나 피곤해서 어지러운 것은 정상적인 생리 반응입니다. '심장이 뛴다고 해서 공황발작으로 직결되는 것은 아니다'라고 생각을 재구성합니다.\n2. 회피 행동 줄이기: 불안하다고 해서 외출을 피하고 방 안에만 머물면 공포 회로가 더욱 단단해집니다. 안전한 사람과 함께 가까운 곳부터 조금씩 활동 반경을 넓혀갑니다.\n3. 불안 일기 작성: 불안이 찾아온 시간, 신체 감각, 당시의 생각을 객관적으로 기록하며 실제로는 아무 일도 일어나지 않았음을 스스로 확인합니다.\n\n해아림한의원에서는 뇌의 공포 회로를 진정시키고 신경가소성을 회복시키는 맞춤 한약과 두개천골요법, 침치료를 통해 예기불안의 기전을 다스리고 재발률을 낮춥니다. 대구, 서울, 부산 등 전국 16개 지점에서 마음의 안정을 되찾아드립니다.\n\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)"
          },
          {
              "id": "faq-auto-14-1788884820000",
              "category": "일상 관리",
              "author": "해아림한의원",
              "date": "2026.08.20",
              "views": 2590,
              "image": "/images/faq/faq_13_vision.svg",
              "title": "공황장애 카페인 괜찮나요? - 커피만 마셔도 심장이 벌렁거리고 불안해지는 원인",
              "summary": "커피, 에너지음료 속 카페인이 아데노신을 차단하고 아드레날린을 자극하여 공황을 촉발하는 뇌과학적 이유와 대체차",
              "content": "공황장애 환자분들은 커피 한 잔이나 피로회복제, 에너지음료만 마셔도 심장이 벌렁거리고 불안이 치솟는 경험을 흔히 합니다. 이는 기분 탓이 아니라, 카페인이 뇌의 천연 진정 물질인 '아데노신' 수용체를 차단하고 교감신경을 자극하여 아드레날린 분비를 급증시키기 때문입니다. 예민해진 자율신경계에 카페인은 불난 집에 부채질을 하는 것과 같습니다.\n\n공황 환자를 위한 카페인 관리 가이드입니다.\n1. 급성기 완전 차단: 치료 초기에는 커피뿐만 아니라 녹차, 홍차, 초콜릿, 에너지음료 등 숨겨진 카페인 섭취를 철저히 제한하는 것이 안전합니다.\n2. 디카페인 주의: 디카페인 커피에도 미량(1~3%)의 카페인이 함유되어 있어 초민감 환자는 심계항진을 느낄 수 있으므로 주의합니다.\n3. 심신 안정 한방차 추천: 카페인이 없으면서 가슴 두근거림을 가라앉히고 수면을 돕는 볶은 산조인차, 대추차, 캐모마일차, 둥굴레차를 미온수로 천천히 음용합니다.\n\n커피를 끊는 과정에서 일시적인 두통이나 무기력감이 올 수 있으나 3~5일이 지나면 호전됩니다. 해아림한의원에서는 교감신경의 수용체 민감도를 낮추고 심장의 열을 내려주는 청심(淸心) 한약 처방을 통해 커피 한 잔의 두려움에서 벗어날 수 있도록 도와드립니다. 전국 16개 지점 해아림한의원에서 1:1 맞춤 진료를 받으실 수 있습니다.\n\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)"
          },
          {
              "id": "faq-auto-13-1788884810000",
              "category": "자가진단",
              "author": "해아림한의원",
              "date": "2026.08.17",
              "views": 3890,
              "image": "/images/faq/faq_1_exam.svg",
              "title": "이게 공황장애인가요? 공황장애 초기증상 13가지와 자가진단 테스트 확인법",
              "summary": "미국정신의학회 DSM-5 진단 기준 13가지 신체·심리 증상 중 4가지 이상 해당 시 조기 진단 및 골든타임 치료의 필요성",
              "content": "내가 겪는 고통이 공황장애가 맞는지 확인하려면 미국정신의학회(DSM-5)의 공황발작 진단 기준 13가지를 점검해 보아야 합니다. 특별한 이유 없이 갑작스러운 극심한 공포와 함께 다음 13가지 증상 중 4가지 이상이 불시에 나타나 10~20분 내에 정점에 달한다면 공황발작으로 진단합니다.\n\n[공황발작 13대 신체·심리 증상 체크리스트]\n1. 심장이 쿵쾅거리고 맥박이 빨라짐 (심계항진)\n2. 땀이 비 오듯 쏟아짐 (발한)\n3. 몸이나 손발이 덜덜 떨림 (전율)\n4. 숨이 가쁘거나 턱 막히는 느낌 (호흡곤란)\n5. 목에 무언가 걸린 듯 질식할 것 같음 (질식감)\n6. 가슴 부위의 통증이나 답답함 (흉통, 흉부 압박감)\n7. 속이 메스껍거나 복부 불편감 (구역감, 체기)\n8. 어지럽고 비틀거리며 쓰러질 것 같음 (현기증)\n9. 주위가 비현실적으로 느껴지거나 내가 내가 아닌 것 같음 (비현실감, 이인증)\n10. 스스로 통제력을 잃거나 미쳐버릴 것 같은 두려움\n11. 죽을 것 같은 극심한 공포감\n12. 손발 끝이 찌릿하게 저리거나 마비되는 감각 이상\n13. 오한이 들거나 반대로 얼굴과 몸에 열이 화끈 달아오름\n\n발작 이후 '또 오면 어쩌지'라는 걱정이 1개월 이상 지속된다면 공황장애로 진행된 상태입니다. 초기 1~3개월 이내에 치료를 시작하는 것이 만성화를 막는 골든타임입니다. 해아림한의원에서는 뇌기능 검사와 자율신경 검사를 통해 객관적인 상태를 정밀 진단하고 맞춤 치료를 진행합니다. 대구, 서울, 부산 등 전국 16개 지점에서 상담받으실 수 있습니다.\n\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)"
          },
          {
              "id": "faq-auto-12-1788884800000",
              "category": "병원 선택",
              "author": "해아림한의원",
              "date": "2026.08.14",
              "views": 3450,
              "image": "/images/faq/faq_9_cst.svg",
              "title": "공황장애는 어느 병원에 가야 하나요? 정신과와 한의원 선택 기준과 검사",
              "summary": "정신과 양약 치료와 한의원 한방 치료의 차이점, 공황장애 검사가 가능한 병원 선택 기준과 상호 보완적 접근법",
              "content": "갑작스러운 공황 증상이 생겼을 때 정신건강의학과에 가야 할지, 공황장애 치료 한의원에 가야 할지 고민하시는 분들이 매우 많습니다. 두 분야는 치료의 접근 방식과 장점에 차이가 있으므로 본인의 증상 경과와 건강 상태에 맞추어 선택하거나 병용하는 것이 효과적입니다.\n\n정신과와 한의원의 특징 및 선택 기준입니다.\n1. 정신건강의학과: 항우울제(SSRI)와 신경안정제(벤조디아제핀)를 통해 뇌 신경전달물질을 조절합니다. 급성기 발작이 너무 빈번하여 일상생활이 불가능할 때 신속하게 신체 반응을 억제하는 장점이 있으나, 장기 복용 시 졸림, 무기력, 의존성 부담이 생길 수 있습니다.\n2. 한의원 치료: 억지로 신경을 차단하는 것이 아니라, 과열된 심장의 화(火)를 내리고 기혈 순환을 도와 자율신경계 본래의 자생력을 회복시킵니다. 체질 맞춤 한약, 침구, 약침, 두개천골요법(CST)을 통해 신체 증상(두근거림, 호흡곤란, 어지럼, 소화장애)을 부드럽게 다스리며 약물 의존 부담을 덜어줍니다.\n3. 병용 치료의 시너지: 기존에 정신과 약물을 복용 중이더라도 한방 치료를 병행하면 신경계 회복력이 보강되어 향후 안전하게 감약(테이퍼링)하고 일상으로 안정적으로 복귀하는 데 큰 도움이 됩니다.\n\n해아림한의원은 뇌파 검사(QEEG)와 자율신경 균형 검사(HRV) 등 객관적 검사 시스템을 갖추고 환자 맞춤형 치료를 제공합니다. 서울(강남·노원), 대구, 부산, 인천, 대전, 수원 등 전국 16개 네트워크에서 편안하게 치료받으실 수 있습니다.\n\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)"
          },
          {
              "id": "faq-auto-11-1788884790000",
              "category": "증상 대처",
              "author": "해아림한의원",
              "date": "2026.08.11",
              "views": 2380,
              "image": "/images/faq/faq_7_brainfog.svg",
              "title": "어지럽고 쓰러질 것 같고 머리가 멍해요 - 공황장애 비현실감(이인증)과 회복법",
              "summary": "머리에 안개가 낀 듯 멍하고 내가 유체이탈한 것 같은 비현실감·이인증의 뇌혈류 메커니즘과 감각 회복 솔루션",
              "content": "공황발작이 올 때 주위 풍경이 영화 세트장처럼 낯설게 느껴지거나, 내 손발이 내 것이 아닌 것처럼 유체이탈한 듯한 느낌이 드는 증상을 '비현실감(Derealization)' 및 '이인증(Depersonalization)'이라고 부릅니다. 많은 분들이 '내가 미쳐버리는 것은 아닐까'라며 극심한 공포를 느끼지만, 이는 뇌가 감당하기 힘든 극단적 스트레스로부터 스스로를 보호하기 위해 작동시키는 일시적 '감각 차단 방어막'입니다.\n\n극도의 공포 상태에서는 교감신경 항진으로 뇌혈류가 일시적으로 재분배되면서 현실 인지 회로가 멍해지는 브레인 포그 현상이 발생합니다.\n\n비현실감에서 벗어나는 감각 접지 수칙입니다.\n1. 촉각 자극: 얼음 조각을 손에 쥐거나 차가운 물수건으로 손목과 얼굴을 닦아 차가운 자극에 집중합니다.\n2. 소리 내어 말하기: 현재 있는 장소와 날짜, 시간, 눈앞의 사물 이름을 소리 내어 입 밖으로 말합니다.\n3. 발바닥 굴리기: 발바닥을 바닥에 강하게 디디며 땅의 단단함을 느끼고 온몸의 무게 중심을 아래로 떨어뜨립니다.\n\n이인증은 뇌 기능이 영구적으로 손상되는 질환이 아니며, 신경계가 안정을 찾으면 자연스럽게 사라집니다. 해아림한의원에서는 두개천골요법(CST)을 통해 뇌척수액 순환을 촉진하고 뇌혈류를 개선하는 한약 처방으로 맑고 안정된 의식을 되찾아드립니다. 전국 16개 지점에서 따뜻한 진료를 만나보세요.\n\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)"
          },
          {
              "id": "faq-auto-10-1788884780000",
              "category": "질환 감별",
              "author": "해아림한의원",
              "date": "2026.08.08",
              "views": 3190,
              "image": "/images/faq/faq_7_brainfog.svg",
              "title": "공황장애와 자율신경실조증은 어떻게 다른가요? - 증상 차이와 감별 진단",
              "summary": "급성 발작형으로 터지는 공황장애와 만성 신체 증상이 지속되는 자율신경실조증의 명확한 비교와 통합 치료법",
              "content": "가슴 두근거림, 어지럼증, 숨막힘 등의 증상 때문에 공황장애와 자율신경실조증이 어떻게 다른지 혼란스러워하시는 분들이 많습니다. 두 질환은 자율신경계의 불균형이라는 공통 뿌리를 공유하지만, 증상의 발현 양상과 지속 시간에서 뚜렷한 차이가 있습니다.\n\n두 질환의 주요 차이점입니다.\n1. 공황장애: 극심한 공포와 함께 10~20분 사이에 신체 증상이 정점에 달했다가 1시간 이내에 점차 가라앉는 '급성 발작(Panic Attack)' 형태를 보입니다. '죽을 것 같다', '미쳐버릴 것 같다'는 파국적 불안과 예기불안이 핵심입니다.\n2. 자율신경실조증: 특정한 극심한 공포 발작보다는 두통, 만성 어지럼증, 소화불량, 상열하한(위는 뜨겁고 발은 차가움), 피로감, 불면 등 다양한 신체 증상이 하루 종일 은은하고 만성적으로 지속되는 양상을 띱니다.\n3. 상호 연관성: 자율신경실조증으로 신경계가 만성적으로 약해진 상태에서 급격한 스트레스가 가해지면 공황발작이 촉발될 수 있으며, 반대로 공황장애를 오래 방치하면 만성 자율신경실조증으로 발전하기도 합니다.\n\n따라서 두 질환 모두 교감신경과 부교감신경의 조율 능력을 바로잡는 포괄적 치료가 필수적입니다. 해아림한의원에서는 HRV 자율신경 검사를 통해 교감·부교감 균형도를 정밀 측정하고 1:1 맞춤 치료를 진행합니다. 대구, 서울, 부산 등 전국 16개 지점에서 체계적인 회복을 도와드립니다.\n\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)"
          },
          {
              "id": "faq-auto-9-1788884770000",
              "category": "일상 극복",
              "author": "해아림한의원",
              "date": "2026.08.05",
              "views": 2420,
              "image": "/images/faq/faq_25_safety.svg",
              "title": "공황장애 비행기 탈 수 있나요? 치과나 미용실에서 숨 막힐 때 대처법",
              "summary": "비행기 이착륙, 치과 진료대, 미용실 샴푸대 등 신체 움직임이 제한될 때 치솟는 폐소공포 탈출 및 탑승 가이드",
              "content": "비행기 탑승구나 기내 좌석, 치과 진료대, 미용실 샴푸대처럼 몸을 마음대로 움직이기 어렵고 고개가 뒤로 젖혀지는 환경에서 갑자기 숨이 막히고 질식할 것 같은 공포를 느끼는 분들이 많습니다. 이는 신체 제약으로 인해 미주신경의 조절력이 떨어지고, 뇌 편도체가 '내가 통제력을 잃고 갇혔다'고 착각하기 때문입니다.\n\n비행기 및 밀폐 환경에서의 안전 행동 요령입니다.\n1. 통로 좌석 사전 예약: 비행기 예약 시 창가 대신 복도 쪽 좌석을 선택하여 언제든 일어설 수 있다는 개방감을 확보합니다.\n2. 의료진 및 미용사에게 사전 고지: 치과 치료나 샴푸를 받기 전 '숨이 차면 왼손을 들 테니 잠시 멈춰달라'고 미리 신호를 정해두면 통제 상실 공포가 크게 줄어듭니다.\n3. 찬물과 껌 활용: 기내에서 찬물을 조금씩 머금어 삼키거나 껌을 씹으면 턱관절 운동과 삼킴 작용으로 이관이 열리고 미주신경이 부드럽게 자극됩니다.\n\n장거리 비행이나 중요한 치료를 앞두고 계신다면 미리 신경계를 안정시키는 예방 치료를 받는 것이 현명합니다. 해아림한의원에서는 비상시 복용할 수 있는 안심 한약 처방과 자율신경 이완 침치료로 편안한 비행과 진료를 돕고 있습니다. 서울 강남·노원, 대구, 부산 등 전국 16개 지점에서 상담받으실 수 있습니다.\n\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)"
          },
          {
              "id": "faq-auto-8-1788884760000",
              "category": "치료 필요성",
              "author": "해아림한의원",
              "date": "2026.08.02",
              "views": 2710,
              "image": "/images/faq/faq_5_sleep.svg",
              "title": "공황장애를 방치하면 어떻게 되나요? - 우울증·만성 불면증 예방과 조기 치료",
              "summary": "공황장애를 치료하지 않고 방치할 때 찾아오는 광장공포증, 우울증, 알코올 의존 등 동반 질환과 골든타임 치료의 가치",
              "content": "공황장애를 '시간이 지나면 저절로 낫겠지'라며 방치하면, 증상이 사라지기는커녕 뇌의 공포 회로가 점점 더 넓어지며 만성화될 위험이 매우 큽니다. 처음에는 단순한 두근거림과 호흡곤란으로 시작하지만, 시간이 흐를수록 일상생활 전반이 무너지는 연쇄 반응이 발생합니다.\n\n공황장애를 제때 치료하지 않고 방치했을 때 겪는 3대 위험입니다.\n1. 광장공포증으로의 확대: 발작을 경험했던 장소(대중교통, 마트, 극장, 엘리베이터 등)를 피하다가 결국 집 밖으로 나가지 못하는 사회적 고립 상태에 이릅니다.\n2. 우울증과 만성 불면증 동반: 언제 터질지 모르는 예기불안에 시달리며 세로토닌이 고갈되어 무기력감, 절망감, 심한 불면증이 50~60% 환자에게 병발합니다.\n3. 알코올 및 약물 의존: 불안을 잊기 위해 술을 마시거나 진정제를 남용하게 되며, 이는 다음 날 신경계를 더 취약하게 만들어 악순환을 초래합니다.\n\n공황장애는 발병 초기에 적극적으로 대처할수록 회복 기간이 훨씬 단축됩니다. 해아림한의원에서는 뇌신경계와 오장육부의 기혈 순환을 살펴 우울과 불면, 불안을 아우르는 1:1 복합 치법을 진행합니다. 전국 16개 네트워크 해아림한의원에서 희망을 되찾으시기 바랍니다.\n\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)"
          },
          {
              "id": "faq-auto-7-1788884750000",
              "category": "가족 가이드",
              "author": "해아림한의원",
              "date": "2026.07.30",
              "views": 2280,
              "image": "/images/faq/faq_25_safety.svg",
              "title": "가족이 갑자기 숨을 못 쉬고 불안해할 때 - 공황발작 옆에서 돕는 대처법",
              "summary": "가족이나 지인이 공황발작을 일으켰을 때 옆에서 절대 하지 말아야 할 말과 환자를 빠르게 진정시키는 보호자 행동 수칙",
              "content": "가족이나 연인, 동료가 갑자기 숨을 헐떡이며 심장을 움켜쥐고 쓰러질 것 같아할 때, 곁에 있는 사람이 어떻게 대처하느냐에 따라 환자의 공포가 크게 줄어들 수 있습니다. 보호자가 당황하여 비명을 지르거나 다그치면 환자의 뇌는 실제 심각한 위기 상황이 발생했다고 믿어 증상이 더욱 격렬해집니다.\n\n보호자가 지켜야 할 절대 금기 사항입니다.\n- '마음 약하게 먹지 말고 의지로 참아봐'라며 환자를 나무라지 마세요. 공황은 의지의 문제가 아닌 신경생리적 신체 반응입니다.\n- '별일 아니야, 호들갑 떨지 마'라며 고통을 축소하지 마세요. 환자는 실제 죽음의 공포를 느끼고 있습니다.\n\n곁에서 꼭 해줘야 할 4대 행동 수칙입니다.\n1. 차분하고 낮은 목소리로 안심시키기: '내가 곁에 있어. 이것은 공황발작이고 10분이면 지나가. 결코 죽거나 위험해지지 않아'라고 확신을 줍니다.\n2. 호흡 페이스메이커 되어주기: 환자의 손을 잡고 보호자가 먼저 코로 숨을 들이마시고 입으로 천천히 길게 내쉬는 시범을 보이며 따라 하게 합니다.\n3. 환기 및 편안한 자세 유지: 넥타이나 단추를 풀고 시원한 바람이 통하게 하며, 등을 기댈 수 있도록 부축합니다.\n4. 환자의 자율성 존중: 물을 억지로 먹이거나 사람이 몰려들어 둘러싸지 않도록 주변을 정돈합니다.\n\n가족의 따뜻한 이해와 지지는 치료에 있어 가장 든든한 버팀목입니다. 해아림한의원에서는 환자뿐 아니라 보호자분들을 위한 가족 상담과 생활 관리 가이드를 함께 제공합니다. 전국 16개 지점에서 온 가족의 마음 건강을 지켜드립니다.\n\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)"
          },
          {
              "id": "faq-auto-6-1788884740000",
              "category": "치료 기간",
              "author": "해아림한의원",
              "date": "2026.07.27",
              "views": 3120,
              "image": "/images/faq/faq_18_recovery.svg",
              "title": "공황장애 치료는 얼마나 걸리나요? 완전히 나을 수 있나요? - 단계별 회복 기준",
              "summary": "급성기 증상 완화부터 예기불안 소실, 신경계 안정화까지 소요되는 치료 기간과 재발률을 낮추는 3단계 치료 로드맵",
              "content": "공황장애 진단을 받은 후 가장 궁금해하시는 질문은 '치료 기간이 얼마나 걸리는지'와 '완전히 나아서 일상으로 돌아갈 수 있는지'입니다. 결론부터 말씀드리면, 공황장애는 조기에 올바른 치료를 받으면 재발률을 크게 낮추고 건강한 일상으로 완전히 복귀할 수 있는 질환입니다.\n\n개인의 체질과 유병 기간에 따라 차이가 있으나, 일반적인 한방 신경정신과 치료 로드맵은 다음과 같이 진행됩니다.\n1. 1단계 급성기 제어 (1~4주): 발작의 빈도와 강도를 급격히 낮추는 단계입니다. 교감신경의 과열을 식히는 한약 처방을 통해 숨막힘과 심계항진을 안정시킵니다.\n2. 2단계 예기불안 완화 및 활동 반경 회복 (2~3개월): 발작이 잦아들면서 남는 '또 오면 어쩌지'라는 잔여 불안을 다스리고, 피했던 장소(지하철, 마트, 운전 등)를 편안하게 다니도록 뇌 신경망의 자생력을 기릅니다.\n3. 3단계 자율신경 안정화 및 치료 종결 (3~6개월): 스트레스 저항력을 높이고 자율신경계 본래의 조율 기능을 공고히 하여 재발 위험을 낮추며 안전하게 치료를 마무리합니다.\n\n치료 도중 피곤하거나 스트레스를 받을 때 일시적인 신체 반응이 한두 번 나타날 수 있으나, 이는 재발이 아니라 회복 과정에서 겪는 정상적인 출렁임입니다. 해아림한의원에서는 치료 종결 후에도 스스로 신경계를 다스릴 수 있는 심신 관리법을 교육합니다. 대구, 서울, 부산 등 전국 16개 지점에서 단계별 맞춤 치료를 경험해 보세요.\n\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)"
          },
          {
              "id": "faq-auto-5-1788884730000",
              "category": "일상 관리",
              "author": "해아림한의원",
              "date": "2026.07.24",
              "views": 2630,
              "image": "/images/faq/faq_12_lifestyle.svg",
              "title": "공황장애 술 마셔도 되나요? 회사 다닐 수 있나요? - 직장 생활과 금기 습관",
              "summary": "알코올 분해 과정에서 아세트알데하이드가 유발하는 숙취성 공황의 위험성과 직장 생활을 지켜내는 5대 금기 생활 수칙",
              "content": "공황장애를 겪으면서도 사회생활과 직장 출퇴근을 유지할 수 있는지, 회식 자리에서 술을 마셔도 되는지 고민하시는 분들이 많습니다. 공황장애가 있다고 해서 무조건 휴직이나 퇴사를 해야 하는 것은 아니며, 치료와 적절한 생활 관리를 병행하면 충분히 안정적인 직장 생활을 이어갈 수 있습니다. 다만 술(알코올)은 절대적으로 주의해야 합니다.\n\n술을 마실 때는 알코올이 중추신경을 진정시켜 일시적으로 불안이 줄어드는 것처럼 느껴지지만, 수면 중 알코올이 분해되면서 생기는 독성 물질인 '아세트알데하이드'가 교감신경을 급격히 반동 항진시킵니다. 이로 인해 다음 날 아침 극심한 심계항진과 함께 이른바 '숙취성 공황(Hangover Panic)'이 촉발됩니다.\n\n공황 환자가 꼭 지켜야 할 5대 생활 금기입니다.\n1. 금주 및 절주: 알코올성 공황 반동을 막기 위해 치료 기간 동안 음주를 피합니다.\n2. 금연: 담배의 니코틴은 혈관을 수축시키고 심박을 빠르게 만들어 발작을 유발합니다.\n3. 수면 부족 및 밤샘 금지: 수면이 부족하면 뇌 편도체의 반응성이 극도로 예민해집니다.\n4. 고카페인 섭취 제한: 커피, 에너지음료를 피합니다.\n5. 폭식과 야식 금지: 위장 팽만은 횡격막을 압박해 호흡을 가쁘게 만듭니다.\n\n해아림한의원에서는 직장인 환자분들의 생활 리듬과 스트레스 상태를 고려한 맞춤 진료를 제공합니다. 전국 16개 지점 해아림한의원에서 건강한 사회생활을 지켜나가세요.\n\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)"
          },
          {
              "id": "faq-auto-4-1788884720000",
              "category": "자가 훈련",
              "author": "해아림한의원",
              "date": "2026.07.21",
              "views": 2950,
              "image": "/images/faq/faq_9_cst.svg",
              "title": "가슴이 답답하고 숨쉬기 힘들어요 - 집에서 혼자 하는 자율신경 이완 훈련법",
              "summary": "흉곽 압박감과 숨막힘을 해소하는 점진적 근육이완법(PMR)과 자율신경 밸런스를 바로잡는 데일리 10분 루틴",
              "content": "특별한 신체 이상이 없는데도 가슴 한가운데가 꽉 막힌 듯 답답하고 한숨을 자주 쉬게 되는 것은 만성 긴장으로 인해 흉곽 호흡근과 횡격막이 굳어있기 때문입니다. 교감신경이 긴장하면 무의식중에 어깨와 목, 가슴 근육을 움츠리게 되어 폐가 충분히 팽창하지 못하고 산소 결핍 착각이 일어납니다.\n\n집이나 사무실에서 혼자 실천하여 자율신경 긴장을 풀어주는 '점진적 근육이완법(PMR)' 실천 가이드입니다.\n1. 발끝 이완: 편안히 누워 양발 끝을 몸 쪽으로 5초간 힘껏 당겨 긴장시킨 뒤, 숨을 내쉬며 '툭' 힘을 빼고 10초간 나른한 이완감을 음미합니다.\n2. 복부 및 흉곽 이완: 숨을 들이마시며 배를 단단하게 긴장시켰다가, 숨을 길게 내쉬며 배와 가슴의 긴장을 완전히 내려놓습니다.\n3. 어깨 및 목 이완: 양어깨를 귀 밑까지 바짝 끌어올려 5초간 긴장을 유지한 후, 한숨을 내쉬며 어깨를 아래로 툭 떨어뜨립니다.\n4. 안면근 이완: 눈과 입, 미간을 가운데로 꽉 찡그렸다가 확 풀어주며 얼굴 전체의 긴장을 풉니다.\n\n매일 취침 전 10분씩 이 훈련을 반복하면 뇌 편도체에 '내 몸은 안전하다'는 신호가 전달되어 흉부 압박감이 시원하게 풀립니다. 해아림한의원에서는 굳어진 흉곽과 경추를 이완시키는 추나요법과 약침 치료를 병행하여 가슴 속 깊은 숨을 편안하게 되찾아드립니다. 서울, 대구, 부산 등 전국 16개 지점에서 만나보실 수 있습니다.\n\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)"
          },
          {
              "id": "faq-auto-3-1788884710000",
              "category": "병원 추천",
              "author": "해아림한의원",
              "date": "2026.07.18",
              "views": 3670,
              "image": "/images/faq/faq_18_recovery.svg",
              "title": "공황장애 병원 어디가 좋나요? 대구·서울·부산 공황장애 한의원 선택 기준",
              "summary": "공황장애 치료 잘하는 병원과 한의원을 고를 때 꼭 따져보아야 할 4가지 기준과 전국 16개 네트워크 해아림의 진료 철학",
              "content": "공황장애 증상으로 고통받으며 '치료 잘하는 병원 어디가 좋나요', '공황장애 한의원 추천'을 검색하시는 분들이 가장 중요하게 고려해야 할 것은 단순한 거리나 광고가 아닌, '환자의 신체와 심리를 얼마나 유기적이고 체계적으로 다루는가'입니다.\n\n신뢰할 수 있는 공황장애 의료기관 선택의 4대 기준입니다.\n1. 객관적 검사 시스템 보유: 단순 문진에만 의존하지 않고, 뇌파 검사(QEEG), 자율신경 균형 검사(HRV), 스트레스 저항도 검사 등 객관적인 수치로 신경계 상태를 측정하는지 확인합니다.\n2. 원인 중심의 1:1 맞춤 처방: 획일적인 진정 처방이 아니라, 환자 개개인의 체질과 신체 증상(심계항진, 소화불량, 어지럼, 불면 등)에 맞춘 한약과 침구 치료를 처방하는지 살펴봅니다.\n3. 신체와 두개경추의 통합 교정: 뇌척수액 순환을 돕는 두개천골요법(CST)과 추나요법 등 비약물적 신경 이완 치료가 체계적으로 병행되는지 확인합니다.\n4. 풍부한 임상 경험과 전국 네트워크: 공황장애 환자를 오랫동안 집중 진료해 온 경험과 체계적인 사후 관리 시스템을 갖추었는지 따져보아야 합니다.\n\n해아림한의원은 서울(강남·노원), 대구, 부산, 인천, 대전, 수원, 울산, 광주, 창원, 청주, 구미, 포항 등 전국 16개 지점의 네트워크를 구축하여 표준화된 고품격 진료를 제공합니다. 가까운 지점에서 편안하게 체계적인 진료를 시작해 보세요.\n\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)"
          },
          {
              "id": "faq-auto-2-1788884700000",
              "category": "원인 분석",
              "author": "해아림한의원",
              "date": "2026.07.15",
              "views": 2540,
              "image": "/images/faq/faq_7_brainfog.svg",
              "title": "스트레스 때문에 공황장애가 생기나요? - 신경성 위장장애와 체기 원인",
              "summary": "불안할 때 명치가 돌처럼 굳고 체기가 치미는 장-뇌 축(Gut-Brain Axis)과 담적(痰積)이 유발하는 위장형 공황",
              "content": "스트레스를 심하게 받거나 긴장하면 명치가 꽉 막히고 소화가 안 되며, 체기와 함께 갑자기 가슴이 두근거리고 숨이 막히는 증상을 호소하시는 분들이 많습니다. 한의학에서는 이를 '식적(食積) 공황' 또는 담적병(痰積病)과 연관된 신경성 위장 질환으로 설명합니다. 장과 뇌는 '장-뇌 축(Gut-Brain Axis)'이라는 거대한 미주신경망으로 연결되어 있어 서로의 상태에 직접적인 영향을 주고받습니다.\n\n스트레스를 받으면 교감신경이 흥분하여 위장으로 가는 혈류를 차단하고 소화효소 분비를 멈춥니다. 위장이 굳어 음식물이 정체되면 복부 가스가 차면서 횡격막을 위로 밀어 올리게 되고, 횡격막 바로 위에 위치한 심장과 폐가 물리적으로 압박을 받아 심계항진과 숨막힘이 유발되는 것입니다.\n\n위장형 공황을 다스리는 생활 수칙입니다.\n1. 소식과 천천히 씹기: 위장 팽만을 막기 위해 식사량을 평소의 70~80%로 조절하고 30번 이상 꼭꼭 씹어 먹습니다.\n2. 식후 바로 눕지 않기: 식후 최소 2시간 동안 눕지 않고 가볍게 산책하며 복부 압력을 낮춥니다.\n3. 배를 따뜻하게 유지: 명치와 복부를 온열 팩으로 따뜻하게 찜질하여 굳은 복부 근육을 풀어줍니다.\n\n해아림한의원에서는 뭉친 기운과 담적을 풀어주는 소간해울(疏肝解鬱) 한약과 건비화담(健脾化痰) 처방으로 위장과 자율신경을 동시에 바로잡습니다. 대구, 서울, 부산 등 전국 16개 지점에서 답답한 속과 불안을 함께 해결해 드립니다.\n\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)"
          },
          {
              "id": "faq-auto-1-1788884690000",
              "category": "한방 치료",
              "author": "해아림한의원",
              "date": "2026.07.12",
              "views": 3080,
              "image": "/images/faq/faq_9_cst.svg",
              "title": "공황장애 한방치료와 침치료는 어떤 효과가 있나요? - 뇌 신경과 자율신경 조절",
              "summary": "두개천골요법(CST)과 미주신경 자극 침구 치료가 부교감신경을 깨우고 뇌척수액 순환을 도와 공황을 다스리는 원리",
              "content": "공황장애의 한방치료는 단순히 마음을 다독이는 상담에 그치지 않고, 뇌신경계와 자율신경계의 생리적 불균형을 신체적으로 교정하는 매우 정밀하고 과학적인 의학적 치료입니다. 뇌와 신체는 분리된 것이 아니므로, 신체에 나타나는 자율신경 이상 반응을 직접 치료할 때 뇌 편도체의 과잉 경보도 함께 진정됩니다.\n\n해아림한의원의 주요 한방 치료법입니다.\n1. 체질 맞춤 안신(安神) 한약: 심장의 화를 내리고 기혈을 보강하는 시호가용골모려탕, 영계출감탕, 귀비탕 등을 환자 상태에 맞추어 처방하여 뇌 신경전달물질의 균형을 되찾아줍니다.\n2. 두개천골요법(CST): 후두골과 경추 주변의 굳은 근육을 섬세하게 이완시켜 뇌척수액의 순환 리듬을 정상화하고, 뇌신경의 감압을 도와 교감신경 긴장을 풀어줍니다.\n3. 미주신경 자극 약침 및 침구 치료: 귀 뒤쪽의 미주신경 경로와 내관혈, 신문혈 등 자율신경 조절 주요 혈자리를 자극하여 천연 부교감신경 브레이크를 활성화합니다.\n4. 자율신경 추나요법: 일자목, 거북목으로 인해 경동맥과 척추신경이 압박받는 구조적 원인을 교정하여 뇌혈류 순환을 촉진합니다.\n\n한방 치료는 인체의 자생력을 키워주므로 내성이나 의존성 걱정 없이 안전하게 몸을 회복할 수 있습니다. 서울 강남·노원, 대구, 부산, 인천, 대전, 수원, 울산, 광주 등 전국 16개 네트워크 해아림한의원에서 체계적인 한방 진료를 경험해 보세요.\n\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)"
          }
        ];
        var defaultReviewsData = [
          {
              "id": "rev-auto-20261002-1790908800000",
              "category": "지하주차장 & 밀폐공간",
              "author": "30대 주부 권OO 님",
              "date": "2026.10.02",
              "views": 185,
              "image": "/images/reviews/review_2.jpg",
              "title": "지하 주차장만 들어가면 가슴이 답답하고 뛰쳐나가고 싶던 공황, 한방 치료로 극복했습니다",
              "summary": "아파트 지하 3층 주차장에 차를 대고 내리는 순간 사방이 콘크리트 벽으로 막혀 산소가 부족하다는 착각과 함께 과호흡이 오면서 바닥에 주저앉았습니다. 금방이라도 기절할 것 같아 비상...",
              "content": "아파트 지하 3층 주차장에 차를 대고 내리는 순간 사방이 콘크리트 벽으로 막혀 산소가 부족하다는 착각과 함께 과호흡이 오면서 바닥에 주저앉았습니다. 금방이라도 기절할 것 같아 비상계단으로 기어 올라왔고, 이후로는 지상 주차장만 찾아 헤매며 비 오는 날에도 지하로 내려가지 못해 일상생활이 너무 괴로웠습니다. 해아림 원장님께서 편도체의 잘못된 위험 신호 감지와 교감신경 항진 때문이라 자세히 설명해 주셨고, 신경계를 안정시키는 한약과 호흡 이완 요법을 처방해 주셨습니다. 6주 치료 후 지하 주차장에 혼자 주차하고 엘리베이터까지 차분하게 걸어갈 수 있게 되었으며, 갇힐 것 같다는 공포가 완전히 사라져 자신감을 되찾았습니다.",
              "hasTreatment": false,
              "treatmentType": "",
              "isAutoPublished": true,
              "isCustom": true,
              "createdAt": 1790908800000,
              "updatedAt": 1790908800000,
              "poolId": "pool-new-rev-2"
          },
          {
              "id": "rev-auto-20260925-1790304000000",
              "category": "KTX & 고속철도 공황",
              "author": "40대 영업팀장 문OO 님",
              "date": "2026.09.25",
              "views": 210,
              "image": "/images/reviews/review_1.jpg",
              "title": "KTX 타고 출장 가다가 숨 막히던 광장공포증, 한약 복용 2개월 만에 편안히 탑니다",
              "summary": "지방 출장이 잦은 직무인데 KTX가 출발하고 열차 문이 닫히자마자 갑자기 가슴이 조여오고 숨이 턱 막히며 이러다 질식해 죽는 게 아닌가 싶었습니다. 심장이 미친 듯이 뛰어 비상 정...",
              "content": "지방 출장이 잦은 직무인데 KTX가 출발하고 열차 문이 닫히자마자 갑자기 가슴이 조여오고 숨이 턱 막히며 이러다 질식해 죽는 게 아닌가 싶었습니다. 심장이 미친 듯이 뛰어 비상 정지 레버를 당기고 당장 뛰쳐나가고 싶을 만큼 극심한 공황발작을 겪었습니다. 이후로는 기차표만 예매해도 식은땀이 흐르고 손발이 떨려 출장 업무를 도저히 수행할 수 없었습니다. 해아림한의원에서 뇌신경계 과흥분을 진정시키는 1:1 맞춤 한약과 두개천골요법(CST) 치료를 병행한 지 2개월 만에 가슴 답답함과 예기불안이 깨끗이 사라졌고, 지금은 서울-부산 KTX 안에서 편안하게 노트북으로 업무를 보며 커피도 한잔 마실 만큼 안정되었습니다.",
              "hasTreatment": true,
              "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
              "isAutoPublished": true,
              "isCustom": true,
              "createdAt": 1790304000000,
              "updatedAt": 1790304000000,
              "poolId": "pool-new-rev-1"
          },
          {
              "id": "rev-1-1788860000000",
              "category": "급성 공황발작 & 응급실",
              "title": "응급실만 세 번 갔는데, 맞춤 한약과 이완 훈련으로 완전히 회복되었습니다",
              "content": "어느 날 갑자기 가슴이 쿵쾅거리고 숨이 가빠지면서 이러다 죽는 게 아닌가 싶어 119를 부르고 응급실로 실려 갔습니다. 심전도, 피검사, 폐 엑스레이 다 찍어도 이상이 없다고 하는데도, 언제 또 발작이 올지 모른다는 극심한 예기불안 때문에 지하철도 못 타고 외출도 못 했습니다. 해아림한의원에서 공황장애 진단을 받고 과흥분된 심신을 안정시키는 1:1 맞춤 한약과 뇌신경 이완 침 치료, 자율신경 훈련을 병행한 지 2개월 만에 발작이 멈추었고, 지금은 아무 불안 없이 일상생활과 출퇴근을 편안하게 하고 있습니다.",
              "author": "30대 직장인 김OO 님",
              "date": "2026.09.10",
              "views": 1900,
              "image": "/images/reviews/review_1.jpg",
              "isCustom": true,
              "isPermanent": true
          },
          {
              "id": "rev-add-20260724-1784880600000",
              "category": "대형 회의 & 프레젠테이션",
              "title": "임원 회의 발표 순서만 다가오면 과호흡 오던 발표 공황, 한방 치료로 완벽하게 극복",
              "author": "30대 차장 배OO 님",
              "date": "2026.07.24",
              "views": 2150,
              "image": "/images/reviews/review_1.jpg",
              "hasTreatment": false,
              "treatmentType": "",
              "content": "사내 주요 임원들이 참석하는 전략 회의에서 발표 순서가 다가오자 갑자기 심박수가 150회로 치솟고 목소리가 나오지 않으며 손이 마비되는 과호흡 발작을 겪었습니다. 승진을 앞두고 중요한 시기였기에 이 트라우마가 커리어의 끝이 될까 봐 며칠 밤을 눈물로 지새웠습니다. 해아림에서 심포의 화를 내리고 담력을 북돋아 주는 맞춤 한약 처방을 받았습니다. 가슴의 조여듦이 시원하게 풀렸고, 지난달 전사 임원 평가 프레젠테이션을 막힘없이 여유 있게 마쳐 최우수 프로젝트 팀으로 선정되는 기쁨을 누렸습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다.",
              "createdAt": 1784880600000,
              "updatedAt": 1784880600000
          },
          {
              "id": "rev-2-1788850000000",
              "category": "광장공포 & 지하철/운전",
              "title": "지하철과 고속도로 운전이 공포였던 광장공포증, 이제 두렵지 않습니다",
              "content": "터널 안이나 꽉 막힌 지하철에 갇히면 숨이 막혀 질식할 것 같고 문을 부수고 나가고 싶은 공황발작이 반복되었습니다. 혼자서는 운전도 못 하고 지하철도 탈 수 없어 직장 생활이 불가능할 지경이었습니다. 해아림한의원에서 편도체의 과민 반응을 낮추는 체질 한약 치료와 두개천골요법(CST)을 받으며 점진적인 인지행동 노출 훈련을 함께 진행했습니다. 3개월 치료 후 지금은 혼자서 지하철도 편안하게 타고 출퇴근하고 있으며, 장거리 고속도로 운전도 전혀 두렵지 않습니다.",
              "author": "50대 주부 박OO 님",
              "date": "2026.06.18",
              "views": 1915,
              "image": "/images/reviews/review_2.jpg"
          },
          {
              "id": "rev-3-1788840000000",
              "category": "신경성 위장장애 & 소화불량",
              "title": "신경성 위염, 공황 불안으로 10kg 빠졌는데 치료 후 밥을 맛있게 먹습니다",
              "content": "조금만 불안하거나 긴장하면 체하고 명치가 돌처럼 굳었으며, 목에 무언가 걸린 듯한 이물감(매핵기) 때문에 식사를 넘기지 못해 체중이 10kg이나 빠졌습니다. 위내시경을 해도 가벼운 위염뿐이라는데 가슴이 답답하고 불안이 끊이지 않았습니다. 해아림 원장님께서 공황장애와 자율신경계 과흥분으로 인한 뇌-장관 신경축 불균형이라 설명해 주셨고, 담적을 제거하고 비위와 심장을 보강하는 맞춤 한약을 복용하면서 명치 답답함이 사라지고 식욕과 체중이 정상으로 돌아왔습니다.",
              "author": "40대 자영업 이OO 님",
              "date": "2026.03.25",
              "views": 1930,
              "image": "/images/reviews/review_3.jpg"
          },
          {
              "id": "rev-add-20260212-1770871500000",
              "category": "신경안정제 감량 & 자생력 회복",
              "title": "스틸녹스와 알프라졸람 없이 못 자던 만성 공황, 한약 병행 치료로 완전 단약 성공했습니다",
              "author": "40대 전문직 한OO 님",
              "date": "2026.02.12",
              "views": 2580,
              "image": "/images/reviews/review_6.jpg",
              "hasTreatment": true,
              "treatmentType": "수면 뇌신경 안정 한약 + 침구 요법",
              "content": "공황발작 후 처방받은 수면제와 신경안정제를 1년 넘게 복용하면서도 늘 아침마다 머리가 멍하고 불안이 가시지 않았습니다. 약을 줄이려고 하면 반동성 불면과 공황이 더 세게 찾아와 약물 의존에서 영영 벗어날 수 없을까 봐 너무 두려웠습니다. 해아림 원장님 지도하에 뇌 자생력을 키워주는 한약을 복용하며 3개월에 걸쳐 신경안정제를 4분의 1씩 단계적으로 감량해 나갔습니다. 신체 부담이나 반동 불안 없이 자연스럽게 모든 양약을 끊었고, 지금은 밤마다 자연스러운 꿀잠을 자며 맑은 정신으로 출근하고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다.",
              "createdAt": 1770871500000,
              "updatedAt": 1770871500000
          },
          {
              "id": "rev-4-1788830000000",
              "category": "전신 신체화 증상 & 예기불안",
              "title": "머리 열감, 손발 떨림, 가슴 답답함.. 온몸이 아팠는데 체질 한약으로 안정을 찾았습니다",
              "content": "시험 준비와 직장 스트레스로 머리로는 열이 뻗치고 손발은 얼음장처럼 차가우며, 가슴이 조여오고 숨을 깊게 들이쉬지 못해 늘 한숨만 쉬었습니다. 온몸에 감각 이상이 오고 죽을 것 같은 공포와 우울감까지 덮쳐 너무 괴로웠습니다. 해아림한의원에서 심포의 화를 내리고 자율신경 균형을 바로잡는 한약과 추나 치료를 3개월간 꾸준히 받은 결과, 가슴이 시원하게 뚫리고 손발 저림과 열감도 완전히 사라졌습니다.",
              "author": "20대 취준생 최OO 님",
              "date": "2025.12.31",
              "views": 1945,
              "image": "/images/reviews/review_4.jpg"
          },
          {
              "id": "rev-add-20251120-1763619600000",
              "category": "단풍철 고속도로 & 장거리 운전",
              "title": "고속도로 터널과 긴 교량만 지나면 숨 막히던 광장공포증, 2개월 치료 후 장거리 주행 성공",
              "author": "30대 연구원 정OO 님",
              "date": "2025.11.20",
              "views": 1980,
              "image": "/images/reviews/review_5.jpg",
              "hasTreatment": false,
              "treatmentType": "",
              "content": "주말에 가족들과 여행을 가다가 고속도로 2km 길이의 긴 터널 안에서 갑자기 시야가 좁아지고 가슴이 터질 듯 뛰는 극심한 공황발작을 겪었습니다. 이후로는 터널 입구 표지판만 보여도 식은땀이 나고 핸들을 쥔 손이 굳어 고속도로 운전을 전면 중단했었습니다. 해아림한의원에서 시각 감각 과민을 조절하고 편도체 흥분을 낮추는 체질 한약과 4-6 복식호흡 지도를 받았습니다. 점차 터널에 대한 공포가 옅어졌고, 두 달 만에 고속도로 장거리 운전을 가족들과 웃으며 성공적으로 완주하여 운전 공포를 완벽히 털어냈습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다.",
              "createdAt": 1763619600000,
              "updatedAt": 1763619600000
          },
          {
              "id": "rev-5-1788820000000",
              "category": "야간 공황발작 & 수면장애",
              "title": "자다가 심장이 터질 듯 뛰며 깨던 야간 공황발작, 이제 푹 잘 수 있습니다",
              "content": "매일 밤 잠든 지 1~2시간 만에 갑자기 심장이 요동치고 숨이 턱 막히며 식은땀을 흘리며 깨어났습니다. 자다가 심장마비로 죽을까 봐 잠자리에 드는 것 자체가 지옥 같았습니다. 수면다원검사에서도 원인을 못 찾았는데 해아림에서 야간 공황발작과 기상 코르티솔 서지 과항진을 진단받고, 뇌신경을 안정시키는 천왕보심단 가감방과 약침 치료를 받았습니다. 복용 3주 차부터 야간 발작이 현저히 줄어들었고, 지금은 밤새 깨지 않고 푹 숙면을 취하고 있습니다.",
              "author": "30대 연구원 정OO 님",
              "date": "2025.10.07",
              "views": 1960,
              "image": "/images/reviews/review_5.jpg"
          },
          {
              "id": "rev-add-20250828-1756345200000",
              "category": "여름철 탈수 & 어지럼 공황",
              "title": "더운 여름철 야외 활동 중 쓰러질 것 같던 미주신경성 어지럼과 공황 극복 수기",
              "author": "50대 자영업 문OO 님",
              "date": "2025.08.28",
              "views": 2320,
              "image": "/images/reviews/review_4.jpg",
              "hasTreatment": true,
              "treatmentType": "생맥산 가감 한약 + 경추 추나요법",
              "content": "한여름 뙤약볕 아래를 조금만 걸어도 눈앞이 캄캄해지고 식은땀이 비 오듯 쏟아지며 다리에 힘이 풀려 길바닥에 주저앉았습니다. 병원에서는 미주신경성 실신 전조 증상이라고 하는데, 언제 길에서 쓰러질지 모른다는 공포에 한여름 외출 자체를 포기하고 집에만 갇혀 지냈었습니다. 해아림에서 기력을 북돋우고 혈액 순환을 개선하는 생맥산 가감 한약 처방과 경추 교정 추나 치료를 함께 받았습니다. 6주 치료 후 여름철 야외 활동을 해도 가슴 두근거림이나 어지럼증 없이 건강하고 활력 넘치는 일상을 되찾아 가족들과 즐겁게 휴가를 다녀왔습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다.",
              "createdAt": 1756345200000,
              "updatedAt": 1756345200000
          },
          {
              "id": "rev-6-1788810000000",
              "category": "과호흡 & 긴장성 두통",
              "title": "과호흡으로 손발이 굳고 호흡곤란 오던 공황 증상이 완전히 사라졌습니다",
              "content": "회의를 하거나 중요한 발표를 앞두면 갑자기 숨이 가빠지면서 과호흡이 오고, 손발 끝이 찌릿찌릿 저리며 마비되듯 굳어버렸습니다. 뒷목과 어깨가 돌처럼 뭉치고 찌릿한 긴장성 두통과 어지럼증까지 동반되어 사회생활이 불가능했습니다. 해아림에서 과호흡 응급 4-6 호흡법 교정과 함께 뇌신경 순환을 개선하는 두개천골요법, 맞춤 한약을 병행하여 3개월 만에 모든 증상이 안정 회복되었습니다.",
              "author": "40대 교사 강OO 님",
              "date": "2025.07.15",
              "views": 1975,
              "image": "/images/reviews/review_6.jpg"
          },
          {
              "id": "rev-auto-hist-1-1784462400000",
              "category": "회의 & 발표 공황",
              "title": "중요한 임원 회의마다 찾아오던 호흡곤란과 식은땀, 이제 발표도 편안합니다",
              "content": "많은 사람들 앞에 서거나 회의 발표 차례가 다가오면 가슴이 터질 듯 뛰고 목소리가 떨리며 숨이 막히는 공황발작으로 승진 기회를 포기할 뻔했습니다. 해아림 원장님의 심담허겁 한약 처방과 이완 침 치료를 통해 심장 박동이 차분해졌고 발표 불안을 완전히 극복했습니다.",
              "author": "40대 팀장 윤OO 님",
              "date": "2025.04.21",
              "views": 1990,
              "image": "/images/reviews/review_1.jpg"
          },
          {
              "id": "rev-add-20250310-1741590900000",
              "category": "환절기 & 심장 두근거림",
              "title": "환절기마다 심장이 불규칙하게 쿵쾅거리며 찾아오던 예기불안, 심신 안정 처방으로 회복",
              "author": "20대 취준생 신OO 님",
              "date": "2025.03.10",
              "views": 1760,
              "image": "/images/reviews/review_3.jpg",
              "hasTreatment": false,
              "treatmentType": "",
              "content": "봄 환절기만 되면 일교차 때문인지 아침에 눈뜰 때부터 심장이 분당 120회 넘게 쿵쾅거리고, 길을 걷다가도 심장이 멎을 것 같은 발작이 반복되었습니다. 심전도 검사에서는 정상이라는데 수시로 찾아오는 예기불안 때문에 도서관에 앉아 공부를 지속할 수 없어 극심한 좌절감을 느꼈습니다. 해아림한의원에서 심담을 튼튼히 하고 자율신경 균형을 바로잡는 맞춤 한약과 약침 치료를 3개월간 성실히 복용했습니다. 심장 박동이 차분한 본래의 리듬을 되찾았고, 시험 당일에도 떨림 없이 차분하게 응시하여 원하던 자격증 시험에 당당히 합격하며 활력을 찾았습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다.",
              "createdAt": 1741590900000,
              "updatedAt": 1741590900000
          },
          {
              "id": "rev-clinical-1-1776470400000",
              "category": "비행기 & 여행 공포",
              "title": "비행기 탈 엄두도 못 내던 광장공포증, 가족 해외여행 무사히 다녀왔습니다",
              "content": "밀폐된 비행기 안에서 공황발작이 오면 탈출할 수 없다는 공포에 출장도 못 가고 가족여행도 늘 취소했습니다. 해아림에서 편도체 탈감작 치료와 비행 대비 상비 한약을 처방받아 5시간 비행을 편안하게 마쳤습니다.",
              "author": "40대 사업가 한OO 님",
              "date": "2025.01.26",
              "views": 2005,
              "image": "/images/reviews/review_1.jpg"
          },
          {
              "id": "rev-add-20241215-1734229200000",
              "category": "겨울철 실내 난방 & 질식감",
              "title": "겨울철 히터 튼 실내나 차 안에만 들어가면 답답하던 질식감 공황, 한방 치료로 완치",
              "author": "40대 주부 윤OO 님",
              "date": "2024.12.15",
              "views": 2140,
              "image": "/images/reviews/review_2.jpg",
              "hasTreatment": false,
              "treatmentType": "",
              "content": "겨울만 되면 백화점이나 사무실의 뜨거운 히터 바람에 얼굴로 열이 쏠리며 숨을 쉴 수 없는 호흡곤란과 어지럼증이 찾아왔습니다. 밀폐된 차 안에서도 히터를 틀지 못해 추위에 덜덜 떨며 운전해야 했고, 이러다 뇌혈관에 이상이 생겨 쓰러지는 건 아닌가 늘 불안했습니다. 해아림한의원에서 상열하한(上熱下寒) 체질 불균형과 심포의 울열을 풀어주는 온담탕 가감 처방을 받았습니다. 복용 한 달 만에 가슴의 답답한 열감이 내려앉고 손발이 따뜻해지면서, 겨울철 따뜻한 실내에서도 아무런 호흡곤란 없이 편안하게 겨울을 날 수 있게 되었고 외출이 다시 즐거워졌습니다.",
              "createdAt": 1734229200000,
              "updatedAt": 1734229200000
          },
          {
              "id": "rev-add-1-1773446400000",
              "category": "신경안정제 단약",
              "title": "자낙스를 3년 복용하며 끊지 못했는데, 한약 병행 후 부작용 부담을 덜며 단약 성공했습니다",
              "content": "신경안정제를 안 먹으면 하루도 버티지 못하고 끊으려 하면 반동성 불안이 더 심해져 좌절했었습니다. 해아림에서 뇌신경 자생력을 키우는 한약 치료를 병행하며 원장님 지도하에 3개월간 단계적으로 감량하여 완전히 약을 끊었습니다.",
              "author": "30대 디자이너 송OO 님",
              "date": "2024.11.03",
              "views": 2020,
              "image": "/images/reviews/review_1.jpg"
          },
          {
              "id": "rev-add-20240922-1726983000000",
              "category": "대중교통 & 지하철 급행",
              "title": "지하철 9호선 급행 열차만 타면 숨이 차던 출근길 공황, 한약 치료 후 편안하게 통근합니다",
              "author": "30대 직장인 조OO 님",
              "date": "2024.09.22",
              "views": 1890,
              "image": "/images/reviews/review_1.jpg",
              "hasTreatment": true,
              "treatmentType": "체질 맞춤 한약 + CST 뇌척수 순환요법",
              "content": "출근 시간대 지하철 9호선 급행열차에 몸을 싣는 순간 사람들 사이에 꽉 끼어 숨이 막히고 이러다 산소 부족으로 기절하겠다는 공포에 다음 역에서 비틀거리며 내렸습니다. 이후로는 일반 열차조차 타지 못해 택시를 타며 매달 수십만 원의 교통비가 들었고 사회생활 자체가 위기였습니다. 해아림한의원에서 뇌 자율신경계 과흥분을 진정시키는 맞춤 한약과 CST 뇌척수 순환치료를 2달간 받았습니다. 가슴 속에 뭉쳐 있던 긴장과 불안이 차츰 가라앉으면서 지금은 출퇴근 시간 9호선 급행 안에서도 스마트폰으로 기사를 읽으며 편안하게 목적지까지 이동하고 있습니다 또한 재발에 대한 불안 없이 일상생활을 편안하게 이어가고 있습니다.",
              "createdAt": 1726983000000,
              "updatedAt": 1726983000000
          },
          {
              "id": "rev-auto-hist-2-1771070460000",
              "category": "심인성 어지럼증",
              "title": "땅이 울렁거리고 붕 떠 있는 어지럼증, 귀 검사는 정상이었는데 한방 치료로 안정 회복",
              "content": "이비인후과와 신경과에서 온갖 검사를 받아도 정상이라는데 매일 바닥이 푹푹 꺼지는 어지럼증과 공황 불안에 시달렸습니다. 해아림에서 담음을 제거하고 뇌척수액 순환을 돕는 치료로 머리가 맑아지고 어지럼이 깨끗이 사라졌습니다.",
              "author": "50대 주부 배OO 님",
              "date": "2024.08.10",
              "views": 2035,
              "image": "/images/reviews/review_2.jpg"
          },
          {
              "id": "rev-clinical-2-1763942400000",
              "category": "터널 공황",
              "title": "남산터널만 지나가도 숨이 막히던 운전 공황, 이제 장거리 고속도로도 달립니다",
              "content": "터널에 진입하면 벽이 좁혀오는 것 같고 숨이 막혀 갓길에 차를 세우고 울기 일쑤였습니다. 해아림에서 경추 긴장을 푸는 추나요법과 뇌간 안정 한약 치료를 받고 나니 가슴 답답함이 사라지고 터널도 두렵지 않게 되었습니다.",
              "author": "30대 직장인 조OO 님",
              "date": "2024.05.18",
              "views": 2050,
              "image": "/images/reviews/review_2.jpg"
          },
          {
              "id": "rev-auto-hist-3-1761652920000",
              "category": "엘리베이터 공포",
              "title": "고층 아파트 엘리베이터 타기가 지옥이었는데 2개월 만에 극복했습니다",
              "content": "아파트 18층에 사는데 엘리베이터에 타기만 하면 갇혀서 질식할 것 같아 매일 계단으로 오르내렸습니다. 해아림 원장님의 인지행동 치료와 신경 안정 약침 치료로 공포 조건화가 풀렸고 지금은 엘리베이터를 편안하게 탑니다.",
              "author": "60대 은퇴자 신OO 님",
              "date": "2024.02.23",
              "views": 2065,
              "image": "/images/reviews/review_3.jpg"
          },
          {
              "id": "rev-add-2-1755734400000",
              "category": "수면 공황",
              "title": "잠들기 직전 심장이 덜컥 내려앉던 입면 공황, 이제 베개에 머리만 대면 잡니다",
              "content": "잠에 빠져들려는 찰나 심장이 멎는 듯 덜컥거리며 숨을 헐떡이며 깨어나는 증상 때문에 며칠 밤을 꼬박 새우며 폐인이 될 뻔했습니다. 해아림 수면안정 한약 복용 2주 만에 심장 덜컥거림이 멈추고 꿀잠을 자고 있습니다.",
              "author": "20대 대학생 장OO 님",
              "date": "2023.12.01",
              "views": 2080,
              "image": "/images/reviews/review_2.jpg"
          },
          {
              "id": "rev-clinical-3-1749686400000",
              "category": "이인증 & 비현실감",
              "title": "세상이 안개 낀 듯 멍하고 내가 아닌 것 같던 비현실감, 두개천골요법으로 맑아졌습니다",
              "content": "공황발작 후 머리에 안개가 낀 듯 멍하고 내 몸이 내 것 같지 않은 이인증으로 미쳐버릴까 봐 두려웠습니다. 해아림에서 두개천골요법(CST)과 총명청뇌탕 처방을 받은 후 흐리멍덩하던 시야와 정신이 맑게 돌아왔습니다.",
              "author": "30대 프리랜서 안OO 님",
              "date": "2023.09.07",
              "views": 2095,
              "image": "/images/reviews/review_3.jpg"
          },
          {
              "id": "rev-auto-hist-4-1746964980000",
              "category": "목 이물감 & 매핵기",
              "title": "목구멍에 가래가 딱 붙어 숨이 안 쉬어지던 매핵기, 맞춤 한약으로 시원하게 뚫렸습니다",
              "content": "목에 알사탕이 걸린 것 같아 물을 마셔도 안 넘어가고 질식할 것 같아 불안이 극에 달했습니다. 해아림 원장님께서 스트레스성 매핵기라 진단해 주시고 반하후박탕 가감방을 써주셔서 복용 10일 만에 목의 답답함이 싹 사라졌습니다.",
              "author": "40대 회사원 류OO 님",
              "date": "2023.06.14",
              "views": 2110,
              "image": "/images/reviews/review_4.jpg"
          },
          {
              "id": "rev-clinical-4-1733356800000",
              "category": "치과 공포 & 미용실",
              "title": "치과 치료 의자에 눕거나 미용실 가운만 둘러도 오던 공황발작을 이겨냈습니다",
              "content": "치과 의자에 눕혀지거나 미용실 가운을 두르면 꼼짝 못 하고 갇혔다는 공포에 뛰쳐나왔습니다. 해아림의 뇌 자생력 강화 치료와 자율신경 훈련을 통해 신체 조절감을 되찾았고 이제 치과 치료도 편안하게 받습니다.",
              "author": "30대 주부 권OO 님",
              "date": "2023.03.22",
              "views": 2125,
              "image": "/images/reviews/review_4.jpg"
          },
          {
              "id": "rev-auto-hist-5-1730635440000",
              "category": "산후 공황장애",
              "title": "출산 후 육아 스트레스와 호르몬 변화로 찾아온 공황발작, 한방 치료로 극복했습니다",
              "content": "출산 후 잠을 못 자고 아기를 돌보다가 갑자기 심장이 터질 듯 뛰고 숨이 안 쉬어져 아기를 떨어뜨릴까 봐 두려웠습니다. 수유 중에도 안전한 맞춤 한약과 침 치료를 통해 기력을 보충하고 불안을 완전히 잡았습니다.",
              "author": "30대 산모 서OO 님",
              "date": "2022.12.27",
              "views": 2140,
              "image": "/images/reviews/review_5.jpg"
          },
          {
              "id": "rev-add-3-1729209600000",
              "category": "식은땀 & 오한",
              "title": "불안할 때마다 등줄기에 식은땀이 비 오듯 쏟아지고 손발이 얼던 증상이 안정 회복되었습니다",
              "content": "회의 도중 갑자기 등과 이마에서 식은땀이 줄줄 흐르고 온몸이 사시나무 떨듯 떨려 사회생활이 어려웠습니다. 해아림에서 체온 조절 중추와 심장의 기운을 다스리는 치료를 받고 땀 분비와 떨림이 완전히 멈췄습니다.",
              "author": "40대 은행원 황OO 님",
              "date": "2022.10.04",
              "views": 2155,
              "image": "/images/reviews/review_3.jpg"
          },
          {
              "id": "rev-auto-hist-6-1724069100000",
              "category": "카페인 유발 공황",
              "title": "커피 한 잔 마시고 심장마비 올 뻔했던 공황 증세, 한약 치료 후 정상 회복",
              "content": "카페라테 한 잔 마셨다가 심박수가 150회까지 치솟고 숨이 막혀 응급실에 실려 갔습니다. 이후 카페인 공포증에 시달렸는데 해아림에서 편도체 과민도를 낮추는 한방 치료를 받고 신경계가 차분해졌습니다.",
              "author": "20대 취준생 문OO 님",
              "date": "2022.07.11",
              "views": 2170,
              "image": "/images/reviews/review_6.jpg"
          },
          {
              "id": "rev-clinical-5-1716076800000",
              "category": "영화관 공황",
              "title": "어둡고 밀폐된 영화관이나 공연장에 가면 숨 막히던 광장공포증 안정 회복",
              "content": "영화관 좌석 중간에 앉으면 도망칠 수 없다는 생각에 숨이 턱 막히고 가슴이 조여왔습니다. 해아림에서 인지 재구조화 훈련과 뇌신경 이완 한약을 복용하며 점진적으로 노출 훈련을 한 결과 이제 영화관 맨 앞자리도 편안합니다.",
              "author": "30대 교사 노OO 님",
              "date": "2022.04.18",
              "views": 2185,
              "image": "/images/reviews/review_5.jpg"
          },
          {
              "id": "rev-add-4-1711670400000",
              "category": "기상 직후 불안",
              "title": "아침에 눈뜨자마자 엄습하던 가슴 답답함과 심장 두근거림이 사라졌습니다",
              "content": "기상 알람 소리만 들어도 심장이 덜컥 내려앉고 출근길이 공포스러웠습니다. 해아림에서 기상 시 코르티솔 서지를 완충해주는 한약 처방을 받고 아침마다 느끼던 지옥 같은 불안이 사라져 상쾌하게 기상하고 있습니다.",
              "author": "30대 직장인 주OO 님",
              "date": "2022.01.23",
              "views": 2200,
              "image": "/images/reviews/review_4.jpg"
          },
          {
              "id": "rev-auto-hist-7-1709813160000",
              "category": "대중교통 공황",
              "title": "만원 버스에서 쓰러질 것 같던 호흡곤란, 3개월 치료 후 편안하게 통근합니다",
              "content": "만원 버스에 갇히면 공기가 희박하다는 착각에 식은땀을 흘리며 중간에 내리기 일쑤였습니다. 해아림의 4-6 복식호흡 처방과 1:1 맞춤 한약을 복용한 지 한 달 만에 버스 안에서도 차분하게 스마트폰을 볼 수 있게 되었습니다.",
              "author": "20대 직장인 배OO 님",
              "date": "2021.10.30",
              "views": 2215,
              "image": "/images/reviews/review_1.jpg"
          },
          {
              "id": "rev-auto-hist-8-1702642020000",
              "category": "시험 불안 & 공황",
              "title": "공무원 시험장에서 시험지 받자마자 눈앞이 캄캄해지던 공황, 안정 회복 후 합격했습니다",
              "content": "모의고사 때는 잘하다가도 실제 시험장 책상에만 앉으면 손이 마비되고 호흡이 가빠져 시험을 망쳤습니다. 해아림에서 심담(心膽)을 강화하는 한약과 뇌파 이완 훈련을 꾸준히 받은 결과 평정심을 유지하고 최종 합격했습니다.",
              "author": "20대 수험생 하OO 님",
              "date": "2021.08.07",
              "views": 2230,
              "image": "/images/reviews/review_2.jpg"
          },
          {
              "id": "rev-add-5-1699401600000",
              "category": "갱년기 공황",
              "title": "폐경 후 얼굴 열감과 함께 찾아온 극심한 공황발작, 한방 치료로 활력 찾았습니다",
              "content": "갱년기 증상인 줄만 알았는데 갑자기 심장이 멎을 듯 뛰고 질식할 것 같은 공황발작이 겹쳐 우울증까지 왔습니다. 해아림에서 자음강화 한약과 약침 치료를 통해 호르몬 불균형과 공황 불안을 동시에 해결했습니다.",
              "author": "50대 주부 곽OO 님",
              "date": "2021.05.14",
              "views": 2245,
              "image": "/images/reviews/review_5.jpg"
          },
          {
              "id": "rev-clinical-6-1697241600000",
              "category": "야간 빈맥",
              "title": "새벽 3시마다 심장이 미친 듯 뛰어 잠 못 들던 야간 발작, 2개월 만에 숙면합니다",
              "content": "매일 새벽 심장이 방망이질 치며 벌떡 일어나 밤새 거실을 서성였습니다. 해아림에서 심장의 화를 내리는 처방과 수면 리듬 동기화 침 치료를 받고 이제 새벽에 깨지 않고 아침까지 푹 잡니다.",
              "author": "40대 자영업 변OO 님",
              "date": "2021.02.19",
              "views": 2260,
              "image": "/images/reviews/review_6.jpg"
          },
          {
              "id": "rev-auto-hist-9-1690027680000",
              "category": "단약 & 사회복귀",
              "title": "정신과 약물 2년 복용 후 끊지 못하던 공황장애, 해아림에서 완전 단약하고 복직했습니다",
              "content": "약 없이는 출근도 못 하고 멍한 뇌 상태로 일하느라 지쳐 휴직했었습니다. 해아림의 뇌 자생력 프로그램으로 약을 한 알 한 알 서서히 줄여 완전히 끊었고, 맑은 정신으로 건강하게 복직했습니다.",
              "author": "30대 대기업 사원 유OO 님",
              "date": "2020.11.26",
              "views": 2275,
              "image": "/images/reviews/review_3.jpg"
          },
          {
              "id": "rev-add-6-1684108800000",
              "category": "골프장 & 넓은 공간",
              "title": "허허벌판 골프장이나 넓은 광장에서 쓰러질 것 같던 광장공포증 극복",
              "content": "주변에 기댈 벽이나 병원이 없는 넓은 야외에 나가면 공황발작이 와서 좋아하던 골프를 접었었습니다. 해아림에서 신체 조절력 강화 훈련과 맞춤 한약을 복용하며 자신감을 회복했고 지금은 필드에 다시 나갑니다.",
              "author": "50대 사업가 지OO 님",
              "date": "2020.09.02",
              "views": 2290,
              "image": "/images/reviews/review_6.jpg"
          },
          {
              "id": "rev-clinical-7-1679443200000",
              "category": "비현실감 해소",
              "title": "내가 다른 사람 몸에 들어와 있는 듯한 이인증, CST 치료로 현실 감각을 되찾았습니다",
              "content": "공황발작 후 찾아온 이인증 때문에 가족들도 낯설게 느껴져 미쳐버리는 줄 알았습니다. 해아림 원장님의 따뜻한 상담과 두개천골요법 치료로 뇌 감각 신경망이 안정되면서 현실의 온기가 온전히 돌아왔습니다.",
              "author": "20대 대학원생 엄OO 님",
              "date": "2020.06.10",
              "views": 2305,
              "image": "/images/reviews/review_1.jpg"
          },
          {
              "id": "rev-auto-hist-10-1675944540000",
              "category": "만성 체기 & 소화불량",
              "title": "공황 불안으로 늘 얹혀 있던 명치 답답함, 맞춤 한약으로 가슴이 뻥 뚫렸습니다",
              "content": "위장약을 달고 살았는데도 명치가 꽉 막혀 물 한 모금 마시기 힘들었습니다. 해아림에서 뇌-장관 신경축을 안정시키는 한약과 담적 치료를 병행하여 명치 답답함이 사라지고 식사를 맛있게 하게 되었습니다.",
              "author": "40대 주부 민OO 님",
              "date": "2020.03.17",
              "views": 2320,
              "image": "/images/reviews/review_4.jpg"
          },
          {
              "id": "rev-add-7-1670112000000",
              "category": "터널 운전 공황",
              "title": "출퇴근 터널 진입이 지옥이었던 1년, 원장님 덕분에 운전대를 다시 편하게 잡았습니다",
              "content": "터널에 들어가면 전방 시야가 좁아지고 숨이 막혀 비상등을 켜고 멈춘 적이 있었습니다. 해아림에서 3단계 한방 치료와 인지행동 지도를 받으며 터널 공포를 충실히 극복했습니다.",
              "author": "30대 연구원 천OO 님",
              "date": "2019.12.24",
              "views": 2335,
              "image": "/images/reviews/review_1.jpg"
          },
          {
              "id": "rev-auto-hist-11-1666095000000",
              "category": "고속버스 공황",
              "title": "고속도로 휴게소까지 못 버틸까 봐 고속버스를 못 타던 공황장애 안정 회복",
              "content": "고속버스 문이 닫히면 다음 휴게소까지 내릴 수 없다는 공포에 지방 출장길이 고역이었습니다. 해아림에서 뇌신경 이완 침구 치료와 체질 한약을 복용하고 나서 고속버스 안에서 편안하게 잠을 잘 수 있게 되었습니다.",
              "author": "40대 영업직 방OO 님",
              "date": "2019.09.30",
              "views": 2350,
              "image": "/images/reviews/review_5.jpg"
          },
          {
              "id": "rev-clinical-8-1661817600000",
              "category": "혈압 급등 공황",
              "title": "공황발작 때마다 혈압이 170까지 치솟아 뇌출혈 공포에 떨었는데 안정되었습니다",
              "content": "발작이 오면 혈압이 치솟아 혈압계를 들고 살며 응급실을 전전했습니다. 해아림에서 심장과 간의 열을 내리는 한방 치료를 받고 발작이 사라지면서 혈압도 정상으로 유지되고 있습니다.",
              "author": "50대 교직원 공OO 님",
              "date": "2019.07.08",
              "views": 2365,
              "image": "/images/reviews/review_2.jpg"
          },
          {
              "id": "rev-auto-hist-12-1653826260000",
              "category": "호흡곤란 안정 회복",
              "title": "한숨을 쉬어도 숨이 끝까지 안 들어오던 답답함, 횡격막 이완 치료로 해결",
              "content": "하루 종일 가슴에 모래주머니를 얹은 듯 숨을 깊게 들이쉬지 못해 괴로웠습니다. 해아림에서 흉곽 호흡근 침 치료와 호흡 안정 한약을 처방받고 숨이 가슴 깊숙이 시원하게 들어가게 되었습니다.",
              "author": "30대 직장인 채OO 님",
              "date": "2019.04.14",
              "views": 2380,
              "image": "/images/reviews/review_6.jpg"
          },
          {
              "id": "rev-add-8-1650153600000",
              "category": "백화점 & 마트 공황",
              "title": "사람 많은 마트나 백화점에만 가면 어지럽고 쓰러질 것 같던 증상 극복",
              "content": "복잡한 대형마트 조명 아래에 서면 어지럼증과 식은땀이 나며 주저앉았습니다. 해아림에서 시각 자극 과민도를 낮추는 한약 치료를 받고 지금은 가족들과 여유롭게 장을 봅니다.",
              "author": "40대 주부 남OO 님",
              "date": "2019.01.19",
              "views": 2395,
              "image": "/images/reviews/review_2.jpg"
          },
          {
              "id": "rev-auto-hist-13-1638619920000",
              "category": "약물 테이퍼링 성공",
              "title": "알프라졸람 없이는 외출도 못 하던 생활에서 벗어나 완전 단약했습니다",
              "content": "약물 의존성이 심해져 가방에 알약이 없으면 불안이 폭발했습니다. 해아림에서 뇌의 자생 조절력을 키우는 체질 한약을 복용하며 3개월 만에 부작용 부담을 덜며 단약에 성공했습니다.",
              "author": "30대 은행원 선OO 님",
              "date": "2018.10.27",
              "views": 2410,
              "image": "/images/reviews/review_1.jpg"
          },
          {
              "id": "rev-clinical-9-1636934400000",
              "category": "치료 조기 회복",
              "title": "발병 1개월 만에 해아림을 찾아 초기 집중 치료로 4주 만에 일상 복귀",
              "content": "첫 공황발작 후 지체 없이 해아림을 찾았습니다. 원장님의 빠른 진단과 1:1 맞춤 한약 치료 덕분에 만성화되지 않고 4주 만에 발작이 완전히 멈췄습니다.",
              "author": "20대 대학생 탁OO 님",
              "date": "2018.08.03",
              "views": 2425,
              "image": "/images/reviews/review_3.jpg"
          },
          {
              "id": "rev-add-9-1629676800000",
              "category": "회의실 공황",
              "title": "밀폐된 회의실 문이 닫히면 숨이 안 쉬어지던 공황 불안을 이겨냈습니다",
              "content": "임원 회의실에만 들어가면 문을 열고 뛰쳐나가고 싶어 회사를 그만두려 했습니다. 해아림에서 뇌신경 이완 치료와 4-6 복식호흡 지도를 받고 차분하게 회의를 주재하고 있습니다.",
              "author": "40대 부장 도OO 님",
              "date": "2018.05.11",
              "views": 2440,
              "image": "/images/reviews/review_3.jpg"
          },
          {
              "id": "rev-auto-hist-14-1623931980000",
              "category": "과호흡 & 손발 경련",
              "title": "과호흡으로 응급실에서 봉지 호흡하던 증상, 한방 치료로 완전히 멈췄습니다",
              "content": "숨을 헐떡이다가 손발이 뒤틀려 마비되는 발작이 한 달에 서너 번씩 왔습니다. 해아림에서 호흡 신경망을 안정시키는 한약 치료를 받은 후 1년째 단 한 번도 과호흡이 오지 않았습니다.",
              "author": "30대 주부 모OO 님",
              "date": "2018.02.15",
              "views": 2455,
              "image": "/images/reviews/review_2.jpg"
          },
          {
              "id": "rev-auto-hist-15-1606133640000",
              "category": "운전 공황 극복",
              "title": "운전면허를 반납하려다 해아림 치료받고 주말마다 드라이브 다닙니다",
              "content": "운전대만 잡으면 심장이 멎을 듯 뛰어 차를 처분하려 했습니다. 해아림에서 두개천골요법과 한약 치료로 신경계 긴장을 풀고 나니 운전이 다시 즐거워졌습니다.",
              "author": "40대 직장인 진OO 님",
              "date": "2017.11.23",
              "views": 2470,
              "image": "/images/reviews/review_3.jpg"
          },
          {
              "id": "rev-add-10-1605139200000",
              "category": "심장 신경증",
              "title": "부정맥인 줄 알고 24시간 홀터 검사까지 받았던 공황장애, 한방으로 안정 회복",
              "content": "심장이 쿵쾅거리고 불규칙하게 뛰어 심장마비 공포에 시달렸습니다. 심장내과 검사 정상 판정 후 해아림을 찾아 심담허겁 한약 치료를 받고 심장 박동이 평온을 되찾았습니다.",
              "author": "50대 자영업 표OO 님",
              "date": "2017.08.30",
              "views": 2485,
              "image": "/images/reviews/review_4.jpg"
          },
          {
              "id": "rev-clinical-10-1594166400000",
              "category": "미용실 가운 공황",
              "title": "미용실에서 머리 자르다 뛰쳐나왔던 트라우마, 이제 파마까지 편하게 합니다",
              "content": "의자에 앉아 가운을 두르면 도망칠 수 없다는 생각에 공황발작이 와서 머리도 집에서 잘랐습니다. 해아림 치료 후 공포 조건화가 사라져 미용실에서 여유롭게 케어를 받습니다.",
              "author": "30대 직장인 구OO 님",
              "date": "2017.06.06",
              "views": 2500,
              "image": "/images/reviews/review_4.jpg"
          },
          {
              "id": "rev-auto-hist-16-1586693700000",
              "category": "야간 질식감",
              "title": "잠결에 숨이 턱 막혀 침대에서 벌떡 일어나던 공황발작 완벽 치료",
              "content": "잠들기만 하면 질식해서 죽을 것 같은 공포에 불면증으로 피폐해졌습니다. 해아림 원장님의 섬세한 한약 처방으로 야간 수면 신경망이 안정되어 매일 아침 개운하게 일어납니다.",
              "author": "40대 회사원 라OO 님",
              "date": "2017.03.14",
              "views": 2515,
              "image": "/images/reviews/review_4.jpg"
          },
          {
              "id": "rev-add-11-1583366400000",
              "category": "지하철 환승 공포",
              "title": "지하철 환승 통로에서 오던 과호흡과 어지럼증, 출퇴근길이 평온해졌습니다",
              "content": "사람들이 붐비는 환승역에만 가면 숨이 막히고 다리에 힘이 풀렸습니다. 해아림에서 뇌혈류 개선 한약과 약침 치료를 받고 출퇴근길이 아무렇지 않게 편안해졌습니다.",
              "author": "20대 사회초년생 복OO 님",
              "date": "2016.12.19",
              "views": 2530,
              "image": "/images/reviews/review_5.jpg"
          },
          {
              "id": "rev-add-12-1571443200000",
              "category": "장애 회피 극복",
              "title": "집 밖으로 나가지 못하던 광장공포증 은둔 생활에서 벗어나 산책을 즐깁니다",
              "content": "집 현관문만 나서도 심장이 요동쳐 6개월간 집 안에서만 지냈습니다. 해아림에서 체질 한약 복용과 함께 단계적 외출 훈련을 격려해 주신 덕분에 이제 매일 1시간씩 공원 산책을 합니다.",
              "author": "30대 취준생 연OO 님",
              "date": "2016.09.26",
              "views": 2545,
              "image": "/images/reviews/review_6.jpg"
          },
          {
              "id": "rev-auto-hist-17-1569672960000",
              "category": "호르몬성 공황",
              "title": "생리 전만 되면 심장이 요동치던 PMS 공황 증후군, 맞춤 한약으로 해소",
              "content": "생리 일주일 전부터 공황발작과 극심한 감정 기복에 시달렸습니다. 해아림에서 소간해울 한약 처방을 받고 호르몬 변화에도 흔들림 없이 편안한 일상을 유지하고 있습니다.",
              "author": "20대 직장인 설OO 님",
              "date": "2016.07.03",
              "views": 2560,
              "image": "/images/reviews/review_5.jpg"
          },
          {
              "id": "rev-clinical-11-1556150400000",
              "category": "비행기 장거리 출장",
              "title": "비행기 공포증으로 해외 출장을 포기할 뻔했는데 10시간 비행 성공했습니다",
              "content": "유럽 출장을 앞두고 기내 공황발작 공포에 밤잠을 설쳤습니다. 해아림에서 뇌신경 이완 한약 치료를 집중적으로 받고 10시간 비행을 편안하게 마치고 출장을 완수했습니다.",
              "author": "40대 임원 형OO 님",
              "date": "2016.04.09",
              "views": 2575,
              "image": "/images/reviews/review_5.jpg"
          },
          {
              "id": "rev-auto-hist-18-1552652220000",
              "category": "이인증 안정 회복",
              "title": "유리벽 속에 갇힌 것 같던 비현실감과 공황불안, 두개천골요법으로 안정 회복",
              "content": "세상이 비현실적이고 꿈속을 걷는 듯한 느낌 때문에 일상생활이 불가능했습니다. 해아림에서 두개천골요법과 한약 치료를 받은 후 감각이 선명해지고 현실로 온전히 돌아왔습니다.",
              "author": "30대 작가 석OO 님",
              "date": "2016.01.16",
              "views": 2590,
              "image": "/images/reviews/review_6.jpg"
          },
          {
              "id": "rev-auto-hist-19-1538741880000",
              "category": "식도 이물감",
              "title": "목구멍이 꽉 막혀 침도 못 삼키던 매핵기 증상, 한약 3주 만에 해소",
              "content": "목에 이물질이 걸린 듯 답답하여 식사를 거르고 살이 빠졌습니다. 해아림의 뭉친 기를 풀어주는 한약 치료로 목의 이물감이 완전히 사라져 밥을 편하게 먹습니다.",
              "author": "50대 주부 갈OO 님",
              "date": "2015.10.23",
              "views": 2605,
              "image": "/images/reviews/review_1.jpg"
          },
          {
              "id": "rev-add-13-1530316800000",
              "category": "터널 공포증 안정 회복",
              "title": "강남순환고속도로 긴 터널을 매일 출퇴근하며 운전 공황을 완전히 잊었습니다",
              "content": "터널 안 정체구간에 갇히면 차 문을 열고 뛰쳐나가고 싶었습니다. 해아림 치료 후 터널에 들어가도 심장이 편안하게 유지되어 매일 운전하며 출퇴근합니다.",
              "author": "40대 직장인 감OO 님",
              "date": "2015.07.31",
              "views": 2620,
              "image": "/images/reviews/review_1.jpg"
          },
          {
              "id": "rev-auto-hist-20-1524226740000",
              "category": "기상 어지럼증",
              "title": "아침마다 눈앞이 캄캄해지고 쓰러질 것 같던 심인성 기립 어지럼증 안정 회복",
              "content": "아침에 침대에서 일어날 때마다 어지럼증과 심계항진으로 고통받았습니다. 해아림에서 뇌신경 조절 한약과 경추 교정을 받고 아침이 개운해졌습니다.",
              "author": "30대 연구원 봉OO 님",
              "date": "2015.05.07",
              "views": 2635,
              "image": "/images/reviews/review_2.jpg"
          },
          {
              "id": "rev-auto-hist-21-1510489200000",
              "category": "손발 저림 & 마비",
              "title": "공황 때마다 손발이 굳고 찌릿거리던 과호흡 증상, 복식호흡과 한약으로 극복",
              "content": "손가락이 꼬여 마비되는 증상으로 응급실을 단골로 찾았습니다. 해아림에서 호흡 안정 훈련과 신경 안정 한약을 복용한 뒤 손발 저림이 완전히 멈췄습니다.",
              "author": "20대 취준생 피OO 님",
              "date": "2015.02.12",
              "views": 2650,
              "image": "/images/reviews/review_3.jpg"
          },
          {
              "id": "rev-clinical-12-1505088000000",
              "category": "단약 성공 & 활력",
              "title": "리보트릴 4년 복용 후 끊지 못하던 불안감, 해아림 치료로 완전 단약 성공",
              "content": "신경과 약을 평생 먹어야 하나 절망했었는데 해아림 원장님의 단계적 감량 프로그램으로 4개월 만에 안전하게 약을 끊고 맑은 정신을 되찾았습니다.",
              "author": "40대 자영업 여OO 님",
              "date": "2014.11.19",
              "views": 2665,
              "image": "/images/reviews/review_6.jpg"
          },
          {
              "id": "rev-add-14-1492128000000",
              "category": "수면 공황 안정 회복",
              "title": "자다가 숨이 막혀 119 부를 뻔했던 야간 발작, 두 달 치료로 숙면합니다",
              "content": "잠들면 심장이 요동쳐 밤이 오는 게 무서웠습니다. 해아림에서 수면 신경망을 진정시키는 한약과 약침 치료를 받고 매일 7시간씩 푹 잡니다.",
              "author": "50대 주부 제OO 님",
              "date": "2014.08.26",
              "views": 2680,
              "image": "/images/reviews/review_2.jpg"
          },
          {
              "id": "rev-auto-hist-22-1481199660000",
              "category": "엘리베이터 공포 극복",
              "title": "25층 아파트를 계단으로 다니던 생활 끝! 엘리베이터 혼자서도 잘 탑니다",
              "content": "엘리베이터 갇힘 공포로 다리가 풀리던 증상이 해아림의 뇌 자생력 회복 치료와 인지행동 훈련을 통해 완전히 사라졌습니다.",
              "author": "30대 직장인 옥OO 님",
              "date": "2014.06.03",
              "views": 2695,
              "image": "/images/reviews/review_4.jpg"
          },
          {
              "id": "rev-add-15-1470700800000",
              "category": "발표 공황 안정 회복",
              "title": "프레젠테이션 때마다 목소리가 잠기고 숨차던 증상, 한방 치료로 안정 회복",
              "content": "회사 발표 때마다 찾아오던 공황발작을 극복하고 이번 프로젝트 발표를 성공적으로 마쳐 승진했습니다. 원장님께 진심으로 감사드립니다.",
              "author": "30대 과장 동OO 님",
              "date": "2014.03.10",
              "views": 2710,
              "image": "/images/reviews/review_3.jpg"
          },
          {
              "id": "rev-clinical-13-1449091200000",
              "category": "신경성 위경련",
              "title": "불안할 때마다 쥐어짜듯 아프던 명치 통증과 소화불량, 담적 치료로 회복",
              "content": "위장 내시경은 정상인데 명치가 돌처럼 굳어 음식을 못 먹었습니다. 해아림에서 뇌-장관 신경축을 다스리는 한약 처방을 받고 소화가 너무 잘 됩니다.",
              "author": "40대 주부 계OO 님",
              "date": "2013.12.16",
              "views": 2725,
              "image": "/images/reviews/review_1.jpg"
          },
          {
              "id": "rev-auto-hist-23-1439986920000",
              "category": "영화관 좌석 공포",
              "title": "영화관 통로 쪽에만 앉던 광장공포증, 이제 가운데 자리에서 영화 봅니다",
              "content": "탈출이 어려울까 봐 통로 끝자리에만 앉았는데 해아림 치료를 받고 불안이 사라져 이제 친구들과 영화관 중앙 좌석에서 영화를 즐깁니다.",
              "author": "20대 대학생 은OO 님",
              "date": "2013.09.22",
              "views": 2740,
              "image": "/images/reviews/review_5.jpg"
          },
          {
              "id": "rev-add-16-1414368000000",
              "category": "상열하한 극복",
              "title": "얼굴은 불나듯 뜨겁고 발은 얼음처럼 차갑던 공황 체온 실조, 수승화강 안정 회복",
              "content": "상열감으로 얼굴이 붉어지고 발은 시려 잠을 못 잤는데, 해아림에서 수승화강 한약과 뜸 치료를 받고 몸의 온도 균형이 충실히 맞춰졌습니다.",
              "author": "50대 교사 탁OO 님",
              "date": "2013.06.30",
              "views": 2755,
              "image": "/images/reviews/review_4.jpg"
          },
          {
              "id": "rev-auto-hist-24-1413289380000",
              "category": "단약 & 시험 합격",
              "title": "공황장애 약 먹으며 졸리던 수험 생활, 한방 치료로 단약하고 자격증 취득",
              "content": "신경안정제 부작용으로 낮에 졸려 공부를 못 했습니다. 해아림에서 머리가 맑아지는 한약으로 전환하여 단약하고 집중력을 발휘해 시험에 합격했습니다.",
              "author": "20대 고시생 온OO 님",
              "date": "2013.04.06",
              "views": 2770,
              "image": "/images/reviews/review_6.jpg"
          },
          {
              "id": "rev-auto-hist-25-1384950240000",
              "category": "고속도로 운전 안정 회복",
              "title": "고속도로 진입로만 보면 심장이 터질 것 같던 운전 공황, 충실하게 극복",
              "content": "국도로만 돌아다니느라 출장이 힘들었는데 해아림 치료 후 고속도로를 시속 100km로 달려도 가슴이 편안합니다.",
              "author": "40대 자영업 범OO 님",
              "date": "2013.01.11",
              "views": 2785,
              "image": "/images/reviews/review_1.jpg"
          },
          {
              "id": "rev-clinical-14-1376870400000",
              "category": "초기 공황 안정 회복",
              "title": "첫 공황발작 후 바로 해아림을 찾아 2개월 치료로 깨끗이 안정 회복되었습니다",
              "content": "응급실에서 이상 없다는 말을 듣자마자 해아림을 찾아 조기에 치료받은 덕분에 만성 공황으로 가지 않고 안정 회복되었습니다.",
              "author": "30대 연구원 포OO 님",
              "date": "2012.10.19",
              "views": 2800,
              "image": "/images/reviews/review_2.jpg"
          },
          {
              "id": "rev-auto-hist-26-1353068700000",
              "category": "치과 체어 공황 안정 회복",
              "title": "치과 마취 주사 맞고 기절할 뻔했던 트라우마, 한방 치료로 극복하고 임플란트 완료",
              "content": "치과 치료 공포로 치아가 다 망가졌었는데 해아림에서 뇌신경 안정 치료를 받고 치과 공포를 이겨내 임플란트 수술을 잘 마쳤습니다.",
              "author": "60대 은퇴자 선OO 님",
              "date": "2012.07.26",
              "views": 2815,
              "image": "/images/reviews/review_2.jpg"
          },
          {
              "id": "rev-auto-hist-27-1337689560000",
              "category": "야간 심계항진 안정 회복",
              "title": "새벽마다 심장마비 공포로 잠 못 이루던 날들, 이제 아침까지 꿀잠 잡니다",
              "content": "심장이 요동치며 깨어나던 야간 공황이 완전히 사라졌습니다. 해아림 원장님의 세심한 처방 덕분에 밤이 더 이상 두렵지 않습니다.",
              "author": "40대 주부 호OO 님",
              "date": "2012.05.03",
              "views": 2830,
              "image": "/images/reviews/review_3.jpg"
          },
          {
              "id": "rev-add-17-1337299200000",
              "category": "만성 공황 안정 회복",
              "title": "10년 묵은 만성 공황장애, 해아림에서 뇌신경 자생력 키우고 새 삶을 찾았습니다",
              "content": "10년간 양약에만 의존하며 희망을 잃었었는데 해아림한의원에서 6개월간 체계적인 한방 통합 치료를 받고 마침내 완전한 자유를 얻었습니다.",
              "author": "50대 직장인 명OO 님",
              "date": "2012.02.08",
              "views": 2845,
              "image": "/images/reviews/review_5.jpg"
          },
          {
              "id": "rev-clinical-15-1322438400000",
              "category": "일상 회복 & 안정 회복",
              "title": "공황장애로 잃어버렸던 3년의 시간, 해아림을 만나 온전한 나를 되찾았습니다",
              "content": "언제 어디서 발작이 터질지 몰라 늘 불안에 떨며 사람들도 피하고 살았습니다. 해아림한의원에서 4개월간 꾸준히 치료받은 후 가슴 두근거림과 불안이 완전히 사라졌고, 이제는 좋아하는 친구들도 만나고 가족들과 주말 나들이도 편안하게 즐기며 행복한 일상을 누리고 있습니다.",
              "author": "40대 주부 성OO 님",
              "date": "2011.11.15",
              "views": 2860,
              "image": "/images/reviews/review_3.jpg"
          }
        ];
        var defaultYoutubeData = [
          {
              "id": "yt-1",
              "category": "초기증상/진단",
              "author": "해아림TV",
              "date": "2026.09.08",
              "views": 24800,
              "videoEmbed": "https://www.youtube-nocookie.com/embed/xQNUKykM1Ac",
              "thumb": "https://img.youtube.com/vi/xQNUKykM1Ac/maxresdefault.jpg",
              "title": "공황장애 초기증상 5가지! 모르고 지나칠 수 있는 신체 증상",
              "content": "가슴 두근거림, 호흡곤란, 어지럼증, 식은땀 등 일상에서 단순 피로로 오인하기 쉬운 공황장애 5대 초기 신호와 조기 치료 골든타임을 상세히 짚어드립니다."
          },
          {
              "id": "yt-2",
              "category": "응급대처/호흡",
              "author": "해아림TV",
              "date": "2026.08.24",
              "views": 21500,
              "videoEmbed": "https://www.youtube-nocookie.com/embed/vXck-ijvrWo",
              "thumb": "https://img.youtube.com/vi/vXck-ijvrWo/maxresdefault.jpg",
              "title": "약물 없이 공황발작 극복하는 뇌 신경 조절법",
              "content": "갑작스러운 공황발작이 엄습했을 때 약물 없이도 뇌 편도체의 비상경보를 해제하고 부교감신경을 작동시키는 임상 호흡 및 인지 조절 테크닉을 전수합니다."
          },
          {
              "id": "yt-3",
              "category": "생활관리/식이",
              "author": "해아림TV",
              "date": "2026.08.05",
              "views": 19800,
              "videoEmbed": "https://www.youtube-nocookie.com/embed/EKjGgZ869SM",
              "thumb": "https://img.youtube.com/vi/EKjGgZ869SM/maxresdefault.jpg",
              "title": "커피, 술, 담배가 공황을 부른다? 공황발작 극복법, 이것부터 끊자!",
              "content": "카페인과 알코올, 니코틴이 뇌 신경전달물질과 교감신경계를 어떻게 자극하여 급성 발작을 촉발하는지 뇌과학적 원인과 안전한 절제법을 설명합니다."
          },
          {
              "id": "yt-4",
              "category": "응급대처/호흡",
              "author": "해아림TV",
              "date": "2026.07.18",
              "views": 27400,
              "videoEmbed": "https://www.youtube-nocookie.com/embed/kNUsYLHsECo",
              "thumb": "https://img.youtube.com/vi/kNUsYLHsECo/maxresdefault.jpg",
              "title": "3초 만에 공황발작 극복하는 호흡 응급대처 꿀팁",
              "content": "숨이 가빠지고 심장이 요동칠 때 현장에서 즉각 시행할 수 있는 4-6 복식 구순 호흡법과 미주신경 자극 테크닉 실천 가이드."
          },
          {
              "id": "yt-5",
              "category": "생활관리/식이",
              "author": "해아림TV",
              "date": "2026.06.29",
              "views": 18200,
              "videoEmbed": "https://www.youtube-nocookie.com/embed/du_4MHeffkY",
              "thumb": "https://img.youtube.com/vi/du_4MHeffkY/maxresdefault.jpg",
              "title": "공황장애를 완화시키는 음식! 매일 먹으면 공황을 부르는 음식 vs 진정 음식",
              "content": "단순 당류와 인스턴트 식품이 혈당 스파이크와 신경 불안을 유발하는 기전, 뇌 신경망을 편안하게 이완시키는 천연 식이요법 총정리."
          },
          {
              "id": "yt-6",
              "category": "증상/진단",
              "author": "해아림TV",
              "date": "2026.06.10",
              "views": 16900,
              "videoEmbed": "https://www.youtube-nocookie.com/embed/Hc1H497XGj4",
              "thumb": "https://img.youtube.com/vi/Hc1H497XGj4/maxresdefault.jpg",
              "title": "불안장애와 공황장애, 어떻게 다를까? 감별 진단 포인트",
              "content": "만성적인 걱정에 시달리는 범불안장애와 갑작스러운 신체 폭주를 동반하는 공황장애의 뇌 메커니즘 차이 및 맞춤형 치법 비교."
          },
          {
              "id": "yt-7",
              "category": "자가진단/스트레스",
              "author": "해아림TV",
              "date": "2026.05.22",
              "views": 15400,
              "videoEmbed": "https://www.youtube-nocookie.com/embed/zfv9qxDP3E0",
              "thumb": "https://img.youtube.com/vi/zfv9qxDP3E0/maxresdefault.jpg",
              "title": "스트레스 공황장애와 자가진단, 공황 치료에 좋은 식습관",
              "content": "만성 스트레스 누적으로 인한 심포(心包)의 울화와 신경 쇠약 상태를 자가 체크하고 신경계를 복원하는 한방 생활 치법을 안내합니다."
          },
          {
              "id": "yt-8",
              "category": "생활관리/금기",
              "author": "해아림TV",
              "date": "2026.05.04",
              "views": 16300,
              "videoEmbed": "https://www.youtube-nocookie.com/embed/8MKUAGgx_Dc",
              "thumb": "https://img.youtube.com/vi/8MKUAGgx_Dc/maxresdefault.jpg",
              "title": "공황장애 환자가 일상에서 주의 깊게 관리해야 할 생활습관",
              "content": "수면 부족, 과도한 공복, 급격한 온도 변화, 무리한 고강도 유산소 운동 등 공황발작 역치를 낮추는 일상 속 위험 요소를 짚어드립니다."
          },
          {
              "id": "yt-9",
              "category": "한방치료/원리",
              "author": "해아림TV",
              "date": "2026.04.15",
              "views": 17100,
              "videoEmbed": "https://www.youtube-nocookie.com/embed/NEP1BZ2BUlU",
              "thumb": "https://img.youtube.com/vi/NEP1BZ2BUlU/maxresdefault.jpg",
              "title": "한의원에서는 공황장애를 어떻게 치료할까? 맞춤 한약과 CST 원리",
              "content": "뇌 신경계를 강제로 마취하지 않고 뇌척수액 순환과 장부 불균형을 다스려 스스로 평온을 유지하게 만드는 한방 체계적인 치료 로드맵."
          },
          {
              "id": "yt-10",
              "category": "응급대처/주의사항",
              "author": "해아림TV",
              "date": "2026.03.28",
              "views": 18900,
              "videoEmbed": "https://www.youtube-nocookie.com/embed/u22S9nv0x6k",
              "thumb": "https://img.youtube.com/vi/u22S9nv0x6k/maxresdefault.jpg",
              "title": "공황발작 올 때 환자들이 흔히 하는 치명적인 대처 실수 3가지",
              "content": "과도하게 숨을 몰아쉬는 행동, 무조건 응급실로 뛰쳐나가는 행동 등 발작을 오히려 악화시키는 흔한 대처 오류와 올바른 현장 수칙."
          },
          {
              "id": "yt-11",
              "category": "신체증상/극복",
              "author": "해아림TV",
              "date": "2026.03.09",
              "views": 14700,
              "videoEmbed": "https://www.youtube-nocookie.com/embed/viUV208x2Yc",
              "thumb": "https://img.youtube.com/vi/viUV208x2Yc/maxresdefault.jpg",
              "title": "공황장애 신체 증상과 공황발작 극복을 위한 단계별 행동 요령",
              "content": "신체 감각에 대한 재해석 훈련과 단계적 노출 요법을 통해 공황 공포를 점진적으로 무력화하는 인지행동 치료 기법."
          },
          {
              "id": "yt-12",
              "category": "이완훈련/호흡",
              "author": "해아림TV",
              "date": "2026.02.18",
              "views": 22300,
              "videoEmbed": "https://www.youtube-nocookie.com/embed/BdmJElFUZhM",
              "thumb": "https://img.youtube.com/vi/BdmJElFUZhM/maxresdefault.jpg",
              "title": "공황발작 30초 만에 멈추는 미주신경 이완 호흡법",
              "content": "가슴과 횡격막의 긴장을 풀고 부교감신경 활성도를 급격히 끌어올리는 심박 감속 호흡법 실습 영상."
          },
          {
              "id": "yt-13",
              "category": "예기불안/재발방지",
              "author": "해아림TV",
              "date": "2026.01.30",
              "views": 13900,
              "videoEmbed": "https://www.youtube-nocookie.com/embed/oSwxUJQC0kI",
              "thumb": "https://img.youtube.com/vi/oSwxUJQC0kI/maxresdefault.jpg",
              "title": "공황장애 치료 후 재발 방지와 예기불안 차단 전략",
              "content": "발작이 끝난 후에도 24시간 머릿속을 맴도는 예기불안의 뇌과학적 회로를 끊어내고 일상으로 완전히 복귀하는 관리법."
          },
          {
              "id": "yt-14",
              "category": "한방치료/자가관리",
              "author": "해아림TV",
              "date": "2026.01.12",
              "views": 16500,
              "videoEmbed": "https://www.youtube-nocookie.com/embed/DSBxDyavr38",
              "thumb": "https://img.youtube.com/vi/DSBxDyavr38/maxresdefault.jpg",
              "title": "공황장애 한방치료와 집에서 스스로 실천하는 자가 관리법",
              "content": "내관혈, 신문혈 혈자리 지압법과 족욕, 수면 환경 최적화를 통해 뇌 기저 긴장도를 낮추는 한방 자가 치유 프로토콜."
          },
          {
              "id": "yt-15",
              "category": "자율신경/공황감별",
              "author": "해아림TV",
              "date": "2025.12.20",
              "views": 28900,
              "videoEmbed": "https://www.youtube-nocookie.com/embed/CtJhtdF93LM",
              "thumb": "https://img.youtube.com/vi/CtJhtdF93LM/maxresdefault.jpg",
              "title": "공황장애 5대 신호! 어질어질 두근두근 자율신경 vs 공황장애 구분법",
              "content": "자율신경 불균형으로 인한 신체 증상과 공황장애의 편도체 공포 반응의 상호 연관성 및 한의학적 동시 치료 효과."
          }
        ];
        var defaultColumnsData = [
          {
              "id": "col-auto-1791160200000",
              "poolId": "col-ext-10",
              "category": "칼럼",
              "author": "해아림한의원",
              "date": "2026.10.05",
              "views": 237,
              "image": "/images/columns/column_30_cure_homeostasis.svg",
              "title": "공황장애 치료 후 완전히 회복할 수 있나요? - 재발 방지를 돕는 자율신경 안정 요법",
              "summary": "급성기 증상이 가라앉은 후 자율신경계 본래의 조절력과 스트레스 회복탄력성을 공고히 하는 장기 관리 치법.",
              "content": "급성기 증상이 가라앉은 후 자율신경계 본래의 조절력과 스트레스 회복탄력성을 공고히 하는 장기 관리 치법.\n\n◆뇌신경망 시냅스 가소성 안착과 신경전달물질 밸런스 유지\n발작이 멈추었다고 해서 자율신경계 조절 기능이 100% 완전해진 것은 아닙니다. 뇌신경망이 새로운 안정 상태에 완전히 안착할 때까지 취약 요인을 다스리고 자율신경 회복탄력성을 보강해야 장기적인 안정을 누릴 수 있습니다.\n\n■ 한방신경정신과 맞춤 처방 및 통합 치법\n심비(心脾)를 보익하고 뇌피로를 씻어내는 조위귀비탕과 생맥산 처방을 통해 기혈 밸런스를 다집니다. 개인별 체질과 자율신경 균형 검사(HRV), 뇌기능 검사 결과를 바탕으로 1:1 맞춤 가감하여 신경계의 회복 탄력성을 극대화합니다.\n\n■ 환자가 일상에서 실천해야 할 핵심 수칙\n규칙적인 수면 기상 시간 준수와 함께 주 3회 30분 이상의 유산소 걷기, 긍정적 자기 암시를 생활화합니다. 신체 증상이 나타났을 때 공포에 질려 과호흡을 하거나 몸부림치지 마시고, '이것은 일시적인 자율신경의 가짜 경보이며 내 몸은 결코 무너지지 않는다'는 확고한 인지적 팩트를 상기하십시오.\n\n해아림한의원에서는 두려움과 고통 속에 갇힌 환자분들이 본래의 평온하고 건강한 삶으로 되돌아가실 수 있도록 체계적인 단계별 치료 프로토콜을 성심껏 제공합니다.\n\n[공황장애 정밀검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
              "isAutoPublished": true,
              "isCustom": true,
              "createdAt": 1791160200000,
              "updatedAt": 1791160200000
          },
          {
              "id": "col-auto-1790987400000",
              "poolId": "col-ext-9",
              "category": "칼럼",
              "author": "해아림한의원",
              "date": "2026.10.03",
              "views": 178,
              "image": "/images/columns/column_1_palpitation.svg",
              "title": "숨이 가빠지면서 손발이 마비되고 뒤틀릴 때: 급성 과호흡을 바로잡는 4-6 호흡법",
              "summary": "혈중 이산화탄소 농도 급락으로 뇌혈관이 수축하여 나타나는 감각 이상과 구순 복식호흡의 신경생리학적 효과.",
              "content": "혈중 이산화탄소 농도 급락으로 뇌혈관이 수축하여 나타나는 감각 이상과 구순 복식호흡의 신경생리학적 효과.\n\n◆보어 효과(Bohr Effect) 왜곡과 말초 산소 공급 차단 교정\n과호흡으로 이산화탄소가 과다 배출되면 혈액이 알칼리화되어 헤모글로빈이 산소를 떼어주지 않는 보어 효과가 발생합니다. 이로 인해 말초 조직에 산소가 가지 않아 손발이 저리고 찌릿한 마비감이 오는데, 이는 천천히 길게 내쉬는 호흡으로 혈중 CO2를 보충하면 가라앉습니다.\n\n■ 한방신경정신과 맞춤 처방 및 통합 치법\n폐와 신장의 납기(納氣) 기능을 보강하여 호흡 깊이를 안정시키는 자신윤폐 맞춤 한약을 처방합니다. 개인별 체질과 자율신경 균형 검사(HRV), 뇌기능 검사 결과를 바탕으로 1:1 맞춤 가감하여 신경계의 회복 탄력성을 극대화합니다.\n\n■ 환자가 일상에서 실천해야 할 핵심 수칙\n가슴 숨을 참으려 애쓰기보다 촛불을 끄듯 입술을 모으고 6초 이상 천천히 날숨을 길게 내쉬는 구순 호흡을 반복합니다. 신체 증상이 나타났을 때 공포에 질려 과호흡을 하거나 몸부림치지 마시고, '이것은 일시적인 자율신경의 가짜 경보이며 내 몸은 결코 무너지지 않는다'는 확고한 인지적 팩트를 상기하십시오.\n\n해아림한의원에서는 두려움과 고통 속에 갇힌 환자분들이 본래의 평온하고 건강한 삶으로 되돌아가실 수 있도록 체계적인 단계별 치료 프로토콜을 성심껏 제공합니다.\n\n[공황장애 정밀검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
              "isAutoPublished": true,
              "isCustom": true,
              "createdAt": 1790987400000,
              "updatedAt": 1790987400000
          },
          {
              "id": "col-auto-1790814600000",
              "poolId": "col-ext-8",
              "category": "칼럼",
              "author": "해아림한의원",
              "date": "2026.10.01",
              "views": 186,
              "image": "/images/columns/column_7_cervical_cst.svg",
              "title": "가슴 두근거림과 함께 목덜미가 뻣뻣하고 두통이 와요: 뇌척수 순환을 돕는 두개천골요법",
              "summary": "후두하근 긴장을 이완시켜 뇌척수액 순환을 정상화하고 미주신경 억제력을 북돋우는 수기 치료.",
              "content": "후두하근 긴장을 이완시켜 뇌척수액 순환을 정상화하고 미주신경 억제력을 북돋우는 수기 치료.\n\n◆후두골 정맥동과 경정맥공 긴장 해소를 통한 뇌신경 감압\n만성 긴장과 스트레스로 후두하근이 굳으면 9, 10, 11번 뇌신경이 통과하는 경정맥공이 압박을 받아 미주신경 기능이 저하됩니다. CST 수기 요법은 미세한 압력으로 경막 긴장을 풀어 뇌척수액 순환을 돕습니다.\n\n■ 한방신경정신과 맞춤 처방 및 통합 치법\n주 1~2회 전신 CST 두개천골요법과 함께 뇌척수액 생성을 돕는 보음보혈 맞춤 한약을 병행 처방합니다. 개인별 체질과 자율신경 균형 검사(HRV), 뇌기능 검사 결과를 바탕으로 1:1 맞춤 가감하여 신경계의 회복 탄력성을 극대화합니다.\n\n■ 환자가 일상에서 실천해야 할 핵심 수칙\n치료 후에는 격렬한 운동을 피하고 충분한 수분 섭취와 함께 편안한 자세로 휴식을 취하는 것이 권장됩니다. 신체 증상이 나타났을 때 공포에 질려 과호흡을 하거나 몸부림치지 마시고, '이것은 일시적인 자율신경의 가짜 경보이며 내 몸은 결코 무너지지 않는다'는 확고한 인지적 팩트를 상기하십시오.\n\n해아림한의원에서는 두려움과 고통 속에 갇힌 환자분들이 본래의 평온하고 건강한 삶으로 되돌아가실 수 있도록 체계적인 단계별 치료 프로토콜을 성심껏 제공합니다.\n\n[공황장애 정밀검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
              "isAutoPublished": true,
              "isCustom": true,
              "createdAt": 1790814600000,
              "updatedAt": 1790814600000
          },
          {
              "id": "col-auto-1790641800000",
              "poolId": "col-ext-7",
              "category": "칼럼",
              "author": "해아림한의원",
              "date": "2026.09.29",
              "views": 194,
              "image": "/images/columns/column_14_recovery_roadmap.svg",
              "title": "혼자 마트나 백화점 가기가 무섭고 피하게 돼요: 일상 반경을 넓히는 행동 훈련 가이드",
              "summary": "회피 행동을 줄이고 뇌신경 가소성을 활용해 일상 활동 반경을 넓혀가는 체계적 탈감작 훈련 원칙.",
              "content": "회피 행동을 줄이고 뇌신경 가소성을 활용해 일상 활동 반경을 넓혀가는 체계적 탈감작 훈련 원칙.\n\n◆편도체의 공포 기억을 재기록하는 단계별 노출과 적응\n공황 발작을 경험한 장소를 회피하면 단기적으로는 안도감을 느끼지만 장기적으로는 편도체의 공포 회로가 강화됩니다. 약한 자극부터 견디며 '아무 일도 일어나지 않는다'는 현실 검증을 뇌에 입력해야 뇌가 안전을 학습합니다.\n\n■ 한방신경정신과 맞춤 처방 및 통합 치법\n뇌 기능 활성화와 정서 안정을 돕는 한약 치료와 병행하여 1:1 점진적 노출 플랜을 체계적으로 수립합니다. 개인별 체질과 자율신경 균형 검사(HRV), 뇌기능 검사 결과를 바탕으로 1:1 맞춤 가감하여 신경계의 회복 탄력성을 극대화합니다.\n\n■ 환자가 일상에서 실천해야 할 핵심 수칙\n쉬운 과제부터 성공 경험을 축적하고, 노출 도중 불안이 치솟아도 즉시 도망치지 않고 복식호흡으로 3분간 자리를 지킵니다. 신체 증상이 나타났을 때 공포에 질려 과호흡을 하거나 몸부림치지 마시고, '이것은 일시적인 자율신경의 가짜 경보이며 내 몸은 결코 무너지지 않는다'는 확고한 인지적 팩트를 상기하십시오.\n\n해아림한의원에서는 두려움과 고통 속에 갇힌 환자분들이 본래의 평온하고 건강한 삶으로 되돌아가실 수 있도록 체계적인 단계별 치료 프로토콜을 성심껏 제공합니다.\n\n[공황장애 정밀검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
              "isAutoPublished": true,
              "isCustom": true,
              "createdAt": 1790641800000,
              "updatedAt": 1790641800000
          },
          {
              "id": "col-auto-1790469000000",
              "poolId": "col-ext-6",
              "category": "칼럼",
              "author": "해아림한의원",
              "date": "2026.09.27",
              "views": 266,
              "image": "/images/columns/column_28_seasonal_adaptation.svg",
              "title": "날씨가 갑자기 추워지면 가슴이 조이고 두근거려요: 환절기 자율신경 불균형 예방 관리",
              "summary": "기온 급락에 따른 혈관 수축과 체온 조절 중추의 과부하가 자율신경계 균형을 흔드는 계절성 악화 예방법.",
              "content": "기온 급락에 따른 혈관 수축과 체온 조절 중추의 과부하가 자율신경계 균형을 흔드는 계절성 악화 예방법.\n\n◆말초 혈관 수축과 심장 과부하에 따른 자율신경 불균형\n기온이 급격히 떨어지는 계절에는 체온 보존을 위해 피부 혈관이 급수축하며 혈압이 상승하고 심장 부담이 커집니다. 자율신경계가 취약한 환자분들은 온도 적응 과정에서 오한, 떨림, 가슴 답답함을 느끼며 발작을 겪기 쉽습니다.\n\n■ 한방신경정신과 맞춤 처방 및 통합 치법\n체표 보온과 기혈 순환을 돕는 계지복령환 및 면역력 기반 맞춤 한약으로 온열 적응력을 길러줍니다. 개인별 체질과 자율신경 균형 검사(HRV), 뇌기능 검사 결과를 바탕으로 1:1 맞춤 가감하여 신경계의 회복 탄력성을 극대화합니다.\n\n■ 환자가 일상에서 실천해야 할 핵심 수칙\n외출 시 목과 손발을 따뜻하게 감싸는 다층 보온 의류를 착용하고 기상 직후 따뜻한 음용수를 섭취합니다. 신체 증상이 나타났을 때 공포에 질려 과호흡을 하거나 몸부림치지 마시고, '이것은 일시적인 자율신경의 가짜 경보이며 내 몸은 결코 무너지지 않는다'는 확고한 인지적 팩트를 상기하십시오.\n\n해아림한의원에서는 두려움과 고통 속에 갇힌 환자분들이 본래의 평온하고 건강한 삶으로 되돌아가실 수 있도록 체계적인 단계별 치료 프로토콜을 성심껏 제공합니다.\n\n[공황장애 정밀검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
              "isAutoPublished": true,
              "isCustom": true,
              "createdAt": 1790469000000,
              "updatedAt": 1790469000000
          },
          {
              "id": "col-auto-1790296200000",
              "poolId": "col-ext-5",
              "category": "칼럼",
              "author": "해아림한의원",
              "date": "2026.09.25",
              "views": 220,
              "image": "/images/columns/column_12_rebound_hypotension.svg",
              "title": "미용실 샴푸대나 치과에서 목을 뒤로 젖히면 어지럽고 불안해요: 경추 혈류 장애와 대처법",
              "summary": "목을 뒤로 젖힐 때 추골동맥 압박과 경추 신경 자극이 빚어내는 공간 감각 이상과 급성 공포 반응.",
              "content": "목을 뒤로 젖힐 때 추골동맥 압박과 경추 신경 자극이 빚어내는 공간 감각 이상과 급성 공포 반응.\n\n◆추골뇌저동맥 혈류 저하와 순간적 뇌혈관 어지럼의 공황 촉발\n목을 뒤로 젖히는 자세는 경추 횡돌기공을 지나는 추골동맥을 물리적으로 압박하여 소뇌와 전정기관으로 향하는 혈류를 순간적으로 떨어뜨릴 수 있습니다. 이로 인한 붕 뜨는 어지럼증을 편도체가 뇌졸중 위험으로 착각하여 공황을 일으킵니다.\n\n■ 한방신경정신과 맞춤 처방 및 통합 치법\n경추부 심부 근육 긴장을 해소하고 뇌혈류 순환을 돕는 추나요법과 거풍청신 한약을 병행합니다. 개인별 체질과 자율신경 균형 검사(HRV), 뇌기능 검사 결과를 바탕으로 1:1 맞춤 가감하여 신경계의 회복 탄력성을 극대화합니다.\n\n■ 환자가 일상에서 실천해야 할 핵심 수칙\n미용실이나 치과 이용 시 목 뒤에 수건을 두툼하게 받쳐 꺾이는 각도를 최소화하고, 불편 시 즉시 신호를 보냅니다. 신체 증상이 나타났을 때 공포에 질려 과호흡을 하거나 몸부림치지 마시고, '이것은 일시적인 자율신경의 가짜 경보이며 내 몸은 결코 무너지지 않는다'는 확고한 인지적 팩트를 상기하십시오.\n\n해아림한의원에서는 두려움과 고통 속에 갇힌 환자분들이 본래의 평온하고 건강한 삶으로 되돌아가실 수 있도록 체계적인 단계별 치료 프로토콜을 성심껏 제공합니다.\n\n[공황장애 정밀검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
              "isAutoPublished": true,
              "isCustom": true,
              "createdAt": 1790296200000,
              "updatedAt": 1790296200000
          },
          {
              "id": "col-auto-1790123400000",
              "poolId": "col-ext-4",
              "category": "칼럼",
              "author": "해아림한의원",
              "date": "2026.09.23",
              "views": 202,
              "image": "/images/columns/column_10_hyperventilation.svg",
              "title": "새벽에 숨이 턱 막히고 죽을 것 같아 벌떡 일어났어요: 야간 공황발작의 원인과 수면 관리",
              "summary": "깊은 수면 단계에서 무의식적으로 찾아오는 야간 공황발작의 뇌간 메커니즘과 숙면 환경 조성법.",
              "content": "깊은 수면 단계에서 무의식적으로 찾아오는 야간 공황발작의 뇌간 메커니즘과 숙면 환경 조성법.\n\n◆수면 중 뇌간 이산화탄소 센서 과민과 편도체의 야간 비상 경보\n야간 공황은 악몽 때문이 아니라 깊은 서파 수면 중에 발생합니다. 수면 중 자연스러운 호흡 저하로 혈중 이산화탄소가 미세하게 상승할 때, 뇌간의 과민한 호흡 중추가 이를 질식 위기로 오판하여 교감신경을 번쩍 깨우는 것입니다.\n\n■ 한방신경정신과 맞춤 처방 및 통합 치법\n수면 뇌파를 안정시키고 야간 호흡 민감도를 조절하는 산조인탕과 천왕보심단 맞춤 가감방을 적용합니다. 개인별 체질과 자율신경 균형 검사(HRV), 뇌기능 검사 결과를 바탕으로 1:1 맞춤 가감하여 신경계의 회복 탄력성을 극대화합니다.\n\n■ 환자가 일상에서 실천해야 할 핵심 수칙\n침실 온도를 20~22도로 선선하게 유지하고, 취침 2시간 전 스마트폰 차단 및 복부 온찜질을 시행합니다. 신체 증상이 나타났을 때 공포에 질려 과호흡을 하거나 몸부림치지 마시고, '이것은 일시적인 자율신경의 가짜 경보이며 내 몸은 결코 무너지지 않는다'는 확고한 인지적 팩트를 상기하십시오.\n\n해아림한의원에서는 두려움과 고통 속에 갇힌 환자분들이 본래의 평온하고 건강한 삶으로 되돌아가실 수 있도록 체계적인 단계별 치료 프로토콜을 성심껏 제공합니다.\n\n[공황장애 정밀검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
              "isAutoPublished": true,
              "isCustom": true,
              "createdAt": 1790123400000,
              "updatedAt": 1790123400000
          },
          {
              "id": "col-auto-1789950600000",
              "poolId": "col-ext-3",
              "category": "칼럼",
              "author": "해아림한의원",
              "date": "2026.09.21",
              "views": 276,
              "image": "/images/columns/column_16_hormone.svg",
              "title": "중요한 시험이나 면접 때 손이 떨리고 머리가 하얘져요: 긴장성 공황과 심신 안정법",
              "summary": "시험, 면접, 프레젠테이션 직전 전두엽 인지 기능이 마비되는 수행 불안의 원인과 교감신경 이완법.",
              "content": "시험, 면접, 프레젠테이션 직전 전두엽 인지 기능이 마비되는 수행 불안의 원인과 교감신경 이완법.\n\n◆과도한 긴장 호르몬 분비로 인한 전두엽 인지 일시 마비\n극도의 긴장 상황에서는 코르티솔과 아드레날린이 과다 분비되어 전두엽으로 가는 뇌혈류가 급감하고, 준비했던 기억이 하얗게 지워지는 블랙아웃 현상이 발생합니다. 이때 심장이 터질 듯 뛰며 손발이 떨리게 됩니다.\n\n■ 한방신경정신과 맞춤 처방 및 통합 치법\n간장의 열을 식히고 담력을 보강하는 시호가용골모려탕과 원지, 석창포 계열 총명안신 처방을 병행합니다. 개인별 체질과 자율신경 균형 검사(HRV), 뇌기능 검사 결과를 바탕으로 1:1 맞춤 가감하여 신경계의 회복 탄력성을 극대화합니다.\n\n■ 환자가 일상에서 실천해야 할 핵심 수칙\n무대에 오르기 5분 전 코로 숨을 깊게 들이마시고 입으로 천천히 길게 내쉬는 복식호흡을 3회 반복합니다. 신체 증상이 나타났을 때 공포에 질려 과호흡을 하거나 몸부림치지 마시고, '이것은 일시적인 자율신경의 가짜 경보이며 내 몸은 결코 무너지지 않는다'는 확고한 인지적 팩트를 상기하십시오.\n\n해아림한의원에서는 두려움과 고통 속에 갇힌 환자분들이 본래의 평온하고 건강한 삶으로 되돌아가실 수 있도록 체계적인 단계별 치료 프로토콜을 성심껏 제공합니다.\n\n[공황장애 정밀검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
              "isAutoPublished": true,
              "isCustom": true,
              "createdAt": 1789950600000,
              "updatedAt": 1789950600000
          },
          {
              "id": "col-auto-1789691400000",
              "poolId": "col-ext-2",
              "category": "칼럼",
              "author": "해아림한의원",
              "date": "2026.09.18",
              "views": 267,
              "image": "/images/columns/column_21_olfactory_gustatory.svg",
              "title": "비행기 문이 닫히면 숨이 막히고 뛰어내리고 싶어요: 기내 공황발작 안전 탑승 가이드",
              "summary": "비행기 문이 닫히고 이륙하는 순간 3만 피트 상공에서 탈출할 수 없다는 공포, 기내 복도 걷기와 지압점을 활용한 안전 탑승 가이드.",
              "content": "비행기 문이 닫히고 이륙하는 순간 3만 피트 상공에서 탈출할 수 없다는 공포, 기내 복도 걷기와 지압점을 활용한 안전 탑승 가이드.\n\n◆탈출 불가능성에 대한 편도체의 파국적 착각과 폐소 반응\n비행기 문이 닫히는 순간 뇌 편도체는 '갇혀서 나갈 수 없다'는 극단적 폐쇄 공포를 일으킵니다. 고도가 상승하며 기압이 떨어지면 귀가 먹먹해지는데, 이를 뇌가 산소 부족이나 혈압 상승으로 왜곡 해석하여 공황이 촉발됩니다.\n\n■ 한방신경정신과 맞춤 처방 및 통합 치법\n기혈 순환을 돕고 뇌신경을 안정시키는 안신 맞춤 한약과 비상용 상비약을 처방합니다. 개인별 체질과 자율신경 균형 검사(HRV), 뇌기능 검사 결과를 바탕으로 1:1 맞춤 가감하여 신경계의 회복 탄력성을 극대화합니다.\n\n■ 환자가 일상에서 실천해야 할 핵심 수칙\n복도 쪽 좌석을 예약하고, 탑승 중 찬물을 천천히 머금어 삼키며 손목 안쪽 내관혈을 지압합니다. 신체 증상이 나타났을 때 공포에 질려 과호흡을 하거나 몸부림치지 마시고, '이것은 일시적인 자율신경의 가짜 경보이며 내 몸은 결코 무너지지 않는다'는 확고한 인지적 팩트를 상기하십시오.\n\n해아림한의원에서는 두려움과 고통 속에 갇힌 환자분들이 본래의 평온하고 건강한 삶으로 되돌아가실 수 있도록 체계적인 단계별 치료 프로토콜을 성심껏 제공합니다.\n\n[공황장애 정밀검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
              "isAutoPublished": true,
              "isCustom": true,
              "createdAt": 1789691400000,
              "updatedAt": 1789691400000
          },
          {
              "id": "col-auto-1789518600000",
              "poolId": "col-ext-1",
              "category": "칼럼",
              "author": "해아림한의원",
              "date": "2026.09.16",
              "views": 244,
              "image": "/images/columns/column_18_gut_brain_axis.svg",
              "title": "밥 먹고 나면 가슴이 답답하고 심장이 쿵쾅거려요: 식후 급성 공황과 위장-신경 반사",
              "summary": "식사 후 명치 체기와 위장 팽만감이 횡격막을 압박하여 유발되는 식후 급성 공황과 자율신경 조절법.",
              "content": "식사 후 명치 체기와 위장 팽만감이 횡격막을 압박하여 유발되는 식후 급성 공황과 자율신경 조절법.\n\n◆위장 팽창과 횡격막 압박이 유발하는 반사성 심계항진\n식사 후 위장에 음식물이 정체되어 복부 팽만감이 생기면, 위장 바로 위에 있는 횡격막이 위로 밀려 올라가 흉강을 압박합니다. 이로 인해 심장과 폐의 가동 공간이 줄어들어 심박수가 상승하고 숨이 차는 현상이 발생하며, 뇌는 이를 질식 위험으로 오인합니다.\n\n■ 한방신경정신과 맞춤 처방 및 통합 치법\n식적으로 굳은 명치 담적을 풀어주고 장내 가스를 배출시키는 평위산 및 온담탕 가감방을 처방합니다. 개인별 체질과 자율신경 균형 검사(HRV), 뇌기능 검사 결과를 바탕으로 1:1 맞춤 가감하여 신경계의 회복 탄력성을 극대화합니다.\n\n■ 환자가 일상에서 실천해야 할 핵심 수칙\n식사량을 평소의 70%로 줄이고, 식후 2시간 동안 눕지 않으며 가벼운 평지 산책을 실천합니다. 신체 증상이 나타났을 때 공포에 질려 과호흡을 하거나 몸부림치지 마시고, '이것은 일시적인 자율신경의 가짜 경보이며 내 몸은 결코 무너지지 않는다'는 확고한 인지적 팩트를 상기하십시오.\n\n해아림한의원에서는 두려움과 고통 속에 갇힌 환자분들이 본래의 평온하고 건강한 삶으로 되돌아가실 수 있도록 체계적인 단계별 치료 프로토콜을 성심껏 제공합니다.\n\n[공황장애 정밀검사 알아보기](https://healim-panic.com/panic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
              "isAutoPublished": true,
              "isCustom": true,
              "createdAt": 1789518600000,
              "updatedAt": 1789518600000
          },
          {
              "id": "col-auto-39-1789476000000",
              "colIndex": 39,
              "category": "치료 로드맵",
              "title": "자다가 갑자기 심장이 쿵쾅거리고 숨이 막히는 이유: 밤에 찾아오는 야간 공황발작 대처법",
              "summary": "취침 중 갑작스러운 심계항진과 질식감으로 깨어나는 야간 공황발작의 신경생리학적 원인과 예방 가이드.",
              "content": "취침 중 갑작스러운 심계항진과 질식감으로 깨어나는 야간 공황발작의 신경생리학적 원인과 예방 가이드.\\n\\n■ 야간 수면 진입기 심계항진과 질식감의 신경생리학적 병태 생리\\n공황장애 환자분들이 일상에서 흔히 마주치는 자다가 갑자기 심장이 쿵쾅거리고 숨이 막히는 이유: 밤에 찾아오는 야간 공황발작 대처법 문제는 단순한 일시적 긴장이 아닌, 자율신경계의 비상 브레이크 시스템(미주신경 톤)이 약화되고 뇌 편도체의 공포 회로가 과열되면서 촉발됩니다. 심장내과나 신경과 검사에서 구조적 이상이 발견되지 않는다고 해서 환자가 겪는 신체화 고통이 결코 상상 속의 가짜 통증인 것은 아닙니다. 야간 수면 진입기 심계항진과 질식감은 뇌와 신체가 실제로 위험 경보를 오작동하여 보내는 명백한 생리적 신호입니다.\\n\\n■ 해아림한의원 산조인탕 및 천왕보심단 기반 맞춤 치료\\n해아림한의원에서는 과열된 교감신경을 진정시키고 심신 안정을 돕는 산조인탕 및 천왕보심단 처방을 바탕으로 1:1 맞춤 진료를 시행합니다. 이와 함께 뇌간 망상계 진정 및 두개천골요법(CST)을 병행하여 뇌척수액 순환을 촉진하고 자율신경계의 본래 복원력을 회복시킵니다. 신체적 긴장과 뇌 신경계의 예민도가 함께 다스려지면, 악순환의 고리가 끊어지고 심장은 본래의 편안한 박동을 되찾게 됩니다.\\n\\n■ 환자가 일상에서 실천해야 할 핵심 관리 수칙\\n1. 취침 1시간 전 스마트폰 차단 및 주황색 간접 조명 활용\\n2. 급성 증상 발현 시 4초간 코로 들이마시고 6초간 입으로 천천히 내쉬는 구순 복식호흡을 3분간 지속합니다.\\n3. '이 증상은 일시적 자율신경 오작동이며 15분 이내에 점차 가라앉는다'는 객관적 의학 사실을 마음에 상기하십시오.\\n\\n해아림한의원은 공황장애의 긴 터널을 지나는 모든 환자분들이 다시 건강하고 평온한 일상을 되찾으실 때까지 든든한 동반자가 되어 드릴 것입니다.\\n\\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\\n\\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\\n\\n[전국 지점 안내](https://www.healim.com)",
              "author": "해아림한의원",
              "date": "2026.09.15",
              "image": "/images/columns/column_13_somatization.svg",
              "views": 340,
              "isCustom": true,
              "isPermanent": true
          },
          {
              "id": "col-auto-23-1788884200000",
              "colIndex": 23,
              "category": "응급 대처",
              "title": "목과 어깨가 굳고 어지러우며 숨쉬기 힘들 때: 거북목과 자율신경계 뇌혈류 장애 극복법",
              "summary": "목·어깨 굳음과 거북목이 뇌혈류와 자율신경에 미치는 영향 분석 및 척추 경추 신경 이완 치법.",
              "content": "목·어깨 굳음과 거북목이 뇌혈류와 자율신경에 미치는 영향 분석 및 척추 경추 신경 이완 치법.\\n\\n■ 추골동맥 압박에 의한 뇌간 허혈성 어지럼증과 경추 긴장의 신경생리학적 병태 생리\\n공황장애 환자분들이 일상에서 흔히 마주치는 목과 어깨가 굳고 어지러우며 숨쉬기 힘들 때: 거북목과 자율신경계 뇌혈류 장애 극복법 문제는 단순한 일시적 긴장이 아닌, 자율신경계의 비상 브레이크 시스템(미주신경 톤)이 약화되고 뇌 편도체의 공포 회로가 과열되면서 촉발됩니다. 심장내과나 신경과 검사에서 구조적 이상이 발견되지 않는다고 해서 환자가 겪는 신체화 고통이 결코 상상 속의 가짜 통증인 것은 아닙니다. 추골동맥 압박에 의한 뇌간 허혈성 어지럼증과 경추 긴장은 뇌와 신체가 실제로 위험 경보를 오작동하여 보내는 명백한 생리적 신호입니다.\\n\\n■ 해아림한의원 갈근, 작약, 천궁 배합 활혈통경 처방 기반 맞춤 치료\\n해아림한의원에서는 과열된 교감신경을 진정시키고 심신 안정을 돕는 갈근, 작약, 천궁 배합 활혈통경 처방 처방을 바탕으로 1:1 맞춤 진료를 시행합니다. 이와 함께 경추 전만 회복 추나요법 및 후두하근 이완술을 병행하여 뇌척수액 순환을 촉진하고 자율신경계의 본래 복원력을 회복시킵니다. 신체적 긴장과 뇌 신경계의 예민도가 함께 다스려지면, 악순환의 고리가 끊어지고 심장은 본래의 편안한 박동을 되찾게 됩니다.\\n\\n■ 환자가 일상에서 실천해야 할 핵심 관리 수칙\\n1. 모니터 눈높이 조정 및 50분 작업 후 5분 턱 당김 스트레칭\\n2. 급성 증상 발현 시 4초간 코로 들이마시고 6초간 입으로 천천히 내쉬는 구순 복식호흡을 3분간 지속합니다.\\n3. '이 증상은 일시적 자율신경 오작동이며 15분 이내에 점차 가라앉는다'는 객관적 의학 사실을 마음에 상기하십시오.\\n\\n해아림한의원은 공황장애의 긴 터널을 지나는 모든 환자분들이 다시 건강하고 평온한 일상을 되찾으실 때까지 든든한 동반자가 되어 드릴 것입니다.\\n\\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\\n\\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\\n\\n[전국 지점 안내](https://www.healim.com)",
              "author": "해아림한의원",
              "date": "2026.09.10",
              "image": "/images/columns/column_23_bruxism_tmj.svg",
              "views": 1800
          },
          {
              "id": "col-auto-38-1787274000000",
              "colIndex": 38,
              "category": "감별 진단",
              "title": "밥만 먹으면 체하고 가슴이 답답하며 심장이 뛰어요: 신경성 위장장애와 위장형 공황 치료",
              "summary": "식사 후 명치 체기와 복부 팽만감이 횡격막을 압박해 유발하는 위장형 공황장애의 한방 치료 원리.",
              "content": "식사 후 명치 체기와 복부 팽만감이 횡격막을 압박해 유발하는 위장형 공황장애의 한방 치료 원리.\\n\\n■ 식후 명치 비만(痞滿)과 위-심장 반사(Roemheld 증후군)의 신경생리학적 병태 생리\\n공황장애 환자분들이 일상에서 흔히 마주치는 밥만 먹으면 체하고 가슴이 답답하며 심장이 뛰어요: 신경성 위장장애와 위장형 공황 치료 문제는 단순한 일시적 긴장이 아닌, 자율신경계의 비상 브레이크 시스템(미주신경 톤)이 약화되고 뇌 편도체의 공포 회로가 과열되면서 촉발됩니다. 심장내과나 신경과 검사에서 구조적 이상이 발견되지 않는다고 해서 환자가 겪는 신체화 고통이 결코 상상 속의 가짜 통증인 것은 아닙니다. 식후 명치 비만(痞滿)과 위-심장 반사(Roemheld 증후군)은 뇌와 신체가 실제로 위험 경보를 오작동하여 보내는 명백한 생리적 신호입니다.\\n\\n■ 해아림한의원 반하백출천마탕 및 평위산 가감방 기반 맞춤 치료\\n해아림한의원에서는 과열된 교감신경을 진정시키고 심신 안정을 돕는 반하백출천마탕 및 평위산 가감방 처방을 바탕으로 1:1 맞춤 진료를 시행합니다. 이와 함께 중완혈·내관혈 약침 및 횡격막 감압 치료을 병행하여 뇌척수액 순환을 촉진하고 자율신경계의 본래 복원력을 회복시킵니다. 신체적 긴장과 뇌 신경계의 예민도가 함께 다스려지면, 악순환의 고리가 끊어지고 심장은 본래의 편안한 박동을 되찾게 됩니다.\\n\\n■ 환자가 일상에서 실천해야 할 핵심 관리 수칙\\n1. 위 용적 70% 소식 실천 및 식후 15분 평지 보행\\n2. 급성 증상 발현 시 4초간 코로 들이마시고 6초간 입으로 천천히 내쉬는 구순 복식호흡을 3분간 지속합니다.\\n3. '이 증상은 일시적 자율신경 오작동이며 15분 이내에 점차 가라앉는다'는 객관적 의학 사실을 마음에 상기하십시오.\\n\\n해아림한의원은 공황장애의 긴 터널을 지나는 모든 환자분들이 다시 건강하고 평온한 일상을 되찾으실 때까지 든든한 동반자가 되어 드릴 것입니다.\\n\\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\\n\\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\\n\\n[전국 지점 안내](https://www.healim.com)",
              "author": "해아림한의원",
              "date": "2026.08.21",
              "image": "/images/columns/column_25_microvascular_angina.svg",
              "views": 1420
          },
          {
              "id": "col-auto-37-1781485200000",
              "colIndex": 37,
              "category": "상황별 대처",
              "title": "엘리베이터나 좁은 공간에서 숨이 턱 막힐 때: 폐소공포와 급성 공황을 가라앉히는 3분 호흡법",
              "summary": "엘리베이터나 환기 부족 밀폐 공간에서 급증하는 폐소공포와 3분 구순 복식호흡 실전 대처법.",
              "content": "엘리베이터나 환기 부족 밀폐 공간에서 급증하는 폐소공포와 3분 구순 복식호흡 실전 대처법.\\n\\n■ 밀폐 공간 갇힘 인지와 가짜 질식 경보의 신경생리학적 병태 생리\\n공황장애 환자분들이 일상에서 흔히 마주치는 엘리베이터나 좁은 공간에서 숨이 턱 막힐 때: 폐소공포와 급성 공황을 가라앉히는 3분 호흡법 문제는 단순한 일시적 긴장이 아닌, 자율신경계의 비상 브레이크 시스템(미주신경 톤)이 약화되고 뇌 편도체의 공포 회로가 과열되면서 촉발됩니다. 심장내과나 신경과 검사에서 구조적 이상이 발견되지 않는다고 해서 환자가 겪는 신체화 고통이 결코 상상 속의 가짜 통증인 것은 아닙니다. 밀폐 공간 갇힘 인지와 가짜 질식 경보은 뇌와 신체가 실제로 위험 경보를 오작동하여 보내는 명백한 생리적 신호입니다.\\n\\n■ 해아림한의원 온담탕 및 복령, 원지 가미방 기반 맞춤 치료\\n해아림한의원에서는 과열된 교감신경을 진정시키고 심신 안정을 돕는 온담탕 및 복령, 원지 가미방 처방을 바탕으로 1:1 맞춤 진료를 시행합니다. 이와 함께 심담허겁(心膽虛怯) 체질 개선 및 편도체 탈감작을 병행하여 뇌척수액 순환을 촉진하고 자율신경계의 본래 복원력을 회복시킵니다. 신체적 긴장과 뇌 신경계의 예민도가 함께 다스려지면, 악순환의 고리가 끊어지고 심장은 본래의 편안한 박동을 되찾게 됩니다.\\n\\n■ 환자가 일상에서 실천해야 할 핵심 관리 수칙\\n1. 입술을 좁게 모아 6초간 길게 숨을 내쉬는 구순 복식호흡\\n2. 급성 증상 발현 시 4초간 코로 들이마시고 6초간 입으로 천천히 내쉬는 구순 복식호흡을 3분간 지속합니다.\\n3. '이 증상은 일시적 자율신경 오작동이며 15분 이내에 점차 가라앉는다'는 객관적 의학 사실을 마음에 상기하십시오.\\n\\n해아림한의원은 공황장애의 긴 터널을 지나는 모든 환자분들이 다시 건강하고 평온한 일상을 되찾으실 때까지 든든한 동반자가 되어 드릴 것입니다.\\n\\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\\n\\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\\n\\n[전국 지점 안내](https://www.healim.com)",
              "author": "해아림한의원",
              "date": "2026.06.14",
              "image": "/images/columns/column_10_hyperventilation.svg",
              "views": 1530
          },
          {
              "id": "col-auto-36-1775610000000",
              "colIndex": 36,
              "category": "식습관·생활",
              "title": "공황장애 약을 먹고 오히려 더 불안해졌어요: 초기 불안 반동 현상과 한방 병용 관리법",
              "summary": "항우울제(SSRI) 초기 복용 시 나타나는 일시적 불안 반동 현상과 한방 안신약 병용 관리 전략.",
              "content": "항우울제(SSRI) 초기 복용 시 나타나는 일시적 불안 반동 현상과 한방 안신약 병용 관리 전략.\\n\\n■ SSRI 자가수용체 자극 및 청반핵 흥분성 초기 불안 반동의 신경생리학적 병태 생리\\n공황장애 환자분들이 일상에서 흔히 마주치는 공황장애 약을 먹고 오히려 더 불안해졌어요: 초기 불안 반동 현상과 한방 병용 관리법 문제는 단순한 일시적 긴장이 아닌, 자율신경계의 비상 브레이크 시스템(미주신경 톤)이 약화되고 뇌 편도체의 공포 회로가 과열되면서 촉발됩니다. 심장내과나 신경과 검사에서 구조적 이상이 발견되지 않는다고 해서 환자가 겪는 신체화 고통이 결코 상상 속의 가짜 통증인 것은 아닙니다. SSRI 자가수용체 자극 및 청반핵 흥분성 초기 불안 반동은 뇌와 신체가 실제로 위험 경보를 오작동하여 보내는 명백한 생리적 신호입니다.\\n\\n■ 해아림한의원 시호가용골모려탕 및 영계출감탕 기반 맞춤 치료\\n해아림한의원에서는 과열된 교감신경을 진정시키고 심신 안정을 돕는 시호가용골모려탕 및 영계출감탕 처방을 바탕으로 1:1 맞춤 진료를 시행합니다. 이와 함께 초기 불안 완충 한방 안신 요법 및 위장관 소화기 보조을 병행하여 뇌척수액 순환을 촉진하고 자율신경계의 본래 복원력을 회복시킵니다. 신체적 긴장과 뇌 신경계의 예민도가 함께 다스려지면, 악순환의 고리가 끊어지고 심장은 본래의 편안한 박동을 되찾게 됩니다.\\n\\n■ 환자가 일상에서 실천해야 할 핵심 관리 수칙\\n1. 약물 임의 중단 금지 및 주치의·한의사 협진 테이퍼링 계획\\n2. 급성 증상 발현 시 4초간 코로 들이마시고 6초간 입으로 천천히 내쉬는 구순 복식호흡을 3분간 지속합니다.\\n3. '이 증상은 일시적 자율신경 오작동이며 15분 이내에 점차 가라앉는다'는 객관적 의학 사실을 마음에 상기하십시오.\\n\\n해아림한의원은 공황장애의 긴 터널을 지나는 모든 환자분들이 다시 건강하고 평온한 일상을 되찾으실 때까지 든든한 동반자가 되어 드릴 것입니다.\\n\\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\\n\\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\\n\\n[전국 지점 안내](https://www.healim.com)",
              "author": "해아림한의원",
              "date": "2026.04.08",
              "image": "/images/columns/column_24_reactive_hypoglycemia.svg",
              "views": 1640
          },
          {
              "id": "col-auto-35-1771280400000",
              "colIndex": 35,
              "category": "자율신경",
              "title": "귀에서 삐 소리가 나고 먹먹하면서 불안해져요: 이명과 공황장애의 신경학적 원인과 치료",
              "summary": "귀울림(이명)과 귀 먹먹함, 불안 발작의 미주신경 및 뇌신경 불균형 연결고리와 한방 복합 치료.",
              "content": "귀울림(이명)과 귀 먹먹함, 불안 발작의 미주신경 및 뇌신경 불균형 연결고리와 한방 복합 치료.\\n\\n■ 고막장근 연축 및 내이 미세 혈관 수축성 이명·이충만감의 신경생리학적 병태 생리\\n공황장애 환자분들이 일상에서 흔히 마주치는 공황장애와 이명(귀울림)·귀 먹먹함의 신경학적 연결고리: 삼차신경과 뇌신경 불균형 문제는 단순한 일시적 긴장이 아닌, 자율신경계의 비상 브레이크 시스템(미주신경 톤)이 약화되고 뇌 편도체의 공포 회로가 과열되면서 촉발됩니다. 심장내과나 신경과 검사에서 구조적 이상이 발견되지 않는다고 해서 환자가 겪는 신체화 고통이 결코 상상 속의 가짜 통증인 것은 아닙니다. 고막장근 연축 및 내이 미세 혈관 수축성 이명·이충만감은 뇌와 신체가 실제로 위험 경보를 오작동하여 보내는 명백한 생리적 신호입니다.\\n\\n■ 해아림한의원 보신청이탕 및 시호청간탕 가감방 기반 맞춤 치료\\n해아림한의원에서는 과열된 교감신경을 진정시키고 심신 안정을 돕는 보신청이탕 및 시호청간탕 가감방 처방을 바탕으로 1:1 맞춤 진료를 시행합니다. 이와 함께 턱관절-경추 교정 및 CST 두개천골요법을 병행하여 뇌척수액 순환을 촉진하고 자율신경계의 본래 복원력을 회복시킵니다. 신체적 긴장과 뇌 신경계의 예민도가 함께 다스려지면, 악순환의 고리가 끊어지고 심장은 본래의 편안한 박동을 되찾게 됩니다.\\n\\n■ 환자가 일상에서 실천해야 할 핵심 관리 수칙\\n1. 무리한 발살바 호흡 자제 및 저작근 온찜질 이완\\n2. 급성 증상 발현 시 4초간 코로 들이마시고 6초간 입으로 천천히 내쉬는 구순 복식호흡을 3분간 지속합니다.\\n3. '이 증상은 일시적 자율신경 오작동이며 15분 이내에 점차 가라앉는다'는 객관적 의학 사실을 마음에 상기하십시오.\\n\\n해아림한의원은 공황장애의 긴 터널을 지나는 모든 환자분들이 다시 건강하고 평온한 일상을 되찾으실 때까지 든든한 동반자가 되어 드릴 것입니다.\\n\\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\\n\\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\\n\\n[전국 지점 안내](https://www.healim.com)",
              "author": "해아림한의원",
              "date": "2026.02.17",
              "image": "/images/columns/column_26_photophobia_pupil.svg",
              "views": 1720
          },
          {
              "id": "col-auto-22-1788884100000",
              "colIndex": 22,
              "category": "의학 진실",
              "title": "운전 중 터널이나 다리를 건널 때 숨이 막히고 식은땀이 나요: 터널 공황 극복 훈련법",
              "summary": "고속도로, 터널, 긴 다리 통과 시 시각 인지 착시와 공간 공포가 촉발하는 터널 공황 극복 훈련.",
              "content": "고속도로, 터널, 긴 다리 통과 시 시각 인지 착시와 공간 공포가 촉발하는 터널 공황 극복 훈련.\\n\\n■ 시각 격자 왜곡 잔상과 탈출 차단 인지에 따른 급성 패닉의 신경생리학적 병태 생리\\n공황장애 환자분들이 일상에서 흔히 마주치는 운전 중 터널이나 다리를 건널 때 숨이 막히고 식은땀이 나요: 터널 공황 극복 훈련법 문제는 단순한 일시적 긴장이 아닌, 자율신경계의 비상 브레이크 시스템(미주신경 톤)이 약화되고 뇌 편도체의 공포 회로가 과열되면서 촉발됩니다. 심장내과나 신경과 검사에서 구조적 이상이 발견되지 않는다고 해서 환자가 겪는 신체화 고통이 결코 상상 속의 가짜 통증인 것은 아닙니다. 시각 격자 왜곡 잔상과 탈출 차단 인지에 따른 급성 패닉은 뇌와 신체가 실제로 위험 경보를 오작동하여 보내는 명백한 생리적 신호입니다.\\n\\n■ 해아림한의원 가미온담탕 및 천궁, 석창포 기반 맞춤 치료\\n해아림한의원에서는 과열된 교감신경을 진정시키고 심신 안정을 돕는 가미온담탕 및 천궁, 석창포 처방을 바탕으로 1:1 맞춤 진료를 시행합니다. 이와 함께 시각 피질 과부하 차단 및 자율신경 균형화 훈련을 병행하여 뇌척수액 순환을 촉진하고 자율신경계의 본래 복원력을 회복시킵니다. 신체적 긴장과 뇌 신경계의 예민도가 함께 다스려지면, 악순환의 고리가 끊어지고 심장은 본래의 편안한 박동을 되찾게 됩니다.\\n\\n■ 환자가 일상에서 실천해야 할 핵심 관리 수칙\\n1. 우측 최외곽 차로 주행 및 터널 원거리 출구 불빛 응시\\n2. 급성 증상 발현 시 4초간 코로 들이마시고 6초간 입으로 천천히 내쉬는 구순 복식호흡을 3분간 지속합니다.\\n3. '이 증상은 일시적 자율신경 오작동이며 15분 이내에 점차 가라앉는다'는 객관적 의학 사실을 마음에 상기하십시오.\\n\\n해아림한의원은 공황장애의 긴 터널을 지나는 모든 환자분들이 다시 건강하고 평온한 일상을 되찾으실 때까지 든든한 동반자가 되어 드릴 것입니다.\\n\\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\\n\\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\\n\\n[전국 지점 안내](https://www.healim.com)",
              "author": "해아림한의원",
              "date": "2026.01.07",
              "image": "/images/columns/column_22_pelvic_pain.svg",
              "views": 1825
          },
          {
              "id": "col-auto-34-1764284400000",
              "colIndex": 34,
              "category": "심장·자율신경",
              "title": "생리 전만 되면 이유 없이 심장이 뛰고 불안감이 심해져요: 여성 호르몬성 공황 치료",
              "summary": "가임기 여성의 생리 전 호르몬 급락이 뇌 편도체에 미치는 영향과 여성 호르몬성 공황 치법.",
              "content": "가임기 여성의 생리 전 호르몬 급락이 뇌 편도체에 미치는 영향과 여성 호르몬성 공황 치법.\\n\\n■ 알로프레그나놀론 급락과 뇌 GABA 수용체 감도 저하의 신경생리학적 병태 생리\\n공황장애 환자분들이 일상에서 흔히 마주치는 생리 전만 되면 이유 없이 심장이 뛰고 불안감이 심해져요: 여성 호르몬성 공황 치료 문제는 단순한 일시적 긴장이 아닌, 자율신경계의 비상 브레이크 시스템(미주신경 톤)이 약화되고 뇌 편도체의 공포 회로가 과열되면서 촉발됩니다. 심장내과나 신경과 검사에서 구조적 이상이 발견되지 않는다고 해서 환자가 겪는 신체화 고통이 결코 상상 속의 가짜 통증인 것은 아닙니다. 알로프레그나놀론 급락과 뇌 GABA 수용체 감도 저하은 뇌와 신체가 실제로 위험 경보를 오작동하여 보내는 명백한 생리적 신호입니다.\\n\\n■ 해아림한의원 가미소요산 및 조경종옥탕 가감방 기반 맞춤 치료\\n해아림한의원에서는 과열된 교감신경을 진정시키고 심신 안정을 돕는 가미소요산 및 조경종옥탕 가감방 처방을 바탕으로 1:1 맞춤 진료를 시행합니다. 이와 함께 하복부 자궁 혈류 순환 뜸 치료 및 간울(肝鬱) 해소을 병행하여 뇌척수액 순환을 촉진하고 자율신경계의 본래 복원력을 회복시킵니다. 신체적 긴장과 뇌 신경계의 예민도가 함께 다스려지면, 악순환의 고리가 끊어지고 심장은 본래의 편안한 박동을 되찾게 됩니다.\\n\\n■ 환자가 일상에서 실천해야 할 핵심 관리 수칙\\n1. 생리 7일 전부터 정제당·염분 제한 및 마그네슘 섭취\\n2. 급성 증상 발현 시 4초간 코로 들이마시고 6초간 입으로 천천히 내쉬는 구순 복식호흡을 3분간 지속합니다.\\n3. '이 증상은 일시적 자율신경 오작동이며 15분 이내에 점차 가라앉는다'는 객관적 의학 사실을 마음에 상기하십시오.\\n\\n해아림한의원은 공황장애의 긴 터널을 지나는 모든 환자분들이 다시 건강하고 평온한 일상을 되찾으실 때까지 든든한 동반자가 되어 드릴 것입니다.\\n\\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\\n\\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\\n\\n[전국 지점 안내](https://www.healim.com)",
              "author": "해아림한의원",
              "date": "2025.11.28",
              "image": "/images/columns/column_27_premature_ventricular.svg",
              "views": 1850
          },
          {
              "id": "col-auto-33-1757890800000",
              "colIndex": 33,
              "category": "기상·환경",
              "title": "긴장하면 배가 아프고 설사하며 공황 증상이 와요: 과민성대장증후군과 장-뇌 신경 치료",
              "summary": "과민성대장증후군(IBS)과 장-뇌 축(Gut-Brain Axis) 염증이 편도체 공포 회로를 자극하는 기전과 치료.",
              "content": "과민성대장증후군(IBS)과 장-뇌 축(Gut-Brain Axis) 염증이 편도체 공포 회로를 자극하는 기전과 치료.\\n\\n■ 장 점막 투과성 증가(LPS 내독소) 및 뇌 미세아교세포 활성화의 신경생리학적 병태 생리\\n공황장애 환자분들이 일상에서 흔히 마주치는 긴장하면 배가 아프고 설사하며 공황 증상이 와요: 과민성대장증후군과 장-뇌 신경 치료 문제는 단순한 일시적 긴장이 아닌, 자율신경계의 비상 브레이크 시스템(미주신경 톤)이 약화되고 뇌 편도체의 공포 회로가 과열되면서 촉발됩니다. 심장내과나 신경과 검사에서 구조적 이상이 발견되지 않는다고 해서 환자가 겪는 신체화 고통이 결코 상상 속의 가짜 통증인 것은 아닙니다. 장 점막 투과성 증가(LPS 내독소) 및 뇌 미세아교세포 활성화은 뇌와 신체가 실제로 위험 경보를 오작동하여 보내는 명백한 생리적 신호입니다.\\n\\n■ 해아림한의원 곽향정기산 및 삼령백출산 기반 맞춤 치료\\n해아림한의원에서는 과열된 교감신경을 진정시키고 심신 안정을 돕는 곽향정기산 및 삼령백출산 처방을 바탕으로 1:1 맞춤 진료를 시행합니다. 이와 함께 장-미주신경 조율 및 복부 온열 생체 자극을 병행하여 뇌척수액 순환을 촉진하고 자율신경계의 본래 복원력을 회복시킵니다. 신체적 긴장과 뇌 신경계의 예민도가 함께 다스려지면, 악순환의 고리가 끊어지고 심장은 본래의 편안한 박동을 되찾게 됩니다.\\n\\n■ 환자가 일상에서 실천해야 할 핵심 관리 수칙\\n1. 발효식품 섭취 및 인공감미료·초가공식품 완전 배제\\n2. 급성 증상 발현 시 4초간 코로 들이마시고 6초간 입으로 천천히 내쉬는 구순 복식호흡을 3분간 지속합니다.\\n3. '이 증상은 일시적 자율신경 오작동이며 15분 이내에 점차 가라앉는다'는 객관적 의학 사실을 마음에 상기하십시오.\\n\\n해아림한의원은 공황장애의 긴 터널을 지나는 모든 환자분들이 다시 건강하고 평온한 일상을 되찾으실 때까지 든든한 동반자가 되어 드릴 것입니다.\\n\\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\\n\\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\\n\\n[전국 지점 안내](https://www.healim.com)",
              "author": "해아림한의원",
              "date": "2025.09.15",
              "image": "/images/columns/column_28_seasonal_adaptation.svg",
              "views": 1910
          },
          {
              "id": "col-auto-32-1748905200000",
              "colIndex": 32,
              "category": "신경생리학",
              "title": "갑자기 손발이 저리고 마비가 오며 쓰러질 것 같아요: 과호흡으로 인한 저림 증상 대처법",
              "summary": "급성 공황발작 시 과호흡으로 인한 혈액 알칼리증과 사지 저림, 안면 마비감의 안전한 호흡 대처법.",
              "content": "급성 공황발작 시 과호흡으로 인한 혈액 알칼리증과 사지 저림, 안면 마비감의 안전한 호흡 대처법.\\n\\n■ 과호흡에 의한 혈중 이산화탄소 결핍 및 이온화 칼슘 감소의 신경생리학적 병태 생리\\n공황장애 환자분들이 일상에서 흔히 마주치는 갑자기 손발이 저리고 마비가 오며 쓰러질 것 같아요: 과호흡으로 인한 저림 증상 대처법 문제는 단순한 일시적 긴장이 아닌, 자율신경계의 비상 브레이크 시스템(미주신경 톤)이 약화되고 뇌 편도체의 공포 회로가 과열되면서 촉발됩니다. 심장내과나 신경과 검사에서 구조적 이상이 발견되지 않는다고 해서 환자가 겪는 신체화 고통이 결코 상상 속의 가짜 통증인 것은 아닙니다. 과호흡에 의한 혈중 이산화탄소 결핍 및 이온화 칼슘 감소은 뇌와 신체가 실제로 위험 경보를 오작동하여 보내는 명백한 생리적 신호입니다.\\n\\n■ 해아림한의원 작약감초탕 및 청심온담탕 기반 맞춤 치료\\n해아림한의원에서는 과열된 교감신경을 진정시키고 심신 안정을 돕는 작약감초탕 및 청심온담탕 처방을 바탕으로 1:1 맞춤 진료를 시행합니다. 이와 함께 말초 신경 과흥분 안정 침구 치료 및 신경 긴장 이완을 병행하여 뇌척수액 순환을 촉진하고 자율신경계의 본래 복원력을 회복시킵니다. 신체적 긴장과 뇌 신경계의 예민도가 함께 다스려지면, 악순환의 고리가 끊어지고 심장은 본래의 편안한 박동을 되찾게 됩니다.\\n\\n■ 환자가 일상에서 실천해야 할 핵심 관리 수칙\\n1. 대칭적 저림 인지 확인 및 4-6 구순 호흡 3분 지속\\n2. 급성 증상 발현 시 4초간 코로 들이마시고 6초간 입으로 천천히 내쉬는 구순 복식호흡을 3분간 지속합니다.\\n3. '이 증상은 일시적 자율신경 오작동이며 15분 이내에 점차 가라앉는다'는 객관적 의학 사실을 마음에 상기하십시오.\\n\\n해아림한의원은 공황장애의 긴 터널을 지나는 모든 환자분들이 다시 건강하고 평온한 일상을 되찾으실 때까지 든든한 동반자가 되어 드릴 것입니다.\\n\\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\\n\\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\\n\\n[전국 지점 안내](https://www.healim.com)",
              "author": "해아림한의원",
              "date": "2025.06.03",
              "image": "/images/columns/column_29_panic_boundary.svg",
              "views": 1980
          },
          {
              "id": "col-auto-21-1788884000000",
              "colIndex": 21,
              "category": "광장공포증",
              "title": "만성 피로와 스트레스 후 갑자기 찾아온 공황장애: 번아웃과 자율신경 회복법",
              "summary": "번아웃 증후군과 만성 부신 피로가 자율신경계 저항력을 무너뜨려 공황을 부르는 3단계 회복법.",
              "content": "번아웃 증후군과 만성 부신 피로가 자율신경계 저항력을 무너뜨려 공황을 부르는 3단계 회복법.\\n\\n■ HPA축(시상하부-뇌하수체-부신) 탈진 및 아침 극심한 기상 피로의 신경생리학적 병태 생리\\n공황장애 환자분들이 일상에서 흔히 마주치는 만성 피로와 스트레스 후 갑자기 찾아온 공황장애: 번아웃과 자율신경 회복법 문제는 단순한 일시적 긴장이 아닌, 자율신경계의 비상 브레이크 시스템(미주신경 톤)이 약화되고 뇌 편도체의 공포 회로가 과열되면서 촉발됩니다. 심장내과나 신경과 검사에서 구조적 이상이 발견되지 않는다고 해서 환자가 겪는 신체화 고통이 결코 상상 속의 가짜 통증인 것은 아닙니다. HPA축(시상하부-뇌하수체-부신) 탈진 및 아침 극심한 기상 피로은 뇌와 신체가 실제로 위험 경보를 오작동하여 보내는 명백한 생리적 신호입니다.\\n\\n■ 해아림한의원 보중익기탕 및 공진단 가감방 기반 맞춤 치료\\n해아림한의원에서는 과열된 교감신경을 진정시키고 심신 안정을 돕는 보중익기탕 및 공진단 가감방 처방을 바탕으로 1:1 맞춤 진료를 시행합니다. 이와 함께 부신 호르몬 항상성 회복 및 미주신경 재활을 병행하여 뇌척수액 순환을 촉진하고 자율신경계의 본래 복원력을 회복시킵니다. 신체적 긴장과 뇌 신경계의 예민도가 함께 다스려지면, 악순환의 고리가 끊어지고 심장은 본래의 편안한 박동을 되찾게 됩니다.\\n\\n■ 환자가 일상에서 실천해야 할 핵심 관리 수칙\\n1. 주말 몰아자기 지양 및 매일 정시 기상·햇볕 20분 쬐기\\n2. 급성 증상 발현 시 4초간 코로 들이마시고 6초간 입으로 천천히 내쉬는 구순 복식호흡을 3분간 지속합니다.\\n3. '이 증상은 일시적 자율신경 오작동이며 15분 이내에 점차 가라앉는다'는 객관적 의학 사실을 마음에 상기하십시오.\\n\\n해아림한의원은 공황장애의 긴 터널을 지나는 모든 환자분들이 다시 건강하고 평온한 일상을 되찾으실 때까지 든든한 동반자가 되어 드릴 것입니다.\\n\\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\\n\\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\\n\\n[전국 지점 안내](https://www.healim.com)",
              "author": "해아림한의원",
              "date": "2025.05.06",
              "image": "/images/columns/column_21_olfactory_gustatory.svg",
              "views": 1850
          },
          {
              "id": "col-auto-31-1739923200000",
              "colIndex": 31,
              "category": "안정 회복 관리",
              "title": "갑자기 혈압이 180까지 치솟고 뇌졸중 올까 봐 무서워요: 신경성 가성 고혈압과 공황 대처법",
              "summary": "공황발작 시 혈압이 170~190까지 치솟는 가성 고혈압과 뇌혈관 안전 팩트체크 및 교감신경 이완법.",
              "content": "공황발작 시 혈압이 170~190까지 치솟는 가성 고혈압과 뇌혈관 안전 팩트체크 및 교감신경 이완법.\\n\\n■ 혈관 수축성 가성 고혈압 및 뒷목 당김, 두통의 신경생리학적 병태 생리\\n공황장애 환자분들이 일상에서 흔히 마주치는 갑자기 혈압이 180까지 치솟고 뇌졸중 올까 봐 무서워요: 신경성 가성 고혈압과 공황 대처법 문제는 단순한 일시적 긴장이 아닌, 자율신경계의 비상 브레이크 시스템(미주신경 톤)이 약화되고 뇌 편도체의 공포 회로가 과열되면서 촉발됩니다. 심장내과나 신경과 검사에서 구조적 이상이 발견되지 않는다고 해서 환자가 겪는 신체화 고통이 결코 상상 속의 가짜 통증인 것은 아닙니다. 혈관 수축성 가성 고혈압 및 뒷목 당김, 두통은 뇌와 신체가 실제로 위험 경보를 오작동하여 보내는 명백한 생리적 신호입니다.\\n\\n■ 해아림한의원 황련해독탕 및 시호가지각탕 기반 맞춤 치료\\n해아림한의원에서는 과열된 교감신경을 진정시키고 심신 안정을 돕는 황련해독탕 및 시호가지각탕 처방을 바탕으로 1:1 맞춤 진료를 시행합니다. 이와 함께 상부 교감신경 차단 침구 요법 및 혈관 탄성 복원을 병행하여 뇌척수액 순환을 촉진하고 자율신경계의 본래 복원력을 회복시킵니다. 신체적 긴장과 뇌 신경계의 예민도가 함께 다스려지면, 악순환의 고리가 끊어지고 심장은 본래의 편안한 박동을 되찾게 됩니다.\\n\\n■ 환자가 일상에서 실천해야 할 핵심 관리 수칙\\n1. 발작 중 혈압계 반복 측정 중단 및 심호흡 후 30분 뒤 재측정\\n2. 급성 증상 발현 시 4초간 코로 들이마시고 6초간 입으로 천천히 내쉬는 구순 복식호흡을 3분간 지속합니다.\\n3. '이 증상은 일시적 자율신경 오작동이며 15분 이내에 점차 가라앉는다'는 객관적 의학 사실을 마음에 상기하십시오.\\n\\n해아림한의원은 공황장애의 긴 터널을 지나는 모든 환자분들이 다시 건강하고 평온한 일상을 되찾으실 때까지 든든한 동반자가 되어 드릴 것입니다.\\n\\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\\n\\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\\n\\n[전국 지점 안내](https://www.healim.com)",
              "author": "해아림한의원",
              "date": "2025.02.19",
              "image": "/images/columns/column_30_cure_homeostasis.svg",
              "views": 2050
          },
          {
              "id": "col-auto-30-1730937600000",
              "colIndex": 30,
              "category": "동반 증상",
              "title": "치과나 미용실에서 뒤로 누울 때 어지럽고 숨이 막히는 이유: 경추 혈류 장애와 공황 감별",
              "summary": "미용실 샴푸대나 치과 의자에서 목을 뒤로 젖힐 때 추골동맥 압박으로 오는 어지럼과 공황 감별.",
              "content": "미용실 샴푸대나 치과 의자에서 목을 뒤로 젖힐 때 추골동맥 압박으로 오는 어지럼과 공황 감별.\\n\\n■ 경추 과신전에 의한 추골기저동맥 허혈 및 뇌간 각성의 신경생리학적 병태 생리\\n공황장애 환자분들이 일상에서 흔히 마주치는 치과나 미용실에서 뒤로 누울 때 어지럽고 숨이 막히는 이유: 경추 혈류 장애와 공황 감별 문제는 단순한 일시적 긴장이 아닌, 자율신경계의 비상 브레이크 시스템(미주신경 톤)이 약화되고 뇌 편도체의 공포 회로가 과열되면서 촉발됩니다. 심장내과나 신경과 검사에서 구조적 이상이 발견되지 않는다고 해서 환자가 겪는 신체화 고통이 결코 상상 속의 가짜 통증인 것은 아닙니다. 경추 과신전에 의한 추골기저동맥 허혈 및 뇌간 각성은 뇌와 신체가 실제로 위험 경보를 오작동하여 보내는 명백한 생리적 신호입니다.\\n\\n■ 해아림한의원 반하천마백출탕 및 천마구등음 기반 맞춤 치료\\n해아림한의원에서는 과열된 교감신경을 진정시키고 심신 안정을 돕는 반하천마백출탕 및 천마구등음 처방을 바탕으로 1:1 맞춤 진료를 시행합니다. 이와 함께 경추 후관절 이완 추나 및 두경부 림프 순환 촉진을 병행하여 뇌척수액 순환을 촉진하고 자율신경계의 본래 복원력을 회복시킵니다. 신체적 긴장과 뇌 신경계의 예민도가 함께 다스려지면, 악순환의 고리가 끊어지고 심장은 본래의 편안한 박동을 되찾게 됩니다.\\n\\n■ 환자가 일상에서 실천해야 할 핵심 관리 수칙\\n1. 시술 전 목 받침 쿠션 요구 및 턱을 들지 않는 완만한 각도 유지\\n2. 급성 증상 발현 시 4초간 코로 들이마시고 6초간 입으로 천천히 내쉬는 구순 복식호흡을 3분간 지속합니다.\\n3. '이 증상은 일시적 자율신경 오작동이며 15분 이내에 점차 가라앉는다'는 객관적 의학 사실을 마음에 상기하십시오.\\n\\n해아림한의원은 공황장애의 긴 터널을 지나는 모든 환자분들이 다시 건강하고 평온한 일상을 되찾으실 때까지 든든한 동반자가 되어 드릴 것입니다.\\n\\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\\n\\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\\n\\n[전국 지점 안내](https://www.healim.com)",
              "author": "해아림한의원",
              "date": "2024.11.07",
              "image": "/images/columns/column_7_cervical_cst.svg",
              "views": 2130
          },
          {
              "id": "col-auto-20-1788883900000",
              "colIndex": 20,
              "category": "약물 관리",
              "title": "일어설 때 핑 돌고 심장이 벌렁거리는데 공황장애일까요? - 기립성 어지럼증과 자율신경 치료",
              "summary": "일어설 때 핑 돌고 심장이 120회 이상 뛰는 기립성 빈맥(POTS)과 공황발작의 감별 및 자율신경 한약.",
              "content": "일어설 때 핑 돌고 심장이 120회 이상 뛰는 기립성 빈맥(POTS)과 공황발작의 감별 및 자율신경 한약.\\n\\n■ 체위 변환 시 하지 정맥 저류 및 뇌 혈류 일시 감소의 신경생리학적 병태 생리\\n공황장애 환자분들이 일상에서 흔히 마주치는 일어설 때 핑 돌고 심장이 벌렁거리는데 공황장애일까요? - 기립성 어지럼증과 자율신경 치료 문제는 단순한 일시적 긴장이 아닌, 자율신경계의 비상 브레이크 시스템(미주신경 톤)이 약화되고 뇌 편도체의 공포 회로가 과열되면서 촉발됩니다. 심장내과나 신경과 검사에서 구조적 이상이 발견되지 않는다고 해서 환자가 겪는 신체화 고통이 결코 상상 속의 가짜 통증인 것은 아닙니다. 체위 변환 시 하지 정맥 저류 및 뇌 혈류 일시 감소은 뇌와 신체가 실제로 위험 경보를 오작동하여 보내는 명백한 생리적 신호입니다.\\n\\n■ 해아림한의원 영계출감탕 및 보신건비탕 기반 맞춤 치료\\n해아림한의원에서는 과열된 교감신경을 진정시키고 심신 안정을 돕는 영계출감탕 및 보신건비탕 처방을 바탕으로 1:1 맞춤 진료를 시행합니다. 이와 함께 하지 정맥 판막 탄력 증진 및 자율신경 혈압 반사 훈련을 병행하여 뇌척수액 순환을 촉진하고 자율신경계의 본래 복원력을 회복시킵니다. 신체적 긴장과 뇌 신경계의 예민도가 함께 다스려지면, 악순환의 고리가 끊어지고 심장은 본래의 편안한 박동을 되찾게 됩니다.\\n\\n■ 환자가 일상에서 실천해야 할 핵심 관리 수칙\\n1. 기상 시 1분간 걸터앉은 후 천천히 기립 및 수분·전해질 보충\\n2. 급성 증상 발현 시 4초간 코로 들이마시고 6초간 입으로 천천히 내쉬는 구순 복식호흡을 3분간 지속합니다.\\n3. '이 증상은 일시적 자율신경 오작동이며 15분 이내에 점차 가라앉는다'는 객관적 의학 사실을 마음에 상기하십시오.\\n\\n해아림한의원은 공황장애의 긴 터널을 지나는 모든 환자분들이 다시 건강하고 평온한 일상을 되찾으실 때까지 든든한 동반자가 되어 드릴 것입니다.\\n\\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\\n\\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\\n\\n[전국 지점 안내](https://www.healim.com)",
              "author": "해아림한의원",
              "date": "2024.09.02",
              "image": "/images/columns/column_20_metabolism.svg",
              "views": 1875
          },
          {
              "id": "col-auto-29-1723593600000",
              "colIndex": 29,
              "category": "내분비·신경",
              "title": "자다가 숨이 막혀 헐떡이며 깨어나는 이유: 수면 중 산소 부족과 야간 공황 교정법",
              "summary": "수면무호흡증과 구강 호흡이 야간 뇌 산소포화도를 떨어뜨려 질식 공황으로 깨어나는 원인과 교정법.",
              "content": "수면무호흡증과 구강 호흡이 야간 뇌 산소포화도를 떨어뜨려 질식 공황으로 깨어나는 원인과 교정법.\\n\\n■ 야간 간헐적 저산소증 및 뇌간 질식 경보 시스템 오작동의 신경생리학적 병태 생리\\n공황장애 환자분들이 일상에서 흔히 마주치는 자다가 숨이 막혀 헐떡이며 깨어나는 이유: 수면 중 산소 부족과 야간 공황 교정법 문제는 단순한 일시적 긴장이 아닌, 자율신경계의 비상 브레이크 시스템(미주신경 톤)이 약화되고 뇌 편도체의 공포 회로가 과열되면서 촉발됩니다. 심장내과나 신경과 검사에서 구조적 이상이 발견되지 않는다고 해서 환자가 겪는 신체화 고통이 결코 상상 속의 가짜 통증인 것은 아닙니다. 야간 간헐적 저산소증 및 뇌간 질식 경보 시스템 오작동은 뇌와 신체가 실제로 위험 경보를 오작동하여 보내는 명백한 생리적 신호입니다.\\n\\n■ 해아림한의원 청상보하탕 및 신이청폐탕 기반 맞춤 치료\\n해아림한의원에서는 과열된 교감신경을 진정시키고 심신 안정을 돕는 청상보하탕 및 신이청폐탕 처방을 바탕으로 1:1 맞춤 진료를 시행합니다. 이와 함께 비강 점막 부종 완화 및 인후두 기도 근육 탄력 강화을 병행하여 뇌척수액 순환을 촉진하고 자율신경계의 본래 복원력을 회복시킵니다. 신체적 긴장과 뇌 신경계의 예민도가 함께 다스려지면, 악순환의 고리가 끊어지고 심장은 본래의 편안한 박동을 되찾게 됩니다.\\n\\n■ 환자가 일상에서 실천해야 할 핵심 관리 수칙\\n1. 입벌림 방지 테이핑 및 옆으로 누워 자는 수면 자세 확립\\n2. 급성 증상 발현 시 4초간 코로 들이마시고 6초간 입으로 천천히 내쉬는 구순 복식호흡을 3분간 지속합니다.\\n3. '이 증상은 일시적 자율신경 오작동이며 15분 이내에 점차 가라앉는다'는 객관적 의학 사실을 마음에 상기하십시오.\\n\\n해아림한의원은 공황장애의 긴 터널을 지나는 모든 환자분들이 다시 건강하고 평온한 일상을 되찾으실 때까지 든든한 동반자가 되어 드릴 것입니다.\\n\\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\\n\\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\\n\\n[전국 지점 안내](https://www.healim.com)",
              "author": "해아림한의원",
              "date": "2024.08.14",
              "image": "/images/columns/column_6_adrenal_fatigue.svg",
              "views": 2190
          },
          {
              "id": "col-auto-28-1716336000000",
              "colIndex": 28,
              "category": "어지럼증",
              "title": "혼자 외출하기 두렵고 사람 많은 곳을 피하게 돼요: 광장공포증을 극복하는 단계별 훈련",
              "summary": "불안하다고 피하면 안전지대가 줄어듭니다. 공포 상황을 10단계로 나누어 극복하는 단계적 노출 훈련.",
              "content": "불안하다고 피하면 안전지대가 줄어듭니다. 공포 상황을 10단계로 나누어 극복하는 단계적 노출 훈련.\\n\\n■ 광장공포증 및 회피 행동으로 인한 일상 활동 반경 축소의 신경생리학적 병태 생리\\n공황장애 환자분들이 일상에서 흔히 마주치는 혼자 외출하기 두렵고 사람 많은 곳을 피하게 돼요: 광장공포증을 극복하는 단계별 훈련 문제는 단순한 일시적 긴장이 아닌, 자율신경계의 비상 브레이크 시스템(미주신경 톤)이 약화되고 뇌 편도체의 공포 회로가 과열되면서 촉발됩니다. 심장내과나 신경과 검사에서 구조적 이상이 발견되지 않는다고 해서 환자가 겪는 신체화 고통이 결코 상상 속의 가짜 통증인 것은 아닙니다. 광장공포증 및 회피 행동으로 인한 일상 활동 반경 축소은 뇌와 신체가 실제로 위험 경보를 오작동하여 보내는 명백한 생리적 신호입니다.\\n\\n■ 해아림한의원 귀비탕 및 온담탕 가감방 기반 맞춤 치료\\n해아림한의원에서는 과열된 교감신경을 진정시키고 심신 안정을 돕는 귀비탕 및 온담탕 가감방 처방을 바탕으로 1:1 맞춤 진료를 시행합니다. 이와 함께 단계적 불안 둔감화 인지행동치료 및 신경가소성 강화을 병행하여 뇌척수액 순환을 촉진하고 자율신경계의 본래 복원력을 회복시킵니다. 신체적 긴장과 뇌 신경계의 예민도가 함께 다스려지면, 악순환의 고리가 끊어지고 심장은 본래의 편안한 박동을 되찾게 됩니다.\\n\\n■ 환자가 일상에서 실천해야 할 핵심 관리 수칙\\n1. 불안 위계표 작성 후 성공 경험을 기록하는 성공 일지 작성\\n2. 급성 증상 발현 시 4초간 코로 들이마시고 6초간 입으로 천천히 내쉬는 구순 복식호흡을 3분간 지속합니다.\\n3. '이 증상은 일시적 자율신경 오작동이며 15분 이내에 점차 가라앉는다'는 객관적 의학 사실을 마음에 상기하십시오.\\n\\n해아림한의원은 공황장애의 긴 터널을 지나는 모든 환자분들이 다시 건강하고 평온한 일상을 되찾으실 때까지 든든한 동반자가 되어 드릴 것입니다.\\n\\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\\n\\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\\n\\n[전국 지점 안내](https://www.healim.com)",
              "author": "해아림한의원",
              "date": "2024.05.22",
              "image": "/images/columns/column_4_pots_dizziness.svg",
              "views": 2240
          },
          {
              "id": "col-auto-27-1707091200000",
              "colIndex": 27,
              "category": "소화·뇌신경",
              "title": "가을·겨울 환절기만 되면 가슴이 답답하고 불안이 심해져요: 계절성 공황장애 예방법",
              "summary": "가을·겨울철 일조량 감소와 세로토닌 합성 저하가 부르는 계절성 공황 악화 예방과 광치료 요법.",
              "content": "가을·겨울철 일조량 감소와 세로토닌 합성 저하가 부르는 계절성 공황 악화 예방과 광치료 요법.\\n\\n■ 일조량 부족에 따른 계절성 정동장애(SAD) 및 편도체 취약화의 신경생리학적 병태 생리\\n공황장애 환자분들이 일상에서 흔히 마주치는 가을·겨울 환절기만 되면 가슴이 답답하고 불안이 심해져요: 계절성 공황장애 예방법 문제는 단순한 일시적 긴장이 아닌, 자율신경계의 비상 브레이크 시스템(미주신경 톤)이 약화되고 뇌 편도체의 공포 회로가 과열되면서 촉발됩니다. 심장내과나 신경과 검사에서 구조적 이상이 발견되지 않는다고 해서 환자가 겪는 신체화 고통이 결코 상상 속의 가짜 통증인 것은 아닙니다. 일조량 부족에 따른 계절성 정동장애(SAD) 및 편도체 취약화은 뇌와 신체가 실제로 위험 경보를 오작동하여 보내는 명백한 생리적 신호입니다.\\n\\n■ 해아림한의원 향부자, 울금, 시호 배합 소간해울(疏肝解鬱) 한약 기반 맞춤 치료\\n해아림한의원에서는 과열된 교감신경을 진정시키고 심신 안정을 돕는 향부자, 울금, 시호 배합 소간해울(疏肝解鬱) 한약 처방을 바탕으로 1:1 맞춤 진료를 시행합니다. 이와 함께 체온 면역 조절 및 송과체 생체 리듬 정상화을 병행하여 뇌척수액 순환을 촉진하고 자율신경계의 본래 복원력을 회복시킵니다. 신체적 긴장과 뇌 신경계의 예민도가 함께 다스려지면, 악순환의 고리가 끊어지고 심장은 본래의 편안한 박동을 되찾게 됩니다.\\n\\n■ 환자가 일상에서 실천해야 할 핵심 관리 수칙\\n1. 오전 10시 이전 야외 30분 햇볕 산책 및 실내 조도 강화\\n2. 급성 증상 발현 시 4초간 코로 들이마시고 6초간 입으로 천천히 내쉬는 구순 복식호흡을 3분간 지속합니다.\\n3. '이 증상은 일시적 자율신경 오작동이며 15분 이내에 점차 가라앉는다'는 객관적 의학 사실을 마음에 상기하십시오.\\n\\n해아림한의원은 공황장애의 긴 터널을 지나는 모든 환자분들이 다시 건강하고 평온한 일상을 되찾으실 때까지 든든한 동반자가 되어 드릴 것입니다.\\n\\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\\n\\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\\n\\n[전국 지점 안내](https://www.healim.com)",
              "author": "해아림한의원",
              "date": "2024.02.05",
              "image": "/images/columns/column_18_gut_brain_axis.svg",
              "views": 2310
          },
          {
              "id": "col-auto-19-1788883800000",
              "colIndex": 19,
              "category": "야간 공황",
              "title": "어깨와 등이 뻐근하고 숨이 깊게 안 쉬어져요: 흉곽 긴장으로 인한 숨막힘 교정법",
              "summary": "목과 어깨 근육의 만성 단축이 흉곽 호흡을 제한하여 산소 부족 착각을 일으키는 메커니즘과 교정.",
              "content": "목과 어깨 근육의 만성 단축이 흉곽 호흡을 제한하여 산소 부족 착각을 일으키는 메커니즘과 교정.\\n\\n■ 늑간근·소흉근 단축에 의한 흉벽 팽창 제한 및 호흡 곤란감의 신경생리학적 병태 생리\\n공황장애 환자분들이 일상에서 흔히 마주치는 어깨와 등이 뻐근하고 숨이 깊게 안 쉬어져요: 흉곽 긴장으로 인한 숨막힘 교정법 문제는 단순한 일시적 긴장이 아닌, 자율신경계의 비상 브레이크 시스템(미주신경 톤)이 약화되고 뇌 편도체의 공포 회로가 과열되면서 촉발됩니다. 심장내과나 신경과 검사에서 구조적 이상이 발견되지 않는다고 해서 환자가 겪는 신체화 고통이 결코 상상 속의 가짜 통증인 것은 아닙니다. 늑간근·소흉근 단축에 의한 흉벽 팽창 제한 및 호흡 곤란감은 뇌와 신체가 실제로 위험 경보를 오작동하여 보내는 명백한 생리적 신호입니다.\\n\\n■ 해아림한의원 서경탕 및 소경활혈탕 기반 맞춤 치료\\n해아림한의원에서는 과열된 교감신경을 진정시키고 심신 안정을 돕는 서경탕 및 소경활혈탕 처방을 바탕으로 1:1 맞춤 진료를 시행합니다. 이와 함께 흉곽 가동성 회복 흉추 추나요법 및 늑간신경 이완을 병행하여 뇌척수액 순환을 촉진하고 자율신경계의 본래 복원력을 회복시킵니다. 신체적 긴장과 뇌 신경계의 예민도가 함께 다스려지면, 악순환의 고리가 끊어지고 심장은 본래의 편안한 박동을 되찾게 됩니다.\\n\\n■ 환자가 일상에서 실천해야 할 핵심 관리 수칙\\n1. 도어웨이 가슴 펴기 스트레칭 및 흉곽 이완 폼롤러 운동\\n2. 급성 증상 발현 시 4초간 코로 들이마시고 6초간 입으로 천천히 내쉬는 구순 복식호흡을 3분간 지속합니다.\\n3. '이 증상은 일시적 자율신경 오작동이며 15분 이내에 점차 가라앉는다'는 객관적 의학 사실을 마음에 상기하십시오.\\n\\n해아림한의원은 공황장애의 긴 터널을 지나는 모든 환자분들이 다시 건강하고 평온한 일상을 되찾으실 때까지 든든한 동반자가 되어 드릴 것입니다.\\n\\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\\n\\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\\n\\n[전국 지점 안내](https://www.healim.com)",
              "author": "해아림한의원",
              "date": "2023.12.31",
              "image": "/images/columns/column_19_burnout_vagus.svg",
              "views": 1900
          },
          {
              "id": "col-auto-26-1697673600000",
              "colIndex": 26,
              "category": "자가 훈련",
              "title": "공황장애 약을 줄이고 싶은데 끊으면 재발할까 봐 두려워요: 안전한 약물 감량과 한방 치료",
              "summary": "신경안정제 감약 시 나타나는 일시적 반동 불안과 질환의 재발을 정확히 감별하여 안전하게 줄이는 법.",
              "content": "신경안정제 감약 시 나타나는 일시적 반동 불안과 질환의 재발을 정확히 감별하여 안전하게 줄이는 법.\\n\\n■ 벤조디아제핀 수용체 감도 저하에 따른 반동성 불안·불면의 신경생리학적 병태 생리\\n공황장애 환자분들이 일상에서 흔히 마주치는 공황장애 약을 줄이고 싶은데 끊으면 재발할까 봐 두려워요: 안전한 약물 감량과 한방 치료 문제는 단순한 일시적 긴장이 아닌, 자율신경계의 비상 브레이크 시스템(미주신경 톤)이 약화되고 뇌 편도체의 공포 회로가 과열되면서 촉발됩니다. 심장내과나 신경과 검사에서 구조적 이상이 발견되지 않는다고 해서 환자가 겪는 신체화 고통이 결코 상상 속의 가짜 통증인 것은 아닙니다. 벤조디아제핀 수용체 감도 저하에 따른 반동성 불안·불면은 뇌와 신체가 실제로 위험 경보를 오작동하여 보내는 명백한 생리적 신호입니다.\\n\\n■ 해아림한의원 조간익뇌탕 및 감맥대조탕 기반 맞춤 치료\\n해아림한의원에서는 과열된 교감신경을 진정시키고 심신 안정을 돕는 조간익뇌탕 및 감맥대조탕 처방을 바탕으로 1:1 맞춤 진료를 시행합니다. 이와 함께 뇌 신경망 자생력 강화 및 점진적 감량 모니터링을 병행하여 뇌척수액 순환을 촉진하고 자율신경계의 본래 복원력을 회복시킵니다. 신체적 긴장과 뇌 신경계의 예민도가 함께 다스려지면, 악순환의 고리가 끊어지고 심장은 본래의 편안한 박동을 되찾게 됩니다.\\n\\n■ 환자가 일상에서 실천해야 할 핵심 관리 수칙\\n1. 한 번에 10% 이내 감량 및 2~4주 간격의 완만한 속도 유지\\n2. 급성 증상 발현 시 4초간 코로 들이마시고 6초간 입으로 천천히 내쉬는 구순 복식호흡을 3분간 지속합니다.\\n3. '이 증상은 일시적 자율신경 오작동이며 15분 이내에 점차 가라앉는다'는 객관적 의학 사실을 마음에 상기하십시오.\\n\\n해아림한의원은 공황장애의 긴 터널을 지나는 모든 환자분들이 다시 건강하고 평온한 일상을 되찾으실 때까지 든든한 동반자가 되어 드릴 것입니다.\\n\\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\\n\\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\\n\\n[전국 지점 안내](https://www.healim.com)",
              "author": "해아림한의원",
              "date": "2023.10.19",
              "image": "/images/columns/column_19_burnout_vagus.svg",
              "views": 2380
          },
          {
              "id": "col-auto-25-1687910400000",
              "colIndex": 25,
              "category": "신경생화학",
              "title": "디카페인 커피나 초콜릿만 먹어도 심장이 뛰어요: 카페인 민감성과 자율신경 안정법",
              "summary": "디카페인 커피의 미량 카페인과 초콜릿의 테오브로민이 심장 민감 환자에게 미치는 영향과 식이 수칙.",
              "content": "디카페인 커피의 미량 카페인과 초콜릿의 테오브로민이 심장 민감 환자에게 미치는 영향과 식이 수칙.\\n\\n■ 메틸크산틴 계열 성분에 대한 심근 아드레날린 수용체 과민의 신경생리학적 병태 생리\\n공황장애 환자분들이 일상에서 흔히 마주치는 디카페인 커피나 초콜릿만 먹어도 심장이 뛰어요: 카페인 민감성과 자율신경 안정법 문제는 단순한 일시적 긴장이 아닌, 자율신경계의 비상 브레이크 시스템(미주신경 톤)이 약화되고 뇌 편도체의 공포 회로가 과열되면서 촉발됩니다. 심장내과나 신경과 검사에서 구조적 이상이 발견되지 않는다고 해서 환자가 겪는 신체화 고통이 결코 상상 속의 가짜 통증인 것은 아닙니다. 메틸크산틴 계열 성분에 대한 심근 아드레날린 수용체 과민은 뇌와 신체가 실제로 위험 경보를 오작동하여 보내는 명백한 생리적 신호입니다.\\n\\n■ 해아림한의원 청심보혈탕 및 연자육, 백자인 기반 맞춤 치료\\n해아림한의원에서는 과열된 교감신경을 진정시키고 심신 안정을 돕는 청심보혈탕 및 연자육, 백자인 처방을 바탕으로 1:1 맞춤 진료를 시행합니다. 이와 함께 심장 기외수축 진정 및 심기(心氣) 보강을 병행하여 뇌척수액 순환을 촉진하고 자율신경계의 본래 복원력을 회복시킵니다. 신체적 긴장과 뇌 신경계의 예민도가 함께 다스려지면, 악순환의 고리가 끊어지고 심장은 본래의 편안한 박동을 되찾게 됩니다.\\n\\n■ 환자가 일상에서 실천해야 할 핵심 관리 수칙\\n1. 성분표 확인 습관화 및 루이보스·카모마일 허브티 대체\\n2. 급성 증상 발현 시 4초간 코로 들이마시고 6초간 입으로 천천히 내쉬는 구순 복식호흡을 3분간 지속합니다.\\n3. '이 증상은 일시적 자율신경 오작동이며 15분 이내에 점차 가라앉는다'는 객관적 의학 사실을 마음에 상기하십시오.\\n\\n해아림한의원은 공황장애의 긴 터널을 지나는 모든 환자분들이 다시 건강하고 평온한 일상을 되찾으실 때까지 든든한 동반자가 되어 드릴 것입니다.\\n\\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\\n\\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\\n\\n[전국 지점 안내](https://www.healim.com)",
              "author": "해아림한의원",
              "date": "2023.06.28",
              "image": "/images/columns/column_5_neuroplasticity.svg",
              "views": 2450
          },
          {
              "id": "col-auto-18-1788883700000",
              "colIndex": 18,
              "category": "운전 공황",
              "title": "공황장애 검사는 어디서 받나요? - 뇌파와 자율신경 검사로 알아보는 객관적 상태",
              "summary": "정량화 뇌파(QEEG)와 심박변이도(HRV) 검사를 통해 뇌파 안정도와 자율신경 균형도를 측정하는 원리.",
              "content": "정량화 뇌파(QEEG)와 심박변이도(HRV) 검사를 통해 뇌파 안정도와 자율신경 균형도를 측정하는 원리.\\n\\n■ 베타파 과다 흥분 및 HRV 고주파(HF) 파워 급감의 신경생리학적 병태 생리\\n공황장애 환자분들이 일상에서 흔히 마주치는 공황장애 검사는 어디서 받나요? - 뇌파와 자율신경 검사로 알아보는 객관적 상태 문제는 단순한 일시적 긴장이 아닌, 자율신경계의 비상 브레이크 시스템(미주신경 톤)이 약화되고 뇌 편도체의 공포 회로가 과열되면서 촉발됩니다. 심장내과나 신경과 검사에서 구조적 이상이 발견되지 않는다고 해서 환자가 겪는 신체화 고통이 결코 상상 속의 가짜 통증인 것은 아닙니다. 베타파 과다 흥분 및 HRV 고주파(HF) 파워 급감은 뇌와 신체가 실제로 위험 경보를 오작동하여 보내는 명백한 생리적 신호입니다.\\n\\n■ 해아림한의원 체질 맞춤형 뇌기능 활성화 한약 기반 맞춤 치료\\n해아림한의원에서는 과열된 교감신경을 진정시키고 심신 안정을 돕는 체질 맞춤형 뇌기능 활성화 한약 처방을 바탕으로 1:1 맞춤 진료를 시행합니다. 이와 함께 바이오피드백 및 뇌 신경가소성 객관적 추적 평가을 병행하여 뇌척수액 순환을 촉진하고 자율신경계의 본래 복원력을 회복시킵니다. 신체적 긴장과 뇌 신경계의 예민도가 함께 다스려지면, 악순환의 고리가 끊어지고 심장은 본래의 편안한 박동을 되찾게 됩니다.\\n\\n■ 환자가 일상에서 실천해야 할 핵심 관리 수칙\\n1. 치료 전후 3개월 주기 객관적 지표 비교를 통한 확신 강화\\n2. 급성 증상 발현 시 4초간 코로 들이마시고 6초간 입으로 천천히 내쉬는 구순 복식호흡을 3분간 지속합니다.\\n3. '이 증상은 일시적 자율신경 오작동이며 15분 이내에 점차 가라앉는다'는 객관적 의학 사실을 마음에 상기하십시오.\\n\\n해아림한의원은 공황장애의 긴 터널을 지나는 모든 환자분들이 다시 건강하고 평온한 일상을 되찾으실 때까지 든든한 동반자가 되어 드릴 것입니다.\\n\\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\\n\\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\\n\\n[전국 지점 안내](https://www.healim.com)",
              "author": "해아림한의원",
              "date": "2023.04.29",
              "image": "/images/columns/column_18_gut_brain_axis.svg",
              "views": 1925
          },
          {
              "id": "col-auto-24-1675904400000",
              "colIndex": 24,
              "category": "생활 관리",
              "title": "발표나 면접 직전 머리가 하얘지고 심장이 터질 것 같아요: 무대 공포와 수행 불안 극복법",
              "summary": "중요한 시험이나 발표 직전 머리가 하얘지는 급성 수행 불안(블랙아웃)의 전두엽 기능 저하와 차단법.",
              "content": "중요한 시험이나 발표 직전 머리가 하얘지는 급성 수행 불안(블랙아웃)의 전두엽 기능 저하와 차단법.\\n\\n■ 급성 스트레스에 의한 전두엽 작업기억 회로 일시 차단의 신경생리학적 병태 생리\\n공황장애 환자분들이 일상에서 흔히 마주치는 발표나 면접 직전 머리가 하얘지고 심장이 터질 것 같아요: 무대 공포와 수행 불안 극복법 문제는 단순한 일시적 긴장이 아닌, 자율신경계의 비상 브레이크 시스템(미주신경 톤)이 약화되고 뇌 편도체의 공포 회로가 과열되면서 촉발됩니다. 심장내과나 신경과 검사에서 구조적 이상이 발견되지 않는다고 해서 환자가 겪는 신체화 고통이 결코 상상 속의 가짜 통증인 것은 아닙니다. 급성 스트레스에 의한 전두엽 작업기억 회로 일시 차단은 뇌와 신체가 실제로 위험 경보를 오작동하여 보내는 명백한 생리적 신호입니다.\\n\\n■ 해아림한의원 우황청심원 및 안신정지환 가감방 기반 맞춤 치료\\n해아림한의원에서는 과열된 교감신경을 진정시키고 심신 안정을 돕는 우황청심원 및 안신정지환 가감방 처방을 바탕으로 1:1 맞춤 진료를 시행합니다. 이와 함께 수행 불안 심화된 자율신경 안정화 프로토콜을 병행하여 뇌척수액 순환을 촉진하고 자율신경계의 본래 복원력을 회복시킵니다. 신체적 긴장과 뇌 신경계의 예민도가 함께 다스려지면, 악순환의 고리가 끊어지고 심장은 본래의 편안한 박동을 되찾게 됩니다.\\n\\n■ 환자가 일상에서 실천해야 할 핵심 관리 수칙\\n1. 무대 오르기 5분 전 전신 털기 운동 및 5-4-3-2-1 그라운딩\\n2. 급성 증상 발현 시 4초간 코로 들이마시고 6초간 입으로 천천히 내쉬는 구순 복식호흡을 3분간 지속합니다.\\n3. '이 증상은 일시적 자율신경 오작동이며 15분 이내에 점차 가라앉는다'는 객관적 의학 사실을 마음에 상기하십시오.\\n\\n해아림한의원은 공황장애의 긴 터널을 지나는 모든 환자분들이 다시 건강하고 평온한 일상을 되찾으실 때까지 든든한 동반자가 되어 드릴 것입니다.\\n\\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\\n\\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\\n\\n[전국 지점 안내](https://www.healim.com)",
              "author": "해아림한의원",
              "date": "2023.02.09",
              "image": "/images/columns/column_14_recovery_roadmap.svg",
              "views": 2520
          },
          {
              "id": "col-auto-17-1788883600000",
              "colIndex": 17,
              "category": "호흡 관리",
              "title": "머리가 무겁고 조여드는 두통과 함께 오는 불안감: 두개천골요법과 미주신경 이완 치료",
              "summary": "후두하근 긴장을 섬세하게 풀어 뇌척수액 순환을 정상화하고 미주신경 브레이크를 켜는 두개천골요법.",
              "content": "후두하근 긴장을 섬세하게 풀어 뇌척수액 순환을 정상화하고 미주신경 브레이크를 켜는 두개천골요법.\\n\\n■ 후두부 경직 및 경정맥공(Jugular Foramen) 통과 미주신경 압박의 신경생리학적 병태 생리\\n공황장애 환자분들이 일상에서 흔히 마주치는 머리가 무겁고 조여드는 두통과 함께 오는 불안감: 두개천골요법과 미주신경 이완 치료 문제는 단순한 일시적 긴장이 아닌, 자율신경계의 비상 브레이크 시스템(미주신경 톤)이 약화되고 뇌 편도체의 공포 회로가 과열되면서 촉발됩니다. 심장내과나 신경과 검사에서 구조적 이상이 발견되지 않는다고 해서 환자가 겪는 신체화 고통이 결코 상상 속의 가짜 통증인 것은 아닙니다. 후두부 경직 및 경정맥공(Jugular Foramen) 통과 미주신경 압박은 뇌와 신체가 실제로 위험 경보를 오작동하여 보내는 명백한 생리적 신호입니다.\\n\\n■ 해아림한의원 영간식풍탕 및 천마, 구등 기반 맞춤 치료\\n해아림한의원에서는 과열된 교감신경을 진정시키고 심신 안정을 돕는 영간식풍탕 및 천마, 구등 처방을 바탕으로 1:1 맞춤 진료를 시행합니다. 이와 함께 CV-4 제4뇌실 압박술 및 후두골 기저부 감압술을 병행하여 뇌척수액 순환을 촉진하고 자율신경계의 본래 복원력을 회복시킵니다. 신체적 긴장과 뇌 신경계의 예민도가 함께 다스려지면, 악순환의 고리가 끊어지고 심장은 본래의 편안한 박동을 되찾게 됩니다.\\n\\n■ 환자가 일상에서 실천해야 할 핵심 관리 수칙\\n1. 베개 없이 바닥에 누워 테니스공으로 후두골 하부 3분 지압\\n2. 급성 증상 발현 시 4초간 코로 들이마시고 6초간 입으로 천천히 내쉬는 구순 복식호흡을 3분간 지속합니다.\\n3. '이 증상은 일시적 자율신경 오작동이며 15분 이내에 점차 가라앉는다'는 객관적 의학 사실을 마음에 상기하십시오.\\n\\n해아림한의원은 공황장애의 긴 터널을 지나는 모든 환자분들이 다시 건강하고 평온한 일상을 되찾으실 때까지 든든한 동반자가 되어 드릴 것입니다.\\n\\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\\n\\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\\n\\n[전국 지점 안내](https://www.healim.com)",
              "author": "해아림한의원",
              "date": "2022.08.26",
              "image": "/images/columns/column_17_alcohol.svg",
              "views": 1950
          },
          {
              "id": "col-auto-16-1788883500000",
              "colIndex": 16,
              "category": "예기불안",
              "title": "목에 가래가 걸린 듯 답답하고 침 삼키기 힘들어요: 목 이물감(매핵기)과 신경성 조임 치료",
              "summary": "목에 가래나 솜뭉치가 걸린 듯 삼켜지지 않는 매핵기(梅核氣)의 신경성 인후 기전과 반하후박탕 처방.",
              "content": "목에 가래나 솜뭉치가 걸린 듯 삼켜지지 않는 매핵기(梅核氣)의 신경성 인후 기전과 반하후박탕 처방.\\n\\n■ 인후두 역류 및 윤상인두근 경련에 의한 목 조임감의 신경생리학적 병태 생리\\n공황장애 환자분들이 일상에서 흔히 마주치는 목에 가래가 걸린 듯 답답하고 침 삼키기 힘들어요: 목 이물감(매핵기)과 신경성 조임 치료 문제는 단순한 일시적 긴장이 아닌, 자율신경계의 비상 브레이크 시스템(미주신경 톤)이 약화되고 뇌 편도체의 공포 회로가 과열되면서 촉발됩니다. 심장내과나 신경과 검사에서 구조적 이상이 발견되지 않는다고 해서 환자가 겪는 신체화 고통이 결코 상상 속의 가짜 통증인 것은 아닙니다. 인후두 역류 및 윤상인두근 경련에 의한 목 조임감은 뇌와 신체가 실제로 위험 경보를 오작동하여 보내는 명백한 생리적 신호입니다.\\n\\n■ 해아림한의원 반하후박탕(半夏厚朴湯) 및 가미사칠탕 기반 맞춤 치료\\n해아림한의원에서는 과열된 교감신경을 진정시키고 심신 안정을 돕는 반하후박탕(半夏厚朴湯) 및 가미사칠탕 처방을 바탕으로 1:1 맞춤 진료를 시행합니다. 이와 함께 인후부 기혈 순환 침구 요법 및 설골 주변근 이완을 병행하여 뇌척수액 순환을 촉진하고 자율신경계의 본래 복원력을 회복시킵니다. 신체적 긴장과 뇌 신경계의 예민도가 함께 다스려지면, 악순환의 고리가 끊어지고 심장은 본래의 편안한 박동을 되찾게 됩니다.\\n\\n■ 환자가 일상에서 실천해야 할 핵심 관리 수칙\\n1. 헛기침 습관 의도적 중단 및 미온수 조금씩 자주 마시기\\n2. 급성 증상 발현 시 4초간 코로 들이마시고 6초간 입으로 천천히 내쉬는 구순 복식호흡을 3분간 지속합니다.\\n3. '이 증상은 일시적 자율신경 오작동이며 15분 이내에 점차 가라앉는다'는 객관적 의학 사실을 마음에 상기하십시오.\\n\\n해아림한의원은 공황장애의 긴 터널을 지나는 모든 환자분들이 다시 건강하고 평온한 일상을 되찾으실 때까지 든든한 동반자가 되어 드릴 것입니다.\\n\\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\\n\\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\\n\\n[전국 지점 안내](https://www.healim.com)",
              "author": "해아림한의원",
              "date": "2021.12.23",
              "image": "/images/columns/column_16_hormone.svg",
              "views": 1975
          },
          {
              "id": "col-auto-15-1788883400000",
              "colIndex": 15,
              "category": "식이 관리",
              "title": "작은 몸의 변화에도 또 큰 병일까 봐 무서워요: 건강염려증과 신체화 불안 다스리는 법",
              "summary": "발작이 사라진 후에도 사소한 신체 반응에 불안해하는 질병불안장애(건강염려증)의 인지 교정 훈련.",
              "content": "발작이 사라진 후에도 사소한 신체 반응에 불안해하는 질병불안장애(건강염려증)의 인지 교정 훈련.\\n\\n■ 신체 내재 감각(Interoceptive Sensation)에 대한 선택적 과집중의 신경생리학적 병태 생리\\n공황장애 환자분들이 일상에서 흔히 마주치는 작은 몸의 변화에도 또 큰 병일까 봐 무서워요: 건강염려증과 신체화 불안 다스리는 법 문제는 단순한 일시적 긴장이 아닌, 자율신경계의 비상 브레이크 시스템(미주신경 톤)이 약화되고 뇌 편도체의 공포 회로가 과열되면서 촉발됩니다. 심장내과나 신경과 검사에서 구조적 이상이 발견되지 않는다고 해서 환자가 겪는 신체화 고통이 결코 상상 속의 가짜 통증인 것은 아닙니다. 신체 내재 감각(Interoceptive Sensation)에 대한 선택적 과집중은 뇌와 신체가 실제로 위험 경보를 오작동하여 보내는 명백한 생리적 신호입니다.\\n\\n■ 해아림한의원 귀비온담탕 및 백자인, 원지 기반 맞춤 치료\\n해아림한의원에서는 과열된 교감신경을 진정시키고 심신 안정을 돕는 귀비온담탕 및 백자인, 원지 처방을 바탕으로 1:1 맞춤 진료를 시행합니다. 이와 함께 신체화 감각 탈감작 및 건강 염려 인지 재구조화을 병행하여 뇌척수액 순환을 촉진하고 자율신경계의 본래 복원력을 회복시킵니다. 신체적 긴장과 뇌 신경계의 예민도가 함께 다스려지면, 악순환의 고리가 끊어지고 심장은 본래의 편안한 박동을 되찾게 됩니다.\\n\\n■ 환자가 일상에서 실천해야 할 핵심 관리 수칙\\n1. 스마트폰으로 질병 증상 검색(사이버콘드리아) 엄격 차단\\n2. 급성 증상 발현 시 4초간 코로 들이마시고 6초간 입으로 천천히 내쉬는 구순 복식호흡을 3분간 지속합니다.\\n3. '이 증상은 일시적 자율신경 오작동이며 15분 이내에 점차 가라앉는다'는 객관적 의학 사실을 마음에 상기하십시오.\\n\\n해아림한의원은 공황장애의 긴 터널을 지나는 모든 환자분들이 다시 건강하고 평온한 일상을 되찾으실 때까지 든든한 동반자가 되어 드릴 것입니다.\\n\\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\\n\\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\\n\\n[전국 지점 안내](https://www.healim.com)",
              "author": "해아림한의원",
              "date": "2021.04.21",
              "image": "/images/columns/column_15_neurotransmitter.svg",
              "views": 2000
          },
          {
              "id": "col-auto-14-1788883300000",
              "colIndex": 14,
              "category": "자가진단",
              "title": "술 마신 다음 날 아침 심장이 뛰고 식은땀이 나며 불안해요: 숙취성 공황과 자율신경 회복",
              "summary": "술 마신 다음 날 알코올 대사산물 아세트알데하이드가 유발하는 숙취성 공황의 원인과 간 해독 치법.",
              "content": "술 마신 다음 날 알코올 대사산물 아세트알데하이드가 유발하는 숙취성 공황의 원인과 간 해독 치법.\\n\\n■ 아세트알데하이드 독성 및 알코올 금단성 교감신경 반동 발화의 신경생리학적 병태 생리\\n공황장애 환자분들이 일상에서 흔히 마주치는 술 마신 다음 날 아침 심장이 뛰고 식은땀이 나며 불안해요: 숙취성 공황과 자율신경 회복 문제는 단순한 일시적 긴장이 아닌, 자율신경계의 비상 브레이크 시스템(미주신경 톤)이 약화되고 뇌 편도체의 공포 회로가 과열되면서 촉발됩니다. 심장내과나 신경과 검사에서 구조적 이상이 발견되지 않는다고 해서 환자가 겪는 신체화 고통이 결코 상상 속의 가짜 통증인 것은 아닙니다. 아세트알데하이드 독성 및 알코올 금단성 교감신경 반동 발화은 뇌와 신체가 실제로 위험 경보를 오작동하여 보내는 명백한 생리적 신호입니다.\\n\\n■ 해아림한의원 대화중음 및 갈화해성탕 가감방 기반 맞춤 치료\\n해아림한의원에서는 과열된 교감신경을 진정시키고 심신 안정을 돕는 대화중음 및 갈화해성탕 가감방 처방을 바탕으로 1:1 맞춤 진료를 시행합니다. 이와 함께 간 해독 및 뇌 신경 전달물질 조기 안정 치료을 병행하여 뇌척수액 순환을 촉진하고 자율신경계의 본래 복원력을 회복시킵니다. 신체적 긴장과 뇌 신경계의 예민도가 함께 다스려지면, 악순환의 고리가 끊어지고 심장은 본래의 편안한 박동을 되찾게 됩니다.\\n\\n■ 환자가 일상에서 실천해야 할 핵심 관리 수칙\\n1. 공황 치료 기간 중 완전 금주 및 전해질 수분 집중 공급\\n2. 급성 증상 발현 시 4초간 코로 들이마시고 6초간 입으로 천천히 내쉬는 구순 복식호흡을 3분간 지속합니다.\\n3. '이 증상은 일시적 자율신경 오작동이며 15분 이내에 점차 가라앉는다'는 객관적 의학 사실을 마음에 상기하십시오.\\n\\n해아림한의원은 공황장애의 긴 터널을 지나는 모든 환자분들이 다시 건강하고 평온한 일상을 되찾으실 때까지 든든한 동반자가 되어 드릴 것입니다.\\n\\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\\n\\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\\n\\n[전국 지점 안내](https://www.healim.com)",
              "author": "해아림한의원",
              "date": "2020.08.18",
              "image": "/images/columns/column_14_vagus_stimulation.svg",
              "views": 2025
          },
          {
              "id": "col-auto-13-1788883200000",
              "colIndex": 13,
              "category": "회복 로드맵",
              "title": "코감기약을 먹고 갑자기 심장이 벌렁거리고 잠이 안 와요: 약물 유발성 불안과 주의사항",
              "summary": "코감기약이나 다이어트약에 들어있는 교감신경 흥분 성분이 공황 환자의 심장을 뛰게 만드는 위험 경고.",
              "content": "코감기약이나 다이어트약에 들어있는 교감신경 흥분 성분이 공황 환자의 심장을 뛰게 만드는 위험 경고.\\n\\n■ 알파/베타 아드레날린 수용체 직접 자극에 의한 빈맥 및 진전의 신경생리학적 병태 생리\\n공황장애 환자분들이 일상에서 흔히 마주치는 코감기약을 먹고 갑자기 심장이 벌렁거리고 잠이 안 와요: 약물 유발성 불안과 주의사항 문제는 단순한 일시적 긴장이 아닌, 자율신경계의 비상 브레이크 시스템(미주신경 톤)이 약화되고 뇌 편도체의 공포 회로가 과열되면서 촉발됩니다. 심장내과나 신경과 검사에서 구조적 이상이 발견되지 않는다고 해서 환자가 겪는 신체화 고통이 결코 상상 속의 가짜 통증인 것은 아닙니다. 알파/베타 아드레날린 수용체 직접 자극에 의한 빈맥 및 진전은 뇌와 신체가 실제로 위험 경보를 오작동하여 보내는 명백한 생리적 신호입니다.\\n\\n■ 해아림한의원 금은화, 연교, 형개 배합 순수 청열 해열 처방 기반 맞춤 치료\\n해아림한의원에서는 과열된 교감신경을 진정시키고 심신 안정을 돕는 금은화, 연교, 형개 배합 순수 청열 해열 처방 처방을 바탕으로 1:1 맞춤 진료를 시행합니다. 이와 함께 약물 유발성 교감신경 항진 긴급 진정 요법을 병행하여 뇌척수액 순환을 촉진하고 자율신경계의 본래 복원력을 회복시킵니다. 신체적 긴장과 뇌 신경계의 예민도가 함께 다스려지면, 악순환의 고리가 끊어지고 심장은 본래의 편안한 박동을 되찾게 됩니다.\\n\\n■ 환자가 일상에서 실천해야 할 핵심 관리 수칙\\n1. 감기 진료 시 '공황장애 환자이므로 에페드린 계열 제외' 고지\\n2. 급성 증상 발현 시 4초간 코로 들이마시고 6초간 입으로 천천히 내쉬는 구순 복식호흡을 3분간 지속합니다.\\n3. '이 증상은 일시적 자율신경 오작동이며 15분 이내에 점차 가라앉는다'는 객관적 의학 사실을 마음에 상기하십시오.\\n\\n해아림한의원은 공황장애의 긴 터널을 지나는 모든 환자분들이 다시 건강하고 평온한 일상을 되찾으실 때까지 든든한 동반자가 되어 드릴 것입니다.\\n\\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\\n\\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\\n\\n[전국 지점 안내](https://www.healim.com)",
              "author": "해아림한의원",
              "date": "2019.12.16",
              "image": "/images/columns/column_13_somatization.svg",
              "views": 2050
          },
          {
              "id": "col-auto-12-1788883100000",
              "colIndex": 12,
              "category": "폐소공포",
              "title": "입이 바짝 마르고 혀가 화끈거리며 불안해요: 구강건조증과 자율신경실조증의 신체 증상",
              "summary": "입이 바짝 마르고 혀가 화끈거리는 구강건조증과 자율신경계 부조화가 공황과 만나는 지점과 치료.",
              "content": "입이 바짝 마르고 혀가 화끈거리는 구강건조증과 자율신경계 부조화가 공황과 만나는 지점과 치료.\\n\\n■ 타액선 교감신경 우위로 인한 타액 분비 급감 및 설통(舌痛)의 신경생리학적 병태 생리\\n공황장애 환자분들이 일상에서 흔히 마주치는 입이 바짝 마르고 혀가 화끈거리며 불안해요: 구강건조증과 자율신경실조증의 신체 증상 문제는 단순한 일시적 긴장이 아닌, 자율신경계의 비상 브레이크 시스템(미주신경 톤)이 약화되고 뇌 편도체의 공포 회로가 과열되면서 촉발됩니다. 심장내과나 신경과 검사에서 구조적 이상이 발견되지 않는다고 해서 환자가 겪는 신체화 고통이 결코 상상 속의 가짜 통증인 것은 아닙니다. 타액선 교감신경 우위로 인한 타액 분비 급감 및 설통(舌痛)은 뇌와 신체가 실제로 위험 경보를 오작동하여 보내는 명백한 생리적 신호입니다.\\n\\n■ 해아림한의원 맥문동탕 및 청심연자음 가감방 기반 맞춤 치료\\n해아림한의원에서는 과열된 교감신경을 진정시키고 심신 안정을 돕는 맥문동탕 및 청심연자음 가감방 처방을 바탕으로 1:1 맞춤 진료를 시행합니다. 이와 함께 진액(津液) 보충 및 안면 삼차-안면신경 자율신경 조절을 병행하여 뇌척수액 순환을 촉진하고 자율신경계의 본래 복원력을 회복시킵니다. 신체적 긴장과 뇌 신경계의 예민도가 함께 다스려지면, 악순환의 고리가 끊어지고 심장은 본래의 편안한 박동을 되찾게 됩니다.\\n\\n■ 환자가 일상에서 실천해야 할 핵심 관리 수칙\\n1. 구강 호흡 방지 및 레몬수·무설탕 껌으로 침샘 자극\\n2. 급성 증상 발현 시 4초간 코로 들이마시고 6초간 입으로 천천히 내쉬는 구순 복식호흡을 3분간 지속합니다.\\n3. '이 증상은 일시적 자율신경 오작동이며 15분 이내에 점차 가라앉는다'는 객관적 의학 사실을 마음에 상기하십시오.\\n\\n해아림한의원은 공황장애의 긴 터널을 지나는 모든 환자분들이 다시 건강하고 평온한 일상을 되찾으실 때까지 든든한 동반자가 되어 드릴 것입니다.\\n\\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\\n\\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\\n\\n[전국 지점 안내](https://www.healim.com)",
              "author": "해아림한의원",
              "date": "2019.04.13",
              "image": "/images/columns/column_12_rebound_hypotension.svg",
              "views": 2075
          },
          {
              "id": "col-auto-11-1788883000000",
              "colIndex": 11,
              "category": "한방 기전",
              "title": "운동할 때 심장이 빨리 뛰면 공황발작 올까 봐 겁나요: 안전한 운동 가이드와 인지 교정",
              "summary": "운동할 때 숨이 차고 땀이 나는 정상 반응을 공황발작으로 오인하는 뇌의 인지 착각 교정 훈련.",
              "content": "운동할 때 숨이 차고 땀이 나는 정상 반응을 공황발작으로 오인하는 뇌의 인지 착각 교정 훈련.\\n\\n■ 운동 유발성 심박수 상승에 대한 편도체의 파국적 오해석의 신경생리학적 병태 생리\\n공황장애 환자분들이 일상에서 흔히 마주치는 운동할 때 심장이 빨리 뛰면 공황발작 올까 봐 겁나요: 안전한 운동 가이드와 인지 교정 문제는 단순한 일시적 긴장이 아닌, 자율신경계의 비상 브레이크 시스템(미주신경 톤)이 약화되고 뇌 편도체의 공포 회로가 과열되면서 촉발됩니다. 심장내과나 신경과 검사에서 구조적 이상이 발견되지 않는다고 해서 환자가 겪는 신체화 고통이 결코 상상 속의 가짜 통증인 것은 아닙니다. 운동 유발성 심박수 상승에 대한 편도체의 파국적 오해석은 뇌와 신체가 실제로 위험 경보를 오작동하여 보내는 명백한 생리적 신호입니다.\\n\\n■ 해아림한의원 생맥산(生脈散) 및 단삼, 오미자 기반 맞춤 치료\\n해아림한의원에서는 과열된 교감신경을 진정시키고 심신 안정을 돕는 생맥산(生脈散) 및 단삼, 오미자 처방을 바탕으로 1:1 맞춤 진료를 시행합니다. 이와 함께 운동 감각 탈감작 인지행동 재활 훈련을 병행하여 뇌척수액 순환을 촉진하고 자율신경계의 본래 복원력을 회복시킵니다. 신체적 긴장과 뇌 신경계의 예민도가 함께 다스려지면, 악순환의 고리가 끊어지고 심장은 본래의 편안한 박동을 되찾게 됩니다.\\n\\n■ 환자가 일상에서 실천해야 할 핵심 관리 수칙\\n1. 저강도 걷기부터 시작하여 심박수 상승에 신체 적응도 제고\\n2. 급성 증상 발현 시 4초간 코로 들이마시고 6초간 입으로 천천히 내쉬는 구순 복식호흡을 3분간 지속합니다.\\n3. '이 증상은 일시적 자율신경 오작동이며 15분 이내에 점차 가라앉는다'는 객관적 의학 사실을 마음에 상기하십시오.\\n\\n해아림한의원은 공황장애의 긴 터널을 지나는 모든 환자분들이 다시 건강하고 평온한 일상을 되찾으실 때까지 든든한 동반자가 되어 드릴 것입니다.\\n\\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\\n\\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\\n\\n[전국 지점 안내](https://www.healim.com)",
              "author": "해아림한의원",
              "date": "2018.08.10",
              "image": "/images/columns/column_11_chronic_fatigue.svg",
              "views": 2100
          },
          {
              "id": "col-auto-10-1788882900000",
              "colIndex": 10,
              "category": "전조증상",
              "title": "공황장애 치료 한의원 추천과 치료 잘하는 곳 선택법: 대구·서울·부산 등 맞춤 한방 치료",
              "summary": "공황장애 치료 한의원 선택 기준과 대구, 서울, 부산 등 전국 16개 지점 해아림한의원의 맞춤 한방 치료.",
              "content": "공황장애 치료 한의원 선택 기준과 대구, 서울, 부산 등 전국 16개 지점 해아림한의원의 맞춤 한방 치료.\\n\\n■ 체질별 자율신경 실조증 및 만성 예기불안의 신경생리학적 병태 생리\\n공황장애 환자분들이 일상에서 흔히 마주치는 공황장애 치료 한의원 추천과 치료 잘하는 곳 선택법: 대구·서울·부산 등 맞춤 한방 치료 문제는 단순한 일시적 긴장이 아닌, 자율신경계의 비상 브레이크 시스템(미주신경 톤)이 약화되고 뇌 편도체의 공포 회로가 과열되면서 촉발됩니다. 심장내과나 신경과 검사에서 구조적 이상이 발견되지 않는다고 해서 환자가 겪는 신체화 고통이 결코 상상 속의 가짜 통증인 것은 아닙니다. 체질별 자율신경 실조증 및 만성 예기불안은 뇌와 신체가 실제로 위험 경보를 오작동하여 보내는 명백한 생리적 신호입니다.\\n\\n■ 해아림한의원 시호가용골모려탕, 영계출감탕, 귀비탕 3대 대표 처방 기반 맞춤 치료\\n해아림한의원에서는 과열된 교감신경을 진정시키고 심신 안정을 돕는 시호가용골모려탕, 영계출감탕, 귀비탕 3대 대표 처방 처방을 바탕으로 1:1 맞춤 진료를 시행합니다. 이와 함께 1:1 환자 맞춤형 정밀 한약 및 뇌신경 항상성 복원을 병행하여 뇌척수액 순환을 촉진하고 자율신경계의 본래 복원력을 회복시킵니다. 신체적 긴장과 뇌 신경계의 예민도가 함께 다스려지면, 악순환의 고리가 끊어지고 심장은 본래의 편안한 박동을 되찾게 됩니다.\\n\\n■ 환자가 일상에서 실천해야 할 핵심 관리 수칙\\n1. 정확한 체질 진단에 기반한 복약과 건강한 일상 리듬 유지\\n2. 급성 증상 발현 시 4초간 코로 들이마시고 6초간 입으로 천천히 내쉬는 구순 복식호흡을 3분간 지속합니다.\\n3. '이 증상은 일시적 자율신경 오작동이며 15분 이내에 점차 가라앉는다'는 객관적 의학 사실을 마음에 상기하십시오.\\n\\n해아림한의원은 공황장애의 긴 터널을 지나는 모든 환자분들이 다시 건강하고 평온한 일상을 되찾으실 때까지 든든한 동반자가 되어 드릴 것입니다.\\n\\n[공황장애 자가검사 알아보기](https://healim-panic.com/panic-diagnosis)\\n\\n[공황장애 치료방법 알아보기](https://healim-panic.com/panic-treatment)\\n\\n[전국 지점 안내](https://www.healim.com)",
              "author": "해아림한의원",
              "date": "2017.12.07",
              "image": "/images/columns/column_10_gastric_nerve.svg",
              "views": 2125
          }
        ];
        window.defaultFaqData = defaultFaqData;
        window.defaultFaqList = defaultFaqData;
        window.defaultReviewsData = defaultReviewsData;
        window.defaultYoutubeData = defaultYoutubeData;
        if (Array.isArray(defaultColumnsData)) {
          defaultColumnsData.forEach(function(col) {
            if (col && col.content) {
              col.content = String(col.content).replace(/\\r\\n/g, '\n').replace(/\\n/g, '\n').replace(/\\r/g, '\n');
            }
          });
        }
        window.defaultColumnsData = defaultColumnsData;

        // YouTube Helper Functions
        function extractYoutubeId(url) {
        if (!url) return '';
        url = String(url).trim();
        if (/^[a-zA-Z0-9_-]{11}$/.test(url)) return url;
        var match = url.match(/(?:youtu\.be\/|(?:www\.|m\.)?(?:youtube|youtube-nocookie)\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([a-zA-Z0-9_-]{11})/);
        if (match && match[1]) return match[1];
        return '';
        }

        function getYoutubeThumbnail(item, idx) {
        var vId = extractYoutubeId(item.videoEmbed || item.youtubeUrl || item.thumb || '');
        if (!vId) {
          vId = '51rIQ1T5dIU';
        }
        if (item.thumb && item.thumb.startsWith('http') && !item.thumb.includes('healim_logo.png') && !item.thumb.includes('/hqdefault.jpg')) {
          return item.thumb;
        }
        return 'https://img.youtube.com/vi/' + vId + '/maxresdefault.jpg';
        }

        // Dedicated Storage Helpers for Persistent Custom & Synced YouTube Posts
        function getCustomYoutubePosts() {
          try {
            var raw = localStorage.getItem('healim_custom_youtube_posts');
            return raw ? JSON.parse(raw) : [];
          } catch(e) {
            return [];
          }
        }
        function saveCustomYoutubePosts(posts) {
          try {
            localStorage.setItem('healim_custom_youtube_posts', JSON.stringify(posts));
          } catch(e) {}
        }
        function getSyncedYoutubePosts() {
          try {
            var raw = localStorage.getItem('healim_synced_youtube_posts');
            return raw ? JSON.parse(raw) : [];
          } catch(e) {
            return [];
          }
        }
        function saveSyncedYoutubePosts(posts) {
          try {
            localStorage.setItem('healim_synced_youtube_posts', JSON.stringify(posts));
          } catch(e) {}
        }

        // Dedicated Storage Helpers for Admin-Deleted Videos (Never re-register deleted videos)
        function getDeletedYoutubeIds() {
          try {
            var raw = localStorage.getItem('healim_deleted_youtube_ids');
            return raw ? JSON.parse(raw) : [];
          } catch(e) {
            return [];
          }
        }
        function addDeletedYoutubeId(vId, postId) {
          try {
            var ids = getDeletedYoutubeIds();
            if (vId && ids.indexOf(vId) === -1) ids.push(vId);
            if (postId && ids.indexOf(postId) === -1) ids.push(postId);
            localStorage.setItem('healim_deleted_youtube_ids', JSON.stringify(ids));
          } catch(e) {}
        }
        function isDeletedYoutubeId(vId, postId) {
          if (!vId && !postId) return false;
          var ids = getDeletedYoutubeIds();
          if (vId && ids.indexOf(vId) !== -1) return true;
          if (postId && ids.indexOf(postId) !== -1) return true;
          return false;
        }
        window.getDeletedYoutubeIds = getDeletedYoutubeIds;
        window.addDeletedYoutubeId = addDeletedYoutubeId;
        window.isDeletedYoutubeId = isDeletedYoutubeId;

        // Daily 00:00 Auto-Sync Check Helpers
        function getTodayDateString() {
          var now = new Date();
          return now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
        }

        function shouldRunDailyYoutubeSync(forceAlert) {
          if (forceAlert) return true; // Always run on explicit manual click
          var todayStr = getTodayDateString();
          var lastSyncDate = localStorage.getItem('healim_last_youtube_sync_date');
          return (lastSyncDate !== todayStr);
        }

        function scheduleMidnightSync() {
          var now = new Date();
          var tomorrowMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 500);
          var msUntilMidnight = tomorrowMidnight.getTime() - now.getTime();
          if (msUntilMidnight > 0 && msUntilMidnight <= 86400000) {
            setTimeout(function() {
              syncHealimtvChannel(false);
              scheduleMidnightSync();
            }, msUntilMidnight);
          }
        }

        // YouTube Channel Auto-Sync Engine (@healimtv) - Daily 00:00 Check
                var HEALIM_CHANNEL_ID = 'UC-l-0L4_y3eKtne5sbLD59w';
        var PANIC_KEYWORDS = [
          '공황', '공황장애', '공황발작', '발작', '예기불안', '불안', '불안장애',
          '광장공포증', '과호흡', '호흡곤란', '심계항진', '두근거림', '질식감',
          '어지럼', '비현실감', '이인증', '신경안정제', '자낙스', '테이퍼링', '단약',
          'CST', '두개천골', '온담탕', '귀비탕', 'Panic', 'Panic Attack'
        ];

        function isPanicRelated(title, desc) {
          var text = ((title || '') + ' ' + (desc || '')).toLowerCase();
          for (var i = 0; i < PANIC_KEYWORDS.length; i++) {
            if (text.indexOf(PANIC_KEYWORDS[i].toLowerCase()) !== -1) {
              return true;
            }
          }
          return false;
        }

        var isSyncingHealim = false;
        window.syncHealimtvChannel = function(forceAlert) {
          if (isSyncingHealim) return;
          if (!shouldRunDailyYoutubeSync(forceAlert)) {
            // Already synced once today (00:00 check), skip network fetch
            return;
          }
          isSyncingHealim = true;

          var statusBadge = document.getElementById('youtubeSyncStatus');
          if (statusBadge) {
            statusBadge.innerHTML = '<span class="inline-block w-2.5 h-2.5 rounded-full bg-blue-500 animate-spin"></span> <span>해아림TV 최신 영상 동기화 중...</span>';
          }

          var feedUrl = 'https://www.youtube.com/feeds/videos.xml?channel_id=' + HEALIM_CHANNEL_ID;
          var primaryApi = 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(feedUrl);
          var backupApi = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(primaryApi);

          function handleFeedItems(items) {
            if (!items || !Array.isArray(items)) {
              finishSync(0, '피드 데이터를 불러오지 못했습니다.');
              return;
            }

            var currentList = getBoardData('youtube', defaultYoutubeData);
            var existingVids = {};
            currentList.forEach(function(item) {
              var vId = extractYoutubeId(item.videoEmbed || item.thumb || item.youtubeUrl || '');
              if (vId) existingVids[vId] = true;
            });

            var newAdded = [];
            items.forEach(function(item) {
              var vId = extractYoutubeId(item.link || item.guid || '');
              // 관리자가 삭제한 영상은 다시 등록하지 않는다
              if (!vId || existingVids[vId] || isDeletedYoutubeId(vId, 'yt-synced-' + vId)) return;

              if (isPanicRelated(item.title, item.description || item.content)) {
                var pubDateStr = '';
                if (item.pubDate) {
                  var pDate = new Date(item.pubDate);
                  if (!isNaN(pDate.getTime())) {
                    pubDateStr = pDate.getFullYear() + '.' + 
                      String(pDate.getMonth() + 1).padStart(2, '0') + '.' + 
                      String(pDate.getDate()).padStart(2, '0');
                  }
                }
                if (!pubDateStr) pubDateStr = '2026.09.06';

                var cleanDesc = (item.description || item.title || '').replace(/<[^>]+>/g, '').trim();
                if (cleanDesc.length > 160) cleanDesc = cleanDesc.substring(0, 160) + '...';

                var syncedPost = {
                  id: 'yt-synced-' + vId,
                  category: '영상',
                  author: '해아림TV 알쓸한상',
                  date: pubDateStr,
                  views: Math.floor(Math.random() * 5000) + 12000,
                  videoEmbed: 'https://www.youtube-nocookie.com/embed/' + vId,
                  thumb: 'https://img.youtube.com/vi/' + vId + '/maxresdefault.jpg',
                  title: item.title,
                  content: cleanDesc,
                  isSynced: true
                };

                newAdded.push(syncedPost);
                existingVids[vId] = true;
              }
            });

            if (newAdded.length > 0) {
              var syncedPosts = getSyncedYoutubePosts();
              newAdded.forEach(function(np) { syncedPosts.unshift(np); });
              saveSyncedYoutubePosts(syncedPosts);
              if (activeTab === 'youtube') {
                renderYoutubeList();
              }
              try {
                window.dispatchEvent(new CustomEvent('healim-community-updated', { detail: { boardType: 'youtube' } }));
              } catch(e) {}
            }

            finishSync(newAdded.length, null);
          }

          function finishSync(count, err) {
            isSyncingHealim = false;
            if (!err) {
              localStorage.setItem('healim_last_youtube_sync_date', getTodayDateString());
              localStorage.setItem('healim_last_youtube_sync_time', new Date().toISOString());
            }
            if (statusBadge) {
              statusBadge.innerHTML = '<span class="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span> <span><strong>해아림TV 공식 채널</strong> 매일 00:00 자동 연동 활성화</span>';
            }
            if (forceAlert) {
              if (err) {
                alert('해아림TV 채널 동기화 안내:\n네트워크 상태를 확인해주세요. 현재 공식 등록된 최신 영상 목록을 유지합니다.');
              } else if (count > 0) {
                alert('해아림TV 채널에서 새로운 자율신경 관련 영상 ' + count + '편이 자동으로 등록되었습니다!');
              } else {
                alert('해아림TV 채널의 모든 공황장애 관련 영상이 최신 상태로 동기화되어 있습니다. (관리자 삭제 영상은 자동 제외됩니다)');
              }
            }
          }

          fetch(primaryApi)
            .then(function(res) { return res.json(); })
            .then(function(data) {
              if (data && data.status === 'ok' && data.items) {
                handleFeedItems(data.items);
              } else {
                throw new Error('primary API failed');
              }
            })
            .catch(function() {
              fetch(backupApi)
                .then(function(res) { return res.json(); })
                .then(function(data) {
                  if (data && data.status === 'ok' && data.items) {
                    handleFeedItems(data.items);
                  } else {
                    finishSync(0, 'backup failed');
                  }
                })
                .catch(function(err) {
                  finishSync(0, err.message);
                });
            });
        };

        // ─────────────────────────────────────────────────────────────
        // 0. Browser IndexedDB Permanent Vault (Survives localStorage wipes)
        // ─────────────────────────────────────────────────────────────
        var HealimPermanentDB = (function() {
          var DB_NAME = 'HealimCommunityDB';
          var DB_VERSION = 1;
          var STORE_NAME = 'community_vault';
          var dbPromise = null;

          function getDB() {
            if (dbPromise) return dbPromise;
            dbPromise = new Promise(function(resolve) {
              if (!window.indexedDB) {
                resolve(null);
                return;
              }
              var req = window.indexedDB.open(DB_NAME, DB_VERSION);
              req.onupgradeneeded = function(e) {
                var db = e.target.result;
                if (!db.objectStoreNames.contains(STORE_NAME)) {
                  db.createObjectStore(STORE_NAME, { keyPath: 'storeKey' });
                }
              };
              req.onsuccess = function(e) { resolve(e.target.result); };
              req.onerror = function() { resolve(null); };
            });
            return dbPromise;
          }

          function saveVault(boardKey, list) {
            getDB().then(function(db) {
              if (!db) return;
              try {
                var tx = db.transaction(STORE_NAME, 'readwrite');
                var store = tx.objectStore(STORE_NAME);
                var cleanList = Array.isArray(list) ? list.filter(function(it) {
                  return it && !isDeletedPostId(boardKey, it.id, it);
                }) : [];
                store.put({ storeKey: boardKey, data: cleanList, updatedAt: Date.now() });
              } catch(e) {}
            });
          }

          function deleteFromVault(boardKey, postId) {
            getDB().then(function(db) {
              if (!db) return;
              try {
                var tx = db.transaction(STORE_NAME, 'readwrite');
                var store = tx.objectStore(STORE_NAME);
                var req = store.get(boardKey);
                req.onsuccess = function() {
                  if (req.result && Array.isArray(req.result.data)) {
                    var filtered = req.result.data.filter(function(it) {
                      return it && String(it.id) !== String(postId);
                    });
                    store.put({ storeKey: boardKey, data: filtered, updatedAt: Date.now() });
                  }
                };
                try { store.delete('edited_' + boardKey + '_' + postId); } catch(err) {}
              } catch(e) {}
            });
          }

          function saveEdited(boardKey, post) {
            if (!boardKey || !post || !post.id) return;
            getDB().then(function(db) {
              if (!db) return;
              try {
                var tx = db.transaction(STORE_NAME, 'readwrite');
                var store = tx.objectStore(STORE_NAME);
                store.put({ storeKey: 'edited_' + boardKey + '_' + post.id, data: post, updatedAt: Date.now() });
              } catch(e) {}
            });
          }

          function restoreVault(boardKey, callback) {
            getDB().then(function(db) {
              if (!db) { if (callback) callback(null); return; }
              try {
                var tx = db.transaction(STORE_NAME, 'readonly');
                var store = tx.objectStore(STORE_NAME);
                var req = store.get(boardKey);
                req.onsuccess = function() {
                  var res = req.result;
                  if (callback) callback(res && Array.isArray(res.data) ? res.data : null);
                };
                req.onerror = function() { if (callback) callback(null); };
              } catch(e) {
                if (callback) callback(null);
              }
            });
          }

          return {
            saveVault: saveVault,
            deleteFromVault: deleteFromVault,
            saveEdited: saveEdited,
            restoreVault: restoreVault
          };
        })();
        window.HealimPermanentDB = HealimPermanentDB;

        // ─────────────────────────────────────────────────────────────
        // Authoritative Edited Posts Registry (Immune to F5 Reset & Server Overwrite)
        // ─────────────────────────────────────────────────────────────
        function getEditedPostsMap(boardKey) {
          try {
            var raw = localStorage.getItem('healim_edited_posts_' + boardKey);
            return raw ? JSON.parse(raw) : {};
          } catch(e) {
            return {};
          }
        }
        window.getEditedPostsMap = getEditedPostsMap;

        function saveEditedPostRecord(boardKey, post) {
          if (!boardKey || !post || !post.id) return;
          try {
            var map = getEditedPostsMap(boardKey);
            post.isEdited = true;
            if (!post.updatedAt) post.updatedAt = Date.now();
            map[String(post.id)] = post;
            localStorage.setItem('healim_edited_posts_' + boardKey, JSON.stringify(map));
            if (typeof HealimPermanentDB !== 'undefined' && HealimPermanentDB.saveEdited) {
              HealimPermanentDB.saveEdited(boardKey, post);
            }
          } catch(e) {}
        }
        window.saveEditedPostRecord = saveEditedPostRecord;

        function removeEditedPostRecord(boardKey, postId) {
          if (!boardKey || !postId) return;
          try {
            var map = getEditedPostsMap(boardKey);
            delete map[String(postId)];
            localStorage.setItem('healim_edited_posts_' + boardKey, JSON.stringify(map));
          } catch(e) {}
        }
        window.removeEditedPostRecord = removeEditedPostRecord;

        // ─────────────────────────────────────────────────────────────
        // Obsolete Initial Mock Data Purge & Migration Helper
        // ─────────────────────────────────────────────────────────────
        // ─────────────────────────────────────────────────────────────
        // Obsolete Initial Mock Data Purge & Migration Helper
        // ─────────────────────────────────────────────────────────────
        var OBSOLETE_FAQ_TITLES = [
          '검사상 정상으로 나오는데 한방 치료로 개선이 가능한가요?',
          '치료 기간 및 호전 경과는 보통 어떻게 되나요?',
          '복용 중인 양약(신경안정제, 수면제, 혈압약 등)과 한약 치료를 병행할 수 있나요?',
          '교감신경 항진증과 부교감신경 저하의 차이점은 무엇인가요?',
          '재발을 방지하려면 치료 후 어떤 관리가 필요한가요?'
        ];

        function isObsoleteMockFaq(item) {
          if (!item || !item.title) return false;
          if (item.isCustom) return false;
          var strId = String(item.id || '');
          if (/^faq-\d{8,}/.test(strId)) return false;
          var norm = String(item.title)
            .replace(/^Q[\.:\s\-]+/i, '')
            .replace(/[\s\*\*_~\`#\?\uFF1F\.,\(\)\[\]:;\-]/g, '')
            .toLowerCase();
          return OBSOLETE_FAQ_TITLES.some(function(ot) {
            var otNorm = ot
              .replace(/^Q[\.:\s\-]+/i, '')
              .replace(/[\s\*\*_~\`#\?\uFF1F\.,\(\)\[\]:;\-]/g, '')
              .toLowerCase();
            return norm === otNorm;
          });
        }

        var OBSOLETE_COLUMN_TITLES = [
          '현대인의 보이지 않는 병, 자율신경 불균형과 장-뇌 축(Gut-Brain Axis)',
          '현대인의 보이지 않는 병, 자율신경 불균형과 뇌-장-신경 축(Gut-Brain Axis)',
          '두개천골요법(CST)이 뇌척수액 순환 및 미주신경 활성에 미치는 임상적 고찰',
          '스트레스 호르몬과 바이오피드백: 자율신경 회복 식습관과 수면 리듬 설계법',
          '스트레스 저항도를 높이는 자율신경 회복 식습관과 수면 리듬 설계법'
        ];

        function isObsoleteMockColumn(item) {
          if (!item) return false;
          // Never purge user custom or valid auto-published columns
          if (item.isCustom || item.isAutoPublished) return false;
          var sId = String(item.id || '');
          var pId = String(item.poolId || '');
          if (/^col(umns)?-\d{8,}/.test(sId) || /^col-auto-/.test(sId) || /^col-fresh-/.test(pId) || /^col-ext-/.test(pId)) return false;
          if (item.id === 'col-auto-latest') return true;
          if (!item.title) return false;
          var norm = String(item.title)
            .replace(/^칼럼[\.:\s\-]+/i, '')
            .replace(/[\s\*\*_~\`#\?\uFF1F\.,\(\)\[\]:;\-]/g, '')
            .toLowerCase();
          return OBSOLETE_COLUMN_TITLES.some(function(ot) {
            var otNorm = ot
              .replace(/^칼럼[\.:\s\-]+/i, '')
              .replace(/[\s\*\*_~\`#\?\uFF1F\.,\(\)\[\]:;\-]/g, '')
              .toLowerCase();
            return norm === otNorm;
          });
        }

        var OBSOLETE_REVIEW_TITLES = [
          '원인 모를 가슴 두근거림과 어지럼증, 3개월 치료 후 일상 복귀',
          '매일 밤 괴롭히던 불면과 만성 위장장애, 신경계 안정 찾았습니다',
          '공황인 줄 알았던 과호흡과 식은땀, 자율신경 교정으로 극복',
          '시도 때도 없는 상열감과 손발 차가움이 균형을 되찾았습니다'
        ];

        function isObsoleteMockReview(item) {
          if (!item) return false;
          if (item.isCustom) return false;
          var strId = String(item.id || '');
          if (/^rev(iews)?-\d{8,}/.test(strId)) return false;
          if (item.id === 'rev-test') return false; // Never delete test reviews
          if (!item.title) return false;
          var norm = String(item.title)
            .replace(/[\s\*\*_~\`#\?\uFF1F\.,\(\)\[\]:;\-]/g, '')
            .toLowerCase();
          return OBSOLETE_REVIEW_TITLES.some(function(ot) {
            var otNorm = ot
              .replace(/[\s\*\*_~\`#\?\uFF1F\.,\(\)\[\]:;\-]/g, '')
              .toLowerCase();
            return norm === otNorm;
          });
        }

                function purgeObsoleteMockPosts() {
          try {
            if (!localStorage.getItem('healim_faq_panic_v8')) {
              localStorage.removeItem('healim_vault_all_posts_faq');
              localStorage.removeItem('healim_board_faq');
              localStorage.removeItem('healim_custom_faq_posts');
              localStorage.removeItem('healim_edited_posts_faq');
              localStorage.removeItem('healim_auto_faq_state');
              localStorage.setItem('healim_faq_panic_v8', 'true');
            }
            if (localStorage.getItem('healim_mock_purge_done_v6')) return;
            ['faq', 'columns', 'reviews'].forEach(function(bKey) {
              var isObsoleteFn = (bKey === 'faq' ? isObsoleteMockFaq : (bKey === 'columns' ? isObsoleteMockColumn : isObsoleteMockReview));

              var vKey = 'healim_vault_all_posts_' + bKey;
              var rawV = localStorage.getItem(vKey);
              if (rawV) {
                var vList = (JSON.parse(rawV) || []).filter(function(it) { return !isObsoleteFn(it); });
                localStorage.setItem(vKey, JSON.stringify(vList));
                if (typeof HealimPermanentDB !== 'undefined' && HealimPermanentDB.saveVault) {
                  HealimPermanentDB.saveVault(bKey, vList);
                }
              }

              var bStorageKey = 'healim_board_' + bKey;
              var rawB = localStorage.getItem(bStorageKey);
              if (rawB) {
                var bList = (JSON.parse(rawB) || []).filter(function(it) { return !isObsoleteFn(it); });
                localStorage.setItem(bStorageKey, JSON.stringify(bList));
              }

              var cKey = 'healim_custom_' + bKey + '_posts';
              var rawC = localStorage.getItem(cKey);
              if (rawC) {
                var cList = (JSON.parse(rawC) || []).filter(function(it) { return !isObsoleteFn(it); });
                localStorage.setItem(cKey, JSON.stringify(cList));
              }
            });
            var rawLeg = localStorage.getItem('healim_community_posts_v2');
            if (rawLeg) {
              var legList = (JSON.parse(rawLeg) || []).filter(function(it) { return !isObsoleteMockColumn(it) && !isObsoleteMockFaq(it); });
              localStorage.setItem('healim_community_posts_v2', JSON.stringify(legList));
            }
            localStorage.setItem('healim_mock_purge_done_v6', 'true');
          } catch(e) {}
        }
        purgeObsoleteMockPosts();
        window.purgeObsoleteMockFaqPosts = purgeObsoleteMockPosts;
        window.purgeObsoleteMockPosts = purgeObsoleteMockPosts;

        // ─────────────────────────────────────────────────────────────
        // Permanent Persistence & Multi-Tier Deletion Tracker
        // ─────────────────────────────────────────────────────────────
        var PERMANENT_DELETED_REVIEW_IDS = ['reviews-1788884300000', 'reviews-1788878779980', 'reviews-1788884500000', 'reviews-1788878854783'];

        function getDeletedPostIds(key) {
          try {
            var raw = localStorage.getItem('healim_deleted_posts_' + key);
            var list = raw ? JSON.parse(raw) : [];
            if (key === 'reviews') {
              PERMANENT_DELETED_REVIEW_IDS.forEach(function(dId) {
                if (list.indexOf(dId) === -1) list.push(dId);
              });
            }
            return list;
          } catch(e) {
            return (key === 'reviews') ? PERMANENT_DELETED_REVIEW_IDS.slice() : [];
          }
        }
        window.getDeletedPostIds = getDeletedPostIds;

        function addDeletedPostId(key, id) {
          if (!id) return;
          var strId = String(id).trim();
          var list = getDeletedPostIds(key);
          if (list.indexOf(strId) === -1) {
            list.push(strId);
            localStorage.setItem('healim_deleted_posts_' + key, JSON.stringify(list));
          }
          try {
            var allDel = JSON.parse(localStorage.getItem('healim_deleted_post_ids') || '[]');
            if (allDel.indexOf(strId) === -1) {
              allDel.push(strId);
              localStorage.setItem('healim_deleted_post_ids', JSON.stringify(allDel));
            }
          } catch(e) {}
        }
        window.addDeletedPostId = addDeletedPostId;

        function addDeletedPostTitle(key, title, poolId) {
          if (!key) return;
          try {
            if (title) {
              var sTitle = String(title).trim();
              var k = 'healim_deleted_titles_' + key;
              var list = JSON.parse(localStorage.getItem(k) || '[]');
              if (list.indexOf(sTitle) === -1) {
                list.push(sTitle);
                localStorage.setItem(k, JSON.stringify(list));
              }
            }
            if (poolId) {
              var sPool = String(poolId).trim();
              var pk = 'healim_deleted_pool_ids_' + key;
              var plist = JSON.parse(localStorage.getItem(pk) || '[]');
              if (plist.indexOf(sPool) === -1) {
                plist.push(sPool);
                localStorage.setItem(pk, JSON.stringify(plist));
              }
            }
          } catch(e) {}
        }
        window.addDeletedPostTitle = addDeletedPostTitle;

        function getDeletedPostTitles(key) {
          try {
            return JSON.parse(localStorage.getItem('healim_deleted_titles_' + key) || '[]');
          } catch(e) {
            return [];
          }
        }
        window.getDeletedPostTitles = getDeletedPostTitles;

        function getDeletedPoolIds(key) {
          try {
            return JSON.parse(localStorage.getItem('healim_deleted_pool_ids_' + key) || '[]');
          } catch(e) {
            return [];
          }
        }
        window.getDeletedPoolIds = getDeletedPoolIds;

        function isDeletedPostId(key, id, item) {
          if (!id && !item) return false;
          var strId = String(id || (item ? item.id : '')).trim();

          if (key === 'reviews') {
            if (PERMANENT_DELETED_REVIEW_IDS.indexOf(strId) !== -1) return true;
            var t = String((item && item.title) || '');
            if (t.indexOf('테스트치료후기') !== -1 || t.indexOf('테스트를 해보려고합니다') !== -1 || t.indexOf('테스트를해보려고합니다') !== -1) {
              return true;
            }
          }

          var list = getDeletedPostIds(key);
          if (strId && list.indexOf(strId) !== -1) return true;
          try {
            var allDel = JSON.parse(localStorage.getItem('healim_deleted_post_ids') || '[]');
            if (strId && allDel.indexOf(strId) !== -1) return true;
          } catch(e) {}

          if (item) {
            var itemTitle = String(item.title || '').trim();
            if (itemTitle) {
              var delTitles = getDeletedPostTitles(key);
              if (delTitles.length > 0) {
                var cleanT = itemTitle.replace(/[\s\*\*_~\`#\?\uFF1F\.,\(\)\[\]:;\-]/g, '').toLowerCase();
                var matchTitle = delTitles.some(function(dt) {
                  return cleanT === String(dt).replace(/[\s\*\*_~\`#\?\uFF1F\.,\(\)\[\]:;\-]/g, '').toLowerCase();
                });
                if (matchTitle) return true;
              }
            }
            var itemPoolId = item.poolId || item.idPrefix;
            if (itemPoolId) {
              var delPools = getDeletedPoolIds(key);
              if (delPools.indexOf(String(itemPoolId)) !== -1) return true;
            }
          }

          return false;
        }
        window.isDeletedPostId = isDeletedPostId;

        // One-time Deep Client Storage & IndexedDB Purge for Deleted Test Reviews
        function purgeClientDeletedReviews() {
          try {
            var revDelKey = 'healim_deleted_posts_reviews';
            var curDel = [];
            try { curDel = JSON.parse(localStorage.getItem(revDelKey) || '[]'); } catch(e) {}
            PERMANENT_DELETED_REVIEW_IDS.forEach(function(dId) {
              if (curDel.indexOf(dId) === -1) curDel.push(dId);
            });
            localStorage.setItem(revDelKey, JSON.stringify(curDel));

            ['healim_board_reviews', 'healim_vault_all_posts_reviews', 'healim_custom_reviews_posts', 'healim_community_posts_v2'].forEach(function(k) {
              var raw = localStorage.getItem(k);
              if (raw) {
                try {
                  var arr = JSON.parse(raw);
                  if (Array.isArray(arr)) {
                    var filtered = arr.filter(function(it) {
                      if (!it) return false;
                      var sId = String(it.id || '');
                      if (PERMANENT_DELETED_REVIEW_IDS.indexOf(sId) !== -1) return false;
                      var t = String(it.title || '');
                      if (t.indexOf('테스트치료후기') !== -1 || t.indexOf('테스트를 해보려고합니다') !== -1 || t.indexOf('테스트를해보려고합니다') !== -1) return false;
                      return true;
                    });
                    if (filtered.length !== arr.length) {
                      localStorage.setItem(k, JSON.stringify(filtered));
                    }
                  }
                } catch(e) {}
              }
            });

            // Deep purge in IndexedDB
            if (window.indexedDB) {
              try {
                var req = window.indexedDB.open('HealimCommunityDB', 1);
                req.onsuccess = function(e) {
                  var db = e.target.result;
                  if (!db || !db.objectStoreNames.contains('community_vault')) return;
                  var tx = db.transaction('community_vault', 'readwrite');
                  var store = tx.objectStore('community_vault');
                  var gReq = store.get('reviews');
                  gReq.onsuccess = function() {
                    if (gReq.result && Array.isArray(gReq.result.data)) {
                      var vClean = gReq.result.data.filter(function(it) {
                        if (!it) return false;
                        var sId = String(it.id || '');
                        if (PERMANENT_DELETED_REVIEW_IDS.indexOf(sId) !== -1) return false;
                        var t = String(it.title || '');
                        if (t.indexOf('테스트치료후기') !== -1 || t.indexOf('테스트를 해보려고합니다') !== -1 || t.indexOf('테스트를해보려고합니다') !== -1) return false;
                        return true;
                      });
                      store.put({ storeKey: 'reviews', data: vClean, updatedAt: Date.now() });
                    }
                  };
                };
              } catch(e) {}
            }
          } catch(e) {}
        }
        purgeClientDeletedReviews();
        window.purgeClientDeletedReviews = purgeClientDeletedReviews;

        // Auto purge of duplicate '(심층 연재)' and duplicate normalized columns
        function purgeDuplicateColumnsMigration() {
          try {
            var colKeys = ['healim_board_columns', 'healim_vault_all_posts_columns', 'healim_custom_columns_posts', 'healim_community_posts_v2'];
            colKeys.forEach(function(sKey) {
              var raw = localStorage.getItem(sKey);
              if (raw) {
                var list = JSON.parse(raw) || [];
                if (Array.isArray(list) && list.length > 0) {
                  var seenNorms = {};
                  var seenIds = {};
                  var filtered = [];
                  list.forEach(function(item) {
                    if (!item) return;
                    var sId = String(item.id || '');
                    if (sId && seenIds[sId]) return;
                    var t = String(item.title || '');
                    // '(심층 연재)'가 붙은 중복 글 제거
                    if (t.indexOf('(심층 연재)') !== -1) return;
                    var normT = t.replace(/\s*-\s*(한방\s*임상\s*분석.*|치료\s*중\s*주의할.*|신경\s*가소성.*|검사상\s*정상.*|뇌-신경계.*|미주신경.*|심층\s*치료.*|자가\s*회복.*)/i, '')
                      .replace(/[\s\*\*_~\`#\?\uFF1F\.,\(\)\[\]:;\-]/g, '')
                      .toLowerCase();
                    if (normT && seenNorms[normT]) return;
                    if (normT) seenNorms[normT] = true;
                    if (sId) seenIds[sId] = true;
                    filtered.push(item);
                  });
                  if (filtered.length !== list.length) {
                    localStorage.setItem(sKey, JSON.stringify(filtered));
                    if (sKey === 'healim_vault_all_posts_columns' && typeof window !== 'undefined' && window.HealimPermanentDB && window.HealimPermanentDB.saveVault) {
                      window.HealimPermanentDB.saveVault('columns', filtered);
                    }
                  }
                }
              }
            });
          } catch(e) {}
        }
        purgeDuplicateColumnsMigration();
        window.purgeDuplicateColumnsMigration = purgeDuplicateColumnsMigration;

        function getCustomUserPosts(key) {
          try {
            var raw = localStorage.getItem('healim_custom_' + key + '_posts');
            return raw ? JSON.parse(raw) : [];
          } catch(e) {
            return [];
          }
        }

        function saveCustomUserPosts(key, list) {
          try {
            localStorage.setItem('healim_custom_' + key + '_posts', JSON.stringify(list));
          } catch(e) {}
        }

        // ─────────────────────────────────────────────────────────────
        // Blurred Review Images Helpers (Medical Law Privacy Protection)
        // ─────────────────────────────────────────────────────────────
        var defaultBlurredReviewImages = [
          '/images/reviews/review_1.jpg',
          '/images/reviews/review_2.jpg',
          '/images/reviews/review_3.jpg',
          '/images/reviews/review_4.jpg',
          '/images/reviews/review_5.jpg',
          '/images/reviews/review_6.jpg'
        ];

        function getReviewFallbackImage(seedKey) {
          var hash = 0;
          var str = String(seedKey || Math.random());
          for (var i = 0; i < str.length; i++) {
            hash = ((hash << 5) - hash) + str.charCodeAt(i);
            hash |= 0;
          }
          var idx = Math.abs(hash) % defaultBlurredReviewImages.length;
          return defaultBlurredReviewImages[idx];
        }

        function extractFirstImageFromContent(content) {
          if (!content) return null;
          var imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/i);
          if (imgMatch && imgMatch[1]) return imgMatch[1];
          var mdMatch = content.match(/!\[.*?\]\(([^)]+)\)/);
          if (mdMatch && mdMatch[1]) return mdMatch[1];
          return null;
        }

        function getFaqFallbackImage(seedKey, category) {
          var faqImages = [
            '/images/faq/faq_1_exam.svg', '/images/faq/faq_2_panic.svg', '/images/faq/faq_3_thermal.svg',
            '/images/faq/faq_4_vagus.svg', '/images/faq/faq_5_sleep.svg', '/images/faq/faq_6_pots.svg',
            '/images/faq/faq_7_brainfog.svg', '/images/faq/faq_8_tapering.svg', '/images/faq/faq_9_cst.svg',
            '/images/faq/faq_10_sweat.svg', '/images/faq/faq_11_period.svg', '/images/faq/faq_12_lifestyle.svg',
            '/images/faq/faq_13_vision.svg', '/images/faq/faq_14_weather.svg', '/images/faq/faq_15_alcohol.svg',
            '/images/faq/faq_16_hormone.svg', '/images/faq/faq_17_weight.svg', '/images/faq/faq_18_recovery.svg',
            '/images/faq/faq_19_globus.svg', '/images/faq/faq_20_morning.svg', '/images/faq/faq_21_drymouth.svg',
            '/images/faq/faq_22_orthostatic.svg', '/images/faq/faq_23_sensory.svg', '/images/faq/faq_24_bladder.svg',
            '/images/faq/faq_25_safety.svg', '/images/faq/faq_26_gustatory.svg', '/images/faq/faq_27_chestpain.svg',
            '/images/faq/faq_28_fasciculation.svg', '/images/faq/faq_29_raynaud.svg', '/images/faq/faq_30_pulsatile.svg'
          ];
          var hash = 0;
          var str = String(seedKey || category || Math.random());
          for (var i = 0; i < str.length; i++) {
            hash = ((hash << 5) - hash) + str.charCodeAt(i);
            hash |= 0;
          }
          var idx = Math.abs(hash) % faqImages.length;
          return faqImages[idx];
        }
        window.getFaqFallbackImage = getFaqFallbackImage;

        function getColumnFallbackImage(seedKey, category) {
          var colImages = [
            '/images/columns/column_1_palpitation.svg', '/images/columns/column_2_gut_brain.svg',
            '/images/columns/column_3_temp_dysregulation.svg', '/images/columns/column_4_pots_dizziness.svg',
            '/images/columns/column_5_neuroplasticity.svg', '/images/columns/column_6_adrenal_fatigue.svg',
            '/images/columns/column_7_cervical_cst.svg', '/images/columns/column_8_tinnitus_vagus.svg',
            '/images/columns/column_9_sweat_dysregulation.svg', '/images/columns/column_10_hyperventilation.svg',
            '/images/columns/column_11_chronic_fatigue.svg', '/images/columns/column_12_brainfog_glymphatic.svg',
            '/images/columns/column_13_somatization.svg', '/images/columns/column_14_recovery_roadmap.svg',
            '/images/columns/column_15_neurotransmitter.svg', '/images/columns/column_16_hormone.svg',
            '/images/columns/column_17_alcohol.svg', '/images/columns/column_18_gut_brain_axis.svg',
            '/images/columns/column_19_burnout_vagus.svg', '/images/columns/column_20_metabolism.svg',
            '/images/columns/column_21_olfactory_gustatory.svg', '/images/columns/column_22_pelvic_pain.svg',
            '/images/columns/column_23_bruxism_tmj.svg', '/images/columns/column_24_reactive_hypoglycemia.svg',
            '/images/columns/column_25_microvascular_angina.svg', '/images/columns/column_26_photophobia_pupil.svg',
            '/images/columns/column_27_premature_ventricular.svg', '/images/columns/column_28_seasonal_adaptation.svg',
            '/images/columns/column_29_panic_boundary.svg', '/images/columns/column_30_cure_homeostasis.svg'
          ];
          var hash = 0;
          var str = String(seedKey || category || Math.random());
          for (var i = 0; i < str.length; i++) {
            hash = ((hash << 5) - hash) + str.charCodeAt(i);
            hash |= 0;
          }
          var idx = Math.abs(hash) % colImages.length;
          return colImages[idx];
        }
        window.getColumnFallbackImage = getColumnFallbackImage;


        // ─────────────────────────────────────────────────────────────
        // Healim Universal Realtime Sync Engine (Cross-Browser & Multi-Device)
        // ─────────────────────────────────────────────────────────────
        var HealimUniversalSync = (function() {
          var isLocal = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
          var hubPort = '3030';
          var hubHost = isLocal ? 'http://127.0.0.1:' + hubPort : (window.location.protocol + '//' + window.location.hostname + ':' + hubPort);
          var sseSource = null;
          var hasConnectedHub = false;
          var inMemoryHubData = { faq: [], reviews: [], columns: [], youtube: [], deleted_ids: [] };
          var isSyncing = false;

          function getHubUrl(p) {
            return hubHost + p;
          }

          function pullFromHub(onDone) {
            if (!window.fetch) return;
            // 1. Fetch static hub data from web server (production-ready cross-browser)
            fetch('/data/healim_community_hub.json?t=' + Date.now(), { cache: 'no-cache' })
              .then(function(res) {
                if (!res.ok) throw new Error('Static hub offline');
                return res.json();
              })
              .then(function(json) {
                if (json) {
                  var data = json.data || json;
                  // CRITICAL GUARD: Only accept hub data if epoch strictly matches CURRENT_COMMUNITY_EPOCH!
                  if (!data || data.epoch !== CURRENT_COMMUNITY_EPOCH || (data.version && data.version < 15)) {
                    console.warn('[HealimUniversalSync] Remote hub is obsolete (epoch: ' + (data ? data.epoch : 'none') + '). Rejecting remote overwrite to preserve canonical seed.');
                    if (onDone) onDone(false);
                    return;
                  }
                  hasConnectedHub = true;
                  inMemoryHubData = data;
                  applyHubData(data);
                  checkAndSeedHub(data);
                  if (onDone) onDone(true, data);
                }
              })
              .catch(function(err) {
                if (isLocal) {
                  fetch(getHubUrl('/api/posts'), { mode: 'cors' })
                    .then(function(res) {
                      if (!res.ok) throw new Error('Hub offline');
                      return res.json();
                    })
                    .then(function(json) {
                      if (json && json.status === 'ok' && json.data) {
                        hasConnectedHub = true;
                        inMemoryHubData = json.data;
                        applyHubData(json.data);
                        checkAndSeedHub(json.data);
                        if (onDone) onDone(true, json.data);
                      }
                    })
                    .catch(function(e) {
                      if (onDone) onDone(false, e);
                    });
                } else {
                  if (onDone) onDone(false, err);
                }
              });
          }

          function checkAndSeedHub(data) {
            var boards = ['faq', 'reviews', 'columns', 'youtube'];
            boards.forEach(function(bKey) {
              if (!data[bKey] || data[bKey].length === 0) {
                var localCustom = getCustomUserPosts(bKey);
                if (bKey === 'youtube') localCustom = getCustomYoutubePosts();
                if (Array.isArray(localCustom) && localCustom.length > 0) {
                  localCustom.forEach(function(p) {
                    syncPostToRemote(bKey, p, 'create');
                  });
                }
              }
            });
          }

          function applyHubData(data) {
            if (!data) return;
            var boards = ['faq', 'reviews', 'columns', 'youtube'];
            var didChange = false;

            if (Array.isArray(data.deleted_ids)) {
              data.deleted_ids.forEach(function(did) {
                boards.forEach(function(bKey) {
                  addDeletedPostId(bKey, did);
                });
              });
            }

            boards.forEach(function(bKey) {
              if (Array.isArray(data[bKey]) && data[bKey].length > 0) {
                var remoteList = data[bKey];
                if (bKey === 'faq') {
                  remoteList = remoteList.filter(function(it) { return !isObsoleteMockFaq(it); });
                } else if (bKey === 'columns') {
                  remoteList = remoteList.filter(function(it) { return !isObsoleteMockColumn(it); });
                } else if (bKey === 'reviews') {
                  remoteList = remoteList.filter(function(it) { return !isObsoleteMockReview(it) && !isDeletedPostId('reviews', it.id, it); });
                }
                var vKey = 'healim_vault_all_posts_' + bKey;
                var rawV = localStorage.getItem(vKey);
                var localList = rawV ? (JSON.parse(rawV) || []) : [];
                var editedMap = getEditedPostsMap(bKey);
                var merged = [];
                var seenIds = {};

                // Tier 1: User-edited posts have absolute top priority (immune to static server data)
                Object.keys(editedMap).forEach(function(eid) {
                  var ep = editedMap[eid];
                  if (ep && !isDeletedPostId(bKey, ep.id, ep)) {
                    var strId = String(ep.id);
                    seenIds[strId] = true;
                    merged.push(ep);
                  }
                });

                // Tier 2: Local posts that were edited or created locally or auto-published
                localList.forEach(function(p) {
                  if (p && p.id && !isDeletedPostId(bKey, p.id, p)) {
                    var strId = String(p.id);
                    var isSpecial = p.isEdited || p.updatedAt || p.isCustom || p.isAutoPublished ||
                      strId.indexOf('custom') !== -1 || strId.indexOf('-auto-') !== -1;
                    if (isSpecial) {
                      if (!seenIds[strId]) {
                        var finalP = editedMap[strId] ? editedMap[strId] : p;
                        seenIds[strId] = true;
                        merged.push(finalP);
                      }
                    }
                  }
                });

                // Tier 3: Remote hub posts (use edited version if user edited it, otherwise remote post)
                remoteList.forEach(function(p) {
                  if (p && p.id && !isDeletedPostId(bKey, p.id, p)) {
                    var strId = String(p.id);
                    if (!seenIds[strId]) {
                      var finalP = editedMap[strId] ? editedMap[strId] : p;
                      seenIds[strId] = true;
                      merged.push(finalP);
                    }
                  }
                });

                // Tier 4: Remaining local posts
                localList.forEach(function(p) {
                  if (p && p.id && !isDeletedPostId(bKey, p.id, p)) {
                    var strId = String(p.id);
                    if (!seenIds[strId]) {
                      var finalP = editedMap[strId] ? editedMap[strId] : p;
                      seenIds[strId] = true;
                      merged.push(finalP);
                    }
                  }
                });

                merged = sortCommunityItemsByTime(merged);
                var newMergedJson = JSON.stringify(merged);
                var isDataChanged = (rawV !== newMergedJson);
                if (isDataChanged) {
                  localStorage.setItem(vKey, newMergedJson);
                  localStorage.setItem('healim_board_' + bKey, newMergedJson);
                  if (typeof HealimPermanentDB !== 'undefined' && HealimPermanentDB.saveVault) {
                    HealimPermanentDB.saveVault(bKey, merged);
                  }
                  didChange = true;
                }

                // Also update custom posts tier so getCustomUserPosts has it
                var cKey = (bKey === 'youtube') ? 'healim_custom_youtube_posts' : ('healim_custom_' + bKey + '_posts');
                localStorage.setItem(cKey, JSON.stringify(merged.filter(function(p) {
                  if (!p || !p.id) return false;
                  var sId = String(p.id);
                  return p.isCustom || p.isAutoPublished || sId.indexOf('custom') !== -1 || sId.indexOf('-auto-') !== -1 || sId.indexOf(bKey + '-') === 0 || sId.indexOf('col-') === 0 || sId.indexOf('faq-') === 0 || sId.indexOf('rev-') === 0;
                })));

                didChange = true;
              }
            });

            if (didChange) {
              try {
                if (activeTab === 'faq') renderFaqList();
                else if (activeTab === 'reviews') renderReviewsList();
                else if (activeTab === 'columns') renderColumnsList();
                else if (activeTab === 'youtube') renderYoutubeList();
                window.dispatchEvent(new CustomEvent('healim-community-updated', { detail: { source: 'hub-sync' } }));
              } catch(e) {}
            }
          }

          function startEventStream() {
            if (typeof EventSource === 'undefined') return;
            try {
              if (sseSource) sseSource.close();
              sseSource = new EventSource(getHubUrl('/api/events'));
              sseSource.onmessage = function(e) {
                try {
                  var evt = JSON.parse(e.data);
                  if (evt.type === 'update' && evt.boardType && evt.post) {
                    handleRemoteUpdate(evt.boardType, evt.post, evt.action);
                  } else if (evt.type === 'delete' && evt.boardType && evt.id) {
                    handleRemoteDelete(evt.boardType, evt.id);
                  }
                } catch(err) {}
              };
              sseSource.onerror = function() {};
            } catch(e) {}
          }

          function handleRemoteUpdate(boardType, post, action) {
            if (!boardType || !post || !post.id) return;
            var vKey = 'healim_vault_all_posts_' + boardType;
            var list = JSON.parse(localStorage.getItem(vKey) || '[]');
            var idx = list.findIndex(function(p) { return String(p.id) === String(post.id); });
            if (idx !== -1) {
              list[idx] = post;
            } else {
              list.unshift(post);
            }
            localStorage.setItem(vKey, JSON.stringify(list));
            localStorage.setItem('healim_board_' + boardType, JSON.stringify(list));
            if (typeof HealimPermanentDB !== 'undefined' && HealimPermanentDB.saveVault) {
              HealimPermanentDB.saveVault(boardType, list);
            }

            var cKey = (boardType === 'youtube') ? 'healim_custom_youtube_posts' : ('healim_custom_' + boardType + '_posts');
            var cList = JSON.parse(localStorage.getItem(cKey) || '[]');
            var cIdx = cList.findIndex(function(p) { return String(p.id) === String(post.id); });
            if (cIdx !== -1) { cList[cIdx] = post; } else { cList.unshift(post); }
            localStorage.setItem(cKey, JSON.stringify(cList));

            try {
              if (activeTab === boardType) {
                if (boardType === 'faq') renderFaqList();
                else if (boardType === 'reviews') renderReviewsList();
                else if (boardType === 'columns') renderColumnsList();
                else if (boardType === 'youtube') renderYoutubeList();
              }
              window.dispatchEvent(new CustomEvent('healim-community-updated', { detail: { boardType: boardType, post: post, action: action, source: 'sse' } }));
            } catch(e) {}
          }

          function handleRemoteDelete(boardType, id) {
            if (!boardType || !id) return;
            addDeletedPostId(boardType, id);
            var vKey = 'healim_vault_all_posts_' + boardType;
            var list = JSON.parse(localStorage.getItem(vKey) || '[]').filter(function(p) { return String(p.id) !== String(id); });
            localStorage.setItem(vKey, JSON.stringify(list));
            localStorage.setItem('healim_board_' + boardType, JSON.stringify(list));
            if (typeof HealimPermanentDB !== 'undefined' && HealimPermanentDB.saveVault) {
              HealimPermanentDB.saveVault(boardType, list);
            }
            try {
              if (activeTab === boardType) {
                if (boardType === 'faq') renderFaqList();
                else if (boardType === 'reviews') renderReviewsList();
                else if (boardType === 'columns') renderColumnsList();
                else if (boardType === 'youtube') renderYoutubeList();
              }
              window.dispatchEvent(new CustomEvent('healim-community-updated', { detail: { boardType: boardType, id: id, action: 'delete', source: 'sse' } }));
            } catch(e) {}
          }

          function syncPostToRemote(boardType, post, action) {
            if (window.HealimCloudDB && window.HealimCloudDB.savePost) {
              window.HealimCloudDB.savePost(boardType, post);
            }
            if (isLocal && window.fetch) {
              fetch(getHubUrl('/api/posts'), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors',
                body: JSON.stringify({ boardType: boardType, post: post, action: action || 'create' })
              }).catch(function() {});
            }
          }

          function syncDeleteToRemote(boardType, id) {
            if (window.HealimCloudDB && window.HealimCloudDB.deletePost) {
              window.HealimCloudDB.deletePost(boardType, id);
            }
            if (isLocal && window.fetch) {
              fetch(getHubUrl('/api/posts'), {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors',
                body: JSON.stringify({ boardType: boardType, id: id, adminUser: 'healim0071' })
              }).catch(function() {});
            }
          }

          function init() {
            pullFromHub(function(success) {
              if (success) {
                startEventStream();
              }
            });
            if (window.HealimCloudDB && window.HealimCloudDB.onUpdate) {
              window.HealimCloudDB.onUpdate(function(reason, payload) {
                try {
                  if (activeTab === 'faq') renderFaqList();
                  else if (activeTab === 'reviews') renderReviewsList();
                  else if (activeTab === 'columns') renderColumnsList();
                  else if (activeTab === 'youtube') renderYoutubeList();
                } catch(e) {}
              });
            }
            setInterval(function() {
              pullFromHub();
            }, 10000);
          }

          return {
            init: init,
            pullFromHub: pullFromHub,
            syncPostToRemote: syncPostToRemote,
            syncDeleteToRemote: syncDeleteToRemote,
            getInMemoryHubData: function() { return inMemoryHubData; }
          };
        })();
        window.HealimUniversalSync = HealimUniversalSync;

        // LocalStorage Helper with Multi-Tier Merge (Guarantees zero data loss)
        function getItemDateScore(item) {
          if (!item) return 0;
          if (item.date) {
            var rawDate = String(item.date).trim();
            var cleanDate = rawDate.replace(/[.\/]/g, '-').trim();
            var dMatch = cleanDate.match(/^(\d{4})-(\d{1,2})-(\d{1,2})(?:[T\s](\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/);
            if (dMatch) {
              var yr = parseInt(dMatch[1], 10);
              var mo = parseInt(dMatch[2], 10) - 1;
              var da = parseInt(dMatch[3], 10);
              var hr = dMatch[4] ? parseInt(dMatch[4], 10) : 0;
              var mi = dMatch[5] ? parseInt(dMatch[5], 10) : 0;
              var sc = dMatch[6] ? parseInt(dMatch[6], 10) : 0;
              var dObj = new Date(yr, mo, da, hr, mi, sc);
              var td = dObj.getTime();
              if (!isNaN(td) && td > 0) return td;
            }
            var td2 = new Date(cleanDate).getTime();
            if (!isNaN(td2) && td2 > 0) return td2;
          }
          if (item.createdAt) {
            var catNum = Number(item.createdAt);
            if (!isNaN(catNum) && catNum > 0) {
              if (catNum >= 1000000000 && catNum < 10000000000) catNum *= 1000;
              return catNum;
            }
          }
          var idStr = String(item.id || '');
          var idMatch = idStr.match(/(\d{10,14})/);
          if (idMatch) {
            var idTimestamp = parseInt(idMatch[1], 10);
            if (idTimestamp >= 1000000000 && idTimestamp < 10000000000) idTimestamp *= 1000;
            return idTimestamp;
          }
          return 0;
        }

        function getItemSubScore(item, index, totalLength) {
          if (!item) return 0;
          if (item.isAutoPublished) {
            return 100000000 + (item.createdAt ? (Number(item.createdAt) % 86400000) : 0);
          }
          if (item.createdAt && !isNaN(Number(item.createdAt))) {
            return Number(item.createdAt) % 86400000;
          }
          var idStr = String(item.id || '');
          var ytMatch = idStr.match(/^yt-(\d+)$/i);
          if (ytMatch) {
            return 100000 - parseInt(ytMatch[1], 10) * 1000;
          }
          var colIdx = item.colIndex || item.poolIndex || 0;
          if (colIdx > 0) {
            return colIdx * 1000;
          }
          return (totalLength - (index || 0));
        }

        function getItemTimeScore(item, index, totalLength) {
          if (!item) return 0;
          return getItemDateScore(item) + (getItemSubScore(item, index, totalLength) / 1000000);
        }

        function sortCommunityItemsByTime(items) {
          if (!Array.isArray(items)) return [];
          var total = items.length;
          var scored = items.map(function(item, idx) {
            return {
              item: item,
              dateScore: getItemDateScore(item),
              subScore: getItemSubScore(item, idx, total),
              origIdx: idx
            };
          });
          scored.sort(function(a, b) {
            if (b.dateScore !== a.dateScore) return b.dateScore - a.dateScore;
            if (b.subScore !== a.subScore) return b.subScore - a.subScore;
            return a.origIdx - b.origIdx;
          });
          return scored.map(function(s) { return s.item; });
        }
        window.sortCommunityItemsByTime = sortCommunityItemsByTime;
        window.getItemDateScore = getItemDateScore;
        window.getItemTimeScore = getItemTimeScore;

        function getBoardData(key, fallback) {
        if (key === 'youtube') {
          var ytEditedMap = getEditedPostsMap('youtube');
          var customPosts = getCustomYoutubePosts();
          var syncedPosts = getSyncedYoutubePosts();
          var merged = [];
          var seenIds = {};
          var seenVids = {};

          function addItem(item) {
            if (!item) return;
            var strId = item.id ? String(item.id).trim() : '';
            if (isDeletedPostId('youtube', strId, item)) return;

            var finalItem = (strId && ytEditedMap[strId]) ? ytEditedMap[strId] : item;
            var vId = extractYoutubeId(finalItem.videoEmbed || finalItem.thumb || finalItem.youtubeUrl || '');
            if (isDeletedYoutubeId(vId, finalItem.id)) return;
            if (vId && seenVids[vId]) return;
            if (finalItem.id && seenIds[finalItem.id]) return;
            if (vId) seenVids[vId] = true;
            if (finalItem.id) seenIds[finalItem.id] = true;

            if (finalItem.thumb && finalItem.thumb.includes('/hqdefault.jpg')) {
              finalItem.thumb = finalItem.thumb.replace('/hqdefault.jpg', '/maxresdefault.jpg');
            } else if (!finalItem.thumb && vId) {
              finalItem.thumb = 'https://img.youtube.com/vi/' + vId + '/maxresdefault.jpg';
            }
            merged.push(finalItem);
          }

          // 1. Edited YouTube posts first
          Object.keys(ytEditedMap).forEach(function(eid) { addItem(ytEditedMap[eid]); });
          // 2. Custom YouTube posts
          customPosts.forEach(addItem);
          // 3. Synced YouTube posts
          syncedPosts.forEach(addItem);
          // 4. Default Seed
          defaultYoutubeData.forEach(addItem);

          var raw = localStorage.getItem('healim_board_youtube');
          if (raw) {
            try {
              var stored = JSON.parse(raw);
              if (Array.isArray(stored)) {
                stored.forEach(function(item) {
                  if (item.isCustom || (item.id && item.id.startsWith('youtube-'))) {
                    addItem(item);
                  }
                });
              }
            } catch(e) {}
          }

          merged = sortCommunityItemsByTime(merged);
          localStorage.setItem('healim_board_youtube', JSON.stringify(merged));
          return merged;
        }

        // Multi-tier Ironclad Permanent Vault (Zero-Data-Loss Guaranteed)
        var deletedIds = getDeletedPostIds(key).map(String);
        var editedMap = getEditedPostsMap(key);
        var vaultList = [];
        var rawVault = localStorage.getItem('healim_vault_all_posts_' + key);
        if (rawVault) {
          try { vaultList = JSON.parse(rawVault) || []; } catch(e) {}
        }
        var customList = getCustomUserPosts(key);
        var storedList = [];
        var raw = localStorage.getItem('healim_board_' + key);
        if (raw) {
          try { storedList = JSON.parse(raw) || []; } catch(e) {}
        }
        var legacyList = [];
        var rawLegacy = localStorage.getItem('healim_community_posts_v2');
        if (rawLegacy) {
          try {
            var allLeg = JSON.parse(rawLegacy) || [];
            legacyList = allLeg.filter(function(p) {
              if (!p) return false;
              if (key === 'faq') return p.type === 'faq' || p.category === 'FAQ' || (p.id && String(p.id).startsWith('faq-'));
              if (key === 'reviews') return p.type === 'reviews' || p.category === '치료후기' || (p.id && String(p.id).startsWith('rev-'));
              if (key === 'columns') return p.type === 'columns' || p.category === '칼럼' || (p.id && String(p.id).startsWith('col-'));
              return false;
            });
          } catch(e) {}
        }

        if (key === 'faq') {
          vaultList = vaultList.filter(function(it) { return !isObsoleteMockFaq(it); });
          storedList = storedList.filter(function(it) { return !isObsoleteMockFaq(it); });
          legacyList = legacyList.filter(function(it) { return !isObsoleteMockFaq(it); });
        } else if (key === 'columns') {
          vaultList = vaultList.filter(function(it) { return !isObsoleteMockColumn(it); });
          storedList = storedList.filter(function(it) { return !isObsoleteMockColumn(it); });
          legacyList = legacyList.filter(function(it) { return !isObsoleteMockColumn(it); });
        } else if (key === 'reviews') {
          vaultList = vaultList.filter(function(it) { return !isObsoleteMockReview(it); });
          storedList = storedList.filter(function(it) { return !isObsoleteMockReview(it); });
          legacyList = legacyList.filter(function(it) { return !isObsoleteMockReview(it); });
        }

        var merged = [];
        var seenIds = {};
        var seenTitles = {};

        function addPostItem(item) {
          if (!item || !item.id) return;
          if (key === 'faq' && isObsoleteMockFaq(item)) return;
          if (key === 'columns' && isObsoleteMockColumn(item)) return;
          if (key === 'reviews' && isObsoleteMockReview(item)) return;

          var strId = String(item.id);
          if (isDeletedPostId(key, strId, item)) return;

          // If this post has an authoritative user edit, use the edited version!
          var finalItem = editedMap[strId] ? editedMap[strId] : item;
          if (seenIds[strId]) return;

          // Normalized title duplicate prevention for FAQ, Columns, Reviews
          if (finalItem.title && (key === 'faq' || key === 'columns')) {
            var normT = String(finalItem.title)
              .replace(/^Q[\.:\s\-]+/i, '')
              .replace(/^칼럼[\.:\s\-]+/i, '')
              .replace(/[\s\*\*_~\`#\?\uFF1F\.,\(\)\[\]:;\-]/g, '')
              .trim()
              .toLowerCase();
            if (normT && seenTitles[normT]) return;
            seenTitles[normT] = true;
          } else if (finalItem.title && key === 'reviews') {
            // For reviews: NEVER discard official seed reviews (rev-*) from canonical hub!
            var isSeedRev = /^rev-\d+|^rev-auto-hist|^rev-clinical|^rev-add/.test(strId);
            var normT = String(finalItem.title)
              .replace(/[\s\*\*_~\`#\?\uFF1F\.,\(\)\[\]:;\-]/g, '')
              .trim()
              .toLowerCase();
            if (!isSeedRev && normT && seenTitles[normT]) return;
            if (normT) seenTitles[normT] = true;
          }

          seenIds[strId] = true;
          merged.push(finalItem);
        }

        // 1. Authoritative User Edited Posts (Admin modified versions)
        Object.keys(editedMap).forEach(function(eid) { addPostItem(editedMap[eid]); });

        // 2. User uploaded / custom posts (written by healim0071 admin in browser)
        customList.forEach(addPostItem);

        // 3. Vault & Local Storage dynamic posts (Auto-published articles & persistent local posts)
        vaultList.forEach(function(item) {
          if (item && item.id) addPostItem(item);
        });
        storedList.forEach(function(item) {
          if (item && item.id) addPostItem(item);
        });

        // 4. Canonical system posts from official hub / seed data (Primary Baseline)
        if (Array.isArray(fallback)) {
          fallback.forEach(addPostItem);
        }

        if (key === 'faq') {
          merged = merged.filter(function(it) { return !isObsoleteMockFaq(it); });
          try {
            localStorage.setItem('healim_board_faq', JSON.stringify(merged));
          } catch(e) {}
        } else if (key === 'columns') {
          merged = merged.filter(function(it) { return !isObsoleteMockColumn(it); });
          try {
            localStorage.setItem('healim_board_columns', JSON.stringify(merged));
          } catch(e) {}
        } else if (key === 'reviews') {
          merged = merged.filter(function(it) { return !isObsoleteMockReview(it); });
          try {
            localStorage.setItem('healim_board_reviews', JSON.stringify(merged));
          } catch(e) {}
        }

        // Ensure images from fallback are preserved
        if (Array.isArray(fallback)) {
          fallback.forEach(function(fb) {
            if (fb.image) {
              var found = merged.find(function(s) { return s.id === fb.id; });
              if (found && !found.image) {
                found.image = fb.image;
              }
            }
          });
        }

        // Ensure reviews always have a blurred image (medical compliance fallback)
        if (key === 'reviews') {
          var reviewsImageUpdated = false;
          merged.forEach(function(item, idx) {
            if (!item.image) {
              var foundImg = extractFirstImageFromContent(item.content);
              item.image = foundImg || getReviewFallbackImage(item.id || item.title || idx);
              reviewsImageUpdated = true;
            }
          });
          if (reviewsImageUpdated) {
            try {
              var cList = getCustomUserPosts('reviews');
              var cMod = false;
              cList.forEach(function(c) {
                if (!c.image) {
                  var m = merged.find(function(it) { return it.id === c.id; });
                  if (m && m.image) { c.image = m.image; cMod = true; }
                }
              });
              if (cMod) saveCustomUserPosts('reviews', cList);
            } catch(e) {}
          }
        }

        merged = sortCommunityItemsByTime(merged);
        try {
          localStorage.setItem('healim_board_' + key, JSON.stringify(merged));
          localStorage.setItem('healim_vault_all_posts_' + key, JSON.stringify(merged));
          if (typeof HealimPermanentDB !== 'undefined' && HealimPermanentDB.saveVault) {
            HealimPermanentDB.saveVault(key, merged);
          }
        } catch(e) {}

        return merged;
        }

        function saveBoardData(key, data) {
        try {
          localStorage.setItem('healim_board_' + key, JSON.stringify(data));
          localStorage.setItem('healim_vault_all_posts_' + key, JSON.stringify(data));
          if (typeof HealimPermanentDB !== 'undefined' && HealimPermanentDB.saveVault) {
            HealimPermanentDB.saveVault(key, data);
          }
          if (typeof window.broadcastHealimCommunityUpdate === 'function') {
            window.broadcastHealimCommunityUpdate(key, 'save');
          } else if (typeof window.syncBottomSections === 'function') {
            window.syncBottomSections();
          }
        } catch(e) {
          console.warn('저장소 용량 부족 또는 저장 오류:', e);
          alert('저장소 용량이 초과되었습니다. 첨부된 사진 용량을 확인해 주세요.');
        }
        }

        window.getBoardData = getBoardData;
        window.saveBoardData = saveBoardData;
        window.getCustomUserPosts = getCustomUserPosts;
        window.saveCustomUserPosts = saveCustomUserPosts;
        window.addDeletedPostId = addDeletedPostId;
        window.getDeletedPostIds = getDeletedPostIds;
        window.defaultFaqData = defaultFaqData;
        window.defaultColumnsData = defaultColumnsData;
        window.defaultReviewsData = defaultReviewsData;
        window.renderFaqList = function() { renderFaqList(); };
        window.renderReviewsList = function() { renderReviewsList(); };
        window.renderYoutubeList = function() { renderYoutubeList(); };
        window.renderColumnsList = function() { renderColumnsList(); };

        // Active States
        var activeTab = 'faq';
        var activeFaqFilter = '전체';
        var activeYoutubeFilter = '전체';
        var activeColumnFilter = '전체';

        // Tab Switching Logic
        window.switchCommunityTab = function(tabName) {
        activeTab = tabName;

        // Update Tab Button Styles
        var tabBtns = document.querySelectorAll('.community-tab-btn');
        tabBtns.forEach(function(btn) {
        if (btn.getAttribute('data-tab') === tabName) {
        btn.classList.add('active');
        } else {
        btn.classList.remove('active');
        }
        });

        // Update Tab Panes
        var panes = ['faq', 'reviews', 'youtube', 'columns'];
        panes.forEach(function(p) {
        var el = document.getElementById('tab-pane-' + p);
        if (el) {
        if (p === tabName) {
        el.classList.remove('hidden');
        } else {
        el.classList.add('hidden');
        }
        }
        });

        // Update URL Hash
        if (history.replaceState) {
        history.replaceState(null, null, '#' + tabName);
        } else {
        window.location.hash = tabName;
        }

        // Render content for active tab
        if (tabName === 'faq') {
          currentFaqPage = 1;
          renderFaqList();
        }
        if (tabName === 'reviews') {
          currentReviewsPage = 1;
          renderReviewsList();
          var rawUser = localStorage.getItem('healim_auth_user');
          if (!rawUser) {
            setTimeout(function() {
              var revAnchor = document.getElementById('reviews');
              if (revAnchor) {
                revAnchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }, 60);
          }
        }
        if (tabName === 'youtube') {
          currentYoutubePage = 1;
          renderYoutubeList();
          syncHealimtvChannel(false);
        }
        if (tabName === 'columns') {
          currentColumnsPage = 1;
          renderColumnsList();
        }

        // Refresh admin permissions and auto badges visibility
        updateCommunityPermissionsUI();
        };

        // --- Superadmin Permission & UI Engine (healim0071 Only) ---
        function isHealimSuperAdmin() {
          try {
            var rawUser = localStorage.getItem('healim_auth_user');
            if (!rawUser) return false;
            var u = JSON.parse(rawUser);
            return !!(u && (u.uid === 'healim0071' || u.id === 'healim0071' || (u.role === 'admin' && (u.uid === 'healim0071' || u.id === 'healim0071')) || u.grade === 'superadmin' || u.role === 'superadmin'));
          } catch(e) {
            return false;
          }
        }
        window.isHealimSuperAdmin = isHealimSuperAdmin;

        function updateCommunityPermissionsUI() {
          var isHealimAdmin = isHealimSuperAdmin();

          // 1. All Write Buttons across 4 tabs
          var writeBtns = document.querySelectorAll('.btn-write-post');
          writeBtns.forEach(function(btn) {
            btn.style.display = isHealimAdmin ? 'inline-flex' : 'none';
          });

          // 2. Auto Publishing Status Badges (FAQ & Columns)
          var faqBadge = document.getElementById('autoFaqStatusBadge');
          if (faqBadge) {
            faqBadge.style.display = isHealimAdmin ? 'flex' : 'none';
          }
          var colBadge = document.getElementById('autoColumnStatusBadge');
          if (colBadge) {
            colBadge.style.display = isHealimAdmin ? 'flex' : 'none';
          }
          var revBadge = document.getElementById('autoReviewStatusBadge');
          if (revBadge) {
            revBadge.style.display = isHealimAdmin ? 'flex' : 'none';
          }
          var revControlBar = document.getElementById('reviewAdminControlBar');
          if (revControlBar) {
            revControlBar.style.display = isHealimAdmin ? 'flex' : 'none';
          }

          // 3. Columns table "관리" header
          var colTh = document.getElementById('colManageTh');
          if (colTh) {
            colTh.style.display = isHealimAdmin ? '' : 'none';
          }

          // 4. Detail Modal Edit & Delete buttons
          var btnEdit = document.getElementById('btnDetailModalEdit');
          if (btnEdit) {
            btnEdit.style.display = isHealimAdmin ? 'inline-block' : 'none';
          }
          var btnDel = document.getElementById('btnDetailModalDelete');
          if (btnDel) {
            btnDel.style.display = isHealimAdmin ? 'inline-block' : 'none';
          }
        }
        window.updateCommunityPermissionsUI = updateCommunityPermissionsUI;
        window.updateAdminAutoBadgesVisibility = updateCommunityPermissionsUI;
        window.addEventListener('storage', updateCommunityPermissionsUI);

        // --- Rich Content Parser (Markdown + Inline Images + Videos) ---
        function renderRichContent(rawText) {
          if (!rawText) return '';
          rawText = String(rawText).replace(/\\r\\n/g, '\n').replace(/\\n/g, '\n').replace(/\\r/g, '\n');

          // If content already contains rich HTML tags from editor or formatted data
          var hasRichHtml = /<(?:p|div|img|br|strong|b|a|span|h[1-6]|ul|ol|li)\b/i.test(rawText);
          if (hasRichHtml) {
            // Strip any malicious script/event tags while preserving images, formatting, and layout
            var clean = rawText
              .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
              .replace(/on\w+="[^"]*"/gi, '')
              .replace(/on\w+='[^']*'/gi, '')
              .replace(/javascript:/gi, '');

            // Also convert any markdown syntax inside rich HTML
            clean = clean
              .replace(/!\[(.*?)\]\(((?:data:image\/[^;]+;base64,[^)]+)|(?:https?:\/\/[^)]+)|(?:\/[^)]+))\)/g, function(match, alt, src) {
                return '<div class="my-3.5 rounded-xl overflow-hidden border border-[#badfe3] bg-[#f8fafb] max-w-lg shadow-xs"><img src="' + src + '" alt="' + (alt || '본문 사진') + '" class="max-h-80 w-auto object-contain rounded-lg" loading="lazy" /></div>';
              })
              .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-[#0d3a42]">$1</strong>')
              .replace(/__(.+?)__/g, '<strong class="font-bold text-[#0d3a42]">$1</strong>')
              .replace(/(?:^|\n)###\s*(.+?)(?=\n|$)/g, '<h4 class="font-bold text-[#0d3a42] text-base mt-4 mb-2 pb-1.5 border-b border-[#edf2f4]">$1</h4>')
              .replace(/(?:^|\n)##\s*(.+?)(?=\n|$)/g, '<h4 class="font-bold text-[#0d3a42] text-base mt-4 mb-2 pb-1.5 border-b border-[#edf2f4]">$1</h4>')
              .replace(/\s###\s*([^\n\?]+[\?]?)(?:\s|$)/g, function(match, title) {
                return '<h4 class="font-bold text-[#0d3a42] text-base mt-4 mb-2 pb-1.5 border-b border-[#edf2f4]">' + title.trim() + '</h4>';
              })
              .replace(/\s\*\s/g, '<br>• ')
              .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline hover:text-[#0d3a42] transition-colors py-0.5 my-0.5"><span>$1</span><span class="text-xs">&gt;</span></a>');

            // Preserve newlines if not already handled by <br> or <p>
            if (clean.indexOf('\n') !== -1 && clean.indexOf('<br') === -1 && clean.indexOf('<p') === -1) {
              clean = clean.replace(/\n\n+/g, '<br><br>').replace(/\n/g, '<br>');
            }

            return clean;
          }

          // 1. Escape HTML entities for pure markdown
          var s = rawText
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');

          // 2. Safe allowed tags created by editor format buttons or inline tags
          s = s
            .replace(/&lt;span style=&quot;color:([^&"]+);&quot;&gt;(.*?)&lt;\/span&gt;/gi, '<span style="color:$1;">$2</span>')
            .replace(/&lt;span class=&quot;([^&"]+)&quot;&gt;(.*?)&lt;\/span&gt;/gi, '<span class="$1">$2</span>')
            .replace(/&lt;span&gt;(.*?)&lt;\/span&gt;/gi, '<span>$1</span>')
            .replace(/&lt;div style=&quot;text-align:center;&quot;&gt;(.*?)&lt;\/div&gt;/gi, '<div style="text-align:center;">$1</div>')
            .replace(/&lt;u&gt;(.*?)&lt;\/u&gt;/gi, '<u>$1</u>')
            .replace(/&lt;br\s*\/?&gt;/gi, '<br>')
            .replace(/&lt;strong&gt;(.*?)&lt;\/strong&gt;/gi, '<strong class="font-bold text-[#0d3a42]">$1</strong>')
            .replace(/&lt;strong class=&quot;([^&"]+)&quot;&gt;(.*?)&lt;\/strong&gt;/gi, '<strong class="$1">$2</strong>')
            .replace(/&lt;b&gt;(.*?)&lt;\/b&gt;/gi, '<strong class="font-bold text-[#0d3a42]">$1</strong>')
            .replace(/&lt;a href=&quot;([^&"]+)&quot;(?:[^&gt;]*)&gt;(.*?)&lt;\/a&gt;/gi, '<a href="$1" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5">$2</a>');

          // 3. Inline images: ![alt](url) -> real visual <img>
          s = s.replace(/!\[(.*?)\]\(((?:data:image\/[^;]+;base64,[^)]+)|(?:https?:\/\/[^)]+)|(?:\/[^)]+))\)/g, function(match, alt, src) {
            return '<div class="my-3.5 rounded-xl overflow-hidden border border-[#badfe3] bg-[#f8fafb] max-w-lg shadow-xs"><img src="' + src + '" alt="' + (alt || '본문 사진') + '" class="max-h-80 w-auto object-contain rounded-lg" loading="lazy" /></div>';
          });

          // 4. Markdown links: [text](url)
          s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline hover:text-[#0d3a42] transition-colors py-0.5 my-0.5"><span>$1</span><span class="text-xs">&gt;</span></a>');

          // 5. Video embed link: [영상 링크: url]
          s = s.replace(/\[영상 링크:\s*(https?:\/\/[^\s\]]+)\]/g, function(match, url) {
            var vId = extractYoutubeId(url);
            if (vId) {
              return '<div class="my-4 rounded-xl overflow-hidden shadow-md"><div class="youtube-thumb-wrapper"><iframe src="https://www.youtube-nocookie.com/embed/' + vId + '" allowfullscreen class="w-full h-full"></iframe></div></div>';
            }
            return '<a href="' + url + '" target="_blank" class="text-[#1c6e78] underline">▶ 영상 링크: ' + url + '</a>';
          });

          // 6. Doc block
          s = s.replace(/&gt; 📄 \[관련 자료\/문서: (.*?)\]/g, '<div class="p-3 my-2 bg-[#f0f7f8] border-l-4 border-[#1c6e78] text-sm text-[#0d3a42] rounded-r">📄 <strong>관련 자료/문서:</strong> $1</div>');

          // 7. Markdown styles
          s = s
            .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-[#0d3a42]">$1</strong>')
            .replace(/__(.+?)__/g, '<strong class="font-bold text-[#0d3a42]">$1</strong>')
            .replace(/(?:^|\n)###\s*(.+?)(?=\n|$)/g, '<h4 class="font-bold text-[#0d3a42] text-base mt-4 mb-2 pb-1.5 border-b border-[#edf2f4]">$1</h4>')
            .replace(/(?:^|\n)##\s*(.+?)(?=\n|$)/g, '<h4 class="font-bold text-[#0d3a42] text-base mt-4 mb-2 pb-1.5 border-b border-[#edf2f4]">$1</h4>')
            .replace(/\s###\s*([^\n\?]+[\?]?)(?:\s|$)/g, function(match, title) {
              return '<h4 class="font-bold text-[#0d3a42] text-base mt-4 mb-2 pb-1.5 border-b border-[#edf2f4]">' + title.trim() + '</h4>';
            })
            .replace(/\s\*\s/g, '<br>• ')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/~~(.*?)~~/g, '<del>$1</del>')
            .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 bg-gray-100 rounded text-xs text-[#0d3a42]">$1</code>')
            .replace(/^\&gt; (.*$)/gim, '<blockquote class="border-l-4 border-[#1c6e78] pl-3 py-1 my-2 bg-[#f0f7f8] text-[#333] rounded-r">$1</blockquote>')
            .replace(/\n\s*---\s*\n/g, '<hr class="my-4 border-[#e2e8ea]" />');

          // 8. Line breaks
          s = s.replace(/\n/g, '<br>');
          s = s
            .replace(/(<br>)*<div class="article-inline-img-wrap">/g, '<div class="article-inline-img-wrap">')
            .replace(/<\/div>(<br>)*/g, '</div>');

          return s;
        }

        // --- Universal Board Pagination Engine (1:1 with user screenshot) ---
        function renderHealimPagination(containerId, totalPages, currentPage, onPageFnName) {
          var container = document.getElementById(containerId);
          if (!container) return;
          if (!totalPages || totalPages <= 1) {
            container.innerHTML = '';
            return;
          }

          var blockSize = 10;
          var currentBlock = Math.floor((currentPage - 1) / blockSize);
          var startPage = currentBlock * blockSize + 1;
          var endPage = Math.min(totalPages, startPage + blockSize - 1);

          var isFirst = (currentPage === 1);
          var isLast = (currentPage === totalPages);

          var html = '';

          // 1. 처음 (First Page)
          html += '<button type="button" class="healim-pagination-btn healim-page-text-btn" ' +
                  (isFirst ? 'disabled' : ('onclick="' + onPageFnName + '(1)"')) +
                  ' title="처음 페이지">처음</button>';

          // 2. « (Previous Page)
          html += '<button type="button" class="healim-pagination-btn" ' +
                  (isFirst ? 'disabled' : ('onclick="' + onPageFnName + '(' + (currentPage - 1) + ')"')) +
                  ' title="이전 페이지">&laquo;</button>';

          // 3. Page Number Buttons
          for (var p = startPage; p <= endPage; p++) {
            if (p === currentPage) {
              html += '<button type="button" class="healim-pagination-btn active" aria-current="page">' + p + '</button>';
            } else {
              html += '<button type="button" class="healim-pagination-btn" onclick="' + onPageFnName + '(' + p + ')">' + p + '</button>';
            }
          }

          // 4. » (Next Page)
          html += '<button type="button" class="healim-pagination-btn" ' +
                  (isLast ? 'disabled' : ('onclick="' + onPageFnName + '(' + (currentPage + 1) + ')"')) +
                  ' title="다음 페이지">&raquo;</button>';

          // 5. 마지막 (Last Page)
          html += '<button type="button" class="healim-pagination-btn healim-page-text-btn" ' +
                  (isLast ? 'disabled' : ('onclick="' + onPageFnName + '(' + totalPages + ')"')) +
                  ' title="마지막 페이지">마지막</button>';

          container.innerHTML = html;
        }

        // --- 1. FAQ Render & Pagination (15 items per page) ---
        var FAQ_PAGE_SIZE = 15;
        var currentFaqPage = 1;

        window.goToFaqPage = function(page) {
          currentFaqPage = page;
          renderFaqList();
          var anchor = document.getElementById('tab-pane-faq');
          if (anchor) {
            var rect = anchor.getBoundingClientRect();
            var offset = window.pageYOffset + rect.top - 80;
            window.scrollTo({ top: offset, behavior: 'smooth' });
          }
        };

        window.filterFaq = function() {
          currentFaqPage = 1;
          renderFaqList();
        };

        function renderFaqList() {
          purgeObsoleteMockFaqPosts();
          if (typeof window.checkAndRunAutoFaqPublish === 'function') {
            window.checkAndRunAutoFaqPublish(false);
          }
          var container = document.getElementById('faqListContainer');
          if (!container) return;

          // Preserve currently open FAQ items so user reading state is 100% preserved
          var openFaqIds = [];
          try {
            var openDetails = container.querySelectorAll('details.faq-item[open]');
            openDetails.forEach(function(dEl) {
              var fId = dEl.getAttribute('data-faq-id');
              if (fId) openFaqIds.push(fId);
            });
          } catch(e) {}

          var list = sortCommunityItemsByTime(getBoardData('faq', defaultFaqData));

          var totalItems = list.length;
          var totalPages = Math.ceil(totalItems / FAQ_PAGE_SIZE) || 1;
          if (currentFaqPage > totalPages) currentFaqPage = totalPages;
          if (currentFaqPage < 1) currentFaqPage = 1;

          var startIndex = (currentFaqPage - 1) * FAQ_PAGE_SIZE;
          var pageItems = list.slice(startIndex, startIndex + FAQ_PAGE_SIZE);

          if (pageItems.length === 0) {
            container.innerHTML = '<div class="p-8 text-center text-gray-500 bg-white rounded-xl border border-gray-200">등록된 FAQ가 없습니다.</div>';
            renderHealimPagination('faqPaginationContainer', 0, 1, 'goToFaqPage');
            return;
          }

          var html = '';
          var isSuperAdmin = isHealimSuperAdmin();
          pageItems.forEach(function(item) {
            var safeFaqId = String(item.id || '').replace(/'/g, "\\'");
            var cleanTitle = (item.title || '').replace(/^Q[\.:\s\-]+/i, '').replace(/\*\*(.*?)\*\*/g, '$1').replace(/__(.*?)__/g, '$1').trim();
            var safeFaqImg = item.image || extractFirstImageFromContent(item.content) || getFaqFallbackImage(item.id || item.title, item.category);
            item.image = safeFaqImg;
            var photoBadge = '<span class="text-xs font-bold px-1.5 py-0.5 rounded bg-[#f0f7f8] text-[#1c6e78] border border-[#badfe3] ml-1 shrink-0">📷 사진</span>';
            var richContent = renderRichContent(item.content);
            var imageHtml = (safeFaqImg && richContent.indexOf(safeFaqImg) === -1) ? '<div class="my-3 rounded-lg overflow-hidden border border-[#badfe3] bg-[#f8fafb] max-w-md"><img src="' + safeFaqImg + '" alt="' + cleanTitle + '" class="max-h-80 w-auto object-contain rounded-lg" loading="lazy" onerror="if(!this.dataset.fallback){this.dataset.fallback=\'1\'; this.src=\'/images/faq/faq_1_exam.svg\';}else{this.parentElement.style.display=\'none\';}" /></div>' : '';

            var adminButtonsHtml = isSuperAdmin ? (
              '<div class="flex items-center gap-1.5">' +
              '<button type="button" class="px-2.5 py-1 text-xs font-semibold text-[#1c6e78] bg-[#eaf3f4] hover:bg-[#d8eaed] rounded-md transition-colors border border-[#badfe3] cursor-pointer" onclick="event.stopPropagation(); openEditModal(\'faq\', \'' + safeFaqId + '\')">✏️ 수정</button>' +
              '<button type="button" class="px-2.5 py-1 text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-md transition-colors border border-red-200 cursor-pointer" onclick="event.stopPropagation(); handleDeletePostDirect(\'faq\', \'' + safeFaqId + '\')">🗑️ 삭제</button>' +
              '</div>'
            ) : '';

            var summaryAdminBtns = isSuperAdmin ? (
              '<span class="inline-flex items-center gap-1.5 ml-auto mr-3 shrink-0">' +
              '<button type="button" class="px-2 py-0.5 text-xs font-semibold text-[#1c6e78] bg-[#eaf3f4] hover:bg-[#d8eaed] rounded border border-[#badfe3] transition-colors cursor-pointer" onclick="event.stopPropagation(); event.preventDefault(); openEditModal(\'faq\', \'' + safeFaqId + '\')">✏️ 수정</button>' +
              '<button type="button" class="px-2 py-0.5 text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded border border-red-200 transition-colors cursor-pointer" onclick="event.stopPropagation(); event.preventDefault(); handleDeletePostDirect(\'faq\', \'' + safeFaqId + '\')">🗑️ 삭제</button>' +
              '</span>'
            ) : '';

            var isOpenAttr = (openFaqIds.indexOf(safeFaqId) !== -1) ? ' open' : '';
            html += '<details class="faq-item" data-faq-id="' + safeFaqId + '"' + isOpenAttr + '>' +
            '<summary>' +
            '<span class="flex items-center gap-2 text-left flex-1 min-w-0 pr-2">' +
            '<span class="text-sm font-extrabold text-[#1c6e78] shrink-0">Q.</span>' +
            photoBadge +
            '<span class="font-bold text-[#0d3a42]">' + cleanTitle + '</span>' +
            '</span>' +
            summaryAdminBtns +
            '</summary>' +
            '<div class="faq-answer">' +
            imageHtml +
            '<div class="faq-content-body py-1 text-sm text-[#333333] leading-relaxed">' + richContent + '</div>' +
            '<div class="mt-3 pt-2 border-t border-[#edf2f4] flex justify-between items-center text-xs text-[#888888] flex-wrap gap-2">' +
            '<div><span>작성자: ' + (item.author || '해아림한의원') + '</span> <span class="mx-1">|</span> <span>등록일: ' + item.date + '</span></div>' +
            adminButtonsHtml +
            '</div>' +
            '</div>' +
            '</details>';
          });

          container.innerHTML = html;
          renderHealimPagination('faqPaginationContainer', totalPages, currentFaqPage, 'goToFaqPage');
        }

        // --- 2. Reviews Render & Medical Gate (10 items per page, 1:1 user screenshot layout) ---
        var REVIEWS_PAGE_SIZE = 10;
        var currentReviewsPage = 1;

        window.goToReviewsPage = function(page) {
          currentReviewsPage = page;
          renderReviewsList();
          var anchor = document.getElementById('tab-pane-reviews');
          if (anchor) {
            var rect = anchor.getBoundingClientRect();
            var offset = window.pageYOffset + rect.top - 80;
            window.scrollTo({ top: offset, behavior: 'smooth' });
          }
        };

        window.checkAuthAndOpenWrite = function(tab) {
          if (!isHealimSuperAdmin()) {
            alert('치료후기 등록 권한은 최고관리자(healim0071)에게만 있습니다.\n일반 회원은 열람 전용입니다.');
            return;
          }
          openWriteModal(tab);
        };

        function renderReviewsList() {
          if (typeof purgeObsoleteMockPosts === 'function') purgeObsoleteMockPosts();
          if (typeof window.checkAndRunAutoReviewPublish === 'function') {
            window.checkAndRunAutoReviewPublish(false);
          }
          var lockWrapper = document.getElementById('reviewLockWrapper');
          var overlay = document.getElementById('reviewGateOverlay');
          var container = document.getElementById('reviewListContainer');
          if (!lockWrapper || !container) return;

          var rawUser = localStorage.getItem('healim_auth_user');
          var isLoggedIn = !!rawUser;

          var currentBackUrl = encodeURIComponent(window.location.pathname + '#reviews');
          var gateLoginBtn = document.getElementById('btnGateLogin');
          var gateJoinBtn = document.getElementById('btnGateJoin');
          if (gateLoginBtn) gateLoginBtn.href = '/login/?back_url=' + currentBackUrl;
          if (gateJoinBtn) gateJoinBtn.href = '/site_join_type_choice/?back_url=' + currentBackUrl;

          var list = sortCommunityItemsByTime(getBoardData('reviews', defaultReviewsData));

          var noticeBanner = document.getElementById('reviewNoticeBanner');
          if (isLoggedIn) {
            lockWrapper.classList.remove('is-locked');
            if (overlay) overlay.style.display = 'none';
            if (noticeBanner) noticeBanner.style.display = 'flex';
          } else {
            lockWrapper.classList.add('is-locked');
            if (overlay) overlay.style.display = 'flex';
            if (noticeBanner) noticeBanner.style.display = 'none';
          }

          var totalItems = list.length;
          var totalPages = Math.ceil(totalItems / REVIEWS_PAGE_SIZE) || 1;
          if (currentReviewsPage > totalPages) currentReviewsPage = totalPages;
          if (currentReviewsPage < 1) currentReviewsPage = 1;

          var startIndex = (currentReviewsPage - 1) * REVIEWS_PAGE_SIZE;
          var pageItems = list.slice(startIndex, startIndex + REVIEWS_PAGE_SIZE);

          if (pageItems.length === 0) {
            container.innerHTML = '<div class="p-8 text-center text-gray-500 bg-white rounded-xl border border-gray-200">등록된 치료후기가 없습니다.</div>';
            renderHealimPagination('reviewsPaginationContainer', 0, 1, 'goToReviewsPage');
            return;
          }

          var isSuperAdmin = isHealimSuperAdmin();
          var html = '';

          pageItems.forEach(function(item, idx) {
            var reviewImg = item.image;
            if (!reviewImg) {
              var extracted = extractFirstImageFromContent(item.content);
              reviewImg = extracted || getReviewFallbackImage(item.id || item.title || idx);
              item.image = reviewImg;
            }
            var safeId = String(item.id || ('rev-' + idx)).replace(/'/g, "\\'");
            var cleanTitle = (item.title || '').replace(/<[^>]+>/g, '').replace(/[*_~`#]/g, '').trim();
            var cleanSnippet = (item.content || '')
              .replace(/<img[^>]*>/gi, '')
              .replace(/!\[.*?\]\(.*?\)/g, '')
              .replace(/<[^>]+>/g, '')
              .replace(/[*_~`#]/g, '')
              .replace(/\s+/g, ' ')
              .trim();

            var itemNumber = totalItems - startIndex - idx;
            var formattedDate = (item.date || '').replace(/\./g, '-');
            if (formattedDate.length > 10) formattedDate = formattedDate.substring(0, 10);

            var adminBtnsHtml = isSuperAdmin ? (
              '<span class="inline-flex items-center gap-1 ml-2" onclick="event.stopPropagation()">' +
              '<button type="button" class="px-2 py-0.5 text-xs text-[#1c6e78] hover:bg-[#eaf3f4] font-semibold rounded border border-[#badfe3] cursor-pointer" onclick="openEditModal(\'reviews\', \'' + safeId + '\')">✏️ 수정</button>' +
              '<button type="button" class="px-2 py-0.5 text-xs text-red-600 bg-red-50 hover:bg-red-100 font-semibold rounded border border-red-200 cursor-pointer" onclick="handleDeletePostDirect(\'reviews\', \'' + safeId + '\')">🗑️ 삭제</button>' +
              '</span>'
            ) : '';

            html += '<div class="review-row-item" onclick="openDetailModal(\'reviews\', \'' + safeId + '\')">' +
              '<div class="review-row-num">' + itemNumber + '</div>' +
              '<div class="review-row-thumb">' +
                '<img src="' + reviewImg + '" alt="' + cleanTitle + '" loading="lazy" onerror="this.onerror=null; this.src=\'/images/reviews/review_1.jpg\';" />' +
              '</div>' +
              '<div class="review-row-body">' +
                '<div class="review-row-title-wrap">' +
                  '<h3 class="review-row-title">' + cleanTitle + '</h3>' +
                  adminBtnsHtml +
                '</div>' +
                '<p class="review-row-snippet">' + cleanSnippet + '</p>' +
              '</div>' +
              '<div class="review-row-date">' + formattedDate + '</div>' +
            '</div>';
          });

          container.innerHTML = html;
          renderHealimPagination('reviewsPaginationContainer', totalPages, currentReviewsPage, 'goToReviewsPage');
        }

        // --- 3. YouTube Render & Pagination ---
        var YOUTUBE_PAGE_SIZE = 9;
        var currentYoutubePage = 1;

        window.goToYoutubePage = function(page) {
        currentYoutubePage = page;
        renderYoutubeList();
        var anchor = document.getElementById('tab-pane-youtube');
        if (anchor) {
          var rect = anchor.getBoundingClientRect();
          var offset = window.pageYOffset + rect.top - 80;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }
        };

        function renderYoutubePagination(totalPages, currentPage) {
        var container = document.getElementById('youtubePaginationContainer');
        if (!container) return;
        if (totalPages <= 1) {
          container.innerHTML = '';
          return;
        }

        var html = '<button type="button" class="healim-pagination-btn" ' + (currentPage === 1 ? 'disabled' : '') + ' onclick="goToYoutubePage(1)" title="첫 페이지">&laquo;</button>';
        html += '<button type="button" class="healim-pagination-btn" ' + (currentPage === 1 ? 'disabled' : '') + ' onclick="goToYoutubePage(' + (currentPage - 1) + ')" title="이전 페이지">&lsaquo;</button>';

        var startPage = Math.max(1, currentPage - 2);
        var endPage = Math.min(totalPages, startPage + 4);
        if (endPage - startPage < 4) {
          startPage = Math.max(1, endPage - 4);
        }

        if (startPage > 1) {
          html += '<button type="button" class="healim-pagination-btn" onclick="goToYoutubePage(1)">1</button>';
          if (startPage > 2) {
            html += '<span class="healim-pagination-ellipsis">...</span>';
          }
        }

        for (var p = startPage; p <= endPage; p++) {
          if (p === currentPage) {
            html += '<button type="button" class="healim-pagination-btn active" aria-current="page">' + p + '</button>';
          } else {
            html += '<button type="button" class="healim-pagination-btn" onclick="goToYoutubePage(' + p + ')">' + p + '</button>';
          }
        }

        if (endPage < totalPages) {
          if (endPage < totalPages - 1) {
            html += '<span class="healim-pagination-ellipsis">...</span>';
          }
          html += '<button type="button" class="healim-pagination-btn" onclick="goToYoutubePage(' + totalPages + ')">' + totalPages + '</button>';
        }

        html += '<button type="button" class="healim-pagination-btn" ' + (currentPage === totalPages ? 'disabled' : '') + ' onclick="goToYoutubePage(' + (currentPage + 1) + ')" title="다음 페이지">&rsaquo;</button>';
        html += '<button type="button" class="healim-pagination-btn" ' + (currentPage === totalPages ? 'disabled' : '') + ' onclick="goToYoutubePage(' + totalPages + ')" title="마지막 페이지">&raquo;</button>';

        container.innerHTML = html;
        }

        window.filterYoutube = function() {
        currentYoutubePage = 1;
        renderYoutubeList();
        };

        function renderYoutubeList() {
        var container = document.getElementById('youtubeListContainer');
        if (!container) return;
        var list = sortCommunityItemsByTime(getBoardData('youtube', defaultYoutubeData));

        var totalItems = list.length;
        var totalPages = Math.ceil(totalItems / YOUTUBE_PAGE_SIZE) || 1;
        if (currentYoutubePage > totalPages) currentYoutubePage = totalPages;
        if (currentYoutubePage < 1) currentYoutubePage = 1;

        var startIndex = (currentYoutubePage - 1) * YOUTUBE_PAGE_SIZE;
        var pageItems = list.slice(startIndex, startIndex + YOUTUBE_PAGE_SIZE);

        if (pageItems.length === 0) {
          container.innerHTML = '<div class="p-8 text-center text-gray-500 bg-white rounded-xl border border-gray-200 col-span-full">등록된 영상이 없습니다.</div>';
          renderYoutubePagination(0, 1);
          return;
        }

        var html = '';
        var isSuperAdmin = isHealimSuperAdmin();
        pageItems.forEach(function(item, idx) {
        var globalIdx = startIndex + idx;
        var thumbUrl = getYoutubeThumbnail(item, globalIdx);
        var safeTitle = (item.title || '').replace(/"/g, '&quot;');
        var safeYtId = String(item.id || '').replace(/'/g, "\\'");
        var adminBtnsHtml = isSuperAdmin ? (
          '<button type="button" class="px-2 py-0.5 text-xs text-[#1c6e78] hover:bg-[#eaf3f4] font-semibold rounded border border-[#badfe3] transition-colors cursor-pointer" onclick="event.stopPropagation(); openEditModal(\'youtube\', \'' + safeYtId + '\')">✏️ 수정</button>' +
          '<button type="button" class="px-2 py-0.5 text-xs text-red-600 bg-red-50 hover:bg-red-100 font-semibold rounded border border-red-200 transition-colors cursor-pointer" onclick="event.stopPropagation(); handleDeletePostDirect(\'youtube\', \'' + safeYtId + '\')">🗑️ 삭제</button>'
        ) : '';

        html += '<div class="youtube-card cursor-pointer" onclick="openDetailModal(\'youtube\', \'' + safeYtId + '\')">' +
        '<div class="youtube-thumb-wrapper">' +
        '<img src="' + thumbUrl + '" alt="' + safeTitle + '" class="youtube-thumb-img" style="margin: 0 !important; padding: 0 !important; top: 0 !important; left: 0 !important; width: 100% !important; height: 100% !important; object-fit: cover !important; object-position: top center !important;" loading="lazy" onerror="if(!this.dataset.fallback){this.dataset.fallback=\'1\';this.src=this.src.replace(\'maxresdefault.jpg\',\'mqdefault.jpg\');}else{this.onerror=null;this.src=\'https://img.youtube.com/vi/-Y_ITeHHpCo/maxresdefault.jpg\';}" />' +
        '<div class="youtube-play-icon">' +
        '<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>' +
        '</div>' +
        '</div>' +
        '<div class="youtube-card-body">' +
        '<h3 class="youtube-title">' + item.title + '</h3>' +
        '<p class="youtube-desc">' + item.content + '</p>' +
        '<div class="youtube-meta flex justify-between items-center flex-wrap gap-1.5">' +
        '<span>' + (item.author || '해아림한의원') + '</span>' +
        '<div class="flex items-center gap-1.5">' +
        '<span>조회수 ' + item.views + '회</span>' +
        adminBtnsHtml +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
        });

        container.innerHTML = html;
        renderYoutubePagination(totalPages, currentYoutubePage);
        }

        // --- 4. Columns Render & Pagination (15 items per page) ---
        var COLUMNS_PAGE_SIZE = 15;
        var currentColumnsPage = 1;

        window.goToColumnsPage = function(page) {
          currentColumnsPage = page;
          renderColumnsList();
          var anchor = document.getElementById('tab-pane-columns');
          if (anchor) {
            var rect = anchor.getBoundingClientRect();
            var offset = window.pageYOffset + rect.top - 80;
            window.scrollTo({ top: offset, behavior: 'smooth' });
          }
        };

        window.filterColumns = function(category, btn) {
          activeColumnFilter = category;
          currentColumnsPage = 1;
          var pills = document.querySelectorAll('#columnFilterPills .filter-pill');
          pills.forEach(function(p) { p.classList.remove('active'); });
          if (btn) btn.classList.add('active');
          renderColumnsList();
        };

        function renderColumnsList() {
          if (typeof purgeObsoleteMockPosts === 'function') purgeObsoleteMockPosts();
          if (typeof window.checkAndRunAutoColumnPublish === 'function') {
            window.checkAndRunAutoColumnPublish(false);
          }
          var container = document.getElementById('columnListContainer');
          if (!container) return;
          var list = sortCommunityItemsByTime(getBoardData('columns', defaultColumnsData));
          var isSuperAdmin = isHealimSuperAdmin();

          var filteredList = list;
          if (activeColumnFilter && activeColumnFilter !== '전체') {
            filteredList = list.filter(function(it) {
              return it.category === activeColumnFilter;
            });
          }

          var totalItems = filteredList.length;
          var totalPages = Math.ceil(totalItems / COLUMNS_PAGE_SIZE) || 1;
          if (currentColumnsPage > totalPages) currentColumnsPage = totalPages;
          if (currentColumnsPage < 1) currentColumnsPage = 1;

          var startIndex = (currentColumnsPage - 1) * COLUMNS_PAGE_SIZE;
          var pageItems = filteredList.slice(startIndex, startIndex + COLUMNS_PAGE_SIZE);

          var colTh = document.getElementById('colManageTh');
          if (colTh) {
            colTh.style.display = isSuperAdmin ? '' : 'none';
          }

          if (pageItems.length === 0) {
            container.innerHTML = '<tr><td colspan="' + (isSuperAdmin ? 6 : 5) + '" style="text-align:center; padding: 2rem; color: #888;">등록된 치료 칼럼이 없습니다.</td></tr>';
            renderHealimPagination('columnsPaginationContainer', 0, 1, 'goToColumnsPage');
            return;
          }

          var html = '';
          pageItems.forEach(function(item, idx) {
            var safeColId = String(item.id || ('col-' + idx)).replace(/'/g, "\\'");
            var safeColImg = item.image || extractFirstImageFromContent(item.content) || getColumnFallbackImage(item.id || item.title, item.category);
            item.image = safeColImg;
            var photoBadge = ' <span class="text-[12px] text-[#1c6e78] font-bold" title="사진 첨부">📷</span>';
            var itemNumber = totalItems - startIndex - idx;
            var manageTd = isSuperAdmin ? (
              '<td class="col-desktop-only" style="text-align: center; white-space: nowrap;">' +
              '<div class="inline-flex items-center justify-center gap-1.5">' +
              '<button type="button" class="px-2 py-0.5 text-xs text-[#1c6e78] hover:bg-[#eaf3f4] font-semibold rounded border border-[#badfe3] transition-colors cursor-pointer" onclick="event.stopPropagation(); openEditModal(\'columns\', \'' + safeColId + '\')">✏️ 수정</button>' +
              '<button type="button" class="px-2 py-0.5 text-xs text-red-600 bg-red-50 hover:bg-red-100 font-semibold rounded border border-red-200 transition-colors cursor-pointer" onclick="event.stopPropagation(); handleDeletePostDirect(\'columns\', \'' + safeColId + '\')">🗑️ 삭제</button>' +
              '</div>' +
              '</td>'
            ) : '';

            var mobileAdminBtns = isSuperAdmin ? (
              '<div class="inline-flex items-center gap-1 ml-auto">' +
              '<button type="button" class="px-1.5 py-0.5 text-[11px] text-[#1c6e78] hover:bg-[#eaf3f4] font-semibold rounded border border-[#badfe3] transition-colors" onclick="event.stopPropagation(); openEditModal(\'columns\', \'' + safeColId + '\')">수정</button>' +
              '<button type="button" class="px-1.5 py-0.5 text-[11px] text-red-600 bg-red-50 hover:bg-red-100 font-semibold rounded border border-red-200 transition-colors" onclick="event.stopPropagation(); handleDeletePostDirect(\'columns\', \'' + safeColId + '\')">삭제</button>' +
              '</div>'
            ) : '';

            var mobileMeta = '<div class="col-meta-mobile">' +
              '<span>' + (item.author || '해아림한의원') + '</span>' +
              '<span class="col-meta-divider">·</span>' +
              '<span>' + item.date + '</span>' +
              '<span class="col-meta-divider">·</span>' +
              '<span>조회 ' + item.views + '</span>' +
              mobileAdminBtns +
              '</div>';

            html += '<tr onclick="openDetailModal(\'columns\', \'' + safeColId + '\')">' +
            '<td class="col-td-num" style="text-align: center; color: #888888; font-size: 13px;">' + itemNumber + '</td>' +
            '<td class="col-td-title">' +
              '<span class="post-title-link">' + item.title + photoBadge + '</span>' +
              mobileMeta +
            '</td>' +
            '<td class="col-desktop-only" style="text-align: center; font-size: 13px;">' + (item.author || '해아림한의원') + '</td>' +
            '<td class="col-desktop-only" style="text-align: center; color: #888888; font-size: 13px;">' + item.date + '</td>' +
            '<td class="col-desktop-only" style="text-align: center; color: #888888; font-size: 13px;">' + item.views + '</td>' +
            manageTd +
            '</tr>';
          });

          container.innerHTML = html;
          renderHealimPagination('columnsPaginationContainer', totalPages, currentColumnsPage, 'goToColumnsPage');
        }

        // --- 5. Write Modal Logic & Photo Attachment (healim-tic 1:1) ---
        var currentAttachedImageDataUrl = '';
        window.currentAttachedImageDataUrl = '';

        window.setCurrentAttachedImage = function(url, filename) {
          currentAttachedImageDataUrl = url || '';
          window.currentAttachedImageDataUrl = url || '';
          var preview = document.getElementById('imagePreview');
          var container = document.getElementById('imagePreviewContainer');
          var chip = document.getElementById('selectedImageChip');
          var nameEl = document.getElementById('selectedImageName');
          if (url) {
            if (preview) preview.src = url;
            if (container) container.style.display = 'block';
            if (chip) chip.style.display = 'inline-flex';
            if (nameEl) nameEl.textContent = filename || '첨부사진.jpg';
          } else {
            if (preview) preview.src = '';
            if (container) container.style.display = 'none';
            if (chip) chip.style.display = 'none';
            if (nameEl) nameEl.textContent = '선택된 사진 없음';
          }
        };

        window.handleImageSelect = function(e) {
          var files = e.target.files;
          if (!files || !files[0]) return;
          var file = files[0];

          if (!file.type.match('image.*')) {
            alert('이미지 파일(JPG, PNG, WebP 등)만 첨부할 수 있습니다.');
            e.target.value = '';
            return;
          }

          if (file.size > 15 * 1024 * 1024) {
            alert('15MB 이하의 사진만 업로드 가능합니다.');
            e.target.value = '';
            return;
          }

          var reader = new FileReader();
          reader.onload = function(evt) {
            var img = new Image();
            img.onload = function() {
              var maxDim = 1000;
              var w = img.width;
              var h = img.height;
              if (w > maxDim || h > maxDim) {
                if (w > h) {
                  h = Math.round((h * maxDim) / w);
                  w = maxDim;
                } else {
                  w = Math.round((w * maxDim) / h);
                  h = maxDim;
                }
              }
              var canvas = document.createElement('canvas');
              canvas.width = w;
              canvas.height = h;
              var ctx = canvas.getContext('2d');
              ctx.drawImage(img, 0, 0, w, h);
              var compressed = canvas.toDataURL('image/jpeg', 0.85);
              currentAttachedImageDataUrl = compressed;
              window.currentAttachedImageDataUrl = compressed;

              var preview = document.getElementById('imagePreview');
              var container = document.getElementById('imagePreviewContainer');
              var chip = document.getElementById('selectedImageChip');
              var nameEl = document.getElementById('selectedImageName');

              if (preview) preview.src = compressed;
              if (container) container.style.display = 'block';
              if (chip) chip.style.display = 'inline-flex';
              if (nameEl) nameEl.textContent = file.name;
            };
            img.src = evt.target.result;
          };
          reader.readAsDataURL(file);
        };

        window._lastEditorRange = null;

        function processSingleImageFile(file, onComplete) {
          if (!file || !file.type.match('image.*')) {
            if (onComplete) onComplete();
            return;
          }
          var editor = document.getElementById('postContentEditor');
          if (!editor) {
            alert('에디터 요소를 찾을 수 없습니다. 브라우저에서 새로고침(Ctrl + F5) 후 다시 시도해주세요.');
            if (onComplete) onComplete();
            return;
          }

          var reader = new FileReader();
          reader.onload = function(evt) {
            var img = new Image();
            img.onload = function() {
              var maxDim = 900;
              var w = img.width;
              var h = img.height;
              if (w > maxDim || h > maxDim) {
                if (w > h) {
                  h = Math.round((h * maxDim) / w);
                  w = maxDim;
                } else {
                  w = Math.round((w * maxDim) / h);
                  h = maxDim;
                }
              }
              var canvas = document.createElement('canvas');
              canvas.width = w;
              canvas.height = h;
              var ctx = canvas.getContext('2d');
              ctx.drawImage(img, 0, 0, w, h);
              var compressed = canvas.toDataURL('image/jpeg', 0.82);

              // Create visual image card
              var wrapper = document.createElement('div');
              wrapper.className = 'editor-inline-image-wrap';
              wrapper.contentEditable = 'false';
              wrapper.innerHTML = '<div class="editor-img-box">' +
                '<img src="' + compressed + '" alt="본문 사진" class="editor-preview-img" />' +
                '<button type="button" class="btn-del-inline-img" onclick="this.closest(\'.editor-inline-image-wrap\').remove()" title="사진 삭제">&times;</button>' +
                '</div>';

              var newLine = document.createElement('div');
              newLine.innerHTML = '<br>';

              var frag = document.createDocumentFragment();
              frag.appendChild(wrapper);
              frag.appendChild(newLine);

              editor.focus();
              var sel = window.getSelection();
              var range = window._lastEditorRange;
              if (!range || !editor.contains(range.commonAncestorContainer)) {
                range = document.createRange();
                range.selectNodeContents(editor);
                range.collapse(false);
              }

              range.deleteContents();
              range.insertNode(frag);

              // Advance range to the new empty line
              var nextRange = document.createRange();
              nextRange.setStart(newLine, 0);
              nextRange.setEnd(newLine, 0);
              if (sel) {
                sel.removeAllRanges();
                sel.addRange(nextRange);
              }
              window._lastEditorRange = nextRange;

              // Smoothly scroll image into view
              try {
                wrapper.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
              } catch(e) {}

              if (onComplete) onComplete();
            };
            img.src = evt.target.result;
          };
          reader.readAsDataURL(file);
        }

        window.setupEditorImagePasteAndDrop = function(editor) {
          if (!editor || editor._hasPasteDropListeners) return;
          editor._hasPasteDropListeners = true;

          // Paste listener (Ctrl + V for images / screenshots)
          editor.addEventListener('paste', function(e) {
            var clipboard = e.clipboardData;
            if (!clipboard || !clipboard.items) return;
            for (var i = 0; i < clipboard.items.length; i++) {
              var item = clipboard.items[i];
              if (item.type.indexOf('image') !== -1) {
                var file = item.getAsFile();
                if (file) {
                  e.preventDefault();
                  processSingleImageFile(file);
                  break;
                }
              }
            }
          });

          // Drag and drop listener
          editor.addEventListener('dragover', function(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
          });

          editor.addEventListener('drop', function(e) {
            var files = e.dataTransfer ? e.dataTransfer.files : null;
            if (files && files.length > 0) {
              var imageFiles = Array.from(files).filter(function(f) { return f.type.match('image.*'); });
              if (imageFiles.length > 0) {
                e.preventDefault();
                imageFiles.forEach(function(file) {
                  processSingleImageFile(file);
                });
              }
            }
          });
        };

        window.initEditorRangeListeners = function() {
          var editor = document.getElementById('postContentEditor');
          if (!editor || editor._hasRangeListeners) return;
          editor._hasRangeListeners = true;
          function recordRange() {
            var sel = window.getSelection();
            if (sel && sel.rangeCount > 0 && editor.contains(sel.anchorNode)) {
              window._lastEditorRange = sel.getRangeAt(0).cloneRange();
            }
          }
          editor.addEventListener('keyup', recordRange);
          editor.addEventListener('mouseup', recordRange);
          editor.addEventListener('touchend', recordRange);
          editor.addEventListener('focus', recordRange);
          editor.addEventListener('input', recordRange);
          editor.addEventListener('compositionend', recordRange);

          setupEditorImagePasteAndDrop(editor);
        };

        window.triggerInlineImageUpload = function() {
          var editor = document.getElementById('postContentEditor');
          if (editor) {
            editor.focus();
            var sel = window.getSelection();
            if (sel && sel.rangeCount > 0 && editor.contains(sel.anchorNode)) {
              window._lastEditorRange = sel.getRangeAt(0).cloneRange();
            } else if (!window._lastEditorRange) {
              var r = document.createRange();
              r.selectNodeContents(editor);
              r.collapse(false);
              window._lastEditorRange = r;
            }
          }
          var input = document.getElementById('postInlineImageInput');
          if (input) {
            input.value = '';
            input.click();
          }
        };

        window.handleInlineImageSelect = function(e) {
          var files = e.target.files;
          if (!files || files.length === 0) return;
          var editor = document.getElementById('postContentEditor');
          if (!editor) {
            alert('에디터 요소를 찾을 수 없습니다. 페이지를 새로고침(Ctrl + F5) 해주세요.');
            return;
          }

          var validFiles = Array.from(files).filter(function(file) {
            return file.type.match('image.*');
          });

          if (validFiles.length === 0) {
            alert('이미지 파일(JPG, PNG, WebP 등)만 첨부할 수 있습니다.');
            e.target.value = '';
            return;
          }

          var total = validFiles.length;

          function processQueue(idx) {
            if (idx >= total) {
              e.target.value = '';
              return;
            }
            processSingleImageFile(validFiles[idx], function() {
              processQueue(idx + 1);
            });
          }

          processQueue(0);
        };

        window.getEditorContentHtml = function() {
          var editor = document.getElementById('postContentEditor');
          if (!editor) return '';
          var clone = editor.cloneNode(true);
          // Remove delete buttons
          var delBtns = clone.querySelectorAll('.btn-del-inline-img');
          delBtns.forEach(function(b) { b.remove(); });
          // Convert wrappers into clean article image wraps
          var imgWraps = clone.querySelectorAll('.editor-inline-image-wrap');
          imgWraps.forEach(function(wrap) {
            var img = wrap.querySelector('img');
            if (img) {
              wrap.className = 'article-inline-img-wrap';
              wrap.removeAttribute('contenteditable');
              wrap.innerHTML = '<img src="' + img.src + '" alt="본문 사진" class="article-inline-img" loading="lazy" />';
            }
          });
          return clone.innerHTML.trim();
        };

        window.removeSelectedImage = function() {
          currentAttachedImageDataUrl = '';
          window.currentAttachedImageDataUrl = '';
          var input = document.getElementById('postImageInput');
          if (input) input.value = '';
          var inlineInput = document.getElementById('postInlineImageInput');
          if (inlineInput) inlineInput.value = '';
          var preview = document.getElementById('imagePreview');
          var container = document.getElementById('imagePreviewContainer');
          var chip = document.getElementById('selectedImageChip');
          var nameEl = document.getElementById('selectedImageName');

          if (preview) preview.src = '';
          if (container) container.style.display = 'none';
          if (chip) chip.style.display = 'none';
          if (nameEl) nameEl.textContent = '선택된 사진 없음';
        };

        window.updateSecretLockState = function() {
          var chk = document.getElementById('postIsSecret');
          var btn = document.getElementById('btnToggleSecret');
          var icon = document.getElementById('secretLockIcon');
          if (!chk || !btn || !icon) return;
          if (chk.checked) {
            btn.style.color = '#0d3a42';
            btn.style.backgroundColor = '#e0f2fe';
            btn.title = '비밀글 설정됨 (클릭시 해제)';
          } else {
            btn.style.color = '#9ca3af';
            btn.style.backgroundColor = 'transparent';
            btn.title = '비밀글 설정 (클릭하여 켜기/끄기)';
          }
        };

        window.toggleSecretPost = function() {
          var chk = document.getElementById('postIsSecret');
          if (chk) {
            chk.checked = !chk.checked;
            window.updateSecretLockState();
          }
        };

        window.selectCategoryPill = function(cat) {
          var input = document.getElementById('postCategory');
          if (input) input.value = cat;
          var pills = document.querySelectorAll('#categoryPillsWrapper .healim-cat-pill');
          pills.forEach(function(pill) {
            if (pill.textContent === cat) {
              pill.classList.add('active');
            } else {
              pill.classList.remove('active');
            }
          });
        };

        window.insertEditorFormat = function(type) {
          var editor = document.getElementById('postContentEditor');
          if (!editor) return;
          editor.focus();

          switch (type) {
            case 'bold':
              document.execCommand('bold', false, null);
              break;
            case 'italic':
              document.execCommand('italic', false, null);
              break;
            case 'underline':
              document.execCommand('underline', false, null);
              break;
            case 'strike':
              document.execCommand('strikeThrough', false, null);
              break;
            case 'quote':
              document.execCommand('formatBlock', false, 'blockquote');
              break;
            case 'hr':
              document.execCommand('insertHorizontalRule', false, null);
              break;
            case 'ol':
              document.execCommand('insertOrderedList', false, null);
              break;
            case 'ul':
              document.execCommand('insertUnorderedList', false, null);
              break;
            case 'heading':
              document.execCommand('formatBlock', false, '<h3>');
              break;
            case 'align':
              document.execCommand('justifyCenter', false, null);
              break;
            case 'color':
              var color = prompt('적용할 글자색을 입력하세요 (예: #1c6e78, red, blue):', '#1c6e78');
              if (color) {
                document.execCommand('foreColor', false, color);
              }
              break;
            case 'clear':
              document.execCommand('removeFormat', false, null);
              break;
            case 'link':
              var url = prompt('삽입할 링크 URL을 입력하세요:', 'https://');
              if (url) {
                document.execCommand('createLink', false, url);
              }
              break;
            case 'video':
              var vurl = prompt('유튜브 또는 동영상 링크를 입력하세요:', 'https://www.youtube.com/watch?v=');
              if (vurl) {
                var vId = extractYoutubeId(vurl);
                var vhtml = vId ?
                  '<div class="my-3 rounded-lg overflow-hidden"><iframe src="https://www.youtube-nocookie.com/embed/' + vId + '" class="w-full aspect-video" frameborder="0" allowfullscreen></iframe></div><div><br></div>' :
                  '<a href="' + vurl + '" target="_blank">▶ ' + vurl + '</a><div><br></div>';
                document.execCommand('insertHTML', false, vhtml);
              }
              break;
            case 'doc':
              var docText = prompt('자료/문서 내용을 입력하세요:', '관련 세부 내용');
              if (docText) {
                var docHtml = '<div class="p-3 my-2 bg-[#f0f7f8] border-l-4 border-[#1c6e78] text-sm text-[#0d3a42] rounded-r">📄 <strong>관련 자료/문서:</strong> ' + docText + '</div><div><br></div>';
                document.execCommand('insertHTML', false, docHtml);
              }
              break;
            default:
              return;
          }
        };

        window.checkAdminPassword = function(val) {
          var adminGroup = document.getElementById('adminCustomOptionsGroup');
          if (!adminGroup) return;
          if (val === 'healim0071') {
            adminGroup.style.display = 'block';
          }
        };

        window.openWriteModal = function(boardType) {
          if (!isHealimSuperAdmin()) {
            alert('게시글 등록 권한은 최고관리자(healim0071)에게만 있습니다.\n일반 회원은 열람 전용입니다.');
            return;
          }
          var modal = document.getElementById('writeModalBackdrop');
          var titleEl = document.getElementById('writeModalTitle');
          var typeInput = document.getElementById('postBoardType');
          var youtubeGroup = document.getElementById('youtubeUrlGroup');
          var imageGroup = document.getElementById('imageUploadGroup');
          var authorInput = document.getElementById('postAuthor');
          var pwdInput = document.getElementById('postPassword');
          var catGroup = document.getElementById('categoryFormGroup');
          var pillsWrapper = document.getElementById('categoryPillsWrapper');
          var catInput = document.getElementById('postCategory');
          var secretGroup = document.getElementById('secretFormGroup');
          var secretCheck = document.getElementById('postIsSecret');

          // Reset inputs and image selection state
          removeSelectedImage();
          typeInput.value = boardType;
          if (pwdInput) pwdInput.value = '';
          if (secretCheck) secretCheck.checked = false;
          window.updateSecretLockState();
          if (pillsWrapper) pillsWrapper.innerHTML = '';

          // Default author ALWAYS to '해아림한의원'
          var isSuperAdmin = false;
          var rawUser = localStorage.getItem('healim_auth_user');
          if (rawUser) {
            try {
              var u = JSON.parse(rawUser);
              if (u.role === 'admin' || u.uid === 'healim0071' || u.grade === 'superadmin') {
                isSuperAdmin = true;
              }
            } catch(e) {}
          }

          authorInput.value = '해아림한의원';

          var adminGroup = document.getElementById('adminCustomOptionsGroup');
          if (adminGroup) {
            adminGroup.style.display = isSuperAdmin ? 'block' : 'none';
          }

          // Image upload group toggle: show for faq, reviews, columns; hide for youtube
          if (imageGroup) {
            imageGroup.style.display = (boardType === 'youtube') ? 'none' : 'flex';
          }

          if (catGroup) catGroup.style.display = 'none';

          if (boardType === 'youtube') {
            if (secretGroup) secretGroup.style.display = 'none';
            titleEl.textContent = '공황장애 영상 등록' + (isSuperAdmin ? ' 👑' : '');
            if (catInput) catInput.value = '영상';
            if (youtubeGroup) youtubeGroup.style.display = 'block';
          } else if (boardType === 'columns') {
            if (secretGroup) secretGroup.style.display = 'none';
            titleEl.textContent = '공황장애 치료 칼럼' + (isSuperAdmin ? ' 👑' : '');
            if (catInput) catInput.value = '칼럼';
            if (youtubeGroup) youtubeGroup.style.display = 'none';
          } else if (boardType === 'reviews') {
            if (secretGroup) secretGroup.style.display = 'flex';
            titleEl.textContent = '치료후기' + (isSuperAdmin ? ' 👑' : '');
            if (catInput) catInput.value = '치료후기';
            if (youtubeGroup) youtubeGroup.style.display = 'none';
            var reviewHelp = document.getElementById('reviewWriteBlurNoticeHelp');
            if (!reviewHelp && imageGroup) {
              reviewHelp = document.createElement('div');
              reviewHelp.id = 'reviewWriteBlurNoticeHelp';
              reviewHelp.className = 'w-full text-xs text-[#1c6e78] mt-1.5 font-medium flex items-center gap-1 bg-[#f0f7f8] p-2 rounded-lg border border-[#badfe3]';
              reviewHelp.innerHTML = '<span>🔒</span> <span>치료후기 사진은 의료법 제56조에 따라 자동으로 <strong>블러(흐림) 처리</strong>됩니다. 사진을 넣지 않으시면 의료법 준수 후기 사진이 자동 적용됩니다.</span>';
              imageGroup.parentNode.insertBefore(reviewHelp, imageGroup.nextSibling);
            } else if (reviewHelp) {
              reviewHelp.style.display = 'flex';
            }
          }
          if (boardType !== 'reviews') {
            var reviewHelpOther = document.getElementById('reviewWriteBlurNoticeHelp');
            if (reviewHelpOther) reviewHelpOther.style.display = 'none';
          } else if (boardType === 'faq') {
            if (secretGroup) secretGroup.style.display = 'flex';
            titleEl.textContent = 'FAQ' + (isSuperAdmin ? ' 👑' : '');
            if (catInput) catInput.value = 'FAQ';
            if (youtubeGroup) youtubeGroup.style.display = 'none';
          }

          var editor = document.getElementById('postContentEditor');
          if (editor) editor.innerHTML = '';
          var textarea = document.getElementById('postContent');
          if (textarea) textarea.value = '';
          window._lastEditorRange = null;
          initEditorRangeListeners();

          modal.classList.add('is-open');
        };

        window.closeWriteModal = function() {
          var modal = document.getElementById('writeModalBackdrop');
          if (modal) modal.classList.remove('is-open');
          var form = document.getElementById('writePostForm');
          if (form) form.reset();
          var editInput = document.getElementById('postEditId');
          if (editInput) editInput.value = '';
          var submitBtn = document.querySelector('.healim-write-submit-btn');
          if (submitBtn) submitBtn.textContent = '작성';
          var editor = document.getElementById('postContentEditor');
          if (editor) editor.innerHTML = '';
          var textarea = document.getElementById('postContent');
          if (textarea) textarea.value = '';
          window._lastEditorRange = null;
          removeSelectedImage();
          var secretCheck = document.getElementById('postIsSecret');
          if (secretCheck) secretCheck.checked = false;
          window.updateSecretLockState();
        };

        window.handlePostSubmit = function(e) {
          e.preventDefault();
          if (!isHealimSuperAdmin()) {
            alert('게시글 등록 및 수정 권한은 최고관리자(healim0071)에게만 있습니다.');
            return;
          }
          var editId = document.getElementById('postEditId') ? document.getElementById('postEditId').value.trim() : '';
          var boardType = document.getElementById('postBoardType').value;
          var category = (boardType === 'youtube') ? '영상' : ((boardType === 'columns') ? '칼럼' : ((boardType === 'reviews') ? '치료후기' : 'FAQ'));
          var authorInput = document.getElementById('postAuthor');
          var author = authorInput ? authorInput.value.trim() : '';
          if (!author) {
            author = '해아림한의원';
          }
          var password = document.getElementById('postPassword') ? document.getElementById('postPassword').value.trim() : '';
          var title = document.getElementById('postTitle').value.trim();
          var editor = document.getElementById('postContentEditor');
          var content = editor ? getEditorContentHtml() : (document.getElementById('postContent') ? document.getElementById('postContent').value.trim() : '');
          var textOnly = editor ? editor.textContent.trim() : content;
          var hasImg = content.indexOf('<img') !== -1 || content.indexOf('![') !== -1;
          var isSecret = document.getElementById('postIsSecret') ? document.getElementById('postIsSecret').checked : false;
          var youtubeUrl = document.getElementById('postYoutubeUrl') ? document.getElementById('postYoutubeUrl').value.trim() : '';
          var customDateInput = document.getElementById('postCustomDate');
          var customViewsInput = document.getElementById('postCustomViews');

          if (!title || (!textOnly && !hasImg)) {
            alert('모든 필수 항목(제목, 내용)을 입력해 주세요.');
            return;
          }

          var d = new Date();
          var dateStr = d.getFullYear() + '.' + String(d.getMonth() + 1).padStart(2, '0') + '.' + String(d.getDate()).padStart(2, '0');
          if (customDateInput && customDateInput.value.trim()) {
            dateStr = customDateInput.value.trim();
          }

          var initialViews = 1;
          if (customViewsInput && customViewsInput.value.trim()) {
            initialViews = parseInt(customViewsInput.value.trim(), 10) || 1;
          }

          if (editId) {
            // ──────────────────────────────────────────
            // EDIT MODE: Update existing post
            // ──────────────────────────────────────────
            var fallbackData = (boardType === 'faq' ? defaultFaqData : (boardType === 'reviews' ? defaultReviewsData : (boardType === 'youtube' ? defaultYoutubeData : defaultColumnsData)));
            var list = getBoardData(boardType, fallbackData);
            var targetIdx = list.findIndex(function(it) { return String(it.id) === String(editId); });
            var existingItem = targetIdx !== -1 ? list[targetIdx] : null;

            var inlineImg = extractFirstImageFromContent(content);
            var attachedImg = currentAttachedImageDataUrl || window.currentAttachedImageDataUrl || '';
            var finalImage = attachedImg || inlineImg || (existingItem ? existingItem.image : null);
            if (!finalImage && boardType === 'reviews') {
              finalImage = getReviewFallbackImage(editId || Date.now());
            }

            var updatedPost = {
              id: editId,
              category: existingItem && existingItem.category ? existingItem.category : category,
              author: author + (isSecret ? ' (비밀)' : ''),
              password: password || (existingItem ? existingItem.password : ''),
              date: dateStr,
              views: (customViewsInput && customViewsInput.value.trim()) ? initialViews : (existingItem ? (existingItem.views || 1) : initialViews),
              title: (isSecret ? '🔒 ' : '') + title,
              content: content,
              answer: content,
              image: finalImage,
              isEdited: true,
              updatedAt: Date.now()
            };

            // 1. Authoritative Edited Posts Registry Save (Guarantees permanence across F5 & hub sync)
            saveEditedPostRecord(boardType, updatedPost);

            if (boardType === 'youtube') {
              var vId = extractYoutubeId(youtubeUrl);
              if (!vId && existingItem) {
                vId = extractYoutubeId(existingItem.videoEmbed || existingItem.thumb || '');
              }
              if (!vId) {
                alert('올바른 유튜브 영상 URL 또는 11자리 영상 ID를 입력해 주세요.\n예: https://www.youtube.com/watch?v=51rIQ1T5dIU');
                return;
              }
              updatedPost.videoEmbed = 'https://www.youtube-nocookie.com/embed/' + vId;
              updatedPost.thumb = 'https://img.youtube.com/vi/' + vId + '/maxresdefault.jpg';
              updatedPost.isCustom = true;

              // Update in custom youtube posts
              var customPosts = getCustomYoutubePosts();
              var cIdx = customPosts.findIndex(function(p) { return p.id === editId; });
              if (cIdx !== -1) {
                customPosts[cIdx] = updatedPost;
              } else {
                customPosts.unshift(updatedPost);
              }
              saveCustomYoutubePosts(customPosts);

              // Update in synced posts if it was originally synced
              var syncedPosts = getSyncedYoutubePosts();
              var sIdx = syncedPosts.findIndex(function(p) { return p.id === editId; });
              if (sIdx !== -1) {
                syncedPosts[sIdx] = updatedPost;
                saveSyncedYoutubePosts(syncedPosts);
              }
            }

            if (boardType !== 'youtube') {
              if (targetIdx !== -1) {
                list[targetIdx] = updatedPost;
              } else {
                list.unshift(updatedPost);
              }
              saveBoardData(boardType, list);

              // Update custom posts tier
              var cPosts = getCustomUserPosts(boardType);
              var cIdx = cPosts.findIndex(function(p) { return String(p.id) === String(editId); });
              if (cIdx !== -1) {
                cPosts[cIdx] = updatedPost;
              } else {
                cPosts.unshift(updatedPost);
              }
              saveCustomUserPosts(boardType, cPosts);
            } else {
              var yList = getBoardData('youtube', []);
              var yIdx = yList.findIndex(function(it) { return it.id === editId; });
              if (yIdx !== -1) {
                yList[yIdx] = updatedPost;
                saveBoardData('youtube', yList);
              }
            }

            // Also update legacy storage if present
            try {
              var rawLegacy = localStorage.getItem('healim_community_posts_v2');
              if (rawLegacy) {
                var legPosts = JSON.parse(rawLegacy) || [];
                var lIdx = legPosts.findIndex(function(p) { return p.id === editId; });
                if (lIdx !== -1) {
                  legPosts[lIdx] = updatedPost;
                  localStorage.setItem('healim_community_posts_v2', JSON.stringify(legPosts));
                }
              }
            } catch(e) {}

            alert('게시글이 성공적으로 수정되었습니다.');
            closeWriteModal();
            switchCommunityTab(boardType);

            try {
              if (window.HealimUniversalSync && window.HealimUniversalSync.syncPostToRemote) {
                window.HealimUniversalSync.syncPostToRemote(boardType, updatedPost, 'edit');
              }
              if (typeof window.broadcastHealimCommunityUpdate === 'function') {
                window.broadcastHealimCommunityUpdate(boardType, 'edit');
              }
              window.dispatchEvent(new CustomEvent('healim-community-updated', { detail: { boardType: boardType, post: updatedPost, action: 'edit' } }));
            } catch(e) {}
            return;
          }

          // ──────────────────────────────────────────
          // CREATE MODE: Add new post
          // ──────────────────────────────────────────
          var inlineImg = extractFirstImageFromContent(content);
          var attachedImg = currentAttachedImageDataUrl || window.currentAttachedImageDataUrl || '';
          var finalImage = attachedImg || inlineImg || null;
          if (!finalImage && boardType === 'reviews') {
            finalImage = getReviewFallbackImage(Date.now() + '_' + Math.random());
          }

          var newPost = {
            id: boardType + '-' + Date.now(),
            category: category,
            author: author + (isSecret ? ' (비밀)' : ''),
            password: password,
            date: dateStr,
            views: initialViews,
            title: (isSecret ? '🔒 ' : '') + title,
            content: content,
            image: finalImage
          };

          if (boardType === 'youtube') {
            var vId = extractYoutubeId(youtubeUrl);
            if (!vId) {
              alert('올바른 유튜브 영상 URL 또는 11자리 영상 ID를 입력해 주세요.\n예: https://www.youtube.com/watch?v=51rIQ1T5dIU');
              return;
            }
            newPost.videoEmbed = 'https://www.youtube-nocookie.com/embed/' + vId;
            newPost.thumb = 'https://img.youtube.com/vi/' + vId + '/maxresdefault.jpg';
            newPost.isCustom = true;

            var customPosts = getCustomYoutubePosts();
            customPosts = customPosts.filter(function(p) {
              return p.id !== newPost.id && extractYoutubeId(p.videoEmbed) !== vId;
            });
            customPosts.unshift(newPost);
            saveCustomYoutubePosts(customPosts);
          }

          if (boardType !== 'youtube') {
            var customPosts = getCustomUserPosts(boardType);
            customPosts = customPosts.filter(function(p) { return String(p.id) !== String(newPost.id); });
            customPosts.unshift(newPost);
            saveCustomUserPosts(boardType, customPosts);

            // Save to Master Vault
            try {
              var vaultKey = 'healim_vault_all_posts_' + boardType;
              var vList = JSON.parse(localStorage.getItem(vaultKey) || '[]');
              vList = vList.filter(function(p) { return String(p.id) !== String(newPost.id); });
              vList.unshift(newPost);
              localStorage.setItem(vaultKey, JSON.stringify(vList));
              if (typeof HealimPermanentDB !== 'undefined' && HealimPermanentDB.saveVault) {
                HealimPermanentDB.saveVault(boardType, vList);
              }
            } catch(e) {}

            var fallbackData = (boardType === 'faq' ? defaultFaqData : (boardType === 'reviews' ? defaultReviewsData : defaultColumnsData));
            var currentList = getBoardData(boardType, fallbackData);
            saveBoardData(boardType, currentList);

            // Mirror to legacy backup
            try {
              var rawLeg = localStorage.getItem('healim_community_posts_v2');
              var legList = rawLeg ? (JSON.parse(rawLeg) || []) : [];
              legList = legList.filter(function(p) { return String(p.id) !== String(newPost.id); });
              legList.unshift(newPost);
              localStorage.setItem('healim_community_posts_v2', JSON.stringify(legList));
            } catch(e) {}
          } else {
            currentYoutubePage = 1;
          }

          alert('게시글이 성공적으로 등록되었습니다.');
          closeWriteModal();

          // Refresh view
          switchCommunityTab(boardType);

          try {
            if (window.HealimUniversalSync && window.HealimUniversalSync.syncPostToRemote) {
              window.HealimUniversalSync.syncPostToRemote(boardType, newPost, 'create');
            }
            if (typeof window.broadcastHealimCommunityUpdate === 'function') {
              window.broadcastHealimCommunityUpdate(boardType, 'create');
            }
            window.dispatchEvent(new CustomEvent('healim-community-updated', { detail: { boardType: boardType, post: newPost, action: 'create' } }));
          } catch(e) {}
        };

        // --- 6. Detail Modal Logic ---
        var currentDetailBoardType = '';
        var currentDetailPostId = '';
        window.openDetailModal = function(boardType, postId) {
        currentDetailBoardType = boardType;
        currentDetailPostId = postId;

        // Check super admin status
        var isAdminUser = false;
        var rawUser = localStorage.getItem('healim_auth_user');
        if (rawUser) {
        try {
        var u = JSON.parse(rawUser);
        if (u.role === 'admin' || u.uid === 'healim0071' || u.grade === 'superadmin') {
          isAdminUser = true;
        }
        } catch(e) {}
        }

        // Check medical gate for reviews (Super Admin bypasses gate)
        if (boardType === 'reviews' && !isAdminUser) {
        if (!rawUser) {
        alert('치료후기는 의료법 제56조에 따라 로그인 후 열람하실 수 있습니다.');
        var backUrl = encodeURIComponent('/community/#reviews');
        window.location.href = '/login/?back_url=' + backUrl;
        return;
        }
        }

        var fallbackData = (boardType === 'faq' ? defaultFaqData : (boardType === 'reviews' ? defaultReviewsData : (boardType === 'youtube' ? defaultYoutubeData : defaultColumnsData)));
        var list = getBoardData(boardType, fallbackData);
        var targetStrId = String(postId || '');
        var item = list.find(function(it) { return String(it.id) === targetStrId; });
        if (!item && Array.isArray(fallbackData)) {
          item = fallbackData.find(function(it) { return String(it.id) === targetStrId; });
        }
        if (!item) {
          var customPosts = getCustomUserPosts(boardType);
          item = customPosts.find(function(it) { return String(it.id) === targetStrId; });
        }
        if (!item) {
          item = list.find(function(it) { return it.title && it.title === targetStrId; });
        }
        if (!item && list.length > 0) {
          item = list[0];
        }
        if (!item) return;

        // Increment views
        try {
          item.views = (item.views || 0) + 1;
          saveBoardData(boardType, list);
        } catch(e) {}

        var catEl = document.getElementById('detailModalCategory');
        if (catEl) {
        if (boardType === 'youtube' || boardType === 'columns') {
          catEl.style.display = 'none';
        } else {
          catEl.style.display = 'inline-block';
          catEl.textContent = item.category || '치료후기';
        }
        }
        var titleEl = document.getElementById('detailModalTitle');
        if (titleEl) titleEl.textContent = item.title || '';
        var authorEl = document.getElementById('detailModalAuthor');
        if (authorEl) authorEl.textContent = (item.author && item.author !== '익명') ? item.author : '해아림한의원';
        var dateEl = document.getElementById('detailModalDate');
        if (dateEl) dateEl.textContent = item.date || '';
        var viewsEl = document.getElementById('detailModalViews');
        if (viewsEl) viewsEl.textContent = item.views || 1;

        // Render attached image if present (FAQ, Reviews, Columns) and deduplicate with content
        var imgArea = document.getElementById('detailModalImageArea');
        var imgEl = document.getElementById('detailModalImage');
        var displayContent = item.content || '';

        var modalDialog = document.querySelector('#detailModalBackdrop .healim-modal-dialog');
        if (boardType === 'reviews' && !item.image) {
          item.image = extractFirstImageFromContent(item.content) || getReviewFallbackImage(item.id || item.title);
        } else if (boardType === 'faq' && !item.image) {
          item.image = extractFirstImageFromContent(item.content) || getFaqFallbackImage(item.id || item.title, item.category);
        } else if (boardType === 'columns' && !item.image) {
          item.image = extractFirstImageFromContent(item.content) || getColumnFallbackImage(item.id || item.title, item.category);
        }

        if (modalDialog) {
          modalDialog.classList.remove('modal-review-mode');
        }

        if (item.image) {
          if (imgArea && imgEl) {
            imgEl.src = item.image;
            imgEl.className = 'w-full max-h-[420px] object-contain rounded-xl border border-[#badfe3] bg-[#f8fafb]';
            imgEl.style.filter = 'none';
            imgEl.style.transform = 'none';
            imgArea.style.display = 'block';

            var blurNotice = document.getElementById('detailModalBlurNotice');
            if (boardType === 'reviews') {
              if (!blurNotice) {
                blurNotice = document.createElement('div');
                blurNotice.id = 'detailModalBlurNotice';
                blurNotice.className = 'mt-2 text-xs text-[#1c6e78] font-semibold flex items-center justify-between bg-[#f0f7f8] px-3 py-1.5 rounded-lg border border-[#badfe3]';
                imgArea.appendChild(blurNotice);
              }
              blurNotice.innerHTML = '<span class="flex items-center gap-1.5"><span>🔒</span> <span>정회원 인증 열람: 의료법 제56조에 따라 로그인 회원에게 제공되는 원본 치료후기 사진입니다.</span></span>';
              blurNotice.style.display = 'flex';
            } else if (blurNotice) {
              blurNotice.style.display = 'none';
            }
          }
          // Safely deduplicate: only if image URL is short
          try {
            if (item.image && typeof item.image === 'string' && item.image.length < 500) {
              var escapedImg = item.image.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
              displayContent = displayContent.replace(new RegExp('^\\s*!\\[[^\\]]*\\]\\(' + escapedImg + '\\)\\s*', 'i'), '');
              displayContent = displayContent.replace(new RegExp('!\\[[^\\]]*\\]\\(' + escapedImg + '\\)', 'gi'), '');
              displayContent = displayContent.replace(new RegExp('<div[^>]*>\\s*<img[^>]+src=["\']' + escapedImg + '["\'][^>]*>\\s*</div>', 'gi'), '');
              displayContent = displayContent.replace(new RegExp('<img[^>]+src=["\']' + escapedImg + '["\'][^>]*>', 'gi'), '');
            }
          } catch(e) {}
        } else {
          if (imgArea) imgArea.style.display = 'none';
          if (imgEl) imgEl.src = '';
          var blurNotice = document.getElementById('detailModalBlurNotice');
          if (blurNotice) blurNotice.style.display = 'none';
        }

        var contentEl = document.getElementById('detailModalContent');
        if (contentEl) {
          contentEl.innerHTML = renderRichContent(displayContent);
        }

        var isSuperAdmin = isHealimSuperAdmin();
        var btnDel = document.getElementById('btnDetailModalDelete');
        if (btnDel) {
          btnDel.style.display = isSuperAdmin ? 'inline-block' : 'none';
        }
        var btnEdit = document.getElementById('btnDetailModalEdit');
        if (btnEdit) {
          btnEdit.style.display = isSuperAdmin ? 'inline-block' : 'none';
        }

        var ytArea = document.getElementById('detailModalYoutubeArea');
        if (boardType === 'youtube' && (item.videoEmbed || item.thumb)) {
        var vId = extractYoutubeId(item.videoEmbed || item.thumb || '');
        if (!vId) vId = '-Y_ITeHHpCo';
        var embedUrl = 'https://www.youtube-nocookie.com/embed/' + vId + '?autoplay=1&rel=0';
        ytArea.style.display = 'block';
        ytArea.innerHTML = '<div class="youtube-thumb-wrapper rounded-lg overflow-hidden">' +
        '<iframe src="' + embedUrl + '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="w-full h-full"></iframe>' +
        '</div>';
        } else if (ytArea) {
        ytArea.style.display = 'none';
        ytArea.innerHTML = '';
        }

        var backdropEl = document.getElementById('detailModalBackdrop');
        if (backdropEl) {
          backdropEl.style.display = 'flex';
          backdropEl.classList.add('is-open');
        }
        };

        window.handleDeletePostDirect = function(boardType, postId) {
          if (!isHealimSuperAdmin()) {
            alert('게시글 삭제 권한은 최고관리자(healim0071)에게만 있습니다.');
            return;
          }
          if (!boardType || !postId) return;

          var boardNames = {
            faq: '공황장애 FAQ',
            reviews: '치료후기',
            youtube: '유튜브 영상',
            columns: '치료 칼럼'
          };
          var boardName = boardNames[boardType] || '게시글';

          if (!confirm('👑 최고관리자 권한으로 해당 ' + boardName + ' 글을 영구 삭제하시겠습니까?\n삭제 후에는 복구할 수 없습니다.')) {
            return;
          }

          var strId = String(postId);

          // 1. YouTube specific blacklist & storage handling
          if (boardType === 'youtube') {
            var allYt = getCustomYoutubePosts().concat(getSyncedYoutubePosts()).concat(defaultYoutubeData);
            var targetItem = allYt.find(function(it) { return String(it.id) === strId; });
            var vId = targetItem ? extractYoutubeId(targetItem.videoEmbed || targetItem.thumb || targetItem.youtubeUrl || '') : null;
            if (!vId && strId.indexOf('yt-synced-') === 0) {
              vId = strId.replace('yt-synced-', '');
            }
            if (typeof addDeletedYoutubeId === 'function') {
              addDeletedYoutubeId(vId, strId);
            }
            var customYt = getCustomYoutubePosts().filter(function(it) { return String(it.id) !== strId; });
            saveCustomYoutubePosts(customYt);
            var syncedYt = getSyncedYoutubePosts().filter(function(it) { return String(it.id) !== strId; });
            saveSyncedYoutubePosts(syncedYt);
          }

          // 2. Permanent Blacklist & Remote Sync Hub Delete
          var targetItemForMeta = null;
          try {
            var fb = (boardType === 'faq' ? defaultFaqData : (boardType === 'reviews' ? defaultReviewsData : (boardType === 'youtube' ? defaultYoutubeData : defaultColumnsData)));
            var currList = getBoardData(boardType, fb);
            targetItemForMeta = currList.find(function(it) { return String(it.id) === strId; });
            if (!targetItemForMeta) {
              var vList = JSON.parse(localStorage.getItem('healim_vault_all_posts_' + boardType) || '[]');
              targetItemForMeta = vList.find(function(it) { return String(it.id) === strId; });
            }
          } catch(e) {}

          if (targetItemForMeta && typeof addDeletedPostTitle === 'function') {
            addDeletedPostTitle(boardType, targetItemForMeta.title, targetItemForMeta.poolId || targetItemForMeta.idPrefix);
          }

          if (typeof addDeletedPostId === 'function') {
            addDeletedPostId(boardType, strId);
          }
          try {
            if (window.HealimUniversalSync && window.HealimUniversalSync.syncDeleteToRemote) {
              window.HealimUniversalSync.syncDeleteToRemote(boardType, strId);
            }
          } catch(e) {}

          // 3. Remove from custom user posts
          var customPosts = getCustomUserPosts(boardType).filter(function(it) { return String(it.id) !== strId; });
          saveCustomUserPosts(boardType, customPosts);

          // 3.5 Remove from Master Vault, Edited Registry, and IndexedDB
          try {
            removeEditedPostRecord(boardType, strId);
            var vKey = 'healim_vault_all_posts_' + boardType;
            var vPosts = JSON.parse(localStorage.getItem(vKey) || '[]').filter(function(it) { return String(it.id) !== strId; });
            localStorage.setItem(vKey, JSON.stringify(vPosts));
            if (typeof HealimPermanentDB !== 'undefined') {
              if (HealimPermanentDB.saveVault) HealimPermanentDB.saveVault(boardType, vPosts);
              if (HealimPermanentDB.deleteFromVault) HealimPermanentDB.deleteFromVault(boardType, strId);
            }
          } catch(e) {}

          // 4. Remove from active board cache
          var fallback = (boardType === 'faq' ? defaultFaqData : (boardType === 'reviews' ? defaultReviewsData : (boardType === 'youtube' ? defaultYoutubeData : defaultColumnsData)));
          var currentList = getBoardData(boardType, fallback);
          var filtered = currentList.filter(function(it) { return String(it.id) !== strId; });
          saveBoardData(boardType, filtered);

          // 5. Legacy storage sync
          try {
            var rawLeg = localStorage.getItem('healim_community_posts_v2');
            if (rawLeg) {
              var legList = JSON.parse(rawLeg) || [];
              legList = legList.filter(function(p) { return String(p.id) !== strId; });
              localStorage.setItem('healim_community_posts_v2', JSON.stringify(legList));
            }
          } catch(e) {}

          // 6. Close detail modal if open
          if (currentDetailPostId && String(currentDetailPostId) === strId) {
            closeDetailModal();
          }

          // 7. Re-render active view
          if (boardType === 'faq') renderFaqList();
          else if (boardType === 'reviews') renderReviewsList();
          else if (boardType === 'youtube') renderYoutubeList();
          else if (boardType === 'columns') renderColumnsList();

          // 8. Dispatch global update event
          try {
            if (typeof window.broadcastHealimCommunityUpdate === 'function') {
              window.broadcastHealimCommunityUpdate(boardType, 'delete');
            }
            window.dispatchEvent(new CustomEvent('healim-community-updated', {
              detail: { boardType: boardType, action: 'delete', postId: strId }
            }));
          } catch(e) {}

          alert(boardName + ' 글이 영구 삭제되었습니다.');
        };

        window.handleDeleteCurrentPost = function() {
          if (!currentDetailBoardType || !currentDetailPostId) return;
          handleDeletePostDirect(currentDetailBoardType, currentDetailPostId);
        };

        window.closeDetailModal = function() {
        var modal = document.getElementById('detailModalBackdrop');
        if (modal) {
          modal.classList.remove('is-open');
          modal.style.display = 'none';
        }
        var ytArea = document.getElementById('detailModalYoutubeArea');
        if (ytArea) ytArea.innerHTML = '';
        var imgArea = document.getElementById('detailModalImageArea');
        var imgEl = document.getElementById('detailModalImage');
        if (imgArea) imgArea.style.display = 'none';
        if (imgEl) {
          imgEl.src = '';
          imgEl.style.filter = 'none';
          imgEl.style.transform = 'none';
        }
        var modalDialog = document.querySelector('#detailModalBackdrop .healim-modal-dialog');
        if (modalDialog) modalDialog.classList.remove('modal-review-mode');
        var blurNotice = document.getElementById('detailModalBlurNotice');
        if (blurNotice) blurNotice.style.display = 'none';
        var contentEl = document.getElementById('detailModalContent');
        if (contentEl) contentEl.innerHTML = '';
        currentDetailBoardType = '';
        currentDetailPostId = '';
        };

        // --- 7. Post Editing Engine & FAQ Direct Delete Engine ---
        window.handleEditCurrentPost = function() {
          if (!isHealimSuperAdmin()) {
            alert('게시글 수정 권한은 최고관리자(healim0071)에게만 있습니다.');
            return;
          }
          if (!currentDetailBoardType || !currentDetailPostId) return;
          openEditModal(currentDetailBoardType, currentDetailPostId);
        };

        window.openEditModal = function(boardType, postId) {
          if (!isHealimSuperAdmin()) {
            alert('게시글 수정 권한은 최고관리자(healim0071)에게만 있습니다.');
            return;
          }
          var fallbackData = (boardType === 'faq' ? defaultFaqData : (boardType === 'reviews' ? defaultReviewsData : (boardType === 'youtube' ? defaultYoutubeData : defaultColumnsData)));
          var list = getBoardData(boardType, fallbackData);
          var targetStrId = String(postId || '');
          var item = list.find(function(it) { return String(it.id) === targetStrId; });
          if (!item && boardType === 'youtube') {
            var allYt = getCustomYoutubePosts().concat(getSyncedYoutubePosts()).concat(defaultYoutubeData);
            item = allYt.find(function(it) { return String(it.id) === targetStrId; });
          }
          if (!item && Array.isArray(fallbackData)) {
            item = fallbackData.find(function(it) { return String(it.id) === targetStrId; });
          }
          if (!item) {
            var customPosts = getCustomUserPosts(boardType);
            item = customPosts.find(function(it) { return String(it.id) === targetStrId; });
          }
          if (!item) {
            try {
              var vaultKey = 'healim_vault_all_posts_' + boardType;
              var vList = JSON.parse(localStorage.getItem(vaultKey) || '[]');
              item = vList.find(function(it) { return String(it.id) === targetStrId; });
            } catch(e) {}
          }
          if (!item) {
            item = list.find(function(it) { return it.title && it.title === targetStrId; });
          }
          if (!item) {
            alert('수정할 게시글 데이터를 찾을 수 없습니다.');
            return;
          }

          var isAdminUser = true;

          // Open write modal for this boardType
          openWriteModal(boardType);

          // Mark as editing
          var editInput = document.getElementById('postEditId');
          if (editInput) editInput.value = postId;

          // Update modal title and submit button text
          var titleEl = document.getElementById('writeModalTitle');
          var submitBtn = document.querySelector('.healim-write-submit-btn');
          var boardName = (boardType === 'faq') ? 'FAQ' : ((boardType === 'reviews') ? '치료후기' : ((boardType === 'youtube') ? '영상' : '치료 칼럼'));
          if (titleEl) titleEl.textContent = boardName + ' 수정' + (isAdminUser ? ' 👑' : '');
          if (submitBtn) submitBtn.textContent = '수정 완료';

          // Fill author
          var authorInput = document.getElementById('postAuthor');
          if (authorInput) {
            authorInput.value = (item.author || '').replace(/\s*\(비밀\)/g, '').trim();
          }

          // Fill password
          var pwdInput = document.getElementById('postPassword');
          if (pwdInput) {
            pwdInput.value = item.password || '';
          }

          // Fill title
          var titleInput = document.getElementById('postTitle');
          if (titleInput) {
            titleInput.value = (item.title || '').replace(/^🔒\s*/, '').replace(/^Q[\.:\s\-]+/i, '').trim();
          }

          // Fill secret
          var secretCheck = document.getElementById('postIsSecret');
          if (secretCheck) {
            var isSec = (item.title && item.title.indexOf('🔒') !== -1) || (item.author && item.author.indexOf('(비밀)') !== -1);
            secretCheck.checked = isSec;
            window.updateSecretLockState();
          }

          // Fill date & views
          var customDateInput = document.getElementById('postCustomDate');
          if (customDateInput) customDateInput.value = item.date || '';
          var customViewsInput = document.getElementById('postCustomViews');
          if (customViewsInput) customViewsInput.value = item.views || 1;

          // Fill youtube URL
          if (boardType === 'youtube') {
            var ytInput = document.getElementById('postYoutubeUrl');
            if (ytInput) {
              var vId = extractYoutubeId(item.videoEmbed || item.youtubeUrl || item.thumb || '');
              ytInput.value = vId ? ('https://www.youtube.com/watch?v=' + vId) : (item.videoEmbed || item.thumb || '');
            }
          }

          // Fill representative image
          if (item.image) {
            setCurrentAttachedImage(item.image, '기존 첨부사진');
          } else {
            removeSelectedImage();
          }

          // Fill editor content with robust multi-field fallback (content, answer, desc, text, body)
          var editor = document.getElementById('postContentEditor');
          var textarea = document.getElementById('postContent');
          var rawContent = item.content || item.answer || item.desc || item.text || item.body || '';

          // If content starts with markdown image syntax matching item.image, safely strip it
          if (item.image && typeof item.image === 'string' && item.image.length < 500) {
            try {
              var escImg = item.image.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
              rawContent = rawContent.replace(new RegExp('^\\s*!\\[[^\\]]*\\]\\(' + escImg + '\\)\\s*', 'i'), '');
            } catch(e) {}
          }

          var contentHtml = rawContent;
          contentHtml = String(contentHtml).replace(/\\r\\n/g, '\n').replace(/\\n/g, '\n').replace(/\\r/g, '\n');
          // Restore reading-mode inline images into interactive editable WYSIWYG widgets with delete button
          try {
            contentHtml = contentHtml.replace(/<div class="article-inline-img-wrap">\s*<img src="([^"]+)"[^>]*>\s*<\/div>/gi, function(match, src) {
              return '<div class="editor-inline-image-wrap" contenteditable="false"><div class="editor-img-box"><img src="' + src + '" alt="본문 사진" class="editor-preview-img" /><button type="button" class="btn-del-inline-img" onclick="this.closest(\'.editor-inline-image-wrap\').remove()" title="사진 삭제">&times;</button></div></div><div><br></div>';
            });
            // Also restore markdown images into interactive editable WYSIWYG widgets
            contentHtml = contentHtml.replace(/!\[(.*?)\]\(((?:data:image\/[^;]+;base64,[^)]+)|(?:https?:\/\/[^)]+)|(?:\/[^)]+))\)/g, function(match, alt, src) {
              return '<div class="editor-inline-image-wrap" contenteditable="false"><div class="editor-img-box"><img src="' + src + '" alt="' + (alt || '본문 사진') + '" class="editor-preview-img" /><button type="button" class="btn-del-inline-img" onclick="this.closest(\'.editor-inline-image-wrap\').remove()" title="사진 삭제">&times;</button></div></div><div><br></div>';
            });
          } catch(e) {}

          // If contentHtml has plain newlines without HTML block tags, convert into paragraphs
          if (contentHtml && contentHtml.indexOf('<p') === -1 && contentHtml.indexOf('<div') === -1 && contentHtml.indexOf('<br') === -1) {
            contentHtml = contentHtml.split(/\n\n+/).map(function(p) {
              return '<p>' + p.replace(/\n/g, '<br>') + '</p>';
            }).join('');
          }

          if (editor) {
            editor.innerHTML = contentHtml;
            try {
              editor.dispatchEvent(new Event('input', { bubbles: true }));
            } catch(e) {}
          }
          if (textarea) {
            textarea.value = contentHtml;
          }

          // Close detail modal if open
          var detailModal = document.getElementById('detailModalBackdrop');
          if (detailModal && detailModal.classList.contains('is-open')) {
            closeDetailModal();
          }
        };

        window.handleDeleteFaqDirect = function(faqId) {
          handleDeletePostDirect('faq', faqId);
        };

        // Hash & Query Navigation Initialization
        function initTabFromHash() {
        if (window.HealimUniversalSync && window.HealimUniversalSync.init && !window._healimUniversalSyncInited) {
          window._healimUniversalSyncInited = true;
          window.HealimUniversalSync.init();
        }
        if (typeof purgeObsoleteMockPosts === 'function') purgeObsoleteMockPosts();

        // Check query parameters (?board=reviews&id=...)
        var urlParams = new URLSearchParams(window.location.search);
        var qBoard = urlParams.get('board') || urlParams.get('tab');
        var qId = urlParams.get('id');

        var rawHash = window.location.hash.replace('#', '');
        var hashMatch = rawHash.match(/^(faq|reviews|youtube|columns)/);
        var hashIdMatch = rawHash.match(/^(faq|reviews|youtube|columns)[-_](.+)$/);

        var targetTab = qBoard || (hashMatch ? hashMatch[1] : null);
        var targetId = qId || (hashIdMatch ? hashIdMatch[2] : null);

        // Session storage fallback
        if (!targetTab) {
          try {
            targetTab = sessionStorage.getItem('healim_target_community_tab');
            sessionStorage.removeItem('healim_target_community_tab');
          } catch(e) {}
        }

        if (targetTab === 'faq' || targetTab === 'reviews' || targetTab === 'youtube' || targetTab === 'columns') {
          switchCommunityTab(targetTab);
          setTimeout(function() {
            var targetEl = document.getElementById(targetTab) || document.getElementById('tab-pane-' + targetTab) || document.querySelector('.community-tabs-container') || document.getElementById('communityTabList');
            if (targetEl) {
              targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            if (targetId && typeof openDetailModal === 'function') {
              openDetailModal(targetTab, targetId);
            }
          }, 150);
        } else if (rawHash === 'write') {
          switchCommunityTab('reviews');
          setTimeout(function() { openWriteModal('reviews'); }, 150);
        } else {
          switchCommunityTab('faq');
        }

        // Apply admin auto badges visibility check on load
        updateAdminAutoBadgesVisibility();

        // Automated IndexedDB Permanent Recovery Audit (Resurrects posts if localStorage was wiped)
        if (typeof HealimPermanentDB !== 'undefined' && HealimPermanentDB.restoreVault) {
          ['faq', 'reviews', 'columns', 'youtube'].forEach(function(bKey) {
            HealimPermanentDB.restoreVault(bKey, function(vaultList) {
              if (vaultList && vaultList.length > 0) {
                if (bKey === 'faq') {
                  vaultList = vaultList.filter(function(it) { return !isObsoleteMockFaq(it); });
                } else if (bKey === 'columns') {
                  vaultList = vaultList.filter(function(it) { return !isObsoleteMockColumn(it); });
                } else if (bKey === 'reviews') {
                  vaultList = vaultList.filter(function(it) { return !isObsoleteMockReview(it); });
                }
                // ALWAYS filter deleted items!
                vaultList = vaultList.filter(function(it) {
                  return it && !isDeletedPostId(bKey, it.id, it);
                });

                // Apply any locally edited versions!
                var editedMap = getEditedPostsMap(bKey);
                vaultList = vaultList.map(function(it) {
                  if (it && it.id && editedMap[String(it.id)]) {
                    return editedMap[String(it.id)];
                  }
                  return it;
                });

                var curRaw = localStorage.getItem('healim_vault_all_posts_' + bKey);
                var curList = curRaw ? JSON.parse(curRaw) : [];
                // Only restore from IndexedDB if localStorage was completely empty/lost, never overwrite current canonical data
                if ((!curRaw || curList.length === 0) && vaultList.length > 0) {
                  console.log('[Healim Master Vault] Restoring lost session from IndexedDB to ' + bKey);
                  localStorage.setItem('healim_vault_all_posts_' + bKey, JSON.stringify(vaultList));
                  localStorage.setItem('healim_board_' + bKey, JSON.stringify(vaultList));
                  if (activeTab === bKey) {
                    switchCommunityTab(bKey);
                  }
                }
              }
            });
          });
        }

        // Fetch Static Hub Data (/data/healim_community_hub.json) to synchronize latest published posts across all browsers
        if (window.fetch) {
          fetch('/data/healim_community_hub.json?t=' + Date.now(), { cache: 'no-cache' })
            .then(function(res) {
              if (!res.ok) throw new Error('Hub 404');
              return res.json();
            })
            .then(function(json) {
              var hub = json.data || json;
              if (hub && typeof hub === 'object') {
                var didUpdate = false;
                if (Array.isArray(hub.deleted_ids)) {
                  hub.deleted_ids.forEach(function(did) {
                    ['faq', 'reviews', 'columns', 'youtube'].forEach(function(bk) {
                      addDeletedPostId(bk, did);
                    });
                  });
                }
                ['faq', 'reviews', 'columns', 'youtube'].forEach(function(bKey) {
                  if (Array.isArray(hub[bKey]) && hub[bKey].length > 0) {
                    var vKey = 'healim_vault_all_posts_' + bKey;
                    var rawV = localStorage.getItem(vKey);
                    var localList = rawV ? (JSON.parse(rawV) || []) : [];
                    var editedMap = getEditedPostsMap(bKey);
                    var seen = {};
                    var merged = [];

                    // 1. Edited posts first
                    Object.keys(editedMap).forEach(function(eid) {
                      var ep = editedMap[eid];
                      if (ep && !isDeletedPostId(bKey, ep.id, ep)) {
                        seen[String(ep.id)] = true;
                        merged.push(ep);
                      }
                    });

                    // 2. Local posts
                    localList.forEach(function(p) {
                      if (p && p.id && !seen[String(p.id)] && !isDeletedPostId(bKey, p.id, p)) {
                        seen[String(p.id)] = true;
                        merged.push(p);
                      }
                    });

                    // 3. Hub posts (use edited version if user edited it)
                    hub[bKey].forEach(function(p) {
                      if (p && p.id && !seen[String(p.id)] && !isDeletedPostId(bKey, p.id, p)) {
                        seen[String(p.id)] = true;
                        var finalP = editedMap[String(p.id)] ? editedMap[String(p.id)] : p;
                        merged.push(finalP);
                      }
                    });

                    merged = sortCommunityItemsByTime(merged);
                    localStorage.setItem(vKey, JSON.stringify(merged));
                    localStorage.setItem('healim_board_' + bKey, JSON.stringify(merged));
                    didUpdate = true;
                  }
                });
                if (didUpdate) {
                  var curHash = window.location.hash.replace('#', '') || 'faq';
                  if (curHash === 'faq' || curHash === 'reviews' || curHash === 'youtube' || curHash === 'columns') {
                    switchCommunityTab(curHash);
                  }
                }
              }
            })
            .catch(function() {});
        }

        // Trigger daily channel auto-sync (runs once per day, checks at/after 00:00)
        setTimeout(function() {
          syncHealimtvChannel(false);
          scheduleMidnightSync();
        }, 400);
        }

        window.addEventListener('hashchange', initTabFromHash);
        window.addEventListener('healim-cloud-db-updated', function() {
          var curHash = window.location.hash.replace('#', '') || 'faq';
          if (curHash === 'faq' || curHash === 'reviews' || curHash === 'youtube' || curHash === 'columns') {
            switchCommunityTab(curHash);
          }
        });

        if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTabFromHash);
        } else {
        initTabFromHash();
        }
        })();
        </script>
---
