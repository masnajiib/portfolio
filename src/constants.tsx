import { Experience, Project, Publication, SkillCategory, Education, Certification } from '../types';
import { Linkedin, Mail, Phone, Instagram, Github, Twitter } from 'lucide-react';
import React from 'react';

// Define the shape of the config object
interface Config {
  EMAIL: string;
  LINKEDIN_URL: string;
  WHATSAPP_NUMBER: string;
  WHATSAPP_MESSAGE: string;
  RESUME_URL: string;
  ENABLE_FIDGET_SPINNER: boolean;
  METADATA: any;
  PROFILE_BACKGROUND_STYLE: any;
  PROFILE_BORDER_STYLE?: any;
  SECTION_CONTENT: any;
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

// Use environment variables first, then fallback to CONFIG
const ENV_EMAIL = import.meta.env.VITE_EMAIL || '';
const ENV_LINKEDIN = import.meta.env.VITE_LINKEDIN_URL || '';
const ENV_WHATSAPP = import.meta.env.VITE_WHATSAPP_NUMBER || '';

export const EMAIL = ENV_EMAIL || CONFIG?.EMAIL || '';
export const LINKEDIN_URL = ENV_LINKEDIN || CONFIG?.LINKEDIN_URL || '';
export const WHATSAPP_NUMBER = ENV_WHATSAPP || CONFIG?.WHATSAPP_NUMBER || '';
export const WHATSAPP_MESSAGE = CONFIG?.WHATSAPP_MESSAGE || "Halo Almas, saya melihat portofolio Anda dan ingin berdiskusi lebih lanjut.";

const ENV_RESUME_ID = import.meta.env.VITE_RESUME_FILE_ID;
export const RESUME_URL = ENV_RESUME_ID 
  ? `https://drive.google.com/file/d/${ENV_RESUME_ID}/view?usp=sharing` 
  : (CONFIG?.RESUME_URL || '');
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

const overrideHref = (name: string, originalHref: string) => {
  const norm = name.toLowerCase();
  
  if (norm.includes('linkedin') && ENV_LINKEDIN) return ENV_LINKEDIN;
  // If you later add these to .env, uncomment them:
  // if (norm.includes('github') && import.meta.env.VITE_GITHUB_URL) return import.meta.env.VITE_GITHUB_URL;
  // if (norm.includes('instagram') && import.meta.env.VITE_INSTAGRAM_URL) return import.meta.env.VITE_INSTAGRAM_URL;
  
  if ((norm.includes('mail') || norm.includes('email')) && ENV_EMAIL) {
    return originalHref.startsWith('mailto:') ? originalHref : `mailto:${ENV_EMAIL}`;
  }
  
  if ((norm.includes('phone') || norm.includes('whatsapp')) && ENV_WHATSAPP) {
    if (originalHref.startsWith('http') || originalHref.startsWith('wa.me')) {
      return originalHref;
    }
    const defaultText = WHATSAPP_MESSAGE;
    return `https://wa.me/${ENV_WHATSAPP}?text=${encodeURIComponent(defaultText)}`;
  }
  
  return originalHref;
};

export const SOCIAL_LINKS = (CONFIG?.SOCIAL_LINKS || []).map(link => ({
  ...link,
  href: overrideHref(link.name, link.href || ''),
  icon: getIconComponent(link.iconName || link.name)
}));

export const EXPERIENCES: Experience[] = CONFIG?.EXPERIENCES || [];

export const PROJECTS: Project[] = CONFIG?.PROJECTS || [];

export const PUBLICATIONS: Publication[] = CONFIG?.PUBLICATIONS || [];

export const SKILLS: SkillCategory[] = CONFIG?.SKILLS || [];

export const EDUCATION: Education[] = CONFIG?.EDUCATION || [];

export const CERTIFICATIONS: Certification[] = CONFIG?.CERTIFICATIONS || [];

