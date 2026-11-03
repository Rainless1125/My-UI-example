(window.UI_ATLAS = window.UI_ATLAS || []).push({
  id: 'sections',
  name: '頁面區塊',
  en: 'Page Sections',
  icon: 'fa-solid fa-object-group',
  desc: 'Hero、Logo 牆、功能介紹、數據亮點、定價、評價、FAQ、CTA 與團隊介紹，可直接組合成完整落地頁的大型區塊。',
  items: [
    {
      name: '置中 Hero 區塊',
      en: 'Centered Hero',
      tags: ['Hero', '落地頁'],
      wide: true,
      spec: [
        '置中排版的首屏區塊：頂部為公告膠囊（「NEW」徽章 + 文字 + 箭頭），接著是 48px 粗體主標題，其中關鍵字使用主色到 violet 的漸層文字。',
        '副標題 18px 灰色、最大寬度 560px；下方兩個按鈕：深色「免費開始」與外框「觀看展示」（fa-circle-play）。',
        '按鈕下方以小字與頭像堆疊顯示「超過 12,000 個團隊正在使用」；背景有淡淡的主色徑向光暈與點狀網格。',
      ],
      html: `<section class="relative w-full max-w-4xl px-6 py-16 rounded-3xl bg-surface border border-line overflow-hidden text-center">
  <div class="absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_0%,rgb(99_102_241/.14),transparent_70%)]"></div>
  <div class="absolute inset-0 opacity-60 bg-[radial-gradient(rgb(var(--line))_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]"></div>
  <div class="relative">
    <a href="#" onclick="return false" class="inline-flex items-center gap-2 h-8 pl-1 pr-3 rounded-full border border-line bg-surface text-xs text-ink-soft shadow-sm"><span class="px-2 py-0.5 rounded-full bg-ink text-canvas font-semibold">NEW</span>AI 協作功能正式上線<i class="fa-solid fa-arrow-right text-[10px]"></i></a>
    <h2 class="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-ink leading-tight">讓團隊協作<br class="sm:hidden"><span class="bg-gradient-to-r from-brand-600 to-violet-500 bg-clip-text text-transparent">快上十倍</span></h2>
    <p class="mt-5 mx-auto max-w-[560px] text-lg text-ink-soft">從規劃、設計到交付，所有流程集中在同一個工作區，減少來回溝通的時間。</p>
    <div class="mt-8 flex flex-wrap justify-center gap-3"><button type="button" class="h-11 px-6 rounded-xl bg-ink text-canvas text-sm font-semibold hover:opacity-85">免費開始</button><button type="button" class="h-11 px-6 rounded-xl border border-line bg-surface text-sm font-semibold text-ink hover:bg-subtle"><i class="fa-solid fa-circle-play mr-2"></i>觀看展示</button></div>
    <div class="mt-8 flex items-center justify-center gap-3 text-xs text-ink-faint"><div class="flex -space-x-2"><span class="w-7 h-7 rounded-full ring-2 ring-surface bg-sky-400"></span><span class="w-7 h-7 rounded-full ring-2 ring-surface bg-pink-400"></span><span class="w-7 h-7 rounded-full ring-2 ring-surface bg-amber-400"></span><span class="w-7 h-7 rounded-full ring-2 ring-surface bg-emerald-400"></span></div>超過 <span class="font-semibold text-ink">12,000</span> 個團隊正在使用</div>
  </div>
</section>`,
    },
    {
      name: '左右分欄 Hero',
      en: 'Split Hero with Mockup',
      tags: ['Hero', '產品截圖'],
      wide: true,
      spec: [
        '左右兩欄的首屏：左欄為小標（主色大寫）、主標題、說明、電子郵件輸入加「開始試用」按鈕，以及三個 fa-check 賣點。',
        '右欄為傾斜擺放的產品介面模擬圖：瀏覽器外框、側邊欄與圖表卡片，並有一張浮動的通知卡疊在角落。',
        '窄螢幕時改為上下排列，模擬圖置於文字下方。',
      ],
      html: `<section class="w-full max-w-4xl grid md:grid-cols-2 gap-10 items-center p-8 sm:p-10 rounded-3xl border border-line bg-surface">
  <div>
    <p class="text-xs font-semibold uppercase tracking-[.18em] text-brand-600 dark:text-brand-400">數據分析平台</p>
    <h2 class="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-ink leading-tight">看懂你的數據，<br>做出更好的決策</h2>
    <p class="mt-4 text-ink-soft">串接 200+ 資料來源，自動產生報表與洞察，不需要寫任何 SQL。</p>
    <form onsubmit="event.preventDefault()" class="mt-6 flex gap-2"><input type="email" placeholder="公司電子郵件" class="flex-1 min-w-0 h-11 px-4 rounded-xl border border-line bg-surface text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"><button type="submit" class="h-11 px-5 rounded-xl bg-brand-600 text-white text-sm font-semibold hover:bg-brand-500">開始試用</button></form>
    <ul class="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-ink-soft"><li><i class="fa-solid fa-check text-emerald-500 mr-1.5"></i>14 天免費</li><li><i class="fa-solid fa-check text-emerald-500 mr-1.5"></i>不需信用卡</li><li><i class="fa-solid fa-check text-emerald-500 mr-1.5"></i>隨時取消</li></ul>
  </div>
  <div class="relative [perspective:1200px]">
    <div class="rounded-2xl border border-line bg-surface shadow-lift overflow-hidden [transform:rotateY(-10deg)_rotateX(4deg)]">
      <div class="flex items-center gap-1.5 px-3 h-8 bg-subtle border-b border-line"><span class="w-2 h-2 rounded-full bg-rose-400"></span><span class="w-2 h-2 rounded-full bg-amber-400"></span><span class="w-2 h-2 rounded-full bg-emerald-400"></span></div>
      <div class="flex h-48"><div class="w-14 border-r border-line p-2 space-y-2"><span class="block h-2 rounded bg-brand-500/40"></span><span class="block h-2 rounded bg-subtle"></span><span class="block h-2 rounded bg-subtle"></span><span class="block h-2 rounded bg-subtle"></span></div>
        <div class="flex-1 p-3 space-y-2"><div class="grid grid-cols-3 gap-2"><span class="h-10 rounded-lg bg-subtle"></span><span class="h-10 rounded-lg bg-subtle"></span><span class="h-10 rounded-lg bg-brand-500/15"></span></div><div class="h-24 rounded-lg bg-subtle flex items-end gap-1.5 p-2"><span class="flex-1 h-[40%] rounded-sm bg-brand-500/40"></span><span class="flex-1 h-[60%] rounded-sm bg-brand-500/40"></span><span class="flex-1 h-[50%] rounded-sm bg-brand-500/40"></span><span class="flex-1 h-[85%] rounded-sm bg-brand-600"></span><span class="flex-1 h-[70%] rounded-sm bg-brand-500/40"></span></div></div></div>
    </div>
    <div class="absolute -left-4 -bottom-4 flex items-center gap-2.5 p-3 rounded-xl border border-line bg-surface shadow-lift text-xs"><span class="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 grid place-items-center"><i class="fa-solid fa-arrow-trend-up"></i></span><div><p class="font-semibold text-ink">轉換率 +24%</p><p class="text-ink-faint">與上月相比</p></div></div>
  </div>
</section>`,
    },
    {
      name: '合作夥伴 Logo 牆',
      en: 'Logo Cloud',
      tags: ['社會證明', '品牌'],
      wide: true,
      spec: [
        '上方置中小字「深受全球團隊信賴」，下方為 6 個品牌標誌（fa-brands 圖示 + 名稱）以灰階排列。',
        '標誌 hover 時恢復為深色並微微放大；兩側以漸層遮罩淡出。',
        '窄螢幕時為 3 欄網格，寬螢幕為單列平均分佈。',
      ],
      html: `<section class="w-full max-w-4xl py-10 px-6 rounded-3xl border border-line bg-surface">
  <p class="text-center text-xs font-medium uppercase tracking-[.18em] text-ink-faint">深受全球團隊信賴</p>
  <div class="mt-6 grid grid-cols-3 sm:grid-cols-6 gap-y-6 [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
${[['fa-spotify', 'Spotify'], ['fa-airbnb', 'Airbnb'], ['fa-slack', 'Slack'], ['fa-dropbox', 'Dropbox'], ['fa-shopify', 'Shopify'], ['fa-stripe-s', 'Stripe']].map(([i, n]) => `    <span class="flex items-center justify-center gap-2 text-ink-faint/80 hover:text-ink hover:scale-105 transition"><i class="fa-brands ${i} text-xl"></i><span class="font-semibold text-sm">${n}</span></span>`).join('\n')}
  </div>
</section>`,
    },
    {
      name: '三欄功能介紹',
      en: 'Feature Grid',
      tags: ['功能', '網格'],
      wide: true,
      spec: [
        '區塊頂部置中：小標、主標題與說明；下方為 3 欄 × 2 列的功能卡片網格。',
        '每張卡片為 40px 主色淡底圓角圖示方塊、粗體標題與兩行說明，卡片無外框，hover 時出現淺灰底。',
        '圖示分別為 fa-bolt、fa-shield-halved、fa-plug、fa-chart-line、fa-users、fa-mobile-screen。',
      ],
      html: `<section class="w-full max-w-4xl p-8 sm:p-10 rounded-3xl border border-line bg-surface">
  <div class="text-center max-w-xl mx-auto"><p class="text-xs font-semibold uppercase tracking-[.18em] text-brand-600 dark:text-brand-400">功能</p><h2 class="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-ink">一個平台，滿足所有需求</h2><p class="mt-3 text-ink-soft">不再需要在多個工具之間切換。</p></div>
  <div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
${[['fa-bolt', '極速效能', '全球節點部署，頁面載入不到 1 秒。'], ['fa-shield-halved', '企業級安全', 'SOC 2 認證與端對端加密保護。'], ['fa-plug', '豐富整合', '串接 Slack、GitHub 等 200+ 工具。'], ['fa-chart-line', '即時報表', '每個指標都能即時追蹤與匯出。'], ['fa-users', '多人協作', '同步編輯、留言與指派任務。'], ['fa-mobile-screen', '行動支援', 'iOS 與 Android App 隨時處理工作。']].map(([i, t, d]) => `    <div class="p-5 rounded-2xl hover:bg-subtle transition"><span class="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 grid place-items-center"><i class="fa-solid ${i}"></i></span><h3 class="mt-4 font-semibold text-ink">${t}</h3><p class="mt-1.5 text-sm text-ink-soft leading-relaxed">${d}</p></div>`).join('\n')}
  </div>
</section>`,
    },
    {
      name: '數據亮點橫帶',
      en: 'Stats Band',
      tags: ['數據', '社會證明'],
      wide: true,
      spec: [
        '深色背景（zinc-900）的橫向數據帶，分為四欄：每欄為 36px 粗體白色數字與灰色說明文字。',
        '數字中的單位（k、%、+）以較小字級與主色淡色顯示；欄與欄之間以白色 10% 垂直線分隔。',
        '左上角有主色徑向光暈裝飾。',
      ],
      html: `<section class="relative w-full max-w-4xl px-8 py-10 rounded-3xl bg-zinc-900 text-white overflow-hidden">
  <div class="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-indigo-500/30 blur-3xl"></div>
  <div class="relative grid grid-cols-2 sm:grid-cols-4 gap-y-8 sm:divide-x sm:divide-white/10 text-center">
${[['12', 'k+', '活躍團隊'], ['99.99', '%', '服務可用率'], ['40', '+', '支援國家'], ['4.9', '/5', '用戶評分']].map(([n, u, l]) => `    <div><p class="text-4xl font-bold tracking-tight tabular-nums">${n}<span class="text-xl text-indigo-300">${u}</span></p><p class="mt-1 text-sm text-zinc-400">${l}</p></div>`).join('\n')}
  </div>
</section>`,
    },
    {
      name: '定價區塊',
      en: 'Pricing Section',
      tags: ['定價', '方案'],
      wide: true,
      spec: [
        '區塊標題與月繳 / 年繳切換置中，下方三張方案卡並排：入門、專業（推薦，深色背景並略微放大）、企業。',
        '每張卡片包含方案名稱、價格、說明、主要按鈕與三到四項功能清單（fa-check）。',
        '推薦卡片頂部有「最受歡迎」漸層膠囊，其餘卡片為白底細框。',
      ],
      html: `<section class="w-full max-w-4xl p-8 rounded-3xl border border-line bg-surface">
  <div class="text-center"><h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-ink">簡單透明的價格</h2><p class="mt-2 text-ink-soft">所有方案皆可免費試用 14 天</p></div>
  <div class="mt-8 grid md:grid-cols-3 gap-4 items-center">
    <div class="p-6 rounded-2xl border border-line"><p class="font-semibold text-ink">入門</p><p class="mt-3 text-3xl font-bold text-ink">$0</p><p class="mt-1 text-xs text-ink-faint">個人使用</p><button type="button" class="mt-5 w-full h-10 rounded-xl border border-line text-sm font-medium text-ink hover:bg-subtle">開始使用</button><ul class="mt-5 space-y-2 text-sm text-ink-soft"><li><i class="fa-solid fa-check text-emerald-500 mr-2"></i>3 個專案</li><li><i class="fa-solid fa-check text-emerald-500 mr-2"></i>5 GB 空間</li></ul></div>
    <div class="relative p-6 rounded-2xl bg-zinc-900 text-white shadow-lift md:scale-105"><span class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-brand-500 to-violet-500 text-[11px] font-semibold">最受歡迎</span><p class="font-semibold">專業</p><p class="mt-3 text-3xl font-bold">$24<span class="text-sm font-normal text-zinc-400"> / 月</span></p><p class="mt-1 text-xs text-zinc-400">成長中的團隊</p><button type="button" class="mt-5 w-full h-10 rounded-xl bg-white text-zinc-900 text-sm font-semibold hover:bg-zinc-200">免費試用</button><ul class="mt-5 space-y-2 text-sm text-zinc-300"><li><i class="fa-solid fa-check text-indigo-300 mr-2"></i>無限專案</li><li><i class="fa-solid fa-check text-indigo-300 mr-2"></i>100 GB 空間</li><li><i class="fa-solid fa-check text-indigo-300 mr-2"></i>進階分析</li></ul></div>
    <div class="p-6 rounded-2xl border border-line"><p class="font-semibold text-ink">企業</p><p class="mt-3 text-3xl font-bold text-ink">洽詢</p><p class="mt-1 text-xs text-ink-faint">大型組織</p><button type="button" class="mt-5 w-full h-10 rounded-xl border border-line text-sm font-medium text-ink hover:bg-subtle">聯絡業務</button><ul class="mt-5 space-y-2 text-sm text-ink-soft"><li><i class="fa-solid fa-check text-emerald-500 mr-2"></i>SSO 與稽核</li><li><i class="fa-solid fa-check text-emerald-500 mr-2"></i>專屬客服</li></ul></div>
  </div>
</section>`,
    },
    {
      name: '用戶評價牆',
      en: 'Testimonial Wall',
      tags: ['評價', '瀑布流'],
      wide: true,
      spec: [
        '區塊標題「用戶怎麼說」與平均評分（五顆星 + 4.9 / 5），下方為三欄瀑布流（CSS columns）的評價卡片。',
        '每張卡片為評價內文、作者頭像、姓名與職稱；卡片高度依內容不同而自然錯落。',
        '其中一張以主色淡底強調，作為精選評價。',
      ],
      html: `<section class="w-full max-w-4xl p-8 rounded-3xl border border-line bg-surface">
  <div class="flex flex-wrap items-end justify-between gap-3"><h2 class="text-2xl font-bold tracking-tight text-ink">用戶怎麼說</h2><p class="text-sm text-ink-soft"><span class="text-amber-400"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span> <span class="font-semibold text-ink">4.9</span> / 5，來自 2,400+ 則評價</p></div>
  <div class="mt-6 columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4 [&>*]:break-inside-avoid">
${[['導入三個月後，專案準時交付率從 60% 提升到 92%。', '張美玲', '專案經理 · Lumen', 'bg-pink-500', false], ['終於有一個工具同時讓設計師和工程師都滿意，交接再也不用開長會。我們整個部門都換過來了。', '陳柏宇', '設計總監 · Pixel', 'bg-sky-500', true], ['客服回覆很快，功能更新的速度也讓人驚豔。', '林雨晴', '創辦人 · Bloom', 'bg-amber-500', false], ['報表功能幫我們每週省下至少 5 小時的整理時間。', '黃俊傑', '營運長 · Nimbus', 'bg-emerald-500', false], ['介面乾淨直覺，新同事第一天就能上手。', '吳佳蓉', 'HR · Atlas', 'bg-violet-500', false]].map(([q, n, r, c, hl]) => `    <figure class="p-5 rounded-2xl ${hl ? 'bg-brand-500/[.07] border border-brand-500/20' : 'border border-line'}"><blockquote class="text-sm leading-relaxed text-ink">${q}</blockquote><figcaption class="mt-4 flex items-center gap-2.5"><span class="w-8 h-8 rounded-full ${c} text-white grid place-items-center text-xs font-semibold">${n[0]}</span><span><span class="block text-[13px] font-semibold text-ink">${n}</span><span class="block text-[11px] text-ink-faint">${r}</span></span></figcaption></figure>`).join('\n')}
  </div>
</section>`,
    },
    {
      name: '雙欄 FAQ 區塊',
      en: 'FAQ Section',
      tags: ['FAQ', '手風琴'],
      wide: true,
      spec: [
        '左欄為標題「常見問題」、說明文字與「聯絡客服」連結（fa-headset）；右欄為手風琴問答列表。',
        '每題以分隔線區隔，右側為 fa-chevron-down，展開時旋轉 180 度並平滑展開答案。',
        '左欄在寬螢幕時佔 1/3 寬度並保持在頂部。',
      ],
      html: `<section class="w-full max-w-4xl grid md:grid-cols-[1fr_2fr] gap-10 p-8 sm:p-10 rounded-3xl border border-line bg-surface">
  <div><h2 class="text-2xl font-bold tracking-tight text-ink">常見問題</h2><p class="mt-3 text-sm text-ink-soft leading-relaxed">找不到答案嗎？我們的團隊很樂意協助你。</p><a href="#" onclick="return false" class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400"><i class="fa-solid fa-headset"></i>聯絡客服</a></div>
  <div data-single class="divide-y divide-line border-y border-line">
${[['可以隨時更換方案嗎？', '可以。升級會立即生效並按比例計費，降級則於下個計費週期生效。', true], ['資料會不會被拿去訓練 AI？', '不會。你的資料只屬於你，我們不會使用客戶資料訓練任何模型。', false], ['支援哪些付款方式？', '支援信用卡、Apple Pay 與銀行轉帳，企業方案亦可開立發票。', false]].map(([q, a, open]) => `    <div><button type="button" aria-expanded="${open}" onclick="UIK.acc(this)" class="w-full flex items-center justify-between gap-4 py-4 text-left font-medium text-ink">${q}<i data-chevron ${open ? 'style="transform:rotate(180deg)"' : ''} class="fa-solid fa-chevron-down text-xs text-ink-faint transition-transform duration-300"></i></button><div class="grid transition-[grid-template-rows] duration-300" style="grid-template-rows:${open ? '1fr' : '0fr'}"><div class="overflow-hidden"><p class="pb-4 text-sm text-ink-soft leading-relaxed">${a}</p></div></div></div>`).join('\n')}
  </div>
</section>`,
    },
    {
      name: '電子報 CTA 區塊',
      en: 'Newsletter CTA Section',
      tags: ['CTA', '訂閱'],
      wide: true,
      spec: [
        '主色到 violet 漸層背景的大型區塊，左側為白色標題與說明，右側為白色半透明輸入框與白色「訂閱」按鈕。',
        '輸入框下方以小字說明訂閱人數與隱私承諾（fa-lock）。',
        '背景右下有大型半透明 fa-paper-plane 裝飾圖示。',
      ],
      html: `<section class="relative w-full max-w-4xl grid md:grid-cols-2 gap-6 items-center p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-brand-600 to-violet-600 text-white overflow-hidden">
  <i class="fa-solid fa-paper-plane absolute -right-6 -bottom-8 text-[140px] text-white/10 -rotate-12"></i>
  <div class="relative"><h2 class="text-2xl sm:text-3xl font-bold tracking-tight">每週一封，掌握設計趨勢</h2><p class="mt-3 text-white/80">精選文章、工具與案例，直接寄到你的信箱。</p></div>
  <div class="relative">
    <form onsubmit="event.preventDefault()" class="flex gap-2"><input type="email" placeholder="你的電子郵件" class="flex-1 min-w-0 h-12 px-4 rounded-xl bg-white/15 border border-white/25 text-white placeholder:text-white/60 focus:outline-none focus:bg-white/20 focus:ring-4 focus:ring-white/20"><button type="submit" class="h-12 px-5 rounded-xl bg-white text-brand-700 text-sm font-semibold hover:bg-white/90">訂閱</button></form>
    <p class="mt-3 text-xs text-white/70"><i class="fa-solid fa-lock mr-1.5"></i>已有 28,000+ 位訂閱者，隨時可以取消。</p>
  </div>
</section>`,
    },
    {
      name: '團隊成員區塊',
      en: 'Team Section',
      tags: ['團隊', '關於我們'],
      wide: true,
      spec: [
        '區塊標題「認識我們的團隊」與說明，下方為 4 欄成員卡片。',
        '每張卡片為 1:1 圓角漸層頭像區（以姓氏字母代替照片）、姓名、職稱，以及 fa-brands linkedin、x-twitter 社群連結。',
        '頭像區 hover 時輕微放大，最後一欄為虛線外框的「加入我們」徵才卡片。',
      ],
      html: `<section class="w-full max-w-4xl p-8 sm:p-10 rounded-3xl border border-line bg-surface">
  <div class="max-w-lg"><h2 class="text-2xl font-bold tracking-tight text-ink">認識我們的團隊</h2><p class="mt-2 text-ink-soft">一群熱愛設計與工程的人，來自台北、東京與新加坡。</p></div>
  <div class="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-5">
${[['林', '林以晴', '共同創辦人 · 執行長', 'from-sky-400 to-indigo-600'], ['許', '許承恩', '共同創辦人 · 技術長', 'from-emerald-400 to-teal-600'], ['蔡', '蔡宜庭', '設計總監', 'from-pink-400 to-rose-600']].map(([a, n, r, g]) => `    <div class="group"><div class="aspect-square rounded-2xl overflow-hidden"><div class="w-full h-full bg-gradient-to-br ${g} grid place-items-center text-4xl font-bold text-white/90 transition-transform duration-500 group-hover:scale-105">${a}</div></div><p class="mt-3 font-semibold text-ink">${n}</p><p class="text-xs text-ink-faint">${r}</p><div class="mt-2 flex gap-2 text-ink-faint"><a href="#" onclick="return false" aria-label="LinkedIn" class="hover:text-ink"><i class="fa-brands fa-linkedin"></i></a><a href="#" onclick="return false" aria-label="X" class="hover:text-ink"><i class="fa-brands fa-x-twitter"></i></a></div></div>`).join('\n')}
    <a href="#" onclick="return false" class="aspect-square rounded-2xl border-2 border-dashed border-line grid place-items-center text-center hover:border-brand-500 hover:bg-brand-500/[.04] transition"><div><span class="mx-auto w-10 h-10 rounded-full bg-subtle grid place-items-center text-ink-soft"><i class="fa-solid fa-plus"></i></span><p class="mt-3 text-sm font-semibold text-ink">加入我們</p><p class="text-xs text-ink-faint">6 個職缺開放中</p></div></a>
  </div>
</section>`,
    },
  ],
});
