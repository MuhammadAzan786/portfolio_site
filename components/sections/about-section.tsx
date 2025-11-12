"use client";

import { motion } from "framer-motion";

/**
 * Minimal About Section
 * Clean, centered layout aligned with hero theme
 */
export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gh-canvas-default py-24 md:py-32"
    >
      {/* Grid pattern background - visible in center, fades to sides */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(88, 166, 255, 0.8) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(88, 166, 255, 0.8) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)",
            opacity: 0.12,
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center space-y-8"
        >
          {/* Section Header */}
          <h2 className="text-3xl font-bold text-gh-text-primary md:text-4xl lg:text-5xl">
            About Me
          </h2>

          {/* Bio Content */}
          <div className="space-y-6 text-base leading-relaxed text-gh-text-secondary sm:text-lg">
            <p>
              I'm a passionate software engineer with a keen eye for creating elegant solutions to complex problems.
              My journey in tech has been driven by curiosity and a love for building products that make a difference.
            </p>

            <p>
              With expertise spanning full-stack development, I specialize in crafting scalable web applications
              using modern technologies. I believe in writing clean, maintainable code and creating seamless user
              experiences that leave a lasting impact.
            </p>

            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
              or sharing knowledge with the developer community. I'm always excited about the next challenge and
              opportunity to grow.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
