"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { GlassCard } from "./glass-card";
import { Testimonial } from "@/lib/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export function TestimonialCard({
  testimonial,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <GlassCard className="relative h-full p-8">
        {/* Quote Icon */}
        <div className="absolute right-8 top-8 opacity-10">
          <Quote className="h-16 w-16 text-primary" />
        </div>

        {/* Rating Stars */}
        <div className="mb-6 flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2 + i * 0.1,
                type: "spring",
                stiffness: 300,
              }}
            >
              <Star
                className={`h-5 w-5 ${
                  i < testimonial.rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-muted text-muted"
                }`}
              />
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="relative z-10 mb-8 text-lg leading-relaxed text-foreground">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        {/* Client Info */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <motion.div
            className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Avatar gradient fallback */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30" />

            {/* Avatar border */}
            <div className="absolute inset-0 rounded-full ring-2 ring-primary/20" />

            {/* Avatar image (will be replaced with real images) */}
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 text-2xl font-bold text-primary">
              {testimonial.name.charAt(0)}
            </div>
          </motion.div>

          {/* Client Details */}
          <div className="flex-1">
            <h4 className="font-semibold text-foreground">
              {testimonial.name}
            </h4>
            <p className="text-sm text-muted-foreground">
              {testimonial.role} at {testimonial.company}
            </p>
            {testimonial.project && (
              <p className="mt-1 text-xs text-primary">
                Project: {testimonial.project}
              </p>
            )}
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl" />
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-secondary/10 to-transparent blur-3xl" />
      </GlassCard>
    </motion.div>
  );
}
