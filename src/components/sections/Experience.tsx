import React from 'react';
import { PORTFOLIO_CONFIG } from '../../config/portfolio.config';
import { SectionHeader } from '../common/SectionHeader';
import { Building2, Calendar, MapPin, CheckCircle, Terminal } from 'lucide-react';

export const Experience: React.FC = () => {
  const exp = PORTFOLIO_CONFIG.experience;

  return (
    <section id="experience" className="py-20 md:py-28 relative bg-background-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Verified Career History"
          title="Professional Experience"
          subtitle="Direct production engineering experience building backend microservices, enterprise AI pipelines, and LLM security frameworks."
        />

        <div className="max-w-4xl mx-auto">
          {/* Main Experience Card */}
          <div className="relative p-5 sm:p-8 md:p-10 rounded-2xl border border-white/10 bg-background-card shadow-xl overflow-hidden group">
            {/* Ambient accent background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none group-hover:bg-accent-electric/15 transition-all duration-500" />

            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Verified Production Experience</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 mt-1 text-accent-electric font-semibold text-base">
                  <Building2 className="w-4 h-4" />
                  <span>{exp.company}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs font-mono text-gray-400">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                  <Calendar className="w-3.5 h-3.5 text-accent-cyan" />
                  <span>{exp.period}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                  <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
                  <span>{exp.location}</span>
                </span>
              </div>
            </div>

            {/* Responsibilities list */}
            <div className="py-6">
              <h4 className="text-sm font-mono uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-accent-electric" />
                <span>Key Engineering Contributions</span>
              </h4>

              <div className="grid grid-cols-1 gap-3.5">
                {exp.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-3 group/item">
                    <div className="w-5 h-5 rounded-md bg-accent-electric/10 border border-accent-electric/25 flex items-center justify-center shrink-0 text-accent-electric text-xs mt-0.5 group-hover/item:bg-accent-electric/20 transition-colors">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed font-normal">
                      {resp}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack Tags */}
            <div className="pt-6 border-t border-white/[0.08]">
              <div className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3">
                Technologies & Standards Applied
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md text-xs font-mono bg-white/[0.03] border border-white/[0.08] text-gray-300 hover:border-accent-cyan/40 hover:text-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
