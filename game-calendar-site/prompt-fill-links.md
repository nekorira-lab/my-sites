# タスク: games.js の公式サイトリンクを埋める

## 事前確認

まず `game-calendar-site/AGENTS.md` の「ステップ 4b: `link`（公式サイトURL）を設定する」セクションを読んでください。
そこに記載されたルール（メーカー別URLパターン・検索フロー・優先順位・注意事項）に従って作業してください。

---

## 作業内容

`docs/assets/js/games.js` 内で `link: null` になっている以下のタイトルに、公式サイトURLを設定してください。

### 対象タイトル一覧

| タイトル | 備考 |
|---|---|
| ファイナルファンタジー VII リバース | PC版 |
| モンスターハンターワイルズ | |
| ゼノブレイドX ディフィニティブ エディション | |
| マリオカート ワールド | |
| デス・ストランディング 2 | |
| ドンキーコング バナンザ | |
| Hollow Knight: Silksong | |
| ゴースト・オブ・ヨーテイ | |
| ポケットモンスター レジェンズ Z-A | |
| メトロイド プライム 4: Beyond | |
| スーパーマリオブラザーズ ワンダー Nintendo Switch 2 Edition + みんなでリンリンパーク | |
| MARVEL COSMIC INVASION | |
| Until Then | |
| Winning Post 10 2026 | |
| エトランジュ オーヴァーロード | |
| Curse Warrior | |
| Sweet Starlight Sisters | |
| Screamer | |
| 魔女と亡霊のヴォロンテ | |
| DIABOLIK LOVERS LUNATIC FATE GRAND EDITION | |
| ハンサムロンダリング -the mystic lover- | |
| ケムコRPGセレクション Vol.13 | |
| 文字化化 | |
| 深 四のの目 -陰陽の巫女- | |
| おかゆにゅ～～む！R | |
| 流星のロックマン パーフェクトコレクション | |
| ライフ イズ ストレンジ リユニオン | |
| SIMPLEシリーズ for Nintendo Switch 2 Vol.1 THE 麻雀 | |
| SIMPLEシリーズ for Nintendo Switch 2 Vol.2 THE ビリヤード | |
| Pokémon Champions | |
| STARFIELD | |
| ザ・ローグ：プリンス オブ ペルシャ | |
| オレオール キボウのツバサ | |
| メモリーズオフ 双想 Break out of my shell | |
| メモリーズオフ双想 DOUBLE PACK | |
| ソニックレーシング クロスワールド Nintendo Switch 2 Edition | |
| トモダチコレクション わくわく生活 | |
| カルドセプト ビギンズ | |
| グランド・セフト・オートVI | |
| ファイアーエムブレム 万紫千紅 | |
| The Duskbloods | |
| リズム天国 ミラクルスターズ | |
| Elden Ring: Tarnished Edition | |
| Intergalactic: The Heretic Prophet | |
| ポケットモンスター ウインド・ウェーブ | |

---

## 手順

1. AGENTS.md の「ステップ 4b」のメーカー別URLパターンを試す
2. パターンで404なら WebSearch で `"[タイトル名]" 公式サイト` を検索する
3. WebFetch で実際にURLが開けることを確認する
4. 確認できたら `games.js` の該当エントリの `link: null` を `link: "URL"` に更新する
5. 見つからなかった場合は `link: null` のままにして、最後に「見つからなかったタイトル」として報告する

## 注意事項

- Amazon・ファミ通・4Gamer・Wikipedia などのURLは `link` に設定しない
- 同じタイトルが複数エントリある場合（例: デラックス版と通常版）は両方に同じURLを設定する
- `games.js` 以外のファイルは編集しない

## 完了後

更新したタイトルと設定したURLの一覧を報告してください。
