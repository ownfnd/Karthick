import React, { useState } from 'react';
import { CASE_STUDIES } from '../../data/projects';
import { SectionHeader } from '../common/SectionHeader';
import { CheckCircle2, ShieldAlert, Cpu, Layers, GitBranch, Lock } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(CASE_STUDIES[0].id);

  const selectedProject = CASE_STUDIES.find((p) => p.id === activeTab) || CASE_STUDIES[0];

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Featured Engineering Case Studies"
          title="Production Systems & Enterprise Security"
          subtitle="Real-world case studies detailing backend architecture, LLM workflow integrations, and rigorous AI system vulnerability assessments."
        />

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-10 sm:mb-12">
          {CASE_STUDIES.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveTab(project.id)}
              className={`px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 sm:gap-2.5 border text-left ${
                activeTab === project.id
                  ? 'border-accent-electric bg-accent-electric/10 text-white shadow-lg shadow-accent-electric/15'
                  : 'border-white/10 bg-background-card text-gray-400 hover:text-white hover:bg-background-hover'
              }`}
            >
              {project.id === 'ai-privacy-compliance-engine' ? (
                <Cpu className="w-4 h-4 text-accent-electric shrink-0" />
              ) : (
                <Lock className="w-4 h-4 text-accent-cyan shrink-0" />
              )}
              <span>{project.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Project Deep Dive Card */}
        <div className="p-5 sm:p-8 md:p-12 rounded-2xl border border-white/10 bg-background-card/90 backdrop-blur-md shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Top Banner */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/25 mb-2">
                <span>{selectedProject.category}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-mono text-gray-400 mt-1">
                {selectedProject.subtitle}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="py-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
              System Purpose & Problem Statement
            </h4>
            <p className="text-base text-gray-300 leading-relaxed max-w-4xl">
              {selectedProject.description}
            </p>
          </div>

          {/* Architecture Pipeline Visualizer */}
          <div className="my-6 p-4 sm:p-6 rounded-xl border border-accent-electric/25 bg-background-secondary/80">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-accent-electric flex items-center gap-2">
                <GitBranch className="w-4 h-4" />
                <span>Sanitized Architecture Flow</span>
              </span>
              <span className="text-[11px] font-mono text-gray-400">
                End-to-End Execution Sequence
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {selectedProject.architecture.flow.map((step, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg border border-white/[0.06] bg-background-card/60 flex items-start gap-3"
                >
                  <span className="w-5 h-5 rounded-full bg-accent-electric/10 text-accent-electric font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 border border-accent-electric/25">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-medium text-gray-200 leading-snug">
                    {step}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-white/[0.06] text-xs font-mono text-gray-400 flex items-center gap-2">
              <span className="text-accent-cyan">Flow:</span>
              <span>{selectedProject.architecture.description}</span>
            </div>
          </div>

          {/* Contributions & Key Activities */}
          <div className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-accent-cyan" />
                <span>Core Engineering Responsibilities</span>
              </h4>
              <div className="space-y-3">
                {selectedProject.contributions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent-electric shrink-0 mt-1" />
                    <span className="text-sm text-gray-300 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies & Security Safeguards */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3">
                  Applied Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.securityHighlights && (
                <div className="p-5 rounded-xl border border-rose-500/20 bg-rose-500/[0.04]">
                  <div className="flex items-center gap-2 text-rose-400 text-xs font-mono uppercase tracking-wider mb-2">
                    <ShieldAlert className="w-4 h-4" />
                    <span>Security & Red-Teaming Coverage</span>
                  </div>
                  <ul className="text-xs text-gray-300 space-y-1.5 list-disc list-inside">
                    {selectedProject.securityHighlights.map((hl, idx) => (
                      <li key={idx}>{hl}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
