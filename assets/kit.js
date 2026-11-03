/*
 * UI Atlas — 共用設計 Token、Tailwind 設定與元件互動輔助函式
 * 這個檔案同時被展示頁使用，也會被「下載單檔 HTML」功能內嵌，讓匯出的元件可以獨立運作。
 */
(function () {
  const v = (name) => `rgb(var(${name}) / <alpha-value>)`;

  const KIT_CONFIG = {
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', '"Noto Sans TC"', 'system-ui', 'sans-serif'],
          mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        },
        colors: {
          canvas: v('--canvas'),
          surface: v('--surface'),
          subtle: v('--subtle'),
          line: v('--line'),
          ink: { DEFAULT: v('--ink'), soft: v('--ink-soft'), faint: v('--ink-faint') },
          brand: {
            50: '#eef2ff', 100: '#e0e7ff', 200: '#c7d2fe', 300: '#a5b4fc', 400: '#818cf8',
            500: '#6366f1', 600: '#4f46e5', 700: '#4338ca', 800: '#3730a3', 900: '#312e81', 950: '#1e1b4b',
          },
        },
        boxShadow: {
          soft: '0 1px 2px rgb(0 0 0 / .04), 0 4px 16px -4px rgb(0 0 0 / .08)',
          lift: '0 1px 2px rgb(0 0 0 / .05), 0 12px 32px -8px rgb(0 0 0 / .16)',
        },
        keyframes: {
          shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
          indeterminate: { '0%': { transform: 'translateX(-100%)' }, '100%': { transform: 'translateX(300%)' } },
          equalize: { '0%,100%': { transform: 'scaleY(.35)' }, '50%': { transform: 'scaleY(1)' } },
          hop: { '0%,80%,100%': { transform: 'translateY(0)', opacity: '.45' }, '40%': { transform: 'translateY(-6px)', opacity: '1' } },
          stripes: { '0%': { backgroundPosition: '0 0' }, '100%': { backgroundPosition: '1.5rem 0' } },
          drain: { '0%': { transform: 'scaleX(1)' }, '100%': { transform: 'scaleX(0)' } },
          float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-6px)' } },
          'gradient-x': { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
          'fade-up': { '0%': { opacity: '0', transform: 'translateY(6px)' }, '100%': { opacity: '1', transform: 'none' } },
          radar: { '0%': { transform: 'scale(.6)', opacity: '.8' }, '100%': { transform: 'scale(2.4)', opacity: '0' } },
          ticker: { '0%,20%': { transform: 'translateY(0)' }, '25%,45%': { transform: 'translateY(-25%)' }, '50%,70%': { transform: 'translateY(-50%)' }, '75%,95%': { transform: 'translateY(-75%)' }, '100%': { transform: 'translateY(0)' } },
          draw: { '0%': { strokeDashoffset: '400' }, '60%,100%': { strokeDashoffset: '0' } },
          'grid-fade': { '0%,70%,100%': { transform: 'scale(1)', opacity: '1' }, '35%': { transform: 'scale(.4)', opacity: '.3' } },
          dash: {
            '0%': { strokeDasharray: '1 150', strokeDashoffset: '0' },
            '50%': { strokeDasharray: '90 150', strokeDashoffset: '-35' },
            '100%': { strokeDasharray: '90 150', strokeDashoffset: '-124' },
          },
        },
        animation: {
          shimmer: 'shimmer 2.2s linear infinite',
          indeterminate: 'indeterminate 1.4s cubic-bezier(.65,0,.35,1) infinite',
          equalize: 'equalize 1s ease-in-out infinite',
          hop: 'hop 1.2s ease-in-out infinite',
          stripes: 'stripes .8s linear infinite',
          drain: 'drain 5s linear infinite',
          float: 'float 3s ease-in-out infinite',
          'gradient-x': 'gradient-x 4s ease infinite',
          'fade-up': 'fade-up .35s ease both',
          radar: 'radar 2.2s ease-out infinite',
          'spin-slow': 'spin 3s linear infinite',
          dash: 'dash 1.5s ease-in-out infinite',
          draw: 'draw 2.4s ease-in-out infinite',
          ticker: 'ticker 6s cubic-bezier(.65,0,.35,1) infinite',
          'grid-fade': 'grid-fade 1.3s ease-in-out infinite',
        },
      },
    },
  };

  const KIT_CSS = `
:root{--canvas:248 248 250;--surface:255 255 255;--subtle:243 244 246;--line:228 228 231;--ink:24 24 27;--ink-soft:82 82 91;--ink-faint:150 150 160;color-scheme:light}
.dark{--canvas:12 12 14;--surface:24 24 27;--subtle:36 36 40;--line:48 48 54;--ink:244 244 245;--ink-soft:170 170 180;--ink-faint:113 113 122;color-scheme:dark}
`;

  function installKit() {
    const split = (s) => (s || '').split(/\s+/).filter(Boolean);
    const swapCls = (el, add, remove) => {
      el.classList.remove(...split(remove));
      el.classList.add(...split(add));
    };
    const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

    const UIK = {
      /* 群組單選：容器 [data-pick] 定義 data-on / data-off，子項目 [data-item] */
      pick(el) {
        const g = el.closest('[data-pick]');
        if (!g) return;
        const items = [...g.querySelectorAll('[data-item]')].filter((it) => it.closest('[data-pick]') === g);
        items.forEach((it) => {
          swapCls(it, g.dataset.off, g.dataset.on);
          it.setAttribute('aria-selected', 'false');
        });
        swapCls(el, g.dataset.on, g.dataset.off);
        el.setAttribute('aria-selected', 'true');
        if (el.dataset.tab) {
          g.querySelectorAll('[data-panel]').forEach((p) => p.classList.toggle('hidden', p.dataset.panel !== el.dataset.tab));
        }
        UIK.indicator(g);
      },
      /* 滑動指示器：data-indicator="pct" 以索引百分比移動；"x" / "y" 以實際尺寸量測 */
      indicator(g) {
        const ind = [...g.querySelectorAll('[data-indicator]')].find((n) => n.closest('[data-pick]') === g);
        if (!ind) return;
        const items = [...g.querySelectorAll('[data-item]')].filter((it) => it.closest('[data-pick]') === g);
        const el = items.find((it) => it.getAttribute('aria-selected') === 'true') || items[0];
        if (!el) return;
        const mode = ind.dataset.indicator;
        if (mode === 'pct') {
          ind.style.transform = `translateX(${items.indexOf(el) * 100}%)`;
        } else if (mode === 'y') {
          ind.style.top = el.offsetTop + 'px';
          ind.style.height = el.offsetHeight + 'px';
        } else {
          ind.style.left = el.offsetLeft + 'px';
          ind.style.width = el.offsetWidth + 'px';
        }
      },
      /* 單一元素雙態切換：data-on / data-off，子元素 [data-swap] 會切換列出的 class，[data-alt] 會交換文字 */
      flip(el) {
        const pressed = el.getAttribute('aria-pressed') === 'true';
        if (pressed) swapCls(el, el.dataset.off, el.dataset.on);
        else swapCls(el, el.dataset.on, el.dataset.off);
        el.setAttribute('aria-pressed', String(!pressed));
        el.querySelectorAll('[data-swap]').forEach((n) => split(n.dataset.swap).forEach((c) => n.classList.toggle(c)));
        el.querySelectorAll('[data-alt]').forEach((n) => {
          const t = n.textContent;
          n.textContent = n.dataset.alt;
          n.dataset.alt = t;
        });
        el.querySelectorAll('[data-count]').forEach((n) => {
          n.textContent = String(+n.textContent + (pressed ? -1 : 1));
        });
      },
      /* 載入狀態按鈕示範 */
      load(el, done) {
        if (el.dataset.busy) return;
        el.dataset.busy = '1';
        const html = el.innerHTML;
        el.style.minWidth = el.offsetWidth + 'px';
        el.disabled = true;
        el.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i><span>處理中</span>';
        setTimeout(() => {
          el.innerHTML = '<i class="fa-solid fa-check"></i><span>' + esc(done || '已完成') + '</span>';
          setTimeout(() => {
            el.innerHTML = html;
            el.disabled = false;
            el.style.minWidth = '';
            delete el.dataset.busy;
          }, 1300);
        }, 1400);
      },
      /* 依序切換 data-state，搭配 group-data-[state=xxx]: 變體使用 */
      state(el, states, times) {
        if (el.dataset.state && el.dataset.state !== '') return;
        let i = 0;
        const next = () => {
          el.dataset.state = states[i] || '';
          if (i < states.length) setTimeout(next, times[i++] || 1200);
        };
        next();
      },
      ripple(e, el) {
        const r = el.getBoundingClientRect();
        const d = Math.max(r.width, r.height);
        const s = document.createElement('span');
        s.style.cssText = `position:absolute;left:${e.clientX - r.left - d / 2}px;top:${e.clientY - r.top - d / 2}px;width:${d}px;height:${d}px;border-radius:9999px;background:currentColor;opacity:.28;transform:scale(0);pointer-events:none;transition:transform .55s ease,opacity .7s ease`;
        el.appendChild(s);
        requestAnimationFrame(() => {
          s.style.transform = 'scale(2.4)';
          s.style.opacity = '0';
        });
        setTimeout(() => s.remove(), 750);
      },
      magnet(e, el) {
        if (!e) return void (el.style.transform = '');
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.3}px, ${(e.clientY - r.top - r.height / 2) * 0.4}px)`;
      },
      tilt(e, el) {
        if (!e) return void (el.style.transform = '');
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateX(${-py * 12}deg) rotateY(${px * 14}deg)`;
      },
      spot(e, el) {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--x', e.clientX - r.left + 'px');
        el.style.setProperty('--y', e.clientY - r.top + 'px');
      },
      step(el, d) {
        const g = el.closest('[data-stepper]');
        const o = g.querySelector('[data-value]');
        const min = +(g.dataset.min ?? 0);
        const max = +(g.dataset.max ?? 99);
        const cur = o.tagName === 'INPUT' ? +o.value : +o.textContent;
        const n = Math.min(max, Math.max(min, cur + d));
        if (o.tagName === 'INPUT') o.value = n;
        else o.textContent = n;
      },
      rate(el) {
        const g = el.closest('[data-rate]');
        const items = [...g.querySelectorAll('[data-item]')];
        const i = items.indexOf(el);
        items.forEach((it, k) => (k <= i ? swapCls(it, g.dataset.on, g.dataset.off) : swapCls(it, g.dataset.off, g.dataset.on)));
        const out = g.querySelector('[data-out]');
        if (out) out.textContent = (g.dataset.labels ? g.dataset.labels.split(',')[i] : i + 1 + '.0');
      },
      range(input) {
        const p = ((input.value - input.min) / (input.max - input.min)) * 100;
        input.style.setProperty('--p', p + '%');
        const g = input.closest('[data-range]');
        const out = g && g.querySelector('[data-out]');
        if (out) {
          const labels = g.dataset.labels && g.dataset.labels.split(',');
          out.textContent = labels ? labels[Math.round((input.value - input.min) / (+input.step || 1))] : input.value + (g.dataset.unit || '');
        }
        if (g) g.style.setProperty('--p', p + '%');
      },
      count(el) {
        const g = el.closest('[data-counter]');
        const out = g && g.querySelector('[data-out]');
        if (out) out.textContent = el.value.length;
      },
      pw(btn) {
        const input = btn.parentElement.querySelector('input');
        const show = input.type === 'password';
        input.type = show ? 'text' : 'password';
        const ic = btn.querySelector('i');
        ic.classList.toggle('fa-eye', !show);
        ic.classList.toggle('fa-eye-slash', show);
      },
      strength(input) {
        const g = input.closest('[data-strength]');
        const val = input.value;
        let s = 0;
        if (val.length >= 8) s++;
        if (/[A-Z]/.test(val) && /[a-z]/.test(val)) s++;
        if (/\d/.test(val)) s++;
        if (/[^A-Za-z0-9]/.test(val)) s++;
        const colors = ['bg-rose-500', 'bg-amber-500', 'bg-lime-500', 'bg-emerald-500'];
        const labels = ['太弱', '普通', '良好', '非常安全'];
        g.querySelectorAll('[data-bar]').forEach((b, i) => {
          b.classList.remove(...colors, 'bg-line');
          b.classList.add(i < s ? colors[s - 1] : 'bg-line');
        });
        const out = g.querySelector('[data-out]');
        if (out) out.textContent = val ? labels[Math.max(0, s - 1)] : '請輸入密碼';
      },
      otp(input) {
        input.value = input.value.replace(/\D/g, '').slice(-1);
        if (input.value && input.nextElementSibling) input.nextElementSibling.focus();
      },
      otpBack(e, input) {
        if (e.key === 'Backspace' && !input.value && input.previousElementSibling) input.previousElementSibling.focus();
      },
      chip(e, input) {
        if (e.key !== 'Enter' || !input.value.trim()) return;
        e.preventDefault();
        const t = document.createElement('span');
        t.className = input.dataset.chip;
        t.innerHTML = esc(input.value.trim()) + '<button type="button" aria-label="移除" onclick="this.parentElement.remove()" class="opacity-60 hover:opacity-100"><i class="fa-solid fa-xmark text-[10px]"></i></button>';
        input.before(t);
        input.value = '';
      },
      acc(btn) {
        const single = btn.closest('[data-single]');
        const open = btn.getAttribute('aria-expanded') === 'true';
        if (single && !open) {
          single.querySelectorAll('[aria-expanded="true"]').forEach((b) => b !== btn && UIK.acc(b));
        }
        btn.setAttribute('aria-expanded', String(!open));
        const panel = btn.nextElementSibling;
        panel.style.gridTemplateRows = open ? '0fr' : '1fr';
        const ch = btn.querySelector('[data-chevron]');
        if (ch) ch.style.transform = open ? '' : `rotate(${ch.dataset.chevron || 180}deg)`;
        const host = btn.closest('[data-acc-item]');
        if (host) host.toggleAttribute('data-open', !open);
      },
      menu(btn) {
        const m = btn.parentElement.querySelector('[data-menu]');
        const willOpen = m.classList.contains('hidden');
        document.querySelectorAll('[data-menu]').forEach((x) => x !== m && !x.hasAttribute('data-static') && x.classList.add('hidden'));
        m.classList.toggle('hidden', !willOpen);
        btn.setAttribute('aria-expanded', String(willOpen));
      },
      dismiss(el) {
        const t = el.closest('[data-dismiss]');
        t.style.transition = 'opacity .25s ease, transform .25s ease';
        t.style.opacity = '0';
        t.style.transform = 'translateY(-4px) scale(.98)';
        setTimeout(() => {
          t.style.opacity = '';
          t.style.transform = '';
        }, 1600);
      },
      copy(el, text) {
        try {
          navigator.clipboard.writeText(text);
        } catch (err) { /* 示範用，忽略 */ }
        const ic = el.querySelector('i');
        if (!ic) return;
        const prev = ic.className;
        ic.className = 'fa-solid fa-check';
        setTimeout(() => (ic.className = prev), 1300);
      },
      modal(el, open) {
        const root = el.closest('[data-modal-root]');
        root.toggleAttribute('data-open', open);
      },
      tree(btn) {
        const li = btn.parentElement;
        const sub = li.querySelector(':scope > ul');
        if (!sub) return;
        sub.classList.toggle('hidden');
        const ch = btn.querySelector('[data-chevron]');
        if (ch) ch.classList.toggle('rotate-90');
        const fd = btn.querySelector('[data-folder]');
        if (fd) {
          fd.classList.toggle('fa-folder');
          fd.classList.toggle('fa-folder-open');
        }
      },
      /* 三態全選：容器 [data-tri]，全選 [data-tri-all]，子項目 [data-tri-item] */
      tri(el) {
        const g = el.closest('[data-tri]');
        const all = g.querySelector('[data-tri-all]');
        const kids = [...g.querySelectorAll('[data-tri-item]')];
        if (el === all) kids.forEach((k) => (k.checked = all.checked));
        const n = kids.filter((k) => k.checked).length;
        all.checked = n === kids.length;
        all.indeterminate = n > 0 && n < kids.length;
        const out = g.querySelector('[data-out]');
        if (out) out.textContent = n;
      },
      init(root) {
        (root || document).querySelectorAll('[data-tri]').forEach((g) => UIK.tri(g.querySelector('[data-tri-item]')));
        (root || document).querySelectorAll('[data-pick]').forEach((g) => UIK.indicator(g));
        (root || document).querySelectorAll('[data-range] input[type=range]').forEach((i) => UIK.range(i));
      },
    };

    document.addEventListener('click', (e) => {
      document.querySelectorAll('[data-menu]:not(.hidden):not([data-static])').forEach((m) => {
        if (!m.parentElement.contains(e.target)) m.classList.add('hidden');
      });
    });
    window.addEventListener('resize', () => UIK.init());
    window.UIK = UIK;
  }

  window.KIT = { config: KIT_CONFIG, css: KIT_CSS, install: installKit };
  if (window.tailwind) window.tailwind.config = KIT_CONFIG;
  const style = document.createElement('style');
  style.textContent = KIT_CSS;
  document.head.appendChild(style);
  installKit();
})();
