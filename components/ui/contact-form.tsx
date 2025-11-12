"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { contactFormSchema, ContactFormData } from "@/lib/validations/contact";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Label } from "./label";

type SubmissionStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setStatus("success");
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message"
      );

      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Field */}
      <div>
        <Label htmlFor="name" className="text-gh-text-primary">
          Name <span className="text-red-500">*</span>
        </Label>
        <div className="relative mt-2">
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            {...register("name")}
            className={`w-full rounded-md border bg-gh-canvas-default px-4 py-3 text-gh-text-primary placeholder:text-gh-text-secondary focus:outline-none focus:ring-2 transition-all ${
              errors.name
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                : "border-gh-border-default focus:border-gh-border-emphasis focus:ring-gh-border-emphasis/20"
            }`}
            disabled={status === "loading"}
          />
          <AnimatePresence>
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-1.5 text-sm text-red-500"
              >
                {errors.name.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Email Field */}
      <div>
        <Label htmlFor="email" className="text-gh-text-primary">
          Email <span className="text-red-500">*</span>
        </Label>
        <div className="relative mt-2">
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register("email")}
            className={`w-full rounded-md border bg-gh-canvas-default px-4 py-3 text-gh-text-primary placeholder:text-gh-text-secondary focus:outline-none focus:ring-2 transition-all ${
              errors.email
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                : "border-gh-border-default focus:border-gh-border-emphasis focus:ring-gh-border-emphasis/20"
            }`}
            disabled={status === "loading"}
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-1.5 text-sm text-red-500"
              >
                {errors.email.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Subject Field */}
      <div>
        <Label htmlFor="subject" className="text-gh-text-primary">
          Subject <span className="text-red-500">*</span>
        </Label>
        <div className="relative mt-2">
          <Input
            id="subject"
            type="text"
            placeholder="Project Inquiry"
            {...register("subject")}
            className={`w-full rounded-md border bg-gh-canvas-default px-4 py-3 text-gh-text-primary placeholder:text-gh-text-secondary focus:outline-none focus:ring-2 transition-all ${
              errors.subject
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                : "border-gh-border-default focus:border-gh-border-emphasis focus:ring-gh-border-emphasis/20"
            }`}
            disabled={status === "loading"}
          />
          <AnimatePresence>
            {errors.subject && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-1.5 text-sm text-red-500"
              >
                {errors.subject.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Message Field */}
      <div>
        <Label htmlFor="message" className="text-gh-text-primary">
          Message <span className="text-red-500">*</span>
        </Label>
        <div className="relative mt-2">
          <Textarea
            id="message"
            rows={6}
            placeholder="Tell me about your project..."
            {...register("message")}
            className={`w-full resize-none rounded-md border bg-gh-canvas-default px-4 py-3 text-gh-text-primary placeholder:text-gh-text-secondary focus:outline-none focus:ring-2 transition-all ${
              errors.message
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                : "border-gh-border-default focus:border-gh-border-emphasis focus:ring-gh-border-emphasis/20"
            }`}
            disabled={status === "loading"}
          />
          <AnimatePresence>
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-1.5 text-sm text-red-500"
              >
                {errors.message.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-md border border-gh-border-default bg-gh-border-emphasis px-6 py-3 font-medium text-white transition-all hover:bg-gh-border-emphasis/90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "loading" ? (
          <span className="flex items-center justify-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </span>
        ) : (
          <span className="flex items-center justify-center">
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </span>
        )}
      </button>

      {/* Success/Error Messages */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="flex items-center gap-3 rounded-md border border-green-500/30 bg-green-500/10 p-4 text-green-400"
          >
            <CheckCircle className="h-5 w-5 flex-shrink-0" />
            <p className="text-sm font-medium">
              Message sent successfully! I&apos;ll get back to you soon.
            </p>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ type: "spring", stiffness: 500 }}
            className="flex items-center gap-3 rounded-md border border-red-500/30 bg-red-500/10 p-4 text-red-400"
          >
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <p className="text-sm font-medium">
              {errorMessage || "Failed to send message. Please try again."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
