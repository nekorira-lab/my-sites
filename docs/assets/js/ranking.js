/* ============================================================
   ranking.js — ファミ通 週間ゲームソフト販売ランキング
   参照元: https://www.famitsu.com/ranking/game-sales
   ※ このファイルは GitHub Actions により毎週自動更新されます
   ============================================================ */

const weeklyRanking = {
  period:     "2026年06月15日～2026年06月21日",
  source:     "ファミ通",
  sourceUrl:  "https://www.famitsu.com/ranking/game-sales",
  updatedAt:  "2026-07-03",
  items: [
    { rank: 1,  title: "トモダチコレクション わくわく生活", platform: "Switch", sales: 34957 },
    { rank: 2,  title: "パワフルプロ野球2026-2027", platform: "Switch", sales: 28409 },
    { rank: 3,  title: "冒険家エリオットの千年物語", platform: "Switch 2", sales: 23674 },
    { rank: 4,  title: "冒険家エリオットの千年物語", platform: "PS5", sales: 14843 },
    { rank: 5,  title: "ぽこ あ ポケモン", platform: "Switch 2", sales: 7073 },
    { rank: 6,  title: "eFootball Kick-Off！", platform: "Switch 2", sales: 6835 },
    { rank: 7,  title: "マリオカート ワールド", platform: "Switch 2", sales: 4289 },
    { rank: 8,  title: "Minecraft", platform: "Switch", sales: 3449 },
    { rank: 9,  title: "ヨッシーとフカシギの図鑑", platform: "Switch 2", sales: 3403 },
    { rank: 10,  title: "カービィのエアライダー", platform: "Switch 2", sales: 3332 },
  ],
};
