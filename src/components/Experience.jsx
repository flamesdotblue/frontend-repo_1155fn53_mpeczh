import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="w-full bg-slate-950 py-16 text-white md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <Briefcase className="h-6 w-6 text-cyan-400" />
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Experience</h2>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <div>
              <h3 className="text-xl font-semibold">Business Development Intern — Valsco Technology</h3>
              <p className="text-sm text-slate-400">Jul–Sept 2025</p>
            </div>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-300">
            <li>Automated Python/Excel data workflows — reduced manual effort by 20%.</li>
            <li>Led outreach campaigns resulting in ~30% more qualified leads.</li>
            <li>Supported strategy and optimization across sales pipelines.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
