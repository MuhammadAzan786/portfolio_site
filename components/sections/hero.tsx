"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/constants";
import Link from "next/link";

export function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-4">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="container mx-auto max-w-4xl text-center"
      >
        <motion.h1
          variants={fadeInUp}
          className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          Welcome to Your
          <span className="block text-primary">Portfolio</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          A modern, blazing-fast portfolio built with Next.js 14, TypeScript,
          Tailwind CSS, and shadcn/ui.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button asChild size="lg">
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
