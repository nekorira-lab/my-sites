/* ============================================================
   ranking.js — ファミ通 週間ゲームソフト販売ランキング
   参照元: https://www.famitsu.com/ranking/game-sales
   ※ このファイルは GitHub Actions により毎週自動更新されます
   ============================================================ */

const weeklyRanking = {
  period:     "2026年06月29日～2026年07月05日",
  source:     "ファミ通",
  sourceUrl:  "https://www.famitsu.com/ranking/game-sales",
  updatedAt:  "2026-07-17",
  items: [
    { rank: 1,  title: "リズム天国 ミラクルスターズ", platform: "Switch", sales: 393378 },
    { rank: 2,  title: "がんばれゴエモン大集合！", platform: "Switch", sales: 60428 },
    { rank: 3,  title: "トモダチコレクション わくわく生活", platform: "Switch", sales: 26552 },
    { rank: 4,  title: "パワフルプロ野球2026-2027", platform: "Switch", sales: 13261 },
    { rank: 5,  title: "Star Fox", platform: "Switch 2", sales: 10388 },
    { rank: 6,  title: "がんばれゴエモン大集合！", platform: "PS5", sales: 8773 },
    { rank: 7,  title: "ぽこ あ ポケモン", platform: "Switch 2", sales: 6724 },
    { rank: 8,  title: "マリオカート ワールド", platform: "Switch 2", sales: 5976 },
    { rank: 9,  title: "eFootball Kick-Off！", platform: "Switch 2", sales: 5946 },
    { rank: 10,  title: "Minecraft", platform: "Switch", sales: 4027 },
  ],
};
