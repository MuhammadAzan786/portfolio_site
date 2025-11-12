"use client";

import { motion } from "framer-motion";

interface HamburgerIconProps {
  isOpen: boolean;
  onClick: () => void;
}

/**
 * Premium Animated Hamburger Icon
 * Transforms between three lines and an X
 */
export function HamburgerIcon({ isOpen, onClick }: HamburgerIconProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Main menu"
      aria-expanded={isOpen}
      className="relative z-[110] flex h-12 w-12 items-center justify-center rounded-lg transition-colors hover:bg-gh-border-default/40"
    >
      <div className="relative h-7 w-7">
        {/* Top line */}
        <motion.span
          className="absolute left-0 h-[2px] w-full rounded-full bg-gh-text-primary"
          animate={
            isOpen
              ? {
                  rotate: 45,
                  y: 10,
                  backgroundColor: "#2f81f7",
                }
              : {
                  rotate: 0,
                  y: 0,
                  backgroundColor: "#e6edf3",
                }
          }
          transition={{
            duration: 0.4,
            ease: [0.76, 0, 0.24, 1],
          }}
          style={{
            top: 0,
            boxShadow: isOpen ? "0 0 10px rgba(47, 129, 247, 0.5)" : "none",
          }}
        />

        {/* Middle line */}
        <motion.span
          className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-gh-text-primary"
          animate={
            isOpen
              ? {
                  opacity: 0,
                  scaleX: 0,
                }
              : {
                  opacity: 1,
                  scaleX: 1,
                }
          }
          transition={{
            duration: 0.4,
            ease: [0.76, 0, 0.24, 1],
          }}
        />

        {/* Bottom line */}
        <motion.span
          className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-gh-text-primary"
          animate={
            isOpen
              ? {
                  rotate: -45,
                  y: -10,
                  backgroundColor: "#2f81f7",
                }
              : {
                  rotate: 0,
                  y: 0,
                  backgroundColor: "#e6edf3",
                }
          }
          transition={{
            duration: 0.4,
            ease: [0.76, 0, 0.24, 1],
          }}
          style={{
            boxShadow: isOpen ? "0 0 10px rgba(47, 129, 247, 0.5)" : "none",
          }}
        />
      </div>
    </button>
  );
}
