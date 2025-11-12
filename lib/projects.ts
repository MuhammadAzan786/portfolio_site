export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: "web" | "mobile" | "api" | "design" | "other";
  featured: boolean;
  images: string[];
  thumbnail: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  problem?: string;
  solution?: string;
  results?: string;
  challenges?: string[];
  learnings?: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with real-time inventory management and payment integration.",
    longDescription:
      "Built a comprehensive e-commerce solution featuring user authentication, product catalog, shopping cart, checkout process, and admin dashboard. Integrated Stripe for payments and implemented real-time inventory tracking.",
    category: "web",
    featured: true,
    images: ["/projects/ecommerce-1.jpg", "/projects/ecommerce-2.jpg"],
    thumbnail: "/projects/ecommerce-thumb.jpg",
    techStack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
    ],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    problem:
      "Small businesses needed an affordable, scalable e-commerce solution with modern features.",
    solution:
      "Developed a modular platform using Next.js and serverless functions for cost-effective scaling.",
    results:
      "Increased client sales by 45% in the first quarter. Platform now serves 50+ businesses.",
    challenges: [
      "Implementing real-time inventory synchronization",
      "Optimizing database queries for large product catalogs",
      "Ensuring PCI compliance for payment processing",
    ],
    learnings: [
      "Advanced database optimization techniques",
      "Stripe API integration best practices",
      "Server-side rendering strategies for SEO",
    ],
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A collaborative task management application with drag-and-drop functionality and team features.",
    longDescription:
      "Created a modern task management tool with real-time collaboration, kanban boards, and team workspaces. Features include drag-and-drop task organization, file attachments, and activity tracking.",
    category: "web",
    featured: true,
    images: ["/projects/taskapp-1.jpg", "/projects/taskapp-2.jpg"],
    thumbnail: "/projects/taskapp-thumb.jpg",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "Redux"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    problem:
      "Teams struggled with fragmented task management across multiple tools.",
    solution:
      "Built an all-in-one platform with real-time collaboration and intuitive UI.",
    results:
      "Adopted by 20+ teams. Average task completion time reduced by 30%.",
    challenges: [
      "Implementing real-time synchronization across clients",
      "Optimizing drag-and-drop performance",
      "Handling offline functionality",
    ],
    learnings: [
      "WebSocket architecture for real-time features",
      "State management in complex applications",
      "Progressive enhancement strategies",
    ],
  },
  {
    id: "3",
    title: "Fitness Tracking Mobile App",
    description:
      "Cross-platform mobile app for tracking workouts, nutrition, and fitness goals.",
    longDescription:
      "Developed a comprehensive fitness application featuring workout tracking, meal planning, progress charts, and social features. Integrated with wearable devices for automatic data sync.",
    category: "mobile",
    featured: true,
    images: ["/projects/fitness-1.jpg", "/projects/fitness-2.jpg"],
    thumbnail: "/projects/fitness-thumb.jpg",
    techStack: [
      "React Native",
      "TypeScript",
      "Firebase",
      "Redux",
      "Expo",
      "HealthKit",
    ],
    demoUrl: "https://example.com",
    problem:
      "Users needed a single app to track all aspects of their fitness journey.",
    solution:
      "Created a unified platform integrating workout tracking, nutrition, and progress analytics.",
    results: "10,000+ downloads. 4.8-star rating on app stores.",
    challenges: [
      "Integrating with various fitness device APIs",
      "Optimizing battery usage for background tracking",
      "Ensuring data accuracy across different devices",
    ],
    learnings: [
      "Mobile app optimization techniques",
      "HealthKit and Google Fit integration",
      "Offline-first architecture patterns",
    ],
  },
  {
    id: "4",
    title: "RESTful API for Analytics",
    description:
      "Scalable REST API for collecting and analyzing user behavior data.",
    longDescription:
      "Built a high-performance analytics API handling millions of events per day. Features include real-time data processing, custom event tracking, and comprehensive reporting endpoints.",
    category: "api",
    featured: false,
    images: ["/projects/api-1.jpg"],
    thumbnail: "/projects/api-thumb.jpg",
    techStack: ["Node.js", "Express", "Redis", "PostgreSQL", "Docker", "AWS"],
    githubUrl: "https://github.com",
    problem: "Existing analytics solutions were too expensive or inflexible.",
    solution:
      "Developed a self-hosted API with customizable event tracking and real-time processing.",
    results: "Processing 5M+ events daily with 99.9% uptime.",
    challenges: [
      "Handling high-volume concurrent requests",
      "Implementing efficient data aggregation",
      "Ensuring data privacy and GDPR compliance",
    ],
    learnings: [
      "Microservices architecture",
      "Redis for caching and rate limiting",
      "Database sharding strategies",
    ],
  },
  {
    id: "5",
    title: "Portfolio Design System",
    description:
      "Comprehensive design system with reusable components and documentation.",
    longDescription:
      "Created a complete design system including component library, design tokens, and interactive documentation. Used by multiple teams for consistent product development.",
    category: "design",
    featured: false,
    images: ["/projects/design-1.jpg", "/projects/design-2.jpg"],
    thumbnail: "/projects/design-thumb.jpg",
    techStack: ["Figma", "Storybook", "React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    problem: "Inconsistent UI across products led to poor user experience.",
    solution:
      "Developed a unified design system with comprehensive component library.",
    results:
      "Reduced design-to-development time by 40%. Used across 5 products.",
    challenges: [
      "Maintaining consistency across platforms",
      "Creating accessible components",
      "Documenting component variations",
    ],
    learnings: [
      "Design system architecture",
      "Accessibility best practices",
      "Component API design",
    ],
  },
  {
    id: "6",
    title: "Real-time Chat Application",
    description:
      "WebSocket-based chat platform with video calling and file sharing.",
    longDescription:
      "Developed a modern chat application supporting text, voice, and video communication. Features include group chats, file sharing, message reactions, and end-to-end encryption.",
    category: "web",
    featured: false,
    images: ["/projects/chat-1.jpg", "/projects/chat-2.jpg"],
    thumbnail: "/projects/chat-thumb.jpg",
    techStack: ["React", "WebRTC", "Socket.io", "Node.js", "MongoDB", "Redis"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    problem: "Teams needed a secure, real-time communication platform.",
    solution:
      "Built a feature-rich chat app with end-to-end encryption and video calling.",
    results: "Active user base of 5,000+. Average session time: 45 minutes.",
    challenges: [
      "Implementing WebRTC for video calls",
      "Scaling WebSocket connections",
      "Ensuring message encryption",
    ],
    learnings: [
      "WebRTC peer-to-peer connections",
      "Socket.io scaling strategies",
      "End-to-end encryption implementation",
    ],
  },
];

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Apps" },
  { id: "mobile", label: "Mobile" },
  { id: "api", label: "APIs" },
  { id: "design", label: "Design" },
  { id: "other", label: "Other" },
] as const;
