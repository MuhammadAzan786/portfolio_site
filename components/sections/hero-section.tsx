"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/ui/typewriter";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { AnimatedGradientBg } from "@/components/ui/animated-gradient-bg";
import { Particles } from "@/components/ui/particles";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const greetings = ["Hi, I'm", "Hello, I'm", "Welcome, I'm", "Hey there, I'm"];

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated Background */}
      <AnimatedGradientBg />
      <Particles />

      {/* Content with parallax */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto w-full max-w-5xl text-center"
      >
        {/* Profile Image with Decorative Border */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1,
          }}
          className="relative mx-auto mb-8 h-40 w-40 md:h-48 md:w-48"
        >
          {/* Animated glow rings */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-75 blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Rotating border */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent p-1"
            animate={{ rotate: 360 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="h-full w-full rounded-full bg-background" />
          </motion.div>

          {/* Profile image */}
          <div className="absolute inset-2 overflow-hidden rounded-full">
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="object-cover"
              priority
              onError={(e) => {
                // Fallback to gradient if image doesn't exist
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                if (target.parentElement) {
                  target.parentElement.classList.add(
                    "bg-gradient-to-br",
                    "from-primary",
                    "to-secondary"
                  );
                }
              }}
            />
          </div>

          {/* Floating pulse effect */}
          <motion.div
            className="absolute -inset-4 rounded-full border-2 border-primary/30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.2, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Greeting with Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-4 text-lg font-medium text-muted-foreground md:text-xl"
        >
          <Typewriter texts={greetings} delay={3000} />
        </motion.div>

        {/* Main Heading with Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="gradient-text mb-4 font-heading text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Your Name
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground md:text-2xl"
        >
          Full Stack Developer • UI/UX Enthusiast • Creative Problem Solver
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button asChild size="lg" className="group relative overflow-hidden">
            <Link href="/projects">
              <motion.span
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="group relative overflow-hidden"
          >
            <Link href="/contact">
              <motion.span
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="mb-16 flex items-center justify-center gap-4"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-background/50 p-3 backdrop-blur-sm transition-colors hover:border-primary hover:bg-primary/10"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <ScrollIndicator targetId="about" />
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute left-10 top-1/4 h-20 w-20 rounded-full bg-primary/10 blur-2xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 h-32 w-32 rounded-full bg-secondary/10 blur-2xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
