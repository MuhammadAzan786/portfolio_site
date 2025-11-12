"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import type { Stat } from "@/lib/data/about-data";

interface StatsCounterProps {
  stats: Stat[];
}

function Counter({ value, duration = 2 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Extract number from value (e.g., "50+" → 50)
  const numericValue = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, numericValue, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });

    return () => unsubscribe();
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export function StatsCounter({ stats }: StatsCounterProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-center justify-center rounded border border-gh-border-default bg-gh-canvas-default p-3"
        >
          <div className="flex items-center gap-1.5">
            <span className="text-2xl font-semibold text-gh-text-primary">
              <Counter value={stat.value} />
            </span>
            {stat.icon && <span className="text-lg">{stat.icon}</span>}
          </div>
          <p className="mt-1 text-center text-xs text-gh-text-secondary">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
