import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Orbitron'", "sans-serif"],
        body: ["'Outfit'", "sans-serif"]
      },
      colors: {
        space: {
          dark: "#050414",
          glow: "#1f245a",
          neon: "#4ab1ff",
          accent: "#9c6bff",
          alien: "#4cffc0"
        }
      },
      backgroundImage: {
        "starscape":
          "radial-gradient(circle at top, rgba(74,177,255,0.25), transparent 55%), radial-gradient(circle at bottom, rgba(156,107,255,0.18), transparent 60%), radial-gradient(circle at center, rgba(76,255,192,0.08), transparent 65%)"
      },
      animation: {
        "slow-spin": "slow-spin 20s linear infinite",
        "pulse-slow": "pulse-slow 8s ease-in-out infinite",
        shimmer: "shimmer 12s linear infinite",
        "float-soft": "float-soft 18s ease-in-out infinite",
        "float-bob": "float-bob 16s ease-in-out infinite",
        "fade-up": "fade-up 1.1s ease-out both",
        "fade-up-delay": "fade-up 1.1s ease-out both 0.2s",
        "scale-fade": "scale-fade 1.2s ease-out both"
      },
      keyframes: {
        "slow-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(0.98)" },
          "50%": { opacity: "1", transform: "scale(1.02)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        },
        "float-soft": {
          "0%, 100%": { transform: "translate3d(0, 0px, 0)" },
          "25%": { transform: "translate3d(12px, -18px, 0)" },
          "50%": { transform: "translate3d(-4px, -28px, 0)" },
          "75%": { transform: "translate3d(-16px, -8px, 0)" }
        },
        "float-bob": {
          "0%, 100%": { transform: "translate3d(0, 0px, 0)" },
          "50%": { transform: "translate3d(0, -35px, 0)" }
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translate3d(0, 40px, 0)" },
          "100%": { opacity: "1", transform: "translate3d(0, 0, 0)" }
        },
        "scale-fade": {
          "0%": { opacity: "0", transform: "scale(0.94)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
