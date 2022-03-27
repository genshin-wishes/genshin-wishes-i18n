## Apa itu Genshin Wishes?
Genshin Wishes adalah website gratis [dengan public-code](https://github.com/genshin-wishes) yang membantu kamu menyimpan dan melihat riwayat permohonan Genshin Impact kamu di luar game. Dibuat dan dikelola oleh [Colin Auberger](https://www.linkedin.com/in/colin-auberger/) dan [Jimmy Vergerolle](https://vergerolle.fr).

- Cadangkan permohonanmu selama yang kamu inginkan
- Periksa perhitungan pity-mu di semua banner event dan banner permanen
- Lihat permohonanmu dengan mudah menggunakan filter sesuai kebutuhan
- Periksa statistik terperinci tentang permohonanmu (untuk kutu buku seperti kami yang menyukai angka dan grafik 🤓)

## Bagaimana kalian bisa mendapatkan permohonan di dalam game?
Kami hanya mengambilnya dari riwayat permohonanmu. Riwayat permohonan di Genshin Impact adalah sebuah halaman web yang ditampilkan di dalam game. Satu hal yang kami butuhkan adalah kunci sementara yang disediakan oleh game. Kunci sementara ini ada di dalam link yang kami minta dari kamu untuk mengimpor permohonanmu.

## Bagaimana cara menemukan kunci yang dibutuhkan untuk mengimpor permohonan?

> 📢 Sejak update 2.3, link masukan sudah tidak bisa digunakan lagi.

### PC
1. Buka Genshin Impact di PC-mu
2. Pergi ke riwayat permohonan dan tunggu sampai load-nya selesai
3. Kembali ke Windows
4. Di menu start, cari "Powershell" dan buka "Windows Powershell"
5. Lalu salin kode berikut dan tempel ke window Powershell
```
iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/genshin-wishes/genshin-wishes-getlink/main/global.ps1'));
```
6. Tekan ENTER dan sebuah link akan tersalin ke clipboard-mu
7. Tempel link-nya di Genshin Wishes

### Android
1) Pergi ke halaman riwayat permohonanmu
2) Matikan Wi-Fi & koneksi data
3) Tekan tombol refresh di sudut kanan atas
4) Halamannya akan ngebug, menampilkan URL-nya
5) Salin URL-nya dan tempel di Genshin Wishes

### iOS
> ✳️ Sebelum menggunakan metode ini, kamu harus membaca panduan kami tentang [cara instal dan menggunakan aplikasi Stream](https://drive.google.com/file/d/14Q_6v60qLPunrpmA9Bf1KlvsKhaRyPzz/view?usp=sharing).

1. Buka Genshin Impact dan pergi ke permohonan
2. Sementara Genshin Impact masih terbuka, buka aplikasi Stream dan tekan Sniff Now
3. Kembali ke Genshin Impact dan buka riwayat permohonanmu
4. Saat daftar permohonanmu sudah terlihat, kembali ke aplikasi Stream dan tekan Stop Sniffing
5. Lalu tekan Sniff History dan pilih item pertama di dalam daftar
6. Tekan request yang dimulai dengan 'GET https://hk4e-api-os...'
7. Tekan tab request
8. Tekan teks panjang yang dimulai dengan 'GET /event/gacha_info...'
9. Terakhir, tekan Copy Url dan tempel di Genshin Wishes

### Konsol
> ⚠️ Sejak update 2.3, link update event sudah tidak bisa digunakan lagi.

Kamu tetap bisa [menghubungkan akun PlayStation-mu dengan akun miHoYo](https://www.hoyolab.com/article/533197) lalu gunakan metode PC/mobile.

## Apakah ini aman untuk digunakan?
Iya. Sebagai pemain Genshin Impact, kami sangat memperhatikan tentang keamanan akun.
- **Kami tidak memerlukan kata sandi Genshin Impact kamu**
- Kunci sementara kamu tidak tersimpan di server kami, tetapi **di perangkatmu**
- Kunci tersebut hanya valid untuk 24 jam, setelah itu kamu harus membuat sebuah link baru untuk menjaga permohonanmu tetap sinkron
- Token ini tidak mengizinkan kami untuk autentikasi ke akunmu
- Kamu mempunyai pilihan untuk menghapus semua datamu yang kami simpan kapan pun kamu mau (termasuk permohonan)
- Kami menggunakan enkripsi SSL

## Apakah ada risiko untuk dibanned setelah menggunakan ini?
Tentu saja tidak. Kami menggunakan permintaan yang sama seperti game untuk mendapatkan permohonanmu (menggunakan API miHoYo yang terbuka untuk publik), jadi tidak ada risiko dibanned. Kami telah menggunakannya pada akun kami selama berbulan-bulan sekarang. Mihoyo membuat sebuah [pernyataan tentang alat pihak-ketiga](https://genshin.mihoyo.com/en/news/detail/5763), dan alat kami sah.

## Bahasa apa saja yang kalian dukung?
Situs ini dikelola untuk bahasa Inggris dan Prancis, bahasa lainnya dikelola oleh para [kontributor](https://github.com/genshin-wishes/genshin-wishes-i18n/blob/main/CONTRIBUTORS.md) dalam [projek ini](https://github.com/genshin-wishes/genshin-wishes-i18n).
