import React from 'react';
import { PORTFOLIO_CONFIG } from '../../config/portfolio.config';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-background-secondary py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-semibold text-white">
                {PORTFOLIO_CONFIG.personal.name}
              </span>
              <span className="text-xs text-gray-400">|</span>
              <span className="text-xs text-accent-cyan font-mono">
                {PORTFOLIO_CONFIG.personal.title}
              </span>
            </div>
            <p className="text-xs text-gray-400">
              {PORTFOLIO_CONFIG.personal.location}
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            {PORTFOLIO_CONFIG.personal.linkedin && (
              <a
                href={PORTFOLIO_CONFIG.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 bg-background-card flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-blue transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}

            {PORTFOLIO_CONFIG.personal.email && (
              <a
                href={`mailto:${PORTFOLIO_CONFIG.personal.email}`}
                className="w-9 h-9 rounded-lg border border-white/10 bg-background-card flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-cyan transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg border border-white/10 bg-background-card flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-electric transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} {PORTFOLIO_CONFIG.personal.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
