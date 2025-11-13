"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { MenuBackground } from "./menu-background";
import { MenuLink } from "./menu-link";
import {
  overlayVariants,
  mobileOverlayVariants,
  socialVariants,
} from "@/lib/animations/menu-variants";
import { siteConfig } from "@/constants";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationLinks = [
  { href: "/#hero", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

const socialLinks = [
  { href: siteConfig.links.github, icon: Github, label: "GitHub" },
  { href: siteConfig.links.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: siteConfig.links.twitter, icon: Twitter, label: "Twitter" },
  { href: siteConfig.links.email, icon: Mail, label: "Email" },
];

/**
 * Premium Full-Screen Menu Overlay
 * Features: Circle expand animation, staggered links, particle background
 */
export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const pathname = usePathname();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;

    const focusableElements = document.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleTab);
    return () => window.removeEventListener("keydown", handleTab);
  }, [isOpen]);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          variants={isMobile ? mobileOverlayVariants : overlayVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="fixed inset-0 z-[100] bg-gh-canvas-default"
          onClick={(e) => {
            // Close when clicking outside menu content
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
        >
          {/* Animated Background */}
          <MenuBackground />

          {/* Menu Content */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
            {/* Navigation Links */}
            <nav className="mb-12 space-y-4" aria-label="Main navigation">
              {navigationLinks.map((link, index) => (
                <MenuLink
                  key={link.href}
                  href={link.href}
                  index={index}
                  isActive={pathname === link.href || pathname === "/"}
                  onClick={onClose}
                >
                  {link.label}
                </MenuLink>
              ))}
            </nav>

            {/* Social Links */}
            <motion.div
              variants={socialVariants}
              className="flex items-center gap-6"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href?.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href?.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={social.label}
                    className="text-gh-text-secondary transition-colors hover:text-gh-text-primary"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </motion.div>
          </div>

          {/* Close hint text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-gh-text-secondary"
          >
            Press <kbd className="rounded border border-gh-border-default px-2 py-1">ESC</kbd> to
            close
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
