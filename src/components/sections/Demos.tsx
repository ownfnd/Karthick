import React from 'react';
import { TECHNICAL_DEMOS } from '../../data/projects';
import { SectionHeader } from '../common/SectionHeader';
import { Play, CheckCircle } from 'lucide-react';

export const Demos: React.FC = () => {
  return (
    <section id="demos" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Prototypes & Proof-of-Concepts"
          title="Technical Demonstrations"
          subtitle="Interactive prototypes and automated pipeline proofs-of-concept demonstrating practical execution across n8n, RAG, agentic loops, and voice synthesis."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNICAL_DEMOS.map((demo) => (
            <div
              key={demo.id}
              className="p-6 rounded-2xl border border-white/[0.08] bg-background-card hover:border-accent-cyan/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/25">
                    {demo.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-accent-electric transition-colors">
                  {demo.title}
                </h3>

                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  {demo.description}
                </p>

                {/* Architecture Flow Preview */}
                <div className="p-3 rounded-lg bg-background-secondary/80 border border-white/[0.05] text-[11px] font-mono text-gray-400 mb-4">
                  <span className="text-accent-electric block mb-1">Architecture:</span>
                  <span className="leading-snug block">{demo.architectureNotes}</span>
                </div>

                {/* Key Features */}
                <div className="space-y-1.5 mb-5">
                  {demo.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle className="w-3.5 h-3.5 text-accent-cyan shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Chips */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1 mb-4">
                  {demo.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-gray-300 border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Video Demo Slot / Callout */}
                <div className="p-2.5 rounded-lg border border-dashed border-white/10 bg-white/[0.02] flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-2">
                    <Play className="w-3.5 h-3.5 text-accent-electric" />
                    <span>Live Walkthrough Slot</span>
                  </span>
                  <span className="text-[10px] font-mono text-accent-cyan">Available upon request</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
