/**
 * Micro-interaction animation variants
 * Small, delightful animations for UI elements
 */

/**
 * Button hover and tap animations
 */
export const buttonHover = {
  scale: 1.05,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 10,
  },
};

export const buttonTap = {
  scale: 0.95,
};

export const buttonPress = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 17,
  },
};

/**
 * Icon animations
 */
export const iconBounce = {
  whileHover: {
    y: [0, -5, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const iconRotate = {
  whileHover: {
    rotate: 360,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export const iconShake = {
  whileHover: {
    x: [0, -5, 5, -5, 5, 0],
    transition: {
      duration: 0.5,
    },
  },
};

export const iconPulse = {
  whileHover: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

export const iconSpin = {
  animate: {
    rotate: 360,
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "linear",
  },
};

/**
 * Link underline animations
 */
export const linkUnderline = {
  rest: {
    width: "0%",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  hover: {
    width: "100%",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export const linkUnderlineCenter = {
  rest: {
    width: "0%",
    left: "50%",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  hover: {
    width: "100%",
    left: "0%",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

/**
 * Card hover effects
 */
export const cardLift = {
  whileHover: {
    y: -10,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export const cardScale = {
  whileHover: {
    scale: 1.03,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export const cardGlow = {
  whileHover: {
    boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)",
    transition: { duration: 0.3 },
  },
};

/**
 * Badge animations
 */
export const badgePop = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 15,
    },
  },
};

export const badgeWiggle = {
  whileHover: {
    rotate: [0, -5, 5, -5, 0],
    transition: { duration: 0.5 },
  },
};

/**
 * Input focus animations
 */
export const inputFocus = {
  scale: 1.02,
  borderColor: "rgb(99, 102, 241)",
  boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
  transition: { duration: 0.2 },
};

export const inputError = {
  x: [0, -10, 10, -10, 10, 0],
  transition: { duration: 0.5 },
};

/**
 * Toggle switch animations
 */
export const toggleSwitch = {
  on: {
    x: 20,
    backgroundColor: "rgb(99, 102, 241)",
    transition: {
      type: "spring",
      stiffness: 700,
      damping: 30,
    },
  },
  off: {
    x: 0,
    backgroundColor: "rgb(209, 213, 219)",
    transition: {
      type: "spring",
      stiffness: 700,
      damping: 30,
    },
  },
};

/**
 * Checkbox animations
 */
export const checkboxCheck = {
  initial: { pathLength: 0, opacity: 0 },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 0.3, bounce: 0 },
      opacity: { duration: 0.1 },
    },
  },
};

/**
 * Progress bar animations
 */
export const progressFill = (progress: number) => ({
  initial: { width: "0%" },
  animate: {
    width: `${progress}%`,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
});

/**
 * Notification animations
 */
export const notificationSlide = {
  initial: { x: 400, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    x: 400,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

/**
 * Tooltip animations
 */
export const tooltipFade = {
  initial: { opacity: 0, scale: 0.8, y: 5 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.15 },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 5,
    transition: { duration: 0.1 },
  },
};

/**
 * Ripple effect
 */
export const ripple = {
  initial: { scale: 0, opacity: 1 },
  animate: {
    scale: 2,
    opacity: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/**
 * Menu item animations
 */
export const menuItem = {
  rest: { x: 0 },
  hover: {
    x: 5,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

/**
 * Number counter animation
 */
export const counterAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

/**
 * Floating animation
 */
export const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/**
 * Glow pulse animation
 */
export const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(99, 102, 241, 0.3)",
      "0 0 40px rgba(99, 102, 241, 0.6)",
      "0 0 20px rgba(99, 102, 241, 0.3)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/**
 * Typing indicator animation
 */
export const typingDot = (delay: number) => ({
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    },
  },
});

/**
 * Star rating animation
 */
export const starFill = (delay: number) => ({
  initial: { scale: 0, rotate: -180 },
  animate: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      delay,
    },
  },
});

/**
 * Confetti animation
 */
export const confetti = {
  animate: {
    y: [0, -500],
    x: [0, Math.random() * 200 - 100],
    rotate: [0, Math.random() * 360],
    opacity: [1, 0],
    transition: {
      duration: Math.random() * 2 + 1,
      ease: "easeOut",
    },
  },
};
