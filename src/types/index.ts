export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}
