#!/usr/bin/env node
/**
 * compare-week.js — games.js と見本サイトの週次比較ツール
 * ===========================================================
 * 【毎週の確認手順】
 *
 *   ① COMPARE_WEEK_START を確認したい週の月曜日に設定する
 *   ② 見本サイト（ファミ通など）でその週の発売タイトルを確認する
 *   ③ REFERENCE_GAMES 配列に貼り付ける
 *      ※ title表記は games.js と同じ言語に揃えること
 *        （日本語タイトルは日本語、英語タイトルは英語）
 *   ④ 実行: node tools/compare-week.js
 *   ⑤ 出力末尾の「games.js 追記用コード」をコピーして貼り付ける
 *
 * 週を変えるには COMPARE_WEEK_START だけ書き換えてください。
 * ===========================================================
 */

// ═══════════════════════════════════════════════════════════
// ① 比較対象週の月曜日を設定（YYYY-MM-DD）
// ═══════════════════════════════════════════════════════════
const COMPARE_WEEK_START = '2026-04-06';

// ─────────────────────────────────────────────────────────
// 見本サイトの参照元（出力に表示されます）
// ─────────────────────────────────────────────────────────
const REFERENCE_SOURCE_NAME = 'ファミ通 発売スケジュール';
const REFERENCE_SOURCE_URL  = 'https://www.famitsu.com/schedule';

// ═══════════════════════════════════════════════════════════
// ③ 見本サイトから転記したタイトル一覧
//
//   フォーマット:
//     { date: "YYYY-MM-DD", title: "タイトル名", platforms: ["SW2"] },
//
//   - platforms は REFERENCE_SOURCE で確認できるものを入れる
//   - title は games.js の表記ルールに合わせる
//     （日本語公式タイトルがある場合は日本語）
// ═══════════════════════════════════════════════════════════
const REFERENCE_GAMES = [
  // ── 出典: ファミ通 発売スケジュール（2026-04-08〜04-10）──
  { date: "2026-04-08", title: "Pokémon Champions",                         platforms: ["SW1"] },
  { date: "2026-04-08", title: "STARFIELD",                                 platforms: ["PS5"] },
  { date: "2026-04-09", title: "ザ・ローグ：プリンス オブ ペルシャ",         platforms: ["SW2", "SW1", "PS5"] },
  { date: "2026-04-09", title: "オレオール キボウのツバサ",                   platforms: ["PS5", "PS4", "SW1"] },
  { date: "2026-04-09", title: "メモリーズオフ 双想 Break out of my shell",   platforms: ["SW1", "PS5", "PS4", "PC"] },
  { date: "2026-04-09", title: "メモリーズオフ双想 DOUBLE PACK",               platforms: ["SW1"] },
  { date: "2026-04-10", title: "ソニックレーシング クロスワールド Nintendo Switch 2 Edition", platforms: ["SW2"] },
];

// ===========================================================
// 以下は変更不要
// ===========================================================

const fs   = require('fs');
const path = require('path');

function formatLocalDate(date) {
  const year  = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day   = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// games.js を読み込む（docs/ フォルダに移動済み）
const gamesPath = path.join(__dirname, '../../docs/assets/js/games.js');
const src       = fs.readFileSync(gamesPath, 'utf-8');
const fn        = new Function(src + '\nreturn games;');
const games     = fn();

// 今日の日付
const TODAY = formatLocalDate(new Date());

// 週の終端（日曜）を算出
const weekStart    = new Date(COMPARE_WEEK_START + 'T00:00:00');
const weekEnd      = new Date(weekStart);
weekEnd.setDate(weekEnd.getDate() + 6);
const weekStartStr = COMPARE_WEEK_START;
const weekEndStr   = formatLocalDate(weekEnd);

// 部分一致で同一タイトルか判定
function isSameTitle(a, b) {
  const normalize = s => s.toLowerCase().replace(/[\s\u3000:：・\-\/]/g, '');
  const na = normalize(a);
  const nb = normalize(b);
  return na.includes(nb) || nb.includes(na);
}

// ID を title から自動生成（英数字ハイフン形式）
function generateId(title, date) {
  const dateSlug = date ? date.replace(/-/g, '').slice(2) : 'tbd';
  const titleSlug = title
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 30)
    .replace(/-+$/, '');
  // 非ASCII文字を除去（日本語タイトルはそのまま短縮）
  const ascii = titleSlug.replace(/[^\x00-\x7F-]/g, '');
  return ascii.length >= 4 ? ascii : `game-${dateSlug}`;
}

// games.js エントリ形式に整形（貼り付け用）
function formatEntry(ref) {
  const plats     = ref.platforms || [];
  const platsStr  = JSON.stringify(plats).replace(/,/g, ', ');
  const id        = generateId(ref.title, ref.date);

  const lines = [
    `  {`,
    `    id:             "${id}",`,
    `    title:          "${ref.title}",`,
    `    date:           ${ref.date ? `"${ref.date}"` : 'null'},`,
    `    platforms:      ${platsStr},`,
    `    genre:          "",`,
    `    note:           null,`,
    `    link:           null,`,
    `    highlight:      false,`,
    `    sourceUrl:      ${REFERENCE_SOURCE_URL ? `"${REFERENCE_SOURCE_URL}"` : 'null'},`,
    `    sourceName:     ${REFERENCE_SOURCE_NAME ? `"${REFERENCE_SOURCE_NAME}"` : 'null'},`,
    `    lastVerifiedAt: "${TODAY}",`,
    `  },`,
  ];
  return lines.join('\n');
}

// games.js から該当週を抽出
const inGamesJs    = games.filter(g => g.date && g.date >= weekStartStr && g.date <= weekEndStr);
const inReference  = REFERENCE_GAMES.filter(g => g.date && g.date >= weekStartStr && g.date <= weekEndStr);
const missing      = inReference.filter(ref => !inGamesJs.some(g => isSameTitle(g.title, ref.title)));
const extra        = inGamesJs.filter(g => !inReference.some(ref => isSameTitle(g.title, ref.title)));

// ── 機種別集計 ──────────────────────────────────────────────
const platformCount = {};
inReference.forEach(g => (g.platforms || []).forEach(p => {
  platformCount[p] = (platformCount[p] || 0) + 1;
}));
const missingByPlatform = {};
missing.forEach(g => (g.platforms || []).forEach(p => {
  missingByPlatform[p] = (missingByPlatform[p] || 0) + 1;
}));

// ═══════════════════════════════════════════════════════════
// 出力
// ═══════════════════════════════════════════════════════════
console.log(`\n${'═'.repeat(62)}`);
console.log(` 比較期間: ${weekStartStr}（月）〜 ${weekEndStr}（日）`);
console.log(` 参照元  : ${REFERENCE_SOURCE_NAME}`);
console.log(`${'═'.repeat(62)}\n`);

console.log(`【games.js 登録済み: ${inGamesJs.length} 件】`);
if (inGamesJs.length === 0) {
  console.log('  (なし)');
} else {
  inGamesJs.forEach(g => console.log(`  ${g.date}  [${g.platforms.join('/')}]  ${g.title}`));
}

console.log(`\n【見本サイト: ${inReference.length} 件】`);
if (inReference.length === 0) {
  console.log('  REFERENCE_GAMES が空です。');
  console.log('  見本サイトのタイトルを REFERENCE_GAMES 配列に入力してください。');
} else {
  inReference.forEach(g => {
    const plat = g.platforms ? g.platforms.join('/') : '未設定';
    console.log(`  ${g.date}  [${plat}]  ${g.title}`);
  });
}

if (inReference.length > 0) {
  console.log(`\n【❌ 抜けタイトル: ${missing.length} 件】`);
  if (missing.length === 0) {
    console.log('  なし ✅');
  } else {
    missing.forEach(g => {
      const plat = g.platforms ? g.platforms.join('/') : '?';
      console.log(`  ❌  ${g.date}  [${plat}]  ${g.title}`);
    });
  }

  console.log(`\n【⚠️  余剰タイトル（games.js にあって見本にない）: ${extra.length} 件】`);
  if (extra.length === 0) {
    console.log('  なし ✅');
  } else {
    extra.forEach(g => console.log(`  ⚠️   ${g.date}  [${g.platforms.join('/')}]  ${g.title}`));
    console.log('\n  → 見本サイトに存在しない場合は削除または要確認。');
  }

  // ── 機種別不足傾向 ────────────────────────────────────────
  console.log('\n【機種別 集計（見本サイト総数 vs 抜け件数）】');
  const allPlats = ['SW2', 'SW1', 'PS5', 'PS4', 'XBX', 'PC'];
  allPlats.forEach(p => {
    const total   = platformCount[p] || 0;
    const missing_ = missingByPlatform[p] || 0;
    if (total === 0) return;
    const bar = missing_ > 0 ? `❌ ${missing_}件抜け / 計${total}件` : `✅ 全件登録済み（計${total}件）`;
    console.log(`  ${p.padEnd(4)}  ${bar}`);
  });
}

// ── 追記用コードブロック ──────────────────────────────────────
if (missing.length > 0) {
  console.log('\n' + '═'.repeat(62));
  console.log(' 📋 games.js 追記用コード（該当週の月コメント直前に貼り付けてください）');
  console.log(' ⚠️  genre フィールドは "" になっています。追記後に修正してください。');
  console.log('═'.repeat(62));
  console.log('');
  missing.forEach(ref => {
    console.log(formatEntry(ref));
    console.log('');
  });
  console.log('─'.repeat(62));
}

console.log('\n' + '─'.repeat(62));
if (missing.length === 0) {
  console.log(' ✅ 抜けなし。この週は完了です。');
} else {
  console.log(` 次のステップ: 上記コードを games.js に追加後、再実行して`);
  console.log(`   「抜けタイトル: 0 件」になれば OK です。`);
}
console.log('─'.repeat(62) + '\n');
