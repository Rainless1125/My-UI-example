(window.UI_ATLAS = window.UI_ATLAS || []).push({
  id: 'badges',
  name: '徽章、標籤與頭像',
  en: 'Badges, Tags & Avatars',
  icon: 'fa-solid fa-tags',
  desc: '狀態徽章、即時指示、趨勢標示、可移除標籤、鍵帽、頭像群組與成就徽章，用最小的空間傳達狀態與身分。',
  items: [
    {
      name: '圓點狀態徽章',
      en: 'Status Dot Badges',
      tags: ['狀態', '淡色調'],
      spec: [
        '一組膠囊狀態徽章：進行中、已完成、待審核、已取消、草稿，各自使用對應色 10% 淡底與 600 色文字。',
        '文字左側有 6px 實心圓點，高度 24px、字級 12px 中等字重。',
        '深色模式文字改為 400 色階，維持 WCAG AA 對比。',
      ],
      html: `<div class="flex flex-wrap gap-2 max-w-sm justify-center">
  <span class="inline-flex items-center gap-1.5 h-6 px-2.5 rounded-full bg-sky-500/10 text-sky-700 dark:text-sky-400 text-xs font-medium"><span class="w-1.5 h-1.5 rounded-full bg-sky-500"></span>進行中</span>
  <span class="inline-flex items-center gap-1.5 h-6 px-2.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-medium"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>已完成</span>
  <span class="inline-flex items-center gap-1.5 h-6 px-2.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-medium"><span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>待審核</span>
  <span class="inline-flex items-center gap-1.5 h-6 px-2.5 rounded-full bg-rose-500/10 text-rose-700 dark:text-rose-400 text-xs font-medium"><span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span>已取消</span>
  <span class="inline-flex items-center gap-1.5 h-6 px-2.5 rounded-full bg-subtle text-ink-soft text-xs font-medium"><span class="w-1.5 h-1.5 rounded-full bg-ink-faint"></span>草稿</span>
</div>`,
    },
    {
      name: '即時直播徽章',
      en: 'Live Pulse Badge',
      tags: ['即時', '呼吸燈'],
      spec: [
        '紅色實心「LIVE」徽章，左側白色圓點帶有 animate-ping 擴散脈衝，字母間距加寬。',
        '旁邊搭配觀看人數膠囊：半透明深色底、fa-eye 圖示與等寬數字。',
        '另一個變體為綠色「線上」狀態：淺色底與綠色呼吸燈。',
      ],
      html: `<div class="flex flex-col items-center gap-4">
  <div class="flex items-center gap-2">
    <span class="inline-flex items-center gap-1.5 h-6 px-2 rounded-md bg-rose-600 text-white text-[11px] font-bold tracking-[.12em]"><span class="relative flex w-1.5 h-1.5"><span class="absolute inset-0 rounded-full bg-white animate-ping"></span><span class="relative w-1.5 h-1.5 rounded-full bg-white"></span></span>LIVE</span>
    <span class="inline-flex items-center gap-1.5 h-6 px-2 rounded-md bg-zinc-900/80 text-white text-[11px] font-medium tabular-nums"><i class="fa-solid fa-eye text-[10px]"></i>2,481</span>
  </div>
  <span class="inline-flex items-center gap-2 h-7 px-3 rounded-full border border-line bg-surface text-xs font-medium text-ink shadow-sm"><span class="relative flex w-2 h-2"><span class="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75"></span><span class="relative w-2 h-2 rounded-full bg-emerald-500"></span></span>12 位成員在線上</span>
</div>`,
    },
    {
      name: '外框徽章',
      en: 'Outline Badges',
      tags: ['外框', '分類'],
      spec: [
        '細框樣式的分類徽章，1px 邊框為對應色 40%、文字為對應色，背景透明。',
        '徽章前方附小圖示（fa-code、fa-palette、fa-chart-line、fa-bug），圓角 6px、高度 24px。',
        '適合用於低強調的分類標示。',
      ],
      html: `<div class="flex flex-wrap gap-2 justify-center">
  <span class="inline-flex items-center gap-1.5 h-6 px-2 rounded-md border border-indigo-500/40 text-indigo-600 dark:text-indigo-400 text-xs font-medium"><i class="fa-solid fa-code text-[10px]"></i>前端</span>
  <span class="inline-flex items-center gap-1.5 h-6 px-2 rounded-md border border-pink-500/40 text-pink-600 dark:text-pink-400 text-xs font-medium"><i class="fa-solid fa-palette text-[10px]"></i>設計</span>
  <span class="inline-flex items-center gap-1.5 h-6 px-2 rounded-md border border-teal-500/40 text-teal-600 dark:text-teal-400 text-xs font-medium"><i class="fa-solid fa-chart-line text-[10px]"></i>數據</span>
  <span class="inline-flex items-center gap-1.5 h-6 px-2 rounded-md border border-orange-500/40 text-orange-600 dark:text-orange-400 text-xs font-medium"><i class="fa-solid fa-bug text-[10px]"></i>錯誤修正</span>
</div>`,
    },
    {
      name: '流光 Pro 徽章',
      en: 'Shimmer Pro Badge',
      tags: ['付費', '流光'],
      spec: [
        '漸層底（amber → orange → pink）的「PRO」徽章，表面有一道白色斜向光澤持續由左至右掃過。',
        '光澤以 linear-gradient 背景搭配 background-position 動畫實作，週期 2.2 秒。',
        '左側為 fa-crown 圖示，字重 700、字距加寬；另附一個深色「Enterprise」版本。',
      ],
      html: `<div class="flex items-center gap-3">
  <span class="relative inline-flex items-center gap-1.5 h-7 px-3 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 text-white text-xs font-bold tracking-wider overflow-hidden shadow-md shadow-orange-500/30">
    <span class="absolute inset-0 bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,.55)_50%,transparent_70%)] bg-[length:200%_100%] animate-shimmer"></span>
    <i class="relative fa-solid fa-crown text-[10px]"></i><span class="relative">PRO</span>
  </span>
  <span class="relative inline-flex items-center gap-1.5 h-7 px-3 rounded-full bg-zinc-900 text-white text-xs font-semibold overflow-hidden ring-1 ring-white/10">
    <span class="absolute inset-0 bg-[linear-gradient(110deg,transparent_30%,rgba(165,180,252,.4)_50%,transparent_70%)] bg-[length:200%_100%] animate-shimmer"></span>
    <i class="relative fa-solid fa-gem text-[10px] text-indigo-300"></i><span class="relative">Enterprise</span>
  </span>
</div>`,
    },
    {
      name: '趨勢漲跌徽章',
      en: 'Trend Badges',
      tags: ['數據', '漲跌'],
      spec: [
        '上漲為 emerald 淡底與 fa-arrow-trend-up，下跌為 rose 淡底與 fa-arrow-trend-down，持平為灰色 fa-minus。',
        '數字使用等寬數字（tabular-nums）並帶正負號，高度 22px、圓角 6px。',
        '旁邊搭配指標名稱與數值，示範在表格中的使用情境。',
      ],
      html: `<div class="w-72 divide-y divide-line rounded-xl border border-line bg-surface text-sm">
  <div class="flex items-center justify-between p-3"><span class="text-ink-soft">訪客數</span><span class="flex items-center gap-2"><span class="font-semibold text-ink tabular-nums">48,210</span><span class="inline-flex items-center gap-1 h-[22px] px-1.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tabular-nums"><i class="fa-solid fa-arrow-trend-up text-[10px]"></i>+8.2%</span></span></div>
  <div class="flex items-center justify-between p-3"><span class="text-ink-soft">跳出率</span><span class="flex items-center gap-2"><span class="font-semibold text-ink tabular-nums">32.4%</span><span class="inline-flex items-center gap-1 h-[22px] px-1.5 rounded-md bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-semibold tabular-nums"><i class="fa-solid fa-arrow-trend-down text-[10px]"></i>-2.1%</span></span></div>
  <div class="flex items-center justify-between p-3"><span class="text-ink-soft">平均停留</span><span class="flex items-center gap-2"><span class="font-semibold text-ink tabular-nums">3:42</span><span class="inline-flex items-center gap-1 h-[22px] px-1.5 rounded-md bg-subtle text-ink-soft text-xs font-semibold tabular-nums"><i class="fa-solid fa-minus text-[10px]"></i>0.0%</span></span></div>
</div>`,
    },
    {
      name: '圖示計數角標',
      en: 'Notification Count',
      tags: ['角標', '未讀'],
      spec: [
        '圖示按鈕右上角的數字角標：rose 實心、白字 10px、外圍 2px 與背景同色的 ring 以與圖示分離。',
        '超過 99 顯示「99+」；也提供只有小圓點的版本代表有新內容。',
        '展示鈴鐺、訊息、購物車三種情境。',
      ],
      html: `<div class="flex items-center gap-6">
  <button type="button" aria-label="通知，3 則未讀" class="relative w-11 h-11 rounded-xl border border-line bg-surface grid place-items-center text-ink-soft shadow-sm"><i class="fa-regular fa-bell text-lg"></i><span class="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-rose-500 text-white text-[10px] font-bold grid place-items-center ring-2 ring-canvas">3</span></button>
  <button type="button" aria-label="訊息，超過 99 則" class="relative w-11 h-11 rounded-xl border border-line bg-surface grid place-items-center text-ink-soft shadow-sm"><i class="fa-regular fa-envelope text-lg"></i><span class="absolute -top-1.5 -right-2.5 h-5 px-1.5 rounded-full bg-brand-600 text-white text-[10px] font-bold grid place-items-center ring-2 ring-canvas">99+</span></button>
  <button type="button" aria-label="購物車有新項目" class="relative w-11 h-11 rounded-xl border border-line bg-surface grid place-items-center text-ink-soft shadow-sm"><i class="fa-solid fa-cart-shopping"></i><span class="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-surface"></span></button>
</div>`,
    },
    {
      name: '可移除標籤',
      en: 'Removable Tags',
      tags: ['Chips', '移除'],
      spec: [
        '白底細框的標籤，右側附 16px 圓形 fa-xmark 移除按鈕，hover 時按鈕底色變為淺灰。',
        '點擊移除時標籤淡出縮小後從 DOM 移除。',
        '其中一個標籤前方為彩色小圓點代表分類顏色。',
      ],
      html: `<div class="flex flex-wrap gap-2 max-w-xs justify-center">
  <span class="inline-flex items-center gap-1.5 h-7 pl-2.5 pr-1 rounded-lg border border-line bg-surface text-xs font-medium text-ink shadow-sm transition-all duration-200">台北市<button type="button" aria-label="移除台北市" onclick="const t=this.parentElement;t.style.opacity=0;t.style.transform='scale(.9)';setTimeout(()=>t.remove(),200)" class="w-4 h-4 rounded-full grid place-items-center text-ink-faint hover:bg-subtle hover:text-ink"><i class="fa-solid fa-xmark text-[9px]"></i></button></span>
  <span class="inline-flex items-center gap-1.5 h-7 pl-2.5 pr-1 rounded-lg border border-line bg-surface text-xs font-medium text-ink shadow-sm transition-all duration-200"><span class="w-2 h-2 rounded-full bg-violet-500"></span>UI 設計<button type="button" aria-label="移除 UI 設計" onclick="const t=this.parentElement;t.style.opacity=0;t.style.transform='scale(.9)';setTimeout(()=>t.remove(),200)" class="w-4 h-4 rounded-full grid place-items-center text-ink-faint hover:bg-subtle hover:text-ink"><i class="fa-solid fa-xmark text-[9px]"></i></button></span>
  <span class="inline-flex items-center gap-1.5 h-7 pl-2.5 pr-1 rounded-lg border border-line bg-surface text-xs font-medium text-ink shadow-sm transition-all duration-200">價格：$500 以下<button type="button" aria-label="移除價格條件" onclick="const t=this.parentElement;t.style.opacity=0;t.style.transform='scale(.9)';setTimeout(()=>t.remove(),200)" class="w-4 h-4 rounded-full grid place-items-center text-ink-faint hover:bg-subtle hover:text-ink"><i class="fa-solid fa-xmark text-[9px]"></i></button></span>
  <span class="inline-flex items-center gap-1.5 h-7 pl-2.5 pr-1 rounded-lg border border-line bg-surface text-xs font-medium text-ink shadow-sm transition-all duration-200"><i class="fa-solid fa-star text-amber-400 text-[10px]"></i>4 星以上<button type="button" aria-label="移除評分條件" onclick="const t=this.parentElement;t.style.opacity=0;t.style.transform='scale(.9)';setTimeout(()=>t.remove(),200)" class="w-4 h-4 rounded-full grid place-items-center text-ink-faint hover:bg-subtle hover:text-ink"><i class="fa-solid fa-xmark text-[9px]"></i></button></span>
</div>`,
    },
    {
      name: '雙段版本膠囊',
      en: 'Split Version Pill',
      tags: ['版本', 'Shields'],
      spec: [
        '仿 shields.io 的雙段徽章：左段為深灰底的標籤（附 fa-brands 圖示），右段為彩色底的數值。',
        '示範 npm 版本、建置狀態（fa-circle-check passing）、授權 MIT、下載數。',
        '字體 11px、高度 22px、圓角 6px，兩段之間無間隙。',
      ],
      html: `<div class="flex flex-wrap gap-2 justify-center max-w-sm font-mono text-[11px]">
  <span class="inline-flex h-[22px] rounded-md overflow-hidden"><span class="px-2 flex items-center gap-1.5 bg-zinc-700 text-white"><i class="fa-brands fa-npm"></i>npm</span><span class="px-2 flex items-center bg-brand-600 text-white">v3.2.0</span></span>
  <span class="inline-flex h-[22px] rounded-md overflow-hidden"><span class="px-2 flex items-center gap-1.5 bg-zinc-700 text-white"><i class="fa-brands fa-github"></i>build</span><span class="px-2 flex items-center gap-1 bg-emerald-600 text-white"><i class="fa-solid fa-circle-check text-[9px]"></i>passing</span></span>
  <span class="inline-flex h-[22px] rounded-md overflow-hidden"><span class="px-2 flex items-center bg-zinc-700 text-white">license</span><span class="px-2 flex items-center bg-sky-600 text-white">MIT</span></span>
  <span class="inline-flex h-[22px] rounded-md overflow-hidden"><span class="px-2 flex items-center gap-1.5 bg-zinc-700 text-white"><i class="fa-solid fa-download text-[9px]"></i>downloads</span><span class="px-2 flex items-center bg-orange-500 text-white">48k/週</span></span>
</div>`,
    },
    {
      name: '鍵盤按鍵',
      en: 'Keyboard Keys',
      tags: ['快捷鍵', 'kbd'],
      spec: [
        '使用 <kbd> 標籤的鍵帽樣式：白底、1px 邊框、底部 2px 較深的邊框模擬按鍵厚度。',
        '最小寬度 24px、高度 24px、圓角 6px、字級 11px；組合鍵之間以灰色「+」連接。',
        '示範「Ctrl + Shift + P」、「Esc」與方向鍵 fa-arrow-up / fa-arrow-down 的使用說明列。',
      ],
      html: `<div class="space-y-3 text-[13px] text-ink-soft">
  <div class="flex items-center justify-between gap-8"><span>開啟指令面板</span><span class="flex items-center gap-1"><kbd class="min-w-6 h-6 px-1.5 rounded-md border border-line border-b-2 bg-surface text-[11px] font-medium text-ink font-sans grid place-items-center">Ctrl</kbd><span class="text-ink-faint">+</span><kbd class="min-w-6 h-6 px-1.5 rounded-md border border-line border-b-2 bg-surface text-[11px] font-medium text-ink font-sans grid place-items-center">Shift</kbd><span class="text-ink-faint">+</span><kbd class="min-w-6 h-6 px-1.5 rounded-md border border-line border-b-2 bg-surface text-[11px] font-medium text-ink font-sans grid place-items-center">P</kbd></span></div>
  <div class="flex items-center justify-between gap-8"><span>上下選擇</span><span class="flex items-center gap-1"><kbd class="w-6 h-6 rounded-md border border-line border-b-2 bg-surface text-[10px] text-ink grid place-items-center"><i class="fa-solid fa-arrow-up"></i></kbd><kbd class="w-6 h-6 rounded-md border border-line border-b-2 bg-surface text-[10px] text-ink grid place-items-center"><i class="fa-solid fa-arrow-down"></i></kbd></span></div>
  <div class="flex items-center justify-between gap-8"><span>關閉視窗</span><kbd class="min-w-6 h-6 px-1.5 rounded-md border border-line border-b-2 bg-surface text-[11px] font-medium text-ink font-sans grid place-items-center">Esc</kbd></div>
</div>`,
    },
    {
      name: '頭像群組',
      en: 'Avatar Group',
      tags: ['頭像', '堆疊'],
      spec: [
        '五個 36px 圓形頭像水平重疊（負間距 -10px），每個頭像外圍 2px 與背景同色的 ring 分隔。',
        '最後一個為「+8」灰底計數頭像；hover 任一頭像時該頭像上移 2px 並提升 z-index。',
        '右側附「13 位成員參與」文字；另提供 28px 小尺寸版本。',
      ],
      html: `<div class="flex flex-col items-center gap-5">
  <div class="flex items-center gap-3">
    <div class="flex -space-x-2.5">
      <span class="relative w-9 h-9 rounded-full ring-2 ring-canvas bg-gradient-to-br from-sky-400 to-blue-600 text-white grid place-items-center text-xs font-semibold hover:-translate-y-0.5 hover:z-10 transition">王</span>
      <span class="relative w-9 h-9 rounded-full ring-2 ring-canvas bg-gradient-to-br from-pink-400 to-rose-600 text-white grid place-items-center text-xs font-semibold hover:-translate-y-0.5 hover:z-10 transition">林</span>
      <span class="relative w-9 h-9 rounded-full ring-2 ring-canvas bg-gradient-to-br from-amber-300 to-orange-500 text-white grid place-items-center text-xs font-semibold hover:-translate-y-0.5 hover:z-10 transition">陳</span>
      <span class="relative w-9 h-9 rounded-full ring-2 ring-canvas bg-gradient-to-br from-emerald-400 to-teal-600 text-white grid place-items-center text-xs font-semibold hover:-translate-y-0.5 hover:z-10 transition">張</span>
      <span class="relative w-9 h-9 rounded-full ring-2 ring-canvas bg-subtle text-ink-soft grid place-items-center text-[11px] font-semibold">+8</span>
    </div>
    <span class="text-sm text-ink-soft">13 位成員參與</span>
  </div>
  <div class="flex -space-x-2">
    <span class="w-7 h-7 rounded-full ring-2 ring-canvas bg-violet-500"></span><span class="w-7 h-7 rounded-full ring-2 ring-canvas bg-cyan-500"></span><span class="w-7 h-7 rounded-full ring-2 ring-canvas bg-lime-500"></span>
    <button type="button" aria-label="新增成員" class="w-7 h-7 rounded-full ring-2 ring-canvas border border-dashed border-ink-faint bg-surface text-ink-faint grid place-items-center hover:text-ink"><i class="fa-solid fa-plus text-[10px]"></i></button>
  </div>
</div>`,
    },
    {
      name: '狀態頭像',
      en: 'Avatars with Presence',
      tags: ['頭像', '上線狀態'],
      spec: [
        '四種尺寸（32、40、48、64px）的圓形頭像，右下角有線上狀態圓點：綠色上線、琥珀色離開、灰色離線、紅色勿擾（內含白色橫線）。',
        '狀態點大小隨頭像等比例縮放，外圍有與背景同色的 2px ring。',
        '頭像內容為漸層背景與姓氏文字。',
      ],
      html: `<div class="flex items-end gap-5">
  <span class="relative"><span class="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-violet-600 text-white grid place-items-center text-xs font-semibold">黃</span><span class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-canvas"></span></span>
  <span class="relative"><span class="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-pink-600 text-white grid place-items-center text-sm font-semibold">楊</span><span class="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-amber-400 ring-2 ring-canvas"></span></span>
  <span class="relative"><span class="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-cyan-600 text-white grid place-items-center font-semibold">謝</span><span class="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full bg-zinc-400 ring-2 ring-canvas"></span></span>
  <span class="relative"><span class="w-16 h-16 rounded-full bg-gradient-to-br from-orange-300 to-red-500 text-white grid place-items-center text-xl font-semibold">郭</span><span class="absolute bottom-0.5 right-0.5 w-4 h-4 rounded-full bg-rose-500 ring-[3px] ring-canvas grid place-items-center"><span class="w-2 h-0.5 rounded bg-white"></span></span></span>
</div>`,
    },
    {
      name: '字母頭像',
      en: 'Initial Avatars',
      tags: ['頭像', '色彩'],
      spec: [
        '沒有照片時的字母頭像，使用淡色底與同色系深色文字（例如 indigo-100 底、indigo-700 字），共 6 種顏色。',
        '圓形與圓角方形（rounded-xl，用於團隊或組織）兩種形狀並排展示。',
        '另附一個以 fa-user 圖示代替字母的預設頭像。',
      ],
      html: `<div class="space-y-4">
  <div class="flex gap-2.5">
    <span class="w-10 h-10 rounded-full bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 grid place-items-center text-sm font-semibold">AL</span>
    <span class="w-10 h-10 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 grid place-items-center text-sm font-semibold">MW</span>
    <span class="w-10 h-10 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 grid place-items-center text-sm font-semibold">JC</span>
    <span class="w-10 h-10 rounded-full bg-rose-500/15 text-rose-700 dark:text-rose-300 grid place-items-center text-sm font-semibold">KH</span>
    <span class="w-10 h-10 rounded-full bg-subtle text-ink-faint grid place-items-center"><i class="fa-solid fa-user"></i></span>
  </div>
  <div class="flex gap-2.5">
    <span class="w-10 h-10 rounded-xl bg-sky-500/15 text-sky-700 dark:text-sky-300 grid place-items-center text-sm font-bold">DX</span>
    <span class="w-10 h-10 rounded-xl bg-violet-500/15 text-violet-700 dark:text-violet-300 grid place-items-center text-sm font-bold">PS</span>
    <span class="w-10 h-10 rounded-xl bg-ink text-canvas grid place-items-center text-sm font-bold">N</span>
    <span class="w-10 h-10 rounded-xl border border-dashed border-line text-ink-faint grid place-items-center"><i class="fa-solid fa-building"></i></span>
  </div>
</div>`,
    },
    {
      name: '認證使用者標記',
      en: 'Verified Badge',
      tags: ['認證', '身分'],
      spec: [
        '使用者名稱旁的認證標記：sky-500 實心 fa-certificate 背景上疊放白色 fa-check，形成鋸齒圓形勾勾。',
        '提供三種身分：一般認證（藍）、官方帳號（金）、政府機構（灰），hover 時顯示說明 tooltip。',
        '標記大小與文字行高對齊（16px）。',
      ],
      html: `<div class="space-y-3">
  <div class="flex items-center gap-1.5 text-sm"><span class="font-semibold text-ink">吳宗翰</span><span class="group relative w-4 h-4 grid place-items-center"><i class="fa-solid fa-certificate text-sky-500 text-base"></i><i class="fa-solid fa-check absolute text-white text-[8px]"></i><span class="pointer-events-none absolute bottom-full mb-1.5 whitespace-nowrap px-2 py-0.5 rounded bg-ink text-canvas text-[11px] opacity-0 group-hover:opacity-100 transition">已認證帳號</span></span><span class="text-ink-faint">@zonghan</span></div>
  <div class="flex items-center gap-1.5 text-sm"><span class="font-semibold text-ink">Atlas 官方</span><span class="group relative w-4 h-4 grid place-items-center"><i class="fa-solid fa-certificate text-amber-400 text-base"></i><i class="fa-solid fa-check absolute text-white text-[8px]"></i><span class="pointer-events-none absolute bottom-full mb-1.5 whitespace-nowrap px-2 py-0.5 rounded bg-ink text-canvas text-[11px] opacity-0 group-hover:opacity-100 transition">官方帳號</span></span><span class="text-ink-faint">@atlas</span></div>
  <div class="flex items-center gap-1.5 text-sm"><span class="font-semibold text-ink">數位發展部</span><span class="group relative w-4 h-4 grid place-items-center"><i class="fa-solid fa-certificate text-zinc-500 text-base"></i><i class="fa-solid fa-check absolute text-white text-[8px]"></i><span class="pointer-events-none absolute bottom-full mb-1.5 whitespace-nowrap px-2 py-0.5 rounded bg-ink text-canvas text-[11px] opacity-0 group-hover:opacity-100 transition">政府機構</span></span><span class="text-ink-faint">@moda</span></div>
</div>`,
    },
    {
      name: '優先級標籤',
      en: 'Priority Labels',
      tags: ['專案管理', '優先級'],
      spec: [
        '四個優先級：緊急（rose，fa-fire）、高（orange，fa-angles-up）、中（amber，fa-equals）、低（sky，fa-angles-down）。',
        '每個標籤左側為圖示，右側為文字，淡色底與對應色文字，圓角 6px。',
        '另提供只有三段訊號條（signal bars）的極簡版本。',
      ],
      html: `<div class="flex flex-col items-center gap-4">
  <div class="flex flex-wrap gap-2 justify-center">
    <span class="inline-flex items-center gap-1.5 h-6 px-2 rounded-md bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-semibold"><i class="fa-solid fa-fire text-[10px]"></i>緊急</span>
    <span class="inline-flex items-center gap-1.5 h-6 px-2 rounded-md bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-semibold"><i class="fa-solid fa-angles-up text-[10px]"></i>高</span>
    <span class="inline-flex items-center gap-1.5 h-6 px-2 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold"><i class="fa-solid fa-equals text-[10px]"></i>中</span>
    <span class="inline-flex items-center gap-1.5 h-6 px-2 rounded-md bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-semibold"><i class="fa-solid fa-angles-down text-[10px]"></i>低</span>
  </div>
  <div class="flex items-center gap-5 text-xs text-ink-soft">
    <span class="flex items-center gap-1.5"><span class="flex items-end gap-0.5 h-3"><span class="w-1 h-1/3 rounded-sm bg-ink"></span><span class="w-1 h-2/3 rounded-sm bg-ink"></span><span class="w-1 h-full rounded-sm bg-ink"></span></span>高</span>
    <span class="flex items-center gap-1.5"><span class="flex items-end gap-0.5 h-3"><span class="w-1 h-1/3 rounded-sm bg-ink"></span><span class="w-1 h-2/3 rounded-sm bg-ink"></span><span class="w-1 h-full rounded-sm bg-line"></span></span>中</span>
    <span class="flex items-center gap-1.5"><span class="flex items-end gap-0.5 h-3"><span class="w-1 h-1/3 rounded-sm bg-ink"></span><span class="w-1 h-2/3 rounded-sm bg-line"></span><span class="w-1 h-full rounded-sm bg-line"></span></span>低</span>
  </div>
</div>`,
    },
    {
      name: '主題標籤雲',
      en: 'Tag Cloud',
      tags: ['標籤', '探索'],
      spec: [
        '以 fa-hashtag 開頭的主題標籤，依熱門程度使用不同字級（12–16px）與深淺。',
        '標籤為淺灰底圓角膠囊，hover 時轉為主色淡底與主色文字，並向上浮動 1px。',
        '最熱門的標籤右側附帶小型 fa-fire 圖示。',
      ],
      html: `<div class="flex flex-wrap gap-2 max-w-sm justify-center items-center">
  <a href="#" onclick="return false" class="px-3 py-1.5 rounded-full bg-subtle text-base font-semibold text-ink hover:bg-brand-500/10 hover:text-brand-600 hover:-translate-y-px transition"><i class="fa-solid fa-hashtag text-xs opacity-50"></i>設計系統<i class="fa-solid fa-fire text-orange-500 text-xs ml-1"></i></a>
  <a href="#" onclick="return false" class="px-2.5 py-1 rounded-full bg-subtle text-sm text-ink-soft hover:bg-brand-500/10 hover:text-brand-600 hover:-translate-y-px transition"><i class="fa-solid fa-hashtag text-[10px] opacity-50"></i>無障礙</a>
  <a href="#" onclick="return false" class="px-3 py-1.5 rounded-full bg-subtle text-[15px] font-medium text-ink hover:bg-brand-500/10 hover:text-brand-600 hover:-translate-y-px transition"><i class="fa-solid fa-hashtag text-xs opacity-50"></i>Tailwind</a>
  <a href="#" onclick="return false" class="px-2.5 py-1 rounded-full bg-subtle text-xs text-ink-faint hover:bg-brand-500/10 hover:text-brand-600 hover:-translate-y-px transition"><i class="fa-solid fa-hashtag text-[9px] opacity-50"></i>動態設計</a>
  <a href="#" onclick="return false" class="px-2.5 py-1 rounded-full bg-subtle text-sm text-ink-soft hover:bg-brand-500/10 hover:text-brand-600 hover:-translate-y-px transition"><i class="fa-solid fa-hashtag text-[10px] opacity-50"></i>React</a>
  <a href="#" onclick="return false" class="px-2.5 py-1 rounded-full bg-subtle text-xs text-ink-faint hover:bg-brand-500/10 hover:text-brand-600 hover:-translate-y-px transition"><i class="fa-solid fa-hashtag text-[9px] opacity-50"></i>字體排印</a>
  <a href="#" onclick="return false" class="px-2.5 py-1 rounded-full bg-subtle text-sm text-ink-soft hover:bg-brand-500/10 hover:text-brand-600 hover:-translate-y-px transition"><i class="fa-solid fa-hashtag text-[10px] opacity-50"></i>使用者研究</a>
</div>`,
    },
    {
      name: '成就徽章',
      en: 'Achievement Badges',
      tags: ['遊戲化', '成就'],
      spec: [
        '三個 56px 的成就徽章，形狀為六角形（clip-path polygon），內為漸層背景與白色圖示。',
        '已解鎖為彩色（金 fa-trophy、紫 fa-fire-flame-curved、藍 fa-medal），未解鎖為灰階並顯示 fa-lock。',
        '徽章下方為名稱與取得條件小字。',
      ],
      html: `<div class="flex gap-6 text-center">
  <div><span class="mx-auto w-14 h-16 [clip-path:polygon(50%_0,100%_25%,100%_75%,50%_100%,0_75%,0_25%)] bg-gradient-to-b from-amber-300 to-orange-500 text-white grid place-items-center text-xl shadow-lg"><i class="fa-solid fa-trophy"></i></span><p class="mt-2 text-xs font-semibold text-ink">冠軍</p><p class="text-[10px] text-ink-faint">完成 100 項任務</p></div>
  <div><span class="mx-auto w-14 h-16 [clip-path:polygon(50%_0,100%_25%,100%_75%,50%_100%,0_75%,0_25%)] bg-gradient-to-b from-fuchsia-400 to-violet-600 text-white grid place-items-center text-xl"><i class="fa-solid fa-fire-flame-curved"></i></span><p class="mt-2 text-xs font-semibold text-ink">連續 30 天</p><p class="text-[10px] text-ink-faint">每日登入</p></div>
  <div><span class="mx-auto w-14 h-16 [clip-path:polygon(50%_0,100%_25%,100%_75%,50%_100%,0_75%,0_25%)] bg-gradient-to-b from-sky-400 to-indigo-600 text-white grid place-items-center text-xl"><i class="fa-solid fa-medal"></i></span><p class="mt-2 text-xs font-semibold text-ink">導師</p><p class="text-[10px] text-ink-faint">幫助 50 位成員</p></div>
  <div class="opacity-60"><span class="mx-auto w-14 h-16 [clip-path:polygon(50%_0,100%_25%,100%_75%,50%_100%,0_75%,0_25%)] bg-line text-ink-faint grid place-items-center text-lg"><i class="fa-solid fa-lock"></i></span><p class="mt-2 text-xs font-semibold text-ink-soft">傳奇</p><p class="text-[10px] text-ink-faint">尚未解鎖</p></div>
</div>`,
    },
    {
      name: '角落緞帶',
      en: 'Corner Ribbon',
      tags: ['緞帶', '促銷'],
      spec: [
        '卡片右上角 45 度斜放的緞帶，主色底白字「熱銷」，以 overflow-hidden 裁切。',
        '另一張卡片左上角為摺角式小標籤「NEW」，帶有下方的小三角陰影營造立體感。',
        '兩張卡片並排，內容為簡易的商品資訊。',
      ],
      html: `<div class="flex gap-4">
  <div class="relative w-40 h-32 p-4 rounded-xl border border-line bg-surface overflow-hidden shadow-sm">
    <span class="absolute top-3 -right-8 w-28 rotate-45 bg-brand-600 text-white text-center text-[11px] font-bold py-1 shadow">熱銷</span>
    <i class="fa-solid fa-mug-hot text-2xl text-ink-faint"></i><p class="mt-3 text-sm font-semibold text-ink">手沖咖啡組</p><p class="text-xs text-ink-faint">$1,280</p>
  </div>
  <div class="relative w-40 h-32 p-4 pt-8 rounded-xl border border-line bg-surface shadow-sm">
    <span class="absolute -left-1.5 top-3 px-2.5 py-0.5 rounded-r-md rounded-tl-sm bg-emerald-500 text-white text-[10px] font-bold tracking-wider after:absolute after:left-0 after:top-full after:border-t-[6px] after:border-l-[6px] after:border-t-emerald-800 after:border-l-transparent">NEW</span>
    <i class="fa-solid fa-leaf text-2xl text-ink-faint"></i><p class="mt-2 text-sm font-semibold text-ink">有機綠茶</p><p class="text-xs text-ink-faint">$480</p>
  </div>
</div>`,
    },
    {
      name: '進度膠囊',
      en: 'Progress Pill',
      tags: ['進度', '微型'],
      spec: [
        '膠囊內左側為 16px SVG 迷你圓環進度（3/5 = 60%），右側為「3 / 5 完成」文字。',
        '另一個變體為內嵌細進度條的膠囊，背景為主色淡底，進度條為主色。',
        '適合放在任務列表或步驟標題旁。',
      ],
      html: `<div class="flex flex-col items-center gap-3">
  <span class="inline-flex items-center gap-2 h-7 pl-1.5 pr-3 rounded-full border border-line bg-surface text-xs font-medium text-ink shadow-sm">
    <svg viewBox="0 0 20 20" class="w-4 h-4 -rotate-90"><circle cx="10" cy="10" r="8" fill="none" stroke="rgb(var(--line))" stroke-width="3"/><circle cx="10" cy="10" r="8" fill="none" stroke="#10b981" stroke-width="3" stroke-linecap="round" stroke-dasharray="50.27" stroke-dashoffset="20.1"/></svg>
    3 / 5 完成
  </span>
  <span class="inline-flex items-center gap-2.5 h-7 px-3 rounded-full bg-brand-500/10 text-xs font-medium text-brand-700 dark:text-brand-300">
    設定進度<span class="w-16 h-1.5 rounded-full bg-brand-500/20 overflow-hidden"><span class="block h-full w-3/4 rounded-full bg-brand-600"></span></span>75%
  </span>
</div>`,
    },
    {
      name: '使用者膠囊',
      en: 'User Chip',
      tags: ['使用者', 'Chips'],
      spec: [
        '圓形頭像（24px）加姓名的膠囊標籤，用於指派人或收件者欄位。',
        '一般狀態為淺灰底，選取狀態為主色淡底並顯示 fa-xmark 移除按鈕。',
        '另附一個帶角色說明（「擁有者」灰字）的較大版本。',
      ],
      html: `<div class="flex flex-col items-center gap-3">
  <div class="flex flex-wrap gap-2 justify-center">
    <span class="inline-flex items-center gap-1.5 h-7 pl-0.5 pr-2.5 rounded-full bg-subtle text-xs font-medium text-ink"><span class="w-6 h-6 rounded-full bg-sky-500 text-white grid place-items-center text-[10px]">潘</span>潘家瑜</span>
    <span class="inline-flex items-center gap-1.5 h-7 pl-0.5 pr-1.5 rounded-full bg-brand-500/10 ring-1 ring-brand-500/30 text-xs font-medium text-brand-700 dark:text-brand-300"><span class="w-6 h-6 rounded-full bg-violet-500 text-white grid place-items-center text-[10px]">蕭</span>蕭以恩<button type="button" aria-label="移除" class="w-4 h-4 rounded-full grid place-items-center hover:bg-brand-500/20"><i class="fa-solid fa-xmark text-[9px]"></i></button></span>
  </div>
  <span class="inline-flex items-center gap-2.5 h-10 pl-1 pr-4 rounded-full border border-line bg-surface shadow-sm"><span class="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 text-white grid place-items-center text-xs font-semibold">賴</span><span class="text-left leading-tight"><span class="block text-[13px] font-medium text-ink">賴冠宇</span><span class="block text-[11px] text-ink-faint">擁有者</span></span></span>
</div>`,
    },
    {
      name: '環境標籤',
      en: 'Environment Labels',
      tags: ['開發者', '部署'],
      spec: [
        '部署環境標籤：Production（rose，fa-server）、Staging（amber，fa-flask）、Development（emerald，fa-code-branch）、Preview（sky，fa-eye）。',
        '等寬字體 11px、大寫，左側為 6px 實心圓點，外圍細邊框。',
        '下方示範部署列表中的使用：commit hash 等寬字與時間。',
      ],
      html: `<div class="space-y-3">
  <div class="flex flex-wrap gap-2 justify-center font-mono text-[11px] font-medium uppercase">
    <span class="inline-flex items-center gap-1.5 h-6 px-2 rounded-md border border-rose-500/30 bg-rose-500/[.06] text-rose-600 dark:text-rose-400"><i class="fa-solid fa-server text-[9px]"></i>Production</span>
    <span class="inline-flex items-center gap-1.5 h-6 px-2 rounded-md border border-amber-500/30 bg-amber-500/[.06] text-amber-600 dark:text-amber-400"><i class="fa-solid fa-flask text-[9px]"></i>Staging</span>
    <span class="inline-flex items-center gap-1.5 h-6 px-2 rounded-md border border-emerald-500/30 bg-emerald-500/[.06] text-emerald-600 dark:text-emerald-400"><i class="fa-solid fa-code-branch text-[9px]"></i>Dev</span>
    <span class="inline-flex items-center gap-1.5 h-6 px-2 rounded-md border border-sky-500/30 bg-sky-500/[.06] text-sky-600 dark:text-sky-400"><i class="fa-solid fa-eye text-[9px]"></i>Preview</span>
  </div>
  <div class="flex items-center gap-3 p-3 rounded-xl border border-line bg-surface text-xs">
    <span class="inline-flex items-center gap-1.5 h-6 px-2 rounded-md border border-rose-500/30 bg-rose-500/[.06] text-rose-600 dark:text-rose-400 font-mono text-[11px] font-medium uppercase"><span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span>Prod</span>
    <span class="font-mono text-ink">a3f9c21</span><span class="text-ink-soft truncate">修正結帳頁面計算錯誤</span><span class="ml-auto text-ink-faint whitespace-nowrap">12 分鐘前</span>
  </div>
</div>`,
    },
    {
      name: '評分徽章',
      en: 'Rating Badges',
      tags: ['評分', '商品'],
      spec: [
        '三種評分徽章：琥珀色淡底膠囊（fa-star + 4.8 + 評論數）、emerald 實心方塊分數（9.2 + 「極佳」文字，常見於訂房網站）、單色極簡（星星 + 分數）。',
        '分數使用等寬數字與粗體，評論數為灰色小字。',
        '三者垂直排列，展示不同情境下的用法。',
      ],
      html: `<div class="flex flex-col items-center gap-4">
  <span class="inline-flex items-center gap-1.5 h-7 px-2.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-semibold"><i class="fa-solid fa-star text-[10px]"></i>4.8<span class="font-normal text-ink-faint">（2,481 則評論）</span></span>
  <span class="inline-flex items-center gap-2.5"><span class="w-9 h-9 rounded-lg rounded-bl-none bg-emerald-600 text-white grid place-items-center text-sm font-bold tabular-nums">9.2</span><span class="text-left leading-tight"><span class="block text-sm font-semibold text-ink">極佳</span><span class="block text-[11px] text-ink-faint">1,204 則住客評價</span></span></span>
  <span class="inline-flex items-center gap-1 text-sm"><i class="fa-solid fa-star text-ink text-xs"></i><span class="font-semibold text-ink tabular-nums">4.92</span><span class="text-ink-faint">· 318 則</span></span>
</div>`,
    },
    {
      name: '價格標籤',
      en: 'Price Tags',
      tags: ['電商', '折扣'],
      spec: [
        '現價大字粗體、原價刪除線灰字，右側為 rose 實心「-25%」折扣標籤。',
        '下方另有兩種標籤：吊牌造型（左側斜切角 + 小圓孔）的「特價」標籤，以及 emerald 淡底的「免運費」小膠囊（fa-truck-fast）。',
        '價格使用等寬數字。',
      ],
      html: `<div class="flex flex-col items-center gap-4">
  <div class="flex items-center gap-2.5"><span class="text-2xl font-bold text-ink tabular-nums">$2,990</span><span class="text-sm text-ink-faint line-through tabular-nums">$3,990</span><span class="px-1.5 py-0.5 rounded-md bg-rose-500 text-white text-xs font-bold">-25%</span></div>
  <div class="flex items-center gap-3">
    <span class="relative inline-flex items-center h-7 pl-5 pr-3 bg-amber-400 text-black text-xs font-bold [clip-path:polygon(12px_0,100%_0,100%_100%,12px_100%,0_50%)]"><span class="absolute left-[9px] w-1.5 h-1.5 rounded-full bg-white/90"></span>特價</span>
    <span class="inline-flex items-center gap-1.5 h-6 px-2 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-medium"><i class="fa-solid fa-truck-fast text-[10px]"></i>免運費</span>
  </div>
</div>`,
    },
    {
      name: '限時動態頭像',
      en: 'Story Ring Avatars',
      tags: ['頭像', '漸層外環'],
      spec: [
        '一排 56px 圓形頭像，未讀的限時動態外圍有 amber → pink → violet 的漸層外環（2px 外環 + 2px 背景色間隔）。',
        '已讀的頭像外環為灰色；第一個為「你的動態」，右下角有主色圓形 fa-plus 按鈕。',
        '頭像下方為 11px 名稱，超出寬度以省略號截斷。',
      ],
      html: `<div class="flex gap-4 text-center">
  <div class="w-16"><span class="relative mx-auto block w-14 h-14 p-[2px] rounded-full bg-line"><span class="block w-full h-full rounded-full ring-2 ring-canvas bg-gradient-to-br from-zinc-300 to-zinc-500 grid place-items-center text-white font-semibold">我</span><span class="absolute -right-0.5 -bottom-0.5 w-5 h-5 rounded-full bg-brand-600 text-white grid place-items-center text-[9px] ring-2 ring-canvas"><i class="fa-solid fa-plus"></i></span></span><p class="mt-1.5 text-[11px] text-ink-soft truncate">你的動態</p></div>
  <div class="w-16"><span class="mx-auto block w-14 h-14 p-[2px] rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-violet-600"><span class="block w-full h-full rounded-full ring-2 ring-canvas bg-gradient-to-br from-sky-400 to-blue-600 grid place-items-center text-white font-semibold">晴</span></span><p class="mt-1.5 text-[11px] text-ink truncate">yuching</p></div>
  <div class="w-16"><span class="mx-auto block w-14 h-14 p-[2px] rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-violet-600"><span class="block w-full h-full rounded-full ring-2 ring-canvas bg-gradient-to-br from-emerald-400 to-teal-600 grid place-items-center text-white font-semibold">豪</span></span><p class="mt-1.5 text-[11px] text-ink truncate">hao.design</p></div>
  <div class="w-16"><span class="mx-auto block w-14 h-14 p-[2px] rounded-full bg-line"><span class="block w-full h-full rounded-full ring-2 ring-canvas bg-gradient-to-br from-rose-300 to-pink-500 grid place-items-center text-white font-semibold">妤</span></span><p class="mt-1.5 text-[11px] text-ink-faint truncate">yu.photo</p></div>
</div>`,
    },
    {
      name: '等級經驗徽章',
      en: 'Level & XP Badge',
      tags: ['遊戲化', '等級'],
      spec: [
        '左側為漸層圓角方塊中的「Lv.12」等級文字與小型 fa-bolt 圖示，右側為稱號「資深貢獻者」。',
        '下方為經驗值進度條（violet → fuchsia 漸層）與「2,480 / 3,000 XP」等寬數字。',
        '整體包在膠囊形白底卡片中，寬 280px。',
      ],
      html: `<div class="w-[280px] p-3.5 rounded-2xl border border-line bg-surface shadow-sm">
  <div class="flex items-center gap-3">
    <span class="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white grid place-items-center leading-none shadow-md shadow-violet-500/30"><span class="text-center"><i class="fa-solid fa-bolt text-[9px] block mb-0.5"></i><span class="text-xs font-bold">Lv.12</span></span></span>
    <div class="flex-1"><p class="text-sm font-semibold text-ink">資深貢獻者</p><p class="text-[11px] text-ink-faint">距離下一級還差 520 XP</p></div>
  </div>
  <div class="mt-3 h-2 rounded-full bg-subtle overflow-hidden"><div class="h-full w-[83%] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"></div></div>
  <p class="mt-1.5 text-right text-[11px] font-mono text-ink-faint">2,480 / 3,000 XP</p>
</div>`,
    },
    {
      name: '檔案類型標籤',
      en: 'File Type Chips',
      tags: ['檔案', '格式'],
      spec: [
        '各種檔案格式的標籤：PDF（rose）、DOCX（sky）、XLSX（emerald）、PNG（violet）、ZIP（amber）、MP4（pink），各附對應的 fa-file-* 圖示。',
        '標籤為等寬字 11px 大寫、淡色底、圓角 6px。',
        '下方示範檔案列：檔名 + 類型標籤 + 檔案大小。',
      ],
      html: `<div class="space-y-4">
  <div class="flex flex-wrap gap-1.5 justify-center max-w-xs font-mono text-[11px] font-semibold">
    <span class="inline-flex items-center gap-1 h-6 px-2 rounded-md bg-rose-500/10 text-rose-600 dark:text-rose-400"><i class="fa-solid fa-file-pdf text-[10px]"></i>PDF</span>
    <span class="inline-flex items-center gap-1 h-6 px-2 rounded-md bg-sky-500/10 text-sky-600 dark:text-sky-400"><i class="fa-solid fa-file-word text-[10px]"></i>DOCX</span>
    <span class="inline-flex items-center gap-1 h-6 px-2 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"><i class="fa-solid fa-file-excel text-[10px]"></i>XLSX</span>
    <span class="inline-flex items-center gap-1 h-6 px-2 rounded-md bg-violet-500/10 text-violet-600 dark:text-violet-400"><i class="fa-solid fa-file-image text-[10px]"></i>PNG</span>
    <span class="inline-flex items-center gap-1 h-6 px-2 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400"><i class="fa-solid fa-file-zipper text-[10px]"></i>ZIP</span>
    <span class="inline-flex items-center gap-1 h-6 px-2 rounded-md bg-pink-500/10 text-pink-600 dark:text-pink-400"><i class="fa-solid fa-file-video text-[10px]"></i>MP4</span>
  </div>
  <div class="flex items-center gap-3 p-3 rounded-xl border border-line bg-surface text-sm"><span class="flex-1 text-ink truncate">第三季營運報告</span><span class="inline-flex items-center h-5 px-1.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 font-mono text-[10px] font-semibold">PDF</span><span class="text-xs text-ink-faint">2.4 MB</span></div>
</div>`,
    },
  ],
});
