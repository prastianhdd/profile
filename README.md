# Portofolio Pribadi (React + Vite)

Ini adalah kode sumber untuk website portofolio pribadi saya, dibangun dari awal menggunakan React, Vite, dan di-hosting di Vercel.

**Tautan Demo Langsung:** [**https://prastianhdd.vercel.app/**](https://prastianhdd.vercel.app/)

---

### Tentang Proyek

Website ini berfungsi sebagai portofolio digital untuk memamerkan proyek-proyek, keahlian teknis, dan latar belakang saya sebagai seorang mahasiswa Ilmu Komputer. Dibuat dengan fokus pada desain yang bersih, *responsive*, dan interaktif.

---

### Fitur Utama

* **Desain Modern & Responsif:** Dapat diakses dengan baik di perangkat desktop maupun *mobile*.
* **Komponen Dinamis:** Bagian proyek di-render secara dinamis dari sebuah *array* data, membuatnya mudah untuk diperbarui.
* **Animasi Interaktif:** Efek "fade-in" saat *scroll* (menggunakan `react-intersection-observer`) dan efek *hover* yang halus pada elemen-elemen kunci.
* **Struktur Profesional:** Termasuk bagian *Hero*, *About Me* (dengan foto), *Skills* (dengan ikon), *Projects* (dengan *tag* teknologi), dan *Footer* yang profesional.
* **Tech Stack Tags:** Setiap kartu proyek menampilkan teknologi yang digunakan, memberikan konteks instan.

---

### Menjalankan Secara Lokal

Untuk menjalankan proyek ini di mesin lokal Anda:

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/prastianhdd/profile.git](https://github.com/prastianhdd/profile.git)
    ```

2.  **Masuk ke direktori proyek:**
    ```bash
    cd profile
    ```

3.  **Install semua dependensi:**
    ```bash
    npm install
    ```

4.  **Jalankan server development:**
    ```bash
    npm run dev
    ```

5.  Buka [http://localhost:5173](http://localhost:5173) 

---

### Deployment

Proyek ini di-deploy dan di-hosting menggunakan **Vercel**.

Setiap *push* ke *branch* `main` akan secara otomatis memicu *build* dan *deployment* baru (CI/CD), memastikan situs selalu *up-to-date* dengan kode terbaru.