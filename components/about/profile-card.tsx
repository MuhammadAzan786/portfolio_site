"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { StatsCounter } from "./stats-counter";
import { stats, availability } from "@/lib/data/about-data";
import { siteConfig } from "@/constants";

export function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex h-full flex-col gap-6"
    >
      {/* Main Profile Card - Simplified */}
      <div className="rounded-lg border border-gh-border-default bg-gh-canvas-subtle p-6">
        {/* Profile Image - Simplified */}
        <div className="flex flex-col items-center">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border border-gh-border-default bg-gh-canvas-inset">
            {/* Placeholder - replace with actual image */}
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-5xl font-bold text-gh-text-secondary/40">
                MA
              </span>
            </div>

            {/* Optional: Uncomment when you have a profile image */}
            {/* <Image
              src="/profile.jpg"
              alt="Muhammad Azan - Software Engineer"
              fill
              className="object-cover"
              priority
            /> */}
          </div>

          {/* Name and Role */}
          <div className="mt-4 text-center">
            <h3 className="text-xl font-semibold text-gh-text-primary">
              {siteConfig.author.name}
            </h3>
            <p className="mt-1 text-sm text-gh-text-secondary">
              Software Engineer
            </p>
          </div>

          {/* Availability Badge - Simplified */}
          <div className="mt-3 flex items-center gap-2 rounded-md border border-gh-border-default bg-gh-canvas-default px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-gh-success-emphasis" />
            <span className="text-xs text-gh-text-secondary">
              {availability.text}
            </span>
          </div>

          {/* Download CV Button - Simplified */}
          <a
            href="/cv.pdf"
            download
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-md border border-gh-border-default bg-transparent px-4 py-2 text-sm font-medium text-gh-text-primary transition-colors hover:bg-gh-canvas-subtle"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </div>
      </div>

      {/* Stats Card - Simplified */}
      <div className="rounded-lg border border-gh-border-default bg-gh-canvas-subtle p-6">
        <StatsCounter stats={stats} />
      </div>
    </motion.div>
  );
}
