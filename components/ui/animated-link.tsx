"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "underline" | "gradient" | "glow" | "slide";
  className?: string;
  external?: boolean;
}

/**
 * Animated Link with underline effect
 */
export function AnimatedLink({
  href,
  children,
  variant = "underline",
  className = "",
  external = false,
}: AnimatedLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  const linkProps = external
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  if (variant === "underline") {
    return (
      <Link
        href={href}
        className={`group relative inline-block ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...linkProps}
      >
        <span className="relative z-10">{children}</span>
        <motion.span
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary to-secondary"
          initial={{ width: "0%" }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </Link>
    );
  }

  if (variant === "gradient") {
    return (
      <Link
        href={href}
        className={`group relative inline-block overflow-hidden ${className}`}
        {...linkProps}
      >
        <motion.span
          className="relative z-10 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.span>
        <motion.span
          className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 to-secondary/10 blur-sm"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
    );
  }

  if (variant === "glow") {
    return (
      <Link
        href={href}
        className={`group relative inline-block ${className}`}
        {...linkProps}
      >
        <motion.span
          className="relative z-10"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.span>
        <motion.span
          className="absolute inset-0 -z-10 rounded-lg bg-primary/20 blur-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
    );
  }

  if (variant === "slide") {
    return (
      <Link
        href={href}
        className={`group relative inline-block overflow-hidden ${className}`}
        {...linkProps}
      >
        <span className="relative z-10 transition-transform group-hover:translate-x-1">
          {children}
        </span>
        <motion.span
          className="absolute bottom-0 left-0 h-full w-1 bg-gradient-to-b from-primary to-secondary"
          initial={{ height: "0%" }}
          whileHover={{ height: "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </Link>
    );
  }

  return (
    <Link href={href} className={className} {...linkProps}>
      {children}
    </Link>
  );
}

/**
 * Animated button with multiple variants
 */
interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function AnimatedButton({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  type = "button",
}: AnimatedButtonProps) {
  const baseClasses =
    "relative overflow-hidden font-medium rounded-lg transition-all";

  const variantClasses = {
    primary: "bg-gradient-to-r from-primary to-secondary text-white",
    secondary: "bg-muted text-foreground hover:bg-muted/80",
    outline: "border-2 border-primary text-primary hover:bg-primary/10",
    ghost: "text-foreground hover:bg-muted",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />

      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

/**
 * Icon button with hover animations
 */
interface IconButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "bounce" | "rotate" | "pulse";
  className?: string;
  ariaLabel?: string;
}

export function AnimatedIconButton({
  children,
  onClick,
  variant = "bounce",
  className = "",
  ariaLabel,
}: IconButtonProps) {
  const animations = {
    bounce: {
      whileHover: { y: [0, -5, 0], transition: { duration: 0.5 } },
    },
    rotate: {
      whileHover: { rotate: 360, transition: { duration: 0.6 } },
    },
    pulse: {
      whileHover: { scale: [1, 1.2, 1], transition: { duration: 0.4 } },
    },
  };

  return (
    <motion.button
      onClick={onClick}
      className={`rounded-full p-3 transition-colors hover:bg-muted ${className}`}
      {...animations[variant]}
      whileTap={{ scale: 0.9 }}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  );
}

/**
 * Text reveal animation
 */
interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export function TextReveal({
  children,
  className = "",
  delay = 0,
}: TextRevealProps) {
  const words = children.split(" ");

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.1,
            ease: "easeOut",
          }}
          className="mr-[0.25em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/**
 * Character by character text animation
 */
export function CharacterReveal({
  children,
  className = "",
  delay = 0,
}: TextRevealProps) {
  const characters = children.split("");

  return (
    <span className={className}>
      {characters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: delay + i * 0.03,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}
