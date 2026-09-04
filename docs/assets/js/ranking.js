/* ============================================================
   ranking.js — ファミ通 週間ゲームソフト販売ランキング
   参照元: https://www.famitsu.com/ranking/game-sales
   ※ このファイルは GitHub Actions により毎週自動更新されます
   ============================================================ */

const weeklyRanking = {
  period:     "2026年08月17日～2026年08月23日",
  source:     "ファミ通",
  sourceUrl:  "https://www.famitsu.com/ranking/game-sales",
  updatedAt:  "2026-09-04",
  items: [
    { rank: 1,  title: "リズム天国 ミラクルスターズ", platform: "Switch", sales: 37402 },
    { rank: 2,  title: "スプラトゥーン レイダース", platform: "Switch 2", sales: 13224 },
    { rank: 3,  title: "トモダチコレクション わくわく生活", platform: "Switch", sales: 12558 },
    { rank: 4,  title: "シュタインズ・ゲート リブート", platform: "Switch 2", sales: 7613 },
    { rank: 5,  title: "シュタインズ・ゲート リブート", platform: "PS5", sales: 4002 },
    { rank: 6,  title: "Minecraft", platform: "Switch", sales: 3953 },
    { rank: 7,  title: "パワフルプロ野球2026-2027", platform: "Switch", sales: 3718 },
    { rank: 8,  title: "ぽこ あ ポケモン", platform: "Switch 2", sales: 3701 },
    { rank: 9,  title: "シュタインズ・ゲート リブート", platform: "Switch", sales: 3538 },
    { rank: 10,  title: "Starsand Island（スターサンド・アイランド）", platform: "Switch 2", sales: 3415 },
  ],
};
