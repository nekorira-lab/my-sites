/* ============================================================
   ranking.js — ファミ通 週間ゲームソフト販売ランキング
   参照元: https://www.famitsu.com/ranking/game-sales
   ※ このファイルは GitHub Actions により毎週自動更新されます
   ============================================================ */

const weeklyRanking = {
  period:     "2026年07月27日～2026年08月02日",
  source:     "ファミ通",
  sourceUrl:  "https://www.famitsu.com/ranking/game-sales",
  updatedAt:  "2026-08-14",
  items: [
    { rank: 1,  title: "スプラトゥーン レイダース", platform: "Switch 2", sales: 73542 },
    { rank: 2,  title: "リズム天国 ミラクルスターズ", platform: "Switch", sales: 59884 },
    { rank: 3,  title: "ほの暮しの庭", platform: "Switch 2", sales: 21965 },
    { rank: 4,  title: "トモダチコレクション わくわく生活", platform: "Switch", sales: 18306 },
    { rank: 5,  title: "テニスの王子様 も～っと 学園祭の王子様 ▽-40 and more...", platform: "Switch", sales: 16996 },
    { rank: 6,  title: "テニスの王子様 ぎゅ～っと！ ドキドキサバイバル Tie break ▽ game", platform: "Switch", sales: 16987 },
    { rank: 7,  title: "ほの暮しの庭", platform: "Switch", sales: 12458 },
    { rank: 8,  title: "BLUE REFLECTION Quartet： 少女たちのキセキ", platform: "Switch", sales: 7880 },
    { rank: 9,  title: "BLUE REFLECTION Quartet： 少女たちのキセキ", platform: "PS5", sales: 7019 },
    { rank: 10,  title: "パワフルプロ野球2026-2027", platform: "Switch", sales: 5928 },
  ],
};
