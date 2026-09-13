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
            "category": "응급 대처",
            "title": "공황발작이 왔을 때 3분 안에 가라앉히는 응급 대처법: 4-6 복식호흡과 5-4-3-2-1 그라운딩 기법",
            "summary": "발작이 덮친 절체절명의 순간, 심박수를 급속 냉각시키는 4-6 구순 복식호흡과 감각을 현실로 고정하는 5단계 그라운딩 응급 매뉴얼.",
            "content": "가슴이 터질 듯 뛰고, 숨이 턱 막히며, 손발이 덜덜 떨리고, 금방이라도 기절하거나 심장마비로 죽을 것 같은 극심한 공황발작이 덮쳤을 때—주변에 기댈 사람도 없고 당장 약도 없다면 어떻게 해야 할까요? \n\n발작의 정점에서 환자를 즉각적인 사지(死地)의 공포로부터 건져 올려 3분 안에 심박수를 안정권으로 되돌리는 전 세계 신경정신의학계 공인 '2대 응급 대처 프로토콜'을 반드시 기억하십시오.\n\n■ 1단계: 4-6 구순(입술) 복식호흡 (심박수 급속 냉각)\n과호흡으로 헐떡이면 이산화탄소가 날아가 손발 경련과 질식감이 악화됩니다. 호흡의 주도권을 즉각 되찾아야 합니다.\n1. 입으로 천천히 길게 불어내기 (6초):\n   촛불을 흔들리게 하되 꺼뜨리지 않는다는 느낌으로, 입술을 좁게 모으고 속으로 '하나, 둘, 셋, 넷, 다섯, 여섯'을 세며 천천히 숨을 끝까지 내쉽니다.\n2. 코로 부드럽게 들이마시기 (4초):\n   배를 풍선처럼 부풀리며 코로 조용히 공기를 채웁니다.\n3. 핵심 팁: 들이마시는 것보다 내쉬는 시간을 1.5배 길게 해야 미주신경(부교감신경)이 즉각 자극되어 심장 박동수가 급강하합니다.\n\n■ 2단계: 5-4-3-2-1 감각 그라운딩 기법 (뇌 편도체 경보 강제 차단)\n공황발작 중 뇌는 '내 몸 안의 두근거림'에 갇혀 공포를 무한 증폭시킵니다. 오감(五感)을 활용해 의식을 신체 바깥 현실 세계로 강제로 끌어당겨야 합니다.\n- 5가지 눈에 보이는 것 찾기: 벽의 시계, 신발 끈, 스마트폰 모서리, 형광등, 창문 등 주변 사물 5개를 마음속으로 소리 내어 명명합니다.\n- 4가지 만져지는 촉각 느끼기: 바닥에 닿은 양발의 단단함, 옷 소매의 질감, 손에 쥔 차 키의 차가움, 의자 등받이의 압력을 느낍니다.\n- 3가지 들리는 소리 듣기: 에어컨 돌아가는 소리, 멀리서 달리는 자동차 소리, 자신의 숨소리 등 주변의 소리 3가지에 귀를 기울입니다.\n- 2가지 냄새 맡기: 손목의 비누 향기, 공기의 서늘한 냄새 등 주변 냄새를 의식합니다.\n- 1가지 입안의 맛 느끼기: 혀끝으로 입안의 침을 삼키며 입안의 미각에 집중합니다.\n\n이 5단계 감각 탐색을 마치는 데 약 2분이 소요됩니다. 뇌의 전두엽이 오감 정보를 처리하는 동안, 공포 중추인 편도체는 에너지를 빼앗겨 비상 사이렌을 강제로 끄게 됩니다.\n\n\"이것은 가짜 알람이며, 3분 뒤면 호흡이 돌아온다.\" 이 문장을 주문처럼 되뇌십시오.\n\n해아림한의원에서는 응급 상황에서도 발작으로 번지지 않도록 신경계의 완충 옹벽을 세워주는 비상 상비 한약과 1:1 두뇌 안정화 치료를 통해, 공황에 대한 두려움 없이 당당한 일상을 살아갈 수 있도록 이끌어 드립니다.\n\n[공황장애 정밀검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2026.09.10",
            "image": "/images/columns/column_23_bruxism_tmj.svg",
            "views": 1800
          },
          {
            "id": "col-auto-22-1788884100000",
            "colIndex": 22,
            "category": "의학 진실",
            "title": "심장이 터질 듯 뛰고 숨이 턱 막히는데, 정말 심장마비나 질식으로 죽지 않는 의학적 이유",
            "summary": "공황발작 중 100%의 환자가 확신하는 죽음의 공포: 인체 심혈관계와 호흡계는 왜 공황발작으로 멈추지 않는지에 대한 심장내과학적 팩트 체크.",
            "content": "다른 건 다 참겠는데 발작이 절정에 달했을 때는 심장이 1분에 160회씩 요동치며 가슴을 뚫고 나올 것 같고 숨이 1mm도 안 들어옵니다. 그 순간만큼은 '아, 이번엔 진짜 심장마비구나, 여기서 즉사하는구나'라는 확신이 듭니다. 의사 선생님들은 안 죽는다고 하지만, 정말 이 상태로 심장이 터지거나 질식해 죽지 않는 게 맞는지 확인하고 싶어 하시는 분들이 많습니다.\n\n오늘 이 칼럼을 통해, 의학계 100년의 임상 통계와 심장내과학적 생리 팩트를 바탕으로 명확하고 확고하게 진실을 말씀드립니다.\n\n결론부터 말씀드리면, 공황발작 그 자체로 인해 사람이 심장마비로 사망하거나 질식사하는 일은 의학 역사상 단 한 건도 존재하지 않습니다. 그 이유는 다음과 같습니다:\n\n1. 심장은 마라톤 풀코스를 달릴 수 있도록 설계된 강력한 근육입니다:\n공황발작 시 심박수가 140~160회까지 치솟는 것은 심장에 기질적 이상이 생겨서가 아니라, 교감신경의 명령에 따라 분비된 아드레날린 때문입니다. 이는 건강한 성인이 100m 전력 질주를 하거나 러닝머신에서 숨이 턱에 닿도록 뛸 때 나타나는 지극히 정상적인 생리적 반응과 완전히 동일합니다. 운동을 격렬하게 했다고 해서 건강한 심장이 터지지 않듯, 공황발작으로 심장이 멎는 일은 결코 일어나지 않습니다.\n\n2. 질식감은 '산소 부족'이 아니라 뇌의 '감각 착각'입니다:\n가슴이 조여오고 숨이 안 쉬어지는 느낌이 들 때 손가락에 산소포화도 측정기(SpO2)를 꽂아보면 놀랍게도 99~100%라는 완벽한 수치가 나옵니다. 혈액 속에는 산소가 가득 차 있습니다. 다만 목과 흉곽 근육이 과긴장하고 뇌 편도체가 산소 결핍 경보를 잘못 울리고 있을 뿐입니다. 폐의 가스 교환은 완벽하게 이루어지고 있으므로 질식사는 생리학적으로 불가능합니다.\n\n3. 인체에는 '교감신경 자동 셧다운 브레이크'가 있습니다:\n인체는 아드레날린을 무한정 뿜어내지 못합니다. 부신에 저장된 아드레날린은 통상 10~15분이면 고갈되며, 이어서 부교감신경(미주신경)이 반사적으로 켜져 심박수를 강제로 떨어뜨리고 호흡을 안정시킵니다. 공황발작이 아무리 지독해도 20~30분 이내에 스스로 잦아드는 이유가 바로 이 내장된 안전 브레이크 덕분입니다.\n\n발작이 찾아올 때 마음속으로 단단히 외치십시오:\n\"내 심장은 지금 운동 중이다. 숨은 잘 통하고 있다. 이 불꽃놀이는 15분이면 끝난다. 나는 절대 죽지 않는다!\"\n\n해아림한의원에서는 과열된 심장의 화(火)를 내리고 심기를 튼튼히 보하는 자감초탕, 삼위보심탕 맞춤 처방을 통해 심장의 요동침을 근본적으로 잠재워 드립니다. 공포의 안개가 걷히면, 당신의 심장은 평온한 본래의 박동을 확고히 되찾게 됩니다.\n\n[공황장애 정밀검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2026.01.07",
            "image": "/images/columns/column_22_pelvic_pain.svg",
            "views": 1825
          },
          {
            "id": "col-auto-21-1788884000000",
            "colIndex": 21,
            "category": "광장공포증",
            "title": "지하철, 버스, 엘리베이터만 타면 숨이 막히는 '광장공포증(Agoraphobia)': 왜 갇힌 공간이 두려울까?",
            "summary": "\"즉각 도망칠 수 없다\"는 뇌 편도체의 인지 왜곡과 광장공포증의 신경생리학, 한 정거장씩 극복하는 단계적 탈감작 행동 치료.",
            "content": "지하철 문이 '치익-' 하고 닫히는 순간 심장이 쿵쾅거리며 다음 역까지 2분이 영겁의 시간처럼 느껴집니다. 중간에 문을 열고 뛰어내릴 수도 없다는 생각에 식은땀이 비 오듯 쏟아지고, 엘리베이터도 갇힐까 봐 15층까지 계단으로 걸어 다니며, 만원 버스나 비행기는 탈 엄두조차 못 내어 활동 반경이 집 반경 500m로 쪼그라들었다는 호소는 공황장애 환자의 3명 중 1명이 동반하는 '광장공포증(Agoraphobia)'의 비극적인 일상입니다.\n\n많은 분들이 광장공포증을 단순히 '넓은 광장을 무서워하는 병'으로 오해하곤 합니다. 그러나 광장공포증의 핵심 병리는 넓은 공간이 아니라, \"공황발작이나 유사한 신체 증상이 나타났을 때 즉각 도망치기 어렵거나, 다른 사람에게 도움을 요청하기 어려운 장소나 상황에 대한 극심한 공포\"입니다.\n\n대표적인 5대 유발 장소는 다음과 같습니다:\n1. 대중교통 (지하철, 버스, 비행기, 기차)\n2. 개방된 넓은 공간 (주차장, 다리 위, 고속도로)\n3. 밀폐된 폐쇄 공간 (엘리베이터, 영화관, 치과 의사 진료대, 미용실)\n4. 줄서기 및 군중 속 (대형마트 계산대, 콘서트장)\n5. 집 밖을 혼자 나서는 상황\n\n광장공포증 환자의 뇌를 들여다보면, 정상적인 상황 판단을 내리는 전전두엽은 침묵하고, 공포를 증폭시키는 편도체만이 200% 과열되어 있습니다. \"문이 닫혔다 = 갇혔다 = 죽는다\"라는 비합리적인 인지 오류가 0.1초 만에 뇌 신경망을 장악하는 것입니다.\n\n광장공포증을 극복하는 유일하고 검증된 길은 '단계적 체계적 탈감작(Systematic Desensitization)'입니다:\n- 1단계: 지하철 역 출구까지만 걸어가서 5분간 호흡하고 돌아오기\n- 2단계: 개찰구를 통과해 승강장 벤치에 10분간 앉아 열차가 오가는 모습을 지켜보기\n- 3단계: 사람이 덜 붐비는 시간대에 딱 한 정거장만 타고 내려서 스스로를 칭찬하기\n- 4단계: 두 정거장, 세 정거장으로 점진적으로 늘려가며 뇌에 \"지하철을 타도 안전하다\"는 성공 경험을 덮어쓰기\n\n해아림한의원에서는 이러한 행동 훈련 시 뇌 편도체의 공포 반응을 획기적으로 낮춰주는 시호, 조구등, 백질려 계열의 맞춤 한약과 두개천골요법을 병행합니다. 뇌의 족쇄가 풀릴 때, 좁아졌던 당신의 세상은 다시 온 세상으로 넓어질 것입니다.\n\n[공황장애 정밀검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2025.05.06",
            "image": "/images/columns/column_21_olfactory_gustatory.svg",
            "views": 1850
          },
          {
            "id": "col-auto-20-1788883900000",
            "colIndex": 20,
            "category": "약물 관리",
            "title": "신경안정제(자낙스·알프라졸람·리보트릴·인데놀), 계속 먹어도 될까? 부작용 없이 끊는 법(단약·테이퍼링)",
            "summary": "벤조디아제핀계 약물의 내성과 의존성 극복, 반동 불안 없이 뇌 GABA 수용체 자생력을 회복하며 10%씩 안전하게 줄여가는 한방 테이퍼링 로드맵.",
            "content": "공황발작이 올 때마다 자낙스(알프라졸람)를 먹으면 20분 만에 편안해져서 처음엔 구세주 같았는데, 1년이 지난 지금은 반 알로 듣지 않아 한 알, 두 알로 늘었고, 약 먹을 시간이 조금만 지나면 온몸이 바들바들 떨리고 불안이 치솟아 평생 이 약의 노예로 살아야 하는지 걱정하시는 분들이 많습니다. 약을 끊으려고 시도했다가 더 심한 발작이 와서 죽는 줄 알았다는 절망감도 자주 마주합니다.\n\n자낙스, 리보트릴, 아티반, 디아제팜과 같은 벤조디아제핀계 신경안정제는 뇌의 억제성 신경전달물질인 GABA 수용체에 작용하여 뇌 신경망의 스위치를 강제로 내리는 응급 진화 약물입니다. 급성기 발작을 넘기는 데는 매우 유용하지만, 수개월 이상 장기 복용하면 다음과 같은 명확한 한계에 부딪힙니다:\n\n1. 내성(Tolerance): 뇌세포가 외부 약물에 적응하여 동일한 효과를 내기 위해 점점 더 높은 용량을 요구합니다.\n2. 의존성(Dependence): 신체가 약물 없이는 스스로 GABA를 합성하지 못하는 무기력 상태에 빠집니다.\n3. 반동 불안(Rebound Anxiety): 약을 갑자기 끊거나 줄이면 억눌려 있던 신경계가 스프링처럼 튀어 올라 이전보다 서너 배 극심한 패닉을 유발합니다.\n\n그렇다면 어떻게 해야 안전하게 약물에서 벗어날 수 있을까요? \n가장 중요한 원칙은 절대로 하루아침에 약을 임의로 끊어서는 안 되며, '점진적 감량(테이퍼링, Tapering)'을 거쳐야 한다는 점입니다.\n\n해아림한의원의 안전한 4단계 단약 로드맵:\n1. 1단계 (신체 밭 조성): 양약을 기존 용량 그대로 복용하면서, 뇌 신경세포의 자생력을 키우는 청열안신 한약과 침 치료를 병행합니다. 신체 스스로 불안을 다스리는 힘을 먼저 50% 이상 끌어올립니다.\n2. 2단계 (미세 감량 시작): 주치의와 상의하여 2~4주 간격으로 기존 양약 용량의 10~25%씩 미세하게 줄여나갑니다. 약을 쪼개어 서서히 감량하므로 뇌가 금단 증상을 거의 눈치채지 못합니다.\n3. 3단계 (격일 복용 전환): 매일 먹던 약을 이틀에 한 번, 사흘에 한 번으로 복용 간격을 넓혀갑니다.\n4. 4단계 (완전 단약 및 자립): 양약을 완전히 중단하고 비상약으로만 소지하며, 최종적으로 한약 복용까지 종결하여 온전한 내 몸의 힘으로 일상을 영위합니다.\n\n해아림한의원은 수많은 환자분들의 안전한 단약 성공 사례를 보유하고 있습니다. 약물에 대한 죄책감이나 두려움을 내려놓으십시오. 체계적인 한양방 통합 테이퍼링을 통해 약 없이도 고요하고 당당한 당신의 일상을 반드시 되찾아 드리겠습니다.\n\n[공황장애 정밀검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2024.09.02",
            "image": "/images/columns/column_20_metabolism.svg",
            "views": 1875
          },
          {
            "id": "col-auto-19-1788883800000",
            "colIndex": 19,
            "category": "야간 공황",
            "title": "자다가 갑자기 숨 막히고 심장 쿵쾅거리며 깨어나는 '야간 공황발작(Nocturnal Panic)'의 원인과 대처",
            "summary": "비렘 수면 중 뇌간 이산화탄소 감지 센서의 과민 반응과 심포(心包)의 허열: 잠자는 것조차 두려워진 야간 공황의 한방 수면 치법.",
            "content": "낮에는 일하느라 정신이 없어 비교적 괜찮았는데, 밤에 잠든지 2시간쯤 지난 새벽 1~2시경 갑자기 누군가 목을 조르는 것처럼 숨이 턱 막히며 번쩍 눈이 떠진다는 분들이 많습니다. 심장은 가슴을 뚫고 나올 듯 방망이질 치고, 온몸은 식은땀으로 흥건하며, 침대에서 벌떡 일어나 창문을 열고 헐떡여야 간신히 진정된다며 밤에 침대에 눕는 것 자체가 저주처럼 무섭다고 하십니다.\n\n깨어 있을 때도 아닌, 무방비 상태로 깊이 잠든 한밤중에 왜 공황발작이 일어나는 걸까요?\n수면다원검사 연구에 따르면, 야간 공황발작은 꿈을 꾸는 렘(REM) 수면이 아니라 꿈을 꾸지 않는 깊은 비렘(Non-REM) 수면 2~3단계에서 발생합니다. 즉 악몽 때문이 아닙니다.\n\n결정적인 원인은 뇌간(Brainstem)에 위치한 '이산화탄소 과민 센서'의 오작동에 있습니다.\n잠에 깊이 빠져들면 호흡수가 자연스럽게 느려지면서 체내에 이산화탄소가 미세하게 축적됩니다. 건강한 뇌는 이를 지극히 정상적인 수면 생리로 인식하지만, 공황장애 환자의 뇌간 센서는 극도로 과열되어 있어 이 작은 이산화탄소 변화를 \"지금 숨이 막혀 죽어간다!\"는 치명적인 질식 위험으로 오판합니다.\n\n그 순간 뇌간의 청색반(Locus Coeruleus)에서 노르에피네프린 폭탄을 투하하여 환자를 강제로 번쩍 깨우고, 심박수를 폭주시킵니다. 환자는 잠에서 깨어나는 0.1초 만에 최악의 패닉 상태로 직행하게 되는 것입니다.\n\n한의학에서는 이를 밤사이 음혈(陰血)이 부족해져 허열이 뇌와 심장을 불태우는 '음허화동(陰虛火動)'이자 '심담허겁(心膽虛怯)'의 대표적 병증으로 다스립니다.\n\n치료의 핵심은 수면제나 진정제로 뇌를 억지로 재우는 것이 아닙니다. 뇌수를 보양하고 심포의 열을 식히는 산조인탕(酸棗仁湯), 천왕보심단(天王補心丹) 가감방을 통해 야간 뇌간의 질식 감지 역치를 정상으로 끌어올려야 합니다. \n\n아울러 취침 2시간 전 스마트폰 차단, 따뜻한 온수 족욕을 통한 상열하한(上熱下寒) 교정, 취침 전 4-6 복식호흡을 병행하면, 뇌는 비로소 새벽의 불청객 없이 아침 햇살을 맞이할 때까지 끊김 없는 깊은 숙면의 축복을 누리게 됩니다.\n\n[공황장애 정밀검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2023.12.31",
            "image": "/images/columns/column_19_burnout_vagus.svg",
            "views": 1900
          },
          {
            "id": "col-auto-18-1788883700000",
            "colIndex": 18,
            "category": "운전 공황",
            "title": "운전 중 터널이나 고속도로, 다리 위에서 식은땀 나고 핸들 놓칠 것 같을 때의 극복 훈련",
            "summary": "시각적 폐쇄감과 탈출 불가능성 인지가 부르는 운전 공황장애의 뇌과학적 원인과 비상등 켜기, 룸미러 시선 풀기 등 실전 도로 주행 훈련.",
            "content": "10년 무사고 베테랑 운전자였는데, 어느 날 강변북로를 달리다가 갑자기 심장이 터질 듯 뛰고 눈앞이 핑 돌며 핸들을 놓칠 것 같았다는 분들이 많습니다. 갓길도 없는 다리 위나 긴 터널에 들어가면 갇혀서 사고를 낼 것 같아 차를 버리고 뛰쳐나가고 싶어 차 키를 잡기만 해도 손에 식은땀이 차서 운전을 완전히 접었다는 호소는 생업과 출퇴근이 걸려 있어 환자에게 가장 치명적인 타격을 줍니다.\n\n운전 중에 유독 터널, 고속도로, 다리 위에서 공황발작이 빈발하는 이유는 무엇일까요?\n여기에는 '시각적 터널 폐쇄감'과 '즉각 탈출 불가능성(No-Exit)'이라는 두 가지 뇌신경학적 트리거가 결합하기 때문입니다.\n\n터널 안으로 진입하는 순간 주변 시야가 어두워지고 좁아지며, 터널 벽면의 환풍기 소음과 조명이 빠른 속도로 시신경을 때립니다. 이때 뇌 편도체는 \"출구가 멀고 도망칠 갓길이 없다\"는 치명적인 갇힘 신호를 감지합니다. \n\n시속 80~100km로 달리는 속도감 속에서 \"내가 지금 기절하면 대형 참사가 난다\"는 파국적 상상이 번개처럼 뇌를 스치는 순간, 아드레날린이 혈관 속으로 쏟아지며 핸들을 쥔 손이 부들부들 떨리고 다리에 힘이 풀리는 것입니다.\n\n운전 중 공황이 찾아왔을 때 안전을 지키는 실전 운전 행동 매뉴얼입니다:\n\n1. 비상등을 켜고 하위 차로로 이동하기: 비상등을 켜는 순간 뒤차들이 안전거리를 확보해 주므로 조급함이 50% 사라집니다. 가장 바깥쪽 차선으로 천천히 진입하십시오.\n2. 룸미러와 계기판에서 시선 풀기: 공황이 오면 뒤차의 눈치를 보느라 룸미러를 과도하게 쳐다보게 됩니다. 시선을 앞차의 번호판이나 차선 중앙에 길게 두고 창문을 3cm 정도 내려 시원한 바깥바람을 쐬십시오.\n3. 핸들을 쥔 손가락에 힘 빼기: 핸들을 부서져라 꽉 쥐면 흉근과 목 근육이 경직되어 호흡이 더 가빠집니다. 손가락을 꼼지락거리며 가볍게 얹어놓는 느낌으로 쥐십시오.\n4. 단계적 도로 노출 훈련: 동네 골목길 10분 운전부터 시작하여, 신호등이 많은 국도, 갓길이 넓은 자동차 전용도로, 터널 주행으로 단계별 난이도를 서서히 높여가야 합니다.\n\n해아림한의원에서는 운전 공포를 유발하는 뇌 편도체의 과민도를 낮추는 시호가용골모려탕 계열의 맞춤 한약과 경추 추나요법을 통해 흉골과 횡격막의 긴장을 해소해 드립니다. 두려움을 피하지 않고 안전하게 다스릴 수 있을 때, 당신의 드라이브는 다시 자유롭고 상쾌한 힐링의 시간이 될 것입니다.\n\n[공황장애 정밀검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2023.04.29",
            "image": "/images/columns/column_18_gut_brain_axis.svg",
            "views": 1925
          },
          {
            "id": "col-auto-17-1788883600000",
            "colIndex": 17,
            "category": "호흡 관리",
            "title": "과호흡 증후군으로 손발이 저리고 경련이 일어날 때: 종이봉투 호흡은 왜 위험하며 올바른 호흡은 무엇인가?",
            "summary": "호흡성 알칼리증의 병태생리와 과거 유행했던 봉투 호흡의 저산소증 위험성, 안전하게 과호흡을 멈추는 구순 복식호흡 실전법.",
            "content": "갑자기 숨이 가빠져 헐떡이다 보니 손가락이 안쪽으로 오그라들며 뻣뻣하게 굳고, 입술 주변과 손발이 찌릿찌릿 마비되면서 경련이 일어났다는 분들이 많습니다. TV에서 본 대로 종이봉투를 입에 대고 숨을 쉬었는데 오히려 더 숨이 막혀 기절할 뻔했다는 호소는 응급실로 실려 오는 공황발작 환자분들이 가장 극심한 신체적 공포를 겪는 순간인 '과호흡 증후군(Hyperventilation Syndrome)'의 전형적인 모습입니다.\n\n숨이 안 쉬어진다고 느끼는데, 왜 손발이 굳고 마비가 올까요?\n여기에는 정반대의 생리학적 역설이 숨어 있습니다.\n\n환자는 산소가 부족하다고 착각하여 1분에 30~40회씩 얕고 빠른 숨을 몰아쉽니다. 하지만 이때 체내 산소는 차고 넘치는 반면, 날숨을 통해 혈액 속의 '이산화탄소(CO2)'가 비정상적으로 과도하게 배출됩니다. \n\n이산화탄소 농도가 바닥을 치면 혈액의 산도(pH)가 급격히 알칼리성으로 치솟는 '호흡성 알칼리증(Respiratory Alkalosis)'이 발생합니다. 혈액이 알칼리화되면 혈중 칼슘 이온이 단백질과 결합하여 신경세포의 흥분성이 폭발하고, 말초 신경이 오작동을 일으켜 손가락이 닭발처럼 오그라드는 근육 경련(테타니, Tetany)과 손발 저림이 나타나는 것입니다. 동시에 뇌혈관이 수축하여 뇌 혈류량이 40% 이상 급감하므로 극심한 어지럼증과 실신 위기를 겪게 됩니다.\n\n종이봉투 호흡법은 왜 현대 의학에서 금지되었을까요?\n과거에는 배출된 이산화탄소를 다시 들이마시게 하려고 비닐봉지나 종이봉투 호흡을 권장했습니다. 그러나 현대 응급의학에서는 이를 원칙적으로 금지하고 있습니다. 실제 심장마비나 기흉, 천식 환자가 봉투 호흡을 할 경우 치명적인 '저산소증 뇌 손상'이나 심정지를 유발할 수 있기 때문입니다.\n\n생명을 지키는 안전한 '구순 복식호흡(Pursed-lip Breathing)' 3단계를 실천하십시오:\n1. 입술을 모으고 길게 내쉬기: 생일 케이크의 촛불을 천천히 끄듯 입술을 동그랗게 모으고 6초 동안 '후---' 하고 천천히 길게 내쉽니다.\n2. 코로 짧게 들이마시기: 들이마실 때는 코로 2~3초간 부드럽게 공기를 채웁니다.\n3. '내쉬는 숨'에만 80% 집중하기: 들이마시려 애쓰지 말고, 폐 안의 공기를 다 비워낸다는 느낌으로 길게 내쉬면 자연스럽게 이산화탄소가 체내에 축적되면서 손발 경련이 수분 내에 마법처럼 풀립니다.\n\n해아림한의원에서는 횡격막과 흉곽 근육의 과긴장을 풀어주는 침 치료와 함께, 뇌간의 이산화탄소 감지 센서를 안정화하는 한약 처방을 통해 과호흡 공포로부터 신속하게 벗어나도록 치료합니다.\n\n[공황장애 정밀검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2022.08.26",
            "image": "/images/columns/column_17_alcohol.svg",
            "views": 1950
          },
          {
            "id": "col-auto-16-1788883500000",
            "colIndex": 16,
            "category": "예기불안",
            "title": "공황발작 후 매일 찾아오는 '또 발작하면 어쩌지'라는 '예기불안(Anticipatory Anxiety)' 없애는 법",
            "summary": "발작 자체보다 환자의 24시간을 더 지옥으로 만드는 예기불안의 악순환을 끊는 인지 재구조화와 심포(心包) 안정 한방 치법.",
            "content": "일주일에 한 번 오는 20분간의 발작보다, 매일 아침 눈을 뜰 때부터 잠들 때까지 '오늘 또 지하철에서 발작하면 어쩌지?', '회의 시간에 숨 막히면 어쩌지?'라는 두려움에 사로잡혀 있는 24시간이 천 배는 더 지옥 같다는 분들이 많습니다. 하루 종일 심장에만 신경이 곤두서 있어 아무것도 손에 잡히지 않는다는 호소는 공황장애 환자분들의 일상을 송두리째 갉아먹는 가장 지독한 독소입니다.\n\n예기불안은 왜 이토록 끈질기게 환자를 괴롭힐까요?\n뇌의 기억 사령탑인 '해마(Hippocampus)'와 공포 중추인 '편도체(Amygdala)'가 강력한 트라우마 조건반사 회로를 형성했기 때문입니다.\n\n과거 지하철이나 엘리베이터에서 극심한 공황발작을 한 번 경험하고 나면, 해마는 그 장소의 조명, 냄새, 온도, 당시의 신체 감각을 '죽음의 위험 지역'으로 완벽히 각인합니다. 이후 환자가 집 밖으로 나가려 하거나 대중교통 근처에만 가도, 편도체는 발작이 일어나기도 전에 미리 아드레날린을 뿜어내며 \"가지 마라, 위험하다!\"는 사전 경보를 24시간 울려대는 것입니다.\n\n이 상태가 고착화되면 환자는 자신의 맥박 소리, 작은 호흡 변화, 소화불량 같은 지극히 정상적인 생리 신호조차 \"발작의 전조다!\"라며 현미경으로 관찰하듯 감시하는 '신체 내적 초각성(Interoceptive Hypervigilance)'에 빠지게 됩니다.\n\n예기불안의 사슬을 끊기 위한 핵심 전략은 다음과 같습니다:\n\n1. '불안(Worry)'과 '위험(Danger)'을 분리하기: 불안한 감정이 든다고 해서 실제로 위험한 일이 일어나는 것은 아닙니다. \"지금 드는 생각은 고장 난 뇌 회로가 만들어낸 가짜 알람일 뿐이다\"라고 꼬리표를 붙이십시오.\n2. '만약 ~하면 어쩌지(What if)?' 사고 중단: \"만약 터널에서 숨 막히면?\"이라는 파국적 생각 뒤에 즉시 \"그래서 뭐(So what)? 10분 심호흡하면 지나갈 텐데\"라는 현실적 대답을 붙여 상상을 강제로 종료하십시오.\n3. 신체 감각에 대한 주의 분산 (외부 집중 훈련): 심장 박동에 쏠려 있는 시선을 바깥으로 돌려, 눈앞에 보이는 파란색 물건 3개 찾기, 주변의 소리 3가지 구별하기 등 외부 환경으로 주의를 의도적으로 전환하십시오.\n\n한의학에서는 이를 심담허겁(心膽虛怯)이자 심포(心包)의 진액이 말라 가벼운 자극에도 크게 놀라는 병증으로 규정합니다. 해아림한의원에서는 심장과 담력을 보강하는 온담탕(溫膽湯), 귀비탕(歸脾湯) 맞춤 처방을 통해 공포 신경망의 전기적 과열을 진정시키고, 예기불안이 일상생활을 잠식하지 못하도록 단단한 정신적 방파제를 세워드립니다.\n\n[공황장애 정밀검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2021.12.23",
            "image": "/images/columns/column_16_hormone.svg",
            "views": 1975
          },
          {
            "id": "col-auto-15-1788883400000",
            "colIndex": 15,
            "category": "식이 관리",
            "title": "커피, 에너지음료, 카페인 한 잔만 마셔도 심장이 쿵쾅거리고 공황이 오는 뇌과학적 이유",
            "summary": "아데노신 수용체 차단과 중추 교감신경의 급격한 흥분 메커니즘, 공황 환자의 카페인 민감도와 안전한 대체 한방차 가이드.",
            "content": "남들은 아침마다 아메리카노 두세 잔씩 잘만 마시는데, 저는 커피 세 모금만 홀짝여도 심장이 가슴을 뚫고 나올 듯 뛰고 손이 덜덜 떨리며 숨이 막혀옵니다. 스타벅스 디카페인 커피를 마셔도 불안감이 올라오는데, 제 몸이 왜 이렇게 커피에 유난을 떠는 걸까요? 현대인의 필수품인 커피 한 잔을 마시지 못해 사회생활에서 큰 고충을 겪으시는 분들의 하소연입니다.\n\n공황장애 환자가 카페인을 마셨을 때 겪는 극단적인 신체 반응은 심리적인 기분 탓이 아니라, 매우 명확한 분자신경생물학적 기전 때문입니다.\n\n우리 뇌에는 하루 종일 열심히 일하고 나면 피로를 감지하여 뇌세포의 활동을 진정시키고 쉬게 만드는 '아데노신(Adenosine)'이라는 천연 수면·진정 물질이 분비됩니다. 그런데 카페인의 분자 구조는 놀랍게도 이 아데노신과 쌍둥이처럼 똑같이 생겼습니다.\n\n커피를 마시면 카페인이 뇌의 아데노신 수용체에 먼저 쏙 들어가 자리를 가로채 버립니다(수용체 길항 작용). 뇌의 천연 브레이크가 고장 난 상태에서, 뇌하수체는 이를 비상사태로 인식하여 부신에 신호를 보내 아드레날린과 노르에피네프린을 대량 방출시킵니다.\n\n건강한 사람은 이 각성 효과를 '집중력 향상'으로 누리지만, 이미 편도체 경보 시스템이 예민해져 있는 공황장애 환자에게 카페인은 '불난 집에 기름을 붓는 격'이 됩니다:\n1. 심장 박동수가 분당 20~30회 급등합니다.\n2. 관상동맥과 뇌혈관이 수축하여 뇌 혈류량이 최대 20% 감소하고 머리가 멍해집니다.\n3. 혈압이 상승하고 호흡이 가빠집니다.\n환자의 뇌는 이 미세한 신체 변화를 감지하자마자 \"공황발작이 시작되었다!\"라며 파국적 공포 회로를 작동시켜 실제 패닉으로 이어지는 것입니다.\n\n공황 환자를 위한 건강한 카페인 디톡스 수칙입니다:\n- 초콜릿, 콜라, 녹차, 진통제(카페인 함유) 주의: 숨겨진 카페인 공급원을 체크하십시오.\n- 디카페인 커피의 함정: 디카페인 원두에도 1~3%의 미량 카페인이 잔류하므로, 급성기에는 디카페인조차 피하는 것이 안전합니다.\n- 뇌를 안정시키는 추천 한방차: 볶은 산조인차, 대추차, 캐모마일티, 둥굴레차는 카페인이 전혀 없으면서 심장의 열을 식히고 뇌파를 안정시키는 훌륭한 대안입니다.\n\n해아림한의원에서는 카페인 금단 과정에서 오는 두통과 무기력을 완화하고, 교감신경의 수용체 민감도를 정상으로 되돌리는 청심자음(淸心滋陰) 처방을 통해 커피 한 잔의 공포로부터 자유로운 일상을 되찾아 드립니다.\n\n[공황장애 정밀검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2021.04.21",
            "image": "/images/columns/column_15_neurotransmitter.svg",
            "views": 2000
          },
          {
            "id": "col-auto-14-1788883300000",
            "colIndex": 14,
            "category": "자가진단",
            "title": "공황장애 자가진단: 공황발작 13가지 증상 중 몇 개에 해당하면 치료를 시작해야 할까?",
            "summary": "미국정신의학회(DSM-5) 진단 기준 13대 핵심 신체·심리 증상 정밀 분석과 골든타임을 놓치지 않는 자가 체크리스트.",
            "content": "가끔 가슴이 두근거리고 어지러운데, 이게 단순한 스트레스인지 아니면 병원에 가야 하는 공황장애인지 헷갈린다는 분들이 많습니다. 몇 개나 증상이 있어야 공황장애로 진단받는지 알고 싶어 하시는 분들을 위해, 미국정신의학회(DSM-5)의 표준 진단 기준을 바탕으로 자가진단 가이드를 제시해 드립니다.\n\n공황발작(Panic Attack)은 극심한 공포와 고통이 갑작스럽게 밀려와 수분 내에 최고조(Peak)에 달하며, 아래의 13가지 증상 중 4가지 이상이 동시다발적으로 나타날 때 진단됩니다:\n\n1. 심계항진: 심장이 쿵쾅거리거나 맥박이 빨라지고 터질 것 같음\n2. 발한: 손바닥, 이마, 온몸에서 식은땀이 비 오듯 쏟아짐\n3. 떨림: 손발이나 몸 전체가 사시나무 떨듯 통제 불능으로 떨림\n4. 질식감: 숨이 가쁘거나 가슴에 공기가 들어가지 않아 숨이 막히는 느낌\n5. 호흡 곤란: 목구멍이 조여오거나 가시가 걸린 듯 헐떡임\n6. 흉통 및 흉부 불쾌감: 가슴 한가운데가 쥐어짜듯 아프거나 뻐근하게 조여옴\n7. 메스꺼움 및 복부 불편감: 속이 뒤집히거나 체한 듯 토할 것 같음\n8. 어지럼증 및 멍함: 머리가 붕 뜨거나 핑 돌며 기절할 것 같음\n9. 한기 또는 열감: 온몸에 오한이 들며 덜덜 떨리거나 반대로 얼굴로 화염이 치솟음\n10. 감각 이상: 손가락, 발가락, 입술 주변이 찌릿찌릿 저리거나 마비되는 느낌\n11. 비현실감(Derealization) 및 이인증: 세상이 꿈속 같거나 내 몸이 남의 몸처럼 생경함\n12. 통제 상실에 대한 공포: 내가 미쳐버리거나 자제력을 잃고 난동을 부릴 것 같음\n13. 죽음에 대한 공포: 이대로 심장이 멎거나 숨이 막혀 죽을 것 같은 파멸적 공포\n\n치료가 시급한 결정적 기준은 '예기불안'과 '회피행동'입니다.\n위 13가지 증상 중 4가지 이상을 경험한 뒤, 다음 중 하나라도 해당한다면 이미 단순 일회성 발작을 넘어 '공황장애(Panic Disorder)'로 발전한 상태이므로 즉시 전문 치료를 시작해야 합니다:\n- \"또 발작이 오면 어쩌지?\"라며 한 달 이상 지속적으로 불안해하고 전전긍긍하는 경우\n- 발작이 올까 두려워 지하철, 엘리베이터, 고속도로 운전, 모임 참석을 피하기 시작한 경우\n\n공황장애는 발병 후 3개월 이내에 조기 치료를 시작하면 80% 이상이 수개월 내에 완치됩니다. 그러나 방치하여 광장공포증과 우울증으로 번지면 치료 기간이 수년으로 길어질 수 있습니다. 의심 신호가 켜졌을 때 즉시 진료실 문을 두드리십시오.\n\n[공황장애 정밀검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2020.08.18",
            "image": "/images/columns/column_14_vagus_stimulation.svg",
            "views": 2025
          },
          {
            "id": "col-auto-13-1788883200000",
            "colIndex": 13,
            "category": "완치 로드맵",
            "title": "공황장애는 완치가 되나요? 재발 없이 일상으로 복귀하는 3단계 치료 로드맵",
            "summary": "평생 약을 먹어야 한다는 불안을 종식시키는 체계적인 3단계 치료 프로세스: 1단계 발작 제어 → 2단계 예기불안 소거 → 3단계 뇌 신경계 자생력 완성.",
            "content": "공황장애는 평생 낫지 않고 재발하는 불치병인가요? 평생 신경안정제를 품에 안고 살아야 하나요? 진료실을 찾는 환자분들이 가장 떨리는 목소리로 확인받고 싶어 하시는 질문입니다.\n\n단언컨대 말씀드립니다. 공황장애는 정확한 원인을 바로잡고 체계적인 치료 단계를 밟아나간다면 반드시 완치될 수 있으며, 이전보다 훨씬 더 단단한 뇌와 마음을 되찾을 수 있는 질환입니다.\n\n해아림한의원에서 수많은 완치 환자분들을 배출해 온 '공황장애 3단계 치료 로드맵'을 공개합니다.\n\n1단계: 급성 발작 제어 및 신체 안정화 (치료 1~2개월 차)\n- 목표: 일주일에 수차례씩 터지는 급성 공황발작의 빈도와 강도를 80% 이상 줄이고 응급실에 가지 않는 상태 만들기.\n- 치료: 과열된 뇌 편도체의 스위치를 내리고 교감신경의 폭주를 진정시키는 청열안신(淸熱安神) 맞춤 한약 투여. 두개천골요법을 통해 뇌척수액 순환을 정상화하고 횡격막 긴장을 풀어 호흡 곤란을 즉각 완화합니다.\n\n2단계: 예기불안 소거 및 회피 행동 정복 (치료 3~4개월 차)\n- 목표: \"또 발작하면 어쩌지\"라는 24시간 불안을 없애고, 지하철, 터널, 마트 등 그동안 두려워서 피했던 일상 공간으로 다시 발을 들이기.\n- 치료: 뇌 신경계의 GABA와 세로토닌 합성 능력을 길러주는 보혈안신(補血安神) 처방 가동. 인지행동 재구조화 훈련과 단계적 노출 치료를 병행하여 회피 행동을 하나씩 정복해 나갑니다. 현재 양약을 복용 중이라면 이 단계에서 점진적 감약(테이퍼링)을 안전하게 시작합니다.\n\n3단계: 뇌 신경계 자생력 완성 및 완치 판정 (치료 5~6개월 차)\n- 목표: 직장 스트레스나 과로가 찾아와도 스스로 평온한 균형을 회복하는 생체 항상성(Homeostasis) 구축, 약물 완전 중단.\n- 치료: 심포와 간신의 원기를 북돋우는 체질 보양 한약으로 뇌 신경망의 복원력을 견고히 다집니다. 자율신경 균형 검사(HRV)와 정밀 뇌기능 검사를 통해 객관적 완치를 판정하고 사후 관리 프로토콜을 전수합니다.\n\n공황장애는 당신의 삶이 무너진 징벌이 아닙니다. 지난 세월 너무 열심히 달려오느라 지친 당신의 뇌와 몸이 \"이제는 나를 좀 돌보아 달라\"고 간절히 외치는 구조 신호입니다. 해아림이 그 회복의 길을 끝까지 함께 걷겠습니다.\n\n[공황장애 정밀검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2019.12.16",
            "image": "/images/columns/column_13_somatization.svg",
            "views": 2050
          },
          {
            "id": "col-auto-12-1788883100000",
            "colIndex": 12,
            "category": "폐소공포",
            "title": "치과 진료대, 미용실 샴푸대, 비행기 안에서 갑자기 덮치는 질식감과 폐소공포 탈출법",
            "summary": "신체 고정과 목 압박 자세가 유발하는 경동맥동 반사와 폐소공포의 신경학적 결합 기전, 그리고 현장 탈출 실전 노하우.",
            "content": "치과 의자에 뒤로 눕는 순간 가슴이 턱 막히고 의사가 입안에 기구를 넣으면 질식해 죽을 것 같아 벌떡 일어났다는 분들이 많습니다. 미용실 샴푸대에서 머리를 뒤로 젖힐 때도, 비행기 좌석에 안전벨트를 매는 순간에도 도망칠 수 없다는 공포가 목을 조여와 일상적인 미용실, 치과, 비행기 탑승조차 불가능해져 깊은 자괴감과 절망에 빠지곤 합니다.\n\n왜 유독 치과 진료대와 미용실 샴푸대에서 이러한 극심한 공황이 터지는 걸까요?\n여기에는 심리적인 요인뿐 아니라 매우 명확한 신경해부학적 기전이 숨어 있습니다.\n\n목 뒤쪽에는 뇌로 피를 공급하는 내경동맥과 함께 혈압을 조절하는 '경동맥동(Carotid Sinus)'과 제10뇌신경인 '미주신경(Vagus Nerve)'이 지나갑니다. 의자를 뒤로 젖히고 목을 과도하게 신전(뒤로 꺾음)시킨 상태에서 입을 벌리거나 천을 목에 두르면, 경동맥동이 물리적으로 압박을 받습니다.\n\n이때 뇌는 혈압이 급격히 치솟았다고 착각하여 심박수를 떨어뜨리고 혈압을 급강하시키는 미주신경성 쇼크 반응을 일으킵니다. 뇌로 가는 혈류가 일시적으로 줄어들며 멍함과 어지럼증이 나타나고, 턱을 벌리고 누운 자세 때문에 혀뿌리가 뒤로 넘어가 기도가 좁아지면서 실제 생리학적 질식감이 촉발되는 것입니다.\n\n여기에 \"치료 중에 내가 뛰쳐나갈 수 없다\", \"의사에게 민폐를 끼치면 안 된다\"는 인지적 갇힘(Entrapment) 공포가 결합하면서 편도체가 폭발적인 공황발작을 터뜨리게 됩니다.\n\n이를 극복하기 위한 현장 실전 대처법을 권해드립니다:\n1. 의료진 및 미용사에게 사전에 오픈하기: 치료 전 \"제가 공황장애가 있어서 뒤로 완전히 눕거나 답답하면 신호를 보낼 테니 1분만 세워달라\"고 솔직히 말씀하십시오. 언제든 멈출 수 있다는 통제권(Sense of Control)을 확보하는 것만으로도 발작 위험이 70% 감소합니다.\n2. 비언어적 손 신호(Stop Signal) 약속하기: 왼손을 들면 즉시 시술을 멈추기로 약속하십시오.\n3. 각도 조절 요청: 의자를 180도로 완전히 눕히지 말고 15~20도 정도 약간 세운 상태에서 진료를 받으십시오.\n4. 발가락 꼼지락거리기 (신체 감각 접지): 시선이 천장에 고정되어 공포가 커질 때는 발가락을 계속 꼼지락거리며 신체 하부의 감각에 의식을 집중하십시오.\n\n해아림한의원에서는 상부 경추의 아탈구와 턱관절의 불균형을 교정하는 추나요법을 통해 경동맥동의 과민한 기계적 압박을 해소해 드립니다. 목과 턱이 편안해지면, 갇힌 공간에서도 질식감 없이 여유로운 호흡을 유지할 수 있습니다.\n\n[공황장애 정밀검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2019.04.13",
            "image": "/images/columns/column_12_rebound_hypotension.svg",
            "views": 2075
          },
          {
            "id": "col-auto-11-1788883000000",
            "colIndex": 11,
            "category": "한방 기전",
            "title": "공황장애 한약 치료는 양약과 어떻게 다를까? 중독과 내성 없는 뇌 신경계 조율 원리",
            "summary": "화학적 수용체 차단 방식의 양약 대증치료와 뇌간-변연계 자율신경 항상성을 재건하는 한방 근본 치료의 메커니즘 심층 비교.",
            "content": "정신건강의학과에서 알프라졸람(자낙스)과 항우울제를 처방받아 먹고 있는데, 먹을 때는 잠시 가라앉지만 약기운이 떨어지면 다시 불안하고 머리가 하루 종일 멍하다고 호소하시는 분들이 많습니다. 한의원 한약 치료는 신경정신과 약과 원리가 어떻게 다른지, 한약도 양약처럼 내성이 생기거나 끊기 힘든 것은 아닌지 궁금해하십니다.\n\n양약과 한약은 공황장애를 바라보고 다스리는 생리학적 관점과 작용 메커니즘에서 근본적인 차이가 있습니다.\n\n1. 신경정신과 양약의 기전: '신경전달물질의 화학적 강제 조절'\n자낙스, 리보트릴 같은 벤조디아제핀계 약물은 뇌의 브레이크에 해당하는 GABA 수용체에 인위적으로 달라붙어 뇌세포의 전기를 강제로 마취시킵니다. 불이 났을 때 소화기를 뿜어 급한 불길을 잡는 데는 탁월하지만, 약효가 빠져나가면 뇌는 스스로 흥분을 억제하는 능력이 퇴화하여 '약물 내성'과 '반동 불안'이라는 덫에 갇히기 쉽습니다.\n\n2. 한방 한약 치료의 기전: '자율신경계 항상성과 뇌 환경의 재건'\n한의학에서는 겉으로 드러난 '불안'이라는 감정만을 억누르지 않습니다. 불안과 공황을 촉발하는 신체 내부의 환경, 즉 '심포(心包)의 울화(鬱火)', '담음(痰飮)', '기혈 허약'이라는 장부 불균형의 근본 원인을 다스립니다:\n- 치자, 황련, 황금: 과열된 뇌간과 편도체의 열을 내려 신경세포막의 과민한 이온 통로를 안정시킵니다.\n- 산조인, 백자인, 원지: 심장에 혈액을 공급하고 뇌 신경세포의 자연스러운 GABA 및 세로토닌 합성 능력을 회복시킵니다.\n- 반하, 복령, 진피: 위장과 횡격막 주변의 담적 노폐물을 배출하여 숨길을 틔워주고 미주신경 전도를 원활히 합니다.\n\n가장 중요한 사실은 체질에 맞춘 한약 처방은 화학적 중독성이나 내성이 전혀 없다는 점입니다. 뇌를 강제로 억압하는 것이 아니라 뇌 신경계 스스로 흥분을 가라앉히는 '자생력(Homeostasis)'을 길러주기 때문입니다. 따라서 치료가 완료되어 한약을 완전히 끊더라도 증상이 다시 튀어 오르는 반동 현상이 없습니다.\n\n해아림한의원에서는 현재 양약을 복용 중인 환자분들의 경우, 양약을 급하게 끊지 않고 한약 치료를 병행하면서 신체 조절력이 60%, 80%, 100% 차오름에 따라 주치의와 상의하여 양약을 안전하게 테이퍼링(점진적 감량)해 나가는 통합 치료 시스템을 구축하고 있습니다.\n\n[공황장애 정밀검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2018.08.10",
            "image": "/images/columns/column_11_chronic_fatigue.svg",
            "views": 2100
          },
          {
            "id": "col-auto-10-1788882900000",
            "colIndex": 10,
            "category": "전조증상",
            "title": "공황발작 오기 직전 전조증상(머리 멍함, 목 조임, 어지럼, 한기) 알아채고 5분 안에 차단하기",
            "summary": "발작 10~15분 전 신체가 은밀하게 보내는 4대 전조 신호를 포착하고, 교감신경 폭주를 초기에 차단하는 미주신경 자극 찬물 세안 및 지압법.",
            "content": "많은 공황장애 환자분들이 공황발작이 마치 마른하늘에 날벼락이 치듯 아무런 예고도 없이 0.1초 만에 덮친다고 생각합니다. 그러나 인체 생리학적으로 아드레날린이 분비되고 전신 교감신경이 폭주하기까지는 반드시 10~15분 전부터 신체가 은밀하게 보내는 '미세 전조 신호(Early Warning Signs)'가 존재합니다.\n\n이 골든타임을 알아채고 초기에 대응하면, 발작이 최고조(Peak)로 치닫는 것을 사전에 막거나 아주 경미한 수준에서 조기에 진화할 수 있습니다. 환자분들이 가장 자주 놓치는 4대 전조증상은 다음과 같습니다:\n\n1. 머리가 안개 낀 듯 멍해지고 아득해지는 느낌 (브레인포그): 뇌혈관이 일시적으로 수축하며 집중력이 떨어지고 시야가 뿌옇게 흐려집니다.\n2. 목구멍에 가시나 알사탕이 걸린 듯 조여오는 느낌 (매핵기, 梅核氣): 뇌신경 긴장으로 인후부 평활근이 수축하며 침을 삼키기 답답해집니다.\n3. 손끝, 발끝이 싸늘해지거나 식은땀이 배어 나오는 한기: 혈액이 내부 장기와 근육으로 집중되면서 말초 혈관이 닫히는 신호입니다.\n4. 가슴 한가운데가 싸-하게 서늘해지거나 덜컥 내려앉는 느낌: 심장 자율신경절에서 조기수축 스파크가 튀기 시작하는 순간입니다.\n\n이러한 전조 신호가 감지되었을 때 즉시 실천해야 할 '5분 차단 프로토콜'을 기억하십시오:\n\n- 찬물 세안 또는 얼음 대기 (포유류 잠수 반사 유도): 차가운 물을 얼굴에 끼얹거나 차가운 물병을 양 볼과 눈 아래에 대십시오. 인체는 차가운 물에 닿으면 반사적으로 심박수를 떨어뜨리고 부교감신경을 급격히 켜는 '잠수 반사(Diving Reflex)'를 작동시킵니다.\n- 내관혈(內關穴) 및 신문혈(神門穴) 강한 지압: 손목 안쪽 주름에서 팔꿈치 쪽으로 손가락 두 마디 위 힘줄 사이에 위치한 내관혈을 반대쪽 엄지손가락으로 30초간 묵직하게 누릅니다. 미주신경의 심장 가지를 즉각 자극하여 맥박을 안정시킵니다.\n- 인지적 정지 명령(Stop Command): 속으로 크게 \"스톱! 지금 내 몸이 가짜 신호를 보내고 있구나. 5분만 천천히 숨을 내쉬면 사라진다\"라고 소리칩니다.\n\n해아림한의원에서는 환자마다 제각기 다른 전조 신호 패턴을 객관적으로 분석하여, 발작이 터지기 전 신경계의 기저 긴장을 완화하는 1:1 맞춤 상비 한약과 자가 관리 프로토콜을 전수해 드립니다. 신호가 보일 때 통제할 수 있다는 자신감이 생길 때, 공황은 더 이상 공포의 대상이 아닙니다.\n\n[공황장애 정밀검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2017.12.07",
            "image": "/images/columns/column_10_gastric_nerve.svg",
            "views": 2125
          },
          {
            "id": "col-auto-9-1788882800000",
            "colIndex": 9,
            "category": "진단 해설",
            "title": "응급실 검사상 '심장, 뇌 아무 이상 없다'는데 왜 나는 죽을 것 같을까? 뇌의 화재경보기 오작동",
            "summary": "구조적 질환이 아닌 뇌 편도체 경보 소프트웨어의 기능적 고장: 스프링클러가 불도 안 났는데 터진 것과 같은 공황의 신경생리학적 본질 해설.",
            "content": "새벽에 갑자기 심장이 분당 150회로 요동치고 숨이 턱 막혀 이러다 죽겠다 싶어 119 구급차를 타고 대학병원 응급실로 달려갔습니다. 피검사, 심전도, 엑스레이, 심근경색 트로포닌 효소 검사까지 4시간 동안 수많은 검사를 받았는데 의사 선생님은 \"수치가 너무 정상입니다. 댁에 가셔도 좋습니다\"라고 합니다. 나는 방금 죽음의 공포를 맛봤는데 아무 이상이 없다니, 도대체 왜 이런 일이 일어나는 걸까요?\n\n환자분들이 반드시 이해하셔야 할 가장 핵심적인 의학적 진실은, 공황장애는 장기의 '구조(Hardware)'가 망가진 병이 아니라 신호를 조율하는 '기능(Software)'이 오작동을 일으킨 질환이라는 점입니다.\n\n이를 건물에 비유하면 쉽게 이해할 수 있습니다. \n대형 빌딩의 천장에 달린 화재감지기는 평소 연기나 불꽃을 감지하면 즉시 요란한 사이렌을 울리고 스프링클러를 터뜨려 물을 쏟아붓습니다. 이것이 바로 우리 뇌의 공포 중추인 '편도체(Amygdala)'와 자율신경계가 담당하는 생존 방어 반응입니다.\n\n그런데 화재감지기가 고장 나서, 방 안에 불은커녕 담배 연기 하나 없는데도 한밤중에 사이렌을 100데시벨로 울리고 스프링클러를 사방으로 분사한다고 상상해 보십시오. 건물의 벽돌이나 기둥(심장, 폐, 뇌혈관) 자체는 아무런 손상이 없지만, 건물 안의 사람들은 물에 흠뻑 젖고 비상벨 소리에 혼비백산하여 비명을 지르게 됩니다.\n\n공황발작이 바로 이것입니다. 환자의 심장 근육과 폐 조직은 10대 운동선수처럼 건강합니다. 응급실 기계가 '이상 없음'을 판정하는 것은 당연한 일입니다. 하지만 뇌 편도체라는 화재경보기가 만성 스트레스, 수면 부족, 번아웃으로 인해 극도로 예민해져, 아무런 신체적 위험이 없는 평온한 순간에도 \"불이 났다! 도망쳐라!\"라며 교감신경에 아드레날린 폭탄을 투하한 것입니다.\n\n따라서 치료의 목표는 멀쩡한 심장이나 폐를 수술하는 것이 아니라, 고장 난 뇌 화재감지기의 민감도를 정상 수준으로 재설정(Calibration)하는 것입니다.\n\n해아림한의원에서는 과열된 편도체의 스위치를 내리는 청심온담(淸心溫膽) 한약과 뇌 혈류 순환을 안정화하는 침구 및 CST 치료를 통해 뇌가 가짜 경보를 스스로 구별하고 해제할 수 있도록 치료합니다. 당신의 몸은 망가지지 않았습니다. 뇌의 오작동 신호 체계만 바로잡으면 본래의 편안한 일상으로 완벽히 복귀할 수 있습니다.\n\n[공황장애 정밀검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2017.04.05",
            "image": "/images/columns/column_9_sweat_dysregulation.svg",
            "views": 2150
          },
          {
            "id": "col-auto-8-1788882700000",
            "colIndex": 8,
            "category": "동반 어지럼",
            "title": "공황장애와 동반되는 만성 어지럼증(PPPD): 땅이 꺼질 것 같고 붕 뜨는 느낌의 실체",
            "summary": "이석증이나 전정신경염 검사는 정상인데 구름 위를 걷듯 어지러운 '지속성 체위-지각 어지럼증(PPPD)'과 상부 경추-뇌신경 한방 추나 치법.",
            "content": "이비인후과에서 어지럼증 검사를 다 해봤는데 이석증도 아니고 달팽이관도 정상이라고 합니다. 뇌 MRI를 찍어도 아무 이상이 없다고 하는데, 길을 걸을 때마다 스펀지 위를 걷는 것처럼 붕 뜨고, 바닥이 푹 꺼지는 느낌이 들며, 가만히 서 있어도 배를 탄 것처럼 울렁거린다는 환자분들이 많습니다. 공황장애 약을 먹어도 이 지독한 어지럼증은 왜 낫지 않을까요?\n\n현대 신경이과학에서는 이 증상을 '지속성 자세-지각 어지럼증(PPPD, Persistent Postural-Perceptual Dizziness)'으로 규명합니다.\n\nPPPD는 귀의 전정기관 자체에 물리적 손상이 있어서가 아니라, 과거에 겪었던 급성 공황발작이나 심한 스트레스 사건 이후 뇌가 신체의 균형을 감지하는 '자세 지각 소프트웨어'에 치명적인 오작동이 남았기 때문입니다.\n\n우리가 서 있거나 걸을 때 뇌는 귀(전정신경), 눈(시각), 발바닥(고유수용감각)이라는 3대 감각 센서의 정보를 뇌간에서 종합하여 균형을 잡습니다. 그런데 공황장애로 교감신경이 과각성된 환자의 뇌는 균형 감각의 역치가 극도로 낮아져, 정상적인 사람이 인식하지도 못하는 미세한 신체 흔들림을 \"지금 낭떠러지로 추락하고 있다\"는 거대한 신체 왜곡 신호로 과대 증폭하여 받아들입니다. \n\n특히 서 있거나, 사람이 많은 복도를 걷거나, 시각적 자극이 복잡한 곳에서 어지럼증이 폭발하는 특징을 보입니다. 여기에 \"또 어지러워서 쓰러지면 어쩌지?\"라는 예기불안이 더해지며 목과 어깨 근육을 뻣뻣하게 경직시켜 상부 경추의 혈류 순환을 더욱 악화시키는 악순환이 고착됩니다.\n\n한의학에서는 이를 담음(痰飮)이 뇌 청규를 가리고 기혈이 머리로 맑게 오르지 못하는 '담훈(痰暈)'이자 '기훈(氣暈)'으로 다스립니다. \n\n해아림한의원에서는 뇌간 주변의 허혈성 긴장을 해소하고 전정신경핵의 과민도를 낮추는 반하백출천마탕, 영계출감탕 처방을 기본 골격으로 합니다. 여기에 경추 1·2번의 미세 아탈구를 정밀하게 교정하는 상부 경추 추나요법과 후두하근 이완 두개천골요법을 병행하여, 뇌로 향하는 추골동맥 혈류를 시원하게 열어줍니다. 자세 감각 센서가 정상 리듬을 되찾으면, 구름 위를 걷듯 불안하던 발걸음이 마침내 단단한 대지 위에 뿌리를 내리게 됩니다.\n\n[공황장애 정밀검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2016.08.02",
            "image": "/images/columns/column_8_tinnitus_vagus.svg",
            "views": 2175
          },
          {
            "id": "col-auto-7-1788882600000",
            "colIndex": 7,
            "category": "가족 대처",
            "title": "가족이나 연인, 동료가 공황발작을 일으켰을 때 곁에서 꼭 해줘야 할 행동 5가지",
            "summary": "\"마음 약해서 그래\", \"숨 크게 쉬어\"라는 다그침이 왜 치명적인지 밝히고, 발작 현장에서 보호자가 실천해야 할 골든타임 5대 행동 수칙.",
            "content": "가족이나 연인, 가까운 동료가 갑자기 가슴을 쥐어뜯으며 숨을 헐떡이고 \"나 죽을 것 같아, 숨이 안 쉬어져\"라며 사시나무 떨듯 떨 때, 곁에 있는 보호자 역시 엄청난 당혹감과 공포에 휩싸이게 됩니다. 그러나 이때 보호자가 어떻게 대처하느냐에 따라 환자의 발작이 5분 만에 진정될 수도, 반대로 1시간 동안 통제 불능으로 치달을 수도 있습니다. 보호자가 반드시 알아야 할 5대 골든타임 수칙을 정리해 드립니다.\n\n1. 절대 하지 말아야 할 말: \"마음 굳게 먹어\", \"별것 아니야\", \"숨 크게 쉬어\"\n환자는 지금 실제로 질식해 죽는 것 같은 뇌의 비상사태를 겪고 있습니다. 여기에 대고 \"의지박약이다\", \"꾀병이다\"라고 말하는 것은 환자에게 극심한 고립감과 자괴감을 안겨 편도체를 더 흥분시킵니다. 또한 \"숨을 깊고 크게 쉬라\"고 다그치면 과호흡이 악화되어 손발이 굳고 경련이 일어납니다.\n\n2. 조용하고 통풍이 잘되는 안전한 장소로 환자를 이동시키기:\n지하철 객차 안이나 사람이 빽빽한 영화관, 마트라면 즉시 부축하여 승강장 벤치나 비상계단, 바깥 공기를 쐴 수 있는 공간으로 이동합니다. 넥타이나 단추, 벨트 등 신체를 조이는 의류를 느슨하게 풀어줍니다.\n\n3. 손을 잡아주고 안정적인 눈빛으로 현실감 유지시키기:\n환자의 손을 따뜻하고 단단하게 감싸 쥐어 신체적 접촉을 제공하십시오. \"내가 네 곁에 있어. 여기는 안전해. 이 증상으로 절대 죽지 않아\"라는 짧고 확신에 찬 문장을 낮은 톤으로 차분하게 반복해 줍니다. 보호자의 침착한 태도가 환자의 미주신경을 자극하는 최고의 안정제입니다.\n\n4. 함께 호흡 리듬을 맞춰주기 (구순 복식호흡 유도):\n\"숨을 들이마시려고 애쓰지 말고, 내 입술을 보면서 촛불을 끄듯 입으로 길게 '후-' 하고 불어내 봐.\" 보호자가 직접 천천히 숨을 내쉬는 모습을 보여주며, 4초간 코로 들이마시고 6초간 입으로 천천히 내쉬는 리듬을 환자가 따라 할 수 있도록 이끌어줍니다.\n\n5. 발작이 잦아들 때까지 곁을 지키며 안도감 주기:\n공황발작은 인체 생리학상 아드레날린이 소진되므로 20~30분 이내에 반드시 가라앉습니다. 환자의 호흡이 안정되고 맥박이 잦아들 때까지 조급해하지 말고 곁을 묵묵히 지켜주십시오.\n\n해아림한의원에서는 진료 시 환자뿐 아니라 보호자 상담을 함께 진행하여, 가정과 직장에서 환자가 심리적 안전기지를 확보할 수 있도록 돕습니다. 따뜻한 지지와 과학적 대처가 함께할 때 공황장애 극복의 시간은 절반으로 단축됩니다.\n\n[공황장애 정밀검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2015.11.30",
            "image": "/images/columns/column_7_cervical_cst.svg",
            "views": 2200
          },
          {
            "id": "col-auto-6-1788882500000",
            "colIndex": 6,
            "category": "동반 질환",
            "title": "공황장애와 우울증, 불면증이 함께 올 때: 방치하면 악화되는 3대 신경정신 질환 복합 치료",
            "summary": "반복되는 공황 발작이 세로토닌과 GABA 신경전달물질을 고갈시켜 우울증과 수면장애로 번져가는 메커니즘과 삼위일체 통합 한방 솔루션.",
            "content": "처음에는 갑자기 숨이 차고 가슴이 뛰는 공황발작뿐이었습니다. 그런데 언제 또 발작이 올지 몰라 외출도 못 하고 집에만 갇혀 지내다 보니, 어느 순간부터 잠을 잘 수가 없고 매사에 의욕이 사라지며 하루 종일 눈물만 난다는 분들이 많습니다. 낮에는 멍하고 밤에는 불안해서 미치겠다는 호소는 공황장애가 만성화된 환자분들의 60% 이상이 겪는 '공황-우울-불면'의 전형적인 삼중고입니다.\n\n임상적으로 이 세 질환은 각각 따로 떨어진 독립된 질병이 아니라, 동일한 뇌 신경전달물질 고갈과 자율신경계 붕괴라는 하나의 뿌리에서 자라난 세 줄기의 나뭇가지와 같습니다.\n\n1. 공황장애 (과각성 단계): 만성 스트레스로 인해 뇌의 공포 중추인 편도체와 교감신경이 폭주하며 아드레날린이 과다 분비되는 상태입니다.\n2. 불면증 (야간 각성 단계): 밤이 되어도 교감신경의 스위치가 꺼지지 않아 멜라토닌이 분비되지 못하고, 자는 동안에도 뇌가 경계 태세를 풀지 못해 수면 유지 장애와 조기 각성이 발생합니다.\n3. 우울증 (신경 고갈 단계): 24시간 쉬지 못하고 공포와 불면에 시달리다 보면, 뇌의 행복 호르몬인 '세로토닌'과 이완 물질인 'GABA', 의욕을 주는 '도파민'이 완전히 바닥을 드러냅니다. 이때 신체는 전원을 끄듯 무기력과 우울증 상태로 셧다운됩니다.\n\n문제는 많은 분들이 낮에는 항불안제를, 밤에는 수면제를, 기분이 가라앉으면 항우울제를 각기 따로 복용하며 약의 가짓수를 서너 알씩 늘려간다는 점입니다. 약물이 늘어날수록 뇌는 외부 화학물질에 의존하게 되어 스스로 신경전달물질을 합성하는 자생력을 잃어버리고, 아침마다 머리가 멍하고 몽롱한 약물 부작용에 갇히게 됩니다.\n\n한의학에서는 이를 심포(心包)의 화(火)가 치밀어 오르고 간신(肝腎)의 음혈이 말라버린 '심신불교(心腎不交)'이자 '기혈양허(氣血兩虛)'로 진단합니다. 치료는 증상별로 약을 덧붙이는 것이 아니라, 세 질환을 동시에 아우르는 근본 토양을 개선해야 합니다.\n\n해아림한의원에서는 낮 동안 치솟는 교감신경을 진정시키는 시호, 용골, 모려와 밤사이 뇌수를 채우고 깊은 수면을 유도하는 산조인, 백자인, 원지를 조화롭게 배합한 1:1 맞춤 한약을 처방합니다. 뇌척수액 순환을 촉진하는 두개천골요법(CST)을 결합하여 뇌 신경망의 자가 복원력을 깨워내면, 밤에는 깊은 숙면을 취하고 낮에는 공황 없는 맑은 활력을 되찾는 선순환이 완성됩니다.\n\n[공황장애 정밀검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2015.03.29",
            "image": "/images/columns/column_6_adrenal_fatigue.svg",
            "views": 2225
          },
          {
            "id": "col-auto-5-1788882400000",
            "colIndex": 5,
            "category": "심리 증상",
            "title": "공황발작 중 '내가 미쳐버리거나 통제력을 잃지 않을까?'라는 비현실감(이인증)의 정체",
            "summary": "내 몸이 내 것 같지 않고 세상이 꿈속처럼 생경하게 느껴지는 이인증·비현실감의 뇌과학적 원인과 절대 정신분열로 가지 않는 의학적 근거.",
            "content": "발작이 올 때 가슴 뛰는 것도 무섭지만, 가장 끔찍한 것은 제 손발이 남의 것 같고, 거울 속 내 얼굴이 낯설게 느껴지며, 세상이 마치 유리벽 너머의 꿈이나 영화 세트장처럼 비현실적으로 느껴지는 순간이라는 분들이 많습니다. 내가 미쳐버리는 것은 아닌지, 자제력을 잃고 옥상에서 뛰어내리거나 사람들에게 소리를 지르며 난동을 부리지는 않을지 공포스러워 견딜 수가 없다고 토로하십니다.\n\n정신의학에서는 이를 '이인증(Depersonalization)'과 '비현실감(Derealization)'이라 부릅니다. 환자분들은 자신이 조현병(정신분열증)이나 영구적인 정신이상에 걸리는 것은 아닌가 극도로 공포스러워하지만, 의학적 진실은 정반대입니다.\n\n이인증은 뇌가 미쳐가는 징후가 아니라, 극단적인 공포와 스트레스가 뇌를 태워버리는 것을 막기 위해 뇌가 스스로 작동시키는 '생리적 두뇌 누전 차단기(방어 기제)'입니다.\n\n맹수에게 물려 생사의 갈림길에 선 동물이 고통을 덜 느끼기 위해 감각을 차단하듯, 우리 뇌의 측두엽과 전두엽은 편도체의 공포 신호가 한계치를 초과하면 감각 정보의 유입을 일시적으로 분리(Dissociation)시킵니다. 그 결과 마치 유체이탈을 하거나 꿈속을 걷는 듯한 멍하고 아득한 감각이 나타나는 것입니다.\n\n여기서 가장 중요한 팩트는 공황장애 환자는 결코 미치거나 통제력을 잃지 않는다는 사실입니다.\n1. 조현병(정신이상) 환자는 자신의 감각이 왜곡되었다는 사실 자체를 인지하지 못합니다(병식 부재).\n2. 반면 공황장애 환자는 \"내가 지금 비현실적이다, 이상하다\"는 사실을 뼈저리게 인식하고 두려워합니다(완벽한 현실 검증력 유지).\n자신이 미칠까 봐 두려워한다는 사실 자체가 역설적으로 환자의 이성과 현실 판단력이 완벽하게 살아있음을 증명하는 가장 강력한 증거입니다. 또한 공황발작 중에 난동을 부리거나 자해를 하는 일은 전 세계 의학 통계상 0%에 가깝습니다.\n\n이인증이 찾아왔을 때는 자신의 손바닥을 서로 강하게 비비거나, 얼음물을 한 모금 머금거나, 발바닥이 방바닥에 닿아 있는 감각에 집중하십시오. \"이것은 뇌가 나를 보호하려는 가짜 신호일 뿐이며, 몇 분 뒤 교감신경이 가라앉으면 맑은 현실로 반드시 돌아온다\"고 되뇌어야 합니다.\n\n해아림한의원에서는 뇌간과 측두엽의 허열을 식히고 맑은 정신을 되찾아주는 영계출감탕, 귀비탕 계열 한약과 두개천골요법을 통해 안개 낀 듯한 뇌를 맑게 정화해 드립니다. 비현실감은 지나가는 구름일 뿐, 당신의 온전한 자아는 결코 흔들리지 않습니다.\n\n[공황장애 정밀검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2014.07.26",
            "image": "/images/columns/column_5_neuroplasticity.svg",
            "views": 2250
          },
          {
            "id": "col-auto-4-1788882300000",
            "colIndex": 4,
            "category": "생활 관리",
            "title": "공황장애 환자가 일상에서 반드시 피해야 할 생활 습관 5가지 (술, 담배, 밤샘, 고카페인, 과식)",
            "summary": "치료 효과를 반감시키고 뇌 편도체의 비상 스위치를 자극하는 5대 생활 위험 요인과 뇌신경 안정을 위한 일상 수칙.",
            "content": "진료실에서 공황장애 환자분들을 치료하다 보면, 한약과 침 치료로 신경계가 한창 안정되어 가다가도 특정 생활 습관의 실수 한 번으로 급격한 증상 반등을 겪는 안타까운 경우를 종종 마주합니다. 공황장애는 뇌 편도체의 경보 시스템이 극도로 예민해져 있는 질환이므로, 일상에서 신경계를 자극하는 사소한 요인들을 철저히 차단하는 것이 치료 성공의 절반을 차지합니다. 반드시 피해야 할 5대 금기 사항을 짚어드립니다.\n\n1. 음주 (알코올) - 새벽의 반동성 교감신경 폭풍:\n술을 마실 때는 일시적으로 뇌가 마취되어 불안이 가라앉는 듯 느껴지지만, 수면 중 알코올이 분해되면서 새벽 2~4시에 교감신경이 평소의 몇 배로 폭발하는 '리바운드 스톰(Rebound Storm)'이 발생합니다. 자다가 숨이 턱 막히고 심장이 터질 듯 뛰는 야간 공황발작의 1등 원인입니다.\n\n2. 흡연 (니코틴) - 뇌혈관의 급격한 수축과 산소 부족:\n담배를 피우면 순간적으로 긴장이 풀리는 착각이 들지만, 니코틴은 혈관을 급격히 수축시키고 심박수를 분당 15~20회 상승시킵니다. 일산화탄소로 인해 뇌로 가는 산소 공급이 저하되면서 뇌간이 질식 위험 신호로 오인하여 공황을 촉발합니다.\n\n3. 밤샘과 불규칙한 수면 - 전두엽의 편도체 통제력 상실:\n수면이 6시간 미만으로 부족해지면, 이성적으로 공포를 억제하는 '전전두엽'의 기능이 30% 이상 떨어지는 반면 감정 뇌인 '편도체'는 60% 이상 과열됩니다. 사소한 자극에도 공황 비상벨이 울리는 취약한 뇌 상태가 고착화됩니다.\n\n4. 고카페인 음료 (커피, 에너지드링크, 녹차):\n카페인은 뇌의 천연 진정 물질인 아데노신의 작용을 가로막고 아드레날린 분비를 강제 촉진합니다. 공황 환자의 심장은 카페인에 극도로 민감하여, 반 잔만 마셔도 심계항진과 손떨림이 촉발되어 패닉으로 직행합니다.\n\n5. 늦은 밤 야식과 과식 - 횡격막 압박과 식도 역류:\n과식을 하거나 기름진 야식을 먹고 누우면 위장이 부풀어 올라 횡격막을 위쪽으로 물리적으로 밀어 올립니다. 폐가 충분히 팽창하지 못해 숨이 답답해지고, 위산이 역류하면서 미주신경을 자극해 가슴 통증과 부정맥성 두근거림을 유발합니다.\n\n해아림한의원에서는 단순한 약물 처방에 그치지 않고, 환자분의 직업과 생활 패턴에 맞춘 1:1 라이프스타일 뇌신경 가이드를 밀착 코칭합니다. 나쁜 자극을 걷어내고 좋은 뇌 환경을 조성할 때, 공황장애는 비로소 근본적인 완치의 문을 활짝 열어줍니다.\n\n[공황장애 정밀검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2013.11.22",
            "image": "/images/columns/column_4_pots_dizziness.svg",
            "views": 2275
          },
          {
            "id": "col-auto-3-1788882200000",
            "colIndex": 3,
            "category": "환경 공황",
            "title": "대형마트, 백화점, 영화관처럼 사람 많은 곳에서 쓰러질 것 같은 '시각 과부하' 극복법",
            "summary": "복잡한 진열대 조명과 유동 인구로 인해 뇌 시각-전정 피질이 과부하되는 원리와 쇼핑몰·영화관 현장에서의 실전 적응 훈련.",
            "content": "집에 혼자 있을 때는 비교적 괜찮은데, 코스트코나 이마트처럼 천장이 높고 물건이 빼곡한 대형마트에만 가면 눈앞이 핑 돌고 토할 것 같다는 환자분들이 많습니다. 어두운 영화관이나 화려한 조명이 반짝이는 백화점에서도 심장이 터질 듯 뛰고 바닥이 울렁거려 도망치듯 뛰쳐나왔다는 경험을 털어놓으십니다.\n\n이러한 현상은 환자의 마음이 나약해서가 아니라, 뇌의 시각 피질(Visual Cortex)과 전정신경계(Vestibular System), 그리고 편도체 사이의 '감각 통합 과부하(Sensory Overload)'에서 비롯됩니다.\n\n대형마트나 쇼핑몰은 수천 가지의 알록달록한 상품 진열, 깜빡이는 형광등 불빛, 끊임없이 움직이는 인파 등 뇌가 처리해야 할 시각 정보의 양이 폭발적으로 쏟아지는 공간입니다. 정상적인 뇌는 전두엽의 여과 장치를 통해 불필요한 시각 정보를 걸러내지만, 공황장애로 뇌신경이 극도로 예민해진 환자는 모든 시각 자극이 뇌로 무차별 난입합니다. \n\n이때 뇌는 \"주변이 너무 복잡하고 위협적이다\"라고 오판하여 공포 중추인 편도체를 자극하고, 전정신경계가 흔들리며 가짜 어지럼증과 질식감을 유발하는 것입니다. 어두운 영화관의 거대한 스크린이나 밀폐감 역시 도망칠 출구가 보이지 않는다는 인지적 압박을 가중시킵니다.\n\n이를 극복하기 위한 실전 대처 수칙은 다음과 같습니다:\n1. 시선 고정점 찾기: 시선을 이리저리 굴리지 말고, 쇼핑 카트 손잡이나 바닥의 특정 타일 한 점에 시선을 3초간 고정하며 호흡합니다.\n2. 주변부 시야 넓히기: 한곳을 뚫어지게 응시하되, 시야의 양옆 가장자리(주변시)를 의식적으로 넓히면 교감신경의 터널 시야(Tunnel Vision)가 해제되고 부교감신경이 활성화됩니다.\n3. 모자나 선글라스 활용: 천장 형광등의 깜빡임과 강한 조명을 물리적으로 차단해 주는 볼캡 모자나 옅은 틴트 선글라스를 착용하면 시각 과부하를 50% 이상 줄일 수 있습니다.\n4. 단계적 머무름 훈련: 마트에 들어서자마자 장을 보려 하지 말고, 입구 벤치에 앉아 5분간 심호흡을 한 뒤 한 코너씩 둘러보는 점진적 노출을 시행합니다.\n\n해아림한의원에서는 시신경과 전정기관의 허열을 내려주는 청간명목(淸肝明目) 탕약과 함께, 두개골 후두부의 긴장을 풀어 시각 피질의 혈류 순환을 돕는 두개천골요법(CST)을 통해 감각 과부하에 흔들리지 않는 단단한 뇌신경망을 구축해 드립니다.\n\n[공황장애 정밀검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2013.03.21",
            "image": "/images/columns/column_3_temp_dysregulation.svg",
            "views": 2300
          },
          {
            "id": "col-auto-2-1788882100000",
            "colIndex": 2,
            "category": "치료 경과",
            "title": "공황장애 치료 중 겪는 호전과 악화의 롤러코스터: 왜 좋아지다가도 한 번씩 다시 불안할까?",
            "summary": "신경계 회복은 직선이 아닌 완만한 나선형 계단 형태입니다. 일시적인 증상 재발에 좌절하지 않고 뇌 회복 탄력성을 기르는 심리적 지침.",
            "content": "진료실에서 만나는 많은 환자분들이 치료가 잘 진행되다가도 한 번씩 증상이 튀어오를 때 큰 절망감을 느끼시곤 합니다. \"한약 먹고 한 달 동안 지하철도 타고 너무 좋았는데, 엊그제 야근하고 커피 한 잔 마셨더니 가슴이 다시 쿵쾅거리고 불안이 덮쳤습니다. 저 다시 처음으로 돌아간 건가요? 영영 안 낫는 건가요?\"\n\n결론부터 명확히 말씀드리면, 이는 결코 치료의 실패나 원점 회귀가 아니며 신경계가 회복되는 과정에서 누구나 필연적으로 거치는 '생리적 반동 현상(Fluctuation)'입니다.\n\n인간의 뇌 신경망은 기계 부품을 새것으로 갈아 끼우듯 하루아침에 100% 정상으로 바뀌지 않습니다. 지난 수개월, 수년간 만성적인 교감신경 과항진과 공포 회로에 길들여졌던 뇌 신경세포들은 새로운 안정 궤도를 찾아가는 과정에서, 피로나 스트레스라는 외부 자극이 들어오면 과거의 익숙했던 비상경보 습관을 무의식적으로 한 번씩 꺼내보게 됩니다.\n\n중요한 것은 증상이 다시 나타났을 때의 '강도'와 '지속 시간'입니다. 과거에는 발작이 오면 1시간 동안 사경을 헤매고 응급실을 가야 했다면, 회복기에는 가슴이 두근거리더라도 5~10분 만에 스스로 호흡을 가다듬으며 가라앉힐 수 있습니다. 파도의 높이는 점차 낮아지고 파도와 파도 사이의 평온한 간격은 점점 넓어집니다. 신경계의 회복 그래프는 매끄러운 직선이 아니라 위아래로 출렁이며 우상향하는 '나선형 계단'과 같습니다.\n\n이때 환자분께서 \"또 시작이네, 난 글렀어\"라며 파국적 해석을 내리면 뇌는 다시 극심한 공포에 휩싸입니다. 대신 \"아, 이번 주에 몸이 조금 피곤했구나. 내 신경계가 잠시 쉬어 가자고 신호를 보내는 거네. 이미 치료로 안정 회로가 만들어지고 있으니 금방 지나갈 거야\"라고 인지적으로 재구조화해야 합니다.\n\n해아림한의원에서는 치료 과정에서 나타나는 환자분의 체질별 미세한 기혈 변동을 매 진맥마다 정밀 추적하여, 피로와 스트레스에도 신경계가 쉽게 흔들리지 않도록 방어 옹벽을 보강하는 1:1 맞춤 가감 처방을 제공합니다. 작은 출렁임에 일희일비하지 않고 꾸준히 걸어갈 때, 뇌는 어느덧 완벽한 평온의 정상에 도달해 있을 것입니다.\n\n[공황장애 정밀검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2012.07.18",
            "image": "/images/columns/column_2_gut_brain.svg",
            "views": 2325
          },
          {
            "id": "col-auto-1-1788882000000",
            "colIndex": 1,
            "category": "자가 훈련",
            "title": "공황장애 극복을 위한 자가 이완 훈련: 점진적 근육이완법(PMR)과 복식호흡 실천 매뉴얼",
            "summary": "발끝부터 이마까지 긴장을 능동적으로 푸는 점진적 근육이완법(PMR)의 과학적 효과와 아침저녁 10분 실천 데일리 루틴 가이드.",
            "content": "공황발작이 찾아오면 우리 몸의 모든 골격근과 내장 평활근은 비상 대기 태세로 팽팽하게 수축합니다. 턱관절은 굳어지고 승모근은 쇳덩이처럼 뭉치며, 횡격막이 굳어 호흡이 가슴 위쪽에서만 얕게 헐떡이게 됩니다. 이때 많은 분들이 \"마음을 편하게 먹어야지\"라고 생각으로 몸을 다스리려 하지만, 이미 편도체가 폭주한 상태에서는 순수한 생각만으로 근육의 긴장을 풀기 어렵습니다.\n\n이때 가장 확실하고 과학적인 돌파구가 바로 에드먼드 제이콥슨 박사가 창안한 '점진적 근육이완법(PMR, Progressive Muscle Relaxation)'입니다. PMR의 원리는 역설적이게도 '근육을 5초간 100%의 힘으로 강하게 긴장시켰다가, 10초간 한 번에 툭 내려놓으며 이완하는' 신체 피드백 기법입니다. 근육은 강하게 수축한 직후에 더 깊은 수준의 반사적 이완 상태로 들어가는 생리적 특성을 지니고 있기 때문입니다.\n\n실천 순서는 발끝부터 시작하여 머리끝으로 올라옵니다:\n1. 발가락을 오므려 5초간 꽉 쥐었다가 숨을 내쉬며 '후-' 하고 10초간 툭 풉니다.\n2. 종아리와 허벅지에 힘을 꽉 주었다가 툭 풉니다.\n3. 아랫배를 단단하게 조였다가 툭 풉니다.\n4. 양 주먹을 꽉 쥐고 팔 전체를 수축했다가 툭 풉니다.\n5. 어깨를 귀까지 바짝 끌어올렸다가 툭 떨어뜨립니다.\n6. 마지막으로 얼굴을 찌푸려 눈과 입을 꽉 조였다가 완전히 풀어줍니다.\n\n이 6단계 근육이완을 4-6 복식호흡(4초간 코로 들이마시고 6초간 입으로 천천히 내쉬기)과 함께 매일 아침 기상 직후와 취침 전 10분씩 반복하면, 뇌간의 망상체로 올라가는 근육 긴장 신호가 차단되면서 교감신경의 기저 긴장도가 드라마틱하게 낮아집니다.\n\n해아림한의원에서는 이러한 자가 이완 훈련의 효율을 극대화하기 위해, 굳어 있는 횡격막과 경추 주변 근막을 풀어주는 이완 추나요법과 미주신경을 자극하는 약침 치료를 병행합니다. 몸이 먼저 깊은 이완의 기억을 되찾을 때, 뇌 편도체는 비로소 비상경보를 끄고 깊은 안도감에 머물게 됩니다.\n\n[공황장애 정밀검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
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
