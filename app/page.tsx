"use client";

import React from 'react';

interface Project {
  title: string;
  desc: string;
  tags: string[];
  style: string;
  githubLink?: string;
  demoLink?: string;
}

export default function Home() {
  const projects: Project[] = [
    {
      title: "AirQuality & Smart Room Monitor",
      desc: "Sistem IoT dan Computer Vision menggunakan ESP32 & Raspberry Pi 4. Mengintegrasikan sensor MQ-138, MH-Z19C, dan DSM501A dengan algoritma YOLO & Decision Tree untuk pemantauan lingkungan.",
      tags: ["IoT", "Hardware", "Python", "Machine Learning"],
      style: "md:col-span-2",
    },
    {
      title: "MedStock-Pro",
      desc: "Sistem manajemen inventaris full-stack. Merancang arsitektur MVC (Model-View-Controller) untuk efisiensi pelacakan alur stok barang secara real-time.",
      tags: ["Laravel", "React.js", "Full-Stack"],
      style: "md:col-span-1",
    },
    {
      title: "Nocturne",
      desc: "Platform pemutar musik (Spotify-clone) dengan fungsionalitas pemutar audio interaktif.",
      tags: ["React.js", "Tailwind CSS"],
      style: "md:col-span-1",
      githubLink: "https://github.com/Agha-0708/noctune",
    },
    {
      title: "K-Tech",
      desc: "Platform solusi teknologi web modern dengan antarmuka yang responsif dan optimasi performa untuk pengalaman pengguna terbaik.",
      tags: ["Web Development", "UI/UX"],
      style: "md:col-span-2",
    },
    {
      title: "Logic Quiz App",
      desc: "Aplikasi kuis interaktif yang dirancang untuk simulasi latihan tes logika dan akademik dengan sistem evaluasi yang akurat.",
      tags: ["Web App", "Frontend"],
      style: "md:col-span-2",
      githubLink: "https://github.com/Agha-0708/Quiz-App",
    },
    {
      title: "Weather Status",
      desc: "Aplikasi pemantauan kondisi cuaca secara real-time melalui integrasi API eksternal dan penyajian data cuaca yang dinamis.",
      tags: ["API Integration", "React.js"],
      style: "md:col-span-1",
    },
  ];

  return (
    <main className="min-h-screen bg-black p-4 md:p-8 font-sans text-zinc-300 scroll-smooth selection:bg-green-500 selection:text-black">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Hero Section */}
        <header className="bg-zinc-950 rounded-3xl p-8 border border-zinc-800 relative overflow-hidden flex flex-col-reverse md:flex-row items-center justify-between gap-8 group">
          
          {/* Teks & Tombol */}
          <div className="flex-1 z-10">
            {/* Indikator Status */}
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
              </span>
              <span className="text-sm font-mono font-medium text-green-500 uppercase tracking-widest drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]">System.Status: ONLINE</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
              Hi, I'm <span className="text-green-500 drop-shadow-[0_0_12px_rgba(34,197,94,0.4)]">Leo Agha Khusayra</span>.
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-xl mb-6 leading-relaxed">
              Computer Engineering Student. Bridging the gap between <strong className="text-green-400 font-mono text-sm border-b border-green-500/50">{'<FullStack />'}</strong>, IoT, and Hardware Engineering. I build systems that connect the physical and digital worlds.
            </p>
            
            <div className="flex flex-wrap gap-4 font-mono text-sm">
              <a href="#contact" className="bg-green-500 hover:bg-green-400 text-black px-6 py-3 rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:shadow-[0_0_25px_rgba(34,197,94,0.6)]">
                {'>'} Contact_Me
              </a>
              
              <a href="/CV_Leo_Agha_Khusayra.pdf" download className="bg-transparent hover:bg-green-500/10 text-green-500 border-2 border-green-500 px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                GET /cv.pdf
              </a>
              
              <a href="https://github.com/Agha-0708" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3 rounded-xl font-bold border border-zinc-700 hover:border-green-500/50 transition-all flex items-center gap-2 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
            </div>
          </div>

          {/* Area Foto Profil dengan Green Glow */}
          <div className="relative w-40 h-40 md:w-56 md:h-56 z-10 flex-shrink-0">
            <div className="absolute inset-0 bg-green-500 rounded-3xl rotate-6 transition-transform duration-300 opacity-20 blur-xl"></div>
            <img 
              src="/portofolio.jpeg" 
              alt="Leo Agha Khusayra" 
              className="relative z-10 w-full h-full object-cover rounded-3xl border-2 border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.2)] filter grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
              onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=Leo+Agha&background=000&color=22c55e&size=256"; }} 
            />
          </div>
          
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#22c55e 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        </header>

        {/* Skills Section */}
        <section className="bg-zinc-950 rounded-3xl p-8 border border-zinc-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-6xl text-green-500">{'</>'}</div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
            <span className="text-green-500">#</span> Tech Stack & Tools
          </h2>
          <div className="flex flex-wrap gap-3 relative z-10">
            {['Laravel', 'React.js', 'Node.js', 'Tailwind CSS', 'C / C++', 'Python', 'ESP32', 'Raspberry Pi'].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-black border border-green-500/30 text-green-400 rounded-lg text-sm font-mono tracking-wide hover:bg-green-500/10 hover:border-green-500 transition-all shadow-[0_0_10px_rgba(34,197,94,0)] hover:shadow-[0_0_10px_rgba(34,197,94,0.2)] cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Bento Box Projects Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-4 px-2 flex items-center gap-2 text-white">
            <span className="text-green-500">/</span> Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`p-6 bg-zinc-950 rounded-3xl border border-zinc-800 hover:border-green-500/70 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] transition-all duration-300 flex flex-col justify-between relative group ${project.style}`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white pr-8 group-hover:text-green-400 transition-colors">{project.title}</h3>
                    
                    {/* Ikon Links GitHub & Demo */}
                    <div className="flex gap-2 absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity translate-y-1 group-hover:translate-y-0">
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-green-400 transition-colors" title="View Source Code">
                          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                      )}
                      {project.demoLink && (
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-green-400 transition-colors" title="Live Demo">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono bg-black border border-zinc-800 text-zinc-300 px-3 py-1.5 rounded-lg group-hover:border-green-500/30 group-hover:text-green-400 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="bg-zinc-950 rounded-3xl p-8 border border-zinc-800 scroll-mt-6 relative">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="max-w-2xl relative z-10">
            <h2 className="text-3xl font-bold mb-2 text-white"><span className="text-green-500">~</span> Initiate Connection</h2>
            <p className="text-zinc-400 mb-6 font-mono text-sm">Punya ide proyek, tawaran kerja, atau sekadar ingin diskusi tentang teknologi? Jangan ragu untuk mengirim pesan.</p>
            
            <form action="https://formspree.io/f/xyeggbyn" method="POST" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Nama Lengkap" 
                  required 
                  className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-white font-mono focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder:text-zinc-600"
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Alamat Email" 
                  required 
                  className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-white font-mono focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder:text-zinc-600"
                />
              </div>
              <textarea 
                name="message" 
                placeholder="echo 'Pesan kamu di sini...' > message.txt" 
                rows={5} 
                required 
                className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-white font-mono focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all resize-none placeholder:text-zinc-600"
              ></textarea>
              <button 
                type="submit" 
                className="w-full md:w-auto bg-green-500 hover:bg-green-400 text-black font-bold font-mono py-3 px-8 rounded-xl transition-all shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
              >
                EXECUTE /send_message
              </button>
            </form>
          </div>
        </section>

        {/* Simple Footer */}
        <footer className="text-center text-zinc-600 text-xs font-mono py-8 border-t border-zinc-900 mt-12">
          <p>root@agha:~# 2026 Leo Agha Khusayra. Built with Next.js & Tailwind CSS.</p>
        </footer>

      </div>
    </main>
  );
}