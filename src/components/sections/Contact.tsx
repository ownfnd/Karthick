import React from 'react';
import { PORTFOLIO_CONFIG } from '../../config/portfolio.config';
import { SectionHeader } from '../common/SectionHeader';
import { Mail, Linkedin, FileDown, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_CONFIG;

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Let's Connect & Collaborate"
          title="Get In Touch"
          subtitle="Feel free to reach out directly via email or LinkedIn to discuss engineering, consulting, or technical collaborations."
        />

        <div className="max-w-3xl mx-auto">
          <div className="p-5 sm:p-8 md:p-12 rounded-3xl border border-white/10 bg-background-card/90 backdrop-blur-md shadow-2xl relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-accent-blue/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-accent-electric/15 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center mb-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Opportunities & Collaborations</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-2">
                Let's Build Intelligent Systems Together
              </h3>
              <p className="text-sm text-gray-300 max-w-lg mx-auto">
                Whether you're looking to discuss AI training lab delivery, backend microservice design, or enterprise workflow automation.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 relative z-10">
              {personal.email && (
                <a
                  href={`mailto:${personal.email}`}
                  className="p-5 rounded-2xl border border-white/10 bg-background-secondary/60 hover:border-accent-electric/50 hover:bg-background-hover transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-accent-electric/10 border border-accent-electric/25 flex items-center justify-center text-accent-electric group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-400 block mb-1">
                      Email Address
                    </span>
                    <span className="text-xs font-semibold text-white group-hover:text-accent-electric transition-colors break-all">
                      {personal.email}
                    </span>
                  </div>
                </a>
              )}

              {personal.linkedin && (
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl border border-white/10 bg-background-secondary/60 hover:border-accent-blue/50 hover:bg-background-hover transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/25 flex items-center justify-center text-accent-blue group-hover:scale-105 transition-transform">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-400 block mb-1">
                      LinkedIn Profile
                    </span>
                    <span className="text-xs font-semibold text-white group-hover:text-accent-blue transition-colors">
                      Connect on LinkedIn
                    </span>
                  </div>
                </a>
              )}

              {personal.resumeUrl && (
                <a
                  href={personal.resumeUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl border border-accent-electric/30 bg-accent-electric/[0.07] hover:bg-accent-electric/[0.12] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-accent-electric/15 border border-accent-electric/30 flex items-center justify-center text-accent-electric group-hover:scale-105 transition-transform">
                      <FileDown className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-accent-electric" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-accent-cyan block mb-1">
                      Curriculum Vitae
                    </span>
                    <span className="text-xs font-semibold text-white">
                      Download Resume (PDF)
                    </span>
                  </div>
                </a>
              )}
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center text-xs text-gray-400">
              <span>Location: </span>
              <strong className="text-white">{personal.location}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
