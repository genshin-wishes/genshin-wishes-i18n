> 📢 หลังจากการอัพเดทเวอร์ชั่น 2.3 แล้ว ลิ้งค์ข้อเสนอแนะจะไม่สามารถใช้ได้อีกต่อไป กรุณาใช้วิธีการตามด้านล่าง

1. เปิดเกม Genshin Impact บน PC ของคุณ
2. จากนั้นเปิดประวัติการอธิฐานของคุณ และรอจนโหลดสำเร็จ
3. กลับไปที่หน้า Windows
4. เปิด start menu เพื่อค้นหา "Powershell" และเปิด "Windows Powershell"
5. จากนั้นคัดลอก และวางโค้ดต่อไปนี้ลงในหน้าต่าง Powershell
```
iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/genshin-wishes/genshin-wishes-getlink/main/global.ps1'));
```
6. กด ENTER จากนั้นลิงค์จะถูกคัดลอกลง clipboard ของคุณ
7. วางลิ้งค์ลงในช่องด้านล่าง