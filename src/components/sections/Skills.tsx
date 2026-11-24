import React, { useState } from 'react';
import { SKILL_CATEGORIES, CAPABILITY_STATUSES } from '../../data/skills';
import { SectionHeader } from '../common/SectionHeader';
import { 
  Cpu, 
  Terminal, 
  Database, 
  Bot, 
  Workflow, 
  Mic, 
  Cloud, 
  ShieldCheck, 
  CheckCircle2, 
  Search, 
  Sparkles,
  Layers
} from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-5 h-5" />,
  Terminal: <Terminal className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Bot: <Bot className="w-5 h-5" />,
  Workflow: <Workflow className="w-5 h-5" />,
  Mic: <Mic className="w-5 h-5" />,
  Cloud: <Cloud className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
};

export const Skills: React.FC = () => {
  const [filterQuery, setFilterQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCategories = SKILL_CATEGORIES.filter((category) => {
    if (activeCategory !== 'all' && category.id !== activeCategory) {
      return false;
    }
    if (!filterQuery) return true;
    const q = filterQuery.toLowerCase();
    const inTitle = category.title.toLowerCase().includes(q);
    const inTools = category.tools.some((t) => t.toLowerCase().includes(q));
    const inSkills = category.skills.some((s) => s.toLowerCase().includes(q));
    return inTitle || inTools || inSkills;
  });

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-background-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Curriculum-Aligned Technical Breadth"
          title="Technical Skills & Ecosystem Competencies"
          subtitle="Comprehensive coverage across foundation models, backend APIs, RAG architectures, agentic systems, and cloud deployments."
        />

        {/* 1. Verified Capability Status Table */}
        <div className="mb-20">
          <div className="p-6 md:p-8 rounded-2xl border border-emerald-500/20 bg-background-card shadow-lg relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/[0.08]">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Hands-on Verification Matrix</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  Core Engineering Capabilities & Status
                </h3>
              </div>
              <div className="flex flex-col sm:items-end gap-1">
                <p className="text-xs text-gray-400 max-w-sm">
                  Specific technical proficiencies validated through direct hands-on implementation and system building.
                </p>
                <span className="text-[10px] font-mono text-accent-cyan sm:hidden">
                  ← Scroll table horizontally →
                </span>
              </div>
            </div>

            <div className="overflow-x-auto -mx-2 px-2 custom-scrollbar">
              <table className="w-full text-left text-sm min-w-[640px]">
                <thead>
                  <tr className="border-b border-white/[0.08] text-xs font-mono uppercase text-gray-400">
                    <th className="py-3 px-4">Capability Domain</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Focus Area</th>
                    <th className="py-3 px-4">Applied Engineering Context</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.05]">
                  {CAPABILITY_STATUSES.map((item, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-white/[0.02] transition-colors group"
                    >
                      <td className="py-3.5 px-4 font-semibold text-white group-hover:text-accent-electric transition-colors">
                        {item.capability}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{item.status}</span>
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-xs font-mono text-accent-cyan">
                        {item.category}
                      </td>
                      <td className="py-3.5 px-4 text-xs text-gray-300">
                        {item.context}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 2. Eight Curriculum Categories */}
        <div className="mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              8 Comprehensive Curriculum Disciplines
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Explore tools, libraries, and core skills structured for enterprise execution and teaching delivery.
            </p>
          </div>

          {/* Search / Filter Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by tool or skill..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-background-card border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent-electric transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
              activeCategory === 'all'
                ? 'bg-accent-electric text-black font-semibold'
                : 'bg-white/[0.04] text-gray-300 hover:text-white border border-white/[0.08]'
            }`}
          >
            All Disciplines
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                activeCategory === cat.id
                  ? 'bg-accent-cyan text-black font-semibold'
                  : 'bg-white/[0.04] text-gray-300 hover:text-white border border-white/[0.08]'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 md:p-8 rounded-2xl border border-white/[0.08] bg-background-card hover:border-accent-electric/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-electric/10 border border-accent-electric/25 flex items-center justify-center text-accent-electric group-hover:scale-105 transition-transform">
                    {ICON_MAP[category.icon] || <Cpu className="w-5 h-5" />}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight group-hover:text-accent-electric transition-colors">
                      {category.title}
                    </h4>
                    <span className="text-xs text-gray-400 font-mono">
                      {category.tools.length} Tools & Platforms
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed mb-5">
                  {category.description}
                </p>

                {/* Tools Chips */}
                <div className="mb-5">
                  <div className="text-xs font-mono uppercase tracking-wider text-accent-cyan mb-2.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Tools & Technologies</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-gray-200 hover:border-accent-electric/30 hover:text-white transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Applied Skills */}
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2.5 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Engineering & Delivery Skills</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-full text-[11px] bg-accent-blue/10 text-accent-blue border border-accent-blue/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
