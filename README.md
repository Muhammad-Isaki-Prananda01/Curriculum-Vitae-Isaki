# Curriculum Vitae - Muhammad Isaki Prananda

Ini adalah proyek CV online pribadi yang dibuat menggunakan HTML, CSS, dan JavaScript. Proyek ini menampilkan desain yang bersih, modern, dan sepenuhnya responsif, lengkap dengan fitur-fitur interaktif untuk memberikan pengalaman pengguna yang menarik.

![Pratinjau CV](img/preview.jpg)
*Catatan: Anda perlu membuat screenshot proyek Anda dan menyimpannya sebagai `img/preview.png` agar gambar ini muncul.*

## Fitur Utama

- **Desain Modern & Bersih**: Layout dua kolom yang profesional dan mudah dibaca.
- **Tema Terang & Gelap**: Tombol untuk beralih antara mode terang dan gelap, dengan preferensi yang tersimpan di `localStorage`.
- **Sepenuhnya Responsif**: Tampilan dioptimalkan untuk berbagai perangkat, mulai dari desktop hingga ponsel.
- **Animasi Halus**: Animasi saat menggulir (scroll) menggunakan library AOS (Animate On Scroll) untuk pengalaman yang lebih dinamis.
- **Versi Cetak**: Gaya CSS khusus (`@media print`) untuk memastikan CV terlihat rapi dan profesional saat dicetak.
- **Interaktif**: Efek hover pada elemen-elemen yang dapat diklik untuk memberikan feedback visual.

## Teknologi yang Digunakan

- **HTML5**: Untuk struktur konten yang semantik.
- **CSS3**: Untuk styling, layout (Flexbox & Grid), dan animasi.
  - **CSS Variables**: Untuk manajemen tema yang mudah.
- **JavaScript (ES6+)**: Untuk fungsionalitas interaktif seperti tombol tema.
- **Font Awesome**: Untuk ikon-ikon yang tajam dan modern.
- **Google Fonts**: Untuk tipografi yang elegan (Poppins & Fira Code).
- **AOS (Animate On Scroll)**: Library untuk animasi saat scroll.

## Cara Menjalankan Proyek

Anda tidak memerlukan instalasi atau build tools yang rumit untuk menjalankan proyek ini. Cukup ikuti langkah-langkah berikut:

1.  **Clone repositori ini:**
    ```bash
    git clone https://github.com/isakiprananda/curriculum-vitae.git
    ```
    *(Ganti `isakiprananda/curriculum-vitae` dengan URL repositori Anda)*

2.  **Buka file `index.html`:**
    Navigasikan ke direktori proyek dan buka file `index.html` di browser favorit Anda.

## Kustomisasi

Anda dapat dengan mudah mengkustomisasi CV ini dengan informasi Anda sendiri:

1.  **Informasi Pribadi**: Ubah teks di dalam file `index.html` seperti nama, pengalaman, pendidikan, dll.
2.  **Foto Profil**: Ganti file `img/download.jpg` dengan foto Anda. Pastikan nama filenya sama atau perbarui path di `index.html`.
3.  **File CV (PDF)**: Letakkan file CV Anda dalam format PDF di dalam proyek dan perbarui tautan pada tombol "Download CV" di `index.html`.
    ```html
    <a href="path/to/your/cv.pdf" class="btn-download" download>
    ```
4.  **Skema Warna**: Ubah nilai variabel CSS di bagian `:root` dan `body.dark-mode` pada file `style.css` untuk mengubah palet warna sesuai selera Anda.

## Lisensi

Proyek ini dilisensikan di bawah MIT License. Anda bebas menggunakan, memodifikasi, dan mendistribusikan kode ini.

---

Dibuat dengan ❤️ oleh Muhammad Isaki Prananda.
