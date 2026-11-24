export interface NavItem {
  label: string;
  href: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  tools: string[];
  skills: string[];
  icon: string;
}

export interface CapabilityItem {
  capability: string;
  status: 'Hands-on';
  category: string;
  context: string;
}

export interface LogoItem {
  name: string;
  category: string;
  svg: string;
  description: string;
  role: string;
}

export interface CurriculumModule {
  id: number;
  title: string;
  overview: string;
  learningOutcomes: string[];
  tools: string[];
  practicalExercises: string;
}

export interface TeachingLab {
  id: number;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  objective: string;
  tools: string[];
  learningOutcomes: string[];
  architecture: {
    steps: string[];
    description: string;
  };
  demoDescription: string;
  status: 'Ready for Demonstration' | 'Practical Blueprint';
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  architecture: {
    flow: string[];
    description: string;
  };
  technologies: string[];
  contributions: string[];
  securityHighlights?: string[];
}

export interface TechnicalDemo {
  id: string;
  title: string;
  badge: string;
  description: string;
  architectureNotes: string;
  technologies: string[];
  keyFeatures: string[];
  videoEmbedUrl?: string;
}

export interface TeachingSubject {
  name: string;
  category: string;
  description: string;
}
