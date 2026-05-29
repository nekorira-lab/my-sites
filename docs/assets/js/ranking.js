/* ============================================================
   ranking.js — ファミ通 週間ゲームソフト販売ランキング
   参照元: https://www.famitsu.com/ranking/game-sales
   ※ このファイルは GitHub Actions により毎週自動更新されます
   ============================================================ */

const weeklyRanking = {
  period:     "2026年05月18日～2026年05月24日",
  source:     "ファミ通",
  sourceUrl:  "https://www.famitsu.com/ranking/game-sales",
  updatedAt:  "2026-05-29",
  items: [
    { rank: 1,  title: "トモダチコレクション わくわく生活", platform: "Switch", sales: 64899 },
    { rank: 2,  title: "ヨッシーとフカシギの図鑑", platform: "Switch 2", sales: 39661 },
    { rank: 3,  title: "ぽこ あ ポケモン", platform: "Switch 2", sales: 22821 },
    { rank: 4,  title: "マリオカート ワールド", platform: "Switch 2", sales: 13699 },
    { rank: 5,  title: "Tales of ARISE - Beyond the Dawn Edition", platform: "Switch 2", sales: 11603 },
    { rank: 6,  title: "Pokemon LEGENDS Z-A Nintendo Switch 2 Edition", platform: "Switch 2", sales: 5706 },
    { rank: 7,  title: "Minecraft", platform: "Switch", sales: 3488 },
    { rank: 8,  title: "あつまれ どうぶつの森 Nintendo Switch 2 Edition", platform: "Switch 2", sales: 3316 },
    { rank: 9,  title: "スーパー マリオパーティ ジャンボリー Nintendo Switch 2 Edition ＋ ジャンボリーTV", platform: "Switch 2", sales: 2900 },
    { rank: 10,  title: "カービィのエアライダー", platform: "Switch 2", sales: 2866 },
  ],
};
