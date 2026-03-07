export interface Experience {
  id: string;
  role: string;
  company: string;
  logo?: string;
  period: string;
  location?: string;
  description: string[];
}

export interface Project {
  id: string;
  title: string;
  role: string;
  date: string;
  description: string[];
  tags: string[];
  image?: string; // Added for project visualization
  videoEmbed?: string; // Added for video iframe support
  link?: string; // Added for external links (e.g. LinkedIn post)
}

export interface Publication {
  id: string;
  title: string;
  journal: string;
  role: string;
  link?: string;
  year: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  details: string[];
  image?: string; // Added for education visualization
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  hoverText: string;
  link?: string;
}

export type Theme = 'dark' | 'light';