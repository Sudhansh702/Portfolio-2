"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "relative w-14 h-8 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        theme === "dark" ? "bg-primary" : "bg-gray-300"
      )}
      aria-label="Toggle theme"
    >
      <span
        className={cn(
          "absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 flex items-center justify-center",
          theme === "dark" ? "translate-x-6" : "translate-x-0"
        )}
      >
        {theme === "dark" ? (
          <Moon className="w-4 h-4 text-primary" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500" />
        )}
      </span>
    </button>
  );
}
