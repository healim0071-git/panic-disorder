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
            "category": "공황발작 & 응급실",
            "title": "응급실만 세 번 갔는데, 맞춤 한약과 이완 훈련으로 완전히 회복되었습니다",
            "content": "어느 날 갑자기 가슴이 쿵쾅거리고 숨이 가빠지면서 이러다 죽는 게 아닌가 싶어 119를 부르고 응급실로 실려 갔습니다. 심전도, 피검사, 폐 엑스레이 다 찍어도 이상이 없다고 하는데도, 언제 또 발작이 올지 모른다는 극심한 예기불안 때문에 지하철도 못 타고 외출도 못 했습니다. 해아림한의원에서 공황장애 진단을 받고 과흥분된 심신을 안정시키는 1:1 맞춤 한약과 뇌신경 이완 침 치료, 자율신경 훈련을 병행한 지 2개월 만에 발작이 멈추었고, 지금은 아무 불안 없이 일상생활과 출퇴근을 편안하게 하고 있습니다.",
            "author": "30대 직장인 김OO 님",
            "date": "2026.09.05",
            "views": 1245,
            "image": "/images/reviews/review_1.jpg"
          },
          {
            "id": "rev-2-1788850000000",
            "category": "광장공포 & 지하철/운전",
            "title": "지하철과 고속도로 운전이 공포였던 광장공포증, 이제 두렵지 않습니다",
            "content": "터널 안이나 꽉 막힌 지하철에 갇히면 숨이 막혀 질식할 것 같고 문을 부수고 나가고 싶은 공황발작이 반복되었습니다. 혼자서는 운전도 못 하고 지하철도 탈 수 없어 직장 생활이 불가능할 지경이었습니다. 해아림한의원에서 편도체의 과민 반응을 낮추는 체질 한약 치료와 두개천골요법(CST)을 받으며 점진적인 인지행동 노출 훈련을 함께 진행했습니다. 3개월 치료 후 지금은 혼자서 지하철도 편안하게 타고 출퇴근하고 있으며, 장거리 고속도로 운전도 전혀 두렵지 않습니다.",
            "author": "50대 주부 박OO 님",
            "date": "2026.09.01",
            "views": 1120,
            "image": "/images/reviews/review_2.jpg"
          },
          {
            "id": "rev-3-1788840000000",
            "category": "신경성 위장장애 & 소화불량",
            "title": "신경성 위염, 공황 불안으로 10kg 빠졌는데 치료 후 밥을 맛있게 먹습니다",
            "content": "조금만 불안하거나 긴장하면 체하고 명치가 돌처럼 굳었으며, 목에 무언가 걸린 듯한 이물감(매핵기) 때문에 식사를 넘기지 못해 체중이 10kg이나 빠졌습니다. 위내시경을 해도 가벼운 위염뿐이라는데 가슴이 답답하고 불안이 끊이지 않았습니다. 해아림 원장님께서 공황장애와 자율신경계 과흥분으로 인한 뇌-장관 신경축 불균형이라 설명해 주셨고, 담적을 제거하고 비위와 심장을 보강하는 맞춤 한약을 복용하면서 명치 답답함이 사라지고 식욕과 체중이 정상으로 돌아왔습니다.",
            "author": "40대 자영업 이OO 님",
            "date": "2026.08.27",
            "views": 980,
            "image": "/images/reviews/review_3.jpg"
          },
          {
            "id": "rev-4-1788830000000",
            "category": "전신 신체화 증상 & 예기불안",
            "title": "머리 열감, 손발 떨림, 가슴 답답함.. 온몸이 아팠는데 체질 한약으로 안정을 찾았습니다",
            "content": "시험 준비와 직장 스트레스로 머리로는 열이 뻗치고 손발은 얼음장처럼 차가우며, 가슴이 조여오고 숨을 깊게 들이쉬지 못해 늘 한숨만 쉬었습니다. 온몸에 감각 이상이 오고 죽을 것 같은 공포와 우울감까지 덮쳐 너무 괴로웠습니다. 해아림한의원에서 심포의 화를 내리고 자율신경 균형을 바로잡는 한약과 추나 치료를 3개월간 꾸준히 받은 결과, 가슴이 시원하게 뚫리고 손발 저림과 열감도 완전히 사라졌습니다.",
            "author": "20대 취준생 최OO 님",
            "date": "2026.08.22",
            "views": 1350,
            "image": "/images/reviews/review_4.jpg"
          },
          {
            "id": "rev-5-1788820000000",
            "category": "야간 공황발작 & 수면장애",
            "title": "자다가 심장이 터질 듯 뛰며 깨던 야간 공황발작, 이제 푹 잘 수 있습니다",
            "content": "매일 밤 잠든 지 1~2시간 만에 갑자기 심장이 요동치고 숨이 턱 막히며 식은땀을 흘리며 깨어났습니다. 자다가 심장마비로 죽을까 봐 잠자리에 드는 것 자체가 지옥 같았습니다. 수면다원검사에서도 원인을 못 찾았는데 해아림에서 야간 공황발작과 기상 코르티솔 서지 과항진을 진단받고, 뇌신경을 안정시키는 천왕보심단 가감방과 약침 치료를 받았습니다. 복용 3주 차부터 야간 발작이 현저히 줄어들었고, 지금은 밤새 깨지 않고 푹 숙면을 취하고 있습니다.",
            "author": "30대 연구원 정OO 님",
            "date": "2026.08.16",
            "views": 1040,
            "image": "/images/reviews/review_5.jpg"
          },
          {
            "id": "rev-6-1788810000000",
            "category": "과호흡 & 긴장성 두통",
            "title": "과호흡으로 손발이 굳고 호흡곤란 오던 공황 증상이 완전히 사라졌습니다",
            "content": "회의를 하거나 중요한 발표를 앞두면 갑자기 숨이 가빠지면서 과호흡이 오고, 손발 끝이 찌릿찌릿 저리며 마비되듯 굳어버렸습니다. 뒷목과 어깨가 돌처럼 뭉치고 찌릿한 긴장성 두통과 어지럼증까지 동반되어 사회생활이 불가능했습니다. 해아림에서 과호흡 응급 4-6 호흡법 교정과 함께 뇌신경 순환을 개선하는 두개천골요법, 맞춤 한약을 병행하여 3개월 만에 모든 증상이 완치되었습니다.",
            "author": "40대 교사 강OO 님",
            "date": "2026.08.10",
            "views": 1180,
            "image": "/images/reviews/review_6.jpg"
          },
          {
            "id": "rev-auto-hist-1-1784462400000",
            "category": "기립성/어지럼",
            "author": "30대 직장인 박OO 님",
            "date": "2026.07.19",
            "views": 3000,
            "image": "/images/reviews/review_1.jpg",
            "title": "회의 중 핑 돌며 주저앉던 기립성 어지럼증, 이제 온종일 발표도 문제없습니다",
            "content": "회사 프로젝트 발표 도중 갑자기 눈앞이 하얘지면서 바닥으로 주저앉은 뒤로 외출 자체가 공포였습니다. 대학병원 신경과와 이비인후과에서 이석증, 전정신경염, 뇌 MRI 검사까지 다 받았지만 아무 이상이 없다며 신경성이라는 말만 되풀이했습니다. 서 있기만 해도 다리에 피가 쏠리고 뇌로 피가 안 통하는 느낌에 하루하루 퇴사를 심각하게 고민했습니다.\n\n그러다 공황장애을 중점 치료하는 해아림한의원을 알게 되었습니다. 원장님께서 압수용체 반사 기능 저하와 교감-부교감 불균형 상태를 꼼꼼히 진단해 주신 후, 기립성 혈류를 끌어올리는 맞춤 한약과 경추 신경절 약침 치료를 정성껏 병행해 주셨습니다. 복용 한 달 차부터 일어설 때 핑 도는 암전 증상이 눈에 띄게 줄었고, 3개월 치료를 마친 지금은 장시간 서서 프레젠테이션을 해도 머리가 맑고 중심이 단단하게 잡힙니다. 잃어버렸던 일상과 직장 생활의 자신감을 되찾아주셔서 원장님께 진심으로 감사드립니다.",
            "hasTreatment": true,
            "treatmentType": "한약 + 약침",
            "isCustom": false,
            "isCanonical": true
          },
          {
            "id": "rev-clinical-1-1776470400000",
            "category": "가슴두근거림 & 공황",
            "title": "회의 중 갑자기 숨이 가쁘고 가슴이 멎을 것 같던 발작, 3개월 치료 후 완전히 편안해졌습니다",
            "content": "업무 스트레스가 극에 달했던 올해 초, 중요한 클라이언트 회의 도중 갑자기 심장이 요동치고 숨이 턱 끝까지 차올라 죽을 것 같은 공포를 겪었습니다. 응급실에 실려가 심전도, 심장초음파, 뇌 MRI 검사를 다 받았지만 \"이상 소견 없음, 신경성\"이라는 말만 들었습니다. 이후에도 지하철이나 밀폐된 공간만 가면 식은땀이 나고 가슴이 조여와 일상생활이 불가능할 지경이었습니다. 해아림한의원에서 심장과 간의 울열(鬱熱)을 풀고 교감신경을 안정시키는 청심안신탕과 두개천골요법(CST) 훈련을 병행했습니다. 치료 2주 만에 가슴 두근거림의 빈도가 절반 이하로 줄었고, 3개월이 지난 지금은 만원 지하철도 불안 없이 출퇴근하며 정상 업무를 보고 있습니다. 제 삶을 되찾아 주셔서 진심으로 감사드립니다.",
            "author": "30대 직장인 김OO 님",
            "date": "2026.04.18",
            "views": 342,
            "image": "/images/reviews/review_1.jpg"
          },
          {
            "id": "rev-add-1-1773446400000",
            "category": "가슴두근거림 & 야간각성",
            "title": "새벽마다 심장이 터질 듯 뛰며 잠에서 깨던 야간 빈맥, 공황 자율신경 맞춤 탕약 복용 2개월 만에 평온을 찾았습니다",
            "content": "야간에 잠만 들려고 하면 심장이 분당 130회 이상 미친 듯이 뛰고 온몸에 식은땀이 흘러 응급실을 수시로 드나들었습니다. 심장내과 홀터 검사와 심초음파는 모두 정상이라는데 매일 밤 죽을 것 같은 공포에 시달렸습니다. 지인의 간곡한 권유로 해아림한의원을 찾았고, 원장님께서 교감신경의 과각성과 HPA 호르몬 축의 불균형을 짚어주셨습니다. 청심온담탕 계열의 맞춤 한약과 두개천골요법을 병행한 지 3주 차부터 새벽 빈맥이 눈에 띄게 잦아들었고, 2개월 치료 후에는 야간 불안 없이 아침까지 푹 자는 기적 같은 일상을 회복했습니다.",
            "author": "30대 직장인 정OO 님",
            "date": "2026.03.14",
            "views": 890,
            "image": "/images/reviews/review_1.jpg"
          },
          {
            "id": "rev-auto-hist-2-1771070460000",
            "category": "가슴두근거림/공황",
            "author": "40대 주부 김OO 님",
            "date": "2026.02.14",
            "views": 2914,
            "image": "/images/reviews/review_2.jpg",
            "title": "새벽마다 심장이 미친 듯 뛰던 야간 두근거림, 드디어 밤이 두렵지 않습니다",
            "content": "새벽 2~3시만 되면 심장이 분당 130회 이상 쿵쾅거리며 잠에서 깨어났습니다. 가슴이 조여오고 숨이 턱 끝까지 막혀 이러다 죽는 게 아닐까 하는 공포에 응급실을 수도 없이 들락거렸습니다. 24시간 홀터 심전도 검사도 정상이어서 가족들조차 제 예민함 탓으로 돌려 외롭고 억울한 눈물만 흘렸습니다.\n\n해아림한의원에서 공황장애 정밀검사를 받고 교감신경이 24시간 비상 경보 상태로 과열되어 있다는 설명을 들었을 때 비로소 제 증상의 실체를 이해하고 큰 위로를 받았습니다. 원장님께서 제 몸의 속도에 맞춰 차근차근 신경계를 안정시켜 주셨고, 치료를 진행하면서 새벽에 심장이 요동치며 깨는 횟수가 기적처럼 줄어들었습니다. 이제는 저녁에 누우면 아침까지 깨지 않고 깊은 단잠을 잡니다. 온 가족이 편안해졌고 제 삶의 평온을 되찾아주신 해아림에 깊이 감사드립니다.",
            "hasTreatment": false,
            "treatmentType": null,
            "isCustom": false,
            "isCanonical": true
          },
          {
            "id": "rev-clinical-2-1763942400000",
            "category": "만성 어지럼증 & 불면",
            "title": "배를 탄 듯 붕 뜨고 흔들리는 어지럼증과 불면증, 한약과 약침으로 10년 만에 숙면을 취합니다",
            "content": "걸을 때마다 땅이 스펀지처럼 푹푹 꺼지는 느낌과 머릿속이 뿌옇게 안개 낀 듯한 뇌 안개(Brain Fog)로 1년 넘게 고통받았습니다. 밤에는 침대에 누우면 맥박 소리가 귓가에 울리고 교감신경이 가라앉지 않아 2~3시간을 뒤척이다 겨우 잠들기 일쑤였습니다. 이비인후과 전정기능 검사나 신경과 검사에서도 특별한 이상이 발견되지 않아 절망적이었습니다. 해아림한의원에서 HPA 축 과각성과 뇌간 뇌 공황 자율신경계 불균형을 진단받고, 상충열을 내려주는 맞춤 탕약과 경추 약침 치료를 시작했습니다. 치료 4주 차부터 머리가 맑아지며 어지럼증이 서서히 걷히기 시작했고, 지금은 밤에 눕자마자 7시간 연속으로 깊은 잠에 듭니다. 아침에 개운하게 일어나는 평범한 일상이 얼마나 큰 축복인지 깨닫고 있습니다.",
            "author": "40대 전문직 이OO 님",
            "date": "2025.11.24",
            "views": 418,
            "image": "/images/reviews/review_2.jpg"
          },
          {
            "id": "rev-auto-hist-3-1761652920000",
            "category": "위장장애/담적",
            "author": "20대 대학생 최OO 님",
            "date": "2025.10.28",
            "views": 2852,
            "image": "/images/reviews/review_3.jpg",
            "title": "물만 마셔도 체하고 헛구역질 나던 신경성 위염, 이제 가족들과 외식합니다",
            "content": "취업 준비와 시험 스트레스가 겹치면서 조금만 신경을 쓰면 체하고 명치가 돌덩이처럼 딱딱하게 굳었습니다. 위내시경은 깨끗한데 물 한 모금만 마셔도 헛구역질이 나고 몸무게가 8kg이나 빠져 뼈만 앙상하게 남았습니다. 소화제와 제산제를 달고 살아도 속 쓰림과 메스꺼움은 가시지 않았습니다.\n\n위장이 뇌의 미주신경과 직접 연결되어 있다는 사실을 해아림에서 처음 배웠습니다. 원장님의 진솔한 상담과 공황 자율신경 케어를 받으면서 딱딱하게 굳어 있던 명치 통증이 부드럽게 풀리기 시작했고, 멈춰 있던 소화관이 다시 자연스럽게 움직이는 것을 체감했습니다. 지금은 친구들과 맛집도 찾아다니고 가족들과 함께 일반식을 맛있게 소화할 수 있을 정도로 건강해졌습니다. 새로운 에너지를 되찾아주셔서 감사드립니다.",
            "hasTreatment": false,
            "treatmentType": null,
            "isCustom": false,
            "isCanonical": true
          },
          {
            "id": "rev-add-2-1755734400000",
            "category": "뇌피로 & 브레인포그",
            "title": "머리에 짙은 안개가 낀 듯 멍하고 무기력하던 만성 브레인포그, 뇌신경 훈련과 한약으로 머리가 맑아졌습니다",
            "content": "취업 준비 중에 갑작스럽게 시작된 머릿속의 멍함(브레인포그)으로 글자 하나 눈에 들어오지 않고 일상적인 대화조차 버거웠습니다. 대학병원 신경과 뇌 MRI와 뇌파 검사에서도 뚜렷한 이상이 없다고 하여 절망적이었습니다. 해아림한의원에서 HRV 검사와 공황장애 정밀검사를 통해 뇌로 가는 미세 혈류가 급감하고 뇌간의 긴장도가 극에 달해 있음을 확인했습니다. 원장님의 1:1 체질 맞춤 뇌안신 탕약 복용과 경추 추나요법을 통해 뇌척수액 순환을 바로잡은 뒤, 3개월 만에 안개가 걷히듯 머리가 상쾌해져 무사히 원하는 기업에 취업할 수 있었습니다.",
            "author": "20대 취준생 한OO 님",
            "date": "2025.08.21",
            "views": 1120,
            "image": "/images/reviews/review_2.jpg"
          },
          {
            "id": "rev-clinical-3-1749686400000",
            "category": "만성 위장장애 & 담적",
            "title": "물만 마셔도 체하고 명치가 돌처럼 굳었던 기능성 소화불량, 공황장애 한방치료로 밥 한 공기 다 먹습니다",
            "content": "조금만 신경을 쓰거나 음식을 먹으면 명치가 꽉 막히고 헛구역질과 트림이 끊이지 않았습니다. 위내시경을 받아도 '경미한 만성 표재성 위염'일 뿐이라는데 몸무게는 8kg이나 빠져 뼈만 앙상하게 남았습니다. 소화제와 제산제를 달고 살았지만 아무런 차도가 없었습니다. 해아림에서 소화관을 지배하는 미주신경(부교감신경)이 극도로 저하되어 위장 연동운동이 멈춰있다는 설명을 듣고 큰 충격을 받았습니다. 위장 담적을 제거하고 미주신경 활성도를 높이는 이기건비 탕약과 복부 온열 침 치료를 2달간 집중적으로 받았습니다. 거짓말처럼 명치의 돌덩이가 풀리면서 가스가 빠지고 식욕이 돌기 시작했습니다. 이제는 가족들과 함께 삼겹살도 편하게 먹고 밥 한 공기를 뚝딱 비웁니다.",
            "author": "50대 자영업 박OO 님",
            "date": "2025.06.12",
            "views": 526,
            "image": "/images/reviews/review_3.jpg"
          },
          {
            "id": "rev-auto-hist-4-1746964980000",
            "category": "만성피로/브레인포그",
            "author": "30대 교사 정OO 님",
            "date": "2025.05.11",
            "views": 2779,
            "image": "/images/reviews/review_4.jpg",
            "title": "머리에 짙은 안개가 낀 듯 멍하던 브레인포그, 맑은 정신으로 복직했습니다",
            "content": "자고 일어나도 뇌에 기름이 낀 것처럼 멍하고 집중이 전혀 되지 않았습니다. 학생들의 질문에 바로 대답이 나오지 않고 단어가 떠오르지 않아 수업 진행이 불가능할 정도였습니다. 번아웃과 만성 피로로 휴직까지 결심하고 절망적인 나날을 보냈습니다.\n\n해아림한의원에서 뇌파 검사와 공황장애 정밀검사를 진행한 뒤 뇌간 순환을 돕는 맞춤 한약과 경추-두개골 긴장을 부드럽게 이완시키는 두개천골요법(CST)을 꾸준히 받았습니다. 치료 4주 차부터 머리를 무겁게 짓누르던 두중감이 걷히더니 시야가 선명해졌습니다. 3개월 후에는 복합적인 사고와 기억력이 예전 상태로 완벽히 돌아와 무사히 교단으로 복직할 수 있었습니다. 맑은 머리로 아이들을 마주하는 매일이 행복합니다.",
            "hasTreatment": true,
            "treatmentType": "한약 + 두개천골요법 CST",
            "isCustom": false,
            "isCanonical": true
          },
          {
            "id": "rev-clinical-4-1733356800000",
            "category": "기립성 조절장애 & POTS",
            "title": "일어설 때마다 눈앞이 캄캄해지고 심장이 130회까지 뛰던 기립성 빈맥증후군, 완치 판정 받았습니다",
            "content": "아침에 침대에서 일어나거나 의자에서 일어설 때마다 눈앞이 하얘지고 핑 돌면서 주저앉기 일쑤였습니다. 스마트워치를 차고 측정해 보면 앉아있을 땐 75회이던 심박수가 일어서기만 하면 130~140회까지 치솟았습니다. 빈혈약도 소용없었고 대학병원에서 POTS(기립성 빈맥증후군) 진단을 받았으나 마땅한 치료제가 없어 물과 염분만 많이 먹으라는 권유를 받았습니다. 학업을 휴학해야 하나 고민하던 중 해아림을 찾았습니다. 말초 혈관 탄력을 높여주고 하체로 쏠린 혈류를 뇌로 끌어올리는 승양익기 한약과 공황 자율신경 바이오피드백 훈련을 받았습니다. 6주가 지나자 일어설 때의 심박수 상승이 15회 이내로 안정되었고 암전 현상이 완전히 사라졌습니다. 무사히 복학하여 건강하게 캠퍼스 생활을 이어가고 있습니다.",
            "author": "20대 대학생 최OO 님",
            "date": "2024.12.05",
            "views": 389,
            "image": "/images/reviews/review_4.jpg"
          },
          {
            "id": "rev-auto-hist-5-1730635440000",
            "category": "수면/불면증",
            "author": "50대 자영업 윤OO 님",
            "date": "2024.11.03",
            "views": 2695,
            "image": "/images/reviews/review_5.jpg",
            "title": "수면제 없이는 1시간도 못 자던 5년 불면증, 자연 수면 리듬을 회복했습니다",
            "content": "가게 운영 스트레스로 5년 전부터 수면제와 신경안정제를 복용했습니다. 약을 먹어도 2~3시간 만에 깨고, 낮에는 몽롱함과 어지럼증 때문에 정상적인 일상생활이 불가능했습니다. 약을 끊으려고 시도할 때마다 반동 불면과 불안이 몰려와 이러지도 저러지도 못하는 상태였습니다.\n\n해아림 원장님께서는 억지로 잠을 재우는 것이 아니라, 흥분된 교감신경을 가라앉히고 자연스러운 부교감 이완 스위치를 켜야 한다고 지도해 주셨습니다. 원장님의 세심한 치료와 수면 위생 교정을 따르다 보니 서서히 약을 줄여나갈 수 있었고, 마침내 약 없이도 밤 11시면 자연스럽게 졸음이 와 아침 7시까지 푹 자는 기적이 일어났습니다. 매일 아침 눈뜰 때 상쾌함을 느끼는 게 얼마 만인지 모르겠습니다.",
            "hasTreatment": false,
            "treatmentType": null,
            "isCustom": false,
            "isCanonical": true
          },
          {
            "id": "rev-add-3-1729209600000",
            "category": "위장장애 & 신경성 담적",
            "title": "물만 마셔도 체하고 명치가 돌처럼 굳던 만성 신경성 위무력증, 위장 미주신경 회복 후 밥 한 공기 다 먹습니다",
            "content": "음식물이 명치에 걸려 내려가지 않고 하루 종일 헛구역질과 트림이 끊이지 않았습니다. 위내시경을 3번이나 받아도 가벼운 표재성 위염뿐이라는데 살은 8kg이나 빠져 뼈만 남을 지경이었습니다. 해아림에서 뇌와 위장을 잇는 제10뇌신경 미주신경(부교감신경)이 극도로 마비되어 있다는 진단을 받았습니다. 위장 외벽의 신경총을 풀어주는 담적 배출 한약과 복부 온열 약침 치료를 6주간 집중적으로 받은 결과, 돌덩이 같던 명치가 부드럽게 풀리고 소화력이 완전히 살아나 이제는 가족들과 즐겁게 외식을 즐깁니다.",
            "author": "40대 주부 윤OO 님",
            "date": "2024.10.18",
            "views": 1450,
            "image": "/images/reviews/review_3.jpg"
          },
          {
            "id": "rev-auto-hist-6-1724069100000",
            "category": "상열하한/체온",
            "author": "40대 공무원 한OO 님",
            "date": "2024.08.19",
            "views": 2669,
            "image": "/images/reviews/review_6.jpg",
            "title": "얼굴은 불타듯 뜨겁고 발은 시려 잠 못 들던 상열하한, 균형을 찾았습니다",
            "content": "얼굴과 머리로는 열이 훅 치밀어 올라 에어컨 바람을 쐬어야 하는데, 손과 발은 얼음장처럼 시려서 양말을 두 켤레 신고 지냈습니다. 체온 조절이 전혀 되지 않으니 감기 몸살 같은 오한과 열감이 번갈아 찾아와 여름에도 겨울에도 괴로웠습니다.\n\n해아림한의원 공황 자율신경 클리닉에서 신경계 순환 불통으로 인한 상열하한 진단을 받고 치료를 시작했습니다. 흩어져 있던 신경 신호와 혈류 균형이 서서히 제자리를 잡으면서, 머리로 솟구치던 화끈거림이 사라지고 발끝까지 따뜻한 온기가 돌기 시작했습니다. 체온이 안정되니 덩달아 두통과 만성 피로까지 함께 씻은 듯 나았습니다. 사계절 내내 온몸이 편안해져 이제는 일에 온전히 몰입할 수 있습니다. 늘 정성으로 살펴주신 의료진분들께 감사드립니다.",
            "hasTreatment": false,
            "treatmentType": null,
            "isCustom": false,
            "isCanonical": true
          },
          {
            "id": "rev-clinical-5-1716076800000",
            "category": "상열하한 & 수족냉증",
            "title": "얼굴은 불타오르고 손발은 얼음장 같던 극심한 상열하한증, 체온 균형을 되찾았습니다",
            "content": "사계절 내내 얼굴과 머리로는 열이 펄펄 끓어올라 홍조가 심하고 두피에 열감이 가득한데, 반대로 손과 발은 얼음장처럼 차가워 양말 두 켤레를 신고도 시려서 잠을 설쳤습니다. 산부인과 갱년기 호르몬 검사에서도 호르몬 수치는 정상이라 원인을 알 수 없어 답답했습니다. 해아림 원장님께서 뇌 공황 자율신경계 체온 조절 중추의 이상으로 인한 전형적인 '상열하한(上熱下寒)' 병증이라고 짚어주셨습니다. 상체의 허열을 아래로 끌어내리고 단전의 찬 기운을 덥혀주는 수승화강(水昇火降) 맞춤 탕약과 뜸 치료를 3달간 받았습니다. 얼굴로 치밀어 오르던 화끈거림이 사라지고 손발 끝까지 따뜻한 온기가 돌기 시작했습니다. 혈색도 맑아지고 만성 피로까지 함께 해결되어 새 인생을 사는 기분입니다.",
            "author": "40대 주부 정OO 님",
            "date": "2024.05.19",
            "views": 462,
            "image": "/images/reviews/review_5.jpg"
          },
          {
            "id": "rev-add-4-1711670400000",
            "category": "호흡곤란 & 과호흡",
            "title": "차만 타거나 밀폐된 공간에 가면 숨이 턱 막히던 공황성 과호흡 증상, 3개월 치료로 대중교통 출퇴근 성공",
            "content": "출퇴근길 지하철이나 차 안에서 숨을 깊이 들이쉬지 못하고 얕은 숨만 헐떡이며 질식할 것 같은 호흡곤란이 시작되었습니다. 신경안정제를 복용해도 약기운이 떨어지면 다시 숨이 차올라 대중교통 이용을 아예 포기했었습니다. 해아림한의원에서 흉부의 억압된 흉곽 호흡근을 이완시키고 과항진된 횡격막 공황 자율신경을 안정시키는 승기탕 가감방과 공황 자율신경 바이오피드백 호흡 훈련을 받았습니다. 치료 8주 차부터 가슴이 확 트이면서 숨이 깊게 내려앉았고, 현재는 지하철 만원 전철도 편안하게 타고 다닙니다.",
            "author": "30대 연구원 송OO 님",
            "date": "2024.03.29",
            "views": 1680,
            "image": "/images/reviews/review_4.jpg"
          },
          {
            "id": "rev-auto-hist-7-1709813160000",
            "category": "인후이물감/매핵기",
            "author": "30대 프리랜서 송OO 님",
            "date": "2024.03.07",
            "views": 2611,
            "image": "/images/reviews/review_1.jpg",
            "title": "목에 가래가 걸린 듯 숨막히던 목 이물감, 이제 편안하게 숨 쉽니다",
            "content": "목구멍에 솜뭉치나 가래가 딱 붙어 있는 느낌에 24시간 헛기침을 뱉어내느라 목이 헐었습니다. 이비인후과 내시경과 역류성 식도염 약을 수개월 복용해도 호전이 없어 말할 때마다 숨이 차고 가슴이 답답했습니다.\n\n해아림한의원에 내원하여 교감신경 항진으로 인후부 근육이 경련성 긴장을 일으키는 공황 자율신경성 매핵기라는 것을 알게 되었습니다. 원장님께서 뭉친 기운을 풀어주는 맞춤 체질 한약만으로 처방을 구성해 주셨는데, 복용 3주 차부터 목에 걸려 있던 이물감이 절반 이하로 줄어들더니 두 달 차에는 완전히 사라졌습니다. 헛기침 없이 편안하게 호흡하고 사람들과 대화할 수 있게 되어 살 것 같습니다. 세심한 진료에 진심으로 감사드립니다.",
            "hasTreatment": true,
            "treatmentType": "체질 한약 단독",
            "isCustom": false,
            "isCanonical": true
          },
          {
            "id": "rev-auto-hist-8-1702642020000",
            "category": "과민대장/소화기",
            "author": "20대 직장인 조OO 님",
            "date": "2023.12.15",
            "views": 2500,
            "image": "/images/reviews/review_2.jpg",
            "title": "출근길 지하철만 타면 배가 부글거려 화장실 찾던 공포에서 벗어났습니다",
            "content": "아침 출근길 지하철 문이 닫히는 순간 갑자기 배가 쥐어짜듯 아프고 식은땀이 흐르며 급박하게 화장실을 찾게 되는 과민성 대장 증상으로 고통받았습니다. 중간 역에 내려 화장실을 전전하느라 지각하기 일쑤였고, 장거리 버스나 중요한 미팅은 상상도 못 했습니다.\n\n해아림한의원에서 뇌와 장이 공황 자율신경으로 연결되어 긴장할 때마다 장이 과민 수축한다는 설명을 듣고 깊이 공감했습니다. 치료를 받으면서 장의 예민도가 점차 둔감해지고 복통 빈도가 줄어들었습니다. 지금은 출근길에 아무 불안 없이 음악을 들으며 여유롭게 이동할 수 있고, 먼 지방 출장도 편안하게 다녀옵니다. 제게 일상의 자유와 평온함을 돌려주셔서 감사합니다.",
            "hasTreatment": false,
            "treatmentType": null,
            "isCustom": false,
            "isCanonical": true
          },
          {
            "id": "rev-add-5-1699401600000",
            "category": "상열하한 & 체온실조",
            "title": "손발은 얼음장인데 얼굴과 정수리로 열이 뻗치던 지독한 상열하한, 수승화강 치료 후 온몸의 온도가 고르게 돌아왔습니다",
            "content": "겨울에도 얼굴과 머리로 화염방사기를 쏘는 것처럼 열이 훅 뻗치는데, 반대로 발끝은 시려 잠을 잘 수가 없었습니다. 갱년기 호르몬제와 혈관확장제를 복용해도 상체 열은 식지 않고 두통만 심해졌습니다. 해아림 원장님께서 공황 자율신경 말초 혈관 조절 장애로 인한 '수승화강(水升火降) 실조'로 진단해 주셨습니다. 상체의 허열을 서늘하게 내리고 하초의 양기를 따뜻하게 덥혀주는 맞춤 한약과 배수혈 약침을 꾸준히 치료받았더니, 2개월 만에 얼굴의 화끈거림이 사라지고 발끝까지 따뜻한 혈액 순환이 이루어졌습니다.",
            "author": "50대 주부 강OO 님",
            "date": "2023.11.08",
            "views": 1930,
            "image": "/images/reviews/review_5.jpg"
          },
          {
            "id": "rev-clinical-6-1697241600000",
            "category": "다한증 & 체온조절이상",
            "title": "긴장하면 손발과 겨드랑이에 비 오듯 쏟아지던 국소 다한증, 신경차단술 없이 한방 치료로 극복했습니다",
            "content": "조금만 긴장하거나 사람을 만날 때, 발표를 할 때 손바닥과 발바닥, 겨드랑이에 땀이 주체할 수 없을 정도로 흘러내려 악수조차 꺼려졌습니다. 땀샘 수술이나 교감신경 차단술을 고민했지만 보상성 다한증 부작용이 두려워 망설이던 중 해아림을 알게 되었습니다. 교감신경의 과민도를 낮추고 땀샘을 주관하는 공황 자율신경 반사를 정상화하는 한약과 체질 침 치료를 꾸준히 받았습니다. 한 달 정도 지나자 긴장 상황에서도 손바닥이 뽀송뽀송함을 유지하기 시작했고, 두 달 후에는 사람들 앞에서 긴장해도 땀이 비정상적으로 터져 나오지 않게 되었습니다. 수술 없이 근본적으로 신경계를 안정시켜 주신 원장님께 감사드립니다.",
            "author": "30대 엔지니어 강OO 님",
            "date": "2023.10.14",
            "views": 395,
            "image": "/images/reviews/review_6.jpg"
          },
          {
            "id": "rev-auto-hist-9-1690027680000",
            "category": "호흡곤란/가슴답답",
            "author": "40대 주부 류OO 님",
            "date": "2023.07.22",
            "views": 2435,
            "image": "/images/reviews/review_3.jpg",
            "title": "숨을 깊게 못 들이쉬고 하품만 반복하던 과호흡, 가슴이 시원하게 뚫렸습니다",
            "content": "가슴에 무거운 돌덩이를 얹어 놓은 것처럼 숨이 끝까지 들어가지 않아 하루 종일 억지로 큰 하품을 하거나 가슴을 쳐야 했습니다. 폐와 심장 검사는 정상인데 공기가 부족한 느낌에 질식할 것 같은 불안감이 엄습했습니다. 자다가도 숨이 차서 깨어나 창문을 열고 심호흡을 해야만 했습니다.\n\n해아림의 공황 자율신경 조절 치료를 받으면서 흉곽 주변 근육의 긴장이 부드럽게 이완되고, 가슴 한가운데를 짓누르던 답답함이 시원하게 풀렸습니다. 이제는 의식하지 않아도 아랫배까지 깊고 편안한 복식 호흡이 자연스럽게 이루어집니다. 숨 쉬는 것이 이렇게 편안하고 감사한 일인지 새삼 깨닫게 되었습니다. 늘 온화하게 격려해 주신 원장님 감사드립니다.",
            "hasTreatment": false,
            "treatmentType": null,
            "isCustom": false,
            "isCanonical": true
          },
          {
            "id": "rev-add-6-1684108800000",
            "category": "공황/불안성 이명 & 먹먹함",
            "title": "귀가 비행기 탄 듯 꽉 막히고 삐- 울리던 만성 이명·이충만감, 턱관절 교정과 한약으로 80% 이상 소실",
            "content": "양쪽 귀가 물속에 잠긴 듯 먹먹하고 하루 24시간 내내 쇠 긁는 듯한 날카로운 이명이 울려 잠을 잘 수가 없었습니다. 이비인후과 청력검사와 고막검사는 정상이라 하여 속만 타들어 갔습니다. 해아림한의원에서 턱관절과 삼차신경, 그리고 미주신경의 과각성 상태를 정밀하게 분석해 주셨습니다. 이관 근육의 경련을 풀어주는 악관절 추나와 청신경 허혈을 개선하는 맞춤 탕약을 3개월간 복용하였고, 현재는 조용한 방에서도 이명이 거의 들리지 않을 정도로 호전되어 일상의 평온을 되찾았습니다.",
            "author": "40대 자영업 류OO 님",
            "date": "2023.05.15",
            "views": 2040,
            "image": "/images/reviews/review_6.jpg"
          },
          {
            "id": "rev-clinical-7-1679443200000",
            "category": "이명 & 브레인포그",
            "title": "24시간 삐- 소리 나던 신경성 이명과 머릿속 멍함, 공황 자율신경 교정으로 소음이 80% 줄었습니다",
            "content": "과로와 스트레스가 누적된 후 오른쪽 귀에서 고주파 삐- 소리와 매미 우는 소리가 끊이지 않았습니다. 집중하려고 하면 머릿속이 뿌옇게 굳어 책이나 보고서 문장이 눈에 들어오지 않는 브레인포그 증상까지 겹쳐 은퇴를 고민할 정도였습니다. 이비인후과 청력검사에서는 청력 저하가 없다고 하여 신경안정제만 처방받았으나 멍함만 심해졌습니다. 해아림에서 뇌간 청신경과 미주신경의 과각성을 가라앉히고 미세 뇌혈류를 순환시키는 통두청이 탕약과 경추 추나요법을 받았습니다. 3주 만에 이명의 음량이 절반으로 줄어들었고, 2개월 치료 후에는 조용한 방에서도 신경 쓰이지 않을 만큼 80% 이상 소음이 사라졌습니다. 머리가 맑아져 연구 업무에도 온전히 몰입할 수 있게 되었습니다.",
            "author": "50대 연구원 윤OO 님",
            "date": "2023.03.22",
            "views": 512,
            "image": "/images/reviews/review_1.jpg"
          },
          {
            "id": "rev-auto-hist-10-1675944540000",
            "category": "다한증/식은땀",
            "author": "20대 취준생 신OO 님",
            "date": "2023.02.09",
            "views": 2398,
            "image": "/images/reviews/review_4.jpg",
            "title": "긴장하면 손발과 겨드랑이에서 비 오듯 쏟아지던 식은땀, 말끔히 잡혔습니다",
            "content": "면접장이나 낯선 사람 앞에서는 손바닥과 등, 겨드랑이에 옷이 젖을 정도로 식은땀이 쏟아져 악수를 하거나 서류를 잡기조차 부끄러웠습니다. 땀 억제제는 일시적일 뿐이었고 수술 부작용에 대한 두려움으로 방황했습니다.\n\n해아림한의원에서 땀 분비를 관장하는 흉부 교감신경의 과각성을 낮추는 한약과 수승화강을 유도하는 침 치료를 꾸준히 받았습니다. 치료 2개월 차부터 긴장 상황에서도 심장이 덜 뛰고 손바닥 땀 분비량이 정상적인 수준으로 줄어들었습니다. 덕분에 자신감을 갖고 면접에 임해 최종 합격의 기쁨을 누릴 수 있었습니다. 제 오랜 콤플렉스를 해결해 주셔서 진심으로 감사드립니다.",
            "hasTreatment": true,
            "treatmentType": "한약 + 침 치료",
            "isCustom": false,
            "isCanonical": true
          },
          {
            "id": "rev-add-7-1670112000000",
            "category": "과민성 대장 & 신경성 설사",
            "title": "조금만 긴장하거나 외출만 하면 화장실로 달려가던 신경성 과민대장, 장 공황 자율신경 회복으로 안정",
            "content": "출근길이나 중요한 미팅을 앞두면 배가 쥐어짜듯 아프며 하루에도 4~5번씩 화장실을 들락거렸습니다. 대장내시경 검사는 너무 깨끗한데 밖에서는 언제 복통이 올지 몰라 화장실 위치부터 찾는 공포 속에 살았습니다. 해아림에서 뇌-장 신경축(Gut-Brain Axis)의 조절 부조화와 부교감신경 약화를 짚어주셨습니다. 장 신경총의 과민도를 낮추고 심장의 긴장을 완화하는 건비안신 한약 치료를 받은 뒤 복통과 급박뇨가 완전히 사라졌으며, 이제는 마음 편히 장거리 여행도 다닙니다.",
            "author": "30대 직장인 신OO 님",
            "date": "2022.12.04",
            "views": 2180,
            "image": "/images/reviews/review_1.jpg"
          },
          {
            "id": "rev-auto-hist-11-1666095000000",
            "category": "어지럼/이명",
            "author": "50대 엔지니어 문OO 님",
            "date": "2022.10.18",
            "views": 2317,
            "image": "/images/reviews/review_5.jpg",
            "title": "귓속 삐 소리와 구름 위를 걷는 듯한 어지럼증, 해아림에서 완치했습니다",
            "content": "오른쪽 귀에서 밤낮없이 삐- 하는 고주파 이명이 들리고, 걸을 때마다 스펀지 위나 구름 위를 걷는 것처럼 휘청거려 넘어질 뻔한 적이 한두 번이 아니었습니다. 이비인후과에서는 평생 적응하며 살아야 한다고 해서 눈앞이 캄캄했습니다.\n\n지푸라기라도 잡는 심정으로 해아림한의원에 내원하여 뇌 공황 자율신경계 순환 치료를 받았습니다. 서서히 귀 주변의 미세 혈류가 개선되고 뇌압이 안정되면서, 귓속을 울리던 날카로운 소리가 희미해지더니 3개월 만에 일상에서 거의 의식하지 못할 정도로 호전되었습니다. 걸음걸이도 흔들림 없이 탄탄해졌습니다. 삶의 질을 완벽히 회복시켜 주신 원장님께 깊은 감사를 전합니다.",
            "hasTreatment": false,
            "treatmentType": null,
            "isCustom": false,
            "isCanonical": true
          },
          {
            "id": "rev-clinical-8-1661817600000",
            "category": "과민대장증후군 & 복부팽만",
            "title": "시험장이나 긴장 상황만 되면 배가 부글거리고 화장실로 달려가던 과민대장, 완치하고 취업 성공했습니다",
            "content": "수험 생활 중 중요한 시험이나 면접만 앞두면 배가 칼로 찌르듯 아프고 가스가 차서 하루에도 화장실을 5~6번씩 들락거렸습니다. 대장내시경 검사는 너무나 깨끗한 정상이었지만 저에게는 매일이 지옥 같았습니다. 장-뇌 축(Gut-Brain Axis)의 신경 신호 전달 이상으로 장 신경총이 과민해진 상태라는 해아림의 진단을 받고 치료를 시작했습니다. 장내 미생물 환경을 개선하고 공황 자율신경 장관 반사를 안정시키는 맞춤 한약을 복용하며 복부 약침 치료를 받았습니다. 3주 차부터 복부 팽만감과 묵직한 통증이 사라졌고, 대변 상태가 황금색 바나나변으로 정상화되었습니다. 최종 면접에서도 아무런 복통 없이 실력을 발휘해 꿈꾸던 공기업에 당당히 합격했습니다.",
            "author": "20대 취준생 조OO 님",
            "date": "2022.08.30",
            "views": 478,
            "image": "/images/reviews/review_2.jpg"
          },
          {
            "id": "rev-auto-hist-12-1653826260000",
            "category": "긴장성두통/어깨결림",
            "author": "40대 교직원 오OO 님",
            "date": "2022.05.29",
            "views": 2251,
            "image": "/images/reviews/review_6.jpg",
            "title": "머리를 쇠줄로 조이는 듯하던 10년 만성 두통, 진통제를 완전히 끊었습니다",
            "content": "매일 아침 눈을 뜨자마자 뒷목이 뻣뻣하고 관자놀이를 밴드로 꽉 조이는 듯한 두통에 타이레놀과 이지엔을 한 움큼씩 먹으며 버텼습니다. 위장까지 상해 진통제 부작용이 심각해졌지만 약 없이는 하루도 버틸 수 없었습니다.\n\n해아림한의원에서 교감신경 과긴장으로 인한 근막 혈관 수축성 두통이라는 정확한 진단을 받고 치료에 들어갔습니다. 경추 공황 자율신경절의 긴장이 풀리면서 머리를 옥죄던 묵직한 통증이 거짓말처럼 흩어졌습니다. 현재 진통제를 완전히 끊은 지 1년이 넘었지만 단 한 번도 두통이 재발하지 않았습니다. 머리가 맑아지니 매일매일 출근길이 가볍고 행복합니다.",
            "hasTreatment": false,
            "treatmentType": null,
            "isCustom": false,
            "isCanonical": true
          },
          {
            "id": "rev-add-8-1650153600000",
            "category": "수면장애 & 만성불면",
            "title": "밤새 뒤척이고 1시간마다 깨어나 퀭하던 3년 불면증, 교감신경 안정 한약 복용 2주 만에 숙면을 취합니다",
            "content": "3년 넘게 잠자리에 누워도 심장이 쿵쾅거려 잠들기까지 2시간 이상 걸리고, 겨우 잠들어도 1~2시간 간격으로 깨어났습니다. 수면유도제에 의존했으나 아침마다 머리가 멍하고 기억력이 떨어져 고통스러웠습니다. 해아림한의원에서 뇌파와 심박변이도 검사 후 밤사이 교감신경이 가라앉지 않는 공황 자율신경 실조를 확인했습니다. 야간 뇌간의 열을 식히고 멜라토닌 분비를 돕는 산조인 안신 탕약과 CST 치료를 시작한 지 2주 만에 6시간 연속 꿀잠을 잤고, 수면제 없이도 상쾌하게 아침을 맞이하고 있습니다.",
            "author": "40대 교사 조OO 님",
            "date": "2022.04.17",
            "views": 2310,
            "image": "/images/reviews/review_2.jpg"
          },
          {
            "id": "rev-auto-hist-13-1638619920000",
            "category": "기립성/저혈압",
            "author": "30대 디자이너 권OO 님",
            "date": "2021.12.04",
            "views": 2202,
            "image": "/images/reviews/review_1.jpg",
            "title": "샤워 후 또는 일어설 때 핑 돌던 시야 암전, 혈류가 안정되었습니다",
            "content": "따뜻한 물로 샤워하고 나오거나 소파에서 일어설 때마다 눈앞이 캄캄해지고 식은땀이 나며 주저앉아야 했습니다. 체중도 적고 혈압도 낮아 체질 탓인 줄로만 알았는데, 갈수록 빈도가 잦아져 혼자 집에 있는 것조차 두려웠습니다.\n\n해아림의 정밀 공황장애 정밀검사를 통해 혈관 운동 반사 기능이 지연되어 있다는 원인을 파악했습니다. 몸의 중심 에너지를 끌어올리고 혈관 탄력을 높여주는 체계적인 치료를 받으며 한 달 만에 기립 시 어지럼증이 80% 이상 개선되었습니다. 지금은 샤워 후에도 머리가 맑고, 지하철을 서서 타고 다녀도 어지럽지 않습니다. 든든하게 치료해 주셔서 참 고맙습니다.",
            "hasTreatment": false,
            "treatmentType": null,
            "isCustom": false,
            "isCanonical": true
          },
          {
            "id": "rev-clinical-9-1636934400000",
            "category": "긴장성 두통 & 목어깨통증",
            "title": "머리를 띠로 꽉 조이는 듯한 만성 긴장성 두통, 진통제 끊고 10년 두통에서 해방되었습니다",
            "content": "모니터를 종일 보는 직업 특성상 뒷목과 승모근이 바위처럼 굳어 있었고, 매일 오후만 되면 관자놀이와 정수리를 바이스로 조이는 듯한 두통에 시달렸습니다. 게보린, 타이레놀을 하루 4~5알씩 복용하다 보니 위장까지 망가져 속쓰림에 시달렸습니다. 통증의학과 신경차단 주사도 효과가 일주일을 넘기지 못했습니다. 해아림한의원에서 경추 심부 근막의 지속적 긴장과 교감신경 긴장이 결합된 만성 두통임을 확인하고, 후두하근과 측두근의 긴장을 푸는 침구 치료와 신경 영양 한약을 처방받았습니다. 2주 만에 두통 발생 빈도가 주 6회에서 1~2회로 뚝 떨어졌고, 2달 치료 후에는 진통제를 완전히 끊었습니다. 뒷목이 가볍고 눈이 번쩍 뜨이는 기분입니다.",
            "author": "40대 디자이너 임OO 님",
            "date": "2021.11.15",
            "views": 433,
            "image": "/images/reviews/review_3.jpg"
          },
          {
            "id": "rev-add-9-1629676800000",
            "category": "기립성 조절장애 & 어지럼",
            "title": "앉았다 일어설 때 눈앞이 캄캄해져 주저앉던 기립성 어지럼증, 혈관 탄력 강화 한약으로 완쾌",
            "content": "의자에서 일어나거나 아침에 일어날 때마다 눈앞이 새하얘지며 핑 돌아 벽을 짚고 주저앉곤 했습니다. 빈혈인 줄 알고 철분제를 오래 복용했으나 호전이 없었습니다. 해아림에서 압수용체 반사 지연과 하체 혈관 수축력 저하로 인한 전형적인 기립성 공황 자율신경 조절 장애라는 설명을 들었습니다. 혈류를 심장과 뇌로 밀어 올려주는 보중익기탕 가감방과 골반-경추 밸런스 추나를 치료받은 지 한 달 만에 기립 시 아찔함이 씻은 듯이 사라져 활기차게 캠퍼스 생활을 하고 있습니다.",
            "author": "20대 대학생 배OO 님",
            "date": "2021.08.23",
            "views": 2450,
            "image": "/images/reviews/review_3.jpg"
          },
          {
            "id": "rev-auto-hist-14-1623931980000",
            "category": "전신통증/섬유근육",
            "author": "50대 주부 배OO 님",
            "date": "2021.06.17",
            "views": 2124,
            "image": "/images/reviews/review_2.jpg",
            "title": "온몸을 몽둥이로 맞은 듯 쑤시던 전신 통증, 공황 자율신경 회복으로 가뿐해졌습니다",
            "content": "비가 오거나 스트레스를 받으면 온몸의 뼈마디와 근육이 쑤시고 욱신거려 침대에서 일어나지도 못했습니다. 류마티스내과에서는 섬유근육통 증후군이라며 진통제와 항우울제만 처방해 주었지만 몸은 늘 천근만근이었습니다.\n\n해아림한의원에서 중추 신경계의 통증 과민 반응을 안정시키는 맞춤 한약과 경추-골반 정렬을 바로잡는 추나요법, 척추 신경절 약침 치료를 병행했습니다. 굳어 있던 척추와 근막이 부드러워지면서 몸을 짓누르던 전신 피로와 시린 통증이 서서히 걷혔습니다. 이제는 가벼운 등산도 즐길 수 있을 만큼 몸이 가뿐합니다. 정성을 다해 치료해 주신 원장님 감사합니다.",
            "hasTreatment": true,
            "treatmentType": "한약 + 추나요법 + 약침",
            "isCustom": false,
            "isCanonical": true
          },
          {
            "id": "rev-auto-hist-15-1606133640000",
            "category": "가슴두근거림/불안",
            "author": "40대 회사원 서OO 님",
            "date": "2020.11.23",
            "views": 2068,
            "image": "/images/reviews/review_3.jpg",
            "title": "가만히 있어도 심장이 쿵쿵 울리던 심계항진, 평온한 맥박을 되찾았습니다",
            "content": "컴퓨터 모니터를 보거나 조용한 방에 누워 있으면 가슴속에서 심장이 북을 치듯 쿵쿵 울려 가슴을 부여잡아야 했습니다. 심장 초음파 검사에서는 맥박수만 조금 빠를 뿐 구조적 이상이 없다고 하여 정신과 약을 권유받았습니다.\n\n신경정신과 약에 대한 두려움이 커 해아림한의원을 찾았고, 교감신경의 브레이크 역할을 하는 미주신경 기능 회복 치료를 받았습니다. 치료를 이어가면서 이유 없이 치솟던 심장 두근거림이 차분하게 가라앉았고, 가슴을 죄어오던 답답함도 사라졌습니다. 이제는 불안 없이 온전한 휴식을 취할 수 있게 되었습니다. 진심으로 감사드립니다.",
            "hasTreatment": false,
            "treatmentType": null,
            "isCustom": false,
            "isCanonical": true
          },
          {
            "id": "rev-add-10-1605139200000",
            "category": "다한증 & 신경성 식은땀",
            "title": "중요한 미팅 때마다 손바닥과 겨드랑이에서 비 오듯 쏟아지던 국소 다한증, 교감신경 긴장 완화로 극복",
            "content": "긴장되는 상황이나 낯선 사람과 만날 때면 손과 겨드랑이에서 땀이 뚝뚝 떨어져 악수조차 나눌 수 없었습니다. 흉부 교감신경 차단술은 보상성 다한증 부작용이 두려워 엄두를 내지 못했습니다. 해아림에서 체온과 땀샘 분비를 독점 통제하는 교감신경 과민 반응을 안정시키는 치료를 받았습니다. 땀구멍의 개폐 조절력을 길러주는 옥병풍산 계열의 한약과 공황 자율신경 이완 침치료 덕분에 발표나 회의 시에도 땀이 쏟아지지 않고 침착하게 프레젠테이션을 해내고 있습니다.",
            "author": "30대 영업직 문OO 님",
            "date": "2020.11.12",
            "views": 2600,
            "image": "/images/reviews/review_4.jpg"
          },
          {
            "id": "rev-clinical-10-1594166400000",
            "category": "공황/불안실조증 & 무기력",
            "title": "배터리가 방전된 로봇 같던 극심한 만성 피로와 번아웃, 해아림 맞춤 보양 한약으로 에너지를 회복했습니다",
            "content": "아침에 눈을 뜨면 온몸에 모래주머니를 달아 놓은 것처럼 천근만근 무겁고, 주말에 14시간씩 잠을 자도 피로가 1%도 풀리지 않았습니다. 피검사에서 간 기능, 갑상선 수치 모두 정상이었지만 의욕과 집중력이 바닥나 일상생활 자체가 불가능한 번아웃 상태였습니다. 부신 피로와 뇌 공황 자율신경계 탈진으로 인한 교감·부교감신경의 총합 활성도 저하 상태였습니다. 해아림에서 원기를 북돋우고 신수(腎水)를 채워주는 맞춤 공진단과 익기탕을 복용하며 주 1회 CST 치료를 받았습니다. 복용 2주째부터 오후 시간의 졸음과 무기력감이 걷히기 시작했고, 한 달 뒤에는 퇴근 후 가벼운 조깅을 즐길 수 있을 만큼 신체 에너지가 충전되었습니다.",
            "author": "30대 공무원 한OO 님",
            "date": "2020.07.08",
            "views": 567,
            "image": "/images/reviews/review_4.jpg"
          },
          {
            "id": "rev-auto-hist-16-1586693700000",
            "category": "만성소화불량/가스",
            "author": "30대 연구원 유OO 님",
            "date": "2020.04.12",
            "views": 2014,
            "image": "/images/reviews/review_4.jpg",
            "title": "배에 가스가 가득 차 터질 것 같던 복부 팽만감, 속이 편안해졌습니다",
            "content": "식사만 하면 아랫배가 풍선처럼 부풀어 오르고 가스가 차서 바지 단추를 풀지 않으면 숨을 쉴 수 없었습니다. 방귀와 트림이 잦아 연구실에서 사람들과 함께 일하는 것이 너무나 곤혹스러웠습니다. 유산균이나 소화제는 아무런 소용이 없었습니다.\n\n해아림에서 뇌 공황 자율신경계 실조로 위장 연동운동 신호가 꼬여 있다는 설명을 듣고 치료를 시작했습니다. 굳어 있던 복부 긴장이 완화되면서 더부룩함과 복부 팽만이 점차 가라앉았습니다. 지금은 식후에도 배가 편안하고 가스 참도 거의 없어 연구 업무에 전념하고 있습니다. 제 건강을 되찾아주신 해아림에 깊이 감사드립니다.",
            "hasTreatment": false,
            "treatmentType": null,
            "isCustom": false,
            "isCanonical": true
          },
          {
            "id": "rev-add-11-1583366400000",
            "category": "인후이물감 & 매핵기",
            "title": "목에 가래나 솜뭉치가 걸린 듯 삼켜지지도 뱉어지지도 않던 매핵기, 인후부 이완 치료로 깨끗이 해소",
            "content": "목구멍에 무언가 걸린 듯 답답해 헛기침을 수백 번씩 하고 침을 삼켜도 개운하지 않았습니다. 이비인후과 후두 내시경에서는 아무런 염증이나 결절이 없다고 하였습니다. 해아림한의원에서 스트레스로 인한 교감신경 항진과 식도 괄약근의 비정상적 연축(한의학적 매핵기)임을 명쾌하게 진단해 주셨습니다. 반하후박탕 기반의 맞춤 탕약과 경부 경혈 침구 치료를 통해 목 주변의 긴장을 풀어주자, 3주 만에 목에 걸려 있던 답답한 솜뭉치가 녹아내리듯 사라졌습니다.",
            "author": "50대 강사 황OO 님",
            "date": "2020.03.05",
            "views": 2750,
            "image": "/images/reviews/review_5.jpg"
          },
          {
            "id": "rev-add-12-1571443200000",
            "category": "경추긴장 & 긴장성 두통",
            "title": "목과 어깨가 쇳덩이처럼 굳고 관자놀이가 쑤시던 만성 긴장성 두통, 상부 경추 교정과 약침으로 해방",
            "content": "하루 종일 컴퓨터 모니터를 보는 직업 특성상 목어깨가 돌처럼 굳어 있었고, 오후만 되면 뒤통수와 관자놀이가 찌릿하게 조여 진통제를 하루 3알씩 먹었습니다. 마사지나 도수치료는 하루만 지나면 원위치였습니다. 해아림에서 상경신경절 압박과 뇌척수액 순환 장애를 진단받고 상부 경추 추나요법과 후두하근 약침 치료를 받았습니다. 굳어 있던 뇌혈류 통로가 열리며 짓누르던 바위가 내려앉는 듯한 가벼움을 느꼈고, 지금은 진통제 없이도 맑은 정신으로 코딩 작업을 하고 있습니다.",
            "author": "40대 개발자 안OO 님",
            "date": "2019.10.19",
            "views": 2890,
            "image": "/images/reviews/review_6.jpg"
          },
          {
            "id": "rev-auto-hist-17-1569672960000",
            "category": "상열감/안면홍조",
            "author": "40대 상담사 남OO 님",
            "date": "2019.09.28",
            "views": 1948,
            "image": "/images/reviews/review_5.jpg",
            "title": "시도 때도 없이 얼굴이 붉어지고 열이 치솟던 신경성 홍조가 진정되었습니다",
            "content": "고객 상담 중 조금만 긴장하거나 온도 변화가 있으면 얼굴과 목덜미가 불타는 고구마처럼 붉어지고 열감이 뻗쳤습니다. 피부과 레이저 시술도 받아보았지만 열감 자체를 잡을 수 없어 심리적 위축이 극에 달했습니다. 거울을 볼 때마다 눈물이 났습니다.\n\n해아림한의원에서 심장에 뭉친 울화와 뇌 공황 자율신경계 혈관 운동 실조를 다스리는 치료를 받았습니다. 상체로 몰리던 비정상적인 열기가 아래로 가라앉으면서, 얼굴이 화끈거리며 붉어지던 현상이 눈에 띄게 완화되었습니다. 이제는 대인관계에서도 당당하게 얼굴을 마주하고 환하게 웃을 수 있어 큰 자신감을 되찾았습니다.",
            "hasTreatment": false,
            "treatmentType": null,
            "isCustom": false,
            "isCanonical": true
          },
          {
            "id": "rev-clinical-11-1556150400000",
            "category": "심인성 방광 & 빈뇨",
            "title": "외출할 때마다 화장실 위치부터 찾던 과민성 방광과 야간뇨, 밤에 깨지 않고 푹 잡니다",
            "content": "고속도로 버스를 타거나 차가 막히면 갑자기 소변이 마려워 미칠 것 같았고, 밤에도 자다가 4~5번씩 소변 때문에 깨어나 숙면을 취해본 지가 언제인지 기억도 나지 않았습니다. 비뇨기과 약을 먹으면 입이 바짝 마르고 변비가 심해져 오래 먹을 수 없었습니다. 방광 괄약근을 조절하는 뇌 공황 자율신경계 과흥분 상태를 진단받고, 신장과 방광의 기운을 보하고 중추 신경 긴장을 이완시키는 온포탕 계열의 한약 치료를 받았습니다. 치료 한 달 만에 야간뇨 횟수가 1회로 줄었고, 낮에도 3~4시간 동안 화장실 걱정 없이 편안하게 업무를 봅니다. 삶의 질이 200% 개선되었습니다.",
            "author": "50대 자영업 송OO 님",
            "date": "2019.04.25",
            "views": 388,
            "image": "/images/reviews/review_5.jpg"
          },
          {
            "id": "rev-auto-hist-18-1552652220000",
            "category": "만성피로/무기력",
            "author": "50대 주부 노OO 님",
            "date": "2019.03.15",
            "views": 1877,
            "image": "/images/reviews/review_6.jpg",
            "title": "배터리가 방전된 듯 손가락 하나 까딱하기 힘들던 만성 피로를 극복했습니다",
            "content": "아침에 눈을 뜨는 것조차 고역이었고, 청소기 한번 돌리고 나면 탈진해서 반나절을 누워 있어야 했습니다. 비타민 수액을 맞아도 효과는 그때뿐이었고, 온몸의 에너지가 바닥나 우울증까지 찾아왔습니다. 조금만 신경 써도 식은땀이 나고 기력이 떨어져 사람 만나는 것조차 피하게 되었습니다.\n\n해아림한의원에서 공황 자율신경 활력도 검사를 받고 부교감과 교감이 모두 바닥인 '번아웃 신경 쇠약' 상태임을 확인했습니다. 원장님의 세심한 지도와 치료를 3개월간 성실하게 따르면서, 몸 밑바닥에서부터 은은하게 생체 에너지가 차오르는 것을 느꼈습니다. 지금은 집안일은 물론 취미 생활로 꽃꽂이와 요가까지 거뜬히 소화합니다. 맑고 활기찬 제 모습을 되찾아주셔서 감사합니다.",
            "hasTreatment": false,
            "treatmentType": null,
            "isCustom": false,
            "isCanonical": true
          },
          {
            "id": "rev-auto-hist-19-1538741880000",
            "category": "기립성/어지럼",
            "author": "30대 직장인 하OO 님",
            "date": "2018.10.05",
            "views": 1820,
            "image": "/images/reviews/review_1.jpg",
            "title": "엘리베이터나 마트 진열대만 보면 어지럽던 전정신경 증상 완치 후기",
            "content": "대형마트의 빽빽한 진열대를 보거나 엘리베이터를 타면 뇌가 흔들리고 균형을 잡지 못해 물건을 놓치기 일쑤였습니다. 이석증 치료를 여러 번 받았지만 미세한 잔여 어지럼증과 머릿속 멍함은 사라지지 않아 일상생활이 지옥 같았습니다. 운전은커녕 혼자 길을 걷는 것조차 불안해 늘 누군가의 팔을 붙잡고 다녀야 했습니다.\n\n해아림한의원 공황 자율신경 클리닉에서 전정 기능과 연계된 뇌 혈류 순환 치료를 체계적으로 받았습니다. 흔들리던 중심 감각이 서서히 단단해지더니 두 달 만에 마트나 백화점에 가도 아무렇지 않게 쇼핑을 즐길 수 있게 되었습니다. 어지럼증 공포에서 벗어나게 해 주셔서 감사드립니다.",
            "hasTreatment": false,
            "treatmentType": null,
            "isCustom": false,
            "isCanonical": true
          },
          {
            "id": "rev-add-13-1530316800000",
            "category": "신경성 빈뇨 & 과민성 방광",
            "title": "외출만 하면 화장실 위치부터 찾던 신경성 과민성 방광, 야간뇨 없이 아침까지 편안합니다",
            "content": "30분 간격으로 소변이 마렵고 조금만 참아도 아랫배가 찢어질 듯 아파 지하철 타는 것조차 공포였습니다. 비뇨기과 방광염 검사는 깨끗한데 방광근육 과민제는 입만 바짝 마를 뿐 효과가 없었습니다. 해아림에서 골반강 공황 자율신경 부교감신경 실조를 치료하는 맞춤 한약과 하초 온열 침뜸 치료를 받았습니다. 골반 긴장이 풀리고 방광 괄약근이 부드러워지면서 배뇨 간격이 3~4시간으로 정상화되었고, 밤에도 깨지 않고 편안하게 수면을 취합니다.",
            "author": "60대 주부 전OO 님",
            "date": "2018.06.30",
            "views": 3020,
            "image": "/images/reviews/review_1.jpg"
          },
          {
            "id": "rev-auto-hist-20-1524226740000",
            "category": "수면/야간각성",
            "author": "40대 자영업 문OO 님",
            "date": "2018.04.20",
            "views": 1723,
            "image": "/images/reviews/review_2.jpg",
            "title": "밤새 30분 간격으로 깨며 시계만 보던 악몽 같은 불면증에서 해방되었습니다",
            "content": "잠자리에 누우면 심장이 쿵쾅거리고 온갖 잡생각이 꼬리를 물어 새벽까지 뒤척였습니다. 겨우 잠들어도 30분마다 깨어나 시계를 확인하느라 밤이 오는 것 자체가 끔찍한 공포였습니다. 낮에는 좀비처럼 멍한 상태로 손님을 응대해야 해 실수도 잦았습니다.\n\n해아림한의원에서 뇌신경 흥분을 진정시키고 부교감신경의 회복력을 북돋아 주는 치료를 받았습니다. 2주가 지나면서 중간에 깨는 횟수가 눈에 띄게 줄었고, 한 달 후에는 6~7시간 동안 단 한 번도 깨지 않고 푹 자는 기적을 경험했습니다. 수면이 회복되니 모든 생활과 사업이 제자리를 찾았습니다. 진심으로 감사드립니다.",
            "hasTreatment": false,
            "treatmentType": null,
            "isCustom": false,
            "isCanonical": true
          },
          {
            "id": "rev-auto-hist-21-1510489200000",
            "category": "공황/발작",
            "author": "40대 운전직 강OO 님",
            "date": "2017.11.12",
            "views": 1673,
            "image": "/images/reviews/review_3.jpg",
            "title": "터널이나 고속도로 운전 중 숨이 턱 막히던 공황 증상, 완치 판정 받았습니다",
            "content": "고속도로 터널을 지날 때 갑자기 가슴이 터질 듯 뛰고 손발이 마비되며 차를 갓길에 세워야 했던 공황발작이 있었습니다. 그 뒤로 다리 위나 터널, 고속도로는 쳐다보지도 못하고 국도로만 돌아다녀 직업을 잃을 뻔했습니다. 가장으로서 막막함에 잠을 이룰 수 없었습니다.\n\n해아림한의원에서 뇌 편도체의 과민 경보를 끄고 공황 자율신경 안정을 찾아주는 집중 치료를 받았습니다. 치료 과정에서 점차 마음의 안정과 신체 통제력을 회복하였고, 원장님의 격려 속에 터널 운전 훈련을 거쳐 마침내 고속도로 장거리 운전도 아무런 불안 없이 완주했습니다. 제 직업과 가정을 지켜주신 은인입니다.",
            "hasTreatment": false,
            "treatmentType": null,
            "isCustom": false,
            "isCanonical": true
          },
          {
            "id": "rev-clinical-12-1505088000000",
            "category": "전신 통증 & 섬유근통",
            "title": "온몸을 몽둥이로 맞은 듯 쑤시고 아프던 원인 모를 섬유근육통, 맑은 혈액과 신경 안정 한약으로 완쾌",
            "content": "어깨, 등, 허리, 골반 할 것 없이 온몸 구석구석이 쑤시고 아파 정형외과, 마취통증의학과, 류마티스내과를 수없이 전전했습니다. 류마티스 인자나 염증 수치는 다 정상인데 본인은 숨도 못 쉴 만큼 아팠습니다. 섬유근육통은 통증을 전달하고 억제하는 중추 신경계 신경전달물질의 교란과 공황 자율신경 실조가 근본 원인이라는 해아림의 설명을 듣고 희망을 품었습니다. 굳어있던 심부 척추 신경근을 이완하는 침 치료와 기혈 순환 탕약을 3개월간 복용했습니다. 찌르는 듯한 전신 유주성 통증이 80% 이상 줄어들었고, 이제는 손자들과 함께 공원 산책을 다닐 정도로 거동이 편안해졌습니다.",
            "author": "60대 은퇴자 신OO 님",
            "date": "2017.09.11",
            "views": 495,
            "image": "/images/reviews/review_6.jpg"
          },
          {
            "id": "rev-add-14-1492128000000",
            "category": "말초감각이상 & 사지저림",
            "title": "온몸에 쥐가 나듯 찌릿거리고 감각이 둔해져 뇌질환 의심했던 말초 신경 이상, 공황 자율신경 조절로 회복",
            "content": "손가락과 발가락이 남의 살처럼 둔하고 벌레가 기어가는 듯 스멀거려 뇌졸중이나 루게릭병이 아닌가 불안에 떨었습니다. 대학병원 근전도 검사와 뇌 MRI 모두 정상이라 하여 더 혼란스러웠습니다. 해아림에서 척수 신경절의 미세 순환 부전과 교감신경 긴장으로 인한 감각 신경 과민증임을 확인했습니다. 신경막을 안정시키는 거풍순환 한약과 말초 혈류 약침 치료를 2달간 집중한 결과, 찌릿거리던 감각 이상이 완전히 사라지고 본래의 손끝 감각을 온전히 회복했습니다.",
            "author": "50대 사업가 홍OO 님",
            "date": "2017.04.14",
            "views": 3150,
            "image": "/images/reviews/review_2.jpg"
          },
          {
            "id": "rev-auto-hist-22-1481199660000",
            "category": "위무력/식도염",
            "author": "50대 공무원 임OO 님",
            "date": "2016.12.08",
            "views": 1611,
            "image": "/images/reviews/review_4.jpg",
            "title": "음식이 식도에 걸려 내려가지 않던 연하곤란과 가슴 통증 극복기",
            "content": "밥을 삼킬 때마다 식도 중간에 음식이 꽉 걸려 가슴을 쥐어짜는 듯한 통증이 발생했습니다. 식도 내시경과 조영술에서도 연하 기능에는 이상이 없다고 하는데, 식사 시간이 두려워 죽만 먹다 보니 기력이 쇠약해졌습니다.\n\n해아림한의원에 내원하여 스트레스로 인한 식도 괄약근 경련 및 공황 자율신경 실조 진단을 받았습니다. 위장 신경을 정상화하는 맞춤 한약과 공황 자율신경 밸런스를 돕는 뇌파 바이오피드백 훈련, 침 치료를 2개월간 성실히 받았습니다. 식도가 부드럽게 이완되면서 음식이 막힘없이 술술 넘어가기 시작했고, 지금은 일반 밥과 고기도 맛있게 씹어 삼킵니다. 진심으로 감사드립니다.",
            "hasTreatment": true,
            "treatmentType": "한약 + 뇌파 바이오피드백 + 침",
            "isCustom": false,
            "isCanonical": true
          },
          {
            "id": "rev-add-15-1470700800000",
            "category": "만성피로 & 부신피로",
            "title": "배터리가 방전된 듯 아침에 눈뜨기조차 힘들던 5년 차 극심한 번아웃 만성피로, 체질 맞춤 보약으로 활력 충전",
            "content": "10시간을 자도 피로가 전혀 풀리지 않고 온몸이 물에 젖은 솜처럼 무거워 일상생활 자체가 불가능했습니다. 각종 간장약과 영양제를 쏟아부어도 기력이 돌아오지 않았습니다. 해아림에서 HPA 축(시상하부-뇌하수체-부신)의 기능적 탈진과 공황 자율신경 실조 상태를 진단받고, 진액을 보충하고 부신 기능을 소생시키는 맞춤 공진단 및 보기보양 탕약을 처방받았습니다. 복용 3주 만에 몸이 가뿐해지며 활력이 솟았고, 이제는 주말마다 등산을 다닐 만큼 원기를 회복했습니다.",
            "author": "40대 전문직 권OO 님",
            "date": "2016.08.09",
            "views": 3280,
            "image": "/images/reviews/review_3.jpg"
          },
          {
            "id": "rev-clinical-13-1449091200000",
            "category": "가슴두근거림 & 공황",
            "title": "수업 중 갑작스런 호흡곤란과 심장 발작으로 쓰러질 뻔했던 공황 증상, 교단에 당당히 섰습니다",
            "content": "학생들 앞에서 강의를 하던 도중 갑자기 목구멍이 좁아지는 느낌과 함께 숨을 들이마실 수 없었고 심장이 분당 120회로 미친 듯이 뛰었습니다. 교단에 서는 것이 공포가 되어 병가를 내고 정신과 약을 복용했지만 멍하고 둔해지는 부작용 때문에 수업 진행이 어려웠습니다. 해아림한의원에서 뇌 공황 자율신경계 급발진을 안정시키는 한약과 심호흡 이완 훈련을 시작했습니다. 첫 3주간의 집중 치료를 거치며 심장의 안정을 찾았고, 2달 후에는 약 없이도 떨림이나 과호흡 없이 50분 수업을 힘차게 마칠 수 있게 되었습니다. 저처럼 공황과 공황 자율신경 장애로 고통받는 선생님들께 강력히 추천합니다.",
            "author": "30대 교사 오OO 님",
            "date": "2015.12.03",
            "views": 521,
            "image": "/images/reviews/review_1.jpg"
          },
          {
            "id": "rev-auto-hist-23-1439986920000",
            "category": "수족냉증/저림",
            "author": "30대 주부 곽OO 님",
            "date": "2015.08.19",
            "views": 1525,
            "image": "/images/reviews/review_5.jpg",
            "title": "한여름에도 손발이 시려 수면양말을 신던 극심한 수족냉증 완치",
            "content": "한여름 무더위에도 손가락과 발가락 끝이 시리고 저려 에어컨이 나오는 곳에는 10분도 앉아 있지 못했습니다. 혈액순환 개선제를 아무리 먹어도 효과가 없고 레이노드 증후군 의심까지 받아 고통스러웠습니다. 손발이 너무 차가워 잠들 때도 발끝에 온열기를 틀어야 했습니다.\n\n해아림한의원에서 뇌 공황 자율신경계 말초 혈관 수축 반사 장애를 교정하는 치료를 받았습니다. 차갑게 얼어붙어 있던 손발 말초 혈관이 서서히 열리며 따뜻한 혈액이 돌기 시작했고, 손발 저림과 시린 감각이 씻은 듯 사라졌습니다. 이제는 여름에도 편안하게 외출하고 에어컨 바람도 두렵지 않습니다. 삶의 큰 짐을 덜어주셨습니다.",
            "hasTreatment": false,
            "treatmentType": null,
            "isCustom": false,
            "isCanonical": true
          },
          {
            "id": "rev-add-16-1414368000000",
            "category": "구강건조 & 작열감증후군",
            "title": "입안이 바짝 말라 혓바닥이 갈라지고 불에 덴 듯 화끈거리던 구강작열감, 진액 보충 한약으로 촉촉해졌습니다",
            "content": "물을 하루 2리터 이상 마셔도 입안이 모래사막처럼 마르고 혀가 불타는 듯 쓰려 음식을 먹기조차 힘들었습니다. 치과와 이비인후과에서는 쇼그렌 증후군은 아니라며 가글액만 처방해 주어 절망했습니다. 해아림한의원에서 침샘을 지배하는 공황 자율신경 기능 마비와 심장·위장의 화열(火熱)을 다스리는 생혈윤조 탕약 처방을 받았습니다. 한약 복용 4주 만에 침샘에서 자연스러운 침이 고이기 시작했고, 혀의 작열감이 말끔히 사라져 좋아하는 매콤한 음식도 맛있게 먹고 있습니다.",
            "author": "60대 주부 서OO 님",
            "date": "2014.10.27",
            "views": 3410,
            "image": "/images/reviews/review_4.jpg"
          },
          {
            "id": "rev-auto-hist-24-1413289380000",
            "category": "과민성방광/빈뇨",
            "author": "40대 교사 탁OO 님",
            "date": "2014.10.14",
            "views": 1489,
            "image": "/images/reviews/review_6.jpg",
            "title": "영화 한 편도 못 보고 화장실만 찾던 신경성 빈뇨, 일상을 되찾았습니다",
            "content": "수업 시간 도중이나 영화관에 갈 때마다 소변이 마려워 1시간에 서너 번씩 화장실을 들락거렸습니다. 비뇨기과 검사상 방광염이나 전립선 이상은 전혀 없었는데, 소변을 보고 나와도 개운하지 않고 방광이 조여왔습니다. 장거리 여행이나 버스는 엄두도 못 냈습니다.\n\n해아림한의원에서 방광 평활근을 지배하는 골반 공황 자율신경총의 과긴장을 안정시키는 치료를 받았습니다. 초조했던 마음이 차분해지면서 방광에 소변이 정상적으로 차도 불안하지 않게 되었습니다. 지금은 3~4시간 동안 화장실 걱정 없이 편안하게 수업을 진행하고 여행도 즐깁니다. 깊은 감사를 드립니다.",
            "hasTreatment": false,
            "treatmentType": null,
            "isCustom": false,
            "isCanonical": true
          },
          {
            "id": "rev-auto-hist-25-1384950240000",
            "category": "만성두통/어지럼",
            "author": "30대 프로그래머 성OO 님",
            "date": "2013.11.20",
            "views": 1412,
            "image": "/images/reviews/review_1.jpg",
            "title": "머릿속이 흔들리고 눈이 빠질 듯 아프던 안구 통증과 두통 완치",
            "content": "모니터를 30분만 봐도 안구가 빠질 듯 아프고 관자놀이가 쑤시며 어지럼증이 동반되었습니다. 안과 검사는 정상이어서 직업병이라 생각하고 체념하며 살았지만 퇴사 위기에 몰렸습니다. 눈을 뜨고 있는 것 자체가 고통이었습니다.\n\n해아림한의원에서 삼차신경과 경추 공황 자율신경의 긴장 연계성을 진단받고 맞춤 치료를 진행했습니다. 눈 뒤쪽을 짓누르던 팽팽한 압력감이 서서히 빠져나가면서 눈 피로와 두통이 극적으로 호전되었습니다. 장시간 코딩 작업을 해도 눈이 맑고 집중력이 유지되어 업무 성과도 크게 올랐습니다. 새 눈과 맑은 머리를 선물해 주셔서 감사합니다.",
            "hasTreatment": false,
            "treatmentType": null,
            "isCustom": false,
            "isCanonical": true
          },
          {
            "id": "rev-clinical-14-1376870400000",
            "category": "만성 어지럼증 & 불면",
            "title": "엘리베이터도 못 탈 만큼 심각했던 회전성 어지럼증과 3년 불면증, 한방 치료로 완치했습니다",
            "content": "천장이 뱅글뱅글 도는 이석증을 앓고 난 뒤, 이석은 제자리에 들어갔다는데도 어지럼증과 울렁거림 잔여 증상이 1년 넘게 지속되었습니다. 특히 마트나 백화점처럼 사람이 붐비고 조명이 화려한 곳에 가면 뇌가 과부하 걸리며 쓰러질 것 같았습니다. 해아림에서 전정신경계와 뇌 공황 자율신경계가 만성적으로 불안정해진 '지속성 체위-지각 어지럼증(PPPD)' 상태로 진단받고, 뇌신경 밸런스를 바로잡는 청훈탕과 두개천골요법을 병행했습니다. 한 달 치료 후 마트 쇼핑이 가능해졌고, 3개월 치료 후에는 엘리베이터와 에스컬레이터도 두려움 없이 탑승하게 되었습니다. 깊은 밤 편안한 수면까지 덤으로 얻었습니다.",
            "author": "40대 주부 권OO 님",
            "date": "2013.08.19",
            "views": 610,
            "image": "/images/reviews/review_2.jpg"
          },
          {
            "id": "rev-auto-hist-26-1353068700000",
            "category": "가슴답답/호흡곤란",
            "author": "50대 제조업 대표 주OO 님",
            "date": "2012.11.16",
            "views": 1344,
            "image": "/images/reviews/review_2.jpg",
            "title": "가슴을 쥐어짜는 흉통과 호흡 곤란으로 응급실만 수차례 갔던 치료 후기",
            "content": "사업 스트레스로 가슴이 조여오고 숨이 가빠져 심근경색인 줄 알고 대학병원 응급실을 세 번이나 실려갔습니다. 심혈관 조영술까지 받았지만 심장은 깨끗하다는 결과에 답답하고 불안했습니다. 언제 또 가슴 통증이 올지 몰라 매 순간 살얼음판을 걷는 기분이었습니다.\n\n지인의 강력한 추천으로 해아림한의원을 찾았고, 흉곽 공황 자율신경절의 과흥분을 완화하는 체계적인 치료를 3개월 동안 꾸준히 받았습니다. 거짓말처럼 가슴을 쥐어짜던 압박감이 풀리고 숨길이 활짝 열렸습니다. 심장이 안정되니 사업에도 큰 활력이 붙었습니다. 건강을 되찾아주신 해아림에 깊이 감사드립니다.",
            "hasTreatment": false,
            "treatmentType": null,
            "isCustom": false,
            "isCanonical": true
          },
          {
            "id": "rev-auto-hist-27-1337689560000",
            "category": "공황/불안복합/불안",
            "author": "40대 주부 변OO 님",
            "date": "2012.05.22",
            "views": 1297,
            "image": "/images/reviews/review_3.jpg",
            "title": "온몸의 신경이 곤두서 미칠 것 같던 12년 전 공황장애, 해아림에서 완치",
            "content": "작은 소리에도 깜짝 놀라고, 심장이 수시로 뛰며 손발이 떨리고 머리가 멍해지는 온갖 신체 증상이 한꺼번에 덮쳤습니다. 병원 쇼핑을 2년 넘게 다녔지만 원인을 모른다는 말에 절망의 끝에 서 있었습니다.\n\n마지막 희망으로 찾은 해아림한의원에서 원장님은 제 호소에 귀 기울여 주셨고 공황장애이라는 명쾌한 진단과 함께 따뜻하게 손을 잡아주셨습니다. 원장님을 믿고 4개월간 꾸준히 치료를 받은 결과, 곤두서 있던 전신 신경계가 평온을 되찾았고 건강한 일상으로 완전히 복귀했습니다. 10년이 훌쩍 지난 지금까지도 건강하게 잘 지내고 있어 감사한 마음에 글을 남깁니다.",
            "hasTreatment": false,
            "treatmentType": null,
            "isCustom": false,
            "isCanonical": true
          },
          {
            "id": "rev-add-17-1337299200000",
            "category": "전신신체화 & 난치성 공황/불안",
            "title": "10년 넘게 원인 모를 전신 통증과 공포감으로 고통받았는데, 해아림 공황 자율신경 클리닉을 만나 제2의 인생을 살고 있습니다",
            "content": "가슴 두근거림, 호흡곤란, 어지럼증, 위경련, 불면증이 10년 동안 끊이지 않고 돌아가며 찾아와 전국 유명 대학병원을 다 돌았습니다. 검사 결과는 늘 신경성이라는 말뿐이었고 가족들조차 꾀병이라 오해해 삶의 의욕을 잃었었습니다. 마지막 지푸라기라도 잡는 심정으로 해아림에 내원하여 공황장애이라는 정확한 원인을 알게 되었을 때 눈물이 쏟아졌습니다. 6개월간 원장님의 맞춤 한약 처방과 두개천골요법, 침구 치료를 꾸준히 받으면서 10년을 괴롭히던 복합 증상들이 하나씩 소멸되었고, 현재는 온전하고 건강한 삶을 누리고 있습니다.",
            "author": "50대 직장인 오OO 님",
            "date": "2012.05.18",
            "views": 3650,
            "image": "/images/reviews/review_5.jpg"
          },
          {
            "id": "rev-clinical-15-1322438400000",
            "category": "만성 위장장애 & 담적",
            "title": "신경성 위경련으로 10년 동안 밥을 못 먹고 응급실을 오가던 위장병, 해아림 한약으로 완전히 나았습니다",
            "content": "스트레스만 받으면 위장이 쥐어짜듯 뒤틀리며 극심한 경련이 발생해 119 구급차를 탄 것만 10번이 넘습니다. 대학병원 위장관 조영술과 내시경 검사를 매년 반복해도 \"신경성 위경련이니 마음을 편히 가지라\"는 허탈한 답변뿐이었습니다. 지인의 강력한 추천으로 해아림한의원을 찾아 공황 자율신경과 위장관 연동 신경망을 안정시키는 맞춤 치료를 시작했습니다. 복부 담적을 삭히고 간위불화(肝胃不和)를 해소하는 탕약을 복용하자 2주 만에 복부 팽만과 위경련 조짐이 사라졌습니다. 3달 완치 프로그램을 마친 후 지난 10년 동안 단 한 번도 위경련이 재발하지 않았으며, 지금도 감사한 마음으로 건강하게 사업을 운영하고 있습니다.",
            "author": "50대 사업가 배OO 님",
            "date": "2011.11.28",
            "views": 742,
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
            "title": "수면 중 이갈이와 턱관절 통증: 극심한 불안이 부르는 뇌간 삼차신경 긴장과 두개천골요법",
            "summary": "무의식적인 스트레스와 공황 불안이 뇌간의 삼차신경핵을 자극하여 저작근 경련을 일으키는 병태생리와 CST 치료",
            "content": "\"아침에 눈을 뜨면 턱관절이 뻐근하고 관자놀이가 조여오듯 아픕니다. 치과에 가니 밤새 이를 너무 심하게 갈아 어금니가 닳았다고 스플린트(마우스피스)를 맞추라고 합니다. 장치를 끼고 자도 이를 악무는 힘 자체는 줄지 않아 아침마다 턱과 목이 굳어 있습니다.\" 수면 중 무의식적인 이갈이(Bruxism)와 이악물기로 고통받으시는 환자분들의 전형적인 임상 양상입니다.\n\n이갈이는 단순한 치아 맞물림(교합)의 문제가 아니라, 수면 중 뇌간(Brainstem)의 교감신경 각성과 중추성 저작 패턴 발생기(CPG)의 폭주로 인해 발생하는 **'중추신경계의 무의식적 운동 장애'**입니다. 정상적인 수면에서는 뇌가 깊은 서파 수면에 들어가며 전신 근육의 톤(긴장도)이 이완되어야 합니다. 그러나 만성 스트레스와 억압된 분노, 불안에 시달리는 환자는 잠자는 동안에도 뇌 편도체가 비상사태를 유지합니다.\n\n미세 각성(Micro-arousal)이 일어날 때마다 심박수가 급등하고 제5뇌신경인 삼차신경 운동핵이 흥분하여 교근, 측두근, 내외익상근을 100kg 이상의 괴력으로 수축시키는 것입니다. 마우스피스는 치아 마모를 방지할 뿐, 뇌가 턱을 쥐어짜는 신호 자체를 차단하지 못합니다.\n\n해아림한의원에서는 턱관절과 안면 근막의 과흥분을 즉각 진정시키는 작약감초탕, 억간산 가감방을 처방하여 수면 중 신경 전도 과전류를 가라앉힙니다. 아울러 경추 1·2번과 측두골의 비틀림을 교정하는 턱관절 악관절 추나요법 및 교근 발화점 침구 치료를 병행하여, 밤사이 턱을 편안하게 이완시키고 아침 기상 시 맑고 개운한 두경부를 만들어 드립니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2026.09.09",
            "image": "/images/columns/column_23_bruxism_tmj.svg",
            "views": 2066
          },
          {
            "id": "col-auto-22-1788884100000",
            "colIndex": 22,
            "category": "칼럼",
            "title": "원인 모를 만성 골반통과 빈뇨, 신경성 비뇨생식기 증상과 골반 자율신경 과흥분",
            "summary": "비뇨기과·산부인과 검사는 정상이나 공황 불안 시 하복부 긴장과 방광 배뇨근 경련이 일어나는 기전과 하초 기혈 순환",
            "content": "\"아랫배와 골반 깊은 곳이 뻐근하게 조여오고 화장실을 다녀와도 10분만 지나면 다시 소변이 마려워 외출을 못 합니다. 비뇨기과에서 소변 균 배양 검사와 방광 내시경을 수차례 받았지만 '균도 없고 방광벽도 깨끗하다'는 말만 듣고 항생제와 소염진통제만 처방받았습니다. 약을 먹어도 통증은 여전한데 저는 왜 이렇게 괴로운 걸까요?\" 만성 골반통과 간질성 방광 증후군 의심으로 고통받으시는 환자분들의 안타까운 사연입니다.\n\n골반 내부의 방광, 요도, 직장, 생식기는 척추 하부 천골(천추 2~4번)에서 나오는 골반내장신경(부교감신경)과 하복신경총(교감신경)의 정밀한 오케스트라 조율을 받습니다. 만성 스트레스, 불안, 척추 불균형이 누적되면 골반저근(Pelvic Floor Muscles)이 만성 연축 상태에 빠지며 골반 내부의 미세 신경총을 강하게 압박합니다.\n\n그 결과 방광이 조금만 차도 비상벨이 울려 절박뇨와 빈뇨가 나타나고, 방광 배뇨근과 외요도 괄약근의 협응이 깨져 잔뇨감이 남게 됩니다. 또한 음부신경(Pudendal Nerve)이 압박받으면서 찌릿한 골반통과 회음부 불쾌감이 만성화됩니다. 세균이 없는 신경성 질환이므로 항생제 복용은 장내 유익균만 파괴할 뿐 신경 연축을 풀지 못합니다.\n\n해아림한의원에서는 하초의 어혈과 수독을 배출하고 골반 뇌 자율신경의 긴장을 풀어주는 오령산, 계지복령환, 팔미지황탕 가감방을 처방합니다. 이와 함께 천골 부위 신경절 경혈(차료, 중료) 약침 치료와 골반-요추 추나요법을 통해 굳어 있던 골반저 근막을 물리적으로 해소함으로써, 시원한 배뇨와 편안한 골반을 되찾아 드립니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2026.09.09",
            "image": "/images/columns/column_22_pelvic_pain.svg",
            "views": 2024
          },
          {
            "id": "col-auto-21-1788883500000",
            "colIndex": 21,
            "category": "칼럼",
            "title": "미각·후각 왜곡과 삼차신경 이상감각, 만성 스트레스가 부르는 뇌신경 염증과 한방 치료",
            "summary": "공황장애 환자에게 나타나는 뇌신경 감각 이상 증상과 신경염증 완화 맞춤 한약 치료",
            "content": "\"코로나를 앓고 난 뒤 6개월이 지났는데도 음식 맛이 전혀 느껴지지 않고, 향수나 샴푸 냄새를 맡으면 썩은 하수구 냄새나 역한 화학물질 냄새로 왜곡되어 미칠 지경입니다. 이비인후과에서 스테로이드 코 스프레이를 뿌려도 차도가 없고 신경 손상이라 시간이 약이라는 말만 들었습니다.\" 최근 진료실에서 급증하고 있는 미각·후각 이상감각증(Parosmia/Dysgeusia) 환자분들의 고통 어린 호소입니다.\n\n후각과 미각은 단순한 말초 감각 기관이 아니라, 제1뇌신경(후각신경), 제7뇌신경(안면신경), 제9뇌신경(설인신경)을 통해 뇌의 변연계(Limbic System) 및 뇌 자율신경 최고 중추와 직결되는 고도의 신경망입니다. 바이러스 감염이나 극심한 스트레스 후 신경교세포(Glia Cell)에 만성 신경염증(Neuroinflammation)이 잔존하면, 후각 수용체 신경세포의 축삭돌기가 재생되는 과정에서 잘못된 뇌 영역으로 신경 연결이 뒤엉키는 '신경 혼선(Aberrant Rewiring)'이 발생합니다.\n\n이로 인해 신선한 커피 향기를 맡아도 뇌는 타버린 고무 냄새로 잘못 해석하고, 맛있는 음식을 먹어도 쓴 쇠맛이나 모래알처럼 느끼게 되는 것입니다. 여기에 교감신경 과항진으로 비강 점막의 미세 혈류가 차단되면 신경 재생에 필요한 산소와 영양소 공급이 완전히 멈춰버립니다.\n\n한의학에서는 이를 외감(外感) 후 열독(熱毒)이 청규(淸竅)를 가리고 뇌 기혈이 마른 '비구무문(鼻九無聞)'이자 '설권미실(舌倦味失)'의 병증으로 치료합니다. 후각 점막의 미세 혈류 순환을 촉진하고 신경 염증을 배출하는 갈근탕, 온청음 가감방을 처방하여 신경세포의 생리적 재생을 강력히 유도합니다. 아울러 상부 경추와 접형골을 이완하는 두개천골요법(CST)을 통해 뇌 기저부의 뇌척수액 순환을 정상화하면, 마비되었던 후각구(Olfactory Bulb) 신경망이 살아나며 본래의 풍부하고 정밀한 맛과 향을 되찾게 됩니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2026.09.08",
            "image": "/images/columns/column_21_olfactory_gustatory.svg",
            "views": 1982
          },
          {
            "id": "col-auto-20-1788882000000",
            "colIndex": 20,
            "category": "칼럼",
            "title": "조금만 긴장해도 살이 쭉쭉 빠지거나 반대로 붓는 체중 이상: 자율신경 실조와 부신 고갈",
            "summary": "코르티솔 대사 장애와 소화기 기능 저하가 부르는 체중 급변의 원인 분석 및 비위 보강 치법",
            "content": "\"밥을 평소대로 먹는데도 3~4달 만에 살이 7kg이나 빠져 뼈만 앙상하게 남았습니다. 온몸에 기운이 하나도 없고 손발이 떨려 암에 걸린 것은 아닌가 온갖 정밀 검사를 다 해봤지만 이상이 없다고 합니다. 반대로 제 친구는 공황장애이 오고 나서 물만 마셔도 얼굴과 다리가 퉁퉁 부어 체중이 5kg이나 불었습니다. 뇌 자율신경 이상이 체중과 대사에도 직접적인 영향을 미치나요?\" 공황장애 발병 후 급격한 체중 변화와 체형 왜곡으로 불안에 떠시는 분들이 진료실에서 자주 묻는 질문입니다.\n\n우리가 섭취한 음식을 에너지로 전환하고 체지방을 저장하거나 분해하는 기초 대사 과정은 뇌의 시상하부와 뇌 자율신경계, 그리고 부신 피질 호르몬의 정밀한 조율을 받습니다. 공황장애 환자분들에게 체중 급감이나 급격한 부종이 나타나는 이유는 교감신경의 과항진과 부신 피로(Adrenal Fatigue)가 대사 균형을 파괴하기 때문입니다.\n\n우선 **급격한 체중 감소**가 나타나는 환자분들은 만성적인 교감신경 과흥분으로 인해 체내 대사가 비정상적으로 항진되는 '과이화작용(Hyper-catabolism)' 상태에 빠져 있습니다. 신체가 24시간 호랑이에게 쫓기는 비상사태로 인식하여, 쉬고 있을 때조차 심장과 근육이 포도당과 지방을 광적으로 태워 없앱니다. 여기에 스트레스 호르몬인 코르티솔이 근육 단백질을 강제로 분해하여 혈당으로 바꾸는 과정이 가속화되면서, 팔다리 근육이 눈에 띄게 빠지고 체중이 수 kg씩 곤두박질치는 것입니다. 음식을 아무리 많이 먹어도 미주신경 마비로 위장 흡수력이 떨어져 영양분이 세포 속으로 들어가지 못하고 겉돌게 됩니다.\n\n반대로 **물만 마셔도 붓고 살이 찌는 유형**은 부신 피로의 말기 단계로 접어들어 코르티솔 호르몬의 분비 리듬이 고갈되고 갑상선 호르몬 수용체의 감수성이 떨어진 상태입니다. 세포 내 대사율이 바닥을 치면서 기초대사량이 급감하고, 뇌 자율신경의 수분 조절 실패로 신장의 나트륨-칼륨 펌프가 고장 나 체내에 염분과 수분이 저류되는 '특발성 부종'이 동반됩니다. 살이 찐 것이 아니라 전신 세포가 수독(水毒)으로 부풀어 오른 상태입니다.\n\n한의학에서는 이를 비장과 신장의 양기가 허약해져 수분을 운화하지 못하는 '비신양허(脾腎兩虛)'이자 진액이 마르고 기혈이 쇠약해진 '기음양허(氣陰兩虛)'의 병증으로 변증합니다. 다이어트 약이나 강제 이뇨제는 고갈된 신경계를 완전히 파괴하는 치명적인 독이 됩니다. 치료는 헛바퀴 돌며 근육을 갉아먹는 교감신경의 흥분을 청열안신(淸熱安神) 처방으로 진정시키고, 부신의 원기를 회복시키는 온보비신(溫補脾腎) 탕약을 통해 무너진 대사 균형을 바로잡는 데 있습니다. 신경계가 비상사태를 해제하고 본래의 평온한 대사 리듬을 회복할 때, 체중은 자연스럽게 가장 건강한 표준 상태로 되돌아옵니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2026.09.06",
            "image": "/images/columns/column_20_metabolism.svg",
            "views": 1940
          },
          {
            "id": "col-auto-19-1788880000000",
            "colIndex": 19,
            "category": "칼럼",
            "title": "얼어붙는 것 같고 손가락 하나 까딱하기 힘든 극단적 무기력: 미주신경 등쪽 복합체의 '동결(Freeze)' 반응",
            "summary": "공황발작 후 찾아오는 심한 탈진과 무기력증의 다미주신경 이론(Polyvagal Theory) 분석",
            "content": "\"주말 내내 침대에 누워 잠만 자고 쉬었는데도 월요일 아침이면 몸이 천근만근 무겁고 머리는 안개가 낀 것처럼 멍합니다. 쉬면 회복되어야 하는데 쉬어도 쉬는 것 같지가 않습니다. 손가락 하나 까딱할 힘조차 없고, 사람 만나는 것도 귀찮으며, 세상만사가 다 꺼져가는 잿더미처럼 느껴집니다. 우울증 약을 먹어도 무기력은 전혀 나아지지 않는데 제 뇌가 영영 멈춰버린 걸까요?\" 만성 번아웃과 극단적 무기력증에 짓눌려 진료실을 찾으시는 환자분들의 절망 어린 호소입니다.\n\n현대 신경생물학의 거장 스티븐 포지스(Stephen Porges) 박사가 제창한 '다미주신경 이론(Polyvagal Theory)'에 따르면, 인체의 뇌 자율신경계는 단순히 교감신경과 부교감신경의 2분법으로만 작동하지 않습니다. 포유류의 신경계에는 안전과 사회적 유대를 담당하는 '배쪽 미주신경(Ventral Vagus)', 위기 상황에서 싸우거나 도망치는 '교감신경(Sympathetic)', 그리고 생존의 위협이 임계치를 넘어 도저히 도망칠 수도 싸울 수도 없을 때 작동하는 원시 파충류 시절의 **'등쪽 미주신경(Dorsal Vagus)'**이라는 3단계 방어 사다리가 존재합니다.\n\n장기간의 과로, 극심한 정서적 학대, 만성 질환, 번아웃 등으로 교감신경의 '투쟁-도피' 반응이 완전히 탈진해 버리면, 뇌간은 최후의 생존 전략으로 **'동결(Freeze / Shutdown)' 모드**를 발동합니다. 마치 포식자에게 물린 가젤이 고통을 느끼지 않기 위해 온몸의 전원을 끄고 죽은 척(가사 상태)을 하듯, 등쪽 미주신경이 과항진되면서 심박수를 바닥으로 떨어뜨리고 혈압과 체온을 낮추며 전신의 대사 활동을 극단적으로 셧다운시키는 것입니다.\n\n이 동결 상태에 빠진 환자는 게으르거나 의지가 약한 것이 결코 아닙니다. 뇌 신경계가 과부하로 타버리는 것을 막기 위해 강제로 누전 차단기를 내려버린 생리학적 생존 반응입니다. 이때 의지력으로 억지로 일어나려 하거나 고강도 운동, 과도한 카페인으로 뇌를 채찍질하면 차단기가 완전히 타버려 극심한 기립성 빈맥이나 공황 상태로 추락하게 됩니다. 치료의 핵심은 차단기가 내려간 원시 신경계를 부드럽고 안전하게 달래어 '안전과 이완'을 관장하는 배쪽 미주신경 사다리로 차근차근 끌어올리는 데 있습니다.\n\n한의학에서는 이를 원기가 뼛속까지 고갈된 '기혈양허(氣血兩虛)'이자 장부의 동력이 식어버린 '명문화쇠(命門火衰)'의 상태로 규정합니다. 뇌간의 기혈 순환을 북돋우는 온보원기(溫補元氣) 한약인 십전대보탕, 보중익기탕 가감방을 처방하여 신경세포의 미토콘드리아 에너지 생성을 회복시킵니다. 더불어 두개골 봉합선과 경추 경막의 굳은 긴장을 섬세하게 이완하는 두개천골요법(CST)을 통해 뇌에 \"지금은 호랑이가 없다. 안전하다\"는 신체 고유 감각을 주입합니다. 꽁꽁 얼어붙었던 신경계가 녹아내리면, 억지로 애쓰지 않아도 자연스러운 생기와 활력이 솟아오르게 됩니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2026.09.04",
            "image": "/images/columns/column_19_burnout_vagus.svg",
            "views": 1898
          },
          {
            "id": "col-auto-18-1788834200000",
            "colIndex": 18,
            "category": "칼럼",
            "title": "속이 더부룩할수록 더 불안하고 우울해지는 이유: 장내 세균총과 뇌 세로토닌 합성의 연결고리",
            "summary": "뇌-장관 신경축(Gut-Brain Axis) 이상으로 인한 소화 장애와 공황 불안의 상호 악순환 차단법",
            "content": "\"이상하게 소화가 안 되고 배에 가스가 가득 차는 날이면 어김없이 마음이 한없이 가라앉고 사소한 일에도 심장이 덜컥거리며 불안해집니다. 반대로 마음이 편안할 때는 밥도 잘 넘어가고 속도 편합니다. 정신과에서는 마음의 병이라 하고, 소화기내과에서는 과민대장증후군이라는데, 뇌와 뱃속 장기는 도대체 어떤 끈으로 연결되어 있는 걸까요?\" 진료실에서 만성 위장병과 공황·불안을 동시에 앓고 계신 수많은 복합 증상 환자분들이 공통적으로 제기하시는 의문입니다.\n\n현대 신경과학과 소화기내과학의 융합 연구가 밝혀낸 가장 놀라운 진실은 **'장(Gut)이 곧 제2의 뇌(Second Brain)'**라는 사실입니다. 우리 장벽에는 뇌 다음으로 많은 5억 개 이상의 신경세포가 밀집된 '장관신경계(ENS)'가 독자적으로 구축되어 있으며, 행복과 평온함을 느끼게 해주는 신경전달물질인 **세로토닌(Serotonin)의 90% 이상이 뇌가 아닌 바로 장 점막에서 합성**됩니다.\n\n만성 스트레스와 불규칙한 식습관, 항생제 오남용으로 뇌 자율신경 균형이 무너지면, 위장으로 가야 할 혈류가 차단되면서 장 점막의 상피세포 결합부위(Tight Junction)가 느슨하게 벌어지는 '장누수 증후군(Leaky Gut Syndrome)'이 촉발됩니다. 미처 소화되지 않은 고분자 음식물 찌꺼기와 장내 유해균이 뿜어내는 내독소(LPS, Lipopolysaccharide)가 벌어진 틈을 타고 혈류 속으로 여과 없이 쏟아져 들어옵니다. 이 독소들은 혈관을 타고 온몸을 돌며 전신 미세 염증을 유발하고, 혈액-뇌 장벽(BBB)을 통과하여 뇌의 미세아교세포(Microglia)를 자극해 '신경염증(Neuroinflammation)'을 일으킵니다.\n\n더욱 치명적인 것은 장내 환경이 황폐화되면 트립토판에서 세로토닌을 합성하는 경로가 차단되어 신경 독성 물질인 퀴놀린산(Quinolinic Acid)으로 변환된다는 점입니다. 그 결과 뇌는 심각한 세로토닌 기근에 빠져 불안증, 우울감, 강박증, 공황발작을 겪게 되고, 장은 장대로 복통, 설사, 변비, 가스 참의 연쇄 파탄에 직면합니다. 뇌와 장을 잇는 제10뇌신경인 미주신경(Vagus Nerve)을 통해 뇌의 스트레스가 장으로, 장의 염증 신호가 다시 뇌로 되먹임되는 지독한 양방향 악순환이 완성되는 것입니다.\n\n한의학에서는 수천 년 전부터 '비위(脾胃)는 기혈생화지원(氣血生化之源)'이라 하여 모든 신경과 혈액의 근본 에너지가 소화기에서 만들어진다고 강조해 왔습니다. 치료는 뇌만 보거나 장만 보아서는 결코 성공할 수 없습니다. 곽향정기산, 반하사심탕 등을 통해 장내 독소를 배출하고 느슨해진 장 점막의 면역 장벽을 복원함과 동시에, 뇌간의 긴장을 이완시키는 CST 추나요법으로 미주신경의 전도성을 살려내야 합니다. 장이 따뜻해지고 편안해질 때, 비로소 뇌의 불안과 공포가 씻은 듯 걷히고 잔잔한 일상의 행복이 찾아옵니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2026.08.31",
            "image": "/images/columns/column_18_gut_brain_axis.svg",
            "views": 1856
          },
          {
            "id": "col-auto-17-1788824200000",
            "colIndex": 17,
            "category": "칼럼",
            "title": "술 한잔 마시고 잠들었다가 새벽 3시에 심장 터질 듯 깨어나는 공포: 알코올 해독 후 교감신경 반동 폭풍",
            "summary": "알코올 대사 산물이 자율신경계에 미치는 반동성 교감신경 폭주(Rebound Storm)와 야간 공황 예방법",
            "content": "\"잠이 안 오고 가슴이 답답해서 맥주 한 캔을 마셨더니 기분도 나른해지고 금방 잠에 빠져들었습니다. 그런데 정확히 3시간 뒤인 새벽 2시 반, 심장이 가슴을 뚫고 나올 듯 쿵쾅거리고 숨이 턱 막히며 온몸이 땀으로 흠뻑 젖은 채 번쩍 눈이 떠졌습니다. 죽을 것 같은 공포감에 손발이 덜덜 떨려 응급실로 달려갔지만 심전도는 정상이라고 합니다. 왜 술만 마시면 새벽마다 이런 끔찍한 발작이 올까요?\" 불면과 불안을 잊기 위해 술을 수면제 대신 삼았다가 극심한 야간 발작을 경험하고 진료실을 찾으시는 분들의 절규입니다.\n\n많은 분들이 알코올을 단순한 '신경 안정제'나 '수면 유도제'로 착각하곤 합니다. 술을 마시면 에탄올이 뇌의 억제성 수용체인 GABA를 자극하고 흥분성 글루타메이트 수용체를 일시적으로 마취시키기 때문에, 마신 직후에는 긴장이 풀리고 나른해지며 잠이 쏟아지는 것처럼 느껴지는 것이 사실입니다. 그러나 이것은 자연스러운 생리적 수면이 아니라 알코올에 의한 '뇌 신경세포의 화학적 혼수(마취)' 상태에 불과합니다.\n\n진짜 위기는 음주 후 3~4시간이 경과하여 간에서 알코올이 1차 독성 물질인 '아세트알데하이드(Acetaldehyde)'로 분해되는 시점부터 폭발합니다. 뇌를 억누르고 있던 마취 효과가 사라지는 순간, 억압되어 있던 뇌 신경계가 극단적으로 튀어 오르는 **'야간 반동성 교감신경 폭풍(Rebound Sympathetic Storm)'**이 발생합니다. \n\n이때 부신에서는 평소 낮 시간의 서너 배에 달하는 아드레날린과 노르에피네프린을 혈관 속으로 한꺼번에 쏟아붓습니다. 뇌는 깊은 서파(Slow-wave) 수면으로 진입하지 못한 채 렘수면과 얕은 각성 단계에서 갇혀 버리고, 급격한 혈관 수축과 심박동 폭주로 인해 환자는 질식할 것 같은 공포감과 함께 강제로 잠에서 깨어나게 됩니다. 여기에 알코올의 이뇨 작용으로 인한 뇌 탈수와 미네랄 고갈이 겹치면서 뇌신경 세포는 극심한 허혈성 스트레스에 직면합니다. 만약 공황장애 환자가 지속적으로 음주를 반복한다면 신경계 회복의 기회는 영원히 박탈당하게 됩니다.\n\n한방 치료에서는 알코올 독소로 찌든 간의 화(火)를 식히고 신경계의 메마른 진액을 보충하는 갈근, 지구자, 황금, 백자인 등의 해독청열(解毒淸熱) 한약 처방을 가동합니다. 밤사이 뇌세포를 들쑤시는 교감신경의 반동 스파크를 차분히 잠재우고 뇌간의 미주신경 전도력을 회복시킴으로써, 약물이나 알코올의 힘을 빌리지 않고도 자연스러운 숙면과 평온한 맥박을 되찾아 드립니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2026.08.30",
            "image": "/images/columns/column_17_alcohol.svg",
            "views": 1814
          },
          {
            "id": "col-auto-16-1788814200000",
            "colIndex": 16,
            "category": "칼럼",
            "title": "배란기나 생리 전, 갱년기만 되면 감정 롤러코스터와 공황발작이 치솟는 이유: 에스트로겐 급변과 신경전달물질",
            "summary": "여성 호르몬 변화가 뇌 GABA 및 세로토닌 수용체에 미치는 영향과 소간해울(疏肝解鬱) 한방 치료",
            "content": "\"평소에는 온순하다가도 배란기나 생리 시작 3~4일 전만 되면 사소한 말 한마디에도 가슴에 불길이 치솟고, 이유 없이 눈물이 쏟아지며, 심장이 터질 것처럼 쿵쾅거려 잠을 잘 수가 없습니다. 폐경기가 다가오면서부터는 안면홍조와 식은땀, 공황발작 같은 호흡곤란까지 겹쳐 하루하루가 지옥 같습니다. 산부인과 호르몬 검사에서는 단순 갱년기나 PMS라는데 왜 신경계 전체가 무너지는 걸까요?\" 30~50대 여성 환자분들이 공황장애 클리닉을 찾으시며 가장 절박하게 털어놓으시는 호르몬 연관 신체화 증상입니다.\n\n여성의 뇌 구조를 들여다보면, 뇌 자율신경계의 총사령관인 '시상하부(Hypothalamus)'는 놀랍게도 여성호르몬 분비를 총괄하는 '뇌하수체-난소 축(HPO Axis)'과 물리적으로 한 몸처럼 붙어 있습니다. 즉, 심박수, 혈압, 체온, 호흡을 조절하는 뇌 자율신경 중추와 에스트로겐·프로게스테론을 조율하는 내분비 중추가 동일한 신경 전달 회로를 공유하고 있는 것입니다. \n\n여성호르몬인 에스트로겐은 단순히 생식 기능에만 관여하는 것이 아니라, 뇌 신경세포막을 보호하고 세로토닌과 엔도르핀 같은 억제성 신경전달물질의 합성을 돕는 천연 뇌 안정제 역할을 수행합니다. 배란기 직후나 생리 직전, 그리고 갱년기에 에스트로겐 수치가 롤러코스터를 타듯 급격히 곤두박질치면, 뇌의 세로토닌 수치가 동반 급감하면서 시상하부 신경망에 일대 혼란이 발생합니다. 이 충격으로 인해 체온 조절 중추의 기준선(Set-point)이 좁아져 미세한 온도 변화에도 교감신경이 폭발하며 땀이 비 오듯 쏟아지고, 심장 박동 조절 중추가 오작동을 일으켜 가슴 두근거림과 질식감이 폭풍처럼 휘몰아치는 것입니다.\n\n한의학에서는 이를 간(肝)의 기운이 울결되어 화(火)로 변하고, 뇌 자율신경의 음혈(陰血)이 메마른 '간울화화(肝鬱化火)' 및 '음허화동(陰虛火動)'의 병증으로 정밀하게 진단합니다. 호르몬 수치의 자연스러운 변동 자체를 막을 수는 없지만, 호르몬이 요동치더라도 시상하부 뇌 자율신경계가 그 충격을 흡수할 수 있는 '신경학적 완충 옹벽'을 구축하는 것이 근본 치료입니다.\n\n해아림한의원에서는 뭉친 간기(肝氣)를 부드럽게 풀어주는 가미소요산, 시호소간탕 계열의 한약과 함께, 소진된 신음(腎陰)을 보충하고 심장의 열을 식혀주는 자음강화 처방을 환자분의 생리 주기와 체질에 맞춰 단계별로 투여합니다. 이와 함께 하복부와 단전의 기혈 순환을 촉진하는 온열 뜸 치료와 뇌 자율신경 약침을 병행하여 호르몬 파동 속에서도 뇌신경이 흔들림 없이 깊은 평온을 유지할 수 있도록 치료합니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2026.08.28",
            "image": "/images/columns/column_16_hormone.svg",
            "views": 1772
          },
          {
            "id": "col-auto-15-1788804200000",
            "colIndex": 15,
            "category": "칼럼",
            "title": "비 오기 전날이면 심장이 쿵쾅거리고 온몸이 무거워지는 이유: 기상병과 편도체 예민도의 상관관계",
            "summary": "대기압 강하와 습도 변화가 내이 전정기관과 자율신경계에 미치는 영향 및 기상병 완화 한약",
            "content": "\"원장님, 일기예보를 보지 않아도 내일 비가 올지 눈이 올지 몸이 먼저 알아챕니다. 흐린 날이나 태풍이 오기 전날이면 어김없이 머리가 깨질 듯 지끈거리고, 심장이 이유 없이 쿵쾅거리며, 온몸이 물에 젖은 솜이불처럼 천근만근 가라앉아 침대에서 일어날 수가 없습니다. 내과나 정형외과에서는 신경통이나 피로 탓이라는데 날씨에 따라 왜 이렇게 몸이 요동칠까요?\" 흐린 날씨나 환절기 기압 변화에 극심한 신체화 증상을 호소하시는 환자분들의 전형적인 진료실 상담 내용입니다.\n\n이처럼 외부 기후와 기압의 변화에 따라 신체 항상성이 무너져 복합 증상이 발현되는 현상을 의학적으로 '기상병(Meteoropathy)'이라 정의합니다. 건강한 인체는 외부 기압이 떨어지더라도 뇌 자율신경계가 혈관 내 압력과 체액 순환 속도를 실시간으로 재조정하여 신체 내부의 기압을 외부와 평형 상태로 유지합니다. 그러나 만성 스트레스와 신경계 피로로 뇌 자율신경계 조절력이 무너진 환자분들은 귓속 깊은 곳인 내이(달팽이관과 전정기관)에 위치한 '기압 수용체(Baroreceptor)'가 극도로 과민해져 있습니다.\n\n저기압 전선이 다가오면 내이 안의 림프액 압력이 미세하게 팽창하면서 전정신경을 통해 뇌간으로 \"외부 압력이 급변하고 있으니 비상사태를 선포하라\"는 과도한 오경보 신호를 난사합니다. 이 오경보를 수신한 교감신경계는 신체를 보호하겠다는 착각으로 아드레날린을 대량 분비하여 심장 박동수를 치솟게 만들고 말초 혈관을 수축시켜 편두통과 가슴 두근거림, 혈압 변동을 촉발합니다. 동시에 부교감신경의 체액 배출 기능이 마비되면서 체내 수분 대사가 정체되는 '수독(水毒)' 현상이 발생합니다. 세포간질액에 불필요한 잉여 수분이 괴어 뇌압이 올라가고 관절과 근육이 퉁퉁 붓는 극심한 전신 둔중감이 쏟아져 나오는 것입니다.\n\n한의학에서는 이를 체내에 머무는 습담(濕痰)과 수음(水飮)이 기혈 순환 통로를 막아 머리와 오장육부의 승강 리듬을 교란하는 병증으로 정밀하게 다스립니다. 진통제나 신경안정제로는 매번 바뀌는 날씨의 물리적 압력 충격을 근본적으로 차단할 수 없습니다. 치료의 열쇠는 내이의 기압 수용체 과민을 진정시키고 체내 정체된 탁한 수분을 소변과 땀으로 부드럽게 배출시키는 데 있습니다.\n\n해아림한의원에서는 오령산, 영계출감탕을 바탕으로 체액 불균형을 해소하는 이수거습(利水祛濕) 탕약을 1:1 맞춤 처방하며, 경추 1·2번과 측두골 주변의 긴장을 완화하여 뇌척수액 순환을 개선하는 두개천골요법(CST)을 병행합니다. 뇌 자율신경계의 완충 능력이 강화되면, 외부 기압이 아무리 요동치고 폭우가 쏟아져도 신체 내부는 맑고 잔잔한 호수처럼 편안한 안정감을 유지하게 됩니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2026.08.27",
            "image": "/images/columns/column_15_weather.svg",
            "views": 1730
          },
          {
            "id": "col-auto-14-1788794200000",
            "colIndex": 14,
            "category": "칼럼",
            "title": "완치까지 얼마나 걸릴까? 진료실에서 설명해 드리는 공황장애 3단계 회복 로드맵과 재발 없는 길",
            "summary": "급성 증상 제어부터 뇌신경 조절력 복원, 약물 테이퍼링까지 단계별 목표와 실전 치료 가이드",
            "content": "\"원장님, 이 지긋지긋한 어지럼증, 가슴 두근거림, 불면증, 소화장애에서 정말 벗어날 수 있을까요? 치료를 받으면 언제쯤 좋아지고, 완치된 후에도 다시 재발하지 않고 건강한 일상을 유지할 수 있을까요?\" 진료실에서 환자분들과 초진 상담을 마칠 때마다 가장 많이 마주하는 간절하고도 절실한 질문입니다. 수개월에서 수년 동안 원인 모를 고통에 시달리며 병원 쇼핑을 거듭해 온 분들일수록, 자신의 몸이 영원히 회복되지 못할지도 모른다는 깊은 절망감에 짓눌려 계시기 때문입니다.\n\n임상 현장에서 수많은 공황장애 환자분들을 치료하며 얻은 확고한 결론부터 말씀드리자면, 공황장애은 불치의 병이 결코 아니며 체계적이고 과학적인 한방 신경계 복원 치료를 통해 반드시 건강한 본래의 삶으로 복귀할 수 있는 기능성 질환입니다. 다만 고장 난 기계 부품을 갈아 끼우듯 단 며칠 만에 끝나는 치료가 아니라, 뒤틀린 신경망의 균형을 단계별로 재건해 나가는 명확한 3단계 치료 로드맵을 충실히 밟아나가야 합니다.\n\n**제1단계: 급성 신체화 증상 진정 및 뇌신경 안정기 (치료 1~4주)**\n이 시기의 최우선 목표는 환자를 공포로 몰아넣는 급박한 신체화 증상의 불길을 끄는 것입니다. 발작적인 가슴 두근거림, 호흡곤란, 어지럼증, 급격한 상열감과 불면증을 다스리기 위해 뇌간의 과열된 흥분을 가라앉히는 청열안신(淸熱安神) 한약과 뇌 자율신경 약침을 집중 투여합니다. 이 단계가 지나면 환자분들은 \"죽을 것 같던 발작 빈도가 눈에 띄게 줄어들고 비로소 살 것 같다\"는 안도감을 느끼게 됩니다.\n\n**제2단계: 장부 불균형 교정 및 신경계 가소성 재건기 (치료 2~3개월)**\n급한 불이 꺼진 후에는 신경계가 오작동하게 된 인체 내부의 근본 원인을 뿌리 뽑아야 합니다. 뇌-장-신경 축을 회복시키는 담적 치료, 부신 피로를 회복시켜 HPA 축을 정상화하는 보신(補腎) 치료, 그리고 척추와 두개골의 긴장을 풀어 미주신경 통로를 확보하는 두개천골요법(CST)과 추나요법이 본격화됩니다. 뇌 자율신경계가 스스로 자극을 흡수하고 완충하는 신경 가소성(Neuroplasticity)이 살아나면서 만성 피로와 소화불량이 드라마틱하게 호전됩니다.\n\n**제3단계: 생체 항상성 완성 및 재발 방지 공고기 (치료 4~6개월)**\n마지막 단계는 치료를 종결한 후에도 일상의 스트레스나 과로에 쉽게 흔들리지 않는 단단한 '항상성 옹벽'을 구축하는 시기입니다. 기혈을 보양하고 면역력을 강화하는 맞춤 한약과 함께, 횡격막 복식호흡 훈련, 수면 리듬 설계, 뇌 자율신경 회복 식습관을 완전히 체질화합니다.\n\n신경계 치료는 직선으로만 나아가지 않고 컨디션에 따라 약간의 기복을 보이며 완만한 나선형 상승곡선을 그립니다. 조급한 마음을 내려놓고 의료진을 믿으며 한 걸음씩 로드맵을 따라갈 때, 어두운 터널을 지나 눈부시게 건강하고 활기찬 일상이 반드시 환자분 곁으로 되돌아올 것입니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2026.08.25",
            "image": "/images/columns/column_14_recovery_roadmap.svg",
            "views": 1688
          },
          {
            "id": "col-auto-13-1788784200000",
            "colIndex": 13,
            "category": "칼럼",
            "title": "커피 한 잔에 심장이 덜컥 내려앉고 손이 떨리는 카페인 불내성: 아데노신 차단과 편도체 과민",
            "summary": "카페인이 공황장애 환자의 교감신경 수용체를 과자극하는 메커니즘과 대체 식이요법",
            "content": "\"원장님, 불과 1~2년 전만 해도 매일 아침 출근길에 아이스 아메리카노를 마시고 오후에도 커피를 두세 잔씩 마시며 야근을 거뜬히 버텼습니다. 그런데 몇 달 전부터 커피를 반 잔만 마셔도 심장이 덜컥 내려앉듯 요동치고, 손발이 바들바들 떨리며, 식은땀과 함께 극심한 불안감이 엄습해 일을 할 수가 없습니다. 디카페인 커피나 녹차, 초콜릿만 먹어도 가슴이 울렁거리는데 제 간이 나빠진 걸까요?\" 직장인 환자분들이 뇌 자율신경 이상을 자각하기 시작할 때 가장 흔하게 고백하시는 임상적 전환점입니다.\n\n많은 분들이 카페인을 분해하지 못하는 이유를 단순히 간의 CYP1A2 해독 효소가 부족해진 탓으로 돌리곤 합니다. 하지만 과거에 커피를 잘 마시던 사람이 갑자기 극심한 불내증을 겪게 되었다면, 그것은 간 기능 저하 때문이 아니라 뇌와 심장의 뇌 자율신경계가 외부 자극을 흡수하고 완충해 주는 '신경학적 탄력성(뇌 자율신경 역치)'을 완전히 소진해 버렸다는 결정적인 조기 경고 신호입니다.\n\n카페인이 각성 효과를 내는 핵심 기전은 뇌세포의 피로 회복 스위치인 아데노신 수용체(Adenosine Receptor)를 가로막는 데 있습니다. 피로 물질인 아데노신이 결합하지 못하게 방해함으로써 뇌를 속여 교감신경계를 강제로 흥분시키고 부신에서 아드레날린 분비를 촉진하는 것입니다. 뇌 자율신경계가 튼튼할 때는 이러한 일시적인 교감신경 스파크를 부교감신경이 즉각 완충하여 심박수와 혈압을 안정적으로 통제합니다.\n\n그러나 만성 피로와 스트레스로 신경계의 완충 능력이 고갈된 상태에서는, 억제 브레이크가 완전히 고장 난 자동차와 같습니다. 카페인 반 잔의 가벼운 가속 페달 자극에도 심장 박동 조절 중추가 100km, 150km로 폭주하여 심실성 조기수축, 호흡곤란, 급격한 혈관 수축, 공황발작과 같은 극단적인 과각성 반응을 터뜨리는 것입니다. 즉, 커피 자체가 독이라기보다는 내 몸의 뇌 자율신경계가 이미 과부하 한계치에 도달해 더 이상의 미세한 자극조차 수용할 수 없는 '신경계 포화 상태'임을 의미합니다.\n\n한의학에서는 이를 심장과 담낭의 기운이 극도로 허약해져 사소한 자극에도 놀라고 요동치는 '심담허겁(心膽虛怯)'이자 신경계 진액이 고갈된 '음허화동(陰虛火動)'의 위기 상태로 진단합니다.\n\n치료는 단순히 커피를 끊는 회피 요법에 그쳐서는 안 됩니다. 커피를 끊어도 스트레스나 수면 부족 같은 다른 자극에 언제든 동일한 증상이 재발하기 때문입니다. 용골, 모려, 산조인, 복령과 같이 불안정하게 날뛰는 교감신경의 흥분을 차분하게 가라앉히는 진정안신(鎭靜安神) 한약과 함께, 부신의 원기를 회복시키는 숙지황, 산약, 오미자를 처방하여 신경계의 완충 스펀지(뇌 자율신경 역치)를 두텁게 복원해야 합니다. 신경계의 바닥난 에너지가 채워지면, 사소한 자극에 깜짝깜짝 놀라며 덜컥거리던 가슴이 비로소 넓은 바다처럼 잔잔하고 깊은 평온을 되찾게 됩니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2026.08.24",
            "image": "/images/columns/column_13_caffeine_intolerance.svg",
            "views": 1646
          },
          {
            "id": "col-auto-12-1788774200000",
            "colIndex": 12,
            "category": "칼럼",
            "title": "머리에 안개가 낀 듯 멍하고 기억력이 떨어지는 브레인포그: 뇌 림프 순환(Glymphatic System)의 정체",
            "summary": "만성 공황 불안과 수면 부족이 뇌척수액 배출 시스템을 저하시키는 원리와 총명 청뇌 한약 치료",
            "content": "\"분명 어제까지 잘 알고 있던 단어나 사람 이름이 입가에서만 맴돌고 떠오르지 않습니다. 책이나 서류를 읽어도 글자가 눈에만 들어올 뿐 머릿속에서 이해가 되지 않아 같은 문장을 너댓 번씩 다시 읽어야 합니다. 머릿속에 뿌연 안개가 자욱하게 낀 것처럼 멍하고 둔해져 마치 초기 치매가 온 것은 아닌가 덜컥 겁이 납니다. 신경과에서 뇌 MRI와 뇌파 검사를 받아봤지만 뇌경색도 뇌종양도 아니라는 말만 들었습니다.\" 지적인 업무에 종사하는 직장인, 전문직, 수험생 환자분들이 공황장애과 함께 호소하시는 가장 절박한 증상, 바로 브레인포그(Brain Fog)입니다.\n\n단순 건망증이나 노화와 달리, 브레인포그는 뇌 신경세포 사이에 대사 부산물과 독성 단백질이 제때 배출되지 못하고 쌓여 미세 신경염증(Neuroinflammation)을 유발하는 생체물리학적 질환입니다. 최근 뇌신경과학계의 가장 혁신적인 발견 중 하나는 뇌 안에 전신의 림프계와 유사한 독자적 청소 시스템인 '글림파틱 시스템(Glymphatic System)'이 존재한다는 사실입니다.\n\n낮 동안 뇌세포들이 에너지를 소모하며 사고하고 활동하는 과정에서 베타 아밀로이드, 타우 단백질, 각종 젖산과 활성산소 같은 신경 독성 노폐물이 필연적으로 발생합니다. 인체는 밤에 깊은 비렘(Non-REM) 서파 수면 단계에 진입했을 때, 뇌의 성상교세포(Astrocyte)가 뇌세포의 부피를 60%가량 수축시키며 공간을 열어줍니다. 이때 뇌척수액이 뇌 조직 사이사이를 파도처럼 씻어내며 낮 동안 쌓인 뇌 쓰레기들을 정맥동과 경부 림프절로 실어 나르는 대청소를 감행합니다.\n\n문제는 공황장애 환자분들의 경우, 교감신경의 야간 항진과 HPA 축의 과각성으로 인해 뇌가 서파 수면 단계로 깊이 들어가지 못한다는 점입니다. 겉으로는 잠을 자는 것처럼 보여도 뇌파는 얕은 수면 상태에 머물러 있어 글림파틱 시스템의 청소 스위치가 켜지지 않습니다. 밤새 쓰레기를 치우지 못한 도시에 아침이 밝아오듯, 전날의 신경 독소와 염증 물질이 그대로 남아 있는 뇌로 다음 날을 시작하니 머리가 납덩이처럼 무겁고 사고 회로가 정체되는 브레인포그가 발생할 수밖에 없는 것입니다.\n\n한의학에서는 이를 탁한 담음과 어혈이 뇌의 맑은 구멍을 틀어막아 생기는 '담몽청규(痰濛淸竅)'이자 기혈 부족으로 뇌수가 마르는 '뇌수공허(腦髓空虛)'의 상태로 규정합니다. \n\n치료는 강장제나 카페인으로 지친 뇌를 억지로 각성시키는 채찍질이 아니라, 뇌혈관 장벽(BBB)의 미세 혈류를 개선하고 신경 독소를 배출하는 '청뇌개규(淸腦開竅)' 한약 처방을 위주로 합니다. 석창포, 원지, 천궁, 조구등과 같이 뇌세포의 산소 이용률을 극대화하고 신경 영양 인자(BDNF) 분비를 촉진하는 한약을 투여하며, 목과 쇄골 부위의 경부 림프 배액관을 열어주는 림프 추나요법을 병행합니다. 야간 뇌 청소 시스템이 온전히 복원되면, 뿌옇던 안개가 걷히듯 머릿속이 맑고 투명해지며 날카로운 집중력과 기억력이 선명하게 되살아납니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2026.08.22",
            "image": "/images/columns/column_12_brainfog_glymphatic.svg",
            "views": 1604
          },
          {
            "id": "col-auto-11-1788764200000",
            "colIndex": 11,
            "category": "칼럼",
            "title": "안과에서는 건조증이라는데 눈이 시리고 빛 번짐이 심한 공황 시각 증상: 동공 산대와 모양체근 긴장",
            "summary": "교감신경 과항진으로 인한 동공 확대와 시야 흐림, 눈부심의 신경학적 발생 기전",
            "content": "\"조금만 컴퓨터나 스마트폰을 보면 눈알이 뒤로 쑥 빨려 들어가는 것처럼 뻐근하고 아픕니다. 형광등이나 자동차 헤드라이트 불빛을 보면 눈이 너무 시려 눈을 제대로 뜰 수가 없고, 안개 낀 것처럼 초점이 맞지 않아 흐릿합니다. 안과에 가서 정밀 검사를 받아봐도 각막염도 아니고 녹내장·백내장도 없으며 단순 안구건조증이라는 진단뿐입니다. 인공눈물과 각막 치료제를 하루에 몇 번씩 넣어도 눈의 피로와 통증은 전혀 나아지지 않습니다.\" 안과적 검사에서 명확한 원인을 찾지 못해 답답함을 토로하시는 환자분들의 생생한 진료실 상담 내용입니다.\n\n눈은 뇌의 연장선이라 불릴 만큼 방대한 뇌신경과 미세 혈관망이 집중된 정밀 감각 기관입니다. 우리가 사물을 또렷하게 바라보고 빛의 양에 적응하는 모든 과정은 동공의 크기를 조절하는 동공산대근(교감신경 지배)과 동공괄약근(부교감신경 지배), 그리고 수정체의 두께를 조절하여 원근 초점을 맞추는 모양체근(부교감신경 및 모양체 신경절 지배)의 완벽한 밸런스 위에서 이루어집니다.\n\n그러나 만성 스트레스, 수면 결핍, 과도한 시각적 자극으로 뇌 자율신경계가 과부하에 걸리면 이 정교한 신경학적 메커니즘이 무너집니다. 교감신경이 지속적으로 항진되면 어두운 곳도 아닌데 동공이 비정상적으로 확장되어 과도한 양의 빛이 망막으로 쏟아져 들어옵니다. 그 결과 대낮의 자연광이나 실내 조명에도 눈이 부시고 시린 '광선 공포증(Photophobia)'과 심한 빛 번짐이 발생합니다. 반대로 모양체 신경절(Ciliary Ganglion)이 탈진하면 수정체의 두께를 조절하는 부교감신경의 긴장도가 떨어져 책이나 모니터를 볼 때 초점을 맞추기 위해 눈 주변 근육이 비명을 지르며 극심한 안구통과 두통을 유발하게 됩니다.\n\n더불어 뇌 자율신경 불균형은 눈물을 생성하고 분비하는 누선(Lacrimal Gland)의 혈류를 차단하여 눈물의 질(지질층, 점액층, 수성층)을 완전히 파괴합니다. 겉에 인공눈물을 아무리 덧발라도 속에서 신경 영양 공급이 끊겨 있으니 눈이 모래알이 굴러가는 것처럼 뻑뻑하고 아플 수밖에 없는 것입니다.\n\n한의학에서는 예로부터 눈을 오장육부 중 간(肝)의 창문으로 보아 '간개규우목(肝開竅于目)'이라 하였습니다. 지나친 스트레스와 칠정(七情)의 울결은 간기(肝氣)를 상하게 하여 풍열(風熱)을 머리와 눈으로 뿜어 올리고, 밤샘과 과로는 간신(肝腎)의 음혈을 말려 안구 조직을 황폐화시킵니다. \n\n해아림한의원에서는 국소적인 안약 처방을 넘어, 간열을 내리고 눈 주변 미세 혈류를 뚫어주는 결명자, 구기자, 밀몽화, 사상자 등의 한약 처방을 통해 모양체 신경절에 산소와 영양을 집중 공급합니다. 아울러 눈 주변의 정명혈, 찬죽혈, 태양혈 뇌 자율신경 침구치료와 경추 교정을 병행하여 뇌에서 눈으로 이어지는 시신경 통로의 압박을 해소합니다. 뇌 자율신경의 밸런스가 잡히면 칼날 같던 빛 번짐이 부드러워지고, 맑고 촉촉하며 편안한 본래의 시야를 되찾게 됩니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2026.08.21",
            "image": "/images/columns/column_11_ocular_fatigue.svg",
            "views": 1562
          },
          {
            "id": "col-auto-10-1788754200000",
            "colIndex": 10,
            "category": "칼럼",
            "title": "숨이 깊이 안 쉬어지고 하품만 나오는 만성 과호흡: 횡격막 경직과 이산화탄소 분압 이상, 이렇게 치료해야 합니다",
            "summary": "호흡성 알칼리증으로 인한 손발 마비와 어지럼증을 가라앉히는 실전 호흡 재훈련과 흉곽 이완 요법",
            "content": "\"숨을 아무리 크게 들이쉬어도 폐 밑바닥까지 공기가 차지 않고 목구멍 근처에서 턱턱 걸리는 느낌입니다. 깊은 숨을 쉬려고 자꾸 억지로 한숨을 쉬거나 하품을 길게 해보지만 여전히 답답합니다. 호흡기내과에서 흉부 X-ray, 폐기능 검사, CT까지 다 찍어봤지만 폐활량도 100% 정상이고 천식도 아니라고 합니다. 그런데 저는 숨이 가빠서 죽을 것만 같습니다.\" 만성적인 호흡 곤란과 가슴 답답함으로 진료실을 찾는 환자분들이 가장 괴롭게 호소하시는 공통 증상입니다.\n\n폐 자체에 기질적 염증이나 섬유화가 전혀 없음에도 이러한 '공기 굶주림(Air Hunger)' 현상이 발생하는 핵심 원인은 호흡의 주동근인 횡격막(Diaphragm)의 신경학적 경직과 뇌간 호흡중추의 '이산화탄소 내성 저하'에 있습니다. 정상적인 편안한 호흡 상태에서는 복부와 흉강을 가르는 횡격막이 아래로 부드럽게 8~10cm씩 내려가며 흉곽 내 음압을 형성해 폐 하엽까지 공기를 가득 채웁니다.\n\n그러나 만성적인 불안과 긴장, 뇌 자율신경 실조에 노출된 환자분들은 교감신경의 흥분으로 인해 횡격막 신경이 긴장하며 횡격막이 바위처럼 딱딱하게 굳어버립니다. 횡격막이 아래로 움직이지 못하니, 환자는 목 주변의 흉쇄유돌근, 사각근, 승모근 같은 보조 호흡근만을 쥐어짜며 얕고 빠른 흉식호흡을 반복하게 됩니다. 이로 인해 체내 이산화탄소가 과도하게 체외로 배출되면서 혈액이 알칼리화되는 호흡성 알칼리증(Respiratory Alkalosis)이 초래됩니다. \n\n혈중 이산화탄소 농도가 너무 떨어지면 놀랍게도 뇌혈관이 수축하여 뇌로 가는 산소 공급이 오히려 차단당하는 '보어 효과(Bohr Effect)'가 발생합니다. 환자는 숨을 헐떡이며 많이 들이마실수록 뇌와 손발 말초로는 산소가 도달하지 않아 손발 저림, 입 주변 마비감, 어지럼증, 질식감이 더욱 극심해지는 무서운 악순환에 빠져들게 됩니다.\n\n한의학에서는 이를 기운이 가슴에 맺혀 흩어지지 못하는 '흉격비만(胸膈痞滿)'이자 폐의 기운이 신장으로 하강하지 못하는 '폐실숙강(肺失肅降)'의 병증으로 치료합니다. 치료의 핵심은 환자에게 \"숨을 더 깊이 들이쉬라\"고 강요하는 것이 아니라, 반대로 과도한 흉식호흡을 멈추고 굳어버린 호흡근을 부드럽게 이완시키는 데 있습니다.\n\n해아림한의원에서는 흉골과 늑간근, 횡격막 부착부를 풀어주는 흉곽 이완 수기치료와 함께 전중혈, 중완혈에 뇌 자율신경 약침을 시술합니다. 아울러 후박, 지실, 향부자, 침향과 같이 가슴에 맺힌 기운을 아래로 쑥 내려주는 강기화담(降氣化痰) 한약을 처방합니다. 굳어 있던 횡격막이 부드럽게 오르내리고 혈중 이산화탄소 완충 능력이 정상화되면, 억지로 한숨을 쉬지 않아도 아랫배 깊은 곳까지 맑고 시원한 공기가 저절로 채워지는 온전한 복식 호흡의 자유를 되찾게 됩니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2026.08.19",
            "image": "/images/columns/column_10_hyperventilation.svg",
            "views": 1520
          },
          {
            "id": "col-auto-9-1788744200000",
            "colIndex": 9,
            "category": "칼럼",
            "title": "식은땀이 비 오듯 쏟아지거나 반대로 땀이 안 나는 이상 감각: 공황 발작 시 한선(汗腺) 자율신경 실조",
            "summary": "교감신경 콜린성 섬유 이상으로 인한 국소 다한증과 오한, 체온 조절 중추의 불균형 해소법",
            "content": "\"중요한 회의나 낯선 자리에만 서면 긴장감과 함께 손바닥과 등줄기, 이마에서 땀이 주체할 수 없이 쏟아져 옷이 흠뻑 젖습니다. 반대로 제 친구는 더운 여름 사우나에 들어가도 땀이 한 방울도 나지 않아 얼굴이 터질 듯 달아오르고 열사병처럼 쓰러지려 합니다.\" 땀 분비 이상으로 일상생활과 사회생활에 막대한 지장을 겪고 계신 환자분들의 대표적인 증상입니다. 피부과에서는 다한증 보톡스 주사나 흉부 교감신경 절제술(ETS)을 권유하기도 하지만, 수술 후 엉덩이나 허벅지, 종아리로 땀이 폭포수처럼 이동하는 '보상성 다한증'의 부작용이 두려워 망설이시는 분들이 대단히 많습니다.\n\n인체의 땀샘(한선, Sweat Gland)은 우리 몸에서 유일하게 교감신경의 지배만을 독점적으로 받는 매우 특수한 뇌 자율신경 종말 기관입니다. 흥미롭게도 교감신경 절후 섬유에서 노르에피네프린이 아닌 아세틸콜린을 신경전달물질로 분비하여 땀샘을 자극한다는 독특한 생리적 기전을 가지고 있습니다. 즉, 땀의 분비는 전신 뇌 자율신경계의 흥분도와 민감도를 가장 정직하고 적나라하게 대변하는 거울과도 같습니다.\n\n심리적 불안, 만성 피로, 스트레스로 인해 뇌의 교감신경 중추가 과민해지면 미세한 온도 변화나 일상적인 감정 자극에도 땀샘 스위치가 통제력을 잃고 밸브가 활짝 열려버립니다. 이를 한의학에서는 낮에 가만히 있어도 땀이 줄줄 흐르는 자한(自汗), 그리고 밤에 잠잘 때 도둑처럼 땀을 흘리고 깨어나면 멈추는 도한(盜汗)으로 명확히 구분하여 다스려 왔습니다. 자한은 인체의 방어벽 역할을 하는 위기(衛氣)가 허약해져 땀구멍(주리, 腠理)을 조여주지 못해 체액이 누출되는 기허(氣虛)의 징후이며, 도한은 신경계의 진액과 음혈이 바닥나 밤사이 헛불이 치솟는 음허내열(陰虛內熱)의 대표적 징표입니다.\n\n반대로 열이 오르는데도 땀이 나지 않는 무한증(Anhidrosis)은 교감신경 말초 섬유의 전도 장애나 체내 수분 대사의 극심한 고갈로 인해 열 방출 통로가 아예 폐쇄된 상태로, 체온 조절 실패로 인한 극심한 피로감과 두통을 수반합니다.\n\n한방 치료는 땀구멍을 억지로 틀어막거나 신경을 물리적으로 잘라내는 파괴적 시술을 배제합니다. 황기, 백출, 방풍으로 구성된 옥병풍산 계열의 처방으로 피부 표면의 위기를 굳건히 세워 느슨해진 땀샘의 자동 조절력을 복원하며, 도한증에는 당귀육황탕, 생맥산 등을 응용하여 말라버린 진액을 채우고 뇌 자율신경계의 허열을 내려줍니다. 교감신경의 과도한 전기적 스파크가 진정되고 전신 기혈의 음양 균형이 회복되면, 땀샘은 비로소 상황에 맞게 닫히고 열리는 인체의 본래 방어 기전으로 정상 복귀하게 됩니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2026.08.18",
            "image": "/images/columns/column_9_sweat_dysregulation.svg",
            "views": 1478
          },
          {
            "id": "col-auto-8-1788734200000",
            "colIndex": 8,
            "category": "칼럼",
            "title": "귀 먹먹함과 찌르는 이명, 이관개방증이 아닌 삼차신경-미주신경 과각성과 공황 불안의 부조화",
            "summary": "구개범장근 경련과 중이 혈류 저하로 인한 청각 신경 증상의 한의학적 변증 치료",
            "content": "\"비행기가 이륙할 때처럼 귀가 꽉 막히고 먹먹해서 침을 삼키고 코를 쥐고 바람을 불어봐도 전혀 뚫리지 않습니다. 조용한 방에 누우면 귀에서 삐- 하는 고주파 금속음이나 매미 소리, 심장 박동 소리가 귓가를 때려 잠을 이룰 수가 없습니다. 이비인후과에서 청력검사와 고막검사를 다 해봤지만 청력도 정상이고 이관기능도 큰 이상이 없다는데, 저는 왜 하루 종일 귀가 답답하고 괴로울까요?\" 귀의 먹먹함(이충만감)과 원인 모를 이명으로 극심한 불안과 우울감을 호소하시는 환자분들의 안타까운 목소리입니다.\n\n일반적으로 귀에 증상이 나타나면 달팽이관이나 청신경 자체의 손상을 의심하기 쉽습니다. 그러나 청력 손실이 동반되지 않는 신경성 이명과 귀 먹먹함의 상당수는 청각 기관의 기질적 결함이 아니라, 귀 주변을 지배하는 뇌신경계와 턱관절, 그리고 뇌 자율신경계의 과민 반응이 얽혀 있는 '체열성·신경성 이명'에 해당합니다.\n\n귀의 중이와 비인강을 연결하는 이관(Eustachian Tube)을 열고 닫는 구개범장근과 고막긴장근은 놀랍게도 턱관절과 저작근을 지배하는 제5뇌신경인 삼차신경(Trigeminal Nerve)의 신경 가지에 의해 직접 조절됩니다. 환자가 스트레스를 받거나 뇌 자율신경이 실조되면 수면 중 무의식적인 이갈이, 이악물기, 턱관절 긴장이 발생합니다. 이로 인해 저작근과 익상근이 과도하게 수축하면 삼차신경 운동핵이 흥분하여 이관 조절 근육을 뻣뻣하게 경련시키며, 이관이 닫히거나 열린 채 고착화되어 숨소리가 울리거나 귀가 먹먹해지는 이충만감을 유발하는 것입니다.\n\n더불어 뇌간 부위에서 삼차신경 감각핵은 청신경핵(Dorsal Cochlear Nucleus) 및 미주신경 감각핵과 매우 긴밀한 신경망 교차로를 형성하고 있습니다. 교감신경 항진으로 뇌간 주변의 혈류량이 떨어지고 뇌의 감각 역치가 무너지면, 정상적인 상태에서는 뇌가 스스로 걸러내어 들리지 않아야 할 뇌신경 세포들의 미세한 전기적 신호 잡음이 10배, 20배 증폭되어 귓속에서 '삐-' 하는 소음으로 여과 없이 인식되는 것입니다.\n\n한의학에서는 이를 기운이 귀로 몰려 귓길을 막아버리는 '기궐이명(氣厥耳鳴)'이자 간화(肝火)와 담화(痰火)가 청규(淸竅)를 가린 병증으로 규명합니다. 치료는 귀만 들여다보아서는 결코 답이 나오지 않습니다. 턱관절의 좌우 균형을 바로잡는 악관절 추나요법과 교근, 측두근의 발화점을 해소하는 침구치료를 통해 삼차신경의 압박을 풀어주는 것이 선행되어야 합니다. 여기에 청신경 주변의 허혈성 염증을 가라앉히고 미주신경의 전도성을 안정시키는 시호청간탕, 자음강화탕 가감방을 처방하면, 귓속을 꽉 채우고 있던 안개 같은 먹먹함이 시원하게 걷히고 날카롭던 쇳소리 이명이 점차 잦아들게 됩니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2026.08.16",
            "image": "/images/columns/column_8_tinnitus_vagus.svg",
            "views": 1436
          },
          {
            "id": "col-auto-7-1788724200000",
            "colIndex": 7,
            "category": "칼럼",
            "title": "돌처럼 굳은 목·어깨와 흉통, 단순 근육통이 아닌 후두하근 긴장과 뇌척수액 순환 장애",
            "summary": "상부 경추 아탈구와 뇌막 긴장이 유발하는 두통, 어지럼, 가슴 답답함을 푸는 두개천골요법",
            "content": "\"목과 승모근이 쇳덩이를 얹어놓은 것처럼 항상 굳어 있고, 피곤하면 뒤통수와 관자놀이가 찌릿찌릿 쑤시면서 눈알까지 빠질 듯 아픕니다. 정형외과에서 경추 X-ray와 MRI를 찍어보면 약간의 일자목 말고는 디스크도 심하지 않다고 하는데, 물리치료와 도수치료, 보톡스 주사까지 맞아도 그때뿐이고 하루만 지나면 다시 돌처럼 굳어버립니다.\" 공황장애 환자분들의 열에 아홉이 공통적으로 호소하시는 지독한 만성 근막 통증과 긴장성 두통의 전형적인 임상 사례입니다.\n\n왜 이분들의 목과 어깨는 아무리 주무르고 두드려도 풀리지 않는 걸까요? 그 해답은 이 부위가 단순한 골격근의 문제가 아니라, 뇌와 전신을 잇는 뇌 자율신경의 핵심 관문이자 뇌척수액(CSF, Cerebrospinal Fluid)이 순환하는 통로이기 때문입니다. 머리 뒤쪽 두개골과 경추 1번(환추), 경추 2번(축추)이 만나는 후두하삼각(Suboccipital Triangle) 부위에는 후두하근이라는 미세 근육군이 빽빽하게 밀집해 있습니다. 이 미세 근육들은 뇌의 경막(Dura Mater)과 결합조직 브리지(Myodural Bridge)로 직접 연결되어 있어, 스트레스로 뇌가 긴장하면 즉각 반사적으로 수축하여 굳어버리는 특성을 지닙니다.\n\n더욱 치명적인 것은 후두하근 바로 앞쪽 경추 횡돌기 주변으로 상경신경절(Superior Cervical Ganglion)이라는 거대한 교감신경의 본부가 위치해 있다는 점입니다. 일자목과 거북목으로 경추 정렬이 무너지고 후두하근이 만성적으로 경직되면, 이 상경신경절이 물리적으로 압박을 받아 과흥분 상태에 빠집니다. 그 결과 머리로 올라가는 추골동맥과 내경동맥이 수축하여 뇌 혈류량이 30% 이상 감소하고, 두개골 봉합선의 미세한 호흡성 팽창 운동이 억제되면서 뇌척수액의 원활한 순환이 가로막히게 됩니다.\n\n뇌척수액은 뇌와 척수를 감싸며 하루에 500ml씩 생성되어 뇌의 대사 노폐물을 씻어내고 신경계를 보호하는 생명수 역할을 합니다. 후두부 통로가 막혀 뇌척수액 순환에 정체가 빚어지면 두개강 내압이 미세하게 상승하면서 찌릿한 후두신경통, 머리 무거움, 눈의 피로, 어지럼증, 이명이 동시다발적으로 촉발됩니다.\n\n한방 치료에서는 이를 경락의 기혈이 맺히고 막힌 '두경부 어혈(瘀血) 및 경락 폐색'으로 파악합니다. 치료의 핵심은 겉 근육만 만지는 마사지가 아니라, 두개골과 천골(골반) 사이의 고유한 리듬을 회복시키는 두개천골요법(CST)과 경추 1·2번의 미세 변위를 정밀하게 교정하는 상부 경추 추나요법에 있습니다. 5g 이하의 섬세하고 부드러운 손길로 후두하막과 경막의 꼬임을 풀어주면, 억눌려 있던 뇌척수액 통로가 활짝 열리면서 뇌압이 즉각 떨어지고 목어깨를 짓누르던 무거운 바위가 내려앉는 극적인 이완을 경험하게 됩니다. 막힌 신경 통로가 열릴 때, 만성 통증과 뇌 자율신경 실조는 동시에 치유의 길로 들어섭니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2026.08.15",
            "image": "/images/columns/column_7_cervical_cst.svg",
            "views": 1394
          },
          {
            "id": "col-auto-6-1788714200000",
            "colIndex": 6,
            "category": "칼럼",
            "title": "수면다원검사는 정상이라는데 매일 새벽 3시면 깨어나는 이유: 부신 피로와 야간 코르티솔 서지",
            "summary": "심야에 교감신경이 급반동하여 발생하는 야간 공황발작의 치료법과 천왕보심단 가감방",
            "content": "\"밤 11시에 잠자리에 들면 처음 1~2시간은 피곤해서 쓰러지듯 잠듭니다. 그런데 이상하게도 매일 새벽 2시나 3시만 되면 알람을 맞춘 것처럼 눈이 번쩍 떠집니다. 깨어나는 순간 가슴이 쿵쾅쿵쾅 뛰고, 온몸에 미열이 돌면서 식은땀이 나고, 다시 자려고 아무리 눈을 감아도 머릿속에서 온갖 잡념이 꼬리를 물어 결국 뜬눈으로 아침을 맞이합니다. 대학병원 수면클리닉에서 뇌파 검사와 수면다원검사를 받아봤지만 수면무호흡도 없고 큰 이상이 없다는 말만 들었습니다.\" 조기 각성형 불면증으로 진료실을 찾으시는 환자분들이 가장 고통스럽게 털어놓으시는 전형적인 수면 패턴입니다.\n\n이러한 수면 장애는 단순한 멜라토닌 결핍이나 심리적 스트레스 차원을 넘어, 뇌의 시상하부-뇌하수체-부신 축(HPA Axis)의 호르몬 분비 리듬이 정반대로 뒤집힌 '야간 코르티솔 역전(Cortisol Inversion)' 현상에서 비롯됩니다. 정상적인 인체 생리에서 스트레스 호르몬인 코르티솔은 아침 기상 직후(오전 7~8시)에 가장 높게 분비되어 하루를 시작할 활력과 집중력을 불어넣고, 밤이 깊어질수록 서서히 감소하여 자정 무렵에는 바닥을 쳐야 합니다. 코르티솔이 낮아져야만 수면 유도 호르몬인 멜라토닌이 원활히 분비되어 깊은 서파(델타파) 수면 단계로 진입할 수 있기 때문입니다.\n\n그러나 오랜 기간 만성 스트레스, 야근, 번아웃, 과도한 커피 섭취에 노출된 환자분들은 부신(Adrenal Gland)이 지칠 대로 지쳐 낮에는 코르티솔을 쥐어짜 내지 못해 하루 종일 무기력하고 멍하다가, 밤이 되어 뇌가 쉬어야 할 새벽 시간에 도리어 코르티솔을 비정상적으로 뿜어내는 호르몬 리듬의 역전이 발생합니다. 새벽 2~4시는 한의학적으로 간경(肝經)과 담경(膽經)의 기운이 가장 왕성하게 순환하며 혈액을 해독하고 신경을 재충전하는 시간대입니다. 이 시간에 교감신경 호르몬이 폭발하면 간의 혈류가 마르고 심포(心包)에 울화(鬱火)가 치밀면서 뇌가 강제로 깨어나는 '신경학적 각성 발작'이 유발되는 것입니다.\n\n결국 수면유도제나 수면제를 복용하더라도 뇌를 강제로 마취시키는 것에 불과하므로, 약기운이 떨어지는 새벽 시간에 어김없이 각성이 발생하며 아침에 일어났을 때 머리가 무겁고 온몸이 물에 젖은 솜처럼 가라앉는 피로감에서 벗어나지 못합니다. \n\n한방신경정신과 치료의 핵심은 뒤틀린 HPA 축의 호르몬 24시간 일주기 리듬을 본래의 궤도로 되돌리는 것입니다. 산조인탕, 온담탕, 시호가용골모려탕 등을 바탕으로 야간에 치솟는 뇌간의 허열(虛熱)을 가라앉히고, 황기, 백출, 구기자, 숙지황을 통해 소진된 신음(腎陰)과 부신 피로를 보양하는 1:1 맞춤 한약 치료를 시행합니다. 밤사이 교감신경의 헛바퀴질이 멈추고 부신의 내분비 리듬이 안정되면, 새벽에 깨지 않고 아침 햇살을 맞이할 때까지 끊김 없는 깊은 단잠을 누리게 됩니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2026.08.13",
            "image": "/images/columns/column_6_adrenal_fatigue.svg",
            "views": 1352
          },
          {
            "id": "col-auto-5-1788704200000",
            "colIndex": 5,
            "category": "칼럼",
            "title": "신경안정제만 먹어도 가라앉지 않는 신체화 증상, '증상'이 아닌 '뇌 신경망의 조절력'을 다스려야 한다",
            "summary": "약물 의존에서 벗어나 뇌 편도체와 자율신경계 본래의 자생력을 키우는 한방 신경정신과 치료의 핵심",
            "content": "\"처음 공황발작과 가슴 답답함이 찾아왔을 때 정신건강의학과에서 알프라졸람(자낙스)과 인데놀을 처방받아 먹고는 마법처럼 증상이 가라앉아 안도했습니다. 하지만 6개월, 1년이 지나면서 약효가 떨어지는 시간이 점점 빨라지고, 약을 먹지 않으면 이전보다 두 배는 더 심한 불안과 진땀, 근육 떨림이 몰려옵니다. 평생 이 약에 의존해 살아야 하는 걸까요?\" 신경안정제 장기 복용으로 인한 내성과 의존성, 그리고 여전히 가시지 않는 신체화 증상 때문에 깊은 고뇌에 빠진 분들이 진료실에서 자주 호소하시는 말씀입니다.\n\n벤조디아제핀계 신경안정제나 베타차단제는 급성기 발작이나 참기 힘든 패닉 상태에서 뇌의 억제성 신경전달물질인 GABA 수용체에 강제로 결합하여 뇌 신경망의 흥분을 일시적으로 잠재우는 응급 진화 약물입니다. 불이 났을 때 소화기를 뿌려 급한 불길을 잡는 데는 분명 탁월한 역할을 합니다. 하지만 소화액을 뿌렸다고 해서 불이 난 원인인 전선 누전이나 가스 누출이 해결된 것은 아닙니다. 약물이 신경 스위치를 강제로 눌러놓는 동안, 정작 신체 내부의 뇌 자율신경 조절 중추와 장부의 기능적 불균형은 방치되어 오히려 스스로 신경전달물질을 합성하고 조절하는 고유의 회복력(신경 가소성, Neuroplasticity)이 점차 퇴화하게 됩니다.\n\n결국 약의 용량은 늘어나는데 환자가 체감하는 소화불량, 만성 피로, 목어깨 결림, 감각 이상, 이명과 같은 신체화 증상은 사라지지 않고 오히려 깊어지는 역설적 상황에 봉착합니다. 이것이 바로 우리가 겉으로 드러난 '신경 증상' 하나하나를 억누르는 대증치료에만 머물지 않고, 신경이 뿌리내리고 있는 인체 내부의 '생체 밭(Environment)'을 근본적으로 정화하고 기름지게 가꾸어야 하는 이유입니다.\n\n한의학에서는 인체의 뇌 자율신경계를 오장육부의 기혈 순환과 음양의 항상성 체계 안에서 유기적으로 파악합니다. 지속적인 약물 복용으로 지친 간(肝)의 해독 기능을 회복시키고, 신경계의 음혈(陰血)을 보충하는 산조인, 백자인, 당귀, 천궁과 같은 약재를 단계별로 처방하여 신경세포의 자연스러운 흥분 억제 회복력을 길러줍니다.\n\n치료의 핵심은 양약을 하루아침에 무리하게 끊는 것이 결코 아닙니다. 갑작스러운 단약은 극심한 반동성 불안과 금단 증상을 유발하므로, 한방 맞춤 치료를 통해 신체 스스로 뇌 자율신경을 다스리는 힘이 50%, 70%, 100% 올라옴에 따라 양약의 복용량을 주치의와의 상의하에 1/4정, 반 알씩 점진적으로 안전하게 테이퍼링(감량)해 나가는 통합적 치료 로드맵을 가동합니다. 내 몸의 뇌 자율신경계가 스스로 박동을 조절하고 깊은 호흡을 이끌어낼 수 있는 체질적 토양이 완성될 때, 비로소 약물에 기대지 않고 온전한 나의 힘으로 편안한 일상을 영위할 수 있게 됩니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2026.08.12",
            "image": "/images/columns/column_5_neuroplasticity.svg",
            "views": 1310
          },
          {
            "id": "col-auto-4-1788694200000",
            "colIndex": 4,
            "category": "칼럼",
            "title": "이비인후과·신경과를 전전해도 원인 모를 어지럼증: 심인성 현훈과 과호흡으로 인한 뇌허혈",
            "summary": "회전성 어지럼이 아닌 붕 뜨고 흔들리는 심인성 어지럼증의 감별 진단과 전정신경계 안정 한약",
            "content": "\"누워 있거나 가만히 앉아 있을 때는 비교적 견딜 만한데, 자리에서 일어서거나 지하철에 서 있기만 하면 머리가 텅 빈 것처럼 아찔하고 눈앞이 캄캄해집니다. 이비인후과에서 귀 검사를 다 해봐도 이석증도 아니고 전정신경염도 아니라고 하고, 대학병원 신경과 뇌 MRI와 MRA도 지극히 정상이라는데 저는 왜 땅이 꺼지는 것처럼 어지러운 걸까요?\" 어지럼증으로 수많은 병원 문을 두드리다 마지막 희망을 품고 한의원을 찾으시는 환자분들이 가장 흔하게 털어놓으시는 임상적 고민입니다.\n\n이러한 기립성 어지럼증의 대부분은 귀 안쪽의 평형기관이나 뇌의 혈관 기형 문제가 아니라, 중력에 대항하여 혈압과 혈류를 유지해 주는 뇌 자율신경 반사 시스템의 붕괴, 즉 '체위성 기립 빈맥 증후군(POTS, Postural Orthostatic Tachycardia Syndrome)' 혹은 기립성 뇌혈류 저하증에서 기인합니다. 건강한 사람은 누워 있다가 일어설 때 중력에 의해 약 500~800ml의 혈액이 하체와 복부 내장으로 쏠리더라도, 경동맥동과 대동맥궁에 위치한 압수용기(Baroreceptor)가 즉각 이를 감지하여 수 초 내에 교감신경을 흥분시킵니다. 하체 혈관을 수축시키고 심장을 적절히 박동시켜 뇌로 향하는 혈류량을 한 치의 오차도 없이 안정적으로 유지하는 것입니다.\n\n그러나 만성 과로, 극심한 스트레스, 수면 부족, 혹은 바이러스 감염 이후 뇌 자율신경계 조절력이 탈진된 환자분들은 일어설 때 하체 정맥 혈관을 조여주는 교감신경 신호가 제때 도달하지 못합니다. 혈액이 다리로 쏟아져 내려가면서 뇌로 가는 혈류 공급이 일시적으로 급감하고, 산소와 포도당 공급이 끊긴 뇌간과 대뇌피질은 비명을 지르며 '어지럼증', '시야 암전', '멍함'의 신호를 내보냅니다. 이때 심장은 뇌에 피를 보내기 위해 분당 30~40회 이상 비정상적으로 맥박을 급격히 뿜어 올리는 보상성 빈맥(POTS)을 일으키게 됩니다. 환자는 일어서는 것만으로도 가슴이 쿵쾅거리고 기절할 것 같은 공포를 겪게 되는 것입니다.\n\n한의학에서는 이를 기혈(氣血)이 쇠약해져 맑은 양기(陽氣)가 머리 꼭대기까지 솟구치지 못하는 '기허훈훈(氣虛眩暈)'이자 '심비양허(心脾兩虛)'의 병증으로 정밀하게 진단합니다. 심장의 펌프 동력이 약해지고 비위의 수곡정미 흡수가 부실해져 혈관의 긴장도와 순환 혈장량을 유지하지 못하는 것입니다. 여기에 경추 1·2번의 아탈구와 턱관절의 불균형이 겹치면 추골동맥(Vertebral Artery)을 통한 뇌간 기저부 혈류 순환이 더욱 악화됩니다.\n\n치료는 처진 기운을 끌어올리고 혈관의 탄력성을 복원하는 보중익기탕, 자감초탕 계열의 승제(升提) 한약 처방을 기본 골격으로 합니다. 심장 박동의 질을 강화하고 체내 유효 순환 혈류량을 늘려 기립 시에도 혈압이 뚝 떨어지지 않도록 지탱해 줍니다. 또한 후두골과 경추를 교정하는 경추 추나요법을 통해 뇌로 들어가는 혈관 통로를 활짝 열어주면, 기립 시 발생하던 눈앞의 암전과 흔들림이 사라지고 두 발로 땅을 딛고 서는 단단한 안정감을 되찾을 수 있습니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2026.08.10",
            "image": "/images/columns/column_4_pots_dizziness.svg",
            "views": 1268
          },
          {
            "id": "col-auto-3-1788684200000",
            "colIndex": 3,
            "category": "칼럼",
            "title": "얼굴은 화끈거리는데 손발은 얼음장처럼 시린 상열하한(上熱下寒), 공황 자율신경계의 경고",
            "summary": "심포의 화(火)는 머리로 치솟고 신장의 수(水)는 차가워지는 수승화강 실조를 바로잡는 치법",
            "content": "진료실에서 마주하는 환자분들 가운데 \"원장님, 제 몸은 반으로 쪼개놓은 것 같습니다. 머리와 가슴으로는 불길이 치솟아 얼굴이 벌겋게 달아오르고 땀이 비 오듯 쏟아지는데, 손발과 아랫배는 한겨울 얼음장처럼 시려서 여름에도 두꺼운 양말을 신고 잡니다.\"라며 난치성 체온 이상을 호소하시는 분들이 적지 않습니다. 이비인후과나 피부과에서는 갱년기 안면홍조나 알레르기 혈관 확장증이라 하고, 정형외과나 혈관외과에서는 수족냉증이나 레이노 증후군 의심이라며 각기 다른 약을 처방하지만, 열을 내리는 차가운 약을 먹으면 손발이 더 시려 설사가 나고, 손발을 덥히는 약을 먹으면 머리가 깨질 듯 아프고 얼굴 열감이 폭발하는 딜레마에 부딪히게 됩니다.\n\n이러한 모순적인 체온 부조화의 본질은 우리 뇌간 위쪽에 위치한 시상하부(Hypothalamus)의 체온 조절 중추가 뇌 자율신경 실조로 인해 전신 미세 모세혈관의 개폐 기능을 상실했기 때문입니다. 인체는 본래 교감신경과 부교감신경의 정밀한 길항 작용을 통해 체온을 항상 36.5도 안팎으로 유지하도록 설계되어 있습니다. 더울 때는 피부 혈관을 확장해 열을 방출하고, 추울 때는 사지 말단의 혈관을 수축시켜 뇌와 심장 등 중심 장부의 온도를 보존합니다.\n\n그러나 만성적인 정신적 충격, 과도한 긴장, 억압된 분노가 누적되면 교감신경계가 과각성 상태에 빠지며 말초 혈관을 과도하게 수축시킵니다. 심장에서 뿜어져 나온 따뜻한 혈액이 손끝과 발끝, 하복부의 모세혈관을 통과하지 못한 채 중간에서 차단당하고, 갈 곳을 잃은 혈류와 열기가 고스란히 상체인 가슴과 목, 얼굴, 두피 쪽으로 역류하여 정체되는 것입니다. 그 결과 머리는 뜨겁고 발은 차가운 기이한 혈류 왜곡 현상이 고착화됩니다.\n\n한의학에서는 이를 '수승화강(水昇火降)'의 법칙이 깨진 전형적인 상열하한(上熱下寒)이자 음양실조(陰陽失調)의 위중한 징후로 진단합니다. 자연계에서 따뜻한 기운은 위로 오르고 차가운 물은 아래로 내려가듯, 인체 역시 신장(腎臟)의 맑은 수기가 척추를 타고 올라가 머리의 열을 식혀주고, 심장(心臟)의 온화한 화기가 아래로 내려가 단전과 손발을 따뜻하게 데워주어야 건강이 유지됩니다. 하지만 스트레스와 신경계 피로로 이 순환 고리가 끊어지면 아래쪽은 냉기(寒)가 갇히고 위쪽은 화기(火)가 치받치는 한열착잡(寒熱錯雜)이 발생합니다.\n\n이때의 치료는 단순히 열을 끄거나 냉기만을 쫓는 단편적인 접근으로는 결코 해결되지 않습니다. 상체의 허열을 서늘하게 식혀주는 황련, 지모, 황백과 하초의 양기를 북돋워 말초 혈관을 열어주는 육계, 부자, 당귀를 절묘하게 배합한 '온하청상(溫下淸上)' 처방을 투여해야 합니다. 더불어 복부 뜸 치료와 뇌 자율신경을 안정시키는 배수혈 약침치료를 통해 척추 신경절의 긴장을 풀어주면, 막혔던 혈류 통로가 뚫리면서 머리는 맑고 시원해지며 손발 끝까지 온기가 가득 차는 근본적인 균형이 회복됩니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2026.08.09",
            "image": "/images/columns/column_3_temp_dysregulation.svg",
            "views": 1226
          },
          {
            "id": "col-auto-2-1788674200000",
            "colIndex": 2,
            "category": "칼럼",
            "title": "위내시경은 깨끗한데 왜 체하고 명치가 막힐까? 공황 불안이 부르는 뇌-장관 신경축 이상",
            "summary": "스트레스가 미주신경 운동핵을 마비시켜 유발하는 기능성 소화불량과 담적(痰積) 치료",
            "content": "\"원장님, 물 한 모금만 마셔도 명치끝이 돌멩이로 꽉 틀어막힌 것 같고, 조금만 스트레스를 받으면 체기가 올라와 며칠을 굶어야 합니다. 그런데 위내시경을 해보면 약간의 표재성 위염 말고는 너무 깨끗하다며 신경성이라는 말만 되풀이합니다.\" 진료실에서 매일같이 듣는 만성 위장장애 환자분들의 절규에 가까운 호소입니다. 내과에서 위산 분비 억제제(PPI), 소화제, 위장관 운동 조절제, 심지어 가스제거제까지 처방받아 몇 달째 복용해도 복약할 때만 반짝 호전될 뿐, 약을 끊는 순간 어김없이 명치 답답함과 트림, 헛구역질, 팽만감이 재발하는 악순환을 겪고 계신 분들이 대단히 많습니다.\n\n이러한 현상이 발생하는 결정적인 이유는 소화라는 작용이 단순히 위장이라는 고립된 주머니 하나에서 일어나는 기계적 과정이 아니라, 뇌간(Brainstem)에서 출발하여 위장관 전체를 지배하는 제10뇌신경, 즉 미주신경(Vagus Nerve)의 지휘 아래 작동하는 고도의 신경학적 협응 반응이기 때문입니다. 현대 신경과학에서 밝혀낸 '뇌-장-신경 축(Gut-Brain Axis)'에 따르면, 장은 '제2의 뇌'라 불릴 만큼 독자적인 장관신경계(ENS)를 갖추고 있으며, 뇌와 소화기계는 미주신경이라는 고속도로를 통해 1초도 쉬지 않고 양방향 소통을 이어갑니다. \n\n스트레스와 불안, 과로가 지속되면 교감신경이 긴장하면서 신체는 '투쟁-도피' 모드로 전환됩니다. 이때 뇌는 위장으로 가야 할 혈류의 70% 이상을 차단하여 팔다리 근육과 심장으로 몰아줍니다. 혈류 공급이 급감한 위장 점막은 위산과 소화효소를 정상적으로 분비하지 못하고, 위장 평활근의 연동운동은 그 자리에서 마비되듯 멈춰 섭취한 음식물이 아래로 내려가지 못한 채 정체됩니다. 이것이 바로 한의학에서 수천 년 전부터 강조해 온 담적병(痰積病)의 생리병리학적 실체입니다. 위벽의 신경총이 위축되어 음식물 부패 가스와 노폐물이 위장 외벽 조직에 딱딱하게 응결되면서, 복진(腹診) 시 명치 아래 거궐혈과 중완혈 부위가 마치 판자처럼 딱딱하게 굳고 살짝만 눌러도 자지러지는 압통을 호소하게 되는 것입니다.\n\n더욱 심각한 문제는 장내 신경세포가 우리 몸 전체 세로토닌의 90% 이상을 합성한다는 점입니다. 위장 운동이 멈추고 장내 유익균 생태계가 무너지면 신경전달물질의 합성이 교란되어 불안증, 무기력감, 불면증 같은 정신신경계 증상이 동반 악화되는 2차적 악순환이 완성됩니다. 따라서 내시경에 보이지 않는 소화불량 치료의 열쇠는 위산 억제제가 아닌, 마비된 미주신경의 스위치를 다시 켜는 데 있습니다. \n\n해아림한의원에서는 목 뒤 후두부와 경추 주변의 긴장을 완화하여 미주신경 통로를 확보하고, 반하사심탕, 이진탕을 바탕으로 신경성 위장 찌꺼기를 배출하는 담적 제거 한약과 위장 신경총을 따뜻하게 활성화하는 온열 침구치료를 병행합니다. 소화기관을 옥죄던 교감신경의 밧줄이 풀리고 부교감신경 혈류가 회복되면, 돌덩이 같던 명치가 부드럽게 풀리면서 편안한 식사와 일상의 활력을 되찾게 됩니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2026.08.07",
            "image": "/images/columns/column_2_gut_brain.svg",
            "views": 1184
          },
          {
            "id": "col-auto-1-1788664200000",
            "colIndex": 1,
            "category": "칼럼",
            "title": "응급실을 찾아도 '이상 없다'는 가슴 두근거림과 호흡곤란, 뇌의 비상경보 시스템이 오작동한 신호입니다",
            "summary": "생명에 지장이 없는데도 죽을 것 같은 공포를 느끼는 공황발작의 신경학적 메커니즘과 한의학적 해결책",
            "content": "진료실 문을 열고 들어오시는 환자분들 중에는 잔뜩 상기된 얼굴로 서류 뭉치를 내미시는 분들이 유독 많습니다. 대학병원 응급실과 심장내과를 전전하며 심전도, 24시간 홀터 모니터링, 심장 초음파, 조영제 관상동맥 CT까지 수백만 원에 달하는 정밀 검사를 모두 마쳤지만, 의료진으로부터 돌아온 답은 한결같이 \"심장은 매우 건강하니 신경정신과나 가보라\"는 허탈한 통보였다는 것입니다. 당사자는 숨이 턱 끝까지 차오르고 심장이 1분에 140회씩 요동치며 이대로 죽는 것은 아닌가 하는 극심한 공포와 질식감에 시달리는데, 기계 판독 결과는 '이상 없음'이라는 이 기막힌 간극 앞에서 환자분들은 분통을 터뜨리거나 깊은 고립감에 빠지곤 합니다.\n\n실제 진료실에서 맥을 짚어보면 맥박의 속도 자체도 문제지만, 혈관 벽의 긴장도가 팽팽하게 굳어 있는 현맥(弦脈)과 심장의 기운이 흩어져 불규칙하게 요동치는 삭맥(數脈)이 뚜렷하게 관찰됩니다. 뇌 자율신경 균형 검사(HRV, 심박변이도)를 시행해 보면 심장 박동 사이의 미세한 간격 변화가 거의 직선에 가깝게 소실되어 있고, 교감신경의 활성도를 나타내는 저주파수(LF) 영역이 극단적으로 치솟아 있는 반면, 심장을 진정시키는 부교감신경 고주파수(HF) 영역은 바닥을 치고 있는 전형적인 '뇌 자율신경 불균형' 상태를 드러냅니다. 심장이라는 기관 자체에 기질적인 결함이나 판막 이상이 있는 것이 아니라, 심장의 박동수를 실시간으로 조절하는 신경계의 신호 체계가 오작동을 일으킨 것입니다.\n\n우리 뇌의 심층부에 자리한 편도체(Amygdala)는 원시 시대부터 맹수를 마주쳤을 때 생존을 위해 전신의 에너지를 끌어올리는 비상경보 벨 역할을 해왔습니다. 편도체가 위험을 감지하면 교감신경절을 통해 아드레날린과 노르에피네프린을 혈관 속으로 쏟아부어 심장을 폭주시키고 근육을 긴장시킵니다. 문제는 현대인의 지속적인 만성 스트레스와 수면 부족, 번아웃 상태가 이어지면 이 비상경보 버튼이 안쪽으로 꽉 끼어버린 것처럼 고장 나, 조용한 거실 소파에 앉아 TV를 보거나 잠자리에 누워 있는 평온한 순간에도 뇌가 \"지금 맹수가 덮쳤다\"고 오판하여 교감신경 폭풍을 일으킨다는 점입니다.\n\n한의학에서는 이러한 상태를 심기(心氣)가 허약해진 틈을 타 뇌와 신경계에 화(火)가 치밀어 오르는 심담허겁(心膽虛怯)이자 심화항성(心火亢盛)의 병증으로 파악합니다. 치료의 핵심은 단순 진통제나 신경차단제로 심장 박동을 억지로 틀어막는 것이 아니라, 과열된 뇌신경을 식히고 억압된 부교감신경(미주신경)의 전도력을 되살리는 데 있습니다. 치자, 황련, 산조인, 원지와 같이 뇌 혈류를 안정시키고 흥분된 신경세포막의 이온 통로를 안정화하는 한약 처방은 교감신경의 민감도를 낮추며, 흉골 중앙의 전중혈과 완관절의 내관혈 침구 치료는 미주신경의 심장 가지를 부드럽게 자극하여 심장의 자연스러운 박동 리듬을 되찾아줍니다. 원인 모를 심장 두근거림은 마음의 꾀병이 결코 아닙니다. 고장 난 뇌 자율신경 신호 체계를 정밀하게 바로잡을 때, 심장은 비로소 고요하고 편안한 본래의 호흡을 되찾을 수 있습니다.\n\n[공황장애 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)\n\n[공황장애 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)\n\n[전국 지점 안내](https://www.healim.com)",
            "author": "해아림한의원",
            "date": "2026.08.06",
            "image": "/images/columns/column_1_palpitation.svg",
            "views": 1142
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
