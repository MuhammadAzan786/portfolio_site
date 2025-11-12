"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiFramer,
} from "react-icons/si";
import { cn } from "@/lib/utils";

const techStack = [
  { name: "React", icon: SiReact, color: "#58a6ff", gradient: "from-[#58a6ff] to-[#1f6feb]" },
  { name: "Next.js", icon: SiNextdotjs, color: "#e6edf3", gradient: "from-[#e6edf3] to-[#8b949e]" },
  { name: "TypeScript", icon: SiTypescript, color: "#79c0ff", gradient: "from-[#79c0ff] to-[#58a6ff]" },
  { name: "Node.js", icon: SiNodedotjs, color: "#7ee787", gradient: "from-[#7ee787] to-[#3fb950]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#79c0ff", gradient: "from-[#79c0ff] to-[#a5d6ff]" },
  { name: "Prisma", icon: SiPrisma, color: "#d2a8ff", gradient: "from-[#d2a8ff] to-[#bc8cff]" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#58a6ff", gradient: "from-[#58a6ff] to-[#79c0ff]" },
  { name: "Docker", icon: SiDocker, color: "#58a6ff", gradient: "from-[#58a6ff] to-[#1f6feb]" },
  { name: "Git", icon: SiGit, color: "#ffa657", gradient: "from-[#ffa657] to-[#f0883e]" },
  { name: "Framer Motion", icon: SiFramer, color: "#d2a8ff", gradient: "from-[#d2a8ff] to-[#ded9fc]" },
];

/**
 * Vibrant Tech Stack Display with Scroll Effects
 * Beautiful colorful merged layout with scroll animations and pop-up names
 */
export function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth fade-in and movement
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);

  return (
    <motion.div
      ref={containerRef}
      style={{ y, opacity }}
      className="flex items-center justify-center"
    >
      {/* Colorful merged tech stack container */}
      <div className="inline-flex items-center gap-0 rounded-xl border border-white/20 bg-gradient-to-r from-white/10 via-white/5 to-white/10 p-3 shadow-xl backdrop-blur-md">
        {techStack.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.4,
                type: "spring",
                stiffness: 200
              }}
              className="group relative flex items-center justify-center"
            >
              {/* Pop-up name on hover */}
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                whileHover={{ opacity: 1, y: -5, scale: 1 }}
                transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                className={cn(
                  "pointer-events-none absolute -top-16 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-bold text-white opacity-0 shadow-2xl group-hover:opacity-100",
                  `bg-gradient-to-r ${tech.gradient}`
                )}
              >
                {tech.name}
                {/* Tooltip arrow */}
                <motion.div
                  className={cn(
                    "absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45",
                    `bg-gradient-to-br ${tech.gradient}`
                  )}
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              {/* Icon container with colorful glow */}
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.2,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  stiffness: 400
                }}
                className={cn(
                  "relative flex h-12 w-12 cursor-pointer items-center justify-center transition-all duration-300",
                  index !== 0 && "border-l border-white/10"
                )}
              >
                {/* Colorful glow effect on hover */}
                <motion.div
                  className="absolute inset-0 -z-10 rounded-lg opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-80"
                  style={{ backgroundColor: tech.color }}
                />

                {/* Icon with color */}
                <motion.div
                  whileHover={{ rotate: [0, -12, 12, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon
                    className="h-6 w-6 transition-all duration-300"
                    style={{
                      color: "rgba(230, 237, 243, 0.6)",
                      filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = tech.color;
                      e.currentTarget.style.filter = `drop-shadow(0 0 15px ${tech.color})`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(230, 237, 243, 0.6)";
                      e.currentTarget.style.filter = "drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))";
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
