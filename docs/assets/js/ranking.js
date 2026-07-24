/* ============================================================
   ranking.js — ファミ通 週間ゲームソフト販売ランキング
   参照元: https://www.famitsu.com/ranking/game-sales
   ※ このファイルは GitHub Actions により毎週自動更新されます
   ============================================================ */

const weeklyRanking = {
  period:     "2026年07月06日～2026年07月12日",
  source:     "ファミ通",
  sourceUrl:  "https://www.famitsu.com/ranking/game-sales",
  updatedAt:  "2026-07-24",
  items: [
    { rank: 1,  title: "リズム天国 ミラクルスターズ", platform: "Switch", sales: 126073 },
    { rank: 2,  title: "魔法少女ノ魔女裁判", platform: "Switch", sales: 21283 },
    { rank: 3,  title: "トモダチコレクション わくわく生活", platform: "Switch", sales: 20827 },
    { rank: 4,  title: "アサシン クリード ブラック フラッグ RE：シンクロ", platform: "PS5", sales: 17152 },
    { rank: 5,  title: "Echoes of Aincrad", platform: "PS5", sales: 16092 },
    { rank: 6,  title: "デジモンストーリー タイムストレンジャー", platform: "Switch 2", sales: 15644 },
    { rank: 7,  title: "グランブルーファンタジー リリンク：エンドレスラグナロク", platform: "Switch 2", sales: 12544 },
    { rank: 8,  title: "デジモンストーリー タイムストレンジャー", platform: "Switch", sales: 11251 },
    { rank: 9,  title: "CRAZY CHA！N -エルピスの鎖-", platform: "Switch", sales: 9874 },
    { rank: 10,  title: "パワフルプロ野球2026-2027", platform: "Switch", sales: 8917 },
  ],
};
