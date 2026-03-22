/* ============================================================
   games.js — ゲームデータ（ここだけ編集してください）
   ============================================================
   【設計方針】
   このファイルのデータ部分は JSON と同じ形で書きます。
   将来 games.json に移行するときは、先頭の
     const games =
   と末尾の
     ;
   を取り除き、trailing comma（末尾カンマ）を除去すれば
   そのまま有効な JSON になります。

   【フィールド一覧】
   id       : 一意な識別子（英数字・ハイフン）
   title    : タイトル名
   date     : "YYYY-MM-DD" 形式。日程未定は null
   platforms: ["SW1","SW2","PS5","PS4","XBX","PC","MULTI"] から選択
   genre    : 自由テキスト（例: "アクション", "RPG"）
   note     : 補足テキスト。不要なら null
   link     : Amazon などの URL。なければ null
   highlight: 注目タイトルは true、通常は false
   ============================================================ */

const games = [

  /* ─── 2026年 ─────────────────────────────────────────────── */

  {
    id: "mario-wonder-ring-ring-park",
    title: "スーパーマリオブラザーズ ワンダー Nintendo Switch 2 Edition + みんなでリンリンパーク",
    date: "2026-03-26",
    platforms: ["SW2"],
    genre: "アクション",
    note: null,
    link: null,
    highlight: true,
  },
  {
    id: "tomodachi-collection",
    title: "トモダチコレクション わくわく生活",
    date: "2026-04-16",
    platforms: ["SW1"],
    genre: "シミュレーション",
    note: null,
    link: null,
    highlight: true,
  },
  {
    id: "pragmata-sw2",
    title: "プラグマタ",
    date: "2026-04-24",
    platforms: ["SW2"],
    genre: "SFアクションアドベンチャー",
    note: "Switch 2版",
    link: null,
    highlight: true,
  },
  {
    id: "indiana-jones-sw2",
    title: "インディ・ジョーンズ/大いなる円環",
    date: "2026-05-12",
    platforms: ["SW2"],
    genre: "アクションアドベンチャー",
    note: "Switch 2版",
    link: null,
    highlight: false,
  },
  {
    id: "yoshi-fukashigi",
    title: "ヨッシーとフカシギの図鑑",
    date: "2026-05-21",
    platforms: ["SW2"],
    genre: "アクション",
    note: null,
    link: null,
    highlight: true,
  },
  {
    id: "culdcept-begins",
    title: "カルドセプト ビギンズ",
    date: "2026-07-16",
    platforms: ["SW1", "SW2"],
    genre: "ボードゲーム",
    note: null,
    link: null,
    highlight: false,
  },
  {
    id: "gta6",
    title: "グランド・セフト・オートVI",
    date: "2026-11-19",
    platforms: ["PS5", "XBX"],
    genre: "オープンワールド",
    note: null,
    link: null,
    highlight: true,
  },

  /* ─── 日程未定 ───────────────────────────────────────────── */

  {
    id: "fe-fortunes-weave",
    title: "ファイアーエムブレム 万紫千紅",
    date: null,
    platforms: ["SW2"],
    genre: "ストラテジー",
    note: "2026年発売予定",
    link: null,
    highlight: true,
  },
  {
    id: "the-duskbloods",
    title: "The Duskbloods",
    date: null,
    platforms: ["SW2"],
    genre: "アクション",
    note: "最大8人のPvPvEマルチプレイアクション / 2026年発売予定",
    link: null,
    highlight: true,
  },
  {
    id: "rhythm-heaven-stars",
    title: "リズム天国 ミラクルスターズ",
    date: null,
    platforms: ["SW1"],
    genre: "リズム",
    note: "2026年発売予定",
    link: null,
    highlight: false,
  },
  {
    id: "elden-ring-sw2",
    title: "Elden Ring: Tarnished Edition",
    date: null,
    platforms: ["SW2"],
    genre: "アクションRPG",
    note: "DLC「SHADOW OF THE ERDTREE」同梱 / 2026年発売予定",
    link: null,
    highlight: false,
  },
  {
    id: "intergalactic",
    title: "Intergalactic: The Heretic Prophet",
    date: null,
    platforms: ["PS5"],
    genre: "アクション",
    note: null,
    link: null,
    highlight: false,
  },
  {
    id: "pokemon-wind-wave",
    title: "ポケットモンスター ウインド・ウェーブ",
    date: null,
    platforms: ["SW2"],
    genre: "RPG",
    note: "2027年発売予定",
    link: null,
    highlight: true,
  },

];
