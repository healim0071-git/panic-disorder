// healim_bottom_engine.js: Universal Bottom Sections Detail Modal & Navigation Engine
(function() {
  window.openCommonBottomDetail = function(boardType, postId) {
    if (!boardType || !postId) return;
    var targetStrId = String(postId).trim();

    // 1. 의료법 제56조 환자 개인정보 보호 (치료후기 로그인 가드)
    if (boardType === 'reviews') {
      var rawUser = localStorage.getItem('healim_auth_user');
      var isAdmin = false;
      if (rawUser) {
        try {
          var u = JSON.parse(rawUser);
          if (u.role === 'admin' || u.uid === 'healim0071' || u.grade === 'superadmin') isAdmin = true;
        } catch(e) {}
      }
      if (!rawUser && !isAdmin) {
        var confirmLogin = confirm('치료후기는 환자의 개인정보 보호 및 의료법 제56조에 의거하여 로그인한 회원만 열람하실 수 있습니다.\n로그인 페이지로 이동하시겠습니까?');
        if (confirmLogin) {
          var backUrl = encodeURIComponent(window.location.pathname + '#reviews');
          window.location.href = '/login/?back_url=' + backUrl;
        }
        return;
      }
    }

    // 2. LocalStorage에서 해당 게시글 탐색
    var item = null;
    try {
      var vaults = ['healim_vault_all_posts_' + boardType, 'healim_board_' + boardType, 'healim_custom_' + boardType + '_posts'];
      for (var i = 0; i < vaults.length; i++) {
        var raw = localStorage.getItem(vaults[i]);
        if (raw) {
          var list = JSON.parse(raw) || [];
          for (var j = 0; j < list.length; j++) {
            var it = list[j];
            if (it && (String(it.id) === targetStrId || String(it.poolId) === targetStrId || String(it.title) === targetStrId)) {
              item = it;
              break;
            }
          }
          if (item) break;
        }
      }
    } catch(e) {}

    // 3. 모달 요소 확인
    var backdrop = document.getElementById('commonBottomDetailModalBackdrop');
    if (!item || !backdrop) {
      // 모달 데이터가 없거나 모달 DOM이 없으면 해당 독립 페이지로 직접 이동
      window.location.href = '/' + encodeURIComponent(boardType) + '?id=' + encodeURIComponent(postId);
      return;
    }

    // 4. 모달 필드 채우기
    var catEl = document.getElementById('commonBottomModalCategory');
    if (catEl) {
      catEl.textContent = item.category || (boardType === 'reviews' ? '치료후기' : (boardType === 'columns' ? '치료칼럼' : (boardType === 'youtube' ? '영상' : '공황장애 FAQ')));
    }
    var titleEl = document.getElementById('commonBottomModalTitle');
    if (titleEl) {
      titleEl.textContent = item.title || '';
    }
    var authorEl = document.getElementById('commonBottomModalAuthor');
    if (authorEl) {
      authorEl.textContent = (item.author && item.author !== '익명') ? item.author : '해아림한의원';
    }
    var dateEl = document.getElementById('commonBottomModalDate');
    if (dateEl) {
      dateEl.textContent = item.date || '2026.09.09';
    }
    var viewsEl = document.getElementById('commonBottomModalViews');
    if (viewsEl) {
      viewsEl.textContent = item.views ? Number(item.views) + 1 : '1';
    }

    // 이미지 및 영상 처리
    var imgArea = document.getElementById('commonBottomModalImageArea');
    var modalImg = document.getElementById('commonBottomModalImage');
    var blurNotice = document.getElementById('commonBottomModalBlurNotice');
    var ytArea = document.getElementById('commonBottomModalYoutubeArea');

    if (ytArea) ytArea.style.display = 'none';
    if (imgArea) imgArea.style.display = 'none';

    if (boardType === 'youtube') {
      var yId = targetStrId;
      if (item.videoEmbed) {
        var m = item.videoEmbed.match(/embed\/([a-zA-Z0-9_-]+)/);
        if (m) yId = m[1];
      }
      if (ytArea) {
        ytArea.innerHTML = '<div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:0.75rem;"><iframe src="https://www.youtube.com/embed/' + yId + '?autoplay=1" style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
        ytArea.style.display = 'block';
      }
    } else if (item.image || item.photo || item.thumb) {
      var imgSrc = item.image || item.photo || item.thumb;
      if (modalImg) {
        modalImg.src = imgSrc;
        if (imgArea) imgArea.style.display = 'block';
        if (blurNotice) blurNotice.style.display = (boardType === 'reviews') ? 'flex' : 'none';
      }
    }

    // 본문 내용 채우기
    var contentEl = document.getElementById('commonBottomModalContent');
    if (contentEl) {
      var bodyHtml = item.content || item.summary || item.desc || '등록된 상세 내용이 없습니다.';
      bodyHtml = bodyHtml.replace(/\n/g, '<br/>');
      contentEl.innerHTML = bodyHtml;
    }

    // 커뮤니티 더보기 링크
    var moreLink = document.getElementById('commonBottomModalMoreLink');
    if (moreLink) {
      moreLink.href = '/' + encodeURIComponent(boardType);
    }

    // 모달 표시
    backdrop.style.display = 'flex';
    backdrop.classList.add('is-open');
  };

  window.closeCommonBottomDetailModal = function() {
    var backdrop = document.getElementById('commonBottomDetailModalBackdrop');
    if (backdrop) {
      backdrop.classList.remove('is-open');
      backdrop.style.display = 'none';
    }
    var ytArea = document.getElementById('commonBottomModalYoutubeArea');
    if (ytArea) ytArea.innerHTML = '';
  };

  window.handleBottomMoreClick = function(event, tabName) {
    if (event && event.preventDefault) event.preventDefault();
    window.location.href = '/' + tabName;
    return false;
  };
})();