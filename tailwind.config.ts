import type { Config } from "tailwindcss";
import { getCurrentTheme } from "./lib/themes";

// Get the current theme colors
const theme = getCurrentTheme();

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
          bg: theme.light.bg,
          surface: theme.light.surface,
          textPrimary: theme.light.textPrimary,
          textSecondary: theme.light.textSecondary,
        },
        // Dark mode
        dark: {
          bg: theme.dark.bg,
          surface: theme.dark.surface,
          textPrimary: theme.dark.textPrimary,
          textSecondary: theme.dark.textSecondary,
        },
        // Accent colors
        primary: {
          light: theme.primary.light,
          DEFAULT: theme.primary.DEFAULT,
          dark: theme.primary.dark,
        },
        accent: {
          light: theme.accent.light,
          DEFAULT: theme.accent.DEFAULT,
          dark: theme.accent.dark,
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-primary": `linear-gradient(135deg, ${theme.primary.DEFAULT} 0%, ${theme.accent.DEFAULT} 100%)`,
      },
    },
  },
  plugins: [],
};

export default config;
