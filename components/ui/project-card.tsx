"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  delay?: number;
  onViewDetails: () => void;
}

/**
 * Minimal Project Card
 * Clean, simple design aligned with minimal theme
 */
export function ProjectCard({
  project,
  delay = 0,
  onViewDetails,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="group relative"
    >
      {/* Card Container */}
      <div
        className="relative overflow-hidden rounded-lg border border-gh-border-default transition-all duration-300 hover:border-gh-border-emphasis"
        style={{
          background: "linear-gradient(135deg, #161b22 0%, #0d1117 100%)",
        }}
      >
        {/* Animated gradient orb background effects - Always visible */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Orange gradient orb */}
          <motion.div
            className="absolute -right-16 top-8 h-40 w-40 rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(255, 166, 87, 0.4) 0%, transparent 70%)",
              opacity: 0.5,
            }}
            animate={{
              y: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Blue gradient orb */}
          <motion.div
            className="absolute -left-10 bottom-8 h-32 w-32 rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(88, 166, 255, 0.4) 0%, transparent 70%)",
              opacity: 0.5,
            }}
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />

          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 166, 87, 0.03) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 166, 87, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        {/* Project Thumbnail */}
        <div className="relative aspect-video overflow-hidden bg-gh-border-default/10">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
        </div>

        {/* Project Info */}
        <div className="relative p-6 space-y-3 z-10">
          {/* Title */}
          <h3 className="text-lg font-semibold text-gh-text-primary">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed text-gh-text-secondary line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded-md bg-gh-border-default/20 text-gh-text-secondary border border-gh-border-default/40 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="text-xs px-2 py-1 rounded-md bg-gh-border-default/20 text-gh-text-secondary border border-gh-border-default/40 backdrop-blur-sm">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-4">
            <button
              onClick={onViewDetails}
              className="text-sm text-gh-text-secondary hover:text-gh-border-emphasis transition-colors"
            >
              View Details →
            </button>

            <div className="flex gap-2 ml-auto">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-md border border-gh-border-default/40 text-gh-text-secondary hover:border-gh-border-emphasis hover:text-gh-border-emphasis transition-all backdrop-blur-sm"
                  aria-label="View on GitHub"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-4 h-4" />
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-md border border-gh-border-default/40 text-gh-text-secondary hover:border-gh-border-emphasis hover:text-gh-border-emphasis transition-all backdrop-blur-sm"
                  aria-label="View live demo"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
