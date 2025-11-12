"use client";

import { siteConfig, socialLinks } from "@/constants";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="w-full border-t border-gh-border-default bg-gh-canvas-default">
      <div className="container flex h-16 items-center justify-between">
        {/* Left: Copyright */}
        <p className="text-sm text-gh-text-secondary">
          © {currentYear} {siteConfig.author.name}
        </p>

        {/* Center: Links */}
        <nav className="hidden md:flex items-center gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gh-text-secondary hover:text-gh-text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

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
