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
    {
      name: '圖文交錯功能區',
      en: 'Alternating Feature Rows',
      tags: ['功能', '圖文'],
      wide: true,
      spec: [
        '兩列功能介紹，每列左右分欄：一側為文字（小標、標題、說明、fa-check 清單與「了解更多」連結），另一側為漸層背景的介面示意圖。',
        '第二列左右對調，形成圖文交錯的節奏。',
        '示意圖為圓角 20px 的卡片，內含簡化的介面元素（長條、圓形、文字條）。',
      ],
      html: `<section class="w-full max-w-4xl p-8 sm:p-10 rounded-3xl border border-line bg-surface space-y-12">
${[['協作', '即時多人編輯', '團隊成員可以同時編輯同一份文件，游標與變更即時同步。', ['即時游標', '版本歷史', '行內留言'], 'from-indigo-100 to-sky-100 dark:from-indigo-500/20 dark:to-sky-500/20', false], ['自動化', '把重複的工作交給系統', '設定觸發條件與動作，自動完成通知、指派與報表寄送。', ['200+ 整合', '視覺化流程編輯', '排程執行'], 'from-emerald-100 to-teal-100 dark:from-emerald-500/20 dark:to-teal-500/20', true]].map(([k, t, d, list, g, rev]) => `  <div class="grid md:grid-cols-2 gap-8 items-center">
    <div class="${rev ? 'md:order-2' : ''}"><p class="text-xs font-semibold uppercase tracking-[.18em] text-brand-600 dark:text-brand-400">${k}</p><h3 class="mt-2 text-2xl font-bold tracking-tight text-ink">${t}</h3><p class="mt-3 text-ink-soft">${d}</p><ul class="mt-4 space-y-2 text-sm text-ink">${list.map((x) => `<li><i class="fa-solid fa-check text-emerald-500 mr-2"></i>${x}</li>`).join('')}</ul><a href="#" onclick="return false" class="mt-5 inline-block text-sm font-semibold text-ink hover:underline">了解更多 <i class="fa-solid fa-arrow-right text-xs"></i></a></div>
    <div class="aspect-[4/3] rounded-[20px] bg-gradient-to-br ${g} p-6 grid place-items-center"><div class="w-full max-w-[260px] p-4 rounded-xl bg-surface shadow-lift space-y-2.5"><div class="flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-brand-500"></span><span class="h-2 w-20 rounded bg-subtle"></span></div><span class="block h-2 w-full rounded bg-subtle"></span><span class="block h-2 w-4/5 rounded bg-subtle"></span><span class="block h-14 rounded-lg bg-brand-500/10"></span></div></div>
  </div>`).join('\n')}
</section>`,
    },
    {
      name: '使用步驟區塊',
      en: 'How It Works',
      tags: ['步驟', '流程'],
      wide: true,
      spec: [
        '「三步驟開始使用」區塊：三欄並排，每欄頂部為主色淡底的大型編號圓（01、02、03），下方為圖示、標題與說明。',
        '欄與欄之間以水平虛線連接編號圓，窄螢幕時改為垂直排列並隱藏連接線。',
        '區塊底部置中一個深色「立即開始」按鈕。',
      ],
      html: `<section class="w-full max-w-4xl p-8 sm:p-10 rounded-3xl border border-line bg-surface text-center">
  <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-ink">三步驟開始使用</h2>
  <p class="mt-2 text-ink-soft">不到五分鐘就能完成設定</p>
  <div class="relative mt-10 grid sm:grid-cols-3 gap-8">
    <div class="hidden sm:block absolute top-6 left-[16.6%] right-[16.6%] border-t-2 border-dashed border-line"></div>
${[['01', 'fa-user-plus', '建立帳號', '使用 Google 或電子郵件，30 秒完成註冊。'], ['02', 'fa-file-import', '匯入資料', '從試算表或其他工具一鍵匯入既有內容。'], ['03', 'fa-rocket', '邀請團隊', '發送邀請連結，馬上開始一起協作。']].map(([n, ic, t, d]) => `    <div class="relative"><span class="mx-auto w-12 h-12 rounded-full bg-surface border-2 border-brand-500 text-brand-600 dark:text-brand-400 grid place-items-center font-bold">${n}</span><i class="fa-solid ${ic} mt-5 text-xl text-ink-soft"></i><h3 class="mt-3 font-semibold text-ink">${t}</h3><p class="mt-1.5 text-sm text-ink-soft">${d}</p></div>`).join('\n')}
  </div>
  <button type="button" class="mt-10 h-11 px-6 rounded-xl bg-ink text-canvas text-sm font-semibold">立即開始</button>
</section>`,
    },
    {
      name: '整合生態系',
      en: 'Integrations Showcase',
      tags: ['整合', '品牌'],
      wide: true,
      spec: [
        '左側為標題「與你常用的工具無縫整合」、說明與「瀏覽所有整合」按鈕；右側為品牌圖示環繞的視覺。',
        '右側中央為產品標誌（深色圓角方塊），外圍兩圈虛線圓軌道上分布 fa-brands 圖示圓片（Slack、GitHub、Figma、Google Drive、Dropbox、Trello）。',
        '圖示圓片為白底細框並帶柔和陰影，外圈軌道緩慢旋轉。',
      ],
      html: `<section class="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center p-8 sm:p-10 rounded-3xl border border-line bg-surface overflow-hidden">
  <div><h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-ink">與你常用的工具<br>無縫整合</h2><p class="mt-3 text-ink-soft">支援超過 200 種應用程式，資料自動同步，不需要寫程式。</p><button type="button" class="mt-6 h-10 px-5 rounded-xl border border-line text-sm font-semibold text-ink hover:bg-subtle">瀏覽所有整合 <i class="fa-solid fa-arrow-right text-xs ml-1"></i></button></div>
  <div class="relative mx-auto w-64 h-64 grid place-items-center">
    <div class="absolute inset-0 rounded-full border border-dashed border-line animate-[spin_40s_linear_infinite]">${[['fa-slack', '#E01E5A', 0], ['fa-github', 'currentColor', 120], ['fa-figma', '#A259FF', 240]].map(([i, c, d]) => `<span class="absolute left-1/2 top-1/2 w-11 h-11 -ml-[22px] -mt-[22px] rounded-full bg-surface border border-line shadow-soft grid place-items-center text-lg text-ink" style="transform:rotate(${d}deg) translateY(-128px) rotate(-${d}deg)"><i class="fa-brands ${i}" style="color:${c}"></i></span>`).join('')}</div>
    <div class="absolute inset-12 rounded-full border border-dashed border-line">${[['fa-google-drive', '#1FA463', 60], ['fa-dropbox', '#0061FF', 200], ['fa-trello', '#0079BF', 310]].map(([i, c, d]) => `<span class="absolute left-1/2 top-1/2 w-10 h-10 -ml-5 -mt-5 rounded-full bg-surface border border-line shadow-soft grid place-items-center text-ink" style="transform:rotate(${d}deg) translateY(-80px) rotate(-${d}deg)"><i class="fa-brands ${i}" style="color:${c}"></i></span>`).join('')}</div>
    <span class="relative w-16 h-16 rounded-2xl bg-ink text-canvas grid place-items-center text-2xl shadow-lift"><i class="fa-solid fa-shapes"></i></span>
  </div>
</section>`,
    },
    {
      name: '影片展示區',
      en: 'Video Showcase',
      tags: ['影片', '展示'],
      wide: true,
      spec: [
        '置中標題與說明下方為 16:9 的影片預覽框：漸層背景與產品介面剪影，中央為白色毛玻璃大圓形播放按鈕（fa-play）。',
        '播放按鈕外圍有緩慢擴散的白色光環，hover 時按鈕放大 110%。',
        '影片框左下角顯示影片長度膠囊「2:48」，下方附三個重點時間軸標籤。',
      ],
      html: `<section class="w-full max-w-4xl p-8 sm:p-10 rounded-3xl border border-line bg-surface text-center">
  <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-ink">三分鐘看懂產品</h2>
  <p class="mt-2 text-ink-soft">從建立專案到交付成果的完整流程</p>
  <div class="group relative mt-8 aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-500 cursor-pointer">
    <div class="absolute inset-8 rounded-xl bg-white/10 border border-white/20"></div>
    <div class="absolute inset-0 grid place-items-center"><span class="relative w-20 h-20 rounded-full bg-white/20 backdrop-blur border border-white/40 grid place-items-center text-white text-2xl group-hover:scale-110 transition"><span class="absolute inset-0 rounded-full border-2 border-white/50 animate-ping [animation-duration:2s]"></span><i class="fa-solid fa-play ml-1"></i></span></div>
    <span class="absolute left-4 bottom-4 px-2 py-0.5 rounded-md bg-black/50 text-white text-xs font-mono">2:48</span>
  </div>
  <div class="mt-4 flex flex-wrap justify-center gap-2 text-xs">${[['0:12', '建立專案'], ['1:05', '邀請成員'], ['2:10', '分享成果']].map(([t, n]) => `<button type="button" class="h-8 px-3 rounded-full bg-subtle text-ink-soft hover:text-ink"><span class="font-mono text-brand-600 dark:text-brand-400 mr-1.5">${t}</span>${n}</button>`).join('')}</div>
</section>`,
    },
    {
      name: '方案對比區塊',
      en: 'Before / After Comparison',
      tags: ['比較', '說服'],
      wide: true,
      spec: [
        '「傳統做法 vs 使用我們」雙欄比較：左欄為灰底，標題附 fa-circle-xmark，清單項目為 rose 色 fa-xmark 與灰色文字。',
        '右欄為主色淡底並有主色外框，標題附 fa-circle-check，清單項目為 emerald fa-check 與深色文字。',
        '區塊頂部置中標題，兩欄等高。',
      ],
      html: `<section class="w-full max-w-4xl p-8 sm:p-10 rounded-3xl border border-line bg-surface">
  <h2 class="text-center text-2xl sm:text-3xl font-bold tracking-tight text-ink">為什麼團隊選擇我們</h2>
  <div class="mt-8 grid md:grid-cols-2 gap-4">
    <div class="p-6 rounded-2xl bg-subtle/70"><p class="font-semibold text-ink-soft"><i class="fa-solid fa-circle-xmark text-rose-500 mr-2"></i>傳統做法</p><ul class="mt-4 space-y-3 text-sm text-ink-soft">${['檔案散落在信箱與聊天群組', '每週花 5 小時整理報表', '版本混亂，不知道哪份是最新', '新人需要兩週才能上手'].map((x) => `<li class="flex gap-2.5"><i class="fa-solid fa-xmark mt-1 text-rose-500 text-xs"></i>${x}</li>`).join('')}</ul></div>
    <div class="p-6 rounded-2xl bg-brand-500/[.06] border border-brand-500/30"><p class="font-semibold text-ink"><i class="fa-solid fa-circle-check text-emerald-500 mr-2"></i>使用 Atlas</p><ul class="mt-4 space-y-3 text-sm text-ink">${['所有資料集中在同一個工作區', '報表自動產生並寄送', '完整版本歷史，一鍵還原', '直覺介面，第一天就能上手'].map((x) => `<li class="flex gap-2.5"><i class="fa-solid fa-check mt-1 text-emerald-500 text-xs"></i>${x}</li>`).join('')}</ul></div>
  </div>
</section>`,
    },
    {
      name: '部落格文章區',
      en: 'Blog Section',
      tags: ['部落格', '內容'],
      wide: true,
      spec: [
        '區塊頂部左側為標題「最新文章」，右側為「查看全部」連結；下方三欄文章卡片。',
        '每張卡片為 16:10 漸層封面、分類標籤與閱讀時間、兩行內的標題，以及作者頭像與日期。',
        '卡片 hover 時封面放大 105%、標題轉為主色。',
      ],
      html: `<section class="w-full max-w-4xl p-8 sm:p-10 rounded-3xl border border-line bg-surface">
  <div class="flex items-end justify-between"><h2 class="text-2xl font-bold tracking-tight text-ink">最新文章</h2><a href="#" onclick="return false" class="text-sm font-medium text-ink-soft hover:text-ink">查看全部 <i class="fa-solid fa-arrow-right text-xs"></i></a></div>
  <div class="mt-6 grid sm:grid-cols-3 gap-5">
${[['設計系統', '如何建立可擴充的色彩 Token', 'from-indigo-300 to-violet-400', '陳', 'bg-sky-500', '11/01', 6], ['產品', '我們如何決定下一個功能', 'from-amber-200 to-rose-400', '林', 'bg-pink-500', '10/24', 4], ['工程', '把首頁載入時間縮短一半的過程', 'from-emerald-200 to-teal-500', '許', 'bg-emerald-500', '10/15', 9]].map(([c, t, g, a, ac, d, m]) => `    <a href="#" onclick="return false" class="group block"><div class="aspect-[16/10] rounded-xl overflow-hidden"><div class="w-full h-full bg-gradient-to-br ${g} transition-transform duration-500 group-hover:scale-105"></div></div><p class="mt-3 text-[11px] text-ink-faint"><span class="font-semibold text-brand-600 dark:text-brand-400">${c}</span> · ${m} 分鐘閱讀</p><h3 class="mt-1 font-semibold text-ink leading-snug line-clamp-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">${t}</h3><p class="mt-2 flex items-center gap-2 text-xs text-ink-faint"><span class="w-5 h-5 rounded-full ${ac} text-white grid place-items-center text-[9px]">${a}</span>${d}</p></a>`).join('\n')}
  </div>
</section>`,
    },
    {
      name: '聯絡我們區塊',
      en: 'Contact Section',
      tags: ['聯絡', '表單'],
      wide: true,
      spec: [
        '左欄為標題「聯絡我們」、說明，以及三個聯絡方式（fa-envelope 信箱、fa-phone 電話、fa-location-dot 地址），每項有圖示方塊與兩行文字。',
        '右欄為表單卡片：姓名與公司並排、電子郵件、需求類型下拉、留言文字區與全寬送出按鈕。',
        '表單卡片為淺灰底、圓角 20px。',
      ],
      html: `<section class="w-full max-w-4xl grid md:grid-cols-2 gap-8 p-8 sm:p-10 rounded-3xl border border-line bg-surface">
  <div><h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-ink">聯絡我們</h2><p class="mt-3 text-ink-soft">有任何問題或合作提案，歡迎與我們聯繫，我們會在一個工作天內回覆。</p>
    <ul class="mt-8 space-y-5 text-sm">${[['fa-envelope', '電子郵件', 'hello@atlas.app'], ['fa-phone', '電話', '02-2345-6789'], ['fa-location-dot', '辦公室', '台北市信義區松仁路 100 號']].map(([i, t, v]) => `<li class="flex items-center gap-3.5"><span class="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 grid place-items-center"><i class="fa-solid ${i}"></i></span><span><span class="block text-xs text-ink-faint">${t}</span><span class="block font-medium text-ink">${v}</span></span></li>`).join('')}</ul>
  </div>
  <form onsubmit="event.preventDefault()" class="p-6 rounded-[20px] bg-subtle/70 space-y-3.5">
    <div class="grid grid-cols-2 gap-3"><input placeholder="姓名" class="h-10 px-3 rounded-[10px] border border-line bg-surface text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"><input placeholder="公司" class="h-10 px-3 rounded-[10px] border border-line bg-surface text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"></div>
    <input type="email" placeholder="電子郵件" class="w-full h-10 px-3 rounded-[10px] border border-line bg-surface text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15">
    <select class="w-full h-10 px-3 rounded-[10px] border border-line bg-surface text-sm text-ink-soft focus:outline-none"><option>需求類型：產品諮詢</option><option>合作提案</option><option>技術支援</option></select>
    <textarea rows="3" placeholder="請簡述你的需求" class="w-full px-3 py-2.5 rounded-[10px] border border-line bg-surface text-sm text-ink placeholder:text-ink-faint resize-none focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"></textarea>
    <button type="submit" class="w-full h-11 rounded-xl bg-ink text-canvas text-sm font-semibold">送出訊息</button>
  </form>
</section>`,
    },
    {
      name: '內頁標題橫幅',
      en: 'Page Header Banner',
      tags: ['內頁', '麵包屑'],
      wide: true,
      spec: [
        '內頁頂部的標題橫幅：上方為麵包屑（fa-house / 資源 / 部落格），下方為大標題與說明文字。',
        '右側為搜尋框，下方一列為分類膠囊篩選；背景為淺灰底並在右上角有淡主色網格裝飾。',
        '整個橫幅底部以 1px 分隔線結束。',
      ],
      html: `<section class="relative w-full max-w-4xl px-8 pt-8 pb-6 rounded-3xl bg-subtle/70 border border-line overflow-hidden">
  <div class="absolute right-0 top-0 w-64 h-40 opacity-50 bg-[linear-gradient(rgb(99_102_241/.18)_1px,transparent_1px),linear-gradient(90deg,rgb(99_102_241/.18)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(circle_at_top_right,#000,transparent_70%)]"></div>
  <nav class="relative text-xs text-ink-faint"><a href="#" onclick="return false" class="hover:text-ink"><i class="fa-solid fa-house"></i></a><i class="fa-solid fa-chevron-right text-[8px] mx-2"></i><a href="#" onclick="return false" class="hover:text-ink">資源</a><i class="fa-solid fa-chevron-right text-[8px] mx-2"></i><span class="text-ink">部落格</span></nav>
  <div class="relative mt-4 flex flex-wrap items-end justify-between gap-4">
    <div><h1 class="text-3xl font-bold tracking-tight text-ink">部落格</h1><p class="mt-2 text-ink-soft">產品更新、設計觀點與團隊故事。</p></div>
    <label class="relative"><i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-xs text-ink-faint"></i><input type="search" placeholder="搜尋文章" class="w-56 h-10 pl-8 pr-3 rounded-xl border border-line bg-surface text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"></label>
  </div>
  <div data-pick data-on="bg-ink text-canvas" data-off="bg-surface text-ink-soft border border-line" class="relative mt-6 flex flex-wrap gap-2 text-[13px] font-medium">${['全部', '產品更新', '設計', '工程', '團隊'].map((t, i) => `<button type="button" data-item ${i ? '' : 'aria-selected="true"'} onclick="UIK.pick(this)" class="h-8 px-3.5 rounded-full ${i ? 'bg-surface text-ink-soft border border-line' : 'bg-ink text-canvas'}">${t}</button>`).join('')}</div>
</section>`,
    },
    {
      name: '下載 App 區塊',
      en: 'App Download Section',
      tags: ['App', '下載'],
      wide: true,
      spec: [
        '深色背景的區塊，左側為標題「隨時隨地掌握進度」、說明、App Store 與 Google Play 下載按鈕，以及評分資訊（五顆星 4.8）。',
        '右側為手機外框模擬圖（圓角 32px、深色邊框），內含簡化的 App 介面，手機略微傾斜並帶有主色光暈。',
        '窄螢幕時手機圖置於文字下方。',
      ],
      html: `<section class="relative w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center p-8 sm:p-10 rounded-3xl bg-zinc-900 text-white overflow-hidden">
  <div class="absolute right-10 top-10 w-72 h-72 rounded-full bg-indigo-500/30 blur-3xl"></div>
  <div class="relative"><h2 class="text-2xl sm:text-3xl font-bold tracking-tight">隨時隨地掌握進度</h2><p class="mt-3 text-zinc-400">下載行動 App，通勤路上也能審核、留言與核准。</p>
    <div class="mt-6 flex flex-wrap gap-3"><a href="#" onclick="return false" class="inline-flex items-center gap-2.5 h-12 pl-4 pr-5 rounded-xl bg-white text-zinc-900"><i class="fa-brands fa-apple text-2xl"></i><span class="leading-tight text-left"><span class="block text-[10px] text-zinc-500">下載於</span><span class="block text-sm font-semibold">App Store</span></span></a><a href="#" onclick="return false" class="inline-flex items-center gap-2.5 h-12 pl-4 pr-5 rounded-xl border border-white/20 hover:bg-white/10"><i class="fa-brands fa-google-play text-xl"></i><span class="leading-tight text-left"><span class="block text-[10px] text-zinc-400">立即取得</span><span class="block text-sm font-semibold">Google Play</span></span></a></div>
    <p class="mt-5 text-xs text-zinc-400"><span class="text-amber-400"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></span> 4.8 · 超過 5 萬則評分</p>
  </div>
  <div class="relative flex justify-center"><div class="w-48 h-[360px] rounded-[32px] border-[6px] border-zinc-700 bg-zinc-950 p-3 rotate-6 shadow-[0_30px_60px_-20px_rgb(99_102_241/.6)]">
    <div class="mx-auto w-16 h-4 rounded-full bg-zinc-800"></div>
    <div class="mt-4 space-y-2.5"><div class="h-3 w-20 rounded bg-zinc-700"></div><div class="h-20 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500"></div><div class="grid grid-cols-2 gap-2"><div class="h-14 rounded-lg bg-zinc-800"></div><div class="h-14 rounded-lg bg-zinc-800"></div></div><div class="h-10 rounded-lg bg-zinc-800"></div><div class="h-10 rounded-lg bg-zinc-800"></div></div>
  </div></div>
</section>`,
    },
    {
      name: '客戶成功案例',
      en: 'Case Study Highlight',
      tags: ['案例', '社會證明'],
      wide: true,
      spec: [
        '左側為大型引言（24px、fa-quote-left 主色圖示）、客戶頭像、姓名與公司，以及「閱讀完整案例」連結。',
        '右側為三個成果指標卡片垂直排列：大字數字（主色）與說明，例如「-40% 交付時間」「3 倍產能」「98% 員工滿意度」。',
        '左上角顯示客戶公司的品牌標誌（fa-brands）。',
      ],
      html: `<section class="w-full max-w-4xl grid md:grid-cols-[1.5fr_1fr] gap-8 p-8 sm:p-10 rounded-3xl border border-line bg-surface">
  <div class="flex flex-col">
    <p class="flex items-center gap-2 text-sm font-semibold text-ink-soft"><i class="fa-brands fa-shopify text-xl text-[#95BF47]"></i>Shopify 合作夥伴</p>
    <i class="fa-solid fa-quote-left mt-6 text-3xl text-brand-500/30"></i>
    <blockquote class="mt-3 text-xl sm:text-2xl font-medium leading-relaxed text-ink">導入半年後，我們的上架流程從兩週縮短到三天，團隊終於有時間專注在真正重要的事情上。</blockquote>
    <div class="mt-6 flex items-center gap-3"><span class="w-11 h-11 rounded-full bg-gradient-to-br from-amber-300 to-orange-500 text-white grid place-items-center font-semibold">吳</span><div><p class="font-semibold text-ink">吳佳蓉</p><p class="text-xs text-ink-faint">營運總監 · Bloom 選品</p></div></div>
    <a href="#" onclick="return false" class="mt-6 text-sm font-semibold text-brand-600 dark:text-brand-400">閱讀完整案例 <i class="fa-solid fa-arrow-right text-xs"></i></a>
  </div>
  <div class="space-y-3">${[['-40%', '產品交付時間'], ['3 倍', '團隊產能提升'], ['98%', '員工滿意度']].map(([n, d]) => `<div class="p-5 rounded-2xl bg-subtle/70"><p class="text-3xl font-bold tracking-tight text-brand-600 dark:text-brand-400 tabular-nums">${n}</p><p class="mt-1 text-sm text-ink-soft">${d}</p></div>`).join('')}</div>
</section>`,
    },
  ],
});
