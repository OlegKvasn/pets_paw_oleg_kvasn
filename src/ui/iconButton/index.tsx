import styles from "./iconButton.module.css";
import type { MouseEventHandler } from "react";

interface IIconButton {
  children: React.ReactNode;
  className?: string;
  padding?: 15 | 10;
  borderRadius?: 20 | 10;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const IconButton = ({
  children,
  className,
  padding = 10,
  borderRadius = 10,
  onClick,
}: IIconButton) => {
  return (
    <button
      onClick={onClick}
      type="button"
      style={{ padding: `${padding}px`, borderRadius: `${borderRadius}px` }}
      className={`${styles.iconButton} ${className}`}
    >
      {children}
    </button>
  );
};

export default IconButton;
