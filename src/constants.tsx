import { Experience, Project, Publication, SkillCategory, Education, Certification } from '../types';
import { Linkedin, Mail, Phone, Instagram, Github, Twitter } from 'lucide-react';
import React from 'react';

// Define the shape of the config object
interface Config {
  EMAIL: string;
  LINKEDIN_URL: string;
  WHATSAPP_NUMBER: string;
  RESUME_URL: string;
  ENABLE_FIDGET_SPINNER: boolean;
  METADATA: any;
  PROFILE_BACKGROUND_STYLE: any;
  PROFILE_BORDER_STYLE?: any;
  SECTION_CONTENT: any;
  PROJECTS_DESCRIPTION: string;
  CERTIFICATIONS_DESCRIPTION: string;
  GALLERY_DESCRIPTION: string;
  CONTACT_TITLE: string;
  CONTACT_DESCRIPTION: string;
  ABOUT_DETAILS: any;
  PERSONAL_INFO: any;
  SOCIAL_LINKS: { name: string; iconName: string; href: string }[];
  EXPERIENCES: Experience[];
  PROJECTS: Project[];
  PUBLICATIONS: Publication[];
  SKILLS: SkillCategory[];
  EDUCATION: Education[];
  CERTIFICATIONS: Certification[];
  ENABLE_CONTACT_FORM: boolean;
  HIDDEN_SECTIONS: string;
  [key: string]: any;
}

// Access the global config object
const CONFIG = (window as any).CONFIG as Config;

// Fallback if config is missing
if (!CONFIG) {
  console.error('Config file not loaded! Please ensure public/config.js is included in index.html');
}

export const EMAIL = CONFIG?.EMAIL || '';
export const LINKEDIN_URL = CONFIG?.LINKEDIN_URL || '';
export const WHATSAPP_NUMBER = CONFIG?.WHATSAPP_NUMBER || '';

export const RESUME_URL = CONFIG?.RESUME_URL || '';
export const ENABLE_FIDGET_SPINNER = CONFIG?.ENABLE_FIDGET_SPINNER || false;
export const ENABLE_CONTACT_FORM = CONFIG?.ENABLE_CONTACT_FORM || false;
export const HIDDEN_SECTIONS = CONFIG?.HIDDEN_SECTIONS || '';

export const METADATA = CONFIG?.METADATA || {
  title: "Portfolio",
  description: "Portfolio Website",
  url: "",
  image: "",
  type: "website",
  twitterCard: "summary_large_image"
};

export const PROFILE_BACKGROUND_STYLE = CONFIG?.PROFILE_BACKGROUND_STYLE || 'ai-network';
export const PROFILE_BORDER_STYLE = CONFIG?.PROFILE_BORDER_STYLE || 'simple-rotate';

export const SECTION_CONTENT = CONFIG?.SECTION_CONTENT || {};

export const PROJECTS_DESCRIPTION = CONFIG?.PROJECTS_DESCRIPTION || '';
export const CERTIFICATIONS_DESCRIPTION = CONFIG?.CERTIFICATIONS_DESCRIPTION || '';
export const CONTACT_TITLE = CONFIG?.CONTACT_TITLE || '';
export const CONTACT_DESCRIPTION = CONFIG?.CONTACT_DESCRIPTION || '';

export const ABOUT_DETAILS = CONFIG?.ABOUT_DETAILS || {};

export const PERSONAL_INFO = CONFIG?.PERSONAL_INFO || {};

// Helper to map icon names to components
const getIconComponent = (iconName: string) => {
  if (!iconName) return <Mail className='w-5 h-5' />;
  const normalized = iconName.toLowerCase();
  if (normalized.includes('linkedin')) return <Linkedin className='w-5 h-5' />;
  if (normalized.includes('instagram')) return <Instagram className='w-5 h-5' />;
  if (normalized.includes('github')) return <Github className='w-5 h-5' />;
  if (normalized.includes('mail') || normalized.includes('email')) return <Mail className='w-5 h-5' />;
  if (normalized.includes('phone') || normalized.includes('whatsapp')) return <Phone className='w-5 h-5' />;
  if (normalized.includes('twitter')) return <Twitter className='w-5 h-5' />;
  return <Mail className='w-5 h-5' />;
};

export const SOCIAL_LINKS = (CONFIG?.SOCIAL_LINKS || []).map(link => ({
  ...link,
  icon: getIconComponent(link.iconName || link.name)
}));

export const EXPERIENCES: Experience[] = CONFIG?.EXPERIENCES || [];

export const PROJECTS: Project[] = CONFIG?.PROJECTS || [];

export const PUBLICATIONS: Publication[] = CONFIG?.PUBLICATIONS || [];

export const SKILLS: SkillCategory[] = CONFIG?.SKILLS || [];

export const EDUCATION: Education[] = CONFIG?.EDUCATION || [];

export const CERTIFICATIONS: Certification[] = CONFIG?.CERTIFICATIONS || [];

