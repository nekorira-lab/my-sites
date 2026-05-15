/* ============================================================
   ranking.js — ファミ通 週間ゲームソフト販売ランキング
   参照元: https://www.famitsu.com/ranking/game-sales
   ※ このファイルは GitHub Actions により毎週自動更新されます
   ============================================================ */

const weeklyRanking = {
  period:     "2026年05月04日～2026年05月10日",
  source:     "ファミ通",
  sourceUrl:  "https://www.famitsu.com/ranking/game-sales",
  updatedAt:  "2026-05-15",
  items: [
    { rank: 1,  title: "トモダチコレクション わくわく生活", platform: "Switch", sales: 149245 },
    { rank: 2,  title: "ぽこ あ ポケモン", platform: "Switch 2", sales: 28312 },
    { rank: 3,  title: "マリオカート ワールド", platform: "Switch 2", sales: 10941 },
    { rank: 4,  title: "桃太郎電鉄2 ～あなたの町も きっとある～ 東日本編＋西日本編", platform: "Switch", sales: 6446 },
    { rank: 5,  title: "Minecraft", platform: "Switch", sales: 5516 },
    { rank: 6,  title: "スーパーマリオギャラクシー ＋ スーパーマリオギャラクシー 2", platform: "Switch", sales: 5290 },
    { rank: 7,  title: "Nintendo Switch Sports", platform: "Switch", sales: 5073 },
    { rank: 8,  title: "あつまれ どうぶつの森 Nintendo Switch 2 Edition", platform: "Switch 2", sales: 5011 },
    { rank: 9,  title: "あつまれ どうぶつの森", platform: "Switch", sales: 4015 },
    { rank: 10,  title: "大乱闘スマッシュブラザーズ SPECIAL", platform: "Switch", sales: 3825 },
  ],
};
