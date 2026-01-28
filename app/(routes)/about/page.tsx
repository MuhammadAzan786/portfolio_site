import { Metadata } from "next";
import { ExperienceSection } from "@/components/about/experience-section";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about me and my experience",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gh-canvas-default pt-16">
      <ExperienceSection />
    </main>
  );
}
