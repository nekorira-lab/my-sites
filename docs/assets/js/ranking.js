/* ============================================================
   ranking.js — ファミ通 週間ゲームソフト販売ランキング
   参照元: https://www.famitsu.com/ranking/game-sales
   ※ このファイルは GitHub Actions により毎週自動更新されます
   ============================================================ */

const weeklyRanking = {
  period:     "2026年06月01日～2026年06月07日",
  source:     "ファミ通",
  sourceUrl:  "https://www.famitsu.com/ranking/game-sales",
  updatedAt:  "2026-06-19",
  items: [
    { rank: 1,  title: "トモダチコレクション わくわく生活", platform: "Switch", sales: 50151 },
    { rank: 2,  title: "ファイナルファンタジーVII リバース", platform: "Switch 2", sales: 30657 },
    { rank: 3,  title: "eFootball Kick-Off！", platform: "Switch 2", sales: 20047 },
    { rank: 4,  title: "ぽこ あ ポケモン", platform: "Switch 2", sales: 10794 },
    { rank: 5,  title: "ヨッシーとフカシギの図鑑", platform: "Switch 2", sales: 8191 },
    { rank: 6,  title: "マリオカート ワールド", platform: "Switch 2", sales: 7381 },
    { rank: 7,  title: "007 ファースト・ライト", platform: "PS5", sales: 4388 },
    { rank: 8,  title: "Minecraft", platform: "Switch", sales: 4381 },
    { rank: 9,  title: "A列車で行こう9 Evolution", platform: "Switch 2", sales: 3550 },
    { rank: 10,  title: "アストロボット", platform: "PS5", sales: 3460 },
  ],
};
