(window.UI_ATLAS = window.UI_ATLAS || []).push({
  id: 'overlays',
  name: '對話框與浮層',
  en: 'Dialogs & Overlays',
  icon: 'fa-regular fa-window-restore',
  desc: '確認對話框、表單彈窗、指令面板、抽屜、底部彈出、付費牆與精靈步驟，所有「疊在頁面上方」的介面。預覽以內嵌方式呈現，實作時請搭配遮罩與焦點鎖定。',
  items: [
    {
      name: '危險操作確認框',
      en: 'Destructive Confirm Dialog',
      tags: ['Modal', '刪除'],
      spec: [
        '寬 400px 的對話框，左上為 rose 淡底圓形中的 fa-triangle-exclamation 圖示。',
        '標題「刪除這個專案？」與說明文字，說明中以粗體標示專案名稱。',
        '底部右對齊「取消」（外框）與「刪除專案」（rose 實心）按鈕；對話框使用 role="alertdialog"、Esc 關閉、焦點鎖定。',
      ],
      html: `<div role="alertdialog" aria-modal="true" aria-labelledby="dlg-del-t" class="w-[400px] max-w-full p-6 rounded-2xl border border-line bg-surface shadow-lift">
  <div class="flex gap-4">
    <span class="w-10 h-10 shrink-0 rounded-full bg-rose-500/10 text-rose-600 grid place-items-center"><i class="fa-solid fa-triangle-exclamation"></i></span>
    <div>
      <h4 id="dlg-del-t" class="font-semibold text-ink">刪除這個專案？</h4>
      <p class="mt-1.5 text-sm text-ink-soft leading-relaxed">「<span class="font-semibold text-ink">官網改版 2026</span>」及其中 48 個檔案將永久刪除，此操作無法復原。</p>
    </div>
  </div>
  <div class="mt-6 flex justify-end gap-2">
    <button type="button" class="h-9 px-4 rounded-[10px] border border-line text-sm font-medium text-ink hover:bg-subtle">取消</button>
    <button type="button" class="h-9 px-4 rounded-[10px] bg-rose-600 text-white text-sm font-medium hover:bg-rose-500">刪除專案</button>
  </div>
</div>`,
    },
    {
      name: '邀請成員表單框',
      en: 'Form Modal',
      tags: ['Modal', '表單'],
      spec: [
        '對話框頂部為標題「邀請成員」與右上角關閉按鈕，標題下方有分隔線。',
        '內容為電子郵件輸入（附 fa-envelope 圖示）與角色下拉，兩者並排；下方為「複製邀請連結」區塊。',
        '底部灰底操作列：左側 fa-circle-info 說明文字，右側「取消」與「送出邀請」按鈕。',
      ],
      html: `<div role="dialog" aria-modal="true" class="w-[460px] max-w-full rounded-2xl border border-line bg-surface shadow-lift overflow-hidden">
  <div class="flex items-center justify-between px-5 h-14 border-b border-line"><h4 class="font-semibold text-ink">邀請成員</h4><button type="button" aria-label="關閉" class="w-8 h-8 rounded-lg grid place-items-center text-ink-faint hover:bg-subtle"><i class="fa-solid fa-xmark"></i></button></div>
  <div class="p-5 space-y-4">
    <div class="flex gap-2">
      <label class="relative flex-1"><i class="fa-regular fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-xs text-ink-faint"></i><input type="email" placeholder="name@company.com" class="w-full h-10 pl-8 pr-3 rounded-[10px] border border-line bg-surface text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"></label>
      <select class="h-10 px-3 rounded-[10px] border border-line bg-surface text-sm text-ink focus:outline-none"><option>編輯者</option><option>檢視者</option></select>
    </div>
    <div class="flex items-center gap-3 p-3 rounded-xl bg-subtle text-sm"><i class="fa-solid fa-link text-ink-faint"></i><span class="flex-1 truncate font-mono text-xs text-ink-soft">atlas.app/invite/8f2k-x9q1</span><button type="button" onclick="UIK.copy(this,'atlas.app/invite/8f2k-x9q1')" class="h-7 px-2.5 rounded-md bg-surface border border-line text-xs font-medium text-ink"><i class="fa-regular fa-copy mr-1"></i>複製</button></div>
  </div>
  <div class="flex items-center gap-3 px-5 py-3.5 bg-subtle/60 border-t border-line">
    <p class="flex-1 text-xs text-ink-faint"><i class="fa-solid fa-circle-info mr-1"></i>邀請連結 7 天內有效</p>
    <button type="button" class="h-9 px-3.5 rounded-[10px] text-sm font-medium text-ink-soft hover:bg-subtle">取消</button>
    <button type="button" class="h-9 px-4 rounded-[10px] bg-ink text-canvas text-sm font-medium hover:opacity-85">送出邀請</button>
  </div>
</div>`,
    },
    {
      name: '成功完成對話框',
      en: 'Success Dialog',
      tags: ['Modal', '慶祝'],
      spec: [
        '置中排版的對話框，頂部為 emerald 漸層圓形中的 fa-check 大圖示，周圍點綴小型 fa-star 與 fa-circle 裝飾。',
        '標題「升級成功」與說明，下方以淺灰區塊列出新解鎖的三項功能。',
        '底部全寬深色按鈕「開始使用」。',
      ],
      html: `<div role="dialog" aria-modal="true" class="relative w-[360px] max-w-full p-6 pt-8 rounded-3xl border border-line bg-surface shadow-lift text-center">
  <i class="fa-solid fa-star absolute left-20 top-8 text-[10px] text-amber-400"></i><i class="fa-solid fa-circle absolute right-24 top-6 text-[6px] text-brand-400"></i><i class="fa-solid fa-star absolute right-20 top-16 text-xs text-pink-400"></i>
  <span class="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 text-white grid place-items-center text-2xl shadow-lg shadow-emerald-500/30"><i class="fa-solid fa-check"></i></span>
  <h4 class="mt-5 text-lg font-semibold text-ink">升級成功</h4>
  <p class="mt-1 text-sm text-ink-soft">歡迎加入專業版，以下功能已為你解鎖：</p>
  <ul class="mt-4 p-3 rounded-xl bg-subtle text-left text-sm space-y-2">
    <li class="flex items-center gap-2.5 text-ink"><i class="fa-solid fa-infinity w-4 text-xs text-brand-500"></i>無限專案數量</li>
    <li class="flex items-center gap-2.5 text-ink"><i class="fa-solid fa-chart-line w-4 text-xs text-brand-500"></i>進階分析報表</li>
    <li class="flex items-center gap-2.5 text-ink"><i class="fa-solid fa-headset w-4 text-xs text-brand-500"></i>優先客服支援</li>
  </ul>
  <button type="button" class="mt-5 w-full h-10 rounded-xl bg-ink text-canvas text-sm font-medium hover:opacity-85">開始使用</button>
</div>`,
    },
    {
      name: '指令面板',
      en: 'Command Palette',
      tags: ['Ctrl K', '搜尋'],
      spec: [
        '寬 520px 的指令面板，頂部為大型搜尋輸入（無邊框、16px 字）與 Esc 鍵帽。',
        '結果依群組（建議、操作）分類，每項有圖示、文字與右側快捷鍵；目前選取項為淺灰底並左側帶主色指示條。',
        '底部說明列顯示 fa-arrow-up / fa-arrow-down 導覽、Enter 選取的提示。',
      ],
      html: `<div role="dialog" aria-modal="true" class="w-[520px] max-w-full rounded-2xl border border-line bg-surface shadow-lift overflow-hidden">
  <label class="flex items-center gap-3 px-4 h-14 border-b border-line"><i class="fa-solid fa-magnifying-glass text-ink-faint"></i><input type="text" placeholder="輸入指令或搜尋…" class="flex-1 bg-transparent text-base text-ink placeholder:text-ink-faint focus:outline-none"><kbd class="h-5 px-1.5 rounded border border-line text-[10px] text-ink-faint font-sans grid place-items-center">Esc</kbd></label>
  <div class="p-2 text-sm">
    <p class="px-2.5 pt-1.5 pb-1 text-[11px] font-semibold text-ink-faint">建議</p>
    <div class="relative flex items-center gap-3 h-10 px-2.5 rounded-lg bg-subtle text-ink before:absolute before:left-0 before:top-2 before:bottom-2 before:w-0.5 before:rounded before:bg-brand-600"><i class="fa-solid fa-plus w-4 text-xs text-ink-faint"></i>建立新文件<kbd class="ml-auto text-[11px] text-ink-faint font-sans">Ctrl N</kbd></div>
    <div class="flex items-center gap-3 h-10 px-2.5 rounded-lg text-ink hover:bg-subtle"><i class="fa-regular fa-folder w-4 text-xs text-ink-faint"></i>前往專案…<kbd class="ml-auto text-[11px] text-ink-faint font-sans">G P</kbd></div>
    <p class="px-2.5 pt-3 pb-1 text-[11px] font-semibold text-ink-faint">操作</p>
    <div class="flex items-center gap-3 h-10 px-2.5 rounded-lg text-ink hover:bg-subtle"><i class="fa-regular fa-moon w-4 text-xs text-ink-faint"></i>切換深色模式</div>
    <div class="flex items-center gap-3 h-10 px-2.5 rounded-lg text-ink hover:bg-subtle"><i class="fa-solid fa-user-plus w-4 text-xs text-ink-faint"></i>邀請成員</div>
  </div>
  <div class="flex items-center gap-4 px-4 h-10 border-t border-line bg-subtle/50 text-[11px] text-ink-faint">
    <span class="flex items-center gap-1"><kbd class="w-4 h-4 rounded border border-line bg-surface grid place-items-center"><i class="fa-solid fa-arrow-up text-[8px]"></i></kbd><kbd class="w-4 h-4 rounded border border-line bg-surface grid place-items-center"><i class="fa-solid fa-arrow-down text-[8px]"></i></kbd>導覽</span>
    <span class="flex items-center gap-1"><kbd class="h-4 px-1 rounded border border-line bg-surface font-sans grid place-items-center">Enter</kbd>選取</span>
  </div>
</div>`,
    },
    {
      name: '右側抽屜',
      en: 'Side Drawer',
      tags: ['Drawer', '詳細資訊'],
      wide: true,
      spec: [
        '模擬視窗中從右側滑出的抽屜，寬 320px，左側頁面內容被半透明黑色遮罩覆蓋並模糊。',
        '抽屜頂部為標題與關閉按鈕，中間為訂單詳情（欄位標籤 + 數值的兩欄排列），底部固定操作列。',
        '抽屜帶有左側陰影，進場時由右側滑入。',
      ],
      html: `<div class="relative w-full max-w-3xl h-80 rounded-2xl border border-line bg-surface overflow-hidden">
  <div class="p-5 space-y-3"><div class="h-4 w-40 rounded bg-subtle"></div><div class="h-3 w-full rounded bg-subtle"></div><div class="h-3 w-5/6 rounded bg-subtle"></div><div class="h-24 w-full rounded-xl bg-subtle"></div></div>
  <div class="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
  <aside class="absolute right-0 top-0 bottom-0 w-80 max-w-[85%] bg-surface border-l border-line shadow-[-16px_0_40px_-12px_rgb(0_0_0/.25)] flex flex-col">
    <div class="flex items-center justify-between px-5 h-14 border-b border-line"><h4 class="font-semibold text-ink">訂單 #20491</h4><button type="button" aria-label="關閉" class="w-8 h-8 rounded-lg grid place-items-center text-ink-faint hover:bg-subtle"><i class="fa-solid fa-xmark"></i></button></div>
    <dl class="flex-1 p-5 grid grid-cols-[80px_1fr] gap-y-3 text-sm">
      <dt class="text-ink-faint">狀態</dt><dd><span class="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-medium">已付款</span></dd>
      <dt class="text-ink-faint">客戶</dt><dd class="text-ink">陳怡君</dd>
      <dt class="text-ink-faint">金額</dt><dd class="font-semibold text-ink">$3,480</dd>
      <dt class="text-ink-faint">付款</dt><dd class="text-ink"><i class="fa-brands fa-cc-visa mr-1"></i>•••• 4242</dd>
    </dl>
    <div class="p-4 border-t border-line flex gap-2"><button type="button" class="flex-1 h-9 rounded-[10px] border border-line text-sm font-medium text-ink">退款</button><button type="button" class="flex-1 h-9 rounded-[10px] bg-ink text-canvas text-sm font-medium">列印收據</button></div>
  </aside>
</div>`,
    },
    {
      name: '底部彈出面板',
      en: 'Bottom Sheet',
      tags: ['行動版', 'Sheet'],
      spec: [
        '手機外框內從底部彈出的面板，頂部中央有 36×4px 灰色拖曳把手，上方背景被遮罩覆蓋。',
        '面板標題「分享到」，下方為 4 欄圓形社群圖示（fa-brands line、facebook、instagram、x-twitter）與名稱。',
        '最下方為「複製連結」與「取消」兩列操作；面板頂部圓角 24px。',
      ],
      html: `<div class="relative w-[280px] h-[440px] rounded-[32px] border-[6px] border-zinc-900 dark:border-zinc-700 bg-subtle overflow-hidden">
  <div class="p-5 space-y-3"><div class="h-32 rounded-2xl bg-gradient-to-br from-orange-200 to-rose-300 dark:from-orange-500/30 dark:to-rose-500/30"></div><div class="h-3 w-3/4 rounded bg-line"></div><div class="h-3 w-1/2 rounded bg-line"></div></div>
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="absolute inset-x-0 bottom-0 px-5 pt-2.5 pb-5 rounded-t-3xl bg-surface">
    <span class="block mx-auto w-9 h-1 rounded-full bg-line"></span>
    <p class="mt-4 text-center font-semibold text-ink">分享到</p>
    <div class="mt-4 grid grid-cols-4 gap-2 text-center text-[10px] text-ink-soft">
      <span><span class="mx-auto w-11 h-11 rounded-full bg-[#06C755] text-white grid place-items-center text-lg"><i class="fa-brands fa-line"></i></span><span class="block mt-1.5">LINE</span></span>
      <span><span class="mx-auto w-11 h-11 rounded-full bg-[#1877F2] text-white grid place-items-center text-lg"><i class="fa-brands fa-facebook-f"></i></span><span class="block mt-1.5">Facebook</span></span>
      <span><span class="mx-auto w-11 h-11 rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 text-white grid place-items-center text-lg"><i class="fa-brands fa-instagram"></i></span><span class="block mt-1.5">Instagram</span></span>
      <span><span class="mx-auto w-11 h-11 rounded-full bg-black text-white grid place-items-center text-lg"><i class="fa-brands fa-x-twitter"></i></span><span class="block mt-1.5">X</span></span>
    </div>
    <button type="button" class="mt-5 w-full h-11 rounded-xl bg-subtle text-sm font-medium text-ink"><i class="fa-solid fa-link mr-2 text-xs"></i>複製連結</button>
  </div>
</div>`,
    },
    {
      name: '氣泡浮層',
      en: 'Popover',
      tags: ['Popover', '箭頭'],
      spec: [
        '點擊「設定提醒」按鈕後，在按鈕下方出現帶有向上箭頭的浮層卡片。',
        '浮層內有標題、時間選擇的三個快捷膠囊（30 分鐘、1 小時、明天），以及自訂時間連結。',
        '浮層寬 260px，使用 UIK.menu 開關，點擊外部自動關閉。',
      ],
      html: `<div class="relative h-56 flex flex-col items-center">
  <button type="button" onclick="UIK.menu(this)" class="h-9 px-3.5 rounded-[10px] border border-line bg-surface text-sm font-medium text-ink shadow-sm hover:bg-subtle"><i class="fa-regular fa-clock mr-1.5 text-xs"></i>設定提醒</button>
  <div data-menu class="absolute top-12 z-10 w-[260px] p-4 rounded-xl border border-line bg-surface shadow-lift animate-fade-up before:absolute before:-top-[6px] before:left-1/2 before:-translate-x-1/2 before:w-2.5 before:h-2.5 before:rotate-45 before:bg-surface before:border-l before:border-t before:border-line">
    <p class="text-sm font-semibold text-ink">什麼時候提醒你？</p>
    <div data-pick data-on="bg-ink text-canvas border-ink" data-off="border-line text-ink-soft" class="mt-3 flex flex-wrap gap-1.5 text-xs font-medium">
      <button type="button" data-item onclick="UIK.pick(this)" class="h-7 px-2.5 rounded-full border border-line text-ink-soft">30 分鐘</button>
      <button type="button" data-item aria-selected="true" onclick="UIK.pick(this)" class="h-7 px-2.5 rounded-full border bg-ink text-canvas border-ink">1 小時</button>
      <button type="button" data-item onclick="UIK.pick(this)" class="h-7 px-2.5 rounded-full border border-line text-ink-soft">明天早上</button>
    </div>
    <button type="button" class="mt-3 text-xs font-medium text-brand-600 dark:text-brand-400 hover:underline"><i class="fa-regular fa-calendar mr-1"></i>自訂時間</button>
  </div>
</div>`,
    },
    {
      name: '圖片燈箱',
      en: 'Lightbox Viewer',
      tags: ['燈箱', '圖片'],
      wide: true,
      spec: [
        '深色全螢幕燈箱（zinc-950 95%），頂部列顯示「3 / 12」、檔名，以及縮放、下載、關閉圖示按鈕。',
        '中間為主圖（以漸層區塊示意），左右兩側為圓形半透明的上一張 / 下一張按鈕。',
        '底部為縮圖列，目前縮圖有白色外框，其餘半透明。',
      ],
      html: `<div class="w-full max-w-3xl rounded-2xl bg-zinc-950 text-white overflow-hidden">
  <div class="flex items-center gap-3 px-4 h-12 text-sm"><span class="font-mono text-xs text-zinc-400">3 / 12</span><span class="truncate">sunset-beach.jpg</span>
    <div class="ml-auto flex gap-1 text-zinc-400"><button type="button" aria-label="放大" class="w-8 h-8 rounded-lg hover:bg-white/10 hover:text-white"><i class="fa-solid fa-magnifying-glass-plus"></i></button><button type="button" aria-label="下載" class="w-8 h-8 rounded-lg hover:bg-white/10 hover:text-white"><i class="fa-solid fa-download"></i></button><button type="button" aria-label="關閉" class="w-8 h-8 rounded-lg hover:bg-white/10 hover:text-white"><i class="fa-solid fa-xmark"></i></button></div>
  </div>
  <div class="relative px-16 py-2">
    <div class="aspect-[16/8] rounded-lg bg-gradient-to-br from-orange-400 via-rose-500 to-indigo-700 grid place-items-center"><i class="fa-solid fa-sun text-5xl text-amber-200/80"></i></div>
    <button type="button" aria-label="上一張" class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur hover:bg-white/20"><i class="fa-solid fa-chevron-left"></i></button>
    <button type="button" aria-label="下一張" class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur hover:bg-white/20"><i class="fa-solid fa-chevron-right"></i></button>
  </div>
  <div class="flex justify-center gap-2 p-4">
    <span class="w-14 h-9 rounded-md bg-gradient-to-br from-sky-400 to-indigo-600 opacity-50"></span><span class="w-14 h-9 rounded-md bg-gradient-to-br from-emerald-400 to-teal-700 opacity-50"></span><span class="w-14 h-9 rounded-md bg-gradient-to-br from-orange-400 to-indigo-700 ring-2 ring-white"></span><span class="w-14 h-9 rounded-md bg-gradient-to-br from-pink-400 to-purple-700 opacity-50"></span><span class="w-14 h-9 rounded-md bg-gradient-to-br from-amber-300 to-red-600 opacity-50"></span>
  </div>
</div>`,
    },
    {
      name: '分享連結對話框',
      en: 'Share Dialog',
      tags: ['分享', '權限'],
      spec: [
        '對話框標題「分享『Q4 企劃』」，下方為一般存取權設定列：fa-globe 圖示、「知道連結的任何人」與權限下拉。',
        '中段為已共用成員列表（頭像、名稱、角色文字），底部為連結輸入框與「複製連結」按鈕。',
        '對話框寬 440px、圓角 18px。',
      ],
      html: `<div role="dialog" aria-modal="true" class="w-[440px] max-w-full p-5 rounded-[18px] border border-line bg-surface shadow-lift">
  <div class="flex items-center justify-between"><h4 class="font-semibold text-ink">分享「Q4 企劃」</h4><button type="button" aria-label="關閉" class="w-8 h-8 rounded-lg grid place-items-center text-ink-faint hover:bg-subtle"><i class="fa-solid fa-xmark"></i></button></div>
  <div class="mt-4 flex items-center gap-3 p-3 rounded-xl border border-line">
    <span class="w-9 h-9 rounded-full bg-emerald-500/10 text-emerald-600 grid place-items-center"><i class="fa-solid fa-globe text-sm"></i></span>
    <div class="flex-1"><p class="text-sm font-medium text-ink">知道連結的任何人</p><p class="text-xs text-ink-faint">不需登入即可檢視</p></div>
    <select class="h-8 px-2 rounded-lg border border-line bg-surface text-xs text-ink focus:outline-none"><option>可檢視</option><option>可留言</option></select>
  </div>
  <p class="mt-4 mb-2 text-xs font-semibold text-ink-faint">已共用成員</p>
  <div class="space-y-2.5 text-sm">
    <div class="flex items-center gap-3"><span class="w-8 h-8 rounded-full bg-indigo-500 text-white grid place-items-center text-xs">你</span><span class="flex-1 text-ink">你（擁有者）</span><span class="text-xs text-ink-faint">擁有者</span></div>
    <div class="flex items-center gap-3"><span class="w-8 h-8 rounded-full bg-pink-500 text-white grid place-items-center text-xs">簡</span><span class="flex-1 text-ink">簡嘉玲</span><span class="text-xs text-ink-faint">可編輯</span></div>
  </div>
  <div class="mt-5 flex gap-2">
    <input type="text" readonly value="https://atlas.app/d/q4-plan" class="flex-1 min-w-0 h-10 px-3 rounded-[10px] border border-line bg-subtle text-xs font-mono text-ink-soft focus:outline-none">
    <button type="button" onclick="UIK.copy(this,'https://atlas.app/d/q4-plan')" class="h-10 px-4 rounded-[10px] bg-ink text-canvas text-sm font-medium"><i class="fa-solid fa-link mr-1.5 text-xs"></i>複製連結</button>
  </div>
</div>`,
    },
    {
      name: '升級付費牆',
      en: 'Paywall Modal',
      tags: ['付費', '轉換'],
      spec: [
        '上半部為主色到 violet 的漸層頭部，中央為白色 15% 底的 fa-lock 圖示與標題「解鎖進階功能」。',
        '下半部白底，列出三項功能（每項有 emerald fa-circle-check），以及月繳價格與「升級至專業版」主要按鈕。',
        '底部附「暫時不要」文字按鈕；對話框圓角 24px。',
      ],
      html: `<div role="dialog" aria-modal="true" class="w-[360px] max-w-full rounded-3xl border border-line bg-surface shadow-lift overflow-hidden">
  <div class="relative px-6 pt-8 pb-6 bg-gradient-to-br from-brand-600 to-violet-600 text-white text-center overflow-hidden">
    <span class="absolute -left-10 -bottom-12 w-40 h-40 rounded-full bg-white/10"></span>
    <span class="relative mx-auto w-12 h-12 rounded-2xl bg-white/15 grid place-items-center text-lg"><i class="fa-solid fa-lock"></i></span>
    <h4 class="relative mt-4 text-lg font-semibold">解鎖進階功能</h4>
    <p class="relative mt-1 text-sm text-white/80">匯出高解析度檔案需要專業版</p>
  </div>
  <div class="p-6">
    <ul class="space-y-2.5 text-sm text-ink">
      <li class="flex items-center gap-2.5"><i class="fa-solid fa-circle-check text-emerald-500"></i>4K 與向量格式匯出</li>
      <li class="flex items-center gap-2.5"><i class="fa-solid fa-circle-check text-emerald-500"></i>移除浮水印</li>
      <li class="flex items-center gap-2.5"><i class="fa-solid fa-circle-check text-emerald-500"></i>100 GB 雲端空間</li>
    </ul>
    <button type="button" class="mt-6 w-full h-11 rounded-xl bg-brand-600 text-white text-sm font-semibold hover:bg-brand-500">升級至專業版 · $24 / 月</button>
    <button type="button" class="mt-2 w-full h-9 text-sm text-ink-faint hover:text-ink">暫時不要</button>
  </div>
</div>`,
    },
    {
      name: '多步驟精靈',
      en: 'Wizard Modal',
      tags: ['精靈', '步驟'],
      spec: [
        '對話框頂部為三段式進度條（已完成段為主色）與「步驟 2 / 3」文字。',
        '內容區為「選擇使用情境」，以兩欄卡片單選（個人使用 fa-user、團隊協作 fa-users）。',
        '底部左側「上一步」文字按鈕，右側「繼續」主要按鈕附 fa-arrow-right。',
      ],
      html: `<div role="dialog" aria-modal="true" class="w-[440px] max-w-full p-6 rounded-[20px] border border-line bg-surface shadow-lift">
  <div class="flex items-center gap-3"><div class="flex-1 grid grid-cols-3 gap-1.5"><span class="h-1 rounded-full bg-brand-600"></span><span class="h-1 rounded-full bg-brand-600"></span><span class="h-1 rounded-full bg-line"></span></div><span class="text-xs text-ink-faint">步驟 2 / 3</span></div>
  <h4 class="mt-5 text-lg font-semibold text-ink">你打算如何使用？</h4>
  <p class="mt-1 text-sm text-ink-soft">我們會依此推薦適合的範本與設定。</p>
  <div class="mt-5 grid grid-cols-2 gap-3">
    <label class="p-4 rounded-xl border border-line cursor-pointer has-[:checked]:border-brand-500 has-[:checked]:ring-1 has-[:checked]:ring-brand-500 has-[:checked]:bg-brand-500/[.04] transition"><input type="radio" name="wiz" class="sr-only"><i class="fa-solid fa-user text-ink-soft"></i><span class="block mt-3 text-sm font-semibold text-ink">個人使用</span><span class="block text-xs text-ink-faint">筆記與個人專案</span></label>
    <label class="p-4 rounded-xl border border-line cursor-pointer has-[:checked]:border-brand-500 has-[:checked]:ring-1 has-[:checked]:ring-brand-500 has-[:checked]:bg-brand-500/[.04] transition"><input type="radio" name="wiz" checked class="sr-only"><i class="fa-solid fa-users text-brand-600"></i><span class="block mt-3 text-sm font-semibold text-ink">團隊協作</span><span class="block text-xs text-ink-faint">與成員共同編輯</span></label>
  </div>
  <div class="mt-6 flex items-center justify-between">
    <button type="button" class="h-9 px-2 text-sm font-medium text-ink-soft hover:text-ink"><i class="fa-solid fa-arrow-left mr-1.5 text-xs"></i>上一步</button>
    <button type="button" class="h-9 px-4 rounded-[10px] bg-ink text-canvas text-sm font-medium hover:opacity-85">繼續<i class="fa-solid fa-arrow-right ml-1.5 text-xs"></i></button>
  </div>
</div>`,
    },
    {
      name: '新功能公告彈窗',
      en: "What's New Modal",
      tags: ['公告', '更新'],
      spec: [
        '頂部為 16:9 的視覺區（漸層背景加上模擬介面的白色卡片堆疊），右上角關閉按鈕。',
        '下方為「NEW」小徽章、標題「全新白板模式」與兩行說明。',
        '底部左側為頁面圓點指示（1/3），右側為「略過」與「下一個」按鈕。',
      ],
      html: `<div role="dialog" aria-modal="true" class="w-[380px] max-w-full rounded-3xl border border-line bg-surface shadow-lift overflow-hidden">
  <div class="relative aspect-video bg-gradient-to-br from-sky-400 via-indigo-500 to-violet-600 grid place-items-center">
    <button type="button" aria-label="關閉" class="absolute right-3 top-3 w-8 h-8 rounded-full bg-black/20 text-white grid place-items-center hover:bg-black/30"><i class="fa-solid fa-xmark text-sm"></i></button>
    <div class="relative w-44 h-24"><span class="absolute left-0 top-4 w-28 h-16 rounded-lg bg-white/30 rotate-[-6deg]"></span><span class="absolute right-0 top-0 w-28 h-16 rounded-lg bg-white/90 shadow-xl p-2"><span class="block h-1.5 w-12 rounded bg-indigo-300"></span><span class="block mt-1.5 h-1.5 w-20 rounded bg-zinc-200"></span><span class="block mt-1 h-1.5 w-16 rounded bg-zinc-200"></span></span><i class="fa-solid fa-arrow-pointer absolute right-4 bottom-0 text-white text-lg drop-shadow"></i></div>
  </div>
  <div class="p-6">
    <span class="px-2 py-0.5 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 text-[11px] font-bold tracking-wider">NEW</span>
    <h4 class="mt-3 text-lg font-semibold text-ink">全新白板模式</h4>
    <p class="mt-1 text-sm text-ink-soft leading-relaxed">在無限畫布上自由排列便利貼、圖片與流程圖，與團隊即時腦力激盪。</p>
    <div class="mt-6 flex items-center">
      <div class="flex gap-1.5"><span class="w-5 h-1.5 rounded-full bg-ink"></span><span class="w-1.5 h-1.5 rounded-full bg-line"></span><span class="w-1.5 h-1.5 rounded-full bg-line"></span></div>
      <button type="button" class="ml-auto h-9 px-3 text-sm text-ink-soft hover:text-ink">略過</button>
      <button type="button" class="h-9 px-4 rounded-[10px] bg-ink text-canvas text-sm font-medium">下一個</button>
    </div>
  </div>
</div>`,
    },
    {
      name: '輸入確認刪除',
      en: 'Type-to-confirm Dialog',
      tags: ['危險操作', '二次確認'],
      spec: [
        '高風險操作的確認框：頂部 rose 色警告橫條「此操作無法復原」。',
        '說明文字後要求使用者輸入儲存庫名稱（以等寬字與淡灰底標示）才能啟用刪除按鈕。',
        '輸入值與名稱相符前，「我了解後果，刪除儲存庫」按鈕維持停用（opacity 40%）。',
      ],
      html: `<div role="alertdialog" aria-modal="true" class="w-[420px] max-w-full rounded-2xl border border-line bg-surface shadow-lift overflow-hidden">
  <div class="px-5 py-2.5 bg-rose-500/10 border-b border-rose-500/20 text-xs font-medium text-rose-700 dark:text-rose-300"><i class="fa-solid fa-triangle-exclamation mr-1.5"></i>此操作無法復原</div>
  <div class="p-5">
    <h4 class="font-semibold text-ink">刪除儲存庫</h4>
    <p class="mt-1.5 text-sm text-ink-soft">請輸入 <code class="px-1.5 py-0.5 rounded bg-subtle font-mono text-xs text-ink">atlas/ui-kit</code> 以確認刪除。</p>
    <input type="text" placeholder="atlas/ui-kit" oninput="this.nextElementSibling.disabled=this.value!=='atlas/ui-kit'" class="mt-3 w-full h-10 px-3 rounded-[10px] border border-line bg-surface text-sm font-mono text-ink placeholder:text-ink-faint focus:outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-500/15">
    <button type="button" disabled class="mt-4 w-full h-10 rounded-[10px] bg-rose-600 text-white text-sm font-medium hover:bg-rose-500 disabled:opacity-40 disabled:cursor-not-allowed transition">我了解後果，刪除儲存庫</button>
  </div>
</div>`,
    },
    {
      name: '閒置逾時提醒',
      en: 'Session Timeout',
      tags: ['安全', '倒數'],
      spec: [
        '置中的提醒框，上方為 SVG 圓環倒數（以主色描邊表示剩餘時間比例），圓環中央顯示「0:45」。',
        '標題「你還在嗎？」與說明「為了保護帳號安全，系統將自動登出」。',
        '底部「登出」（外框）與「繼續使用」（深色）按鈕並排。',
      ],
      html: `<div role="alertdialog" aria-modal="true" class="w-[340px] max-w-full p-6 rounded-[20px] border border-line bg-surface shadow-lift text-center">
  <div class="relative mx-auto w-20 h-20">
    <svg viewBox="0 0 80 80" class="w-20 h-20 -rotate-90"><circle cx="40" cy="40" r="34" fill="none" stroke="rgb(var(--line))" stroke-width="6"/><circle cx="40" cy="40" r="34" fill="none" stroke="#f59e0b" stroke-width="6" stroke-linecap="round" stroke-dasharray="213.6" stroke-dashoffset="160"/></svg>
    <span class="absolute inset-0 grid place-items-center font-mono font-semibold text-ink">0:45</span>
  </div>
  <h4 class="mt-4 text-lg font-semibold text-ink">你還在嗎？</h4>
  <p class="mt-1 text-sm text-ink-soft">為了保護帳號安全，閒置過久系統將自動登出。</p>
  <div class="mt-5 grid grid-cols-2 gap-2"><button type="button" class="h-10 rounded-[10px] border border-line text-sm font-medium text-ink hover:bg-subtle">登出</button><button type="button" class="h-10 rounded-[10px] bg-ink text-canvas text-sm font-medium">繼續使用</button></div>
</div>`,
    },
    {
      name: '權限請求對話框',
      en: 'Permission Request',
      tags: ['權限', '裝置'],
      spec: [
        '頂部並排兩個圖示：應用程式標誌與 fa-camera，中間以虛線與 fa-arrow-right-arrow-left 連接，表示存取請求。',
        '標題「允許存取相機？」，下方以清單說明用途與隱私承諾（fa-shield-halved、fa-eye-slash）。',
        '底部「不允許」與「允許」兩個全寬按鈕上下排列。',
      ],
      html: `<div role="dialog" aria-modal="true" class="w-[340px] max-w-full p-6 rounded-[20px] border border-line bg-surface shadow-lift">
  <div class="flex items-center justify-center gap-3">
    <span class="w-12 h-12 rounded-2xl bg-ink text-canvas grid place-items-center"><i class="fa-solid fa-shapes"></i></span>
    <span class="flex items-center gap-1 text-ink-faint"><span class="w-4 border-t border-dashed border-ink-faint"></span><i class="fa-solid fa-arrow-right-arrow-left text-xs"></i><span class="w-4 border-t border-dashed border-ink-faint"></span></span>
    <span class="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-600 grid place-items-center text-lg"><i class="fa-solid fa-camera"></i></span>
  </div>
  <h4 class="mt-5 text-center font-semibold text-ink">允許存取相機？</h4>
  <ul class="mt-4 space-y-2.5 text-[13px] text-ink-soft">
    <li class="flex gap-2.5"><i class="fa-solid fa-video mt-0.5 w-4 text-ink-faint"></i>用於視訊會議與掃描 QR Code</li>
    <li class="flex gap-2.5"><i class="fa-solid fa-shield-halved mt-0.5 w-4 text-ink-faint"></i>影像僅在本機處理，不會上傳</li>
    <li class="flex gap-2.5"><i class="fa-solid fa-eye-slash mt-0.5 w-4 text-ink-faint"></i>可隨時在設定中關閉權限</li>
  </ul>
  <div class="mt-6 space-y-2"><button type="button" class="w-full h-10 rounded-[10px] bg-ink text-canvas text-sm font-medium">允許</button><button type="button" class="w-full h-10 rounded-[10px] text-sm font-medium text-ink-soft hover:bg-subtle">不允許</button></div>
</div>`,
    },
    {
      name: '商品快速檢視',
      en: 'Quick View Modal',
      tags: ['電商', '雙欄'],
      wide: true,
      spec: [
        '雙欄對話框：左側為商品圖片區（漸層與大圖示）與下方三個縮圖，右側為商品資訊。',
        '右側包含品牌、名稱、評分、價格、顏色選擇圓點、數量步進器與「加入購物車」主要按鈕。',
        '右上角關閉按鈕；窄螢幕時改為上下排列。',
      ],
      html: `<div role="dialog" aria-modal="true" class="relative w-full max-w-3xl grid md:grid-cols-2 rounded-3xl border border-line bg-surface shadow-lift overflow-hidden">
  <button type="button" aria-label="關閉" class="absolute right-4 top-4 z-10 w-8 h-8 rounded-full bg-subtle grid place-items-center text-ink-soft hover:text-ink"><i class="fa-solid fa-xmark"></i></button>
  <div class="p-5 bg-subtle/60">
    <div class="aspect-square rounded-2xl bg-gradient-to-br from-teal-100 to-sky-200 dark:from-teal-500/20 dark:to-sky-500/20 grid place-items-center"><i class="fa-solid fa-shoe-prints text-6xl text-teal-500/70"></i></div>
    <div class="mt-3 grid grid-cols-3 gap-2"><span class="aspect-square rounded-lg bg-gradient-to-br from-teal-100 to-sky-200 dark:from-teal-500/20 dark:to-sky-500/20 ring-2 ring-ink"></span><span class="aspect-square rounded-lg bg-gradient-to-br from-zinc-100 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800"></span><span class="aspect-square rounded-lg bg-gradient-to-br from-rose-100 to-orange-200 dark:from-rose-500/20 dark:to-orange-500/20"></span></div>
  </div>
  <div class="p-6 flex flex-col">
    <p class="text-xs font-medium uppercase tracking-wider text-ink-faint">Stride</p>
    <h4 class="mt-1 text-xl font-semibold text-ink">雲感輕量慢跑鞋</h4>
    <p class="mt-2 text-xs text-ink-soft"><i class="fa-solid fa-star text-amber-400"></i> 4.9 · 1,204 則評價</p>
    <p class="mt-4 text-2xl font-bold text-ink">$3,280</p>
    <p class="mt-5 text-xs font-semibold text-ink-faint">顏色</p>
    <div class="mt-2 flex gap-2"><span class="w-7 h-7 rounded-full bg-teal-400 ring-2 ring-offset-2 ring-offset-surface ring-teal-400"></span><span class="w-7 h-7 rounded-full bg-zinc-700"></span><span class="w-7 h-7 rounded-full bg-rose-300"></span></div>
    <div class="mt-auto pt-6 flex gap-2">
      <div data-stepper data-min="1" class="inline-flex items-center h-11 rounded-xl border border-line"><button type="button" onclick="UIK.step(this,-1)" aria-label="減少" class="w-9 h-full text-ink-soft"><i class="fa-solid fa-minus text-xs"></i></button><span data-value class="w-6 text-center text-sm font-semibold text-ink">1</span><button type="button" onclick="UIK.step(this,1)" aria-label="增加" class="w-9 h-full text-ink-soft"><i class="fa-solid fa-plus text-xs"></i></button></div>
      <button type="button" class="flex-1 h-11 rounded-xl bg-ink text-canvas text-sm font-medium hover:opacity-85"><i class="fa-solid fa-bag-shopping mr-2"></i>加入購物車</button>
    </div>
  </div>
</div>`,
    },
    {
      name: '設定視窗',
      en: 'Settings Dialog',
      tags: ['設定', '雙欄'],
      wide: true,
      spec: [
        '大型設定對話框：左側為淡灰底的設定分類清單（帳號、外觀、通知、整合），右側為內容區。',
        '內容區「外觀」示範三張主題預覽卡（淺色、深色、跟隨系統）單選，以及字級大小分段控制。',
        '底部右側「取消」與「儲存」按鈕；對話框高 380px。',
      ],
      html: `<div role="dialog" aria-modal="true" class="w-full max-w-3xl h-[380px] flex rounded-2xl border border-line bg-surface shadow-lift overflow-hidden">
  <nav class="w-48 shrink-0 p-3 bg-subtle/60 border-r border-line text-sm space-y-0.5 hidden sm:block">
    <p class="px-2.5 pb-2 text-xs font-semibold text-ink-faint">設定</p>
    <a href="#" onclick="return false" class="flex items-center gap-2.5 h-8 px-2.5 rounded-lg text-ink-soft hover:bg-surface"><i class="fa-regular fa-user w-4 text-xs"></i>帳號</a>
    <a href="#" onclick="return false" class="flex items-center gap-2.5 h-8 px-2.5 rounded-lg bg-surface text-ink font-medium shadow-sm"><i class="fa-solid fa-palette w-4 text-xs"></i>外觀</a>
    <a href="#" onclick="return false" class="flex items-center gap-2.5 h-8 px-2.5 rounded-lg text-ink-soft hover:bg-surface"><i class="fa-regular fa-bell w-4 text-xs"></i>通知</a>
    <a href="#" onclick="return false" class="flex items-center gap-2.5 h-8 px-2.5 rounded-lg text-ink-soft hover:bg-surface"><i class="fa-solid fa-plug w-4 text-xs"></i>整合</a>
  </nav>
  <div class="flex-1 flex flex-col">
    <div class="flex-1 p-6 overflow-auto">
      <h4 class="font-semibold text-ink">外觀</h4>
      <p class="mt-1 text-sm text-ink-soft">自訂介面的主題與字級。</p>
      <div class="mt-4 grid grid-cols-3 gap-3 text-xs font-medium">
        <label class="cursor-pointer"><input type="radio" name="th" checked class="peer sr-only"><span class="block p-1.5 rounded-xl border border-line peer-checked:border-brand-500 peer-checked:ring-1 peer-checked:ring-brand-500"><span class="block h-14 rounded-lg bg-zinc-100 p-2"><span class="block h-2 w-8 rounded bg-white"></span><span class="block mt-1.5 h-2 w-12 rounded bg-white"></span></span></span><span class="block mt-1.5 text-center text-ink">淺色</span></label>
        <label class="cursor-pointer"><input type="radio" name="th" class="peer sr-only"><span class="block p-1.5 rounded-xl border border-line peer-checked:border-brand-500 peer-checked:ring-1 peer-checked:ring-brand-500"><span class="block h-14 rounded-lg bg-zinc-800 p-2"><span class="block h-2 w-8 rounded bg-zinc-600"></span><span class="block mt-1.5 h-2 w-12 rounded bg-zinc-600"></span></span></span><span class="block mt-1.5 text-center text-ink">深色</span></label>
        <label class="cursor-pointer"><input type="radio" name="th" class="peer sr-only"><span class="block p-1.5 rounded-xl border border-line peer-checked:border-brand-500 peer-checked:ring-1 peer-checked:ring-brand-500"><span class="block h-14 rounded-lg bg-[linear-gradient(135deg,#f4f4f5_50%,#27272a_50%)]"></span></span><span class="block mt-1.5 text-center text-ink">跟隨系統</span></label>
      </div>
      <p class="mt-5 text-xs font-semibold text-ink-faint">字級大小</p>
      <div data-pick data-on="bg-surface text-ink shadow-sm" data-off="text-ink-faint" class="mt-2 inline-grid grid-cols-3 p-1 rounded-lg bg-subtle text-xs font-medium"><button type="button" data-item onclick="UIK.pick(this)" class="h-7 px-4 rounded-md text-ink-faint">小</button><button type="button" data-item aria-selected="true" onclick="UIK.pick(this)" class="h-7 px-4 rounded-md bg-surface text-ink shadow-sm">中</button><button type="button" data-item onclick="UIK.pick(this)" class="h-7 px-4 rounded-md text-ink-faint">大</button></div>
    </div>
    <div class="flex justify-end gap-2 px-6 py-3 border-t border-line"><button type="button" class="h-9 px-3.5 rounded-[10px] text-sm text-ink-soft hover:bg-subtle">取消</button><button type="button" class="h-9 px-4 rounded-[10px] bg-ink text-canvas text-sm font-medium">儲存</button></div>
  </div>
</div>`,
    },
    {
      name: '可開關的對話框',
      en: 'Interactive Modal',
      tags: ['Modal', '互動'],
      spec: [
        '點擊「開啟對話框」按鈕後，遮罩淡入、對話框由 95% 縮放與向下 8px 位移動畫進場（200ms）。',
        '點擊遮罩、關閉按鈕或「好的」按鈕皆可關閉，關閉時反向動畫退場。',
        '以容器上的 data-open 屬性控制狀態，對話框內容為通知設定說明。',
      ],
      html: `<div data-modal-root class="group relative w-full max-w-md h-72 rounded-2xl border border-dashed border-line grid place-items-center overflow-hidden">
  <button type="button" onclick="UIK.modal(this,true)" class="h-10 px-4 rounded-[10px] bg-ink text-canvas text-sm font-medium hover:opacity-85"><i class="fa-regular fa-window-maximize mr-2"></i>開啟對話框</button>
  <div onclick="UIK.modal(this,false)" class="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 pointer-events-none group-data-[open]:opacity-100 group-data-[open]:pointer-events-auto transition-opacity duration-200"></div>
  <div role="dialog" aria-modal="true" class="absolute w-[300px] p-5 rounded-2xl border border-line bg-surface shadow-lift opacity-0 scale-95 translate-y-2 pointer-events-none group-data-[open]:opacity-100 group-data-[open]:scale-100 group-data-[open]:translate-y-0 group-data-[open]:pointer-events-auto transition duration-200">
    <div class="flex items-start justify-between"><span class="w-10 h-10 rounded-full bg-brand-500/10 text-brand-600 grid place-items-center"><i class="fa-regular fa-bell"></i></span><button type="button" onclick="UIK.modal(this,false)" aria-label="關閉" class="w-7 h-7 rounded-lg grid place-items-center text-ink-faint hover:bg-subtle"><i class="fa-solid fa-xmark text-sm"></i></button></div>
    <h4 class="mt-4 font-semibold text-ink">開啟通知</h4>
    <p class="mt-1 text-sm text-ink-soft">我們會在有人提及你或任務到期時提醒你。</p>
    <button type="button" onclick="UIK.modal(this,false)" class="mt-5 w-full h-9 rounded-[10px] bg-ink text-canvas text-sm font-medium">好的</button>
  </div>
</div>`,
    },
    {
      name: '上傳進度視窗',
      en: 'Upload Progress Panel',
      tags: ['上傳', '浮動面板'],
      spec: [
        '右下角浮動面板，標題列為深色底「正在上傳 2 個項目」與收合 fa-chevron-down、關閉按鈕。',
        '項目列表：每列有檔案圖示、檔名、進度條與狀態（百分比、fa-circle-check 完成、fa-circle-exclamation 失敗可重試）。',
        '面板寬 340px，圓角 16px。',
      ],
      html: `<div class="w-[340px] max-w-full rounded-2xl border border-line bg-surface shadow-lift overflow-hidden">
  <div class="flex items-center gap-2 px-4 h-11 bg-zinc-900 text-white text-sm"><i class="fa-solid fa-cloud-arrow-up text-xs text-zinc-400"></i><span class="flex-1">正在上傳 2 個項目</span><button type="button" aria-label="收合" class="w-7 h-7 rounded-md hover:bg-white/10"><i class="fa-solid fa-chevron-down text-xs"></i></button><button type="button" aria-label="關閉" class="w-7 h-7 rounded-md hover:bg-white/10"><i class="fa-solid fa-xmark text-xs"></i></button></div>
  <div class="divide-y divide-line text-[13px]">
    <div class="flex items-center gap-3 p-3.5"><i class="fa-solid fa-file-image text-violet-500"></i><div class="flex-1 min-w-0"><p class="text-ink truncate">hero-banner@2x.png</p><div class="mt-1.5 h-1 rounded-full bg-line overflow-hidden"><div class="h-full w-[68%] rounded-full bg-brand-600 transition-all"></div></div></div><span class="text-xs font-mono text-ink-faint">68%</span></div>
    <div class="flex items-center gap-3 p-3.5"><i class="fa-solid fa-file-video text-sky-500"></i><div class="flex-1 min-w-0"><p class="text-ink truncate">product-demo.mp4</p><div class="mt-1.5 h-1 rounded-full bg-line overflow-hidden"><div class="h-full w-[24%] rounded-full bg-brand-600"></div></div></div><span class="text-xs font-mono text-ink-faint">24%</span></div>
    <div class="flex items-center gap-3 p-3.5"><i class="fa-solid fa-file-lines text-ink-faint"></i><p class="flex-1 text-ink truncate">notes.md</p><i class="fa-solid fa-circle-check text-emerald-500"></i></div>
    <div class="flex items-center gap-3 p-3.5"><i class="fa-solid fa-file-zipper text-amber-500"></i><div class="flex-1 min-w-0"><p class="text-ink truncate">archive-2025.zip</p><p class="text-[11px] text-rose-600">網路中斷，上傳失敗</p></div><button type="button" class="text-xs font-medium text-brand-600 dark:text-brand-400"><i class="fa-solid fa-rotate-right mr-1"></i>重試</button></div>
  </div>
</div>`,
    },
    {
      name: '快捷鍵說明視窗',
      en: 'Keyboard Shortcuts Modal',
      tags: ['快捷鍵', '說明'],
      spec: [
        '對話框標題「鍵盤快捷鍵」附 fa-keyboard 圖示，右上角關閉。',
        '內容以兩欄網格分組（一般、編輯），每組有小標題，每列為動作說明與右側 kbd 鍵帽組合。',
        '底部提示「隨時按 ? 開啟此視窗」。',
      ],
      html: `<div role="dialog" aria-modal="true" class="w-[520px] max-w-full rounded-2xl border border-line bg-surface shadow-lift">
  <div class="flex items-center justify-between px-5 h-14 border-b border-line"><h4 class="font-semibold text-ink"><i class="fa-regular fa-keyboard mr-2 text-ink-faint"></i>鍵盤快捷鍵</h4><button type="button" aria-label="關閉" class="w-8 h-8 rounded-lg grid place-items-center text-ink-faint hover:bg-subtle"><i class="fa-solid fa-xmark"></i></button></div>
  <div class="p-5 grid sm:grid-cols-2 gap-6 text-[13px]">
    <div><p class="mb-2.5 text-[11px] font-semibold uppercase tracking-wider text-ink-faint">一般</p>
      <div class="space-y-2.5">
        <div class="flex justify-between items-center"><span class="text-ink-soft">搜尋</span><span class="flex gap-1"><kbd class="h-5 px-1.5 rounded border border-line border-b-2 bg-surface text-[10px] text-ink font-sans grid place-items-center">Ctrl</kbd><kbd class="h-5 px-1.5 rounded border border-line border-b-2 bg-surface text-[10px] text-ink font-sans grid place-items-center">K</kbd></span></div>
        <div class="flex justify-between items-center"><span class="text-ink-soft">新增項目</span><kbd class="h-5 px-1.5 rounded border border-line border-b-2 bg-surface text-[10px] text-ink font-sans grid place-items-center">C</kbd></div>
        <div class="flex justify-between items-center"><span class="text-ink-soft">說明</span><kbd class="h-5 px-1.5 rounded border border-line border-b-2 bg-surface text-[10px] text-ink font-sans grid place-items-center">?</kbd></div>
      </div>
    </div>
    <div><p class="mb-2.5 text-[11px] font-semibold uppercase tracking-wider text-ink-faint">編輯</p>
      <div class="space-y-2.5">
        <div class="flex justify-between items-center"><span class="text-ink-soft">復原</span><span class="flex gap-1"><kbd class="h-5 px-1.5 rounded border border-line border-b-2 bg-surface text-[10px] text-ink font-sans grid place-items-center">Ctrl</kbd><kbd class="h-5 px-1.5 rounded border border-line border-b-2 bg-surface text-[10px] text-ink font-sans grid place-items-center">Z</kbd></span></div>
        <div class="flex justify-between items-center"><span class="text-ink-soft">粗體</span><span class="flex gap-1"><kbd class="h-5 px-1.5 rounded border border-line border-b-2 bg-surface text-[10px] text-ink font-sans grid place-items-center">Ctrl</kbd><kbd class="h-5 px-1.5 rounded border border-line border-b-2 bg-surface text-[10px] text-ink font-sans grid place-items-center">B</kbd></span></div>
        <div class="flex justify-between items-center"><span class="text-ink-soft">插入連結</span><span class="flex gap-1"><kbd class="h-5 px-1.5 rounded border border-line border-b-2 bg-surface text-[10px] text-ink font-sans grid place-items-center">Ctrl</kbd><kbd class="h-5 px-1.5 rounded border border-line border-b-2 bg-surface text-[10px] text-ink font-sans grid place-items-center">L</kbd></span></div>
      </div>
    </div>
  </div>
  <p class="px-5 py-3 border-t border-line text-xs text-ink-faint">隨時按 <kbd class="px-1 rounded border border-line font-sans">?</kbd> 開啟此視窗</p>
</div>`,
    },
  ],
});
