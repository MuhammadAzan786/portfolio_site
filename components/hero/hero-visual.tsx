"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  visualContainerVariant,
  profileImageVariant,
  floatingShapeVariant,
  statusBadgeVariant,
  statusDotVariant,
} from "@/lib/animations/hero-animations";

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animation for smooth movement
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 100,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 100,
    damping: 15,
  });

  // Handle mouse move for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate normalized position (-0.5 to 0.5)
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={containerRef}
      variants={visualContainerVariant}
      initial="hidden"
      animate="visible"
      className="relative flex h-full items-center justify-center"
      style={{
        perspective: "1000px",
      }}
    >
      {/* Main profile container with 3D effect */}
      <motion.div
        className="relative"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Floating decorative shapes */}
        <motion.div
          className="absolute -left-20 -top-20 h-40 w-40 rounded-full border-2 border-gh-text-link/20"
          variants={floatingShapeVariant(0, 20)}
          initial="initial"
          animate="animate"
          style={{ transform: "translateZ(50px)" }}
        />

        <motion.div
          className="absolute -bottom-16 -right-16 h-32 w-32 rounded-lg border-2 border-gh-btn-primary-bg/20"
          variants={floatingShapeVariant(0.5, 25)}
          initial="initial"
          animate="animate"
          style={{ transform: "translateZ(30px)" }}
        />

        <motion.div
          className="absolute right-20 top-10 h-24 w-24 rounded-full border-2 border-purple-500/20"
          variants={floatingShapeVariant(1, 30)}
          initial="initial"
          animate="animate"
          style={{ transform: "translateZ(20px)" }}
        />

        {/* Glow effect layers */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-gh-text-link/20 via-transparent to-gh-btn-primary-bg/20 opacity-0 blur-3xl"
          animate={{
            opacity: isHovered ? 0.6 : 0,
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Profile image container with glassmorphism */}
        <motion.div
          variants={profileImageVariant}
          whileHover="hover"
          className="relative"
        >
          {/* Creative border with gradient */}
          <div className="relative h-80 w-80 md:h-96 md:w-96 lg:h-[28rem] lg:w-[28rem]">
            {/* Animated gradient border */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-gh-text-link via-purple-500 to-gh-btn-primary-bg p-1"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="h-full w-full rounded-full bg-gh-canvas-default" />
            </motion.div>

            {/* Profile image */}
            <div className="absolute inset-2 overflow-hidden rounded-full border-4 border-gh-bg-light bg-gradient-to-br from-gh-bg-light to-gh-canvas-default">
              {/* Placeholder for profile image */}
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gh-text-link/10 to-gh-btn-primary-bg/10">
                <span className="text-9xl font-bold text-gh-text-secondary/20">
                  {/* Replace with actual image */}
                  ?
                </span>
              </div>

              {/* Optional: Uncomment when you have a profile image */}
              {/* <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              /> */}

              {/* Overlay gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-gh-text-link/20 to-transparent"
                animate={{
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Floating particles around profile */}
            {[...Array(8)].map((_, i) => {
              const angle = (i * 360) / 8;
              const distance = 180;
              const x = Math.cos((angle * Math.PI) / 180) * distance;
              const y = Math.sin((angle * Math.PI) / 180) * distance;

              return (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-gh-text-link"
                  style={{
                    x,
                    y,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                />
              );
            })}
          </div>

          {/* Status badge */}
          <motion.div
            variants={statusBadgeVariant}
            className="absolute bottom-8 right-8 flex items-center gap-2 rounded-full border border-gh-border-default bg-gh-bg-light/90 px-4 py-2 shadow-gh-lg backdrop-blur-md"
          >
            <motion.div
              variants={statusDotVariant}
              animate="animate"
              className="h-2.5 w-2.5 rounded-full bg-gh-btn-primary-bg"
            />
            <span className="text-sm font-medium text-gh-text-primary">
              Available for work
            </span>
          </motion.div>
        </motion.div>

        {/* Decorative geometric elements */}
        <motion.div
          className="absolute -right-12 top-1/4 h-20 w-20"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transform: "translateZ(40px)" }}
        >
          <svg
            viewBox="0 0 100 100"
            className="h-full w-full text-gh-text-link/20"
          >
            <polygon
              points="50,10 90,30 90,70 50,90 10,70 10,30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute -left-16 bottom-1/4 h-16 w-16"
          animate={{
            rotate: [360, 270, 180, 90, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transform: "translateZ(25px)" }}
        >
          <svg
            viewBox="0 0 100 100"
            className="h-full w-full text-gh-btn-primary-bg/20"
          >
            <rect
              x="10"
              y="10"
              width="80"
              height="80"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              transform="rotate(45 50 50)"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Connection lines to particles (SVG) */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
        style={{ zIndex: -1 }}
      >
        <motion.line
          x1="50%"
          y1="50%"
          x2="20%"
          y2="20%"
          stroke="url(#gradient1)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.line
          x1="50%"
          y1="50%"
          x2="80%"
          y2="30%"
          stroke="url(#gradient2)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2f81f7" />
            <stop offset="100%" stopColor="#238636" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#238636" />
            <stop offset="100%" stopColor="#8957e5" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
