"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { AnimatedCounter } from "./animated-counter";

interface StatCardProps {
  icon: LucideIcon;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  delay?: number;
}

export function StatCard({
  icon: Icon,
  value,
  label,
  suffix = "",
  prefix = "",
  delay = 0,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="glass-card group relative overflow-hidden p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
    >
      {/* Background gradient on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        initial={false}
      />

      <div className="relative z-10 flex flex-col items-center gap-3 text-center">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary p-2"
        >
          <Icon className="h-6 w-6 text-white" />
        </motion.div>

        {/* Counter */}
        <div className="text-3xl font-bold">
          <AnimatedCounter
            to={value}
            suffix={suffix}
            prefix={prefix}
            duration={2000}
          />
        </div>

        {/* Label */}
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>

      {/* Decorative corner */}
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl" />
    </motion.div>
  );
}
