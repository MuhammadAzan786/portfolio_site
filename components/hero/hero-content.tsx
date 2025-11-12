"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const roles = [
  "Full-Stack Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
  "Code Craftsman",
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind",
  "PostgreSQL",
  "Docker",
  "AWS",
];

export function HeroContent() {
  const ref = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="flex flex-col items-center justify-center space-y-6 text-center"
    >
      {/* Main Headline - Smaller */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="space-y-3"
      >
        <h1 className="text-4xl font-bold leading-tight text-gh-text-primary sm:text-5xl md:text-6xl">
          Crafting Digital
          <br />
          <span className="text-gh-text-secondary">Experiences</span>
        </h1>

        {/* Rotating Role */}
        <div className="flex items-center justify-center gap-2 text-lg text-gh-text-secondary sm:text-xl">
          <Code2 className="h-5 w-5 text-gh-border-emphasis" />
          <motion.span
            key={roleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="font-medium"
          >
            {roles[roleIndex]}
          </motion.span>
        </div>
      </motion.div>

      {/* Description - Compact */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="max-w-xl text-sm leading-relaxed text-gh-text-secondary sm:text-base"
      >
        Transforming ideas into elegant code. Building high-performance
        web applications that users love and businesses rely on.
      </motion.p>

      {/* Tech Stack - Compact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-1.5 max-w-xl"
      >
        {techStack.map((tech, index) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.7 + index * 0.05,
            }}
            className="rounded border border-gh-border-default bg-gh-canvas-default/50 px-2 py-1 text-xs font-mono text-gh-text-secondary backdrop-blur-sm transition-all hover:border-gh-border-emphasis hover:text-gh-text-primary"
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>

      {/* CTA Buttons - Compact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="flex flex-wrap items-center justify-center gap-3 pt-2"
      >
        <Link
          href="#projects"
          className="group inline-flex items-center gap-2 rounded-lg border border-gh-border-emphasis bg-gh-border-emphasis px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-gh-border-emphasis/90"
        >
          <span>Explore Work</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>

        <Link
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg border border-gh-border-default bg-transparent px-5 py-2.5 text-sm font-medium text-gh-text-primary transition-all hover:border-gh-border-emphasis hover:bg-gh-border-default/10"
        >
          <span>Get in Touch</span>
        </Link>
      </motion.div>

      {/* Stats - Compact */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.1 }}
        className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-gh-text-secondary"
      >
        <div className="flex items-center gap-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
          <span>Available for freelance</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="font-mono">Remote</span>
          <span className="opacity-50">•</span>
          <span className="font-mono">Worldwide</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
