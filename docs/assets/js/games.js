/* ============================================================
   games.js — ゲームデータ（ここだけ編集してください）
   ============================================================

   【設計方針】
   このファイルがデータの唯一の管理場所です。

   【フィールド一覧】
   id            : 一意な識別子（英数字・ハイフン）
   title         : タイトル名（→ title表記ルール 参照）
   date          : "YYYY-MM-DD" 形式の日本国内発売日。未定は null
   platforms     : ["SW1","SW2","PS5","PS4","XBX","PC","MULTI"] から選択
   genre         : 自由テキスト（例: "アクション", "RPG"）
   note          : 補足テキスト。不要なら null（→ note記載ルール 参照）
   link          : 公式サイト or 購入ページのURL。なければ null
   highlight     : 注目タイトルは true、通常は false
   purchaseLinks : プラットフォームごとの購入先URL（省略 or null で非表示）
                   例: { SW1: "https://www.amazon.co.jp/dp/XXXX", PS5: "..." }
                   キーは platforms と同じ文字列。URLがない機種は省略でよい
   sourceUrl     : 発売日情報の参照元URL。表示しない。なければ null
   sourceName    : 参照元名称（例: "任天堂公式", "ファミ通"）。なければ null
   lastVerifiedAt: 最終確認日 "YYYY-MM-DD"。なければ null

   ───────────────────────────────────────────────────────────
   【title 表記ルール】
   1. 日本語公式タイトルがある場合は日本語を優先
      NG: "Life is Strange: Reunion"
      OK: "ライフ イズ ストレンジ リユニオン"
   2. 英語しかない（または公式に英語表記）タイトルはそのまま英語
      例: "The Midnight Walk", "MARVEL COSMIC INVASION"
   3. 数字・記号は半角
      NG: "ＶＩＩ", "２０２６"
      OK: "VII", "2026"
   4. compare-week.js の REFERENCE_GAMES に貼るときも
      同じ言語表記に揃えること（英題/和題を混在させない）

   ───────────────────────────────────────────────────────────
   【date / note 記載ルール】
   - date = 日本国内発売日
   - 海外先行発売がある場合: note に以下を追記する
     "海外版: YYYY-MM-DD 先行発売（デジタル）"
   - 発売日未確定のまま年だけわかる場合: date は null のままにし
     note に "20XX年発売予定" を書く
   - ハードウェア同梱 / 同時発売は note に記述する

   ───────────────────────────────────────────────────────────
   【sourceUrl / sourceName の書き方】
   - 任天堂公式: sourceName: "任天堂公式"
   - カプコン等メーカー公式: sourceName: "Capcom公式" など
   - ファミ通スケジュール: sourceName: "ファミ通"
   - 4Gamer 記事: sourceName: "4Gamer"
   - 旧data.jsから移植: sourceName: "旧data.js"（要一次情報で要確認）

   ============================================================ */

const games = [

  /* ═══════════════════════════════════════════════════════════
     2025年
  ═══════════════════════════════════════════════════════════ */

  // ── 1月 ──────────────────────────────────────────────────
  {
    id:             "ff7-rebirth-pc",
    title:          "ファイナルファンタジー VII リバース",
    date:           "2025-01-23",
    platforms:      ["PC"],
    genre:          "RPG",
    note:           "PC版",
    link:           null,
    highlight:      false,
    sourceUrl:      null,
    sourceName:     "旧data.js",
    lastVerifiedAt: null,
  },

  // ── 2月 ──────────────────────────────────────────────────
  {
    id:             "mh-wilds",
    title:          "モンスターハンターワイルズ",
    date:           "2025-02-28",
    platforms:      ["PS5", "XBX", "PC"],
    genre:          "アクション",
    note:           null,
    link:           null,
    highlight:      true,
    purchaseLinks:  {
      PS5: "https://www.amazon.co.jp/dp/B0DHCTRH16",
    },
    sourceUrl:      null,
    sourceName:     "旧data.js",
    lastVerifiedAt: null,
  },

  // ── 3月 ──────────────────────────────────────────────────
  {
    id:             "xenoblade-x-de",
    title:          "ゼノブレイドX ディフィニティブ エディション",
    date:           "2025-03-20",
    platforms:      ["SW1"],
    genre:          "RPG",
    note:           null,
    link:           null,
    highlight:      false,
    purchaseLinks:  {
      SW1: "https://www.amazon.co.jp/dp/B0DLG15Q9K",
    },
    sourceUrl:      null,
    sourceName:     "旧data.js",
    lastVerifiedAt: null,
  },

  // ── 6月 ──────────────────────────────────────────────────
  {
    id:             "sw2-hardware",
    title:          "Nintendo Switch 2 本体発売",
    date:           "2025-06-05",
    platforms:      ["SW2"],
    genre:          "ハードウェア",
    note:           null,
    link:           "https://www.nintendo.com/jp/hardware/switch2/",
    highlight:      true,
    purchaseLinks:  {
      SW2: "https://www.amazon.co.jp/dp/B0DX1BC3R8",
    },
    sourceUrl:      "https://www.nintendo.com/jp/hardware/switch2/",
    sourceName:     "任天堂公式",
    lastVerifiedAt: null,
  },
  {
    id:             "mario-kart-world",
    title:          "マリオカート ワールド",
    date:           "2025-06-05",
    platforms:      ["SW2"],
    genre:          "レース",
    note:           "Switch 2 ローンチタイトル",
    link:           null,
    highlight:      true,
    purchaseLinks:  {
      SW2: "https://www.amazon.co.jp/dp/B0F54D861F",
    },
    sourceUrl:      null,
    sourceName:     "任天堂公式",
    lastVerifiedAt: null,
  },
  {
    id:             "death-stranding-2",
    title:          "デス・ストランディング 2",
    date:           "2025-06-26",
    platforms:      ["PS5"],
    genre:          "アクション",
    note:           null,
    link:           null,
    highlight:      true,
    purchaseLinks:  {
      PS5: "https://www.amazon.co.jp/dp/B0F13HRGK2",
    },
    sourceUrl:      null,
    sourceName:     "旧data.js",
    lastVerifiedAt: null,
  },

  // ── 7月 ──────────────────────────────────────────────────
  {
    id:             "dk-bananza",
    title:          "ドンキーコング バナンザ",
    date:           "2025-07-17",
    platforms:      ["SW2"],
    genre:          "アクション",
    note:           null,
    link:           null,
    highlight:      true,
    purchaseLinks:  {
      SW2: "https://www.amazon.co.jp/dp/B0F5WYBM6L",
    },
    sourceUrl:      null,
    sourceName:     "任天堂公式",
    lastVerifiedAt: null,
  },

  // ── 9月 ──────────────────────────────────────────────────
  {
    id:             "hollow-knight-silksong",
    title:          "Hollow Knight: Silksong",
    date:           "2025-09-04",
    platforms:      ["SW1", "SW2", "PC", "XBX"],
    genre:          "アクション",
    note:           null,
    link:           null,
    highlight:      false,
    sourceUrl:      null,
    sourceName:     "旧data.js",
    lastVerifiedAt: null,
  },

  // ── 10月 ─────────────────────────────────────────────────
  {
    id:             "ghost-of-yotei",
    title:          "ゴースト・オブ・ヨーテイ",
    date:           "2025-10-02",
    platforms:      ["PS5"],
    genre:          "アクション",
    note:           null,
    link:           null,
    highlight:      true,
    purchaseLinks:  {
      PS5: "https://www.amazon.co.jp/dp/B0F6CZ4RNN",
    },
    sourceUrl:      null,
    sourceName:     "旧data.js",
    lastVerifiedAt: null,
  },
  {
    id:             "pokemon-legends-za",
    title:          "ポケットモンスター レジェンズ Z-A",
    date:           "2025-10-16",
    platforms:      ["SW1", "SW2"],
    genre:          "RPG",
    note:           null,
    link:           null,
    highlight:      true,
    purchaseLinks:  {
      SW1: "https://www.amazon.co.jp/dp/B0FGQJ45HW",
      SW2: "https://www.amazon.co.jp/dp/B0FGP83W6B",
    },
    sourceUrl:      null,
    sourceName:     "旧data.js",
    lastVerifiedAt: null,
  },

  // ── 12月 ─────────────────────────────────────────────────
  {
    id:             "metroid-prime-4",
    title:          "メトロイド プライム 4: Beyond",
    date:           "2025-12-04",
    platforms:      ["SW1", "SW2"],
    genre:          "シューター",
    note:           "Switch / Switch 2 両対応",
    link:           null,
    highlight:      true,
    purchaseLinks:  {
      SW1: "https://www.amazon.co.jp/dp/B0FR8PKCVZ",
      SW2: "https://www.amazon.co.jp/dp/B0FR8C5B76",
    },
    sourceUrl:      null,
    sourceName:     "任天堂公式",
    lastVerifiedAt: null,
  },

  /* ═══════════════════════════════════════════════════════════
     2026年
  ═══════════════════════════════════════════════════════════ */

  // ── 3月 ──────────────────────────────────────────────────
  {
    id:             "mario-wonder-ring-ring-park",
    title:          "スーパーマリオブラザーズ ワンダー Nintendo Switch 2 Edition + みんなでリンリンパーク",
    date:           "2026-03-26",
    platforms:      ["SW2"],
    genre:          "アクション",
    note:           null,
    link:           null,
    highlight:      true,
    purchaseLinks:  {
      SW2: "https://www.amazon.co.jp/dp/B0GJB559FL",
    },
    sourceUrl:      null,
    sourceName:     "任天堂公式",
    lastVerifiedAt: null,
  },
  {
    id:             "marvel-cosmic-invasion",
    title:          "MARVEL COSMIC INVASION",
    date:           "2026-03-26",
    platforms:      ["SW2", "SW1", "PS5"],
    genre:          "ベルトスクロールアクション",
    note:           "スパイダーマン・ウルヴァリンら15人が登場。海外版: 2025-12-01 先行発売（デジタル）",
    link:           "https://www.marvel.com/games/marvel-cosmic-invasion",
    highlight:      true,
    purchaseLinks:  {
      SW2: "https://www.amazon.co.jp/dp/B0G7XZWRTM",
      SW1: "https://www.amazon.co.jp/dp/B0G7YXSRNC",
    },
    sourceUrl:      "https://www.marvel.com/games/marvel-cosmic-invasion",
    sourceName:     "Marvel公式",
    lastVerifiedAt: "2026-03-25",
  },
  {
    id:             "the-midnight-walk",
    title:          "The Midnight Walk",
    date:           "2026-03-26",
    platforms:      ["SW2"],
    genre:          "アドベンチャー",
    note:           "クレイ造形を3Dスキャンした独自ビジュアル。Switch 2版",
    link:           "https://themidnightwalk.net/",
    highlight:      true,
    sourceUrl:      "https://themidnightwalk.net/",
    sourceName:     "MoonHood公式",
    lastVerifiedAt: "2026-03-25",
  },
  {
    id:             "until-then",
    title:          "Until Then",
    date:           "2026-03-26",
    platforms:      ["SW1", "PS5"],
    genre:          "ビジュアルノベル",
    note:           "フィリピンを舞台にしたピクセルアート。Steam版は好評",
    link:           null,
    highlight:      false,
    sourceUrl:      "https://www.famitsu.com/schedule",
    sourceName:     "ファミ通",
    lastVerifiedAt: "2026-03-25",
  },
  {
    id:             "winning-post-10-2026",
    title:          "Winning Post 10 2026",
    date:           "2026-03-26",
    platforms:      ["PS5", "PS4", "SW2", "SW1", "PC"],
    genre:          "競馬シミュレーション",
    note:           null,
    link:           null,
    highlight:      false,
    purchaseLinks:  {
      PS5: "https://www.amazon.co.jp/dp/B0G37JG68G",
      SW2: "https://www.amazon.co.jp/dp/B0G37L2P8M",
      SW1: "https://www.amazon.co.jp/dp/B0G37D2BDV",
    },
    sourceUrl:      "https://www.famitsu.com/schedule",
    sourceName:     "ファミ通",
    lastVerifiedAt: "2026-03-25",
  },
  {
    id:             "etrange-overlord",
    title:          "エトランジュ オーヴァーロード",
    date:           "2026-03-26",
    platforms:      ["SW1", "PS5", "PS4"],
    genre:          "RPG",
    note:           null,
    link:           null,
    highlight:      false,
    purchaseLinks:  {
      SW1: "https://www.amazon.co.jp/dp/B0FRFFMSMS",
    },
    sourceUrl:      "https://www.famitsu.com/schedule",
    sourceName:     "ファミ通",
    lastVerifiedAt: "2026-03-25",
  },
  {
    id:             "curse-warrior",
    title:          "Curse Warrior",
    date:           "2026-03-26",
    platforms:      ["SW1", "PS5", "PS4"],
    genre:          "アクション",
    note:           null,
    link:           null,
    highlight:      false,
    purchaseLinks:  {
      SW1: "https://www.amazon.co.jp/dp/B0G5YXQPXR",
      PS5: "https://www.amazon.co.jp/dp/B0G5Z355NQ",
    },
    sourceUrl:      "https://www.famitsu.com/schedule",
    sourceName:     "ファミ通",
    lastVerifiedAt: "2026-03-25",
  },
  {
    id:             "sweet-starlight-sisters",
    title:          "Sweet Starlight Sisters",
    date:           "2026-03-26",
    platforms:      ["SW1", "PC"],
    genre:          "アドベンチャー",
    note:           null,
    link:           null,
    highlight:      false,
    purchaseLinks:  {
      SW1: "https://www.amazon.co.jp/dp/B0G48Y4NT8",
    },
    sourceUrl:      "https://www.famitsu.com/schedule",
    sourceName:     "ファミ通",
    lastVerifiedAt: "2026-03-25",
  },
  {
    id:             "screamer-2026",
    title:          "Screamer",
    date:           "2026-03-26",
    platforms:      ["XBX", "PC"],
    genre:          "レース",
    note:           null,
    link:           null,
    highlight:      false,
    sourceUrl:      "https://www.famitsu.com/schedule",
    sourceName:     "ファミ通",
    lastVerifiedAt: "2026-03-25",
  },
  {
    id:             "majo-borei-volonte",
    title:          "魔女と亡霊のヴォロンテ",
    date:           "2026-03-26",
    platforms:      ["SW1"],
    genre:          "アドベンチャー",
    note:           null,
    link:           null,
    highlight:      false,
    purchaseLinks:  {
      SW1: "https://www.amazon.co.jp/dp/B0G7YLJGLQ",
    },
    sourceUrl:      "https://www.famitsu.com/schedule",
    sourceName:     "ファミ通",
    lastVerifiedAt: "2026-03-25",
  },
  {
    id:             "diabolik-lovers-grand-edition",
    title:          "DIABOLIK LOVERS LUNATIC FATE GRAND EDITION",
    date:           "2026-03-26",
    platforms:      ["SW1"],
    genre:          "乙女ゲーム",
    note:           null,
    link:           null,
    highlight:      false,
    purchaseLinks:  {
      SW1: "https://www.amazon.co.jp/dp/B0G31TJX2L",
    },
    sourceUrl:      "https://www.famitsu.com/schedule",
    sourceName:     "ファミ通",
    lastVerifiedAt: "2026-03-25",
  },
  {
    id:             "handsome-laundering",
    title:          "ハンサムロンダリング -the mystic lover-",
    date:           "2026-03-26",
    platforms:      ["SW1"],
    genre:          "乙女ゲーム",
    note:           null,
    link:           null,
    highlight:      false,
    purchaseLinks:  {
      SW1: "https://www.amazon.co.jp/dp/B0FWJMBQRP",
    },
    sourceUrl:      "https://www.famitsu.com/schedule",
    sourceName:     "ファミ通",
    lastVerifiedAt: "2026-03-25",
  },
  {
    id:             "kemco-rpg-vol13",
    title:          "ケムコRPGセレクション Vol.13",
    date:           "2026-03-26",
    platforms:      ["SW1"],
    genre:          "RPG",
    note:           null,
    link:           null,
    highlight:      false,
    purchaseLinks:  {
      SW1: "https://www.amazon.co.jp/dp/B0DSZ3PW9B",
    },
    sourceUrl:      "https://www.famitsu.com/schedule",
    sourceName:     "ファミ通",
    lastVerifiedAt: "2026-03-25",
  },
  {
    id:             "mojibake",
    title:          "文字化化",
    date:           "2026-03-26",
    platforms:      ["SW1"],
    genre:          "パズル",
    note:           null,
    link:           null,
    highlight:      false,
    purchaseLinks:  {
      SW1: "https://www.amazon.co.jp/dp/B0G5Z65GGB",
    },
    sourceUrl:      "https://www.famitsu.com/schedule",
    sourceName:     "ファミ通",
    lastVerifiedAt: "2026-03-25",
  },
  {
    id:             "shinome-yin-yang",
    title:          "深 四のの目 -陰陽の巫女-",
    date:           "2026-03-26",
    platforms:      ["SW1", "PC"],
    genre:          "ホラーアドベンチャー",
    note:           null,
    link:           null,
    highlight:      false,
    sourceUrl:      "https://www.famitsu.com/schedule",
    sourceName:     "ファミ通",
    lastVerifiedAt: "2026-03-25",
  },
  {
    id:             "okayu-nyu-mu-r",
    title:          "おかゆにゅ～～む！R",
    date:           "2026-03-26",
    platforms:      ["SW1"],
    genre:          "シミュレーション",
    note:           null,
    link:           null,
    highlight:      false,
    purchaseLinks:  {
      SW1: "https://www.amazon.co.jp/dp/B0F59T7PTB",
    },
    sourceUrl:      "https://www.famitsu.com/schedule",
    sourceName:     "ファミ通",
    lastVerifiedAt: "2026-03-25",
  },
  {
    id:             "rockman-starforce-collection",
    title:          "流星のロックマン パーフェクトコレクション",
    date:           "2026-03-27",
    platforms:      ["SW1", "PS5", "PS4", "XBX", "PC"],
    genre:          "アクションRPG",
    note:           "シリーズ7作品収録。ランクマッチなどオンライン機能新搭載",
    link:           "https://www.capcom-games.com/megaman/starforce/ja-jp/",
    highlight:      true,
    purchaseLinks:  {
      SW1: "https://www.amazon.co.jp/dp/B0G8HXTJ95",
      PS5: "https://www.amazon.co.jp/dp/B0G8FN3MFD",
      PS4: "https://www.amazon.co.jp/dp/B0G8F4CRFW",
    },
    sourceUrl:      "https://www.capcom-games.com/megaman/starforce/ja-jp/",
    sourceName:     "Capcom公式",
    lastVerifiedAt: "2026-03-25",
  },
  {
    id:             "life-is-strange-reunion",
    title:          "ライフ イズ ストレンジ リユニオン",
    date:           "2026-03-27",
    platforms:      ["PS5", "XBX", "PC"],
    genre:          "アドベンチャー",
    note:           "マックスとクロエのサーガ最終章",
    link:           "https://www.jp.square-enix.com/lis/lisru/",
    highlight:      true,
    purchaseLinks:  {
      PS5: "https://www.amazon.co.jp/dp/B0GHNQGHPB",
    },
    sourceUrl:      "https://www.jp.square-enix.com/lis/lisru/",
    sourceName:     "Square Enix公式",
    lastVerifiedAt: "2026-03-25",
  },

  // ── 4月 ──────────────────────────────────────────────────
  {
    id:             "simple-switch2-mahjong",
    title:          "SIMPLEシリーズ for Nintendo Switch 2 Vol.1 THE 麻雀",
    date:           "2026-04-02",
    platforms:      ["SW2"],
    genre:          "テーブル",
    note:           null,
    link:           null,
    highlight:      false,
    sourceUrl:      "https://www.famitsu.com/schedule",
    sourceName:     "ファミ通",
    lastVerifiedAt: "2026-04-04",
  },
  {
    id:             "simple-switch2-billiards",
    title:          "SIMPLEシリーズ for Nintendo Switch 2 Vol.2 THE ビリヤード",
    date:           "2026-04-02",
    platforms:      ["SW2"],
    genre:          "テーブル",
    note:           null,
    link:           null,
    highlight:      false,
    sourceUrl:      "https://www.famitsu.com/schedule",
    sourceName:     "ファミ通",
    lastVerifiedAt: "2026-04-04",
  },
  {
    id:             "pokemon-champions",
    title:          "Pokémon Champions",
    date:           "2026-04-08",
    platforms:      ["SW1"],
    genre:          "対戦",
    note:           "ダウンロード専売",
    link:           null,
    highlight:      true,
    sourceUrl:      "https://www.famitsu.com/schedule",
    sourceName:     "ファミ通",
    lastVerifiedAt: "2026-04-04",
  },
  {
    id:             "starfield-ps5",
    title:          "STARFIELD",
    date:           "2026-04-08",
    platforms:      ["PS5"],
    genre:          "RPG",
    note:           "PS5版 / ダウンロード専売",
    link:           null,
    highlight:      true,
    sourceUrl:      "https://www.famitsu.com/schedule",
    sourceName:     "ファミ通",
    lastVerifiedAt: "2026-04-04",
  },
  {
    id:             "rogue-prince-of-persia",
    title:          "ザ・ローグ：プリンス オブ ペルシャ",
    date:           "2026-04-09",
    platforms:      ["SW2", "SW1", "PS5"],
    genre:          "アクション",
    note:           null,
    link:           null,
    highlight:      false,
    sourceUrl:      "https://www.famitsu.com/schedule",
    sourceName:     "ファミ通",
    lastVerifiedAt: "2026-04-04",
  },
  {
    id:             "aureole-wings-of-hope",
    title:          "オレオール キボウのツバサ",
    date:           "2026-04-09",
    platforms:      ["PS5", "PS4", "SW1"],
    genre:          "アクション",
    note:           null,
    link:           null,
    highlight:      false,
    sourceUrl:      "https://www.famitsu.com/schedule",
    sourceName:     "ファミ通",
    lastVerifiedAt: "2026-04-04",
  },
  {
    id:             "memories-off-break-out-of-my-shell",
    title:          "メモリーズオフ 双想 Break out of my shell",
    date:           "2026-04-09",
    platforms:      ["SW1", "PS5", "PS4", "PC"],
    genre:          "アドベンチャー",
    note:           null,
    link:           null,
    highlight:      false,
    sourceUrl:      "https://www.famitsu.com/schedule",
    sourceName:     "ファミ通",
    lastVerifiedAt: "2026-04-04",
  },
  {
    id:             "memories-off-double-pack",
    title:          "メモリーズオフ双想 DOUBLE PACK",
    date:           "2026-04-09",
    platforms:      ["SW1"],
    genre:          "アドベンチャー",
    note:           null,
    link:           null,
    highlight:      false,
    sourceUrl:      "https://www.famitsu.com/schedule",
    sourceName:     "ファミ通",
    lastVerifiedAt: "2026-04-04",
  },
  {
    id:             "sonic-racing-crossworlds-sw2",
    title:          "ソニックレーシング クロスワールド Nintendo Switch 2 Edition",
    date:           "2026-04-10",
    platforms:      ["SW2"],
    genre:          "レース",
    note:           null,
    link:           null,
    highlight:      true,
    sourceUrl:      "https://www.famitsu.com/schedule",
    sourceName:     "ファミ通",
    lastVerifiedAt: "2026-04-04",
  },
  {
    id:             "tomodachi-collection",
    title:          "トモダチコレクション わくわく生活",
    date:           "2026-04-16",
    platforms:      ["SW1"],
    genre:          "シミュレーション",
    note:           null,
    link:           null,
    highlight:      true,
    purchaseLinks:  {
      SW1: "https://www.amazon.co.jp/dp/B0GKMJSYB1",
    },
    sourceUrl:      null,
    sourceName:     "任天堂公式",
    lastVerifiedAt: null,
  },
  {
    id:             "pragmata-sw2",
    title:          "プラグマタ",
    date:           "2026-04-24",
    platforms:      ["SW2"],
    genre:          "SFアクションアドベンチャー",
    note:           "Switch 2版",
    link:           null,
    highlight:      true,
    purchaseLinks:  {
      SW2: "https://www.amazon.co.jp/dp/B0G6KVPG3F",
    },
    sourceUrl:      null,
    sourceName:     "Capcom公式",
    lastVerifiedAt: null,
  },

  // ── 5月 ──────────────────────────────────────────────────
  {
    id:             "indiana-jones-sw2",
    title:          "インディ・ジョーンズ/大いなる円環",
    date:           "2026-05-12",
    platforms:      ["SW2"],
    genre:          "アクションアドベンチャー",
    note:           "Switch 2版",
    link:           null,
    highlight:      false,
    sourceUrl:      null,
    sourceName:     "旧data.js",
    lastVerifiedAt: null,
  },
  {
    id:             "yoshi-fukashigi",
    title:          "ヨッシーとフカシギの図鑑",
    date:           "2026-05-21",
    platforms:      ["SW2"],
    genre:          "アクション",
    note:           null,
    link:           null,
    highlight:      true,
    purchaseLinks:  {
      SW2: "https://www.amazon.co.jp/dp/B0GS4X1WP7",
    },
    sourceUrl:      null,
    sourceName:     "任天堂公式",
    lastVerifiedAt: null,
  },

  // ── 7月 ──────────────────────────────────────────────────
  {
    id:             "culdcept-begins",
    title:          "カルドセプト ビギンズ",
    date:           "2026-07-16",
    platforms:      ["SW1", "SW2"],
    genre:          "ボードゲーム",
    note:           null,
    link:           null,
    highlight:      false,
    purchaseLinks:  {
      SW1: "https://www.amazon.co.jp/dp/B0GLX5MTN9",
      SW2: "https://www.amazon.co.jp/dp/B0GLX5X41H",
    },
    sourceUrl:      null,
    sourceName:     null,
    lastVerifiedAt: null,
  },

  // ── 11月 ─────────────────────────────────────────────────
  {
    id:             "gta6",
    title:          "グランド・セフト・オートVI",
    date:           "2026-11-19",
    platforms:      ["PS5", "XBX"],
    genre:          "オープンワールド",
    note:           null,
    link:           null,
    highlight:      true,
    sourceUrl:      null,
    sourceName:     "旧data.js",
    lastVerifiedAt: null,
  },

  /* ═══════════════════════════════════════════════════════════
     日程未定
  ═══════════════════════════════════════════════════════════ */

  {
    id:             "fe-fortunes-weave",
    title:          "ファイアーエムブレム 万紫千紅",
    date:           null,
    platforms:      ["SW2"],
    genre:          "ストラテジー",
    note:           "2026年発売予定",
    link:           null,
    highlight:      true,
    sourceUrl:      null,
    sourceName:     "任天堂公式",
    lastVerifiedAt: null,
  },
  {
    id:             "the-duskbloods",
    title:          "The Duskbloods",
    date:           null,
    platforms:      ["SW2"],
    genre:          "アクション",
    note:           "最大8人のPvPvEマルチプレイアクション / 2026年発売予定",
    link:           null,
    highlight:      true,
    sourceUrl:      null,
    sourceName:     "任天堂公式",
    lastVerifiedAt: null,
  },
  {
    id:             "rhythm-heaven-stars",
    title:          "リズム天国 ミラクルスターズ",
    date:           null,
    platforms:      ["SW1"],
    genre:          "リズム",
    note:           "2026年発売予定",
    link:           null,
    highlight:      false,
    sourceUrl:      null,
    sourceName:     "任天堂公式",
    lastVerifiedAt: null,
  },
  {
    id:             "elden-ring-sw2",
    title:          "Elden Ring: Tarnished Edition",
    date:           null,
    platforms:      ["SW2"],
    genre:          "アクションRPG",
    note:           "DLC「SHADOW OF THE ERDTREE」同梱 / 2026年発売予定",
    link:           null,
    highlight:      false,
    sourceUrl:      null,
    sourceName:     "旧data.js",
    lastVerifiedAt: null,
  },
  {
    id:             "intergalactic",
    title:          "Intergalactic: The Heretic Prophet",
    date:           null,
    platforms:      ["PS5"],
    genre:          "アクション",
    note:           null,
    link:           null,
    highlight:      false,
    sourceUrl:      null,
    sourceName:     "旧data.js",
    lastVerifiedAt: null,
  },
  {
    id:             "pokemon-wind-wave",
    title:          "ポケットモンスター ウインド・ウェーブ",
    date:           null,
    platforms:      ["SW2"],
    genre:          "RPG",
    note:           "2027年発売予定",
    link:           null,
    highlight:      true,
    sourceUrl:      null,
    sourceName:     "旧data.js",
    lastVerifiedAt: null,
  },

];
