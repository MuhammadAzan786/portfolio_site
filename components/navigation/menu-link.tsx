"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
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

  return (
    <motion.div
      custom={index}
      variants={linkVariants}
      className="relative overflow-hidden"
    >
      <Link
        href={href}
        onClick={onClick}
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
