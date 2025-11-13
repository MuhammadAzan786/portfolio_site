"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
  glareEffect?: boolean;
  scaleOnHover?: boolean;
}

/**
 * Card with 3D tilt effect on mouse move
 * Follows cursor position and creates depth illusion
 */
export function TiltCard({
  children,
  className = "",
  tiltAmount = 10,
  glareEffect = true,
  scaleOnHover = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for rotation
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring configuration for smooth animation
  const springConfig = { stiffness: 300, damping: 30 };
  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [tiltAmount, -tiltAmount]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-tiltAmount, tiltAmount]),
    springConfig
  );

  // Scale on hover
  const scale = useSpring(1, springConfig);

  // Glare effect position
  const glareX = useSpring(0, springConfig);
  const glareY = useSpring(0, springConfig);
  const glareOpacity = useSpring(0, springConfig);

  useEffect(() => {
    if (!ref.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate relative position (-0.5 to 0.5)
      const mouseX = (e.clientX - centerX) / (rect.width / 2);
      const mouseY = (e.clientY - centerY) / (rect.height / 2);

      x.set(mouseX);
      y.set(mouseY);

      // Glare effect
      if (glareEffect) {
        glareX.set((mouseX + 0.5) * 100);
        glareY.set((mouseY + 0.5) * 100);
        glareOpacity.set(0.3);
      }

      if (scaleOnHover) {
        scale.set(1.02);
      }
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
      scale.set(1);
      glareOpacity.set(0);
    };

    const element = ref.current;
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [x, y, scale, glareX, glareY, glareOpacity, glareEffect, scaleOnHover]);

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
    >
      {children}

      {/* Glare effect overlay */}
      {glareEffect && (
        <motion.div
          className="rounded-inherit pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${glareX.get()}% ${glareY.get()}%, rgba(255, 255, 255, 0.2), transparent 50%)`,
            opacity: glareOpacity,
          }}
        />
      )}
    </motion.div>
  );
}

/**
 * Simpler hover tilt card with fixed tilt direction
 */
interface SimpleTiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "low" | "medium" | "high";
}

export function SimpleTiltCard({
  children,
  className = "",
  intensity = "medium",
}: SimpleTiltCardProps) {
  const tiltValues = {
    low: 5,
    medium: 10,
    high: 15,
  };

  const tilt = tiltValues[intensity];

  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{
        rotateX: tilt / 2,
        rotateY: tilt,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Individual parallax layer component
 */
interface ParallaxLayerInternalProps {
  children: React.ReactNode;
  x: ReturnType<typeof useMotionValue<number>>;
  y: ReturnType<typeof useMotionValue<number>>;
  depth: number;
}

function ParallaxLayer({ children, x, y, depth }: ParallaxLayerInternalProps) {
  const translateX = useTransform(x, [-0.5, 0.5], [-depth, depth]);
  const translateY = useTransform(y, [-0.5, 0.5], [-depth, depth]);

  return (
    <motion.div
      className="absolute inset-0"
      style={{
        translateX,
        translateY,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Parallax tilt card with depth layers
 */
interface ParallaxTiltCardProps {
  children: React.ReactNode;
  layers?: React.ReactNode[];
  className?: string;
}

export function ParallaxTiltCard({
  children,
  layers = [],
  className = "",
}: ParallaxTiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Create transforms outside of map
  const rotateX = useTransform(y, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-5, 5]);

  useEffect(() => {
    if (!ref.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = (e.clientX - centerX) / (rect.width / 2);
      const mouseY = (e.clientY - centerY) / (rect.height / 2);

      x.set(mouseX);
      y.set(mouseY);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    const element = ref.current;
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [x, y]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Base layer */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </motion.div>

      {/* Parallax layers */}
      {layers.map((layer, index) => (
        <ParallaxLayer key={index} x={x} y={y} depth={(index + 1) * 20}>
          {layer}
        </ParallaxLayer>
      ))}
    </div>
  );
}

/**
 * Magnetic card that pulls toward cursor
 */
interface MagneticCardProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticCard({
  children,
  className = "",
  strength = 0.3,
}: MagneticCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 300, damping: 30 });
  const y = useSpring(0, { stiffness: 300, damping: 30 });

  useEffect(() => {
    if (!ref.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = (e.clientX - centerX) * strength;
      const distanceY = (e.clientY - centerY) * strength;

      x.set(distanceX);
      y.set(distanceY);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    const element = ref.current;
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [x, y, strength]);

  return (
    <motion.div ref={ref} className={className} style={{ x, y }}>
      {children}
    </motion.div>
  );
}
