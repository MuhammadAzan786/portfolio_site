"use client";

import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
}

/**
 * Minimal Button Component
 * Clean, simple design with subtle hover effects
 */
export function MagneticButton({
  children,
  className,
  variant = "primary",
  href,
  onClick,
  icon,
}: MagneticButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-medium transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gh-border-default",
    className
  );

  const variantClasses = {
    primary: cn(
      "bg-gh-text-primary text-gh-canvas-default border border-gh-text-primary",
      "hover:bg-transparent hover:text-gh-text-primary"
    ),
    secondary: cn(
      "border border-gh-border-default bg-transparent text-gh-text-secondary",
      "hover:border-gh-text-primary hover:text-gh-text-primary"
    ),
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(baseClasses, variantClasses[variant])}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <span className="flex items-center gap-2">
        {children}
        {icon && (
          <motion.span
            className="inline-block"
            animate={{ x: isHovered ? 3 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.span>
        )}
      </span>
    </Component>
  );
}
