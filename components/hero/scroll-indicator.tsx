"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { scrollIndicatorVariant } from "@/lib/animations/hero-animations";

export function ScrollIndicator() {
  const handleScrollDown = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Fallback: scroll down by viewport height
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      variants={scrollIndicatorVariant}
      initial="hidden"
      animate="visible"
      className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
    >
      <button
        onClick={handleScrollDown}
        className="group flex flex-col items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label="Scroll to next section"
      >
        <span className="text-xs font-medium text-gh-text-secondary transition-colors duration-300 group-hover:text-gh-text-link">
          Scroll to explore
        </span>

        {/* Animated mouse icon */}
        <div className="relative flex h-7 w-5 items-start justify-center rounded-full border-2 border-gh-text-secondary p-1 transition-colors duration-300 group-hover:border-gh-text-link">
          {/* Mouse wheel */}
          <motion.div
            className="h-1.5 w-1.5 rounded-full bg-gh-text-secondary transition-colors duration-300 group-hover:bg-gh-text-link"
            variants={{
              bounce: {
                y: [0, 8, 0],
                opacity: [1, 0, 1],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              },
            }}
            animate="bounce"
          />
        </div>

        {/* Animated arrow */}
        <motion.div
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="h-4 w-4 text-gh-text-secondary transition-colors duration-300 group-hover:text-gh-text-link" />
        </motion.div>
      </button>
    </motion.div>
  );
}
