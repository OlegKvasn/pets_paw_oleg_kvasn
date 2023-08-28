import IconButton from "@/ui/iconButton";
import styles from "./twoButtons.module.css";
import BackIcon from "@/ui/icons/back";
import Button from "@/ui/button";
import { useRouter } from "next/navigation";

const TwoButtons = ({ pageName }: { pageName: string }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <IconButton className={styles.backButton} onClick={() => router.back()}>
        <BackIcon className={styles.icon} />
      </IconButton>
      <Button className={styles.navButton}>{pageName}</Button>
    </div>
  );
};

export default TwoButtons;
