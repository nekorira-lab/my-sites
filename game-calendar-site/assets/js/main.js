/* game-calendar-site / assets/js/main.js — SIGNAL redesign
   ---------------------------------------------------------- */

const NAV_ITEMS = [];  // Single-page site — no nav links needed

/* ─── ① ナビ（互換性のため残す）─────────────────────────── */
function buildNav() {
  const nav = document.getElementById('site-nav');
  if (!nav) return;
  const ul = nav.querySelector('ul');
  if (ul) ul.innerHTML = '';
}

/* ─── ② モバイルナビ（互換性のため残す）────────────────── */
function initMobileNav() { /* single-page, no hamburger needed */ }

/* ─── ③ アプリ状態 ─────────────────────────────────────── */
let currentYear  = 2026;
let currentMonth = 5;    // 0-indexed: 5 = 6月
let currentView  = 'calendar';

const MONTH_NAMES_EN = [
  'JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE',
  'JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'
];
const MONTH_ABBR_EN = [
  'JAN','FEB','MAR','APR','MAY','JUN',
  'JUL','AUG','SEP','OCT','NOV','DEC'
];

const pad = n => String(n).padStart(2, '0');

/* ─── ④ ステータスバー ─────────────────────────────────── */
function buildStatusBar() {
  const countEl = document.getElementById('status-count');
  const nextEl  = document.getElementById('status-next');

  if (countEl) {
    countEl.textContent = `${GAME_DATA.length} タイトル`;
  }

  if (nextEl) {
    const today    = new Date();
    today.setHours(0, 0, 0, 0);
    const upcoming = GAME_DATA
      .filter(g => g.date && new Date(g.date) >= today)
      .sort((a, b) => a.date.localeCompare(b.date));

    if (upcoming.length > 0) {
      const next = upcoming[0];
      const diff = Math.ceil((new Date(next.date) - today) / 86400000);
      if (diff === 0) {
        nextEl.textContent = `次回：${next.title}（本日）`;
      } else {
        nextEl.textContent = `次回：${next.title}（あと${diff}日）`;
      }
    } else {
      nextEl.textContent = '発売予定なし';
    }
  }
}

/* ─── ⑤ ティッカー ─────────────────────────────────────── */
function buildTicker() {
  const track = document.getElementById('ticker-track');
  if (!track) return;

  const confirmed = GAME_DATA
    .filter(g => g.date)
    .sort((a, b) => a.date.localeCompare(b.date));

  if (confirmed.length === 0) return;

  // テキストを2回繰り返してシームレスループ
  const fragment = document.createDocumentFragment();

  [0, 1].forEach(() => {
    confirmed.forEach(game => {
      const item = document.createElement('span');
      item.className = 'ticker-item';

      const parts = game.date.split('-');
      const pLabel = PLATFORMS[game.platforms[0]]?.label || game.platforms[0];

      const title = document.createElement('span');
      title.className = 'ticker-item-title';
      title.textContent = game.title;

      const date = document.createElement('span');
      date.className = 'ticker-item-date';
      date.textContent = `${parts[0]}.${parts[1]}.${parts[2]}`;

      const plat = document.createElement('span');
      plat.className = 'ticker-item-plat';
      plat.textContent = pLabel;

      item.appendChild(title);
      item.appendChild(date);
      item.appendChild(plat);
      fragment.appendChild(item);
    });
  });

  track.appendChild(fragment);

  // ループの長さに応じてアニメーション速度を調整
  const duration = Math.max(40, confirmed.length * 8);
  track.style.animationDuration = `${duration}s`;
}

/* ─── ⑥ カレンダー描画 ─────────────────────────────────── */
function buildCalendar(year, month) {
  const grid    = document.getElementById('cal-grid');
  const titleEl = document.getElementById('cal-month-title');
  if (!grid || !titleEl) return;

  titleEl.textContent = `${year}年${month + 1}月`;
  grid.innerHTML = '';

  const firstDow    = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today       = new Date();
  today.setHours(0, 0, 0, 0);
  let cellIdx = 0;

  // 前月パディング
  for (let i = 0; i < firstDow; i++) {
    const cell = document.createElement('div');
    cell.className = 'cal-cell cal-cell--other-month';
    cell.style.animationDelay = `${cellIdx * 0.01}s`;
    grid.appendChild(cell);
    cellIdx++;
  }

  // 当月セル
  for (let d = 1; d <= daysInMonth; d++) {
    const cell = document.createElement('div');
    cell.className = 'cal-cell';
    cell.style.animationDelay = `${cellIdx * 0.01}s`;

    const dow = (new Date(year, month, d).getDay() + 6) % 7;
    if (dow === 5) cell.classList.add('cal-cell--sat');
    if (dow === 6) cell.classList.add('cal-cell--sun');

    const cellDate = new Date(year, month, d);
    if (cellDate.getTime() === today.getTime()) {
      cell.classList.add('cal-cell--today');
    }

    // 日付ラベル
    const dateEl = document.createElement('div');
    dateEl.className = 'cal-cell-date';
    dateEl.textContent = d;
    cell.appendChild(dateEl);

    // ゲームバッジ
    const key   = `${year}-${pad(month + 1)}-${pad(d)}`;
    const games = GAME_DATA.filter(g => g.date === key);

    cell.setAttribute('tabindex', '0');
    cell.setAttribute('role', 'button');
    cell.setAttribute('aria-label', `${month + 1}月${d}日`);

    if (games.length > 0) {
      cell.classList.add('cal-cell--has-games');
      cell.setAttribute('aria-label', `${month + 1}月${d}日 — ${games.length}タイトル`);

      const maxShow = 3;
      games.slice(0, maxShow).forEach(game => {
        cell.appendChild(makeBadge(game));
      });
      if (games.length > maxShow) {
        const more = document.createElement('span');
        more.className = 'badge-more';
        more.textContent = `+${games.length - maxShow} more`;
        cell.appendChild(more);
      }
    }

    cell.addEventListener('click', () => showListView(year, month, d));
    cell.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        showListView(year, month, d);
      }
    });

    grid.appendChild(cell);
    cellIdx++;
  }

  // 後月パディング
  const total    = firstDow + daysInMonth;
  const trailing = (7 - (total % 7)) % 7;
  for (let i = 0; i < trailing; i++) {
    const cell = document.createElement('div');
    cell.className = 'cal-cell cal-cell--other-month';
    cell.style.animationDelay = `${cellIdx * 0.01}s`;
    grid.appendChild(cell);
    cellIdx++;
  }

  buildLegend();
}

function makeBadge(game) {
  const badge  = document.createElement('span');
  badge.className = 'game-badge';
  badge.textContent = game.title;

  const pKey  = game.platforms[0];
  const pInfo = PLATFORMS[pKey];
  if (pInfo) {
    badge.style.borderLeftColor = pInfo.color;
    badge.style.background      = `${pInfo.color}0e`;
  }
  if (game.highlight) badge.classList.add('game-badge--highlight');
  return badge;
}

/* ─── ⑦ 凡例 ──────────────────────────────────────────── */
function buildLegend() {
  const legend = document.getElementById('cal-legend');
  if (!legend) return;
  legend.innerHTML = '';

  const used = new Set();
  GAME_DATA.forEach(g => {
    if (!g.date) return;
    const [y, m] = g.date.split('-').map(Number);
    if (y === currentYear && m - 1 === currentMonth) {
      g.platforms.forEach(p => used.add(p));
    }
  });

  used.forEach(pKey => {
    const p = PLATFORMS[pKey];
    if (!p) return;
    const item = document.createElement('span');
    item.className = 'legend-item';

    const dot = document.createElement('span');
    dot.className = 'legend-dot';
    dot.style.background = p.color;

    item.appendChild(dot);
    item.appendChild(document.createTextNode(p.label));
    legend.appendChild(item);
  });
}

/* ─── ⑧ リスト描画 ─────────────────────────────────────── */
function buildList(year, month, day) {
  const list    = document.getElementById('game-list');
  const titleEl = document.getElementById('list-month-title');
  if (!list || !titleEl) return;

  let games;
  list.innerHTML = '';

  if (day !== null) {
    // ── 日付クリック時: 当日発売 + 今後発売予定 ──────────────
    titleEl.textContent = `${year}年${month + 1}月${day}日`;
    const key = `${year}-${pad(month + 1)}-${pad(day)}`;

    const todayGames = GAME_DATA.filter(g => g.date === key);
    const futureGames = GAME_DATA
      .filter(g => g.date && g.date > key)
      .sort((a, b) => a.date.localeCompare(b.date));

    // 当日発売セクション
    const sep1 = document.createElement('div');
    sep1.className = 'list-separator list-separator--today';
    sep1.textContent = '当日発売';
    list.appendChild(sep1);

    if (todayGames.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'list-empty list-empty--small';
      empty.textContent = 'この日の発売タイトルはありません。';
      list.appendChild(empty);
    } else {
      todayGames.forEach((game, i) => {
        const card = makeGameCard(game);
        card.style.animationDelay = `${i * 0.04}s`;
        list.appendChild(card);
      });
    }

    // 今後発売予定セクション
    if (futureGames.length > 0) {
      const sep2 = document.createElement('div');
      sep2.className = 'list-separator';
      sep2.textContent = '今後発売予定';
      list.appendChild(sep2);

      futureGames.forEach((game, i) => {
        const card = makeGameCard(game);
        card.style.animationDelay = `${(todayGames.length + i) * 0.04}s`;
        list.appendChild(card);
      });
    }

  } else {
    // ── 月全体表示 ─────────────────────────────────────────
    titleEl.textContent = `${year}年${month + 1}月`;
    const prefix = `${year}-${pad(month + 1)}`;
    const games = GAME_DATA
      .filter(g => g.date && g.date.startsWith(prefix))
      .sort((a, b) => a.date.localeCompare(b.date));

    if (games.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'list-empty';
      empty.textContent = 'この月に確定した発売日はありません。';
      list.appendChild(empty);
    } else {
      games.forEach((game, i) => {
        const card = makeGameCard(game);
        card.style.animationDelay = `${i * 0.04}s`;
        list.appendChild(card);
      });
    }

    // 日程未定セクション
    const tbd = GAME_DATA.filter(g => {
      if (g.date) return false;
      return g.note && g.note.includes(String(year));
    });

    if (tbd.length > 0) {
      const sep = document.createElement('div');
      sep.className = 'list-separator';
      sep.textContent = '日程未定';
      list.appendChild(sep);

      tbd.forEach((game, i) => {
        const card = makeGameCard(game);
        card.style.animationDelay = `${(games.length + i) * 0.04}s`;
        list.appendChild(card);
      });
    }
  }
}

function makeGameCard(game) {
  const card = document.createElement('div');
  card.className = 'game-card';
  card.setAttribute('role', 'listitem');
  if (game.highlight) card.classList.add('game-card--highlight');

  // 左ボーダーにプラットフォーム代表色
  const pInfo = PLATFORMS[game.platforms[0]];
  if (pInfo && game.highlight) {
    card.style.borderLeftColor = pInfo.color;
  }

  // 日付列
  const dateCol = document.createElement('div');
  dateCol.className = 'game-card-date';

  if (game.date) {
    const parts = game.date.split('-');
    const m     = parseInt(parts[1]) - 1;
    const d     = parseInt(parts[2]);
    const y     = parseInt(parts[0]);

    const dayEl = document.createElement('div');
    dayEl.className = 'date-day';
    dayEl.textContent = pad(d);

    const monEl = document.createElement('div');
    monEl.className = 'date-month';
    monEl.textContent = `${m + 1}月`;

    const yrEl = document.createElement('div');
    yrEl.className = 'date-year';
    yrEl.textContent = y;

    dateCol.appendChild(dayEl);
    dateCol.appendChild(monEl);
    dateCol.appendChild(yrEl);
  } else {
    dateCol.classList.add('game-card-date--tbd');
    const tbdEl = document.createElement('div');
    tbdEl.className = 'date-day';
    tbdEl.textContent = 'TBD';
    dateCol.appendChild(tbdEl);
  }

  // 情報列
  const info = document.createElement('div');
  info.className = 'game-card-info';

  const title = document.createElement('div');
  title.className = 'game-card-title';
  title.textContent = game.title;

  const meta = document.createElement('div');
  meta.className = 'game-card-meta';

  game.platforms.forEach(pKey => {
    const p = PLATFORMS[pKey];
    if (!p) return;
    const badge = document.createElement('span');
    badge.className = 'platform-badge';
    badge.textContent = p.label;
    badge.style.color        = p.color;
    badge.style.borderColor  = `${p.color}44`;
    badge.style.background   = `${p.color}10`;
    meta.appendChild(badge);
  });

  if (game.genre) {
    const genre = document.createElement('span');
    genre.className = 'genre-tag';
    genre.textContent = game.genre;
    meta.appendChild(genre);
  }

  info.appendChild(title);
  info.appendChild(meta);

  if (game.note) {
    const note = document.createElement('div');
    note.className = 'game-card-note';
    note.textContent = game.note;
    info.appendChild(note);
  }

  card.appendChild(dateCol);
  card.appendChild(info);
  return card;
}

/* ─── ⑨ ビュー切り替え ─────────────────────────────────── */
function showCalendarView() {
  document.getElementById('calendar-view').classList.remove('view-panel--hidden');
  document.getElementById('list-view').classList.add('view-panel--hidden');
  currentView = 'calendar';
}

function showListView(year, month, day) {
  buildList(year, month, day);
  document.getElementById('calendar-view').classList.add('view-panel--hidden');
  document.getElementById('list-view').classList.remove('view-panel--hidden');
  currentView = 'list';
  document.getElementById('main-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ─── ⑩ コントロール ────────────────────────────────────── */
function initControls() {
  document.getElementById('btn-prev').addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) { currentMonth = 11; currentYear--; }
    buildCalendar(currentYear, currentMonth);
    if (currentView === 'list') buildList(currentYear, currentMonth, null);
  });

  document.getElementById('btn-next').addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) { currentMonth = 0; currentYear++; }
    buildCalendar(currentYear, currentMonth);
    if (currentView === 'list') buildList(currentYear, currentMonth, null);
  });

  document.getElementById('btn-list-view').addEventListener('click', () => {
    showListView(currentYear, currentMonth, null);
  });

  document.getElementById('btn-calendar-view').addEventListener('click', () => {
    showCalendarView();
  });
}

/* ─── 初期化 ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  buildTicker();
  buildStatusBar();
  buildCalendar(currentYear, currentMonth);
  initControls();
});
