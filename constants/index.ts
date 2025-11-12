import { NavItem, SiteConfig } from "@/types";

/**
 * Site configuration
 */
export const siteConfig: SiteConfig = {
  name: "Muhammad Azan",
  description: "Software Engineer specializing in modern web technologies",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  author: {
    name: "Muhammad Azan",
    email: "your.email@example.com",
  },
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    email: "mailto:your.email@example.com",
  },
};

/**
 * Navigation items
 */
export const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

/**
 * Social media links
 */
export const socialLinks = [
  {
    name: "GitHub",
    url: siteConfig.links.github || "#",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: siteConfig.links.linkedin || "#",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: siteConfig.links.twitter || "#",
    icon: "twitter",
  },
];

/**
 * Animation variants for Framer Motion
 */
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
