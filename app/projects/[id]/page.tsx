"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, CheckCircle2, ArrowLeft } from "lucide-react";
import { projects } from "@/lib/projects";
import { PremiumHeader } from "@/components/navigation/premium-header";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <>
        <PremiumHeader />
        <div className="min-h-screen bg-gh-canvas-default flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-gh-text-primary">
              Project Not Found
            </h1>
            <button
              onClick={() => router.push("/")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <PremiumHeader />
      <div className="min-h-screen bg-gh-canvas-default pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gh-text-primary">
            {project.title}
          </h1>
          <p className="text-xl text-gh-text-secondary">
            {project.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gh-border-default bg-gh-canvas-subtle text-gh-text-primary hover:bg-gh-border-default/20 transition-colors"
              >
                <Github className="w-4 h-4" />
                View Source Code
              </a>
            )}
          </div>
        </motion.div>

        {/* Project Thumbnail */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative aspect-video mb-12 rounded-xl overflow-hidden border border-gh-border-default"
        >
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gh-text-primary mb-4">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-gh-border-default/20 text-gh-text-primary border border-gh-border-default/40"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Long Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gh-text-primary mb-4">
            About the Project
          </h2>
          <p className="text-gh-text-secondary leading-relaxed">
            {project.longDescription}
          </p>
        </motion.div>

        {/* Problem, Solution, Results */}
        {(project.problem || project.solution || project.results) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {project.problem && (
              <div className="p-6 rounded-lg border border-gh-border-default bg-gh-canvas-subtle/50">
                <h3 className="text-lg font-semibold text-gh-text-primary mb-3">
                  Problem
                </h3>
                <p className="text-sm text-gh-text-secondary leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}
            {project.solution && (
              <div className="p-6 rounded-lg border border-gh-border-default bg-gh-canvas-subtle/50">
                <h3 className="text-lg font-semibold text-gh-text-primary mb-3">
                  Solution
                </h3>
                <p className="text-sm text-gh-text-secondary leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}
            {project.results && (
              <div className="p-6 rounded-lg border border-gh-border-default bg-gh-canvas-subtle/50">
                <h3 className="text-lg font-semibold text-gh-text-primary mb-3">
                  Results
                </h3>
                <p className="text-sm text-gh-text-secondary leading-relaxed">
                  {project.results}
                </p>
              </div>
            )}
          </motion.div>
        )}

        {/* Challenges */}
        {project.challenges && project.challenges.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gh-text-primary mb-4">
              Challenges Overcome
            </h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gh-text-secondary"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Learnings */}
        {project.learnings && project.learnings.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gh-text-primary mb-4">
              Key Learnings
            </h2>
            <ul className="space-y-3">
              {project.learnings.map((learning, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gh-text-secondary"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
      </div>
    </>
  );
}
