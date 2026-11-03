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
    ],
  });
})();
