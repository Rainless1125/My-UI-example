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
    ],
  });
})();
