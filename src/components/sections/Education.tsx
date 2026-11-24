import React from 'react';
import { PORTFOLIO_CONFIG } from '../../config/portfolio.config';
import { SectionHeader } from '../common/SectionHeader';
import { GraduationCap, Award, ShieldCheck, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Credentials & Academic Foundation"
          title="Education & Professional Certifications"
          subtitle="Formal academic degrees and accredited technical education credentials validating systems engineering and security pedagogy."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Education Card */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-accent-electric px-1 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Degrees</span>
            </h3>

            {PORTFOLIO_CONFIG.education.map((edu, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-white/10 bg-background-card relative overflow-hidden group"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-2.5 py-1 rounded-md border border-accent-cyan/20 inline-block mb-2">
                      {edu.grade}
                    </span>
                    <h4 className="text-xl font-bold text-white tracking-tight">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-medium text-gray-300 mt-1">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-gray-400">
                    <Calendar className="w-3.5 h-3.5 text-accent-electric" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed border-t border-white/[0.06] pt-4 mt-4">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications Cards */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-accent-cyan px-1 flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Accredited Certifications</span>
            </h3>

            <div className="space-y-4">
              {PORTFOLIO_CONFIG.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-white/10 bg-background-card hover:border-accent-cyan/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-accent-electric/10 border border-accent-electric/25 flex items-center justify-center text-accent-electric shrink-0">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">
                          {cert.title}
                        </h4>
                        <span className="text-xs font-mono text-accent-cyan">
                          {cert.issuer}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 shrink-0">
                      {cert.badgeText}
                    </span>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed pl-11">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
