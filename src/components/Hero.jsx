import React from 'react';
import { Github, Linkedin, Mail, Sparkles, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:py-20">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-xs text-slate-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
            Building intelligent products with data & AI
          </div>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Sanju K
          </h1>
          <p className="max-w-2xl text-slate-300">
            Integrated M.Tech in Computer Science (Data Science) candidate specializing in
            software engineering, applied AI, and scalable data systems. I craft reliable
            experiences across web, ML, and cloud.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.linkedin.com/in/sanju-k-b34697300"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-cyan-400"
            >
              <Linkedin className="h-4 w-4" /> Connect
            </a>
            <a
              href="https://github.com/Sanjuu2004"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="mailto:sanjuu04kgmail.com"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/40 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-900"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
          <div className="mt-3 flex items-center gap-2 text-sm text-slate-400">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            Open to Data Scientist, AI/ML Engineer, Software Engineer, and Data Analyst roles — also open to internships and new grad opportunities
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
