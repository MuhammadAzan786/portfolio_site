"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

/**
 * WhatsApp Floating Button - Modern Glassmorphism + 3D Style
 * Trendy design with floating effect and smooth interactions
 */
export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  // Replace with your actual WhatsApp number (with country code, no + or spaces)
  // Example: 923001234567 for Pakistan
  const whatsappNumber = "923001234567"; // Update this with your real number
  const message = "Hi! I found your portfolio and would like to discuss a project.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.2 }}
    >
      {/* Floating particles effect */}
      <motion.div
        className="absolute -inset-6 opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute top-0 right-0 h-2 w-2 rounded-full bg-[#25D366] blur-sm" />
        <div className="absolute bottom-0 left-0 h-1.5 w-1.5 rounded-full bg-[#25D366] blur-sm" />
        <div className="absolute top-1/2 left-0 h-1.5 w-1.5 rounded-full bg-[#25D366] blur-sm" />
      </motion.div>

      {/* Tooltip with glassmorphism */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: -8, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute bottom-1/2 right-full translate-y-1/2 mr-2 whitespace-nowrap"
          >
            <div className="relative rounded-xl bg-gradient-to-br from-white/10 to-white/5 px-3 py-2 backdrop-blur-xl border border-white/20 shadow-2xl">
              <p className="text-xs font-semibold text-white drop-shadow-lg">
                Chat Now! 💬
              </p>
              {/* Arrow */}
              <div className="absolute top-1/2 -right-0.5 h-2 w-2 -translate-y-1/2 rotate-45 border-r border-t border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button Container with 3D effect */}
      <motion.div
        className="relative"
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Glow rings */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-[#25D366] blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block overflow-hidden rounded-2xl p-[2px]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          aria-label="Contact via WhatsApp"
        >
          {/* Animated gradient border */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            animate={{
              background: [
                "linear-gradient(0deg, #25D366, #128C7E, #075E54)",
                "linear-gradient(180deg, #25D366, #128C7E, #075E54)",
                "linear-gradient(360deg, #25D366, #128C7E, #075E54)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Inner button with glassmorphism */}
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#25D366] to-[#128C7E] backdrop-blur-xl">
            {/* Glossy overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50" />

            {/* Animated shine effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
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
              <FaWhatsapp className="h-7 w-7 text-white drop-shadow-lg" />
            </motion.div>
          </div>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
