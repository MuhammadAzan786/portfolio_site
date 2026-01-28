"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code2, Download } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import {
  SiPython,
  SiTensorflow,
  SiOpenai,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiAmazonwebservices,
} from "react-icons/si";

const roles = [
  "AI & ML Specialist",
  "Full-Stack Developer",
  "Intelligent Solutions Architect",
  "Innovation Engineer",
];

const techStack = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  { name: "OpenAI", icon: SiOpenai, color: "#412991" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
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

  const handleDownloadResume = async () => {
    try {
      const response = await fetch('/Muhammad_Azan_Afzal.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Muhammad_Azan_Afzal_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="flex flex-col items-center justify-center space-y-6 text-center"
    >
      {/* Rotating Role with icon animation - Moved to top */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="flex items-center justify-center gap-2 text-base text-gh-text-secondary sm:text-lg"
      >
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Code2 className="h-4 w-4 text-gh-border-emphasis sm:h-5 sm:w-5" />
        </motion.div>
        <motion.span
          key={roleIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="font-medium relative"
        >
          <span className="relative z-10">{roles[roleIndex]}</span>
          <motion.span
            className="absolute inset-0 blur-sm opacity-50"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {roles[roleIndex]}
          </motion.span>
        </motion.span>
      </motion.div>

      {/* Main Headline - With subtle animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <motion.h1
          className="text-4xl font-bold leading-tight text-gh-text-primary sm:text-5xl md:text-6xl"
          animate={{
            textShadow: [
              "0 0 0px rgba(88, 166, 255, 0)",
              "0 0 10px rgba(88, 166, 255, 0.1)",
              "0 0 0px rgba(88, 166, 255, 0)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          AI Solutions Meet
          <br />
          <span className="text-gh-text-secondary">Expert Development</span>
        </motion.h1>
      </motion.div>

      {/* Description - Wider width */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="max-w-3xl text-sm leading-relaxed text-gh-text-secondary sm:text-base md:text-lg"
      >
        Leveraging AI & machine learning to build intelligent applications.
        From custom development to AI integration, delivering solutions that drive real business value.
      </motion.p>

      {/* Tech Stack - Compact with subtle float and logos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-2 max-w-xl"
      >
        {techStack.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <motion.span
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -3, 0],
              }}
              transition={{
                opacity: { duration: 0.3, delay: 0.7 + index * 0.05 },
                scale: { duration: 0.3, delay: 0.7 + index * 0.05 },
                y: {
                  duration: 3 + index * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                },
              }}
              whileHover={{
                scale: 1.1,
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              className="group relative flex items-center gap-2 rounded-lg border border-gh-border-default bg-gh-canvas-default/50 px-3.5 py-2 text-sm font-mono text-gh-text-secondary backdrop-blur-sm transition-all cursor-pointer hover:text-gh-text-primary hover:shadow-lg"
              style={{
                willChange: "transform",
              }}
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-lg opacity-0 blur-md transition-opacity group-hover:opacity-30"
                style={{ backgroundColor: tech.color }}
              />

              {/* Icon with rotation on hover */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <Icon
                  className="h-4 w-4 relative z-10 transition-all"
                  style={{ color: tech.color }}
                />
              </motion.div>

              {/* Text with color transition */}
              <motion.span
                className="relative z-10"
                whileHover={{ color: tech.color }}
                transition={{ duration: 0.2 }}
              >
                {tech.name}
              </motion.span>
            </motion.span>
          );
        })}
      </motion.div>

      {/* CTA Buttons - Professional & Solid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="flex flex-wrap items-center justify-center gap-4 pt-2"
      >
        {/* Download Resume Button - Primary */}
        <button
          onClick={handleDownloadResume}
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg"
        >
          <Download className="h-4 w-4" />
          <span>Download Resume</span>
        </button>

        {/* Contact Button - Secondary */}
        <Link
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-lg border-2 border-gh-border-default bg-transparent px-6 py-3 text-sm font-semibold text-gh-text-primary transition-all hover:border-gh-border-emphasis hover:bg-gh-border-default/10"
        >
          <span>Get in Touch</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>

      {/* Stats - Compact with pulse animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.1 }}
        className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-gh-text-secondary"
      >
        <div className="flex items-center gap-1.5">
          <motion.div
            className="relative h-1.5 w-1.5"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="h-full w-full rounded-full bg-green-500" />
            <motion.div
              className="absolute inset-0 rounded-full bg-green-500"
              animate={{
                scale: [1, 1.8],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          </motion.div>
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
