import styles from "./iconButton.module.css";

interface IIconButton {
  children: React.ReactNode;
  className?: string;
  padding?: 15 | 10;
  borderRadius?: 20 | 10;
}

const IconButton = ({
  children,
  className,
  padding = 10,
  borderRadius = 10,
}: IIconButton) => {
  return (
    <button
      type="button"
      style={{ padding: `${padding}px`, borderRadius: `${borderRadius}px` }}
      className={`${styles.iconButton} ${className}`}
    >
      {children}
    </button>
  );
};

export default IconButton;
