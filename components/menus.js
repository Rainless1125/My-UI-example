(window.UI_ATLAS = window.UI_ATLAS || []).push({
  id: 'menus',
  name: '分頁籤與選單',
  en: 'Tabs & Menus',
  icon: 'fa-solid fa-table-list',
  desc: '底線、膠囊、包覆式與垂直分頁，以及下拉選單、右鍵選單、手風琴與篩選面板等內容切換與選項收納元件。',
  items: [
    {
      name: '底線滑動分頁',
      en: 'Underline Tabs',
      tags: ['Tabs', '滑動指示'],
      spec: [
        '水平分頁列下方有 1px 灰色底線，選取分頁下方為 2px 深色指示線，切換時以 300ms 依實際寬度滑動。',
        '分頁文字 14px，選取為深色中等字重，其餘為灰色並在 hover 時變深。',
        '使用 role="tablist" 與 aria-selected，指示線位置依選取元素的 offsetLeft 與寬度計算。',
      ],
      html: `<div class="w-full max-w-md">
  <div role="tablist" data-pick data-on="text-ink font-medium" data-off="text-ink-faint" class="relative flex gap-6 border-b border-line text-sm">
    <button type="button" role="tab" data-item aria-selected="true" onclick="UIK.pick(this)" class="h-10 text-ink font-medium hover:text-ink transition-colors">總覽</button>
    <button type="button" role="tab" data-item onclick="UIK.pick(this)" class="h-10 text-ink-faint hover:text-ink transition-colors">活動紀錄</button>
    <button type="button" role="tab" data-item onclick="UIK.pick(this)" class="h-10 text-ink-faint hover:text-ink transition-colors">成員管理</button>
    <button type="button" role="tab" data-item onclick="UIK.pick(this)" class="h-10 text-ink-faint hover:text-ink transition-colors">設定</button>
    <span data-indicator="x" class="absolute -bottom-px h-0.5 rounded-full bg-ink transition-all duration-300 ease-out"></span>
  </div>
</div>`,
    },
    {
      name: '膠囊分頁',
      en: 'Pill Tabs',
      tags: ['Tabs', '膠囊'],
      spec: [
        '一排獨立的膠囊分頁按鈕，選取項為深色實心白字，其他為透明灰字、hover 淺灰底。',
        '每個分頁可附加小圖示；膠囊高度 32px、左右內距 14px。',
        '適合用於內容篩選，例如「全部 / 設計 / 開發 / 行銷」。',
      ],
      html: `<div role="tablist" data-pick data-on="bg-ink text-canvas" data-off="text-ink-soft hover:bg-subtle" class="flex flex-wrap gap-1.5 text-[13px] font-medium">
  <button type="button" role="tab" data-item aria-selected="true" onclick="UIK.pick(this)" class="h-8 px-3.5 rounded-full bg-ink text-canvas transition">全部</button>
  <button type="button" role="tab" data-item onclick="UIK.pick(this)" class="h-8 px-3.5 rounded-full text-ink-soft hover:bg-subtle transition"><i class="fa-solid fa-pen-nib text-[11px] mr-1.5"></i>設計</button>
  <button type="button" role="tab" data-item onclick="UIK.pick(this)" class="h-8 px-3.5 rounded-full text-ink-soft hover:bg-subtle transition"><i class="fa-solid fa-code text-[11px] mr-1.5"></i>開發</button>
  <button type="button" role="tab" data-item onclick="UIK.pick(this)" class="h-8 px-3.5 rounded-full text-ink-soft hover:bg-subtle transition"><i class="fa-solid fa-bullhorn text-[11px] mr-1.5"></i>行銷</button>
</div>`,
    },
    {
      name: '包覆式滑塊分頁',
      en: 'Enclosed Tabs',
      tags: ['Tabs', '滑塊'],
      spec: [
        '淺灰底圓角容器中的分頁，選取項目底下有一個白色帶陰影的滑塊，依項目實際寬度平滑移動。',
        '與分段控制不同，各分頁寬度依文字長度自適應。',
        '下方內容面板依選取分頁切換顯示（data-panel）。',
      ],
      html: `<div class="w-full max-w-md" data-pick data-on="text-ink" data-off="text-ink-faint">
  <div class="relative inline-flex p-1 rounded-xl bg-subtle text-sm font-medium">
    <span data-indicator="x" class="absolute top-1 bottom-1 rounded-lg bg-surface shadow-sm ring-1 ring-black/5 transition-all duration-300 ease-out"></span>
    <button type="button" data-item data-tab="a" aria-selected="true" onclick="UIK.pick(this)" class="relative z-10 h-8 px-3.5 text-ink transition-colors">個人資料</button>
    <button type="button" data-item data-tab="b" onclick="UIK.pick(this)" class="relative z-10 h-8 px-3.5 text-ink-faint transition-colors">安全性</button>
    <button type="button" data-item data-tab="c" onclick="UIK.pick(this)" class="relative z-10 h-8 px-3.5 text-ink-faint transition-colors">帳單與方案</button>
  </div>
  <div class="mt-3 p-4 rounded-xl border border-line bg-surface text-sm text-ink-soft">
    <p data-panel="a"><i class="fa-regular fa-user mr-2 text-ink-faint"></i>管理你的名稱、頭像與聯絡資訊。</p>
    <p data-panel="b" class="hidden"><i class="fa-solid fa-shield-halved mr-2 text-ink-faint"></i>設定兩步驟驗證與登入裝置。</p>
    <p data-panel="c" class="hidden"><i class="fa-regular fa-credit-card mr-2 text-ink-faint"></i>查看帳單紀錄與變更付款方式。</p>
  </div>
</div>`,
    },
    {
      name: '計數徽章分頁',
      en: 'Tabs with Counts',
      tags: ['Tabs', '徽章'],
      spec: [
        '底線式分頁，每個分頁文字右側附帶圓角數字徽章（例如「待處理 12」）。',
        '選取分頁的徽章為主色實心白字，其他分頁徽章為淺灰底灰字。',
        '選取分頁下方 2px 主色指示線。',
      ],
      html: `<div role="tablist" data-pick data-on="text-brand-600 dark:text-brand-400 border-brand-600 [&>span]:bg-brand-600 [&>span]:text-white" data-off="text-ink-soft border-transparent [&>span]:bg-subtle [&>span]:text-ink-faint" class="flex gap-5 border-b border-line text-sm font-medium">
  <button type="button" role="tab" data-item aria-selected="true" onclick="UIK.pick(this)" class="-mb-px h-11 flex items-center gap-2 border-b-2 text-brand-600 dark:text-brand-400 border-brand-600 [&>span]:bg-brand-600 [&>span]:text-white transition">待處理<span class="px-1.5 rounded-full text-[11px] leading-[18px] transition">12</span></button>
  <button type="button" role="tab" data-item onclick="UIK.pick(this)" class="-mb-px h-11 flex items-center gap-2 border-b-2 text-ink-soft border-transparent [&>span]:bg-subtle [&>span]:text-ink-faint transition">進行中<span class="px-1.5 rounded-full text-[11px] leading-[18px] transition">5</span></button>
  <button type="button" role="tab" data-item onclick="UIK.pick(this)" class="-mb-px h-11 flex items-center gap-2 border-b-2 text-ink-soft border-transparent [&>span]:bg-subtle [&>span]:text-ink-faint transition">已完成<span class="px-1.5 rounded-full text-[11px] leading-[18px] transition">248</span></button>
</div>`,
    },
    {
      name: '圖示堆疊分頁',
      en: 'Icon Tabs',
      tags: ['Tabs', '圖示'],
      spec: [
        '每個分頁為上方 18px 圖示、下方 12px 文字的垂直堆疊，平均分配寬度。',
        '選取分頁背景為主色淡色、圖示與文字為主色，圓角 12px。',
        '整組放在白底圓角卡片中，常見於設定或編輯器面板。',
      ],
      html: `<div role="tablist" data-pick data-on="bg-brand-500/10 text-brand-600 dark:text-brand-400" data-off="text-ink-faint hover:bg-subtle" class="grid grid-cols-4 gap-1 w-80 p-1.5 rounded-2xl border border-line bg-surface shadow-sm text-xs font-medium">
  <button type="button" role="tab" data-item aria-selected="true" onclick="UIK.pick(this)" class="flex flex-col items-center gap-1.5 py-2.5 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 transition"><i class="fa-solid fa-font text-base"></i>文字</button>
  <button type="button" role="tab" data-item onclick="UIK.pick(this)" class="flex flex-col items-center gap-1.5 py-2.5 rounded-xl text-ink-faint hover:bg-subtle transition"><i class="fa-regular fa-image text-base"></i>圖片</button>
  <button type="button" role="tab" data-item onclick="UIK.pick(this)" class="flex flex-col items-center gap-1.5 py-2.5 rounded-xl text-ink-faint hover:bg-subtle transition"><i class="fa-solid fa-shapes text-base"></i>形狀</button>
  <button type="button" role="tab" data-item onclick="UIK.pick(this)" class="flex flex-col items-center gap-1.5 py-2.5 rounded-xl text-ink-faint hover:bg-subtle transition"><i class="fa-solid fa-palette text-base"></i>樣式</button>
</div>`,
    },
    {
      name: '垂直分頁與面板',
      en: 'Vertical Tabs',
      tags: ['Tabs', '設定頁'],
      spec: [
        '左側為垂直分頁清單（寬 160px），選取項左側有主色滑動指示條、文字深色，並以淺灰底強調。',
        '右側內容面板依選取分頁切換，面板有標題與說明文字。',
        '指示條依選取項目的 offsetTop 與高度平滑移動。',
      ],
      html: `<div class="w-[440px] max-w-full flex gap-4 p-3 rounded-2xl border border-line bg-surface shadow-sm" data-pick data-on="text-ink bg-subtle" data-off="text-ink-soft">
  <div class="relative w-36 shrink-0 flex flex-col gap-0.5 text-sm">
    <span data-indicator="y" class="absolute -left-3 w-[3px] rounded-r bg-brand-600 transition-all duration-300"></span>
    <button type="button" data-item data-tab="g" aria-selected="true" onclick="UIK.pick(this)" class="h-9 px-3 rounded-lg text-left text-ink bg-subtle transition"><i class="fa-solid fa-sliders w-4 mr-2 text-xs"></i>一般</button>
    <button type="button" data-item data-tab="n" onclick="UIK.pick(this)" class="h-9 px-3 rounded-lg text-left text-ink-soft transition"><i class="fa-regular fa-bell w-4 mr-2 text-xs"></i>通知</button>
    <button type="button" data-item data-tab="p" onclick="UIK.pick(this)" class="h-9 px-3 rounded-lg text-left text-ink-soft transition"><i class="fa-solid fa-lock w-4 mr-2 text-xs"></i>隱私</button>
  </div>
  <div class="flex-1 p-2">
    <div data-panel="g"><p class="font-semibold text-ink">一般設定</p><p class="mt-1 text-sm text-ink-soft">語言、時區與預設首頁。</p></div>
    <div data-panel="n" class="hidden"><p class="font-semibold text-ink">通知偏好</p><p class="mt-1 text-sm text-ink-soft">選擇要接收哪些類型的提醒。</p></div>
    <div data-panel="p" class="hidden"><p class="font-semibold text-ink">隱私控制</p><p class="mt-1 text-sm text-ink-soft">管理誰可以看到你的個人資料。</p></div>
  </div>
</div>`,
    },
    {
      name: '瀏覽器式分頁',
      en: 'Browser-style Tabs',
      tags: ['Tabs', '可關閉'],
      spec: [
        '模仿瀏覽器的分頁列：淺灰底容器，選取分頁為白底、上方圓角 10px，與下方內容區無縫連接。',
        '每個分頁有網站圖示、截斷標題與 hover 時出現的 fa-xmark 關閉按鈕；最右側為 fa-plus 新增分頁。',
        '未選取分頁之間以 1px 短分隔線區隔。',
      ],
      html: `<div class="w-full max-w-lg rounded-xl border border-line overflow-hidden shadow-sm">
  <div data-pick data-on="bg-surface text-ink" data-off="text-ink-soft hover:bg-surface/50" class="flex items-end gap-0.5 px-2 pt-2 bg-subtle text-xs">
    <div data-item aria-selected="true" onclick="UIK.pick(this)" class="group flex items-center gap-2 w-40 h-9 px-3 rounded-t-[10px] bg-surface text-ink cursor-pointer"><i class="fa-brands fa-github"></i><span class="flex-1 truncate">atlas / ui-kit</span><button type="button" aria-label="關閉分頁" class="w-4 h-4 rounded grid place-items-center opacity-0 group-hover:opacity-100 hover:bg-subtle"><i class="fa-solid fa-xmark text-[9px]"></i></button></div>
    <div data-item onclick="UIK.pick(this)" class="group flex items-center gap-2 w-40 h-9 px-3 rounded-t-[10px] text-ink-soft hover:bg-surface/50 cursor-pointer"><i class="fa-brands fa-figma text-violet-500"></i><span class="flex-1 truncate">設計稿 v3</span><button type="button" aria-label="關閉分頁" class="w-4 h-4 rounded grid place-items-center opacity-0 group-hover:opacity-100 hover:bg-subtle"><i class="fa-solid fa-xmark text-[9px]"></i></button></div>
    <button type="button" aria-label="新增分頁" class="mb-1.5 ml-1 w-6 h-6 rounded-md grid place-items-center text-ink-faint hover:bg-surface"><i class="fa-solid fa-plus text-[10px]"></i></button>
  </div>
  <div class="h-20 bg-surface border-t border-transparent px-4 grid place-items-center text-xs text-ink-faint">分頁內容區</div>
</div>`,
    },
    {
      name: '下拉選單',
      en: 'Dropdown Menu',
      tags: ['Dropdown', '點擊展開'],
      spec: [
        '點擊「選項」按鈕展開下拉選單，按鈕右側 fa-chevron-down，展開時選單以淡入縮放出現。',
        '選單項目有左側圖示與右側快捷鍵提示，項目之間可分組並以分隔線區隔。',
        '點擊選單外部時自動關閉；選單寬 220px、圓角 12px、柔和陰影。',
      ],
      html: `<div class="relative h-56">
  <button type="button" onclick="UIK.menu(this)" class="h-9 px-3.5 rounded-[10px] border border-line bg-surface text-sm font-medium text-ink shadow-sm hover:bg-subtle flex items-center gap-2">選項<i class="fa-solid fa-chevron-down text-[10px] text-ink-faint"></i></button>
  <div data-menu class="absolute left-0 top-11 z-10 w-[220px] p-1.5 rounded-xl border border-line bg-surface shadow-lift text-sm animate-fade-up">
    <button type="button" class="w-full flex items-center gap-2.5 h-8 px-2.5 rounded-lg text-ink hover:bg-subtle"><i class="fa-regular fa-pen-to-square w-4 text-xs text-ink-faint"></i>編輯<kbd class="ml-auto text-[10px] text-ink-faint font-sans">Ctrl E</kbd></button>
    <button type="button" class="w-full flex items-center gap-2.5 h-8 px-2.5 rounded-lg text-ink hover:bg-subtle"><i class="fa-regular fa-copy w-4 text-xs text-ink-faint"></i>建立副本<kbd class="ml-auto text-[10px] text-ink-faint font-sans">Ctrl D</kbd></button>
    <button type="button" class="w-full flex items-center gap-2.5 h-8 px-2.5 rounded-lg text-ink hover:bg-subtle"><i class="fa-solid fa-box-archive w-4 text-xs text-ink-faint"></i>封存</button>
    <div class="my-1.5 h-px bg-line"></div>
    <button type="button" class="w-full flex items-center gap-2.5 h-8 px-2.5 rounded-lg text-rose-600 hover:bg-rose-500/10"><i class="fa-regular fa-trash-can w-4 text-xs"></i>刪除<kbd class="ml-auto text-[10px] font-sans opacity-70">Del</kbd></button>
  </div>
</div>`,
    },
    {
      name: '帳號選單',
      en: 'Account Menu',
      tags: ['使用者', '下拉'],
      spec: [
        '展開狀態的帳號選單：頂部為使用者頭像、姓名、電子郵件與方案徽章。',
        '中段為個人檔案、帳單、團隊設定等項目，其中「深色模式」項目右側為小開關。',
        '底部以分隔線隔開「登出」fa-arrow-right-from-bracket。',
      ],
      html: `<div class="w-64 p-1.5 rounded-xl border border-line bg-surface shadow-lift text-sm">
  <div class="flex items-center gap-3 p-2.5">
    <span class="w-9 h-9 rounded-full bg-gradient-to-br from-teal-400 to-emerald-600 text-white grid place-items-center text-sm font-semibold">蔡</span>
    <div class="flex-1 min-w-0"><p class="font-semibold text-ink">蔡宜庭</p><p class="text-xs text-ink-faint truncate">yiting@studio.tw</p></div>
    <span class="px-1.5 py-px rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 text-[10px] font-semibold">PRO</span>
  </div>
  <div class="my-1 h-px bg-line"></div>
  <a href="#" onclick="return false" class="flex items-center gap-2.5 h-9 px-2.5 rounded-lg text-ink hover:bg-subtle"><i class="fa-regular fa-user w-4 text-xs text-ink-faint"></i>個人檔案</a>
  <a href="#" onclick="return false" class="flex items-center gap-2.5 h-9 px-2.5 rounded-lg text-ink hover:bg-subtle"><i class="fa-regular fa-credit-card w-4 text-xs text-ink-faint"></i>帳單</a>
  <a href="#" onclick="return false" class="flex items-center gap-2.5 h-9 px-2.5 rounded-lg text-ink hover:bg-subtle"><i class="fa-solid fa-users w-4 text-xs text-ink-faint"></i>團隊設定</a>
  <label class="flex items-center gap-2.5 h-9 px-2.5 rounded-lg text-ink hover:bg-subtle cursor-pointer"><i class="fa-regular fa-moon w-4 text-xs text-ink-faint"></i><span class="flex-1">深色模式</span><span class="relative inline-flex"><input type="checkbox" class="peer sr-only"><span class="w-8 h-[18px] rounded-full bg-line peer-checked:bg-brand-600 transition-colors"></span><span class="absolute left-0.5 top-0.5 w-3.5 h-3.5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-3.5"></span></span></label>
  <div class="my-1 h-px bg-line"></div>
  <a href="#" onclick="return false" class="flex items-center gap-2.5 h-9 px-2.5 rounded-lg text-ink-soft hover:bg-subtle"><i class="fa-solid fa-arrow-right-from-bracket w-4 text-xs"></i>登出</a>
</div>`,
    },
    {
      name: '右鍵情境選單',
      en: 'Context Menu',
      tags: ['右鍵', '快捷鍵'],
      spec: [
        '緊湊型情境選單（寬 200px），項目高度 30px、文字 13px，右側以灰色顯示快捷鍵。',
        '其中一個項目有子選單指示 fa-chevron-right；一個項目為停用狀態（淡色、不可點）。',
        '目前 hover 的項目為主色實心白字，模擬原生系統選單。',
      ],
      html: `<div class="w-[200px] p-1 rounded-lg border border-line bg-surface/95 backdrop-blur shadow-lift text-[13px]">
  <button type="button" class="w-full flex items-center h-[30px] px-2.5 rounded-md text-ink hover:bg-brand-600 hover:text-white group">剪下<span class="ml-auto text-[11px] text-ink-faint group-hover:text-white/70">Ctrl X</span></button>
  <button type="button" class="w-full flex items-center h-[30px] px-2.5 rounded-md bg-brand-600 text-white">複製<span class="ml-auto text-[11px] text-white/70">Ctrl C</span></button>
  <button type="button" disabled class="w-full flex items-center h-[30px] px-2.5 rounded-md text-ink-faint cursor-not-allowed">貼上<span class="ml-auto text-[11px]">Ctrl V</span></button>
  <div class="my-1 h-px bg-line"></div>
  <button type="button" class="w-full flex items-center h-[30px] px-2.5 rounded-md text-ink hover:bg-brand-600 hover:text-white group">排列方式<i class="ml-auto fa-solid fa-chevron-right text-[9px] text-ink-faint group-hover:text-white/70"></i></button>
  <button type="button" class="w-full flex items-center h-[30px] px-2.5 rounded-md text-ink hover:bg-brand-600 hover:text-white group">重新命名<span class="ml-auto text-[11px] text-ink-faint group-hover:text-white/70">F2</span></button>
</div>`,
    },
    {
      name: 'FAQ 手風琴',
      en: 'FAQ Accordion',
      tags: ['手風琴', '單一展開'],
      spec: [
        '常見問題手風琴，每題為一列按鈕，右側 fa-plus 圖示；展開時圖示旋轉 45 度成為關閉符號。',
        '同時只能展開一題；內容以 grid-template-rows 0fr → 1fr 做高度平滑展開動畫。',
        '題目之間以 1px 分隔線區隔，使用 aria-expanded 標示狀態。',
      ],
      html: `<div data-single class="w-full max-w-md divide-y divide-line border-y border-line">
  <div>
    <button type="button" aria-expanded="true" onclick="UIK.acc(this)" class="w-full flex items-center justify-between gap-4 py-4 text-left text-sm font-medium text-ink">可以隨時取消訂閱嗎？<i data-chevron="45" style="transform:rotate(45deg)" class="fa-solid fa-plus text-xs text-ink-faint transition-transform duration-300"></i></button>
    <div class="grid transition-[grid-template-rows] duration-300" style="grid-template-rows:1fr"><div class="overflow-hidden"><p class="pb-4 text-sm text-ink-soft leading-relaxed">可以。在帳單設定中按下「取消方案」即可，當期結束前仍可正常使用所有功能。</p></div></div>
  </div>
  <div>
    <button type="button" aria-expanded="false" onclick="UIK.acc(this)" class="w-full flex items-center justify-between gap-4 py-4 text-left text-sm font-medium text-ink">是否提供教育優惠？<i data-chevron="45" class="fa-solid fa-plus text-xs text-ink-faint transition-transform duration-300"></i></button>
    <div class="grid transition-[grid-template-rows] duration-300" style="grid-template-rows:0fr"><div class="overflow-hidden"><p class="pb-4 text-sm text-ink-soft leading-relaxed">學生與教師使用學校信箱註冊，即可免費使用專業版一年。</p></div></div>
  </div>
  <div>
    <button type="button" aria-expanded="false" onclick="UIK.acc(this)" class="w-full flex items-center justify-between gap-4 py-4 text-left text-sm font-medium text-ink">資料存放在哪裡？<i data-chevron="45" class="fa-solid fa-plus text-xs text-ink-faint transition-transform duration-300"></i></button>
    <div class="grid transition-[grid-template-rows] duration-300" style="grid-template-rows:0fr"><div class="overflow-hidden"><p class="pb-4 text-sm text-ink-soft leading-relaxed">所有資料皆加密存放於東京與新加坡的資料中心，並每日備份。</p></div></div>
  </div>
</div>`,
    },
    {
      name: '卡片式手風琴',
      en: 'Card Accordion',
      tags: ['手風琴', '卡片'],
      spec: [
        '每個項目為獨立的圓角卡片，標題列左側有彩色圖示方塊，右側為 fa-chevron-down。',
        '展開時卡片邊框變深、陰影加強，箭頭旋轉 180 度，內容平滑展開。',
        '可同時展開多個項目。',
      ],
      html: `<div class="w-full max-w-md space-y-2.5">
  <div data-acc-item data-open class="rounded-xl border border-line bg-surface data-[open]:shadow-soft data-[open]:border-ink-faint/40 transition">
    <button type="button" aria-expanded="true" onclick="UIK.acc(this)" class="w-full flex items-center gap-3 p-4 text-left"><span class="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-600 grid place-items-center"><i class="fa-solid fa-truck-fast text-sm"></i></span><span class="flex-1 text-sm font-semibold text-ink">運送與配送</span><i data-chevron style="transform:rotate(180deg)" class="fa-solid fa-chevron-down text-xs text-ink-faint transition-transform duration-300"></i></button>
    <div class="grid transition-[grid-template-rows] duration-300" style="grid-template-rows:1fr"><div class="overflow-hidden"><p class="px-4 pb-4 pl-[60px] text-sm text-ink-soft">滿 $1,000 免運，下單後 1–3 個工作天內送達。</p></div></div>
  </div>
  <div data-acc-item class="rounded-xl border border-line bg-surface data-[open]:shadow-soft data-[open]:border-ink-faint/40 transition">
    <button type="button" aria-expanded="false" onclick="UIK.acc(this)" class="w-full flex items-center gap-3 p-4 text-left"><span class="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 grid place-items-center"><i class="fa-solid fa-rotate-left text-sm"></i></span><span class="flex-1 text-sm font-semibold text-ink">退換貨政策</span><i data-chevron class="fa-solid fa-chevron-down text-xs text-ink-faint transition-transform duration-300"></i></button>
    <div class="grid transition-[grid-template-rows] duration-300" style="grid-template-rows:0fr"><div class="overflow-hidden"><p class="px-4 pb-4 pl-[60px] text-sm text-ink-soft">收到商品 7 天內可申請退換，商品需保持完整包裝。</p></div></div>
  </div>
</div>`,
    },
    {
      name: '多選清單選單',
      en: 'Multi-select Listbox',
      tags: ['多選', '搜尋'],
      spec: [
        '展開的多選下拉：頂部為內嵌搜尋框，下方為帶頭像的成員清單，每列右側有核取勾選。',
        '選取的項目為主色勾選圖示、文字深色；未選取顯示空白方框。',
        '底部為「已選 2 位」與「清除 / 套用」按鈕。',
      ],
      html: `<div class="w-72 rounded-xl border border-line bg-surface shadow-lift text-sm">
  <label class="flex items-center gap-2 px-3 h-10 border-b border-line"><i class="fa-solid fa-magnifying-glass text-xs text-ink-faint"></i><input type="text" placeholder="搜尋成員" class="flex-1 bg-transparent text-sm text-ink placeholder:text-ink-faint focus:outline-none"></label>
  <div class="p-1.5 space-y-0.5">
    <label class="flex items-center gap-2.5 h-9 px-2 rounded-lg hover:bg-subtle cursor-pointer"><span class="w-6 h-6 rounded-full bg-sky-500 text-white grid place-items-center text-[10px]">吳</span><span class="flex-1 text-ink">吳承恩</span><input type="checkbox" checked class="w-4 h-4 accent-brand-600"></label>
    <label class="flex items-center gap-2.5 h-9 px-2 rounded-lg hover:bg-subtle cursor-pointer"><span class="w-6 h-6 rounded-full bg-pink-500 text-white grid place-items-center text-[10px]">鄭</span><span class="flex-1 text-ink">鄭雅文</span><input type="checkbox" checked class="w-4 h-4 accent-brand-600"></label>
    <label class="flex items-center gap-2.5 h-9 px-2 rounded-lg hover:bg-subtle cursor-pointer"><span class="w-6 h-6 rounded-full bg-amber-500 text-white grid place-items-center text-[10px]">劉</span><span class="flex-1 text-ink">劉志明</span><input type="checkbox" class="w-4 h-4 accent-brand-600"></label>
  </div>
  <div class="flex items-center justify-between px-3 h-11 border-t border-line">
    <span class="text-xs text-ink-faint">已選 2 位</span>
    <div class="flex gap-1.5"><button type="button" class="h-7 px-2.5 rounded-md text-xs text-ink-soft hover:bg-subtle">清除</button><button type="button" class="h-7 px-2.5 rounded-md bg-ink text-canvas text-xs font-medium">套用</button></div>
  </div>
</div>`,
    },
    {
      name: '排序選擇選單',
      en: 'Sort Menu',
      tags: ['排序', '單選'],
      spec: [
        '按鈕顯示「排序：最新上架」與 fa-arrow-down-wide-short 圖示，點擊展開選單。',
        '選單中的選項為單選，目前選項左側顯示主色 fa-check，其餘以等寬空白對齊。',
        '選單底部另有「升冪 / 降冪」的小型分段切換。',
      ],
      html: `<div class="relative h-64">
  <button type="button" onclick="UIK.menu(this)" class="h-9 px-3 rounded-[10px] border border-line bg-surface text-[13px] text-ink-soft shadow-sm hover:text-ink flex items-center gap-2"><i class="fa-solid fa-arrow-down-wide-short text-xs"></i>排序：<span class="font-medium text-ink">最新上架</span><i class="fa-solid fa-chevron-down text-[9px]"></i></button>
  <div data-menu class="absolute left-0 top-11 z-10 w-56 p-1.5 rounded-xl border border-line bg-surface shadow-lift text-sm animate-fade-up">
    <div data-pick data-on="[&>i]:opacity-100 text-ink font-medium" data-off="[&>i]:opacity-0 text-ink-soft">
      <button type="button" data-item aria-selected="true" onclick="UIK.pick(this)" class="w-full flex items-center gap-2.5 h-8 px-2.5 rounded-lg hover:bg-subtle [&>i]:opacity-100 text-ink font-medium"><i class="fa-solid fa-check w-3 text-[11px] text-brand-600"></i>最新上架</button>
      <button type="button" data-item onclick="UIK.pick(this)" class="w-full flex items-center gap-2.5 h-8 px-2.5 rounded-lg hover:bg-subtle [&>i]:opacity-0 text-ink-soft"><i class="fa-solid fa-check w-3 text-[11px] text-brand-600"></i>最受歡迎</button>
      <button type="button" data-item onclick="UIK.pick(this)" class="w-full flex items-center gap-2.5 h-8 px-2.5 rounded-lg hover:bg-subtle [&>i]:opacity-0 text-ink-soft"><i class="fa-solid fa-check w-3 text-[11px] text-brand-600"></i>價格</button>
      <button type="button" data-item onclick="UIK.pick(this)" class="w-full flex items-center gap-2.5 h-8 px-2.5 rounded-lg hover:bg-subtle [&>i]:opacity-0 text-ink-soft"><i class="fa-solid fa-check w-3 text-[11px] text-brand-600"></i>評價</button>
    </div>
    <div class="my-1.5 h-px bg-line"></div>
    <div data-pick data-on="bg-surface text-ink shadow-sm" data-off="text-ink-faint" class="grid grid-cols-2 p-0.5 rounded-lg bg-subtle text-xs font-medium">
      <button type="button" data-item onclick="UIK.pick(this)" class="h-7 rounded-md text-ink-faint"><i class="fa-solid fa-arrow-up-short-wide mr-1"></i>升冪</button>
      <button type="button" data-item aria-selected="true" onclick="UIK.pick(this)" class="h-7 rounded-md bg-surface text-ink shadow-sm"><i class="fa-solid fa-arrow-down-wide-short mr-1"></i>降冪</button>
    </div>
  </div>
</div>`,
    },
    {
      name: '巢狀子選單',
      en: 'Nested Submenu',
      tags: ['子選單', 'hover'],
      spec: [
        '主選單中「移動到」項目 hover 時，右側展開第二層子選單，子選單與主選單頂端對齊。',
        '子選單列出資料夾（fa-folder），最後一項為 fa-plus「新增資料夾」。',
        '主選單項目 hover 時保持淺灰底，子選單以淡入與向右位移 4px 出現。',
      ],
      html: `<div class="relative w-52 p-1.5 rounded-xl border border-line bg-surface shadow-lift text-sm mr-48">
  <button type="button" class="w-full flex items-center gap-2.5 h-8 px-2.5 rounded-lg text-ink hover:bg-subtle"><i class="fa-regular fa-star w-4 text-xs text-ink-faint"></i>加入最愛</button>
  <div class="group relative">
    <button type="button" class="w-full flex items-center gap-2.5 h-8 px-2.5 rounded-lg text-ink bg-subtle"><i class="fa-regular fa-folder-open w-4 text-xs text-ink-faint"></i>移動到<i class="ml-auto fa-solid fa-chevron-right text-[9px] text-ink-faint"></i></button>
    <div class="absolute left-full top-0 ml-2 w-48 p-1.5 rounded-xl border border-line bg-surface shadow-lift transition">
      <button type="button" class="w-full flex items-center gap-2.5 h-8 px-2.5 rounded-lg text-ink hover:bg-subtle"><i class="fa-solid fa-folder w-4 text-xs text-amber-500"></i>行銷素材</button>
      <button type="button" class="w-full flex items-center gap-2.5 h-8 px-2.5 rounded-lg text-ink hover:bg-subtle"><i class="fa-solid fa-folder w-4 text-xs text-sky-500"></i>產品文件</button>
      <button type="button" class="w-full flex items-center gap-2.5 h-8 px-2.5 rounded-lg text-ink hover:bg-subtle"><i class="fa-solid fa-folder w-4 text-xs text-emerald-500"></i>封存區</button>
      <div class="my-1.5 h-px bg-line"></div>
      <button type="button" class="w-full flex items-center gap-2.5 h-8 px-2.5 rounded-lg text-ink-soft hover:bg-subtle"><i class="fa-solid fa-plus w-4 text-xs"></i>新增資料夾</button>
    </div>
  </div>
  <button type="button" class="w-full flex items-center gap-2.5 h-8 px-2.5 rounded-lg text-ink hover:bg-subtle"><i class="fa-solid fa-link w-4 text-xs text-ink-faint"></i>複製連結</button>
</div>`,
    },
    {
      name: '更多動作選單',
      en: 'Kebab Action Menu',
      tags: ['動作', '危險操作'],
      spec: [
        '表格列右側的 fa-ellipsis-vertical 圖示按鈕，點擊後向左下展開動作選單。',
        '選單項目包含檢視、編輯、轉移擁有者，最後以分隔線隔開的「刪除專案」為 rose 色危險操作，並附說明文字。',
        '選單向右對齊觸發按鈕。',
      ],
      html: `<div class="relative h-60 w-64 flex justify-end">
  <div class="relative">
    <button type="button" onclick="UIK.menu(this)" aria-label="更多動作" class="w-8 h-8 rounded-lg border border-line bg-surface grid place-items-center text-ink-soft hover:bg-subtle shadow-sm"><i class="fa-solid fa-ellipsis-vertical"></i></button>
    <div data-menu class="absolute right-0 top-10 z-10 w-60 p-1.5 rounded-xl border border-line bg-surface shadow-lift text-sm animate-fade-up">
      <button type="button" class="w-full flex items-center gap-2.5 h-8 px-2.5 rounded-lg text-ink hover:bg-subtle"><i class="fa-regular fa-eye w-4 text-xs text-ink-faint"></i>檢視詳情</button>
      <button type="button" class="w-full flex items-center gap-2.5 h-8 px-2.5 rounded-lg text-ink hover:bg-subtle"><i class="fa-regular fa-pen-to-square w-4 text-xs text-ink-faint"></i>編輯專案</button>
      <button type="button" class="w-full flex items-center gap-2.5 h-8 px-2.5 rounded-lg text-ink hover:bg-subtle"><i class="fa-solid fa-right-left w-4 text-xs text-ink-faint"></i>轉移擁有者</button>
      <div class="my-1.5 h-px bg-line"></div>
      <button type="button" class="w-full flex gap-2.5 p-2.5 rounded-lg text-left hover:bg-rose-500/10"><i class="fa-regular fa-trash-can w-4 mt-0.5 text-xs text-rose-600"></i><span><span class="block font-medium text-rose-600">刪除專案</span><span class="block text-xs text-ink-faint">此操作無法復原</span></span></button>
    </div>
  </div>
</div>`,
    },
    {
      name: '語言切換選單',
      en: 'Language Picker',
      tags: ['國際化', '下拉'],
      spec: [
        '觸發按鈕顯示 fa-globe 圖示與目前語言代碼「繁中」。',
        '展開選單列出語言，每列左側為語言原文名稱、右側為英文灰字，目前語言有 fa-check。',
        '選單頂部附「選擇語言」小標題。',
      ],
      html: `<div class="relative h-64 w-56">
  <button type="button" onclick="UIK.menu(this)" class="h-9 px-3 rounded-full border border-line bg-surface text-[13px] font-medium text-ink shadow-sm hover:bg-subtle flex items-center gap-2"><i class="fa-solid fa-globe text-ink-faint"></i>繁中<i class="fa-solid fa-chevron-down text-[9px] text-ink-faint"></i></button>
  <div data-menu class="absolute left-0 top-11 z-10 w-56 p-1.5 rounded-xl border border-line bg-surface shadow-lift text-sm animate-fade-up">
    <p class="px-2.5 py-1.5 text-[11px] font-semibold text-ink-faint">選擇語言</p>
    <button type="button" class="w-full flex items-center gap-2 h-9 px-2.5 rounded-lg bg-subtle text-ink font-medium">繁體中文<span class="text-xs font-normal text-ink-faint">Traditional Chinese</span><i class="ml-auto fa-solid fa-check text-xs text-brand-600"></i></button>
    <button type="button" class="w-full flex items-center gap-2 h-9 px-2.5 rounded-lg text-ink hover:bg-subtle">English<span class="text-xs text-ink-faint">英文</span></button>
    <button type="button" class="w-full flex items-center gap-2 h-9 px-2.5 rounded-lg text-ink hover:bg-subtle">日本語<span class="text-xs text-ink-faint">Japanese</span></button>
    <button type="button" class="w-full flex items-center gap-2 h-9 px-2.5 rounded-lg text-ink hover:bg-subtle">한국어<span class="text-xs text-ink-faint">Korean</span></button>
  </div>
</div>`,
    },
    {
      name: '篩選面板',
      en: 'Filter Popover',
      tags: ['篩選', '表單'],
      spec: [
        '彈出式篩選面板：標題「篩選條件」與「重設」連結，下方分為「狀態」核取群組與「價格區間」兩個輸入框。',
        '各區塊以小標題與分隔線區分；狀態選項附彩色圓點。',
        '底部為全寬深色「顯示 24 筆結果」按鈕。',
      ],
      html: `<div class="w-72 rounded-2xl border border-line bg-surface shadow-lift text-sm">
  <div class="flex items-center justify-between px-4 h-12 border-b border-line"><span class="font-semibold text-ink"><i class="fa-solid fa-filter text-xs text-ink-faint mr-2"></i>篩選條件</span><button type="button" class="text-xs text-brand-600 dark:text-brand-400 font-medium">重設</button></div>
  <div class="p-4 space-y-4">
    <div>
      <p class="mb-2 text-xs font-semibold text-ink-faint">狀態</p>
      <label class="flex items-center gap-2.5 h-8 text-ink cursor-pointer"><input type="checkbox" checked class="w-4 h-4 accent-brand-600"><span class="w-2 h-2 rounded-full bg-emerald-500"></span>上架中</label>
      <label class="flex items-center gap-2.5 h-8 text-ink cursor-pointer"><input type="checkbox" class="w-4 h-4 accent-brand-600"><span class="w-2 h-2 rounded-full bg-amber-500"></span>庫存不足</label>
      <label class="flex items-center gap-2.5 h-8 text-ink cursor-pointer"><input type="checkbox" class="w-4 h-4 accent-brand-600"><span class="w-2 h-2 rounded-full bg-zinc-400"></span>已下架</label>
    </div>
    <div class="pt-4 border-t border-line">
      <p class="mb-2 text-xs font-semibold text-ink-faint">價格區間</p>
      <div class="flex items-center gap-2"><input type="text" placeholder="最低" class="w-full h-9 px-3 rounded-lg border border-line bg-surface text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand-500"><span class="text-ink-faint">–</span><input type="text" placeholder="最高" class="w-full h-9 px-3 rounded-lg border border-line bg-surface text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand-500"></div>
    </div>
    <button type="button" class="w-full h-10 rounded-[10px] bg-ink text-canvas text-sm font-medium hover:opacity-85">顯示 24 筆結果</button>
  </div>
</div>`,
    },
    {
      name: '可捲動分頁列',
      en: 'Scrollable Tabs',
      tags: ['Tabs', '溢出'],
      spec: [
        '分頁數量超過容器寬度時可水平捲動，左右兩端有漸層遮罩淡出效果，並有圓形箭頭按鈕。',
        '隱藏捲軸（scrollbar-width: none），分頁為膠囊樣式，選取項為深色實心。',
        '點擊箭頭時捲動 160px（scrollBy, smooth）。',
      ],
      html: `<div class="relative w-[380px] max-w-full flex items-center">
  <button type="button" aria-label="向左捲動" onclick="this.parentElement.querySelector('[data-scroller]').scrollBy({left:-160,behavior:'smooth'})" class="absolute left-0 z-10 w-8 h-8 rounded-full border border-line bg-surface shadow-sm grid place-items-center text-ink-soft"><i class="fa-solid fa-chevron-left text-[10px]"></i></button>
  <div data-scroller class="mx-0 px-10 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [mask-image:linear-gradient(to_right,transparent,#000_48px,#000_calc(100%-48px),transparent)]">
    <div data-pick data-on="bg-ink text-canvas" data-off="bg-subtle text-ink-soft" class="flex gap-2 w-max text-[13px] font-medium">
      <button type="button" data-item aria-selected="true" onclick="UIK.pick(this)" class="h-8 px-3.5 rounded-full bg-ink text-canvas">熱門推薦</button>
      <button type="button" data-item onclick="UIK.pick(this)" class="h-8 px-3.5 rounded-full bg-subtle text-ink-soft">科技</button>
      <button type="button" data-item onclick="UIK.pick(this)" class="h-8 px-3.5 rounded-full bg-subtle text-ink-soft">設計美學</button>
      <button type="button" data-item onclick="UIK.pick(this)" class="h-8 px-3.5 rounded-full bg-subtle text-ink-soft">財經</button>
      <button type="button" data-item onclick="UIK.pick(this)" class="h-8 px-3.5 rounded-full bg-subtle text-ink-soft">旅遊生活</button>
      <button type="button" data-item onclick="UIK.pick(this)" class="h-8 px-3.5 rounded-full bg-subtle text-ink-soft">健康</button>
      <button type="button" data-item onclick="UIK.pick(this)" class="h-8 px-3.5 rounded-full bg-subtle text-ink-soft">美食</button>
      <button type="button" data-item onclick="UIK.pick(this)" class="h-8 px-3.5 rounded-full bg-subtle text-ink-soft">運動</button>
    </div>
  </div>
  <button type="button" aria-label="向右捲動" onclick="this.parentElement.querySelector('[data-scroller]').scrollBy({left:160,behavior:'smooth'})" class="absolute right-0 z-10 w-8 h-8 rounded-full border border-line bg-surface shadow-sm grid place-items-center text-ink-soft"><i class="fa-solid fa-chevron-right text-[10px]"></i></button>
</div>`,
    },
    {
      name: '計費週期切換',
      en: 'Billing Period Toggle',
      tags: ['定價', '切換'],
      spec: [
        '定價頁常見的「月繳 / 年繳」雙選切換，白色滑塊在淺灰膠囊容器內左右滑動。',
        '「年繳」右側附 emerald 色「省 20%」小徽章。',
        '下方價格隨切換顯示對應數字（使用 data-panel 切換）。',
      ],
      html: `<div class="text-center" data-pick data-on="text-ink" data-off="text-ink-faint">
  <div class="relative inline-grid grid-cols-2 p-1 rounded-full bg-subtle text-sm font-medium">
    <span data-indicator="pct" class="absolute left-1 top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-surface shadow-sm transition-transform duration-300"></span>
    <button type="button" data-item data-tab="m" aria-selected="true" onclick="UIK.pick(this)" class="relative z-10 h-9 px-6 text-ink">月繳</button>
    <button type="button" data-item data-tab="y" onclick="UIK.pick(this)" class="relative z-10 h-9 px-6 text-ink-faint flex items-center gap-1.5">年繳<span class="px-1.5 py-px rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-[10px] font-semibold">省 20%</span></button>
  </div>
  <p data-panel="m" class="mt-5"><span class="text-4xl font-bold tracking-tight text-ink">$30</span><span class="text-sm text-ink-faint"> / 月</span></p>
  <p data-panel="y" class="hidden mt-5"><span class="text-4xl font-bold tracking-tight text-ink">$24</span><span class="text-sm text-ink-faint"> / 月，年繳 $288</span></p>
</div>`,
    },
  ],
});
