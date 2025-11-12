"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: number; // 0-100
  delay?: number;
  color?: string;
}

export function SkillBar({ name, level, delay = 0, color }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        setWidth(level);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, level, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
          style={{
            width: `${width}%`,
            backgroundColor: color,
          }}
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{
            duration: 1.5,
            delay: delay,
            ease: "easeOut",
          }}
        />
      </div>
    </motion.div>
  );
}
