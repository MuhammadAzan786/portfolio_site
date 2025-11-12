"use client";

import { HeroBackground } from "../hero/hero-background";
import { HeroContent } from "../hero/hero-content";

/**
 * Minimal Hero Section
 * Centered typography with clean layout
 */
export function PremiumHeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gh-canvas-default"
    >
      {/* Animated background */}
      <HeroBackground />

      {/* Main content container - centered with proper top spacing for header */}
      <div className="container relative z-10 mx-auto px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <HeroContent />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gh-canvas-default to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
