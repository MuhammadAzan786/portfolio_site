"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa";

/**
 * Social Floating Buttons - WhatsApp & LinkedIn
 * Modern glassmorphism design with stacked layout
 */
export function SocialFloatingButtons() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  // Replace with your actual contact info
  const whatsappNumber = "923001234567"; // Update this with your real WhatsApp number
  const linkedInProfile = "https://linkedin.com/in/yourusername"; // Update with your LinkedIn profile
  const githubProfile = "https://github.com/yourusername"; // Update with your GitHub profile
  const whatsappMessage = "Hi! I found your portfolio and would like to discuss a project.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const buttons = [
    {
      id: "whatsapp",
      icon: FaWhatsapp,
      href: whatsappUrl,
      label: "Chat on WhatsApp",
      colors: {
        from: "#25D366",
        to: "#128C7E",
        dark: "#075E54",
      },
    },
    {
      id: "linkedin",
      icon: FaLinkedinIn,
      href: linkedInProfile,
      label: "Connect on LinkedIn",
      colors: {
        from: "#0A66C2",
        to: "#004182",
        dark: "#002855",
      },
    },
    {
      id: "github",
      icon: FaGithub,
      href: githubProfile,
      label: "View GitHub",
      colors: {
        from: "#24292e",
        to: "#181717",
        dark: "#0d1117",
      },
    },
  ];

  return (
    <motion.div
      className="fixed bottom-5 right-5 z-50 flex flex-col gap-2"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.2 }}
    >
      {buttons.map((button, index) => {
        const Icon = button.icon;
        const isHovered = hoveredButton === button.id;

        return (
          <div key={button.id} className="relative">
            {/* Floating particles effect */}
            <motion.div
              className="absolute -inset-4 opacity-30"
              animate={{
                scale: [1, 1.15, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.5,
              }}
            >
              <div
                className="absolute top-0 right-0 h-1.5 w-1.5 rounded-full blur-sm"
                style={{ backgroundColor: button.colors.from }}
              />
              <div
                className="absolute bottom-0 left-0 h-1 w-1 rounded-full blur-sm"
                style={{ backgroundColor: button.colors.from }}
              />
              <div
                className="absolute top-1/2 left-0 h-1 w-1 rounded-full blur-sm"
                style={{ backgroundColor: button.colors.from }}
              />
            </motion.div>

            {/* Tooltip with glassmorphism */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, x: 20, scale: 0.8 }}
                  animate={{ opacity: 1, x: -6, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute bottom-1/2 right-full translate-y-1/2 mr-1.5 whitespace-nowrap"
                >
                  <div className="relative rounded-lg bg-gradient-to-br from-white/10 to-white/5 px-2.5 py-1.5 backdrop-blur-xl border border-white/20 shadow-2xl">
                    <p className="text-[11px] font-semibold text-white drop-shadow-lg">
                      {button.label}
                    </p>
                    {/* Arrow */}
                    <div className="absolute top-1/2 -right-0.5 h-1.5 w-1.5 -translate-y-1/2 rotate-45 border-r border-t border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Button Container with 3D effect */}
            <motion.div
              className="relative"
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
            >
              {/* Glow rings */}
              <motion.div
                className="absolute inset-0 rounded-xl blur-lg"
                style={{ backgroundColor: button.colors.from }}
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.25, 0.45, 0.25],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              />

              {/* Button */}
              <motion.a
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block overflow-hidden rounded-xl p-[1.5px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setHoveredButton(button.id)}
                onHoverEnd={() => setHoveredButton(null)}
                aria-label={button.label}
              >
                {/* Animated gradient border */}
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  animate={{
                    background: [
                      `linear-gradient(0deg, ${button.colors.from}, ${button.colors.to}, ${button.colors.dark})`,
                      `linear-gradient(180deg, ${button.colors.from}, ${button.colors.to}, ${button.colors.dark})`,
                      `linear-gradient(360deg, ${button.colors.from}, ${button.colors.to}, ${button.colors.dark})`,
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Inner button with glassmorphism */}
                <div
                  className="relative flex h-12 w-12 items-center justify-center rounded-xl backdrop-blur-xl"
                  style={{
                    background: `linear-gradient(to bottom right, ${button.colors.from}, ${button.colors.to})`,
                  }}
                >
                  {/* Glossy overlay */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50" />

                  {/* Animated shine effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    animate={{
                      background: [
                        "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
                        "linear-gradient(225deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Icon */}
                  <motion.div
                    className="relative z-10"
                    animate={{
                      rotate: isHovered ? [0, -10, 10, -10, 10, 0] : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="h-6 w-6 text-white drop-shadow-lg" />
                  </motion.div>
                </div>
              </motion.a>
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}
