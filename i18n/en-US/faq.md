## What is Genshin Wishes?
Genshin Wishes is a free website [with public code](https://github.com/genshin-wishes) that helps you save and browse your Genshin Impact wishes outside the game. It is made and maintained by [Colin Auberger](https://www.linkedin.com/in/colin-auberger/) and [Jimmy Vergerolle](https://vergerolle.fr).

- Backup your wishes as long as you want
- Check your pity counter on all events and permanent banners
- Browse your wishes easily with some fancy filters
- Check detailed statistics about your wishes (for the nerds like us who like figures and charts 🤓)

## How do you manage to get my in-game wishes?
We simply get them from your wish history. The wish history in Genshin Impact is a webpage displayed in the game. The only thing we need is a temporary key provided by the game. This temporary key is in the link we ask from you for importing your wishes.

## How do I find the key required to import my wishes?

> 📢 Following the the 2.3 update the feedback link don't work anymore. 

### PC
1. Open Genshin Impact on your PC
2. Then go to the wish history page and wait it to load
3. Go back to Windows
4. In the start menu search for "Powershell" and open "Windows Powershell"
5. Then copy the following code and paste it in the Powershell window
```
iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/genshin-wishes/genshin-wishes-getlink/main/global.ps1'));
```
6. Hit ENTER then a link will be copied to your clipboard
7. Paste it in the box below

### Android
1) Go to your ingame wish history page
2) Disable Wi-Fi & data connection
3) Press the refresh button in the top right corner
4) The page should bug, displaying its URL
5) Copy the URL and paste it on Genshin Wishes

### iOS
> ✳️ Before using this method you need read our guide about [how to install and use Stream app](https://drive.google.com/file/d/14Q_6v60qLPunrpmA9Bf1KlvsKhaRyPzz/view?usp=sharing).

1. Open Genshin Impact and go to the Wish screen
2. While Genshin Impact is still open, go to Stream app and tap Sniff Now
3. Go back to Genshin Impact and open you wish history
4. When your wish list is loaded go back to Stream app and tap Stop sniffing
5. Then tap on Sniff History and choose the first item in the list
6. Tap the request starting by 'GET https://hk4e-api-os...'
7. Tap the request tab
8. Tap the long text staring by 'GET /event/gacha_info...'
9. Finally tap Copy Url then paste it in the box below

### Consoles
> ⚠️ Following the the 2.3 update events links don't work anymore.

You can still [link your PlayStation account with a miHoYo account](https://www.hoyolab.com/article/533197) then use the pc/mobile method.

## Is it safe to use?
Yes. As Genshin Impact players we are very concerned about account security.
- **We don't need your Genshin account password**
- Your temporary key is not stored on our servers but **on your device**
- It is valid only for 24h, after this time you will need to generate a new link to keep your wishes synced
- This token does not allow us to authenticate on your account anyway
- You have an option to delete all data we store whenever you want (including the wishes)
- We use SSL encryption

## Is there a risk of being banned for using this?
Absolutely not. We use the same requests as the game to fetch your wishes (using open to public Mihoyo API) so there is no risk of being banned. We used it on our own accounts for months now. Mihoyo has made some [statement about third party tools](https://genshin.mihoyo.com/en/news/detail/5763), and our tool is legit.

## What language do you support?
The site is maintained for English and French, other languages are maintained by [contributors](https://github.com/genshin-wishes/genshin-wishes-i18n/blob/main/CONTRIBUTORS.md) in [this project](https://github.com/genshin-wishes/genshin-wishes-i18n).