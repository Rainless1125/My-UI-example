(window.UI_ATLAS = window.UI_ATLAS || []).push({
  id: 'loading',
  name: '載入與進度',
  en: 'Loading & Progress',
  icon: 'fa-solid fa-spinner',
  desc: '旋轉器、跳動點、骨架屏、線性與環形進度、儀表、倒數與任務清單，讓等待時間變得可預期又不無聊。',
  items: [
    {
      name: '旋轉載入器組',
      en: 'Spinner Set',
      tags: ['Spinner', '基礎'],
      spec: [
        '四種旋轉器並排：細圓環缺口（border-t-transparent）、雙色圓環、SVG 描邊伸縮弧線、Font Awesome fa-circle-notch。',
        '尺寸統一 32px，主色為 indigo；SVG 版本同時旋轉並改變 stroke-dasharray 產生伸縮效果。',
        '每個旋轉器附 role="status" 與 sr-only「載入中」文字。',
      ],
      html: `<div class="flex items-center gap-8">
  <span role="status" class="w-8 h-8 rounded-full border-[3px] border-brand-600 border-t-transparent animate-spin"><span class="sr-only">載入中</span></span>
  <span role="status" class="w-8 h-8 rounded-full border-[3px] border-brand-500/20 border-t-brand-600 animate-spin"><span class="sr-only">載入中</span></span>
  <svg role="status" viewBox="0 0 50 50" class="w-8 h-8 animate-spin [animation-duration:1.4s]"><circle cx="25" cy="25" r="20" fill="none" stroke="#4f46e5" stroke-width="5" stroke-linecap="round" class="animate-dash"/></svg>
  <i role="status" aria-label="載入中" class="fa-solid fa-circle-notch fa-spin text-3xl text-brand-600"></i>
</div>`,
    },
    {
      name: '跳動圓點',
      en: 'Bouncing Dots',
      tags: ['Dots', '輕量'],
      spec: [
        '三個 10px 圓點依序上下跳動，每個延遲 0.15 秒，跳起時透明度由 45% 變為 100%。',
        '提供三種配色：主色、深灰、漸層（indigo → pink）。',
        '動畫週期 1.2 秒，ease-in-out 無限循環。',
      ],
      html: `<div class="flex items-center gap-10">
  <span class="flex gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-brand-600 animate-hop"></span><span class="w-2.5 h-2.5 rounded-full bg-brand-600 animate-hop [animation-delay:.15s]"></span><span class="w-2.5 h-2.5 rounded-full bg-brand-600 animate-hop [animation-delay:.3s]"></span></span>
  <span class="flex gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-ink animate-hop"></span><span class="w-2.5 h-2.5 rounded-full bg-ink animate-hop [animation-delay:.15s]"></span><span class="w-2.5 h-2.5 rounded-full bg-ink animate-hop [animation-delay:.3s]"></span></span>
  <span class="flex gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-hop"></span><span class="w-2.5 h-2.5 rounded-full bg-fuchsia-500 animate-hop [animation-delay:.15s]"></span><span class="w-2.5 h-2.5 rounded-full bg-pink-500 animate-hop [animation-delay:.3s]"></span></span>
</div>`,
    },
    {
      name: '音波等化器',
      en: 'Equalizer Bars',
      tags: ['音訊', '長條'],
      spec: [
        '五條 4px 寬的圓角長條，以 scaleY 在 35%–100% 之間交錯伸縮，模擬音樂播放中的等化器。',
        '每條延遲不同（0、0.2、0.4、0.1、0.3 秒），transform-origin 置於底部。',
        '旁邊附「正在播放」文字與歌名，長條顏色為 emerald。',
      ],
      html: `<div class="flex items-center gap-3 h-12 pl-3 pr-4 rounded-full border border-line bg-surface shadow-sm">
  <span class="flex items-end gap-[3px] h-5">
    <span class="w-1 h-full rounded-full bg-emerald-500 origin-bottom animate-equalize"></span>
    <span class="w-1 h-full rounded-full bg-emerald-500 origin-bottom animate-equalize [animation-delay:.2s]"></span>
    <span class="w-1 h-full rounded-full bg-emerald-500 origin-bottom animate-equalize [animation-delay:.4s]"></span>
    <span class="w-1 h-full rounded-full bg-emerald-500 origin-bottom animate-equalize [animation-delay:.1s]"></span>
    <span class="w-1 h-full rounded-full bg-emerald-500 origin-bottom animate-equalize [animation-delay:.3s]"></span>
  </span>
  <span class="text-sm"><span class="text-ink-faint text-xs">正在播放</span> <span class="font-medium text-ink">夏日微風</span></span>
</div>`,
    },
    {
      name: '骨架屏卡片',
      en: 'Skeleton Card',
      tags: ['Skeleton', '流光'],
      spec: [
        '與真實卡片相同結構的骨架：封面矩形、頭像圓形、兩行標題與三行內文長條。',
        '骨架底色為淺灰（subtle），表面有一道由左至右掃過的淡白色流光（linear-gradient + background-position 動畫）。',
        '長條圓角 6px、寬度錯落（100%、80%、60%）以模擬真實文字。',
      ],
      html: `<div class="w-72 p-4 rounded-2xl border border-line bg-surface shadow-sm" aria-busy="true">
  <div class="aspect-video rounded-xl bg-subtle bg-[linear-gradient(90deg,transparent,rgb(255_255_255/.6),transparent)] dark:bg-[linear-gradient(90deg,transparent,rgb(255_255_255/.06),transparent)] bg-[length:200%_100%] animate-shimmer"></div>
  <div class="mt-4 flex items-center gap-3">
    <span class="w-9 h-9 rounded-full bg-subtle bg-[linear-gradient(90deg,transparent,rgb(255_255_255/.6),transparent)] dark:bg-[linear-gradient(90deg,transparent,rgb(255_255_255/.06),transparent)] bg-[length:200%_100%] animate-shimmer"></span>
    <div class="flex-1 space-y-2"><div class="h-3 w-3/4 rounded-md bg-subtle bg-[linear-gradient(90deg,transparent,rgb(255_255_255/.6),transparent)] dark:bg-[linear-gradient(90deg,transparent,rgb(255_255_255/.06),transparent)] bg-[length:200%_100%] animate-shimmer"></div><div class="h-2.5 w-1/2 rounded-md bg-subtle bg-[linear-gradient(90deg,transparent,rgb(255_255_255/.6),transparent)] dark:bg-[linear-gradient(90deg,transparent,rgb(255_255_255/.06),transparent)] bg-[length:200%_100%] animate-shimmer"></div></div>
  </div>
  <div class="mt-4 space-y-2"><div class="h-2.5 w-full rounded-md bg-subtle bg-[linear-gradient(90deg,transparent,rgb(255_255_255/.6),transparent)] dark:bg-[linear-gradient(90deg,transparent,rgb(255_255_255/.06),transparent)] bg-[length:200%_100%] animate-shimmer"></div><div class="h-2.5 w-4/5 rounded-md bg-subtle bg-[linear-gradient(90deg,transparent,rgb(255_255_255/.6),transparent)] dark:bg-[linear-gradient(90deg,transparent,rgb(255_255_255/.06),transparent)] bg-[length:200%_100%] animate-shimmer"></div><div class="h-2.5 w-3/5 rounded-md bg-subtle bg-[linear-gradient(90deg,transparent,rgb(255_255_255/.6),transparent)] dark:bg-[linear-gradient(90deg,transparent,rgb(255_255_255/.06),transparent)] bg-[length:200%_100%] animate-shimmer"></div></div>
</div>`,
    },
    {
      name: '骨架列表',
      en: 'Skeleton List',
      tags: ['Skeleton', '脈衝'],
      spec: [
        '三列列表骨架，每列為左側 40px 圓角方塊、中間兩條長短不一的文字條、右側小膠囊。',
        '使用 animate-pulse 呼吸式透明度變化（與流光版本做出區隔），列與列之間有分隔線。',
        '容器加上 aria-busy="true" 與 sr-only「載入中」。',
      ],
      html: `<div class="w-80 rounded-2xl border border-line bg-surface divide-y divide-line" aria-busy="true">
  <span class="sr-only">載入中</span>
  <div class="flex items-center gap-3 p-4 animate-pulse"><span class="w-10 h-10 rounded-xl bg-subtle"></span><div class="flex-1 space-y-2"><div class="h-3 w-2/3 rounded bg-subtle"></div><div class="h-2.5 w-1/3 rounded bg-subtle"></div></div><span class="w-12 h-5 rounded-full bg-subtle"></span></div>
  <div class="flex items-center gap-3 p-4 animate-pulse [animation-delay:.15s]"><span class="w-10 h-10 rounded-xl bg-subtle"></span><div class="flex-1 space-y-2"><div class="h-3 w-1/2 rounded bg-subtle"></div><div class="h-2.5 w-2/5 rounded bg-subtle"></div></div><span class="w-12 h-5 rounded-full bg-subtle"></span></div>
  <div class="flex items-center gap-3 p-4 animate-pulse [animation-delay:.3s]"><span class="w-10 h-10 rounded-xl bg-subtle"></span><div class="flex-1 space-y-2"><div class="h-3 w-3/4 rounded bg-subtle"></div><div class="h-2.5 w-1/4 rounded bg-subtle"></div></div><span class="w-12 h-5 rounded-full bg-subtle"></span></div>
</div>`,
    },
    {
      name: '線性進度條',
      en: 'Linear Progress',
      tags: ['Progress', '標籤'],
      spec: [
        '三條不同情境的進度條：上方為標題與右側百分比，下方為 8px 高圓角軌道與主色填充。',
        '顏色依狀態：一般為主色、完成為 emerald（附 fa-circle-check）、警告為 amber。',
        '使用 role="progressbar" 並設定 aria-valuenow / aria-valuemin / aria-valuemax。',
      ],
      html: `<div class="w-80 space-y-5 text-sm">
  <div><div class="flex justify-between mb-2"><span class="font-medium text-ink">個人資料完成度</span><span class="text-ink-soft tabular-nums">64%</span></div><div role="progressbar" aria-valuenow="64" aria-valuemin="0" aria-valuemax="100" class="h-2 rounded-full bg-subtle overflow-hidden"><div class="h-full w-[64%] rounded-full bg-brand-600"></div></div></div>
  <div><div class="flex justify-between mb-2"><span class="font-medium text-ink">資料備份</span><span class="text-emerald-600 dark:text-emerald-400"><i class="fa-solid fa-circle-check mr-1"></i>完成</span></div><div role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="h-2 rounded-full bg-subtle overflow-hidden"><div class="h-full w-full rounded-full bg-emerald-500"></div></div></div>
  <div><div class="flex justify-between mb-2"><span class="font-medium text-ink">磁碟使用量</span><span class="text-amber-600 tabular-nums">87%</span></div><div role="progressbar" aria-valuenow="87" aria-valuemin="0" aria-valuemax="100" class="h-2 rounded-full bg-subtle overflow-hidden"><div class="h-full w-[87%] rounded-full bg-amber-500"></div></div></div>
</div>`,
    },
    {
      name: '不確定進度條',
      en: 'Indeterminate Progress',
      tags: ['Progress', '未知時長'],
      spec: [
        '無法預估時間時使用：4px 高的軌道中，一段 33% 寬的主色滑塊由左往右循環滑過。',
        '滑塊以 translateX(-100%) → translateX(300%) 動畫，緩動曲線 cubic-bezier(.65,0,.35,1)，週期 1.4 秒。',
        '上方附 fa-circle-notch 旋轉圖示與「正在同步資料…」文字。',
      ],
      html: `<div class="w-80">
  <p class="mb-3 text-sm text-ink-soft"><i class="fa-solid fa-circle-notch fa-spin mr-2 text-brand-600"></i>正在同步資料…</p>
  <div role="progressbar" aria-label="同步中" class="h-1 rounded-full bg-brand-500/15 overflow-hidden"><div class="h-full w-1/3 rounded-full bg-brand-600 animate-indeterminate"></div></div>
</div>`,
    },
    {
      name: '環形進度',
      en: 'Circular Progress',
      tags: ['Progress', 'SVG'],
      spec: [
        '三個 SVG 環形進度（72px）：圓周 = 2πr，以 stroke-dasharray 與 stroke-dashoffset 表示百分比，並旋轉 -90 度從頂部開始。',
        '中央顯示百分比數字，下方附標籤；三者分別為主色 75%、emerald 92%、rose 38%。',
        '描邊寬 6px、圓頭端點（stroke-linecap: round），軌道為淺灰。',
      ],
      html: `<div class="flex gap-8 text-center">
  <div><div class="relative w-[72px] h-[72px]"><svg viewBox="0 0 72 72" class="w-full h-full -rotate-90"><circle cx="36" cy="36" r="30" fill="none" stroke="rgb(var(--subtle))" stroke-width="6"/><circle cx="36" cy="36" r="30" fill="none" stroke="#4f46e5" stroke-width="6" stroke-linecap="round" stroke-dasharray="188.5" stroke-dashoffset="47.1"/></svg><span class="absolute inset-0 grid place-items-center text-sm font-semibold text-ink tabular-nums">75%</span></div><p class="mt-2 text-xs text-ink-faint">任務</p></div>
  <div><div class="relative w-[72px] h-[72px]"><svg viewBox="0 0 72 72" class="w-full h-full -rotate-90"><circle cx="36" cy="36" r="30" fill="none" stroke="rgb(var(--subtle))" stroke-width="6"/><circle cx="36" cy="36" r="30" fill="none" stroke="#10b981" stroke-width="6" stroke-linecap="round" stroke-dasharray="188.5" stroke-dashoffset="15.1"/></svg><span class="absolute inset-0 grid place-items-center text-sm font-semibold text-ink tabular-nums">92%</span></div><p class="mt-2 text-xs text-ink-faint">出席率</p></div>
  <div><div class="relative w-[72px] h-[72px]"><svg viewBox="0 0 72 72" class="w-full h-full -rotate-90"><circle cx="36" cy="36" r="30" fill="none" stroke="rgb(var(--subtle))" stroke-width="6"/><circle cx="36" cy="36" r="30" fill="none" stroke="#f43f5e" stroke-width="6" stroke-linecap="round" stroke-dasharray="188.5" stroke-dashoffset="116.9"/></svg><span class="absolute inset-0 grid place-items-center text-sm font-semibold text-ink tabular-nums">38%</span></div><p class="mt-2 text-xs text-ink-faint">預算</p></div>
</div>`,
    },
    {
      name: '分段步驟進度',
      en: 'Segmented Progress',
      tags: ['Progress', '步驟'],
      spec: [
        '五段等寬的細長條（間距 4px），已完成段為主色、進行中段為主色並帶有流光、未開始為淺灰。',
        '上方左側為目前步驟名稱「上傳文件」，右側為「步驟 3 / 5」。',
        '下方以小字列出各段名稱並與長條對齊。',
      ],
      html: `<div class="w-96 max-w-full">
  <div class="flex justify-between mb-2.5 text-sm"><span class="font-medium text-ink">上傳文件</span><span class="text-ink-faint">步驟 3 / 5</span></div>
  <div class="grid grid-cols-5 gap-1">
    <span class="h-1.5 rounded-full bg-brand-600"></span><span class="h-1.5 rounded-full bg-brand-600"></span>
    <span class="h-1.5 rounded-full bg-brand-600 bg-[linear-gradient(90deg,transparent,rgb(255_255_255/.6),transparent)] bg-[length:200%_100%] animate-shimmer"></span>
    <span class="h-1.5 rounded-full bg-subtle"></span><span class="h-1.5 rounded-full bg-subtle"></span>
  </div>
  <div class="mt-2 grid grid-cols-5 gap-1 text-[10px] text-center text-ink-faint"><span>帳號</span><span>資料</span><span class="text-brand-600 dark:text-brand-400 font-medium">文件</span><span>審核</span><span>完成</span></div>
</div>`,
    },
    {
      name: '儲存空間堆疊條',
      en: 'Stacked Usage Bar',
      tags: ['用量', '圖例'],
      spec: [
        '一條 12px 高的多色堆疊長條，依類別比例分段：文件（indigo）、圖片（pink）、影片（amber）、其他（teal），段落間 2px 間隙。',
        '上方顯示「已使用 68.4 GB / 100 GB」大字，下方為圖例（色點 + 類別 + 容量）的兩欄網格。',
        '長條每段 hover 時加深並顯示 title 提示。',
      ],
      html: `<div class="w-96 max-w-full p-5 rounded-2xl border border-line bg-surface shadow-sm">
  <p class="text-sm text-ink-soft">已使用 <span class="text-lg font-semibold text-ink">68.4 GB</span> / 100 GB</p>
  <div class="mt-3 flex gap-0.5 h-3 rounded-full overflow-hidden bg-subtle">
    <span title="文件 24 GB" class="w-[24%] bg-indigo-500 hover:bg-indigo-600"></span><span title="圖片 18 GB" class="w-[18%] bg-pink-500 hover:bg-pink-600"></span><span title="影片 20 GB" class="w-[20%] bg-amber-400 hover:bg-amber-500"></span><span title="其他 6.4 GB" class="w-[6.4%] bg-teal-500 hover:bg-teal-600"></span>
  </div>
  <div class="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
    <span class="flex items-center gap-2 text-ink-soft"><span class="w-2 h-2 rounded-full bg-indigo-500"></span>文件<span class="ml-auto font-medium text-ink">24 GB</span></span>
    <span class="flex items-center gap-2 text-ink-soft"><span class="w-2 h-2 rounded-full bg-pink-500"></span>圖片<span class="ml-auto font-medium text-ink">18 GB</span></span>
    <span class="flex items-center gap-2 text-ink-soft"><span class="w-2 h-2 rounded-full bg-amber-400"></span>影片<span class="ml-auto font-medium text-ink">20 GB</span></span>
    <span class="flex items-center gap-2 text-ink-soft"><span class="w-2 h-2 rounded-full bg-teal-500"></span>其他<span class="ml-auto font-medium text-ink">6.4 GB</span></span>
  </div>
</div>`,
    },
    {
      name: '檔案上傳進度列',
      en: 'File Upload Progress',
      tags: ['上傳', '可取消'],
      spec: [
        '卡片式上傳列：左側為檔案類型圖示方塊，中間為檔名、「2.4 MB / 5.8 MB · 剩餘 12 秒」與細進度條。',
        '右側為取消 fa-xmark 按鈕；完成狀態變體以 emerald 邊框與 fa-circle-check 顯示。',
        '進度條為主色，寬度轉場 300ms。',
      ],
      html: `<div class="w-96 max-w-full space-y-2.5">
  <div class="flex items-center gap-3 p-3.5 rounded-xl border border-line bg-surface shadow-sm">
    <span class="w-10 h-10 rounded-lg bg-rose-500/10 text-rose-600 grid place-items-center"><i class="fa-solid fa-file-pdf"></i></span>
    <div class="flex-1 min-w-0"><p class="text-sm font-medium text-ink truncate">年度財務報告.pdf</p><p class="text-[11px] text-ink-faint">2.4 MB / 5.8 MB · 剩餘 12 秒</p><div class="mt-1.5 h-1 rounded-full bg-subtle overflow-hidden"><div class="h-full w-[41%] rounded-full bg-brand-600 transition-all duration-300"></div></div></div>
    <button type="button" aria-label="取消上傳" class="w-7 h-7 rounded-lg grid place-items-center text-ink-faint hover:bg-subtle hover:text-ink"><i class="fa-solid fa-xmark text-xs"></i></button>
  </div>
  <div class="flex items-center gap-3 p-3.5 rounded-xl border border-emerald-500/40 bg-emerald-500/[.04]">
    <span class="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-600 grid place-items-center"><i class="fa-solid fa-file-image"></i></span>
    <div class="flex-1 min-w-0"><p class="text-sm font-medium text-ink truncate">封面設計.png</p><p class="text-[11px] text-emerald-600 dark:text-emerald-400">上傳完成 · 1.2 MB</p></div>
    <i class="fa-solid fa-circle-check text-emerald-500"></i>
  </div>
</div>`,
    },
    {
      name: '條紋動態進度',
      en: 'Striped Progress',
      tags: ['Progress', '條紋'],
      spec: [
        '12px 高的進度條，填充區為主色並疊加 45 度白色半透明斜條紋，條紋持續向右移動。',
        '條紋以 repeating-linear-gradient 製作，background-size 1.5rem，動畫 0.8 秒線性循環。',
        '進度條右端顯示百分比膠囊。',
      ],
      html: `<div class="w-80">
  <div class="flex items-center justify-between mb-2 text-sm"><span class="font-medium text-ink">安裝套件中</span><span class="px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-semibold tabular-nums">72%</span></div>
  <div class="h-3 rounded-full bg-subtle overflow-hidden"><div class="h-full w-[72%] rounded-full bg-brand-600 bg-[repeating-linear-gradient(45deg,rgb(255_255_255/.22)_0,rgb(255_255_255/.22)_.375rem,transparent_.375rem,transparent_.75rem)] bg-[length:1.5rem_1.5rem] animate-stripes"></div></div>
  <p class="mt-2 text-xs font-mono text-ink-faint">@atlas/ui · 正在解壓縮…</p>
</div>`,
    },
    {
      name: '雷達脈衝',
      en: 'Radar Pulse',
      tags: ['搜尋中', '光環'],
      spec: [
        '中央 48px 主色圓形，內有白色 fa-satellite-dish 圖示；外圍三層同心光環由小擴大並淡出。',
        '三層光環動畫延遲 0、0.7、1.4 秒，週期 2.2 秒，營造持續掃描的感覺。',
        '下方為「正在搜尋附近的裝置…」文字。',
      ],
      html: `<div class="text-center">
  <div class="relative mx-auto w-24 h-24 grid place-items-center">
    <span class="absolute w-12 h-12 rounded-full bg-brand-500/40 animate-radar"></span>
    <span class="absolute w-12 h-12 rounded-full bg-brand-500/40 animate-radar [animation-delay:.7s]"></span>
    <span class="absolute w-12 h-12 rounded-full bg-brand-500/40 animate-radar [animation-delay:1.4s]"></span>
    <span class="relative w-12 h-12 rounded-full bg-brand-600 text-white grid place-items-center shadow-lg shadow-brand-600/40"><i class="fa-solid fa-satellite-dish"></i></span>
  </div>
  <p class="mt-4 text-sm text-ink-soft">正在搜尋附近的裝置…</p>
</div>`,
    },
    {
      name: '軌道載入器',
      en: 'Orbit Loader',
      tags: ['Spinner', '軌道'],
      spec: [
        '中央為小型主色圓點，外圍兩條不同大小的細圓形軌道（虛線邊框），各有一顆小圓點沿軌道旋轉。',
        '內圈 3 秒順時針、外圈 5 秒逆時針旋轉，速度不同營造行星運行感。',
        '整體 80px，顏色為主色與 pink。',
      ],
      html: `<div class="relative w-20 h-20 grid place-items-center" role="status" aria-label="載入中">
  <span class="w-3 h-3 rounded-full bg-brand-600"></span>
  <span class="absolute w-12 h-12 rounded-full border border-dashed border-brand-500/40 animate-spin-slow"><span class="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-brand-500"></span></span>
  <span class="absolute w-20 h-20 rounded-full border border-dashed border-pink-500/30 animate-[spin_5s_linear_infinite_reverse]"><span class="absolute top-1/2 -right-1 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-pink-500"></span></span>
</div>`,
    },
    {
      name: '頁面頂部載入條',
      en: 'Top Loading Bar',
      tags: ['路由切換', '瀏覽器'],
      wide: true,
      spec: [
        '模擬瀏覽器視窗：頂部為三個圓點與網址列，網址列下緣有一條 2px 的主色進度條（類似 NProgress）。',
        '進度條右端帶有發光的尖端（box-shadow），寬度約 60% 並以不確定動畫緩慢推進。',
        '頁面內容區以骨架長條表示尚在載入。',
      ],
      html: `<div class="w-full max-w-2xl rounded-xl border border-line bg-surface shadow-lift overflow-hidden">
  <div class="relative flex items-center gap-3 px-4 h-10 bg-subtle border-b border-line">
    <span class="flex gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-rose-400"></span><span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span><span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span></span>
    <span class="flex-1 max-w-sm mx-auto h-6 px-3 rounded-md bg-surface text-[11px] text-ink-faint flex items-center gap-2"><i class="fa-solid fa-lock text-[9px]"></i>atlas.app/dashboard</span>
    <span class="absolute left-0 bottom-0 h-0.5 w-[62%] bg-brand-600 shadow-[0_0_10px_#6366f1,0_0_4px_#6366f1] transition-all"><span class="absolute right-0 -top-px w-16 h-[3px] bg-brand-400 blur-[2px]"></span></span>
  </div>
  <div class="p-6 space-y-3 animate-pulse"><div class="h-5 w-48 rounded bg-subtle"></div><div class="grid grid-cols-3 gap-3"><div class="h-20 rounded-xl bg-subtle"></div><div class="h-20 rounded-xl bg-subtle"></div><div class="h-20 rounded-xl bg-subtle"></div></div><div class="h-3 w-full rounded bg-subtle"></div></div>
</div>`,
    },
    {
      name: '輸入中指示',
      en: 'Typing Indicator',
      tags: ['聊天', '即時'],
      spec: [
        '聊天介面中的對方訊息泡泡（左下角為直角），內有三個灰色跳動圓點表示對方正在輸入。',
        '泡泡上方為對方的一則完整訊息，左側為頭像；下方小字「王小明正在輸入…」。',
        '圓點 6px，跳動延遲 0.15 秒遞增。',
      ],
      html: `<div class="w-72 space-y-2">
  <div class="flex items-end gap-2"><span class="w-7 h-7 rounded-full bg-sky-500 text-white grid place-items-center text-[11px]">王</span><div class="px-3.5 py-2 rounded-2xl rounded-bl-md bg-subtle text-sm text-ink">我剛看完設計稿了</div></div>
  <div class="flex items-end gap-2"><span class="w-7"></span><div class="flex gap-1 px-4 py-3 rounded-2xl rounded-bl-md bg-subtle" aria-label="對方正在輸入"><span class="w-1.5 h-1.5 rounded-full bg-ink-faint animate-hop"></span><span class="w-1.5 h-1.5 rounded-full bg-ink-faint animate-hop [animation-delay:.15s]"></span><span class="w-1.5 h-1.5 rounded-full bg-ink-faint animate-hop [animation-delay:.3s]"></span></div></div>
  <p class="pl-9 text-[11px] text-ink-faint">王小明正在輸入…</p>
</div>`,
    },
    {
      name: 'AI 生成中提示',
      en: 'AI Generating Shimmer',
      tags: ['AI', '流光文字'],
      spec: [
        '文字「正在思考並生成回答…」使用灰 → 主色 → 灰的漸層並以 bg-clip-text 呈現，漸層持續橫向流動。',
        '左側為旋轉的 fa-wand-magic-sparkles 主色圖示（緩慢旋轉）。',
        '下方為三條寬度遞減的流光骨架長條，模擬即將出現的段落。',
      ],
      html: `<div class="w-80">
  <p class="flex items-center gap-2.5 text-sm font-medium">
    <i class="fa-solid fa-wand-magic-sparkles text-brand-500 animate-pulse"></i>
    <span class="bg-[linear-gradient(90deg,rgb(var(--ink-faint)),#6366f1,#ec4899,rgb(var(--ink-faint)))] bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">正在思考並生成回答…</span>
  </p>
  <div class="mt-4 space-y-2.5">
    <div class="h-2.5 w-full rounded-full bg-[linear-gradient(90deg,rgb(var(--subtle)),rgb(99_102_241/.18),rgb(var(--subtle)))] bg-[length:200%_100%] animate-shimmer"></div>
    <div class="h-2.5 w-11/12 rounded-full bg-[linear-gradient(90deg,rgb(var(--subtle)),rgb(99_102_241/.18),rgb(var(--subtle)))] bg-[length:200%_100%] animate-shimmer [animation-delay:.2s]"></div>
    <div class="h-2.5 w-3/5 rounded-full bg-[linear-gradient(90deg,rgb(var(--subtle)),rgb(99_102_241/.18),rgb(var(--subtle)))] bg-[length:200%_100%] animate-shimmer [animation-delay:.4s]"></div>
  </div>
</div>`,
    },
    {
      name: '倒數計時環',
      en: 'Countdown Timer',
      tags: ['倒數', '計時'],
      spec: [
        '四個方塊並排顯示「天、時、分、秒」，每個方塊為深色底、白色 28px 等寬數字與下方小標籤。',
        '方塊之間以冒號分隔；秒數方塊外圍有主色細邊框強調。',
        '上方標題「限時優惠倒數」附 fa-hourglass-half 圖示。',
      ],
      html: `<div class="text-center">
  <p class="text-sm font-medium text-ink-soft"><i class="fa-solid fa-hourglass-half mr-1.5 text-amber-500"></i>限時優惠倒數</p>
  <div class="mt-3 flex items-center gap-2 font-mono">
    <div class="w-16 py-2.5 rounded-xl bg-zinc-900 text-white"><p class="text-2xl font-semibold tabular-nums">02</p><p class="text-[10px] font-sans text-zinc-400">天</p></div><span class="text-xl font-bold text-ink-faint">:</span>
    <div class="w-16 py-2.5 rounded-xl bg-zinc-900 text-white"><p class="text-2xl font-semibold tabular-nums">14</p><p class="text-[10px] font-sans text-zinc-400">時</p></div><span class="text-xl font-bold text-ink-faint">:</span>
    <div class="w-16 py-2.5 rounded-xl bg-zinc-900 text-white"><p class="text-2xl font-semibold tabular-nums">36</p><p class="text-[10px] font-sans text-zinc-400">分</p></div><span class="text-xl font-bold text-ink-faint">:</span>
    <div class="w-16 py-2.5 rounded-xl bg-zinc-900 text-white ring-2 ring-brand-500 ring-offset-2 ring-offset-canvas"><p class="text-2xl font-semibold tabular-nums">08</p><p class="text-[10px] font-sans text-zinc-400">秒</p></div>
  </div>
</div>`,
    },
    {
      name: '任務執行清單',
      en: 'Task Progress Checklist',
      tags: ['部署', '步驟狀態'],
      spec: [
        '部署流程的步驟清單：完成步驟為 emerald fa-circle-check 與耗時、進行中為旋轉的 fa-circle-notch 主色、待處理為灰色空心圓。',
        '進行中步驟的文字為深色粗體，右側顯示即時計時；失敗步驟示範可省略。',
        '卡片頂部顯示整體進度「3 / 5」與細進度條。',
      ],
      html: `<div class="w-80 rounded-2xl border border-line bg-surface shadow-sm">
  <div class="p-4 border-b border-line"><div class="flex justify-between text-sm"><span class="font-semibold text-ink"><i class="fa-solid fa-rocket mr-2 text-ink-faint"></i>部署至正式環境</span><span class="text-ink-faint">3 / 5</span></div><div class="mt-2.5 h-1 rounded-full bg-subtle"><div class="h-full w-3/5 rounded-full bg-brand-600"></div></div></div>
  <ul class="p-4 space-y-3 text-[13px]">
    <li class="flex items-center gap-3"><i class="fa-solid fa-circle-check text-emerald-500"></i><span class="flex-1 text-ink-soft">安裝相依套件</span><span class="font-mono text-[11px] text-ink-faint">12s</span></li>
    <li class="flex items-center gap-3"><i class="fa-solid fa-circle-check text-emerald-500"></i><span class="flex-1 text-ink-soft">執行測試</span><span class="font-mono text-[11px] text-ink-faint">48s</span></li>
    <li class="flex items-center gap-3"><i class="fa-solid fa-circle-check text-emerald-500"></i><span class="flex-1 text-ink-soft">建置產出檔</span><span class="font-mono text-[11px] text-ink-faint">1m 06s</span></li>
    <li class="flex items-center gap-3"><i class="fa-solid fa-circle-notch fa-spin text-brand-600"></i><span class="flex-1 font-semibold text-ink">上傳至 CDN</span><span class="font-mono text-[11px] text-brand-600">0:14</span></li>
    <li class="flex items-center gap-3"><i class="fa-regular fa-circle text-ink-faint"></i><span class="flex-1 text-ink-faint">切換流量</span></li>
  </ul>
</div>`,
    },
    {
      name: '半圓儀表',
      en: 'Gauge Meter',
      tags: ['儀表', 'SVG'],
      spec: [
        'SVG 半圓儀表（180 度弧形），軌道為淺灰，填充弧線為 emerald → amber → rose 的線性漸層，表示 0–100 分。',
        '弧線末端以 stroke-dasharray 控制長度（目前 72 分），中央下方為大字分數與「良好」標籤。',
        '左右兩端顯示 0 與 100 刻度文字。',
      ],
      html: `<div class="w-56 text-center">
  <div class="relative">
    <svg viewBox="0 0 200 110" class="w-full">
      <defs><linearGradient id="gauge-g" x1="0" x2="1"><stop offset="0" stop-color="#10b981"/><stop offset=".55" stop-color="#f59e0b"/><stop offset="1" stop-color="#f43f5e"/></linearGradient></defs>
      <path d="M20 100 A80 80 0 0 1 180 100" fill="none" stroke="rgb(var(--subtle))" stroke-width="14" stroke-linecap="round"/>
      <path d="M20 100 A80 80 0 0 1 180 100" fill="none" stroke="url(#gauge-g)" stroke-width="14" stroke-linecap="round" stroke-dasharray="251.3" stroke-dashoffset="70.4"/>
    </svg>
    <div class="absolute inset-x-0 bottom-0"><p class="text-3xl font-bold text-ink tabular-nums">72</p><p class="text-xs font-medium text-amber-600">效能良好</p></div>
  </div>
  <div class="mt-1 flex justify-between px-2 text-[10px] text-ink-faint"><span>0</span><span>100</span></div>
</div>`,
    },
    {
      name: '圓點環形旋轉',
      en: 'Dot Ring Spinner',
      tags: ['Spinner', '圓點'],
      spec: [
        '八個 6px 圓點平均排列成 36px 的圓環，透明度由 100% 遞減到 20%，整個圓環以階梯式（steps(8)）旋轉。',
        '提供主色與深灰兩種配色並排展示。',
        '使用 role="status" 與 sr-only 文字「載入中」。',
      ],
      html: `<div class="flex items-center gap-10">
  <span role="status" class="relative w-9 h-9 animate-[spin_.9s_steps(8)_infinite]"><span class="sr-only">載入中</span>
    <span class="absolute left-1/2 top-0 -ml-[3px] w-1.5 h-1.5 rounded-full bg-brand-600"></span><span class="absolute left-1/2 top-0 -ml-[3px] w-1.5 h-1.5 rounded-full bg-brand-600 opacity-90 origin-[3px_18px] rotate-45"></span><span class="absolute left-1/2 top-0 -ml-[3px] w-1.5 h-1.5 rounded-full bg-brand-600 opacity-80 origin-[3px_18px] rotate-90"></span><span class="absolute left-1/2 top-0 -ml-[3px] w-1.5 h-1.5 rounded-full bg-brand-600 opacity-70 origin-[3px_18px] rotate-[135deg]"></span><span class="absolute left-1/2 top-0 -ml-[3px] w-1.5 h-1.5 rounded-full bg-brand-600 opacity-60 origin-[3px_18px] rotate-180"></span><span class="absolute left-1/2 top-0 -ml-[3px] w-1.5 h-1.5 rounded-full bg-brand-600 opacity-45 origin-[3px_18px] rotate-[225deg]"></span><span class="absolute left-1/2 top-0 -ml-[3px] w-1.5 h-1.5 rounded-full bg-brand-600 opacity-30 origin-[3px_18px] rotate-[270deg]"></span><span class="absolute left-1/2 top-0 -ml-[3px] w-1.5 h-1.5 rounded-full bg-brand-600 opacity-20 origin-[3px_18px] rotate-[315deg]"></span>
  </span>
  <span role="status" class="relative w-9 h-9 animate-[spin_.9s_steps(8)_infinite]"><span class="sr-only">載入中</span>
    <span class="absolute left-1/2 top-0 -ml-[3px] w-1.5 h-1.5 rounded-full bg-ink"></span><span class="absolute left-1/2 top-0 -ml-[3px] w-1.5 h-1.5 rounded-full bg-ink opacity-90 origin-[3px_18px] rotate-45"></span><span class="absolute left-1/2 top-0 -ml-[3px] w-1.5 h-1.5 rounded-full bg-ink opacity-80 origin-[3px_18px] rotate-90"></span><span class="absolute left-1/2 top-0 -ml-[3px] w-1.5 h-1.5 rounded-full bg-ink opacity-70 origin-[3px_18px] rotate-[135deg]"></span><span class="absolute left-1/2 top-0 -ml-[3px] w-1.5 h-1.5 rounded-full bg-ink opacity-60 origin-[3px_18px] rotate-180"></span><span class="absolute left-1/2 top-0 -ml-[3px] w-1.5 h-1.5 rounded-full bg-ink opacity-45 origin-[3px_18px] rotate-[225deg]"></span><span class="absolute left-1/2 top-0 -ml-[3px] w-1.5 h-1.5 rounded-full bg-ink opacity-30 origin-[3px_18px] rotate-[270deg]"></span><span class="absolute left-1/2 top-0 -ml-[3px] w-1.5 h-1.5 rounded-full bg-ink opacity-20 origin-[3px_18px] rotate-[315deg]"></span>
  </span>
</div>`,
    },
    {
      name: '心跳線動畫',
      en: 'Heartbeat Line',
      tags: ['SVG', '監控'],
      spec: [
        '一條類似心電圖的 SVG 折線，以 stroke-dasharray 與 stroke-dashoffset 動畫從左到右「繪製」出來，循環播放。',
        '線條為 emerald、寬 2.5px、圓角端點，下方有淡色網格背景。',
        '左上角顯示 fa-heart-pulse 圖示與「伺服器監控中」，右上角為即時數值「72 ms」。',
      ],
      html: `<div class="w-80 p-4 rounded-2xl border border-line bg-surface shadow-sm">
  <div class="flex items-center justify-between text-sm"><span class="text-ink-soft"><i class="fa-solid fa-heart-pulse text-emerald-500 mr-2"></i>伺服器監控中</span><span class="font-mono font-semibold text-ink">72 ms</span></div>
  <div class="mt-3 h-20 rounded-lg bg-[linear-gradient(rgb(var(--line)/.6)_1px,transparent_1px),linear-gradient(90deg,rgb(var(--line)/.6)_1px,transparent_1px)] bg-[size:16px_16px]">
    <svg viewBox="0 0 280 80" class="w-full h-full" preserveAspectRatio="none" aria-hidden="true"><path d="M0 40 H70 L82 40 L92 14 L104 66 L116 30 L124 40 H180 L190 40 L198 22 L208 58 L216 40 H280" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="400" class="animate-draw"/></svg>
  </div>
</div>`,
    },
    {
      name: '圖片載入佔位',
      en: 'Image Placeholder',
      tags: ['圖片', 'Skeleton'],
      spec: [
        '三種圖片載入狀態並排：載入中（淺灰底流光加中央 fa-image 圖示）、模糊預覽（低解析漸層加 blur，中央小型旋轉器）、載入完成（清晰漸層）。',
        '每張為 1:1 圓角 12px，下方以小字標示狀態。',
        '流光使用 linear-gradient 背景位移動畫。',
      ],
      html: `<div class="flex gap-4 text-center text-[11px] text-ink-faint">
  <div><div class="w-24 h-24 rounded-xl bg-subtle bg-[linear-gradient(90deg,transparent,rgb(255_255_255/.6),transparent)] dark:bg-[linear-gradient(90deg,transparent,rgb(255_255_255/.06),transparent)] bg-[length:200%_100%] animate-shimmer grid place-items-center"><i class="fa-regular fa-image text-xl text-ink-faint"></i></div><p class="mt-2">載入中</p></div>
  <div><div class="relative w-24 h-24 rounded-xl overflow-hidden"><div class="absolute inset-0 bg-gradient-to-br from-orange-300 via-rose-400 to-indigo-500 blur-md scale-110 opacity-80"></div><span class="absolute inset-0 grid place-items-center"><span class="w-6 h-6 rounded-full border-2 border-white/60 border-t-white animate-spin"></span></span></div><p class="mt-2">模糊預覽</p></div>
  <div><div class="w-24 h-24 rounded-xl bg-gradient-to-br from-orange-300 via-rose-400 to-indigo-500 grid place-items-center"><i class="fa-solid fa-mountain-sun text-2xl text-white/70"></i></div><p class="mt-2">載入完成</p></div>
</div>`,
    },
    {
      name: '方塊網格載入',
      en: 'Grid Loader',
      tags: ['Spinner', '網格'],
      spec: [
        '3 × 3 的小方塊網格（每格 10px、間距 4px、圓角 3px），每格依對角線順序延遲縮放淡出再恢復。',
        '方塊顏色由左上主色漸變到右下 violet。',
        '動畫週期 1.3 秒，延遲以 0.1 秒為單位遞增。',
      ],
      html: `<div role="status" aria-label="載入中" class="grid grid-cols-3 gap-1">
  <span class="w-2.5 h-2.5 rounded-[3px] bg-indigo-500 animate-grid-fade"></span><span class="w-2.5 h-2.5 rounded-[3px] bg-indigo-500 animate-grid-fade [animation-delay:.1s]"></span><span class="w-2.5 h-2.5 rounded-[3px] bg-violet-500 animate-grid-fade [animation-delay:.2s]"></span>
  <span class="w-2.5 h-2.5 rounded-[3px] bg-indigo-500 animate-grid-fade [animation-delay:.1s]"></span><span class="w-2.5 h-2.5 rounded-[3px] bg-violet-500 animate-grid-fade [animation-delay:.2s]"></span><span class="w-2.5 h-2.5 rounded-[3px] bg-violet-500 animate-grid-fade [animation-delay:.3s]"></span>
  <span class="w-2.5 h-2.5 rounded-[3px] bg-violet-500 animate-grid-fade [animation-delay:.2s]"></span><span class="w-2.5 h-2.5 rounded-[3px] bg-violet-500 animate-grid-fade [animation-delay:.3s]"></span><span class="w-2.5 h-2.5 rounded-[3px] bg-fuchsia-500 animate-grid-fade [animation-delay:.4s]"></span>
</div>`,
    },
    {
      name: '排隊等候卡',
      en: 'Queue Position Card',
      tags: ['排隊', '等待'],
      spec: [
        '等待頁面的排隊卡片：頂部為大字「第 12 位」（等寬數字、主色），下方為「前方還有 11 位」。',
        '中間為不確定進度條，下方三欄資訊：預估等待時間、目前線上人數、已等待時間。',
        '底部說明「請勿重新整理頁面，輪到你時會自動進入」，搭配 fa-circle-info。',
      ],
      html: `<div class="w-80 p-6 rounded-[20px] border border-line bg-surface shadow-lift text-center">
  <p class="text-xs font-medium text-ink-faint"><i class="fa-solid fa-users-line mr-1.5"></i>你目前排在</p>
  <p class="mt-1 text-4xl font-bold tracking-tight text-brand-600 dark:text-brand-400 tabular-nums">第 12 位</p>
  <p class="mt-1 text-sm text-ink-soft">前方還有 11 位</p>
  <div class="mt-5 h-1.5 rounded-full bg-brand-500/15 overflow-hidden"><div class="h-full w-1/3 rounded-full bg-brand-600 animate-indeterminate"></div></div>
  <div class="mt-5 grid grid-cols-3 divide-x divide-line text-xs">
    <div><p class="font-semibold text-ink tabular-nums">~3 分</p><p class="text-ink-faint">預估等待</p></div>
    <div><p class="font-semibold text-ink tabular-nums">1,284</p><p class="text-ink-faint">線上人數</p></div>
    <div><p class="font-semibold text-ink tabular-nums">0:48</p><p class="text-ink-faint">已等待</p></div>
  </div>
  <p class="mt-5 text-[11px] text-ink-faint leading-relaxed"><i class="fa-solid fa-circle-info mr-1"></i>請勿重新整理頁面，輪到你時會自動進入。</p>
</div>`,
    },
    {
      name: '錐形漸層進度環',
      en: 'Conic Progress Ring',
      tags: ['Progress', 'conic-gradient'],
      spec: [
        '以 conic-gradient 製作的 112px 進度圓環：已完成部分為 indigo → violet 漸層，其餘為淺灰。',
        '中央以與背景同色的內圓遮住形成 12px 環寬，內圓顯示大字「68%」與「已完成」小字。',
        '外圍加上淡主色光暈，數字使用等寬字。',
      ],
      html: `<div class="relative w-28 h-28 rounded-full bg-[conic-gradient(#6366f1_0%,#a855f7_68%,rgb(var(--subtle))_68%)] shadow-[0_0_32px_-8px_rgb(99_102_241/.6)]" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100">
  <div class="absolute inset-3 rounded-full bg-canvas grid place-items-center text-center"><div><p class="text-2xl font-bold text-ink tabular-nums">68%</p><p class="text-[11px] text-ink-faint">已完成</p></div></div>
</div>`,
    },
    {
      name: '輪播載入訊息',
      en: 'Rotating Status Text',
      tags: ['文字', '步驟'],
      spec: [
        '旋轉器右側為單行高度的文字視窗，內含四句載入訊息（連線伺服器、讀取設定、同步資料、即將完成），每 1.5 秒向上捲動切換一句。',
        '以 overflow-hidden 的固定高度容器與 translateY 百分比動畫實作，切換時有緩動。',
        '整體放在白底膠囊卡片中，左側為主色 fa-circle-notch 旋轉圖示。',
      ],
      html: `<div class="flex items-center gap-3 h-12 pl-4 pr-5 rounded-full border border-line bg-surface shadow-soft" role="status">
  <i class="fa-solid fa-circle-notch fa-spin text-brand-600"></i>
  <div class="h-5 overflow-hidden text-sm text-ink">
    <ul class="animate-ticker">
      <li class="h-5 leading-5">正在連線伺服器…</li>
      <li class="h-5 leading-5">讀取工作區設定…</li>
      <li class="h-5 leading-5">同步最新資料…</li>
      <li class="h-5 leading-5">即將完成…</li>
    </ul>
  </div>
</div>`,
    },
    {
      name: '雲端上傳動畫',
      en: 'Cloud Upload Animation',
      tags: ['上傳', '圖示動畫'],
      spec: [
        '大型 fa-cloud 圖示（主色淡色）中央疊放白色 fa-arrow-up 箭頭，箭頭持續上下跳動（animate-bounce）。',
        '下方為標題「正在上傳 3 個檔案」、細進度條（帶條紋動畫）與「12.4 MB / 18.0 MB」。',
        '整體置中排列於白底卡片中。',
      ],
      html: `<div class="w-72 p-6 rounded-2xl border border-line bg-surface shadow-sm text-center">
  <div class="relative mx-auto w-20 h-16 grid place-items-center">
    <i class="fa-solid fa-cloud text-6xl text-brand-500/20"></i>
    <i class="fa-solid fa-arrow-up absolute text-brand-600 animate-bounce"></i>
  </div>
  <p class="mt-3 text-sm font-semibold text-ink">正在上傳 3 個檔案</p>
  <div class="mt-3 h-2 rounded-full bg-subtle overflow-hidden"><div class="h-full w-[69%] rounded-full bg-brand-600 bg-[repeating-linear-gradient(45deg,rgb(255_255_255/.22)_0,rgb(255_255_255/.22)_.375rem,transparent_.375rem,transparent_.75rem)] bg-[length:1.5rem_1.5rem] animate-stripes"></div></div>
  <p class="mt-2 text-xs font-mono text-ink-faint">12.4 MB / 18.0 MB</p>
</div>`,
    },
    {
      name: '骨架表格',
      en: 'Skeleton Table',
      tags: ['Skeleton', '表格'],
      wide: true,
      spec: [
        '資料表的載入骨架：表頭為真實欄位名稱（灰字），表身為四列骨架長條，每欄長條寬度不同以模擬真實內容。',
        '第一欄包含圓形頭像骨架與兩行文字骨架，狀態欄為膠囊骨架，最後一欄為小方塊骨架。',
        '整體使用 animate-pulse，列與列之間以分隔線區隔，外框圓角 16px。',
      ],
      html: `<div class="w-full max-w-3xl rounded-2xl border border-line bg-surface overflow-hidden" aria-busy="true">
  <div class="grid grid-cols-[2fr_1fr_1fr_1fr_48px] gap-4 px-5 h-11 items-center bg-subtle/60 border-b border-line text-xs font-medium text-ink-faint"><span>成員</span><span>角色</span><span>狀態</span><span>最後上線</span><span></span></div>
  <div class="divide-y divide-line animate-pulse">
    <div class="grid grid-cols-[2fr_1fr_1fr_1fr_48px] gap-4 px-5 h-16 items-center"><div class="flex items-center gap-3"><span class="w-8 h-8 rounded-full bg-subtle"></span><div class="space-y-1.5"><div class="h-2.5 w-28 rounded bg-subtle"></div><div class="h-2 w-36 rounded bg-subtle"></div></div></div><div class="h-2.5 w-16 rounded bg-subtle"></div><div class="h-5 w-14 rounded-full bg-subtle"></div><div class="h-2.5 w-20 rounded bg-subtle"></div><div class="h-6 w-6 rounded-md bg-subtle"></div></div>
    <div class="grid grid-cols-[2fr_1fr_1fr_1fr_48px] gap-4 px-5 h-16 items-center"><div class="flex items-center gap-3"><span class="w-8 h-8 rounded-full bg-subtle"></span><div class="space-y-1.5"><div class="h-2.5 w-24 rounded bg-subtle"></div><div class="h-2 w-32 rounded bg-subtle"></div></div></div><div class="h-2.5 w-12 rounded bg-subtle"></div><div class="h-5 w-14 rounded-full bg-subtle"></div><div class="h-2.5 w-16 rounded bg-subtle"></div><div class="h-6 w-6 rounded-md bg-subtle"></div></div>
    <div class="grid grid-cols-[2fr_1fr_1fr_1fr_48px] gap-4 px-5 h-16 items-center"><div class="flex items-center gap-3"><span class="w-8 h-8 rounded-full bg-subtle"></span><div class="space-y-1.5"><div class="h-2.5 w-32 rounded bg-subtle"></div><div class="h-2 w-28 rounded bg-subtle"></div></div></div><div class="h-2.5 w-20 rounded bg-subtle"></div><div class="h-5 w-14 rounded-full bg-subtle"></div><div class="h-2.5 w-24 rounded bg-subtle"></div><div class="h-6 w-6 rounded-md bg-subtle"></div></div>
  </div>
</div>`,
    },
    {
      name: '時鐘指針載入',
      en: 'Clock Loader',
      tags: ['Spinner', '時鐘'],
      spec: [
        '48px 圓形時鐘外框（2.5px 深色邊框），內有長針與短針兩條圓角線段，從中心點以不同速度旋轉（長針 1.2 秒、短針 7 秒一圈）。',
        '中央有 6px 主色圓點遮住指針交會處。',
        '下方為「處理中，請稍候」文字。',
      ],
      html: `<div class="text-center" role="status">
  <div class="relative mx-auto w-12 h-12 rounded-full border-[2.5px] border-ink">
    <span class="absolute left-1/2 top-1/2 -ml-[1.25px] w-[2.5px] h-[18px] -mt-[18px] rounded-full bg-ink origin-bottom animate-[spin_1.2s_linear_infinite]"></span>
    <span class="absolute left-1/2 top-1/2 -ml-[1.25px] w-[2.5px] h-[12px] -mt-[12px] rounded-full bg-ink origin-bottom animate-[spin_7s_linear_infinite]"></span>
    <span class="absolute left-1/2 top-1/2 -ml-[3px] -mt-[3px] w-1.5 h-1.5 rounded-full bg-brand-600"></span>
  </div>
  <p class="mt-4 text-sm text-ink-soft">處理中，請稍候</p>
</div>`,
    },
  ],
});
