"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <>
      {/* Professional animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient orb - Blue */}
        <motion.div
          className="absolute left-[30%] top-[30%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="h-full w-full rounded-full opacity-[0.15] blur-[100px]"
            style={{
              background: "radial-gradient(circle, rgba(88, 166, 255, 0.4) 0%, transparent 70%)",
            }}
          />
        </motion.div>

        {/* Secondary gradient orb - Purple */}
        <motion.div
          className="absolute right-[20%] top-[60%] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2"
          animate={{
            x: [0, -40, 0],
            y: [0, -25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <div
            className="h-full w-full rounded-full opacity-[0.12] blur-[90px]"
            style={{
              background: "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)",
            }}
          />
        </motion.div>

        {/* Tertiary gradient orb - Cyan */}
        <motion.div
          className="absolute left-[60%] bottom-[20%] h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2"
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        >
          <div
            className="h-full w-full rounded-full opacity-[0.1] blur-[80px]"
            style={{
              background: "radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, transparent 70%)",
            }}
          />
        </motion.div>

        {/* Animated grid pattern */}
        <motion.div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(139, 148, 158, 0.4) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(139, 148, 158, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "80px 80px"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-blue-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Diagonal light sweep */}
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            background:
              "linear-gradient(135deg, transparent 0%, rgba(88, 166, 255, 0.2) 45%, rgba(88, 166, 255, 0.3) 50%, rgba(88, 166, 255, 0.2) 55%, transparent 100%)",
          }}
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 15,
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
