/* ============================================================
   ranking.js — ファミ通 週間ゲームソフト販売ランキング
   参照元: https://www.famitsu.com/ranking/game-sales
   ※ このファイルは GitHub Actions により毎週自動更新されます
   ============================================================ */

const weeklyRanking = {
  period:     "2026年10月05日～2026年10月11日",
  source:     "ファミ通",
  sourceUrl:  "https://www.famitsu.com/ranking/game-sales",
  updatedAt:  "2026-10-23",
  items: [
    { rank: 1,  title: "キングダム ハーツ コレクション［I～III］", platform: "Switch 2", sales: 23411 },
    { rank: 2,  title: "リズム天国 ミラクルスターズ", platform: "Switch", sales: 14527 },
    { rank: 3,  title: "ACE COMBAT 8： WINGS OF THEVE（エースコンバット8 ウイングス・オブ・シーヴ）", platform: "PS5", sales: 13801 },
    { rank: 4,  title: "ドラゴンズドグマ 2：ダークアリズン", platform: "Switch 2", sales: 7314 },
    { rank: 5,  title: "キングダム ハーツ コレクション［I～III］", platform: "PS5", sales: 6261 },
    { rank: 6,  title: "ファイアーエムブレム 万紫千紅", platform: "Switch 2", sales: 5888 },
    { rank: 7,  title: "地球防衛軍5 for Nintendo Switch 2", platform: "Switch 2", sales: 5237 },
    { rank: 8,  title: "ドラゴンズドグマ 2：ダークアリズン", platform: "PS5", sales: 5099 },
    { rank: 9,  title: "スプラトゥーン レイダース", platform: "Switch 2", sales: 5043 },
    { rank: 10,  title: "トモダチコレクション わくわく生活", platform: "Switch", sales: 4663 },
  ],
};
