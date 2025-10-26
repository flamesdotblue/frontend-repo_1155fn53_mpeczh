import React from 'react';
import { GraduationCap, Award, Code2, Linkedin, Github, Mail } from 'lucide-react';

const SkillGroup = ({ title, items }) => (
  <div>
    <div className="text-sm font-medium text-slate-300">{title}</div>
    <div className="mt-2 flex flex-wrap gap-2">
      {items.map((it) => (
        <span key={it} className="rounded-full border border-slate-700 bg-slate-800/60 px-2.5 py-1 text-xs text-slate-200">
          {it}
        </span>
      ))}
    </div>
  </div>
);

const Highlights = () => {
  return (
    <section id="highlights" className="w-full bg-slate-950 py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Education */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="mb-4 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-cyan-400" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div>
              <div className="font-medium">Vellore Institute of Technology (2021–2026)</div>
              <div className="text-sm text-slate-300">Integrated M.Tech in Computer Science with Data Science · CGPA: 8.03</div>
            </div>
            <div className="mt-4">
              <div className="font-medium">Shiksha Greenwoods ICSE/ISC School (2019, 2021)</div>
              <div className="text-sm text-slate-300">Class 10: 80% · Class 12: 89%</div>
            </div>
          </div>

          {/* Certifications & Contact */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-emerald-400" />
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>
            <ul className="space-y-2 text-slate-300">
              <li>Google AI Essentials (Coursera, June 2024)</li>
              <li>Microsoft Certified Azure AI Fundamentals (July 2024)</li>
              <li>Introduction to Cloud (Cognitiveclass.ai, Sept 2025)</li>
            </ul>
            <div className="mt-6 h-px w-full bg-slate-800" />
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <a
                href="mailto:sanjuu04kgmail.com"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/40 px-3 py-2 text-xs transition hover:bg-slate-900"
              >
                <Mail className="h-4 w-4" /> sanjuu04kgmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/sanju-k-b34697300"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/40 px-3 py-2 text-xs transition hover:bg-slate-900"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/Sanjuu2004"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/40 px-3 py-2 text-xs transition hover:bg-slate-900"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <div className="mb-4 flex items-center gap-2">
            <Code2 className="h-5 w-5 text-violet-400" />
            <h3 className="text-xl font-semibold">Technical Skills</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <SkillGroup
              title="Languages"
              items={["Python", "Java", "SQL", "JavaScript", "HTML", "CSS"]}
            />
            <SkillGroup
              title="Core Concepts"
              items={["Data Structures", "OOPS", "DBMS", "System Design", "Operating Systems", "REST APIs"]}
            />
            <SkillGroup
              title="Frameworks/Libraries"
              items={["Next.js", "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "NumPy", "Pandas"]}
            />
            <SkillGroup
              title="Tools/Platforms"
              items={["Tableau", "Power BI", "AWS Lambda", "S3", "Git", "Docker", "Linux"]}
            />
            <SkillGroup
              title="Soft Skills"
              items={["Problem Solving", "Analytical Skills", "Teamwork", "Communication"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
