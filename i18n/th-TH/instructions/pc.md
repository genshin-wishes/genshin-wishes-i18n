> 📢 หลังจากการอัปเดตเวอร์ชัน 2.3 แล้ว ลิงก์ข้อเสนอแนะจะไม่สามารถใช้ในการอัปเดตประวัติการอธิษฐานได้อีกต่อไป กรุณาใช้วิธีการตามด้านล่าง

1. เปิดเกม Genshin Impact บน PC ของคุณ
2. ไปที่หน้าประวัติการอธิษฐาน และรอจนหน้าดังกล่าวโหลดสำเร็จ
3. เปิด Start Menu ของ Windows ของคุณ แล้วค้นหา "Windows Powershell และเปิดโปรแกรมดังกล่าวขึ้นมา
4. คัดลอกและวางโค้ดต่อไปนี้ลงใน Windows Powershell
```
iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/genshin-wishes/genshin-wishes-getlink/main/global.ps1'));
```
6. เมื่อวางโค้ตเรียบร้อยแล้ว ให้กดปุ่ม ENTER ลิงก์จะถูกคัดลอกลง Clipboard ของคุณโดยอัตโนมัติ
7. วางลิงก์ดังกล่าวลงในช่องด้านล่าง