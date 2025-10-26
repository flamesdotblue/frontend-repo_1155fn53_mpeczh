import React from 'react';
import { Github, Rocket, ShieldCheck, Activity, Layers } from 'lucide-react';

const ProjectCard = ({ title, description, tech, tags = [], link, featured = false }) => (
  <div className={`group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition ${
    featured ? 'ring-1 ring-cyan-500/30' : ''
  }`}>
    {featured && (
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
        <Rocket className="h-3.5 w-3.5" /> Featured
      </div>
    )}
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="mt-2 text-sm leading-relaxed text-slate-300">{description}</p>
    <div className="mt-3 text-xs text-slate-400">{tech}</div>
    {tags.length > 0 && (
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full border border-slate-700 bg-slate-800/60 px-2.5 py-1 text-xs text-slate-300">
            {t}
          </span>
        ))}
      </div>
    )}
    <div className="mt-5">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/40 px-3 py-2 text-xs font-medium text-slate-200 transition hover:bg-slate-900"
      >
        <Github className="h-4 w-4" /> View Repository
      </a>
    </div>
    <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition group-hover:bg-cyan-500/20" />
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-12 text-white md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Projects</h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              Selected work across full-stack fintech, applied ML, and data-driven apps.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard
            featured
            title="GlobeWallet — Multi-Currency Digital Wallet"
            description="Next-gen wallet for seamless cross-border payments and currency exchange. Real-time payments, QR/manual identifiers, dynamic fees, strong recipient verification, and detailed history."
            tech="React, TypeScript, Vite, Tailwind CSS · Convex Functions/DB/Auth · Convex Cloud"
            tags={["Full-Stack", "Fintech", "Realtime", "Auth"]}
            link="https://github.com/Sanjuu2004"
          />

          <ProjectCard
            title="AI E‑commerce Data Agent"
            description="Natural language to SQL over business data with interactive charts and secure UI. Powers fast insights via LLM-driven analytics."
            tech="Gemini Pro, Flask, SQLite · Streamlit, Plotly, Lottie · Streamlit Cloud (Ngrok)"
            tags={["LLM", "Data Viz", "NLP"]}
            link="https://github.com/Sanjuu2004"
          />

          <ProjectCard
            title="AssetTrackr"
            description="Live asset tracking dashboards with responsive analytics and auth-backed CRUD APIs."
            tech="React, TypeScript, Tailwind · Convex (CRUD, Auth)"
            tags={["Dashboard", "Auth", "CRUD"]}
            link="https://github.com/Sanjuu2004"
          />

          <ProjectCard
            title="YOLOv11 Football Player Detection/Re‑ID"
            description="Real-time detection and persistent ID tracking using a custom YOLOv11 model trained via Roboflow."
            tech="YOLOv11, Roboflow · Python"
            tags={["Computer Vision", "Realtime"]}
            link="https://github.com/Sanjuu2004"
          />

          <ProjectCard
            title="Autonomous Vehicle Deep Learning (Adverse Weather)"
            description="Hybrid CNN+LSTM with multi-sensor fusion for robust perception and weather normalization, deployed serverlessly."
            tech="TensorFlow, Scikit-learn · AWS Lambda, S3"
            tags={["DL", "Edge", "Cloud"]}
            link="https://github.com/Sanjuu2004"
          />

          <ProjectCard
            title="Other notable repos"
            description="AI Anime Avatar Generator · Car Classification for Surveillance · Netflix Data Analysis by SQL (see profile for details)."
            tech="Python, SQL, ML"
            tags={["Open Source"]}
            link="https://github.com/Sanjuu2004"
          />
        </div>

        <div className="mt-8 grid gap-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:grid-cols-3">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-1 h-5 w-5 text-emerald-400" />
            <div>
              <div className="font-medium">Strong verification</div>
              <p className="text-sm text-slate-300">Recipient verification and secure flows in GlobeWallet.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Activity className="mt-1 h-5 w-5 text-cyan-400" />
            <div>
              <div className="font-medium">Real-time architecture</div>
              <p className="text-sm text-slate-300">Live updates for payments, tracking, and analytics.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Layers className="mt-1 h-5 w-5 text-violet-400" />
            <div>
              <div className="font-medium">ML + Product</div>
              <p className="text-sm text-slate-300">Bridging research to production with practical AI.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
