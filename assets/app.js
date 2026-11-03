/* UI Atlas 展示頁邏輯：類別導覽、搜尋、收藏、提示詞產生與複製 */
(function () {
  const CATS = window.UI_ATLAS || [];
  CATS.forEach((cat, ci) => {
    cat.index = ci;
    cat.items.forEach((item, i) => {
      item.id = `${cat.id}-${String(i + 1).padStart(2, '0')}`;
      item.no = String(i + 1).padStart(2, '0');
      item.cat = cat;
    });
  });
  const ALL = CATS.flatMap((c) => c.items);
  const byId = Object.fromEntries(ALL.map((i) => [i.id, i]));

  const STACKS = {
    tailwind: {
      short: 'HTML + Tailwind',
      label: 'HTML + Tailwind CSS',
      desc: '語意化 HTML 與 Tailwind utility class',
      line: '以語意化 HTML 撰寫，樣式全部使用 Tailwind CSS v3 utility class，互動以少量原生 JavaScript 完成，不依賴其他框架。',
    },
    react: {
      short: 'React + Tailwind',
      label: 'React + TypeScript + Tailwind CSS',
      desc: '函式元件、props 型別與 useState',
      line: '輸出為 React 函式元件（TypeScript），文字、狀態與事件皆以 props 控制並定義型別，內部狀態使用 useState，樣式使用 Tailwind CSS。',
    },
    vue: {
      short: 'Vue 3 + Tailwind',
      label: 'Vue 3 + Tailwind CSS',
      desc: '<script setup> 單檔元件',
      line: '輸出為 Vue 3 單檔元件（<script setup lang="ts">），以 props 與 emits 控制內容與事件，樣式使用 Tailwind CSS。',
    },
    css: {
      short: 'HTML + 原生 CSS',
      label: 'HTML + 原生 CSS',
      desc: '不使用框架，CSS 變數管理主題',
      line: '不使用任何 CSS 框架，以原生 CSS 撰寫；顏色、圓角、陰影抽成 CSS 變數，並分別定義 :root（淺色）與 .dark（深色）兩組，互動以原生 JavaScript 完成。',
    },
  };

  const store = {
    get(k, d) {
      try {
        const v = localStorage.getItem(k);
        return v == null ? d : JSON.parse(v);
      } catch (e) {
        return d;
      }
    },
    set(k, v) {
      try {
        localStorage.setItem(k, JSON.stringify(v));
      } catch (e) { /* 無法儲存時忽略 */ }
    },
  };

  const state = {
    cat: CATS[0].id,
    query: '',
    stack: STACKS[store.get('ui-atlas-stack', 'tailwind')] ? store.get('ui-atlas-stack', 'tailwind') : 'tailwind',
    favs: new Set(store.get('ui-atlas-favs', [])),
    drawerItem: null,
  };

  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* ---------- 提示詞 ---------- */
  function buildPrompt(item, stackKey) {
    const S = STACKS[stackKey || state.stack];
    return [
      `請使用 ${S.label} 實作一個「${item.name}」（${item.en}）UI 元件，屬於「${item.cat.name}」類別。`,
      '',
      '【設計重點】',
      ...item.spec.map((s, i) => `${i + 1}. ${s}`),
      '',
      '【視覺與共通規範】',
      '- 風格：現代、簡潔、留白充足，圓角與陰影柔和，避免過度裝飾。',
      '- 字體：Inter 搭配 Noto Sans TC；標題字重 600，內文 400–500。',
      '- 配色：以中性灰階（zinc）為底，主色 Indigo #4F46E5，狀態色使用 emerald / amber / rose。',
      '- 圖示：一律使用 Font Awesome 6（fa-solid / fa-regular / fa-brands），全程不可使用任何 emoji。',
      '- 主題：預設為淺色模式，並同時提供對應的深色模式樣式。',
      '- 狀態：具備 hover、focus-visible、active、disabled 狀態，動畫 150–300ms，並尊重 prefers-reduced-motion。',
      '- 無障礙：使用正確的語意標籤與 aria 屬性，可完全以鍵盤操作，文字對比符合 WCAG AA。',
      `- 技術：${S.line}`,
      '',
      '請直接輸出完整、可執行的程式碼，並附上簡短的使用說明。',
    ].join('\n');
  }

  function standaloneHTML(item) {
    return `<!DOCTYPE html>
<html lang="zh-Hant">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(item.name)}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+TC:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
<script src="https://cdn.tailwindcss.com/3.4.17"><\/script>
<script>tailwind.config = ${JSON.stringify(window.KIT.config)};<\/script>
<style>${window.KIT.css}<\/style>
</head>
<body class="min-h-screen bg-canvas text-ink font-sans antialiased flex items-center justify-center p-8">
${item.html.trim()}
<script>(${window.KIT.install.toString()})();window.addEventListener('load', function () { UIK.init(); });<\/script>
</body>
</html>`;
  }

  /* ---------- 複製與提示 ---------- */
  async function copyText(text, msg) {
    let ok = false;
    try {
      await navigator.clipboard.writeText(text);
      ok = true;
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0';
      document.body.appendChild(ta);
      ta.select();
      try {
        ok = document.execCommand('copy');
      } catch (err) {
        ok = false;
      }
      ta.remove();
    }
    toast(ok ? msg : '瀏覽器不允許自動複製，請手動選取文字', ok ? 'fa-circle-check text-emerald-400' : 'fa-triangle-exclamation text-amber-400');
  }

  function toast(msg, icon) {
    const t = document.createElement('div');
    t.className = 'pointer-events-auto flex items-center gap-2.5 h-10 pl-3.5 pr-4 rounded-full bg-zinc-900 text-white text-[13px] font-medium shadow-lift animate-fade-up dark:bg-zinc-100 dark:text-zinc-900';
    t.innerHTML = `<i class="fa-solid ${icon}"></i><span>${esc(msg)}</span>`;
    $('#toasts').appendChild(t);
    setTimeout(() => {
      t.style.transition = 'opacity .3s, transform .3s';
      t.style.opacity = '0';
      t.style.transform = 'translateY(6px)';
      setTimeout(() => t.remove(), 300);
    }, 1900);
  }

  /* ---------- 側邊欄 ---------- */
  function renderNav() {
    $('#catNav').innerHTML = CATS.map(
      (c) => `<a href="#${c.id}" data-cat="${c.id}" class="cat-link group flex items-center gap-3 h-9 px-2 rounded-lg text-sm text-ink-soft hover:text-ink hover:bg-subtle transition">
        <span class="cat-ico w-6 h-6 rounded-md grid place-items-center bg-subtle text-ink-faint group-hover:text-ink text-[11px] transition"><i class="${c.icon}"></i></span>
        <span class="flex-1 truncate">${esc(c.name)}</span>
        <span class="text-[11px] font-mono text-ink-faint">${c.items.length}</span>
      </a>`
    ).join('');
  }

  function renderStackMenu() {
    $('#stackLabel').textContent = STACKS[state.stack].short;
    $('#stackMenu').innerHTML =
      '<p class="px-2.5 pt-1.5 pb-2 text-[11px] font-semibold uppercase tracking-wider text-ink-faint">提示詞輸出技術</p>' +
      Object.entries(STACKS)
        .map(
          ([k, s]) => `<button type="button" data-stack="${k}" class="w-full flex items-start gap-3 p-2.5 rounded-lg text-left hover:bg-subtle transition">
          <span class="mt-0.5 w-4 h-4 rounded-full border grid place-items-center ${k === state.stack ? 'border-brand-600 bg-brand-600' : 'border-line'}">${k === state.stack ? '<span class="w-1.5 h-1.5 rounded-full bg-white"></span>' : ''}</span>
          <span class="min-w-0"><span class="block text-[13px] font-medium text-ink">${esc(s.label)}</span><span class="block text-xs text-ink-faint">${esc(s.desc)}</span></span>
        </button>`
        )
        .join('');
    $('#drawerStack').innerHTML = Object.entries(STACKS)
      .map(([k, s]) => `<option value="${k}" ${k === state.stack ? 'selected' : ''}>${esc(s.label)}</option>`)
      .join('');
  }

  function setStack(k) {
    state.stack = k;
    store.set('ui-atlas-stack', k);
    renderStackMenu();
    if (state.drawerItem) $('#drawerPrompt').textContent = buildPrompt(state.drawerItem);
  }

  /* ---------- 主內容 ---------- */
  function currentItems() {
    const q = state.query.trim().toLowerCase();
    if (q) {
      return ALL.filter((i) => [i.name, i.en, i.cat.name, i.cat.en, ...(i.tags || []), ...i.spec].join(' ').toLowerCase().includes(q));
    }
    if (state.cat === 'favorites') return ALL.filter((i) => state.favs.has(i.id));
    const c = CATS.find((x) => x.id === state.cat);
    return c ? c.items : [];
  }

  function renderHero(items) {
    const q = state.query.trim();
    let html;
    if (q) {
      html = `<p class="text-xs font-medium text-ink-faint">搜尋結果</p>
        <h1 class="mt-1.5 text-2xl sm:text-3xl font-semibold tracking-tight">「${esc(q)}」</h1>
        <p class="mt-2 text-sm text-ink-soft">在 ${CATS.length} 個類別中找到 ${items.length} 個元件。</p>`;
    } else if (state.cat === 'favorites') {
      html = `<p class="text-xs font-medium text-ink-faint">個人</p>
        <h1 class="mt-1.5 text-2xl sm:text-3xl font-semibold tracking-tight">我的收藏</h1>
        <p class="mt-2 text-sm text-ink-soft">點擊元件卡片上的愛心即可收藏，收藏只會保存在這個瀏覽器中。</p>`;
    } else {
      const c = CATS.find((x) => x.id === state.cat);
      html = `<div class="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
        <div class="max-w-2xl">
          <p class="text-xs font-medium text-ink-faint font-mono">${String(c.index + 1).padStart(2, '0')} / ${String(CATS.length).padStart(2, '0')} · ${esc(c.en)}</p>
          <h1 class="mt-1.5 text-2xl sm:text-3xl font-semibold tracking-tight">${esc(c.name)}</h1>
          <p class="mt-2 text-sm text-ink-soft leading-relaxed">${esc(c.desc)}</p>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <button type="button" id="copyAllBtn" class="btn-ghost"><i class="fa-regular fa-copy"></i>複製本類全部提示詞</button>
        </div>
      </div>`;
    }
    $('#hero').innerHTML = html;
    const btn = $('#copyAllBtn');
    if (btn) {
      btn.onclick = () => {
        const text = items.map((i, n) => `===== ${n + 1}. ${i.name}（${i.en}）=====\n${buildPrompt(i)}`).join('\n\n');
        copyText(text, `已複製 ${items.length} 則提示詞`);
      };
    }
  }

  function cardHTML(item, showCat) {
    const fav = state.favs.has(item.id);
    return `<article class="ui-card group/card flex flex-col rounded-2xl border border-line bg-surface overflow-hidden ${item.wide ? 'md:col-span-2' : ''}" data-id="${item.id}">
      <div class="stage flex-1 min-h-[240px] p-6 sm:p-8 flex items-center justify-center">${item.html}</div>
      <div class="flex items-center gap-3 px-4 py-3 border-t border-line">
        <div class="min-w-0 flex-1">
          <div class="flex items-center gap-2">
            <span class="font-mono text-[11px] text-ink-faint">${item.no}</span>
            <h3 class="text-sm font-semibold truncate">${esc(item.name)}</h3>
          </div>
          <p class="mt-0.5 text-xs text-ink-faint truncate">${showCat ? esc(item.cat.name) + ' · ' : ''}${esc(item.en)}${item.tags ? ' · ' + item.tags.map(esc).join(' / ') : ''}</p>
        </div>
        <button type="button" data-act="fav" class="w-8 h-8 rounded-lg grid place-items-center transition ${fav ? 'text-rose-500' : 'text-ink-faint hover:text-ink hover:bg-subtle'}" aria-label="收藏" aria-pressed="${fav}"><i class="${fav ? 'fa-solid' : 'fa-regular'} fa-heart"></i></button>
        <button type="button" data-act="view" class="w-8 h-8 rounded-lg grid place-items-center text-ink-faint hover:text-ink hover:bg-subtle transition" aria-label="檢視提示詞與原始碼"><i class="fa-solid fa-code"></i></button>
        <button type="button" data-act="copy" class="h-8 px-3 rounded-lg bg-ink text-canvas text-xs font-medium flex items-center gap-1.5 hover:opacity-85 transition"><i class="fa-regular fa-copy"></i><span class="hidden sm:inline">複製提示詞</span></button>
      </div>
    </article>`;
  }

  function render() {
    const items = currentItems();
    renderHero(items);
    const searching = !!state.query.trim();
    $('#grid').innerHTML = items.map((i) => cardHTML(i, searching || state.cat === 'favorites')).join('');
    $('#empty').classList.toggle('hidden', items.length > 0);
    if (!items.length && state.cat === 'favorites' && !searching) {
      $('#emptyTitle').textContent = '還沒有收藏任何元件';
      $('#emptyDesc').textContent = '在元件卡片右下角點擊愛心圖示即可加入收藏。';
    } else {
      $('#emptyTitle').textContent = '找不到符合的元件';
      $('#emptyDesc').textContent = '換個關鍵字試試，例如「卡片」、「進度」或「玻璃」。';
    }
    document.querySelectorAll('.cat-link').forEach((a) => a.classList.toggle('is-active', !searching && a.dataset.cat === state.cat));
    $('#favCount').textContent = state.favs.size;
    requestAnimationFrame(() => window.UIK.init($('#grid')));
  }

  function toggleFav(id) {
    if (state.favs.has(id)) state.favs.delete(id);
    else state.favs.add(id);
    store.set('ui-atlas-favs', [...state.favs]);
    $('#favCount').textContent = state.favs.size;
    const on = state.favs.has(id);
    document.querySelectorAll(`[data-id="${id}"] [data-act="fav"]`).forEach((b) => {
      b.className = `w-8 h-8 rounded-lg grid place-items-center transition ${on ? 'text-rose-500' : 'text-ink-faint hover:text-ink hover:bg-subtle'}`;
      b.innerHTML = `<i class="${on ? 'fa-solid' : 'fa-regular'} fa-heart"></i>`;
      b.setAttribute('aria-pressed', String(on));
    });
    if (state.drawerItem && state.drawerItem.id === id) syncDrawerFav();
    toast(on ? '已加入收藏' : '已取消收藏', on ? 'fa-heart text-rose-400' : 'fa-heart-crack text-zinc-400');
    if (state.cat === 'favorites' && !state.query) render();
  }

  /* ---------- 抽屜 ---------- */
  function syncDrawerFav() {
    const on = state.favs.has(state.drawerItem.id);
    $('#drawerFav').innerHTML = `<i class="${on ? 'fa-solid text-rose-500' : 'fa-regular'} fa-heart"></i>`;
  }

  function openDrawer(item) {
    state.drawerItem = item;
    $('#drawerTitle').textContent = item.name;
    $('#drawerSub').textContent = `${item.cat.name} · ${item.en}`;
    $('#drawerStage').innerHTML = item.html;
    $('#drawerPrompt').textContent = buildPrompt(item);
    $('#drawerCode').textContent = item.html.trim();
    syncDrawerFav();
    $('#drawerRoot').classList.add('is-open');
    document.body.classList.add('drawer-open');
    requestAnimationFrame(() => window.UIK.init($('#drawerStage')));
    setTimeout(() => $('#drawerClose').focus(), 50);
  }

  function closeDrawer() {
    $('#drawerRoot').classList.remove('is-open');
    document.body.classList.remove('drawer-open');
    setTimeout(() => {
      if (!$('#drawerRoot').classList.contains('is-open')) $('#drawerStage').innerHTML = '';
    }, 320);
    state.drawerItem = null;
  }

  /* ---------- 路由 ---------- */
  function fromHash() {
    const h = decodeURIComponent(location.hash.slice(1));
    if (h === 'favorites' || CATS.some((c) => c.id === h)) state.cat = h;
    else if (!h) state.cat = CATS[0].id;
    state.query = '';
    $('#search').value = '';
    render();
    closeNav();
    window.scrollTo(0, 0);
  }

  function openNav() {
    $('#sidebar').classList.remove('-translate-x-full');
    $('#backdrop').classList.remove('hidden');
  }
  function closeNav() {
    $('#sidebar').classList.add('-translate-x-full');
    $('#backdrop').classList.add('hidden');
  }

  /* ---------- 事件 ---------- */
  $('#grid').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-act]');
    if (!btn) return;
    const item = byId[btn.closest('[data-id]').dataset.id];
    if (btn.dataset.act === 'copy') copyText(buildPrompt(item), `已複製「${item.name}」提示詞`);
    if (btn.dataset.act === 'view') openDrawer(item);
    if (btn.dataset.act === 'fav') toggleFav(item.id);
  });

  $('#stackMenu').addEventListener('click', (e) => {
    const b = e.target.closest('[data-stack]');
    if (!b) return;
    setStack(b.dataset.stack);
    $('#stackMenu').classList.add('hidden');
    toast(`提示詞將輸出為 ${STACKS[b.dataset.stack].label}`, 'fa-code text-brand-300');
  });
  $('#drawerStack').addEventListener('change', (e) => setStack(e.target.value));

  let searchTimer;
  $('#search').addEventListener('input', (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.query = e.target.value;
      render();
    }, 120);
  });

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      $('#search').focus();
      $('#search').select();
    } else if (e.key === 'Escape') {
      if (state.drawerItem) closeDrawer();
      else if (document.activeElement === $('#search') && $('#search').value) {
        $('#search').value = '';
        state.query = '';
        render();
      }
    }
  });

  $('#themeBtn').addEventListener('click', () => {
    const dark = document.documentElement.classList.toggle('dark');
    try {
      localStorage.setItem('ui-atlas-theme', dark ? 'dark' : 'light');
    } catch (e) { /* 無法儲存時忽略 */ }
  });

  $('#navToggle').addEventListener('click', openNav);
  $('#backdrop').addEventListener('click', closeNav);
  $('#brandLink').addEventListener('click', (e) => {
    e.preventDefault();
    location.hash = CATS[0].id;
  });

  $('#drawerClose').addEventListener('click', closeDrawer);
  $('#drawerBackdrop').addEventListener('click', closeDrawer);
  $('#drawerFav').addEventListener('click', () => state.drawerItem && toggleFav(state.drawerItem.id));
  $('#drawerTabs').addEventListener('click', () => {
    const sel = $('#drawerTabs [aria-selected="true"]');
    const code = sel && sel.dataset.tab === 'code';
    $('#panelPrompt').classList.toggle('hidden', code);
    $('#panelCode').classList.toggle('hidden', !code);
  });
  $('#copyPromptBtn').addEventListener('click', () => copyText($('#drawerPrompt').textContent, '已複製提示詞'));
  $('#copyCodeBtn').addEventListener('click', () => copyText(state.drawerItem.html.trim(), '已複製 HTML 片段'));
  $('#copyFullBtn').addEventListener('click', () => copyText(standaloneHTML(state.drawerItem), '已複製完整單檔 HTML'));
  $('#downloadBtn').addEventListener('click', () => {
    const blob = new Blob([standaloneHTML(state.drawerItem)], { type: 'text/html' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${state.drawerItem.id}.html`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });

  window.addEventListener('hashchange', fromHash);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => window.UIK.init());

  renderNav();
  renderStackMenu();
  fromHash();
})();
