"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Animated mesh gradient background
 * Creates a smooth, colorful gradient that moves continuously
 */
export function AnimatedMeshBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.2, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-secondary/20 blur-3xl"
        animate={{
          x: [0, -50, -100, 0],
          y: [0, 100, 50, 0],
          scale: [1, 1.1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-primary/15 blur-3xl"
        animate={{
          x: [0, -100, 0, 100, 0],
          y: [0, -50, -100, -50, 0],
          scale: [1, 1.3, 1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Radial overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_100%)]" />
    </div>
  );
}

/**
 * Subtle noise texture overlay
 * Adds grain effect for a premium look
 */
export function NoiseTexture() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-40 opacity-[0.015]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

/**
 * Floating geometric shapes
 * Animated shapes that float across the screen
 */
export function FloatingShapes() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  if (prefersReducedMotion) return null;

  const shapes = [
    {
      size: "w-32 h-32",
      color: "bg-primary/5",
      position: "top-1/4 left-10",
      duration: 25,
      path: {
        x: [0, 100, -50, 0],
        y: [0, -100, 100, 0],
        rotate: [0, 180, 360],
      },
    },
    {
      size: "w-24 h-24",
      color: "bg-secondary/5",
      position: "top-1/2 right-20",
      duration: 30,
      path: {
        x: [0, -80, 80, 0],
        y: [0, 80, -80, 0],
        rotate: [0, -180, -360],
      },
    },
    {
      size: "w-40 h-40",
      color: "bg-primary/5",
      position: "bottom-1/4 left-1/3",
      duration: 35,
      path: {
        x: [0, -100, 100, 0],
        y: [0, 100, -50, 0],
        rotate: [0, 360],
      },
    },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 -z-30 overflow-hidden">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.position} ${shape.size} ${shape.color} rounded-full blur-2xl`}
          animate={shape.path}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/**
 * Animated grid background
 * Subtle grid pattern with fade effect
 */
export function AnimatedGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-40">
      <div
        className="h-full w-full opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: "4rem 4rem",
        }}
      />
      {/* Radial fade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_100%)]" />
    </div>
  );
}

/**
 * Spotlight effect that follows scroll
 */
export function ScrollSpotlight() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 -z-20"
      style={{
        background: `radial-gradient(600px circle at center ${scrollY / 2}px, rgba(99, 102, 241, 0.05), transparent 80%)`,
      }}
    />
  );
}

/**
 * Animated gradient border effect
 * Can be used around cards and containers
 */
export function GradientBorder({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`rounded-inherit absolute inset-0 ${className}`}
      style={{
        background:
          "linear-gradient(90deg, #667eea, #764ba2, #f093fb, #667eea)",
        backgroundSize: "200% 200%",
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

/**
 * Parallax layers for depth
 */
interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxLayer({
  children,
  speed = 0.5,
  className = "",
}: ParallaxLayerProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * speed);
    };

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [speed]);

  return (
    <div
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
