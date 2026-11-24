import { CaseStudy, TechnicalDemo } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'ai-privacy-compliance-engine',
    title: 'AI-Powered Privacy Policy Compliance Engine',
    subtitle: 'Automated Multi-Model Legal & Regulatory Audit Platform',
    category: 'Enterprise AI & Automation',
    description:
      'An enterprise compliance platform designed to automate privacy policy evaluation using AI-assisted analysis. Scans target website footprints, parses complex legal agreements, and cross-references policies against global data protection standards (GDPR, DPDP Act 2023) using high-precision LLM reasoning.',
    architecture: {
      flow: [
        'Website / Policy Input URL or Document Upload',
        'FastAPI Asynchronous Backend Controller',
        'Headless Website Crawler & Document Parsing Engine',
        'AWS Bedrock (Claude 3.5 Sonnet & Gemini) Multi-Model Analysis',
        'Compliance Evaluation Engine & Gap Matrix',
        'Automated Executive Audit Report Generation (PDF/JSON)',
      ],
      description:
        'Website / Policy Input → FastAPI Backend → Website Scanning & Document Processing → AWS Bedrock + AI Analysis → Compliance Evaluation → Report Generation.',
    },
    technologies: [
      'Python',
      'FastAPI',
      'AWS Bedrock',
      'Claude',
      'Gemini',
      'RAG Techniques',
      'REST APIs',
      'Docker',
      'Pydantic',
    ],
    contributions: [
      'Engineered core asynchronous FastAPI REST APIs handling policy ingestion, scanning queues, and evaluation jobs.',
      'Constructed headless website crawling services that automatically detect, scrape, and extract raw privacy disclosures.',
      'Integrated AWS Bedrock LLM endpoints (Claude & Gemini) with strict prompt constraints for zero-hallucination compliance checking.',
      'Developed RAG-assisted clause comparison pipelines evaluating customer policies against regulatory benchmark checklists.',
      'Implemented automated PDF report generation engines producing executive summaries, risk scores, and remediation checklists.',
      'Containerized the entire backend with Docker, enforcing secure credential rotation and least-privilege cloud IAM execution.',
    ],
  },
  {
    id: 'enterprise-vapt-ai-systems',
    title: 'Enterprise VAPT – Web, API & AI Systems',
    subtitle: 'Vulnerability Assessment & LLM Security Hardening',
    category: 'AI Security & Cybersecurity',
    description:
      'Comprehensive security assessments of enterprise web applications, REST APIs, and integrated AI/LLM systems. Focused on modern attack surfaces including prompt injection vectors, indirect data leakage through RAG pipelines, authentication bypasses, and OWASP Top 10 for LLMs vulnerabilities.',
    architecture: {
      flow: [
        'Target Surface Reconnaissance (Web, REST APIs, AI Endpoints)',
        'Automated & Manual Vulnerability Probing (Burp Suite, Custom Python)',
        'AI/LLM Adversarial Red-Teaming (Direct & Indirect Prompt Injection)',
        'RAG Pipeline Poisoning & Data Exfiltration Analysis',
        'Root-Cause Threat Verification & Severity Scoring (CVSS)',
        'Remediation Blueprints & Developer Mitigation Workshops',
      ],
      description:
        'External Attack Surface → API Gateway & Auth Barrier → LLM Prompt Injection & Red-Teaming → Vector DB Exfiltration Testing → Remediation Guidance.',
    },
    technologies: [
      'OWASP LLM Top 10',
      'Python Security Scripts',
      'Burp Suite',
      'FastAPI Endpoint Auditing',
      'RAG Security Testing',
      'Prompt Injection Validation',
      'Docker Isolation',
      'Linux',
    ],
    contributions: [
      'Conducted exhaustive vulnerability assessments of production web applications and REST APIs.',
      'Performed adversarial red-teaming against customer-facing AI and LLM endpoints to identify prompt injection bypasses.',
      'Evaluated RAG vector storage architectures against sensitive data leakage and context poisoning threats.',
      'Simulated unauthorized data access and role escalation attempts across multi-tenant AI backends.',
      'Delivered detailed vulnerability documentation with actionable remediation blueprints for software engineering teams.',
      'Advised developers on implementing defensive fencing, system prompt compartmentalization, and output sanitizers.',
    ],
    securityHighlights: [
      'Prompt Injection & Jailbreak validation',
      'RAG context data leakage mitigation',
      'Model denial-of-service and rate limit resilience',
      'API authentication & token leakage prevention',
    ],
  },
];

export const TECHNICAL_DEMOS: TechnicalDemo[] = [
  {
    id: 'demo-ai-content-automation',
    title: 'AI Content Automation using n8n and Gemini',
    badge: 'Automation Prototype',
    description:
      'An autonomous content ingestion, summarization, and distribution engine. Takes incoming RSS feeds and research papers, utilizes Google Gemini to extract key insights, and formats ready-to-publish newsletters into Google Sheets and Slack channels.',
    architectureNotes:
      'Scheduled RSS Ingestion Webhook → n8n Pipeline Router → Gemini 1.5 Flash Summarizer → Notion & Google Sheets Sync → Slack Notification Broadcast.',
    technologies: ['n8n', 'Google Gemini 1.5 Flash', 'Webhooks', 'Google Sheets API', 'Slack API'],
    keyFeatures: [
      'Automated daily scheduled trigger with zero manual intervention',
      'Structured JSON extraction guaranteeing consistent newsletter format',
      'Multi-channel webhook dispatching to Slack and Notion databases',
      'Configurable tone filters (Executive brief, Technical summary, Social post)',
    ],
  },
  {
    id: 'demo-rag-knowledge-assistant',
    title: 'RAG-Based Knowledge Assistant',
    badge: 'RAG Prototype',
    description:
      'A production-style document assistant that indexes complex technical manuals and policy PDFs into PostgreSQL with pgvector, executing hybrid retrieval with reciprocal rank fusion and grounded page citations.',
    architectureNotes:
      'PDF Upload -> Recursive Semantic Chunking -> OpenAI Embeddings -> pgvector HNSW Index -> Cosine Retrieval + Hybrid Re-rank -> Grounded Output.',
    technologies: ['Python', 'FastAPI', 'pgvector', 'PostgreSQL', 'LangChain', 'OpenAI'],
    keyFeatures: [
      'Exact page-level citation tagging with snippet previews',
      'Hybrid semantic and lexical search eliminating hallucinated facts',
      'Conversational memory retaining document discussion context',
      'Interactive Streamlit UI for rapid querying and source inspection',
    ],
  },
  {
    id: 'demo-ai-agent-tool-calling',
    title: 'AI Agent with Tool Calling',
    badge: 'Multi-Agent Prototype',
    description:
      'A multi-step reasoning agent constructed with LangGraph. When posed with complex multi-layered research queries, it formulates a plan, invokes web search and arithmetic calculator tools, inspects intermediate answers, and synthesizes structured reports.',
    architectureNotes:
      'User Prompt -> LangGraph Supervisor Node -> Search Tool Execution -> Scratchpad Verification -> Final Synthesis Node.',
    technologies: ['Python', 'LangGraph', 'Claude 3.5 Sonnet', 'DuckDuckGo API', 'Pydantic'],
    keyFeatures: [
      'Cyclical state machine ensuring self-correction when tool output is malformed',
      'Persistent memory checkpoints across multi-turn reasoning steps',
      'Explicit human confirmation toggle for critical external tool operations',
      'Detailed tool telemetry log visualizing every execution step',
    ],
  },
  {
    id: 'demo-website-document-analyzer',
    title: 'Website / Document Analysis Assistant',
    badge: 'Full-Stack AI Prototype',
    description:
      'A FastAPI microservice and interactive frontend that crawls live website domains, extracts privacy policies or Terms of Service, and runs a comprehensive multi-criteria audit using Gemini Flash.',
    architectureNotes:
      'Domain URL Input -> Headless Playwright Fetcher -> Markdown Normalizer -> Gemini Multimodal Audit -> JSON Risk Scorecard.',
    technologies: ['FastAPI', 'Playwright', 'Google Gemini', 'Pydantic', 'React/Tailwind'],
    keyFeatures: [
      'Real-time crawling and DOM clean-up removing navigation and ad noise',
      'Standardized risk scorecard with color-coded regulatory warnings',
      'Downloadable PDF and JSON audit reports for compliance teams',
      'Fast sub-5 second processing leveraging asynchronous streaming',
    ],
  },
  {
    id: 'demo-voice-ai-assistant',
    title: 'Voice AI Assistant',
    badge: 'Voice Prototype',
    description:
      'A natural, conversational voice agent built on Vapi and ElevenLabs. Designed for automated customer qualification, it handles realistic conversational turn-taking, background noise, and books meetings directly into a live calendar.',
    architectureNotes:
      'Inbound Audio Stream -> Deepgram Speech-to-Text -> Gemini Flash Dialogue Handler -> ElevenLabs Audio Stream -> Webhook Calendar Booking.',
    technologies: ['Vapi', 'ElevenLabs', 'Deepgram', 'Google Calendar API', 'Webhooks'],
    keyFeatures: [
      'Ultra low latency (<700ms roundtrip) for fluid natural conversation',
      'Intelligent speech interruption detection and pause handling',
      'Dynamic webhook trigger for live calendar availability verification',
      'Automatic call transcript and sentiment summary sent to email upon completion',
    ],
  },
];
