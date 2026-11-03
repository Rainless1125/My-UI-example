(window.UI_ATLAS = window.UI_ATLAS || []).push({
  id: 'cards',
  name: '卡片',
  en: 'Cards',
  icon: 'fa-regular fa-id-card',
  desc: '定價、商品、個人檔案、數據、Bento 網格、聚光燈與 3D 傾斜等卡片樣式，資訊呈現的基本容器一次備齊。',
  items: [
    {
      name: '定價方案卡',
      en: 'Pricing Card',
      tags: ['定價', 'SaaS'],
      spec: [
        '寬 300px 的方案卡，頂部為方案名稱與「最受歡迎」漸層徽章，接著是大字價格（48px）與「/ 月」。',
        '中段為功能清單，每項前方為 emerald 圓形底的 fa-check 圖示。',
        '底部為全寬主要按鈕；卡片外框 1px、圓角 20px，並以淡主色光暈突出推薦方案。',
      ],
      html: `<div class="relative w-[300px] p-6 rounded-[20px] border border-brand-500/40 bg-surface shadow-[0_0_0_4px_rgb(99_102_241/.08),0_20px_40px_-16px_rgb(79_70_229/.35)]">
  <div class="flex items-center justify-between">
    <span class="text-sm font-semibold text-ink">專業版</span>
    <span class="px-2 py-0.5 rounded-full bg-gradient-to-r from-brand-600 to-violet-600 text-white text-[11px] font-semibold">最受歡迎</span>
  </div>
  <div class="mt-4 flex items-end gap-1"><span class="text-5xl font-bold tracking-tight text-ink">$24</span><span class="mb-1.5 text-sm text-ink-faint">/ 月</span></div>
  <p class="mt-2 text-sm text-ink-soft">適合成長中的小型團隊</p>
  <ul class="mt-6 space-y-3 text-sm text-ink-soft">
    <li class="flex items-center gap-2.5"><span class="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 grid place-items-center"><i class="fa-solid fa-check text-[10px]"></i></span>無限專案與頁面</li>
    <li class="flex items-center gap-2.5"><span class="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 grid place-items-center"><i class="fa-solid fa-check text-[10px]"></i></span>最多 10 位成員</li>
    <li class="flex items-center gap-2.5"><span class="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 grid place-items-center"><i class="fa-solid fa-check text-[10px]"></i></span>進階數據分析</li>
    <li class="flex items-center gap-2.5"><span class="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 grid place-items-center"><i class="fa-solid fa-check text-[10px]"></i></span>優先客服支援</li>
  </ul>
  <button type="button" class="mt-6 w-full h-10 rounded-[10px] bg-brand-600 text-white text-sm font-medium hover:bg-brand-500 transition">開始 14 天試用</button>
</div>`,
    },
    {
      name: '商品卡',
      en: 'Product Card',
      tags: ['電商', '商品'],
      spec: [
        '上半部為 4:3 的商品圖片區（以柔和漸層與大圖示示意），左上角為「-20%」折扣徽章，右上角為圓形收藏按鈕。',
        '下半部依序為品牌小字、商品名稱、星等評分與評論數、現價與刪除線原價。',
        '右下角為圓形深色「加入購物車」按鈕 fa-bag-shopping；hover 時圖片輕微放大。',
      ],
      html: `<div class="group w-64 rounded-2xl border border-line bg-surface overflow-hidden shadow-sm hover:shadow-lift transition">
  <div class="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-amber-100 via-orange-100 to-rose-100 dark:from-amber-500/20 dark:via-orange-500/10 dark:to-rose-500/20">
    <i class="fa-solid fa-headphones absolute inset-0 m-auto w-fit h-fit text-6xl text-orange-400/80 transition-transform duration-500 group-hover:scale-110"></i>
    <span class="absolute left-3 top-3 px-2 py-0.5 rounded-md bg-rose-500 text-white text-[11px] font-semibold">-20%</span>
    <button type="button" aria-label="收藏" onclick="UIK.flip(this)" data-on="text-rose-500" data-off="text-ink-soft" class="absolute right-3 top-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur grid place-items-center text-ink-soft text-sm shadow-sm"><i data-swap="fa-regular fa-solid" class="fa-regular fa-heart"></i></button>
  </div>
  <div class="p-4">
    <p class="text-[11px] font-medium uppercase tracking-wider text-ink-faint">Sonora</p>
    <h4 class="mt-0.5 text-sm font-semibold text-ink">無線降噪耳罩式耳機</h4>
    <div class="mt-1.5 flex items-center gap-1 text-xs"><i class="fa-solid fa-star text-amber-400"></i><span class="font-medium text-ink">4.8</span><span class="text-ink-faint">（326）</span></div>
    <div class="mt-3 flex items-center justify-between">
      <div><span class="text-lg font-bold text-ink">$3,990</span><span class="ml-1.5 text-xs text-ink-faint line-through">$4,990</span></div>
      <button type="button" aria-label="加入購物車" class="w-9 h-9 rounded-full bg-ink text-canvas grid place-items-center hover:scale-105 transition"><i class="fa-solid fa-bag-shopping text-sm"></i></button>
    </div>
  </div>
</div>`,
    },
    {
      name: '個人檔案卡',
      en: 'Profile Card',
      tags: ['使用者', '社群'],
      spec: [
        '頂部 80px 漸層封面，頭像 72px 圓形、白色 4px 外框，向上重疊封面一半。',
        '姓名旁有 fa-circle-check 認證圖示，下方為職稱；中段三欄統計數據（作品、追蹤者、追蹤中）。',
        '底部兩個按鈕：「追蹤」（可切換為已追蹤）與訊息圖示按鈕。',
      ],
      html: `<div class="w-72 rounded-2xl border border-line bg-surface overflow-hidden shadow-sm">
  <div class="h-20 bg-gradient-to-r from-sky-400 via-indigo-500 to-fuchsia-500"></div>
  <div class="px-5 pb-5">
    <div class="-mt-9 w-[72px] h-[72px] rounded-full border-4 border-surface bg-gradient-to-br from-amber-300 to-orange-500 grid place-items-center text-white text-xl font-semibold">林</div>
    <div class="mt-3 flex items-center gap-1.5"><h4 class="font-semibold text-ink">林雨晴</h4><i class="fa-solid fa-circle-check text-sky-500 text-sm"></i></div>
    <p class="text-sm text-ink-faint">資深產品設計師 · 台北</p>
    <div class="mt-4 grid grid-cols-3 py-3 border-y border-line text-center">
      <div><p class="font-semibold text-ink">142</p><p class="text-[11px] text-ink-faint">作品</p></div>
      <div class="border-x border-line"><p class="font-semibold text-ink">12.4k</p><p class="text-[11px] text-ink-faint">追蹤者</p></div>
      <div><p class="font-semibold text-ink">318</p><p class="text-[11px] text-ink-faint">追蹤中</p></div>
    </div>
    <div class="mt-4 flex gap-2">
      <button type="button" aria-pressed="false" onclick="UIK.flip(this)" data-on="bg-surface text-ink border-line" data-off="bg-ink text-canvas border-ink" class="flex-1 h-9 rounded-[10px] border bg-ink text-canvas border-ink text-sm font-medium transition"><i data-swap="fa-plus fa-check" class="fa-solid fa-plus text-xs mr-1.5"></i><span data-alt="已追蹤">追蹤</span></button>
      <button type="button" aria-label="傳送訊息" class="w-9 h-9 rounded-[10px] border border-line grid place-items-center text-ink-soft hover:bg-subtle"><i class="fa-regular fa-message text-sm"></i></button>
    </div>
  </div>
</div>`,
    },
    {
      name: '文章卡',
      en: 'Blog Post Card',
      tags: ['內容', '部落格'],
      spec: [
        '上方 16:9 封面區（以漸層與圖示示意），封面左下角疊放分類標籤。',
        '內容區依序為日期與閱讀時間（fa-regular fa-clock）、兩行內的標題、三行內的摘要。',
        '底部作者列：小頭像、姓名、右側 fa-arrow-right 連結；hover 時標題變主色、箭頭右移。',
      ],
      html: `<a href="#" onclick="return false" class="group block w-72 rounded-2xl border border-line bg-surface overflow-hidden shadow-sm hover:shadow-lift transition">
  <div class="relative aspect-video bg-gradient-to-br from-emerald-200 via-teal-200 to-sky-200 dark:from-emerald-500/25 dark:via-teal-500/15 dark:to-sky-500/25 grid place-items-center">
    <i class="fa-solid fa-mountain-sun text-5xl text-teal-600/50"></i>
    <span class="absolute left-3 bottom-3 px-2 py-0.5 rounded-md bg-white/90 text-[11px] font-semibold text-teal-700">設計思考</span>
  </div>
  <div class="p-4">
    <p class="text-xs text-ink-faint">2026 年 10 月 28 日 · <i class="fa-regular fa-clock"></i> 6 分鐘閱讀</p>
    <h4 class="mt-2 font-semibold leading-snug text-ink line-clamp-2 group-hover:text-brand-600 transition-colors">如何在三週內建立一套可擴充的設計系統</h4>
    <p class="mt-1.5 text-sm text-ink-soft line-clamp-2">從 Token 命名、元件拆分到文件撰寫，分享我們團隊實際導入的流程與踩過的坑。</p>
    <div class="mt-4 flex items-center gap-2.5">
      <span class="w-7 h-7 rounded-full bg-brand-500 text-white grid place-items-center text-[11px] font-semibold">陳</span>
      <span class="text-xs font-medium text-ink">陳家豪</span>
      <i class="ml-auto fa-solid fa-arrow-right text-xs text-ink-faint transition-transform group-hover:translate-x-1 group-hover:text-brand-600"></i>
    </div>
  </div>
</a>`,
    },
    {
      name: '數據指標卡',
      en: 'KPI Stat Card',
      tags: ['儀表板', '趨勢'],
      spec: [
        '左上為指標名稱與 fa-circle-info 說明圖示，右上為時間區間小下拉。',
        '中間為大字數值（32px 粗體、等寬數字）與 emerald 色上升趨勢徽章 fa-arrow-trend-up +12.5%。',
        '底部為 SVG 折線迷你圖（sparkline），線條為主色並帶有由上而下淡出的漸層面積。',
      ],
      html: `<div class="w-80 p-5 rounded-2xl border border-line bg-surface shadow-sm">
  <div class="flex items-center justify-between">
    <span class="text-sm text-ink-soft">月營收 <i class="fa-solid fa-circle-info text-ink-faint text-xs ml-0.5"></i></span>
    <button type="button" class="h-7 px-2 rounded-md border border-line text-xs text-ink-soft">近 30 天 <i class="fa-solid fa-chevron-down text-[9px] ml-1"></i></button>
  </div>
  <div class="mt-3 flex items-end gap-3">
    <span class="text-3xl font-bold tracking-tight text-ink tabular-nums">$84,210</span>
    <span class="mb-1 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold"><i class="fa-solid fa-arrow-trend-up"></i>12.5%</span>
  </div>
  <svg viewBox="0 0 280 64" class="mt-4 w-full h-16" preserveAspectRatio="none" aria-hidden="true">
    <defs><linearGradient id="kpi-g" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#6366f1" stop-opacity=".25"/><stop offset="1" stop-color="#6366f1" stop-opacity="0"/></linearGradient></defs>
    <path d="M0 50 L30 44 L60 48 L90 34 L120 38 L150 26 L180 30 L210 16 L240 20 L280 6 L280 64 L0 64Z" fill="url(#kpi-g)"/>
    <path d="M0 50 L30 44 L60 48 L90 34 L120 38 L150 26 L180 30 L210 16 L240 20 L280 6" fill="none" stroke="#6366f1" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
  </svg>
</div>`,
    },
    {
      name: '聚光燈卡片',
      en: 'Spotlight Card',
      tags: ['hover', '光暈'],
      spec: [
        '深色卡片，滑鼠移動時在游標位置產生 260px 的圓形主色光暈，隨游標即時跟隨。',
        '以 CSS 變數 --x、--y 記錄游標位置，背景使用 radial-gradient；hover 時光暈淡入。',
        '卡片內容為圖示、標題「即時協作」與兩行說明。',
      ],
      html: `<div onmousemove="UIK.spot(event,this)" class="group relative w-80 p-6 rounded-2xl border border-white/10 bg-zinc-900 overflow-hidden">
  <div class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(260px_circle_at_var(--x)_var(--y),rgba(129,140,248,.25),transparent_70%)]"></div>
  <div class="relative">
    <span class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 grid place-items-center text-indigo-300"><i class="fa-solid fa-users-viewfinder"></i></span>
    <h4 class="mt-4 font-semibold text-white">即時協作</h4>
    <p class="mt-1.5 text-sm text-zinc-400 leading-relaxed">多人同時編輯、留言與檢視游標位置，所有變更都會即時同步。</p>
  </div>
</div>`,
    },
    {
      name: '3D 傾斜卡片',
      en: '3D Tilt Card',
      tags: ['3D', '視差'],
      spec: [
        '滑鼠在卡片上移動時，卡片依游標位置做 perspective 3D 傾斜（最大約 12 度），離開時平滑回正。',
        '卡片為漸層背景的會員通行證樣式，內含 fa-crown 圖示、會員等級、名稱與 QR 區塊示意。',
        '內部元素使用 translateZ 產生前後層次感。',
      ],
      html: `<div onmousemove="UIK.tilt(event,this)" onmouseleave="UIK.tilt(null,this)" class="w-72 h-44 p-5 rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-600 to-sky-500 text-white shadow-[0_24px_48px_-16px_rgb(79_70_229/.6)] transition-transform duration-200 ease-out [transform-style:preserve-3d]">
  <div class="flex items-start justify-between [transform:translateZ(30px)]">
    <div><p class="text-[11px] uppercase tracking-[.2em] text-white/70">Member Pass</p><p class="mt-1 text-lg font-semibold">黃金會員</p></div>
    <span class="w-10 h-10 rounded-xl bg-white/15 backdrop-blur grid place-items-center"><i class="fa-solid fa-crown text-amber-300"></i></span>
  </div>
  <div class="mt-8 flex items-end justify-between [transform:translateZ(20px)]">
    <div><p class="text-xs text-white/70">持卡人</p><p class="text-sm font-medium tracking-wide">WANG YU-TING</p></div>
    <span class="w-12 h-12 rounded-lg bg-white grid place-items-center text-indigo-700"><i class="fa-solid fa-qrcode text-2xl"></i></span>
  </div>
</div>`,
    },
    {
      name: '玻璃信用卡',
      en: 'Glass Credit Card',
      tags: ['玻璃', '金融'],
      spec: [
        '彩色光斑背景上的毛玻璃卡片：白色 12% 背景、backdrop-blur-xl、白色 25% 邊框。',
        '左上為晶片圖示（fa-sim-card 旋轉 90 度）、右上為 fa-wifi 旋轉表示感應；中間為等寬卡號。',
        '左下持卡人與到期日、右下 fa-cc-visa 品牌圖示，信用卡比例 1.586:1。',
      ],
      html: `<div class="relative w-[360px] max-w-full h-60 rounded-3xl overflow-hidden grid place-items-center bg-zinc-950">
  <div class="absolute left-6 top-4 w-40 h-40 rounded-full bg-fuchsia-500/70 blur-3xl"></div>
  <div class="absolute right-4 bottom-2 w-44 h-44 rounded-full bg-cyan-400/60 blur-3xl"></div>
  <div class="relative w-[300px] aspect-[1.586] p-5 rounded-2xl bg-white/10 border border-white/25 backdrop-blur-xl text-white shadow-2xl flex flex-col">
    <div class="flex justify-between items-center"><i class="fa-solid fa-sim-card rotate-90 text-2xl text-amber-200/90"></i><i class="fa-solid fa-wifi rotate-90 text-white/80"></i></div>
    <p class="mt-auto font-mono text-base tracking-[.12em] whitespace-nowrap">4532 •••• •••• 9021</p>
    <div class="mt-3 flex items-end justify-between">
      <div class="text-[10px] uppercase tracking-wider text-white/60">持卡人<p class="text-xs text-white normal-case tracking-normal font-medium">CHEN YI-AN</p></div>
      <div class="text-[10px] uppercase tracking-wider text-white/60">到期<p class="text-xs text-white font-medium">08/29</p></div>
      <i class="fa-brands fa-cc-visa text-3xl"></i>
    </div>
  </div>
</div>`,
    },
    {
      name: 'Bento 功能網格',
      en: 'Bento Feature Grid',
      tags: ['Bento', '落地頁'],
      wide: true,
      spec: [
        '4 欄 × 2 列的 Bento 網格，包含一張 2×2 大卡、一張 2×1 橫卡與兩張 1×1 小卡，間距 12px。',
        '大卡為深色背景並有模擬圖表的長條，其他卡片為白底或淡主色底，每張都有圖示、標題與一句說明。',
        '所有卡片圓角 20px，hover 時邊框加深；小卡在窄螢幕時改為單欄堆疊。',
      ],
      html: `<div class="w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3">
  <div class="col-span-2 md:row-span-2 p-6 rounded-[20px] bg-zinc-900 text-white flex flex-col">
    <span class="w-9 h-9 rounded-xl bg-white/10 grid place-items-center text-indigo-300"><i class="fa-solid fa-chart-column"></i></span>
    <h4 class="mt-4 text-lg font-semibold">即時數據分析</h4>
    <p class="mt-1 text-sm text-zinc-400">每秒更新的流量與轉換率報表。</p>
    <div class="mt-auto pt-6 flex items-end gap-2 h-32">
      <span class="flex-1 h-[40%] rounded-md bg-white/10"></span><span class="flex-1 h-[65%] rounded-md bg-white/10"></span><span class="flex-1 h-[50%] rounded-md bg-white/10"></span><span class="flex-1 h-[85%] rounded-md bg-gradient-to-t from-indigo-500 to-violet-400"></span><span class="flex-1 h-[70%] rounded-md bg-white/10"></span><span class="flex-1 h-[95%] rounded-md bg-white/10"></span>
    </div>
  </div>
  <div class="col-span-2 p-5 rounded-[20px] border border-line bg-surface hover:border-ink-faint/50 transition flex items-center gap-4">
    <span class="w-11 h-11 shrink-0 rounded-xl bg-emerald-500/10 text-emerald-600 grid place-items-center"><i class="fa-solid fa-shield-halved text-lg"></i></span>
    <div><h4 class="font-semibold text-ink">企業級安全性</h4><p class="text-sm text-ink-soft">SOC 2 認證與端對端加密。</p></div>
  </div>
  <div class="p-5 rounded-[20px] bg-brand-500/10 border border-brand-500/20">
    <i class="fa-solid fa-bolt text-brand-600 dark:text-brand-400"></i>
    <h4 class="mt-3 text-sm font-semibold text-ink">極速載入</h4><p class="mt-0.5 text-xs text-ink-soft">全球 CDN 節點</p>
  </div>
  <div class="p-5 rounded-[20px] border border-line bg-surface hover:border-ink-faint/50 transition">
    <i class="fa-solid fa-plug text-amber-500"></i>
    <h4 class="mt-3 text-sm font-semibold text-ink">200+ 整合</h4><p class="mt-0.5 text-xs text-ink-soft">串接常用工具</p>
  </div>
</div>`,
    },
    {
      name: '用戶評價卡',
      en: 'Testimonial Card',
      tags: ['社會證明', '引言'],
      spec: [
        '左上角大型淡主色 fa-quote-left 引號圖示，接著五顆琥珀色星星與 16px 的評價內文。',
        '底部以分隔線隔開作者資訊：頭像、姓名、職稱與公司，右側為公司 fa-brands 圖示。',
        '卡片白底、圓角 20px、內距 24px，最大寬度 360px。',
      ],
      html: `<figure class="w-[360px] max-w-full p-6 rounded-[20px] border border-line bg-surface shadow-sm">
  <i class="fa-solid fa-quote-left text-3xl text-brand-500/25"></i>
  <div class="mt-3 flex gap-0.5 text-xs text-amber-400"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
  <blockquote class="mt-3 text-[15px] leading-relaxed text-ink">導入之後，我們的設計交付時間縮短了將近一半，工程師終於不用再猜設計稿的間距。</blockquote>
  <figcaption class="mt-5 pt-5 border-t border-line flex items-center gap-3">
    <span class="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 text-white grid place-items-center text-sm font-semibold">張</span>
    <span class="flex-1"><span class="block text-sm font-semibold text-ink">張美玲</span><span class="block text-xs text-ink-faint">設計總監 · Lumen Labs</span></span>
    <i class="fa-brands fa-figma text-xl text-ink-faint"></i>
  </figcaption>
</figure>`,
    },
    {
      name: '活動資訊卡',
      en: 'Event Card',
      tags: ['活動', '日期'],
      spec: [
        '左側為日期方塊：上方紅色條顯示月份「NOV」，下方大字日期「18」。',
        '右側為活動名稱、fa-location-dot 地點與 fa-clock 時間，以及參加者頭像堆疊與「+42」。',
        '最右側為「報名」外框小按鈕；卡片水平排列、寬 420px。',
      ],
      html: `<div class="w-[420px] max-w-full p-4 rounded-2xl border border-line bg-surface shadow-sm flex gap-4">
  <div class="w-14 shrink-0 rounded-xl border border-line overflow-hidden text-center">
    <p class="bg-rose-500 text-white text-[10px] font-bold tracking-wider py-0.5">NOV</p>
    <p class="py-1.5 text-xl font-bold text-ink">18</p>
  </div>
  <div class="flex-1 min-w-0">
    <h4 class="font-semibold text-ink truncate">2026 前端開發者年會</h4>
    <p class="mt-1 text-xs text-ink-faint"><i class="fa-solid fa-location-dot mr-1"></i>台北國際會議中心 <span class="mx-1">·</span><i class="fa-regular fa-clock mr-1"></i>09:30</p>
    <div class="mt-3 flex items-center justify-between">
      <div class="flex -space-x-2">
        <span class="w-6 h-6 rounded-full ring-2 ring-surface bg-sky-400"></span><span class="w-6 h-6 rounded-full ring-2 ring-surface bg-amber-400"></span><span class="w-6 h-6 rounded-full ring-2 ring-surface bg-emerald-400"></span>
        <span class="w-6 h-6 rounded-full ring-2 ring-surface bg-subtle text-[9px] font-semibold text-ink-soft grid place-items-center">+42</span>
      </div>
      <button type="button" class="h-8 px-3 rounded-lg border border-line text-xs font-medium text-ink hover:bg-subtle">報名</button>
    </div>
  </div>
</div>`,
    },
    {
      name: '音樂播放卡',
      en: 'Music Player Card',
      tags: ['媒體', '播放器'],
      spec: [
        '方形專輯封面（漸層加 fa-music 圖示），下方為歌曲名稱、歌手與收藏按鈕。',
        '進度條顯示目前時間與總時長；控制列為隨機、上一首、播放/暫停（大圓形按鈕）、下一首、重複。',
        '播放按鈕點擊時在 fa-play 與 fa-pause 之間切換。',
      ],
      html: `<div class="w-64 p-4 rounded-3xl border border-line bg-surface shadow-lift">
  <div class="aspect-square rounded-2xl bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500 grid place-items-center"><i class="fa-solid fa-music text-5xl text-white/70"></i></div>
  <div class="mt-4 flex items-center justify-between">
    <div><p class="font-semibold text-ink">城市夜光</p><p class="text-xs text-ink-faint">霓虹樂團</p></div>
    <button type="button" aria-label="收藏" class="text-rose-500"><i class="fa-solid fa-heart"></i></button>
  </div>
  <div class="mt-4 h-1 rounded-full bg-line"><div class="w-2/5 h-full rounded-full bg-ink"></div></div>
  <div class="mt-1.5 flex justify-between text-[10px] font-mono text-ink-faint"><span>1:24</span><span>3:38</span></div>
  <div class="mt-3 flex items-center justify-between text-ink-soft">
    <button type="button" aria-label="隨機播放" class="w-8 h-8 hover:text-ink"><i class="fa-solid fa-shuffle text-sm"></i></button>
    <button type="button" aria-label="上一首" class="w-8 h-8 hover:text-ink"><i class="fa-solid fa-backward-step"></i></button>
    <button type="button" aria-label="播放" aria-pressed="false" onclick="UIK.flip(this)" class="w-12 h-12 rounded-full bg-ink text-canvas grid place-items-center hover:scale-105 transition"><i data-swap="fa-play fa-pause" class="fa-solid fa-play"></i></button>
    <button type="button" aria-label="下一首" class="w-8 h-8 hover:text-ink"><i class="fa-solid fa-forward-step"></i></button>
    <button type="button" aria-label="重複播放" class="w-8 h-8 hover:text-ink"><i class="fa-solid fa-repeat text-sm"></i></button>
  </div>
</div>`,
    },
    {
      name: '天氣資訊卡',
      en: 'Weather Card',
      tags: ['小工具', '漸層'],
      spec: [
        '天空藍漸層背景的卡片，左上為城市名稱與日期，右上為大型 fa-cloud-sun 圖示。',
        '中間為 56px 大字溫度與天氣描述，下方三欄顯示濕度、風速、紫外線指數，各有小圖示。',
        '文字皆為白色，三欄資訊放在白色 15% 半透明區塊中。',
      ],
      html: `<div class="w-72 p-5 rounded-3xl bg-gradient-to-br from-sky-400 to-indigo-500 text-white shadow-[0_20px_40px_-16px_rgb(56_189_248/.6)]">
  <div class="flex items-start justify-between">
    <div><p class="font-semibold"><i class="fa-solid fa-location-dot text-xs mr-1"></i>台北市</p><p class="text-xs text-white/75">11 月 3 日 週二</p></div>
    <i class="fa-solid fa-cloud-sun text-4xl text-amber-200 drop-shadow"></i>
  </div>
  <p class="mt-4 text-6xl font-light tracking-tight">24°</p>
  <p class="text-sm text-white/85">多雲時晴 · 體感 26°</p>
  <div class="mt-5 grid grid-cols-3 gap-2 p-3 rounded-2xl bg-white/15 backdrop-blur text-center text-xs">
    <div><i class="fa-solid fa-droplet text-white/80"></i><p class="mt-1 font-semibold">68%</p><p class="text-white/70">濕度</p></div>
    <div><i class="fa-solid fa-wind text-white/80"></i><p class="mt-1 font-semibold">12 km/h</p><p class="text-white/70">風速</p></div>
    <div><i class="fa-solid fa-sun text-white/80"></i><p class="mt-1 font-semibold">中等</p><p class="text-white/70">紫外線</p></div>
  </div>
</div>`,
    },
    {
      name: '檔案附件卡',
      en: 'File Attachment Card',
      tags: ['檔案', '列表'],
      spec: [
        '垂直列表中的檔案項目，左側為依檔案類型著色的圖示方塊（PDF 紅、Figma 紫、ZIP 黃）。',
        '中間為檔名（單行截斷）與「檔案大小 · 修改時間」，右側為下載與更多圖示按鈕。',
        '項目 hover 時淺灰背景，整個列表包在圓角卡片內。',
      ],
      html: `<div class="w-96 max-w-full p-2 rounded-2xl border border-line bg-surface shadow-sm">
  <div class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-subtle transition">
    <span class="w-10 h-10 rounded-lg bg-rose-500/10 text-rose-600 grid place-items-center"><i class="fa-solid fa-file-pdf"></i></span>
    <div class="flex-1 min-w-0"><p class="text-sm font-medium text-ink truncate">2026 年度品牌規範手冊.pdf</p><p class="text-xs text-ink-faint">4.2 MB · 2 小時前</p></div>
    <button type="button" aria-label="下載" class="w-8 h-8 rounded-lg grid place-items-center text-ink-faint hover:text-ink hover:bg-surface"><i class="fa-solid fa-download text-sm"></i></button>
  </div>
  <div class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-subtle transition">
    <span class="w-10 h-10 rounded-lg bg-violet-500/10 text-violet-600 grid place-items-center"><i class="fa-brands fa-figma"></i></span>
    <div class="flex-1 min-w-0"><p class="text-sm font-medium text-ink truncate">首頁改版 v3.fig</p><p class="text-xs text-ink-faint">18.7 MB · 昨天</p></div>
    <button type="button" aria-label="下載" class="w-8 h-8 rounded-lg grid place-items-center text-ink-faint hover:text-ink hover:bg-surface"><i class="fa-solid fa-download text-sm"></i></button>
  </div>
  <div class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-subtle transition">
    <span class="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 grid place-items-center"><i class="fa-solid fa-file-zipper"></i></span>
    <div class="flex-1 min-w-0"><p class="text-sm font-medium text-ink truncate">icon-assets-export.zip</p><p class="text-xs text-ink-faint">96.1 MB · 3 天前</p></div>
    <button type="button" aria-label="下載" class="w-8 h-8 rounded-lg grid place-items-center text-ink-faint hover:text-ink hover:bg-surface"><i class="fa-solid fa-download text-sm"></i></button>
  </div>
</div>`,
    },
    {
      name: '看板任務卡',
      en: 'Kanban Task Card',
      tags: ['專案管理', '任務'],
      spec: [
        '頂部為兩個彩色標籤（設計、高優先），右上為 fa-ellipsis 更多按鈕。',
        '標題 14px 粗體，下方為子任務進度條（3/5）與百分比。',
        '底部左側為成員頭像堆疊，右側為留言數 fa-regular fa-comment 與附件數 fa-paperclip、截止日。',
      ],
      html: `<div class="w-72 p-4 rounded-xl border border-line bg-surface shadow-sm hover:shadow-md transition cursor-grab">
  <div class="flex items-center gap-1.5">
    <span class="px-2 py-0.5 rounded-md bg-violet-500/10 text-violet-600 dark:text-violet-400 text-[11px] font-medium">設計</span>
    <span class="px-2 py-0.5 rounded-md bg-rose-500/10 text-rose-600 dark:text-rose-400 text-[11px] font-medium"><i class="fa-solid fa-angles-up text-[9px] mr-0.5"></i>高優先</span>
    <button type="button" aria-label="更多" class="ml-auto w-6 h-6 rounded grid place-items-center text-ink-faint hover:bg-subtle"><i class="fa-solid fa-ellipsis text-xs"></i></button>
  </div>
  <h4 class="mt-3 text-sm font-semibold text-ink">重新設計結帳流程頁面</h4>
  <div class="mt-3 flex items-center gap-2 text-[11px] text-ink-faint"><i class="fa-regular fa-square-check"></i>3 / 5<div class="flex-1 h-1 rounded-full bg-line"><div class="w-3/5 h-full rounded-full bg-brand-500"></div></div>60%</div>
  <div class="mt-4 flex items-center justify-between">
    <div class="flex -space-x-1.5"><span class="w-6 h-6 rounded-full ring-2 ring-surface bg-sky-500 text-white text-[10px] grid place-items-center">李</span><span class="w-6 h-6 rounded-full ring-2 ring-surface bg-amber-500 text-white text-[10px] grid place-items-center">吳</span></div>
    <div class="flex items-center gap-3 text-[11px] text-ink-faint"><span><i class="fa-regular fa-comment mr-1"></i>8</span><span><i class="fa-solid fa-paperclip mr-1"></i>3</span><span class="text-amber-600"><i class="fa-regular fa-calendar mr-1"></i>11/20</span></div>
  </div>
</div>`,
    },
    {
      name: '應用整合卡',
      en: 'Integration Card',
      tags: ['整合', '開關'],
      spec: [
        '左上為品牌圖示方塊（fa-brands fa-slack），右上為連線開關。',
        '中間為整合名稱與兩行說明；底部以分隔線隔開「查看設定」連結與狀態小點（已連線 / 未連線）。',
        '卡片寬 300px，圓角 16px。',
      ],
      html: `<div class="w-[300px] rounded-2xl border border-line bg-surface shadow-sm">
  <div class="p-5">
    <div class="flex items-start justify-between">
      <span class="w-11 h-11 rounded-xl border border-line bg-surface grid place-items-center text-xl"><i class="fa-brands fa-slack text-[#4A154B] dark:text-[#e01e5a]"></i></span>
      <label class="relative inline-flex cursor-pointer"><input type="checkbox" checked class="peer sr-only" aria-label="啟用 Slack"><span class="w-9 h-5 rounded-full bg-line peer-checked:bg-emerald-500 transition-colors"></span><span class="absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform peer-checked:translate-x-4"></span></label>
    </div>
    <h4 class="mt-4 font-semibold text-ink">Slack</h4>
    <p class="mt-1 text-sm text-ink-soft leading-relaxed">將專案更新與提及通知同步到指定的 Slack 頻道。</p>
  </div>
  <div class="px-5 py-3 border-t border-line flex items-center justify-between text-xs">
    <span class="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>已連線</span>
    <a href="#" onclick="return false" class="font-medium text-ink-soft hover:text-ink">查看設定 <i class="fa-solid fa-arrow-right text-[10px] ml-0.5"></i></a>
  </div>
</div>`,
    },
    {
      name: '漸層邊框卡',
      en: 'Gradient Border Card',
      tags: ['漸層', '邊框'],
      spec: [
        '外層 1px 內距的多色漸層（indigo → pink → amber）作為邊框，內層為頁面底色，圓角相差 1px。',
        'hover 時漸層邊框緩慢流動（background-position 動畫）。',
        '內容為 fa-gem 圖示、標題「無限可能」與說明文字。',
      ],
      html: `<div class="group w-80 p-px rounded-[20px] bg-[length:200%_200%] bg-gradient-to-r from-indigo-500 via-pink-500 to-amber-400 hover:animate-gradient-x">
  <div class="p-6 rounded-[19px] bg-surface">
    <span class="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 text-white grid place-items-center"><i class="fa-solid fa-gem"></i></span>
    <h4 class="mt-4 font-semibold text-ink">無限擴充可能</h4>
    <p class="mt-1.5 text-sm text-ink-soft leading-relaxed">開放的外掛架構，讓你自由串接任何服務並建立專屬工作流程。</p>
  </div>
</div>`,
    },
    {
      name: '行動呼籲橫幅卡',
      en: 'CTA Banner Card',
      tags: ['行銷', '橫幅'],
      wide: true,
      spec: [
        '寬版深色卡片，左側為標題（24px）、說明與兩個按鈕（白色實心、白色外框），右側為裝飾性的圖示網格。',
        '背景為 zinc-900，右上角有主色徑向光暈，並疊加細格線紋理。',
        '窄螢幕時改為上下排列，裝飾區隱藏。',
      ],
      html: `<div class="relative w-full max-w-3xl p-8 rounded-3xl bg-zinc-900 text-white overflow-hidden flex items-center gap-8">
  <div class="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-indigo-500/40 blur-3xl"></div>
  <div class="absolute inset-0 opacity-[.07] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:24px_24px]"></div>
  <div class="relative flex-1">
    <h4 class="text-2xl font-semibold tracking-tight">準備好提升團隊效率了嗎？</h4>
    <p class="mt-2 text-sm text-zinc-400 max-w-md">免費試用 14 天，不需要信用卡，隨時可以取消。</p>
    <div class="mt-6 flex flex-wrap gap-3">
      <button type="button" class="h-10 px-5 rounded-[10px] bg-white text-zinc-900 text-sm font-semibold hover:bg-zinc-200 transition">免費開始</button>
      <button type="button" class="h-10 px-5 rounded-[10px] border border-white/20 text-sm font-medium hover:bg-white/10 transition"><i class="fa-regular fa-calendar mr-2"></i>預約展示</button>
    </div>
  </div>
  <div class="relative hidden md:grid grid-cols-3 gap-2.5">
    <span class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 grid place-items-center text-indigo-300"><i class="fa-solid fa-layer-group"></i></span>
    <span class="w-12 h-12 rounded-xl bg-indigo-500 grid place-items-center"><i class="fa-solid fa-bolt"></i></span>
    <span class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 grid place-items-center text-pink-300"><i class="fa-solid fa-heart"></i></span>
    <span class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 grid place-items-center text-amber-300"><i class="fa-solid fa-star"></i></span>
    <span class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 grid place-items-center text-emerald-300"><i class="fa-solid fa-chart-line"></i></span>
    <span class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 grid place-items-center text-sky-300"><i class="fa-solid fa-cloud"></i></span>
  </div>
</div>`,
    },
    {
      name: '職缺卡',
      en: 'Job Listing Card',
      tags: ['招募', '列表'],
      spec: [
        '左上為公司標誌方塊（字母或品牌圖示），右上為收藏書籤按鈕。',
        '職缺名稱、公司名稱與發布時間，下方以小膠囊顯示「全職」「遠端」「資深」等條件。',
        '底部為薪資範圍（粗體）與「應徵」按鈕，以分隔線隔開。',
      ],
      html: `<div class="w-80 p-5 rounded-2xl border border-line bg-surface shadow-sm hover:border-brand-500/40 transition">
  <div class="flex items-start justify-between">
    <span class="w-11 h-11 rounded-xl bg-zinc-900 text-white grid place-items-center font-bold">N</span>
    <button type="button" aria-label="收藏職缺" aria-pressed="false" onclick="UIK.flip(this)" data-on="text-brand-600" data-off="text-ink-faint" class="w-8 h-8 rounded-lg grid place-items-center text-ink-faint hover:bg-subtle"><i data-swap="fa-regular fa-solid" class="fa-regular fa-bookmark"></i></button>
  </div>
  <h4 class="mt-4 font-semibold text-ink">資深前端工程師</h4>
  <p class="mt-0.5 text-sm text-ink-faint">Nimbus Cloud · 3 天前</p>
  <div class="mt-3 flex flex-wrap gap-1.5 text-xs">
    <span class="px-2 py-1 rounded-md bg-subtle text-ink-soft"><i class="fa-solid fa-briefcase mr-1 text-[10px]"></i>全職</span>
    <span class="px-2 py-1 rounded-md bg-subtle text-ink-soft"><i class="fa-solid fa-house-laptop mr-1 text-[10px]"></i>遠端</span>
    <span class="px-2 py-1 rounded-md bg-subtle text-ink-soft"><i class="fa-solid fa-signal mr-1 text-[10px]"></i>資深</span>
  </div>
  <div class="mt-4 pt-4 border-t border-line flex items-center justify-between">
    <p class="text-sm"><span class="font-semibold text-ink">120 – 180 萬</span><span class="text-ink-faint"> / 年</span></p>
    <button type="button" class="h-8 px-3.5 rounded-lg bg-ink text-canvas text-xs font-medium hover:opacity-85">應徵</button>
  </div>
</div>`,
    },
    {
      name: '儲存空間升級卡',
      en: 'Usage Upsell Card',
      tags: ['用量', '升級'],
      spec: [
        '側邊欄底部常見的小卡：標題「儲存空間」與 fa-cloud 圖示，右上角關閉按鈕。',
        '用量進度條顯示已使用 8.2 GB / 10 GB（82%，接近上限時為琥珀色）。',
        '下方說明文字與「升級方案」文字連結按鈕，卡片為淡主色背景。',
      ],
      html: `<div data-dismiss class="w-64 p-4 rounded-2xl bg-brand-500/[.06] border border-brand-500/15">
  <div class="flex items-center justify-between">
    <span class="flex items-center gap-2 text-sm font-semibold text-ink"><i class="fa-solid fa-cloud text-brand-500"></i>儲存空間</span>
    <button type="button" onclick="UIK.dismiss(this)" aria-label="關閉" class="w-6 h-6 rounded grid place-items-center text-ink-faint hover:text-ink"><i class="fa-solid fa-xmark text-xs"></i></button>
  </div>
  <div class="mt-3 h-2 rounded-full bg-brand-500/15 overflow-hidden"><div class="h-full w-[82%] rounded-full bg-gradient-to-r from-brand-500 to-amber-500"></div></div>
  <p class="mt-2 text-xs text-ink-soft"><span class="font-semibold text-ink">8.2 GB</span> / 10 GB 已使用</p>
  <p class="mt-3 text-xs text-ink-faint leading-relaxed">空間即將用盡，升級後可享 100 GB 與版本歷史。</p>
  <button type="button" class="mt-3 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline">升級方案 <i class="fa-solid fa-arrow-right text-[10px] ml-0.5"></i></button>
</div>`,
    },
  ],
});
