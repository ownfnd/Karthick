import React, { useState } from 'react';
import { TEACHING_LABS } from '../../data/labs';
import { SectionHeader } from '../common/SectionHeader';
import { CheckCircle2, GitBranch, Sparkles, Filter } from 'lucide-react';

export const TeachingLabs: React.FC = () => {
  const [filterDifficulty, setFilterDifficulty] = useState<string>('All');
  const [selectedLabId, setSelectedLabId] = useState<number>(1);

  const filteredLabs = TEACHING_LABS.filter((lab) => {
    if (filterDifficulty === 'All') return true;
    return lab.difficulty === filterDifficulty;
  });

  const activeLab = TEACHING_LABS.find((l) => l.id === selectedLabId) || TEACHING_LABS[0];

  return (
    <section id="labs" className="py-20 md:py-28 relative bg-background-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Interactive Hands-on Blueprints"
          title="Practical Teaching Labs"
          subtitle="Ten structured, classroom-ready labs designed to take learners step-by-step from raw Python code to autonomous agents, voice bots, and secure cloud deployments."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <span className="text-xs font-mono text-gray-400 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Difficulty:</span>
          </span>
          {['All', 'Beginner', 'Intermediate', 'Advanced'].map((diff) => (
            <button
              key={diff}
              onClick={() => setFilterDifficulty(diff)}
              className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                filterDifficulty === diff
                  ? 'bg-accent-electric text-black font-semibold'
                  : 'bg-white/[0.04] text-gray-300 hover:text-white hover:bg-white/10 border border-white/[0.08]'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>

        {/* Interactive Lab Studio (Sidebar + Lab Detail Viewer) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Lab Directory List (Left Column) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-gray-400 px-1 mb-2">
              Teaching Labs Directory ({filteredLabs.length} Available)
            </div>

            <div className="max-h-[320px] lg:max-h-[650px] overflow-y-auto pr-1 space-y-2.5 custom-scrollbar">
              {filteredLabs.map((lab) => {
                const isSelected = selectedLabId === lab.id;

                return (
                  <button
                    key={lab.id}
                    onClick={() => setSelectedLabId(lab.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-start gap-3.5 ${
                      isSelected
                        ? 'border-accent-electric bg-accent-electric/10 shadow-md shadow-accent-electric/10'
                        : 'border-white/[0.06] bg-background-card/80 hover:border-white/15 hover:bg-background-hover'
                    }`}
                  >
                    <span
                      className={`w-7 h-7 rounded-lg font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border ${
                        isSelected
                          ? 'bg-accent-electric text-black border-accent-electric'
                          : 'bg-white/[0.05] text-gray-400 border-white/10'
                      }`}
                    >
                      {lab.id}
                    </span>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className={`text-sm font-semibold truncate ${isSelected ? 'text-white' : 'text-gray-200'}`}>
                          {lab.title}
                        </h4>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                            lab.difficulty === 'Beginner'
                              ? 'bg-emerald-500/15 text-emerald-400'
                              : lab.difficulty === 'Intermediate'
                              ? 'bg-accent-blue/15 text-accent-blue'
                              : 'bg-rose-500/15 text-rose-400'
                          }`}
                        >
                          {lab.difficulty}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 line-clamp-1">
                        {lab.objective}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Lab Deep-Dive View (Right Column) */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 rounded-2xl border border-white/10 bg-background-card shadow-2xl relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/[0.08]">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-2 py-0.5 rounded border border-accent-cyan/25">
                      Lab {activeLab.id < 10 ? `0${activeLab.id}` : activeLab.id}
                    </span>
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded ${
                        activeLab.difficulty === 'Beginner'
                          ? 'bg-emerald-500/15 text-emerald-400'
                          : activeLab.difficulty === 'Intermediate'
                          ? 'bg-accent-blue/15 text-accent-blue'
                          : 'bg-rose-500/15 text-rose-400'
                      }`}
                    >
                      {activeLab.difficulty} Level
                    </span>
                    <span className="text-[11px] font-mono text-gray-400 border border-white/10 px-2 py-0.5 rounded">
                      {activeLab.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {activeLab.title}
                  </h3>
                </div>
              </div>

              {/* Objective */}
              <div className="py-5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5">
                  Instructional Objective
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {activeLab.objective}
                </p>
              </div>

              {/* Tools Used */}
              <div className="py-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                  Tools & Packages Required
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeLab.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-gray-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture Flow Diagram */}
              <div className="my-5 p-5 rounded-xl border border-accent-electric/25 bg-background-secondary/70">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-accent-electric flex items-center gap-1.5">
                    <GitBranch className="w-3.5 h-3.5" />
                    <span>Lab Architecture & Data Flow</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeLab.architecture.steps.map((st, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg border border-white/[0.06] bg-background-card/50 flex items-start gap-2.5"
                    >
                      <span className="w-5 h-5 rounded-md bg-accent-electric/15 text-accent-electric font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-xs text-gray-200 leading-snug">
                        {st}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-3 pt-3 border-t border-white/[0.06] text-xs font-mono text-gray-400">
                  {activeLab.architecture.description}
                </p>
              </div>

              {/* Learning Outcomes */}
              <div className="py-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-accent-cyan mb-3">
                  Key Technical Competencies Gained
                </h4>
                <div className="space-y-2">
                  {activeLab.learningOutcomes.map((lo, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-accent-electric shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-300 leading-relaxed">
                        {lo}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Practical Demo Execution Blueprint */}
              <div className="mt-4 p-4 rounded-xl border border-white/[0.08] bg-white/[0.02]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-1.5 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-accent-electric" />
                  <span>Demonstration & Guided Implementation Plan</span>
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed font-mono">
                  {activeLab.demoDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
