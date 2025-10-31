// src/App.jsx
import React from 'react';

// CSS Minimalis (Inline) untuk kesederhanaan
const styles = {
  header: {
    textAlign: 'center',
    borderBottom: '2px solid #eee',
    paddingBottom: '20px',
  },
  h1: {
    margin: 0,
    color: '#333',
  },
  p: {
    fontSize: '1.2rem',
    color: '#666',
    margin: '5px 0 0 0',
  },
  section: {
    marginTop: '30px',
  },
  h2: {
    borderBottom: '1px solid #ddd',
    paddingBottom: '10px',
    color: '#444',
  },
  projectCard: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '15px',
    marginTop: '15px',
    backgroundColor: '#fafafa',
  },
};

function App() {
  return (
    <div className="container">
      {/* 1. Bagian Header / Tentang Saya */}
      <header style={styles.header}>
        <h1 style={styles.h1}>PrastianHD</h1>
        <p style={styles.p}>Mahasiswa & Web Developer</p>
      </header>

      {/* 2. Bagian Proyek */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Proyek Unggulan</h2>

        {/* Contoh Proyek 1 */}
        <div style={styles.projectCard}>
          <h3>Telegram Bot - Manajemen Tugas</h3>
          <p>
            Sebuah bot Telegram yang dibuat dengan Python untuk membantu
            mengelola dan mengingatkan tenggat waktu tugas kuliah.
          </p>
        </div>

        {/* Contoh Proyek 2 */}
        <div style={styles.projectCard}>
          <h3>Analisis Aktivitas Chat</h3>
          <p>
            Skrip Python untuk menganalisis log grup chat dan memberikan
            peringkat pengguna paling aktif.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;