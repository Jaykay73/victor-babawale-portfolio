import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#07111F",
          secondary: "#0D1B2A",
          elevated: "#102338",
          subtle: "#091728",
        },
        slate: {
          primary: "#F4F7FA",
          secondary: "#94A3B8",
          muted: "#64748B",
        },
        eng: {
          cyan: "#22D3EE",
          "cyan-dim": "rgba(34, 211, 238, 0.15)",
          "cyan-glow": "rgba(34, 211, 238, 0.4)",
          copper: "#D89B4A",
          "copper-dim": "rgba(216, 155, 74, 0.15)",
          "copper-glow": "rgba(216, 155, 74, 0.3)",
        },
        line: {
          DEFAULT: "#1E334A",
          dim: "rgba(30, 51, 74, 0.5)",
          bright: "#2E4D6E",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "IBM Plex Mono", "Menlo", "monospace"],
      },
      animation: {
        "pulse-subtle": "pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "signal-flow": "signalFlow 2.5s ease-in-out infinite",
        "led-blink": "ledBlink 2s step-start infinite",
      },
      keyframes: {
        pulseSubtle: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.8" },
        },
        signalFlow: {
          "0%": { strokeDashoffset: "100" },
          "100%": { strokeDashoffset: "0" },
        },
        ledBlink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, #1E334A 1px, transparent 1px), linear-gradient(to bottom, #1E334A 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
