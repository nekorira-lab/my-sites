/* ============================================================
   ranking.js — ファミ通 週間ゲームソフト販売ランキング
   参照元: https://www.famitsu.com/ranking/game-sales
   ※ このファイルは GitHub Actions により毎週自動更新されます
   ============================================================ */

const weeklyRanking = {
  period:     "2026年04月20日～2026年04月26日",
  source:     "ファミ通",
  sourceUrl:  "https://www.famitsu.com/ranking/game-sales",
  updatedAt:  "2026-05-01",
  items: [
    { rank: 1,  title: "トモダチコレクション わくわく生活", platform: "Switch", sales: 178533 },
    { rank: 2,  title: "ぽこ あ ポケモン", platform: "Switch 2", sales: 17039 },
    { rank: 3,  title: "プラグマタ", platform: "Switch 2", sales: 14453 },
    { rank: 4,  title: "プラグマタ", platform: "PS5", sales: 12786 },
    { rank: 5,  title: "マツリカの炯-kEi- 天命華燭伝", platform: "Switch", sales: 7654 },
    { rank: 6,  title: "マリオカート ワールド", platform: "Switch 2", sales: 5537 },
    { rank: 7,  title: "あつまれ どうぶつの森 Nintendo Switch 2 Edition", platform: "Switch 2", sales: 3695 },
    { rank: 8,  title: "Minecraft", platform: "Switch", sales: 3378 },
    { rank: 9,  title: "桃太郎電鉄2 ～あなたの町も きっとある～ 東日本編＋西日本編", platform: "Switch", sales: 3201 },
    { rank: 10,  title: "エルミナージュ ORIGINAL～闇の巫女と神々の指輪～", platform: "Switch", sales: 2882 },
  ],
};
