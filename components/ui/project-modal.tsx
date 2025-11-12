"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ExternalLink, Github, CheckCircle } from "lucide-react";
import { Project } from "@/lib/projects";
import { Badge } from "./badge";
import { Button } from "./button";
import { Separator } from "./separator";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg border border-border bg-background shadow-2xl"
          >
            {/* Header */}
            <div className="relative h-64 bg-gradient-to-br from-primary/20 to-secondary/20">
              {project.images[0] && (
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 rounded-full bg-background p-2 shadow-lg transition-colors hover:bg-muted"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="max-h-[calc(100vh-20rem)] overflow-y-auto p-8">
              <h2 className="mb-2 text-3xl font-bold">{project.title}</h2>
              <p className="mb-6 text-muted-foreground">
                {project.longDescription}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="mb-3 text-sm font-semibold uppercase text-muted-foreground">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>

              <Separator className="my-6" />

              {/* Problem, Solution, Results */}
              {project.problem && (
                <div className="mb-6">
                  <h3 className="mb-2 text-lg font-semibold">Problem</h3>
                  <p className="text-muted-foreground">{project.problem}</p>
                </div>
              )}

              {project.solution && (
                <div className="mb-6">
                  <h3 className="mb-2 text-lg font-semibold">Solution</h3>
                  <p className="text-muted-foreground">{project.solution}</p>
                </div>
              )}

              {project.results && (
                <div className="mb-6">
                  <h3 className="mb-2 text-lg font-semibold">Results</h3>
                  <p className="text-muted-foreground">{project.results}</p>
                </div>
              )}

              {/* Challenges */}
              {project.challenges && project.challenges.length > 0 && (
                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-semibold">Key Challenges</h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-muted-foreground">
                          {challenge}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Learnings */}
              {project.learnings && project.learnings.length > 0 && (
                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-semibold">What I Learned</h3>
                  <ul className="space-y-2">
                    {project.learnings.map((learning, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                        <span className="text-muted-foreground">
                          {learning}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-wrap gap-4">
                {project.demoUrl && (
                  <Button asChild>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Source Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
