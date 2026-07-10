/* ============================================================
   ranking.js — ファミ通 週間ゲームソフト販売ランキング
   参照元: https://www.famitsu.com/ranking/game-sales
   ※ このファイルは GitHub Actions により毎週自動更新されます
   ============================================================ */

const weeklyRanking = {
  period:     "2026年06月22日～2026年06月28日",
  source:     "ファミ通",
  sourceUrl:  "https://www.famitsu.com/ranking/game-sales",
  updatedAt:  "2026-07-10",
  items: [
    { rank: 1,  title: "Star Fox", platform: "Switch 2", sales: 41680 },
    { rank: 2,  title: "トモダチコレクション わくわく生活", platform: "Switch", sales: 28543 },
    { rank: 3,  title: "パワフルプロ野球2026-2027", platform: "Switch", sales: 16950 },
    { rank: 4,  title: "eFootball Kick-Off！", platform: "Switch 2", sales: 6483 },
    { rank: 5,  title: "ぽこ あ ポケモン", platform: "Switch 2", sales: 5870 },
    { rank: 6,  title: "マリオカート ワールド", platform: "Switch 2", sales: 4521 },
    { rank: 7,  title: "メダロット カードロボトルRB カブト Ver./クワガタ Ver.", platform: "Switch", sales: 4348 },
    { rank: 8,  title: "Blackish House ←sideZ -Retour-", platform: "Switch", sales: 4114 },
    { rank: 9,  title: "冒険家エリオットの千年物語", platform: "Switch 2", sales: 4077 },
    { rank: 10,  title: "Minecraft", platform: "Switch", sales: 3353 },
  ],
};
