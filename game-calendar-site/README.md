# ゲーム発売カレンダー — 運用ガイド

## ファイル構成

公開ファイルは **リポジトリルートの `docs/`** に置いています。GitHub Pages はこのフォルダを配信します。

```
my-sites/                        ← リポジトリルート
├── docs/                        ← GitHub Pages の配信元（ここを編集）
│   ├── index.html               # 公開ページ（基本変更不要）
│   └── assets/
│       ├── css/style.css        # スタイル
│       └── js/
│           ├── games.js         # ★ データファイル（ここだけ編集）
│           └── main.js          # 表示ロジック（基本変更不要）
└── game-calendar-site/          ← 運用ツール・ドキュメント
    ├── README.md                # このファイル
    └── tools/
        └── compare-week.js     # 週次比較スクリプト（Node.js 必要）
```

---

## GitHub Pages の設定方法

1. GitHub でリポジトリを開く
2. **Settings** タブ → 左メニュー **Pages**
3. **Source** を以下に設定:
   - Branch: `main`
   - Folder: `/docs`
4. **Save** を押す

公開URL: `https://nekorira-lab.github.io/my-sites/`

---

## 毎週の更新フロー

```
① COMPARE_WEEK_START を翌週の月曜日に変更する
       ↓
② ファミ通発売スケジュール等で発売タイトルを確認する
       ↓
③ REFERENCE_GAMES に転記する
       ↓
④ node tools/compare-week.js を実行する
       ↓
⑤ 出力末尾の「games.js 追記用コード」を games.js に貼り付ける
       ↓
⑥ genre フィールドを埋める
       ↓
⑦ 再度 node tools/compare-week.js を実行して「抜けタイトル: 0 件」を確認
       ↓
⑧ コミット・プッシュ → GitHub Actions でバリデーション通過を確認
```

### 参照サイト（優先順）

| サイト | URL | 用途 |
|--------|-----|------|
| ファミ通 発売スケジュール | https://www.famitsu.com/schedule | 全機種の発売日一覧 |
| 任天堂公式 発売スケジュール | https://www.nintendo.com/jp/software/schedule/ | Switch / Switch 2 確認用 |
| 4Gamer 発売予定 | https://www.4gamer.net/consumer/ | PC・マルチタイトル確認用 |

---

## games.js の書き方

### フィールド一覧

| フィールド | 型 | 説明 |
|---|---|---|
| `id` | string | 一意なID（英数字・ハイフン） |
| `title` | string | タイトル名（→ title表記ルール 参照） |
| `date` | string \| null | 日本国内発売日 `"YYYY-MM-DD"` 形式、未定は `null` |
| `platforms` | string[] | `SW1` `SW2` `PS5` `PS4` `XBX` `PC` `MULTI` から選択 |
| `genre` | string | 自由テキスト（例: `"アクション"`, `"RPG"`） |
| `note` | string \| null | 補足テキスト |
| `link` | string \| null | 公式サイトまたは購入ページURL |
| `highlight` | boolean | 注目タイトルなら `true` |
| `sourceUrl` | string \| null | データ参照元URL（表示なし） |
| `sourceName` | string \| null | 参照元名称（例: `"ファミ通"`, `"任天堂公式"`） |
| `lastVerifiedAt` | string \| null | 最終確認日 `"YYYY-MM-DD"` 形式 |

### title 表記ルール

1. **日本語公式タイトルがある場合は日本語を使用**
   - NG: `"Life is Strange: Reunion"`
   - OK: `"ライフ イズ ストレンジ リユニオン"`
2. **英語のみのタイトルはそのまま英語**
   - 例: `"The Midnight Walk"`, `"MARVEL COSMIC INVASION"`
3. **数字・記号は半角**
   - NG: `"ＶＩＩ"` → OK: `"VII"`
4. **`REFERENCE_GAMES` に転記するときも同じ表記で統一**
   （英和混在は比較ミスの原因になる）

### date / note 記載ルール

- `date` = **日本国内発売日**
- 海外先行発売がある場合 → `note` に明記:
  ```
  note: "海外版: 2025-12-01 先行発売（デジタル）"
  ```
- 年のみわかる場合 → `date: null` + `note: "2026年発売予定"`

### エントリ追加の最小テンプレート

```js
{
  id:             "タイトル-スラッグ",  // 例: "mario-kart-world"
  title:          "タイトル名",
  date:           "2026-XX-XX",       // または null
  platforms:      ["SW2"],
  genre:          "アクション",
  note:           null,
  link:           null,
  highlight:      false,
  sourceUrl:      "https://www.famitsu.com/schedule",
  sourceName:     "ファミ通",
  lastVerifiedAt: "2026-XX-XX",       // 今日の日付
},
```

---

## compare-week.js の使い方

```sh
cd game-calendar-site
node tools/compare-week.js
```

### 設定箇所（ファイル上部）

```js
const COMPARE_WEEK_START = '2026-03-23'; // ← 週の月曜日に変える

const REFERENCE_SOURCE_NAME = 'ファミ通 発売スケジュール'; // 参照元名
const REFERENCE_SOURCE_URL  = 'https://www.famitsu.com/schedule';

const REFERENCE_GAMES = [
  { date: "2026-03-26", title: "タイトル名", platforms: ["SW2"] },
  // …
];
```

### 出力の見方

| 表示 | 意味 |
|------|------|
| `❌ 抜けタイトル` | 見本にあって games.js にない → 追加が必要 |
| `⚠️  余剰タイトル` | games.js にあって見本にない → 誤登録か要確認 |
| `機種別 集計` | 機種ごとの登録率 |
| `games.js 追記用コード` | そのままコピペできる JS スニペット |

### よくある誤マッチ

| 症状 | 原因 | 対処 |
|------|------|------|
| 同じゲームが「抜け」に出る | 英題と和題が混在 | REFERENCE_GAMES を games.js と同じ言語表記に統一 |
| 余剰に出る | 発売日が REFERENCE_GAMES の範囲外 | date を確認 |

---

## 公開前チェックリスト

公開・更新のたびに以下を確認してください。

### データチェック

- [ ] `node tools/compare-week.js` 実行 → 抜けタイトル **0 件**
- [ ] 今週発売タイトルの `date` が正しい（日本発売日）
- [ ] `genre` フィールドが空文字 `""` になっているエントリがない
- [ ] `highlight: true` のタイトルが意図通り設定されている

### GitHub Actions チェック

- [ ] `check-games.yml` が **緑（Pass）** になっている
- [ ] `⚠️ 推奨フィールド未設定` の警告が出ている場合 → 可能なら補完する

### ブラウザ表示チェック（ローカルで確認）

- [ ] カレンダーが今月を表示している
- [ ] 今週のタイトルがカレンダーに表示されている
- [ ] 日付クリックでリスト表示に切り替わる
- [ ] 注目タイトル（`highlight: true`）が太字 / アクセントカラーで表示されている
- [ ] `+X more` 表示がある日は、クリックで全タイトルが見える
- [ ] ティッカー（上部スクロール）が動作している
- [ ] 「次に発売」カードが直近のタイトルを表示している
- [ ] 「予約する」ボタンが正しいページにリンクしている
- [ ] スマホ幅（375px）で崩れていない

### 注意書き・免責

- [ ] フッターの「データ: ○○年○月時点」が最新月になっている
- [ ] 情報ソースが `旧data.js` のままのタイトルを一次情報で確認した（任意）

---

## よくあるトラブル

### `node tools/compare-week.js` がエラーになる

```
Error: Cannot find module '../../docs/assets/js/games.js'
```
→ `game-calendar-site` ディレクトリで実行しているか確認:
```sh
cd game-calendar-site
node tools/compare-week.js
```

### GitHub Actions が失敗する

ログの `❌ [id="xxx"] フィールド "○○" がありません` を確認して、
該当エントリに不足フィールドを追加してください。

### カレンダーにタイトルが表示されない

1. `date` フォーマットを確認（`"YYYY-MM-DD"` 形式か）
2. `platforms` が許可値（`SW1` / `SW2` / `PS5` / `PS4` / `XBX` / `PC` / `MULTI`）か確認
3. ブラウザのコンソールエラーを確認
