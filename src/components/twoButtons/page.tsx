import IconButton from "@/ui/iconButton";
import styles from "./twoButtons.module.css";
import BackIcon from "@/ui/icons/back";
import Button from "@/ui/button";

const TwoButtons = ({ pageName }: { pageName: string }) => {
  return (
    <>
      <IconButton className={styles.backButton}>
        <BackIcon className={styles.icon} />
      </IconButton>
      <Button className={styles.navButton}>{pageName}</Button>
    </>
  );
};

export default TwoButtons;
