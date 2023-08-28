"use client";

//import { ThemeContext } from "@/context/ThemeContext";
import styles from "./themeToggle.module.css";
import ThemeIcon from "@/ui/icons/theme";
import ThemeToggleIcon from "@/ui/icons/themeToggle";
import { useEffect, useState } from "react";

type mode = "light" | "dark";
const ThemeToggle = ({ className }: { className?: string }) => {
  // const { toggle, mode } = useContext(ThemeContext);
  const [mode, setMode] = useState<mode>("light");

  const toggle = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    (document.querySelector(":root") as HTMLBodyElement).dataset.theme = mode;
  }, [mode]);

  return (
    <section className={`${styles.mainContainer} ${className}`}>
      <div className={styles.iconContainer}>
        <ThemeIcon theme={mode} />
      </div>
      <button onClick={toggle}>
        <ThemeToggleIcon theme={mode} />
      </button>
    </section>
  );
};

export default ThemeToggle;
