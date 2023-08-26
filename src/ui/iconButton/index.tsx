import styles from "./iconButton.module.css";
import type { MouseEventHandler } from "react";

interface IIconButton {
  children: React.ReactNode;
  className?: string;
  padding?: 15 | 10;
  borderRadius?: 20 | 10;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset" | undefined;
}

const IconButton = ({
  children,
  className,
  padding = 10,
  borderRadius = 10,
  onClick,
  type = "button",
}: IIconButton) => {
  return (
    <button
      onClick={onClick}
      type={type}
      style={{ padding: `${padding}px`, borderRadius: `${borderRadius}px` }}
      className={`${styles.iconButton} ${className}`}
    >
      {children}
    </button>
  );
};

export default IconButton;
