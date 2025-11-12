"use client";

import { PremiumHeroSection } from "@/components/sections/premium-hero-section";
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
import { AboutSection } from "@/components/sections/about-section";

export default function Home() {
  return (
    <>
      {/* Structured Data for SEO */}
      <JsonLd data={generatePersonSchema()} />
      <JsonLd data={generateWebSiteSchema()} />

      <CustomCursor />
      <PremiumHeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
