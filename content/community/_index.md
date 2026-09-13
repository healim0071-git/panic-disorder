---
title: "해아림 커뮤니티 | 공황장애 FAQ, 치료후기, 유튜브 영상, 의료 칼럼"
description: "공황장애에 대해 자주 묻는 질문(FAQ), 환자분들의 생생한 실제 치료후기, 원장단이 직접 설명하는 유튜브 의학 영상 및 전문적 치료 칼럼을 제공합니다."
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
        전국 15개 네트워크 해아림한의원의 축적된 임상 노하우와 치료 정보, 환자 호전 사례, 원장단 의학 칼럼 및 영상을 공유합니다.
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
          <span><strong>공황장애 치료칼럼 자동 발행</strong>: 주 4~5회 (오전 08:00~11:00 랜덤)</span>
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
        <table class="healim-table">
        <thead>
        <tr>
        <th style="width: 7%; text-align: center;">번호</th>
        <th>제목</th>
        <th style="width: 17%; text-align: center;">작성자</th>
        <th style="width: 13%; text-align: center;">등록일</th>
        <th style="width: 8%; text-align: center;">조회</th>
        <th style="width: 130px; text-align: center; display: none;" id="colManageTh">관리</th>
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
        <h3 class="healim-book-title">불안장애·공황장애 완치지침서</h3>
        <p class="text-sm text-[#555555] max-w-md mx-auto mb-4 leading-relaxed">
        원인 모를 신체화 증상과 예기불안, 공황 발작을 이겨내고 온전한 일상을 되찾기 위한 실전 치유 가이드
        </p>
        <div class="text-center">
        <div class="healim-book-badge">걱정마 공황장애</div>
        </div>
        </div>

        <div class="text-center my-10">
        <a href="#branches" class="btn-healim" style="padding: 0.85rem 2.25rem; font-size: 1.05rem;">가까운 15개 지점 찾기 &gt;</a>
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
        <img id="detailModalImage" src="" alt="첨부 사진" class="w-full max-h-[380px] object-contain rounded-xl border border-[#badfe3] bg-[#f8fafb]" onerror="this.onerror=null; this.parentElement.style.display='none';" />
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
        <script>
        (function() {
        // --- Seed Data ---
        var defaultFaqData = [
          {
            "id": "faq-auto-22-1788884200000",
            "category": "응급실/검사정상",
            "author": "해아림한의원",
            "date": "2026.09.09",
            "views": 1980,
            "image": "/images/faq/faq_22_orthostatic.svg",
            "title": "앉아있거나 가만히 있다가도 심장이 터질 듯 뛰고 숨이 막힙니다. 심장 검사는 정상인데 공황장애인가요?",
            "content": "가만히 쉬고 있거나 운전, 회의 중 갑자기 심장이 멎을 듯 쿵쾅거리고, 숨이 턱 끝까지 차오르며 온몸이 떨리는 경험은 공황발작(Panic Attack)의 전형적인 증상입니다. 놀라서 응급실을 찾아 심전도, 엑스레이, 혈액검사를 받아도 \"심장과 폐에는 아무 이상이 없습니다\"라는 소견을 듣는 경우가 대부분입니다.<br><br>일반 병원 검사는 심근경색이나 협심증 같은 '기질적 장기 손상'을 확인하는 검사입니다. 반면 공황장애는 장기 자체의 병이 아니라, 뇌의 공포·불안 조절 중추인 <strong>'편도체(Amygdala)'가 생명에 위협이 없음에도 잘못된 비상경보를 울려 교감신경계를 급격히 폭주시킨 기능적 이상</strong>입니다.<br><br>해아림한의원에서는 뇌파 검사, HRV(심박변이도) 검사를 통해 편도체의 과흥분도와 자율신경 불균형 상태를 객관적으로 평가하고, 심포(心包)의 열을 내리고 신경계를 안정시키는 1:1 맞춤 한약과 두개천골요법(CST)을 통해 뇌의 오작동을 근본적으로 바로잡습니다.<br><br><a href=\"https://healim-autonomic.com/autonomic-diagnosis\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 정밀검사 알아보기</span><span class=\"text-xs\">&gt;</span></a><br><a href=\"https://healim-autonomic.com/autonomic-treatment\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 한방치료 알아보기</span><span class=\"text-xs\">&gt;</span></a>",
            "summary": "구조적 이상이 아닌 뇌 편도체의 비상경보 오작동으로 인한 급성 자율신경 폭주와 공황발작의 기전"
          },
          {
            "id": "faq-auto-21-1788884100000",
            "category": "신체증상/구강건조",
            "author": "해아림한의원",
            "date": "2026.09.09",
            "views": 1950,
            "image": "/images/faq/faq_21_drymouth.svg",
            "title": "입안이 바짝 말라 혀가 타는 듯 아프고 물을 마셔도 갈증이 가시지 않습니다. 공황장애 증상인가요?",
            "content": "공황발작이나 극심한 예기불안이 찾아오면 교감신경이 급격히 치솟으면서 침샘으로 가는 혈류가 수축되고 장액성 침 분비가 억제되어 입안이 바짝 타들어 가는 구강건조증(Dry Mouth)이 나타납니다. 물을 연거푸 마셔도 목구멍이 마르고 혀가 화끈거리며 굳는 느낌이 듭니다.<br><br>이는 신체가 '투쟁-도피(Fight-or-Flight)' 반응에 돌입하여 소화기와 침샘 기능을 일시적으로 차단하고 혈액을 심장과 근육으로 몰아주기 때문입니다. 공황 환자분들은 이 입마름과 인후부 건조를 '숨구멍이 막히는 신호'로 오인하여 2차 공황발작으로 번지기 쉽습니다.<br><br>해아림한의원에서는 음혈(陰血)을 보충하고 진액을 생성하는 자음강화(滋陰降火) 한약 처방과 미주신경 이완 침 치료를 통해 바짝 마른 구강 점막을 촉촉하게 회복시키고 교감신경의 과도한 흥분을 진정시킵니다.<br><br><a href=\"https://healim-autonomic.com/autonomic-diagnosis\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 정밀검사 알아보기</span><span class=\"text-xs\">&gt;</span></a><br><a href=\"https://healim-autonomic.com/autonomic-treatment\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 한방치료 알아보기</span><span class=\"text-xs\">&gt;</span></a>",
            "summary": "극심한 불안과 교감신경 초과항진이 침샘 혈관을 수축시켜 유발하는 구강건조와 인후부 작열감"
          },
          {
            "id": "faq-auto-20-1788884000000",
            "category": "야간공황/기상불안",
            "author": "해아림한의원",
            "date": "2026.09.09",
            "views": 185,
            "image": "/images/faq/faq_20_morning.svg",
            "title": "아침에 눈을 뜨자마자 가슴이 쿵쾅거리고 불안하며 머리가 무겁습니다. 아침 기상 시 유독 심해지는 이유는 무엇인가요?",
            "content": "공황장애 환자분들 중 상당수가 하루 중 '아침 눈뜰 때' 가장 극심한 가슴 두근거림과 불안, 식은땀을 호소하십니다. 인체는 기상 직전 신체를 각성시키기 위해 부신에서 스트레스 호르몬인 코르티솔을 대량 분비하는 '코르티솔 각성 반응(CAR: Cortisol Awakening Response)'을 일으킵니다.<br><br>건강한 상태에서는 이 반응이 활력 있는 기상을 돕지만, 편도체와 자율신경계가 예민해진 공황장애 환자는 심장박동수 급등과 혈압 상승 자극을 '심각한 위험 신호'로 잘못 해석하여 아침 공황발작으로 이어지게 됩니다.<br><br>해아림한의원에서는 과각성된 HPA 축(시상하부-뇌하수체-부신)을 안정시키고 심장열을 내려주는 천왕보심단, 산조인탕, 가미소요산 계열의 맞춤 한약과 기혈 순환 침 치료로 아침의 불필요한 교감신경 급상승(Surge)을 완충하고 생체 리듬을 동기화합니다.<br><br><a href=\"https://healim-autonomic.com/autonomic-diagnosis\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 정밀검사 알아보기</span><span class=\"text-xs\">&gt;</span></a><br><a href=\"https://healim-autonomic.com/autonomic-treatment\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 한방치료 알아보기</span><span class=\"text-xs\">&gt;</span></a>",
            "summary": "기상 직전 코르티솔 각성 반응(CAR)과 뇌신경계 조절력 저하로 인한 아침 공황발작의 신경학적 이유"
          },
          {
            "id": "faq-1788878924543",
            "category": "목이물감/매핵기",
            "author": "해아림한의원",
            "date": "2026.09.09",
            "views": 172,
            "image": "/images/faq/faq_19_globus.svg",
            "title": "목에 무언가 걸린 듯 답답하고 헛기침이 계속 나옵니다. 이비인후과 내시경은 정상인데 매핵기나 공황장애 증상인가요?",
            "content": "목에 가래나 솜뭉치가 걸린 것 같고 뱉어도 나오지 않으며 삼켜도 넘어가지 않는 증상을 한의학에서 '매핵기(梅核氣)'라고 부릅니다. 이비인후과 후두경 검사를 받아도 염증이나 이상이 없는데 목이 꽉 막힌 듯 답답하고 숨쉬기 곤란함을 호소합니다.<br><br>매핵기는 극심한 스트레스와 억울된 감정(간기울결, 肝氣鬱結)으로 인해 교감신경이 과항진되면서 식도 괄약근과 인후부 근육이 지속적으로 수축·경련을 일으킬 때 발생합니다. 공황 환자분들은 이를 '기도가 막혀 질식하는 것'으로 착각하여 심한 공포감과 과호흡을 유발합니다.<br><br>해아림한의원에서는 뭉친 기운을 풀어주고 인후부 점막의 긴장을 이완시키는 반하후박탕, 시호소서산 가감방과 상초 기혈 순환 침 치료를 통해 목의 답답함을 시원하게 뚫어드립니다.<br><br><a href=\"https://healim-autonomic.com/autonomic-diagnosis\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 정밀검사 알아보기</span><span class=\"text-xs\">&gt;</span></a><br><a href=\"https://healim-autonomic.com/autonomic-treatment\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 한방치료 알아보기</span><span class=\"text-xs\">&gt;</span></a>",
            "summary": "불안과 긴장으로 인한 인후부 점막 건조 및 식도 괄약근 경련(매핵기)과 호흡 답답함의 연결고리"
          },
          {
            "id": "faq-1",
            "category": "공황장애/원인",
            "author": "해아림한의원",
            "date": "2026.09.06",
            "views": 1940,
            "image": "/images/faq/faq_1_exam.svg",
            "title": "병원에서 온갖 검사를 다 받아도 정상이라는데, 왜 숨이 멎을 것 같고 죽을 것 같은 공포가 오나요?",
            "content": "병원에서 심전도, 심장초음파, 뇌MRI, 24시간 홀터 검사까지 모두 마쳤는데도 \"검사상 완전히 정상이며 신경성입니다\"라는 말을 듣고 당혹스러워하시는 분들이 많습니다. 몸에서는 심장이 터질 듯 뛰고, 숨이 안 쉬어지며, 이러다 죽거나 미쳐버릴 것 같은데 왜 기계에는 안 잡힐까요?<br><br>일반 병원 검사는 장기의 파열, 종양, 염증 등 '기질적 구조 손상'을 찾는 검사입니다. 반면 공황장애는 장기 조직의 고장이 아니라, 장기들의 속도와 균형을 조절하는 <strong>'뇌 신경망과 자율신경 조절계의 기능적 이상'</strong>입니다. 마치 최고급 자동차의 엔진과 브레이크 부품은 정상이지만, 제어 컴퓨터 센서 오류로 급가속 신호가 켜지는 것과 같습니다.<br><br>해아림한의원에서는 HRV(심박변이도) 검사, 뇌파(QEEG) 검사, 자율신경 기능 검사를 통해 과흥분된 교감신경을 안정시키고 약화된 부교감신경을 회복시키는 1:1 맞춤 한약과 두개천골요법(CST)을 처방하여 신경계 본래의 조절 능력을 복원합니다.<br><br><a href=\"https://healim-autonomic.com/autonomic-diagnosis\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 정밀검사 알아보기</span><span class=\"text-xs\">&gt;</span></a><br><a href=\"https://healim-autonomic.com/autonomic-treatment\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 한방치료 알아보기</span><span class=\"text-xs\">&gt;</span></a>",
            "summary": "기질적 장기 이상이 아닌 뇌 편도체의 과민 경보와 자율신경 조절 기능 저하가 만드는 공황발작의 본질"
          },
          {
            "id": "faq-2",
            "category": "심장/부정맥",
            "author": "해아림한의원",
            "date": "2026.09.04",
            "views": 1820,
            "image": "/images/faq/faq_2_panic.svg",
            "title": "가슴이 쿵쾅거리고 맥박이 분당 140회 이상 치솟는데, 심장마비로 급사할 위험은 없나요?",
            "content": "공황발작이 시작되면 심장이 갈비뼈를 뚫고 나올 것처럼 격렬하게 뛰고 쿵쾅거려 환자분들은 '이러다 심장이 멈추거나 터져서 죽는 것 아닌가' 하는 극단적인 공포를 느낍니다.<br><br>결론부터 말씀드리면, <strong>공황발작으로 인해 심장마비가 오거나 사망에 이르는 일은 의학적으로 절대 없습니다.</strong> 공황 시의 심박수 상승은 전력 질주를 할 때 심장이 빨리 뛰는 것과 동일한 정상적인 생리적 교감신경 반응입니다. 심장이 격렬히 뛰는 것은 체내 구석구석 혈액을 공급하기 위한 인체의 방어 기제이지, 심장 기능이 망가진 것이 아닙니다.<br><br>다만 이러한 발작이 반복되면 심장과 자율신경계에 만성적인 피로가 누적되므로, 심담허겁(心膽虛怯) 상태를 보강하고 심장의 열을 식혀주는 한방 치료로 신경계를 안정시켜 주어야 합니다.<br><br><a href=\"https://healim-autonomic.com/autonomic-diagnosis\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 정밀검사 알아보기</span><span class=\"text-xs\">&gt;</span></a><br><a href=\"https://healim-autonomic.com/autonomic-treatment\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 한방치료 알아보기</span><span class=\"text-xs\">&gt;</span></a>",
            "summary": "공황발작 중 심박수 급등의 생리학적 안전성과 심장마비와의 명확한 의학적 차이점"
          },
          {
            "id": "faq-3",
            "category": "광장공포증/밀폐공간",
            "author": "해아림한의원",
            "date": "2026.09.02",
            "views": 1650,
            "image": "/images/faq/faq_3_thermal.svg",
            "title": "지하철, 버스, 엘리베이터, 터널만 가면 식은땀이 나고 탈출하고 싶은데 광장공포증인가요?",
            "content": "공황장애 환자의 50% 이상이 '광장공포증(Agoraphobia)'을 동반합니다. 지하철, 고속버스, 비행기, 엘리베이터, 터널, 꽉 막힌 다리 위처럼 '공황발작이 왔을 때 즉각 탈출하기 어렵거나 도움을 요청할 수 없는 장소'를 극도로 두려워하여 피하게 됩니다.<br><br>한 번 해당 장소에서 발작을 경험하면 뇌의 해마(기억 중추)와 편도체에 강렬한 공포 조건화가 형성되어, 그 장소에 가기만 하거나 상상만 해도 조건반사적으로 교감신경이 폭주합니다. 이는 회피 행동을 낳고, 활동 범위를 집 안으로 제한시키는 악순환을 만듭니다.<br><br>해아림한의원에서는 뇌신경 안정을 유도하는 맞춤 한약과 함께, 체계적 탈감작(Systematic Desensitization)과 인지행동치료 기법을 적용하여 공포 기억 회로를 안전하게 재구성합니다.<br><br><a href=\"https://healim-autonomic.com/autonomic-diagnosis\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 정밀검사 알아보기</span><span class=\"text-xs\">&gt;</span></a><br><a href=\"https://healim-autonomic.com/autonomic-treatment\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 한방치료 알아보기</span><span class=\"text-xs\">&gt;</span></a>",
            "summary": "즉각적인 탈출이 어렵거나 도움받기 힘든 장소에 대한 공포와 점진적 인지행동 치료법"
          },
          {
            "id": "faq-4",
            "category": "호흡곤란/과호흡",
            "author": "해아림한의원",
            "date": "2026.08.30",
            "views": 1420,
            "image": "/images/faq/faq_4_vagus.svg",
            "title": "숨이 턱 끝까지 차오르고 가슴이 조여옵니다. 과호흡이 올 때 봉지 호흡을 해야 하나요?",
            "content": "공황발작 시 공기가 부족하다는 착각에 빠져 숨을 가쁘고 얕게 몰아쉬는 것을 '과호흡 증후군(Hyperventilation Syndrome)'이라고 합니다. 체내에 산소가 부족한 것이 아니라, 과도한 호흡으로 혈중 이산화탄소(CO2)가 지나치게 배출되면서 혈액이 알칼리화(호흡성 알칼리증)되어 뇌혈관이 수축합니다.<br><br>이로 인해 어지럼증, 손발 저림과 마비, 입 주위 얼얼함이 나타납니다. 과거에는 종이봉투를 대고 숨을 쉬게 했으나, 저산소혈증 위험이 있어 현재는 <strong>'4-6 복식호흡법'</strong>이 표준 응급 대처법입니다. 코로 4초간 천천히 들이마시고, 입으로 6초간 부드럽게 길게 내쉬며 횡격막을 이완시키면 3분 이내에 이산화탄소 분압이 정상화됩니다.<br><br>해아림에서는 흉곽 호흡근의 긴장을 푸는 침 치료와 호흡 신경망을 안정시키는 한약으로 만성 과호흡 경향을 근본적으로 개선합니다.<br><br><a href=\"https://healim-autonomic.com/autonomic-diagnosis\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 정밀검사 알아보기</span><span class=\"text-xs\">&gt;</span></a><br><a href=\"https://healim-autonomic.com/autonomic-treatment\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 한방치료 알아보기</span><span class=\"text-xs\">&gt;</span></a>",
            "summary": "급성 과호흡으로 인한 호흡성 알칼리증의 기전과 올바른 4-6 복식호흡 안정법"
          },
          {
            "id": "faq-5",
            "category": "수면/야간공황",
            "author": "해아림한의원",
            "date": "2026.08.27",
            "views": 2150,
            "image": "/images/faq/faq_5_sleep.svg",
            "title": "잠든 지 1~2시간 만에 숨이 막히고 심장이 터질 듯 뛰어 벌떡 일어납니다. 야간 공황발작인가요?",
            "content": "악몽을 꾼 것도 아닌데, 깊은 잠에 빠져 있다가 갑자기 질식할 것 같은 공포와 심장 박동으로 소스라치게 깨어나는 증상을 '야간 공황발작(Nocturnal Panic)'이라고 합니다. 수면 단계 중 주로 깊은 비렘수면(3~4단계)에서 렘수면으로 전환될 때 일어납니다.<br><br>수면 중에는 부교감신경이 우세해야 하지만, 만성 스트레스로 인해 뇌의 공포 경보 회로가 수면 중 신체 감각(심박수 감소, 호흡 느려짐)을 '질식 위기'로 오작동하여 폭발적인 아드레날린 분비를 유발하는 것입니다. 이로 인해 잠자리에 드는 것 자체가 두려워지는 수면 공포증으로 악화될 수 있습니다.<br><br>해아림한의원에서는 뇌간망양체의 수면-각성 주기를 안정시키는 수면 안정 한약과 약침 치료를 통해 야간 심장 흥분을 가라앉히고 깊은 숙면을 유도합니다.<br><br><a href=\"https://healim-autonomic.com/autonomic-diagnosis\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 정밀검사 알아보기</span><span class=\"text-xs\">&gt;</span></a><br><a href=\"https://healim-autonomic.com/autonomic-treatment\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 한방치료 알아보기</span><span class=\"text-xs\">&gt;</span></a>",
            "summary": "비렘수면(NREM) 단계에서 발생하는 야간 공황(Nocturnal Panic)의 특징과 한의학적 진단"
          },
          {
            "id": "faq-6",
            "category": "비현실감/이인증",
            "author": "해아림한의원",
            "date": "2026.08.24",
            "views": 1380,
            "image": "/images/faq/faq_6_pots.svg",
            "title": "머리가 멍하고 내가 내가 아닌 것 같으며 세상이 유리벽 너머에 있는 듯합니다. 이인증인가요?",
            "content": "공황발작 전후로 자신의 몸이나 감정이 낯설게 느껴지는 '이인증(Depersonalization)'이나, 주변 환경이 영화 세트장 같고 현실이 아닌 것처럼 느껴지는 '비현실감(Derealization)'을 겪는 환자분들이 많습니다. \"내가 미쳐버리는 것은 아닐까\", \"영영 뇌가 망가진 것은 아닐까\" 하는 공포를 줍니다.<br><br>이는 뇌가 극단적인 공포와 통증으로부터 스스로를 보호하기 위해 감각 처리 회로의 연결을 일시적으로 차단하는 '신경학적 해리(Dissociation) 방어 기제'입니다. 결코 조현병이나 뇌 질환으로 미치는 것이 아닙니다.<br><br>해아림한의원에서는 대뇌 피질의 감각 인지 조율을 돕는 두개천골요법(CST)과 총명탕 가감방, 뇌혈류 개선 한약을 처방하여 브레인포그와 멍한 감각을 맑게 걷어내고 현실 감각을 회복시킵니다.<br><br><a href=\"https://healim-autonomic.com/autonomic-diagnosis\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 정밀검사 알아보기</span><span class=\"text-xs\">&gt;</span></a><br><a href=\"https://healim-autonomic.com/autonomic-treatment\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 한방치료 알아보기</span><span class=\"text-xs\">&gt;</span></a>",
            "summary": "극심한 공황 불안 시 뇌가 고통을 차단하기 위해 유발하는 해리 증상(이인증/비현실감)"
          },
          {
            "id": "faq-7",
            "category": "만성피로/무기력",
            "author": "해아림한의원",
            "date": "2026.08.21",
            "views": 1540,
            "image": "/images/faq/faq_7_brainfog.svg",
            "title": "공황발작이 지나가고 나면 온몸의 진이 빠지고 숟가락 들 힘도 없습니다. 왜 그런가요?",
            "content": "10~30분간의 격렬한 공황발작 동안 인체는 호랑이를 만나 사투를 벌인 것과 맞먹는 막대한 양의 글리코겐과 아드레날린을 단시간에 소모합니다. 심장 박동, 근육 수축, 과호흡으로 인해 신체 에너지가 바닥나게 됩니다.<br><br>발작이 잦아들면 우리 몸은 스스로를 보호하기 위해 미주신경 등쪽 복합체가 강제로 에너지를 셧다운시키는 '동결(Freeze) 및 탈진' 상태로 들어갑니다. 손발이 풀리고, 전신에 힘이 빠지며, 극심한 피로감과 졸음이 쏟아지는 것은 지극히 자연스러운 신체 복구 과정입니다.<br><br>해아림한의원에서는 기혈(氣血)을 신속히 보충하는 보중익기탕, 십전대보탕 가감방과 활력 침 치료를 통해 고갈된 부신과 자율신경계 에너지를 채워 일상 복귀를 앞당깁니다.<br><br><a href=\"https://healim-autonomic.com/autonomic-diagnosis\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 정밀검사 알아보기</span><span class=\"text-xs\">&gt;</span></a><br><a href=\"https://healim-autonomic.com/autonomic-treatment\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 한방치료 알아보기</span><span class=\"text-xs\">&gt;</span></a>",
            "summary": "교감신경 폭풍 후 찾아오는 급격한 에너지 고갈과 부교감신경 등쪽 복합체의 탈진 반응"
          },
          {
            "id": "faq-8",
            "category": "양약병행/단약",
            "author": "해아림한의원",
            "date": "2026.08.18",
            "views": 1720,
            "image": "/images/faq/faq_8_tapering.svg",
            "title": "정신과 약(자낙스, 알프라졸람, SSRI)을 먹고 있는데 한약과 병용 투여할 수 있나요? 끊을 수 있나요?",
            "content": "정신과에서 처방받은 신경안정제(자낙스, 리보트릴 등 벤조디아제핀계)나 항우울제(SSRI)를 복용 중인 분들도 해아림한의원의 맞춤 한약과 안전하게 병용하실 수 있습니다. 한약과 양약은 체내 대사 경로가 다르므로 1~2시간 간격을 두고 복용하시면 상호 간섭이나 부작용 없이 안전합니다.<br><br>많은 분들이 약물 내성과 의존성 때문에 양약을 빨리 끊고 싶어 하시지만, 갑자기 임의로 중단하면 극심한 '반동성 불안(Rebound Anxiety)'과 금단 증상이 찾아옵니다.<br><br>치료 초기에는 양약을 유지하면서 한약으로 뇌 신경망의 자생력을 키우고, 발작 횟수와 불안 강도가 현저히 줄어들면 담당의와 상의하여 1/4정씩 단계적으로 줄여나가는 <strong>'테이퍼링(Tapering) 감량 프로그램'</strong>을 진행하여 성공적인 완전 단약을 이끌어냅니다.<br><br><a href=\"https://healim-autonomic.com/autonomic-diagnosis\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 정밀검사 알아보기</span><span class=\"text-xs\">&gt;</span></a><br><a href=\"https://healim-autonomic.com/autonomic-treatment\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 한방치료 알아보기</span><span class=\"text-xs\">&gt;</span></a>",
            "summary": "항불안제·항우울제와 한약의 상호작용 없는 안전한 병용 요법 및 단계적 감량(테이퍼링) 전략"
          },
          {
            "id": "faq-9",
            "category": "경추/두통/어지럼",
            "author": "해아림한의원",
            "date": "2026.08.15",
            "views": 1260,
            "image": "/images/faq/faq_9_cst.svg",
            "title": "목과 어깨가 돌처럼 굳고 뒤통수가 찌릿하며 어지럽습니다. 경추 긴장과 공황장애는 어떤 관계인가요?",
            "content": "만성적인 긴장과 불안 상태에 놓이면 승모근, 견갑거근, 후두하근이 비정상적으로 경직됩니다. 특히 상부 경추(경추 1·2번) 주변에는 뇌간으로 이어지는 추골동맥과 미주신경 등 핵심 신경혈관 다발이 지나갑니다.<br><br>후두부 근육이 돌처럼 뭉치면 뇌로 가는 혈류가 제한되어 뒤통수 찌릿함, 편두통, 붕 뜨는 듯한 어지럼증, 눈 피로감이 동반됩니다. 뇌간의 전정신경핵이 자극을 받아 균형 감각에 이상 신호가 오면, 편도체는 이를 다시 '쓰러질 것 같은 위기'로 인식하여 2차 공황발작을 유발합니다.<br><br>해아림한의원에서는 경추 추나요법과 두개천골요법(CST)을 통해 틀어진 턱관절과 상부 경추를 교정하고, 후두하근을 이완시켜 뇌척수액 순환을 정상화함으로써 목 통증과 어지럼증을 동시에 해결합니다.<br><br><a href=\"https://healim-autonomic.com/autonomic-diagnosis\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 정밀검사 알아보기</span><span class=\"text-xs\">&gt;</span></a><br><a href=\"https://healim-autonomic.com/autonomic-treatment\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 한방치료 알아보기</span><span class=\"text-xs\">&gt;</span></a>",
            "summary": "상부 경추 아탈구 및 후두하근 긴장이 뇌혈류와 뇌간 신경핵을 압박하여 유발하는 심인성 어지럼증"
          },
          {
            "id": "faq-10",
            "category": "편도체/과각성",
            "author": "해아림한의원",
            "date": "2026.08.12",
            "views": 1480,
            "image": "/images/faq/faq_10_sweat.svg",
            "title": "작은 소리에도 깜짝 놀라고 긴장이 풀리지 않습니다. 과민해진 뇌 신경계를 안정시키는 원리는 무엇인가요?",
            "content": "공황장애 환자는 신경계의 민감도(Sensitization)가 극도로 높아져 있어, 전화벨 소리나 문 닫히는 소리, 사람들의 대화 소리에도 심장이 덜컥 내려앉고 깜짝 놀랍니다. 뇌의 브레이크 역할을 하는 '내측 전전두엽'의 기능이 억제되고, 가속 페달인 '편도체'가 항시 켜져 있는 상태이기 때문입니다.<br><br>한의학에서는 이를 심기허(心氣虛)와 담울담요(膽鬱痰擾)로 규정합니다. 해아림한의원에서는 뇌신경 세포의 흥분성 아미노산(글루타메이트) 독성을 줄이고 진정 신경전달물질인 가바(GABA)의 작용을 촉진하는 용골, 모려, 원지, 석창포, 복신 등의 천연 본초를 체질에 맞게 배합합니다.<br><br>이를 통해 약물 의존성 없이 편도체의 과민도를 낮추고 뇌 전두엽의 이성적 조절 기능을 복원합니다.<br><br><a href=\"https://healim-autonomic.com/autonomic-diagnosis\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 정밀검사 알아보기</span><span class=\"text-xs\">&gt;</span></a><br><a href=\"https://healim-autonomic.com/autonomic-treatment\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 한방치료 알아보기</span><span class=\"text-xs\">&gt;</span></a>",
            "summary": "뇌의 공포 기억 소멸 회로(전두엽-편도체 축)를 정상화하는 한의학적 신경안정 기전"
          },
          {
            "id": "faq-11",
            "category": "치료경과/예후",
            "author": "해아림한의원",
            "date": "2026.08.08",
            "views": 1890,
            "image": "/images/faq/faq_11_period.svg",
            "title": "공황장애 치료 기간은 보통 얼마나 걸리나요? 치료 중 호전과 악화가 반복되는데 정상인가요?",
            "content": "공황장애의 평균적인 한방 치료 기간은 유병 기간과 증상 중증도에 따라 보통 <strong>3개월에서 6개월</strong> 정도 소요됩니다.<br><br>치료 과정은 직선형으로 좋아지는 것이 아니라, 파도처럼 오르내리는 톱니바퀴 곡선을 그립니다. 치료 2~4주 차에 발작 빈도가 줄어들다가도 과로하거나 스트레스를 받으면 일시적으로 예기불안이 올라올 수 있습니다. 이는 병이 도진 것이 아니라, 신경계가 새로운 균형점을 찾아가는 자연스러운 회복 과정입니다.<br><br>해아림 3단계 치료 로드맵:<br>1) 1단계(1~4주): 급성 공황발작 소멸 및 신체 증상 안정<br>2) 2단계(5~12주): 외출 회피 극복, 광장공포 완화, 예기불안 소멸<br>3) 3단계(13~24주): 뇌신경 자생력 복원, 약물 감량 완료, 재발 방지 면역 체계 구축<br><br><a href=\"https://healim-autonomic.com/autonomic-diagnosis\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 정밀검사 알아보기</span><span class=\"text-xs\">&gt;</span></a><br><a href=\"https://healim-autonomic.com/autonomic-treatment\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 한방치료 알아보기</span><span class=\"text-xs\">&gt;</span></a>",
            "summary": "공황장애 회복 곡선의 특징과 3단계(급성 완화 - 예기불안 소멸 - 재발 방지) 로드맵"
          },
          {
            "id": "faq-12",
            "category": "생활관리/식이",
            "author": "해아림한의원",
            "date": "2026.08.05",
            "views": 1630,
            "image": "/images/faq/faq_12_lifestyle.svg",
            "title": "커피나 고강도 운동, 사우나가 공황장애에 나쁜가요? 일상생활 수칙이 궁금합니다.",
            "content": "공황장애 치료 중에는 교감신경을 인위적으로 자극하는 요소를 철저히 피해야 합니다.<br><br>1) <strong>카페인(커피, 에너지음료, 녹차)</strong>: 아데노신 수용체를 차단하여 심박수를 급등시키므로 공황발작의 가장 강력한 유발 물질입니다. 치료 중에는 디카페인이나 따뜻한 보리차, 둥굴레차로 대체해야 합니다.<br>2) <strong>고강도 무산소 운동 및 크로스핏</strong>: 젖산 축적과 숨 가쁨이 뇌에 공황 신호로 오인될 수 있습니다. 땀이 가볍게 나는 평지 걷기, 조깅, 스트레칭이 가장 좋습니다.<br>3) <strong>고온 사우나 및 열탕 목욕</strong>: 급격한 혈관 확장 후 탈수와 어지럼증을 유발할 수 있으므로 38~40도의 미온수 반신욕을 15분 이내로 권장합니다.<br><br><a href=\"https://healim-autonomic.com/autonomic-diagnosis\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 정밀검사 알아보기</span><span class=\"text-xs\">&gt;</span></a><br><a href=\"https://healim-autonomic.com/autonomic-treatment\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 한방치료 알아보기</span><span class=\"text-xs\">&gt;</span></a>",
            "summary": "편도체와 교감신경을 자극하여 공황발작을 촉발하는 3대 트리거 차단 가이드"
          },
          {
            "id": "faq-13",
            "category": "시각증상/동공산대",
            "author": "해아림한의원",
            "date": "2026.08.03",
            "views": 1470,
            "image": "/images/faq/faq_13_vision.svg",
            "title": "불안할 때 시야가 뿌옇게 흐려지고 눈이 부시며 초점이 안 맞습니다. 안과 검사는 정상인데 왜 그럴까요?",
            "content": "공황발작이 시작되거나 예기불안이 고조될 때 시야가 터널처럼 좁아지거나(Tunnel Vision), 조명이 비정상적으로 눈부시고, 글씨에 초점이 맞지 않아 흐릿해지는 증상을 흔히 겪습니다.<br><br>이는 위협에 직면했을 때 더 많은 빛을 받아들여 위험을 감지하기 위해 교감신경이 동공을 최대로 산대(확대)시키기 때문입니다. 동공이 열리면 빛 번짐과 눈부심이 심해지고, 모양체근이 긴장하면서 원근 조절이 일시적으로 마비됩니다.<br><br>안구 자체의 질환이 아니라 자율신경계 과흥분에 따른 일시적 신경 반응이므로 시력을 잃거나 실명할 위험은 전혀 없습니다. 신경계가 안정되면 시야는 즉시 본래대로 선명해집니다.<br><br><a href=\"https://healim-autonomic.com/autonomic-diagnosis\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 정밀검사 알아보기</span><span class=\"text-xs\">&gt;</span></a><br><a href=\"https://healim-autonomic.com/autonomic-treatment\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 한방치료 알아보기</span><span class=\"text-xs\">&gt;</span></a>",
            "summary": "투쟁-도피 반응 시 동공 확대 및 모양체근 긴장으로 인한 시각 왜곡의 원리"
          },
          {
            "id": "faq-14",
            "category": "기상병/날씨영향",
            "author": "해아림한의원",
            "date": "2026.08.01",
            "views": 1530,
            "image": "/images/faq/faq_14_weather.svg",
            "title": "비가 오거나 날씨가 흐린 날, 환절기만 되면 가슴 두근거림과 공황 불안이 더 심해집니다. 이유가 있나요?",
            "content": "날씨가 흐리거나 비가 오기 전 저기압 상태가 되면 대기 중 산소 분압이 낮아지고 체내 기압과의 불균형이 발생합니다. 내이(속귀)의 기압 수용 센서가 자극을 받아 전정신경을 거쳐 뇌의 교감신경계를 흥분시킵니다.<br><br>또한 흐린 날에는 햇빛을 받지 못해 기분을 안정시키는 신경전달물질인 '세로토닌' 합성이 급감하고 수면 호르몬인 멜라토닌 리듬이 깨집니다. 이로 인해 날씨 변화에 민감한 공황장애 환자는 심계항진, 편두통, 관절통, 불안감이 증폭되는 기상병(Meteoropathy) 현상을 겪게 됩니다.<br><br>해아림에서는 습담(濕痰)을 배출하고 기운을 북돋우는 오령산, 이진탕 가감방으로 기압 변화에 흔들리지 않는 내성을 길러줍니다.<br><br><a href=\"https://healim-autonomic.com/autonomic-diagnosis\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 정밀검사 알아보기</span><span class=\"text-xs\">&gt;</span></a><br><a href=\"https://healim-autonomic.com/autonomic-treatment\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 한방치료 알아보기</span><span class=\"text-xs\">&gt;</span></a>",
            "summary": "저기압 및 습도 변화가 내이 기압 수용체와 자율신경계에 미치는 영향(기상병과 공황장애)"
          },
          {
            "id": "faq-15",
            "category": "음주/흡연위험",
            "author": "해아림한의원",
            "date": "2026.07.28",
            "views": 1690,
            "image": "/images/faq/faq_15_alcohol.svg",
            "title": "공황장애 치료 중 술이나 담배는 왜 위험한가요? 맥주 한 잔도 마시면 안 되나요?",
            "content": "불안할 때 술을 마시면 알코올이 뇌의 GABA 수용체에 작용하여 일시적으로 마음이 편안해지는 것처럼 느껴집니다. 하지만 수 시간 후 간에서 알코올이 아세트알데하이드로 분해되는 순간, 억제되었던 교감신경이 폭발적으로 튀어 오르는 <strong>'교감신경 반동 폭풍(Rebound Storm)'</strong>이 발생합니다.<br><br>새벽 2~4시에 심장이 터질 듯 뛰며 극심한 야간 공황발작으로 응급실을 찾는 가장 대표적인 원인이 바로 음주입니다. 담배의 니코틴 역시 말초 혈관을 수축시키고 심박수와 혈압을 즉각적으로 끌어올려 공황발작의 스위치를 켭니다.<br><br>따라서 공황장애 완치를 위해서는 치료 기간 동안 금주와 금연이 필수적입니다.<br><br><a href=\"https://healim-autonomic.com/autonomic-diagnosis\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 정밀검사 알아보기</span><span class=\"text-xs\">&gt;</span></a><br><a href=\"https://healim-autonomic.com/autonomic-treatment\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 한방치료 알아보기</span><span class=\"text-xs\">&gt;</span></a>",
            "summary": "알코올 분해 후 나타나는 교감신경 반동 폭풍(Rebound Storm)과 니코틴의 혈관 수축 위험"
          },
          {
            "id": "faq-16",
            "category": "호르몬/생리전증후군",
            "author": "해아림한의원",
            "date": "2026.07.25",
            "views": 1810,
            "image": "/images/faq/faq_16_hormone.svg",
            "title": "생리 전(PMS)이나 배란기, 갱년기만 되면 공황 증상이 거짓말처럼 심해집니다. 호르몬과의 상관관계는?",
            "content": "여성 공황장애 환자의 70% 이상이 생리 주기나 갱년기 호르몬 변화에 따라 증상의 급격한 악화를 경험합니다. 배란 직후와 생리 직전에는 여성 호르몬인 에스트로겐과 프로게스테론이 급격히 곤두박질칩니다.<br><br>에스트로겐은 뇌에서 세로토닌 합성을 촉진하고 신경계를 안정시키는 역할을 하므로, 호르몬이 급감하면 뇌 속 진정 물질이 고갈되어 편도체가 극도로 예민해집니다. 이로 인해 사소한 자극에도 가슴 두근거림, 안면홍조, 감정 기복, 공황발작이 촉발됩니다.<br><br>해아림한의원에서는 간기(肝氣)를 소통시키고 혈(血)을 보충하는 가미소요산, 당귀작약산 처방을 통해 호르몬 급변에 따른 뇌신경 충격을 부드럽게 완충합니다.<br><br><a href=\"https://healim-autonomic.com/autonomic-diagnosis\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 정밀검사 알아보기</span><span class=\"text-xs\">&gt;</span></a><br><a href=\"https://healim-autonomic.com/autonomic-treatment\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 한방치료 알아보기</span><span class=\"text-xs\">&gt;</span></a>",
            "summary": "에스트로겐 급락이 뇌 세로토닌 및 GABA 신경계에 미치는 영향과 여성 공황장애의 특성"
          },
          {
            "id": "faq-17",
            "category": "체중변화/소화기",
            "author": "해아림한의원",
            "date": "2026.07.21",
            "views": 1740,
            "image": "/images/faq/faq_17_weight.svg",
            "title": "공황장애를 앓고 나서 살이 5~10kg 빠지거나 반대로 붓고 찝니다. 체중 변화도 신경 문제인가요?",
            "content": "공황장애 발병 후 입맛이 뚝 떨어져 음식을 전혀 넘기지 못하고 단기간에 5~10kg씩 급격히 살이 빠지는 분들이 있는가 하면, 반대로 몸이 무겁게 붓고 체중이 급증하는 분들이 있습니다.<br><br>만성적인 교감신경 긴장은 소화 효소 분비와 위장 연동 운동을 마비시켜 만성 소화불량과 영양 흡수 장애를 일으킵니다. 반면 만성 스트레스로 부신에서 코르티솔이 과다 분비되면 인슐린 저항성이 증가하고 복부 지방 축적과 수분 저류(부종)가 발생합니다.<br><br>해아림한의원에서는 비위(脾胃) 기운을 북돋우고 신진대사 균형을 회복시키는 사군자탕, 건비환 계열의 처방으로 위장관 흡수력을 정상화하고 건강한 적정 체중으로 회복시킵니다.<br><br><a href=\"https://healim-autonomic.com/autonomic-diagnosis\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 정밀검사 알아보기</span><span class=\"text-xs\">&gt;</span></a><br><a href=\"https://healim-autonomic.com/autonomic-treatment\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 한방치료 알아보기</span><span class=\"text-xs\">&gt;</span></a>",
            "summary": "자율신경 조절 실조가 부신 피질 호르몬(코르티솔)과 위장관 대사에 미치는 영향"
          },
          {
            "id": "faq-18",
            "category": "호전반응/명현",
            "author": "해아림한의원",
            "date": "2026.07.18",
            "views": 1920,
            "image": "/images/faq/faq_18_recovery.svg",
            "title": "한약 복용 후나 침 치료를 받고 나서 몸이 나른하고 졸음이 쏟아집니다. 치료가 잘못된 건가요? 명현반응인가요?",
            "content": "한약 복용 초기나 침 치료 직후 전신이 나른해지고 깊은 잠에 빠져들거나, 일시적으로 기운이 빠지는 느낌을 받는 것은 부작용이 아니라 매우 긍정적인 <strong>'자율신경계 이완 반응(명현 및 호전반응)'</strong>입니다.<br><br>그동안 몸이 항시 교감신경 초긴장 상태(전투 모드)로 버텨오다가, 한약과 침 자극을 통해 미주신경(부교감신경)이 깨어나면서 근육과 신경이 비로소 휴식과 치유 모드로 전환되는 과정입니다.<br><br>수년간 누적되었던 만성 피로와 수면 빚(Sleep Debt)을 신체가 갚아나가는 과정이므로, 무리하지 마시고 충분한 수면과 휴식을 취하시면 3~5일 이내에 몸과 머리가 훨씬 가볍고 상쾌해지는 것을 느끼실 수 있습니다.<br><br><a href=\"https://healim-autonomic.com/autonomic-diagnosis\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 정밀검사 알아보기</span><span class=\"text-xs\">&gt;</span></a><br><a href=\"https://healim-autonomic.com/autonomic-treatment\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline py-0.5\"><span>공황장애 한방치료 알아보기</span><span class=\"text-xs\">&gt;</span></a>",
            "summary": "극도의 긴장 상태에서 부교감신경이 활성화되면서 나타나는 정상적인 신경계 이완 호전반응"
          }
        ];
        window.defaultFaqData = defaultFaqData;

        var defaultReviewsData = [
          {
            "id": "rev-1-1788860000000",
            "category": "급성 공황발작 & 응급실",
            "title": "응급실만 세 번 갔는데, 맞춤 한약과 이완 훈련으로 완전히 회복되었습니다",
            "content": "어느 날 갑자기 가슴이 쿵쾅거리고 숨이 가빠지면서 이러다 죽는 게 아닌가 싶어 119를 부르고 응급실로 실려 갔습니다. 심전도, 피검사, 폐 엑스레이 다 찍어도 이상이 없다고 하는데도, 언제 또 발작이 올지 모른다는 극심한 예기불안 때문에 지하철도 못 타고 외출도 못 했습니다. 해아림한의원에서 공황장애 진단을 받고 과흥분된 심신을 안정시키는 1:1 맞춤 한약과 뇌신경 이완 침 치료, 자율신경 훈련을 병행한 지 2개월 만에 발작이 멈추었고, 지금은 아무 불안 없이 일상생활과 출퇴근을 편안하게 하고 있습니다.",
            "author": "30대 직장인 김OO 님",
            "date": "2026.09.10",
            "views": 1900,
            "image": "/images/reviews/review_1.jpg"
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
            "id": "rev-6-1788810000000",
            "category": "과호흡 & 긴장성 두통",
            "title": "과호흡으로 손발이 굳고 호흡곤란 오던 공황 증상이 완전히 사라졌습니다",
            "content": "회의를 하거나 중요한 발표를 앞두면 갑자기 숨이 가빠지면서 과호흡이 오고, 손발 끝이 찌릿찌릿 저리며 마비되듯 굳어버렸습니다. 뒷목과 어깨가 돌처럼 뭉치고 찌릿한 긴장성 두통과 어지럼증까지 동반되어 사회생활이 불가능했습니다. 해아림에서 과호흡 응급 4-6 호흡법 교정과 함께 뇌신경 순환을 개선하는 두개천골요법, 맞춤 한약을 병행하여 3개월 만에 모든 증상이 완치되었습니다.",
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
            "id": "rev-add-1-1773446400000",
            "category": "신경안정제 단약",
            "title": "자낙스를 3년 복용하며 끊지 못했는데, 한약 병행 후 부작용 없이 단약 성공했습니다",
            "content": "신경안정제를 안 먹으면 하루도 버티지 못하고 끊으려 하면 반동성 불안이 더 심해져 좌절했었습니다. 해아림에서 뇌신경 자생력을 키우는 한약 치료를 병행하며 원장님 지도하에 3개월간 단계적으로 감량하여 완전히 약을 끊었습니다.",
            "author": "30대 디자이너 송OO 님",
            "date": "2024.11.03",
            "views": 2020,
            "image": "/images/reviews/review_1.jpg"
          },
          {
            "id": "rev-auto-hist-2-1771070460000",
            "category": "심인성 어지럼증",
            "title": "땅이 울렁거리고 붕 떠 있는 어지럼증, 귀 검사는 정상이었는데 한방 치료로 완치",
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
            "title": "불안할 때마다 등줄기에 식은땀이 비 오듯 쏟아지고 손발이 얼던 증상이 완치되었습니다",
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
            "title": "어둡고 밀폐된 영화관이나 공연장에 가면 숨 막히던 광장공포증 완치",
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
            "title": "공무원 시험장에서 시험지 받자마자 눈앞이 캄캄해지던 공황, 완치 후 합격했습니다",
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
            "content": "터널에 들어가면 전방 시야가 좁아지고 숨이 막혀 비상등을 켜고 멈춘 적이 있었습니다. 해아림에서 3단계 한방 치료와 인지행동 지도를 받으며 터널 공포를 완벽히 극복했습니다.",
            "author": "30대 연구원 천OO 님",
            "date": "2019.12.24",
            "views": 2335,
            "image": "/images/reviews/review_1.jpg"
          },
          {
            "id": "rev-auto-hist-11-1666095000000",
            "category": "고속버스 공황",
            "title": "고속도로 휴게소까지 못 버틸까 봐 고속버스를 못 타던 공황장애 완치",
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
            "category": "호흡곤란 완치",
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
            "content": "약물 의존성이 심해져 가방에 알약이 없으면 불안이 폭발했습니다. 해아림에서 뇌의 자생 조절력을 키우는 체질 한약을 복용하며 3개월 만에 부작용 없이 단약에 성공했습니다.",
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
            "title": "부정맥인 줄 알고 24시간 홀터 검사까지 받았던 공황장애, 한방으로 완치",
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
            "category": "이인증 완치",
            "title": "유리벽 속에 갇힌 것 같던 비현실감과 공황불안, 두개천골요법으로 완치",
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
            "category": "터널 공포증 완치",
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
            "title": "아침마다 눈앞이 캄캄해지고 쓰러질 것 같던 심인성 기립 어지럼증 완치",
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
            "category": "수면 공황 완치",
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
            "category": "발표 공황 완치",
            "title": "프레젠테이션 때마다 목소리가 잠기고 숨차던 증상, 한방 치료로 완치",
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
            "title": "얼굴은 불나듯 뜨겁고 발은 얼음처럼 차갑던 공황 체온 실조, 수승화강 완치",
            "content": "상열감으로 얼굴이 붉어지고 발은 시려 잠을 못 잤는데, 해아림에서 수승화강 한약과 뜸 치료를 받고 몸의 온도 균형이 완벽히 맞춰졌습니다.",
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
            "category": "고속도로 운전 완치",
            "title": "고속도로 진입로만 보면 심장이 터질 것 같던 운전 공황, 완벽하게 극복",
            "content": "국도로만 돌아다니느라 출장이 힘들었는데 해아림 치료 후 고속도로를 시속 100km로 달려도 가슴이 편안합니다.",
            "author": "40대 자영업 범OO 님",
            "date": "2013.01.11",
            "views": 2785,
            "image": "/images/reviews/review_1.jpg"
          },
          {
            "id": "rev-clinical-14-1376870400000",
            "category": "초기 공황 완치",
            "title": "첫 공황발작 후 바로 해아림을 찾아 2개월 치료로 깨끗이 완치되었습니다",
            "content": "응급실에서 이상 없다는 말을 듣자마자 해아림을 찾아 조기에 치료받은 덕분에 만성 공황으로 가지 않고 완치되었습니다.",
            "author": "30대 연구원 포OO 님",
            "date": "2012.10.19",
            "views": 2800,
            "image": "/images/reviews/review_2.jpg"
          },
          {
            "id": "rev-auto-hist-26-1353068700000",
            "category": "치과 체어 공황 완치",
            "title": "치과 마취 주사 맞고 기절할 뻔했던 트라우마, 한방 치료로 극복하고 임플란트 완료",
            "content": "치과 치료 공포로 치아가 다 망가졌었는데 해아림에서 뇌신경 안정 치료를 받고 치과 공포를 이겨내 임플란트 수술을 잘 마쳤습니다.",
            "author": "60대 은퇴자 선OO 님",
            "date": "2012.07.26",
            "views": 2815,
            "image": "/images/reviews/review_2.jpg"
          },
          {
            "id": "rev-auto-hist-27-1337689560000",
            "category": "야간 심계항진 완치",
            "title": "새벽마다 심장마비 공포로 잠 못 이루던 날들, 이제 아침까지 꿀잠 잡니다",
            "content": "심장이 요동치며 깨어나던 야간 공황이 완전히 사라졌습니다. 해아림 원장님의 세심한 처방 덕분에 밤이 더 이상 두렵지 않습니다.",
            "author": "40대 주부 호OO 님",
            "date": "2012.05.03",
            "views": 2830,
            "image": "/images/reviews/review_3.jpg"
          },
          {
            "id": "rev-add-17-1337299200000",
            "category": "만성 공황 완치",
            "title": "10년 묵은 만성 공황장애, 해아림에서 뇌신경 자생력 키우고 새 삶을 찾았습니다",
            "content": "10년간 양약에만 의존하며 희망을 잃었었는데 해아림한의원에서 6개월간 체계적인 한방 통합 치료를 받고 마침내 완전한 자유를 얻었습니다.",
            "author": "50대 직장인 명OO 님",
            "date": "2012.02.08",
            "views": 2845,
            "image": "/images/reviews/review_5.jpg"
          },
          {
            "id": "rev-clinical-15-1322438400000",
            "category": "일상 회복 & 완치",
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
            "category": "생활 요법",
            "author": "해아림TV 알쓸한상",
            "date": "2026.08.17",
            "views": 17800,
            "videoEmbed": "https://www.youtube-nocookie.com/embed/51rIQ1T5dIU",
            "thumb": "https://img.youtube.com/vi/51rIQ1T5dIU/maxresdefault.jpg",
            "title": "공황장애 있는 사람이 절대 하면 안 되는 행동 3가지",
            "content": "교감신경을 극도로 자극하는 카페인·자극적 음식, 과호흡 참기, 공포 상황에서의 즉각적 도피 등 공황장애 환자가 일상에서 반드시 피해야 할 핵심 행동 3가지."
          },
          {
            "id": "yt-2",
            "category": "감별 진단",
            "author": "해아림TV 알쓸한상",
            "date": "2026.08.16",
            "views": 15200,
            "videoEmbed": "https://www.youtube-nocookie.com/embed/9X4PapgvBWE",
            "thumb": "https://img.youtube.com/vi/9X4PapgvBWE/maxresdefault.jpg",
            "title": "공황발작 vs 단순 불안: 13가지 진단 기준과 자가진단법",
            "content": "심계항진, 호흡곤란, 이인증, 죽을 것 같은 공포 등 공황발작 13가지 핵심 증상 진단 기준과 한의학적 체질 감별."
          },
          {
            "id": "yt-3",
            "category": "뇌과학 분석",
            "author": "해아림TV 알쓸한상",
            "date": "2026.08.13",
            "views": 14100,
            "videoEmbed": "https://www.youtube-nocookie.com/embed/1Bb6dIYtgvs",
            "thumb": "https://img.youtube.com/vi/1Bb6dIYtgvs/maxresdefault.jpg",
            "title": "공황장애 뇌과학적 해석 A Neuroscience Perspective on Panic Disorder",
            "content": "뇌 편도체의 과각성과 전전두엽 조절력 저하가 어떻게 말초 교감신경계를 폭주시키는지 뇌과학적 관점에서 알기 쉽게 풀어드립니다."
          },
          {
            "id": "yt-4",
            "category": "치료 관리",
            "author": "해아림TV 알쓸한상",
            "date": "2026.08.13",
            "views": 12900,
            "videoEmbed": "https://www.youtube-nocookie.com/embed/AqyvkiyRs6w",
            "thumb": "https://img.youtube.com/vi/AqyvkiyRs6w/maxresdefault.jpg",
            "title": "공황장애 극복을 위해 매일 기록해야 하는 '공황 불안 일지' 작성법",
            "content": "발작 유발 상황, 신체 감각 왜곡, 자동적 부정적 사고를 기록하여 뇌의 공포 회로를 재구성하는 인지행동치료 일지 작성 가이드."
          },
          {
            "id": "yt-5",
            "category": "질환 연관성",
            "author": "해아림TV 알쓸한상",
            "date": "2026.08.11",
            "views": 19400,
            "videoEmbed": "https://www.youtube-nocookie.com/embed/xyoF0JT3-vI",
            "thumb": "https://img.youtube.com/vi/xyoF0JT3-vI/maxresdefault.jpg",
            "title": "공황장애와 자율신경실조증, 예기불안의 상관관계: 핵심은 편도체와 교감신경!",
            "content": "신체화 증상과 정신적 불안이 결합되는 메커니즘과 뇌 자율신경 통합 조절의 중요성."
          },
          {
            "id": "yt-6",
            "category": "자가 진단",
            "author": "해아림TV 알쓸한상",
            "date": "2026.08.10",
            "views": 21800,
            "videoEmbed": "https://www.youtube-nocookie.com/embed/hiI_EVVdRXE",
            "thumb": "https://img.youtube.com/vi/hiI_EVVdRXE/maxresdefault.jpg",
            "title": "응급실 서너 번 갔는데도 이상 없다는 증상, 공황장애일까? 체크리스트",
            "content": "심장마비 공포, 과호흡, 질식감 등으로 응급실을 전전하는 환자분들을 위한 3대 핵심 감별 자가진단."
          },
          {
            "id": "yt-7",
            "category": "원인 분석",
            "author": "해아림TV 알쓸한상",
            "date": "2026.08.10",
            "views": 16700,
            "videoEmbed": "https://www.youtube-nocookie.com/embed/-Y_ITeHHpCo",
            "thumb": "https://img.youtube.com/vi/-Y_ITeHHpCo/maxresdefault.jpg",
            "title": "공황발작의 주원인으로 작용하는 것: 무엇을 알고 피해야 하나?",
            "content": "심리적 트라우마, 누적된 신체 피로, 경추 긴장, 카페인 등 공황발작의 방아쇠가 되는 요인 분석."
          },
          {
            "id": "yt-8",
            "category": "초기 신호",
            "author": "해아림TV 알쓸한상",
            "date": "2026.08.09",
            "views": 13500,
            "videoEmbed": "https://www.youtube-nocookie.com/embed/Q-WgwlMeqhY",
            "thumb": "https://img.youtube.com/vi/Q-WgwlMeqhY/maxresdefault.jpg",
            "title": "어떤 증상을 보일 때 공황장애를 의심해봐야 할까요?",
            "content": "가슴 답답함, 목 이물감(매핵기), 멍한 느낌, 이유 없는 식은땀 등 공황장애 초기 전조증상 완벽 정리."
          },
          {
            "id": "yt-9",
            "category": "증상 스펙트럼",
            "author": "해아림TV 알쓸한상",
            "date": "2026.08.06",
            "views": 11800,
            "videoEmbed": "https://www.youtube-nocookie.com/embed/Qizj3R5S0_k",
            "thumb": "https://img.youtube.com/vi/Qizj3R5S0_k/maxresdefault.jpg",
            "title": "여러 증상의 혼돈 스펙트럼 = 공황장애 신체화 증상 완벽 정리",
            "content": "두근거림부터 어지럼증, 과호흡, 위장 경련, 감각 이상까지 전신에 나타나는 공황장애의 다채로운 양상."
          },
          {
            "id": "yt-10",
            "category": "원인 규명",
            "author": "해아림TV 알쓸한상",
            "date": "2026.08.05",
            "views": 18200,
            "videoEmbed": "https://www.youtube-nocookie.com/embed/YbSiowFH-hM",
            "thumb": "https://img.youtube.com/vi/YbSiowFH-hM/maxresdefault.jpg",
            "title": "이유 없는 두근거림, 답답함, 어지럼, 멍함의 실체: 공황장애 뇌신경 경보",
            "content": "내 몸에서 울리는 비상경보가 왜 멈추지 않는지 그 생리학적 원인과 한방 치료의 원리."
          },
          {
            "id": "yt-11",
            "category": "임상 통계",
            "author": "해아림TV 알쓸한상",
            "date": "2026.08.02",
            "views": 24500,
            "videoEmbed": "https://www.youtube-nocookie.com/embed/heUp0b5CSZA",
            "thumb": "https://img.youtube.com/vi/heUp0b5CSZA/maxresdefault.jpg",
            "title": "죽을 것 같은 위기감, 왜 검사는 정상일까요? 수천 명 환자에게서 찾은 공통 패턴",
            "content": "기질적 검사의 한계와 기능적 뇌파·자율신경 검사의 필요성, 환자들이 겪는 공통 심리 패턴."
          },
          {
            "id": "yt-12",
            "category": "응급 호흡법",
            "author": "해아림TV 알쓸한상",
            "date": "2026.07.20",
            "views": 16300,
            "videoEmbed": "https://www.youtube-nocookie.com/embed/1u_dYhD6VvE",
            "thumb": "https://img.youtube.com/vi/1u_dYhD6VvE/maxresdefault.jpg",
            "title": "3분이면 충분해요! 공황발작을 빠르게 가라앉히는 실전 4-6 복식호흡법",
            "content": "급성 과호흡과 심박수 폭주를 즉각 진정시키는 횡격막 호흡 실전 가이드와 이완 테크닉."
          },
          {
            "id": "yt-13",
            "category": "감별 진단",
            "author": "해아림TV 알쓸한상",
            "date": "2026.07.05",
            "views": 11900,
            "videoEmbed": "https://www.youtube-nocookie.com/embed/HOuvS8g6Mo4",
            "thumb": "https://img.youtube.com/vi/HOuvS8g6Mo4/maxresdefault.jpg",
            "title": "어지럼증과 공황장애 감별법: 기립성 어지럼 vs 심인성 과호흡 현훈",
            "content": "이비인후과 이석증, 전정신경염과 공황장애로 인한 어지럼증의 의학적 감별 포인트."
          },
          {
            "id": "yt-14",
            "category": "한방 기전",
            "author": "해아림TV 알쓸한상",
            "date": "2026.06.20",
            "views": 14700,
            "videoEmbed": "https://www.youtube-nocookie.com/embed/3kok8fUIflU",
            "thumb": "https://img.youtube.com/vi/3kok8fUIflU/maxresdefault.jpg",
            "title": "두개천골요법(CST)이 미주신경 이완과 뇌척수액 순환을 개선하는 한의학적 기전",
            "content": "두개골과 천골의 미세 리듬을 교정하여 과흥분된 뇌간을 안정시키고 호흡을 편안하게 만드는 치료 원리."
          },
          {
            "id": "yt-15",
            "category": "뇌신경망",
            "author": "해아림TV 알쓸한상",
            "date": "2026.06.10",
            "views": 13800,
            "videoEmbed": "https://www.youtube-nocookie.com/embed/nnwVnIv7mfc",
            "thumb": "https://img.youtube.com/vi/nnwVnIv7mfc/maxresdefault.jpg",
            "title": "신경안정제만으로 낫지 않는 진짜 이유! 고장 난 편도체와 브레이크 신경망의 비밀",
            "content": "약물로 일시적 진정만 시키는 한계에서 벗어나 뇌 신경망 본래의 조절 복원력을 재건하는 치료 전략."
          }
        ];

        var defaultColumnsData = [
          {
            "id": "col-auto-23-1788884200000",
            "colIndex": 23,
            "category": "칼럼",
            "title": "응급실을 찾아도 '이상 없다'는 가슴 두근거림과 호흡곤란, 뇌 편도체의 비상경보 오작동입니다",
            "summary": "생명에 위협이 없음에도 죽을 것 같은 공포를 느끼는 급성 공황발작의 신경학적 발생 기전과 한의학적 해결책",
            "content": "\"숨이 턱 끝까지 차오르고 심장이 터질 것처럼 뛰어 119를 타고 응급실로 갔는데, 심전도와 피검사는 정상이라며 신경안정제 한 알만 주고 가라고 합니다. 환자는 죽을 것 같은 공포를 느끼는데 왜 검사에는 안 나올까요?\"\n\n응급실을 찾는 급성 공황발작 환자분들이 가장 흔하게 겪는 당혹스러운 상황입니다. 일반 병원 응급 검사는 심근경색, 뇌출혈, 폐색전증 같은 '기질적 장기 파열이나 조직 괴사'를 찾는 검사입니다. 반면 공황장애는 장기 자체의 파손이 아니라, 뇌의 공포·불안 조절 중추인 편도체(Amygdala)가 오작동하여 교감신경계를 급격히 폭주시킨 '기능적 조절 시스템의 에러'입니다.\n\n위험이 전혀 없는 일상 상황에서 뇌가 '호랑이를 만났다'고 오인하여 전신에 아드레날린을 쏟아붓는 것입니다. 한의학에서는 이를 심포(心包)의 화(火)와 심담허겁(心膽虛怯)으로 변증합니다. 해아림한의원에서는 뇌파와 HRV 검사로 편도체의 과흥분도를 객관적으로 진단하고, 심장열을 식히고 뇌신경을 안정시키는 맞춤 한약과 두개천골요법(CST)을 통해 오작동한 비상경보 시스템을 근본적으로 리셋합니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2026.09.10",
            "image": "/images/columns/column_23_bruxism_tmj.svg",
            "views": 1800
          },
          {
            "id": "col-auto-22-1788884100000",
            "colIndex": 22,
            "category": "칼럼",
            "title": "신경안정제(자낙스·알프라졸람)만으로 공황장애가 근본 치료되지 않는 신경학적 이유",
            "summary": "일시적 신경 억제제의 한계와 내성, 금단 증상을 넘어 뇌 신경망 본래의 조절 자생력을 기르는 한방 치료",
            "content": "공황발작이 오면 대부분 신경정신과에서 벤조디아제핀계 신경안정제(자낙스, 리보트릴 등)나 항우울제(SSRI)를 처방받습니다. 약을 먹으면 30분 만에 불안이 가라앉아 마법 같은 안도감을 느끼지만, 복용 기간이 수개월에서 수년으로 길어지면 약효 지속 시간이 점점 짧아지고 용량을 늘려야 하는 '내성'과 약을 안 먹으면 발작이 더 심해지는 '반동성 불안'을 겪게 됩니다.\n\n신경안정제는 뇌의 가바(GABA) 수용체에 작용하여 뇌를 인위적으로 잠재우는 일시적 진통제일 뿐, 편도체의 과민도 자체를 낮추거나 뇌의 자생 조절력을 복원해주지 못하기 때문입니다. 마치 화재경보기가 울릴 때 건전지만 빼놓고 화재 원인은 방치하는 것과 같습니다.\n\n해아림한의원의 한방신경정신과 치료는 양약을 강제로 끊게 하지 않습니다. 양약을 안전하게 병용하면서 뇌 신경세포의 자연 치유력을 높이는 체질 한약과 약침 치료를 통해 발작 빈도와 강도를 줄이고, 1/4정씩 단계적으로 줄여나가는 '테이퍼링(Tapering) 감량 프로그램'으로 완벽한 자립 완치를 이끌어냅니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2026.01.07",
            "image": "/images/columns/column_22_pelvic_pain.svg",
            "views": 1825
          },
          {
            "id": "col-auto-21-1788883500000",
            "colIndex": 21,
            "category": "칼럼",
            "title": "운전 중 고속도로와 터널이 지옥처럼 느껴지는 운전 공황(광장공포증) 극복의 한의학적 기전",
            "summary": "탈출 불가능 장소에 대한 편도체의 조건 반사적 공포와 점진적 탈감작, 두개천골요법(CST)을 통한 뇌간 이완",
            "content": "운전 중 고속도로에 진입하거나 긴 터널 안, 꽉 막힌 교량 위에 갇히면 갑자기 숨이 가빠지고 핸들을 잡은 손이 떨리며 차를 버리고 도망치고 싶은 충동을 느끼는 분들이 많습니다. 바로 광장공포증을 동반한 '운전 공황장애'입니다.\n\n운전 공황 환자분들은 '내가 운전하다 기절해서 대형 사고를 내면 어쩌지?'라는 파국적 공포에 사로잡힙니다. 이는 과거 한 번 겪었던 운전 중의 식은땀이나 두근거림 경험이 뇌의 해마에 강렬한 트라우마로 각인되어, 유사한 공간에 진입하기만 해도 편도체가 즉각적인 비상경보를 발령하기 때문입니다.\n\n이런 회피 반응을 방치하면 운전뿐 아니라 지하철, 비행기까지 행동반경이 점점 좁아집니다. 해아림한의원에서는 과긴장된 뇌간과 척수막을 이완시키는 두개천골요법(CST)과 심담(心膽)을 보강하는 온담탕 가감방을 처방하고, 점진적인 인지 노출 기법을 병행하여 공포 기억 회로를 안전하게 탈감작시킵니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2025.05.06",
            "image": "/images/columns/column_21_olfactory_gustatory.svg",
            "views": 1850
          },
          {
            "id": "col-auto-20-1788882000000",
            "colIndex": 20,
            "category": "칼럼",
            "title": "지하철·엘리베이터 갇힘 공포와 질식감: 회피 행동이 공황장애를 만성화시키는 악순환의 고리",
            "summary": "안전 추구 행동과 장소 회피가 예기불안을 증폭시키는 뇌과학적 원리와 인지행동 치료 처방",
            "content": "지하철 문이 닫히는 순간 심장이 조여오고, 사람이 꽉 찬 엘리베이터에서는 숨이 턱 막혀 계단으로만 다니는 광장공포증은 공황장애 환자의 60% 이상에서 나타납니다. 출퇴근길 지하철을 타지 못해 택시를 타거나 직장을 휴직하는 등 사회적 고립을 부릅니다.\n\n공포 상황을 피하면 당장은 안도감이 들지만, 뇌는 '아, 피해서 살아남았구나! 저 장소는 진짜 위험한 곳이다'라고 잘못 학습하게 됩니다. 이를 심리학에서는 '부적 강화(Negative Reinforcement)'라고 부르며, 회피하면 할수록 예기불안은 눈덩이처럼 커져 마침내 집 밖으로 나가지 못하는 지경에 이릅니다.\n\n치료의 핵심은 '그 장소에 있어도 심장이 터지거나 질식하지 않는다'는 것을 뇌 신경망이 직접 경험하게 만드는 것입니다. 해아림한의원에서는 뇌신경 안정을 돕는 한약 투여로 신체 민감도를 낮춘 상태에서 체계적 탈감작 치료를 단계별로 진행하여 평온한 일상 외출을 되찾아드립니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2024.09.02",
            "image": "/images/columns/column_20_metabolism.svg",
            "views": 1875
          },
          {
            "id": "col-auto-19-1788880000000",
            "colIndex": 19,
            "category": "칼럼",
            "title": "숨이 턱 끝까지 차오르고 손발이 마비되는 급성 과호흡 증후군, 3분 응급 4-6 복식호흡 처방",
            "summary": "호흡성 알칼리증으로 인한 뇌혈관 수축과 손발 경련의 원리 및 이산화탄소 분압을 즉각 회복시키는 호흡법",
            "content": "공황발작이 시작될 때 많은 분들이 산소가 부족하다고 착각하여 숨을 헐떡이며 얕고 빠르게 몰아쉽니다. 이것이 바로 '과호흡 증후군'입니다. 하지만 실제로는 정반대로, 지나친 과호흡 때문에 혈액 속의 이산화탄소(CO2)가 너무 많이 빠져나가 혈액이 알칼리성으로 변하는 '호흡성 알칼리증'이 발생한 것입니다.\n\n혈액이 알칼리화되면 뇌혈관이 수축하여 어지럼증과 시야 흐림이 생기고, 체내 유리 칼슘이 단백질과 결합하여 손발 끝이 찌릿찌릿 저리며 꼬꼬발처럼 뒤틀리는 근육 강직(테타니)이 일어납니다. 환자는 '숨을 못 쉬어 손발이 마비되어 죽는다'고 공포에 떨지만, 실제로는 숨을 너무 많이 쉬어서 생긴 현상입니다.\n\n이때 가장 강력한 응급 처방은 **'4-6 복식호흡법'**입니다. 한 손을 아랫배에 얹고 코로 4초간 천천히 배를 부풀리며 들이마신 뒤, 입술을 촛불 끄듯 오므리고 6초간 천천히 길게 내쉽니다. 3분만 침착하게 반복하면 체내 이산화탄소 분압이 정상으로 돌아오며 손발 저림과 호흡곤란이 거짓말처럼 진정됩니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2023.12.31",
            "image": "/images/columns/column_19_burnout_vagus.svg",
            "views": 1900
          },
          {
            "id": "col-auto-18-1788834200000",
            "colIndex": 18,
            "category": "칼럼",
            "title": "자다가 심장이 터질 듯 요동치며 깨어나는 야간 공황발작(Nocturnal Panic)의 수면 신경학",
            "summary": "깊은 비렘(NREM) 수면 중 신체 감각을 질식 위기로 오인하는 뇌의 오작동과 천왕보심단 가감방",
            "content": "낮에는 멀쩡하다가 밤에 잠든 지 1~2시간 만에 갑자기 숨이 턱 막히고 심장이 요동치며 식은땀을 흘리며 깨어나는 분들이 있습니다. 악몽을 꿔서 깬 것이 아니며, 의식이 돌아오기도 전에 이미 심장이 분당 140회 이상 뛰고 있어 극도의 죽음 공포를 겪습니다. 이를 '야간 공황발작(Nocturnal Panic)'이라고 부릅니다.\n\n수면 단계 중 가장 깊은 델타파 수면(NREM 3~4단계)에서 렘수면으로 전환될 때, 호흡수와 심박수가 자연스럽게 느려집니다. 건강한 사람에게는 평온한 이완이지만, 편도체 감각 필터가 고장 난 공황 환자의 뇌는 이 자연스러운 느림을 '기도 폐쇄 및 심정지 위기'로 착각하여 폭발적인 아드레날린을 쏟아내는 것입니다.\n\n이 증상이 반복되면 잠드는 것 자체가 공포가 되어 중증 불면증으로 악화됩니다. 해아림한의원에서는 수면 중 심장과 뇌의 과열을 식혀주는 천왕보심단, 산조인탕 가감방과 자율신경 조절 침 치료로 수면 중 불필요한 비상경보 발령을 원천 차단합니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2023.04.29",
            "image": "/images/columns/column_18_gut_brain_axis.svg",
            "views": 1925
          },
          {
            "id": "col-auto-17-1788824200000",
            "colIndex": 17,
            "category": "칼럼",
            "title": "아침에 눈뜰 때마다 가슴이 답답하고 불안이 치솟는 이유: 코르티솔 각성 반응(CAR)의 오류",
            "summary": "기상 직전 부신 피질 호르몬 서지와 교감신경 급반동을 완충하는 뇌신경계 안정 한방 치료",
            "content": "하루 중 유독 '아침에 눈을 뜰 때' 가장 가슴이 답답하고 심장이 쿵쾅거리며 오늘 하루를 어떻게 버티나 하는 불안감에 짓눌리는 분들이 많습니다. 오후가 되면 증상이 다소 가라앉는데 왜 유독 아침에만 지옥 같을까요?\n\n인체는 기상 30분 전부터 잠에서 깨어 활동을 시작할 수 있도록 부신에서 스트레스 대항 호르몬인 코르티솔 분비를 50~75% 급증시킵니다. 이를 '코르티솔 각성 반응(CAR: Cortisol Awakening Response)'이라고 합니다. 이로 인해 심박수와 혈압이 자연스럽게 상승합니다.\n\n하지만 뇌신경 조절력이 소진된 공황 환자는 이 정상적인 기상 생리 반응을 '또 공황발작이 시작되려는 위험 신호'로 오해하여 급성 예기불안을 폭발시킵니다. 해아림한의원에서는 과각성된 시상하부-뇌하수체-부신(HPA) 축의 리듬을 조율하고 기혈을 안정시키는 한약 치료를 통해 아침 기상 시 가슴을 편안하고 머리를 맑게 열어드립니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2022.08.26",
            "image": "/images/columns/column_17_alcohol.svg",
            "views": 1950
          },
          {
            "id": "col-auto-16-1788814200000",
            "colIndex": 16,
            "category": "칼럼",
            "title": "목에 알사탕이나 가래가 걸린 듯 답답하고 침 삼키기 힘든 매핵기(梅核氣)와 공황 호흡 불안",
            "summary": "극심한 긴장이 부르는 식도 괄약근 및 인후부 근육의 경련성 수축과 반하후박탕 가감방",
            "content": "이비인후과 내시경 검사를 받아도 후두나 식도에 아무런 염증이나 혹이 없는데, 목구멍에 매화 씨앗이나 알사탕, 가래가 딱 걸려 있는 것 같아 뱉어도 안 나오고 삼켜도 넘어가지 않는 증상을 한의학에서 '매핵기(梅核氣)'라고 합니다.\n\n매핵기는 공황장애 환자에게서 매우 흔하게 동반되는 신체화 증상입니다. 극도의 정서적 스트레스와 억울된 감정이 쌓이면(간기울결, 肝氣鬱結), 교감신경 과흥분으로 인해 식도 상부 괄약근과 인후부 근육이 만성적으로 수축하여 경련을 일으킵니다.\n\n환자는 목에 뭔가 걸려 기도가 막혀 숨이 안 쉬어진다고 착각하여 헛기침을 반복하고 공황발작으로 이어지기 쉽습니다. 해아림한의원에서는 뭉친 기운을 풀어주고 식도 인후부 점막의 신경 긴장을 부드럽게 이완시키는 반하후박탕, 시호소간산 처방과 침 치료로 목의 이물감을 시원하게 해소해 드립니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2021.12.23",
            "image": "/images/columns/column_16_hormone.svg",
            "views": 1975
          },
          {
            "id": "col-auto-15-1788804200000",
            "colIndex": 15,
            "category": "칼럼",
            "title": "내가 내가 아닌 것 같고 세상이 영화 세트장 같은 이인증(Depersonalization)과 비현실감의 실체",
            "summary": "극단적 공포 시 뇌가 고통을 차단하기 위해 유발하는 신경학적 해리 방어 기제와 현실 감각 회복법",
            "content": "공황발작이 오기 직전이나 발작 도중 자신의 손발이 내 것 같지 않고 거울을 봐도 낯선 사람처럼 느껴지는 '이인증(Depersonalization)', 그리고 주변 사람들이 로봇 같고 세상이 유리벽 너머의 영화 세트장처럼 뿌옇게 느껴지는 '비현실감(Derealization)'을 경험하는 분들이 많습니다. 환자분들은 '내가 드디어 미쳐버렸거나 뇌 질환이 생긴 것은 아닐까' 하는 극심한 공포에 휩싸입니다.\n\n그러나 이것은 조현병이나 뇌 질환이 아닙니다. 극단적인 공포와 통증이 신경계를 강타할 때, 뇌가 스스로를 보호하기 위해 감각 처리 회로의 연결을 일시적으로 차단하는 '신경학적 해리(Dissociation) 방어 기제'입니다. 마치 컴퓨터에 과부하가 걸리면 안전모드로 전환되는 것과 같습니다.\n\n해아림한의원에서는 대뇌 피질의 감각 인지 조율을 돕는 두개천골요법(CST)과 뇌혈류 순환 한약을 통해 멍하고 흐릿한 감각을 맑게 걷어내고 온전한 현실 감각을 회복시킵니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2021.04.21",
            "image": "/images/columns/column_15_weather.svg",
            "views": 2000
          },
          {
            "id": "col-auto-14-1788794200000",
            "colIndex": 14,
            "category": "칼럼",
            "title": "커피 한 잔에 가슴이 쿵쾅거리고 손이 떨리는 카페인 불내성: 편도체 수용체 과민을 살펴야 합니다",
            "summary": "아데노신 수용체 차단과 아드레날린 분비가 공황 환자의 신경망에 미치는 치명적 영향과 식이요법",
            "content": "예전에는 하루에 커피 서너 잔을 마셔도 멀쩡했는데, 어느 날부터 아메리카노 반 잔만 마셔도 심장이 덜컥 내려앉고 가슴이 미친 듯 뛰며 손이 덜덜 떨리는 분들이 있습니다. '카페인 불내성'이 찾아온 것입니다.\n\n카페인은 뇌의 피로 회복 스위치인 '아데노신 수용체'를 강제로 차단하여 부신에서 에피네프린(아드레날린)과 노르에피네프린을 대량 분비시킵니다. 건강한 사람에게는 약간의 각성 효과로 끝나지만, 편도체가 예민해진 공황장애 환자에게는 공황발작의 방아쇠를 당기는 뇌관 역할을 합니다.\n\n공황장애를 앓고 있다면 치료 기간 동안 커피, 에너지음료, 고카페인 녹차, 홍차는 철저히 중단해야 합니다. 한의학적으로 카페인으로 소진된 진액(津液)과 음혈(陰血)을 보충하고 심장의 열을 내리는 생맥산, 천문동 처방을 통해 카페인 없이도 맑고 활력 있는 신경계를 되찾아드립니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2020.08.18",
            "image": "/images/columns/column_14_recovery_roadmap.svg",
            "views": 2025
          },
          {
            "id": "col-auto-13-1788784200000",
            "colIndex": 13,
            "category": "칼럼",
            "title": "돌처럼 굳은 목·어깨와 뒤통수 찌릿한 두통: 상부 경추 후두하근 긴장이 부르는 뇌혈류 장애",
            "summary": "경추 1·2번 아탈구와 뇌척수액 순환 장애가 전정신경핵을 자극하여 유발하는 어지럼과 긴장성 두통 치료",
            "content": "공황장애 환자분들의 목과 어깨를 진찰해 보면 마치 단단한 돌덩이처럼 굳어 있는 경우가 대다수입니다. 뒷목이 당기고 뒤통수가 찌릿찌릿 쑤시며 관자놀이가 조여오는 두통이 끊이지 않습니다.\n\n머리와 목을 연결하는 상부 경추(경추 1번 환추, 경추 2번 축추) 주변의 '후두하근'은 뇌간으로 올라가는 추골동맥과 뇌척수액 순환 통로를 감싸고 있습니다. 공황 불안으로 만성적인 긴장이 지속되면 후두하근이 수축하여 뇌로 들어가는 혈류가 감소하고 뇌압이 불균형해집니다.\n\n이는 뒤통수 찌릿함, 눈 침침함, 붕 뜨는 어지럼증을 유발하고, 편도체는 이를 다시 위기 신호로 감지하여 공황발작을 부추깁니다. 해아림한의원에서는 틀어진 상부 경추를 교정하는 경추 추나요법과 후두부 근막을 부드럽게 이완시키는 침 치료로 뇌 순환 통로를 활짝 열어드립니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2019.12.16",
            "image": "/images/columns/column_13_caffeine_intolerance.svg",
            "views": 2050
          },
          {
            "id": "col-auto-12-1788774200000",
            "colIndex": 12,
            "category": "칼럼",
            "title": "이비인후과·신경과 검사는 정상인데 붕 뜨고 흔들리는 심인성 어지럼증(PPPD) 감별 진단",
            "summary": "회전성 현훈이 아닌 지속적 체위 지각 어지럼증과 공황불안의 상호 악순환을 끊는 한방 변증",
            "content": "이비인후과에서 이석증 검사와 전정기능 검사를 받아도 정상이거나 이석증 치료를 마쳤는데도, 바닥이 스펀지처럼 푹푹 꺼지는 것 같고 배 위에 탄 듯 붕 떠 있는 어지럼증이 수개월간 지속되는 분들이 있습니다. 바로 '심인성 어지럼증(지속성 체위-지각 어지럼증, PPPD)'입니다.\n\n이 어지럼증은 빙글빙글 도는 회전성 어지럼이 아니라, 멍하고 중심을 못 잡을 것 같은 비회전성 흔들림입니다. 급성 공황발작이나 스트레스를 겪은 후 뇌의 공간 지각 및 전정 신경 통합 회로가 과민해져서 발생합니다.\n\n환자는 '길에서 쓰러지면 어쩌나' 하는 예기불안에 시달리며 외출을 두려워하게 됩니다. 한의학에서는 이를 기혈허약(氣血虛弱)과 담훈(痰暈)으로 치료합니다. 뇌간의 전정신경핵을 안정시키고 중초의 담음을 제거하는 반하백출천마탕 처방으로 어지럼증의 뿌리를 뽑습니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2019.04.14",
            "image": "/images/columns/column_12_brainfog_glymphatic.svg",
            "views": 2075
          },
          {
            "id": "col-auto-11-1788764200000",
            "colIndex": 11,
            "category": "칼럼",
            "title": "얼굴은 화끈거리는데 손발은 얼음장인 상열하한(上熱下寒): 공황 불안이 부르는 체온 조절 실조",
            "summary": "심장의 화(火)는 머리로 치솟고 신장의 수(水)는 차가워지는 수승화강 불균형을 바로잡는 치법",
            "content": "가슴과 얼굴로는 열이 확 치밀어 올라 얼굴이 붉어지고 땀이 쏟아지는데, 반대로 손끝과 발끝은 얼음장처럼 차갑고 시린 증상을 한의학에서 '상열하한(上熱下寒)'이라고 합니다. 공황장애 환자에게서 가장 빈번하게 관찰되는 체온 조절 중추의 실조입니다.\n\n교감신경이 폭주하면 생존을 위해 중요한 심장과 뇌 쪽으로 혈액이 쏠리고, 말초 혈관은 급격히 수축하여 손발로 가는 혈류가 차단됩니다. 이 때문에 가슴은 타는 듯 두근거리고 얼굴은 홍조를 띠지만, 손발은 시리고 저리며 차가워집니다.\n\n한의학에서는 건강의 기본 원리를 '수승화강(水昇火降: 차가운 신장 기운은 위로 올리고 뜨거운 심장 기운은 아래로 내림)'으로 봅니다. 해아림한의원에서는 치솟는 허열(虛熱)을 식히고 하초의 양기를 북돋우는 황련아교탕, 육미지황탕 가감방으로 머리는 시원하고 손발은 따뜻한 온전한 신체 균형을 복원합니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2018.08.11",
            "image": "/images/columns/column_11_ocular_fatigue.svg",
            "views": 2100
          },
          {
            "id": "col-auto-10-1788754200000",
            "colIndex": 10,
            "category": "칼럼",
            "title": "위내시경은 깨끗한데 체하고 명치가 꽉 막히는 이유: 공황 스트레스와 뇌-장관 신경축(Gut-Brain Axis)",
            "summary": "스트레스가 미주신경 운동핵을 마비시켜 유발하는 기능성 소화불량, 담적(痰積)과 장내 세로토닌 합성",
            "content": "불안하거나 스트레스를 받으면 조금만 먹어도 체하고 명치 밑이 돌덩이를 얹어놓은 듯 굳어버립니다. 위내시경을 받아도 가벼운 만성 위염일 뿐이라는데 왜 이렇게 소화가 안 되고 메스꺼울까요?\n\n뇌와 장은 '미주신경(Vagus Nerve)'이라는 고속도로로 직결되어 있으며, 이를 '뇌-장관 신경축(Gut-Brain Axis)'이라고 부릅니다. 뇌에서 공황 불안이 감지되면 인체는 소화 효소 분비를 멈추고 위장관 연동 운동을 즉각 중단시킵니다. 소화되지 못한 음식물이 정체되어 부패하면서 한의학에서 말하는 '담적(痰積)'이 형성됩니다.\n\n또한 우리 몸의 행복 호르몬인 세로토닌의 90% 이상이 장 점막에서 만들어집니다. 위장이 굳으면 세로토닌 합성이 줄어들어 뇌는 더욱 불안해지는 치명적인 악순환이 발생합니다. 해아림한의원에서는 명치의 담적을 풀고 소화기 신경을 회복시키는 평위산, 내소화중탕 가감방으로 속을 편안하게 풀어 공황 불안을 안정시킵니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2017.12.08",
            "image": "/images/columns/column_10_hyperventilation.svg",
            "views": 2125
          },
          {
            "id": "col-auto-9-1788744200000",
            "colIndex": 9,
            "category": "칼럼",
            "title": "술 한잔 마시고 잠들었다가 새벽 3시에 찾아오는 공포: 알코올 해독 후 교감신경 반동 폭풍",
            "summary": "알코올의 일시적 진정 작용 뒤에 숨겨진 교감신경 리바운드 폭풍(Rebound Storm)과 금주 원칙",
            "content": "가슴이 두근거리고 잠이 안 와서 술을 한두 잔 마시면 알코올이 뇌의 GABA 수용체를 자극하여 긴장이 풀리고 잠에 쉽게 빠져듭니다. 하지만 약 3~4시간 뒤인 새벽 2~4시경, 간에서 알코올이 아세트알데하이드로 분해되는 순간 지옥 같은 경험이 시작됩니다.\n\n억눌렸던 교감신경이 스프링처럼 튀어 오르는 **'교감신경 반동 폭풍(Rebound Storm)'**이 발생합니다. 심장이 요동치며 식은땀이 비 오듯 쏟아지고 숨이 막혀 응급실로 실려 가게 됩니다. 응급실을 찾는 급성 공황발작 환자의 상당수가 음주 후 새벽에 발생합니다.\n\n알코올은 일시적인 마취제일 뿐, 뇌 속의 신경전달물질을 고갈시켜 다음 날 불안을 2~3배 이상 증폭시킵니다. 공황장애 완치를 원하신다면 치료 기간 동안 술은 단 한 방울도 마시지 않는 완전 금주가 필수입니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2017.04.06",
            "image": "/images/columns/column_9_sweat_dysregulation.svg",
            "views": 2150
          },
          {
            "id": "col-auto-8-1788734200000",
            "colIndex": 8,
            "category": "칼럼",
            "title": "배란기나 생리 전, 갱년기만 되면 감정 롤러코스터와 공황발작이 치솟는 호르몬 신경학",
            "summary": "에스트로겐 급락이 뇌 GABA 및 세로토닌 수용체에 미치는 충격과 소간해울(疏肝解鬱) 맞춤 한약",
            "content": "여성 공황장애 환자분들은 유독 생리 시작 7~10일 전(생리전증후군 기간)이나 배란기, 혹은 폐경 전후 갱년기에 공황발작 빈도가 잦아지고 예기불안이 극심해지는 현상을 겪습니다.\n\n여성 호르몬인 에스트로겐은 뇌에서 감정을 안정시키는 세로토닌 분비를 촉진하고 편도체의 과민도를 낮춰주는 천연 안정제 역할을 합니다. 하지만 배란 직후와 생리 직전에는 에스트로겐 수치가 낭떠러지처럼 급락합니다.\n\n이로 인해 뇌 속 진정 신경계가 갑자기 무방비 상태에 놓이면서 사소한 스트레스에도 가슴 두근거림과 공황발작이 격발됩니다. 해아림한의원에서는 간기(肝氣)를 소통시키고 자궁과 뇌의 혈류를 보강하는 가미소요산, 귀비탕 가감방을 처방하여 호르몬 주기와 무관하게 뇌가 평정심을 유지하도록 돕습니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2016.08.03",
            "image": "/images/columns/column_8_tinnitus_vagus.svg",
            "views": 2175
          },
          {
            "id": "col-auto-7-1788724200000",
            "colIndex": 7,
            "category": "칼럼",
            "title": "비 오기 전날이면 심장이 쿵쾅거리고 온몸이 무거워지는 기상병과 편도체 예민도의 상관관계",
            "summary": "저기압과 습도 변화가 내이 기압 수용체와 자율신경계에 미치는 영향 및 오령산 가감방",
            "content": "\"비가 오려거나 날씨가 흐린 날이면 유독 가슴이 답답하고 숨이 가쁘며 온몸이 물에 젖은 솜처럼 무겁습니다.\" 공황장애 환자 중 날씨 변화에 극도로 민감한 기상병(Meteoropathy)을 겪는 분들이 많습니다.\n\n대기압이 낮아지면 체내 조직의 팽창 압력이 상대적으로 높아지고, 속귀(내이)의 기압 수용 센서가 미세한 압력 차이를 감지하여 뇌간의 교감신경을 자극합니다. 또한 흐린 날에는 일조량이 줄어들어 세로토닌 합성이 저하되고 기분이 가라앉습니다.\n\n체내에 수분 대사가 정체된 습담(濕痰) 체질인 경우 기압 변화에 더욱 취약합니다. 해아림한의원에서는 체내 정체된 수독(水毒)을 배출하고 기운을 북돋우는 오령산, 이진탕 처방과 혈액순환 약침 치료를 통해 궂은 날씨에도 흔들리지 않는 신경계 저항력을 길러드립니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2015.12.01",
            "image": "/images/columns/column_7_cervical_cst.svg",
            "views": 2200
          },
          {
            "id": "col-auto-6-1788714200000",
            "colIndex": 6,
            "category": "칼럼",
            "title": "두개천골요법(CST)이 과각성된 뇌간을 이완시키고 뇌척수액 순환을 돕는 한의학적 치료 기전",
            "summary": "두개골과 천골의 미세 가동성을 회복시켜 미주신경 활성도를 높이고 호흡근을 이완시키는 원리",
            "content": "두개천골요법(Craniosacral Therapy, CST)은 두개골(머리뼈)과 천골(엉치뼈)을 잇는 경막 체계와 뇌척수액의 미세 리듬(1분에 6~12회)을 섬세한 수기 요법으로 정상화하는 정밀 한방 수기치료입니다.\n\n만성 공황장애를 앓는 환자는 극심한 긴장으로 인해 두개골 봉합선이 경직되고 후두골과 경골 주변이 압박되어 있습니다. 이 부위는 뇌신경 10번이자 인체 최고의 브레이크 신경인 '미주신경'이 두개골 밖으로 빠져나오는 경정맥공(Jugular Foramen)이 위치한 곳입니다.\n\nCST 치료를 통해 후두골과 천골의 긴장을 풀어주면 뇌척수액 순환이 원활해지고 미주신경 압박이 해소되면서 환자는 깊은 이완 상태(알파파 및 세타파 활성화)에 도달합니다. 가슴이 시원해지고 호흡이 깊어지는 것을 치료 즉시 체감할 수 있습니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2015.03.30",
            "image": "/images/columns/column_6_adrenal_fatigue.svg",
            "views": 2225
          },
          {
            "id": "col-auto-5-1788704200000",
            "colIndex": 5,
            "category": "칼럼",
            "title": "공황발작 시 공포를 극복하는 '5-4-3-2-1 그라운딩(Grounding) 기법'과 인지적 재구조화",
            "summary": "오감 감각 앵커링을 통해 공포의 내면 소용돌이에서 벗어나 현실로 뇌를 착륙시키는 실전 가이드",
            "content": "공황발작이 엄습하면 환자의 뇌는 '심장이 멎는다, 쓰러진다, 미쳐버린다'는 내면의 파국적 공포 소용돌이에 갇혀 통제력을 잃습니다. 이때 뇌의 초점을 신체 내부의 공포에서 외부 현실 감각으로 강제로 끌고 나오는 테크닉이 바로 **'5-4-3-2-1 그라운딩 기법'**입니다.\n\n발작 조짐이 보일 때 주변을 둘러보며 실천합니다:\n1) 눈에 보이는 5가지 사물 이름을 소리 내어 말합니다. (예: 시계, 의자, 물병...)\n2) 손이나 피부로 만질 수 있는 4가지 촉감을 느낍니다. (예: 옷감, 차가운 책상...)\n3) 귀에 들리는 3가지 소리에 집중합니다. (예: 에어컨 소리, 차 지나가는 소리...)\n4) 코로 맡을 수 있는 2가지 냄새를 찾습니다. (예: 커피 향, 핸드크림...)\n5) 입안에 감도는 1가지 맛을 느낍니다.\n\n오감을 집중하면 대뇌 감각 피질이 활성화되면서 과열된 편도체의 공포 회로가 차단됩니다. \"이것은 단지 일시적인 신경 반응일 뿐이며, 10분 내로 반드시 지나간다\"는 인지적 재구조화를 함께 되뇌면 발작을 조기에 종식시킬 수 있습니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2014.07.27",
            "image": "/images/columns/column_5_neuroplasticity.svg",
            "views": 2250
          },
          {
            "id": "col-auto-4-1788694200000",
            "colIndex": 4,
            "category": "칼럼",
            "title": "극심한 공황발작 후 찾아오는 전신 탈진과 무기력: 미주신경 등쪽 복합체의 '동결(Freeze)' 반응",
            "summary": "교감신경 폭풍 후 신체가 에너지를 강제로 차단하는 생체 방어 메커니즘과 보기보혈(補氣補血) 회복법",
            "content": "10~20분간의 격렬한 공황발작이 지나간 뒤 온몸의 힘이 쑥 빠지고 손가락 하나 까딱하기 힘들며 며칠 동안 극심한 피로감에 짓눌리는 분들이 많습니다. \"발작은 끝났는데 왜 몸이 천근만근 무겁고 아무것도 할 수 없을까요?\"\n\n다미주신경 이론(Polyvagal Theory)에 따르면, 인체는 감당할 수 없는 극단적 공포에 직면하면 가장 원시적인 방어 기제인 '미주신경 등쪽 복합체(Dorsal Vagal Complex)'를 작동시켜 전신을 얼어붙게 만드는 '동결(Freeze)' 모드로 들어갑니다.\n\n호랑이와 사투를 벌인 직후 인체가 과열된 엔진을 보호하기 위해 강제로 셧다운시키는 과정입니다. 한의학에서는 이를 대기하함(大氣下陷)과 원기 고갈로 치료합니다. 황기, 인삼, 당귀 등으로 기혈을 신속히 보충하는 보중익기탕 처방으로 바닥난 에너지를 채워 빠른 일상 회복을 이끌어냅니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2013.11.23",
            "image": "/images/columns/column_4_pots_dizziness.svg",
            "views": 2275
          },
          {
            "id": "col-auto-3-1788684200000",
            "colIndex": 3,
            "category": "칼럼",
            "title": "수면 중 이갈이와 턱관절 통증: 무의식적 공황 불안이 부르는 뇌간 삼차신경핵의 과긴장",
            "summary": "저작근 경련과 턱관절 장애를 유발하는 스트레스 중추 과각성을 가라앉히는 한방 복합 치료",
            "content": "아침에 일어나면 턱이 뻐근하고 관자놀이가 쑤시며 어금니가 닳아 치과에서 마우스피스(스플린트)를 맞추신 공황장애 환자분들이 많습니다. 수면 중 무의식적으로 이를 악물거나 가는 이갈이(Bruxism) 증상입니다.\n\n이갈이는 단순한 치아 교합 문제가 아니라, 수면 중에도 쉬지 못하는 뇌간(Brainstem)의 삼차신경 운동핵이 흥분하여 턱 근육(교근, 측두근)을 100kg 이상의 힘으로 수축시키는 신경성 운동 장애입니다.\n\n공황 불안에 시달리는 환자의 뇌는 수면 중에도 비상경보 상태를 유지하기 때문입니다. 해아림한의원에서는 안면과 턱 근막의 긴장을 풀어주는 작약감초탕 가감방과 턱관절 추나요법, 교근 약침 치료를 병행하여 밤사이 턱을 편안하게 이완시키고 아침 기상을 상쾌하게 만들어 드립니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2013.03.22",
            "image": "/images/columns/column_3_temp_dysregulation.svg",
            "views": 2300
          },
          {
            "id": "col-auto-2-1788674200000",
            "colIndex": 2,
            "category": "칼럼",
            "title": "완치까지 얼마나 걸릴까? 진료실에서 설명해 드리는 공황장애 3단계 회복 로드맵",
            "summary": "1단계 급성 발작 소멸부터 2단계 광장공포 극복, 3단계 뇌신경 자생력 완성까지 체계적 치료 단계",
            "content": "\"원장님, 공황장애는 완치가 되나요? 도대체 얼마나 치료받아야 일상생활로 돌아갈 수 있나요?\" 진료실에서 환자분들이 가장 많이 물으시는 질문입니다.\n\n공황장애는 난치병이 아니며, 뇌 신경망의 조절 기능을 바로잡으면 누구나 이전의 편안한 일상으로 완치될 수 있는 질환입니다. 해아림의 치료는 체계적인 3단계로 진행됩니다.\n\n1) **1단계(1~4주): 급성 발작 소멸기** - 1:1 맞춤 한약과 호흡 훈련으로 응급실을 찾을 정도의 급성 공황발작과 호흡곤란, 심계항진을 즉각 제어합니다.\n2) **2단계(5~12주): 광장공포 및 예기불안 소멸기** - 외출 회피, 지하철/운전 공포를 극복하고 일상생활의 활동 반경을 완전히 회복합니다.\n3) **3단계(13~24주): 뇌신경 자생력 복원 및 약물 테이퍼링** - 정신과 약물을 서서히 줄여 완전 단약에 성공하고, 스트레스에 흔들리지 않는 재발 방지 면역 체계를 완성합니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2012.07.19",
            "image": "/images/columns/column_2_gut_brain.svg",
            "views": 2325
          },
          {
            "id": "col-auto-1-1788664200000",
            "colIndex": 1,
            "category": "칼럼",
            "title": "약물 의존 없는 완전 단약(테이퍼링)과 재발 방지: 뇌신경계 자생력을 기르는 한방 치료",
            "summary": "정신과 양약을 안전하게 줄여나가며 뇌 본래의 브레이크 신경망(부교감신경)을 복원하는 전략",
            "content": "많은 공황장애 환자분들이 신경안정제를 수년간 복용하면서 약에 대한 심리적 의존과 기억력 감퇴, 만성 무기력감을 호소하십니다. 약을 끊고 싶어 갑자기 임의로 복용을 중단했다가 더 극심한 발작이 재발하여 좌절하는 경우가 부지기수입니다.\n\n단약의 성공 열쇠는 뇌 신경계가 스스로 불안을 조절할 수 있는 '자생 복원력'을 키워놓은 뒤에 약을 줄여야 한다는 점입니다. 브레이크가 고장 난 자동차에서 가속 페달을 억지로 밟지 않는다고 멈출 수 없는 것과 같습니다.\n\n해아림한의원에서는 뇌신경 세포를 보호하고 부교감신경을 활성화하는 한약을 투여하여 뇌 자체의 브레이크 신경망을 재건합니다. 신경계가 튼튼해지면 전문의 지도하에 2~4주 간격으로 양약을 1/4정씩 서서히 줄여나가 금단 증상 없이 100% 안전하게 약물에서 졸업할 수 있도록 돕습니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2011.11.15",
            "image": "/images/columns/column_1_palpitation.svg",
            "views": 2350
          }
        ];

        window.defaultFaqData = defaultFaqData;
        window.defaultFaqList = defaultFaqData;
        window.defaultReviewsData = defaultReviewsData;
        window.defaultYoutubeData = defaultYoutubeData;
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
        var AUTONOMIC_KEYWORDS = [
          '자율신경', '교감신경', '부교감신경', '미주신경', '신경실조증', '신경계',
          '항상성', '기립불내성', '기립성', '공황', '불안', '두근거림', '어지럼',
          '호흡', '브레인포그', '불면', 'CST', '두개천골', '뇌척수액', 'Dysautonomia'
        ];

        function isAutonomicRelated(title, desc) {
          var text = ((title || '') + ' ' + (desc || '')).toLowerCase();
          for (var i = 0; i < AUTONOMIC_KEYWORDS.length; i++) {
            if (text.indexOf(AUTONOMIC_KEYWORDS[i].toLowerCase()) !== -1) {
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

              if (isAutonomicRelated(item.title, item.description || item.content)) {
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
          if (item.isCustom) return false;
          var strId = String(item.id || '');
          if (/^col(umns)?-\d{8,}/.test(strId)) return false;
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
            if (localStorage.getItem('healim_mock_purge_done_v5')) return;
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
            });
            localStorage.setItem('healim_mock_purge_done_v5', 'true');
          } catch(e) {}
        }
        purgeObsoleteMockPosts();
        window.purgeObsoleteMockFaqPosts = purgeObsoleteMockPosts;
        window.purgeObsoleteMockPosts = purgeObsoleteMockPosts;

        // ─────────────────────────────────────────────────────────────
        // Permanent Persistence & Multi-Tier Deletion Tracker
        // ─────────────────────────────────────────────────────────────
        var PERMANENT_DELETED_REVIEW_IDS = ['reviews-1788884300000', 'reviews-1788878779980', 'reviews-1788884500000'];

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

                // Tier 2: Local posts that were edited or created locally
                localList.forEach(function(p) {
                  if (p && p.id && !isDeletedPostId(bKey, p.id, p)) {
                    var strId = String(p.id);
                    if (p.isEdited || p.updatedAt) {
                      if (!seenIds[strId]) {
                        seenIds[strId] = true;
                        merged.push(p);
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
                localStorage.setItem(vKey, JSON.stringify(merged));
                localStorage.setItem('healim_board_' + bKey, JSON.stringify(merged));
                if (typeof HealimPermanentDB !== 'undefined' && HealimPermanentDB.saveVault) {
                  HealimPermanentDB.saveVault(bKey, merged);
                }

                // Also update custom posts tier so getCustomUserPosts has it
                var cKey = (bKey === 'youtube') ? 'healim_custom_youtube_posts' : ('healim_custom_' + bKey + '_posts');
                localStorage.setItem(cKey, JSON.stringify(merged.filter(function(p) { return p.isCustom || String(p.id).indexOf(bKey + '-') === 0; })));

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
        function getItemTimeScore(item, index, totalLength) {
          if (!item) return 0;
          var idStr = String(item.id || '');
          var idMatch = idStr.match(/(\d{10,14})/);
          var idTimestamp = idMatch ? parseInt(idMatch[1], 10) : 0;
          if (idTimestamp >= 1000000000 && idTimestamp < 10000000000) idTimestamp *= 1000;

          if (idTimestamp >= 1577836800000) {
            return idTimestamp;
          }

          var dateScore = 0;
          if (item.date) {
            var cleanDate = String(item.date).replace(/\./g, '-').trim();
            if (/^\d{4}-\d{2}-\d{2}$/.test(cleanDate)) cleanDate += 'T00:00:00+09:00';
            var td = new Date(cleanDate).getTime();
            if (!isNaN(td)) dateScore = td;
          }

          var subDayOffset = 0;
          var ytMatch = idStr.match(/^yt-(\d+)$/i);
          if (ytMatch) {
            subDayOffset = 100000 - parseInt(ytMatch[1], 10) * 1000;
          } else {
            var colIdx = item.colIndex || item.poolIndex || 0;
            if (colIdx > 0) {
              subDayOffset = colIdx * 1000;
            } else {
              subDayOffset = (totalLength - (index || 0));
            }
          }

          if (dateScore > 0) return dateScore + subDayOffset;
          return subDayOffset;
        }

        function sortCommunityItemsByTime(items) {
          if (!Array.isArray(items)) return [];
          var total = items.length;
          var scored = items.map(function(item, idx) {
            return { item: item, score: getItemTimeScore(item, idx, total), origIdx: idx };
          });
          scored.sort(function(a, b) {
            if (b.score !== a.score) return b.score - a.score;
            return a.origIdx - b.origIdx;
          });
          return scored.map(function(s) { return s.item; });
        }
        window.sortCommunityItemsByTime = sortCommunityItemsByTime;
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
          if (finalItem.title && (key === 'faq' || key === 'columns' || key === 'reviews')) {
            var normT = String(finalItem.title)
              .replace(/^Q[\.:\s\-]+/i, '')
              .replace(/^칼럼[\.:\s\-]+/i, '')
              .replace(/[\s\*\*_~\`#\?\uFF1F\.,\(\)\[\]:;\-]/g, '')
              .trim()
              .toLowerCase();
            if (normT && seenTitles[normT]) return;
            seenTitles[normT] = true;
          }

          seenIds[strId] = true;
          merged.push(finalItem);
        }

        // 1. Authoritative User Edited Posts (Absolute Top Precedence on F5 / Reload)
        Object.keys(editedMap).forEach(function(eid) { addPostItem(editedMap[eid]); });

        // 2. User uploaded / custom posts (written by healim0071 admin)
        customList.forEach(addPostItem);

        // 3. Permanent Vault Posts
        vaultList.forEach(addPostItem);

        // 4. Previously stored / auto-published posts in active localStorage
        storedList.forEach(addPostItem);

        // 5. Legacy posts from v2 storage
        legacyList.forEach(addPostItem);

        // 6. Complete permanent clinical library & seed data (fallback)
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

        try {
          localStorage.setItem('healim_board_' + key, JSON.stringify(merged));
          localStorage.setItem('healim_vault_all_posts_' + key, JSON.stringify(merged));
          if (typeof HealimPermanentDB !== 'undefined' && HealimPermanentDB.saveVault) {
            HealimPermanentDB.saveVault(key, merged);
          }
        } catch(e) {}

        merged = sortCommunityItemsByTime(merged);
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

          // If content already contains rich HTML tags from the visual editor
          if (rawText.indexOf('<div class="article-inline-img-wrap">') !== -1 ||
              rawText.indexOf('<p') !== -1 ||
              rawText.indexOf('<div') !== -1 ||
              rawText.indexOf('<img') !== -1) {
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

            return clean;
          }

          // 1. Escape HTML entities for pure markdown
          var s = rawText
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');

          // 2. Safe allowed tags created by editor format buttons
          s = s
            .replace(/&lt;span style=&quot;color:([^&"]+);&quot;&gt;(.*?)&lt;\/span&gt;/gi, '<span style="color:$1;">$2</span>')
            .replace(/&lt;div style=&quot;text-align:center;&quot;&gt;(.*?)&lt;\/div&gt;/gi, '<div style="text-align:center;">$1</div>')
            .replace(/&lt;u&gt;(.*?)&lt;\/u&gt;/gi, '<u>$1</u>');

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
            var hasAnyImage = item.image || (item.content && (item.content.indexOf('![') !== -1 || item.content.indexOf('<img') !== -1));
            var photoBadge = hasAnyImage ? '<span class="text-xs font-bold px-1.5 py-0.5 rounded bg-[#f0f7f8] text-[#1c6e78] border border-[#badfe3] ml-1 shrink-0">📷 사진</span>' : '';
            var richContent = renderRichContent(item.content);
            var imageHtml = (item.image && richContent.indexOf(item.image) === -1) ? '<div class="my-3 rounded-lg overflow-hidden border border-[#badfe3] bg-[#f8fafb] max-w-md"><img src="' + item.image + '" alt="' + cleanTitle + '" class="max-h-80 w-auto object-contain rounded-lg" loading="lazy" onerror="this.onerror=null; this.parentElement.style.display=\'none\';" /></div>' : '';

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

            html += '<details class="faq-item">' +
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
            var hasAnyImage = item.image || (item.content && (item.content.indexOf('![') !== -1 || item.content.indexOf('<img') !== -1));
            var photoBadge = hasAnyImage ? ' <span class="text-[12px] text-[#1c6e78] font-bold" title="사진 첨부">📷</span>' : '';
            var itemNumber = totalItems - startIndex - idx;
            var manageTd = isSuperAdmin ? (
              '<td style="text-align: center; white-space: nowrap;">' +
              '<div class="inline-flex items-center justify-center gap-1.5">' +
              '<button type="button" class="px-2 py-0.5 text-xs text-[#1c6e78] hover:bg-[#eaf3f4] font-semibold rounded border border-[#badfe3] transition-colors cursor-pointer" onclick="event.stopPropagation(); openEditModal(\'columns\', \'' + safeColId + '\')">✏️ 수정</button>' +
              '<button type="button" class="px-2 py-0.5 text-xs text-red-600 bg-red-50 hover:bg-red-100 font-semibold rounded border border-red-200 transition-colors cursor-pointer" onclick="event.stopPropagation(); handleDeletePostDirect(\'columns\', \'' + safeColId + '\')">🗑️ 삭제</button>' +
              '</div>' +
              '</td>'
            ) : '';

            html += '<tr onclick="openDetailModal(\'columns\', \'' + safeColId + '\')">' +
            '<td style="text-align: center; color: #888888; font-size: 13px;">' + itemNumber + '</td>' +
            '<td><span class="post-title-link">' + item.title + photoBadge + '</span></td>' +
            '<td style="text-align: center; font-size: 13px;">' + (item.author || '해아림한의원') + '</td>' +
            '<td style="text-align: center; color: #888888; font-size: 13px;">' + item.date + '</td>' +
            '<td style="text-align: center; color: #888888; font-size: 13px;">' + item.views + '</td>' +
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
                if (curList.length < vaultList.length) {
                  console.log('[Healim Master Vault] Restoring ' + (vaultList.length - curList.length) + ' posts from IndexedDB to ' + bKey);
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
