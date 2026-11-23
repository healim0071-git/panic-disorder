/**
 * healim_common_bottom.js
 * 해아림한의원 공통 하단 섹션(FAQ · 치료후기 · 치료칼럼 · 유튜브) 초경량 통합 엔진
 *
 * 핵심 최적화:
 * 1. 페이지당 350KB 인라인 스크립트 제거 -> 캐시 가능한 ~16KB 외부 defer 모듈로 통합
 * 2. 공유 단일 Fetch Promise(window.getHealimCanonicalHubPromise)로 페이지당 JSON 1회만 요청
 * 3. 프로덕션 환경에서 불필요한 2.5s/20s 폴링 및 :3030 연결 시도 전면 차단 (이벤트 기반 갱신)
 * 4. 정적 배포 모드 Strict SSOT 보장 (PC·모바일·18개 랜딩페이지 100% 동일 데이터)
 */
(function(window, document) {
  'use strict';
  if (window.__HEALIM_COMMON_BOTTOM_LOADED__) return;
  window.__HEALIM_COMMON_BOTTOM_LOADED__ = true;

  var CURRENT_COMMUNITY_EPOCH = '20261121_panic_v21_strict_ssot';
  var PERMANENT_DELETED_REVIEW_IDS = [
    'reviews-1788884300000',
    'reviews-1788878779980',
    'reviews-1788884500000',
    'reviews-1788878854783'
  ];

  var inMemoryCanonicalHub = null;

  function isLocalHost() {
    var h = (window.location && window.location.hostname) || '';
    return h === 'localhost' || h === '127.0.0.1';
  }

  function hasLiveCloudDb() {
    try {
      if (window.HealimCloudDB && typeof window.HealimCloudDB.getBaseUrl === 'function') {
        return !!window.HealimCloudDB.getBaseUrl();
      }
      var custom = localStorage.getItem('healim_cloud_db_custom_url');
      return !!(custom && custom.trim().length > 0);
    } catch (e) {
      return false;
    }
  }

  function isStrictStaticHubMode() {
    return !isLocalHost() && !hasLiveCloudDb();
  }

  function purgeAllClientCaches() {
    try {
      ['faq', 'reviews', 'columns', 'youtube'].forEach(function(k) {
        localStorage.removeItem('healim_board_' + k);
        localStorage.removeItem('healim_vault_all_posts_' + k);
        localStorage.removeItem('healim_custom_' + k + '_posts');
        localStorage.removeItem('healim_edited_posts_' + k);
        localStorage.removeItem('healim_deleted_posts_' + k);
        localStorage.removeItem('healim_deleted_titles_' + k);
        localStorage.removeItem('healim_deleted_pool_ids_' + k);
      });
      localStorage.removeItem('healim_deleted_post_ids');
      localStorage.removeItem('healim_deleted_posts_all');
      localStorage.removeItem('healim_auto_column_state');
      localStorage.removeItem('healim_auto_faq_state');
      localStorage.removeItem('healim_auto_review_state');
      localStorage.removeItem('healim_auto_reviews_state');
      localStorage.removeItem('healim_community_posts_v2');
      if (window.indexedDB) {
        var idbReq = window.indexedDB.open('HealimCommunityDB', 1);
        idbReq.onsuccess = function(ev) {
          try {
            var db = ev.target.result;
            if (db && db.objectStoreNames.contains('community_vault')) {
              db.transaction('community_vault', 'readwrite').objectStore('community_vault').clear();
            }
          } catch (err) {}
        };
      }
    } catch (e) {}
  }

  // Epoch upgrade check (once per browser session/upgrade)
  try {
    if (localStorage.getItem('healim_community_epoch') !== CURRENT_COMMUNITY_EPOCH) {
      window._healimEpochJustUpgraded = true;
      purgeAllClientCaches();
      localStorage.setItem('healim_community_epoch', CURRENT_COMMUNITY_EPOCH);
    }
  } catch (e) {}

  // Shared Single-Flight Hub Fetcher (guarantees /data/healim_community_hub.json is fetched ONLY ONCE per page load)
  if (typeof window.getHealimCanonicalHubPromise !== 'function') {
    window.getHealimCanonicalHubPromise = function(forceRefresh) {
      if (!forceRefresh && window.__HEALIM_HUB_FETCH_PROMISE__) {
        return window.__HEALIM_HUB_FETCH_PROMISE__;
      }
      if (!window.fetch) return Promise.resolve(null);
      var recentRec = null;
      try {
        var rawRec = sessionStorage.getItem('healim_recent_github_hub');
        if (rawRec) {
          var parsedRec = JSON.parse(rawRec);
          if (parsedRec && parsedRec.data && parsedRec.committedAt && (Date.now() - parsedRec.committedAt < 180000)) {
            recentRec = parsedRec;
          } else {
            sessionStorage.removeItem('healim_recent_github_hub');
          }
        }
      } catch (e) {}
      var cacheBucket = Math.floor(Date.now() / 60000);
      var p = fetch('/data/healim_community_hub.json?v=20261123_v23&cb=' + cacheBucket, { cache: 'no-cache' })
        .then(function(res) {
          if (!res.ok) throw new Error('HTTP ' + res.status);
          return res.json();
        })
        .then(function(json) {
          var data = (json && json.data) ? json.data : json;
          if (recentRec && recentRec.data) {
            var fetchedTs = Number((data && data.updated_at) || 0);
            if (fetchedTs < Number(recentRec.updatedAt || 0)) {
              data = recentRec.data;
            } else {
              try { sessionStorage.removeItem('healim_recent_github_hub'); } catch (e) {}
            }
          }
          if (!data || (data.version && data.version < 21)) return null;
          inMemoryCanonicalHub = data;
          if (data.auto_schedule) {
            window.__HEALIM_SERVER_AUTO_SCHEDULE__ = data.auto_schedule;
            try {
              if (typeof window.updateAutoColumnStatusUI === 'function') window.updateAutoColumnStatusUI();
              if (typeof window.updateAutoFaqStatusUI === 'function') window.updateAutoFaqStatusUI();
            } catch (e) {}
          }
          return data;
        })
        .catch(function() {
          window.__HEALIM_HUB_FETCH_PROMISE__ = null;
          if (recentRec && recentRec.data) {
            inMemoryCanonicalHub = recentRec.data;
            return recentRec.data;
          }
          return null;
        });
      window.__HEALIM_HUB_FETCH_PROMISE__ = p;
      return p;
    };
  }

  // Chronological deterministic sorting
  function getItemDateScore(item) {
    if (!item) return 0;
    if (item.date) {
      var cleanDate = String(item.date).trim().replace(/[.\/]/g, '-');
      var m = cleanDate.match(/^(\d{4})-(\d{1,2})-(\d{1,2})(?:[T\s](\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/);
      if (m) {
        var td = new Date(
          parseInt(m[1], 10),
          parseInt(m[2], 10) - 1,
          parseInt(m[3], 10),
          m[4] ? parseInt(m[4], 10) : 0,
          m[5] ? parseInt(m[5], 10) : 0,
          m[6] ? parseInt(m[6], 10) : 0
        ).getTime();
        if (!isNaN(td) && td > 0) return td;
      }
      var td2 = new Date(cleanDate).getTime();
      if (!isNaN(td2) && td2 > 0) return td2;
    }
    if (item.createdAt) {
      var catNum = Number(item.createdAt);
      if (!isNaN(catNum) && catNum > 0) return catNum < 10000000000 ? catNum * 1000 : catNum;
    }
    var idMatch = String(item.id || '').match(/(\d{10,14})/);
    if (idMatch) {
      var idTs = parseInt(idMatch[1], 10);
      return idTs < 10000000000 ? idTs * 1000 : idTs;
    }
    return 0;
  }

  function getItemSubScore(item, index, totalLength) {
    if (!item) return 0;
    if (item.isAutoPublished) {
      return 100000000000000 + (item.createdAt && !isNaN(Number(item.createdAt)) ? Number(item.createdAt) : 0);
    }
    if (item.createdAt && !isNaN(Number(item.createdAt))) {
      return Number(item.createdAt);
    }
    var ytMatch = String(item.id || '').match(/^yt-(\d+)$/i);
    if (ytMatch) return 100000 - parseInt(ytMatch[1], 10) * 1000;
    var colIdx = item.colIndex || item.poolIndex || 0;
    if (colIdx > 0) return colIdx * 1000;
    return totalLength - (index || 0);
  }

  function sortItemsByTime(items) {
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
  if (!window.sortItemsByTime) window.sortItemsByTime = sortItemsByTime;
  if (!window.getItemDateScore) window.getItemDateScore = getItemDateScore;

  function extractYoutubeId(url) {
    if (!url) return '';
    url = String(url).trim();
    if (/^[a-zA-Z0-9_-]{11}$/.test(url)) return url;
    var match = url.match(/(?:youtu\.be\/|(?:www\.|m\.)?(?:youtube|youtube-nocookie)\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([a-zA-Z0-9_-]{11})/);
    return (match && match[1]) ? match[1] : '';
  }

  function formatFaqTitle(rawTitle) {
    if (!rawTitle) return '';
    return String(rawTitle).trim()
      .replace(/^Q[\.:\s\-]+/i, '').trim()
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/__(.*?)__/g, '$1')
      .replace(/^#+\s*/, '')
      .trim();
  }

  function getFaqFallbackImage(seedKey) {
    var imgs = [
      '/images/faq/faq_1_exam.svg', '/images/faq/faq_25_safety.svg', '/images/faq/faq_8_tapering.svg',
      '/images/faq/faq_2_panic.svg', '/images/faq/faq_5_sleep.svg', '/images/faq/faq_7_brainfog.svg',
      '/images/faq/faq_9_cst.svg', '/images/faq/faq_12_lifestyle.svg', '/images/faq/faq_18_recovery.svg'
    ];
    var s = String(seedKey || 'faq');
    var h = 0;
    for (var i = 0; i < s.length; i++) h = ((h << 5) - h) + s.charCodeAt(i);
    return imgs[Math.abs(h) % imgs.length];
  }

  function getColumnFallbackImage(seedKey) {
    var imgs = [
      '/images/columns/column_1_palpitation.svg', '/images/columns/column_2_gut_brain.svg',
      '/images/columns/column_4_pots_dizziness.svg', '/images/columns/column_5_neuroplasticity.svg',
      '/images/columns/column_6_adrenal_fatigue.svg', '/images/columns/column_7_cervical_cst.svg',
      '/images/columns/column_8_tinnitus_vagus.svg', '/images/columns/column_10_hyperventilation.svg'
    ];
    var s = String(seedKey || 'col');
    var h = 0;
    for (var i = 0; i < s.length; i++) h = ((h << 5) - h) + s.charCodeAt(i);
    return imgs[Math.abs(h) % imgs.length];
  }

  function renderRichContent(rawText) {
    if (!rawText) return '';
    var s = String(rawText).trim();
    s = s.replace(/\\r\\n/g, '\n').replace(/\\n/g, '\n').replace(/\\r/g, '\n');
    s = s
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/on\w+="[^"]*"/gi, '')
      .replace(/on\w+='[^']*'/gi, '')
      .replace(/javascript:/gi, '');
    s = s.replace(/!\[(.*?)\]\(((?:data:image\/[^;]+;base64,[^)]+)|(?:https?:\/\/[^)]+)|(?:\/[^)]+))\)/g, function(m, alt, src) {
      return '<div class="my-3.5 rounded-xl overflow-hidden border border-[#badfe3] bg-[#f8fafb] max-w-lg shadow-xs"><img src="' + src + '" alt="' + (alt || '본문 사진') + '" class="max-h-80 w-auto object-contain rounded-lg" loading="lazy" decoding="async" /></div>';
    });
    s = s.replace(/<img\b([^>]*)>/gi, function(match, attrs) {
      if (attrs.indexOf('class=') === -1) {
        return '<img ' + attrs + ' class="max-h-80 w-auto object-contain rounded-xl my-3 border border-[#badfe3] bg-[#f8fafb] shadow-xs" loading="lazy" decoding="async">';
      }
      return match;
    });
    s = s.replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-[#0d3a42]">$1</strong>');
    s = s.replace(/__(.+?)__/g, '<strong class="font-bold text-[#0d3a42]">$1</strong>');
    s = s.replace(/(?:^|\n)###\s*(.+?)(?=\n|$)/g, '<h4 class="font-bold text-[#0d3a42] text-base mt-4 mb-2 pb-1.5 border-b border-[#edf2f4]">$1</h4>');
    s = s.replace(/(?:^|\n)##\s*(.+?)(?=\n|$)/g, '<h4 class="font-bold text-[#0d3a42] text-base mt-4 mb-2 pb-1.5 border-b border-[#edf2f4]">$1</h4>');
    s = s.replace(/^[\*\-]\s+(.+)$/gim, '<div class="flex items-start gap-1.5 my-1 ml-1"><span class="text-[#1c6e78] font-bold">•</span><span>$1</span></div>');
    s = s.replace(/^(?:&gt;|>)\s*(.+)$/gim, '<blockquote class="border-l-4 border-[#1c6e78] pl-3 py-1 my-2 bg-[#f0f7f8] text-[#333] rounded-r">$1</blockquote>');
    s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, function(m, text, url) {
      return '<a href="' + url + '" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline hover:text-[#0d3a42] transition-colors py-0.5 my-0.5"><span>' + text + '</span><span class="text-xs">&gt;</span></a>';
    });
    if (s.indexOf('<p') === -1) {
      s = s.replace(/\n\n+/g, '<br><br>').replace(/\n/g, '<br>');
      s = s.replace(/(?:<br\s*\/?>\s*)+(<div|<h4|<blockquote)/gi, '$1').replace(/(<\/div>|<\/h4>|<\/blockquote>)(?:\s*<br\s*\/?>)+/gi, '$1');
    }
    return s;
  }

  function getRealtimeBoardData(boardKey) {
    var list = [];
    if (inMemoryCanonicalHub && Array.isArray(inMemoryCanonicalHub[boardKey]) && inMemoryCanonicalHub[boardKey].length > 0) {
      list = inMemoryCanonicalHub[boardKey].slice();
    } else {
      try {
        var raw = localStorage.getItem('healim_board_' + boardKey);
        if (raw) list = JSON.parse(raw) || [];
      } catch (e) {}
      if ((!list || list.length === 0) && boardKey === 'faq' && Array.isArray(window.defaultFaqData)) list = window.defaultFaqData.slice();
      if ((!list || list.length === 0) && boardKey === 'columns' && Array.isArray(window.defaultColumnsData)) list = window.defaultColumnsData.slice();
      if ((!list || list.length === 0) && boardKey === 'reviews' && Array.isArray(window.defaultReviewsData)) list = window.defaultReviewsData.slice();
      if ((!list || list.length === 0) && boardKey === 'youtube' && Array.isArray(window.defaultYoutubeData)) list = window.defaultYoutubeData.slice();
    }

    var serverDel = (inMemoryCanonicalHub && Array.isArray(inMemoryCanonicalHub.deleted_ids))
      ? inMemoryCanonicalHub.deleted_ids.map(String)
      : [];

    var filtered = list.filter(function(it) {
      if (!it || !it.id) return false;
      var sId = String(it.id);
      if (serverDel.indexOf(sId) !== -1) return false;
      if (boardKey === 'reviews' && PERMANENT_DELETED_REVIEW_IDS.indexOf(sId) !== -1) return false;
      return true;
    });
    return sortItemsByTime(filtered);
  }
  window.getRealtimeBoardData = getRealtimeBoardData;

  function populateAndShowModal(boardType, item, targetStrId) {
    var backdrop = document.getElementById('commonBottomDetailModalBackdrop');
    if (!item || !backdrop) {
      if (typeof window.openDetailModal === 'function') {
        window.openDetailModal(boardType, targetStrId);
        return;
      }
      window.location.href = '/' + encodeURIComponent(boardType) + '?id=' + encodeURIComponent(targetStrId);
      return;
    }

    var catEl = document.getElementById('commonBottomModalCategory');
    if (catEl) {
      catEl.textContent = item.category || (boardType === 'reviews' ? '치료후기' : (boardType === 'columns' ? '칼럼' : (boardType === 'youtube' ? '영상' : '공황장애 FAQ')));
    }
    var titleEl = document.getElementById('commonBottomModalTitle');
    if (titleEl) titleEl.textContent = formatFaqTitle(item.title || '');
    var authorEl = document.getElementById('commonBottomModalAuthor');
    if (authorEl) authorEl.textContent = (item.author && item.author !== '익명') ? item.author : '해아림한의원';
    var dateEl = document.getElementById('commonBottomModalDate');
    if (dateEl) dateEl.textContent = item.date || '2026.09.09';
    var viewsEl = document.getElementById('commonBottomModalViews');
    if (viewsEl) {
      item.views = (Number(item.views) || 0) + 1;
      viewsEl.textContent = item.views;
    }

    var ytArea = document.getElementById('commonBottomModalYoutubeArea');
    if (ytArea) {
      if (boardType === 'youtube') {
        var vId = extractYoutubeId(item.videoEmbed || item.thumb || item.youtubeUrl || targetStrId) || '51rIQ1T5dIU';
        ytArea.innerHTML = '<div class="relative w-full rounded-xl overflow-hidden shadow-lg border border-[#2b8894]" style="padding-top: 56.25%;"><iframe class="absolute inset-0 w-full h-full" src="https://www.youtube-nocookie.com/embed/' + vId + '?autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>';
        ytArea.style.display = 'block';
      } else {
        ytArea.innerHTML = '';
        ytArea.style.display = 'none';
      }
    }

    var imgArea = document.getElementById('commonBottomModalImageArea');
    var imgEl = document.getElementById('commonBottomModalImage');
    var blurNotice = document.getElementById('commonBottomModalBlurNotice');
    var displayImg = (boardType === 'youtube') ? '' : (item.image || item.thumb || '');
    if (boardType === 'faq' && !displayImg) displayImg = getFaqFallbackImage(item.id || item.title);
    if (boardType === 'columns' && !displayImg) displayImg = getColumnFallbackImage(item.id || item.title);

    if (displayImg && imgArea && imgEl) {
      imgEl.src = displayImg;
      imgArea.style.display = 'block';
      if (blurNotice) blurNotice.style.display = (boardType === 'reviews') ? 'flex' : 'none';
    } else {
      if (imgArea) imgArea.style.display = 'none';
      if (blurNotice) blurNotice.style.display = 'none';
    }

    var contentEl = document.getElementById('commonBottomModalContent');
    if (contentEl) {
      contentEl.innerHTML = renderRichContent(item.content || item.summary || '');
    }

    var moreLink = document.getElementById('commonBottomModalMoreLink');
    if (moreLink) {
      moreLink.href = '/' + (boardType || 'reviews');
      moreLink.onclick = function(e) { return handleBottomMoreClick(e, boardType || 'reviews'); };
    }

    backdrop.style.display = 'flex';
    backdrop.classList.add('is-open');
  }

  function findItemInList(boardType, list, targetStrId) {
    if (!Array.isArray(list)) return null;
    var found = list.find(function(it) {
      if (!it) return false;
      if (String(it.id) === targetStrId || String(it.poolId) === targetStrId) return true;
      if (boardType === 'youtube') {
        var vId = extractYoutubeId(it.videoEmbed || it.thumb || it.youtubeUrl || '');
        if (vId && vId === targetStrId) return true;
      }
      return false;
    });
    if (!found) {
      found = list.find(function(it) { return it && it.title === targetStrId; });
    }
    return found || null;
  }

  window.openCommonBottomDetail = function(boardType, postId) {
    if (!boardType || !postId) return;
    var targetStrId = String(postId).trim();

    if (boardType === 'reviews') {
      var rawUser = localStorage.getItem('healim_auth_user');
      var isAdmin = false;
      if (rawUser) {
        try {
          var u = JSON.parse(rawUser);
          if (u.role === 'admin' || u.uid === 'healim0071' || u.grade === 'superadmin') isAdmin = true;
        } catch (e) {}
      }
      if (!rawUser && !isAdmin) {
        if (confirm('치료후기는 환자의 개인정보 보호 및 의료법 제56조에 의거하여 로그인한 회원만 열람하실 수 있습니다.\n로그인 페이지로 이동하시겠습니까?')) {
          var backUrl = encodeURIComponent(window.location.pathname + '#reviews');
          window.location.href = '/login/?back_url=' + backUrl;
        }
        return;
      }
    }

    var item = findItemInList(boardType, getRealtimeBoardData(boardType), targetStrId);
    if (item) {
      populateAndShowModal(boardType, item, targetStrId);
      return;
    }

    // If hub hasn't loaded yet, await the single shared hub promise before redirecting
    window.getHealimCanonicalHubPromise(false).then(function(hubData) {
      if (hubData && Array.isArray(hubData[boardType])) {
        var found = findItemInList(boardType, hubData[boardType], targetStrId);
        if (found) {
          populateAndShowModal(boardType, found, targetStrId);
          return;
        }
      }
      populateAndShowModal(boardType, null, targetStrId);
    });
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

  function handleBottomMoreClick(event, tabName) {
    if (event) {
      try { event.preventDefault(); } catch (e) {}
    }
    window.location.href = '/' + tabName;
    return false;
  }
  window.handleBottomMoreClick = handleBottomMoreClick;

  var healimRealtimeChannel = null;
  try {
    if (typeof BroadcastChannel !== 'undefined') {
      healimRealtimeChannel = new BroadcastChannel('healim_community_realtime_bus');
      healimRealtimeChannel.onmessage = function() { syncBottomCommunity(); };
    }
  } catch (e) {}

  window.broadcastHealimCommunityUpdate = function(boardType, action) {
    try {
      if (healimRealtimeChannel) {
        healimRealtimeChannel.postMessage({ type: 'sync', boardType: boardType, action: action, timestamp: Date.now() });
      }
    } catch (e) {}
    try {
      window.dispatchEvent(new CustomEvent('healim-community-updated', { detail: { boardType: boardType, action: action } }));
    } catch (e) {}
    syncBottomCommunity();
  };

  var lastRenderedCache = { faq: '', reviews: '', columns: '', youtube: '' };

  function syncBottomCommunity() {
    try {
      // (1) FAQ
      var faqContainer = document.getElementById('commonBottomFaqList');
      if (faqContainer) {
        var sortedFaq = getRealtimeBoardData('faq');
        if (sortedFaq.length > 0) {
          var currentlyOpenId = '';
          var openEl = faqContainer.querySelector('details[open]');
          if (openEl) {
            currentlyOpenId = openEl.getAttribute('data-faq-id') || '';
          }
          var fHtml = '';
          sortedFaq.slice(0, 5).forEach(function(item) {
            var safeFaqId = String(item.id || '').replace(/'/g, "\\'");
            var formattedTitle = formatFaqTitle(item.title);
            var richContent = renderRichContent(item.content);
            var photoBadge = '<span class="text-[11px] font-bold px-1.5 py-0.5 rounded bg-[#f0f7f8] text-[#1c6e78] border border-[#badfe3] ml-1.5">📷 사진</span>';
            var safeFaqImg = item.image || getFaqFallbackImage(item.id || item.title);
            var imageHtml = '<div class="my-3.5 rounded-xl overflow-hidden border border-[#badfe3] bg-[#f8fafb] max-w-lg shadow-xs"><img src="' + safeFaqImg + '" alt="' + formattedTitle.replace(/"/g, '&quot;') + '" class="max-h-80 w-auto object-contain rounded-lg" loading="lazy" decoding="async" onerror="if(!this.dataset.fallback){this.dataset.fallback=\'1\'; this.src=\'/images/faq/faq_1_exam.svg\';}else{this.parentElement.style.display=\'none\';}" /></div>';
            var isOpenAttr = (currentlyOpenId && (currentlyOpenId === String(item.id) || currentlyOpenId === safeFaqId)) ? ' open' : '';
            fHtml += '<details class="faq-item" data-faq-id="' + safeFaqId + '"' + isOpenAttr + '>' +
              '<summary><span class="flex items-center gap-1.5 text-left"><span class="text-sm font-extrabold text-[#1c6e78]">Q.</span>' + photoBadge + '<span class="font-bold text-[#0d3a42]">' + formattedTitle + '</span></span></summary>' +
              '<div class="faq-answer">' + imageHtml + '<div class="faq-content-body py-1 text-sm text-[#333333] leading-relaxed">' + richContent + '</div>' +
              '<div class="mt-2 text-right"><button type="button" class="text-xs text-[#1c6e78] font-bold hover:underline cursor-pointer" onclick="event.stopPropagation(); openCommonBottomDetail(\'faq\', \'' + safeFaqId + '\')">팝업 전문보기 &gt;</button></div></div></details>';
          });
          if (fHtml && fHtml !== lastRenderedCache.faq) {
            faqContainer.innerHTML = fHtml;
            lastRenderedCache.faq = fHtml;
          }
        }
      }

      // (2) 치료후기
      var revContainer = document.getElementById('commonBottomReviewsList');
      if (revContainer) {
        var sortedRev = getRealtimeBoardData('reviews');
        if (sortedRev.length > 0) {
          var rHtml = '';
          sortedRev.slice(0, 6).forEach(function(item) {
            var safeRevId = String(item.id || '').replace(/'/g, "\\'");
            var cleanContent = (item.content || '').replace(/<img[^>]*>/gi, '[사진]').replace(/!\[.*?\]\(.*?\)/g, '[사진]').replace(/<[^>]*>?/gm, ' ').replace(/\*\*(.*?)\*\*/g, '$1').replace(/__(.*?)__/g, '$1').replace(/\s+/g, ' ').trim();
            if (cleanContent.length > 110) cleanContent = cleanContent.slice(0, 110) + '...';
            var img = item.image || item.thumb || '/images/reviews/review_1.jpg';
            var cat = item.category || '치료후기';
            var author = (item.author && item.author !== '익명') ? item.author : '해아림한의원';
            var date = item.date || '2026.09.09';
            rHtml += '<div class="bg-white rounded-xl border border-[#e0eaec] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col cursor-pointer" onclick="openCommonBottomDetail(\'reviews\', \'' + safeRevId + '\')">' +
              '<div class="relative overflow-hidden h-44 bg-slate-100">' +
              '<img src="' + img + '" alt="치료후기 사진" class="bottom-review-blurred-img w-full h-full object-cover" loading="lazy" decoding="async" onerror="this.onerror=null; this.src=\'/images/reviews/review_1.jpg\';">' +
              '<div class="absolute top-3 left-3 bg-[#0d3a42]/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">🔒 의료법 보호 흐림처리</div></div>' +
              '<div class="p-5 flex flex-col flex-grow"><span class="text-xs font-bold text-[#1c6e78] mb-1.5">' + cat + '</span>' +
              '<h3 class="text-base font-bold text-[#0d3a42] mb-2 leading-snug line-clamp-2">' + (item.title || '') + '</h3>' +
              '<p class="text-xs text-[#666666] leading-relaxed mb-4 flex-grow">' + cleanContent + '</p>' +
              '<div class="pt-3 border-t border-[#f0f4f5] flex items-center justify-between text-xs text-[#888888]"><span>' + author + (date ? ' · ' + date : '') + '</span>' +
              '<a href="/reviews?id=' + encodeURIComponent(safeRevId) + '" onclick="event.preventDefault(); event.stopPropagation(); openCommonBottomDetail(\'reviews\', \'' + safeRevId + '\')" class="text-[#1c6e78] font-semibold hover:underline">상세보기 &gt;</a></div></div></div>';
          });
          if (rHtml && rHtml !== lastRenderedCache.reviews) {
            revContainer.innerHTML = rHtml;
            lastRenderedCache.reviews = rHtml;
          }
        }
      }

      // (3) 치료 칼럼
      var colContainer = document.getElementById('commonBottomColumnsList');
      if (colContainer) {
        var sortedCol = getRealtimeBoardData('columns');
        if (sortedCol.length > 0) {
          var cHtml = '';
          sortedCol.slice(0, 3).forEach(function(item) {
            var safeColId = String(item.id || '').replace(/'/g, "\\'");
            var cleanContent = (item.summary || item.content || '').replace(/<img[^>]*>/gi, '[사진]').replace(/!\[.*?\]\(.*?\)/g, '[사진]').replace(/<[^>]*>?/gm, ' ').replace(/\*\*(.*?)\*\*/g, '$1').replace(/__(.*?)__/g, '$1').replace(/\s+/g, ' ').trim();
            if (cleanContent.length > 110) cleanContent = cleanContent.slice(0, 110) + '...';
            var img = item.image || item.thumb || getColumnFallbackImage(item.id || item.title);
            var cat = item.category || '칼럼';
            var author = item.author || '해아림한의원';
            var date = item.date || '2026.09.09';
            cHtml += '<div onclick="openCommonBottomDetail(\'columns\', \'' + safeColId + '\')" class="bg-white rounded-xl border border-[#e0eaec] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group text-left cursor-pointer">' +
              '<div class="overflow-hidden h-44 bg-slate-100"><img src="' + img + '" alt="의학 칼럼" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" decoding="async" onerror="this.onerror=null; this.src=\'/images/columns/column_1_palpitation.svg\';"></div>' +
              '<div class="p-5 flex flex-col flex-grow"><span class="text-xs font-bold text-[#1c6e78] mb-1.5">' + cat + '</span>' +
              '<h3 class="text-base font-bold text-[#0d3a42] mb-2 leading-snug group-hover:text-[#1c6e78] transition-colors line-clamp-2">' + (item.title || '') + '</h3>' +
              '<p class="text-xs text-[#666666] leading-relaxed mb-4 flex-grow">' + cleanContent + '</p>' +
              '<div class="pt-3 border-t border-[#f0f4f5] flex items-center justify-between text-xs text-[#888888]"><span>' + author + (date ? ' · ' + date : '') + '</span>' +
              '<a href="/columns?id=' + encodeURIComponent(safeColId) + '" onclick="event.preventDefault(); event.stopPropagation(); openCommonBottomDetail(\'columns\', \'' + safeColId + '\')" class="text-[#1c6e78] font-semibold hover:underline">읽기 &gt;</a></div></div></div>';
          });
          if (cHtml && cHtml !== lastRenderedCache.columns) {
            colContainer.innerHTML = cHtml;
            lastRenderedCache.columns = cHtml;
          }
        }
      }

      // (4) 유튜브 동영상
      var ytContainer = document.getElementById('commonBottomYoutubeList');
      if (ytContainer) {
        var sortedYt = getRealtimeBoardData('youtube');
        if (sortedYt.length > 0) {
          var yHtml = '';
          sortedYt.slice(0, 3).forEach(function(item) {
            var vId = extractYoutubeId(item.videoEmbed || item.thumb || item.youtubeUrl || '') || '51rIQ1T5dIU';
            var targetYtId = item.id || vId;
            var safeTargetYtId = String(targetYtId).replace(/'/g, "\\'");
            var thumb = (item.thumb || ('https://img.youtube.com/vi/' + vId + '/maxresdefault.jpg')).replace('/hqdefault.jpg', '/maxresdefault.jpg');
            var cleanContent = (item.content || '').replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim();
            if (cleanContent.length > 110) cleanContent = cleanContent.slice(0, 110) + '...';
            var cat = item.category || '영상';
            var author = item.author || '해아림TV 알쓸한상';
            yHtml += '<div onclick="openCommonBottomDetail(\'youtube\', \'' + safeTargetYtId + '\')" class="bg-white rounded-xl border border-[#e0eaec] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group text-left cursor-pointer">' +
              '<div class="relative overflow-hidden h-44 bg-slate-900">' +
              '<img src="' + thumb + '" alt="' + String(item.title || '유튜브 영상').replace(/"/g, '&quot;') + '" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" decoding="async" onerror="if(!this.dataset.fallback){this.dataset.fallback=\'1\';this.src=\'https://img.youtube.com/vi/' + vId + '/hqdefault.jpg\';}">' +
              '<div class="absolute inset-0 flex items-center justify-center"><div class="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"><svg class="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div></div></div>' +
              '<div class="p-5 flex flex-col flex-grow"><span class="text-xs font-bold text-[#1c6e78] mb-1.5">' + cat + '</span>' +
              '<h3 class="text-base font-bold text-[#0d3a42] mb-2 leading-snug group-hover:text-[#1c6e78] transition-colors line-clamp-2">' + (item.title || '') + '</h3>' +
              '<p class="text-xs text-[#666666] leading-relaxed mb-4 flex-grow">' + cleanContent + '</p>' +
              '<div class="pt-3 border-t border-[#f0f4f5] flex items-center justify-between text-xs text-[#888888]"><span>' + author + '</span>' +
              '<a href="/youtube?id=' + encodeURIComponent(safeTargetYtId) + '" onclick="event.preventDefault(); event.stopPropagation(); openCommonBottomDetail(\'youtube\', \'' + safeTargetYtId + '\')" class="text-[#1c6e78] font-semibold hover:underline">시청하기 &gt;</a></div></div></div>';
          });
          if (yHtml && yHtml !== lastRenderedCache.youtube) {
            ytContainer.innerHTML = yHtml;
            lastRenderedCache.youtube = yHtml;
          }
        }
      }
    } catch (e) {}
  }
  window.syncBottomSections = syncBottomCommunity;
  window.syncBottomCommunity = syncBottomCommunity;

  function applyHubAndSync(data) {
    if (!data) return;
    if (data.epoch && data.epoch !== localStorage.getItem('healim_community_epoch')) {
      window._healimEpochJustUpgraded = true;
      purgeAllClientCaches();
      localStorage.setItem('healim_community_epoch', data.epoch);
    }
    var serverDel = Array.isArray(data.deleted_ids) ? data.deleted_ids.map(String) : [];
    if (isStrictStaticHubMode()) {
      ['faq', 'reviews', 'columns', 'youtube'].forEach(function(bKey) {
        if (Array.isArray(data[bKey]) && data[bKey].length > 0) {
          var editedMapB = {};
          var customListB = [];
          var localDelB = [];
          try { editedMapB = JSON.parse(localStorage.getItem('healim_edited_posts_' + bKey) || '{}') || {}; } catch (e) {}
          try {
            var cKeyB = (bKey === 'youtube') ? 'healim_custom_youtube_posts' : ('healim_custom_' + bKey + '_posts');
            customListB = JSON.parse(localStorage.getItem(cKeyB) || '[]') || [];
          } catch (e) {}
          try { localDelB = JSON.parse(localStorage.getItem('healim_deleted_posts_' + bKey) || '[]').map(String); } catch (e) {}
          var seenB = {};
          var combinedB = [];
          function pushB(it) {
            if (!it || !it.id) return;
            var sId = String(it.id);
            if (seenB[sId] || serverDel.indexOf(sId) !== -1 || localDelB.indexOf(sId) !== -1) return;
            if (bKey === 'reviews' && PERMANENT_DELETED_REVIEW_IDS.indexOf(sId) !== -1) return;
            seenB[sId] = true;
            combinedB.push(editedMapB[sId] ? editedMapB[sId] : it);
          }
          customListB.forEach(pushB);
          data[bKey].forEach(pushB);
          var clean = sortItemsByTime(combinedB);
          try {
            localStorage.setItem('healim_board_' + bKey, JSON.stringify(clean));
            localStorage.setItem('healim_vault_all_posts_' + bKey, JSON.stringify(clean));
          } catch (e) {}
        }
      });
    }
    syncBottomCommunity();
  }

  function initBottomSections() {
    // 1. Immediate render from localStorage if present
    syncBottomCommunity();
    // 2. Single-flight fetch of canonical hub (deferred gently via requestIdleCallback/setTimeout so main thread stays silky smooth)
    var triggerFetch = function() {
      window.getHealimCanonicalHubPromise(false).then(function(data) {
        if (data) applyHubAndSync(data);
      });
    };
    if (typeof window.requestIdleCallback === 'function') {
      window.requestIdleCallback(triggerFetch, { timeout: 1200 });
    } else {
      setTimeout(triggerFetch, 150);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBottomSections);
  } else {
    initBottomSections();
  }

  // Event-driven sync only (zero 2.5s/20s wasteful CPU/network polling on production!)
  window.addEventListener('storage', function(e) {
    if (!e.key || e.key.indexOf('healim_') === 0) syncBottomCommunity();
  });
  window.addEventListener('healim-community-updated', syncBottomCommunity);
  window.addEventListener('healim-cloud-db-updated', syncBottomCommunity);
  window.addEventListener('healim-post-saved', syncBottomCommunity);
  window.addEventListener('healim-post-deleted', syncBottomCommunity);
})(window, document);

