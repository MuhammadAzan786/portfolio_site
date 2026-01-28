"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Rakeez Solutions",
    location: "Riyadh, Saudi Arabia",
    period: "Aug 2025 - Dec 2025",
    achievements: [
      "Led end-to-end development of gamification dashboard using Fastify & React",
      "Implemented real-time notifications with Socket.IO, AWS S3 storage",
      "Established CI/CD pipelines with GitHub Actions, deployed on AWS EC2",
    ],
  },
  {
    title: "Software Engineer",
    company: "Binary Integrated Solutions",
    location: "Riyadh, Saudi Arabia",
    period: "Apr 2025 - Aug 2025",
    achievements: [
      "Integrated React.js frontend with .NET backend for Facility Management System",
      "Designed dynamic KPI dashboard using shadcn charts",
      "Implemented type-safe API integration with Orval-generated client types",
    ],
  },
  {
    title: "Software Engineer",
    company: "Gulzar Soft",
    location: "Gujrat, Pakistan",
    period: "Jan 2024 - Mar 2025",
    achievements: [
      "Led development of cloud-native video streaming platform using React, Node.js, AWS",
      "Integrated PostgreSQL with Drizzle ORM for type-safe queries",
      "Employed CI/CD pipelines, GitHub Actions, and Docker",
    ],
  },
  {
    title: "Full Stack Engineer",
    company: "VisionBird Technologies",
    location: "Gujrat, Pakistan",
    period: "Jan 2023 - Dec 2024",
    achievements: [
      "Developed HR Management System using MERN stack",
      "Built modular UI components with React.js and Material-UI",
      "Deployed on AWS EC2 with Nginx, configured MongoDB Atlas",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Tushmit Group of Industries",
    location: "Gujrat, Pakistan",
    period: "Feb 2022 - Jan 2023",
    achievements: [
      "Developed modular ERP system frontend using Angular",
      "Integrated RESTful APIs using HttpClient, RxJS, interceptors",
      "Implemented responsive interface with Angular Material",
    ],
  },
  {
    title: "Full Stack Engineer",
    company: "CyberSillo",
    location: "Gujrat, Pakistan",
    period: "Jan 2021 - Dec 2022",
    achievements: [
      "Developed admin dashboard for web defacement monitoring using Angular",
      "Integrated WebSockets and RxJS for live threat updates",
      "Implemented data visualizations with Chart.js and ngx-charts",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section className="py-16 bg-gh-canvas-default">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gh-text-primary">
              Professional Experience
            </h2>
            <p className="text-gh-text-secondary">
              4+ years building scalable applications across full-stack development, cloud architecture, and AI solutions
            </p>
          </div>

          {/* Clean Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group"
              >
                {/* Card */}
                <div className="h-full rounded-xl border border-gh-border-default bg-gh-canvas-subtle/50 backdrop-blur-sm p-5 transition-all hover:border-[#5B8DBE]/50 hover:shadow-md hover:-translate-y-1">
                  {/* Top Section - Company Info */}
                  <div className="mb-4 pb-4 border-b border-gh-border-default/50">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gh-text-primary mb-1">
                          {exp.company}
                        </h3>
                        <p className="text-sm font-medium text-[#5B8DBE]">
                          {exp.title}
                        </p>
                      </div>

                      {/* Simple Year Badge */}
                      <div className="flex-shrink-0">
                        <div className="px-2.5 py-1 rounded-md bg-[#5B8DBE]/10 border border-[#5B8DBE]/20">
                          <span className="text-[10px] font-semibold text-[#5B8DBE] uppercase tracking-wider">
                            {exp.period.split(' ')[0]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-3 mb-4 text-xs text-gh-text-secondary">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-[#5B8DBE]" />
                      <span>{exp.location}</span>
                    </div>
                    <span className="text-gh-border-default">•</span>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-[#5B8DBE]" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex gap-2.5 text-sm text-gh-text-secondary leading-relaxed"
                      >
                        <span className="text-[#5B8DBE] mt-1.5 flex-shrink-0">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-16 rounded-lg border border-gh-border-default bg-gh-canvas-subtle p-5 max-w-xl mx-auto"
          >
            <div className="flex items-start gap-3">
              <Briefcase className="h-5 w-5 text-[#5B8DBE] mt-0.5" />
              <div>
                <h3 className="text-base font-semibold text-gh-text-primary">
                  Bachelor of Computer Science
                </h3>
                <p className="text-sm text-gh-text-secondary">
                  Pir Mehr Ali Shah University • CGPA: 3.63/4.0
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
