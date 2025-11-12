"use client";

import { motion } from "framer-motion";
import { LucideIcon, ArrowRight, Check } from "lucide-react";
import { GlassCard, GlassCardContent } from "./glass-card";
import { Button } from "./button";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  delay?: number;
  href?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  delay = 0,
  href = "#",
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, type: "spring" }}
      whileHover={{ y: -10 }}
      className="group h-full"
    >
      <GlassCard className="relative h-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
        {/* Gradient border effect on hover */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <GlassCardContent className="relative z-10 flex h-full flex-col p-6">
          {/* Icon */}
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/50">
              <Icon className="h-8 w-8 text-white" />
            </div>
          </motion.div>

          {/* Title */}
          <h3 className="mb-3 text-2xl font-bold">{title}</h3>

          {/* Description */}
          <p className="mb-6 flex-grow text-muted-foreground">{description}</p>

          {/* Features List */}
          <ul className="mb-6 space-y-2">
            {features.map((feature, index) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.1 + index * 0.05 }}
                className="flex items-start gap-2 text-sm"
              >
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>

          {/* Learn More Button */}
          <Button
            variant="ghost"
            className="group/btn w-full justify-between"
            asChild
          >
            <a href={href}>
              <span>Learn More</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </a>
          </Button>
        </GlassCardContent>

        {/* Decorative corner gradient */}
        <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
      </GlassCard>
    </motion.div>
  );
}
