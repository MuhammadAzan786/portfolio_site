"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="flex h-full flex-col justify-center space-y-8">
      {/* Contact Info Items - Simple and minimal */}
      <div className="space-y-6">
        {/* Email */}
        <motion.a
          href="mailto:your.email@example.com"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="group flex items-start gap-4 text-left"
        >
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border border-gh-border-default bg-gh-canvas-default text-gh-text-secondary transition-colors group-hover:border-gh-border-emphasis group-hover:text-gh-border-emphasis">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-gh-text-secondary">Email</p>
            <p className="mt-0.5 text-base font-medium text-gh-text-primary transition-colors group-hover:text-gh-border-emphasis">
              your.email@example.com
            </p>
          </div>
        </motion.a>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-start gap-4"
        >
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border border-gh-border-default bg-gh-canvas-default text-gh-text-secondary">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-gh-text-secondary">Location</p>
            <p className="mt-0.5 text-base font-medium text-gh-text-primary">
              San Francisco, CA
            </p>
          </div>
        </motion.div>

        {/* Response Time */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-start gap-4"
        >
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border border-gh-border-default bg-gh-canvas-default text-gh-text-secondary">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-gh-text-secondary">Response Time</p>
            <p className="mt-0.5 text-base font-medium text-gh-text-primary">
              Within 24 hours
            </p>
          </div>
        </motion.div>
      </div>

      {/* Simple status message */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="rounded-md border border-gh-border-default bg-gh-canvas-default/50 p-4"
      >
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          <p className="text-sm text-gh-text-secondary">
            Available for new projects
          </p>
        </div>
      </motion.div>
    </div>
  );
}
