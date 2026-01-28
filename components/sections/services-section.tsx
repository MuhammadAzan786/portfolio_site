"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Code2,
  Brain,
  ChevronRight,
  X,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Building intelligent solutions with cutting-edge AI and machine learning technologies for automated, data-driven applications.",
    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "OpenAI API",
      "LangChain",
      "NLP",
      "Computer Vision",
      "ML Model Training",
    ],
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building modern, responsive web applications with cutting-edge technologies and best practices.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "PostgreSQL",
      "AWS",
      "REST APIs",
    ],
  },
];

/**
 * Minimal Services Section
 * Clean, centered layout aligned with hero theme
 */
export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gh-canvas-default py-24 md:py-32"
    >
      {/* Grid pattern background - visible in center, fades to sides */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(210, 168, 255, 0.8) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(210, 168, 255, 0.8) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)",
            opacity: 0.12,
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold text-gh-text-primary">
            Services & Expertise
          </h2>
          <p className="text-gh-text-secondary">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </motion.div>

        {/* Services Grid - Simple cards */}
        <div className="mx-auto max-w-4xl grid gap-8 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 text-center space-y-4"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gh-border-default/20 text-gh-text-secondary transition-colors group-hover:bg-gh-border-emphasis/20 group-hover:text-gh-border-emphasis">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gh-text-primary">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gh-text-secondary">
                  {service.description}
                </p>

                {/* View Skills Button - Shows on hover */}
                <button
                  className="absolute top-4 right-4 p-1.5 rounded-md border border-gh-border-default/40 bg-gh-canvas-default/80 text-gh-text-secondary hover:border-gh-border-emphasis hover:text-gh-border-emphasis opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
                  onClick={() => setSelectedService(index)}
                  aria-label={`View ${service.title} skills`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Skills Panel - Slides in from right */}
      <AnimatePresence>
        {selectedService !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setSelectedService(null)}
            />

            {/* Skills Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-96 border-l border-gh-border-default shadow-2xl z-50 overflow-y-auto"
              style={{
                background: "linear-gradient(135deg, #0d1117 0%, #010409 100%)",
              }}
            >
              {/* Animated gradient orb background effects */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {/* Purple gradient orb */}
                <motion.div
                  className="absolute -right-20 top-20 h-60 w-60 rounded-full opacity-20 blur-3xl"
                  style={{
                    background: "radial-gradient(circle, rgba(210, 168, 255, 0.6) 0%, transparent 70%)",
                  }}
                  animate={{
                    y: [0, 30, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Blue gradient orb */}
                <motion.div
                  className="absolute -right-10 bottom-40 h-48 w-48 rounded-full opacity-20 blur-3xl"
                  style={{
                    background: "radial-gradient(circle, rgba(88, 166, 255, 0.6) 0%, transparent 70%)",
                  }}
                  animate={{
                    y: [0, -25, 0],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />

                {/* Subtle grid pattern */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(88, 166, 255, 0.05) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(88, 166, 255, 0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>

              {/* Panel Header */}
              <div className="sticky top-0 border-b border-gh-border-default p-6 flex items-center justify-between backdrop-blur-md bg-gh-canvas-default/30 z-10">
                <div className="flex items-center gap-3">
                  {(() => {
                    const ServiceIcon = services[selectedService].icon;
                    return <ServiceIcon className="w-6 h-6 text-gh-border-emphasis" />;
                  })()}
                  <h3 className="text-xl font-bold text-gh-text-primary">
                    {services[selectedService].title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 rounded-lg hover:bg-gh-border-default/20 text-gh-text-secondary hover:text-gh-text-primary transition-colors"
                  aria-label="Close panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Skills Grid */}
              <div className="relative p-6 space-y-4 z-10">
                <h4 className="text-sm font-semibold text-gh-text-secondary uppercase tracking-wider">
                  Skills & Technologies
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {services[selectedService].skills.map((skill, idx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="px-4 py-3 rounded-lg bg-gh-border-default/10 border border-gh-border-default/20 text-center text-sm font-medium text-gh-text-primary hover:border-gh-border-emphasis/40 hover:bg-gh-border-emphasis/10 transition-colors backdrop-blur-sm"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
