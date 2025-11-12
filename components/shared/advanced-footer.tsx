"use client";

import { siteConfig, socialLinks } from "@/constants";
import { Github, Linkedin, Twitter } from "lucide-react";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export function AdvancedFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gh-border-default bg-gh-canvas-default">
      <div className="container mx-auto flex h-16 items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Left: Copyright */}
        <p className="text-sm text-gh-text-secondary">
          © {currentYear} {siteConfig.author.name}
        </p>

        {/* Center: Tagline (hidden on mobile) */}
        <p className="hidden md:block text-sm text-gh-text-secondary/70">
          Building digital experiences with code
        </p>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap];
            return Icon ? (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gh-text-secondary hover:text-gh-border-emphasis transition-colors"
                aria-label={link.name}
              >
                <Icon className="h-4 w-4" />
              </a>
            ) : null;
          })}
        </div>
      </div>
    </footer>
  );
}
