# Cron設定メモ

## 更新スケジュール
- **実行タイミング**: 毎週土曜日 10:07
- **対象ファイル**: `assets/js/data.js`
 **更新内容**: 参照サイトから今後発売予定のゲーム情報を確認し、発売日一覧を追加・修正する。発売済みタイトルは必要に応じて整理する


## 参照サイト
- [任天堂公式](https://www.nintendo.com/jp) - Switch / Switch 2タイトル
- [PlayStation公式](https://www.playstation.com/ja-jp) - PS5 / PS4タイトル
- [Steam](https://store.steampowered.com) - PC / Steamタイトル
- [Xbox公式](https://www.xbox.com/ja-JP) - Xboxタイトル
- [ファミ通](https://www.famitsu.com) - 国内タイトル全般
- [4Gamer](https://www.4gamer.net) - PC・海外タイトル

## 判定ルール
- **機種別優先順位**
  - Switch / Switch 2: 任天堂公式 > ファミ通 > 4Gamer
  - PS5 / PS4: PlayStation公式 > ファミ通 > 4Gamer
  - Steam / PC: Steam公式 > 4Gamer > ファミ通
  - Xbox: Xbox公式 > 4Gamer > ファミ通

## 注意事項
- Cronの設定はClaude Codeのセッション内にのみ存在する（ファイルには保存されない）
- **3日で自動的に消えるため、週1回Claude Codeを開いたときに再設定が必要**
- 再設定するときは「Cronまた設定して」と伝えるだけでOK
