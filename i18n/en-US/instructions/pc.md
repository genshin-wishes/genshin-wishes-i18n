> 📢 Following the the 2.3 update the feedback link don't work anymore. Please use the method below.

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