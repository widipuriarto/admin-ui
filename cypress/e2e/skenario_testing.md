# Skenario End-to-End (E2E) Testing: Dashboard Overview

**Nama Skenario:** Verifikasi Keseluruhan Elemen dan Menu Halaman Dashboard (Overview)
**Tujuan:** Memastikan pengguna yang telah login dapat mengakses halaman utama dasbor dengan benar, dan seluruh komponen antarmuka (Header, Sidebar Menu, dan Kartu Dasbor) dirender secara sempurna.

## Langkah-langkah Pengujian (Test Steps)

### 1. Prasyarat (Pre-condition)
- Pengguna membuka URL aplikasi.
- Sistem menampilkan form pada halaman Login.

### 2. Proses Autentikasi
- Pengguna mengisi input `email` dan `password` dengan kredensial yang valid.
- Pengguna menekan tombol **Login**.

### 3. Verifikasi Identitas & Header
- **Ekspektasi:** URL secara otomatis berubah menjadi halaman root (`/`).
- **Ekspektasi:** Sistem merender Header yang menampilkan tanggal hari ini.
- **Ekspektasi:** Terdapat elemen *Search Input* (pencarian) dan ikon *Notifications* (lonceng) pada Header.

### 4. Verifikasi Menu Navigasi (Sidebar)
- **Ekspektasi:** Logo "FINEbank.io" ditampilkan di kiri atas.
- **Ekspektasi:** Seluruh tautan (*link*) navigasi terlihat dan siap diklik oleh pengguna, mencakup:
  1. Overview
  2. Balances
  3. Transaction
  4. Bills
  5. Expenses
  6. Goals
  7. Settings

### 5. Verifikasi Konten Informasi Dashboard (Widget Cards)
- **Ekspektasi:** Kartu **Total Balance** berhasil dirender untuk menampilkan sisa saldo.
- **Ekspektasi:** Kartu **Goals** berhasil dirender untuk menampilkan pencapaian target.
- **Ekspektasi:** Kartu **Upcoming Bill** berhasil dirender untuk menampilkan tagihan terdekat.
- **Ekspektasi:** Kartu **Recent Transaction** muncul untuk menunjukkan riwayat transaksi.
- **Ekspektasi:** Kartu **Statistics** (Weekly Comparison) berhasil dimuat.
- **Ekspektasi:** Kartu **Expenses Breakdown** muncul di layar bagian bawah.

### 6. Verifikasi Aksi Tambahan (Interaksi)
- **Ekspektasi:** Tombol fungsi *Dark Mode / Light Mode* dapat ditemukan.
- **Ekspektasi:** Tombol **Logout** dapat ditemukan pada bagian bawah menu Sidebar.
