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
