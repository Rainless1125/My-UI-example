(function () {
  const thumb = '[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-brand-600 [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-brand-600';
  const track = 'w-full h-2 rounded-full appearance-none cursor-pointer bg-[linear-gradient(to_right,#4f46e5_var(--p),rgb(var(--line))_var(--p))] focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/20';

  (window.UI_ATLAS = window.UI_ATLAS || []).push({
    id: 'selection',
    name: '開關與選擇控制',
    en: 'Toggles & Selection',
    icon: 'fa-solid fa-toggle-on',
    desc: '開關、核取方塊、單選卡片、分段控制、滑桿、評分、步進器與色票，所有讓使用者「做選擇」的控制元件。',
    items: [
      {
        name: '基礎開關',
        en: 'Toggle Switch',
        tags: ['開關', '無 JS'],
        spec: [
          '寬 44px、高 24px 的膠囊開關，關閉時軌道為淺灰、開啟時為主色，白色圓形滑塊帶細微陰影。',
          '以隱藏的 checkbox 搭配 peer-checked 實作，滑塊位移動畫 200ms。',
          '展示三種尺寸（小、中、大）與一個停用狀態，右側附文字標籤。',
        ],
        html: `<div class="space-y-4">
  <label class="flex items-center gap-3 cursor-pointer"><span class="relative inline-flex"><input type="checkbox" class="peer sr-only"><span class="w-9 h-5 rounded-full bg-line peer-checked:bg-brand-600 peer-focus-visible:ring-4 peer-focus-visible:ring-brand-500/20 transition-colors"></span><span class="absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform peer-checked:translate-x-4"></span></span><span class="text-sm text-ink">小尺寸</span></label>
  <label class="flex items-center gap-3 cursor-pointer"><span class="relative inline-flex"><input type="checkbox" checked class="peer sr-only"><span class="w-11 h-6 rounded-full bg-line peer-checked:bg-brand-600 peer-focus-visible:ring-4 peer-focus-visible:ring-brand-500/20 transition-colors"></span><span class="absolute left-0.5 top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5"></span></span><span class="text-sm text-ink">中尺寸（預設）</span></label>
  <label class="flex items-center gap-3 cursor-pointer"><span class="relative inline-flex"><input type="checkbox" checked class="peer sr-only"><span class="w-14 h-8 rounded-full bg-line peer-checked:bg-emerald-500 peer-focus-visible:ring-4 peer-focus-visible:ring-emerald-500/20 transition-colors"></span><span class="absolute left-1 top-1 w-6 h-6 rounded-full bg-white shadow transition-transform peer-checked:translate-x-6"></span></span><span class="text-sm text-ink">大尺寸</span></label>
  <label class="flex items-center gap-3 cursor-not-allowed opacity-50"><span class="relative inline-flex"><input type="checkbox" disabled class="peer sr-only"><span class="w-11 h-6 rounded-full bg-line"></span><span class="absolute left-0.5 top-0.5 w-5 h-5 rounded-full bg-white shadow"></span></span><span class="text-sm text-ink">已停用</span></label>
</div>`,
      },
      {
        name: '日夜模式開關',
        en: 'Day / Night Switch',
        tags: ['主題', '圖示'],
        spec: [
          '寬 64px 的開關，滑塊內放置圖示：關閉時為 fa-sun（琥珀色），開啟時為 fa-moon（indigo）。',
          '軌道關閉時為天空藍漸層、開啟時為深藍夜空漸層，切換時背景色平滑過渡。',
          '滑塊為 28px 白色圓形，切換時圖示以旋轉淡入淡出交替。',
        ],
        html: `<label class="relative inline-flex cursor-pointer">
  <input type="checkbox" class="peer sr-only" aria-label="深色模式">
  <span class="w-16 h-9 rounded-full bg-gradient-to-r from-sky-300 to-sky-400 peer-checked:from-indigo-900 peer-checked:to-slate-900 shadow-inner transition-colors duration-500"></span>
  <span class="absolute left-1 top-1 w-7 h-7 rounded-full bg-white shadow-md transition-transform duration-500 peer-checked:translate-x-7"></span>
  <i class="fa-solid fa-sun absolute left-[11px] top-[11px] text-[13px] text-amber-500 transition-all duration-500 peer-checked:opacity-0 peer-checked:rotate-90 peer-checked:translate-x-7"></i>
  <i class="fa-solid fa-moon absolute left-[11px] top-[11px] text-[13px] text-indigo-600 opacity-0 -rotate-90 transition-all duration-500 peer-checked:opacity-100 peer-checked:rotate-0 peer-checked:translate-x-7"></i>
</label>`,
      },
      {
        name: '設定項目開關列表',
        en: 'Settings Toggle List',
        tags: ['設定', '列表'],
        spec: [
          '圓角卡片中的設定列表，每列左側為圓角方形圖示底、中間為標題與說明、右側為開關。',
          '列與列之間以 1px 分隔線區隔，整列皆可點擊切換。',
          '三個項目：電子郵件通知（fa-envelope）、推播通知（fa-bell）、每週摘要（fa-chart-simple）。',
        ],
        html: `<div class="w-96 max-w-full rounded-2xl border border-line bg-surface shadow-sm divide-y divide-line">
  <label class="flex items-center gap-3.5 p-4 cursor-pointer hover:bg-subtle/60 first:rounded-t-2xl transition">
    <span class="w-9 h-9 rounded-[10px] bg-sky-500/10 text-sky-600 dark:text-sky-400 grid place-items-center"><i class="fa-regular fa-envelope"></i></span>
    <span class="flex-1 min-w-0"><span class="block text-sm font-medium text-ink">電子郵件通知</span><span class="block text-xs text-ink-faint">有人提及你時寄送通知</span></span>
    <span class="relative inline-flex"><input type="checkbox" checked class="peer sr-only"><span class="w-11 h-6 rounded-full bg-line peer-checked:bg-brand-600 transition-colors"></span><span class="absolute left-0.5 top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5"></span></span>
  </label>
  <label class="flex items-center gap-3.5 p-4 cursor-pointer hover:bg-subtle/60 transition">
    <span class="w-9 h-9 rounded-[10px] bg-amber-500/10 text-amber-600 dark:text-amber-400 grid place-items-center"><i class="fa-regular fa-bell"></i></span>
    <span class="flex-1 min-w-0"><span class="block text-sm font-medium text-ink">推播通知</span><span class="block text-xs text-ink-faint">在裝置上即時接收提醒</span></span>
    <span class="relative inline-flex"><input type="checkbox" class="peer sr-only"><span class="w-11 h-6 rounded-full bg-line peer-checked:bg-brand-600 transition-colors"></span><span class="absolute left-0.5 top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5"></span></span>
  </label>
  <label class="flex items-center gap-3.5 p-4 cursor-pointer hover:bg-subtle/60 last:rounded-b-2xl transition">
    <span class="w-9 h-9 rounded-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 grid place-items-center"><i class="fa-solid fa-chart-simple"></i></span>
    <span class="flex-1 min-w-0"><span class="block text-sm font-medium text-ink">每週摘要</span><span class="block text-xs text-ink-faint">每週一寄送團隊活動報告</span></span>
    <span class="relative inline-flex"><input type="checkbox" checked class="peer sr-only"><span class="w-11 h-6 rounded-full bg-line peer-checked:bg-brand-600 transition-colors"></span><span class="absolute left-0.5 top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5"></span></span>
  </label>
</div>`,
      },
      {
        name: '自訂核取方塊',
        en: 'Custom Checkbox',
        tags: ['核取', '待辦'],
        spec: [
          '18px 圓角 5px 的自訂核取方塊，勾選時填滿主色並顯示白色 fa-check 圖示，帶縮放彈出動畫。',
          '應用在待辦清單：勾選後右側文字加上刪除線並變淡。',
          '以 peer 與 has-[:checked] 實作，不需要 JavaScript。',
        ],
        html: `<div class="w-72 space-y-1">
  <label class="group flex items-center gap-3 px-3 h-10 rounded-lg hover:bg-subtle cursor-pointer transition">
    <span class="relative grid place-items-center"><input type="checkbox" checked class="peer appearance-none w-[18px] h-[18px] rounded-[5px] border-[1.5px] border-line bg-surface checked:bg-brand-600 checked:border-brand-600 focus-visible:ring-4 focus-visible:ring-brand-500/20 transition"><i class="fa-solid fa-check absolute text-[10px] text-white scale-0 peer-checked:scale-100 transition-transform pointer-events-none"></i></span>
    <span class="text-sm text-ink group-has-[:checked]:line-through group-has-[:checked]:text-ink-faint transition">完成首頁設計稿</span>
  </label>
  <label class="group flex items-center gap-3 px-3 h-10 rounded-lg hover:bg-subtle cursor-pointer transition">
    <span class="relative grid place-items-center"><input type="checkbox" class="peer appearance-none w-[18px] h-[18px] rounded-[5px] border-[1.5px] border-line bg-surface checked:bg-brand-600 checked:border-brand-600 focus-visible:ring-4 focus-visible:ring-brand-500/20 transition"><i class="fa-solid fa-check absolute text-[10px] text-white scale-0 peer-checked:scale-100 transition-transform pointer-events-none"></i></span>
    <span class="text-sm text-ink group-has-[:checked]:line-through group-has-[:checked]:text-ink-faint transition">與工程師確認 API 規格</span>
  </label>
  <label class="group flex items-center gap-3 px-3 h-10 rounded-lg hover:bg-subtle cursor-pointer transition">
    <span class="relative grid place-items-center"><input type="checkbox" class="peer appearance-none w-[18px] h-[18px] rounded-[5px] border-[1.5px] border-line bg-surface checked:bg-brand-600 checked:border-brand-600 focus-visible:ring-4 focus-visible:ring-brand-500/20 transition"><i class="fa-solid fa-check absolute text-[10px] text-white scale-0 peer-checked:scale-100 transition-transform pointer-events-none"></i></span>
    <span class="text-sm text-ink group-has-[:checked]:line-through group-has-[:checked]:text-ink-faint transition">準備週五的產品簡報</span>
  </label>
</div>`,
      },
      {
        name: '核取卡片',
        en: 'Checkbox Cards',
        tags: ['多選', '卡片'],
        spec: [
          '兩欄網格排列的可多選卡片，每張卡片有圖示、標題與一行說明，右上角有圓形勾選指示。',
          '選取時卡片邊框變為主色 1.5px、背景為主色 4% 淡色調，右上角圓圈填滿並顯示 fa-check。',
          '使用 label 包住隱藏 checkbox 並搭配 has-[:checked] 樣式。',
        ],
        html: `<div class="grid grid-cols-2 gap-3 w-[400px] max-w-full">
  <label class="group relative p-4 rounded-xl border border-line bg-surface cursor-pointer hover:border-ink-faint/60 has-[:checked]:border-brand-500 has-[:checked]:bg-brand-500/[.04] has-[:checked]:ring-1 has-[:checked]:ring-brand-500 transition">
    <input type="checkbox" checked class="sr-only">
    <span class="absolute right-3 top-3 w-5 h-5 rounded-full border border-line grid place-items-center group-has-[:checked]:bg-brand-600 group-has-[:checked]:border-brand-600"><i class="fa-solid fa-check text-[9px] text-white opacity-0 group-has-[:checked]:opacity-100"></i></span>
    <i class="fa-solid fa-mobile-screen text-lg text-ink-soft group-has-[:checked]:text-brand-600"></i>
    <span class="block mt-3 text-sm font-semibold text-ink">行動 App</span><span class="block mt-0.5 text-xs text-ink-faint">iOS 與 Android</span>
  </label>
  <label class="group relative p-4 rounded-xl border border-line bg-surface cursor-pointer hover:border-ink-faint/60 has-[:checked]:border-brand-500 has-[:checked]:bg-brand-500/[.04] has-[:checked]:ring-1 has-[:checked]:ring-brand-500 transition">
    <input type="checkbox" class="sr-only">
    <span class="absolute right-3 top-3 w-5 h-5 rounded-full border border-line grid place-items-center group-has-[:checked]:bg-brand-600 group-has-[:checked]:border-brand-600"><i class="fa-solid fa-check text-[9px] text-white opacity-0 group-has-[:checked]:opacity-100"></i></span>
    <i class="fa-solid fa-display text-lg text-ink-soft group-has-[:checked]:text-brand-600"></i>
    <span class="block mt-3 text-sm font-semibold text-ink">網頁應用</span><span class="block mt-0.5 text-xs text-ink-faint">響應式網站</span>
  </label>
  <label class="group relative p-4 rounded-xl border border-line bg-surface cursor-pointer hover:border-ink-faint/60 has-[:checked]:border-brand-500 has-[:checked]:bg-brand-500/[.04] has-[:checked]:ring-1 has-[:checked]:ring-brand-500 transition">
    <input type="checkbox" checked class="sr-only">
    <span class="absolute right-3 top-3 w-5 h-5 rounded-full border border-line grid place-items-center group-has-[:checked]:bg-brand-600 group-has-[:checked]:border-brand-600"><i class="fa-solid fa-check text-[9px] text-white opacity-0 group-has-[:checked]:opacity-100"></i></span>
    <i class="fa-solid fa-server text-lg text-ink-soft group-has-[:checked]:text-brand-600"></i>
    <span class="block mt-3 text-sm font-semibold text-ink">後端服務</span><span class="block mt-0.5 text-xs text-ink-faint">API 與資料庫</span>
  </label>
  <label class="group relative p-4 rounded-xl border border-line bg-surface cursor-pointer hover:border-ink-faint/60 has-[:checked]:border-brand-500 has-[:checked]:bg-brand-500/[.04] has-[:checked]:ring-1 has-[:checked]:ring-brand-500 transition">
    <input type="checkbox" class="sr-only">
    <span class="absolute right-3 top-3 w-5 h-5 rounded-full border border-line grid place-items-center group-has-[:checked]:bg-brand-600 group-has-[:checked]:border-brand-600"><i class="fa-solid fa-check text-[9px] text-white opacity-0 group-has-[:checked]:opacity-100"></i></span>
    <i class="fa-solid fa-pen-ruler text-lg text-ink-soft group-has-[:checked]:text-brand-600"></i>
    <span class="block mt-3 text-sm font-semibold text-ink">品牌設計</span><span class="block mt-0.5 text-xs text-ink-faint">識別與視覺</span>
  </label>
</div>`,
      },
      {
        name: '單選按鈕群組',
        en: 'Radio Group',
        tags: ['單選', '基礎'],
        spec: [
          '垂直排列的單選選項，自訂 18px 圓形單選鈕：選取時外圈為主色、內部出現 8px 主色實心圓點。',
          '每個選項有粗體標題與灰色說明，標題右側可附加「推薦」小徽章。',
          '使用原生 radio（appearance-none）以保留鍵盤方向鍵切換。',
        ],
        html: `<fieldset class="w-80 space-y-3">
  <legend class="mb-3 text-sm font-semibold text-ink">通知頻率</legend>
  <label class="flex gap-3 cursor-pointer"><input type="radio" name="freq" checked class="mt-0.5 appearance-none shrink-0 w-[18px] h-[18px] rounded-full border-[1.5px] border-line bg-surface checked:border-brand-600 checked:border-[5px] focus-visible:ring-4 focus-visible:ring-brand-500/20 transition-all"><span><span class="flex items-center gap-2 text-sm font-medium text-ink">即時通知<span class="px-1.5 py-px rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 text-[10px] font-semibold">推薦</span></span><span class="block text-xs text-ink-faint mt-0.5">一有更新就通知我</span></span></label>
  <label class="flex gap-3 cursor-pointer"><input type="radio" name="freq" class="mt-0.5 appearance-none shrink-0 w-[18px] h-[18px] rounded-full border-[1.5px] border-line bg-surface checked:border-brand-600 checked:border-[5px] focus-visible:ring-4 focus-visible:ring-brand-500/20 transition-all"><span><span class="block text-sm font-medium text-ink">每日彙整</span><span class="block text-xs text-ink-faint mt-0.5">每天早上 9 點寄送一次</span></span></label>
  <label class="flex gap-3 cursor-pointer"><input type="radio" name="freq" class="mt-0.5 appearance-none shrink-0 w-[18px] h-[18px] rounded-full border-[1.5px] border-line bg-surface checked:border-brand-600 checked:border-[5px] focus-visible:ring-4 focus-visible:ring-brand-500/20 transition-all"><span><span class="block text-sm font-medium text-ink">不要通知</span><span class="block text-xs text-ink-faint mt-0.5">我會自己查看更新</span></span></label>
</fieldset>`,
      },
      {
        name: '方案單選卡片',
        en: 'Plan Radio Cards',
        tags: ['定價', '單選'],
        spec: [
          '垂直堆疊的三張方案卡片，左側為單選圓鈕，中間為方案名稱與說明，右側為月費價格。',
          '選取的卡片邊框與 ring 為主色、背景淡主色；熱門方案標題旁有 fa-fire 小徽章。',
          '使用原生 radio 與 has-[:checked] 實作，價格使用等寬數字。',
        ],
        html: `<div class="w-[400px] max-w-full space-y-2.5">
  <label class="flex items-center gap-4 p-4 rounded-xl border border-line bg-surface cursor-pointer has-[:checked]:border-brand-500 has-[:checked]:ring-1 has-[:checked]:ring-brand-500 has-[:checked]:bg-brand-500/[.04] transition">
    <input type="radio" name="plan" class="appearance-none shrink-0 w-[18px] h-[18px] rounded-full border-[1.5px] border-line checked:border-brand-600 checked:border-[5px] transition-all">
    <span class="flex-1"><span class="block text-sm font-semibold text-ink">入門版</span><span class="block text-xs text-ink-faint">個人專案，最多 3 個專案</span></span>
    <span class="text-right"><span class="text-base font-semibold text-ink tabular-nums">$0</span><span class="text-xs text-ink-faint"> / 月</span></span>
  </label>
  <label class="flex items-center gap-4 p-4 rounded-xl border border-line bg-surface cursor-pointer has-[:checked]:border-brand-500 has-[:checked]:ring-1 has-[:checked]:ring-brand-500 has-[:checked]:bg-brand-500/[.04] transition">
    <input type="radio" name="plan" checked class="appearance-none shrink-0 w-[18px] h-[18px] rounded-full border-[1.5px] border-line checked:border-brand-600 checked:border-[5px] transition-all">
    <span class="flex-1"><span class="flex items-center gap-2 text-sm font-semibold text-ink">專業版<span class="inline-flex items-center gap-1 px-1.5 py-px rounded bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[10px] font-semibold"><i class="fa-solid fa-fire"></i>熱門</span></span><span class="block text-xs text-ink-faint">小型團隊，無限專案</span></span>
    <span class="text-right"><span class="text-base font-semibold text-ink tabular-nums">$24</span><span class="text-xs text-ink-faint"> / 月</span></span>
  </label>
  <label class="flex items-center gap-4 p-4 rounded-xl border border-line bg-surface cursor-pointer has-[:checked]:border-brand-500 has-[:checked]:ring-1 has-[:checked]:ring-brand-500 has-[:checked]:bg-brand-500/[.04] transition">
    <input type="radio" name="plan" class="appearance-none shrink-0 w-[18px] h-[18px] rounded-full border-[1.5px] border-line checked:border-brand-600 checked:border-[5px] transition-all">
    <span class="flex-1"><span class="block text-sm font-semibold text-ink">企業版</span><span class="block text-xs text-ink-faint">進階權限與 SSO</span></span>
    <span class="text-right"><span class="text-base font-semibold text-ink tabular-nums">$89</span><span class="text-xs text-ink-faint"> / 月</span></span>
  </label>
</div>`,
      },
      {
        name: '分段控制器',
        en: 'Segmented Control',
        tags: ['分段', '滑動'],
        spec: [
          '淺灰底的膠囊容器內有三個等寬選項，選取項目下方有一個白色圓角滑塊，切換時以 250ms 平滑滑動。',
          '選取項目文字為深色、其他為灰色，每個選項附小圖示（fa-list、fa-table-cells、fa-calendar）。',
          '滑塊帶有細微陰影，看起來像浮起的按鈕。',
        ],
        html: `<div data-pick data-on="text-ink" data-off="text-ink-faint" class="relative grid grid-cols-3 w-80 p-1 rounded-xl bg-subtle">
  <span data-indicator="pct" class="absolute left-1 top-1 bottom-1 w-[calc((100%-8px)/3)] rounded-lg bg-surface shadow-sm ring-1 ring-black/5 transition-transform duration-[250ms] ease-out"></span>
  <button type="button" data-item aria-selected="true" onclick="UIK.pick(this)" class="relative z-10 h-9 flex items-center justify-center gap-2 text-sm font-medium text-ink transition-colors"><i class="fa-solid fa-list text-xs"></i>列表</button>
  <button type="button" data-item aria-selected="false" onclick="UIK.pick(this)" class="relative z-10 h-9 flex items-center justify-center gap-2 text-sm font-medium text-ink-faint transition-colors"><i class="fa-solid fa-table-cells text-xs"></i>看板</button>
  <button type="button" data-item aria-selected="false" onclick="UIK.pick(this)" class="relative z-10 h-9 flex items-center justify-center gap-2 text-sm font-medium text-ink-faint transition-colors"><i class="fa-regular fa-calendar text-xs"></i>日曆</button>
</div>`,
      },
      {
        name: '星等評分',
        en: 'Star Rating',
        tags: ['評分', '互動'],
        spec: [
          '五顆 fa-star 星星，點擊第 N 顆時前 N 顆變為琥珀色實心，其餘為淺灰。',
          '右側顯示目前分數（例如 4.0）與評論數；hover 時星星放大 110%。',
          '每顆星為按鈕並附 aria-label「N 顆星」。',
        ],
        html: `<div class="text-center">
  <div data-rate data-on="text-amber-400" data-off="text-line" class="flex items-center gap-3">
    <div class="flex gap-1 text-2xl">
      <button type="button" data-item onclick="UIK.rate(this)" aria-label="1 顆星" class="text-amber-400 hover:scale-110 transition"><i class="fa-solid fa-star"></i></button>
      <button type="button" data-item onclick="UIK.rate(this)" aria-label="2 顆星" class="text-amber-400 hover:scale-110 transition"><i class="fa-solid fa-star"></i></button>
      <button type="button" data-item onclick="UIK.rate(this)" aria-label="3 顆星" class="text-amber-400 hover:scale-110 transition"><i class="fa-solid fa-star"></i></button>
      <button type="button" data-item onclick="UIK.rate(this)" aria-label="4 顆星" class="text-amber-400 hover:scale-110 transition"><i class="fa-solid fa-star"></i></button>
      <button type="button" data-item onclick="UIK.rate(this)" aria-label="5 顆星" class="text-line hover:scale-110 transition"><i class="fa-solid fa-star"></i></button>
    </div>
    <span class="text-xl font-semibold text-ink tabular-nums" data-out>4.0</span>
  </div>
  <p class="mt-2 text-xs text-ink-faint">根據 2,481 則評論</p>
</div>`,
      },
      {
        name: '表情滿意度評分',
        en: 'Sentiment Rating',
        tags: ['回饋', '表情圖示'],
        spec: [
          '五個 Font Awesome 表情圖示（fa-face-angry、fa-face-frown、fa-face-meh、fa-face-smile、fa-face-grin-stars），不使用 emoji。',
          '每個圖示放在 48px 圓形按鈕中，選取時按鈕背景為主色淡色、圖示為主色並放大 110%。',
          '上方標題「你對這次的體驗滿意嗎？」，下方顯示選取項目的文字說明。',
        ],
        html: `<div class="text-center">
  <p class="text-sm font-semibold text-ink">你對這次的體驗滿意嗎？</p>
  <div data-pick data-on="bg-brand-500/10 text-brand-600 dark:text-brand-400 scale-110" data-off="text-ink-faint" class="mt-4 flex gap-2">
    <button type="button" data-item onclick="UIK.pick(this)" aria-label="非常不滿意" class="w-12 h-12 rounded-full grid place-items-center text-2xl text-ink-faint hover:bg-subtle transition"><i class="fa-regular fa-face-angry"></i></button>
    <button type="button" data-item onclick="UIK.pick(this)" aria-label="不滿意" class="w-12 h-12 rounded-full grid place-items-center text-2xl text-ink-faint hover:bg-subtle transition"><i class="fa-regular fa-face-frown"></i></button>
    <button type="button" data-item onclick="UIK.pick(this)" aria-label="普通" class="w-12 h-12 rounded-full grid place-items-center text-2xl text-ink-faint hover:bg-subtle transition"><i class="fa-regular fa-face-meh"></i></button>
    <button type="button" data-item aria-selected="true" onclick="UIK.pick(this)" aria-label="滿意" class="w-12 h-12 rounded-full grid place-items-center text-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400 scale-110 transition"><i class="fa-regular fa-face-smile"></i></button>
    <button type="button" data-item onclick="UIK.pick(this)" aria-label="非常滿意" class="w-12 h-12 rounded-full grid place-items-center text-2xl text-ink-faint hover:bg-subtle transition"><i class="fa-regular fa-face-grin-stars"></i></button>
  </div>
  <div class="mt-3 flex justify-between px-2 text-[11px] text-ink-faint"><span>不滿意</span><span>非常滿意</span></div>
</div>`,
      },
      {
        name: '數值滑桿',
        en: 'Range Slider with Tooltip',
        tags: ['滑桿', '數值'],
        spec: [
          '自訂樣式的 range 滑桿：已填滿段為主色、未填滿段為淺灰，軌道高 8px、圓角。',
          '滑塊為 20px 白色圓形、2px 主色邊框，上方跟隨一個深色數值氣泡（帶小三角）。',
          '下方左右兩端顯示最小值與最大值標籤，拖曳時數值即時更新。',
        ],
        html: `<div class="w-80 pt-8" data-range data-unit="%" style="--p:65%">
  <div class="relative">
    <span class="absolute -top-9 left-[var(--p)] -translate-x-1/2 px-2 py-1 rounded-md bg-ink text-canvas text-xs font-semibold tabular-nums after:absolute after:left-1/2 after:-bottom-1 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-ink"><span data-out>65%</span></span>
    <input type="range" min="0" max="100" value="65" oninput="UIK.range(this)" aria-label="透明度" class="${track} ${thumb}" style="--p:65%">
  </div>
  <div class="mt-2 flex justify-between text-xs text-ink-faint"><span>0%</span><span>100%</span></div>
</div>`,
      },
      {
        name: '音量控制列',
        en: 'Volume Control',
        tags: ['媒體', '滑桿'],
        spec: [
          '左側為 fa-volume-low、右側為 fa-volume-high 圖示，中間為細滑桿（高 6px）。',
          '整列包在膠囊形淺色卡片中，右側顯示目前音量數值。',
          '滑桿 hover 時滑塊放大，填滿段為深色（ink）而非主色，呈現極簡質感。',
        ],
        html: `<div class="flex items-center gap-3 w-80 h-14 px-4 rounded-2xl border border-line bg-surface shadow-soft" data-range style="--p:40%">
  <i class="fa-solid fa-volume-low text-sm text-ink-faint"></i>
  <input type="range" min="0" max="100" value="40" oninput="UIK.range(this)" aria-label="音量" style="--p:40%" class="flex-1 h-1.5 rounded-full appearance-none cursor-pointer bg-[linear-gradient(to_right,rgb(var(--ink))_var(--p),rgb(var(--line))_var(--p))] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:ring-1 [&::-webkit-slider-thumb]:ring-black/10 [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-125 focus:outline-none">
  <i class="fa-solid fa-volume-high text-sm text-ink-faint"></i>
  <span data-out class="w-7 text-right text-xs font-mono text-ink-soft">40</span>
</div>`,
      },
      {
        name: '數量步進器',
        en: 'Quantity Stepper',
        tags: ['數量', '購物'],
        spec: [
          '左右為 fa-minus 與 fa-plus 圓角按鈕，中間為等寬數字，整組包在一個圓角外框中。',
          '數值有最小值 1、最大值 10 的限制，按鈕 hover 時淺灰背景。',
          '另提供一個膠囊型變體：主色底白字，適合放在商品卡片。',
        ],
        html: `<div class="flex flex-col items-center gap-5">
  <div data-stepper data-min="1" data-max="10" class="inline-flex items-center h-10 rounded-[10px] border border-line bg-surface shadow-sm">
    <button type="button" onclick="UIK.step(this,-1)" aria-label="減少" class="w-10 h-full grid place-items-center text-ink-soft hover:bg-subtle rounded-l-[10px]"><i class="fa-solid fa-minus text-xs"></i></button>
    <span data-value class="w-10 text-center text-sm font-semibold tabular-nums text-ink border-x border-line leading-10">2</span>
    <button type="button" onclick="UIK.step(this,1)" aria-label="增加" class="w-10 h-full grid place-items-center text-ink-soft hover:bg-subtle rounded-r-[10px]"><i class="fa-solid fa-plus text-xs"></i></button>
  </div>
  <div data-stepper data-min="0" data-max="10" class="inline-flex items-center gap-1 h-10 p-1 rounded-full bg-brand-600 text-white shadow-md shadow-brand-600/30">
    <button type="button" onclick="UIK.step(this,-1)" aria-label="減少" class="w-8 h-8 rounded-full grid place-items-center hover:bg-white/15"><i class="fa-solid fa-minus text-xs"></i></button>
    <span data-value class="w-6 text-center text-sm font-semibold tabular-nums">1</span>
    <button type="button" onclick="UIK.step(this,1)" aria-label="增加" class="w-8 h-8 rounded-full grid place-items-center hover:bg-white/15"><i class="fa-solid fa-plus text-xs"></i></button>
  </div>
</div>`,
      },
      {
        name: '色票選擇器',
        en: 'Color Swatch Picker',
        tags: ['顏色', '商品'],
        spec: [
          '一排 32px 圓形色票，選取的色票外圍有 2px 間隔與 2px 同色外環（ring-offset）。',
          '上方顯示「顏色：午夜藍」文字，選取變更時同步更新名稱。',
          '每個色票為 radio 並附 aria-label，hover 時微微放大。',
        ],
        html: `<div>
  <p class="text-sm text-ink-soft">顏色：<span class="font-semibold text-ink" id="sw-name">午夜藍</span></p>
  <div class="mt-3 flex gap-3">
    <label class="cursor-pointer"><input type="radio" name="sw" checked class="peer sr-only" onchange="this.closest('div').previousElementSibling.lastElementChild.textContent='午夜藍'"><span class="block w-8 h-8 rounded-full bg-indigo-900 ring-2 ring-transparent ring-offset-2 ring-offset-canvas peer-checked:ring-indigo-900 hover:scale-110 transition"></span><span class="sr-only">午夜藍</span></label>
    <label class="cursor-pointer"><input type="radio" name="sw" class="peer sr-only" onchange="this.closest('div').previousElementSibling.lastElementChild.textContent='鼠尾草綠'"><span class="block w-8 h-8 rounded-full bg-emerald-600 ring-2 ring-transparent ring-offset-2 ring-offset-canvas peer-checked:ring-emerald-600 hover:scale-110 transition"></span><span class="sr-only">鼠尾草綠</span></label>
    <label class="cursor-pointer"><input type="radio" name="sw" class="peer sr-only" onchange="this.closest('div').previousElementSibling.lastElementChild.textContent='珊瑚橘'"><span class="block w-8 h-8 rounded-full bg-orange-400 ring-2 ring-transparent ring-offset-2 ring-offset-canvas peer-checked:ring-orange-400 hover:scale-110 transition"></span><span class="sr-only">珊瑚橘</span></label>
    <label class="cursor-pointer"><input type="radio" name="sw" class="peer sr-only" onchange="this.closest('div').previousElementSibling.lastElementChild.textContent='玫瑰粉'"><span class="block w-8 h-8 rounded-full bg-rose-300 ring-2 ring-transparent ring-offset-2 ring-offset-canvas peer-checked:ring-rose-300 hover:scale-110 transition"></span><span class="sr-only">玫瑰粉</span></label>
    <label class="cursor-pointer"><input type="radio" name="sw" class="peer sr-only" onchange="this.closest('div').previousElementSibling.lastElementChild.textContent='石墨灰'"><span class="block w-8 h-8 rounded-full bg-zinc-700 ring-2 ring-transparent ring-offset-2 ring-offset-canvas peer-checked:ring-zinc-700 hover:scale-110 transition"></span><span class="sr-only">石墨灰</span></label>
  </div>
</div>`,
      },
      {
        name: '尺寸選擇',
        en: 'Size Selector',
        tags: ['商品', '單選'],
        spec: [
          '五個 48×40 的圓角尺寸按鈕（XS–XL），選取時為深色實心、白字。',
          '缺貨的尺寸以灰色呈現並加上斜線刪除效果，且不可點選。',
          '上方左側為「尺寸」標題、右側為 fa-ruler「尺寸指南」連結。',
        ],
        html: `<div class="w-72">
  <div class="flex items-center justify-between mb-3"><span class="text-sm font-semibold text-ink">尺寸</span><a href="#" onclick="return false" class="text-xs text-ink-soft hover:text-ink"><i class="fa-solid fa-ruler mr-1"></i>尺寸指南</a></div>
  <div class="grid grid-cols-5 gap-2">
    <label class="cursor-pointer"><input type="radio" name="size" class="peer sr-only"><span class="h-10 rounded-[10px] border border-line grid place-items-center text-sm font-medium text-ink hover:border-ink-faint peer-checked:bg-ink peer-checked:text-canvas peer-checked:border-ink transition">XS</span></label>
    <label class="cursor-pointer"><input type="radio" name="size" class="peer sr-only"><span class="h-10 rounded-[10px] border border-line grid place-items-center text-sm font-medium text-ink hover:border-ink-faint peer-checked:bg-ink peer-checked:text-canvas peer-checked:border-ink transition">S</span></label>
    <label class="cursor-pointer"><input type="radio" name="size" checked class="peer sr-only"><span class="h-10 rounded-[10px] border border-line grid place-items-center text-sm font-medium text-ink hover:border-ink-faint peer-checked:bg-ink peer-checked:text-canvas peer-checked:border-ink transition">M</span></label>
    <label class="cursor-pointer"><input type="radio" name="size" class="peer sr-only"><span class="h-10 rounded-[10px] border border-line grid place-items-center text-sm font-medium text-ink hover:border-ink-faint peer-checked:bg-ink peer-checked:text-canvas peer-checked:border-ink transition">L</span></label>
    <label class="cursor-not-allowed"><input type="radio" name="size" disabled class="peer sr-only"><span class="relative h-10 rounded-[10px] border border-dashed border-line grid place-items-center text-sm text-ink-faint overflow-hidden bg-[linear-gradient(to_top_right,transparent_calc(50%-.5px),rgb(var(--line))_50%,transparent_calc(50%+.5px))]">XL</span></label>
  </div>
</div>`,
      },
      {
        name: '篩選膠囊',
        en: 'Filter Chips',
        tags: ['多選', '篩選'],
        spec: [
          '一排可多選的膠囊標籤，未選取時為白底細框，選取時為主色淡底、主色文字並在左側出現 fa-check。',
          '膠囊高度 32px、圓角全膠囊，點擊切換狀態並帶有 aria-pressed。',
          '最後一個為「清除」文字按鈕。',
        ],
        html: `<div class="flex flex-wrap items-center gap-2 max-w-sm">
  <button type="button" aria-pressed="true" onclick="UIK.flip(this)" data-on="bg-brand-500/10 border-brand-500/30 text-brand-700 dark:text-brand-300" data-off="bg-surface border-line text-ink-soft" class="group inline-flex items-center gap-1.5 h-8 px-3.5 rounded-full border text-[13px] font-medium bg-brand-500/10 border-brand-500/30 text-brand-700 dark:text-brand-300 transition"><i data-swap="hidden" class="fa-solid fa-check text-[10px]"></i>遠端工作</button>
  <button type="button" aria-pressed="false" onclick="UIK.flip(this)" data-on="bg-brand-500/10 border-brand-500/30 text-brand-700 dark:text-brand-300" data-off="bg-surface border-line text-ink-soft" class="group inline-flex items-center gap-1.5 h-8 px-3.5 rounded-full border text-[13px] font-medium bg-surface border-line text-ink-soft transition"><i data-swap="hidden" class="hidden fa-solid fa-check text-[10px]"></i>全職</button>
  <button type="button" aria-pressed="true" onclick="UIK.flip(this)" data-on="bg-brand-500/10 border-brand-500/30 text-brand-700 dark:text-brand-300" data-off="bg-surface border-line text-ink-soft" class="group inline-flex items-center gap-1.5 h-8 px-3.5 rounded-full border text-[13px] font-medium bg-brand-500/10 border-brand-500/30 text-brand-700 dark:text-brand-300 transition"><i data-swap="hidden" class="fa-solid fa-check text-[10px]"></i>設計</button>
  <button type="button" aria-pressed="false" onclick="UIK.flip(this)" data-on="bg-brand-500/10 border-brand-500/30 text-brand-700 dark:text-brand-300" data-off="bg-surface border-line text-ink-soft" class="group inline-flex items-center gap-1.5 h-8 px-3.5 rounded-full border text-[13px] font-medium bg-surface border-line text-ink-soft transition"><i data-swap="hidden" class="hidden fa-solid fa-check text-[10px]"></i>工程</button>
  <button type="button" aria-pressed="false" onclick="UIK.flip(this)" data-on="bg-brand-500/10 border-brand-500/30 text-brand-700 dark:text-brand-300" data-off="bg-surface border-line text-ink-soft" class="group inline-flex items-center gap-1.5 h-8 px-3.5 rounded-full border text-[13px] font-medium bg-surface border-line text-ink-soft transition"><i data-swap="hidden" class="hidden fa-solid fa-check text-[10px]"></i>年薪百萬以上</button>
  <button type="button" class="h-8 px-2 text-[13px] font-medium text-ink-faint hover:text-ink">清除</button>
</div>`,
      },
      {
        name: '讚與倒讚回饋',
        en: 'Thumbs Feedback',
        tags: ['回饋', 'AI 回答'],
        spec: [
          'AI 回答下方常見的回饋列：文字「這個回答有幫助嗎？」加上讚與倒讚兩個圖示按鈕。',
          '選取讚時按鈕為 emerald 淡底與實心圖示，選取倒讚時為 rose 淡底；兩者互斥。',
          '右側附複製與重新產生圖示按鈕，以分隔線區隔。',
        ],
        html: `<div class="flex items-center gap-1 h-10 pl-3.5 pr-1 rounded-full border border-line bg-surface shadow-sm">
  <span class="mr-2 text-xs text-ink-soft">這個回答有幫助嗎？</span>
  <div data-pick data-on="" data-off="" class="flex">
    <button type="button" data-item onclick="UIK.pick(this)" aria-label="有幫助" class="w-8 h-8 rounded-full grid place-items-center text-ink-faint hover:text-emerald-600 aria-selected:bg-emerald-500/10 aria-selected:text-emerald-600 transition"><i class="fa-regular fa-thumbs-up"></i></button>
    <button type="button" data-item onclick="UIK.pick(this)" aria-label="沒幫助" class="w-8 h-8 rounded-full grid place-items-center text-ink-faint hover:text-rose-600 aria-selected:bg-rose-500/10 aria-selected:text-rose-600 transition"><i class="fa-regular fa-thumbs-down"></i></button>
  </div>
  <span class="w-px h-4 mx-1 bg-line"></span>
  <button type="button" onclick="UIK.copy(this,'回答內容')" aria-label="複製" class="w-8 h-8 rounded-full grid place-items-center text-ink-faint hover:text-ink hover:bg-subtle"><i class="fa-regular fa-copy"></i></button>
  <button type="button" aria-label="重新產生" class="w-8 h-8 rounded-full grid place-items-center text-ink-faint hover:text-ink hover:bg-subtle"><i class="fa-solid fa-rotate-right"></i></button>
</div>`,
      },
      {
        name: '預約時段選擇',
        en: 'Time Slot Picker',
        tags: ['預約', '網格'],
        spec: [
          '上方為日期列：左右箭頭與「11 月 12 日（週三）」；下方為 3 欄時段按鈕網格。',
          '可選時段為白底細框，選取時主色實心白字，已滿時段為淺灰並加上刪除線。',
          '時段按鈕高度 36px、圓角 8px，數字使用等寬字。',
        ],
        html: `<div class="w-80 p-4 rounded-2xl border border-line bg-surface shadow-soft">
  <div class="flex items-center justify-between">
    <button type="button" aria-label="前一天" class="w-8 h-8 rounded-lg grid place-items-center text-ink-faint hover:bg-subtle"><i class="fa-solid fa-chevron-left text-xs"></i></button>
    <span class="text-sm font-semibold text-ink">11 月 12 日（週三）</span>
    <button type="button" aria-label="後一天" class="w-8 h-8 rounded-lg grid place-items-center text-ink-faint hover:bg-subtle"><i class="fa-solid fa-chevron-right text-xs"></i></button>
  </div>
  <div data-pick data-on="bg-brand-600 border-brand-600 text-white" data-off="border-line text-ink" class="mt-4 grid grid-cols-3 gap-2 text-[13px] font-medium tabular-nums">
    <button type="button" data-item onclick="UIK.pick(this)" class="h-9 rounded-lg border border-line text-ink hover:border-brand-400 transition">09:00</button>
    <button type="button" disabled class="h-9 rounded-lg bg-subtle text-ink-faint line-through cursor-not-allowed">09:30</button>
    <button type="button" data-item onclick="UIK.pick(this)" class="h-9 rounded-lg border border-line text-ink hover:border-brand-400 transition">10:00</button>
    <button type="button" data-item aria-selected="true" onclick="UIK.pick(this)" class="h-9 rounded-lg border bg-brand-600 border-brand-600 text-white transition">10:30</button>
    <button type="button" data-item onclick="UIK.pick(this)" class="h-9 rounded-lg border border-line text-ink hover:border-brand-400 transition">13:00</button>
    <button type="button" disabled class="h-9 rounded-lg bg-subtle text-ink-faint line-through cursor-not-allowed">13:30</button>
    <button type="button" data-item onclick="UIK.pick(this)" class="h-9 rounded-lg border border-line text-ink hover:border-brand-400 transition">14:00</button>
    <button type="button" data-item onclick="UIK.pick(this)" class="h-9 rounded-lg border border-line text-ink hover:border-brand-400 transition">15:30</button>
    <button type="button" data-item onclick="UIK.pick(this)" class="h-9 rounded-lg border border-line text-ink hover:border-brand-400 transition">16:00</button>
  </div>
</div>`,
      },
      {
        name: '檢視模式切換',
        en: 'View Switcher',
        tags: ['圖示', '工具列'],
        spec: [
          '兩個相連的圖示按鈕：格狀檢視 fa-grip 與列表檢視 fa-list，外框共用圓角 10px。',
          '選取的按鈕為白底並有陰影，未選取為透明灰色圖示；容器為淺灰底。',
          '旁邊搭配一個「排序：最新」的文字下拉按鈕，組成完整的列表工具列。',
        ],
        html: `<div class="flex items-center gap-2">
  <button type="button" class="h-9 px-3 rounded-[10px] border border-line bg-surface text-[13px] text-ink-soft hover:text-ink flex items-center gap-2 shadow-sm"><i class="fa-solid fa-arrow-down-wide-short text-xs"></i>排序：最新<i class="fa-solid fa-chevron-down text-[9px] text-ink-faint"></i></button>
  <div data-pick data-on="bg-surface text-ink shadow-sm" data-off="text-ink-faint" class="inline-flex p-0.5 rounded-[10px] bg-subtle border border-line">
    <button type="button" data-item aria-selected="true" onclick="UIK.pick(this)" aria-label="格狀檢視" class="w-8 h-8 rounded-lg grid place-items-center bg-surface text-ink shadow-sm transition"><i class="fa-solid fa-grip text-sm"></i></button>
    <button type="button" data-item onclick="UIK.pick(this)" aria-label="列表檢視" class="w-8 h-8 rounded-lg grid place-items-center text-ink-faint transition"><i class="fa-solid fa-list text-sm"></i></button>
  </div>
</div>`,
      },
      {
        name: '同意條款核取',
        en: 'Consent Checkbox',
        tags: ['條款', '表單'],
        spec: [
          '帶邊框的同意區塊，左側為自訂核取方塊，右側為說明文字並包含「服務條款」與「隱私權政策」連結。',
          '勾選後整個區塊邊框轉為主色、背景淡主色；下方的「建立帳號」按鈕由停用變為可點擊。',
          '使用 has-[:checked] 與 peer 控制按鈕狀態，不需 JavaScript。',
        ],
        html: `<div class="group/c w-80">
  <label class="group flex gap-3 p-3.5 rounded-xl border border-line bg-surface cursor-pointer has-[:checked]:border-brand-500/50 has-[:checked]:bg-brand-500/[.04] transition">
    <span class="relative mt-0.5 grid place-items-center shrink-0"><input type="checkbox" id="consent" class="peer appearance-none w-[18px] h-[18px] rounded-[5px] border-[1.5px] border-line bg-surface checked:bg-brand-600 checked:border-brand-600 transition"><i class="fa-solid fa-check absolute text-[10px] text-white scale-0 peer-checked:scale-100 transition-transform pointer-events-none"></i></span>
    <span class="text-[13px] leading-relaxed text-ink-soft">我已閱讀並同意 <a href="#" onclick="return false" class="font-medium text-ink underline underline-offset-2">服務條款</a> 與 <a href="#" onclick="return false" class="font-medium text-ink underline underline-offset-2">隱私權政策</a>，並同意接收產品更新資訊。</span>
  </label>
  <div class="mt-3">
    <button type="button" class="w-full h-10 rounded-[10px] bg-ink text-canvas text-sm font-medium opacity-40 pointer-events-none transition group-has-[:checked]/c:opacity-100 group-has-[:checked]/c:pointer-events-auto">建立帳號</button>
  </div>
</div>`,
      },
      {
        name: '文字標示開關',
        en: 'Labeled Switch',
        tags: ['開關', '文字'],
        spec: [
          '寬 72px 的開關，軌道內顯示文字：關閉時右側顯示灰色「OFF」，開啟時左側顯示白色「ON」，軌道轉為 emerald。',
          '白色滑塊 28px，切換時滑動 300ms，文字同步淡入淡出。',
          '旁邊附「自動備份」標題與說明。',
        ],
        html: `<label class="flex items-center gap-4 cursor-pointer">
    <span class="relative inline-flex">
      <input type="checkbox" checked class="peer sr-only">
      <span class="w-[72px] h-9 rounded-full bg-line peer-checked:bg-emerald-500 transition-colors duration-300"></span>
      <span class="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-ink-faint peer-checked:opacity-0 transition-opacity">OFF</span>
      <span class="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-white opacity-0 peer-checked:opacity-100 transition-opacity">ON</span>
      <span class="absolute left-1 top-1 w-7 h-7 rounded-full bg-white shadow-md transition-transform duration-300 peer-checked:translate-x-9"></span>
    </span>
    <span><span class="block text-sm font-semibold text-ink">自動備份</span><span class="block text-xs text-ink-faint">每天凌晨 3 點備份所有檔案</span></span>
  </label>`,
      },
      {
        name: '刻度步進滑桿',
        en: 'Stepped Slider',
        tags: ['滑桿', '刻度'],
        spec: [
          '具有 5 個固定刻度（step=25）的滑桿，軌道下方對齊顯示刻度點與標籤（很少、少、適中、多、很多）。',
          '已選取段為主色，目前刻度的標籤為主色粗體。',
          '上方標題「每週通知量」與右側目前選取的文字。',
        ],
        html: `<div class="w-80" data-range data-labels="很少,少,適中,多,很多" style="--p:50%">
    <div class="flex justify-between mb-3 text-sm"><span class="font-medium text-ink">每週通知量</span><span class="font-semibold text-brand-600 dark:text-brand-400" data-out>適中</span></div>
    <input type="range" min="0" max="100" step="25" value="50" oninput="UIK.range(this)" aria-label="每週通知量" style="--p:50%" class="w-full h-2 rounded-full appearance-none cursor-pointer bg-[linear-gradient(to_right,#4f46e5_var(--p),rgb(var(--line))_var(--p))] focus:outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-brand-600 [&::-webkit-slider-thumb]:shadow-md">
    <div class="mt-2 flex justify-between px-1.5"><span class="w-1 h-1 rounded-full bg-ink-faint"></span><span class="w-1 h-1 rounded-full bg-ink-faint"></span><span class="w-1 h-1 rounded-full bg-ink-faint"></span><span class="w-1 h-1 rounded-full bg-ink-faint"></span><span class="w-1 h-1 rounded-full bg-ink-faint"></span></div>
    <div class="mt-1 flex justify-between text-[11px] text-ink-faint"><span>很少</span><span>少</span><span>適中</span><span>多</span><span>很多</span></div>
  </div>`,
      },
      {
        name: '圖片單選卡',
        en: 'Image Radio Picker',
        tags: ['單選', '主題'],
        spec: [
          '三張 4:3 的視覺選項卡（以漸層示意不同封面風格），選取時外圍出現 2px 主色外框與 2px 間隔，右上角顯示主色圓形 fa-check。',
          '卡片下方為風格名稱；未選取的卡片 hover 時微微放大。',
          '使用原生 radio 與 peer-checked 實作。',
        ],
        html: `<div class="grid grid-cols-3 gap-3 w-[400px] max-w-full text-center text-xs font-medium">
    <label class="cursor-pointer"><input type="radio" name="cover" checked class="peer sr-only"><span class="relative block aspect-[4/3] rounded-xl bg-gradient-to-br from-sky-300 to-indigo-500 ring-2 ring-transparent ring-offset-2 ring-offset-canvas peer-checked:ring-brand-600 hover:scale-[1.03] transition"><span class="absolute right-1.5 top-1.5 w-5 h-5 rounded-full bg-brand-600 text-white grid place-items-center text-[9px] opacity-0 [input:checked+span_&]:opacity-100"><i class="fa-solid fa-check"></i></span></span><span class="block mt-2 text-ink">海洋</span></label>
    <label class="cursor-pointer"><input type="radio" name="cover" class="peer sr-only"><span class="relative block aspect-[4/3] rounded-xl bg-gradient-to-br from-amber-200 to-rose-500 ring-2 ring-transparent ring-offset-2 ring-offset-canvas peer-checked:ring-brand-600 hover:scale-[1.03] transition"><span class="absolute right-1.5 top-1.5 w-5 h-5 rounded-full bg-brand-600 text-white grid place-items-center text-[9px] opacity-0 [input:checked+span_&]:opacity-100"><i class="fa-solid fa-check"></i></span></span><span class="block mt-2 text-ink">夕陽</span></label>
    <label class="cursor-pointer"><input type="radio" name="cover" class="peer sr-only"><span class="relative block aspect-[4/3] rounded-xl bg-gradient-to-br from-emerald-200 to-teal-600 ring-2 ring-transparent ring-offset-2 ring-offset-canvas peer-checked:ring-brand-600 hover:scale-[1.03] transition"><span class="absolute right-1.5 top-1.5 w-5 h-5 rounded-full bg-brand-600 text-white grid place-items-center text-[9px] opacity-0 [input:checked+span_&]:opacity-100"><i class="fa-solid fa-check"></i></span></span><span class="block mt-2 text-ink">森林</span></label>
  </div>`,
      },
      {
        name: '三態全選核取',
        en: 'Tri-state Select All',
        tags: ['核取', '全選'],
        spec: [
          '頂部「全選」核取方塊會依子項目狀態呈現三種狀態：全選（勾選）、部分選取（indeterminate 橫線）、未選。',
          '勾選全選時所有子項目一併勾選；子項目變更時即時更新全選狀態與「已選 N 項」計數。',
          '子項目以 24px 縮排，列表包在圓角卡片中並以分隔線隔開全選列。',
        ],
        html: `<div data-tri class="w-72 rounded-xl border border-line bg-surface shadow-sm text-sm">
    <label class="flex items-center gap-3 px-4 h-11 border-b border-line cursor-pointer"><input type="checkbox" data-tri-all onchange="UIK.tri(this)" class="w-4 h-4 accent-brand-600"><span class="flex-1 font-semibold text-ink">所有權限</span><span class="text-xs text-ink-faint">已選 <span data-out>2</span> 項</span></label>
    <div class="p-2">
      <label class="flex items-center gap-3 pl-8 pr-2 h-9 rounded-lg hover:bg-subtle cursor-pointer"><input type="checkbox" data-tri-item checked onchange="UIK.tri(this)" class="w-4 h-4 accent-brand-600"><span class="text-ink">檢視專案</span></label>
      <label class="flex items-center gap-3 pl-8 pr-2 h-9 rounded-lg hover:bg-subtle cursor-pointer"><input type="checkbox" data-tri-item checked onchange="UIK.tri(this)" class="w-4 h-4 accent-brand-600"><span class="text-ink">編輯內容</span></label>
      <label class="flex items-center gap-3 pl-8 pr-2 h-9 rounded-lg hover:bg-subtle cursor-pointer"><input type="checkbox" data-tri-item onchange="UIK.tri(this)" class="w-4 h-4 accent-brand-600"><span class="text-ink">管理成員</span></label>
      <label class="flex items-center gap-3 pl-8 pr-2 h-9 rounded-lg hover:bg-subtle cursor-pointer"><input type="checkbox" data-tri-item onchange="UIK.tri(this)" class="w-4 h-4 accent-brand-600"><span class="text-ink">刪除專案</span></label>
    </div>
  </div>`,
      },
      {
        name: '付款方式選擇',
        en: 'Payment Method Selector',
        tags: ['結帳', '單選'],
        spec: [
          '垂直排列的付款方式單選列，每列左側為品牌圖示（fa-cc-visa、fa-paypal、fa-apple-pay、fa-building-columns 銀行轉帳），中間為名稱與說明。',
          '選取列為主色邊框與淡主色底，右側為單選圓鈕。',
          '信用卡選項附「末四碼 4242 · 08/29」說明。',
        ],
        html: `<fieldset class="w-[380px] max-w-full space-y-2">
    <legend class="mb-2.5 text-sm font-semibold text-ink">付款方式</legend>
    <label class="flex items-center gap-3.5 p-3.5 rounded-xl border border-line bg-surface cursor-pointer has-[:checked]:border-brand-500 has-[:checked]:bg-brand-500/[.04] has-[:checked]:ring-1 has-[:checked]:ring-brand-500 transition"><span class="w-10 h-7 rounded-md border border-line bg-surface grid place-items-center text-lg text-[#1a1f71] dark:text-sky-300"><i class="fa-brands fa-cc-visa"></i></span><span class="flex-1"><span class="block text-sm font-medium text-ink">Visa 信用卡</span><span class="block text-xs text-ink-faint">末四碼 4242 · 08/29</span></span><input type="radio" name="pay" checked class="appearance-none w-[18px] h-[18px] rounded-full border-[1.5px] border-line checked:border-brand-600 checked:border-[5px] transition-all"></label>
    <label class="flex items-center gap-3.5 p-3.5 rounded-xl border border-line bg-surface cursor-pointer has-[:checked]:border-brand-500 has-[:checked]:bg-brand-500/[.04] has-[:checked]:ring-1 has-[:checked]:ring-brand-500 transition"><span class="w-10 h-7 rounded-md border border-line bg-surface grid place-items-center text-base text-[#003087] dark:text-sky-300"><i class="fa-brands fa-paypal"></i></span><span class="flex-1 text-sm font-medium text-ink">PayPal</span><input type="radio" name="pay" class="appearance-none w-[18px] h-[18px] rounded-full border-[1.5px] border-line checked:border-brand-600 checked:border-[5px] transition-all"></label>
    <label class="flex items-center gap-3.5 p-3.5 rounded-xl border border-line bg-surface cursor-pointer has-[:checked]:border-brand-500 has-[:checked]:bg-brand-500/[.04] has-[:checked]:ring-1 has-[:checked]:ring-brand-500 transition"><span class="w-10 h-7 rounded-md border border-line bg-surface grid place-items-center text-xl text-ink"><i class="fa-brands fa-apple-pay"></i></span><span class="flex-1 text-sm font-medium text-ink">Apple Pay</span><input type="radio" name="pay" class="appearance-none w-[18px] h-[18px] rounded-full border-[1.5px] border-line checked:border-brand-600 checked:border-[5px] transition-all"></label>
    <label class="flex items-center gap-3.5 p-3.5 rounded-xl border border-line bg-surface cursor-pointer has-[:checked]:border-brand-500 has-[:checked]:bg-brand-500/[.04] has-[:checked]:ring-1 has-[:checked]:ring-brand-500 transition"><span class="w-10 h-7 rounded-md border border-line bg-surface grid place-items-center text-sm text-ink-soft"><i class="fa-solid fa-building-columns"></i></span><span class="flex-1"><span class="block text-sm font-medium text-ink">銀行轉帳</span><span class="block text-xs text-ink-faint">1–2 個工作天入帳</span></span><input type="radio" name="pay" class="appearance-none w-[18px] h-[18px] rounded-full border-[1.5px] border-line checked:border-brand-600 checked:border-[5px] transition-all"></label>
  </fieldset>`,
      },
    ],
  });
})();
