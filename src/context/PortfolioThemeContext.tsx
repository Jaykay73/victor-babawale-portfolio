"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type PortfolioMode = "embedded" | "leadership";

interface PortfolioThemeContextType {
  mode: PortfolioMode;
  setMode: (mode: PortfolioMode) => void;
  toggleMode: () => void;
  hasSelectedPath: boolean;
  setHasSelectedPath: (selected: boolean) => void;
}

const PortfolioThemeContext = createContext<PortfolioThemeContextType | undefined>(undefined);

export function PortfolioThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<PortfolioMode>("embedded");
  const [hasSelectedPath, setHasSelectedPath] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const viewParam = params.get("view");
      if (viewParam === "leadership" || viewParam === "embedded") {
        setModeState(viewParam);
        setHasSelectedPath(true);
      }
    }
  }, []);
  const setMode = (newMode: PortfolioMode) => {
    setModeState(newMode);
    setHasSelectedPath(true);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("view", newMode);
      window.history.replaceState({}, "", url.toString());
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const toggleMode = () => {
    const nextMode = mode === "embedded" ? "leadership" : "embedded";
    setMode(nextMode);
  };
  return (
    <PortfolioThemeContext.Provider
      value={{
        mode,
        setMode,
        toggleMode,
        hasSelectedPath,
        setHasSelectedPath,
      }}
    >
      {children}
    </PortfolioThemeContext.Provider>
  );
}
export function usePortfolioTheme() {
  const context = useContext(PortfolioThemeContext);
  if (!context) {
    throw new Error("usePortfolioTheme must be used within a PortfolioThemeProvider");
  }
  return context;
}
