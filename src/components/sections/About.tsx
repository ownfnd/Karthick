import React from 'react';
import { PORTFOLIO_CONFIG } from '../../config/portfolio.config';
import { SectionHeader } from '../common/SectionHeader';
import { Terminal, GraduationCap, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="About Me & Pedagogical Approach"
          title="Bridging Production Engineering & Practical Education"
          subtitle="A dedicated Python Backend & AI Engineer equipped with both deep systems experience and proven technical teaching credentials."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative Profile */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-5 sm:p-8 rounded-2xl border border-white/10 bg-background-card relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-electric/5 rounded-full blur-2xl group-hover:bg-accent-electric/10 transition-colors" />

              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                <Terminal className="w-5 h-5 text-accent-electric" />
                <span>Backend & AI Systems Focus</span>
              </h3>

              <div className="space-y-4 text-gray-300 leading-relaxed text-base">
                <p>{PORTFOLIO_CONFIG.about.summary}</p>
                <p>{PORTFOLIO_CONFIG.about.technicalExperience}</p>
                <p className="text-white font-medium">
                  {PORTFOLIO_CONFIG.about.focusStatement}
                </p>
              </div>
            </div>

            {/* Educator Credibility Box */}
            <div className="p-5 sm:p-8 rounded-2xl border border-accent-cyan/20 bg-accent-cyan/[0.03] relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center shrink-0 text-accent-cyan mt-1">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-accent-cyan/15 text-accent-cyan mb-2">
                    <Award className="w-3.5 h-3.5" />
                    <span>Certified Cybersecurity Educator Professional</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {PORTFOLIO_CONFIG.about.trainingStatement}
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {PORTFOLIO_CONFIG.about.educatorProfile}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Teaching Philosophy Principles */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-sm font-mono uppercase tracking-wider text-accent-electric px-1">
              Pedagogical Principles & Delivery
            </div>

            {PORTFOLIO_CONFIG.about.teachingPhilosophy.map((item, idx) => (
              <div
                key={item.title}
                className="p-5 rounded-xl border border-white/[0.08] bg-background-card/70 hover:border-accent-electric/30 hover:bg-background-hover transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-accent-electric/10 border border-accent-electric/30 flex items-center justify-center text-accent-electric shrink-0 text-xs font-mono mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h5 className="text-base font-semibold text-white mb-1">
                      {item.title}
                    </h5>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
