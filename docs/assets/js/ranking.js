/* ============================================================
   ranking.js — ファミ通 週間ゲームソフト販売ランキング
   参照元: https://www.famitsu.com/ranking/game-sales
   更新方法: 毎週ファミ通サイトを確認して手動更新してください
   ============================================================ */

const weeklyRanking = {
  period: "2026年3月23日〜3月29日",
  source: "ファミ通",
  sourceUrl: "https://www.famitsu.com/ranking/game-sales",
  updatedAt: "2026-04-05",
  items: [
    { rank: 1,  title: "ぽこ あ ポケモン",                                                       platform: "Switch 2", sales: 48772 },
    { rank: 2,  title: "流星のロックマン パーフェクトコレクション",                               platform: "Switch",   sales: 18238 },
    { rank: 3,  title: "スーパーマリオブラザーズ ワンダー Switch 2 Edition ＋ みんなでリンリンパーク", platform: "Switch 2", sales: 10158 },
    { rank: 4,  title: "マリオカート ワールド",                                                   platform: "Switch 2", sales: 7005  },
    { rank: 5,  title: "モンスターハンターストーリーズ3 ～運命の双竜～",                          platform: "Switch 2", sales: 5477  },
    { rank: 6,  title: "紅の砂漠",                                                               platform: "PS5",      sales: 5265  },
    { rank: 7,  title: "ポケットモンスター ファイアレッド・リーフグリーン（DL版）",               platform: "Switch",   sales: 5214  },
    { rank: 8,  title: "ウイニングポスト10 2026",                                                platform: "Switch",   sales: 4747  },
    { rank: 9,  title: "マリオテニス フィーバー",                                                 platform: "Switch 2", sales: 4657  },
    { rank: 10, title: "ウイニングポスト10 2026",                                                platform: "PS5",      sales: 4540  },
  ],
};
