import styles from "./noItem.module.css";

const NoItemFound = ({ message = "No item found" }: { message?: string }) => {
  return (
    <>
      <p className={styles.log}>{message}</p>
    </>
  );
};

export default NoItemFound;
