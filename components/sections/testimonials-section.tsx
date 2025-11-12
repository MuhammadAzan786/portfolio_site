"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Heading, Text } from "@/components/ui/typography";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { testimonials } from "@/lib/testimonials";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  // Responsive testimonials per view
  const [testimonialsPerView, setTestimonialsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setTestimonialsPerView(3);
      } else if (window.innerWidth >= 768) {
        setTestimonialsPerView(2);
      } else {
        setTestimonialsPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / testimonialsPerView);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
        setIsAutoPlaying(false);
      } else if (e.key === "ArrowRight") {
        nextSlide();
        setIsAutoPlaying(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Swipe handlers
  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipeThreshold = 50;

    if (info.offset.x > swipeThreshold) {
      prevSlide();
      setIsAutoPlaying(false);
    } else if (info.offset.x < -swipeThreshold) {
      nextSlide();
      setIsAutoPlaying(false);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const currentTestimonials = testimonials.slice(
    currentIndex * testimonialsPerView,
    (currentIndex + 1) * testimonialsPerView
  );

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gh-canvas-default py-24 md:py-32"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Grid pattern background with glowing effect */}
      <div className="pointer-events-none absolute inset-0">
        {/* Glowing grid lines */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(126, 231, 135, 1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(126, 231, 135, 1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)",
            filter: "drop-shadow(0 0 8px rgba(126, 231, 135, 0.6))",
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold text-gh-text-primary md:text-4xl lg:text-5xl">
            Client Testimonials
          </h2>
          <p className="text-base leading-relaxed text-gh-text-secondary sm:text-lg">
            Don&apos;t just take my word for it. Here&apos;s what clients have to say about working with me
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative mx-auto max-w-6xl">
          {/* Navigation Arrows */}
          <button
            onClick={() => {
              prevSlide();
              setIsAutoPlaying(false);
            }}
            className="absolute left-0 top-1/2 z-10 -translate-x-4 -translate-y-1/2 rounded-md border border-gh-border-default bg-gh-canvas-default/80 p-2 text-gh-text-secondary backdrop-blur-sm transition-all hover:border-gh-border-emphasis hover:text-gh-border-emphasis disabled:opacity-30 md:-translate-x-12"
            aria-label="Previous testimonial"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={() => {
              nextSlide();
              setIsAutoPlaying(false);
            }}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 rounded-md border border-gh-border-default bg-gh-canvas-default/80 p-2 text-gh-text-secondary backdrop-blur-sm transition-all hover:border-gh-border-emphasis hover:text-gh-border-emphasis disabled:opacity-30 md:translate-x-12"
            aria-label="Next testimonial"
            disabled={currentIndex === totalPages - 1}
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Testimonials Carousel */}
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className={`grid gap-8 ${
                  testimonialsPerView === 1
                    ? "grid-cols-1"
                    : testimonialsPerView === 2
                      ? "grid-cols-2"
                      : "grid-cols-3"
                }`}
              >
                {currentTestimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                    index={index}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="mt-12 flex items-center justify-center gap-3">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  goToSlide(index);
                  setIsAutoPlaying(false);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-gh-border-emphasis"
                    : "w-2 bg-gh-border-default hover:bg-gh-text-secondary"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gh-text-secondary">
              {isAutoPlaying
                ? "Auto-playing • Hover to pause"
                : "Paused • Use arrows or swipe to navigate"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
