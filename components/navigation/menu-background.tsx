"use client";

import { motion } from "framer-motion";
import { backgroundVariants } from "@/lib/animations/menu-variants";

/**
 * Minimal background for menu overlay
 * Simple, clean, and professional with visible movement
 */
export function MenuBackground() {
  return (
    <motion.div
      variants={backgroundVariants}
      className="absolute inset-0 overflow-hidden bg-gh-canvas-default"
    >
      {/* Moving gradient orbs - clearly visible */}
      <motion.div
        className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-gh-text-secondary/15 blur-3xl"
        animate={{
          x: [0, 200, 0],
          y: [0, 150, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-gh-text-secondary/15 blur-3xl"
        animate={{
          x: [0, -200, 0],
          y: [0, -150, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gh-text-secondary/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Clearly visible grid pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #30363d 1px, transparent 1px),
            linear-gradient(to bottom, #30363d 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Animated scanlines for tech feel */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            #30363d 0px,
            transparent 1px,
            transparent 2px,
            #30363d 3px
          )`,
        }}
        animate={{
          y: [0, 3],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Lighter gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gh-canvas-default/30 via-transparent to-gh-canvas-default/30" />
    </motion.div>
  );
}
