/**
 * Framer Motion Animation Variants for Minimal Menu
 * Subtle, professional animations
 */

// Overlay fade animation (simple and clean)
export const overlayVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

// Mobile overlay variants (same as desktop for consistency)
export const mobileOverlayVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

// Subtle staggered link animation
export const linkVariants = {
  closed: {
    y: 20,
    opacity: 0,
  },
  open: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2 + i * 0.05,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

// Social links animation
export const socialVariants = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// Badge animation (kept for compatibility)
export const badgeVariants = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Background fade in
export const backgroundVariants = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};
