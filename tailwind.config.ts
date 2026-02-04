import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light mode
        light: {
          bg: "#fafaf9",
          surface: "#ffffff",
          textPrimary: "#0f172a",
          textSecondary: "#475569",
        },
        // Dark mode
        dark: {
          bg: "#0a0a0a",
          surface: "#171717",
          textPrimary: "#fafafa",
          textSecondary: "#a1a1aa",
        },
        // Accent colors
        primary: {
          light: "#14b8a6",
          DEFAULT: "#0d9488",
          dark: "#0f766e",
        },
        accent: {
          light: "#fbbf24",
          DEFAULT: "#f59e0b",
          dark: "#d97706",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #0d9488 0%, #f59e0b 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
