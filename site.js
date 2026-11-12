/* ============================================================
   沉下去的黄昏 · 共用脚本
   三个页面都引这个文件。
   头像、简介、社交链接、作品、友链、联系方式
   全部在下面的 SITE 里改，改完三个页面同步生效。
   ============================================================ */
(function () {
  'use strict';

  /* ============ 你要改的东西都在这里 ============ */
  var SITE = {
    name:   '沉下去的黄昏',
    avatar: 'avatar.svg',          /* 换成你自己的头像图，和本文件放同一层 */

    /* 首屏那一句话，用 \n 换行 */
    slogan: '记录代码、折腾与生活\n慢慢来，也是一种前进',

    /* 关于我：一段一个字符串 */
    about: [
      '你好，这里是<b>沉下去的黄昏</b>，一个还在折腾中的个人小站。',
      '平时写代码，也写点乱七八糟的想法。这里不追求更新频率，只放<b>自己愿意回头再看的东西</b>。',
      '站子是纯手写的静态页面：没有框架，没有构建，一个 CSS 加一个 JS，传上去就能跑。'
    ],

    tags: ['写代码', '瞎折腾', '阅读', '记流水账'],

    /* 社交图标：GitHub / B站 / 抖音 / 快手 / 小红书 */
    socials: [
      { name: 'GitHub', url: 'https://github.com/xwzas',            ico: 'github' },
      { name: 'B站',    url: 'https://b23.tv/AHIFIvd',             ico: 'bili' },
      { name: '抖音',   url: 'https://v.douyin.com/gzuNW-AfBdg/',  ico: 'douyin' },
      { name: '快手',   url: 'https://v.kuaishou.com/njH2j67R',    ico: 'kuaishou' },
      { name: '小红书', url: 'https://xhslink.cn/o/6MXoIsajDHM',   ico: 'xhs' }
    ],

    /* 首页作品卡片：点整张卡跳到你的 app 仓库 */
    works: [
      {
        ico:  '🗂️',
        title: 'app',
        desc:  '我的代码仓库，零碎项目和折腾记录都丢在那里。',
        url:   'https://github.com/xwzas/app',
        go:    '打开仓库 →'
      }
    ],

    /* 友链：想加就照着加一行，想删就删一行 */
    links: [
      { name: 'LemonAdorable', desc: 'Astro 主题 iris 的作者', url: 'https://lemonadorable.github.io' },
      { name: '辰渊尘',        desc: '记录代码与日常',         url: 'https://blog.mcxiaochen.top/' },
      { name: 'Mistlane',      desc: '代码、学习与日常',       url: 'https://blog.mistlane.top/' },
      { name: '陌殊途左沐',     desc: '热爱是拯救无趣人生的唯一途径', url: 'https://azuma.mstzuomu.space/' },
      { name: 'Sigrika',       desc: '善良耙耙柑🍊',           url: 'https://qwq.sigrika.cc/' },
      { name: '团子和蛋糕',     desc: '两个人的博客',           url: 'https://blog.tsh520.cn/' },
      { name: 'mccsjs',        desc: '个人小站',               url: 'https://mccsjs.cn/' },
      { name: '安泽',           desc: '愿得一人心',             url: 'https://anze.love/' },
      { name: 'Alexander',     desc: '记录代码、折腾与生活',    url: 'https://lanerc.me/' },
      { name: '桃之夭夭',       desc: '个人博客',              url: 'https://taozhiyy.top/' },
      { name: 'MmzMing',       desc: 'Java 后端与 AI 工程实践', url: 'https://tblog.mmzhiku.xyz/' },
      { name: 'JerryLife',     desc: 'enjoy life',            url: 'https://www.jerrynis.com/' },
      { name: '叁拾玖',         desc: '记录生活与技术',          url: 'https://www.sanshijiu.cn/' },
      { name: '星轨手札',       desc: '留学、旅行与技术折腾',    url: 'https://yuulog.org/' }
    ],

    /* 联系页：填上就显示，留空那一行自动不出现 */
    contact: [
      { ico: '✉️', label: '邮箱',   val: '',                        href: '' },
      { ico: '🐙', label: 'GitHub', val: 'github.com/xwzas',        href: 'https://github.com/xwzas' },
      { ico: '📺', label: 'B站',    val: 'space.bilibili.com',      href: 'https://b23.tv/AHIFIvd' },
      { ico: '💬', label: '留言',   val: '去留言板说两句',           href: '留言.html' }
    ],

    /* 页脚 */
    footer: '沉下去的黄昏 · 慢慢来，也是一种前进'
  };

  /* ============ 图标（内联 SVG，不额外请求文件） ============ */
  var ICONS = {
    github: '<svg viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.55v-1.92c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .3.2.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>',
    bili: '<svg viewBox="0 0 24 24"><path d="M17.81 2.35a1.2 1.2 0 0 1 0 1.7L16.6 5.24h1.32A4.08 4.08 0 0 1 22 9.32v7.6a4.08 4.08 0 0 1-4.08 4.08H6.08A4.08 4.08 0 0 1 2 16.92v-7.6a4.08 4.08 0 0 1 4.08-4.08h1.32L6.19 4.05a1.2 1.2 0 1 1 1.7-1.7l2.13 2.13c.09.09.16.19.2.3h3.56c.04-.11.11-.21.2-.3l2.13-2.13a1.2 1.2 0 0 1 1.7 0ZM7.5 10.02a1.2 1.2 0 0 0-1.2 1.2v2.4a1.2 1.2 0 0 0 2.4 0v-2.4a1.2 1.2 0 0 0-1.2-1.2Zm9 0a1.2 1.2 0 0 0-1.2 1.2v2.4a1.2 1.2 0 0 0 2.4 0v-2.4a1.2 1.2 0 0 0-1.2-1.2Z"/></svg>',
    douyin: '<svg viewBox="0 0 24 24"><path d="M16.5 2c.3 2.1 1.6 3.7 3.6 4v2.6c-1.3.1-2.6-.3-3.7-1v6.6a5.9 5.9 0 1 1-5.9-5.9c.3 0 .6 0 .9.1v2.8a3.1 3.1 0 1 0 2.2 3V2h3.9Z"/></svg>',
    kuaishou: '<svg viewBox="0 0 24 24"><path d="M12 2.6 14.1 6l3.9-1.1-.7 4 3.4 2.2-2.6 3.1 1.6 3.8-4-.4L14 21.4 12 18.3 10 21.4l-2.7-1.8-4 .4 1.6-3.8L2.3 11l3.4-2.2-.7-4L9 6 12 2.6Zm0 5.1a4.3 4.3 0 1 0 0 8.6 4.3 4.3 0 0 0 0-8.6Z"/></svg>',
    xhs: '<svg viewBox="0 0 24 24"><path d="M3 3h18v18H3V3Zm3.1 4.3v9.4h2.5v-3.2h1.9c2.4 0 4-1.5 4-3.9 0-2.3-1.5-3.7-3.9-3.7H6.1Zm2.5 2.1h1.3c1 0 1.6.6 1.6 1.5s-.6 1.5-1.6 1.5H8.6V9.4Zm4.6-2.1v9.4h2.5v-9.4h-2.5Z"/></svg>',
    link: '<svg viewBox="0 0 24 24"><path d="M10.6 13.4a1 1 0 0 1 0-1.4l1.4-1.4a3 3 0 0 1 4.3 4.3l-1.5 1.5a3 3 0 0 1-4.2 0 1 1 0 1 1 1.4-1.4 1 1 0 0 0 1.4 0l1.5-1.5a1 1 0 0 0-1.4-1.4l-1.4 1.4a1 1 0 0 1-1.4 0Zm2.8-2.8a1 1 0 0 1 0 1.4l-1.4 1.4a3 3 0 0 1-4.3-4.3l1.5-1.5a3 3 0 0 1 4.2 0 1 1 0 0 1-1.4 1.4 1 1 0 0 0-1.4 0L8.5 9.6a1 1 0 0 0 1.4 1.4l1.4-1.4a1 1 0 0 1 1.4 0Z"/></svg>'
  };

  /* ============ 小工具 ============ */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  /* 外部链接开新窗口，站内链接正常跳 */
  function safeUrl(u) {
    var s = String(u || '').trim();
    if (/^(https?:|mailto:|tel:)/i.test(s)) return s;
    if (/^\/\//.test(s)) return 'https:' + s;
    return s;
  }
  function isExt(u) { return /^https?:/i.test(String(u || '')); }

  /* ============ 导航（三页共用，自动标出当前页） ============ */
  function buildNav() {
    var host = document.getElementById('nav');
    if (!host) return;
    var path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    var items = [
      { t: '首页', h: './',      k: ['index.html', ''] },
      { t: '联系', h: '联系.html',  k: ['联系.html', '联系'] },
      { t: '留言', h: '留言.html',  k: ['留言.html', '留言'] }
    ];
    var links = el('div', 'nav-links');
    items.forEach(function (it, i) {
      var on = it.k.some(function (k) { return k.toLowerCase() === path; });
      var a = el('a', on ? 'on' : '', esc(it.t));
      a.href = it.h;
      a.setAttribute('aria-current', on ? 'page' : 'false');
      a.style.setProperty('--fd', i + 1);
      a.classList.add('fade');
      links.appendChild(a);
    });

    var burger = el('button', 'burger');
    burger.setAttribute('aria-label', '展开菜单');
    burger.setAttribute('aria-expanded', 'false');
    burger.appendChild(el('span'));
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    /* 点了菜单里的某一项就收起来 */
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        links.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
    /* 按 Esc 也能收起 */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('open')) {
        links.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });

    var brand = el('a', 'brand');
    brand.href = 'index.html';
    brand.appendChild(el('span', 'dot'));
    brand.appendChild(document.createTextNode(SITE.name));

    var inner = el('div', 'nav-in');
    inner.appendChild(brand);
    inner.appendChild(links);
    inner.appendChild(burger);
    host.appendChild(inner);
    host.classList.add('fade');
    host.style.setProperty('--fd', '0');
  }

  /* ============ 淡入：进视口才播，只播一次 ============ */
  function buildFade() {
    var items = document.querySelectorAll('.fade');
    if (!('IntersectionObserver' in window)) {
      items.forEach(function (n) { n.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    items.forEach(function (n) { io.observe(n); });
  }

  /* ============ 回到顶部 ============ */
  function buildTop() {
    var b = el('button', 'top', '↑');
    b.setAttribute('aria-label', '回到顶部');
    b.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.body.appendChild(b);
    var tick = function () {
      b.classList.toggle('show', window.scrollY > 420);
    };
    window.addEventListener('scroll', tick, { passive: true });
    tick();
  }

  /* ============ 复制按钮 ============ */
  function buildCopy() {
    /* 卡片里的链接：整卡可点，但选中文字复制时不触发跳转 */
    document.querySelectorAll('.card.work').forEach(function (card) {
      var a = card.querySelector('a');
      if (!a) return;
      card.addEventListener('click', function (e) {
        var sel = String(window.getSelection() || '');
        if (sel) return;
        if (e.target.closest('a, button')) return;
        a.click();
      });
    });

    document.querySelectorAll('[data-copy]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var txt = btn.getAttribute('data-copy') || '';
        var done = function () {
          btn.classList.add('done');
          btn.textContent = '已复制';
          setTimeout(function () {
            btn.classList.remove('done');
            btn.textContent = '复制';
          }, 1600);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(txt).then(done, function () {});
        } else {
          var ta = document.createElement('textarea');
          ta.value = txt;
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand('copy'); done(); } catch (e) {}
          document.body.removeChild(ta);
        }
      });
    });
  }

  /* ============ 首页：社交图标 ============ */
  function buildSocials() {
    var host = document.getElementById('socials');
    if (!host) return;
    SITE.socials.forEach(function (s, i) {
      var a = el('a', 'fade');
      a.href = safeUrl(s.url);
      a.title = s.name;
      a.setAttribute('aria-label', s.name);
      a.style.setProperty('--fd', i + 2);
      a.innerHTML = ICONS[s.ico] || ICONS.link;
      if (isExt(s.url)) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
      host.appendChild(a);
    });
  }

  /* ============ 首页：关于我 ============ */
  function buildAbout() {
    var host = document.getElementById('about');
    if (!host) return;
    SITE.about.forEach(function (p, i) {
      var n = el('p', 'fade', p);
      n.style.setProperty('--fd', i + 1);
      host.appendChild(n);
    });
    if (SITE.tags && SITE.tags.length) {
      var chips = el('div', 'chips fade');
      chips.style.setProperty('--fd', SITE.about.length + 1);
      SITE.tags.forEach(function (t) {
        chips.appendChild(el('span', 'chip', esc(t)));
      });
      host.appendChild(chips);
    }
  }

  /* ============ 首页：作品卡片 / 友链卡片 ============ */
  function buildCards() {
    var host = document.getElementById('works');
    if (!host) return;
    SITE.works.forEach(function (w, i) {
      var a = el('a', 'card work fade');
      a.href = safeUrl(w.url);
      a.style.setProperty('--fd', i + 1);
      if (isExt(w.url)) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
      a.innerHTML =
        '<h3><span class="ico">' + esc(w.ico || '🔗') + '</span>' + esc(w.title) + '</h3>' +
        '<p>' + esc(w.desc || '') + '</p>' +
        '<span class="go">' + esc(w.go || '去看看 →') + '</span>';
      host.appendChild(a);
    });

    var lh = document.getElementById('links');
    if (!lh) return;
    SITE.links.forEach(function (l, i) {
      var a = el('a', 'card fade');
      a.href = safeUrl(l.url);
      a.style.setProperty('--fd', (SITE.works.length + i + 1) % 5);
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.innerHTML =
        '<h3><span class="ico">🔗</span>' + esc(l.name) + '</h3>' +
        '<p>' + esc(l.desc || l.url) + '</p>';
      lh.appendChild(a);
    });
  }

  /* ============ 联系页 ============ */
  function buildContact() {
    var host = document.getElementById('contact-list');
    if (!host) return;
    var n = 0;
    SITE.contact.forEach(function (c) {
      if (!c.val) return;                     /* 没填的整行跳过 */
      n++;
      var row = el('div', 'contact-item fade');
      row.style.setProperty('--fd', n + 1);
      row.appendChild(el('div', 'ci-ico', esc(c.ico || '🔗')));
      var tx = el('div', 'ci-tx');
      tx.appendChild(el('b', '', esc(c.label)));
      tx.appendChild(el('span', '', esc(c.val)));
      row.appendChild(tx);

      var href = safeUrl(c.href || c.val);
      if (href) {
        if (/^https?:/i.test(href) && !/^https?:\/\/[^/]*$/.test(href) === false) {
          /* 外链 */
        }
        var a = el('a', 'ci-go', '前往 →');
        a.href = href;
        if (/^https?:/i.test(href)) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
        row.appendChild(a);
        /* 邮箱这类短值给个复制按钮更好用 */
        if (c.label === '邮箱' && navigator.clipboard) {
          var b = el('button', 'copy-btn', '复制');
          b.setAttribute('data-copy', c.val);
          row.replaceChild(b, a);
          row.appendChild(a);
        }
      }
      host.appendChild(row);
    });
    if (!n) {
      host.appendChild(el('p', '', '联系方式还没填，去 <code>site.js</code> 里的 <code>SITE.contact</code> 加一行。'));
    }
  }

  /* ============ 页脚 ============ */
  function buildFoot() {
    var host = document.getElementById('foot');
    if (!host) return;
    host.appendChild(el('p', '', esc(SITE.footer)));
    var p = el('p', '');
    p.innerHTML = '本页由手写静态文件构成 · <a href="index.html">首页</a> · <a href="联系.html">联系</a> · <a href="留言.html">留言</a>';
    host.appendChild(p);
  }

  /* ============ 启动 ============ */
  function boot() {
    document.documentElement.classList.remove('no-js');
    buildNav();
    buildSocials();
    buildAbout();
    buildCards();
    buildContact();
    buildFoot();
    buildCopy();
    buildTop();
    buildFade();            /* 必须最后：把所有 .fade 交给观察器 */
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
