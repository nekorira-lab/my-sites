/* ============================================================
   ranking.js — ファミ通 週間ゲームソフト販売ランキング
   参照元: https://www.famitsu.com/ranking/game-sales
   ※ このファイルは GitHub Actions により毎週自動更新されます
   ============================================================ */

const weeklyRanking = {
  period:     "2026年09月21日～2026年09月27日",
  source:     "ファミ通",
  sourceUrl:  "https://www.famitsu.com/ranking/game-sales",
  updatedAt:  "2026-10-09",
  items: [
    { rank: 1,  title: "ダービースタリオン2", platform: "Switch 2", sales: 29336 },
    { rank: 2,  title: "リズム天国 ミラクルスターズ", platform: "Switch", sales: 27309 },
    { rank: 3,  title: "ファイアーエムブレム 万紫千紅", platform: "Switch 2", sales: 26728 },
    { rank: 4,  title: "SILENT HILL： Townfall", platform: "PS5", sales: 13596 },
    { rank: 5,  title: "ドラゴンクエストXI　過ぎ去りし時を求めて S", platform: "Switch 2", sales: 10844 },
    { rank: 6,  title: "EA SPORTS FC 27", platform: "PS5", sales: 9873 },
    { rank: 7,  title: "トモダチコレクション わくわく生活", platform: "Switch", sales: 8052 },
    { rank: 8,  title: "スプラトゥーン レイダース", platform: "Switch 2", sales: 7405 },
    { rank: 9,  title: "EA SPORTS FC 27", platform: "Switch 2", sales: 5952 },
    { rank: 10,  title: "鬼武者 Way of the Sword", platform: "PS5", sales: 5141 },
  ],
};
