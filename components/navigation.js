(window.UI_ATLAS = window.UI_ATLAS || []).push({
  id: 'navigation',
  name: '導覽',
  en: 'Navigation',
  icon: 'fa-regular fa-compass',
  desc: '頂部導覽列、側邊欄、麵包屑、分頁器、步驟指示器、行動版底部列與 Dock，引導使用者在介面中移動。',
  items: [
    {
      name: '頂部導覽列',
      en: 'Top Navbar',
      tags: ['Header', '桌面'],
      wide: true,
      spec: [
        '高度 60px 的白底導覽列，左側為品牌標誌與名稱，中間為 4 個導覽連結（目前頁面為深色粗體並有底部 2px 指示線）。',
        '右側為搜尋圖示按鈕、帶紅點的通知鈴鐺 fa-bell，以及使用者頭像。',
        '下緣 1px 分隔線，窄螢幕時中間連結收合為漢堡選單 fa-bars。',
      ],
      html: `<nav class="w-full max-w-3xl h-[60px] px-5 rounded-2xl border border-line bg-surface shadow-sm flex items-center gap-6">
  <a href="#" onclick="return false" class="flex items-center gap-2 font-semibold text-ink"><span class="w-7 h-7 rounded-lg bg-brand-600 text-white grid place-items-center text-xs"><i class="fa-solid fa-cube"></i></span>Nova</a>
  <div class="hidden sm:flex h-full items-center gap-5 text-sm">
    <a href="#" onclick="return false" class="relative h-full flex items-center font-medium text-ink after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-ink">總覽</a>
    <a href="#" onclick="return false" class="text-ink-soft hover:text-ink transition">專案</a>
    <a href="#" onclick="return false" class="text-ink-soft hover:text-ink transition">團隊</a>
    <a href="#" onclick="return false" class="text-ink-soft hover:text-ink transition">報表</a>
  </div>
  <div class="ml-auto flex items-center gap-1">
    <button type="button" aria-label="搜尋" class="w-9 h-9 rounded-lg grid place-items-center text-ink-soft hover:bg-subtle"><i class="fa-solid fa-magnifying-glass text-sm"></i></button>
    <button type="button" aria-label="通知" class="relative w-9 h-9 rounded-lg grid place-items-center text-ink-soft hover:bg-subtle"><i class="fa-regular fa-bell"></i><span class="absolute top-2 right-2.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-surface"></span></button>
    <span class="ml-2 w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 text-white grid place-items-center text-xs font-semibold">YT</span>
    <button type="button" aria-label="選單" class="sm:hidden w-9 h-9 rounded-lg grid place-items-center text-ink-soft hover:bg-subtle"><i class="fa-solid fa-bars"></i></button>
  </div>
</nav>`,
    },
    {
      name: '懸浮膠囊導覽',
      en: 'Floating Pill Nav',
      tags: ['玻璃', '滑動指示'],
      spec: [
        '置中懸浮的膠囊導覽列，背景白色 70% 與 backdrop-blur，邊框 1px 並有柔和陰影。',
        '目前選取項目下方為深色膠囊滑塊，點擊其他連結時滑塊依寬度平滑移動，選取文字反白。',
        '右端為主色「免費試用」小按鈕。',
      ],
      html: `<nav class="flex items-center gap-1 p-1.5 rounded-full border border-line bg-surface/70 backdrop-blur-xl shadow-soft">
  <div data-pick data-on="text-canvas" data-off="text-ink-soft" class="relative flex text-sm font-medium">
    <span data-indicator="x" class="absolute top-0 bottom-0 rounded-full bg-ink transition-all duration-300 ease-out"></span>
    <button type="button" data-item aria-selected="true" onclick="UIK.pick(this)" class="relative z-10 h-9 px-3 sm:px-4 rounded-full whitespace-nowrap text-canvas transition-colors">首頁</button>
    <button type="button" data-item onclick="UIK.pick(this)" class="relative z-10 h-9 px-3 sm:px-4 rounded-full whitespace-nowrap text-ink-soft transition-colors">產品功能</button>
    <button type="button" data-item onclick="UIK.pick(this)" class="relative z-10 h-9 px-3 sm:px-4 rounded-full whitespace-nowrap text-ink-soft transition-colors">價格</button>
    <button type="button" data-item onclick="UIK.pick(this)" class="relative z-10 h-9 px-3 sm:px-4 rounded-full whitespace-nowrap text-ink-soft transition-colors">部落格</button>
  </div>
  <button type="button" class="h-9 px-4 rounded-full whitespace-nowrap bg-brand-600 text-white text-sm font-medium hover:bg-brand-500">免費試用</button>
</nav>`,
    },
    {
      name: '應用側邊欄',
      en: 'App Sidebar',
      tags: ['側欄', '後台'],
      spec: [
        '寬 240px 的側邊欄：頂部工作區名稱與切換箭頭、搜尋框，接著為主要導覽清單。',
        '清單項目高度 36px、圖示 + 文字，目前項目為淺灰底、深色文字；「收件匣」右側顯示數字徽章。',
        '下方以小標題分組「專案」，每個專案前有彩色方點；底部為使用者資訊列。',
      ],
      html: `<aside class="w-60 p-3 rounded-2xl border border-line bg-surface shadow-sm text-sm">
  <button type="button" class="w-full flex items-center gap-2.5 p-1.5 rounded-lg hover:bg-subtle"><span class="w-7 h-7 rounded-lg bg-ink text-canvas grid place-items-center text-xs font-bold">A</span><span class="flex-1 text-left font-semibold text-ink">Acme 設計部</span><i class="fa-solid fa-chevron-down text-[10px] text-ink-faint"></i></button>
  <nav class="mt-3 space-y-0.5" data-pick data-on="bg-subtle text-ink font-medium" data-off="text-ink-soft">
    <a href="#" onclick="UIK.pick(this);return false" data-item aria-selected="true" class="flex items-center gap-3 h-9 px-2.5 rounded-lg bg-subtle text-ink font-medium hover:bg-subtle"><i class="fa-solid fa-house w-4 text-center text-xs"></i>首頁</a>
    <a href="#" onclick="UIK.pick(this);return false" data-item class="flex items-center gap-3 h-9 px-2.5 rounded-lg text-ink-soft hover:bg-subtle"><i class="fa-solid fa-inbox w-4 text-center text-xs"></i><span class="flex-1">收件匣</span><span class="px-1.5 rounded-md bg-brand-600 text-white text-[10px] font-semibold leading-5">12</span></a>
    <a href="#" onclick="UIK.pick(this);return false" data-item class="flex items-center gap-3 h-9 px-2.5 rounded-lg text-ink-soft hover:bg-subtle"><i class="fa-regular fa-calendar w-4 text-center text-xs"></i>行事曆</a>
    <a href="#" onclick="UIK.pick(this);return false" data-item class="flex items-center gap-3 h-9 px-2.5 rounded-lg text-ink-soft hover:bg-subtle"><i class="fa-solid fa-chart-pie w-4 text-center text-xs"></i>報表</a>
  </nav>
  <p class="mt-5 mb-1.5 px-2.5 text-[11px] font-semibold uppercase tracking-wider text-ink-faint">專案</p>
  <div class="space-y-0.5 text-ink-soft">
    <a href="#" onclick="return false" class="flex items-center gap-3 h-8 px-2.5 rounded-lg hover:bg-subtle"><span class="w-2 h-2 rounded-sm bg-emerald-500"></span>官網改版</a>
    <a href="#" onclick="return false" class="flex items-center gap-3 h-8 px-2.5 rounded-lg hover:bg-subtle"><span class="w-2 h-2 rounded-sm bg-amber-500"></span>行動 App</a>
  </div>
  <div class="mt-4 pt-3 border-t border-line flex items-center gap-2.5 px-1.5">
    <span class="w-8 h-8 rounded-full bg-rose-400 text-white grid place-items-center text-xs font-semibold">周</span>
    <span class="flex-1 min-w-0"><span class="block text-[13px] font-medium text-ink">周品妤</span><span class="block text-[11px] text-ink-faint truncate">pinyu@acme.tw</span></span>
    <i class="fa-solid fa-ellipsis-vertical text-ink-faint"></i>
  </div>
</aside>`,
    },
    {
      name: '圖示軌道側欄',
      en: 'Icon Rail',
      tags: ['精簡', '側欄'],
      spec: [
        '寬 64px 的垂直圖示軌道，頂部為品牌標誌，中間為 5 個 40px 圖示按鈕，底部為設定與頭像。',
        '目前項目為主色淡底、主色圖示，左側有 3px 主色指示條。',
        'hover 時右側浮現深色文字提示（tooltip）。',
      ],
      html: `<nav class="w-16 py-4 rounded-2xl border border-line bg-surface shadow-sm flex flex-col items-center gap-1.5">
  <span class="mb-3 w-9 h-9 rounded-xl bg-ink text-canvas grid place-items-center"><i class="fa-solid fa-bolt"></i></span>
  <div data-pick data-on="bg-brand-500/10 text-brand-600 dark:text-brand-400 before:opacity-100" data-off="text-ink-faint before:opacity-0" class="flex flex-col gap-1.5">
    <button type="button" data-item aria-selected="true" onclick="UIK.pick(this)" aria-label="儀表板" class="group relative w-10 h-10 rounded-xl grid place-items-center bg-brand-500/10 text-brand-600 dark:text-brand-400 before:opacity-100 before:absolute before:-left-3 before:top-2 before:bottom-2 before:w-[3px] before:rounded-r before:bg-brand-600 hover:bg-subtle transition"><i class="fa-solid fa-table-columns"></i><span class="pointer-events-none absolute left-14 px-2 py-1 rounded-md bg-ink text-canvas text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition">儀表板</span></button>
    <button type="button" data-item onclick="UIK.pick(this)" aria-label="訊息" class="group relative w-10 h-10 rounded-xl grid place-items-center text-ink-faint before:opacity-0 before:absolute before:-left-3 before:top-2 before:bottom-2 before:w-[3px] before:rounded-r before:bg-brand-600 hover:bg-subtle transition"><i class="fa-regular fa-comments"></i><span class="pointer-events-none absolute left-14 px-2 py-1 rounded-md bg-ink text-canvas text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition">訊息</span></button>
    <button type="button" data-item onclick="UIK.pick(this)" aria-label="檔案" class="group relative w-10 h-10 rounded-xl grid place-items-center text-ink-faint before:opacity-0 before:absolute before:-left-3 before:top-2 before:bottom-2 before:w-[3px] before:rounded-r before:bg-brand-600 hover:bg-subtle transition"><i class="fa-regular fa-folder"></i><span class="pointer-events-none absolute left-14 px-2 py-1 rounded-md bg-ink text-canvas text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition">檔案</span></button>
    <button type="button" data-item onclick="UIK.pick(this)" aria-label="成員" class="group relative w-10 h-10 rounded-xl grid place-items-center text-ink-faint before:opacity-0 before:absolute before:-left-3 before:top-2 before:bottom-2 before:w-[3px] before:rounded-r before:bg-brand-600 hover:bg-subtle transition"><i class="fa-solid fa-user-group"></i><span class="pointer-events-none absolute left-14 px-2 py-1 rounded-md bg-ink text-canvas text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition">成員</span></button>
  </div>
  <div class="mt-6 w-8 h-px bg-line"></div>
  <button type="button" aria-label="設定" class="mt-1.5 w-10 h-10 rounded-xl grid place-items-center text-ink-faint hover:bg-subtle"><i class="fa-solid fa-gear"></i></button>
  <span class="w-8 h-8 rounded-full bg-amber-400 text-white grid place-items-center text-xs font-semibold">許</span>
</nav>`,
    },
    {
      name: '麵包屑',
      en: 'Breadcrumbs',
      tags: ['層級', '路徑'],
      spec: [
        '兩種樣式：第一種以 fa-chevron-right 分隔，首項為 fa-house 圖示，最後一項為深色不可點擊（aria-current="page"）。',
        '第二種為膠囊背景樣式，中間層級過多時以「…」收合按鈕代替。',
        '連結文字 13px 灰色，hover 時變深。',
      ],
      html: `<div class="space-y-5">
  <nav aria-label="麵包屑"><ol class="flex items-center gap-2 text-[13px] text-ink-faint">
    <li><a href="#" onclick="return false" class="hover:text-ink" aria-label="首頁"><i class="fa-solid fa-house text-xs"></i></a></li>
    <li><i class="fa-solid fa-chevron-right text-[9px]"></i></li>
    <li><a href="#" onclick="return false" class="hover:text-ink">專案</a></li>
    <li><i class="fa-solid fa-chevron-right text-[9px]"></i></li>
    <li><a href="#" onclick="return false" class="hover:text-ink">官網改版</a></li>
    <li><i class="fa-solid fa-chevron-right text-[9px]"></i></li>
    <li aria-current="page" class="font-medium text-ink">設計規格</li>
  </ol></nav>
  <nav aria-label="麵包屑"><ol class="inline-flex items-center gap-1 p-1 rounded-full bg-subtle text-[13px] text-ink-soft">
    <li><a href="#" onclick="return false" class="px-2.5 h-7 rounded-full grid place-items-center hover:bg-surface hover:text-ink">文件</a></li>
    <li class="text-ink-faint">/</li>
    <li><button type="button" aria-label="展開路徑" class="px-2 h-7 rounded-full hover:bg-surface hover:text-ink"><i class="fa-solid fa-ellipsis text-xs"></i></button></li>
    <li class="text-ink-faint">/</li>
    <li aria-current="page" class="px-2.5 h-7 rounded-full grid place-items-center bg-surface text-ink font-medium shadow-sm">API 參考</li>
  </ol></nav>
</div>`,
    },
    {
      name: '數字分頁器',
      en: 'Numbered Pagination',
      tags: ['分頁', '表格'],
      spec: [
        '左右為「上一頁 / 下一頁」文字按鈕（附箭頭圖示），中間為頁碼按鈕 36×36。',
        '目前頁碼為深色實心、其他為透明 hover 淺灰；頁數過多時以 fa-ellipsis 省略。',
        '第一頁時「上一頁」為停用狀態。點擊頁碼可切換目前頁。',
      ],
      html: `<nav class="flex items-center gap-1 text-sm" aria-label="分頁">
  <button type="button" class="h-9 px-3 rounded-lg flex items-center gap-2 text-ink-soft hover:bg-subtle"><i class="fa-solid fa-arrow-left text-xs"></i>上一頁</button>
  <div data-pick data-on="bg-ink text-canvas font-semibold" data-off="text-ink-soft hover:bg-subtle" class="flex gap-1 tabular-nums">
    <button type="button" data-item onclick="UIK.pick(this)" class="w-9 h-9 rounded-lg text-ink-soft hover:bg-subtle">1</button>
    <button type="button" data-item onclick="UIK.pick(this)" class="w-9 h-9 rounded-lg text-ink-soft hover:bg-subtle">2</button>
    <button type="button" data-item aria-selected="true" onclick="UIK.pick(this)" class="w-9 h-9 rounded-lg bg-ink text-canvas font-semibold">3</button>
    <button type="button" data-item onclick="UIK.pick(this)" class="w-9 h-9 rounded-lg text-ink-soft hover:bg-subtle">4</button>
    <span class="w-9 h-9 grid place-items-center text-ink-faint"><i class="fa-solid fa-ellipsis text-xs"></i></span>
    <button type="button" data-item onclick="UIK.pick(this)" class="w-9 h-9 rounded-lg text-ink-soft hover:bg-subtle">12</button>
  </div>
  <button type="button" class="h-9 px-3 rounded-lg flex items-center gap-2 text-ink-soft hover:bg-subtle">下一頁<i class="fa-solid fa-arrow-right text-xs"></i></button>
</nav>`,
    },
    {
      name: '簡易分頁列',
      en: 'Compact Pagination',
      tags: ['分頁', '表格底部'],
      spec: [
        '表格底部常見的分頁列：左側顯示「第 21–30 筆，共 248 筆」，中間為每頁筆數下拉。',
        '右側為兩個相連的方形箭頭按鈕（fa-chevron-left / fa-chevron-right）與「第 3 / 25 頁」。',
        '整列寬 560px，以上方 1px 分隔線與表格區隔。',
      ],
      html: `<div class="w-[560px] max-w-full flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-line text-[13px] text-ink-soft">
  <span>第 <span class="font-medium text-ink">21–30</span> 筆，共 <span class="font-medium text-ink">248</span> 筆</span>
  <div class="flex items-center gap-4">
    <label class="flex items-center gap-2">每頁<select class="h-8 px-2 rounded-lg border border-line bg-surface text-ink focus:outline-none"><option>10</option><option>25</option><option>50</option></select></label>
    <span>第 3 / 25 頁</span>
    <div class="inline-flex rounded-lg border border-line bg-surface divide-x divide-line shadow-sm">
      <button type="button" aria-label="上一頁" class="w-8 h-8 grid place-items-center hover:bg-subtle rounded-l-lg"><i class="fa-solid fa-chevron-left text-[11px]"></i></button>
      <button type="button" aria-label="下一頁" class="w-8 h-8 grid place-items-center hover:bg-subtle rounded-r-lg"><i class="fa-solid fa-chevron-right text-[11px]"></i></button>
    </div>
  </div>
</div>`,
    },
    {
      name: '水平步驟指示器',
      en: 'Horizontal Stepper',
      tags: ['步驟', '結帳'],
      spec: [
        '四個步驟水平排列，步驟之間以連接線相連；已完成步驟為主色圓形加 fa-check，連接線為主色。',
        '目前步驟為白底主色邊框並在外圍加上 4px 淡主色光環，未開始步驟為灰色邊框數字。',
        '圓形下方為步驟名稱與小字說明。',
      ],
      html: `<ol class="w-full max-w-xl flex items-start">
  <li class="flex-1 flex flex-col items-center text-center relative after:absolute after:top-4 after:left-[calc(50%+20px)] after:right-[calc(-50%+20px)] after:h-0.5 after:bg-brand-600"><span class="w-8 h-8 rounded-full bg-brand-600 text-white grid place-items-center text-xs"><i class="fa-solid fa-check"></i></span><span class="mt-2 text-[13px] font-medium text-ink">購物車</span><span class="text-[11px] text-ink-faint">已完成</span></li>
  <li class="flex-1 flex flex-col items-center text-center relative after:absolute after:top-4 after:left-[calc(50%+20px)] after:right-[calc(-50%+20px)] after:h-0.5 after:bg-line"><span class="w-8 h-8 rounded-full bg-brand-600 text-white grid place-items-center text-xs"><i class="fa-solid fa-check"></i></span><span class="mt-2 text-[13px] font-medium text-ink">配送資訊</span><span class="text-[11px] text-ink-faint">已完成</span></li>
  <li aria-current="step" class="flex-1 flex flex-col items-center text-center relative after:absolute after:top-4 after:left-[calc(50%+20px)] after:right-[calc(-50%+20px)] after:h-0.5 after:bg-line"><span class="w-8 h-8 rounded-full bg-surface border-2 border-brand-600 ring-4 ring-brand-500/15 text-brand-600 grid place-items-center text-xs font-semibold">3</span><span class="mt-2 text-[13px] font-semibold text-brand-600 dark:text-brand-400">付款</span><span class="text-[11px] text-ink-faint">進行中</span></li>
  <li class="flex-1 flex flex-col items-center text-center"><span class="w-8 h-8 rounded-full bg-surface border-2 border-line text-ink-faint grid place-items-center text-xs font-semibold">4</span><span class="mt-2 text-[13px] font-medium text-ink-faint">確認訂單</span><span class="text-[11px] text-ink-faint">尚未開始</span></li>
</ol>`,
    },
    {
      name: '垂直時間軸步驟',
      en: 'Vertical Stepper',
      tags: ['時間軸', '進度'],
      spec: [
        '垂直排列的步驟，左側圓形節點以垂直線串連：完成為 emerald 實心 fa-check、進行中為主色帶脈衝動畫的圓點、待處理為灰框。',
        '右側為步驟標題、時間與說明；進行中步驟的說明區塊有淡主色背景。',
        '適合用在訂單追蹤或入門引導。',
      ],
      html: `<ol class="w-80 relative">
  <li class="relative pl-10 pb-6 before:absolute before:left-[13px] before:top-7 before:bottom-0 before:w-0.5 before:bg-emerald-500">
    <span class="absolute left-0 top-0 w-7 h-7 rounded-full bg-emerald-500 text-white grid place-items-center text-[11px]"><i class="fa-solid fa-check"></i></span>
    <p class="text-sm font-semibold text-ink">訂單已成立</p><p class="text-xs text-ink-faint">11/01 14:20</p>
  </li>
  <li class="relative pl-10 pb-6 before:absolute before:left-[13px] before:top-7 before:bottom-0 before:w-0.5 before:bg-line">
    <span class="absolute left-0 top-0 w-7 h-7 rounded-full bg-brand-500/15 grid place-items-center"><span class="relative w-2.5 h-2.5 rounded-full bg-brand-600"><span class="absolute inset-0 rounded-full bg-brand-500 animate-ping"></span></span></span>
    <p class="text-sm font-semibold text-brand-600 dark:text-brand-400">配送中</p><p class="text-xs text-ink-faint">預計 11/04 送達</p>
    <p class="mt-2 p-2.5 rounded-lg bg-brand-500/[.06] text-xs text-ink-soft"><i class="fa-solid fa-truck-fast mr-1.5 text-brand-500"></i>包裹已抵達台中轉運中心</p>
  </li>
  <li class="relative pl-10">
    <span class="absolute left-0 top-0 w-7 h-7 rounded-full border-2 border-line bg-surface"></span>
    <p class="text-sm font-medium text-ink-faint">已送達</p><p class="text-xs text-ink-faint">等待中</p>
  </li>
</ol>`,
    },
    {
      name: '行動版底部標籤列',
      en: 'Mobile Bottom Tab Bar',
      tags: ['行動版', 'App'],
      spec: [
        '手機寬度（360px）的底部導覽列，五個項目平均分佈，每項為圖示與 10px 文字。',
        '中間為凸起的圓形主色「新增」按鈕，帶主色陰影。',
        '選取項目圖示由外框變為實心並轉為深色，頂部有小圓點指示。',
      ],
      html: `<nav class="w-[360px] max-w-full h-16 px-2 rounded-[22px] border border-line bg-surface shadow-lift grid grid-cols-5 items-center">
  <div data-pick data-on="text-ink" data-off="text-ink-faint" class="contents">
    <button type="button" data-item aria-selected="true" onclick="UIK.pick(this)" class="flex flex-col items-center gap-1 text-ink"><i class="fa-solid fa-house"></i><span class="text-[10px] font-medium">首頁</span></button>
    <button type="button" data-item onclick="UIK.pick(this)" class="flex flex-col items-center gap-1 text-ink-faint"><i class="fa-solid fa-compass"></i><span class="text-[10px] font-medium">探索</span></button>
    <span class="flex justify-center"><button type="button" aria-label="新增" class="-mt-8 w-14 h-14 rounded-full bg-brand-600 text-white text-lg shadow-lg shadow-brand-600/40 ring-4 ring-canvas grid place-items-center"><i class="fa-solid fa-plus"></i></button></span>
    <button type="button" data-item onclick="UIK.pick(this)" class="relative flex flex-col items-center gap-1 text-ink-faint"><i class="fa-solid fa-comment"></i><span class="absolute -top-1 right-5 w-2 h-2 rounded-full bg-rose-500"></span><span class="text-[10px] font-medium">訊息</span></button>
    <button type="button" data-item onclick="UIK.pick(this)" class="flex flex-col items-center gap-1 text-ink-faint"><i class="fa-solid fa-user"></i><span class="text-[10px] font-medium">我的</span></button>
  </div>
</nav>`,
    },
    {
      name: 'Dock 工具列',
      en: 'Dock Toolbar',
      tags: ['macOS', 'hover 放大'],
      spec: [
        '底部置中的玻璃質感 Dock，白色 60% 背景、backdrop-blur、圓角 22px。',
        '內含 6 個 44px 彩色圓角方塊應用圖示，hover 時放大 125% 並上移 8px，相鄰圖示也微微放大。',
        '執行中的應用下方顯示小圓點，hover 時上方浮現名稱提示。',
      ],
      html: `<div class="flex items-end gap-2 h-[68px] px-3 pb-3 rounded-[22px] border border-white/40 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-lift">
  <button type="button" aria-label="訊息" class="group relative w-11 h-11 rounded-xl bg-gradient-to-b from-emerald-400 to-emerald-600 text-white grid place-items-center transition-all duration-200 hover:scale-125 hover:-translate-y-2 [&:hover+*]:scale-110 origin-bottom"><i class="fa-solid fa-message"></i><span class="absolute -bottom-2 w-1 h-1 rounded-full bg-ink-soft"></span><span class="pointer-events-none absolute -top-9 px-2 py-0.5 rounded-md bg-ink text-canvas text-[10px] opacity-0 group-hover:opacity-100 whitespace-nowrap">訊息</span></button>
  <button type="button" aria-label="郵件" class="group relative w-11 h-11 rounded-xl bg-gradient-to-b from-sky-400 to-blue-600 text-white grid place-items-center transition-all duration-200 hover:scale-125 hover:-translate-y-2 [&:hover+*]:scale-110 origin-bottom"><i class="fa-solid fa-envelope"></i><span class="pointer-events-none absolute -top-9 px-2 py-0.5 rounded-md bg-ink text-canvas text-[10px] opacity-0 group-hover:opacity-100 whitespace-nowrap">郵件</span></button>
  <button type="button" aria-label="音樂" class="group relative w-11 h-11 rounded-xl bg-gradient-to-b from-rose-400 to-pink-600 text-white grid place-items-center transition-all duration-200 hover:scale-125 hover:-translate-y-2 [&:hover+*]:scale-110 origin-bottom"><i class="fa-solid fa-music"></i><span class="absolute -bottom-2 w-1 h-1 rounded-full bg-ink-soft"></span><span class="pointer-events-none absolute -top-9 px-2 py-0.5 rounded-md bg-ink text-canvas text-[10px] opacity-0 group-hover:opacity-100 whitespace-nowrap">音樂</span></button>
  <button type="button" aria-label="相片" class="group relative w-11 h-11 rounded-xl bg-gradient-to-b from-amber-300 to-orange-500 text-white grid place-items-center transition-all duration-200 hover:scale-125 hover:-translate-y-2 [&:hover+*]:scale-110 origin-bottom"><i class="fa-solid fa-image"></i><span class="pointer-events-none absolute -top-9 px-2 py-0.5 rounded-md bg-ink text-canvas text-[10px] opacity-0 group-hover:opacity-100 whitespace-nowrap">相片</span></button>
  <button type="button" aria-label="終端機" class="group relative w-11 h-11 rounded-xl bg-gradient-to-b from-zinc-600 to-zinc-900 text-white grid place-items-center transition-all duration-200 hover:scale-125 hover:-translate-y-2 [&:hover+*]:scale-110 origin-bottom"><i class="fa-solid fa-terminal text-sm"></i><span class="absolute -bottom-2 w-1 h-1 rounded-full bg-ink-soft"></span><span class="pointer-events-none absolute -top-9 px-2 py-0.5 rounded-md bg-ink text-canvas text-[10px] opacity-0 group-hover:opacity-100 whitespace-nowrap">終端機</span></button>
  <span class="w-px h-10 bg-line mx-0.5"></span>
  <button type="button" aria-label="垃圾桶" class="group relative w-11 h-11 rounded-xl bg-gradient-to-b from-zinc-100 to-zinc-300 text-zinc-600 grid place-items-center transition-all duration-200 hover:scale-125 hover:-translate-y-2 origin-bottom"><i class="fa-solid fa-trash-can"></i><span class="pointer-events-none absolute -top-9 px-2 py-0.5 rounded-md bg-ink text-canvas text-[10px] opacity-0 group-hover:opacity-100 whitespace-nowrap">垃圾桶</span></button>
</div>`,
    },
    {
      name: '大型下拉選單',
      en: 'Mega Menu',
      tags: ['Mega Menu', '官網'],
      wide: true,
      spec: [
        '從導覽列「產品」展開的大型面板，左側兩欄為功能項目，每項有彩色圖示方塊、標題與一行說明。',
        '右側為淡灰底的精選區塊：小標「最新消息」、一張漸層縮圖卡與文章標題。',
        '面板底部為一條淺灰列，放置「查看所有功能」與「聯絡業務」連結。',
      ],
      html: `<div class="w-full max-w-3xl rounded-2xl border border-line bg-surface shadow-lift overflow-hidden">
  <div class="grid md:grid-cols-[1fr_1fr_240px]">
    <div class="p-4 space-y-1">
      <a href="#" onclick="return false" class="flex gap-3 p-3 rounded-xl hover:bg-subtle"><span class="w-9 h-9 shrink-0 rounded-lg bg-brand-500/10 text-brand-600 grid place-items-center"><i class="fa-solid fa-chart-line"></i></span><span><span class="block text-sm font-semibold text-ink">數據分析</span><span class="block text-xs text-ink-faint">即時掌握每個關鍵指標</span></span></a>
      <a href="#" onclick="return false" class="flex gap-3 p-3 rounded-xl hover:bg-subtle"><span class="w-9 h-9 shrink-0 rounded-lg bg-emerald-500/10 text-emerald-600 grid place-items-center"><i class="fa-solid fa-robot"></i></span><span><span class="block text-sm font-semibold text-ink">自動化流程</span><span class="block text-xs text-ink-faint">免寫程式串接工作流</span></span></a>
    </div>
    <div class="p-4 space-y-1">
      <a href="#" onclick="return false" class="flex gap-3 p-3 rounded-xl hover:bg-subtle"><span class="w-9 h-9 shrink-0 rounded-lg bg-amber-500/10 text-amber-600 grid place-items-center"><i class="fa-solid fa-shield-halved"></i></span><span><span class="block text-sm font-semibold text-ink">資安防護</span><span class="block text-xs text-ink-faint">企業級權限與稽核</span></span></a>
      <a href="#" onclick="return false" class="flex gap-3 p-3 rounded-xl hover:bg-subtle"><span class="w-9 h-9 shrink-0 rounded-lg bg-pink-500/10 text-pink-600 grid place-items-center"><i class="fa-solid fa-puzzle-piece"></i></span><span><span class="block text-sm font-semibold text-ink">整合市集</span><span class="block text-xs text-ink-faint">超過 200 種應用</span></span></a>
    </div>
    <div class="p-4 bg-subtle/70 border-l border-line hidden md:block">
      <p class="text-[11px] font-semibold uppercase tracking-wider text-ink-faint">最新消息</p>
      <div class="mt-3 aspect-video rounded-lg bg-gradient-to-br from-indigo-400 to-fuchsia-400 grid place-items-center"><i class="fa-solid fa-wand-magic-sparkles text-white text-xl"></i></div>
      <p class="mt-2.5 text-sm font-semibold text-ink leading-snug">AI 助理正式上線：自動生成週報</p>
    </div>
  </div>
  <div class="px-6 py-3 border-t border-line bg-subtle/50 flex items-center justify-between text-[13px]">
    <a href="#" onclick="return false" class="font-medium text-ink hover:underline">查看所有功能 <i class="fa-solid fa-arrow-right text-[10px] ml-1"></i></a>
    <a href="#" onclick="return false" class="text-ink-soft hover:text-ink"><i class="fa-solid fa-headset mr-1.5"></i>聯絡業務</a>
  </div>
</div>`,
    },
    {
      name: '頁內目錄',
      en: 'Table of Contents',
      tags: ['文件', '錨點'],
      spec: [
        '文件頁右側的「本頁內容」目錄，標題附 fa-list-ul 圖示。',
        '項目左側有一條 1px 灰色垂直線，目前閱讀的段落為主色文字並以 2px 主色線覆蓋在灰線上。',
        '子層項目縮排 12px、字級較小；底部附「回到頂端」連結。',
      ],
      html: `<nav class="w-56 text-[13px]">
  <p class="mb-3 flex items-center gap-2 font-semibold text-ink"><i class="fa-solid fa-list-ul text-xs text-ink-faint"></i>本頁內容</p>
  <ul data-pick data-on="text-brand-600 dark:text-brand-400 font-medium border-brand-600" data-off="text-ink-soft border-transparent" class="border-l border-line space-y-0.5">
    <li><a href="#" onclick="UIK.pick(this);return false" data-item class="-ml-px block py-1 pl-3 border-l-2 border-transparent text-ink-soft hover:text-ink">安裝</a></li>
    <li><a href="#" onclick="UIK.pick(this);return false" data-item aria-selected="true" class="-ml-px block py-1 pl-3 border-l-2 text-brand-600 dark:text-brand-400 font-medium border-brand-600">設定主題</a></li>
    <li><a href="#" onclick="UIK.pick(this);return false" data-item class="-ml-px block py-1 pl-6 border-l-2 border-transparent text-ink-soft hover:text-ink text-xs">色彩 Token</a></li>
    <li><a href="#" onclick="UIK.pick(this);return false" data-item class="-ml-px block py-1 pl-6 border-l-2 border-transparent text-ink-soft hover:text-ink text-xs">字體設定</a></li>
    <li><a href="#" onclick="UIK.pick(this);return false" data-item class="-ml-px block py-1 pl-3 border-l-2 border-transparent text-ink-soft hover:text-ink">元件使用</a></li>
    <li><a href="#" onclick="UIK.pick(this);return false" data-item class="-ml-px block py-1 pl-3 border-l-2 border-transparent text-ink-soft hover:text-ink">常見問題</a></li>
  </ul>
  <a href="#" onclick="return false" class="mt-4 inline-flex items-center gap-1.5 text-xs text-ink-faint hover:text-ink"><i class="fa-solid fa-arrow-up text-[10px]"></i>回到頂端</a>
</nav>`,
    },
    {
      name: '網站頁尾',
      en: 'Site Footer',
      tags: ['Footer', '官網'],
      wide: true,
      spec: [
        '多欄頁尾：左側為品牌標誌、一句簡介與社群圖示（fa-brands x-twitter、github、linkedin、youtube）。',
        '右側三欄連結群組（產品、資源、公司），欄標題為 12px 大寫灰色。',
        '底部以分隔線隔開版權文字與語言切換按鈕 fa-globe。',
      ],
      html: `<footer class="w-full max-w-3xl p-8 rounded-2xl border border-line bg-surface">
  <div class="grid grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-8">
    <div class="col-span-2 md:col-span-1">
      <a href="#" onclick="return false" class="flex items-center gap-2 font-semibold text-ink"><span class="w-7 h-7 rounded-lg bg-ink text-canvas grid place-items-center text-xs"><i class="fa-solid fa-cube"></i></span>Nova</a>
      <p class="mt-3 text-sm text-ink-soft max-w-[220px]">為現代團隊打造的協作平台。</p>
      <div class="mt-4 flex gap-2 text-ink-faint">
        <a href="#" onclick="return false" aria-label="X" class="w-8 h-8 rounded-lg grid place-items-center hover:bg-subtle hover:text-ink"><i class="fa-brands fa-x-twitter"></i></a>
        <a href="#" onclick="return false" aria-label="GitHub" class="w-8 h-8 rounded-lg grid place-items-center hover:bg-subtle hover:text-ink"><i class="fa-brands fa-github"></i></a>
        <a href="#" onclick="return false" aria-label="LinkedIn" class="w-8 h-8 rounded-lg grid place-items-center hover:bg-subtle hover:text-ink"><i class="fa-brands fa-linkedin"></i></a>
        <a href="#" onclick="return false" aria-label="YouTube" class="w-8 h-8 rounded-lg grid place-items-center hover:bg-subtle hover:text-ink"><i class="fa-brands fa-youtube"></i></a>
      </div>
    </div>
    <div><p class="text-xs font-semibold uppercase tracking-wider text-ink-faint">產品</p><ul class="mt-3 space-y-2 text-sm text-ink-soft"><li><a href="#" onclick="return false" class="hover:text-ink">功能</a></li><li><a href="#" onclick="return false" class="hover:text-ink">價格</a></li><li><a href="#" onclick="return false" class="hover:text-ink">更新日誌</a></li></ul></div>
    <div><p class="text-xs font-semibold uppercase tracking-wider text-ink-faint">資源</p><ul class="mt-3 space-y-2 text-sm text-ink-soft"><li><a href="#" onclick="return false" class="hover:text-ink">文件</a></li><li><a href="#" onclick="return false" class="hover:text-ink">部落格</a></li><li><a href="#" onclick="return false" class="hover:text-ink">社群</a></li></ul></div>
    <div><p class="text-xs font-semibold uppercase tracking-wider text-ink-faint">公司</p><ul class="mt-3 space-y-2 text-sm text-ink-soft"><li><a href="#" onclick="return false" class="hover:text-ink">關於我們</a></li><li><a href="#" onclick="return false" class="hover:text-ink">徵才</a></li><li><a href="#" onclick="return false" class="hover:text-ink">聯絡</a></li></ul></div>
  </div>
  <div class="mt-8 pt-5 border-t border-line flex flex-wrap items-center justify-between gap-3 text-xs text-ink-faint">
    <span>© 2026 Nova Inc. 保留所有權利。</span>
    <button type="button" class="h-8 px-3 rounded-lg border border-line text-ink-soft hover:text-ink"><i class="fa-solid fa-globe mr-1.5"></i>繁體中文</button>
  </div>
</footer>`,
    },
    {
      name: '公告列',
      en: 'Announcement Bar',
      tags: ['公告', '頂部'],
      wide: true,
      spec: [
        '頁面最上方的細長公告列，背景為深色，中央為「NEW」小膠囊徽章、公告文字與箭頭連結。',
        '右側為關閉按鈕 fa-xmark，點擊後公告列淡出。',
        '下方另一個淺色變體：主色淡底、主色文字，搭配 fa-gift 圖示。',
      ],
      html: `<div class="w-full max-w-3xl space-y-3">
  <div data-dismiss class="relative h-10 px-10 rounded-xl bg-zinc-900 text-white text-[13px] flex items-center justify-center gap-3">
    <span class="px-1.5 py-px rounded bg-white/15 text-[10px] font-bold tracking-wider">NEW</span>
    <span>2.0 版正式推出：全新編輯器與 AI 協作功能</span>
    <a href="#" onclick="return false" class="font-medium underline-offset-2 hover:underline">了解更多 <i class="fa-solid fa-arrow-right text-[10px]"></i></a>
    <button type="button" onclick="UIK.dismiss(this)" aria-label="關閉公告" class="absolute right-3 w-6 h-6 rounded grid place-items-center text-white/60 hover:text-white"><i class="fa-solid fa-xmark text-xs"></i></button>
  </div>
  <div class="h-10 px-4 rounded-xl bg-brand-500/10 text-brand-700 dark:text-brand-300 text-[13px] flex items-center justify-center gap-2">
    <i class="fa-solid fa-gift"></i><span>年度方案限時 8 折，優惠至 11/30 止</span>
  </div>
</div>`,
    },
    {
      name: '樹狀檔案導覽',
      en: 'Tree Navigation',
      tags: ['檔案', '展開收合'],
      spec: [
        '類似程式編輯器的檔案樹，資料夾前有 fa-chevron-right 箭頭，點擊展開時箭頭旋轉 90 度、圖示由 fa-folder 變 fa-folder-open。',
        '子層級以 16px 縮排並有垂直引導線；檔案依類型使用不同顏色的 fa-brands 或 fa-file 圖示。',
        '目前選取的檔案為主色淡底。',
      ],
      html: `<ul class="w-60 p-2 rounded-xl border border-line bg-surface shadow-sm text-[13px] text-ink-soft">
  <li><button type="button" onclick="UIK.tree(this)" class="w-full flex items-center gap-1.5 h-7 px-1.5 rounded-md hover:bg-subtle"><i data-chevron class="fa-solid fa-chevron-right text-[9px] w-3 rotate-90 transition-transform"></i><i data-folder class="fa-solid fa-folder-open text-amber-500"></i>src</button>
    <ul class="ml-3 pl-2 border-l border-line">
      <li><button type="button" onclick="UIK.tree(this)" class="w-full flex items-center gap-1.5 h-7 px-1.5 rounded-md hover:bg-subtle"><i data-chevron class="fa-solid fa-chevron-right text-[9px] w-3 transition-transform"></i><i data-folder class="fa-solid fa-folder text-amber-500"></i>components</button>
        <ul class="hidden ml-3 pl-2 border-l border-line"><li class="flex items-center gap-1.5 h-7 px-1.5 pl-5 rounded-md hover:bg-subtle"><i class="fa-brands fa-react text-sky-500"></i>Button.tsx</li><li class="flex items-center gap-1.5 h-7 px-1.5 pl-5 rounded-md hover:bg-subtle"><i class="fa-brands fa-react text-sky-500"></i>Card.tsx</li></ul>
      </li>
      <li class="flex items-center gap-1.5 h-7 px-1.5 pl-5 rounded-md bg-brand-500/10 text-brand-700 dark:text-brand-300 font-medium"><i class="fa-brands fa-js text-yellow-500"></i>main.js</li>
      <li class="flex items-center gap-1.5 h-7 px-1.5 pl-5 rounded-md hover:bg-subtle"><i class="fa-brands fa-css3-alt text-blue-500"></i>styles.css</li>
    </ul>
  </li>
  <li class="flex items-center gap-1.5 h-7 px-1.5 pl-5 rounded-md hover:bg-subtle"><i class="fa-solid fa-file-lines text-ink-faint"></i>README.md</li>
  <li class="flex items-center gap-1.5 h-7 px-1.5 pl-5 rounded-md hover:bg-subtle"><i class="fa-brands fa-npm text-rose-500"></i>package.json</li>
</ul>`,
    },
    {
      name: '工作區切換器',
      en: 'Workspace Switcher',
      tags: ['多帳號', '下拉'],
      spec: [
        '一個顯示目前工作區的按鈕（標誌、名稱、方案），點擊展開下拉清單。',
        '清單列出多個工作區，目前工作區右側有 fa-check；每項左側為彩色字母方塊。',
        '清單底部以分隔線隔開「建立新的工作區」fa-plus 選項。',
      ],
      html: `<div class="relative w-64">
  <button type="button" onclick="UIK.menu(this)" class="w-full flex items-center gap-3 p-2 rounded-xl border border-line bg-surface shadow-sm hover:bg-subtle transition">
    <span class="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 text-white grid place-items-center text-sm font-bold">P</span>
    <span class="flex-1 text-left"><span class="block text-sm font-semibold text-ink">Pixel 工作室</span><span class="block text-[11px] text-ink-faint">專業版 · 8 位成員</span></span>
    <i class="fa-solid fa-sort text-xs text-ink-faint"></i>
  </button>
  <div data-menu class="hidden absolute left-0 right-0 top-full mt-2 z-10 p-1.5 rounded-xl border border-line bg-surface shadow-lift">
    <p class="px-2.5 pt-1 pb-1.5 text-[11px] text-ink-faint">切換工作區</p>
    <button type="button" class="w-full flex items-center gap-2.5 p-2 rounded-lg hover:bg-subtle"><span class="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-indigo-600 text-white grid place-items-center text-[11px] font-bold">P</span><span class="flex-1 text-left text-sm text-ink">Pixel 工作室</span><i class="fa-solid fa-check text-xs text-brand-600"></i></button>
    <button type="button" class="w-full flex items-center gap-2.5 p-2 rounded-lg hover:bg-subtle"><span class="w-6 h-6 rounded-md bg-emerald-500 text-white grid place-items-center text-[11px] font-bold">G</span><span class="flex-1 text-left text-sm text-ink">綠洲行銷</span></button>
    <button type="button" class="w-full flex items-center gap-2.5 p-2 rounded-lg hover:bg-subtle"><span class="w-6 h-6 rounded-md bg-amber-500 text-white grid place-items-center text-[11px] font-bold">S</span><span class="flex-1 text-left text-sm text-ink">個人空間</span></button>
    <div class="my-1.5 h-px bg-line"></div>
    <button type="button" class="w-full flex items-center gap-2.5 p-2 rounded-lg text-sm text-ink-soft hover:bg-subtle"><span class="w-6 h-6 rounded-md border border-dashed border-line grid place-items-center"><i class="fa-solid fa-plus text-[10px]"></i></span>建立新的工作區</button>
  </div>
</div>`,
    },
    {
      name: '頁面標題列',
      en: 'Page Header Bar',
      tags: ['App Bar', '動作'],
      wide: true,
      spec: [
        '詳細頁頂部標題列：左側為返回圓形按鈕 fa-arrow-left、頁面標題與狀態徽章，標題下方為小字說明。',
        '右側為動作按鈕群：分享（外框）、更多（圖示）、主要動作「發布」（深色實心）。',
        '標題列下方為 1px 分隔線。',
      ],
      html: `<header class="w-full max-w-3xl flex flex-wrap items-center gap-4 pb-5 border-b border-line">
  <button type="button" aria-label="返回" class="w-9 h-9 rounded-full border border-line bg-surface grid place-items-center text-ink-soft hover:text-ink hover:bg-subtle"><i class="fa-solid fa-arrow-left text-sm"></i></button>
  <div class="flex-1 min-w-0">
    <div class="flex items-center gap-2.5"><h3 class="text-lg font-semibold text-ink truncate">Q4 行銷活動企劃</h3><span class="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 text-[11px] font-medium"><i class="fa-solid fa-circle text-[6px] mr-1 align-middle"></i>草稿</span></div>
    <p class="text-xs text-ink-faint mt-0.5">最後編輯 5 分鐘前 · 由 李佳穎</p>
  </div>
  <div class="flex items-center gap-2">
    <button type="button" class="h-9 px-3.5 rounded-[10px] border border-line bg-surface text-sm font-medium text-ink hover:bg-subtle"><i class="fa-solid fa-share-nodes mr-1.5 text-xs"></i>分享</button>
    <button type="button" aria-label="更多" class="w-9 h-9 rounded-[10px] border border-line bg-surface grid place-items-center text-ink-soft hover:bg-subtle"><i class="fa-solid fa-ellipsis"></i></button>
    <button type="button" class="h-9 px-4 rounded-[10px] bg-ink text-canvas text-sm font-medium hover:opacity-85">發布</button>
  </div>
</header>`,
    },
    {
      name: '輪播指示與箭頭',
      en: 'Carousel Controls',
      tags: ['輪播', '指示點'],
      spec: [
        '輪播圖下方的控制列：左側為頁碼文字「02 / 05」，中間為圓點指示器，右側為上一張、下一張圓形按鈕。',
        '目前圓點拉長為 24px 膠囊並為深色，其餘為 6px 灰色圓點，切換時寬度平滑過渡。',
        '上方以漸層區塊示意輪播圖片。',
      ],
      html: `<div class="w-96 max-w-full">
  <div class="aspect-[16/8] rounded-2xl bg-gradient-to-br from-indigo-300 via-sky-300 to-emerald-200 dark:from-indigo-500/40 dark:via-sky-500/30 dark:to-emerald-500/30 grid place-items-center"><i class="fa-solid fa-images text-4xl text-white/80"></i></div>
  <div class="mt-4 flex items-center justify-between">
    <span class="text-xs font-mono text-ink-faint"><span class="text-ink font-semibold">02</span> / 05</span>
    <div data-pick data-on="w-6 bg-ink" data-off="w-1.5 bg-line" class="flex items-center gap-1.5">
      <button type="button" data-item onclick="UIK.pick(this)" aria-label="第 1 張" class="h-1.5 w-1.5 rounded-full bg-line transition-all duration-300"></button>
      <button type="button" data-item aria-selected="true" onclick="UIK.pick(this)" aria-label="第 2 張" class="h-1.5 w-6 rounded-full bg-ink transition-all duration-300"></button>
      <button type="button" data-item onclick="UIK.pick(this)" aria-label="第 3 張" class="h-1.5 w-1.5 rounded-full bg-line transition-all duration-300"></button>
      <button type="button" data-item onclick="UIK.pick(this)" aria-label="第 4 張" class="h-1.5 w-1.5 rounded-full bg-line transition-all duration-300"></button>
      <button type="button" data-item onclick="UIK.pick(this)" aria-label="第 5 張" class="h-1.5 w-1.5 rounded-full bg-line transition-all duration-300"></button>
    </div>
    <div class="flex gap-2">
      <button type="button" aria-label="上一張" class="w-8 h-8 rounded-full border border-line grid place-items-center text-ink-soft hover:bg-subtle"><i class="fa-solid fa-chevron-left text-[11px]"></i></button>
      <button type="button" aria-label="下一張" class="w-8 h-8 rounded-full bg-ink text-canvas grid place-items-center hover:opacity-85"><i class="fa-solid fa-chevron-right text-[11px]"></i></button>
    </div>
  </div>
</div>`,
    },
    {
      name: '行動版展開選單',
      en: 'Mobile Menu Sheet',
      tags: ['行動版', '漢堡選單'],
      spec: [
        '手機外框中的全螢幕選單：頂部為品牌與 fa-xmark 關閉按鈕。',
        '中間為大字級（18px）的導覽連結，每列右側有 fa-chevron-right，列間以分隔線區隔。',
        '底部固定兩個全寬按鈕：「登入」（外框）與「免費註冊」（深色實心）。',
      ],
      html: `<div class="w-[280px] h-[440px] rounded-[32px] border-[6px] border-zinc-900 dark:border-zinc-700 bg-surface overflow-hidden flex flex-col shadow-lift">
  <div class="h-14 px-5 flex items-center justify-between border-b border-line">
    <span class="flex items-center gap-2 font-semibold text-ink"><span class="w-6 h-6 rounded-md bg-ink text-canvas grid place-items-center text-[10px]"><i class="fa-solid fa-cube"></i></span>Nova</span>
    <button type="button" aria-label="關閉選單" class="w-8 h-8 rounded-lg grid place-items-center text-ink-soft hover:bg-subtle"><i class="fa-solid fa-xmark"></i></button>
  </div>
  <nav class="flex-1 px-5 divide-y divide-line">
    <a href="#" onclick="return false" class="flex items-center justify-between h-14 text-lg font-medium text-ink">產品功能<i class="fa-solid fa-chevron-right text-xs text-ink-faint"></i></a>
    <a href="#" onclick="return false" class="flex items-center justify-between h-14 text-lg font-medium text-ink">解決方案<i class="fa-solid fa-chevron-right text-xs text-ink-faint"></i></a>
    <a href="#" onclick="return false" class="flex items-center justify-between h-14 text-lg font-medium text-ink">價格</a>
    <a href="#" onclick="return false" class="flex items-center justify-between h-14 text-lg font-medium text-ink">部落格</a>
  </nav>
  <div class="p-4 space-y-2">
    <button type="button" class="w-full h-11 rounded-xl border border-line text-sm font-medium text-ink">登入</button>
    <button type="button" class="w-full h-11 rounded-xl bg-ink text-canvas text-sm font-medium">免費註冊</button>
  </div>
</div>`,
    },
  ],
});
