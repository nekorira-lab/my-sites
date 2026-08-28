/* ============================================================
   ranking.js — ファミ通 週間ゲームソフト販売ランキング
   参照元: https://www.famitsu.com/ranking/game-sales
   ※ このファイルは GitHub Actions により毎週自動更新されます
   ============================================================ */

const weeklyRanking = {
  period:     "2026年08月10日～2026年08月16日",
  source:     "ファミ通",
  sourceUrl:  "https://www.famitsu.com/ranking/game-sales",
  updatedAt:  "2026-08-28",
  items: [
    { rank: 1,  title: "リズム天国 ミラクルスターズ", platform: "Switch", sales: 83536 },
    { rank: 2,  title: "スプラトゥーン レイダース", platform: "Switch 2", sales: 32535 },
    { rank: 3,  title: "トモダチコレクション わくわく生活", platform: "Switch", sales: 25671 },
    { rank: 4,  title: "ぽこ あ ポケモン", platform: "Switch 2", sales: 7788 },
    { rank: 5,  title: "パワフルプロ野球2026-2027", platform: "Switch", sales: 7569 },
    { rank: 6,  title: "Minecraft", platform: "Switch", sales: 7184 },
    { rank: 7,  title: "マリオカート ワールド", platform: "Switch 2", sales: 6280 },
    { rank: 8,  title: "Beast of Reincarnation（ビースト・オブ・リンカネーション）", platform: "PS5", sales: 5147 },
    { rank: 9,  title: "がんばれゴエモン大集合！", platform: "Switch", sales: 4085 },
    { rank: 10,  title: "eFootball Kick-Off！", platform: "Switch 2", sales: 4082 },
  ],
};
