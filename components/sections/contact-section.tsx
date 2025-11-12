"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/ui/contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gh-canvas-default py-24 md:py-32">
      {/* Grid pattern background with wave pulse effect */}
      <div className="pointer-events-none absolute inset-0">
        {/* Animated wave pulse grid */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 166, 87, 1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 166, 87, 1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)",
          }}
          animate={{
            opacity: [0.08, 0.16, 0.08],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
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
          <h2 className="text-3xl font-bold text-gh-text-primary md:text-4xl lg:text-5xl">
            Let&apos;s Work Together
          </h2>
          <p className="text-base leading-relaxed text-gh-text-secondary sm:text-lg">
            Have a project in mind? I&apos;m always open to discussing new opportunities and creative ideas.
          </p>
        </motion.div>

        {/* Contact Form - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
