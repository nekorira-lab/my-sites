/* ============================================================
   ranking.js — ファミ通 週間ゲームソフト販売ランキング
   参照元: https://www.famitsu.com/ranking/game-sales
   ※ このファイルは GitHub Actions により毎週自動更新されます
   ============================================================ */

const weeklyRanking = {
  period:     "2026年07月20日～2026年07月26日",
  source:     "ファミ通",
  sourceUrl:  "https://www.famitsu.com/ranking/game-sales",
  updatedAt:  "2026-08-07",
  items: [
    { rank: 1,  title: "スプラトゥーン レイダース", platform: "Switch 2", sales: 474684 },
    { rank: 2,  title: "リズム天国 ミラクルスターズ", platform: "Switch", sales: 78355 },
    { rank: 3,  title: "トモダチコレクション わくわく生活", platform: "Switch", sales: 23468 },
    { rank: 4,  title: "パワフルプロ野球2026-2027", platform: "Switch", sales: 7227 },
    { rank: 5,  title: "マリオカート ワールド", platform: "Switch 2", sales: 6661 },
    { rank: 6,  title: "ぽこ あ ポケモン", platform: "Switch 2", sales: 5796 },
    { rank: 7,  title: "eFootball Kick-Off！", platform: "Switch 2", sales: 5578 },
    { rank: 8,  title: "Minecraft", platform: "Switch", sales: 5106 },
    { rank: 9,  title: "がんばれゴエモン大集合！", platform: "Switch", sales: 3961 },
    { rank: 10,  title: "プロ野球スピリッツ2026", platform: "PS5", sales: 3915 },
  ],
};
