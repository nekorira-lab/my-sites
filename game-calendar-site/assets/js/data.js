/* game-calendar-site / assets/js/data.js
   ゲーム発売日データ
   date: "YYYY-MM-DD" | null（日程未定）
   --------------------------------------------------------- */

const PLATFORMS = {
  SW2:   { label: 'Switch 2',  color: '#e60012' },
  SW1:   { label: 'Switch',    color: '#e60012' },
  PS5:   { label: 'PS5',       color: '#0070d1' },
  PS4:   { label: 'PS4',       color: '#0050a0' },
  XBX:   { label: 'Xbox',      color: '#107c10' },
  PC:    { label: 'PC',        color: '#7c3aed' },
  MULTI: { label: 'マルチ',    color: '#c9860a' },
};

const GENRES = {
  ACTION:     'アクション',
  RACE:       'レース',
  RPG:        'RPG',
  OPENWORLD:  'オープンワールド',
  ADVENTURE:  'アドベンチャー',
  SHOOTER:    'シューター',
  PUZZLE:     'パズル',
  SPORTS:     'スポーツ',
  FIGHTING:   '格闘',
  STRATEGY:   'ストラテジー',
  HARDWARE:   'ハードウェア',
  RHYTHM:     'リズム',
};

/* ─── GAME DATA ────────────────────────────────────────────
   追加・修正は date / title / platforms / genre を編集するだけ
   ────────────────────────────────────────────────────────── */
const GAME_DATA = [

  /* ═══════════════ 2025年 ═══════════════════════════════ */

  // 1月
  {
    id: 'ff7-rebirth-pc',
    title: 'ファイナルファンタジー VII リバース',
    date: '2025-01-23',
    platforms: ['PC'],
    genre: GENRES.RPG,
    note: 'PC版',
  },

  // 2月
  {
    id: 'mh-wilds',
    title: 'モンスターハンターワイルズ',
    date: '2025-02-28',
    platforms: ['PS5', 'XBX', 'PC'],
    genre: GENRES.ACTION,
    note: null,
    highlight: true,
  },

  // 3月
  {
    id: 'xenoblade-x-de',
    title: 'ゼノブレイドX ディフィニティブ エディション',
    date: '2025-03-20',
    platforms: ['SW1'],
    genre: GENRES.RPG,
    note: null,
  },

  // 6月
  {
    id: 'sw2-hardware',
    title: 'Nintendo Switch 2 本体発売',
    date: '2025-06-05',
    platforms: ['SW2'],
    genre: GENRES.HARDWARE,
    note: null,
    highlight: true,
  },
  {
    id: 'mario-kart-world',
    title: 'マリオカート ワールド',
    date: '2025-06-05',
    platforms: ['SW2'],
    genre: GENRES.RACE,
    note: 'Switch 2 ローンチタイトル',
    highlight: true,
  },
  {
    id: 'death-stranding-2',
    title: 'デス・ストランディング 2',
    date: '2025-06-26',
    platforms: ['PS5'],
    genre: GENRES.ACTION,
    note: null,
    highlight: true,
  },

  // 7月
  {
    id: 'dk-bananza',
    title: 'ドンキーコング バナンザ',
    date: '2025-07-17',
    platforms: ['SW2'],
    genre: GENRES.ACTION,
    note: null,
    highlight: true,
  },

  // 9月
  {
    id: 'hollow-knight-silksong',
    title: 'Hollow Knight: Silksong',
    date: '2025-09-04',
    platforms: ['SW1', 'SW2', 'PC', 'XBX'],
    genre: GENRES.ACTION,
    note: null,
  },

  // 10月
  {
    id: 'ghost-of-yotei',
    title: 'ゴースト・オブ・ヨーテイ',
    date: '2025-10-02',
    platforms: ['PS5'],
    genre: GENRES.ACTION,
    note: null,
    highlight: true,
  },
  {
    id: 'pokemon-legends-za',
    title: 'ポケットモンスター レジェンズ Z-A',
    date: '2025-10-16',
    platforms: ['SW1', 'SW2'],
    genre: GENRES.RPG,
    note: null,
    highlight: true,
  },

  // 12月
  {
    id: 'metroid-prime-4',
    title: 'メトロイド プライム 4: Beyond',
    date: '2025-12-04',
    platforms: ['SW1', 'SW2'],
    genre: GENRES.SHOOTER,
    note: 'Switch / Switch 2 両対応',
    highlight: true,
  },

  /* ═══════════════ 2026年 ═══════════════════════════════ */

  // 4月
  {
    id: 'tomodachi-collection',
    title: 'トモダチコレクション わくわく生活',
    date: '2026-04-16',
    platforms: ['SW2'],
    genre: GENRES.ADVENTURE,
    note: null,
    highlight: true,
  },

  // 5月
  {
    id: 'indiana-jones-sw2',
    title: 'インディ・ジョーンズ アンド ザ グレートサークル',
    date: '2026-05-12',
    platforms: ['SW2'],
    genre: GENRES.ACTION,
    note: 'Switch 2版',
  },

  // 11月
  {
    id: 'gta6',
    title: 'グランド・セフト・オート VI',
    date: '2026-11-19',
    platforms: ['PS5', 'XBX'],
    genre: GENRES.OPENWORLD,
    note: 'PC版は2027年以降',
    highlight: true,
  },

  // 未定 2026年
  {
    id: 'fe-fortunes-weave',
    title: 'ファイアーエムブレム 万紫千紅',
    date: null,
    platforms: ['SW2'],
    genre: GENRES.STRATEGY,
    note: '2026年内 発売予定',
  },
  {
    id: 'the-duskbloods',
    title: 'The Duskbloods',
    date: null,
    platforms: ['SW2'],
    genre: GENRES.ACTION,
    note: 'FromSoftware / Switch 2 独占 / 2026年内予定',
    highlight: true,
  },
  {
    id: 'rhythm-heaven-stars',
    title: 'リズム天国 ミラクルスターズ',
    date: null,
    platforms: ['SW1', 'SW2'],
    genre: GENRES.RHYTHM,
    note: '2026年内 発売予定',
  },
  {
    id: 'elden-ring-sw2',
    title: 'Elden Ring: Tarnished Edition',
    date: null,
    platforms: ['SW2'],
    genre: GENRES.ACTION,
    note: 'Switch 2版 2026年内発売予定',
  },

  /* ═══════════════ 2027年以降 ═══════════════════════════ */

  {
    id: 'intergalactic',
    title: 'Intergalactic: The Heretic Prophet',
    date: null,
    platforms: ['PS5'],
    genre: GENRES.ACTION,
    note: 'Naughty Dog 新作 / 2027年以降の可能性が高い',
    highlight: false,
  },

];
