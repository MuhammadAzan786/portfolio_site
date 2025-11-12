"use client";

import { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { ProjectCard } from "@/components/ui/project-card";
import { FilterButton } from "@/components/ui/filter-button";
import { ProjectModal } from "@/components/ui/project-modal";
import { projects, categories, Project } from "@/lib/projects";

/**
 * Minimal Projects Section
 * Clean, centered layout aligned with hero theme
 */
export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <section
        id="projects"
        className="relative overflow-hidden bg-gh-canvas-default py-24 md:py-32"
      >
        {/* Grid pattern background - visible in center, fades to sides */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 166, 87, 0.8) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 166, 87, 0.8) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
              maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)",
              opacity: 0.12,
            }}
          />

          {/* Moving light effect across grid */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle 400px at 50% 50%, rgba(255, 166, 87, 0.15), transparent 70%)",
            }}
            animate={{
              x: ["0%", "100%", "0%"],
              y: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl font-bold text-gh-text-primary md:text-4xl lg:text-5xl">
              Featured Projects
            </h2>
            <p className="text-base leading-relaxed text-gh-text-secondary sm:text-lg">
              A showcase of my recent work, featuring full-stack applications, mobile apps, and design systems
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                delay={index * 0.1}
                onViewDetails={() => handleViewProject(project)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
