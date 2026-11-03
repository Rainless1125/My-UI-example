(window.UI_ATLAS = window.UI_ATLAS || []).push({
  id: 'feedback',
  name: '通知與回饋',
  en: 'Alerts & Feedback',
  icon: 'fa-regular fa-bell',
  desc: '警示框、Toast、橫幅、提示工具、空狀態、錯誤頁與系統狀態，讓使用者隨時知道「現在發生了什麼事」。',
  items: [
    {
      name: '四態警示框',
      en: 'Alert Variants',
      tags: ['Alert', '語意色'],
      spec: [
        '資訊、成功、警告、錯誤四種警示，背景為對應色 8% 淡色、1px 對應色 20% 邊框、圓角 12px。',
        '左側為對應語意圖示（fa-circle-info、fa-circle-check、fa-triangle-exclamation、fa-circle-xmark），右側為粗體標題與說明。',
        '使用 role="alert"（錯誤）或 role="status"（其他），深色模式文字改用 300–400 色階。',
      ],
      html: `<div class="w-full max-w-md space-y-2.5 text-sm">
  <div role="status" class="flex gap-3 p-3.5 rounded-xl bg-sky-500/[.08] border border-sky-500/20 text-sky-800 dark:text-sky-300"><i class="fa-solid fa-circle-info mt-0.5"></i><p><span class="font-semibold">系統維護通知</span>：週六凌晨 2 點將進行例行維護。</p></div>
  <div role="status" class="flex gap-3 p-3.5 rounded-xl bg-emerald-500/[.08] border border-emerald-500/20 text-emerald-800 dark:text-emerald-300"><i class="fa-solid fa-circle-check mt-0.5"></i><p><span class="font-semibold">付款成功</span>：收據已寄送至你的信箱。</p></div>
  <div role="status" class="flex gap-3 p-3.5 rounded-xl bg-amber-500/[.08] border border-amber-500/25 text-amber-800 dark:text-amber-300"><i class="fa-solid fa-triangle-exclamation mt-0.5"></i><p><span class="font-semibold">即將到期</span>：你的方案將在 3 天後到期。</p></div>
  <div role="alert" class="flex gap-3 p-3.5 rounded-xl bg-rose-500/[.08] border border-rose-500/20 text-rose-800 dark:text-rose-300"><i class="fa-solid fa-circle-xmark mt-0.5"></i><p><span class="font-semibold">上傳失敗</span>：檔案超過 10 MB 上限。</p></div>
</div>`,
    },
    {
      name: '強調邊框警示',
      en: 'Accent Border Alert',
      tags: ['Alert', '動作按鈕'],
      spec: [
        '白底警示卡片，左側 4px 琥珀色強調邊框，左上為圓形淡琥珀底的 fa-shield-halved 圖示。',
        '內容含標題、說明，以及兩個文字按鈕「立即設定」（主色）與「稍後提醒」（灰色）。',
        '右上角為 fa-xmark 關閉按鈕，點擊後淡出。',
      ],
      html: `<div data-dismiss class="relative w-full max-w-md flex gap-3.5 p-4 pl-5 rounded-xl border border-line bg-surface shadow-soft before:absolute before:left-0 before:top-3 before:bottom-3 before:w-1 before:rounded-r before:bg-amber-500">
  <span class="w-9 h-9 shrink-0 rounded-full bg-amber-500/10 text-amber-600 grid place-items-center"><i class="fa-solid fa-shield-halved text-sm"></i></span>
  <div class="flex-1">
    <p class="text-sm font-semibold text-ink">尚未啟用兩步驟驗證</p>
    <p class="mt-1 text-sm text-ink-soft">啟用後即使密碼外洩，帳號仍能受到保護。</p>
    <div class="mt-3 flex gap-4 text-sm font-medium"><button type="button" class="text-brand-600 dark:text-brand-400 hover:underline">立即設定</button><button type="button" class="text-ink-faint hover:text-ink">稍後提醒</button></div>
  </div>
  <button type="button" onclick="UIK.dismiss(this)" aria-label="關閉" class="w-7 h-7 -mt-1 -mr-1 rounded-lg grid place-items-center text-ink-faint hover:bg-subtle hover:text-ink"><i class="fa-solid fa-xmark text-xs"></i></button>
</div>`,
    },
    {
      name: '倒數進度 Toast',
      en: 'Toast with Timer',
      tags: ['Toast', '自動關閉'],
      spec: [
        '右下角浮動的成功 Toast：圓形 emerald 圖示、標題與說明，右側關閉按鈕。',
        '底部有一條 2px 的倒數進度條，5 秒內由滿到空（transform: scaleX 動畫），代表自動關閉時間。',
        'Toast 白底、圓角 14px、強陰影，寬 340px，hover 時暫停倒數（animation-play-state: paused）。',
      ],
      html: `<div class="group relative w-[340px] max-w-full flex gap-3 p-4 rounded-[14px] border border-line bg-surface shadow-lift overflow-hidden">
  <span class="w-8 h-8 shrink-0 rounded-full bg-emerald-500 text-white grid place-items-center text-xs"><i class="fa-solid fa-check"></i></span>
  <div class="flex-1"><p class="text-sm font-semibold text-ink">變更已儲存</p><p class="mt-0.5 text-[13px] text-ink-soft">你的個人資料已成功更新。</p></div>
  <button type="button" aria-label="關閉" class="w-6 h-6 rounded-md grid place-items-center text-ink-faint hover:bg-subtle"><i class="fa-solid fa-xmark text-xs"></i></button>
  <span class="absolute left-0 bottom-0 h-0.5 w-full bg-emerald-500 origin-left animate-drain group-hover:[animation-play-state:paused]"></span>
</div>`,
    },
    {
      name: '堆疊 Toast',
      en: 'Stacked Toasts',
      tags: ['Toast', '堆疊'],
      spec: [
        '多則 Toast 以卡片堆疊方式呈現：最上方完整顯示，後方兩則逐層縮小 5% 並下移 8px、透明度降低。',
        'hover 時整組展開為垂直清單，間距 8px，動畫 300ms。',
        '每則包含圖示、標題與時間。',
      ],
      html: `<div class="group relative w-80 h-[200px] flex flex-col justify-end">
  <div class="absolute inset-x-0 bottom-0 flex flex-col-reverse">
    <div class="relative z-30 flex items-center gap-3 p-3.5 rounded-xl border border-line bg-surface shadow-lift transition-all duration-300"><i class="fa-solid fa-cloud-arrow-up text-brand-500"></i><span class="flex-1 text-sm font-medium text-ink">3 個檔案上傳完成</span><span class="text-[11px] text-ink-faint">剛剛</span></div>
    <div class="relative z-20 -mb-[52px] scale-95 translate-y-[-14px] opacity-80 group-hover:mb-2 group-hover:scale-100 group-hover:translate-y-0 group-hover:opacity-100 flex items-center gap-3 p-3.5 rounded-xl border border-line bg-surface shadow-lift transition-all duration-300"><i class="fa-solid fa-user-plus text-emerald-500"></i><span class="flex-1 text-sm font-medium text-ink">林小美加入了團隊</span><span class="text-[11px] text-ink-faint">2 分鐘</span></div>
    <div class="relative z-10 -mb-[52px] scale-90 translate-y-[-28px] opacity-60 group-hover:mb-2 group-hover:scale-100 group-hover:translate-y-0 group-hover:opacity-100 flex items-center gap-3 p-3.5 rounded-xl border border-line bg-surface shadow-lift transition-all duration-300"><i class="fa-solid fa-comment text-amber-500"></i><span class="flex-1 text-sm font-medium text-ink">你有 2 則新留言</span><span class="text-[11px] text-ink-faint">5 分鐘</span></div>
  </div>
</div>`,
    },
    {
      name: '復原操作 Snackbar',
      en: 'Undo Snackbar',
      tags: ['Snackbar', '復原'],
      spec: [
        '深色（zinc-900）膠囊型提示列，左側 fa-trash-can 圖示與「已刪除 1 則對話」。',
        '右側為主色淺色文字「復原」按鈕與分隔線後的關閉圖示。',
        '置於畫面底部中央，高度 44px，適合可逆的破壞性操作。',
      ],
      html: `<div class="flex items-center gap-3 h-11 pl-4 pr-1.5 rounded-full bg-zinc-900 text-white text-sm shadow-lift ring-1 ring-white/10">
  <i class="fa-regular fa-trash-can text-zinc-400"></i>
  <span>已刪除 1 則對話</span>
  <button type="button" class="ml-3 h-8 px-3 rounded-full text-indigo-300 font-semibold hover:bg-white/10">復原</button>
  <span class="w-px h-5 bg-white/15"></span>
  <button type="button" aria-label="關閉" class="w-8 h-8 rounded-full grid place-items-center text-zinc-400 hover:text-white hover:bg-white/10"><i class="fa-solid fa-xmark text-xs"></i></button>
</div>`,
    },
    {
      name: '產品更新橫幅',
      en: 'Feature Banner',
      tags: ['Banner', '公告'],
      wide: true,
      spec: [
        '寬版橫幅，主色到 violet 的漸層背景，左側為白色 15% 底的 fa-rocket 圖示方塊。',
        '中間為標題「全新 AI 摘要功能上線」與一行說明，右側為白色實心「立即體驗」按鈕與關閉圖示。',
        '背景右側點綴大型半透明圓形裝飾。',
      ],
      html: `<div data-dismiss class="relative w-full max-w-3xl flex flex-wrap items-center gap-4 p-4 pr-5 rounded-2xl bg-gradient-to-r from-brand-600 to-violet-600 text-white overflow-hidden">
  <span class="absolute -right-10 -top-16 w-48 h-48 rounded-full bg-white/10"></span>
  <span class="relative w-11 h-11 rounded-xl bg-white/15 grid place-items-center"><i class="fa-solid fa-rocket"></i></span>
  <div class="relative flex-1 min-w-[200px]"><p class="font-semibold">全新 AI 摘要功能上線</p><p class="text-sm text-white/80">一鍵整理冗長會議紀錄，重點自動標示。</p></div>
  <button type="button" class="relative h-9 px-4 rounded-[10px] bg-white text-brand-700 text-sm font-semibold hover:bg-white/90">立即體驗</button>
  <button type="button" onclick="UIK.dismiss(this)" aria-label="關閉" class="relative w-8 h-8 rounded-lg grid place-items-center text-white/70 hover:text-white hover:bg-white/10"><i class="fa-solid fa-xmark"></i></button>
</div>`,
    },
    {
      name: 'Cookie 同意提示',
      en: 'Cookie Consent',
      tags: ['隱私', '同意'],
      spec: [
        '左下角浮動卡片，頂部為 fa-cookie-bite 圖示與標題「我們重視你的隱私」。',
        '說明文字中包含「Cookie 政策」連結；底部三個按鈕：「自訂」（文字）、「全部拒絕」（外框）、「全部接受」（深色）。',
        '卡片寬 360px、圓角 18px、強陰影。',
      ],
      html: `<div class="w-[360px] max-w-full p-5 rounded-[18px] border border-line bg-surface shadow-lift">
  <div class="flex items-center gap-2.5"><span class="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 grid place-items-center"><i class="fa-solid fa-cookie-bite"></i></span><p class="font-semibold text-ink">我們重視你的隱私</p></div>
  <p class="mt-3 text-[13px] leading-relaxed text-ink-soft">我們使用 Cookie 改善瀏覽體驗與分析流量。你可以隨時在 <a href="#" onclick="return false" class="font-medium text-ink underline underline-offset-2">Cookie 政策</a> 中調整偏好。</p>
  <div class="mt-4 flex items-center gap-2">
    <button type="button" class="mr-auto text-[13px] font-medium text-ink-soft hover:text-ink">自訂</button>
    <button type="button" class="h-9 px-3.5 rounded-[10px] border border-line text-[13px] font-medium text-ink hover:bg-subtle">全部拒絕</button>
    <button type="button" class="h-9 px-3.5 rounded-[10px] bg-ink text-canvas text-[13px] font-medium hover:opacity-85">全部接受</button>
  </div>
</div>`,
    },
    {
      name: '提示工具',
      en: 'Tooltips',
      tags: ['Tooltip', 'hover'],
      spec: [
        '三個圖示按鈕分別示範上方、下方與右側出現的深色提示框，hover 或 focus 時以淡入與 4px 位移出現。',
        '提示框為 ink 色底、反白 12px 文字、圓角 6px，帶有 CSS 三角箭頭。',
        '提示框可附帶快捷鍵（kbd 樣式）。',
      ],
      html: `<div class="flex items-center gap-10 py-10">
  <button type="button" aria-label="複製" class="group relative w-10 h-10 rounded-[10px] border border-line bg-surface grid place-items-center text-ink-soft shadow-sm">
    <i class="fa-regular fa-copy"></i>
    <span role="tooltip" class="pointer-events-none absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded-md bg-ink text-canvas text-xs opacity-100 group-focus-visible:opacity-100 transition after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-ink">複製連結 <kbd class="ml-1 opacity-60 font-sans">Ctrl C</kbd></span>
  </button>
  <button type="button" aria-label="下載" class="group relative w-10 h-10 rounded-[10px] border border-line bg-surface grid place-items-center text-ink-soft shadow-sm">
    <i class="fa-solid fa-download"></i>
    <span role="tooltip" class="pointer-events-none absolute top-full mt-2.5 left-1/2 -translate-x-1/2 -translate-y-1 whitespace-nowrap px-2 py-1 rounded-md bg-ink text-canvas text-xs opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 transition after:absolute after:bottom-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-b-ink">下載 PDF</span>
  </button>
  <button type="button" aria-label="說明" class="group relative w-10 h-10 rounded-full bg-subtle grid place-items-center text-ink-soft">
    <i class="fa-solid fa-question"></i>
    <span role="tooltip" class="pointer-events-none absolute left-full ml-2.5 top-1/2 -translate-y-1/2 -translate-x-1 whitespace-nowrap px-2 py-1 rounded-md bg-ink text-canvas text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 transition after:absolute after:right-full after:top-1/2 after:-translate-y-1/2 after:border-4 after:border-transparent after:border-r-ink">說明中心</span>
  </button>
</div>`,
    },
    {
      name: '使用者懸停卡',
      en: 'Hover Card',
      tags: ['Popover', '使用者'],
      spec: [
        '滑鼠移到 @使用者名稱 連結上時，下方浮現使用者資訊卡：頭像、姓名、帳號、簡介與加入日期（fa-calendar）。',
        '卡片右上為「追蹤」小按鈕，底部顯示追蹤人數。',
        '卡片寬 288px、圓角 14px，延遲 150ms 出現避免誤觸。',
      ],
      html: `<div class="h-64 pt-2">
  <p class="text-sm text-ink-soft">本篇文章由 <span class="group relative inline-block"><a href="#" onclick="return false" class="font-medium text-brand-600 dark:text-brand-400 hover:underline">@kevin.design</a>
    <span class="absolute left-0 top-full z-10 mt-2 w-72 p-4 rounded-[14px] border border-line bg-surface shadow-lift text-left opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition delay-150">
      <span class="flex items-start justify-between"><span class="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-400 to-sky-500 text-white grid place-items-center font-semibold">K</span><button type="button" class="h-7 px-3 rounded-full bg-ink text-canvas text-xs font-medium">追蹤</button></span>
      <span class="block mt-3 font-semibold text-ink">Kevin Huang</span>
      <span class="block text-xs text-ink-faint">@kevin.design</span>
      <span class="block mt-2 text-[13px] text-ink-soft leading-relaxed">介面設計師，專注於設計系統與動態互動。</span>
      <span class="mt-3 flex items-center gap-4 text-xs text-ink-faint"><span><i class="fa-regular fa-calendar mr-1"></i>2021 年加入</span><span><span class="font-semibold text-ink">3.2k</span> 追蹤者</span></span>
    </span></span> 撰寫，最後更新於昨天。</p>
  <p class="mt-1 text-xs text-ink-faint">將滑鼠移到使用者名稱上</p>
</div>`,
    },
    {
      name: '空狀態',
      en: 'Empty State',
      tags: ['空資料', '引導'],
      spec: [
        '置中的空狀態區塊：上方為 64px 圓角方塊內的 fa-folder-open 插圖圖示，周圍有兩個裝飾小圖示。',
        '標題「還沒有任何專案」、說明文字，以及兩個按鈕「建立專案」（深色 + fa-plus）與「匯入」（外框）。',
        '外框為 2px 虛線圓角容器。',
      ],
      html: `<div class="w-full max-w-md px-6 py-10 rounded-2xl border-2 border-dashed border-line text-center">
  <div class="relative mx-auto w-16 h-16">
    <span class="absolute inset-0 rounded-2xl bg-surface border border-line shadow-soft grid place-items-center text-2xl text-ink-faint"><i class="fa-regular fa-folder-open"></i></span>
    <span class="absolute -right-3 -top-2 w-7 h-7 rounded-lg bg-brand-500/10 text-brand-500 grid place-items-center text-xs rotate-12"><i class="fa-solid fa-star"></i></span>
    <span class="absolute -left-3 bottom-0 w-6 h-6 rounded-lg bg-amber-500/10 text-amber-500 grid place-items-center text-[10px] -rotate-12"><i class="fa-solid fa-bolt"></i></span>
  </div>
  <h4 class="mt-5 font-semibold text-ink">還沒有任何專案</h4>
  <p class="mt-1.5 text-sm text-ink-soft">建立第一個專案，開始與團隊一起協作吧。</p>
  <div class="mt-5 flex justify-center gap-2">
    <button type="button" class="h-9 px-4 rounded-[10px] bg-ink text-canvas text-sm font-medium hover:opacity-85"><i class="fa-solid fa-plus mr-1.5 text-xs"></i>建立專案</button>
    <button type="button" class="h-9 px-4 rounded-[10px] border border-line bg-surface text-sm font-medium text-ink hover:bg-subtle"><i class="fa-solid fa-file-import mr-1.5 text-xs text-ink-faint"></i>匯入</button>
  </div>
</div>`,
    },
    {
      name: '404 錯誤頁',
      en: '404 Error State',
      tags: ['錯誤頁', '404'],
      spec: [
        '大字「404」使用主色到 violet 的漸層文字（bg-clip-text），字重 800、字距緊密。',
        '下方為標題「找不到這個頁面」與說明，以及「回到首頁」（fa-house）與「聯絡客服」兩個按鈕。',
        '底部附一排快速連結：文件、狀態頁、社群。',
      ],
      html: `<div class="text-center max-w-sm">
  <p class="text-7xl font-extrabold tracking-tighter bg-gradient-to-br from-brand-500 to-violet-500 bg-clip-text text-transparent">404</p>
  <h4 class="mt-3 text-lg font-semibold text-ink">找不到這個頁面</h4>
  <p class="mt-1.5 text-sm text-ink-soft">你要找的頁面可能已被移動、刪除，或網址輸入有誤。</p>
  <div class="mt-5 flex justify-center gap-2">
    <button type="button" class="h-9 px-4 rounded-[10px] bg-ink text-canvas text-sm font-medium hover:opacity-85"><i class="fa-solid fa-house mr-1.5 text-xs"></i>回到首頁</button>
    <button type="button" class="h-9 px-4 rounded-[10px] border border-line bg-surface text-sm font-medium text-ink hover:bg-subtle">聯絡客服</button>
  </div>
  <div class="mt-6 flex justify-center gap-5 text-xs text-ink-faint"><a href="#" onclick="return false" class="hover:text-ink"><i class="fa-regular fa-file-lines mr-1"></i>文件</a><a href="#" onclick="return false" class="hover:text-ink"><i class="fa-solid fa-signal mr-1"></i>狀態頁</a><a href="#" onclick="return false" class="hover:text-ink"><i class="fa-regular fa-comments mr-1"></i>社群</a></div>
</div>`,
    },
    {
      name: '成功結果頁',
      en: 'Success Result',
      tags: ['成功', '結果'],
      spec: [
        '中央為 56px emerald 實心圓形 fa-check 圖示，外圍有兩層向外擴散的淡綠色光環。',
        '標題「訂單已完成」與說明，下方為灰底資訊列：訂單編號（等寬字）與複製按鈕。',
        '底部兩個按鈕「查看訂單」與「繼續購物」。',
      ],
      html: `<div class="w-80 text-center">
  <div class="relative mx-auto w-14 h-14">
    <span class="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping [animation-duration:2s]"></span>
    <span class="absolute -inset-3 rounded-full bg-emerald-500/10"></span>
    <span class="relative w-14 h-14 rounded-full bg-emerald-500 text-white grid place-items-center text-xl shadow-lg shadow-emerald-500/30"><i class="fa-solid fa-check"></i></span>
  </div>
  <h4 class="mt-6 text-lg font-semibold text-ink">訂單已完成</h4>
  <p class="mt-1 text-sm text-ink-soft">我們已寄送確認信至你的電子郵件。</p>
  <div class="mt-4 flex items-center justify-between h-10 pl-3.5 pr-1 rounded-[10px] bg-subtle text-sm"><span class="text-ink-faint">訂單編號</span><span class="flex items-center gap-1 font-mono font-medium text-ink">#AT-20491<button type="button" onclick="UIK.copy(this,'AT-20491')" aria-label="複製" class="w-8 h-8 rounded-lg grid place-items-center text-ink-faint hover:text-ink"><i class="fa-regular fa-copy text-xs"></i></button></span></div>
  <div class="mt-4 grid grid-cols-2 gap-2"><button type="button" class="h-10 rounded-[10px] border border-line text-sm font-medium text-ink hover:bg-subtle">查看訂單</button><button type="button" class="h-10 rounded-[10px] bg-ink text-canvas text-sm font-medium hover:opacity-85">繼續購物</button></div>
</div>`,
    },
    {
      name: '通知中心面板',
      en: 'Notification Center',
      tags: ['通知', '列表'],
      spec: [
        '下拉式通知面板：標題「通知」、未讀數量徽章與「全部標為已讀」連結，下方為「全部 / 提及」分頁。',
        '每則通知為頭像（或系統圖示）、內容文字（姓名粗體）、時間；未讀項目右側有主色圓點且背景為淡主色。',
        '其中一則附帶「接受 / 拒絕」行內按鈕。',
      ],
      html: `<div class="w-[360px] max-w-full rounded-2xl border border-line bg-surface shadow-lift">
  <div class="flex items-center justify-between px-4 pt-4"><p class="font-semibold text-ink">通知 <span class="ml-1 px-1.5 rounded-full bg-brand-600 text-white text-[10px] align-middle">3</span></p><button type="button" class="text-xs font-medium text-ink-soft hover:text-ink"><i class="fa-solid fa-check-double mr-1"></i>全部標為已讀</button></div>
  <div class="mt-3 px-4 flex gap-4 border-b border-line text-[13px]"><button type="button" class="-mb-px pb-2 border-b-2 border-ink font-medium text-ink">全部</button><button type="button" class="pb-2 text-ink-faint">提及</button></div>
  <div class="divide-y divide-line text-[13px]">
    <div class="flex gap-3 p-4 bg-brand-500/[.04]"><span class="w-9 h-9 shrink-0 rounded-full bg-rose-400 text-white grid place-items-center text-xs font-semibold">邱</span><div class="flex-1"><p class="text-ink-soft"><span class="font-semibold text-ink">邱思穎</span> 邀請你加入「品牌重塑」專案</p><p class="mt-1 text-[11px] text-ink-faint">3 分鐘前</p><div class="mt-2.5 flex gap-2"><button type="button" class="h-7 px-3 rounded-md bg-ink text-canvas text-xs font-medium">接受</button><button type="button" class="h-7 px-3 rounded-md border border-line text-xs font-medium text-ink">拒絕</button></div></div><span class="w-2 h-2 mt-1.5 rounded-full bg-brand-600"></span></div>
    <div class="flex gap-3 p-4 bg-brand-500/[.04]"><span class="w-9 h-9 shrink-0 rounded-full bg-emerald-500/10 text-emerald-600 grid place-items-center"><i class="fa-solid fa-circle-check"></i></span><div class="flex-1"><p class="text-ink-soft">部署 <span class="font-mono font-medium text-ink">v2.4.1</span> 已成功上線</p><p class="mt-1 text-[11px] text-ink-faint">1 小時前</p></div><span class="w-2 h-2 mt-1.5 rounded-full bg-brand-600"></span></div>
    <div class="flex gap-3 p-4"><span class="w-9 h-9 shrink-0 rounded-full bg-sky-500 text-white grid place-items-center text-xs font-semibold">何</span><div class="flex-1"><p class="text-ink-soft"><span class="font-semibold text-ink">何俊傑</span> 在設計稿中留言提及你</p><p class="mt-1 text-[11px] text-ink-faint">昨天</p></div></div>
  </div>
</div>`,
    },
    {
      name: '系統狀態指示',
      en: 'System Status',
      tags: ['狀態頁', '可用性'],
      spec: [
        '狀態頁頂部卡片：綠色呼吸燈圓點與「所有系統運作正常」，右側為最後更新時間。',
        '下方各服務列：名稱、30 天可用率長條圖（每天一條細長條，綠色正常、琥珀色降級、紅色中斷）與百分比。',
        '長條 hover 時加深顏色。',
      ],
      html: `<div class="w-[440px] max-w-full rounded-2xl border border-line bg-surface shadow-sm">
  <div class="flex items-center gap-3 p-4 border-b border-line">
    <span class="relative flex w-2.5 h-2.5"><span class="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75"></span><span class="relative w-2.5 h-2.5 rounded-full bg-emerald-500"></span></span>
    <p class="flex-1 text-sm font-semibold text-ink">所有系統運作正常</p>
    <span class="text-[11px] text-ink-faint">更新於 2 分鐘前</span>
  </div>
  <div class="p-4 space-y-4 text-[13px]">
    <div><div class="flex justify-between mb-1.5"><span class="font-medium text-ink">API 服務</span><span class="text-ink-faint">99.98%</span></div><div class="flex gap-[3px] h-6"><span class="flex-1 rounded-sm bg-emerald-500 hover:bg-emerald-600"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-amber-400"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span></div></div>
    <div><div class="flex justify-between mb-1.5"><span class="font-medium text-ink">資料庫</span><span class="text-ink-faint">99.72%</span></div><div class="flex gap-[3px] h-6"><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-rose-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-amber-400"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span><span class="flex-1 rounded-sm bg-emerald-500"></span></div></div>
    <div class="flex justify-between text-[11px] text-ink-faint"><span>20 天前</span><span>今天</span></div>
  </div>
</div>`,
    },
    {
      name: '表單錯誤摘要',
      en: 'Form Error Summary',
      tags: ['表單', '錯誤'],
      spec: [
        '表單頂部的錯誤摘要區塊：rose 淡底、fa-circle-exclamation 圖示與標題「有 3 個欄位需要修正」。',
        '下方為錯誤清單，每項為可點擊的錨點連結（底線），點擊後聚焦到對應欄位。',
        '使用 role="alert" 與 aria-labelledby，方便螢幕閱讀器朗讀。',
      ],
      html: `<div role="alert" aria-labelledby="err-title" class="w-full max-w-md p-4 rounded-xl bg-rose-500/[.07] border border-rose-500/25">
  <p id="err-title" class="flex items-center gap-2 text-sm font-semibold text-rose-700 dark:text-rose-300"><i class="fa-solid fa-circle-exclamation"></i>有 3 個欄位需要修正</p>
  <ul class="mt-2.5 ml-6 space-y-1.5 text-[13px] text-rose-700 dark:text-rose-300 list-disc marker:text-rose-400">
    <li><a href="#" onclick="return false" class="underline underline-offset-2 hover:no-underline">電子郵件格式不正確</a></li>
    <li><a href="#" onclick="return false" class="underline underline-offset-2 hover:no-underline">密碼至少需要 8 個字元</a></li>
    <li><a href="#" onclick="return false" class="underline underline-offset-2 hover:no-underline">請同意服務條款</a></li>
  </ul>
</div>`,
    },
    {
      name: '用量額度警告',
      en: 'Usage Limit Warning',
      tags: ['配額', '進度'],
      spec: [
        '琥珀色調的警告卡片：左側 fa-gauge-high 圖示，標題「AI 額度即將用完」與「已使用 92%」。',
        '中間為分段進度條（已用部分琥珀色），下方顯示「剩餘 800 / 10,000 次 · 11/30 重置」。',
        '右側為「升級方案」主要按鈕。',
      ],
      html: `<div class="w-full max-w-md p-4 rounded-2xl border border-amber-500/30 bg-amber-500/[.06]">
  <div class="flex items-start gap-3">
    <span class="w-9 h-9 shrink-0 rounded-xl bg-amber-500/15 text-amber-600 grid place-items-center"><i class="fa-solid fa-gauge-high text-sm"></i></span>
    <div class="flex-1">
      <div class="flex items-center justify-between"><p class="text-sm font-semibold text-ink">AI 額度即將用完</p><span class="text-sm font-bold text-amber-600 tabular-nums">92%</span></div>
      <div class="mt-2.5 h-2 rounded-full bg-amber-500/15 overflow-hidden"><div class="h-full w-[92%] rounded-full bg-gradient-to-r from-amber-400 to-orange-500"></div></div>
      <div class="mt-2 flex items-center justify-between"><p class="text-xs text-ink-soft">剩餘 800 / 10,000 次 · 11/30 重置</p><button type="button" class="h-7 px-3 rounded-lg bg-ink text-canvas text-xs font-medium">升級方案</button></div>
    </div>
  </div>
</div>`,
    },
    {
      name: '新版本提示',
      en: 'Update Available',
      tags: ['更新', '膠囊'],
      spec: [
        '畫面頂部置中的膠囊提示，左側為旋轉的 fa-arrows-rotate 圖示與「有新版本可用」。',
        '右側為主色「重新整理」按鈕；膠囊白底細框、柔和陰影，進場時由上方滑入。',
        '另一個變體為行內小徽章「v2.4 新功能」，hover 時箭頭右移。',
      ],
      html: `<div class="flex flex-col items-center gap-5">
  <div class="flex items-center gap-3 h-11 pl-4 pr-1.5 rounded-full border border-line bg-surface shadow-lift animate-fade-up">
    <i class="fa-solid fa-arrows-rotate text-brand-500 animate-spin-slow"></i>
    <span class="text-sm text-ink">有新版本可用</span>
    <button type="button" class="h-8 px-3.5 rounded-full bg-brand-600 text-white text-xs font-semibold hover:bg-brand-500">重新整理</button>
  </div>
  <a href="#" onclick="return false" class="group inline-flex items-center gap-2 h-8 pl-1 pr-3 rounded-full border border-line bg-surface text-xs text-ink-soft hover:border-ink-faint/50">
    <span class="px-2 py-0.5 rounded-full bg-ink text-canvas font-semibold">v2.4</span>全新的協作白板功能<i class="fa-solid fa-arrow-right text-[10px] transition-transform group-hover:translate-x-0.5"></i>
  </a>
</div>`,
    },
    {
      name: '行內確認氣泡',
      en: 'Inline Confirm Popover',
      tags: ['確認', 'Popconfirm'],
      spec: [
        '按下「刪除」按鈕後，按鈕上方出現的小型確認氣泡：fa-triangle-exclamation 圖示與「確定要刪除這則留言？」。',
        '氣泡內有「取消」與「刪除」（rose 實心）兩個小按鈕，底部帶指向觸發按鈕的三角箭頭。',
        '氣泡寬 240px、圓角 12px。',
      ],
      html: `<div class="relative pt-28">
  <div class="absolute bottom-12 left-1/2 -translate-x-1/2 w-60 p-3.5 rounded-xl border border-line bg-surface shadow-lift after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:-mt-[5px] after:w-2.5 after:h-2.5 after:rotate-45 after:bg-surface after:border-r after:border-b after:border-line">
    <p class="flex gap-2 text-[13px] text-ink"><i class="fa-solid fa-triangle-exclamation mt-0.5 text-amber-500"></i>確定要刪除這則留言？此操作無法復原。</p>
    <div class="mt-3 flex justify-end gap-1.5"><button type="button" class="h-7 px-2.5 rounded-md text-xs font-medium text-ink-soft hover:bg-subtle">取消</button><button type="button" class="h-7 px-2.5 rounded-md bg-rose-600 text-white text-xs font-medium hover:bg-rose-500">刪除</button></div>
  </div>
  <button type="button" class="h-9 px-3.5 rounded-[10px] border border-rose-500/30 bg-rose-500/10 text-rose-600 text-sm font-medium"><i class="fa-regular fa-trash-can mr-1.5 text-xs"></i>刪除</button>
</div>`,
    },
    {
      name: '連線中斷提示',
      en: 'Offline Indicator',
      tags: ['離線', '重新連線'],
      spec: [
        '頁面頂部的深色細長提示列：fa-wifi 圖示加上斜線（以疊加 fa-slash 實作）與「連線中斷，正在重新連線…」。',
        '右側為旋轉的 fa-circle-notch 與「立即重試」文字按鈕。',
        '下方另一個變體為恢復連線狀態：emerald 背景與 fa-check「已恢復連線」。',
      ],
      html: `<div class="w-full max-w-md space-y-3">
  <div class="flex items-center gap-3 h-10 px-4 rounded-xl bg-zinc-900 text-white text-[13px]">
    <span class="relative w-4 h-4 grid place-items-center"><i class="fa-solid fa-wifi text-zinc-400 text-xs"></i><i class="fa-solid fa-slash absolute text-rose-400 text-xs"></i></span>
    <span class="flex-1">連線中斷，正在重新連線…</span>
    <i class="fa-solid fa-circle-notch fa-spin text-zinc-400 text-xs"></i>
    <button type="button" class="font-medium text-indigo-300 hover:text-indigo-200">立即重試</button>
  </div>
  <div class="flex items-center gap-3 h-10 px-4 rounded-xl bg-emerald-600 text-white text-[13px]"><i class="fa-solid fa-check"></i>已恢復連線，資料已同步</div>
</div>`,
    },
    {
      name: '功能導覽提示',
      en: 'Onboarding Coachmark',
      tags: ['導覽', '新手引導'],
      spec: [
        '指向某個按鈕的導覽氣泡：被指向的按鈕外圍有主色脈衝光環，氣泡位於按鈕下方並有箭頭。',
        '氣泡為主色實心背景、白色文字，包含步驟「2 / 4」、標題、說明，以及「略過」與「下一步」按鈕。',
        '底部以四個小圓點顯示進度。',
      ],
      html: `<div class="flex flex-col items-center">
  <button type="button" class="relative h-9 px-4 rounded-[10px] border border-line bg-surface text-sm font-medium text-ink shadow-sm"><span class="absolute -inset-1.5 rounded-[14px] border-2 border-brand-500 animate-pulse"></span><i class="fa-solid fa-share-nodes mr-1.5 text-xs"></i>分享</button>
  <div class="relative mt-5 w-72 p-4 rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/30 before:absolute before:-top-1.5 before:left-1/2 before:-translate-x-1/2 before:w-3 before:h-3 before:rotate-45 before:bg-brand-600">
    <p class="text-[11px] font-semibold text-white/70">步驟 2 / 4</p>
    <p class="mt-1 font-semibold">邀請團隊成員</p>
    <p class="mt-1 text-[13px] text-white/85 leading-relaxed">點擊「分享」即可產生邀請連結，與夥伴一起編輯。</p>
    <div class="mt-4 flex items-center">
      <div class="flex gap-1"><span class="w-1.5 h-1.5 rounded-full bg-white/40"></span><span class="w-4 h-1.5 rounded-full bg-white"></span><span class="w-1.5 h-1.5 rounded-full bg-white/40"></span><span class="w-1.5 h-1.5 rounded-full bg-white/40"></span></div>
      <button type="button" class="ml-auto h-7 px-2.5 text-xs font-medium text-white/80 hover:text-white">略過</button>
      <button type="button" class="h-7 px-3 rounded-lg bg-white text-brand-700 text-xs font-semibold">下一步</button>
    </div>
  </div>
</div>`,
    },
  ],
});
