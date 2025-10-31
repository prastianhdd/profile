// src/App.jsx
import React from 'react';
// 1. IMPORT HOOK 'useInView' UNTUK ANIMASI
import { useInView } from 'react-intersection-observer'; 
import './App.css'; 
import { FaGithub, FaLinkedin, FaTelegram, FaReact, FaPython, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiVite, SiVercel, SiJavascript } from "react-icons/si";


// --- DATA PROYEK (Tetap sama) ---
const projectData = [
  {
    id: 1,
    title: "Telegram Bot - Manajemen Tugas",
    description: "Sebuah bot Telegram yang dibuat dengan Python untuk membantu mengelola dan mengingatkan tenggat waktu tugas kuliah.",
    image: "/images/1.jpeg", 
    link: "https://github.com/prastianhdd/groups" 
  },
  {
    id: 2,
    title: "Analisis Aktivitas Chat",
    description: "Skrip Python untuk menganalisis log grup chat dan memberikan peringkat pengguna paling aktif.",
    image: "/images/2.jpeg", 
    link: "https://github.com/prastianhdd/groups" 
  },
  {
    id: 3,
    title: "Portofolio Website (Ini)",
    description: "Website portofolio pribadi yang dibangun dengan React, Vite, dan di-deploy di Vercel, menampilkan desain yang bersih dan responsif.",
    image: "/images/3.jpeg", 
    link: "https://github.com/prastianhdd/groups"
  }
];
// --- AKHIR DATA PROYEK ---


// 2. KOMPONEN BARU UNTUK WRAPPER ANIMASI
// Komponen ini akan mendeteksi kapan ia masuk ke layar
const AnimatedSection = ({ children, className, id }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Hanya animasikan sekali
    threshold: 0.1,    // Picu saat 10% bagian terlihat
  });

  return (
    <section 
      ref={ref} 
      id={id} 
      // Tambahkan class 'is-visible' saat 'inView' true
      className={`${className} fade-in-section ${inView ? 'is-visible' : ''}`}
    >
      {children}
    </section>
  );
};


function App() {
  return (
    <>
      {/* 1. Navbar (Tidak perlu animasi) */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#home" className="nav-logo">
            PrastianHD
          </a>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li> {/* Tambahkan link About */}
            <li><a href="#skills">Skills</a></li> {/* Tambahkan link Skills */}
            <li><a href="#projects">Projects</a></li>
            <li><a href="mailto:prastianhd@gmail.com">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* 2. Hero Section (Tidak perlu animasi) */}
      <header id="home" className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <p className="hero-intro">Hello, I'm</p>
            <h1 className="hero-name">PrastianHD</h1>
            <h2 className="hero-title">Mahasiswa & Web Developer</h2>
            <p className="hero-description">
              Saya berfokus pada pengembangan web modern, aplikasi terdesentralisasi,
              dan solusi perangkat lunak kreatif menggunakan React, Python, dan
              teknologi blockchain.
            </p>
            
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                Lihat Proyek Saya
              </a>
              <a href="mailto:prastianhdd@gmail.com" className="btn btn-secondary">
                Kontak Saya
              </a>
            </div>
            
            <div className="hero-socials">
              <a href="https://github.com/prastianhdd" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/prastianhd" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://t.me/prastianhdd" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Bagian About Me (DIBUNGKUS ANIMASI) */}
      <AnimatedSection id="about" className="about-section">
        <div className="container about-container">
          <div className="about-image">
            <img src="/phdd.png" alt="Foto PrastianHD" />
          </div>
          <div className="about-content">
            <h2>Tentang Saya</h2>
            <p>
              Saya adalah seorang mahasiswa Ilmu Komputer dengan gairah untuk memecahkan
              masalah menggunakan teknologi. Saya memiliki pengalaman dalam pengembangan
              web front-end dengan React dan back-end dengan Python.
            </p>
            <br />
            <p>
              Saya selalu antusias untuk belajar hal baru dan berkontribusi
              pada proyek-proyek yang menantang dan berdampak.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* 4. Bagian Skills (DIBUNGKUS ANIMASI) */}
      <AnimatedSection id="skills" className="skills-section">
        <div className="container">
          <h2>Teknologi yang Saya Kuasai</h2>
          <div className="skills-grid">
            {/* ... (Konten skill-card Anda) ... */}
            <div className="skill-card">
              <FaReact />
              <p>React</p>
            </div>
            <div className="skill-card">
              <SiJavascript />
              <p>JavaScript</p>
            </div>
            <div className="skill-card">
              <FaPython />
              <p>Python</p>
            </div>
            <div className="skill-card">
              <FaNodeJs />
              <p>Node.js</p>
            </div>
            <div className="skill-card">
              <SiVite />
              <p>Vite</p>
            </div>
            <div className="skill-card">
              <FaGitAlt />
              <p>Git</p>
            </div>
            <div className="skill-card">
              <FaGithub />
              <p>GitHub</p>
            </div>
            <div className="skill-card">
              <SiVercel />
              <p>Vercel</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* 5. Bagian Proyek (DIBUNGKUS ANIMASI) */}
      <AnimatedSection id="projects" className="projects-section">
        <div className="container">
          <h2>Proyek Unggulan</h2>
          
          <div className="project-grid">
            {projectData.map((project) => (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-card-link"
                key={project.id}
              >
                <div className="project-card">
                  <img 
                    src={project.image} 
                    alt={`Thumbnail ${project.title}`} 
                    className="project-image"
                  />
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default App;