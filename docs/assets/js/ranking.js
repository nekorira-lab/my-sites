/* ============================================================
   ranking.js — ファミ通 週間ゲームソフト販売ランキング
   参照元: https://www.famitsu.com/ranking/game-sales
   ※ このファイルは GitHub Actions により毎週自動更新されます
   ============================================================ */

const weeklyRanking = {
  period:     "2026年11月02日～2026年11月08日",
  source:     "ファミ通",
  sourceUrl:  "https://www.famitsu.com/ranking/game-sales",
  updatedAt:  "2026-11-13",
  items: [
    { rank: 1,  title: "ゼルダの伝説 時のオカリナ", platform: "Switch 2", sales: 537041 },
    { rank: 2,  title: "Nintendo Switch Sports Resort", platform: "Switch 2", sales: 16621 },
    { rank: 3,  title: "リズム天国 ミラクルスターズ", platform: "Switch", sales: 8793 },
    { rank: 4,  title: "Stellar Blade（ステラーブレイド） コンプリートエディション", platform: "Switch 2", sales: 8042 },
    { rank: 5,  title: "ファイナルファンタジー レゾナンス", platform: "Switch 2", sales: 6406 },
    { rank: 6,  title: "ファイナルファンタジー レゾナンス", platform: "PS5", sales: 5719 },
    { rank: 7,  title: "ファイナルファンタジー レゾナンス", platform: "Switch", sales: 4500 },
    { rank: 8,  title: "トモダチコレクション わくわく生活", platform: "Switch", sales: 4492 },
    { rank: 9,  title: "Minecraft", platform: "Switch 2", sales: 3828 },
    { rank: 10,  title: "ファイアーエムブレム 万紫千紅", platform: "Switch 2", sales: 3017 },
  ],
};
