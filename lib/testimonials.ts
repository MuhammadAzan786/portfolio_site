export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  project?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc",
    avatar: "/testimonials/sarah.jpg",
    rating: 5,
    quote:
      "Working with this developer was an absolute pleasure. They delivered our e-commerce platform ahead of schedule and exceeded all our expectations. The attention to detail and code quality is outstanding.",
    project: "E-Commerce Platform",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Product Manager",
    company: "Innovate Labs",
    avatar: "/testimonials/michael.jpg",
    rating: 5,
    quote:
      "Exceptional technical skills combined with great communication. They transformed our complex requirements into an elegant, scalable solution. I highly recommend their services.",
    project: "Task Management App",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Founder",
    company: "FitTrack",
    avatar: "/testimonials/emily.jpg",
    rating: 5,
    quote:
      "Our fitness app wouldn't be where it is today without their expertise. They not only built a robust mobile application but also provided valuable insights that improved our product significantly.",
    project: "Fitness Tracking Mobile App",
  },
  {
    id: "4",
    name: "David Kim",
    role: "CTO",
    company: "DataFlow Systems",
    avatar: "/testimonials/david.jpg",
    rating: 5,
    quote:
      "Incredible work on our analytics API. They handled high-volume data processing challenges with ease and delivered a system that's both performant and maintainable. True professional.",
    project: "RESTful API for Analytics",
  },
  {
    id: "5",
    name: "Jessica Taylor",
    role: "Design Lead",
    company: "Creative Studio",
    avatar: "/testimonials/jessica.jpg",
    rating: 5,
    quote:
      "The design system they created has transformed how our team works. It's comprehensive, well-documented, and beautifully crafted. Our productivity has increased by 40% since implementation.",
    project: "Portfolio Design System",
  },
  {
    id: "6",
    name: "Alex Martinez",
    role: "Operations Director",
    company: "ConnectNow",
    avatar: "/testimonials/alex.jpg",
    rating: 5,
    quote:
      "They built our real-time chat platform with impressive speed and quality. The WebRTC integration works flawlessly, and our users love the experience. Couldn't ask for better results.",
    project: "Real-time Chat Application",
  },
];
