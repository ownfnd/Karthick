import React, { useState } from 'react';
import { ROW_ONE_LOGOS, ROW_TWO_LOGOS, TechLogo } from '../../data/logos';
import { X } from 'lucide-react';

export const TechMarquee: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<TechLogo | null>(null);

  // Duplicate arrays for infinite smooth looping
  const rowOneItems = [...ROW_ONE_LOGOS, ...ROW_ONE_LOGOS, ...ROW_ONE_LOGOS];
  const rowTwoItems = [...ROW_TWO_LOGOS, ...ROW_TWO_LOGOS, ...ROW_TWO_LOGOS];

  return (
    <section className="py-14 md:py-20 relative overflow-hidden bg-background-secondary/50 border-y border-white/[0.06]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-32 bg-accent-blue/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase mb-3 border border-accent-electric/30 bg-accent-electric/10 text-accent-electric">
          <span>Continuous Ecosystem Marquee</span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
          Tools, Frameworks & Foundation Infrastructure
        </h3>
        <p className="text-sm text-gray-400 mt-1 max-w-xl mx-auto">
          Hover to pause motion • Click any technology logo to view architectural role & implementation details
        </p>
      </div>

      {/* Marquee Wrapper with Edge Fade Gradients */}
      <div className="relative w-full overflow-hidden space-y-4">
        {/* Left & Right Edge Fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 md:w-36 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 md:w-36 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />

        {/* Row 1: Left to Right (marquee-right) */}
        <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused] motion-reduce:animate-none">
          {rowOneItems.map((tech, index) => (
            <button
              key={`row1-${tech.name}-${index}`}
              onClick={() => setSelectedTech(tech)}
              title={`${tech.name} — Click for details`}
              className="group mx-2 md:mx-3 px-4 py-3 rounded-xl border border-white/[0.08] bg-background-card/80 hover:bg-background-hover hover:border-accent-electric/50 transition-all duration-300 flex items-center gap-3 cursor-pointer shrink-0 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-electric/50"
            >
              <div className="w-6 h-6 flex items-center justify-center text-gray-400 group-hover:text-accent-electric group-hover:scale-110 transition-transform duration-300">
                <svg
                  viewBox={tech.viewBox || "0 0 24 24"}
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={tech.svgPath} />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                {tech.name}
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/[0.05] text-gray-400 group-hover:text-accent-cyan font-mono hidden sm:inline-block">
                {tech.category}
              </span>
            </button>
          ))}
        </div>

        {/* Row 2: Right to Left (marquee-left) */}
        <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused] motion-reduce:animate-none">
          {rowTwoItems.map((tech, index) => (
            <button
              key={`row2-${tech.name}-${index}`}
              onClick={() => setSelectedTech(tech)}
              title={`${tech.name} — Click for details`}
              className="group mx-2 md:mx-3 px-4 py-3 rounded-xl border border-white/[0.08] bg-background-card/80 hover:bg-background-hover hover:border-accent-cyan/50 transition-all duration-300 flex items-center gap-3 cursor-pointer shrink-0 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-cyan/50"
            >
              <div className="w-6 h-6 flex items-center justify-center text-gray-400 group-hover:text-accent-cyan group-hover:scale-110 transition-transform duration-300">
                <svg
                  viewBox={tech.viewBox || "0 0 24 24"}
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={tech.svgPath} />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                {tech.name}
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/[0.05] text-gray-400 group-hover:text-accent-cyan font-mono hidden sm:inline-block">
                {tech.category}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Modal / Dialog on Logo Click */}
      {selectedTech && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedTech(null)}
        >
          <div
            className="relative w-full max-w-md bg-background-card border border-white/15 rounded-2xl p-5 sm:p-6 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient accent light */}
            <div
              className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-20 pointer-events-none"
              style={{ backgroundColor: selectedTech.color || '#00D2FF' }}
            />

            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-accent-electric">
                  <svg
                    viewBox={selectedTech.viewBox || "0 0 24 24"}
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={selectedTech.svgPath} />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    {selectedTech.name}
                  </h4>
                  <span className="text-xs text-accent-cyan font-mono">
                    {selectedTech.category}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedTech(null)}
                className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-1">
                  Role in AI Architecture
                </span>
                <p className="text-white font-medium">
                  {selectedTech.role}
                </p>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-1">
                  Practical Application
                </span>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {selectedTech.description}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setSelectedTech(null)}
                className="px-4 py-2 text-xs font-medium rounded-lg bg-white/10 hover:bg-white/15 text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
