/* ============================================================
   ranking.js — ファミ通 週間ゲームソフト販売ランキング
   参照元: https://www.famitsu.com/ranking/game-sales
   ※ このファイルは GitHub Actions により毎週自動更新されます
   ============================================================ */

const weeklyRanking = {
  period:     "2026年10月19日～2026年10月25日",
  source:     "ファミ通",
  sourceUrl:  "https://www.famitsu.com/ranking/game-sales",
  updatedAt:  "2026-11-06",
  items: [
    { rank: 1,  title: "Nintendo Switch Sports Resort", platform: "Switch 2", sales: 64632 },
    { rank: 2,  title: "ファイナルファンタジー レゾナンス", platform: "Switch 2", sales: 52268 },
    { rank: 3,  title: "ファイナルファンタジー レゾナンス", platform: "PS5", sales: 50452 },
    { rank: 4,  title: "ファイナルファンタジー レゾナンス", platform: "Switch", sales: 30471 },
    { rank: 5,  title: "コール オブ デューティ モダン・ウォーフェア4", platform: "PS5", sales: 12816 },
    { rank: 6,  title: "リズム天国 ミラクルスターズ", platform: "Switch", sales: 9671 },
    { rank: 7,  title: "ONE PIECE 海のごちそうレストラン", platform: "Switch 2", sales: 5631 },
    { rank: 8,  title: "トモダチコレクション わくわく生活", platform: "Switch", sales: 4682 },
    { rank: 9,  title: "ファイアーエムブレム 万紫千紅", platform: "Switch 2", sales: 4393 },
    { rank: 10,  title: "マリオカート ワールド", platform: "Switch 2", sales: 3682 },
  ],
};
