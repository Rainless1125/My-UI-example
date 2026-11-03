(window.UI_ATLAS = window.UI_ATLAS || []).push({
  id: 'inputs',
  name: '輸入框與表單',
  en: 'Inputs & Forms',
  icon: 'fa-solid fa-keyboard',
  desc: '浮動標籤、密碼強度、驗證碼、標籤輸入、檔案拖放到 AI 對話輸入列，包含表單設計中最常見的 20 種輸入情境。',
  items: [
    {
      name: '標準輸入框',
      en: 'Labeled Text Field',
      tags: ['基礎', '說明文字'],
      spec: [
        '上方為 14px 中等字重的欄位標籤，右側附灰色「選填」字樣；下方為 12px 灰色輔助說明。',
        '輸入框高度 40px、圓角 10px、1px 邊框與極淡陰影；focus 時邊框轉為主色並出現 4px 主色 15% 光暈。',
        'placeholder 為淺灰色，標籤需以 for 屬性綁定輸入框。',
      ],
      html: `<div class="w-80">
  <div class="flex items-center justify-between mb-1.5">
    <label for="f-name" class="text-sm font-medium text-ink">顯示名稱</label>
    <span class="text-xs text-ink-faint">選填</span>
  </div>
  <input id="f-name" type="text" placeholder="例如：王小明" class="w-full h-10 px-3 rounded-[10px] border border-line bg-surface text-sm text-ink placeholder:text-ink-faint shadow-sm focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition">
  <p class="mt-1.5 text-xs text-ink-faint">這個名稱會顯示在你的個人頁面與留言中。</p>
</div>`,
    },
    {
      name: '浮動標籤輸入框',
      en: 'Floating Label Input',
      tags: ['浮動標籤', 'Material'],
      spec: [
        '標籤一開始位於輸入框中央作為提示文字，focus 或有內容時縮小並浮到框線上方。',
        '使用 peer 與 :placeholder-shown 實作，不需 JavaScript；浮起時標籤背景與頁面同色以遮住框線。',
        '輸入框高度 48px、圓角 12px，focus 時標籤與框線皆變為主色。',
      ],
      html: `<div class="w-80 space-y-4">
  <div class="relative">
    <input id="fl-email" type="email" placeholder=" " class="peer w-full h-12 px-3.5 rounded-xl border border-line bg-surface text-sm text-ink focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition">
    <label for="fl-email" class="absolute left-2.5 top-1/2 -translate-y-1/2 px-1 bg-surface text-sm text-ink-faint pointer-events-none transition-all duration-200 peer-focus:top-0 peer-focus:text-xs peer-focus:text-brand-600 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs">電子郵件</label>
  </div>
  <div class="relative">
    <input id="fl-co" type="text" placeholder=" " value="Atlas Studio" class="peer w-full h-12 px-3.5 rounded-xl border border-line bg-surface text-sm text-ink focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition">
    <label for="fl-co" class="absolute left-2.5 top-1/2 -translate-y-1/2 px-1 bg-surface text-sm text-ink-faint pointer-events-none transition-all duration-200 peer-focus:top-0 peer-focus:text-xs peer-focus:text-brand-600 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs">公司名稱</label>
  </div>
</div>`,
    },
    {
      name: '快捷鍵搜尋框',
      en: 'Search with Shortcut',
      tags: ['搜尋', '快捷鍵'],
      spec: [
        '左側放大鏡圖示 fa-magnifying-glass，右側以兩個小鍵帽顯示 Ctrl 與 K 快捷鍵提示。',
        '預設背景為淺灰、無邊框；focus 時背景變白、出現邊框與主色光暈，鍵帽淡出隱藏。',
        '高度 40px、圓角 10px，寬度 320px。',
      ],
      html: `<label class="relative block w-80">
  <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-ink-faint"></i>
  <input type="search" placeholder="搜尋專案、成員或文件" class="peer w-full h-10 pl-9 pr-20 rounded-[10px] bg-subtle border border-transparent text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:bg-surface focus:border-line focus:ring-4 focus:ring-brand-500/10 transition">
  <span class="absolute right-2.5 top-1/2 -translate-y-1/2 flex gap-1 transition-opacity peer-focus:opacity-0">
    <kbd class="h-5 px-1.5 rounded border border-line bg-surface text-[10px] font-medium text-ink-faint grid place-items-center">Ctrl</kbd>
    <kbd class="h-5 w-5 rounded border border-line bg-surface text-[10px] font-medium text-ink-faint grid place-items-center">K</kbd>
  </span>
</label>`,
    },
    {
      name: '密碼強度輸入框',
      en: 'Password Strength Field',
      tags: ['密碼', '即時驗證'],
      spec: [
        '密碼輸入框右側有眼睛圖示按鈕，可在 fa-eye 與 fa-eye-slash 之間切換顯示密碼。',
        '下方有四段強度條，依長度、大小寫、數字、符號計分，分別以 rose、amber、lime、emerald 顯示。',
        '強度條右側顯示「太弱 / 普通 / 良好 / 非常安全」文字，隨輸入即時更新。',
      ],
      html: `<div class="w-80" data-strength>
  <label for="pw1" class="block mb-1.5 text-sm font-medium text-ink">設定密碼</label>
  <div class="relative">
    <input id="pw1" type="password" oninput="UIK.strength(this)" placeholder="至少 8 個字元" class="w-full h-10 pl-3 pr-10 rounded-[10px] border border-line bg-surface text-sm text-ink placeholder:text-ink-faint shadow-sm focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition">
    <button type="button" onclick="UIK.pw(this)" aria-label="顯示密碼" class="absolute right-1 top-1 w-8 h-8 rounded-lg grid place-items-center text-ink-faint hover:text-ink hover:bg-subtle"><i class="fa-regular fa-eye text-sm"></i></button>
  </div>
  <div class="mt-2.5 flex items-center gap-3">
    <div class="flex-1 grid grid-cols-4 gap-1.5">
      <span data-bar class="h-1.5 rounded-full bg-line transition-colors"></span><span data-bar class="h-1.5 rounded-full bg-line transition-colors"></span><span data-bar class="h-1.5 rounded-full bg-line transition-colors"></span><span data-bar class="h-1.5 rounded-full bg-line transition-colors"></span>
    </div>
    <span data-out class="w-16 text-right text-xs text-ink-faint">請輸入密碼</span>
  </div>
</div>`,
    },
    {
      name: '驗證狀態輸入框',
      en: 'Validation States',
      tags: ['錯誤', '成功'],
      spec: [
        '兩個並排範例：成功狀態為 emerald 邊框與右側 fa-circle-check 圖示；錯誤狀態為 rose 邊框與 fa-circle-exclamation。',
        '錯誤狀態下方顯示紅色錯誤訊息，輸入框加上 aria-invalid="true" 與 aria-describedby。',
        'focus 時光暈顏色與狀態色一致。',
      ],
      html: `<div class="w-80 space-y-4">
  <div>
    <label class="block mb-1.5 text-sm font-medium text-ink" for="v-user">使用者名稱</label>
    <div class="relative">
      <input id="v-user" type="text" value="atlas.design" class="w-full h-10 pl-3 pr-9 rounded-[10px] border border-emerald-500 bg-surface text-sm text-ink focus:outline-none focus:ring-4 focus:ring-emerald-500/15 transition">
      <i class="fa-solid fa-circle-check absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500"></i>
    </div>
    <p class="mt-1.5 text-xs text-emerald-600 dark:text-emerald-400">這個名稱可以使用</p>
  </div>
  <div>
    <label class="block mb-1.5 text-sm font-medium text-ink" for="v-mail">電子郵件</label>
    <div class="relative">
      <input id="v-mail" type="email" value="hello@atlas" aria-invalid="true" aria-describedby="v-mail-err" class="w-full h-10 pl-3 pr-9 rounded-[10px] border border-rose-500 bg-surface text-sm text-ink focus:outline-none focus:ring-4 focus:ring-rose-500/15 transition">
      <i class="fa-solid fa-circle-exclamation absolute right-3 top-1/2 -translate-y-1/2 text-rose-500"></i>
    </div>
    <p id="v-mail-err" class="mt-1.5 text-xs text-rose-600 dark:text-rose-400">請輸入有效的電子郵件格式</p>
  </div>
</div>`,
    },
    {
      name: '驗證碼輸入框',
      en: 'OTP Code Input',
      tags: ['驗證碼', '自動跳格'],
      spec: [
        '六個 48×56 的獨立數字格，中間以短橫線分成兩組三格。',
        '輸入一個數字後自動跳到下一格，於空格按 Backspace 回到上一格；只接受數字。',
        'focus 的格子有主色邊框與光暈，數字使用 20px 粗體等寬字。',
      ],
      html: `<div class="text-center">
  <p class="text-sm font-medium text-ink">輸入驗證碼</p>
  <p class="mt-1 text-xs text-ink-faint">已傳送至 0912 *** 678</p>
  <div class="mt-4 flex items-center gap-2">
    <div class="flex gap-2">
      <input inputmode="numeric" maxlength="1" aria-label="第 1 碼" oninput="UIK.otp(this)" onkeydown="UIK.otpBack(event,this)" class="w-11 h-14 rounded-xl border border-line bg-surface text-center text-xl font-semibold font-mono text-ink shadow-sm focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition"><input inputmode="numeric" maxlength="1" aria-label="第 2 碼" oninput="UIK.otp(this)" onkeydown="UIK.otpBack(event,this)" class="w-11 h-14 rounded-xl border border-line bg-surface text-center text-xl font-semibold font-mono text-ink shadow-sm focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition"><input inputmode="numeric" maxlength="1" aria-label="第 3 碼" oninput="UIK.otp(this)" onkeydown="UIK.otpBack(event,this)" class="w-11 h-14 rounded-xl border border-line bg-surface text-center text-xl font-semibold font-mono text-ink shadow-sm focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition">
    </div>
    <span class="w-3 h-0.5 rounded bg-line"></span>
    <div class="flex gap-2">
      <input inputmode="numeric" maxlength="1" aria-label="第 4 碼" oninput="UIK.otp(this)" onkeydown="UIK.otpBack(event,this)" class="w-11 h-14 rounded-xl border border-line bg-surface text-center text-xl font-semibold font-mono text-ink shadow-sm focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition"><input inputmode="numeric" maxlength="1" aria-label="第 5 碼" oninput="UIK.otp(this)" onkeydown="UIK.otpBack(event,this)" class="w-11 h-14 rounded-xl border border-line bg-surface text-center text-xl font-semibold font-mono text-ink shadow-sm focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition"><input inputmode="numeric" maxlength="1" aria-label="第 6 碼" oninput="UIK.otp(this)" onkeydown="UIK.otpBack(event,this)" class="w-11 h-14 rounded-xl border border-line bg-surface text-center text-xl font-semibold font-mono text-ink shadow-sm focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition">
    </div>
  </div>
  <button type="button" class="mt-4 text-xs font-medium text-brand-600 dark:text-brand-400 hover:underline"><i class="fa-solid fa-rotate-right mr-1"></i>重新傳送（00:42）</button>
</div>`,
    },
    {
      name: '標籤輸入框',
      en: 'Tag Input',
      tags: ['多值', 'Chips'],
      spec: [
        '外觀像一個輸入框，內部以膠囊標籤顯示已輸入的值，每個標籤右側有 fa-xmark 移除按鈕。',
        '在輸入區按 Enter 即新增一個標籤，標籤為主色 10% 背景、主色文字、圓角 6px。',
        '整個容器 focus-within 時出現主色邊框與光暈，內容過多時自動換行。',
      ],
      html: `<div class="w-80">
  <label class="block mb-1.5 text-sm font-medium text-ink">技能標籤</label>
  <div class="flex flex-wrap items-center gap-1.5 min-h-10 p-1.5 rounded-[10px] border border-line bg-surface shadow-sm focus-within:border-brand-500 focus-within:ring-4 focus-within:ring-brand-500/15 transition">
    <span class="inline-flex items-center gap-1.5 h-7 pl-2.5 pr-2 rounded-md bg-brand-500/10 text-brand-700 dark:text-brand-300 text-xs font-medium">Figma<button type="button" aria-label="移除" onclick="this.parentElement.remove()" class="opacity-60 hover:opacity-100"><i class="fa-solid fa-xmark text-[10px]"></i></button></span>
    <span class="inline-flex items-center gap-1.5 h-7 pl-2.5 pr-2 rounded-md bg-brand-500/10 text-brand-700 dark:text-brand-300 text-xs font-medium">React<button type="button" aria-label="移除" onclick="this.parentElement.remove()" class="opacity-60 hover:opacity-100"><i class="fa-solid fa-xmark text-[10px]"></i></button></span>
    <input type="text" placeholder="輸入後按 Enter" onkeydown="UIK.chip(event,this)" data-chip="inline-flex items-center gap-1.5 h-7 pl-2.5 pr-2 rounded-md bg-brand-500/10 text-brand-700 dark:text-brand-300 text-xs font-medium" class="flex-1 min-w-[96px] h-7 px-1.5 bg-transparent text-sm text-ink placeholder:text-ink-faint focus:outline-none">
  </div>
</div>`,
    },
    {
      name: '檔案拖放上傳',
      en: 'File Dropzone',
      tags: ['上傳', '拖放'],
      spec: [
        '虛線邊框的上傳區塊，中央為圓形主色淺底中的 fa-cloud-arrow-up 圖示。',
        '主文字「拖曳檔案到這裡，或點擊選擇檔案」，其中「點擊選擇」為主色連結；下方註明格式與大小限制。',
        'hover 或拖曳經過時邊框與背景轉為主色淺色調，圖示向上浮動。整個區塊為 label 包住隱藏的 file input。',
      ],
      html: `<label class="group w-96 max-w-full flex flex-col items-center gap-3 px-6 py-8 rounded-2xl border-2 border-dashed border-line bg-surface text-center cursor-pointer hover:border-brand-400 hover:bg-brand-500/[.04] transition">
  <span class="w-12 h-12 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 grid place-items-center text-lg transition-transform group-hover:-translate-y-1"><i class="fa-solid fa-cloud-arrow-up"></i></span>
  <span class="text-sm text-ink">拖曳檔案到這裡，或<span class="font-semibold text-brand-600 dark:text-brand-400">點擊選擇檔案</span></span>
  <span class="text-xs text-ink-faint">支援 PNG、JPG、PDF，單檔上限 10 MB</span>
  <input type="file" class="sr-only" multiple>
</label>`,
    },
    {
      name: '字數統計文字區',
      en: 'Textarea with Counter',
      tags: ['多行', '字數'],
      spec: [
        '多行文字輸入區，高度約 4 行，可垂直調整大小；右下角即時顯示「目前字數 / 上限」。',
        '底部有一條工具列：左側為附件 fa-paperclip 與提及 fa-at 圖示按鈕，右側為字數。',
        '整體外框包住文字區與工具列，focus-within 時外框轉為主色。',
      ],
      html: `<div class="w-96 max-w-full" data-counter>
  <label class="block mb-1.5 text-sm font-medium text-ink" for="ta-bio">個人簡介</label>
  <div class="rounded-xl border border-line bg-surface shadow-sm focus-within:border-brand-500 focus-within:ring-4 focus-within:ring-brand-500/15 transition">
    <textarea id="ta-bio" rows="3" maxlength="160" oninput="UIK.count(this)" placeholder="簡單介紹你自己，讓其他人更認識你" class="block w-full px-3.5 pt-3 bg-transparent text-sm text-ink placeholder:text-ink-faint resize-y focus:outline-none"></textarea>
    <div class="flex items-center justify-between px-2 py-1.5">
      <div class="flex gap-0.5">
        <button type="button" aria-label="附加檔案" class="w-8 h-8 rounded-lg grid place-items-center text-ink-faint hover:text-ink hover:bg-subtle"><i class="fa-solid fa-paperclip text-sm"></i></button>
        <button type="button" aria-label="提及成員" class="w-8 h-8 rounded-lg grid place-items-center text-ink-faint hover:text-ink hover:bg-subtle"><i class="fa-solid fa-at text-sm"></i></button>
      </div>
      <span class="pr-1.5 text-xs font-mono text-ink-faint"><span data-out>0</span> / 160</span>
    </div>
  </div>
</div>`,
    },
    {
      name: '前後綴網址輸入框',
      en: 'Input with Add-ons',
      tags: ['前綴', '網址'],
      spec: [
        '輸入框左側有灰底的「https://」前綴區塊，右側有「.atlas.app」後綴區塊，三者共用外框。',
        '前後綴文字為灰色、不可編輯，中間輸入框無邊框；整體 focus-within 時外框轉主色。',
        '下方以 fa-globe 圖示提示最終網址預覽。',
      ],
      html: `<div class="w-96 max-w-full">
  <label class="block mb-1.5 text-sm font-medium text-ink" for="ad-sub">工作區網址</label>
  <div class="flex h-10 rounded-[10px] border border-line bg-surface shadow-sm overflow-hidden focus-within:border-brand-500 focus-within:ring-4 focus-within:ring-brand-500/15 transition">
    <span class="px-3 grid place-items-center bg-subtle border-r border-line text-sm text-ink-faint">https://</span>
    <input id="ad-sub" type="text" value="my-team" class="flex-1 min-w-0 px-3 bg-transparent text-sm text-ink focus:outline-none">
    <span class="px-3 grid place-items-center bg-subtle border-l border-line text-sm text-ink-faint">.atlas.app</span>
  </div>
  <p class="mt-1.5 text-xs text-ink-faint"><i class="fa-solid fa-globe mr-1"></i>成員將透過這個網址登入</p>
</div>`,
    },
    {
      name: '金額與幣別輸入',
      en: 'Currency Amount Input',
      tags: ['金額', '下拉'],
      spec: [
        '左側顯示貨幣符號，中間為靠右對齊的金額數字（等寬數字），右側為內嵌的幣別下拉選單。',
        '幣別選單無邊框，以 fa-chevron-down 為箭頭，與輸入框共用外框。',
        '下方以小字顯示換算匯率資訊。',
      ],
      html: `<div class="w-80">
  <label class="block mb-1.5 text-sm font-medium text-ink" for="cur-amt">轉帳金額</label>
  <div class="flex items-center h-12 rounded-xl border border-line bg-surface shadow-sm focus-within:border-brand-500 focus-within:ring-4 focus-within:ring-brand-500/15 transition">
    <span class="pl-3.5 text-ink-faint"><i class="fa-solid fa-dollar-sign"></i></span>
    <input id="cur-amt" type="text" inputmode="decimal" value="12,500.00" class="flex-1 min-w-0 px-2 bg-transparent text-lg font-semibold tabular-nums text-ink focus:outline-none">
    <div class="relative h-full border-l border-line">
      <select aria-label="幣別" class="h-full pl-3 pr-8 bg-transparent text-sm font-medium text-ink appearance-none focus:outline-none cursor-pointer"><option>TWD</option><option>USD</option><option>JPY</option></select>
      <i class="fa-solid fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-ink-faint pointer-events-none"></i>
    </div>
  </div>
  <p class="mt-1.5 text-xs text-ink-faint">約等於 USD 389.25 · 匯率 32.11</p>
</div>`,
    },
    {
      name: '國碼電話輸入',
      en: 'Phone with Country Code',
      tags: ['電話', '國碼'],
      spec: [
        '左側為國碼選擇按鈕，顯示 fa-flag 小圖示、國碼「+886」與下拉箭頭，右側為電話號碼輸入。',
        '兩者共用一個外框，國碼按鈕以淺灰背景區隔。',
        '電話輸入使用 type="tel" 與 autocomplete="tel-national"。',
      ],
      html: `<div class="w-80">
  <label class="block mb-1.5 text-sm font-medium text-ink" for="tel1">手機號碼</label>
  <div class="flex h-10 rounded-[10px] border border-line bg-surface shadow-sm focus-within:border-brand-500 focus-within:ring-4 focus-within:ring-brand-500/15 transition">
    <button type="button" class="flex items-center gap-2 pl-3 pr-2.5 rounded-l-[10px] bg-subtle border-r border-line text-sm text-ink hover:bg-line/60">
      <i class="fa-solid fa-flag text-xs text-brand-500"></i><span class="font-medium">+886</span><i class="fa-solid fa-chevron-down text-[9px] text-ink-faint"></i>
    </button>
    <input id="tel1" type="tel" autocomplete="tel-national" placeholder="912 345 678" class="flex-1 min-w-0 px-3 bg-transparent text-sm text-ink placeholder:text-ink-faint tracking-wide focus:outline-none">
  </div>
</div>`,
    },
    {
      name: '底線極簡輸入框',
      en: 'Underline Input',
      tags: ['極簡', '動畫底線'],
      spec: [
        '無外框，只有一條 1px 灰色底線；focus 時一條 2px 主色底線從中央向兩側展開。',
        '左側放置灰色圖示（fa-user、fa-envelope），focus 時圖示轉為主色。',
        '適合用於登入或簡約風格表單，兩個欄位上下排列。',
      ],
      html: `<div class="w-80 space-y-6">
  <label class="group relative flex items-center gap-3 border-b border-line pb-2">
    <i class="fa-regular fa-user text-ink-faint transition-colors group-focus-within:text-brand-600"></i>
    <input type="text" placeholder="帳號" class="flex-1 bg-transparent text-sm text-ink placeholder:text-ink-faint focus:outline-none">
    <span class="absolute -bottom-px left-1/2 h-0.5 w-0 bg-brand-600 transition-all duration-300 group-focus-within:left-0 group-focus-within:w-full"></span>
  </label>
  <label class="group relative flex items-center gap-3 border-b border-line pb-2">
    <i class="fa-regular fa-envelope text-ink-faint transition-colors group-focus-within:text-brand-600"></i>
    <input type="email" placeholder="電子郵件" class="flex-1 bg-transparent text-sm text-ink placeholder:text-ink-faint focus:outline-none">
    <span class="absolute -bottom-px left-1/2 h-0.5 w-0 bg-brand-600 transition-all duration-300 group-focus-within:left-0 group-focus-within:w-full"></span>
  </label>
</div>`,
    },
    {
      name: '信用卡資訊輸入',
      en: 'Card Details Input',
      tags: ['付款', '組合欄位'],
      spec: [
        '一個分成上下兩列的組合欄位：上列為卡號（右側顯示 fa-cc-visa、fa-cc-mastercard 品牌圖示），下列平分為到期日與安全碼。',
        '欄位之間以內部 1px 分隔線區隔，外框圓角 12px，整體 focus-within 時轉為主色。',
        '安全碼欄右側附 fa-circle-question 說明圖示。',
      ],
      html: `<div class="w-80">
  <label class="block mb-1.5 text-sm font-medium text-ink">卡片資訊</label>
  <div class="rounded-xl border border-line bg-surface shadow-sm divide-y divide-line focus-within:border-brand-500 focus-within:ring-4 focus-within:ring-brand-500/15 transition">
    <div class="flex items-center h-11 px-3.5 gap-2">
      <i class="fa-regular fa-credit-card text-ink-faint"></i>
      <input type="text" inputmode="numeric" placeholder="1234 1234 1234 1234" class="flex-1 min-w-0 bg-transparent text-sm text-ink placeholder:text-ink-faint tabular-nums focus:outline-none">
      <i class="fa-brands fa-cc-visa text-xl text-[#1a1f71] dark:text-sky-300"></i><i class="fa-brands fa-cc-mastercard text-xl text-[#eb001b]"></i>
    </div>
    <div class="grid grid-cols-2 divide-x divide-line">
      <input type="text" placeholder="MM / YY" class="h-11 px-3.5 bg-transparent text-sm text-ink placeholder:text-ink-faint focus:outline-none">
      <div class="flex items-center pr-3.5"><input type="text" placeholder="CVC" class="flex-1 min-w-0 h-11 px-3.5 bg-transparent text-sm text-ink placeholder:text-ink-faint focus:outline-none"><i class="fa-regular fa-circle-question text-ink-faint"></i></div>
    </div>
  </div>
</div>`,
    },
    {
      name: '日期區間輸入',
      en: 'Date Range Field',
      tags: ['日期', '區間'],
      spec: [
        '一個外框中包含「開始日期」與「結束日期」兩個欄位，中間以 fa-arrow-right 圖示連接。',
        '每個欄位上方有 11px 灰色小標籤，下方為日期值；左側有 fa-calendar 圖示。',
        '欄位可點擊並 hover 時顯示淺灰背景，使用原生 type="date"。',
      ],
      html: `<div class="flex items-center rounded-xl border border-line bg-surface shadow-sm p-1">
  <i class="fa-regular fa-calendar pl-2.5 pr-1 text-ink-faint"></i>
  <label class="px-2.5 py-1.5 rounded-lg hover:bg-subtle cursor-pointer">
    <span class="block text-[11px] text-ink-faint">開始日期</span>
    <input type="date" value="2026-11-10" class="bg-transparent text-sm font-medium text-ink focus:outline-none">
  </label>
  <i class="fa-solid fa-arrow-right text-[11px] text-ink-faint"></i>
  <label class="px-2.5 py-1.5 rounded-lg hover:bg-subtle cursor-pointer">
    <span class="block text-[11px] text-ink-faint">結束日期</span>
    <input type="date" value="2026-11-14" class="bg-transparent text-sm font-medium text-ink focus:outline-none">
  </label>
</div>`,
    },
    {
      name: '自訂下拉選單',
      en: 'Styled Select',
      tags: ['下拉', 'Select'],
      spec: [
        '移除原生外觀的 select，右側以 fa-chevron-down（實際為上下雙箭頭 fa-sort）作為指示圖示。',
        '左側有對應選項含義的圖示（fa-user-shield），高度 40px、圓角 10px。',
        '下方另一個選單示範停用狀態：背景淺灰、文字變淡、游標 not-allowed。',
      ],
      html: `<div class="w-72 space-y-4">
  <div>
    <label class="block mb-1.5 text-sm font-medium text-ink" for="sel-role">成員角色</label>
    <div class="relative">
      <i class="fa-solid fa-user-shield absolute left-3 top-1/2 -translate-y-1/2 text-xs text-ink-faint pointer-events-none"></i>
      <select id="sel-role" class="w-full h-10 pl-9 pr-9 rounded-[10px] border border-line bg-surface text-sm text-ink shadow-sm appearance-none cursor-pointer focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition"><option>管理員</option><option selected>編輯者</option><option>檢視者</option></select>
      <i class="fa-solid fa-sort absolute right-3 top-1/2 -translate-y-1/2 text-xs text-ink-faint pointer-events-none"></i>
    </div>
  </div>
  <div>
    <label class="block mb-1.5 text-sm font-medium text-ink-faint" for="sel-dis">計費週期（已鎖定）</label>
    <div class="relative">
      <select id="sel-dis" disabled class="w-full h-10 pl-3 pr-9 rounded-[10px] border border-line bg-subtle text-sm text-ink-faint appearance-none cursor-not-allowed"><option>年繳</option></select>
      <i class="fa-solid fa-lock absolute right-3 top-1/2 -translate-y-1/2 text-xs text-ink-faint pointer-events-none"></i>
    </div>
  </div>
</div>`,
    },
    {
      name: '電子報訂閱列',
      en: 'Newsletter Signup',
      tags: ['行銷', '行內表單'],
      spec: [
        '一個膠囊外框內含電子郵件輸入與右側深色「訂閱」按鈕，按鈕嵌在外框內距 4px 中。',
        '輸入框左側有 fa-envelope 圖示；下方以小字與 fa-lock 說明隱私。',
        '整體寬度 400px，focus-within 時外框光暈。',
      ],
      html: `<div class="w-[400px] max-w-full">
  <form onsubmit="event.preventDefault()" class="flex items-center h-12 p-1 pl-4 rounded-full border border-line bg-surface shadow-soft focus-within:ring-4 focus-within:ring-brand-500/15 focus-within:border-brand-500 transition">
    <i class="fa-regular fa-envelope text-ink-faint"></i>
    <input type="email" placeholder="輸入你的電子郵件" class="flex-1 min-w-0 px-3 bg-transparent text-sm text-ink placeholder:text-ink-faint focus:outline-none">
    <button type="submit" class="h-full px-5 rounded-full bg-ink text-canvas text-sm font-medium hover:opacity-85 transition">訂閱</button>
  </form>
  <p class="mt-2.5 pl-4 text-xs text-ink-faint"><i class="fa-solid fa-lock mr-1"></i>每月一封，隨時可以取消訂閱。</p>
</div>`,
    },
    {
      name: 'AI 對話輸入列',
      en: 'AI Prompt Composer',
      tags: ['AI', '聊天'],
      spec: [
        '大圓角（20px）的多行輸入卡片，上方為文字輸入區，下方工具列放置附件、網頁搜尋、模型選擇膠囊。',
        '右下角為圓形深色送出按鈕 fa-arrow-up；輸入區 focus-within 時外框加深並出現柔和陰影。',
        '模型膠囊顯示 fa-microchip 圖示與模型名稱，hover 時淺灰背景。',
      ],
      html: `<div class="w-[440px] max-w-full rounded-[20px] border border-line bg-surface shadow-soft focus-within:shadow-lift focus-within:border-ink-faint/50 transition">
  <textarea rows="2" placeholder="想做什麼？描述你的需求…" class="block w-full px-4 pt-4 bg-transparent text-sm text-ink placeholder:text-ink-faint resize-none focus:outline-none"></textarea>
  <div class="flex items-center gap-1 p-2">
    <button type="button" aria-label="附加檔案" class="w-8 h-8 rounded-full grid place-items-center text-ink-soft hover:bg-subtle"><i class="fa-solid fa-plus text-sm"></i></button>
    <button type="button" class="h-8 px-3 rounded-full flex items-center gap-1.5 text-xs font-medium text-ink-soft hover:bg-subtle"><i class="fa-solid fa-globe"></i>搜尋網路</button>
    <button type="button" class="h-8 px-3 rounded-full flex items-center gap-1.5 text-xs font-medium text-ink-soft hover:bg-subtle"><i class="fa-solid fa-microchip"></i>進階模型<i class="fa-solid fa-chevron-down text-[9px]"></i></button>
    <button type="button" aria-label="送出" class="ml-auto w-8 h-8 rounded-full bg-ink text-canvas grid place-items-center hover:opacity-85"><i class="fa-solid fa-arrow-up text-sm"></i></button>
  </div>
</div>`,
    },
    {
      name: '搜尋建議下拉',
      en: 'Search with Suggestions',
      tags: ['自動完成', '搜尋'],
      spec: [
        '搜尋框下方展開建議清單，分為「最近搜尋」（fa-clock-rotate-left）與「推薦結果」兩組。',
        '推薦結果有方形圖示、標題與分類說明，第一筆為鍵盤選取中的高亮狀態並顯示 fa-arrow-turn-down 的 Enter 提示。',
        '清單白底、圓角 14px、柔和陰影，與輸入框間距 8px。',
      ],
      html: `<div class="w-96 max-w-full">
  <label class="relative block">
    <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-ink-faint"></i>
    <input type="search" value="儀表" class="w-full h-10 pl-9 pr-3 rounded-[10px] border border-brand-500 ring-4 ring-brand-500/15 bg-surface text-sm text-ink focus:outline-none">
  </label>
  <div class="mt-2 p-1.5 rounded-[14px] border border-line bg-surface shadow-lift">
    <p class="px-2.5 pt-1.5 pb-1 text-[11px] font-semibold text-ink-faint">最近搜尋</p>
    <a href="#" onclick="return false" class="flex items-center gap-2.5 px-2.5 h-8 rounded-lg text-sm text-ink-soft hover:bg-subtle"><i class="fa-solid fa-clock-rotate-left text-xs text-ink-faint"></i>儀表板範本</a>
    <p class="px-2.5 pt-2.5 pb-1 text-[11px] font-semibold text-ink-faint">推薦結果</p>
    <a href="#" onclick="return false" class="flex items-center gap-3 px-2.5 py-2 rounded-lg bg-subtle">
      <span class="w-8 h-8 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 grid place-items-center"><i class="fa-solid fa-gauge-high text-sm"></i></span>
      <span class="flex-1 min-w-0"><span class="block text-sm font-medium text-ink"><mark class="bg-transparent text-brand-600 dark:text-brand-400">儀表</mark>板總覽</span><span class="block text-xs text-ink-faint">頁面</span></span>
      <i class="fa-solid fa-arrow-turn-down rotate-90 text-[11px] text-ink-faint"></i>
    </a>
    <a href="#" onclick="return false" class="flex items-center gap-3 px-2.5 py-2 rounded-lg hover:bg-subtle">
      <span class="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 grid place-items-center"><i class="fa-solid fa-chart-line text-sm"></i></span>
      <span class="flex-1 min-w-0"><span class="block text-sm font-medium text-ink">銷售<mark class="bg-transparent text-brand-600 dark:text-brand-400">儀表</mark>元件</span><span class="block text-xs text-ink-faint">元件庫</span></span>
    </a>
  </div>
</div>`,
    },
    {
      name: '精簡登入表單',
      en: 'Compact Sign-in Form',
      tags: ['登入', '表單卡片'],
      spec: [
        '白底卡片，頂部置中品牌圖示（深色方塊內 fa-shapes）、標題「歡迎回來」與副標。',
        '包含電子郵件、密碼兩個欄位，密碼標籤右側有「忘記密碼？」連結；下方「記住我」核取方塊與全寬主要按鈕。',
        '卡片底部以分隔線隔開「還沒有帳號？立即註冊」。卡片寬 340px、圓角 18px、內距 28px。',
      ],
      html: `<form onsubmit="event.preventDefault()" class="w-[340px] max-w-full p-7 rounded-[18px] border border-line bg-surface shadow-soft">
  <div class="text-center">
    <span class="mx-auto w-10 h-10 rounded-xl bg-ink text-canvas grid place-items-center"><i class="fa-solid fa-shapes"></i></span>
    <h3 class="mt-4 text-lg font-semibold text-ink">歡迎回來</h3>
    <p class="mt-1 text-sm text-ink-faint">登入以繼續使用你的工作區</p>
  </div>
  <div class="mt-6 space-y-4">
    <div><label class="block mb-1.5 text-sm font-medium text-ink" for="si-mail">電子郵件</label><input id="si-mail" type="email" placeholder="you@company.com" class="w-full h-10 px-3 rounded-[10px] border border-line bg-surface text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition"></div>
    <div><div class="flex justify-between mb-1.5"><label class="text-sm font-medium text-ink" for="si-pw">密碼</label><a href="#" onclick="return false" class="text-xs font-medium text-brand-600 dark:text-brand-400 hover:underline">忘記密碼？</a></div><input id="si-pw" type="password" value="password" class="w-full h-10 px-3 rounded-[10px] border border-line bg-surface text-sm text-ink focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition"></div>
    <label class="flex items-center gap-2 text-sm text-ink-soft"><input type="checkbox" checked class="w-4 h-4 rounded accent-brand-600">記住我</label>
    <button type="submit" class="w-full h-10 rounded-[10px] bg-ink text-canvas text-sm font-medium hover:opacity-85 transition">登入</button>
  </div>
  <p class="mt-6 pt-5 border-t border-line text-center text-sm text-ink-faint">還沒有帳號？<a href="#" onclick="return false" class="font-medium text-ink hover:underline">立即註冊</a></p>
</form>`,
    },
    {
      name: '行內編輯標題',
      en: 'Inline Editable Title',
      tags: ['行內編輯', 'contenteditable'],
      spec: [
        '頁面標題平時為純文字，hover 時出現淺灰底與右側 fa-pen 圖示，點擊即可直接編輯（contenteditable）。',
        '編輯中顯示主色外框與光暈，下方以小字提示「按 Enter 儲存，Esc 取消」。',
        '標題 20px 粗體，編輯前後版面不跳動。',
      ],
      html: `<div class="w-80">
  <p class="text-xs font-medium text-ink-faint mb-1">專案名稱</p>
  <div class="group relative -mx-2">
    <h4 contenteditable="true" spellcheck="false" onkeydown="if(event.key==='Enter'){event.preventDefault();this.blur()}" class="px-2 py-1 pr-8 rounded-lg text-xl font-semibold text-ink hover:bg-subtle focus:bg-surface focus:outline-none focus:ring-2 focus:ring-brand-500 focus:shadow-[0_0_0_6px_rgb(99_102_241/.12)] transition">2026 品牌識別更新</h4>
    <i class="fa-solid fa-pen absolute right-3 top-1/2 -translate-y-1/2 text-xs text-ink-faint opacity-0 group-hover:opacity-100 group-focus-within:opacity-0 pointer-events-none transition"></i>
  </div>
  <p class="mt-1.5 text-xs text-ink-faint">點擊標題即可編輯，按 Enter 儲存</p>
</div>`,
    },
    {
      name: '範圍搜尋框',
      en: 'Scoped Search Input',
      tags: ['搜尋', '下拉'],
      spec: [
        '搜尋框左側內嵌一個範圍選擇（全部 / 文件 / 成員 / 專案），以細分隔線與輸入區隔開。',
        '中間為搜尋輸入，右側為深色正方形搜尋按鈕 fa-magnifying-glass。',
        '整體高度 44px、圓角 12px，focus-within 時外框主色光暈。',
      ],
      html: `<form onsubmit="event.preventDefault()" class="w-[420px] max-w-full flex items-center h-11 p-1 rounded-xl border border-line bg-surface shadow-sm focus-within:border-brand-500 focus-within:ring-4 focus-within:ring-brand-500/15 transition">
  <div class="relative h-full">
    <select aria-label="搜尋範圍" class="h-full pl-3 pr-7 rounded-lg bg-transparent text-sm font-medium text-ink appearance-none cursor-pointer hover:bg-subtle focus:outline-none"><option>全部</option><option>文件</option><option>成員</option><option>專案</option></select>
    <i class="fa-solid fa-chevron-down absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] text-ink-faint pointer-events-none"></i>
  </div>
  <span class="w-px h-5 bg-line mx-1"></span>
  <input type="search" placeholder="輸入關鍵字" class="flex-1 min-w-0 px-2 bg-transparent text-sm text-ink placeholder:text-ink-faint focus:outline-none">
  <button type="submit" aria-label="搜尋" class="w-9 h-full rounded-lg bg-ink text-canvas grid place-items-center hover:opacity-85"><i class="fa-solid fa-magnifying-glass text-xs"></i></button>
</form>`,
    },
    {
      name: '時間選擇輸入',
      en: 'Time Picker Field',
      tags: ['時間', '分段'],
      spec: [
        '左側 fa-clock 圖示與時、分兩個等寬數字輸入格（以冒號分隔），右側為「上午 / 下午」分段切換。',
        '數字格為 type="number"，隱藏原生上下箭頭，focus 時格子出現淺主色底。',
        '下方提供四個常用時間的快捷膠囊。',
      ],
      html: `<div class="w-80">
  <label class="block mb-1.5 text-sm font-medium text-ink">會議時間</label>
  <div class="flex items-center gap-2 h-11 pl-3 pr-1 rounded-xl border border-line bg-surface shadow-sm focus-within:border-brand-500 focus-within:ring-4 focus-within:ring-brand-500/15 transition">
    <i class="fa-regular fa-clock text-ink-faint"></i>
    <input type="number" min="1" max="12" value="10" aria-label="時" class="w-9 h-8 rounded-md text-center text-base font-semibold font-mono text-ink bg-transparent focus:bg-brand-500/10 focus:outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none">
    <span class="font-semibold text-ink-faint">:</span>
    <input type="number" min="0" max="59" value="30" aria-label="分" class="w-9 h-8 rounded-md text-center text-base font-semibold font-mono text-ink bg-transparent focus:bg-brand-500/10 focus:outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none">
    <div data-pick data-on="bg-surface text-ink shadow-sm" data-off="text-ink-faint" class="ml-auto inline-flex p-0.5 rounded-lg bg-subtle text-xs font-medium">
      <button type="button" data-item aria-selected="true" onclick="UIK.pick(this)" class="h-8 px-2.5 rounded-md bg-surface text-ink shadow-sm">上午</button>
      <button type="button" data-item onclick="UIK.pick(this)" class="h-8 px-2.5 rounded-md text-ink-faint">下午</button>
    </div>
  </div>
  <div class="mt-2.5 flex gap-1.5 text-xs"><button type="button" class="h-7 px-2.5 rounded-full bg-subtle text-ink-soft hover:text-ink">09:00</button><button type="button" class="h-7 px-2.5 rounded-full bg-subtle text-ink-soft hover:text-ink">13:30</button><button type="button" class="h-7 px-2.5 rounded-full bg-subtle text-ink-soft hover:text-ink">15:00</button><button type="button" class="h-7 px-2.5 rounded-full bg-subtle text-ink-soft hover:text-ink">17:30</button></div>
</div>`,
    },
    {
      name: '顏色輸入框',
      en: 'Color Input',
      tags: ['顏色', '色碼'],
      spec: [
        '左側為圓角色塊（原生 type="color"，外觀改為 28px 圓角方塊），右側為 HEX 色碼文字輸入，兩者同步更新。',
        '下方為一排預設色票，點擊後同時更新色塊與色碼。',
        '色碼使用等寬字體並自動轉為大寫。',
      ],
      html: `<div class="w-72">
  <label class="block mb-1.5 text-sm font-medium text-ink">品牌主色</label>
  <div class="flex items-center gap-2 h-10 pl-1.5 pr-3 rounded-[10px] border border-line bg-surface shadow-sm focus-within:border-brand-500 focus-within:ring-4 focus-within:ring-brand-500/15 transition">
    <input type="color" value="#4f46e5" aria-label="選擇顏色" oninput="this.nextElementSibling.value=this.value.toUpperCase()" class="w-7 h-7 rounded-md cursor-pointer bg-transparent border-0 p-0 [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:rounded-md [&::-webkit-color-swatch]:border-0">
    <input type="text" value="#4F46E5" aria-label="色碼" oninput="if(/^#[0-9a-f]{6}$/i.test(this.value))this.previousElementSibling.value=this.value" class="flex-1 min-w-0 bg-transparent text-sm font-mono uppercase text-ink focus:outline-none">
    <i class="fa-solid fa-eye-dropper text-xs text-ink-faint"></i>
  </div>
  <div class="mt-3 flex gap-2">
    <button type="button" aria-label="#4F46E5" onclick="const r=this.parentElement.previousElementSibling;r.children[0].value='#4f46e5';r.children[1].value='#4F46E5'" class="w-6 h-6 rounded-md bg-[#4f46e5] ring-1 ring-black/10"></button>
    <button type="button" aria-label="#0EA5E9" onclick="const r=this.parentElement.previousElementSibling;r.children[0].value='#0ea5e9';r.children[1].value='#0EA5E9'" class="w-6 h-6 rounded-md bg-[#0ea5e9] ring-1 ring-black/10"></button>
    <button type="button" aria-label="#10B981" onclick="const r=this.parentElement.previousElementSibling;r.children[0].value='#10b981';r.children[1].value='#10B981'" class="w-6 h-6 rounded-md bg-[#10b981] ring-1 ring-black/10"></button>
    <button type="button" aria-label="#F59E0B" onclick="const r=this.parentElement.previousElementSibling;r.children[0].value='#f59e0b';r.children[1].value='#F59E0B'" class="w-6 h-6 rounded-md bg-[#f59e0b] ring-1 ring-black/10"></button>
    <button type="button" aria-label="#F43F5E" onclick="const r=this.parentElement.previousElementSibling;r.children[0].value='#f43f5e';r.children[1].value='#F43F5E'" class="w-6 h-6 rounded-md bg-[#f43f5e] ring-1 ring-black/10"></button>
    <button type="button" aria-label="#18181B" onclick="const r=this.parentElement.previousElementSibling;r.children[0].value='#18181b';r.children[1].value='#18181B'" class="w-6 h-6 rounded-md bg-[#18181b] ring-1 ring-black/10"></button>
  </div>
</div>`,
    },
    {
      name: '留言輸入框',
      en: 'Comment Composer',
      tags: ['留言', '社群'],
      spec: [
        '左側為使用者頭像，右側為圓角輸入卡片：上方多行文字區，下方工具列含粗體、連結、圖片、提及圖示按鈕。',
        '工具列右側為「取消」文字按鈕與主色「留言」按鈕；文字區為空時留言按鈕為停用狀態。',
        'focus-within 時卡片外框轉為主色。',
      ],
      html: `<div class="w-[440px] max-w-full flex gap-3">
  <span class="w-9 h-9 shrink-0 rounded-full bg-gradient-to-br from-amber-300 to-orange-500 text-white grid place-items-center text-sm font-semibold">林</span>
  <div class="flex-1 rounded-xl border border-line bg-surface shadow-sm focus-within:border-brand-500 focus-within:ring-4 focus-within:ring-brand-500/15 transition">
    <textarea rows="2" placeholder="留下你的想法…" oninput="this.parentElement.querySelector('[data-submit]').disabled=!this.value.trim()" class="block w-full px-3.5 pt-3 bg-transparent text-sm text-ink placeholder:text-ink-faint resize-none focus:outline-none"></textarea>
    <div class="flex items-center gap-0.5 p-1.5">
      <button type="button" aria-label="粗體" class="w-8 h-8 rounded-lg grid place-items-center text-ink-faint hover:text-ink hover:bg-subtle"><i class="fa-solid fa-bold text-xs"></i></button>
      <button type="button" aria-label="連結" class="w-8 h-8 rounded-lg grid place-items-center text-ink-faint hover:text-ink hover:bg-subtle"><i class="fa-solid fa-link text-xs"></i></button>
      <button type="button" aria-label="圖片" class="w-8 h-8 rounded-lg grid place-items-center text-ink-faint hover:text-ink hover:bg-subtle"><i class="fa-regular fa-image text-xs"></i></button>
      <button type="button" aria-label="提及" class="w-8 h-8 rounded-lg grid place-items-center text-ink-faint hover:text-ink hover:bg-subtle"><i class="fa-solid fa-at text-xs"></i></button>
      <button type="button" class="ml-auto h-8 px-3 rounded-lg text-xs font-medium text-ink-soft hover:bg-subtle">取消</button>
      <button type="button" data-submit disabled class="h-8 px-3.5 rounded-lg bg-brand-600 text-white text-xs font-semibold hover:bg-brand-500 disabled:opacity-40 disabled:cursor-not-allowed transition">留言</button>
    </div>
  </div>
</div>`,
    },
  ],
});
