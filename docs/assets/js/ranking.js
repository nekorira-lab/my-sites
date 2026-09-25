/* ============================================================
   ranking.js — ファミ通 週間ゲームソフト販売ランキング
   参照元: https://www.famitsu.com/ranking/game-sales
   ※ このファイルは GitHub Actions により毎週自動更新されます
   ============================================================ */

const weeklyRanking = {
  period:     "2026年09月07日～2026年09月13日",
  source:     "ファミ通",
  sourceUrl:  "https://www.famitsu.com/ranking/game-sales",
  updatedAt:  "2026-09-25",
  items: [
    { rank: 1,  title: "リズム天国 ミラクルスターズ", platform: "Switch", sales: 24756 },
    { rank: 2,  title: "鬼武者 Way of the Sword", platform: "PS5", sales: 19654 },
    { rank: 3,  title: "スプラトゥーン レイダース", platform: "Switch 2", sales: 8163 },
    { rank: 4,  title: "トモダチコレクション わくわく生活", platform: "Switch", sales: 7607 },
    { rank: 5,  title: "鬼武者 Way of the Sword", platform: "Switch 2", sales: 7070 },
    { rank: 6,  title: "学校であった怖い話と晦-つきこもり", platform: "Switch", sales: 3683 },
    { rank: 7,  title: "Minecraft", platform: "Switch", sales: 3324 },
    { rank: 8,  title: "マリオカート ワールド", platform: "Switch 2", sales: 3141 },
    { rank: 9,  title: "ほの暮しの庭", platform: "Switch 2", sales: 2837 },
    { rank: 10,  title: "三國志14 with パワーアップキット Complete Edition", platform: "Switch", sales: 2797 },
  ],
};
