import React, { useState } from 'react';
import { CURRICULUM_MODULES } from '../../data/curriculum';
import { SectionHeader } from '../common/SectionHeader';
import { CheckCircle, Wrench, Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';

export const Curriculum: React.FC = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(1);

  const toggleExpand = (id: number) => {
    setExpandedModule(expandedModule === id ? null : id);
  };

  return (
    <section id="curriculum" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="AI Engineering Syllabus"
          title="AI Engineering & Automation – Teaching Capabilities"
          subtitle="A structured 12-module pedagogical roadmap designed to teach students and working professionals how to engineer, test, automate, and monetize real-world AI applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CURRICULUM_MODULES.map((module) => {
            const isExpanded = expandedModule === module.id;

            return (
              <div
                key={module.id}
                className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isExpanded
                    ? 'border-accent-electric/50 bg-background-card/90 shadow-xl shadow-accent-electric/5'
                    : 'border-white/[0.08] bg-background-card/60 hover:border-white/20 hover:bg-background-card'
                }`}
              >
                <div>
                  {/* Top Index & Title */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span className="w-8 h-8 rounded-lg bg-accent-electric/10 text-accent-electric border border-accent-electric/25 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      {module.id < 10 ? `0${module.id}` : module.id}
                    </span>
                    <button
                      onClick={() => toggleExpand(module.id)}
                      className="text-xs font-mono text-accent-cyan hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>{isExpanded ? 'Less' : 'Details'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                    {module.title}
                  </h3>

                  <p className="text-xs text-gray-300 leading-relaxed mb-4">
                    {module.overview}
                  </p>

                  {/* Tools */}
                  <div className="mb-4">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase text-gray-400 mb-2">
                      <Wrench className="w-3 h-3 text-accent-cyan" />
                      <span>Curriculum Tools</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {module.tools.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] border border-white/[0.06] text-gray-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expanded Content: Learning Outcomes & Practical Exercise */}
                  {isExpanded && (
                    <div className="pt-4 border-t border-white/[0.08] space-y-4 animate-fade-in">
                      <div>
                        <span className="text-[11px] font-mono uppercase text-accent-electric block mb-2">
                          Core Learning Outcomes:
                        </span>
                        <ul className="space-y-1.5">
                          {module.learningOutcomes.map((lo, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                              <CheckCircle className="w-3.5 h-3.5 text-accent-electric shrink-0 mt-0.5" />
                              <span>{lo}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-3 rounded-xl bg-accent-blue/[0.05] border border-accent-blue/20">
                        <span className="text-[11px] font-mono uppercase text-accent-cyan flex items-center gap-1.5 mb-1">
                          <Lightbulb className="w-3.5 h-3.5 text-accent-electric" />
                          <span>Practical Lab / Demo Idea:</span>
                        </span>
                        <p className="text-xs text-gray-300 leading-relaxed">
                          {module.practicalExercises}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {!isExpanded && (
                  <button
                    onClick={() => toggleExpand(module.id)}
                    className="mt-4 pt-3 border-t border-white/[0.06] w-full text-left text-xs font-mono text-gray-400 hover:text-accent-electric transition-colors flex items-center justify-between"
                  >
                    <span>View outcomes & lab demo</span>
                    <span>→</span>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
