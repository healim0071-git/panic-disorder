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

const bannerHtml = `  <!-- HEALIM NETWORK OFFICIAL 배너 섹션 (클릭 시 https://www.healim.com 이동) -->
  <div id="branches" class="w-full bg-[#fafcfc] pt-2 pb-6 sm:pb-8">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <a href="https://www.healim.com" target="_blank" rel="noopener noreferrer" class="network-official-banner-link" style="text-decoration:none; display:block;">
        <div class="bg-gradient-to-r from-[#0d3a42] via-[#1c6e78] to-[#0d3a42] rounded-2xl px-5 py-6 sm:p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#2b8894] transition-all hover:shadow-2xl">
          <div class="text-center md:text-left">
            <span class="inline-block px-3 py-1 bg-white/15 text-white font-bold text-xs rounded-full uppercase tracking-wider mb-3">
              HEALIM NETWORK OFFICIAL
            </span>
            <h2 class="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-2">
              해아림한의원 네트워크 홈페이지 바로가기
            </h2>
            <p class="network-banner-desc text-slate-200 font-normal leading-relaxed">
              전국 16개 네트워크 지점 상세정보 및 예약, 학술연구를 확인하실 수 있습니다.
            </p>
          </div>
          <div class="flex-shrink-0">
            <span class="btn-network-banner-click">
              <span>CLICK &nbsp;&gt;</span>
            </span>
          </div>
        </div>
      </a>
    </div>
  </div>\n\n`;

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

  // Insert Banner HTML before <footer if not already present
  if (!html.includes('id="branches"')) {
    const footerIndex = html.indexOf('<footer');
    if (footerIndex !== -1) {
      html = html.slice(0, footerIndex) + bannerHtml + html.slice(footerIndex);
    }
  }

  fs.writeFileSync(file1, html, 'utf8');

  if (fs.existsSync(dirPath)) {
    fs.writeFileSync(file2, html, 'utf8');
  }

  count++;
  console.log(`[${count}/${slugs.length}] Added network banner HTML to ${slug}.html and ${slug}/index.html`);
}

console.log(`\nSuccessfully added network banner across all ${count} landing pages!`);
