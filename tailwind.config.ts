import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // GitHub color scheme
        background: "#0d1117",
        foreground: "#e6edf3",

        // GitHub-specific colors
        gh: {
          "bg-dark": "#0d1117",
          "bg-light": "#161b22",
          "canvas-default": "#010409",
          "canvas-subtle": "#161b22",
          "canvas-inset": "#010409",
          "canvas-overlay": "#161b22",
          "border-default": "#30363d",
          "border-muted": "#21262d",
          "border-emphasis": "#58a6ff",
          "text-primary": "#e6edf3",
          "text-secondary": "#7d8590",
          "text-tertiary": "#8b949e",
          "text-link": "#2f81f7",
          "text-link-hover": "#58a6ff",
          "primary-blue": "#2f81f7",
          "hover-blue": "#58a6ff",
          "success-green": "#3fb950",
          "success-emphasis": "#238636",
          "danger-red": "#f85149",
          "warning-orange": "#d29922",
          "purple": "#8957e5",
          "coral": "#ff7b72",
          "btn-primary-bg": "#238636",
          "btn-primary-hover": "#2ea043",
          "btn-secondary-bg": "#21262d",
          "btn-secondary-hover": "#30363d",
        },

        // Mapped colors for compatibility
        card: {
          DEFAULT: "#161b22",
          foreground: "#e6edf3",
        },
        popover: {
          DEFAULT: "#161b22",
          foreground: "#e6edf3",
        },
        primary: {
          DEFAULT: "#2f81f7",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#21262d",
          foreground: "#e6edf3",
        },
        muted: {
          DEFAULT: "#21262d",
          foreground: "#7d8590",
        },
        accent: {
          DEFAULT: "#58a6ff",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#f85149",
          foreground: "#ffffff",
        },
        success: {
          DEFAULT: "#238636",
          foreground: "#ffffff",
        },
        warning: {
          DEFAULT: "#d29922",
          foreground: "#000000",
        },
        border: "#30363d",
        input: "#0d1117",
        ring: "#2f81f7",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
      },
      fontFamily: {
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        112: "28rem",
        128: "32rem",
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out",
        "fade-up": "fade-up 0.5s ease-in-out",
        "fade-down": "fade-down 0.5s ease-in-out",
        "slide-in-left": "slide-in-left 0.5s ease-in-out",
        "slide-in-right": "slide-in-right 0.5s ease-in-out",
        "bounce-slow": "bounce 3s infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 3s linear infinite",
        scale: "scale 0.2s ease-in-out",
        glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scale: {
          "0%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
        glow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      boxShadow: {
        // GitHub-style shadows
        "gh-sm": "0 1px 0 0 #21262d",
        "gh-md": "0 3px 6px rgba(1, 4, 9, 0.12), 0 8px 24px rgba(1, 4, 9, 0.4)",
        "gh-lg": "0 8px 24px rgba(1, 4, 9, 0.4)",
        "gh-xl": "0 12px 28px rgba(1, 4, 9, 0.5)",
        "gh-hover": "0 0 0 3px rgba(47, 129, 247, 0.3)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
