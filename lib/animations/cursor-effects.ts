/**
 * Enhanced cursor effect utilities
 * Different cursor states and interactions
 */

/**
 * Cursor state types
 */
export type CursorState =
  | "default"
  | "hover"
  | "click"
  | "drag"
  | "text"
  | "loading";

/**
 * Cursor variants for different states
 */
export const cursorVariants = {
  default: {
    scale: 1,
    opacity: 1,
    mixBlendMode: "difference" as const,
  },
  hover: {
    scale: 1.5,
    opacity: 0.8,
    mixBlendMode: "difference" as const,
  },
  click: {
    scale: 0.8,
    opacity: 1,
    mixBlendMode: "difference" as const,
  },
  drag: {
    scale: 1.2,
    opacity: 0.6,
    mixBlendMode: "difference" as const,
  },
  text: {
    scale: 0.5,
    opacity: 1,
    mixBlendMode: "difference" as const,
  },
  loading: {
    scale: 1.2,
    opacity: 0.8,
    mixBlendMode: "difference" as const,
    rotate: 360,
  },
};

/**
 * Outer ring variants
 */
export const ringVariants = {
  default: {
    scale: 1,
    opacity: 0.5,
  },
  hover: {
    scale: 1.8,
    opacity: 0.3,
  },
  click: {
    scale: 0.5,
    opacity: 0.8,
  },
  drag: {
    scale: 1.5,
    opacity: 0.4,
  },
  text: {
    scale: 2,
    opacity: 0.2,
  },
  loading: {
    scale: 1.5,
    opacity: 0.6,
  },
};

/**
 * Get cursor state based on element
 */
export function getCursorState(element: HTMLElement | null): CursorState {
  if (!element) return "default";

  // Check for loading state
  if (
    element.getAttribute("aria-busy") === "true" ||
    element.classList.contains("loading")
  ) {
    return "loading";
  }

  // Check for text input
  if (
    element.tagName === "INPUT" ||
    element.tagName === "TEXTAREA" ||
    element.contentEditable === "true"
  ) {
    return "text";
  }

  // Check for draggable elements
  if (element.draggable || element.classList.contains("draggable")) {
    return "drag";
  }

  // Check for interactive elements
  if (
    element.tagName === "A" ||
    element.tagName === "BUTTON" ||
    element.closest("a") ||
    element.closest("button") ||
    element.onclick ||
    element.classList.contains("clickable")
  ) {
    return "hover";
  }

  return "default";
}

/**
 * Magnetic cursor effect - elements attract cursor
 */
export function getMagneticOffset(
  cursorX: number,
  cursorY: number,
  elementRect: DOMRect,
  strength: number = 0.3
): { x: number; y: number } {
  const elementCenterX = elementRect.left + elementRect.width / 2;
  const elementCenterY = elementRect.top + elementRect.height / 2;

  const distanceX = elementCenterX - cursorX;
  const distanceY = elementCenterY - cursorY;

  const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
  const maxDistance = Math.max(elementRect.width, elementRect.height);

  // Only apply magnetic effect within range
  if (distance < maxDistance) {
    return {
      x: distanceX * strength,
      y: distanceY * strength,
    };
  }

  return { x: 0, y: 0 };
}

/**
 * Cursor trail effect data structure
 */
export interface CursorTrailPoint {
  x: number;
  y: number;
  timestamp: number;
}

/**
 * Calculate cursor trail positions
 */
export function getCursorTrail(
  points: CursorTrailPoint[],
  maxLength: number = 10,
  currentX: number,
  currentY: number
): CursorTrailPoint[] {
  const newPoint: CursorTrailPoint = {
    x: currentX,
    y: currentY,
    timestamp: Date.now(),
  };

  const updatedPoints = [newPoint, ...points];

  // Remove old points
  return updatedPoints
    .filter((point) => Date.now() - point.timestamp < 1000)
    .slice(0, maxLength);
}

/**
 * Cursor ripple effect on click
 */
export const rippleAnimation = {
  initial: {
    scale: 0,
    opacity: 1,
  },
  animate: {
    scale: 3,
    opacity: 0,
  },
  transition: {
    duration: 0.6,
    ease: "easeOut",
  },
};

/**
 * Cursor glow effect
 */
export const cursorGlow = {
  initial: {
    boxShadow: "0 0 0px rgba(99, 102, 241, 0)",
  },
  animate: {
    boxShadow: "0 0 20px rgba(99, 102, 241, 0.6)",
  },
  transition: {
    duration: 0.3,
  },
};

/**
 * Check if device supports hover
 */
export function supportsHover(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

/**
 * Check if reduced motion is preferred
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
