## Genshin Wishesとは?
Genshin Wishesは[オープンソース](https://github.com/genshin-wishes)の祈願履歴ビューワーです。[Colin Auberger](https://www.linkedin.com/in/colin-auberger/)と[Jimmy Vergerolle](https://vergerolle.fr)等有志によりメンテナンスされています。

できること:
- 祈願履歴のバックアップ
- 通常・イベント祈願別の天井カウンタ
- 祈願履歴の絞り込み検索
- 詳細な統計データの表示

## 祈願データはどうやって取得しているの?

> 📢 バージョン2.3以降報告ページのURLは使用できません。
### PC
1. 原神を起動します
2. 祈願履歴ページを開き、ロードされるのを待ちます
3. Windowsに戻ります
4. スタートメニューから、「Powershell」と検索し、「Windows PowerShell」を起動します
5. 以下のコードをコピーし、PowerShellに貼り付けます
```
iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/genshin-wishes/genshin-wishes-getlink/main/global.ps1'));
```
6. エンターキーを押すとURLがクリップボードにコピーされます
7. Genshin Wishesに貼り付けます

### Android

1. ゲーム内で祈願履歴を開きます
2. Wi-Fiおよびデータ通信を切断します
3. 左上の再読み込みボダンをタッチします
4. ページにバグが発生し、URLを表示します
5. 表示されたページのURLをコピーし、Genshin Wishesに貼り付けます

### iOS
> ✳️ 以下の方法を試す前に、 [how to install and use Stream app(英語)](https://drive.google.com/file/d/14Q_6v60qLPunrpmA9Bf1KlvsKhaRyPzz/view?usp=sharing)をお読みください。

1. 原神を起動し、祈願画面へ移動します
2. 原神を起動したままStreamアプリへ移動し、「Sniff Now」をタップします
3. 原神へ戻り、祈願履歴を開きます
4. 祈願リストがロードされたらStreamアプリに戻り、「Stop sniffing」をタップします
5. 「Sniff History」をタップしてリストの一番上を選択します
6. 「GET https://hk4e-api-os...」から始まるリクエストをタップします
7. 「Request」タブをタップします
8. 「GET /event/gacha_info...」から始まる長いテキストをタップします
9. 「Copy Url」をタップし、Genshin Wishesに貼り付けます

### PS4/PS5
> ⚠️ バージョン2.3以降イベント告知URLは使用できません。

[PSNアカウントとHoYoverse通行証の連携](https://genshin.hoyoverse.com/ja/news/detail/14022)を行い、PCやスマートフォンでの方法をお試しください。

## セキュリティ的に安全?
もちろん、安全です。原神プレイヤーとして、アカウントセキュリティには非常に注意を払っています。
- コンピューターやスマートフォンなどの**パスワードは一切要求しません**。
- **原神アカウントのパスワードも一切要求しません**。
- 取得する一時キーはサーバーではなく**端末のみ**に保存されます。
- 一時キーの保存期限は24時間だけで、期限が切れた後は同期のため新しいリンクを利用する必要があります。
- この一時キーはアカウント認証をGenshin Wishesに許可するものではありません。
- 祈願データを含め、いつでも全データの削除が可能です。
- SSL通信を行っていますので、安全にサイトの利用ができます。

## Genshin Wishesの使用によるアカウントBANの心配は?
絶対にありません。 ゲーム内で閲覧できる履歴と同様の方法でデータの読み込みを行っており(Mihoyo APIにより公開されています)、BANの危険性はありません。また、開発者もGenshin Wishesを使用していますが、これまでにBANされたことはありません。miHoYoは[サードパーティ製ツールの使用について](https://genshin.mihoyo.com/en/news/detail/5763)のページを公開しており、Genshin Wishesはここで示された指標に従っています。

## 何言語に対応?
このサイトは英語・フランス語でメンテナンスされており、他の言語については[このプロジェクト](https://github.com/genshin-wishes/genshin-wishes-i18n)の[コントリビューター](https://github.com/genshin-wishes/genshin-wishes-i18n/blob/main/CONTRIBUTORS.md)によって翻訳されています。