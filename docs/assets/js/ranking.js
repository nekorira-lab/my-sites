/* ============================================================
   ranking.js — ファミ通 週間ゲームソフト販売ランキング
   参照元: https://www.famitsu.com/ranking/game-sales
   ※ このファイルは GitHub Actions により毎週自動更新されます
   ============================================================ */

const weeklyRanking = {
  period:     "2026年08月31日～2026年09月06日",
  source:     "ファミ通",
  sourceUrl:  "https://www.famitsu.com/ranking/game-sales",
  updatedAt:  "2026-09-11",
  items: [
    { rank: 1,  title: "鬼武者 Way of the Sword", platform: "PS5", sales: 76530 },
    { rank: 2,  title: "リズム天国 ミラクルスターズ", platform: "Switch", sales: 29360 },
    { rank: 3,  title: "鬼武者 Way of the Sword", platform: "Switch 2", sales: 19499 },
    { rank: 4,  title: "スプラトゥーン レイダース", platform: "Switch 2", sales: 10267 },
    { rank: 5,  title: "トモダチコレクション わくわく生活", platform: "Switch", sales: 9880 },
    { rank: 6,  title: "ELDEN RING Tarnished Edition", platform: "Switch 2", sales: 6559 },
    { rank: 7,  title: "The Blood of Dawnwalker", platform: "PS5", sales: 4618 },
    { rank: 8,  title: "マリオカート ワールド", platform: "Switch 2", sales: 4259 },
    { rank: 9,  title: "オービタルズ Orbitals", platform: "Switch 2", sales: 3949 },
    { rank: 10,  title: "Minecraft", platform: "Switch", sales: 3754 },
  ],
};
