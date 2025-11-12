"use client";

import { motion } from "framer-motion";

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  count?: number;
}

export function FilterButton({
  label,
  isActive,
  onClick,
  count,
}: FilterButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative overflow-hidden rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
        isActive ? "text-white" : "text-muted-foreground hover:text-foreground"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Active background */}
      {isActive && (
        <motion.div
          layoutId="activeFilter"
          className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}

      {/* Inactive background */}
      {!isActive && (
        <div className="absolute inset-0 border border-border bg-background/50 backdrop-blur-sm" />
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {label}
        {count !== undefined && count > 0 && (
          <span
            className={`flex h-5 w-5 items-center justify-center rounded-full text-xs ${
              isActive ? "bg-white/20" : "bg-muted"
            }`}
          >
            {count}
          </span>
        )}
      </span>
    </motion.button>
  );
}
