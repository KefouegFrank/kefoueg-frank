export type ProjectStatus = "In Progress" | "Live" | "Open Source" | "In Development" | "Confidential";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  category: string;
  status: ProjectStatus;
}

export interface EducationItem {
  year: string;
  degree: string;
  institution: string;
  modules: string[];
}

export interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  achievements: string[];
}

export interface TechItem {
  name: string;
  icon: string;
}

export interface TechCategory {
  id: string;
  title: string;
  subtitle: string;
  techs: TechItem[];
}

export interface Metric {
  value: string[];
  label: string;
}

export interface SocialLink {
  name: string;
  href: string;
  path?: string; // For SVG paths if used directly
}
