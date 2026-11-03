(window.UI_ATLAS = window.UI_ATLAS || []).push({
  id: 'buttons',
  name: '按鈕',
  en: 'Buttons',
  icon: 'fa-solid fa-hand-pointer',
  desc: '從基礎三層級、載入狀態、分割下拉，到流光邊框、磁吸與波紋等微互動，涵蓋產品介面最常用的 20 種按鈕。',
  items: [
    {
      name: '基礎按鈕層級',
      en: 'Button Hierarchy',
      tags: ['基礎', '層級'],
      spec: [
        '一組並排的三個按鈕：主要（實心深色）、次要（白底細框）、幽靈（無底色）。',
        '高度 40px、圓角 10px、左右內距 16px，文字 14px 中等字重，主要按鈕附右箭頭圖示 fa-arrow-right。',
        'hover 時主要按鈕略微變淡、次要按鈕底色轉為淺灰；focus-visible 顯示 2px 主色外框。',
      ],
      html: `<div class="flex flex-wrap items-center gap-3">
  <button type="button" class="inline-flex items-center gap-2 h-10 px-4 rounded-[10px] bg-ink text-canvas text-sm font-medium hover:opacity-85 active:scale-[.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas transition">
    開始使用 <i class="fa-solid fa-arrow-right text-xs"></i>
  </button>
  <button type="button" class="inline-flex items-center gap-2 h-10 px-4 rounded-[10px] border border-line bg-surface text-sm font-medium text-ink shadow-sm hover:bg-subtle active:scale-[.98] transition">
    <i class="fa-regular fa-file-lines text-ink-faint"></i> 查看文件
  </button>
  <button type="button" class="inline-flex items-center gap-2 h-10 px-4 rounded-[10px] text-sm font-medium text-ink-soft hover:text-ink hover:bg-subtle transition">
    稍後再說
  </button>
</div>`,
    },
    {
      name: '漸層光暈按鈕',
      en: 'Gradient Glow CTA',
      tags: ['漸層', '發光'],
      spec: [
        '按鈕背景為 indigo → violet → fuchsia 的水平漸層，白色文字，圓角全膠囊。',
        '按鈕後方放一層同樣漸層、模糊 16px 的光暈，平時透明度 40%，hover 時提升到 80% 並向外擴散。',
        '左側使用 fa-wand-magic-sparkles 圖示，hover 時圖示旋轉 12 度。',
      ],
      html: `<button type="button" class="group relative inline-flex">
  <span class="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 opacity-40 blur-lg transition duration-300 group-hover:opacity-80 group-hover:-inset-1.5"></span>
  <span class="relative inline-flex items-center gap-2 h-11 px-6 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white text-sm font-semibold">
    <i class="fa-solid fa-wand-magic-sparkles transition-transform duration-300 group-hover:rotate-12"></i>
    用 AI 生成設計
  </span>
</button>`,
    },
    {
      name: '流光邊框按鈕',
      en: 'Border Beam Button',
      tags: ['動畫', '邊框'],
      spec: [
        '按鈕外圍 1.5px 的邊框中有一道持續繞行的光束（conic-gradient 旋轉），光束為 indigo 到 cyan。',
        '內層為與頁面同色的底，文字深色，右側附 fa-chevron-right 圖示。',
        '光束旋轉一圈 3 秒、線性無限循環；hover 時內層底色微微變亮。',
      ],
      html: `<button type="button" class="group relative inline-flex overflow-hidden rounded-xl p-[1.5px]">
  <span class="absolute inset-[-200%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0_300deg,#6366f1_320deg,#22d3ee_340deg,transparent_360deg)]"></span>
  <span class="absolute inset-0 rounded-xl border border-line"></span>
  <span class="relative inline-flex items-center gap-2 h-10 px-5 rounded-[10.5px] bg-surface text-sm font-medium text-ink transition group-hover:bg-subtle">
    <i class="fa-solid fa-bolt text-brand-500"></i>
    升級至 Pro 方案
    <i class="fa-solid fa-chevron-right text-[10px] text-ink-faint transition group-hover:translate-x-0.5"></i>
  </span>
</button>`,
    },
    {
      name: '3D 按壓按鈕',
      en: 'Pressable 3D Button',
      tags: ['立體', '觸感'],
      spec: [
        '按鈕下方有 4px 深色實心陰影形成厚度，主色為 indigo-500，陰影為 indigo-700。',
        'active（按下）時按鈕向下位移 4px、陰影歸零，模擬實體按壓的觸感。',
        '左側放 fa-gamepad 圖示，文字白色粗體。',
      ],
      html: `<div class="flex flex-wrap gap-4">
  <button type="button" class="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-indigo-500 text-white text-sm font-semibold shadow-[0_4px_0_#4338ca] hover:bg-indigo-400 active:translate-y-1 active:shadow-none transition-all duration-100">
    <i class="fa-solid fa-gamepad"></i> 開始遊戲
  </button>
  <button type="button" class="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-surface text-ink text-sm font-semibold border-2 border-line shadow-[0_4px_0_rgb(var(--line))] hover:bg-subtle active:translate-y-1 active:shadow-none transition-all duration-100">
    <i class="fa-solid fa-gear text-ink-faint"></i> 設定
  </button>
</div>`,
    },
    {
      name: '載入狀態按鈕',
      en: 'Loading State Button',
      tags: ['狀態', '非同步'],
      spec: [
        '點擊後按鈕進入載入狀態：保持原寬度、停用、顯示旋轉圖示 fa-circle-notch 與「處理中」。',
        '完成後顯示 fa-check 與「已儲存」，約 1.3 秒後恢復原狀。',
        '按鈕為深色實心、圓角 10px，載入中游標為 not-allowed、透明度略降。',
      ],
      html: `<div class="flex flex-wrap gap-3">
  <button type="button" onclick="UIK.load(this,'已儲存')" class="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-[10px] bg-ink text-canvas text-sm font-medium hover:opacity-85 disabled:opacity-70 disabled:cursor-not-allowed transition">
    <i class="fa-regular fa-floppy-disk"></i><span>儲存變更</span>
  </button>
  <button type="button" onclick="UIK.load(this,'已發布')" class="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-[10px] bg-brand-600 text-white text-sm font-medium hover:bg-brand-500 disabled:opacity-70 disabled:cursor-not-allowed transition">
    <i class="fa-solid fa-paper-plane"></i><span>發布文章</span>
  </button>
</div>`,
    },
    {
      name: '圖示按鈕組',
      en: 'Icon Buttons',
      tags: ['圖示', '工具列'],
      spec: [
        '四種風格的方形圖示按鈕：實心、淺色調、外框、幽靈，尺寸 40×40、圓角 10px。',
        '每個按鈕都有 aria-label，hover 時向上浮動 1px 並加深底色。',
        '圖示使用 fa-plus、fa-heart、fa-share-nodes、fa-ellipsis。',
      ],
      html: `<div class="flex items-center gap-3">
  <button type="button" aria-label="新增" class="w-10 h-10 rounded-[10px] grid place-items-center bg-brand-600 text-white shadow-sm shadow-brand-600/30 hover:-translate-y-px hover:bg-brand-500 transition"><i class="fa-solid fa-plus"></i></button>
  <button type="button" aria-label="喜歡" class="w-10 h-10 rounded-[10px] grid place-items-center bg-rose-500/10 text-rose-600 dark:text-rose-400 hover:-translate-y-px hover:bg-rose-500/20 transition"><i class="fa-solid fa-heart"></i></button>
  <button type="button" aria-label="分享" class="w-10 h-10 rounded-[10px] grid place-items-center border border-line bg-surface text-ink-soft shadow-sm hover:-translate-y-px hover:text-ink transition"><i class="fa-solid fa-share-nodes"></i></button>
  <button type="button" aria-label="更多" class="w-10 h-10 rounded-[10px] grid place-items-center text-ink-soft hover:bg-subtle hover:text-ink transition"><i class="fa-solid fa-ellipsis"></i></button>
</div>`,
    },
    {
      name: '分割下拉按鈕',
      en: 'Split Button',
      tags: ['下拉', '組合'],
      spec: [
        '左側為主要動作「合併請求」，右側以細分隔線隔開的箭頭按鈕，點擊展開下拉選單。',
        '選單包含三個選項，每個選項有圖示、標題與一行灰色說明。',
        '選單白底、圓角 12px、柔和陰影，點擊外部自動關閉。',
      ],
      html: `<div class="relative inline-flex">
  <div class="inline-flex rounded-[10px] bg-emerald-600 text-white shadow-sm shadow-emerald-600/30">
    <button type="button" class="inline-flex items-center gap-2 h-10 pl-4 pr-3.5 rounded-l-[10px] text-sm font-medium hover:bg-emerald-500 transition"><i class="fa-solid fa-code-merge"></i>合併請求</button>
    <span class="w-px my-2 bg-white/30"></span>
    <button type="button" onclick="UIK.menu(this)" aria-label="更多合併方式" class="w-9 rounded-r-[10px] grid place-items-center hover:bg-emerald-500 transition"><i class="fa-solid fa-chevron-down text-[11px]"></i></button>
    <div data-menu class="hidden absolute left-0 top-12 z-10 w-64 p-1.5 rounded-xl border border-line bg-surface text-ink shadow-lift">
      <button type="button" class="w-full flex gap-3 p-2.5 rounded-lg text-left hover:bg-subtle"><i class="fa-solid fa-code-merge mt-0.5 text-emerald-500"></i><span><span class="block text-sm font-medium">建立合併提交</span><span class="block text-xs text-ink-faint">保留所有提交紀錄</span></span></button>
      <button type="button" class="w-full flex gap-3 p-2.5 rounded-lg text-left hover:bg-subtle"><i class="fa-solid fa-layer-group mt-0.5 text-brand-500"></i><span><span class="block text-sm font-medium">壓縮後合併</span><span class="block text-xs text-ink-faint">合併為單一提交</span></span></button>
      <button type="button" class="w-full flex gap-3 p-2.5 rounded-lg text-left hover:bg-subtle"><i class="fa-solid fa-code-branch mt-0.5 text-amber-500"></i><span><span class="block text-sm font-medium">變基後合併</span><span class="block text-xs text-ink-faint">維持線性歷史</span></span></button>
    </div>
  </div>
</div>`,
    },
    {
      name: '社群登入按鈕',
      en: 'Social Sign-in Buttons',
      tags: ['登入', '品牌'],
      spec: [
        '垂直排列三個全寬登入按鈕：Google、GitHub、Apple，使用 fa-brands 對應圖示。',
        'Google 為白底細框、GitHub 為深灰底、Apple 為黑底，高度 44px、圓角 10px。',
        '圖示固定在左側，文字置中，hover 時陰影加深。',
      ],
      html: `<div class="w-72 space-y-2.5">
  <button type="button" class="relative w-full h-11 rounded-[10px] border border-line bg-surface text-sm font-medium text-ink shadow-sm hover:shadow-md transition"><i class="fa-brands fa-google absolute left-4 top-1/2 -translate-y-1/2 text-[#4285F4]"></i>使用 Google 繼續</button>
  <button type="button" class="relative w-full h-11 rounded-[10px] bg-[#24292f] text-sm font-medium text-white shadow-sm hover:shadow-md hover:bg-[#32383f] transition"><i class="fa-brands fa-github absolute left-4 top-1/2 -translate-y-1/2 text-base"></i>使用 GitHub 繼續</button>
  <button type="button" class="relative w-full h-11 rounded-[10px] bg-black text-sm font-medium text-white shadow-sm hover:shadow-md dark:ring-1 dark:ring-white/15 transition"><i class="fa-brands fa-apple absolute left-4 top-1/2 -translate-y-1/2 text-base"></i>使用 Apple 繼續</button>
</div>`,
    },
    {
      name: '磁吸按鈕',
      en: 'Magnetic Button',
      tags: ['微互動', '游標'],
      spec: [
        '滑鼠在按鈕上移動時，按鈕會朝游標方向偏移（水平 30%、垂直 40% 的距離），離開時彈回原位。',
        '圓形 96px 深色按鈕，內含 fa-arrow-up-right 與「聯絡我們」兩行文字。',
        '位移使用 transform 搭配 300ms ease-out 過渡，顯得有彈性。',
      ],
      html: `<button type="button" onmousemove="UIK.magnet(event,this)" onmouseleave="UIK.magnet(null,this)" class="w-24 h-24 rounded-full bg-ink text-canvas flex flex-col items-center justify-center gap-1 text-xs font-medium shadow-lift transition-transform duration-300 ease-out">
  <i class="fa-solid fa-arrow-right -rotate-45 text-lg"></i>
  聯絡我們
</button>`,
    },
    {
      name: '波紋按鈕',
      en: 'Ripple Button',
      tags: ['Material', '點擊回饋'],
      spec: [
        '點擊位置產生由小擴大、逐漸淡出的圓形波紋，波紋顏色取自文字色並帶 28% 透明度。',
        '按鈕需 overflow-hidden 與 position:relative，波紋動畫約 600ms。',
        '提供實心主色與淺色調兩種樣式。',
      ],
      html: `<div class="flex flex-wrap gap-3">
  <button type="button" onclick="UIK.ripple(event,this)" class="relative overflow-hidden inline-flex items-center gap-2 h-10 px-5 rounded-full bg-brand-600 text-white text-sm font-medium shadow-sm hover:bg-brand-500 transition-colors"><i class="fa-solid fa-cart-shopping"></i>加入購物車</button>
  <button type="button" onclick="UIK.ripple(event,this)" class="relative overflow-hidden inline-flex items-center gap-2 h-10 px-5 rounded-full bg-brand-500/10 text-brand-700 dark:text-brand-300 text-sm font-medium hover:bg-brand-500/15 transition-colors"><i class="fa-regular fa-bookmark"></i>稍後閱讀</button>
</div>`,
    },
    {
      name: '箭頭滑入按鈕',
      en: 'Arrow Reveal Button',
      tags: ['hover', '箭頭'],
      spec: [
        '按鈕右側有一個圓形箭頭區塊，hover 時圓形向左擴展填滿整個按鈕，文字反白。',
        '外框膠囊造型，預設白底深字；擴展動畫 400ms，箭頭同時向右平移。',
        '使用 fa-arrow-right 圖示。',
      ],
      html: `<button type="button" class="group relative inline-flex items-center h-12 pl-6 pr-1.5 rounded-full border border-line bg-surface text-sm font-medium text-ink overflow-hidden">
  <span class="absolute right-1.5 top-1.5 bottom-1.5 w-9 rounded-full bg-ink transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:w-[calc(100%-12px)]"></span>
  <span class="relative mr-4 transition-colors duration-300 group-hover:text-canvas">瀏覽作品集</span>
  <span class="relative w-9 h-9 grid place-items-center text-canvas"><i class="fa-solid fa-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-0.5"></i></span>
</button>`,
    },
    {
      name: '毛玻璃按鈕',
      en: 'Frosted Glass Button',
      tags: ['玻璃', '背景模糊'],
      spec: [
        '放在彩色漸層背景上的半透明按鈕：白色 15% 背景、backdrop-blur、1px 白色 30% 邊框。',
        '文字白色，左側 fa-play 圖示放在小圓形中；hover 時背景提升到 25%。',
        '展示時以 indigo、pink、amber 的模糊色塊作為背景。',
      ],
      html: `<div class="relative w-full max-w-sm h-40 rounded-2xl overflow-hidden grid place-items-center bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400">
  <div class="absolute -left-6 -top-8 w-32 h-32 rounded-full bg-cyan-300/70 blur-2xl"></div>
  <div class="absolute right-0 bottom-0 w-36 h-36 rounded-full bg-rose-400/70 blur-2xl"></div>
  <button type="button" class="relative inline-flex items-center gap-3 h-12 pl-2 pr-5 rounded-full bg-white/15 border border-white/30 backdrop-blur-md text-white text-sm font-medium shadow-[inset_0_1px_0_rgba(255,255,255,.3)] hover:bg-white/25 transition">
    <span class="w-8 h-8 rounded-full bg-white text-fuchsia-600 grid place-items-center"><i class="fa-solid fa-play text-[11px] ml-0.5"></i></span>
    觀看介紹影片
  </button>
</div>`,
    },
    {
      name: '按鈕群組',
      en: 'Button Group',
      tags: ['工具列', '切換'],
      spec: [
        '文字編輯器常見的格式化工具列：粗體、斜體、底線、刪除線四個相連按鈕，外圍共用一個圓角框。',
        '每個按鈕可獨立切換啟用狀態，啟用時底色變為淺灰、文字為深色。',
        '按鈕之間以 1px 分隔線區隔，使用 fa-bold、fa-italic、fa-underline、fa-strikethrough。',
      ],
      html: `<div class="inline-flex rounded-[10px] border border-line bg-surface shadow-sm divide-x divide-line overflow-hidden">
  <button type="button" aria-label="粗體" aria-pressed="true" onclick="UIK.flip(this)" data-on="bg-subtle text-ink" data-off="text-ink-faint" class="w-10 h-10 grid place-items-center bg-subtle text-ink hover:text-ink transition"><i class="fa-solid fa-bold"></i></button>
  <button type="button" aria-label="斜體" aria-pressed="false" onclick="UIK.flip(this)" data-on="bg-subtle text-ink" data-off="text-ink-faint" class="w-10 h-10 grid place-items-center text-ink-faint hover:text-ink transition"><i class="fa-solid fa-italic"></i></button>
  <button type="button" aria-label="底線" aria-pressed="false" onclick="UIK.flip(this)" data-on="bg-subtle text-ink" data-off="text-ink-faint" class="w-10 h-10 grid place-items-center text-ink-faint hover:text-ink transition"><i class="fa-solid fa-underline"></i></button>
  <button type="button" aria-label="刪除線" aria-pressed="false" onclick="UIK.flip(this)" data-on="bg-subtle text-ink" data-off="text-ink-faint" class="w-10 h-10 grid place-items-center text-ink-faint hover:text-ink transition"><i class="fa-solid fa-strikethrough"></i></button>
</div>`,
    },
    {
      name: '按讚切換按鈕',
      en: 'Like Toggle Button',
      tags: ['切換', '計數'],
      spec: [
        '膠囊按鈕內含愛心圖示與按讚數字，點擊後愛心由外框 fa-regular 變為實心 fa-solid 並轉為玫瑰紅。',
        '數字同步加一或減一，啟用狀態背景為 rose-500/10、邊框為 rose-500/30。',
        '點擊時愛心有 scale 125% 的彈跳回饋。',
      ],
      html: `<div class="flex gap-3">
  <button type="button" aria-pressed="false" onclick="UIK.flip(this)" data-on="bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400" data-off="bg-surface border-line text-ink-soft" class="group inline-flex items-center gap-2 h-10 px-4 rounded-full border bg-surface border-line text-ink-soft text-sm font-medium transition active:scale-95">
    <i data-swap="fa-regular fa-solid" class="fa-regular fa-heart transition-transform group-active:scale-125"></i><span data-count class="tabular-nums">128</span>
  </button>
  <button type="button" aria-pressed="false" onclick="UIK.flip(this)" data-on="bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400" data-off="bg-surface border-line text-ink-soft" class="group inline-flex items-center gap-2 h-10 px-4 rounded-full border bg-surface border-line text-ink-soft text-sm font-medium transition active:scale-95">
    <i data-swap="fa-regular fa-solid" class="fa-regular fa-star transition-transform group-active:scale-125"></i><span data-alt="已收藏">收藏</span>
  </button>
</div>`,
    },
    {
      name: '浮動操作按鈕',
      en: 'Floating Action Speed Dial',
      tags: ['FAB', '展開'],
      spec: [
        '右下角 56px 圓形主色浮動按鈕，hover 時 fa-plus 旋轉 45 度變成關閉符號。',
        '同時由下往上依序浮現三個 40px 白色小圓按鈕（相機、文件、連結），每個有延遲 40ms 的階梯動畫。',
        '小按鈕左側附帶深色文字標籤。',
      ],
      html: `<div class="group relative h-52 w-48 flex flex-col items-end justify-end gap-3">
  <div class="flex flex-col items-end gap-3">
    <div class="flex items-center gap-2 opacity-0 translate-y-3 pointer-events-none transition-all duration-300 delay-100 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"><span class="px-2 py-1 rounded-md bg-ink text-canvas text-xs">上傳照片</span><button type="button" aria-label="上傳照片" class="w-10 h-10 mr-2 rounded-full bg-surface border border-line shadow-soft grid place-items-center text-ink-soft hover:text-brand-600"><i class="fa-solid fa-camera"></i></button></div>
    <div class="flex items-center gap-2 opacity-0 translate-y-3 pointer-events-none transition-all duration-300 delay-75 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"><span class="px-2 py-1 rounded-md bg-ink text-canvas text-xs">新增文件</span><button type="button" aria-label="新增文件" class="w-10 h-10 mr-2 rounded-full bg-surface border border-line shadow-soft grid place-items-center text-ink-soft hover:text-brand-600"><i class="fa-regular fa-file"></i></button></div>
    <div class="flex items-center gap-2 opacity-0 translate-y-3 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"><span class="px-2 py-1 rounded-md bg-ink text-canvas text-xs">分享連結</span><button type="button" aria-label="分享連結" class="w-10 h-10 mr-2 rounded-full bg-surface border border-line shadow-soft grid place-items-center text-ink-soft hover:text-brand-600"><i class="fa-solid fa-link"></i></button></div>
  </div>
  <button type="button" aria-label="建立" class="w-14 h-14 rounded-full bg-brand-600 text-white shadow-lg shadow-brand-600/40 grid place-items-center text-lg"><i class="fa-solid fa-plus transition-transform duration-300 group-hover:rotate-45"></i></button>
</div>`,
    },
    {
      name: '柔和色調按鈕',
      en: 'Soft Tonal Buttons',
      tags: ['語意色', '色調'],
      spec: [
        '一組語意色按鈕：成功、警告、危險、資訊，背景為對應色 10% 透明度、文字為對應色 600。',
        '每個按鈕左側附語意圖示：fa-check、fa-triangle-exclamation、fa-trash-can、fa-circle-info。',
        'hover 時背景加深到 18%，深色模式文字改用 400 色階以維持對比。',
      ],
      html: `<div class="grid grid-cols-2 gap-2.5">
  <button type="button" class="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-[10px] bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-sm font-medium hover:bg-emerald-500/20 transition"><i class="fa-solid fa-check"></i>核准</button>
  <button type="button" class="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-[10px] bg-amber-500/10 text-amber-700 dark:text-amber-400 text-sm font-medium hover:bg-amber-500/20 transition"><i class="fa-solid fa-triangle-exclamation"></i>標記</button>
  <button type="button" class="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-[10px] bg-rose-500/10 text-rose-700 dark:text-rose-400 text-sm font-medium hover:bg-rose-500/20 transition"><i class="fa-solid fa-trash-can"></i>刪除</button>
  <button type="button" class="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-[10px] bg-sky-500/10 text-sky-700 dark:text-sky-400 text-sm font-medium hover:bg-sky-500/20 transition"><i class="fa-solid fa-circle-info"></i>詳情</button>
</div>`,
    },
    {
      name: '填色滑入按鈕',
      en: 'Fill Slide Button',
      tags: ['hover', '外框'],
      spec: [
        '外框按鈕，hover 時主色底色從左側滑入填滿整顆按鈕，文字同時由主色變白。',
        '邊框 1.5px indigo-600，圓角 10px，滑入動畫 350ms ease-out。',
        '右側 fa-download 圖示在 hover 時向下跳動一下。',
      ],
      html: `<button type="button" class="group relative inline-flex items-center gap-2 h-11 px-6 rounded-[10px] border-[1.5px] border-brand-600 text-brand-600 dark:text-brand-400 text-sm font-semibold overflow-hidden transition-colors duration-300 hover:text-white">
  <span class="absolute inset-0 bg-brand-600 -translate-x-full transition-transform duration-[350ms] ease-out group-hover:translate-x-0"></span>
  <span class="relative">下載報告</span>
  <i class="relative fa-solid fa-download text-xs transition-transform group-hover:translate-y-0.5"></i>
</button>`,
    },
    {
      name: '新粗獷主義按鈕',
      en: 'Neo-Brutalist Button',
      tags: ['粗獷', '硬陰影'],
      spec: [
        '亮黃色背景、2px 黑色實線邊框、向右下偏移 4px 的黑色硬陰影，無模糊。',
        'hover 時按鈕往右下移動 2px、陰影縮為 2px；active 時完全貼合陰影位置。',
        '字體粗體、全形文字搭配 fa-rocket 圖示，圓角僅 6px。',
      ],
      html: `<div class="flex flex-wrap gap-4">
  <button type="button" class="inline-flex items-center gap-2 h-11 px-5 rounded-md bg-yellow-300 border-2 border-black text-black text-sm font-bold shadow-[4px_4px_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100"><i class="fa-solid fa-rocket"></i>立即上線</button>
  <button type="button" class="inline-flex items-center gap-2 h-11 px-5 rounded-md bg-pink-300 border-2 border-black text-black text-sm font-bold shadow-[4px_4px_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100"><i class="fa-solid fa-heart"></i>支持</button>
</div>`,
    },
    {
      name: '下載進度按鈕',
      en: 'Download Progress Button',
      tags: ['進度', '狀態'],
      spec: [
        '點擊後按鈕內部有一條淺色進度填充由左至右推進約 1.8 秒，文字變為「下載中」。',
        '完成後按鈕轉為綠色並顯示 fa-circle-check「下載完成」，1.5 秒後恢復。',
        '按鈕寬度固定 180px，避免文字切換時跳動。',
      ],
      html: `<button type="button" onclick="UIK.state(this,['run','done'],[1800,1500])" class="group relative w-[180px] h-11 rounded-[10px] bg-ink text-canvas text-sm font-medium overflow-hidden transition-colors data-[state=done]:bg-emerald-600 data-[state=done]:text-white">
  <span class="absolute inset-y-0 left-0 w-0 bg-white/20 group-data-[state=run]:w-full group-data-[state=run]:transition-[width] group-data-[state=run]:duration-[1800ms] group-data-[state=run]:ease-linear"></span>
  <span class="relative flex items-center justify-center gap-2 group-data-[state=run]:hidden group-data-[state=done]:hidden"><i class="fa-solid fa-download"></i>下載安裝檔</span>
  <span class="relative hidden items-center justify-center gap-2 group-data-[state=run]:flex"><i class="fa-solid fa-circle-notch fa-spin"></i>下載中</span>
  <span class="relative hidden items-center justify-center gap-2 group-data-[state=done]:flex"><i class="fa-solid fa-circle-check"></i>下載完成</span>
</button>`,
    },
    {
      name: '指令複製按鈕',
      en: 'Copy Command Button',
      tags: ['開發者', '複製'],
      spec: [
        '等寬字體的安裝指令膠囊，左側灰色 $ 提示符號，右側為複製圖示按鈕。',
        '點擊複製後圖示由 fa-copy 變為 fa-check 1.3 秒，並把指令寫入剪貼簿。',
        '整體為深色底（zinc-900）、淺色文字，圓角 12px，適合放在落地頁的 Hero 區。',
      ],
      html: `<div class="inline-flex items-center gap-3 h-12 pl-4 pr-1.5 rounded-xl bg-zinc-900 text-zinc-100 font-mono text-[13px] shadow-lift ring-1 ring-white/10">
  <span class="text-zinc-500 select-none">$</span>
  <span>npm install @atlas/ui</span>
  <button type="button" onclick="UIK.copy(this,'npm install @atlas/ui')" aria-label="複製指令" class="ml-2 w-9 h-9 rounded-lg grid place-items-center text-zinc-400 hover:text-white hover:bg-white/10 transition"><i class="fa-regular fa-copy"></i></button>
</div>`,
    },
    {
      name: '長按確認按鈕',
      en: 'Hold-to-Confirm Button',
      tags: ['防誤觸', '危險操作'],
      spec: [
        '危險操作用的長按按鈕：按住時 rose 色填充由左至右推進約 1.2 秒，放開則快速退回。',
        '按鈕為 rose 淡底與 rose 文字，填充層使用 rose-600 並以 mix-blend 讓文字在填滿區反白。',
        '左側 fa-fingerprint 圖示，文字為「按住以刪除帳號」；可用 :active 與 transition 實作，正式版需在動畫結束時觸發事件。',
      ],
      html: `<button type="button" class="group relative inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 text-sm font-semibold overflow-hidden select-none">
  <span class="absolute inset-y-0 left-0 w-0 bg-rose-600 transition-[width] duration-200 ease-out group-active:w-full group-active:duration-[1200ms] group-active:ease-linear"></span>
  <span class="relative flex items-center gap-2 group-active:text-white transition-colors"><i class="fa-solid fa-fingerprint"></i>按住以刪除帳號</span>
</button>`,
    },
    {
      name: '展開標籤圖示按鈕',
      en: 'Expanding Icon Button',
      tags: ['hover', '精簡'],
      spec: [
        '平時為 40px 圓形圖示按鈕，hover 或 focus 時向右展開並顯示文字標籤，寬度以 max-width 過渡 300ms。',
        '示範三個並排的按鈕：新增（深色）、分享（外框）、收藏（rose 淡底）。',
        '文字以 opacity 淡入，展開時保持圖示位置不動。',
      ],
      html: `<div class="flex items-center gap-2">
  <button type="button" class="group inline-flex items-center h-10 px-3 rounded-full bg-ink text-canvas text-sm font-medium"><i class="fa-solid fa-plus w-4"></i><span class="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-[96px] group-hover:ml-2 group-hover:opacity-100 group-focus-visible:max-w-[96px] group-focus-visible:ml-2 group-focus-visible:opacity-100 transition-all duration-300">新增項目</span></button>
  <button type="button" class="group inline-flex items-center h-10 px-3 rounded-full border border-line bg-surface text-ink text-sm font-medium shadow-sm"><i class="fa-solid fa-share-nodes w-4"></i><span class="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-[96px] group-hover:ml-2 group-hover:opacity-100 transition-all duration-300">分享</span></button>
  <button type="button" class="group inline-flex items-center h-10 px-3 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 text-sm font-medium"><i class="fa-solid fa-heart w-4"></i><span class="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-[96px] group-hover:ml-2 group-hover:opacity-100 transition-all duration-300">加入收藏</span></button>
</div>`,
    },
    {
      name: '漸層外框按鈕',
      en: 'Gradient Outline Button',
      tags: ['漸層', '外框'],
      spec: [
        '外層 1.5px 內距的 indigo → fuchsia → orange 漸層作為邊框，內層為頁面底色，文字同樣為漸層（bg-clip-text）。',
        'hover 時內層變透明，整顆按鈕被漸層填滿、文字轉為白色。',
        '圓角全膠囊，右側附 fa-arrow-right。',
      ],
      html: `<button type="button" class="group inline-flex p-[1.5px] rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-orange-400">
  <span class="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-surface group-hover:bg-transparent transition-colors duration-300">
    <span class="text-sm font-semibold bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-orange-400 bg-clip-text text-transparent group-hover:text-white transition-colors">探索新功能</span>
    <i class="fa-solid fa-arrow-right text-xs text-fuchsia-500 group-hover:text-white group-hover:translate-x-0.5 transition"></i>
  </span>
</button>`,
    },
    {
      name: '訂閱切換按鈕',
      en: 'Subscribe Toggle',
      tags: ['切換', '頻道'],
      spec: [
        '未訂閱時為深色實心「訂閱」按鈕；點擊後變為淺灰底「已訂閱」，並顯示 fa-bell 鈴鐺圖示。',
        '左側附頻道名稱與訂閱人數。',
        '使用 aria-pressed 標示狀態，切換過渡 200ms。',
      ],
      html: `<div class="flex items-center gap-3">
  <div class="text-right"><p class="text-sm font-semibold text-ink">設計週報</p><p class="text-xs text-ink-faint"><span>12,480</span> 位訂閱者</p></div>
  <button type="button" aria-pressed="false" onclick="UIK.flip(this)" data-on="bg-subtle text-ink" data-off="bg-ink text-canvas" class="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-ink text-canvas text-sm font-semibold transition-colors duration-200">
    <i data-swap="hidden" class="hidden fa-solid fa-bell text-xs"></i><span data-alt="已訂閱">訂閱</span>
  </button>
</div>`,
    },
    {
      name: '應用程式下載按鈕',
      en: 'App Store Buttons',
      tags: ['品牌', '下載'],
      spec: [
        '兩個黑底的應用程式商店按鈕：左側為大型 fa-brands fa-apple 或 fa-google-play 圖示，右側為兩行文字（小字「下載於」、大字商店名稱）。',
        '高度 48px、圓角 12px，深色模式加上細白框。',
        'hover 時背景微亮並向上浮動 1px。',
      ],
      html: `<div class="flex flex-wrap gap-3">
  <a href="#" onclick="return false" class="inline-flex items-center gap-3 h-12 pl-4 pr-5 rounded-xl bg-black text-white hover:bg-zinc-800 hover:-translate-y-px dark:ring-1 dark:ring-white/15 transition"><i class="fa-brands fa-apple text-2xl"></i><span class="leading-tight text-left"><span class="block text-[10px] text-white/70">下載於</span><span class="block text-[15px] font-semibold">App Store</span></span></a>
  <a href="#" onclick="return false" class="inline-flex items-center gap-3 h-12 pl-4 pr-5 rounded-xl bg-black text-white hover:bg-zinc-800 hover:-translate-y-px dark:ring-1 dark:ring-white/15 transition"><i class="fa-brands fa-google-play text-xl"></i><span class="leading-tight text-left"><span class="block text-[10px] text-white/70">立即取得</span><span class="block text-[15px] font-semibold">Google Play</span></span></a>
</div>`,
    },
  ],
});
