import React from 'react';
import { PORTFOLIO_CONFIG } from '../../config/portfolio.config';
import { StatCounter } from '../common/StatCounter';
import { ArrowRight, BookOpen, Mail, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Dynamic ambient AI glow background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[420px] bg-gradient-to-tr from-accent-blue/15 via-accent-electric/10 to-accent-indigo/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide uppercase mb-6 border border-accent-electric/30 bg-accent-electric/10 text-accent-electric shadow-[0_0_20px_rgba(0,210,255,0.15)] animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{PORTFOLIO_CONFIG.hero.badge}</span>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            <span className="block text-gray-200">Hi, I'm</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-accent-electric">
              {PORTFOLIO_CONFIG.personal.name}
            </span>
          </h1>

          <div className="text-lg sm:text-2xl md:text-3xl font-semibold text-accent-cyan tracking-tight mb-6 font-mono flex items-center justify-center gap-2 px-2 text-center">
            <Terminal className="w-5 h-5 text-accent-electric hidden sm:inline" />
            <span>{PORTFOLIO_CONFIG.personal.title}</span>
          </div>

          {/* Introduction Paragraph */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8 font-normal">
            {PORTFOLIO_CONFIG.hero.introduction}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {PORTFOLIO_CONFIG.hero.highlightTech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-white/[0.04] border border-white/[0.08] text-gray-300 hover:border-accent-electric/40 hover:text-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Navigation Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-blue to-accent-electric text-black font-semibold text-sm hover:opacity-95 shadow-lg shadow-accent-electric/25 hover:shadow-accent-electric/40 transition-all duration-300 group"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#labs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-accent-cyan/40 bg-accent-cyan/10 hover:bg-accent-cyan/20 text-accent-cyan font-semibold text-sm transition-all duration-300"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore Teaching Labs</span>
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/10 text-white font-medium text-sm transition-all duration-300"
            >
              <Mail className="w-4 h-4 text-gray-400" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Prominent Educator Credibility Card / Counter */}
          <div className="w-full max-w-2xl">
            <StatCounter
              end={PORTFOLIO_CONFIG.hero.stats.studentsTrained}
              label={PORTFOLIO_CONFIG.hero.stats.studentsTrainedLabel}
              description={PORTFOLIO_CONFIG.about.trainingStatement}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
