import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Highlights from './components/Highlights';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 antialiased">
      <Hero />
      <Projects />
      <Experience />
      <Highlights />

      <footer className="border-t border-slate-800 bg-slate-950 py-10 text-slate-400">
        <div className="mx-auto max-w-7xl px-6 text-sm">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p>
              © {new Date().getFullYear()} Sanju K. Built with care — data, AI, and great UX.
            </p>
            <div className="flex items-center gap-4">
              <a href="#projects" className="hover:text-slate-200">Projects</a>
              <a href="#experience" className="hover:text-slate-200">Experience</a>
              <a href="#highlights" className="hover:text-slate-200">Highlights</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
