/* ============================================================
   ranking.js — ファミ通 週間ゲームソフト販売ランキング
   参照元: https://www.famitsu.com/ranking/game-sales
   ※ このファイルは GitHub Actions により毎週自動更新されます
   ============================================================ */

const weeklyRanking = {
  period:     "2026年10月12日～2026年10月18日",
  source:     "ファミ通",
  sourceUrl:  "https://www.famitsu.com/ranking/game-sales",
  updatedAt:  "2026-10-30",
  items: [
    { rank: 1,  title: "テイルズ オブ エターニア リマスター", platform: "Switch 2", sales: 17911 },
    { rank: 2,  title: "Castlevania： Belmont's Curse（キャッスルヴァニア ベルモンドカース） Midnight Edition", platform: "Switch", sales: 15630 },
    { rank: 3,  title: "テイルズ オブ エターニア リマスター", platform: "Switch", sales: 14003 },
    { rank: 4,  title: "リズム天国 ミラクルスターズ", platform: "Switch", sales: 13084 },
    { rank: 5,  title: "テイルズ オブ エターニア リマスター", platform: "PS5", sales: 10390 },
    { rank: 6,  title: "Castlevania： Belmont's Curse（キャッスルヴァニア ベルモンドカース） Midnight Edition", platform: "PS5", sales: 7621 },
    { rank: 7,  title: "ACE COMBAT 8： WINGS OF THEVE（エースコンバット8 ウイングス・オブ・シーヴ）", platform: "PS5", sales: 5834 },
    { rank: 8,  title: "キングダム ハーツ コレクション［I～III］", platform: "Switch 2", sales: 5404 },
    { rank: 9,  title: "ファイアーエムブレム 万紫千紅", platform: "Switch 2", sales: 5221 },
    { rank: 10,  title: "トモダチコレクション わくわく生活", platform: "Switch", sales: 5212 },
  ],
};
