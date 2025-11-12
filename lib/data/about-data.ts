/**
 * About Section Data
 * Contains professional information, stats, and tech stack
 */

export interface Stat {
  label: string;
  value: string;
  icon?: string;
}

export interface TechItem {
  name: string;
  icon: string;
  category: "Frontend" | "Backend" | "Tools";
  color: string;
}

export const stats: Stat[] = [
  {
    label: "Years Experience",
    value: "5+",
  },
  {
    label: "Projects Completed",
    value: "50+",
  },
  {
    label: "Happy Clients",
    value: "30+",
  },
  {
    label: "Coffee Consumed",
    value: "1000+",
    icon: "☕",
  },
];

export const bio = {
  heading: "Who I Am",
  paragraphs: [
    "I'm a full-stack developer passionate about creating elegant solutions to complex problems. With 5+ years of experience, I specialize in building scalable web applications using modern JavaScript frameworks. I believe in writing clean, maintainable code and staying current with industry best practices.",
    "When I'm not coding, you'll find me contributing to open-source projects, exploring new technologies, or sharing knowledge through technical writing.",
  ],
};

export const techStack: TechItem[] = [
  {
    name: "React",
    icon: "react",
    category: "Frontend",
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: "nextdotjs",
    category: "Frontend",
    color: "#000000",
  },
  {
    name: "TypeScript",
    icon: "typescript",
    category: "Frontend",
    color: "#3178C6",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwindcss",
    category: "Frontend",
    color: "#06B6D4",
  },
  {
    name: "Node.js",
    icon: "nodedotjs",
    category: "Backend",
    color: "#339933",
  },
  {
    name: "PostgreSQL",
    icon: "postgresql",
    category: "Backend",
    color: "#4169E1",
  },
  {
    name: "Docker",
    icon: "docker",
    category: "Tools",
    color: "#2496ED",
  },
  {
    name: "Git",
    icon: "git",
    category: "Tools",
    color: "#F05032",
  },
];

export const availability = {
  status: "available", // "available" | "busy" | "unavailable"
  text: "Available for work",
};
