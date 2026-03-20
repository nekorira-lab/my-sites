/* cat-site / assets/js/main.js */

const NAV_ITEMS = [
  { href: 'index.html',   label: 'トップ' },
  { href: 'toys.html',    label: 'おもちゃ紹介' },
  { href: 'goods.html',   label: '猫グッズ紹介' },
  { href: 'reviews.html', label: '商品レビュー' },
];

function buildNav() {
  const nav = document.getElementById('site-nav');
  if (!nav) return;
  const ul = nav.querySelector('ul');
  ul.innerHTML = ''; // 重複描画防止
  const current = location.pathname.split('/').pop() || 'index.html';

  NAV_ITEMS.forEach(({ href, label }) => {
    const li = document.createElement('li');
    const a  = document.createElement('a');
    a.href = href;
    a.textContent = label;
    if (href === current) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
    li.appendChild(a);
    ul.appendChild(li);
  });
}

function initMobileNav() {
  const btn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    btn.setAttribute('aria-label', expanded ? 'メニューを開く' : 'メニューを閉じる');
    nav.classList.toggle('open');
  });

  // モバイルナビ内リンク押下で閉じる
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'メニューを開く');
    });
  });
}

// 初期化順序ルール: buildNav() → initMobileNav()
document.addEventListener('DOMContentLoaded', () => {
  buildNav();       // ① nav リンクを DOM に注入
  initMobileNav();  // ② 注入済み <a> にリンク押下イベントを付与
});
