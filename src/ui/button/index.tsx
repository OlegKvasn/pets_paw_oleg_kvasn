import styles from "./button.module.css";

const Button = ({ children }: { children: React.ReactNode }) => {
  return <button type="button">{children}</button>;
};

export default Button;
