"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, RotateCcw } from "lucide-react";

/**
 * Intro Video Section
 * Custom themed video player with play/pause and replay functionality
 */
export function IntroVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);

  // Auto-play when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAutoPlayed && videoRef.current) {
            videoRef.current.play();
            setHasAutoPlayed(true);
          }
        });
      },
      {
        threshold: 0.5, // Play when 50% of video is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasAutoPlayed]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
      setIsEnded(false);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setIsEnded(true);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progressPercent =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progressPercent);
    }
  };

  return (
    <section
      id="intro-video"
      className="relative overflow-hidden bg-gh-canvas-default py-24 md:py-32"
    >
      {/* Grid pattern background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(88, 166, 255, 0.8) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(88, 166, 255, 0.8) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)",
            opacity: 0.12,
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
          <h2 className="text-3xl font-bold text-gh-text-primary">
            Introduction
          </h2>
          <p className="text-gh-text-secondary">
            Watch a quick introduction to learn more about my journey and expertise
          </p>
        </motion.div>

        {/* Video Player Container */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto max-w-4xl"
        >
          <div
            className="relative rounded-xl border border-gh-border-default bg-gh-canvas-subtle/50 backdrop-blur-sm overflow-hidden shadow-2xl"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Static gradient background effects */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              {/* Blue gradient orb */}
              <div
                className="absolute -right-20 top-10 h-60 w-60 rounded-full opacity-20 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(88, 166, 255, 0.6) 0%, transparent 70%)",
                }}
              />

              {/* Purple gradient orb */}
              <div
                className="absolute -left-20 bottom-10 h-60 w-60 rounded-full opacity-20 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(210, 168, 255, 0.6) 0%, transparent 70%)",
                }}
              />
            </div>

            {/* Video Element */}
            <div className="relative aspect-video bg-gh-canvas-default">
              <video
                ref={videoRef}
                className="w-full h-full"
                muted
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleVideoEnd}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/5311287-hd_1920_1080_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play/Pause Button - Center */}
              <AnimatePresence>
                {isHovering && !isEnded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center z-20"
                  >
                    <button
                      onClick={handlePlayPause}
                      className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gh-canvas-default/70 text-white hover:bg-gh-canvas-default/80 transition-colors border-2 border-white/30 backdrop-blur-sm"
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8" strokeWidth={2.5} fill="currentColor" />
                      ) : (
                        <Play className="w-8 h-8 ml-1" strokeWidth={2.5} fill="currentColor" />
                      )}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Replay Button - Center (when video ends) */}
              <AnimatePresence>
                {isEnded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center z-20"
                  >
                    <button
                      onClick={handleReplay}
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-gh-canvas-default/70 text-white hover:bg-gh-canvas-default/80 transition-colors border-2 border-white/30 backdrop-blur-sm"
                      aria-label="Replay video"
                    >
                      <RotateCcw className="w-6 h-6" strokeWidth={2.5} />
                      <span className="font-bold text-lg">Replay</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Progress Bar - Bottom (show on hover) */}
              <AnimatePresence>
                {isHovering && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gh-canvas-default via-gh-canvas-default/80 to-transparent p-6"
                  >
                    <div className="h-1 w-full bg-gh-border-default/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 transition-all duration-200"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
