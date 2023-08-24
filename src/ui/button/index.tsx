import styles from "./button.module.css";

interface IButton {
  children: React.ReactNode;
  className?: string;
  borderRadius?: 20 | 10;
}

const Button = ({ children, className, borderRadius = 10 }: IButton) => {
  return (
    <button
      type="button"
      style={{ borderRadius: `${borderRadius}px` }}
      className={`${styles.button} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
