/**
 * Hero Section Animation Variants
 * Premium animations for the hero section with Framer Motion
 */

import { Variants } from "framer-motion";

/**
 * Container animations with stagger
 */
export const heroContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/**
 * Greeting text animation (fade in from left)
 */
export const greetingVariant: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/**
 * Name/heading animation with gradient shimmer
 */
export const nameVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/**
 * Role text animation (fade in with slight scale)
 */
export const roleVariant: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/**
 * Description text animation (fade up)
 */
export const descriptionVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

/**
 * Button container stagger
 */
export const buttonContainerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

/**
 * Individual button animation
 */
export const buttonVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/**
 * Tech stack icons animation
 */
export const techStackVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.4,
    },
  },
};

/**
 * Individual tech icon animation (floating effect)
 */
export const techIconVariant: Variants = {
  hidden: { opacity: 0, scale: 0, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
  hover: {
    scale: 1.15,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/**
 * Social links animation
 */
export const socialLinksVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

/**
 * Individual social link animation
 */
export const socialLinkVariant: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

/**
 * Right side visual animations
 */
export const visualContainerVariant: Variants = {
  hidden: { opacity: 0, scale: 0.8, x: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      delay: 0.3,
    },
  },
};

/**
 * Profile image animation
 */
export const profileImageVariant: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

/**
 * Floating decorative elements
 */
export const floatingShapeVariant = (delay: number, duration: number): Variants => ({
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: [0.1, 0.3, 0.1],
    scale: [0.8, 1.2, 0.8],
    rotate: [0, 180, 360],
    transition: {
      opacity: {
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      },
      scale: {
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      },
      rotate: {
        duration: duration * 2,
        repeat: Infinity,
        ease: "linear",
      },
      delay,
    },
  },
});

/**
 * Status badge animation (pulse effect)
 */
export const statusBadgeVariant: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.8,
    },
  },
};

/**
 * Pulse animation for status dot
 */
export const statusDotVariant: Variants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/**
 * Scroll indicator animation
 */
export const scrollIndicatorVariant: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 1,
      ease: "easeOut",
    },
  },
  bounce: {
    y: [0, 10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/**
 * Magnetic button utilities
 */
export const magneticConfig = {
  strength: 0.3, // How much the button moves toward cursor
  radius: 100, // Distance at which magnetic effect starts
  restSpeed: 0.15, // Speed of return animation
};

/**
 * Calculate magnetic offset based on cursor position
 */
export function calculateMagneticOffset(
  elementRect: DOMRect,
  mouseX: number,
  mouseY: number,
  strength: number = magneticConfig.strength
): { x: number; y: number } {
  const elementCenterX = elementRect.left + elementRect.width / 2;
  const elementCenterY = elementRect.top + elementRect.height / 2;

  const deltaX = mouseX - elementCenterX;
  const deltaY = mouseY - elementCenterY;

  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  if (distance > magneticConfig.radius) {
    return { x: 0, y: 0 };
  }

  const factor = (1 - distance / magneticConfig.radius) * strength;

  return {
    x: deltaX * factor,
    y: deltaY * factor,
  };
}

/**
 * Gradient shimmer animation for text
 */
export const shimmerVariant: Variants = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

/**
 * Particle connection line animation
 */
export const particleLineVariant: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 0.3,
    transition: {
      pathLength: { duration: 0.5, ease: "easeInOut" },
      opacity: { duration: 0.3 },
    },
  },
};

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Get safe animation config based on user preferences
 */
export function getSafeAnimationConfig<T extends Variants>(
  variants: T,
  reduceMotion = prefersReducedMotion()
): T {
  if (reduceMotion) {
    return {
      hidden: {},
      visible: {},
    } as unknown as T;
  }
  return variants;
}
