"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HamburgerIcon } from "./hamburger-icon";
import { MenuOverlay } from "./menu-overlay";
import { siteConfig, navItems } from "@/constants";

/**
 * Professional Clean Header
 * Features: Clean navigation, responsive design
 */
export function PremiumHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const router = useRouter();

  // Add subtle shadow on scroll
  useEffect(() => {
    const updateScroll = (latest: number) => {
      setIsScrolled(latest > 20);
    };

    const unsubscribe = scrollY.on("change", updateScroll);
    return () => unsubscribe();
  }, [scrollY]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a section link (starts with #)
    if (href.startsWith("#")) {
      e.preventDefault();

      // Check if we're on the home page
      const isHomePage = pathname === "/";

      // Scroll to top for home
      if (href === "#") {
        if (isHomePage) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          router.push("/");
        }
        return;
      }

      // If not on home page, navigate to home with hash
      if (!isHomePage) {
        router.push(`/${href}`);
        return;
      }

      // Scroll to section (only on home page)
      const sectionId = href.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80; // Account for header height
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        className={`fixed left-0 right-0 top-0 z-50 bg-gh-canvas-default/95 backdrop-blur-md transition-all duration-300 ${
          isScrolled ? "border-b border-gh-border-default shadow-sm" : ""
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left side: Name */}
          <Link href="/" className="group">
            <span className="text-lg font-semibold text-gh-text-primary transition-colors group-hover:text-blue-600">
              {siteConfig.author.name}
            </span>
          </Link>

          {/* Right side: Desktop Navigation + Mobile Menu */}
          <div className="flex items-center gap-6">
            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-3 py-2 text-sm font-medium text-gh-text-secondary transition-colors hover:text-gh-text-primary hover:bg-gh-canvas-subtle rounded-md"
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            {/* Mobile Hamburger - Shown on mobile */}
            <div className="md:hidden">
              <HamburgerIcon isOpen={isMenuOpen} onClick={toggleMenu} />
            </div>
          </div>
        </div>
      </motion.header>

      {/* Full-screen Menu Overlay - Mobile only */}
      <MenuOverlay isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
