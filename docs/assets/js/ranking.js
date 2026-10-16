/* ============================================================
   ranking.js — ファミ通 週間ゲームソフト販売ランキング
   参照元: https://www.famitsu.com/ranking/game-sales
   ※ このファイルは GitHub Actions により毎週自動更新されます
   ============================================================ */

const weeklyRanking = {
  period:     "2026年09月28日～2026年10月04日",
  source:     "ファミ通",
  sourceUrl:  "https://www.famitsu.com/ranking/game-sales",
  updatedAt:  "2026-10-16",
  items: [
    { rank: 1,  title: "ACE COMBAT 8： WINGS OF THEVE（エースコンバット8 ウイングス・オブ・シーヴ）", platform: "PS5", sales: 63013 },
    { rank: 2,  title: "真・三國無双2 with 猛将伝 Remastered", platform: "PS5", sales: 18724 },
    { rank: 3,  title: "リズム天国 ミラクルスターズ", platform: "Switch", sales: 15894 },
    { rank: 4,  title: "ファイアーエムブレム 万紫千紅", platform: "Switch 2", sales: 12787 },
    { rank: 5,  title: "Minecraft Dungeons II", platform: "Switch 2", sales: 12093 },
    { rank: 6,  title: "真・三國無双2 with 猛将伝 Remastered", platform: "Switch 2", sales: 11684 },
    { rank: 7,  title: "ダービースタリオン2", platform: "Switch 2", sales: 7819 },
    { rank: 8,  title: "ゼノブレイド2 Nintendo Switch 2 Edition", platform: "Switch 2", sales: 5780 },
    { rank: 9,  title: "スプラトゥーン レイダース", platform: "Switch 2", sales: 5403 },
    { rank: 10,  title: "トモダチコレクション わくわく生活", platform: "Switch", sales: 5318 },
  ],
};
