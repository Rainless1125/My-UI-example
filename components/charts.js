(function () {
  /* 依數值產生 SVG 折線路徑 */
  const line = (vals, w, h, max) => vals.map((v, i) => `${i ? 'L' : 'M'}${((i / (vals.length - 1)) * w).toFixed(1)} ${(h - (v / max) * h).toFixed(1)}`).join(' ');
  const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月'];
  const rev = [42, 55, 48, 70, 62, 84, 78];
  /* 熱力圖資料：以固定公式產生，確保每次顯示一致 */
  const heat = Array.from({ length: 26 * 7 }, (_, i) => (i * 37 + (i % 7) * 11 + Math.floor(i / 9)) % 9);
  const heatCls = (v) => (v < 3 ? 'bg-subtle' : v < 5 ? 'bg-emerald-200 dark:bg-emerald-900' : v < 7 ? 'bg-emerald-400 dark:bg-emerald-700' : v < 8 ? 'bg-emerald-500' : 'bg-emerald-700 dark:bg-emerald-400');

  (window.UI_ATLAS = window.UI_ATLAS || []).push({
    id: 'charts',
    name: '圖表小工具',
    en: 'Chart Widgets',
    icon: 'fa-solid fa-chart-column',
    desc: '長條、折線、面積、甜甜圈、熱力圖、漏斗與目標達成圖，全部以 SVG 與 CSS 繪製，不依賴圖表函式庫，適合儀表板的輕量資料視覺化。',
    items: [
      {
        name: '互動長條圖',
        en: 'Bar Chart with Tooltip',
        tags: ['長條圖', 'hover'],
        spec: [
          '7 根垂直長條代表 1–7 月營收，長條為主色淡色、圓角頂端，最高的一根為主色實心強調。',
          'hover 長條時加深顏色，並在上方顯示深色數值提示框；底部為月份標籤，左側有三條淡灰色水平格線。',
          '卡片頂部為標題「月營收（萬元）」與總計數字。',
        ],
        html: `<div class="w-[400px] max-w-full p-5 rounded-2xl border border-line bg-surface shadow-sm">
  <div class="flex items-end justify-between"><div><p class="text-xs text-ink-faint">月營收（萬元）</p><p class="text-2xl font-bold text-ink tabular-nums">439</p></div><span class="text-xs text-emerald-600 dark:text-emerald-400"><i class="fa-solid fa-arrow-trend-up mr-1"></i>18.2%</span></div>
  <div class="relative mt-5 h-40">
    <div class="absolute inset-0 flex flex-col justify-between pb-6"><span class="border-t border-dashed border-line"></span><span class="border-t border-dashed border-line"></span><span class="border-t border-line"></span></div>
    <div class="relative h-full flex items-end gap-3 pb-6">
${rev.map((v, i) => `      <div class="group relative flex-1 h-full flex flex-col justify-end items-center"><span class="pointer-events-none absolute px-1.5 py-0.5 rounded bg-ink text-canvas text-[10px] font-semibold opacity-0 group-hover:opacity-100 transition" style="bottom:calc(${v}% + 6px)">${v}</span><span class="w-full rounded-t-md ${v === 84 ? 'bg-brand-600' : 'bg-brand-500/25 group-hover:bg-brand-500/50'} transition-colors" style="height:${v}%"></span><span class="absolute -bottom-6 text-[10px] text-ink-faint">${months[i]}</span></div>`).join('\n')}
    </div>
  </div>
</div>`,
      },
      {
        name: '水平排行長條',
        en: 'Horizontal Ranking Bars',
        tags: ['排行', '長條圖'],
        spec: [
          '前 5 名的水平長條排行：每列左側為名次與名稱，長條寬度依數值比例，右側顯示數值。',
          '第一名的長條為主色實心，其餘為主色 30% 淡色；長條高度 8px、圓角。',
          '標題「熱門頁面瀏覽數」與右側「本週」下拉。',
        ],
        html: `<div class="w-[380px] max-w-full p-5 rounded-2xl border border-line bg-surface shadow-sm">
  <div class="flex items-center justify-between"><p class="text-sm font-semibold text-ink">熱門頁面瀏覽數</p><button type="button" class="h-7 px-2 rounded-md border border-line text-xs text-ink-soft">本週 <i class="fa-solid fa-chevron-down text-[9px] ml-1"></i></button></div>
  <ol class="mt-4 space-y-3.5 text-[13px]">
${[['/pricing', 12480], ['/docs/getting-started', 9820], ['/blog/design-tokens', 7260], ['/features', 5140], ['/changelog', 3010]].map(([n, v], i) => `    <li><div class="flex justify-between mb-1.5"><span class="text-ink"><span class="inline-block w-5 font-mono text-ink-faint">${i + 1}</span>${n}</span><span class="font-medium text-ink tabular-nums">${v.toLocaleString()}</span></div><div class="h-2 rounded-full bg-subtle"><div class="h-full rounded-full ${i ? 'bg-brand-500/30' : 'bg-brand-600'}" style="width:${Math.round((v / 12480) * 100)}%"></div></div></li>`).join('\n')}
  </ol>
</div>`,
      },
      {
        name: '折線趨勢圖',
        en: 'Line Chart',
        tags: ['折線圖', 'SVG'],
        spec: [
          'SVG 折線圖顯示兩條數列：本期（主色實線 2.5px，帶資料點圓圈）與上期（灰色虛線）。',
          '背景有四條淡灰色水平格線，底部為月份標籤；最後一個資料點以較大的圓與白色外框強調，旁邊標示數值。',
          '右上角為圖例（色點 + 本期 / 上期）。',
        ],
        html: `<div class="w-[420px] max-w-full p-5 rounded-2xl border border-line bg-surface shadow-sm">
  <div class="flex items-center justify-between"><p class="text-sm font-semibold text-ink">活躍使用者</p><div class="flex gap-3 text-[11px] text-ink-soft"><span class="flex items-center gap-1.5"><span class="w-2.5 h-0.5 rounded bg-brand-600"></span>本期</span><span class="flex items-center gap-1.5"><span class="w-2.5 border-t border-dashed border-ink-faint"></span>上期</span></div></div>
  <svg viewBox="0 0 360 150" class="mt-4 w-full h-40 overflow-visible" aria-hidden="true">
    <g stroke="rgb(var(--line))">${[10, 50, 90, 130].map((y) => `<line x1="0" x2="360" y1="${y}" y2="${y}"/>`).join('')}</g>
    <path d="${line([40, 46, 44, 52, 58, 55, 62], 360, 130, 100)}" transform="translate(0 0)" fill="none" stroke="rgb(var(--ink-faint))" stroke-width="1.5" stroke-dasharray="4 4"/>
    <path d="${line(rev, 360, 130, 100)}" fill="none" stroke="#4f46e5" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
    ${rev.map((v, i) => `<circle cx="${(i / 6) * 360}" cy="${130 - (v / 100) * 130}" r="${i === 6 ? 5 : 3}" fill="${i === 6 ? '#4f46e5' : 'rgb(var(--surface))'}" stroke="${i === 6 ? 'rgb(var(--surface))' : '#4f46e5'}" stroke-width="2"/>`).join('')}
    <text x="352" y="${130 - 0.78 * 130 - 12}" text-anchor="end" font-size="11" font-weight="600" fill="#4f46e5">7,800</text>
  </svg>
  <div class="mt-1 flex justify-between text-[10px] text-ink-faint">${months.map((m) => `<span>${m}</span>`).join('')}</div>
</div>`,
      },
      {
        name: '甜甜圈圖',
        en: 'Donut Chart',
        tags: ['圓餅', '比例'],
        spec: [
          'SVG 甜甜圈圖由四段弧線組成（以 stroke-dasharray 與 stroke-dashoffset 拼接），段與段之間有 2px 間隙，環寬 14px。',
          '中央顯示總數與「總流量」說明；右側為圖例清單：色點、來源名稱、百分比。',
          '四段顏色：indigo、sky、amber、pink。',
        ],
        html: `<div class="w-[400px] max-w-full p-5 rounded-2xl border border-line bg-surface shadow-sm flex items-center gap-6">
  <div class="relative w-32 h-32 shrink-0">
    <svg viewBox="0 0 120 120" class="w-full h-full -rotate-90">
      ${(() => { const C = 2 * Math.PI * 48; let off = 0; return [[45, '#6366f1'], [28, '#0ea5e9'], [17, '#f59e0b'], [10, '#ec4899']].map(([p, c]) => { const len = (p / 100) * C - 2; const seg = `<circle cx="60" cy="60" r="48" fill="none" stroke="${c}" stroke-width="14" stroke-dasharray="${len.toFixed(1)} ${C.toFixed(1)}" stroke-dashoffset="${(-off).toFixed(1)}"/>`; off += (p / 100) * C; return seg; }).join(''); })()}
    </svg>
    <div class="absolute inset-0 grid place-items-center text-center"><div><p class="text-lg font-bold text-ink tabular-nums">48.2k</p><p class="text-[10px] text-ink-faint">總流量</p></div></div>
  </div>
  <ul class="flex-1 space-y-2.5 text-[13px]">
    <li class="flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-sm bg-indigo-500"></span><span class="flex-1 text-ink-soft">自然搜尋</span><span class="font-semibold text-ink tabular-nums">45%</span></li>
    <li class="flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-sm bg-sky-500"></span><span class="flex-1 text-ink-soft">直接造訪</span><span class="font-semibold text-ink tabular-nums">28%</span></li>
    <li class="flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-sm bg-amber-500"></span><span class="flex-1 text-ink-soft">社群媒體</span><span class="font-semibold text-ink tabular-nums">17%</span></li>
    <li class="flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-sm bg-pink-500"></span><span class="flex-1 text-ink-soft">推薦連結</span><span class="font-semibold text-ink tabular-nums">10%</span></li>
  </ul>
</div>`,
      },
      {
        name: '漸層面積圖',
        en: 'Area Chart',
        tags: ['面積圖', '漸層'],
        spec: [
          'SVG 面積圖：主色折線下方填滿由主色 30% 漸層到透明的面積，線條使用平滑轉折（stroke-linejoin: round）。',
          '卡片上方顯示大字數值、漲幅徽章與時間區間分段控制（7 天 / 30 天 / 90 天）。',
          '圖表不顯示格線與座標軸，呈現極簡的儀表板風格。',
        ],
        html: `<div class="w-[420px] max-w-full p-5 rounded-2xl border border-line bg-surface shadow-sm">
  <div class="flex items-start justify-between">
    <div><p class="text-xs text-ink-faint">總瀏覽量</p><p class="mt-1 flex items-center gap-2 text-2xl font-bold text-ink tabular-nums">284,190<span class="px-1.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">+9.4%</span></p></div>
    <div data-pick data-on="bg-surface text-ink shadow-sm" data-off="text-ink-faint" class="inline-flex p-0.5 rounded-lg bg-subtle text-[11px] font-medium"><button type="button" data-item onclick="UIK.pick(this)" class="h-6 px-2 rounded-md text-ink-faint">7 天</button><button type="button" data-item aria-selected="true" onclick="UIK.pick(this)" class="h-6 px-2 rounded-md bg-surface text-ink shadow-sm">30 天</button><button type="button" data-item onclick="UIK.pick(this)" class="h-6 px-2 rounded-md text-ink-faint">90 天</button></div>
  </div>
  <svg viewBox="0 0 360 110" preserveAspectRatio="none" class="mt-4 w-full h-28" aria-hidden="true">
    <defs><linearGradient id="area-g" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#6366f1" stop-opacity=".3"/><stop offset="1" stop-color="#6366f1" stop-opacity="0"/></linearGradient></defs>
    ${(() => { const v = [30, 38, 34, 50, 46, 58, 54, 66, 62, 74, 70, 86]; const d = line(v, 360, 100, 100); return `<path d="${d} L360 110 L0 110Z" fill="url(#area-g)"/><path d="${d}" fill="none" stroke="#6366f1" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>`; })()}
  </svg>
</div>`,
      },
      {
        name: '活動熱力圖',
        en: 'Contribution Heatmap',
        tags: ['熱力圖', '活躍度'],
        wide: true,
        spec: [
          '類似 GitHub 貢獻圖的熱力圖：26 週 × 7 天的小方格（10px、間距 3px、圓角 2px），顏色由淺灰到深 emerald 共五級。',
          '左側標示「一 / 三 / 五」，上方標示月份；方格 hover 時顯示外框並以 title 提示當天次數。',
          '右下角為「少 → 多」的五格色階圖例。',
        ],
        html: `<div class="w-full max-w-3xl p-5 rounded-2xl border border-line bg-surface shadow-sm overflow-x-auto">
  <div class="flex items-center justify-between mb-3"><p class="text-sm font-semibold text-ink">過去半年共 1,284 次提交</p><span class="text-xs text-ink-faint">2026 年 5 月 – 11 月</span></div>
  <div class="flex gap-2">
    <div class="grid grid-rows-7 gap-[3px] pt-5 text-[9px] text-ink-faint leading-[10px]"><span></span><span>一</span><span></span><span>三</span><span></span><span>五</span><span></span></div>
    <div>
      <div class="flex text-[9px] text-ink-faint h-5">${['5月', '6月', '7月', '8月', '9月', '10月'].map((m) => `<span class="w-[52px]">${m}</span>`).join('')}</div>
      <div class="grid grid-flow-col grid-rows-7 gap-[3px]">${heat.map((v) => `<span title="${v * 2} 次提交" class="w-2.5 h-2.5 rounded-[2px] ${heatCls(v)} hover:ring-1 hover:ring-ink"></span>`).join('')}</div>
    </div>
  </div>
  <div class="mt-3 flex items-center justify-end gap-1 text-[10px] text-ink-faint">少<span class="w-2.5 h-2.5 rounded-[2px] bg-subtle"></span><span class="w-2.5 h-2.5 rounded-[2px] bg-emerald-200 dark:bg-emerald-900"></span><span class="w-2.5 h-2.5 rounded-[2px] bg-emerald-400 dark:bg-emerald-700"></span><span class="w-2.5 h-2.5 rounded-[2px] bg-emerald-500"></span><span class="w-2.5 h-2.5 rounded-[2px] bg-emerald-700 dark:bg-emerald-400"></span>多</div>
</div>`,
      },
      {
        name: '迷你走勢列表',
        en: 'Sparkline List',
        tags: ['股價', 'Sparkline'],
        spec: [
          '類似股票看盤的列表：每列為代號（粗體）與名稱、中間 80×28 的 SVG 迷你走勢線、右側價格與漲跌幅膠囊。',
          '上漲的走勢線與膠囊為 emerald，下跌為 rose（依台灣慣例可自行互換）。',
          '列與列之間以分隔線區隔，hover 時出現淺灰底。',
        ],
        html: `<div class="w-[380px] max-w-full rounded-2xl border border-line bg-surface shadow-sm divide-y divide-line">
${[['NOVA', '新星科技', 128.4, '+2.4%', [10, 14, 12, 18, 16, 22, 24], true], ['LUMN', '光譜生技', 56.2, '-1.8%', [24, 20, 22, 16, 18, 14, 12], false], ['ATLS', '亞特拉斯', 312.0, '+0.6%', [14, 16, 13, 17, 15, 18, 19], true]].map(([s, n, p, c, v, up]) => `  <div class="flex items-center gap-3 px-4 h-16 hover:bg-subtle/50 transition-colors">
    <div class="w-24"><p class="text-sm font-bold text-ink">${s}</p><p class="text-[11px] text-ink-faint">${n}</p></div>
    <svg viewBox="0 0 80 28" class="w-20 h-7" aria-hidden="true"><path d="${line(v, 80, 24, 26)}" transform="translate(0 2)" fill="none" stroke="${up ? '#10b981' : '#f43f5e'}" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/></svg>
    <div class="ml-auto text-right"><p class="text-sm font-semibold text-ink tabular-nums">${p.toFixed(1)}</p><span class="inline-block px-1.5 rounded text-[11px] font-semibold tabular-nums ${up ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-rose-500/10 text-rose-600 dark:text-rose-400'}">${c}</span></div>
  </div>`).join('\n')}
</div>`,
      },
      {
        name: '目標達成長條',
        en: 'Bullet Chart',
        tags: ['KPI', '目標'],
        spec: [
          '子彈圖（bullet chart）：灰階背景帶分為差、可、佳三段，主色實際值長條疊在中間，目標值以 2px 深色垂直線標示。',
          '每列左側為指標名稱與目標值說明，右側顯示達成百分比；達成時為 emerald，未達為 amber。',
          '共三個指標上下排列。',
        ],
        html: `<div class="w-[420px] max-w-full p-5 rounded-2xl border border-line bg-surface shadow-sm space-y-5">
${[['季度營收', '目標 $500 萬', 82, 75, '109%', true], ['新客戶數', '目標 120 位', 58, 80, '73%', false], ['客戶滿意度', '目標 4.5 分', 90, 85, '102%', true]].map(([n, t, v, goal, p, ok]) => `  <div><div class="flex items-baseline justify-between mb-2"><p class="text-sm text-ink">${n} <span class="text-xs text-ink-faint">${t}</span></p><span class="text-sm font-semibold tabular-nums ${ok ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600'}">${p}</span></div>
    <div class="relative h-5 rounded-md overflow-hidden flex"><span class="w-[40%] bg-subtle"></span><span class="w-[35%] bg-line/70"></span><span class="w-[25%] bg-line"></span><span class="absolute left-0 top-1/2 -translate-y-1/2 h-2 rounded-r bg-brand-600" style="width:${v}%"></span><span class="absolute top-0 bottom-0 w-0.5 bg-ink" style="left:${goal}%"></span></div></div>`).join('\n')}
  <div class="flex gap-4 text-[10px] text-ink-faint"><span class="flex items-center gap-1"><span class="w-2.5 h-2 rounded-sm bg-brand-600"></span>實際</span><span class="flex items-center gap-1"><span class="w-0.5 h-2.5 bg-ink"></span>目標</span></div>
</div>`,
      },
      {
        name: '堆疊長條圖',
        en: 'Stacked Bar Chart',
        tags: ['堆疊', '組成'],
        spec: [
          '6 根垂直堆疊長條代表各月份的流量組成，每根由下而上分為三段（indigo、sky、teal），段與段之間 2px 間隙。',
          '只有最上段有圓角頂端；長條下方為月份，圖表上方為圖例。',
          'hover 某根長條時其餘長條透明度降到 40%，突顯目前的月份。',
        ],
        html: `<div class="w-[400px] max-w-full p-5 rounded-2xl border border-line bg-surface shadow-sm">
  <div class="flex items-center justify-between"><p class="text-sm font-semibold text-ink">流量來源組成</p><div class="flex gap-3 text-[11px] text-ink-soft"><span class="flex items-center gap-1"><span class="w-2 h-2 rounded-sm bg-indigo-500"></span>搜尋</span><span class="flex items-center gap-1"><span class="w-2 h-2 rounded-sm bg-sky-400"></span>直接</span><span class="flex items-center gap-1"><span class="w-2 h-2 rounded-sm bg-teal-400"></span>社群</span></div></div>
  <div class="group/chart mt-5 h-40 flex items-end gap-4">
${[[40, 22, 14], [46, 24, 18], [38, 28, 16], [52, 26, 20], [48, 30, 22], [58, 28, 24]].map((v, i) => `    <div class="flex-1 h-full flex flex-col justify-end items-center gap-0.5 group-hover/chart:opacity-40 hover:!opacity-100 transition-opacity"><span class="w-full rounded-t-md bg-teal-400" style="height:${v[2]}%"></span><span class="w-full bg-sky-400" style="height:${v[1]}%"></span><span class="w-full bg-indigo-500" style="height:${v[0]}%"></span><span class="mt-1.5 text-[10px] text-ink-faint">${months[i]}</span></div>`).join('\n')}
  </div>
</div>`,
      },
      {
        name: '轉換漏斗圖',
        en: 'Funnel Chart',
        tags: ['漏斗', '轉換率'],
        spec: [
          '由上而下五個階段的漏斗：每階段為置中的圓角長條，寬度依人數比例遞減，顏色由主色漸淡。',
          '長條內顯示階段名稱與人數，右側顯示相對上一階段的轉換率，流失最多的階段以 rose 色標示。',
          '卡片頂部為標題「註冊轉換漏斗」與總轉換率。',
        ],
        html: `<div class="w-[420px] max-w-full p-5 rounded-2xl border border-line bg-surface shadow-sm">
  <div class="flex items-end justify-between"><p class="text-sm font-semibold text-ink">註冊轉換漏斗</p><p class="text-xs text-ink-faint">整體轉換 <span class="font-semibold text-ink">6.2%</span></p></div>
  <div class="mt-4 space-y-1.5 text-xs">
${[['造訪首頁', 24800, 100, null], ['查看定價', 11200, 45, '45%'], ['開始註冊', 4960, 20, '44%'], ['驗證信箱', 2230, 9, '45%'], ['完成付費', 1540, 6.2, '69%']].map(([n, c, w, r], i) => `    <div class="flex items-center gap-3"><div class="flex-1 flex justify-center"><div class="h-9 rounded-lg flex items-center justify-between px-3 text-white" style="width:${Math.max(w, 34)}%;background:rgb(79 70 229 / ${1 - i * 0.16})"><span class="truncate">${n}</span><span class="font-semibold tabular-nums">${c.toLocaleString()}</span></div></div><span class="w-10 text-right tabular-nums ${r === '44%' ? 'text-rose-600 dark:text-rose-400 font-semibold' : 'text-ink-faint'}">${r || ''}</span></div>`).join('\n')}
  </div>
</div>`,
      },
      {
        name: '雷達圖',
        en: 'Radar Chart',
        tags: ['雷達', '能力評估'],
        spec: [
          '五軸雷達圖（設計、開發、溝通、規劃、分析），背景為三層同心五邊形格線與從中心放射的軸線。',
          '資料區為主色 20% 填色與主色 2px 外框的多邊形，頂點以小圓點標示；另一組比較資料為 amber 虛線多邊形。',
          '各軸外側顯示標籤文字，下方為圖例。',
        ],
        html: `<div class="w-72 p-5 rounded-2xl border border-line bg-surface shadow-sm text-center">
    ${(() => {
      const ax = ['設計', '開發', '溝通', '規劃', '分析']; const cx = 110, cy = 105, R = 72;
      const pt = (i, r) => { const a = -Math.PI / 2 + (i * 2 * Math.PI) / 5; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; };
      const poly = (vals) => vals.map((v, i) => pt(i, R * v).map((n) => n.toFixed(1)).join(',')).join(' ');
      const a = [0.9, 0.7, 0.8, 0.55, 0.75], b = [0.6, 0.85, 0.5, 0.7, 0.6];
      return `<svg viewBox="0 0 220 210" class="w-full" aria-hidden="true">
      ${[1, 0.66, 0.33].map((s) => `<polygon points="${poly([s, s, s, s, s])}" fill="none" stroke="rgb(var(--line))"/>`).join('')}
      ${ax.map((_, i) => { const [x, y] = pt(i, R); return `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="rgb(var(--line))"/>`; }).join('')}
      <polygon points="${poly(b)}" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 3"/>
      <polygon points="${poly(a)}" fill="rgb(99 102 241 / .2)" stroke="#6366f1" stroke-width="2"/>
      ${a.map((v, i) => { const [x, y] = pt(i, R * v); return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3" fill="#6366f1"/>`; }).join('')}
      ${ax.map((t, i) => { const [x, y] = pt(i, R + 16); return `<text x="${x.toFixed(1)}" y="${(y + 4).toFixed(1)}" text-anchor="middle" font-size="11" fill="rgb(var(--ink-soft))">${t}</text>`; }).join('')}
    </svg>`;
    })()}
    <div class="flex justify-center gap-4 text-[11px] text-ink-soft"><span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-sm bg-brand-500"></span>你</span><span class="flex items-center gap-1.5"><span class="w-3 border-t-2 border-dashed border-amber-500"></span>團隊平均</span></div>
  </div>`,
      },
      {
        name: '散佈圖',
        en: 'Scatter Plot',
        tags: ['散佈', '相關性'],
        spec: [
          'SVG 散佈圖顯示「廣告花費」與「轉換數」的關係：X 軸與 Y 軸為淡灰色格線與刻度標籤。',
          '資料點為半透明主色圓點（半徑依第三個數值變化），另有一條 rose 色虛線趨勢線。',
          '其中一個資料點以白色外框強調並標示說明文字。',
        ],
        html: `<div class="w-[400px] max-w-full p-5 rounded-2xl border border-line bg-surface shadow-sm">
    <p class="text-sm font-semibold text-ink">廣告花費 vs 轉換數</p>
    <svg viewBox="0 0 340 180" class="mt-3 w-full" aria-hidden="true">
      <g stroke="rgb(var(--line))">${[20, 60, 100, 140].map((y) => `<line x1="30" x2="335" y1="${y}" y2="${y}"/>`).join('')}<line x1="30" x2="30" y1="10" y2="150"/></g>
      <g font-size="9" fill="rgb(var(--ink-faint))">${['300', '200', '100', '0'].map((t, i) => `<text x="24" y="${23 + i * 40}" text-anchor="end">${t}</text>`).join('')}${['0', '5萬', '10萬', '15萬'].map((t, i) => `<text x="${30 + i * 100}" y="166" text-anchor="middle">${t}</text>`).join('')}</g>
      <line x1="40" y1="138" x2="325" y2="30" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="5 4"/>
      ${[[50, 132, 5], [70, 120, 7], [92, 126, 4], [110, 104, 8], [138, 98, 6], [160, 86, 9], [178, 92, 5], [205, 70, 7], [228, 62, 10], [252, 66, 6], [270, 48, 8], [298, 40, 6], [316, 34, 9], [190, 118, 4], [120, 70, 5]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="rgb(99 102 241 / .45)"/>`).join('')}
      <circle cx="228" cy="62" r="10" fill="#6366f1" stroke="rgb(var(--surface))" stroke-width="2.5"/>
      <text x="244" y="58" font-size="10" font-weight="600" fill="rgb(var(--ink))">雙 11 檔期</text>
    </svg>
  </div>`,
      },
      {
        name: '錐形圓餅圖',
        en: 'Pie Chart',
        tags: ['圓餅', 'conic-gradient'],
        spec: [
          '以 CSS conic-gradient 繪製的實心圓餅圖（140px），四個區塊顏色為 indigo、teal、amber、rose，區塊之間有細白色分隔。',
          '圓餅下方為兩欄圖例，每項為色點、名稱、百分比與金額。',
          '卡片頂部為標題「支出分佈」與總金額。',
        ],
        html: `<div class="w-72 p-5 rounded-2xl border border-line bg-surface shadow-sm">
    <div class="flex items-end justify-between"><p class="text-sm font-semibold text-ink">支出分佈</p><p class="text-xs text-ink-faint">共 <span class="font-semibold text-ink">$48,600</span></p></div>
    <div class="mt-4 mx-auto w-36 h-36 rounded-full bg-[conic-gradient(#6366f1_0_40%,rgb(var(--surface))_40%_40.6%,#14b8a6_40.6%_68%,rgb(var(--surface))_68%_68.6%,#f59e0b_68.6%_88%,rgb(var(--surface))_88%_88.6%,#f43f5e_88.6%_99.4%,rgb(var(--surface))_99.4%)]" role="img" aria-label="支出分佈圓餅圖"></div>
    <ul class="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs">
      <li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-indigo-500"></span><span class="flex-1 text-ink-soft">房租</span><span class="font-semibold text-ink">40%</span></li>
      <li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-teal-500"></span><span class="flex-1 text-ink-soft">餐飲</span><span class="font-semibold text-ink">28%</span></li>
      <li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-amber-500"></span><span class="flex-1 text-ink-soft">交通</span><span class="font-semibold text-ink">20%</span></li>
      <li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-rose-500"></span><span class="flex-1 text-ink-soft">娛樂</span><span class="font-semibold text-ink">12%</span></li>
    </ul>
  </div>`,
      },
      {
        name: '分組長條圖',
        en: 'Grouped Bar Chart',
        tags: ['比較', '長條圖'],
        spec: [
          '每個季度兩根並排長條（今年主色實心、去年主色 25% 淡色），用來比較兩期數據。',
          '長條頂端圓角，hover 時顯示 title 提示數值；底部為季度標籤，右上角為圖例。',
          '左側有淡灰色水平格線與刻度。',
        ],
        html: `<div class="w-[400px] max-w-full p-5 rounded-2xl border border-line bg-surface shadow-sm">
    <div class="flex items-center justify-between"><p class="text-sm font-semibold text-ink">季度營收比較</p><div class="flex gap-3 text-[11px] text-ink-soft"><span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-sm bg-brand-600"></span>2026</span><span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-sm bg-brand-500/25"></span>2025</span></div></div>
    <div class="relative mt-5 h-40 pl-8">
      <div class="absolute inset-0 left-8 flex flex-col justify-between pb-6">${['', '', '', ''].map(() => '<span class="border-t border-line"></span>').join('')}</div>
      <div class="absolute left-0 inset-y-0 pb-6 flex flex-col justify-between text-[9px] text-ink-faint -mt-1.5"><span>300</span><span>200</span><span>100</span><span>0</span></div>
      <div class="relative h-full flex items-end justify-around pb-6">
  ${[['Q1', 62, 48], ['Q2', 74, 55], ['Q3', 68, 60], ['Q4', 90, 70]].map(([q, a, b]) => `      <div class="relative h-full flex items-end gap-1.5"><span title="2026：${a * 3}" class="w-6 rounded-t-md bg-brand-600 hover:opacity-80" style="height:${a}%"></span><span title="2025：${b * 3}" class="w-6 rounded-t-md bg-brand-500/25 hover:bg-brand-500/40" style="height:${b}%"></span><span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-ink-faint">${q}</span></div>`).join('\n')}
      </div>
    </div>
  </div>`,
      },
      {
        name: '瀑布圖',
        en: 'Waterfall Chart',
        tags: ['財務', '增減'],
        spec: [
          '由期初值、各項增減與期末值組成的瀑布圖：增加為 emerald 浮動長條、減少為 rose 浮動長條，期初與期末為深色完整長條。',
          '每根長條上方顯示數值（帶正負號），長條之間以細虛線連接前一根的頂端高度。',
          '底部為項目標籤。',
        ],
        html: `<div class="w-[440px] max-w-full p-5 rounded-2xl border border-line bg-surface shadow-sm">
    <p class="text-sm font-semibold text-ink">本季現金流</p>
    <div class="mt-5 h-44 flex items-end gap-2">
  ${(() => { const steps = [['期初', 0, 50, 'base'], ['營收', 50, 30, 'up'], ['薪資', 80, -22, 'down'], ['行銷', 58, -10, 'down'], ['投資', 48, 18, 'up'], ['期末', 0, 66, 'base']]; return steps.map(([n, start, d, t]) => { const bottom = d < 0 ? start + d : start; const h = Math.abs(d); const c = t === 'base' ? 'bg-ink' : t === 'up' ? 'bg-emerald-500' : 'bg-rose-500'; return `    <div class="relative flex-1 h-full"><span class="absolute inset-x-0 rounded-md ${c}" style="bottom:calc(${bottom}% + 20px);height:${h}%"></span><span class="absolute inset-x-0 text-center text-[10px] font-semibold ${t === 'down' ? 'text-rose-600 dark:text-rose-400' : t === 'up' ? 'text-emerald-600 dark:text-emerald-400' : 'text-ink'}" style="bottom:calc(${bottom + h}% + 24px)">${t === 'base' ? d : (d > 0 ? '+' : '') + d}</span><span class="absolute bottom-0 inset-x-0 text-center text-[10px] text-ink-faint">${n}</span></div>`; }).join('\n'); })()}
    </div>
  </div>`,
      },
      {
        name: '指標迷你長條組',
        en: 'KPI Tiles with Mini Bars',
        tags: ['儀表板', '迷你圖'],
        wide: true,
        spec: [
          '四張並排的 KPI 卡片，每張包含指標名稱、大字數值、漲跌百分比，以及右下角由 7 根細長條組成的迷你長條圖。',
          '迷你長條最後一根為卡片主題色實心、其餘為主題色 25% 淡色，代表最近 7 天的走勢。',
          '四張卡片主題色分別為 indigo、emerald、amber、rose。',
        ],
        html: `<div class="w-full max-w-3xl grid grid-cols-2 lg:grid-cols-4 gap-3">
  ${[['新訪客', '3,842', '+12%', 'indigo', [4, 6, 5, 7, 6, 8, 9]], ['訂單數', '1,206', '+8%', 'emerald', [5, 4, 6, 6, 7, 6, 8]], ['平均客單', '$842', '-3%', 'amber', [8, 7, 7, 6, 7, 6, 5]], ['退貨率', '2.1%', '-0.4%', 'rose', [6, 7, 5, 6, 4, 5, 3]]].map(([n, v, c, col, bars]) => `  <div class="p-4 rounded-2xl border border-line bg-surface shadow-sm"><p class="text-xs text-ink-faint">${n}</p><div class="mt-2 flex items-end justify-between"><div><p class="text-xl font-bold text-ink tabular-nums">${v}</p><p class="text-[11px] font-semibold ${c.startsWith('+') ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}">${c}</p></div><div class="flex items-end gap-0.5 h-8">${bars.map((b, i) => `<span class="w-1.5 rounded-sm ${i === 6 ? `bg-${col}-500` : `bg-${col}-500/25`}" style="height:${b * 11}%"></span>`).join('')}</div></div></div>`).join('\n')}
  </div>`,
      },
      {
        name: '格點百分比圖',
        en: 'Waffle Chart',
        tags: ['比例', '格點'],
        spec: [
          '10 × 10 共 100 個小方格的格點圖，每格代表 1%，依比例以不同顏色填色（已完成 emerald、進行中 sky、未開始灰色）。',
          '方格 12px、間距 3px、圓角 3px；右側為圖例與每類百分比大字。',
          '標題「年度目標進度」。',
        ],
        html: `<div class="w-[380px] max-w-full p-5 rounded-2xl border border-line bg-surface shadow-sm">
    <p class="text-sm font-semibold text-ink">年度目標進度</p>
    <div class="mt-4 flex items-center gap-6">
      <div class="grid grid-cols-10 gap-[3px]">${Array.from({ length: 100 }, (_, i) => `<span class="w-3 h-3 rounded-[3px] ${i < 58 ? 'bg-emerald-500' : i < 81 ? 'bg-sky-400' : 'bg-subtle'}"></span>`).join('')}</div>
      <ul class="space-y-3 text-xs">
        <li><p class="flex items-center gap-1.5 text-ink-soft"><span class="w-2 h-2 rounded-sm bg-emerald-500"></span>已完成</p><p class="text-lg font-bold text-ink tabular-nums">58%</p></li>
        <li><p class="flex items-center gap-1.5 text-ink-soft"><span class="w-2 h-2 rounded-sm bg-sky-400"></span>進行中</p><p class="text-lg font-bold text-ink tabular-nums">23%</p></li>
        <li><p class="flex items-center gap-1.5 text-ink-soft"><span class="w-2 h-2 rounded-sm bg-line"></span>未開始</p><p class="text-lg font-bold text-ink tabular-nums">19%</p></li>
      </ul>
    </div>
  </div>`,
      },
      {
        name: '同心活動圓環',
        en: 'Activity Rings',
        tags: ['健康', '多重進度'],
        spec: [
          '三層同心 SVG 圓環（類似健身 App 的活動圓環），由外到內分別為活動（rose）、運動（lime）、站立（cyan），每層有淡色軌道。',
          '圓環以 stroke-dasharray 表示達成比例，端點圓角；放在深色卡片中。',
          '右側列出三項指標：目前值 / 目標值與單位。',
        ],
        html: `<div class="flex items-center gap-6 p-5 rounded-3xl bg-zinc-950 text-white">
    <svg viewBox="0 0 120 120" class="w-32 h-32 -rotate-90" aria-hidden="true">
      ${[[50, '#f43f5e', 0.82], [38, '#a3e635', 0.64], [26, '#22d3ee', 0.92]].map(([r, c, p]) => { const C = 2 * Math.PI * r; return `<circle cx="60" cy="60" r="${r}" fill="none" stroke="${c}" stroke-opacity=".2" stroke-width="10"/><circle cx="60" cy="60" r="${r}" fill="none" stroke="${c}" stroke-width="10" stroke-linecap="round" stroke-dasharray="${(C * p).toFixed(1)} ${C.toFixed(1)}"/>`; }).join('')}
    </svg>
    <ul class="space-y-2.5 text-sm">
      <li><p class="text-[11px] text-zinc-400">活動</p><p class="font-semibold text-rose-400 tabular-nums">410 / 500 <span class="text-xs">大卡</span></p></li>
      <li><p class="text-[11px] text-zinc-400">運動</p><p class="font-semibold text-lime-400 tabular-nums">19 / 30 <span class="text-xs">分鐘</span></p></li>
      <li><p class="text-[11px] text-zinc-400">站立</p><p class="font-semibold text-cyan-400 tabular-nums">11 / 12 <span class="text-xs">小時</span></p></li>
    </ul>
  </div>`,
      },
      {
        name: '前後對比圖',
        en: 'Dumbbell Chart',
        tags: ['對比', '改善幅度'],
        spec: [
          '啞鈴圖比較改版前後的數據：每列為指標名稱，右側軌道上以灰色圓點表示改版前、主色圓點表示改版後，兩點之間以粗線連接。',
          '連接線為主色 30% 淡色，右側顯示改善幅度；軌道下方有 0 到 100 的刻度。',
          '卡片頂部附「改版前 / 改版後」圖例。',
        ],
        html: `<div class="w-[440px] max-w-full p-5 rounded-2xl border border-line bg-surface shadow-sm">
    <div class="flex items-center justify-between"><p class="text-sm font-semibold text-ink">改版成效</p><div class="flex gap-3 text-[11px] text-ink-soft"><span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-ink-faint"></span>改版前</span><span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-brand-600"></span>改版後</span></div></div>
    <div class="mt-5 space-y-4 text-[13px]">
  ${[['任務完成率', 54, 82], ['滿意度', 61, 78], ['回訪率', 32, 47], ['轉換率', 18, 29]].map(([n, a, b]) => `    <div class="grid grid-cols-[80px_1fr_44px] items-center gap-3"><span class="text-ink-soft">${n}</span><div class="relative h-3"><span class="absolute inset-x-0 top-1/2 h-px bg-line"></span><span class="absolute top-1/2 -translate-y-1/2 h-1.5 rounded-full bg-brand-500/30" style="left:${a}%;width:${b - a}%"></span><span class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-ink-faint" style="left:${a}%"></span><span class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-600 ring-2 ring-surface" style="left:${b}%"></span></div><span class="text-right text-xs font-semibold text-emerald-600 dark:text-emerald-400 tabular-nums">+${b - a}</span></div>`).join('\n')}
      <div class="grid grid-cols-[80px_1fr_44px] gap-3 text-[10px] text-ink-faint"><span></span><div class="flex justify-between"><span>0</span><span>50</span><span>100</span></div><span></span></div>
    </div>
  </div>`,
      },
      {
        name: '即時數據圖',
        en: 'Live Streaming Chart',
        tags: ['即時', '監控'],
        spec: [
          '即時監控卡片：左上為「LIVE」紅色呼吸燈徽章與指標名稱，右上為目前數值（大字等寬）。',
          'SVG 折線圖的最右端資料點有向外擴散的脈衝圓圈，代表最新數據；折線下方有淡色漸層面積。',
          '底部顯示「每 5 秒更新」與最後更新時間。',
        ],
        html: `<div class="w-[400px] max-w-full p-5 rounded-2xl border border-line bg-surface shadow-sm">
    <div class="flex items-start justify-between">
      <div><span class="inline-flex items-center gap-1.5 h-5 px-1.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 text-[10px] font-bold tracking-wider"><span class="relative flex w-1.5 h-1.5"><span class="absolute inset-0 rounded-full bg-rose-500 animate-ping"></span><span class="relative w-1.5 h-1.5 rounded-full bg-rose-500"></span></span>LIVE</span><p class="mt-1.5 text-sm text-ink-soft">每秒請求數</p></div>
      <p class="text-2xl font-bold text-ink tabular-nums">1,842<span class="text-xs font-normal text-ink-faint"> req/s</span></p>
    </div>
    <svg viewBox="0 0 340 90" class="mt-3 w-full overflow-visible" aria-hidden="true">
      <defs><linearGradient id="live-g" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f43f5e" stop-opacity=".2"/><stop offset="1" stop-color="#f43f5e" stop-opacity="0"/></linearGradient></defs>
      ${(() => { const v = [40, 46, 38, 52, 48, 58, 50, 62, 55, 66, 60, 72, 64, 70]; const d = line(v, 330, 80, 90); return `<path d="${d} L330 90 L0 90Z" fill="url(#live-g)"/><path d="${d}" fill="none" stroke="#f43f5e" stroke-width="2" stroke-linejoin="round"/>`; })()}
      <circle cx="330" cy="${(80 - (70 / 90) * 80).toFixed(1)}" r="4" fill="#f43f5e"/><circle cx="330" cy="${(80 - (70 / 90) * 80).toFixed(1)}" r="4" fill="#f43f5e" class="animate-ping [transform-box:fill-box] origin-center"/>
    </svg>
    <p class="mt-2 text-[11px] text-ink-faint"><i class="fa-solid fa-rotate mr-1"></i>每 5 秒更新 · 最後更新 14:32:05</p>
  </div>`,
      },
    ],
  });
})();
