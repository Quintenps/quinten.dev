"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type ThemePreference = "auto" | Theme;

const ThemeContext = createContext<{
  theme: Theme;
  preference: ThemePreference;
  setPreference: (preference: ThemePreference) => void;
}>({
  theme: "light",
  preference: "auto",
  setPreference: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference>("auto");
  const [systemTheme, setSystemTheme] = useState<Theme>("light");
  const theme = preference === "auto" ? systemTheme : preference;

  useEffect(() => {
    const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const updateSystemTheme = () => setSystemTheme(colorScheme.matches ? "dark" : "light");
    const saved = localStorage.getItem("theme");

    updateSystemTheme();
    colorScheme.addEventListener("change", updateSystemTheme);

    if (saved === "auto" || saved === "light" || saved === "dark") {
      setPreferenceState(saved);
    }

    return () => colorScheme.removeEventListener("change", updateSystemTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const setPreference = (next: ThemePreference) => {
    localStorage.setItem("theme", next);
    setPreferenceState(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, preference, setPreference }}>
      {children}
    </ThemeContext.Provider>
  );
}
