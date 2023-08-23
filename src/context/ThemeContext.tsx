"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext<{
  mode: "light" | "dark";
  toggle: () => void;
}>({
  mode: "light",
  toggle: () => {},
});

type mode = "light" | "dark";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<mode>("light");

  const toggle = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
