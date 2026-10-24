# Tugas Praktikum Mandiri Node.js - Pemrograman Berbasis Platform

Repositori ini berisi hasil pengerjaan Tugas Praktikum Mandiri pada mata kuliah **Pemrograman Berbasis Platform - Sesi 05**. Proyek ini bertujuan untuk mempelajari dan mengimplementasikan arsitektur modular pada Node.js, yang mencakup pembuatan modul lokal (local modules), penggunaan modul bawaan (core modules), serta integrasi dengan paket pihak ketiga (third-party modules) melalui Node Package Manager (NPM).

## 👤 Identitas Mahasiswa
- **Nama:** Defa Dinah Alfarist
- **NIM:** 20250040125
- **Program Studi:** Teknik Informatika
- **Universitas:** Universitas Nusa Putra (2026)

---

## 🚀 Daftar Aktivitas Praktikum

Repositori ini mencakup tiga program utama yang dikembangkan selama praktikum:

### 1. Aktivitas 1: Eksperimen Modul Buatan Sendiri (Local Modules)
Program sederhana untuk menghitung potongan harga (diskon) menggunakan modul fungsi yang dipisahkan dari file eksekusi utamanya.
- **File:** `getDiscount.js` (Modul fungsi) & `index.js` (Pengeksekusi)

### 2. Aktivitas 2: Eksperimen Modul Inti (Core Modules)
Eksperimen menggunakan modul bawaan dari Node.js tanpa perlu instalasi NPM, yaitu modul `os` untuk mengecek detail sistem operasi, dan modul `url` untuk melakukan *parsing* parameter dari sebuah tautan (URL).
- **File:** `index2.js`

### 3. Aktivitas 4: Tantangan Kelompok - Mini App Modular
Aplikasi konversi suhu dari Celcius ke Fahrenheit yang memadukan modul perhitungan suhu buatan sendiri dengan *package* dari pihak ketiga, yaitu `chalk` (versi 4), untuk mempercantik antarmuka keluaran pada terminal dengan teks yang berwarna.
- **File:** `rumusSuhu.js` (Modul perhitungan) & `konversiSuhu.js` (File utama & implementasi UI terminal)

---

## 🛠️ Prasyarat (Prerequisites)
Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) di sistem Anda sebelum menjalankan program ini.

## 📦 Panduan Instalasi dan Penggunaan

Ikuti langkah-langkah berikut untuk mengkloning repositori dan menjalankan program secara lokal:

**1. Kloning Repositori**
Buka terminal Anda, lalu jalankan perintah berikut:
```bash
git clone [https://github.com/defadinahti25-gif/TI25G-Tugas-Pemrograman-Berbasis-Platform-Sesi-05.git](https://github.com/defadinahti25-gif/TI25G-Tugas-Pemrograman-Berbasis-Platform-Sesi-05.git)
cd TI25G-Tugas-Pemrograman-Berbasis-Platform-Sesi-05
