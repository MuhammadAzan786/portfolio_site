"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { HamburgerIcon } from "./hamburger-icon";
import { MenuOverlay } from "./menu-overlay";
import { siteConfig } from "@/constants";

/**
 * Premium Minimal Header
 * Features: Logo with gradient hover, hamburger menu, hide on scroll down
 */
export function PremiumHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  // Hide header on scroll down, show on scroll up
  useEffect(() => {
    let lastScrollY = 0;

    const updateScrollDirection = (latest: number) => {
      if (latest < 80) {
        setIsHidden(false);
        return;
      }

      if (latest > lastScrollY && latest > 80) {
        setIsHidden(true);
      } else if (latest < lastScrollY) {
        setIsHidden(false);
      }

      lastScrollY = latest;
    };

    const unsubscribe = scrollY.on("change", updateScrollDirection);
    return () => unsubscribe();
  }, [scrollY]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isHidden && !isMenuOpen ? -100 : 0 }}
        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
        className="fixed left-0 right-0 top-0 z-50 border-b border-gh-border-default bg-gh-canvas-default/80 backdrop-blur-lg"
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-6 md:px-12">
          {/* Logo / Name */}
          <Link
            href="/"
            className="group relative text-xl font-bold text-gh-text-primary transition-all duration-300"
          >
            <span className="relative z-10">{siteConfig.author.name}</span>

            {/* Gradient hover effect */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-gh-text-link via-gh-text-link-hover to-purple-500 bg-clip-text text-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            >
              {siteConfig.author.name}
            </motion.span>
          </Link>

          {/* Right side: Hamburger Icon */}
          <div className="flex items-center gap-4">
            <HamburgerIcon isOpen={isMenuOpen} onClick={toggleMenu} />
          </div>
        </div>
      </motion.header>

      {/* Full-screen Menu Overlay */}
      <MenuOverlay isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
