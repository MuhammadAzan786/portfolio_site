"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <>
      {/* Minimal sophisticated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle single gradient */}
        <motion.div
          className="absolute left-1/2 top-[40%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="h-full w-full rounded-full opacity-10 blur-[120px]"
            style={{
              background: "radial-gradient(circle, rgba(88, 166, 255, 0.3) 0%, transparent 70%)",
            }}
          />
        </motion.div>

        {/* Minimal grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(139, 148, 158, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(139, 148, 158, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Subtle scanline effect */}
        <motion.div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(88, 166, 255, 0.1) 2px, rgba(88, 166, 255, 0.1) 4px)",
          }}
          animate={{
            y: [0, 4],
          }}
          transition={{
            duration: 0.1,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-gh-canvas-default via-gh-canvas-default/80 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gh-canvas-default via-gh-canvas-default/80 to-transparent" />
      </div>
    </>
  );
}
