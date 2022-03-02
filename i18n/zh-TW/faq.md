## Genshin Wishes 是什麼？
Genshin Wishes 是一個[開源的](https://github.com/genshin-wishes)免費網站，讓您在遊戲外儲存並檢視《原神》的祈願紀錄。本網站由 [Colin Auberger](https://www.linkedin.com/in/colin-auberger/) 和 [Jimmy Vergerolle](https://vergerolle.fr) 進行開發與維護。

- 永久保存祈願紀錄
- 查看所有活動祈願和常駐祈願的保底中獎次數
- 篩選並檢視祈願紀錄
- 查看詳細的祈願統計資料

## 如何獲取我的所有祈願資料？
我們只是讀取您的祈願歷史紀錄。原神的祈願歷史紀錄是在遊戲內開啟一個網頁，您也可以自行在瀏覽器中開啟並檢視頁面。  
我們需要的是遊戲提供的暫時性金鑰，此金鑰包含在我們要求您提供的網址內。

## 如何尋找並匯入包含金鑰的網址
> 📢 從2.3版本開始，原有的意見回饋連結已無法使用，請使用以下步驟：
### PC版

1) 開啟原神
2) 進入祈願歷史紀錄頁面
3) 在搜尋欄中搜尋 'Powershell' 並開啟 'Windows Powershell'
4) 請複製以下文字並貼上 Powershell
```
iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/genshin-wishes/genshin-wishes-getlink/main/global.ps1'));
```
5) 按下 ENTER 後連結會自動複製
6) 回到 Genshin Wishes 網頁貼上

### Android
1) 進入遊戲中的「歷史紀錄」頁面
2) 關閉 Wi-Fi 或網路連線
3) 點擊螢幕右上角的重新整理按鈕
4) 該頁面會出現錯誤，並且顯示頁面網址
5) 複製網址並在 Genshin Wishes 中貼上

### iOS
✳️ 在使用此方法前，請先下載Stream App 並參閱我們的 [使用說明](https://drive.google.com/file/d/14Q_6v60qLPunrpmA9Bf1KlvsKhaRyPzz/view)
1) 打開原神並前往祈願頁面
2) 在原神開啟的狀態下，前往 Stream App 並點擊「抓包」
3) 回到原神並開啟歷史紀錄
4) 祈願歷史紀錄完成讀取後，請回到 Stream 並點擊「停止抓包」
5) 點擊抓包歷史並選擇清單中的第一個項目
6) 選擇以 'GET https: //hk4e-api-os...' 開頭的資料並進入「請求」頁面
7) 點擊 'GET /event/gacha_info...' 開頭的文字後複製，進入 Genshin Wishes 網頁貼上

### 家用主機
> ⚠️ 從2.3版本開始，原有的方法已無法使用。

您依然可以參考本[連結](https://www.hoyolab.com/article/533197)將PSN帳號連結至電腦/手機板


## 這個網站安全嗎？
是的。同樣身為《原神》的玩家，我們非常重視帳號的安全性。
- **我們不會要求您安裝任何程式** 在您的電腦或行動裝置上
- **我們不會要求您提供《原神》的帳號密碼**
- 臨時金鑰僅**儲存在您的裝置上**，而不是儲存在我們的伺服器中
- 此金鑰的有效期限僅有 24 小時，過期之後，您將需要生成一個新的金鑰來同步您的祈願紀錄
- 我們**無法透過**此金鑰登錄您的帳號
- 您隨時可以刪除我們儲存的所有資料（包括所有祈願紀錄）
- 我們使用 SSL 加密連線資料

## 使用這個網站會導致我的《原神》帳號被停用嗎？
絕對不會。我們使用與遊戲相同的請求（米哈遊的公開 API）來取得您的祈願紀錄，因此帳號沒有被鎖的風險。我們已經使用自己的帳號好幾個月了。  
並且，根據米哈遊發布的[《關於第三方應用程式的文章》](https://genshin.mihoyo.com/fr/news/detail/5767)，本網站符合米哈遊的規定。

## 這個網站支援什麼語言？
本網站以英語和法語來維護，其他語言由[此專案](https://github.com/genshin-wishes/genshin-wishes-i18n)的[貢獻者](https://github.com/genshin-wishes/genshin-wishes-i18n/blob/main/CONTRIBUTORS.md)維護。
