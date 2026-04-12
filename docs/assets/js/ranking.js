/* ============================================================
   ranking.js — ファミ通 週間ゲームソフト販売ランキング
   参照元: https://www.famitsu.com/ranking/game-sales
   ※ このファイルは GitHub Actions により毎週自動更新されます
   ============================================================ */

const weeklyRanking = {
  period:     "2026年03月30日～2026年04月05日",
  source:     "ファミ通",
  sourceUrl:  "https://www.famitsu.com/ranking/game-sales",
  updatedAt:  "2026-04-12",
  items: [
    { rank: 1,  title: "ぽこ あ ポケモン", platform: "Switch 2", sales: 45484 },
    { rank: 2,  title: "マリオカート ワールド", platform: "Switch 2", sales: 8131 },
    { rank: 3,  title: "Minecraft", platform: "Switch", sales: 5186 },
    { rank: 4,  title: "流星のロックマン パーフェクトコレクション", platform: "Switch", sales: 4956 },
    { rank: 5,  title: "あつまれ どうぶつの森", platform: "Switch", sales: 4710 },
    { rank: 6,  title: "モンスターハンターストーリーズ3 ～運命の双竜～", platform: "Switch 2", sales: 4588 },
    { rank: 7,  title: "スーパーマリオブラザーズ ワンダー Nintendo Switch 2 Edition ＋ みんなでリンリンパーク", platform: "Switch 2", sales: 4324 },
    { rank: 8,  title: "ポケットモンスター ファイアレッド・リーフグリーン（ダウンロードカード版）", platform: "Switch", sales: 4146 },
    { rank: 9,  title: "紅の砂漠", platform: "PS5", sales: 3812 },
    { rank: 10,  title: "あつまれ どうぶつの森 Nintendo Switch 2 Edition", platform: "Switch 2", sales: 3706 },
  ],
};
