(function () {
  const av = (t, c) => `<span class="w-8 h-8 shrink-0 rounded-full ${c} text-white grid place-items-center text-xs font-semibold">${t}</span>`;
  const badge = {
    on: '<span class="inline-flex items-center gap-1.5 h-6 px-2 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-medium"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>啟用中</span>',
    wait: '<span class="inline-flex items-center gap-1.5 h-6 px-2 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-medium"><span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>待邀請</span>',
    off: '<span class="inline-flex items-center gap-1.5 h-6 px-2 rounded-full bg-subtle text-ink-soft text-xs font-medium"><span class="w-1.5 h-1.5 rounded-full bg-ink-faint"></span>已停用</span>',
  };
  const people = [
    ['王', 'bg-sky-500', '王雅琪', 'yaqi@acme.tw', '管理員', 'on', '2 分鐘前'],
    ['陳', 'bg-amber-500', '陳俊宏', 'junhong@acme.tw', '編輯者', 'on', '1 小時前'],
    ['林', 'bg-pink-500', '林佳穎', 'jiaying@acme.tw', '檢視者', 'wait', '—'],
    ['黃', 'bg-emerald-500', '黃志偉', 'zhiwei@acme.tw', '編輯者', 'off', '3 週前'],
  ];
  const th = 'px-4 h-10 text-left text-xs font-medium text-ink-faint';
  const td = 'px-4 h-14 text-sm';

  (window.UI_ATLAS = window.UI_ATLAS || []).push({
    id: 'tables',
    name: '資料表格',
    en: 'Data Tables',
    icon: 'fa-solid fa-table',
    desc: '成員列表、可排序表頭、批次選取、可展開列、行內編輯、工具列與方案比較表，後台與 SaaS 介面最常用的資料呈現方式。',
    items: [
      {
        name: '成員資料表',
        en: 'Member Table',
        tags: ['基礎', '後台'],
        wide: true,
        spec: [
          '白底圓角 16px 的表格容器，表頭為淺灰底、12px 灰色欄位名稱，列與列之間以 1px 分隔線區隔。',
          '成員欄包含圓形頭像、粗體姓名與灰色電子郵件；角色為一般文字；狀態以圓點膠囊徽章顯示（啟用中、待邀請、已停用）。',
          '最後一欄為 fa-ellipsis 更多按鈕；列 hover 時出現淺灰底。',
        ],
        html: `<div class="w-full max-w-3xl rounded-2xl border border-line bg-surface shadow-sm overflow-x-auto">
  <table class="w-full min-w-[560px]">
    <thead class="bg-subtle/60 border-b border-line"><tr><th class="${th}">成員</th><th class="${th}">角色</th><th class="${th}">狀態</th><th class="${th}">最後上線</th><th class="${th} w-12"><span class="sr-only">動作</span></th></tr></thead>
    <tbody class="divide-y divide-line">
${people.map((p) => `      <tr class="hover:bg-subtle/50 transition-colors"><td class="${td}"><div class="flex items-center gap-3">${av(p[0], p[1])}<div><p class="font-medium text-ink">${p[2]}</p><p class="text-xs text-ink-faint">${p[3]}</p></div></div></td><td class="${td} text-ink-soft">${p[4]}</td><td class="${td}">${badge[p[5]]}</td><td class="${td} text-ink-faint">${p[6]}</td><td class="${td}"><button type="button" aria-label="更多動作" class="w-8 h-8 rounded-lg grid place-items-center text-ink-faint hover:bg-subtle hover:text-ink"><i class="fa-solid fa-ellipsis"></i></button></td></tr>`).join('\n')}
    </tbody>
  </table>
</div>`,
      },
      {
        name: '可排序表頭',
        en: 'Sortable Headers',
        tags: ['排序', '互動'],
        wide: true,
        spec: [
          '表頭每個可排序欄位為按鈕，右側顯示 fa-sort 灰色圖示；目前排序欄位文字為深色、圖示為主色，實作時依方向切換為 fa-sort-up 或 fa-sort-down。',
          '點擊表頭切換排序欄位，表頭使用 aria-sort 標示排序方向。',
          '數字欄（金額、數量）靠右對齊並使用等寬數字。',
        ],
        html: `<div class="w-full max-w-3xl rounded-2xl border border-line bg-surface shadow-sm overflow-x-auto">
  <table class="w-full min-w-[520px] text-sm">
    <thead class="border-b border-line"><tr data-pick data-on="text-ink [&_i]:text-brand-600" data-off="text-ink-faint [&_i]:text-ink-faint/60">
      <th class="px-4 h-11 text-left"><button type="button" data-item onclick="UIK.pick(this)" class="inline-flex items-center gap-1.5 text-xs font-medium text-ink-faint hover:text-ink [&_i]:text-ink-faint/60">訂單編號<i class="fa-solid fa-sort text-[10px]"></i></button></th>
      <th class="px-4 h-11 text-left"><button type="button" data-item onclick="UIK.pick(this)" class="inline-flex items-center gap-1.5 text-xs font-medium text-ink-faint hover:text-ink [&_i]:text-ink-faint/60">客戶<i class="fa-solid fa-sort text-[10px]"></i></button></th>
      <th class="px-4 h-11 text-left" aria-sort="descending"><button type="button" data-item aria-selected="true" onclick="UIK.pick(this)" class="inline-flex items-center gap-1.5 text-xs font-medium text-ink [&_i]:text-brand-600">日期<i class="fa-solid fa-sort text-[10px]"></i></button></th>
      <th class="px-4 h-11 text-right"><button type="button" data-item onclick="UIK.pick(this)" class="inline-flex items-center gap-1.5 text-xs font-medium text-ink-faint hover:text-ink [&_i]:text-ink-faint/60">金額<i class="fa-solid fa-sort text-[10px]"></i></button></th>
    </tr></thead>
    <tbody class="divide-y divide-line">
      <tr><td class="px-4 h-12 font-mono text-xs text-ink-soft">#AT-20491</td><td class="px-4 text-ink">陳怡君</td><td class="px-4 text-ink-soft">11/03</td><td class="px-4 text-right font-medium text-ink tabular-nums">$3,480</td></tr>
      <tr><td class="px-4 h-12 font-mono text-xs text-ink-soft">#AT-20488</td><td class="px-4 text-ink">張家豪</td><td class="px-4 text-ink-soft">11/02</td><td class="px-4 text-right font-medium text-ink tabular-nums">$12,900</td></tr>
      <tr><td class="px-4 h-12 font-mono text-xs text-ink-soft">#AT-20476</td><td class="px-4 text-ink">李思穎</td><td class="px-4 text-ink-soft">10/30</td><td class="px-4 text-right font-medium text-ink tabular-nums">$860</td></tr>
    </tbody>
  </table>
</div>`,
      },
      {
        name: '批次選取表格',
        en: 'Bulk Selection Table',
        tags: ['多選', '批次操作'],
        wide: true,
        spec: [
          '第一欄為核取方塊，表頭為三態全選（全選 / 部分 / 未選），勾選列的背景為淡主色。',
          '有項目被選取時，表格上方顯示深色批次操作列：「已選取 N 項」與匯出、封存、刪除（rose）按鈕。',
          '核取方塊與列文字垂直置中，選取數量即時更新。',
        ],
        html: `<div data-tri class="w-full max-w-3xl">
  <div class="mb-2 flex items-center gap-3 h-11 pl-4 pr-2 rounded-xl bg-zinc-900 text-white text-sm">
    <span>已選取 <span data-out class="font-semibold tabular-nums">2</span> 項</span>
    <div class="ml-auto flex gap-1"><button type="button" class="h-8 px-3 rounded-lg hover:bg-white/10"><i class="fa-solid fa-download mr-1.5 text-xs"></i>匯出</button><button type="button" class="h-8 px-3 rounded-lg hover:bg-white/10"><i class="fa-solid fa-box-archive mr-1.5 text-xs"></i>封存</button><button type="button" class="h-8 px-3 rounded-lg text-rose-300 hover:bg-rose-500/20"><i class="fa-regular fa-trash-can mr-1.5 text-xs"></i>刪除</button></div>
  </div>
  <div class="rounded-2xl border border-line bg-surface shadow-sm overflow-x-auto">
    <table class="w-full min-w-[520px] text-sm">
      <thead class="bg-subtle/60 border-b border-line"><tr><th class="w-12 pl-4"><input type="checkbox" data-tri-all onchange="UIK.tri(this)" aria-label="全選" class="w-4 h-4 accent-brand-600 align-middle"></th><th class="${th}">檔案名稱</th><th class="${th}">大小</th><th class="${th}">上傳者</th></tr></thead>
      <tbody class="divide-y divide-line">
        <tr class="has-[:checked]:bg-brand-500/[.05]"><td class="pl-4"><input type="checkbox" data-tri-item checked onchange="UIK.tri(this)" aria-label="選取" class="w-4 h-4 accent-brand-600 align-middle"></td><td class="px-4 h-12 text-ink"><i class="fa-solid fa-file-pdf text-rose-500 mr-2"></i>品牌手冊.pdf</td><td class="px-4 text-ink-soft tabular-nums">4.2 MB</td><td class="px-4 text-ink-soft">王雅琪</td></tr>
        <tr class="has-[:checked]:bg-brand-500/[.05]"><td class="pl-4"><input type="checkbox" data-tri-item checked onchange="UIK.tri(this)" aria-label="選取" class="w-4 h-4 accent-brand-600 align-middle"></td><td class="px-4 h-12 text-ink"><i class="fa-solid fa-file-image text-violet-500 mr-2"></i>首頁主視覺.png</td><td class="px-4 text-ink-soft tabular-nums">2.8 MB</td><td class="px-4 text-ink-soft">陳俊宏</td></tr>
        <tr class="has-[:checked]:bg-brand-500/[.05]"><td class="pl-4"><input type="checkbox" data-tri-item onchange="UIK.tri(this)" aria-label="選取" class="w-4 h-4 accent-brand-600 align-middle"></td><td class="px-4 h-12 text-ink"><i class="fa-solid fa-file-excel text-emerald-500 mr-2"></i>Q4 預算.xlsx</td><td class="px-4 text-ink-soft tabular-nums">380 KB</td><td class="px-4 text-ink-soft">林佳穎</td></tr>
      </tbody>
    </table>
  </div>
</div>`,
      },
      {
        name: '財務緊湊表格',
        en: 'Compact Financial Table',
        tags: ['斑馬紋', '數字'],
        spec: [
          '高密度的財務表格：列高 36px、字級 13px，偶數列為極淡灰底（斑馬紋）。',
          '所有數字欄靠右對齊並使用等寬數字，負數以 rose 色與括號表示，正成長為 emerald。',
          '底部合計列以粗體與上方 2px 深色分隔線強調。',
        ],
        html: `<div class="w-[440px] max-w-full rounded-xl border border-line bg-surface overflow-hidden text-[13px]">
  <table class="w-full tabular-nums">
    <thead><tr class="border-b border-line text-xs text-ink-faint"><th class="px-3 h-9 text-left font-medium">項目</th><th class="px-3 text-right font-medium">Q3</th><th class="px-3 text-right font-medium">Q4</th><th class="px-3 text-right font-medium">變動</th></tr></thead>
    <tbody class="[&>tr:nth-child(even)]:bg-subtle/60">
      <tr><td class="px-3 h-9 text-ink">產品營收</td><td class="px-3 text-right text-ink-soft">1,240,000</td><td class="px-3 text-right text-ink">1,486,000</td><td class="px-3 text-right text-emerald-600 dark:text-emerald-400">+19.8%</td></tr>
      <tr><td class="px-3 h-9 text-ink">服務收入</td><td class="px-3 text-right text-ink-soft">382,000</td><td class="px-3 text-right text-ink">401,500</td><td class="px-3 text-right text-emerald-600 dark:text-emerald-400">+5.1%</td></tr>
      <tr><td class="px-3 h-9 text-ink">行銷費用</td><td class="px-3 text-right text-ink-soft">(210,000)</td><td class="px-3 text-right text-rose-600 dark:text-rose-400">(268,000)</td><td class="px-3 text-right text-rose-600 dark:text-rose-400">+27.6%</td></tr>
      <tr><td class="px-3 h-9 text-ink">營運成本</td><td class="px-3 text-right text-ink-soft">(540,000)</td><td class="px-3 text-right text-rose-600 dark:text-rose-400">(552,300)</td><td class="px-3 text-right text-ink-soft">+2.3%</td></tr>
    </tbody>
    <tfoot><tr class="border-t-2 border-ink font-semibold"><td class="px-3 h-10 text-ink">營業利益</td><td class="px-3 text-right text-ink-soft">872,000</td><td class="px-3 text-right text-ink">1,067,200</td><td class="px-3 text-right text-emerald-600 dark:text-emerald-400">+22.4%</td></tr></tfoot>
  </table>
</div>`,
      },
      {
        name: '可展開列表格',
        en: 'Expandable Rows',
        tags: ['展開', '詳細資訊'],
        wide: true,
        spec: [
          '每列最左側為 fa-chevron-right 展開按鈕，點擊後箭頭旋轉 90 度，下方展開淺灰底的詳細資訊區。',
          '詳細區以三欄網格顯示訂單明細（商品、數量、小計），並附「查看完整訂單」連結。',
          '展開動畫使用 grid-template-rows 0fr → 1fr 平滑過渡，按鈕帶 aria-expanded。',
        ],
        html: `<div class="w-full max-w-3xl rounded-2xl border border-line bg-surface shadow-sm overflow-hidden text-sm divide-y divide-line">
  <div class="grid grid-cols-[40px_1fr_1fr_1fr] items-center h-10 px-2 bg-subtle/60 text-xs font-medium text-ink-faint"><span></span><span>訂單</span><span>客戶</span><span class="text-right pr-3">金額</span></div>
  <div>
    <button type="button" aria-expanded="true" onclick="UIK.acc(this)" class="w-full grid grid-cols-[40px_1fr_1fr_1fr] items-center h-12 px-2 text-left hover:bg-subtle/50"><i data-chevron="90" style="transform:rotate(90deg)" class="fa-solid fa-chevron-right text-[10px] text-ink-faint justify-self-center transition-transform duration-300"></i><span class="font-mono text-xs text-ink">#AT-20491</span><span class="text-ink">陳怡君</span><span class="text-right pr-3 font-medium text-ink tabular-nums">$3,480</span></button>
    <div class="grid transition-[grid-template-rows] duration-300" style="grid-template-rows:1fr"><div class="overflow-hidden"><div class="mx-3 mb-3 p-4 rounded-xl bg-subtle/70 text-[13px]">
      <div class="grid grid-cols-3 gap-y-2 text-ink-soft"><span class="text-xs text-ink-faint">商品</span><span class="text-xs text-ink-faint text-center">數量</span><span class="text-xs text-ink-faint text-right">小計</span><span class="text-ink">無線降噪耳機</span><span class="text-center tabular-nums">1</span><span class="text-right tabular-nums">$2,990</span><span class="text-ink">耳機收納盒</span><span class="text-center tabular-nums">1</span><span class="text-right tabular-nums">$490</span></div>
      <a href="#" onclick="return false" class="mt-3 inline-block text-xs font-medium text-brand-600 dark:text-brand-400">查看完整訂單 <i class="fa-solid fa-arrow-right text-[10px]"></i></a>
    </div></div></div>
  </div>
  <div>
    <button type="button" aria-expanded="false" onclick="UIK.acc(this)" class="w-full grid grid-cols-[40px_1fr_1fr_1fr] items-center h-12 px-2 text-left hover:bg-subtle/50"><i data-chevron="90" class="fa-solid fa-chevron-right text-[10px] text-ink-faint justify-self-center transition-transform duration-300"></i><span class="font-mono text-xs text-ink">#AT-20488</span><span class="text-ink">張家豪</span><span class="text-right pr-3 font-medium text-ink tabular-nums">$12,900</span></button>
    <div class="grid transition-[grid-template-rows] duration-300" style="grid-template-rows:0fr"><div class="overflow-hidden"><div class="mx-3 mb-3 p-4 rounded-xl bg-subtle/70 text-[13px] text-ink-soft">機械鍵盤 × 2、滑鼠墊 × 1</div></div></div>
  </div>
</div>`,
      },
      {
        name: '行內編輯表格',
        en: 'Inline Editable Table',
        tags: ['編輯', '表單'],
        spec: [
          '儲存格內直接放置無框輸入元件：文字輸入、數字輸入、下拉選單；hover 時儲存格出現淡灰底，focus 時出現主色內框。',
          '修改過的列左側出現 3px amber 色標記，並在最右側顯示 fa-rotate-left 復原按鈕。',
          '表格下方為「新增一列」虛線按鈕。',
        ],
        html: `<div class="w-[460px] max-w-full rounded-xl border border-line bg-surface overflow-hidden text-sm">
  <div class="grid grid-cols-[1.6fr_70px_1fr_36px] h-9 items-center px-1 border-b border-line text-xs font-medium text-ink-faint"><span class="px-2">品項</span><span class="px-2 text-right">數量</span><span class="px-2">分類</span><span></span></div>
  <div class="divide-y divide-line">
    <div class="grid grid-cols-[1.6fr_70px_1fr_36px] items-center px-1 h-11"><input value="文件夾 A4" class="h-8 px-2 rounded-md bg-transparent text-ink hover:bg-subtle focus:bg-surface focus:outline-none focus:ring-2 focus:ring-brand-500"><input type="number" value="24" class="h-8 px-2 rounded-md bg-transparent text-right tabular-nums text-ink hover:bg-subtle focus:bg-surface focus:outline-none focus:ring-2 focus:ring-brand-500 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"><select class="h-8 px-1.5 rounded-md bg-transparent text-ink-soft hover:bg-subtle focus:outline-none focus:ring-2 focus:ring-brand-500"><option>文具</option><option>耗材</option></select><span></span></div>
    <div class="relative grid grid-cols-[1.6fr_70px_1fr_36px] items-center px-1 h-11 bg-amber-500/[.04] before:absolute before:left-0 before:inset-y-0 before:w-[3px] before:bg-amber-500"><input value="碳粉匣（黑）" class="h-8 px-2 rounded-md bg-transparent text-ink hover:bg-subtle focus:bg-surface focus:outline-none focus:ring-2 focus:ring-brand-500"><input type="number" value="6" class="h-8 px-2 rounded-md bg-transparent text-right tabular-nums text-ink font-semibold hover:bg-subtle focus:bg-surface focus:outline-none focus:ring-2 focus:ring-brand-500 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"><select class="h-8 px-1.5 rounded-md bg-transparent text-ink-soft hover:bg-subtle focus:outline-none focus:ring-2 focus:ring-brand-500"><option>耗材</option><option>文具</option></select><button type="button" aria-label="復原變更" class="w-7 h-7 rounded-md grid place-items-center text-amber-600 hover:bg-amber-500/10"><i class="fa-solid fa-rotate-left text-xs"></i></button></div>
  </div>
  <button type="button" class="m-2 w-[calc(100%-16px)] h-9 rounded-lg border border-dashed border-line text-xs font-medium text-ink-soft hover:text-ink hover:border-ink-faint"><i class="fa-solid fa-plus mr-1.5 text-[10px]"></i>新增一列</button>
</div>`,
      },
      {
        name: '表格工具列',
        en: 'Table Toolbar',
        tags: ['搜尋', '篩選'],
        wide: true,
        spec: [
          '資料表上方的工具列：左側為帶 fa-magnifying-glass 的搜尋框與「狀態」「負責人」兩個虛線外框篩選按鈕（fa-circle-plus）。',
          '已套用的篩選以實線膠囊顯示並附 fa-xmark；右側為「欄位」與「匯出」按鈕，以及深色「新增」主要按鈕。',
          '工具列下方顯示結果數量「共 128 筆」。',
        ],
        html: `<div class="w-full max-w-3xl">
  <div class="flex flex-wrap items-center gap-2">
    <label class="relative"><i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-xs text-ink-faint"></i><input type="search" placeholder="搜尋專案…" class="w-52 h-9 pl-8 pr-3 rounded-lg border border-line bg-surface text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"></label>
    <span class="inline-flex items-center gap-1.5 h-9 pl-3 pr-1.5 rounded-lg border border-line bg-surface text-[13px] text-ink">狀態：<span class="font-medium">進行中</span><button type="button" aria-label="移除篩選" class="w-6 h-6 rounded grid place-items-center text-ink-faint hover:bg-subtle"><i class="fa-solid fa-xmark text-[10px]"></i></button></span>
    <button type="button" class="h-9 px-3 rounded-lg border border-dashed border-line text-[13px] text-ink-soft hover:text-ink hover:bg-subtle"><i class="fa-solid fa-circle-plus mr-1.5 text-xs"></i>負責人</button>
    <div class="ml-auto flex items-center gap-2">
      <button type="button" class="h-9 px-3 rounded-lg border border-line bg-surface text-[13px] text-ink-soft hover:text-ink"><i class="fa-solid fa-table-columns mr-1.5 text-xs"></i>欄位</button>
      <button type="button" class="h-9 px-3 rounded-lg border border-line bg-surface text-[13px] text-ink-soft hover:text-ink"><i class="fa-solid fa-file-export mr-1.5 text-xs"></i>匯出</button>
      <button type="button" class="h-9 px-3.5 rounded-lg bg-ink text-canvas text-[13px] font-medium"><i class="fa-solid fa-plus mr-1.5 text-xs"></i>新增</button>
    </div>
  </div>
  <p class="mt-3 text-xs text-ink-faint">共 <span class="font-semibold text-ink">128</span> 筆，已套用 1 個篩選條件</p>
</div>`,
      },
      {
        name: '固定首欄捲動表格',
        en: 'Sticky Column Table',
        tags: ['水平捲動', 'sticky'],
        wide: true,
        spec: [
          '欄位很多時可水平捲動的表格，第一欄（員工姓名）以 position: sticky 固定在左側，並在右緣加上捲動時的陰影分隔。',
          '表頭同樣固定，其餘欄位為 1–12 月的數值，寬度固定 72px，等寬數字靠右對齊。',
          '容器限制寬度並顯示細捲軸。',
        ],
        html: `<div class="w-full max-w-2xl rounded-2xl border border-line bg-surface overflow-x-auto thin-scroll">
  <table class="text-sm tabular-nums border-separate border-spacing-0">
    <thead><tr class="text-xs text-ink-faint">
      <th class="sticky left-0 z-10 bg-surface px-4 h-10 text-left font-medium border-b border-line shadow-[1px_0_0_rgb(var(--line)),6px_0_12px_-6px_rgb(0_0_0/.12)] min-w-[120px]">員工</th>
      ${['1 月', '2 月', '3 月', '4 月', '5 月', '6 月', '7 月', '8 月', '9 月', '10 月'].map((m) => `<th class="px-3 h-10 text-right font-medium border-b border-line min-w-[72px]">${m}</th>`).join('')}
    </tr></thead>
    <tbody>
      ${[['周品妤', 42], ['許志豪', 37], ['蔡宜庭', 51]].map(([n, base]) => `<tr><td class="sticky left-0 bg-surface px-4 h-11 text-ink font-medium border-b border-line shadow-[1px_0_0_rgb(var(--line)),6px_0_12px_-6px_rgb(0_0_0/.12)]">${n}</td>${Array.from({ length: 10 }, (_, i) => `<td class="px-3 text-right text-ink-soft border-b border-line">${base + ((i * 7 + base) % 13)}</td>`).join('')}</tr>`).join('')}
    </tbody>
  </table>
</div>`,
      },
      {
        name: '行動版卡片列表',
        en: 'Responsive Card List',
        tags: ['行動版', '響應式'],
        spec: [
          '表格在窄螢幕上改以卡片列表呈現：每筆資料為一張卡片，頂部為標題與狀態徽章，下方以「欄位名 : 值」兩欄網格列出其餘資訊。',
          '卡片右上為 fa-chevron-right，整張卡片可點擊；卡片間距 8px。',
          '示範寬度為手機尺寸（340px）。',
        ],
        html: `<div class="w-[340px] max-w-full space-y-2">
  <a href="#" onclick="return false" class="block p-4 rounded-xl border border-line bg-surface hover:border-ink-faint/50 transition">
    <div class="flex items-center gap-2"><span class="font-semibold text-sm text-ink">官網改版 2026</span><span class="px-1.5 py-0.5 rounded-full bg-sky-500/10 text-sky-700 dark:text-sky-400 text-[11px] font-medium">進行中</span><i class="ml-auto fa-solid fa-chevron-right text-[10px] text-ink-faint"></i></div>
    <dl class="mt-3 grid grid-cols-[72px_1fr] gap-y-1.5 text-xs"><dt class="text-ink-faint">負責人</dt><dd class="text-ink">王雅琪</dd><dt class="text-ink-faint">截止日</dt><dd class="text-ink">2026/12/15</dd><dt class="text-ink-faint">進度</dt><dd class="flex items-center gap-2"><span class="flex-1 h-1.5 rounded-full bg-subtle"><span class="block h-full w-3/5 rounded-full bg-brand-600"></span></span><span class="text-ink tabular-nums">60%</span></dd></dl>
  </a>
  <a href="#" onclick="return false" class="block p-4 rounded-xl border border-line bg-surface hover:border-ink-faint/50 transition">
    <div class="flex items-center gap-2"><span class="font-semibold text-sm text-ink">行動 App 2.0</span><span class="px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[11px] font-medium">已完成</span><i class="ml-auto fa-solid fa-chevron-right text-[10px] text-ink-faint"></i></div>
    <dl class="mt-3 grid grid-cols-[72px_1fr] gap-y-1.5 text-xs"><dt class="text-ink-faint">負責人</dt><dd class="text-ink">陳俊宏</dd><dt class="text-ink-faint">截止日</dt><dd class="text-ink">2026/10/31</dd></dl>
  </a>
</div>`,
      },
      {
        name: '方案比較表',
        en: 'Plan Comparison Table',
        tags: ['定價', '比較'],
        wide: true,
        spec: [
          '定價頁的功能比較表：第一欄為功能名稱，後三欄為方案（入門、專業、企業），推薦方案欄以淡主色底貫穿整欄並在表頭加上「推薦」徽章。',
          '支援的功能顯示 emerald fa-check，不支援顯示灰色 fa-minus，數量型功能直接顯示文字。',
          '功能以「核心功能」「進階功能」小標題分組。',
        ],
        html: `<div class="w-full max-w-3xl rounded-2xl border border-line bg-surface overflow-x-auto">
  <table class="w-full min-w-[540px] text-sm">
    <thead><tr><th class="px-5 h-16 text-left font-medium text-ink-faint text-xs">功能</th><th class="px-5 text-center font-semibold text-ink">入門</th><th class="px-5 text-center bg-brand-500/[.06]"><span class="block font-semibold text-brand-600 dark:text-brand-400">專業</span><span class="inline-block mt-1 px-1.5 rounded bg-brand-600 text-white text-[10px]">推薦</span></th><th class="px-5 text-center font-semibold text-ink">企業</th></tr></thead>
    <tbody>
      <tr><td colspan="4" class="px-5 pt-4 pb-2 text-[11px] font-semibold uppercase tracking-wider text-ink-faint border-t border-line">核心功能</td></tr>
      <tr class="border-t border-line"><td class="px-5 h-11 text-ink">專案數量</td><td class="text-center text-ink-soft">3 個</td><td class="text-center bg-brand-500/[.06] text-ink">無限</td><td class="text-center text-ink">無限</td></tr>
      <tr class="border-t border-line"><td class="px-5 h-11 text-ink">雲端空間</td><td class="text-center text-ink-soft">5 GB</td><td class="text-center bg-brand-500/[.06] text-ink">100 GB</td><td class="text-center text-ink">1 TB</td></tr>
      <tr><td colspan="4" class="px-5 pt-4 pb-2 text-[11px] font-semibold uppercase tracking-wider text-ink-faint border-t border-line">進階功能</td></tr>
      <tr class="border-t border-line"><td class="px-5 h-11 text-ink">進階分析</td><td class="text-center"><i class="fa-solid fa-minus text-ink-faint/60"></i></td><td class="text-center bg-brand-500/[.06]"><i class="fa-solid fa-check text-emerald-500"></i></td><td class="text-center"><i class="fa-solid fa-check text-emerald-500"></i></td></tr>
      <tr class="border-t border-line"><td class="px-5 h-11 text-ink">SSO 單一登入</td><td class="text-center"><i class="fa-solid fa-minus text-ink-faint/60"></i></td><td class="text-center bg-brand-500/[.06]"><i class="fa-solid fa-minus text-ink-faint/60"></i></td><td class="text-center"><i class="fa-solid fa-check text-emerald-500"></i></td></tr>
    </tbody>
  </table>
</div>`,
      },
      {
        name: '分組列表格',
        en: 'Grouped Rows Table',
        tags: ['分組', '任務'],
        wide: true,
        spec: [
          '依狀態分組的任務表格：每組前有一列淺灰底的分組標題（色點 + 狀態名稱 + 數量），可點擊 fa-chevron-down 收合該組。',
          '任務列包含核取方塊、任務名稱、負責人頭像、截止日與優先級圖示；已逾期的截止日為 rose 色。',
          '各組之間不留空白，以分組標題作為視覺分隔。',
        ],
        html: `<div class="w-full max-w-3xl rounded-2xl border border-line bg-surface shadow-sm overflow-hidden text-sm">
    <div>
      <button type="button" aria-expanded="true" onclick="UIK.acc(this)" class="w-full flex items-center gap-2 px-4 h-9 bg-subtle/70 text-xs font-semibold text-ink"><i data-chevron="0" style="transform:rotate(0deg)" class="fa-solid fa-chevron-down text-[9px] text-ink-faint transition-transform -rotate-90"></i><span class="w-2 h-2 rounded-full bg-sky-500"></span>進行中<span class="text-ink-faint font-normal">3</span></button>
      <div class="grid transition-[grid-template-rows] duration-300" style="grid-template-rows:1fr"><div class="overflow-hidden divide-y divide-line border-y border-line">
  ${[['設計結帳頁面', '林', 'bg-pink-500', '11/08', false, 'fa-angles-up text-rose-500'], ['串接金流 API', '陳', 'bg-amber-500', '11/02', true, 'fa-equals text-amber-500'], ['撰寫使用說明', '黃', 'bg-emerald-500', '11/20', false, 'fa-angles-down text-sky-500']].map(([t, a, c, d, late, p]) => `      <div class="grid grid-cols-[32px_1fr_80px_80px_40px] items-center px-4 h-11"><input type="checkbox" aria-label="完成" class="w-4 h-4 accent-brand-600"><span class="text-ink">${t}</span><span class="w-6 h-6 rounded-full ${c} text-white grid place-items-center text-[10px]">${a}</span><span class="${late ? 'text-rose-600 dark:text-rose-400 font-medium' : 'text-ink-soft'} text-xs">${late ? '<i class="fa-solid fa-clock mr-1"></i>' : ''}${d}</span><i class="fa-solid ${p} text-xs"></i></div>`).join('\n')}
      </div></div>
    </div>
    <div>
      <button type="button" aria-expanded="false" onclick="UIK.acc(this)" class="w-full flex items-center gap-2 px-4 h-9 bg-subtle/70 text-xs font-semibold text-ink"><i data-chevron="0" class="fa-solid fa-chevron-down text-[9px] text-ink-faint transition-transform -rotate-90"></i><span class="w-2 h-2 rounded-full bg-emerald-500"></span>已完成<span class="text-ink-faint font-normal">12</span></button>
      <div class="grid transition-[grid-template-rows] duration-300" style="grid-template-rows:0fr"><div class="overflow-hidden"><p class="px-4 py-3 text-xs text-ink-faint border-t border-line">12 項已完成的任務</p></div></div>
    </div>
  </div>`,
      },
      {
        name: '排行榜表格',
        en: 'Leaderboard Table',
        tags: ['排名', '遊戲化'],
        spec: [
          '前三名以金、銀、銅色的 fa-medal 圖示表示名次，其餘以等寬數字顯示。',
          '每列為頭像、名稱、積分（粗體等寬數字）與名次變化（fa-caret-up emerald / fa-caret-down rose / 持平灰色橫線）。',
          '目前使用者所在的列以淡主色底與「你」小徽章標示。',
        ],
        html: `<div class="w-[400px] max-w-full rounded-2xl border border-line bg-surface shadow-sm overflow-hidden text-sm">
    <div class="flex items-center justify-between px-4 h-12 border-b border-line"><p class="font-semibold text-ink"><i class="fa-solid fa-trophy text-amber-500 mr-2"></i>本月貢獻排行</p><span class="text-xs text-ink-faint">11 月</span></div>
  ${[['fa-medal text-amber-400', '周品妤', 'bg-violet-500', 2480, 'up', false], ['fa-medal text-zinc-400', '許承恩', 'bg-sky-500', 2310, 'same', false], ['fa-medal text-orange-600', '你', 'bg-brand-600', 2190, 'up', true], ['4', '蔡宜庭', 'bg-pink-500', 1960, 'down', false]].map(([r, n, c, s, t, me]) => `  <div class="flex items-center gap-3 px-4 h-12 border-b border-line last:border-0 ${me ? 'bg-brand-500/[.06]' : ''}"><span class="w-6 text-center">${r.startsWith('fa') ? `<i class="fa-solid ${r}"></i>` : `<span class="font-mono text-xs text-ink-faint">${r}</span>`}</span><span class="w-7 h-7 rounded-full ${c} text-white grid place-items-center text-[11px]">${n[0]}</span><span class="flex-1 text-ink ${me ? 'font-semibold' : ''}">${n}${me ? '<span class="ml-1.5 px-1.5 rounded bg-brand-600 text-white text-[10px]">你</span>' : ''}</span><span class="font-semibold text-ink tabular-nums">${s.toLocaleString()}</span><span class="w-5 text-center">${t === 'up' ? '<i class="fa-solid fa-caret-up text-emerald-500"></i>' : t === 'down' ? '<i class="fa-solid fa-caret-down text-rose-500"></i>' : '<i class="fa-solid fa-minus text-[10px] text-ink-faint"></i>'}</span></div>`).join('\n')}
  </div>`,
      },
      {
        name: '發票明細表',
        en: 'Invoice Line Items',
        tags: ['發票', '金額'],
        spec: [
          '發票的品項表格：品項名稱與說明、數量、單價、金額四欄，數字欄靠右對齊並使用等寬數字。',
          '表格下方右側為小計、折扣（emerald 負數）、營業稅 5% 與合計，合計以較大粗體字與上方分隔線強調。',
          '頂部為發票編號與「已付款」emerald 徽章。',
        ],
        html: `<div class="w-[460px] max-w-full p-5 rounded-2xl border border-line bg-surface shadow-sm text-sm">
    <div class="flex items-center justify-between"><div><p class="text-xs text-ink-faint">發票編號</p><p class="font-mono font-semibold text-ink">INV-2026-0412</p></div><span class="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-medium"><i class="fa-solid fa-circle-check mr-1"></i>已付款</span></div>
    <table class="mt-4 w-full tabular-nums">
      <thead><tr class="border-b border-line text-xs text-ink-faint"><th class="py-2 text-left font-medium">品項</th><th class="py-2 text-right font-medium">數量</th><th class="py-2 text-right font-medium">單價</th><th class="py-2 text-right font-medium">金額</th></tr></thead>
      <tbody class="divide-y divide-line">
        <tr><td class="py-2.5"><p class="text-ink">專業版年費</p><p class="text-[11px] text-ink-faint">2026/11 – 2027/10</p></td><td class="text-right text-ink-soft">5</td><td class="text-right text-ink-soft">2,880</td><td class="text-right text-ink">14,400</td></tr>
        <tr><td class="py-2.5"><p class="text-ink">額外儲存空間</p><p class="text-[11px] text-ink-faint">100 GB</p></td><td class="text-right text-ink-soft">1</td><td class="text-right text-ink-soft">1,200</td><td class="text-right text-ink">1,200</td></tr>
      </tbody>
    </table>
    <dl class="mt-3 ml-auto w-56 space-y-1.5 text-[13px] tabular-nums">
      <div class="flex justify-between"><dt class="text-ink-faint">小計</dt><dd class="text-ink">15,600</dd></div>
      <div class="flex justify-between"><dt class="text-ink-faint">年繳折扣</dt><dd class="text-emerald-600 dark:text-emerald-400">-1,560</dd></div>
      <div class="flex justify-between"><dt class="text-ink-faint">營業稅 5%</dt><dd class="text-ink">702</dd></div>
      <div class="flex justify-between pt-2 border-t border-line text-base font-bold"><dt class="text-ink">合計</dt><dd class="text-ink">NT$ 14,742</dd></div>
    </dl>
  </div>`,
      },
      {
        name: '權限矩陣',
        en: 'Permission Matrix',
        tags: ['權限', '角色'],
        wide: true,
        spec: [
          '列為權限項目（依模組分組），欄為角色（擁有者、管理員、編輯者、檢視者），每格為置中的核取方塊。',
          '擁有者欄位的核取方塊皆為勾選且停用（附 fa-lock 提示無法修改）；欄標題下方顯示該角色的成員數。',
          '權限名稱下方附灰色小字說明，表格 hover 時整列淺灰底。',
        ],
        html: `<div class="w-full max-w-3xl rounded-2xl border border-line bg-surface shadow-sm overflow-x-auto text-sm">
    <table class="w-full min-w-[560px]">
      <thead class="border-b border-line"><tr><th class="px-5 py-3 text-left text-xs font-medium text-ink-faint">權限</th>${[['擁有者', 1], ['管理員', 3], ['編輯者', 8], ['檢視者', 24]].map(([r, n]) => `<th class="px-3 py-3 text-center"><p class="text-[13px] font-semibold text-ink">${r}${r === '擁有者' ? ' <i class="fa-solid fa-lock text-[10px] text-ink-faint"></i>' : ''}</p><p class="text-[11px] font-normal text-ink-faint">${n} 位</p></th>`).join('')}</tr></thead>
      <tbody>
        <tr><td colspan="5" class="px-5 pt-3 pb-1.5 text-[11px] font-semibold uppercase tracking-wider text-ink-faint">專案</td></tr>
  ${[['檢視專案', '查看所有專案內容', [1, 1, 1, 1]], ['編輯內容', '新增與修改頁面', [1, 1, 1, 0]], ['刪除專案', '永久移除專案與檔案', [1, 1, 0, 0]]].map(([n, d, v]) => `      <tr class="border-t border-line hover:bg-subtle/50"><td class="px-5 py-2.5"><p class="text-ink">${n}</p><p class="text-[11px] text-ink-faint">${d}</p></td>${v.map((x, i) => `<td class="text-center"><input type="checkbox" ${x ? 'checked' : ''} ${i === 0 ? 'disabled' : ''} aria-label="${n}" class="w-4 h-4 accent-brand-600 disabled:opacity-60"></td>`).join('')}</tr>`).join('\n')}
        <tr><td colspan="5" class="px-5 pt-3 pb-1.5 text-[11px] font-semibold uppercase tracking-wider text-ink-faint border-t border-line">帳務</td></tr>
        <tr class="border-t border-line hover:bg-subtle/50"><td class="px-5 py-2.5"><p class="text-ink">管理付款方式</p><p class="text-[11px] text-ink-faint">變更信用卡與發票資訊</p></td><td class="text-center"><input type="checkbox" checked disabled aria-label="管理付款方式" class="w-4 h-4 accent-brand-600 disabled:opacity-60"></td><td class="text-center"><input type="checkbox" aria-label="管理付款方式" class="w-4 h-4 accent-brand-600"></td><td class="text-center"><input type="checkbox" aria-label="管理付款方式" class="w-4 h-4 accent-brand-600"></td><td class="text-center"><input type="checkbox" aria-label="管理付款方式" class="w-4 h-4 accent-brand-600"></td></tr>
      </tbody>
    </table>
  </div>`,
      },
      {
        name: '檔案總管清單',
        en: 'File Browser Table',
        tags: ['檔案', '雲端硬碟'],
        wide: true,
        spec: [
          '雲端硬碟的檔案清單：名稱欄為檔案類型圖示（資料夾為 amber fa-folder）與檔名，資料夾列在最上方。',
          '其餘欄位為擁有者、修改日期、檔案大小（資料夾顯示「—」）與共用成員頭像堆疊。',
          '目前選取的列為淡主色底，列 hover 時右側出現下載與更多圖示按鈕。',
        ],
        html: `<div class="w-full max-w-3xl rounded-2xl border border-line bg-surface shadow-sm overflow-x-auto text-[13px]">
    <div class="min-w-[580px]">
      <div class="grid grid-cols-[2fr_1fr_1fr_80px_90px_64px] items-center px-4 h-10 border-b border-line text-xs font-medium text-ink-faint"><span>名稱</span><span>擁有者</span><span>修改日期</span><span class="text-right">大小</span><span class="pl-4">共用</span><span></span></div>
  ${[['fa-folder text-amber-500', '設計素材', '我', '昨天', '—', 3, false], ['fa-folder text-amber-500', '合約文件', '王雅琪', '10/28', '—', 2, false], ['fa-file-pdf text-rose-500', '2026 年度報告.pdf', '我', '今天 09:12', '4.2 MB', 0, true], ['fa-file-video text-sky-500', '產品展示.mp4', '陳俊宏', '10/15', '128 MB', 4, false]].map(([ic, n, o, d, s, sh, sel]) => `    <div class="group grid grid-cols-[2fr_1fr_1fr_80px_90px_64px] items-center px-4 h-11 border-b border-line last:border-0 ${sel ? 'bg-brand-500/[.07]' : 'hover:bg-subtle/50'}"><span class="flex items-center gap-2.5 text-ink font-medium truncate"><i class="fa-solid ${ic}"></i>${n}</span><span class="text-ink-soft">${o}</span><span class="text-ink-soft">${d}</span><span class="text-right text-ink-faint tabular-nums">${s}</span><span class="pl-4 flex -space-x-1.5">${sh ? ['bg-sky-400', 'bg-pink-400', 'bg-amber-400', 'bg-emerald-400'].slice(0, sh).map((c) => `<span class="w-5 h-5 rounded-full ring-2 ring-surface ${c}"></span>`).join('') : '<i class="fa-solid fa-lock text-[10px] text-ink-faint"></i>'}</span><span class="flex justify-end gap-0.5 opacity-0 group-hover:opacity-100 ${sel ? 'opacity-100' : ''}"><button type="button" aria-label="下載" class="w-7 h-7 rounded-md text-ink-faint hover:bg-subtle hover:text-ink"><i class="fa-solid fa-download text-xs"></i></button><button type="button" aria-label="更多" class="w-7 h-7 rounded-md text-ink-faint hover:bg-subtle hover:text-ink"><i class="fa-solid fa-ellipsis-vertical text-xs"></i></button></span></div>`).join('\n')}
    </div>
  </div>`,
      },
      {
        name: '交易紀錄列表',
        en: 'Transaction History',
        tags: ['金流', '帳戶'],
        spec: [
          '銀行或錢包 App 的交易紀錄：依日期分組，每筆交易左側為圓形商家圖示（依類別著色），中間為商家名稱與類別。',
          '右側金額：收入為 emerald 並帶「+」，支出為一般文字色帶「-」；處理中的交易附 amber「處理中」小字。',
          '金額使用等寬數字並靠右對齊。',
        ],
        html: `<div class="w-[380px] max-w-full rounded-2xl border border-line bg-surface shadow-sm text-sm">
    <p class="px-4 pt-4 pb-2 text-[11px] font-semibold text-ink-faint">今天</p>
  ${[['fa-mug-hot', 'bg-amber-500/10 text-amber-600', '日光咖啡', '餐飲', '-150', ''], ['fa-briefcase', 'bg-emerald-500/10 text-emerald-600', 'Acme 股份有限公司', '薪資入帳', '+62,000', ''], ['fa-cart-shopping', 'bg-violet-500/10 text-violet-600', '線上購物', '購物', '-2,380', '處理中']].map(([ic, c, n, cat, a, st]) => `  <div class="flex items-center gap-3 px-4 h-14"><span class="w-9 h-9 rounded-full ${c} grid place-items-center"><i class="fa-solid ${ic} text-sm"></i></span><div class="flex-1"><p class="font-medium text-ink">${n}</p><p class="text-[11px] text-ink-faint">${cat}${st ? ` · <span class="text-amber-600">${st}</span>` : ''}</p></div><span class="font-semibold tabular-nums ${a.startsWith('+') ? 'text-emerald-600 dark:text-emerald-400' : 'text-ink'}">${a}</span></div>`).join('\n')}
    <p class="px-4 pt-3 pb-2 text-[11px] font-semibold text-ink-faint border-t border-line">11 月 2 日</p>
    <div class="flex items-center gap-3 px-4 h-14 pb-1"><span class="w-9 h-9 rounded-full bg-sky-500/10 text-sky-600 grid place-items-center"><i class="fa-solid fa-train-subway text-sm"></i></span><div class="flex-1"><p class="font-medium text-ink">捷運儲值</p><p class="text-[11px] text-ink-faint">交通</p></div><span class="font-semibold tabular-nums text-ink">-500</span></div>
  </div>`,
      },
      {
        name: '空資料表格',
        en: 'Empty Table State',
        tags: ['空狀態', '表格'],
        wide: true,
        spec: [
          '保留表頭的資料表，在表身區域置中顯示空狀態：圓角方塊中的 fa-magnifying-glass 圖示、標題「找不到符合的結果」與說明。',
          '說明中列出目前的搜尋關鍵字，下方為「清除篩選」外框按鈕與「新增客戶」深色按鈕。',
          '空狀態區塊高度約 240px，與表頭共用外框。',
        ],
        html: `<div class="w-full max-w-3xl rounded-2xl border border-line bg-surface shadow-sm overflow-hidden">
    <div class="grid grid-cols-4 px-5 h-10 items-center bg-subtle/60 border-b border-line text-xs font-medium text-ink-faint"><span>客戶名稱</span><span>聯絡人</span><span>方案</span><span>建立日期</span></div>
    <div class="py-12 px-6 text-center">
      <span class="mx-auto w-12 h-12 rounded-xl border border-line bg-surface shadow-soft grid place-items-center text-ink-faint"><i class="fa-solid fa-magnifying-glass"></i></span>
      <p class="mt-4 font-semibold text-ink">找不到符合的結果</p>
      <p class="mt-1 text-sm text-ink-soft">沒有客戶符合「<span class="font-medium text-ink">台中 + 企業版</span>」，試試調整篩選條件。</p>
      <div class="mt-5 flex justify-center gap-2"><button type="button" class="h-9 px-4 rounded-[10px] border border-line text-sm font-medium text-ink hover:bg-subtle">清除篩選</button><button type="button" class="h-9 px-4 rounded-[10px] bg-ink text-canvas text-sm font-medium"><i class="fa-solid fa-plus mr-1.5 text-xs"></i>新增客戶</button></div>
    </div>
  </div>`,
      },
      {
        name: '分頁表格',
        en: 'Paginated Table',
        tags: ['分頁', '頁尾'],
        wide: true,
        spec: [
          '資料表底部附帶分頁頁尾：左側為「每頁顯示」下拉與「第 11–20 筆，共 86 筆」，右側為上一頁、頁碼與下一頁。',
          '表格列使用一般高度，最後一欄為狀態徽章；頁碼中目前頁為深色實心。',
          '頁尾以上方分隔線與表格區隔、背景淺灰。',
        ],
        html: `<div class="w-full max-w-3xl rounded-2xl border border-line bg-surface shadow-sm overflow-hidden text-sm">
    <table class="w-full">
      <thead class="border-b border-line"><tr class="text-xs text-ink-faint"><th class="px-5 h-10 text-left font-medium">工單</th><th class="px-5 text-left font-medium">主旨</th><th class="px-5 text-left font-medium">狀態</th></tr></thead>
      <tbody class="divide-y divide-line">
        <tr><td class="px-5 h-11 font-mono text-xs text-ink-soft">#1043</td><td class="px-5 text-ink">無法匯出 PDF 報表</td><td class="px-5"><span class="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-medium">處理中</span></td></tr>
        <tr><td class="px-5 h-11 font-mono text-xs text-ink-soft">#1042</td><td class="px-5 text-ink">新增成員時發生錯誤</td><td class="px-5"><span class="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-medium">已解決</span></td></tr>
        <tr><td class="px-5 h-11 font-mono text-xs text-ink-soft">#1041</td><td class="px-5 text-ink">發票抬頭需要修改</td><td class="px-5"><span class="px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-700 dark:text-sky-400 text-xs font-medium">待回覆</span></td></tr>
      </tbody>
    </table>
    <div class="flex flex-wrap items-center gap-3 px-5 h-14 border-t border-line bg-subtle/40 text-xs text-ink-soft">
      <label class="flex items-center gap-2">每頁顯示<select class="h-8 px-2 rounded-lg border border-line bg-surface text-ink focus:outline-none"><option>10</option><option>25</option></select></label>
      <span>第 11–20 筆，共 86 筆</span>
      <div data-pick data-on="bg-ink text-canvas" data-off="text-ink-soft hover:bg-surface" class="ml-auto flex items-center gap-1 tabular-nums">
        <button type="button" aria-label="上一頁" class="w-8 h-8 rounded-lg hover:bg-surface"><i class="fa-solid fa-chevron-left text-[10px]"></i></button>
        <button type="button" data-item onclick="UIK.pick(this)" class="w-8 h-8 rounded-lg text-ink-soft hover:bg-surface">1</button><button type="button" data-item aria-selected="true" onclick="UIK.pick(this)" class="w-8 h-8 rounded-lg bg-ink text-canvas">2</button><button type="button" data-item onclick="UIK.pick(this)" class="w-8 h-8 rounded-lg text-ink-soft hover:bg-surface">3</button><span class="px-1">…</span><button type="button" data-item onclick="UIK.pick(this)" class="w-8 h-8 rounded-lg text-ink-soft hover:bg-surface">9</button>
        <button type="button" aria-label="下一頁" class="w-8 h-8 rounded-lg hover:bg-surface"><i class="fa-solid fa-chevron-right text-[10px]"></i></button>
      </div>
    </div>
  </div>`,
      },
      {
        name: '樹狀表格',
        en: 'Tree Table',
        tags: ['階層', '組織'],
        wide: true,
        spec: [
          '具有階層的表格（部門 → 小組 → 成員），名稱欄依層級縮排 20px，有子項目的列前方顯示 fa-chevron-right 展開按鈕。',
          '展開時箭頭旋轉 90 度並顯示子列；部門列為粗體並以淡灰底區隔。',
          '其他欄位為人數與預算（等寬數字靠右）。',
        ],
        html: `<div class="w-full max-w-3xl rounded-2xl border border-line bg-surface shadow-sm overflow-hidden text-sm">
    <div class="grid grid-cols-[1fr_80px_120px] px-4 h-10 items-center border-b border-line text-xs font-medium text-ink-faint"><span>部門 / 小組</span><span class="text-right">人數</span><span class="text-right">年度預算</span></div>
    <div>
      <button type="button" aria-expanded="true" onclick="UIK.acc(this)" class="w-full grid grid-cols-[1fr_80px_120px] items-center px-4 h-11 bg-subtle/50 border-b border-line text-left font-semibold text-ink"><span class="flex items-center gap-2"><i data-chevron="90" style="transform:rotate(90deg)" class="fa-solid fa-chevron-right text-[9px] text-ink-faint w-3 transition-transform"></i><i class="fa-solid fa-building text-xs text-ink-faint"></i>產品研發部</span><span class="text-right tabular-nums">24</span><span class="text-right tabular-nums">$18.6M</span></button>
      <div class="grid transition-[grid-template-rows] duration-300" style="grid-template-rows:1fr"><div class="overflow-hidden">
        <div class="grid grid-cols-[1fr_80px_120px] items-center px-4 h-11 border-b border-line text-ink"><span class="flex items-center gap-2 pl-5"><i class="fa-solid fa-chevron-right text-[9px] text-ink-faint w-3"></i><i class="fa-solid fa-users text-xs text-ink-faint"></i>前端組</span><span class="text-right tabular-nums text-ink-soft">9</span><span class="text-right tabular-nums text-ink-soft">$6.2M</span></div>
        <div class="grid grid-cols-[1fr_80px_120px] items-center px-4 h-11 border-b border-line text-ink"><span class="flex items-center gap-2 pl-5"><i class="fa-solid fa-chevron-right text-[9px] text-ink-faint w-3"></i><i class="fa-solid fa-users text-xs text-ink-faint"></i>後端組</span><span class="text-right tabular-nums text-ink-soft">11</span><span class="text-right tabular-nums text-ink-soft">$8.4M</span></div>
        <div class="grid grid-cols-[1fr_80px_120px] items-center px-4 h-11 border-b border-line text-ink"><span class="flex items-center gap-2 pl-10"><span class="w-3"></span><span class="w-5 h-5 rounded-full bg-sky-500 text-white grid place-items-center text-[9px]">許</span>許承恩（組長）</span><span class="text-right text-ink-faint">—</span><span class="text-right text-ink-faint">—</span></div>
      </div></div>
    </div>
    <button type="button" aria-expanded="false" onclick="UIK.acc(this)" class="w-full grid grid-cols-[1fr_80px_120px] items-center px-4 h-11 bg-subtle/50 text-left font-semibold text-ink"><span class="flex items-center gap-2"><i data-chevron="90" class="fa-solid fa-chevron-right text-[9px] text-ink-faint w-3 transition-transform"></i><i class="fa-solid fa-building text-xs text-ink-faint"></i>行銷部</span><span class="text-right tabular-nums">12</span><span class="text-right tabular-nums">$9.1M</span></button>
    <div class="grid transition-[grid-template-rows] duration-300" style="grid-template-rows:0fr"><div class="overflow-hidden"><p class="px-4 py-3 pl-12 text-xs text-ink-faint border-t border-line">品牌組、數位廣告組</p></div></div>
  </div>`,
      },
      {
        name: '規格對照表',
        en: 'Specs Table',
        tags: ['商品規格', '鍵值'],
        spec: [
          '商品頁的規格表：兩欄式鍵值排列，左欄為淺灰底的規格名稱（寬 120px），右欄為規格值。',
          '規格依「顯示器」「效能」「電池」分組，每組上方有附圖示的小標題（fa-display、fa-microchip、fa-battery-full）。',
          '列與列之間以 1px 分隔線區隔，外框圓角 12px。',
        ],
        html: `<div class="w-[400px] max-w-full space-y-4 text-[13px]">
  ${[['fa-display', '顯示器', [['尺寸', '14.2 吋 Liquid Retina'], ['解析度', '3024 × 1964'], ['更新率', '最高 120Hz']]], ['fa-microchip', '效能', [['處理器', '12 核心 CPU'], ['記憶體', '32 GB 統一記憶體']]], ['fa-battery-full', '電池', [['續航力', '最長 22 小時']]]].map(([ic, t, rows]) => `  <div><p class="mb-2 text-xs font-semibold text-ink"><i class="fa-solid ${ic} mr-1.5 text-ink-faint"></i>${t}</p><dl class="rounded-xl border border-line overflow-hidden divide-y divide-line">${rows.map(([k, v]) => `<div class="grid grid-cols-[120px_1fr]"><dt class="px-3 py-2.5 bg-subtle/60 text-ink-faint">${k}</dt><dd class="px-3 py-2.5 text-ink">${v}</dd></div>`).join('')}</dl></div>`).join('\n')}
  </div>`,
      },
    ],
  });
})();
