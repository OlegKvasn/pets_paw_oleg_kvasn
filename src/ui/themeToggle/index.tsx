"use client";

//import { ThemeContext } from "@/context/ThemeContext";
import styles from "./themeToggle.module.css";
import ThemeIcon from "@/ui/icons/theme";
import ThemeToggleIcon from "@/ui/icons/themeToggle";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";
const ThemeToggle = ({ className }: { className?: string }) => {
  // const { toggle, mode } = useContext(ThemeContext);
  // const [mode, setMode] = useState<mode>("light");

  // const toggle = () => {
  //   setMode((prev) => (prev === "light" ? "dark" : "light"));
  // };

  // useEffect(() => {
  //   (document.querySelector(":root") as HTMLBodyElement).dataset.theme = mode;
  // }, [mode]);

  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      (document.querySelector(":root") as HTMLBodyElement).dataset.theme =
        "dark";
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      (document.querySelector(":root") as HTMLBodyElement).dataset.theme =
        "light";
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        (document.querySelector(":root") as HTMLBodyElement).dataset.theme =
          "dark";
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      (document.querySelector(":root") as HTMLBodyElement).dataset.theme =
        "dark";
    }
  }, []);

  return (
    <section className={`${styles.mainContainer} ${className}`}>
      <div className={styles.iconContainer}>
        <ThemeIcon theme={theme} />
      </div>
      <button onClick={toggleTheme}>
        <ThemeToggleIcon theme={theme} />
      </button>
    </section>
  );
};

export default ThemeToggle;
