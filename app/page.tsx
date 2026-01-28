"use client";

import { useEffect } from "react";
import { PremiumHeroSection } from "@/components/sections/premium-hero-section";
import { IntroVideoSection } from "@/components/sections/intro-video-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CustomCursor } from "@/components/ui/custom-cursor";
import {
  JsonLd,
  generatePersonSchema,
  generateWebSiteSchema,
} from "@/lib/seo";
import { ExperienceSection } from "@/components/about/experience-section";

export default function Home() {
  // Handle hash navigation on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Wait for page to render
      setTimeout(() => {
        const sectionId = hash.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - 80; // Account for header height
          window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      {/* Structured Data for SEO */}
      <JsonLd data={generatePersonSchema()} />
      <JsonLd data={generateWebSiteSchema()} />

      <CustomCursor />
      <PremiumHeroSection />
      <IntroVideoSection />
      <ExperienceSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
