"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TechIconProps {
  icon: LucideIcon;
  name: string;
  color?: string;
  delay?: number;
}

export function TechIcon({
  icon: Icon,
  name,
  color,
  delay = 0,
}: TechIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4, type: "spring", stiffness: 300 }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="group relative flex flex-col items-center gap-2"
    >
      <div
        className="glass-card flex h-16 w-16 items-center justify-center rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
        style={{ borderColor: color }}
      >
        <Icon
          className="h-8 w-8 transition-all duration-300"
          style={{ color }}
        />
      </div>

      {/* Tooltip */}
      <motion.span
        initial={{ opacity: 0, y: -5 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute -bottom-8 whitespace-nowrap rounded-md bg-popover px-2 py-1 text-xs text-popover-foreground opacity-0 shadow-md transition-opacity group-hover:opacity-100"
      >
        {name}
      </motion.span>
    </motion.div>
  );
}
