(function () {
  const days = ['日', '一', '二', '三', '四', '五', '六'];

  (window.UI_ATLAS = window.UI_ATLAS || []).push({
    id: 'timeline',
    name: '時間軸與行事曆',
    en: 'Timeline & Calendar',
    icon: 'fa-regular fa-calendar-days',
    desc: '活動紀錄、里程碑、更新日誌、月曆、週行程、甘特圖與提交歷史，所有和「時間」有關的資訊呈現方式。',
    items: [
      {
        name: '活動紀錄時間軸',
        en: 'Activity Feed',
        tags: ['動態', '垂直'],
        spec: [
          '垂直活動紀錄，每則左側為 32px 圓形圖示（依事件類型著色：留言、上傳、狀態變更、加入成員），圖示之間以 1px 垂直線串連。',
          '右側為「成員名稱（粗體）+ 動作描述」與灰色相對時間；留言類事件下方附淺灰底的引言區塊。',
          '最後一則下方不顯示連接線。',
        ],
        html: `<ul class="w-[400px] max-w-full">
  <li class="relative flex gap-3 pb-5 before:absolute before:left-4 before:top-9 before:bottom-1 before:w-px before:bg-line"><span class="relative w-8 h-8 shrink-0 rounded-full bg-sky-500/10 text-sky-600 grid place-items-center text-xs"><i class="fa-solid fa-comment"></i></span><div class="pt-1.5 text-[13px]"><p class="text-ink-soft"><span class="font-semibold text-ink">王雅琪</span> 在「首頁改版」留言</p><p class="text-[11px] text-ink-faint">5 分鐘前</p><p class="mt-2 p-2.5 rounded-lg bg-subtle text-ink-soft">主視覺的字級可以再大一點，手機版會比較好讀。</p></div></li>
  <li class="relative flex gap-3 pb-5 before:absolute before:left-4 before:top-9 before:bottom-1 before:w-px before:bg-line"><span class="relative w-8 h-8 shrink-0 rounded-full bg-violet-500/10 text-violet-600 grid place-items-center text-xs"><i class="fa-solid fa-cloud-arrow-up"></i></span><div class="pt-1.5 text-[13px]"><p class="text-ink-soft"><span class="font-semibold text-ink">陳俊宏</span> 上傳了 3 個檔案</p><p class="text-[11px] text-ink-faint">1 小時前</p></div></li>
  <li class="relative flex gap-3 pb-5 before:absolute before:left-4 before:top-9 before:bottom-1 before:w-px before:bg-line"><span class="relative w-8 h-8 shrink-0 rounded-full bg-emerald-500/10 text-emerald-600 grid place-items-center text-xs"><i class="fa-solid fa-circle-check"></i></span><div class="pt-1.5 text-[13px]"><p class="text-ink-soft"><span class="font-semibold text-ink">林佳穎</span> 將狀態改為 <span class="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[11px] font-medium">已完成</span></p><p class="text-[11px] text-ink-faint">昨天 16:20</p></div></li>
  <li class="relative flex gap-3"><span class="relative w-8 h-8 shrink-0 rounded-full bg-amber-500/10 text-amber-600 grid place-items-center text-xs"><i class="fa-solid fa-user-plus"></i></span><div class="pt-1.5 text-[13px]"><p class="text-ink-soft"><span class="font-semibold text-ink">黃志偉</span> 加入了專案</p><p class="text-[11px] text-ink-faint">11 月 1 日</p></div></li>
</ul>`,
      },
      {
        name: '水平里程碑',
        en: 'Horizontal Milestones',
        tags: ['里程碑', 'Roadmap'],
        wide: true,
        spec: [
          '水平的產品路線圖：一條橫線貫穿，上方依序為季度標籤，線上為里程碑節點。',
          '已完成節點為 emerald 實心 fa-check，目前節點為主色並帶有脈衝光環，未來節點為灰色空心圓。',
          '節點下方為里程碑名稱與說明；已完成段的橫線為 emerald，其餘為灰色。',
        ],
        html: `<div class="w-full max-w-3xl px-2">
  <div class="relative grid grid-cols-4">
    <div class="absolute left-[12.5%] right-[12.5%] top-[38px] h-0.5 bg-line"></div>
    <div class="absolute left-[12.5%] w-[50%] top-[38px] h-0.5 bg-emerald-500"></div>
${[['Q1 2026', '公開測試', '開放 500 位用戶試用', 'done'], ['Q2 2026', '正式上線', '推出付費方案', 'done'], ['Q3 2026', '行動 App', 'iOS 與 Android 版本', 'now'], ['Q4 2026', '企業版', 'SSO 與稽核紀錄', 'next']].map(([q, t, d, st]) => `    <div class="relative flex flex-col items-center text-center"><span class="text-[11px] font-semibold text-ink-faint">${q}</span>
      ${st === 'done' ? '<span class="relative mt-3 w-7 h-7 rounded-full bg-emerald-500 text-white grid place-items-center text-[11px]"><i class="fa-solid fa-check"></i></span>' : st === 'now' ? '<span class="relative mt-3 w-7 h-7 rounded-full bg-brand-600 ring-4 ring-brand-500/20 grid place-items-center"><span class="absolute inset-0 rounded-full bg-brand-500 animate-ping opacity-40"></span><span class="relative w-2.5 h-2.5 rounded-full bg-white"></span></span>' : '<span class="relative mt-3 w-7 h-7 rounded-full border-2 border-line bg-surface"></span>'}
      <p class="mt-3 text-sm font-semibold ${st === 'next' ? 'text-ink-faint' : 'text-ink'}">${t}</p><p class="mt-0.5 text-xs text-ink-faint">${d}</p></div>`).join('\n')}
  </div>
</div>`,
      },
      {
        name: '更新日誌',
        en: 'Changelog',
        tags: ['版本', '發布紀錄'],
        spec: [
          '左欄為版本號（等寬字膠囊）與發布日期，右欄為更新內容，兩欄之間以垂直線與圓點連接。',
          '更新內容依類型以彩色標籤分組：新功能（emerald）、改善（sky）、修正（amber），每項為一行說明。',
          '最新版本的圓點為主色並加上「最新」小徽章。',
        ],
        html: `<div class="w-[460px] max-w-full space-y-6">
  <div class="grid grid-cols-[96px_1fr] gap-4">
    <div class="text-right"><span class="inline-block px-2 py-0.5 rounded-md bg-ink text-canvas font-mono text-xs font-semibold">v2.4.0</span><p class="mt-1 text-[11px] text-ink-faint">2026/11/02</p></div>
    <div class="relative pl-5 border-l border-line"><span class="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-brand-600 ring-4 ring-brand-500/15"></span>
      <p class="font-semibold text-ink">協作白板正式推出 <span class="ml-1 px-1.5 py-px rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 text-[10px] font-semibold align-middle">最新</span></p>
      <ul class="mt-2 space-y-1.5 text-[13px] text-ink-soft">
        <li><span class="inline-block w-12 mr-1.5 px-1 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[10px] font-semibold text-center">新功能</span>無限畫布白板與便利貼</li>
        <li><span class="inline-block w-12 mr-1.5 px-1 rounded bg-sky-500/10 text-sky-700 dark:text-sky-400 text-[10px] font-semibold text-center">改善</span>大型檔案載入速度提升 40%</li>
        <li><span class="inline-block w-12 mr-1.5 px-1 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 text-[10px] font-semibold text-center">修正</span>深色模式下表格邊框不明顯</li>
      </ul>
    </div>
  </div>
  <div class="grid grid-cols-[96px_1fr] gap-4">
    <div class="text-right"><span class="inline-block px-2 py-0.5 rounded-md bg-subtle text-ink-soft font-mono text-xs font-semibold">v2.3.2</span><p class="mt-1 text-[11px] text-ink-faint">2026/10/18</p></div>
    <div class="relative pl-5 border-l border-line"><span class="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-line"></span>
      <p class="font-semibold text-ink">效能與穩定性更新</p>
      <ul class="mt-2 space-y-1.5 text-[13px] text-ink-soft"><li><span class="inline-block w-12 mr-1.5 px-1 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 text-[10px] font-semibold text-center">修正</span>匯出 PDF 時中文字型遺失</li></ul>
    </div>
  </div>
</div>`,
      },
      {
        name: '月曆檢視',
        en: 'Month Calendar',
        tags: ['月曆', '事件'],
        wide: true,
        spec: [
          '完整月曆：頂部為月份標題、上一月 / 下一月按鈕與「今天」按鈕，以及「月 / 週 / 日」分段切換。',
          '7 欄日期格，每格左上為日期數字，格內以彩色小條顯示事件標題（最多兩則，超過顯示「+N 更多」）；今天的日期為主色實心圓。',
          '非本月日期為淡灰色，週末欄背景略深。',
        ],
        html: `<div class="w-full max-w-3xl rounded-2xl border border-line bg-surface shadow-sm overflow-hidden">
  <div class="flex flex-wrap items-center gap-3 px-4 h-14 border-b border-line">
    <h4 class="font-semibold text-ink">2026 年 11 月</h4>
    <div class="flex"><button type="button" aria-label="上個月" class="w-8 h-8 rounded-lg text-ink-faint hover:bg-subtle"><i class="fa-solid fa-chevron-left text-xs"></i></button><button type="button" aria-label="下個月" class="w-8 h-8 rounded-lg text-ink-faint hover:bg-subtle"><i class="fa-solid fa-chevron-right text-xs"></i></button></div>
    <button type="button" class="h-8 px-3 rounded-lg border border-line text-xs font-medium text-ink">今天</button>
    <div data-pick data-on="bg-surface text-ink shadow-sm" data-off="text-ink-faint" class="ml-auto inline-flex p-0.5 rounded-lg bg-subtle text-xs font-medium"><button type="button" data-item aria-selected="true" onclick="UIK.pick(this)" class="h-7 px-3 rounded-md bg-surface text-ink shadow-sm">月</button><button type="button" data-item onclick="UIK.pick(this)" class="h-7 px-3 rounded-md text-ink-faint">週</button><button type="button" data-item onclick="UIK.pick(this)" class="h-7 px-3 rounded-md text-ink-faint">日</button></div>
  </div>
  <div class="grid grid-cols-7 text-[11px]">
    ${days.map((d) => `<div class="h-8 grid place-items-center font-medium text-ink-faint border-b border-line">${d}</div>`).join('')}
    ${(() => {
      const ev = { 3: [['設計評審', 'bg-brand-500/15 text-brand-700 dark:text-brand-300']], 6: [['產品發表會', 'bg-rose-500/15 text-rose-700 dark:text-rose-300']], 12: [['週會', 'bg-sky-500/15 text-sky-700 dark:text-sky-300'], ['客戶拜訪', 'bg-amber-500/15 text-amber-700 dark:text-amber-300'], ['x', '']], 18: [['開發者大會', 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300']], 25: [['季度回顧', 'bg-violet-500/15 text-violet-700 dark:text-violet-300']] };
      return Array.from({ length: 35 }, (_, i) => {
        const d = i + 1; const inMonth = d >= 1 && d <= 30; const label = inMonth ? d : d - 30; const wk = i % 7 === 0 || i % 7 === 6;
        const list = (ev[d] || []).filter((e) => e[0] !== 'x');
        const more = (ev[d] || []).length > 2 ? '<span class="block px-1 text-[10px] text-ink-faint">+1 更多</span>' : '';
        return `<div class="h-20 p-1.5 border-b border-r border-line [&:nth-child(7n)]:border-r-0 ${wk ? 'bg-subtle/40' : ''}"><span class="inline-grid place-items-center w-6 h-6 rounded-full ${d === 3 ? 'bg-brand-600 text-white font-semibold' : inMonth ? 'text-ink' : 'text-ink-faint/50'}">${label}</span>${list.slice(0, 2).map((e) => `<span class="mt-0.5 block truncate px-1.5 py-0.5 rounded ${e[1]} text-[10px] font-medium">${e[0]}</span>`).join('')}${more}</div>`;
      }).join('');
    })()}
  </div>
</div>`,
      },
      {
        name: '週行程表',
        en: 'Week Schedule',
        tags: ['行程', '時間格'],
        wide: true,
        spec: [
          '週檢視行程表：左側為時間刻度（09:00–14:00），上方為五個工作日欄位，今天的欄位標題為主色。',
          '行程以絕對定位的彩色區塊放在對應時段，區塊左側有 3px 深色邊條，內含標題與時間。',
          '一條 rose 色的水平線與圓點標示「現在時間」。',
        ],
        html: `<div class="w-full max-w-3xl rounded-2xl border border-line bg-surface shadow-sm overflow-x-auto">
  <div class="min-w-[560px]">
    <div class="grid grid-cols-[56px_repeat(5,1fr)] border-b border-line text-center text-xs">
      <span></span>${[['一', 9], ['二', 10], ['三', 11], ['四', 12], ['五', 13]].map(([d, n]) => `<div class="py-2 ${n === 11 ? 'text-brand-600 dark:text-brand-400' : 'text-ink-faint'}"><p>週${d}</p><p class="text-base font-semibold ${n === 11 ? '' : 'text-ink'}">${n}</p></div>`).join('')}
    </div>
    <div class="relative grid grid-cols-[56px_repeat(5,1fr)]">
      <div>${['09:00', '10:00', '11:00', '12:00', '13:00'].map((t) => `<div class="h-14 pr-2 text-right text-[10px] text-ink-faint -mt-1.5">${t}</div>`).join('')}</div>
      ${Array.from({ length: 5 }, () => `<div class="border-l border-line">${Array.from({ length: 5 }, () => '<div class="h-14 border-b border-line/60"></div>').join('')}</div>`).join('')}
      <div class="absolute left-[56px] right-0 inset-y-0 grid grid-cols-5 pointer-events-none">
        <div class="relative"><div class="absolute inset-x-1 top-[4px] h-[104px] p-1.5 rounded-md bg-brand-500/15 border-l-[3px] border-brand-600 text-[11px]"><p class="font-semibold text-brand-700 dark:text-brand-300">衝刺規劃</p><p class="text-brand-700/70 dark:text-brand-300/70">09:00–11:00</p></div></div>
        <div class="relative"><div class="absolute inset-x-1 top-[60px] h-[48px] p-1.5 rounded-md bg-amber-500/15 border-l-[3px] border-amber-500 text-[11px]"><p class="font-semibold text-amber-700 dark:text-amber-300">客戶會議</p></div></div>
        <div class="relative"><div class="absolute inset-x-1 top-[32px] h-[76px] p-1.5 rounded-md bg-emerald-500/15 border-l-[3px] border-emerald-500 text-[11px]"><p class="font-semibold text-emerald-700 dark:text-emerald-300">設計評審</p><p class="text-emerald-700/70 dark:text-emerald-300/70">09:30–11:00</p></div></div>
        <div class="relative"><div class="absolute inset-x-1 top-[172px] h-[48px] p-1.5 rounded-md bg-pink-500/15 border-l-[3px] border-pink-500 text-[11px]"><p class="font-semibold text-pink-700 dark:text-pink-300">團隊午餐</p></div></div>
        <div class="relative"><div class="absolute inset-x-1 top-[116px] h-[48px] p-1.5 rounded-md bg-sky-500/15 border-l-[3px] border-sky-500 text-[11px]"><p class="font-semibold text-sky-700 dark:text-sky-300">一對一</p></div></div>
      </div>
      <div class="absolute left-[calc(56px+(100%-56px)*0.4)] w-[calc((100%-56px)*0.2)] top-[140px] h-0.5 bg-rose-500 pointer-events-none"><span class="absolute -left-1 -top-[3px] w-2 h-2 rounded-full bg-rose-500"></span></div>
    </div>
  </div>
</div>`,
      },
      {
        name: '今日議程',
        en: 'Agenda List',
        tags: ['議程', '列表'],
        spec: [
          '今日行程列表：頂部為大字日期「11 月 3 日 週二」與「3 個行程」說明。',
          '每個行程左側為時間（開始 / 結束上下排列），中間為彩色垂直細條，右側為標題、地點（fa-location-dot 或 fa-video 線上會議）與參加者頭像。',
          '進行中的行程卡片為淡主色底並顯示「進行中」徽章與「加入會議」按鈕。',
        ],
        html: `<div class="w-[380px] max-w-full">
  <div class="flex items-end justify-between"><div><p class="text-xs text-ink-faint">今天</p><p class="text-lg font-semibold text-ink">11 月 3 日 週二</p></div><span class="text-xs text-ink-faint">3 個行程</span></div>
  <div class="mt-4 space-y-2">
    <div class="flex gap-3 p-3 rounded-xl bg-brand-500/[.06] border border-brand-500/20"><div class="w-12 text-xs tabular-nums"><p class="font-semibold text-ink">10:00</p><p class="text-ink-faint">11:00</p></div><span class="w-1 rounded-full bg-brand-600"></span><div class="flex-1 min-w-0"><p class="flex items-center gap-2 text-sm font-semibold text-ink">產品週會<span class="px-1.5 rounded bg-brand-600 text-white text-[10px] font-medium">進行中</span></p><p class="text-xs text-ink-faint"><i class="fa-solid fa-video mr-1"></i>線上會議</p><button type="button" class="mt-2 h-7 px-3 rounded-lg bg-brand-600 text-white text-xs font-medium">加入會議</button></div></div>
    <div class="flex gap-3 p-3 rounded-xl hover:bg-subtle transition"><div class="w-12 text-xs tabular-nums"><p class="font-semibold text-ink">13:30</p><p class="text-ink-faint">14:30</p></div><span class="w-1 rounded-full bg-amber-500"></span><div class="flex-1"><p class="text-sm font-semibold text-ink">客戶需求訪談</p><p class="text-xs text-ink-faint"><i class="fa-solid fa-location-dot mr-1"></i>3F 會議室 B</p></div><div class="flex -space-x-1.5"><span class="w-6 h-6 rounded-full ring-2 ring-canvas bg-sky-500"></span><span class="w-6 h-6 rounded-full ring-2 ring-canvas bg-pink-500"></span></div></div>
    <div class="flex gap-3 p-3 rounded-xl hover:bg-subtle transition"><div class="w-12 text-xs tabular-nums"><p class="font-semibold text-ink">16:00</p><p class="text-ink-faint">16:30</p></div><span class="w-1 rounded-full bg-emerald-500"></span><div class="flex-1"><p class="text-sm font-semibold text-ink">設計稿交付</p><p class="text-xs text-ink-faint"><i class="fa-regular fa-file-lines mr-1"></i>截止提醒</p></div></div>
  </div>
</div>`,
      },
      {
        name: '左右交錯時間軸',
        en: 'Alternating Timeline',
        tags: ['品牌故事', '交錯'],
        spec: [
          '中央一條垂直線，事件卡片左右交錯排列，卡片與中線之間以圓點節點相連。',
          '每張卡片包含年份（主色粗體）、標題與一行說明；節點內為該事件的小圖示。',
          '適合呈現公司沿革或品牌故事，窄螢幕時全部改為靠右排列。',
        ],
        html: `<div class="relative w-[460px] max-w-full">
  <div class="absolute left-1/2 top-0 bottom-0 w-px bg-line -translate-x-1/2"></div>
${[['2019', '公司成立', '三位創辦人在台北車庫開始', 'fa-lightbulb'], ['2021', '完成 A 輪募資', '獲得 1.2 億元投資', 'fa-sack-dollar'], ['2024', '用戶突破百萬', '服務遍及 40 個國家', 'fa-users'], ['2026', '推出 AI 助理', '全面導入智慧協作', 'fa-robot']].map(([y, t, d, ic], i) => `  <div class="relative grid grid-cols-2 gap-10 ${i ? 'mt-4' : ''}">
    <div class="${i % 2 ? 'col-start-2' : 'text-right'}"><div class="inline-block p-3 rounded-xl border border-line bg-surface shadow-sm text-left"><p class="text-xs font-bold text-brand-600 dark:text-brand-400">${y}</p><p class="text-sm font-semibold text-ink">${t}</p><p class="text-xs text-ink-faint">${d}</p></div></div>
    <span class="absolute left-1/2 top-4 -translate-x-1/2 w-7 h-7 rounded-full bg-surface border-2 border-brand-500 text-brand-600 grid place-items-center text-[10px]"><i class="fa-solid ${ic}"></i></span>
  </div>`).join('\n')}
</div>`,
      },
      {
        name: '甘特圖',
        en: 'Gantt Chart',
        tags: ['專案排程', '甘特'],
        wide: true,
        spec: [
          '左側為任務名稱欄（寬 160px），右側為以週為單位的時間軸（8 週），每週欄位以淡色垂直格線區隔。',
          '任務以圓角彩色長條表示起訖時間，長條內顯示負責人頭像與進度百分比；里程碑以菱形（旋轉 45 度的方塊）標示。',
          '一條主色垂直虛線標示「今天」，頂部為週次標籤。',
        ],
        html: `<div class="w-full max-w-3xl rounded-2xl border border-line bg-surface shadow-sm overflow-x-auto text-xs">
  <div class="min-w-[600px]">
    <div class="grid grid-cols-[160px_1fr] border-b border-line"><div class="px-4 h-10 flex items-center font-medium text-ink-faint">任務</div><div class="grid grid-cols-8">${Array.from({ length: 8 }, (_, i) => `<div class="h-10 grid place-items-center text-ink-faint border-l border-line/60">W${44 + i}</div>`).join('')}</div></div>
    <div class="relative">
      <div class="absolute left-[160px] right-0 inset-y-0 grid grid-cols-8 pointer-events-none">${Array.from({ length: 8 }, () => '<div class="border-l border-line/60"></div>').join('')}</div>
      <div class="absolute top-0 bottom-0 border-l-2 border-dashed border-brand-500 pointer-events-none" style="left:calc(160px + (100% - 160px) * .31)"><span class="absolute -top-0 -translate-x-1/2 px-1 rounded-b bg-brand-600 text-white text-[9px] whitespace-nowrap">今天</span></div>
${[['需求訪談', 0, 2, 'bg-emerald-500', '100%', '王'], ['介面設計', 1, 4, 'bg-brand-500', '60%', '林'], ['前端開發', 3, 7, 'bg-sky-500', '10%', '陳'], ['測試與修正', 6, 8, 'bg-amber-500', '0%', '黃']].map(([n, s, e, c, p, a]) => `      <div class="relative grid grid-cols-[160px_1fr] h-12 items-center border-b border-line/60"><div class="px-4 font-medium text-ink">${n}</div><div class="relative h-full"><div class="absolute top-2.5 h-7 rounded-md ${c} text-white flex items-center gap-1.5 px-1.5 shadow-sm" style="left:${(s / 8) * 100}%;width:calc(${((e - s) / 8) * 100}% - 4px)"><span class="w-4 h-4 rounded-full bg-white/30 grid place-items-center text-[9px]">${a}</span><span class="font-semibold">${p}</span></div></div></div>`).join('\n')}
      <div class="relative grid grid-cols-[160px_1fr] h-12 items-center"><div class="px-4 font-medium text-ink"><i class="fa-solid fa-flag-checkered mr-1.5 text-ink-faint"></i>正式上線</div><div class="relative h-full"><span class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 rotate-45 rounded-[3px] bg-rose-500" style="left:calc(100% - 14px)"></span></div></div>
    </div>
  </div>
</div>`,
      },
      {
        name: '日期橫條選擇',
        en: 'Date Strip Picker',
        tags: ['日期', '行動版'],
        spec: [
          '行動 App 常見的水平日期選擇列：顯示一週七天，每格為星期（小字）與日期（大字）上下排列。',
          '選取的日期為主色實心圓角膠囊、白字；今天以日期下方的小圓點標示；有行程的日期以灰色小點標示。',
          '左右兩端為切換週次的箭頭按鈕，上方顯示月份。',
        ],
        html: `<div class="w-[360px] max-w-full p-4 rounded-2xl border border-line bg-surface shadow-sm">
  <div class="flex items-center justify-between mb-3"><p class="text-sm font-semibold text-ink">2026 年 11 月</p><div class="flex gap-1"><button type="button" aria-label="上一週" class="w-7 h-7 rounded-lg text-ink-faint hover:bg-subtle"><i class="fa-solid fa-chevron-left text-[10px]"></i></button><button type="button" aria-label="下一週" class="w-7 h-7 rounded-lg text-ink-faint hover:bg-subtle"><i class="fa-solid fa-chevron-right text-[10px]"></i></button></div></div>
  <div data-pick data-on="bg-brand-600 text-white [&_span]:text-white/75" data-off="text-ink hover:bg-subtle [&_span]:text-ink-faint" class="grid grid-cols-7 gap-1">
${[['日', 1], ['一', 2], ['二', 3], ['三', 4], ['四', 5], ['五', 6], ['六', 7]].map(([w, d]) => `    <button type="button" data-item ${d === 4 ? 'aria-selected="true"' : ''} onclick="UIK.pick(this)" class="relative py-2 rounded-xl text-center transition ${d === 4 ? 'bg-brand-600 text-white [&_span]:text-white/75' : 'text-ink hover:bg-subtle [&_span]:text-ink-faint'}"><span class="block text-[10px]">${w}</span><b class="block text-base font-semibold tabular-nums">${d}</b>${d === 3 ? '<i class="absolute left-1/2 bottom-1 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-600"></i>' : [5, 6].includes(d) ? '<i class="absolute left-1/2 bottom-1 -translate-x-1/2 w-1 h-1 rounded-full bg-ink-faint"></i>' : ''}</button>`).join('\n')}
  </div>
</div>`,
      },
      {
        name: '提交歷史',
        en: 'Commit History',
        tags: ['開發者', 'Git'],
        spec: [
          '類似 GitHub 的提交紀錄：依日期分組（「11 月 3 日」小標題附 fa-code-commit 圖示），每組內為提交列表卡片。',
          '每筆提交包含提交訊息（粗體）、作者頭像與名稱、相對時間，右側為等寬字的短 hash 與複製按鈕。',
          '已驗證簽章的提交附 emerald「已驗證」小徽章。',
        ],
        html: `<div class="w-[460px] max-w-full">
  <p class="mb-2 flex items-center gap-2 text-xs font-medium text-ink-faint"><i class="fa-solid fa-code-commit"></i>11 月 3 日</p>
  <div class="rounded-xl border border-line bg-surface divide-y divide-line">
${[['修正結帳頁面金額計算錯誤', '陳', 'bg-amber-500', 'chenjh', '12 分鐘前', 'a3f9c21', true], ['新增深色模式的表格樣式', '林', 'bg-pink-500', 'jiaying', '2 小時前', '7be04d8', true], ['更新相依套件版本', '黃', 'bg-emerald-500', 'zhiwei', '5 小時前', 'c19a6f2', false]].map(([m, a, c, u, t, h, v]) => `    <div class="flex items-center gap-3 p-3.5"><div class="flex-1 min-w-0"><p class="text-sm font-medium text-ink truncate">${m}</p><p class="mt-1 flex items-center gap-1.5 text-xs text-ink-faint"><span class="w-4 h-4 rounded-full ${c} text-white grid place-items-center text-[8px]">${a}</span><span class="font-medium text-ink-soft">${u}</span>提交於 ${t}</p></div>${v ? '<span class="px-1.5 py-0.5 rounded-full border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 text-[10px] font-medium">已驗證</span>' : ''}<span class="inline-flex items-center rounded-md border border-line overflow-hidden"><span class="px-2 h-7 grid place-items-center font-mono text-xs text-ink-soft">${h}</span><button type="button" onclick="UIK.copy(this,'${h}')" aria-label="複製 hash" class="w-7 h-7 border-l border-line grid place-items-center text-ink-faint hover:bg-subtle"><i class="fa-regular fa-copy text-[11px]"></i></button></span></div>`).join('\n')}
  </div>
</div>`,
      },
    ],
  });
})();
