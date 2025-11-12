"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { techStack } from "@/lib/data/about-data";

// Simple Icons CDN for tech logos
const getIconUrl = (iconName: string) =>
  `https://cdn.simpleicons.org/${iconName}/7d8590`;

const getColoredIconUrl = (iconName: string, color: string) =>
  `https://cdn.simpleicons.org/${iconName}/${color.replace("#", "")}`;

export function TechStackCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-lg border border-gh-border-default bg-gh-canvas-subtle p-6"
    >
      {/* Heading - Simplified */}
      <h3 className="mb-4 text-sm font-medium text-gh-text-secondary">
        Tech Stack
      </h3>

      {/* Tech Icons Grid - Simplified */}
      <div className="grid grid-cols-4 gap-3">
        {techStack.map((tech) => (
          <TechIcon key={tech.name} tech={tech} />
        ))}
      </div>
    </motion.div>
  );
}

function TechIcon({ tech }: { tech: (typeof techStack)[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip - Simplified */}
      {isHovered && (
        <div className="pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded border border-gh-border-default bg-gh-canvas-overlay px-2 py-1 text-xs text-gh-text-primary">
          {tech.name}
        </div>
      )}

      {/* Icon Container - Simplified */}
      <div className="flex h-10 w-10 items-center justify-center rounded border border-gh-border-default bg-gh-canvas-default transition-colors hover:border-gh-border-emphasis">
        <img
          src={
            isHovered
              ? getColoredIconUrl(tech.icon, tech.color)
              : getIconUrl(tech.icon)
          }
          alt={tech.name}
          className="h-5 w-5 transition-all duration-200"
          style={{
            filter: isHovered ? "none" : "grayscale(100%)",
          }}
        />
      </div>
    </div>
  );
}
