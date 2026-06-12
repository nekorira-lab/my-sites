/* ============================================================
   ranking.js — ファミ通 週間ゲームソフト販売ランキング
   参照元: https://www.famitsu.com/ranking/game-sales
   ※ このファイルは GitHub Actions により毎週自動更新されます
   ============================================================ */

const weeklyRanking = {
  period:     "2026年05月25日～2026年05月31日",
  source:     "ファミ通",
  sourceUrl:  "https://www.famitsu.com/ranking/game-sales",
  updatedAt:  "2026-06-12",
  items: [
    { rank: 1,  title: "トモダチコレクション わくわく生活", platform: "Switch", sales: 52483 },
    { rank: 2,  title: "007 ファースト・ライト", platform: "PS5", sales: 20690 },
    { rank: 3,  title: "ぽこ あ ポケモン", platform: "Switch 2", sales: 14122 },
    { rank: 4,  title: "ヨッシーとフカシギの図鑑", platform: "Switch 2", sales: 12701 },
    { rank: 5,  title: "うたわれるもの 白への道標", platform: "PS5", sales: 6225 },
    { rank: 6,  title: "マリオカート ワールド", platform: "Switch 2", sales: 5865 },
    { rank: 7,  title: "デモンキルデモン ～黄泉1984～", platform: "Switch", sales: 3719 },
    { rank: 8,  title: "Minecraft", platform: "Switch", sales: 3480 },
    { rank: 9,  title: "うたわれるもの 白への道標", platform: "Switch 2", sales: 2863 },
    { rank: 10,  title: "スーパー マリオパーティ ジャンボリー Nintendo Switch 2 Edition ＋ ジャンボリーTV", platform: "Switch 2", sales: 2858 },
  ],
};
