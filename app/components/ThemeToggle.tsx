"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { preference, setPreference } = useTheme();
  const nextPreference =
    preference === "auto" ? "light" : preference === "light" ? "dark" : "auto";
  const labels = { auto: "Auto", light: "Light", dark: "Night" };
  const label = `Color theme: ${labels[preference]}. Click to switch to ${labels[nextPreference]}.`;

  return (
    <button
      type="button"
      onClick={() => setPreference(nextPreference)}
      aria-label={label}
      title={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-100 shadow-sm transition-all duration-200 hover:scale-110 hover:shadow-md hover:border-emerald-400 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-emerald-500"
    >
      {preference === "auto" ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <circle cx="6.5" cy="12" r="2.25" />
          <path d="M6.5 3.5v1.75m0 13.5v1.75M1.75 12H3.5m6 0h1.75m-7.8-6.2 1.25 1.25m3.6 7.9 1.25 1.25m-6.1 0 1.25-1.25m3.6-7.9L9.55 5.8" />
          <path d="M21 13.5A6 6 0 0 1 15 7.5a6.5 6.5 0 1 0 6 6Z" />
        </svg>
      ) : preference === "light" ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )}
    </button>
  );
}
