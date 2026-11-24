import React from 'react';
import { PORTFOLIO_CONFIG } from '../../config/portfolio.config';
import { SectionHeader } from '../common/SectionHeader';
import { StatCounter } from '../common/StatCounter';
import { 
  GraduationCap, 
  Code2, 
  Presentation
} from 'lucide-react';

const TEACHING_SUBJECTS = [
  { name: 'Python Programming', category: 'Foundation', desc: 'Modern async Python, data structures, and type-safe schema patterns.' },
  { name: 'Backend Development with FastAPI', category: 'APIs', desc: 'High-speed REST API architecture, middleware, OpenAPI, and streaming.' },
  { name: 'Generative AI and LLM Applications', category: 'Generative AI', desc: 'Prompt engineering, structured outputs, JSON mode, and function calling.' },
  { name: 'RAG and AI Knowledge Systems', category: 'Retrieval', desc: 'Semantic embeddings, vector databases (pgvector), hybrid search, and citations.' },
  { name: 'AI Agents and MCP', category: 'Agentic AI', desc: 'LangGraph state loops, tool augmentation, memory, and Model Context Protocol.' },
  { name: 'n8n Workflow Automation', category: 'Automation', desc: 'Low-code enterprise automation, webhook routing, and AI node orchestration.' },
  { name: 'API Integration and Webhooks', category: 'Integration', desc: 'Connecting SaaS platforms, CRM sync, authentication, and error retries.' },
  { name: 'AI Security and Responsible AI', category: 'AI Security', desc: 'OWASP LLM Top 10, prompt injection defenses, PII masking, and DPDP Act 2023.' },
  { name: 'Docker and Cloud Deployment', category: 'Cloud DevOps', desc: 'Multi-stage Dockerfiles, secret management, AWS EC2/S3, and Vercel.' },
  { name: 'Cybersecurity Fundamentals', category: 'Security', desc: 'Zero trust security architecture, web security, and vulnerability assessments.' },
];

export const TeachingExperience: React.FC = () => {
  return (
    <section id="teaching" className="py-20 md:py-28 relative bg-background-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Educator Profile & Training Track Record"
          title="Teaching Experience & Technical Training"
          subtitle="Empowering the next generation of AI engineers and working professionals through high-impact, hands-on, project-based pedagogy."
        />

        {/* 1. Stat Counter & Training Highlight */}
        <div className="max-w-3xl mx-auto mb-16">
          <StatCounter
            end={PORTFOLIO_CONFIG.hero.stats.studentsTrained}
            label={PORTFOLIO_CONFIG.hero.stats.studentsTrainedLabel}
            description={PORTFOLIO_CONFIG.about.trainingStatement}
          />
        </div>

        {/* 2. Educational Methodology Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl border border-white/10 bg-background-card">
            <div className="w-10 h-10 rounded-xl bg-accent-electric/10 border border-accent-electric/25 flex items-center justify-center text-accent-electric mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">
              Practical, Project-First Pedagogy
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Every concept is introduced alongside runnable code. Students build functional endpoints, ingestion pipelines, and agent workflows from day one.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-background-card">
            <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/25 flex items-center justify-center text-accent-cyan mb-4">
              <Presentation className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">
              Demystifying Complex Concepts
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Explaining high-dimensional vector embeddings, attention heads, and cyclical agent graphs using clear mental models and visual flowcharts.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-background-card">
            <div className="w-10 h-10 rounded-xl bg-accent-indigo/10 border border-accent-indigo/25 flex items-center justify-center text-accent-indigo mb-4">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">
              Full Lifecycle Engineering
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Bridging theory with industry practices: unit tests, prompt injection resilience, Docker containerization, and cost-efficient cloud hosting.
            </p>
          </div>
        </div>

        {/* 3. Subjects I Can Teach */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Curriculum Disciplines I Teach
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Comprehensive technical syllabus delivered with structured presentations, guided labs, and debugging walkthroughs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {TEACHING_SUBJECTS.map((sub, idx) => (
              <div
                key={sub.name}
                className="p-4 rounded-xl border border-white/[0.08] bg-background-card/70 hover:border-accent-electric/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-accent-cyan px-1.5 py-0.5 rounded bg-accent-cyan/10">
                    {sub.category}
                  </span>
                  <span className="text-xs font-mono text-gray-400">
                    #{idx + 1}
                  </span>
                </div>
                <h5 className="text-xs font-bold text-white mb-1.5 leading-snug">
                  {sub.name}
                </h5>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  {sub.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
