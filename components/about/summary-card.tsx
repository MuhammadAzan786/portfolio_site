"use client";

import { motion } from "framer-motion";
import { bio } from "@/lib/data/about-data";

export function SummaryCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-lg border border-gh-border-default bg-gh-canvas-subtle p-6"
    >
      {/* Heading - Simplified */}
      <h3 className="mb-4 text-sm font-medium text-gh-text-secondary">
        {bio.heading}
      </h3>

      {/* Bio Paragraphs - Simplified */}
      <div className="space-y-3">
        {bio.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-sm leading-relaxed text-gh-text-primary"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </motion.div>
  );
}
