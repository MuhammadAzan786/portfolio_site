"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ScrollIndicatorProps {
  targetId?: string;
}

export function ScrollIndicator({ targetId = "about" }: ScrollIndicatorProps) {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback: scroll one viewport down
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      className="group flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      aria-label="Scroll down"
    >
      <span className="text-sm font-medium">Scroll Down</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </motion.button>
  );
}
