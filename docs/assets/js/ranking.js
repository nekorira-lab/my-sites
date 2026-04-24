/* ============================================================
   ranking.js — ファミ通 週間ゲームソフト販売ランキング
   参照元: https://www.famitsu.com/ranking/game-sales
   ※ このファイルは GitHub Actions により毎週自動更新されます
   ============================================================ */

const weeklyRanking = {
  period:     "2026年04月06日～2026年04月12日",
  source:     "ファミ通",
  sourceUrl:  "https://www.famitsu.com/ranking/game-sales",
  updatedAt:  "2026-04-24",
  items: [
    { rank: 1,  title: "ぽこ あ ポケモン", platform: "Switch 2", sales: 23738 },
    { rank: 2,  title: "マリオカート ワールド", platform: "Switch 2", sales: 7238 },
    { rank: 3,  title: "Starfield", platform: "PS5", sales: 5368 },
    { rank: 4,  title: "Minecraft", platform: "Switch", sales: 4094 },
    { rank: 5,  title: "あつまれ どうぶつの森", platform: "Switch", sales: 3831 },
    { rank: 6,  title: "あつまれ どうぶつの森 Nintendo Switch 2 Edition", platform: "Switch 2", sales: 3064 },
    { rank: 7,  title: "ポケットモンスター ファイアレッド・リーフグリーン（ダウンロードカード版）", platform: "Switch", sales: 2757 },
    { rank: 8,  title: "大乱闘スマッシュブラザーズ SPECIAL", platform: "Switch", sales: 2436 },
    { rank: 9,  title: "マリオテニス フィーバー", platform: "Switch 2", sales: 2429 },
    { rank: 10,  title: "紅の砂漠", platform: "PS5", sales: 2408 },
  ],
};
