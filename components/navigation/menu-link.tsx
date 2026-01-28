"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { linkVariants } from "@/lib/animations/menu-variants";

interface MenuLinkProps {
  href: string;
  children: string;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

/**
 * Minimal Menu Link with Subtle Hover
 */
export function MenuLink({
  href,
  children,
  index,
  isActive,
  onClick,
}: MenuLinkProps) {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Extract section ID from href (e.g., "/#services" -> "services")
    const hashIndex = href.indexOf("#");
    if (hashIndex !== -1) {
      e.preventDefault();

      const sectionId = href.substring(hashIndex + 1);
      const isHomePage = pathname === "/";

      // Close menu first
      onClick();

      // If not on home page, navigate to home with hash
      if (!isHomePage) {
        router.push(`/${href}`);
        return;
      }

      // Scroll to section after a short delay to allow menu to close (only on home page)
      setTimeout(() => {
        if (sectionId === "" || sectionId === "hero") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const element = document.getElementById(sectionId);
          if (element) {
            const offsetTop = element.offsetTop - 80; // Account for header height
            window.scrollTo({ top: offsetTop, behavior: "smooth" });
          }
        }
      }, 300);
    } else {
      // Regular link, just close menu
      onClick();
    }
  };

  return (
    <motion.div
      custom={index}
      variants={linkVariants}
      className="relative overflow-hidden"
    >
      <Link
        href={href}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative block cursor-pointer py-2 text-center"
      >
        <span
          className={`relative inline-block text-5xl font-semibold transition-colors duration-300 md:text-6xl lg:text-7xl ${
            isActive
              ? "text-gh-text-primary"
              : isHovered
                ? "text-gh-text-primary"
                : "text-gh-text-secondary"
          }`}
        >
          {children}
        </span>

        {/* Simple underline on hover or active */}
        {(isActive || isHovered) && (
          <motion.div
            layoutId={isActive ? "activeIndicator" : undefined}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="mx-auto mt-2 h-px w-16 bg-gh-border-default"
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ transformOrigin: "center" }}
          />
        )}
      </Link>
    </motion.div>
  );
}
