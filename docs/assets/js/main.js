/* game-calendar-site / assets/js/main.js
   ---------------------------------------------------------- */

/* ─── プラットフォーム定義（表示用・色定義） ─────────────── */
const PLATFORMS = {
  SW2:   { label: 'Switch 2',  color: '#e60012' },
  SW1:   { label: 'Switch',    color: '#e60012' },
  PS5:   { label: 'PS5',       color: '#0070d1' },
  PS4:   { label: 'PS4',       color: '#0050a0' },
  XBX:   { label: 'Xbox',      color: '#107c10' },
  PC:    { label: 'PC',        color: '#7c3aed' },
  MULTI: { label: 'マルチ',    color: '#c9860a' },
};

/* ─── アプリ状態 ─────────────────────────────────────────── */
// games は games.js で定義済み

const _now = new Date();
_now.setHours(0, 0, 0, 0);
let currentYear  = _now.getFullYear();
let currentMonth = _now.getMonth();
let currentView  = 'calendar';

const pad = n => String(n).padStart(2, '0');

// 今日の日付 Date オブジェクト（毎回生成して確実に今日を返す）
function today() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

// 発売済み判定（date が null または今日以前）
function isReleased(dateStr) {
  return !dateStr || new Date(dateStr) <= today();
}

/* ─── ステータスバー ────────────────────────────────────── */
function buildStatusBar() {
  const countEl = document.getElementById('status-count');
  const nextEl  = document.getElementById('status-next');
  const t = today();

  if (countEl) {
    countEl.textContent = `${games.length} タイトル`;
  }

  if (nextEl) {
    const upcoming = games
      .filter(g => g.date && new Date(g.date) >= t)
      .sort((a, b) => a.date.localeCompare(b.date));

    if (upcoming.length > 0) {
      const next = upcoming[0];
      const diff = Math.ceil((new Date(next.date) - t) / 86400000);
      nextEl.textContent = diff === 0
        ? `次回：${next.title}（本日）`
        : `次回：${next.title}（あと${diff}日）`;
    } else {
      nextEl.textContent = '発売予定なし';
    }
  }
}

/* ─── 次回発売スポットライト ─────────────────────────────── */
function buildNextUp() {
  const card = document.getElementById('next-up-card');
  if (!card) return;

  const t = today();
  const upcoming = games
    .filter(g => g.date && new Date(g.date) >= t)
    .sort((a, b) => a.date.localeCompare(b.date));

  if (upcoming.length === 0) {
    card.hidden = true;
    return;
  }

  const next = upcoming[0];
  const diff = Math.ceil((new Date(next.date) - t) / 86400000);
  const [y, m, d] = next.date.split('-');
  const countdownText = diff === 0 ? '🎉 本日発売！' : `あと ${diff} 日`;

  card.hidden = false;

  const eyebrowEl   = card.querySelector('.next-up-eyebrow');
  const titleEl     = card.querySelector('.next-up-title');
  const dateEl      = card.querySelector('.next-up-date');
  const countdownEl = card.querySelector('.next-up-countdown');

  if (eyebrowEl) eyebrowEl.textContent = '次に発売';

  if (titleEl) {
    titleEl.innerHTML = '';
    if (next.link) {
      const a = document.createElement('a');
      a.href = next.link;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.className = 'next-up-title-link';
      a.textContent = next.title;
      titleEl.appendChild(a);
    } else {
      titleEl.textContent = next.title;
    }
  }

  if (dateEl)      dateEl.textContent      = `${y}年${parseInt(m)}月${parseInt(d)}日`;
  if (countdownEl) countdownEl.textContent = countdownText;
}

/* ─── ティッカー ────────────────────────────────────────── */
function buildTicker() {
  const track = document.getElementById('ticker-track');
  if (!track) return;

  const confirmed = games
    .filter(g => g.date)
    .sort((a, b) => a.date.localeCompare(b.date));

  if (confirmed.length === 0) return;

  const fragment = document.createDocumentFragment();
  [0, 1].forEach(() => {
    confirmed.forEach(game => {
      const item = document.createElement('span');
      item.className = 'ticker-item';

      const parts  = game.date.split('-');
      const pLabel = PLATFORMS[game.platforms[0]]?.label || game.platforms[0];

      const titleSpan = document.createElement('span');
      titleSpan.className = 'ticker-item-title';
      titleSpan.textContent = game.title;

      const dateSpan = document.createElement('span');
      dateSpan.className = 'ticker-item-date';
      dateSpan.textContent = `${parts[0]}.${parts[1]}.${parts[2]}`;

      const platSpan = document.createElement('span');
      platSpan.className = 'ticker-item-plat';
      platSpan.textContent = pLabel;

      item.append(titleSpan, dateSpan, platSpan);
      fragment.appendChild(item);
    });
  });

  track.appendChild(fragment);
  const duration = Math.max(40, confirmed.length * 8);
  track.style.animationDuration = `${duration}s`;
}

/* ─── カレンダー描画 ────────────────────────────────────── */
function buildCalendar(year, month) {
  const grid    = document.getElementById('cal-grid');
  const titleEl = document.getElementById('cal-month-title');
  if (!grid || !titleEl) return;

  titleEl.textContent = `${year}年${month + 1}月`;
  grid.innerHTML = '';

  const firstDow    = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const t           = today();
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

    if (new Date(year, month, d).getTime() === t.getTime()) {
      cell.classList.add('cal-cell--today');
    }

    const dateEl = document.createElement('div');
    dateEl.className = 'cal-cell-date';
    dateEl.textContent = d;
    cell.appendChild(dateEl);

    const key   = `${year}-${pad(month + 1)}-${pad(d)}`;
    const dayGames = games.filter(g => g.date === key);

    cell.setAttribute('tabindex', '0');
    cell.setAttribute('role', 'button');
    cell.setAttribute('aria-label', `${month + 1}月${d}日`);

    if (dayGames.length > 0) {
      cell.classList.add('cal-cell--has-games');
      cell.setAttribute('aria-label', `${month + 1}月${d}日 — ${dayGames.length}タイトル`);

      const maxShow = 3;
      dayGames.slice(0, maxShow).forEach(game => cell.appendChild(makeBadge(game)));
      if (dayGames.length > maxShow) {
        const more = document.createElement('span');
        more.className = 'badge-more';
        more.textContent = `+${dayGames.length - maxShow} more`;
        cell.appendChild(more);
      }
    }

    cell.addEventListener('click', () => showListView('day', key));
    cell.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        showListView('day', key);
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
  const badge = document.createElement('span');
  badge.className = 'game-badge';
  badge.textContent = game.title;

  const pInfo = PLATFORMS[game.platforms[0]];
  if (pInfo) {
    badge.style.borderLeftColor = pInfo.color;
    badge.style.background      = `${pInfo.color}0e`;
  }
  if (game.highlight) badge.classList.add('game-badge--highlight');
  return badge;
}

/* ─── 凡例 ──────────────────────────────────────────────── */
function buildLegend() {
  const legend = document.getElementById('cal-legend');
  if (!legend) return;
  legend.innerHTML = '';

  const used = new Set();
  games.forEach(g => {
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

/* ─── リスト描画 ────────────────────────────────────────── */
// mode = 'day'  : 特定日クリック（その日 + 今後発売）
// mode = 'all'  : 一覧ボタン（発売予定 / 日程未定 / 発売済み）
function buildList(mode, dateStr) {
  const list    = document.getElementById('game-list');
  const titleEl = document.getElementById('list-month-title');
  if (!list || !titleEl) return;

  list.innerHTML = '';
  const t = today();

  if (mode === 'day') {
    // ── 日付クリック ──────────────────────────────────────
    const [y, m, d] = dateStr.split('-');
    titleEl.textContent = `${y}年${parseInt(m)}月${parseInt(d)}日`;

    const todayGames  = games.filter(g => g.date === dateStr);
    const futureGames = games
      .filter(g => g.date && g.date > dateStr)
      .sort((a, b) => a.date.localeCompare(b.date));

    appendSep(list, '当日発売', 'list-separator--today');

    if (todayGames.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'list-empty list-empty--small';
      empty.textContent = 'この日の発売タイトルはありません。';
      list.appendChild(empty);
    } else {
      todayGames.forEach((g, i) => {
        const card = makeGameCard(g);
        card.style.animationDelay = `${i * 0.04}s`;
        list.appendChild(card);
      });
    }

    if (futureGames.length > 0) {
      appendSep(list, '今後発売予定');
      futureGames.forEach((g, i) => {
        const card = makeGameCard(g);
        card.style.animationDelay = `${(todayGames.length + i) * 0.04}s`;
        list.appendChild(card);
      });
    }

  } else {
    // ── 全タイトル表示（一覧ボタン） ─────────────────────
    titleEl.textContent = '全タイトル';

    const upcoming = games
      .filter(g => g.date && new Date(g.date) >= t)
      .sort((a, b) => a.date.localeCompare(b.date));

    const tbd  = games.filter(g => !g.date);

    const past = games
      .filter(g => g.date && new Date(g.date) < t)
      .sort((a, b) => b.date.localeCompare(a.date));

    if (upcoming.length > 0) {
      appendSep(list, '発売予定');
      upcoming.forEach((g, i) => {
        const card = makeGameCard(g);
        card.style.animationDelay = `${i * 0.04}s`;
        list.appendChild(card);
      });
    }

    if (tbd.length > 0) {
      appendSep(list, '日程未定');
      tbd.forEach((g, i) => {
        const card = makeGameCard(g);
        card.style.animationDelay = `${(upcoming.length + i) * 0.04}s`;
        list.appendChild(card);
      });
    }

    if (past.length > 0) {
      appendSep(list, '発売済み');
      past.forEach((g, i) => {
        const card = makeGameCard(g);
        card.style.animationDelay = `${(upcoming.length + tbd.length + i) * 0.04}s`;
        list.appendChild(card);
      });
    }

    if (upcoming.length === 0 && tbd.length === 0 && past.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'list-empty';
      empty.textContent = '現在、登録されているタイトルはありません。';
      list.appendChild(empty);
    }
  }
}

function appendSep(list, text, extraClass) {
  const sep = document.createElement('div');
  sep.className = extraClass ? `list-separator ${extraClass}` : 'list-separator';
  sep.textContent = text;
  list.appendChild(sep);
}

/* ─── ゲームカード: ボタン生成 ──────────────────────────── */
function buildGameButtons(game) {
  const released = isReleased(game.date);
  const wrap = document.createElement('div');
  wrap.className = 'game-card-btns';

  // ── 購入 / 予約ボタン ────────────────────────────────────
  // purchaseLinks のキー形式:
  //   "SW2"        → 標準版ボタン
  //   "SW2_deluxe" → デラックス版ボタン（"Switch 2版を予約（DX）"）
  const links = game.purchaseLinks || {};

  // 標準版: platforms の順番に沿ってボタンを並べる
  const standardEntries = game.platforms
    .filter(pKey => links[pKey])
    .map(pKey => ({ pKey, url: links[pKey], isDeluxe: false }));

  // デラックス版: "_deluxe" サフィックスのキーをすべて拾う
  const deluxeEntries = Object.keys(links)
    .filter(key => key.endsWith('_deluxe'))
    .map(key => ({ pKey: key.replace('_deluxe', ''), url: links[key], isDeluxe: true }));

  const buttonEntries = [...standardEntries, ...deluxeEntries];

  if (buttonEntries.length >= 1) {
    const buyRow = document.createElement('div');
    buyRow.className = 'game-card-buy-row';

    const label = document.createElement('span');
    label.className   = 'game-card-buy-label';
    label.textContent = released ? '購入先:' : '予約先:';
    buyRow.appendChild(label);

    buttonEntries.forEach(({ pKey, url, isDeluxe }) => {
      const p = PLATFORMS[pKey];
      if (!p) return;
      const btn = document.createElement('a');
      btn.className   = 'card-btn card-btn--platform';
      btn.href        = url;
      btn.target      = '_blank';
      btn.rel         = 'noopener noreferrer';
      const action    = released ? '購入' : '予約';
      btn.textContent = isDeluxe
        ? `${p.label}版を${action}（DX）`
        : `${p.label}版を${action}`;
      btn.style.color       = p.color;
      btn.style.borderColor = `${p.color}66`;
      btn.style.background  = `${p.color}12`;
      buyRow.appendChild(btn);
    });

    wrap.appendChild(buyRow);
  }

  // ── Amazonで探す ─────────────────────────────────────────
  // amazonSearchUrl が明示されていればそれを使用、なければタイトルで自動生成
  const searchUrl = game.amazonSearchUrl
    || `https://www.amazon.co.jp/s?k=${encodeURIComponent(game.title)}`;
  const searchBtn = document.createElement('a');
  searchBtn.className   = 'card-btn card-btn--sub';
  searchBtn.href        = searchUrl;
  searchBtn.target      = '_blank';
  searchBtn.rel         = 'noopener noreferrer';
  searchBtn.textContent = 'Amazonで探す';
  wrap.appendChild(searchBtn);

  // ── 公式サイト ───────────────────────────────────────────
  // officialUrl または link どちらでも受け付ける（移行期の互換）
  const officialUrl = game.officialUrl || game.link;
  const officialBtn = document.createElement(officialUrl ? 'a' : 'span');
  officialBtn.className   = 'card-btn card-btn--sub';
  officialBtn.textContent = '公式サイト';
  if (officialUrl) {
    officialBtn.href   = officialUrl;
    officialBtn.target = '_blank';
    officialBtn.rel    = 'noopener noreferrer';
  } else {
    officialBtn.classList.add('card-btn--disabled');
    officialBtn.setAttribute('aria-disabled', 'true');
    officialBtn.title = '公式サイト未登録';
  }
  wrap.appendChild(officialBtn);

  return wrap;
}

/* ─── ゲームカード ──────────────────────────────────────── */
function makeGameCard(game) {
  const card = document.createElement('div');
  card.className = 'game-card';
  card.setAttribute('role', 'listitem');
  if (game.highlight) card.classList.add('game-card--highlight');

  const pInfo = PLATFORMS[game.platforms[0]];
  if (pInfo && game.highlight) card.style.borderLeftColor = pInfo.color;

  // ── 日付列 ──────────────────────────────────────────────
  const dateCol = document.createElement('div');
  dateCol.className = 'game-card-date';

  if (game.date) {
    const [y, m, d] = game.date.split('-').map(Number);

    const dayEl = document.createElement('div');
    dayEl.className = 'date-day';
    dayEl.textContent = pad(d);

    const monEl = document.createElement('div');
    monEl.className = 'date-month';
    monEl.textContent = `${m}月`;

    const yrEl = document.createElement('div');
    yrEl.className = 'date-year';
    yrEl.textContent = y;

    dateCol.append(dayEl, monEl, yrEl);
  } else {
    dateCol.classList.add('game-card-date--tbd');
    const tbdEl = document.createElement('div');
    tbdEl.className = 'date-day';
    tbdEl.textContent = 'TBD';
    dateCol.appendChild(tbdEl);
  }

  // ── 情報列 ──────────────────────────────────────────────
  const info = document.createElement('div');
  info.className = 'game-card-info';

  // タイトル（link がある場合はリンク化）
  const titleDiv = document.createElement('div');
  titleDiv.className = 'game-card-title';

  if (game.link) {
    const a = document.createElement('a');
    a.href = game.link;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'game-card-title-link';
    a.textContent = game.title;
    titleDiv.appendChild(a);
  } else {
    titleDiv.textContent = game.title;
  }

  // プラットフォームバッジ + ジャンル
  const meta = document.createElement('div');
  meta.className = 'game-card-meta';

  game.platforms.forEach(pKey => {
    const p = PLATFORMS[pKey];
    if (!p) return;
    const badge = document.createElement('span');
    badge.className = 'platform-badge';
    badge.textContent = p.label;
    badge.style.color       = p.color;
    badge.style.borderColor = `${p.color}44`;
    badge.style.background  = `${p.color}10`;
    meta.appendChild(badge);
  });

  if (game.genre) {
    const genre = document.createElement('span');
    genre.className = 'genre-tag';
    genre.textContent = game.genre;
    meta.appendChild(genre);
  }

  info.append(titleDiv, meta);

  // ノート
  if (game.note) {
    const note = document.createElement('div');
    note.className = 'game-card-note';
    note.textContent = game.note;
    info.appendChild(note);
  }

  info.appendChild(buildGameButtons(game));

  // 最終確認日・参照元（未来の確定タイトルのみリスト表示）
  if (game.lastVerifiedAt && game.date && new Date(game.date) >= today()) {
    const [y, m, d] = game.lastVerifiedAt.split('-').map(Number);
    const verified = document.createElement('div');
    verified.className = 'game-card-verified';
    if (game.sourceUrl) {
      verified.innerHTML = `確認: ${y}年${m}月${d}日 ／ <a href="${game.sourceUrl}" target="_blank" rel="noopener noreferrer">${game.sourceName || '出典'}</a>`;
    } else if (game.sourceName) {
      verified.textContent = `確認: ${y}年${m}月${d}日 ／ ${game.sourceName}`;
    } else {
      verified.textContent = `確認: ${y}年${m}月${d}日`;
    }
    info.appendChild(verified);
  }

  card.append(dateCol, info);
  return card;
}

/* ─── ビュー切り替え ────────────────────────────────────── */
function showCalendarView() {
  document.getElementById('calendar-view').classList.remove('view-panel--hidden');
  document.getElementById('list-view').classList.add('view-panel--hidden');
  currentView = 'calendar';
}

function showListView(mode, dateStr) {
  buildList(mode, dateStr);
  document.getElementById('calendar-view').classList.add('view-panel--hidden');
  document.getElementById('list-view').classList.remove('view-panel--hidden');
  currentView = 'list';
  document.getElementById('main-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ─── コントロール ──────────────────────────────────────── */
function initControls() {
  document.getElementById('btn-prev').addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) { currentMonth = 11; currentYear--; }
    buildCalendar(currentYear, currentMonth);
  });

  document.getElementById('btn-next').addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) { currentMonth = 0; currentYear++; }
    buildCalendar(currentYear, currentMonth);
  });

  document.getElementById('btn-list-view').addEventListener('click', () => {
    showListView('all', null);
  });

  document.getElementById('btn-calendar-view').addEventListener('click', () => {
    showCalendarView();
  });
}

/* ─── フッター更新日 ─────────────────────────────────────── */
function buildFooterDate() {
  const el = document.getElementById('footer-updated');
  if (!el) return;
  // games.js の lastVerifiedAt 最新値をデータ更新日として表示
  const dates = games
    .map(g => g.lastVerifiedAt)
    .filter(Boolean)
    .sort();
  if (dates.length === 0) return;
  const latest = dates[dates.length - 1];
  const [y, m, d] = latest.split('-').map(Number);
  el.textContent = `${y}年${m}月${d}日`;
}

/* ─── 初期化 ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  buildNextUp();
  buildTicker();
  buildStatusBar();
  buildCalendar(currentYear, currentMonth);
  initControls();
  buildFooterDate();
});
