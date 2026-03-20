/* history-site / assets/js/main.js */

const NAV_ITEMS = [
  { href: 'index.html',      label: 'トップ' },
  { href: 'characters.html', label: '登場人物' },
  { href: 'relations.html',  label: '人物相関図' },
  { href: 'map.html',        label: '戦場マップ' },
  { href: 'timeline.html',   label: '年表' },
  { href: 'locations.html',  label: '舞台地' },
  { href: 'book.html',       label: '書籍紹介' },
];

// ── 相関図ツールチップ用データ ─────────────────────────────
// 事実に基づく客観的な説明文を記載
const CHARACTER_INFO = {
  '豊臣秀頼': '豊臣秀吉の嫡男。大阪の陣当時は22歳。大阪城に在った豊臣家当主。',
  '淀殿':     '豊臣秀頼の母。浅井長政と織田市の娘。秀頼とともに大阪城にあった。',
  '大野治長': '豊臣家の重臣。淀殿の信任が厚く、城内政治を主導した。',
  '真田信繁': '真田昌幸の次男。「幸村」とも呼ばれる。大阪冬の陣では真田丸を構築して幕府軍を撃退した。',
  '後藤又兵衛': '元黒田家家臣の牢人。大阪の陣に豊臣方として参加。夏の陣の道明寺・誉田の戦いで戦死。',
  '毛利勝永': '元土佐領主毛利家の牢人。大阪の陣に豊臣方として参加し、夏の陣で活躍した。',
  '長宗我部盛親': '元土佐国主の牢人。大阪の陣に豊臣方として参加。夏の陣に参戦した。',
  '徳川家康': '江戸幕府初代将軍。関ヶ原の戦い後に政権を確立し、大阪の陣で豊臣家を滅ぼした。',
  '徳川秀忠': '徳川家康の三男・二代将軍。大阪の陣では総大将として参加した。',
  '本多正純': '徳川家康の側近。大阪の陣に際して外交交渉にも関わった。',
};

// ── 戦場マップツールチップ用データ ───────────────────────
const LOCATION_INFO = {
  '大阪城':   '豊臣秀吉が築いた居城。大阪の陣の中心となった場所。冬の陣・夏の陣ともに豊臣方の拠点となった。',
  '真田丸':   '大阪冬の陣で真田信繁が築いた出丸（城の外に設けた砦）。1614年11月の戦いで前田利常らの幕府軍を撃退した。',
  '茶臼山':   '大阪夏の陣（1615年5月）に徳川家康が本陣を置いた丘。現在は天王寺公園内にある。',
  '天王寺':   '1615年5月7日、大阪夏の陣最大の戦闘（天王寺・岡山の戦い）が行われた地域。豊臣方が最終的に敗北した。',
  '道明寺':   '1615年5月6日、後藤又兵衛が徳川方と激戦を繰り広げた場所。後藤又兵衛はこの戦いで戦死した。',
  '八尾・若江': '1615年5月6日、長宗我部盛親・木村重成らが戦った地域。夏の陣における激戦地のひとつ。',
};

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

// ── 地図ツールチップ ─────────────────────────────────────
function initMapTooltip() {
  const tooltip = document.querySelector('.map-tooltip');
  if (!tooltip) return;

  const locations = document.querySelectorAll('.map-location');
  locations.forEach(loc => {
    const name = loc.getAttribute('data-name');
    const info = LOCATION_INFO[name];
    if (!info) return;

    function show(e) {
      const rect = loc.closest('.map-wrap').getBoundingClientRect();
      const svgRect = loc.closest('svg').getBoundingClientRect();
      const x = e.clientX - rect.left + 12;
      const y = e.clientY - rect.top + 12;
      tooltip.style.left = x + 'px';
      tooltip.style.top  = y + 'px';
      tooltip.innerHTML  = `<strong>${name}</strong>${info}`;
      tooltip.style.display = 'block';
    }
    function hide() { tooltip.style.display = 'none'; }

    loc.addEventListener('mousemove', show);
    loc.addEventListener('mouseleave', hide);
    loc.addEventListener('touchstart', e => {
      e.preventDefault();
      tooltip.style.left = '8px';
      tooltip.style.top  = '8px';
      tooltip.innerHTML  = `<strong>${name}</strong>${info}`;
      tooltip.style.display = 'block';
    });
    document.addEventListener('touchstart', e => {
      if (!loc.contains(e.target)) hide();
    });
  });
}

// ── 相関図ツールチップ ───────────────────────────────────
function initRelationsTooltip() {
  const tooltip = document.querySelector('.map-tooltip');
  if (!tooltip) return;

  const nodes = document.querySelectorAll('.rel-node');
  nodes.forEach(node => {
    const name = node.getAttribute('data-name');
    const info = CHARACTER_INFO[name];
    if (!info) return;

    node.addEventListener('mousemove', e => {
      const rect = node.closest('.map-wrap').getBoundingClientRect();
      tooltip.style.left = (e.clientX - rect.left + 12) + 'px';
      tooltip.style.top  = (e.clientY - rect.top + 12) + 'px';
      tooltip.innerHTML  = `<strong>${name}</strong>${info}`;
      tooltip.style.display = 'block';
    });
    node.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });
    node.style.cursor = 'help';
  });
}

// 初期化順序ルール: buildNav() → initMobileNav()
document.addEventListener('DOMContentLoaded', () => {
  buildNav();              // ① nav リンクを DOM に注入
  initMobileNav();         // ② 注入済み <a> にリンク押下イベントを付与
  initMapTooltip();        // ③ 地図ツールチップ（map.html のみ動作）
  initRelationsTooltip();  // ④ 相関図ツールチップ（relations.html のみ動作）
});
