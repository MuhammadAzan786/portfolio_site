/**
 * Common types used throughout the application
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  date: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  technologies: string[];
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "other";
  level?: "beginner" | "intermediate" | "advanced" | "expert";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  author: {
    name: string;
    email: string;
    avatar?: string;
  };
  links: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}
