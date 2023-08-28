"use client";

import styles from "./mobileMenu.module.css";
import IconButton from "@/ui/iconButton";
import CloseIcon from "@/ui/icons/close";
import NavigateButton from "@/ui/navigateButton";

const MobileMenu = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return isOpen ? (
    <div className={styles.container}>
      <div className={styles.menuContent}>
        <div className={styles.topButtonContainer}>
          <IconButton
            padding={15}
            borderRadius={20}
            className={styles.closeButton}
            onClick={onClose}
          >
            <CloseIcon height={30} />
          </IconButton>
        </div>
        <nav>
          <ul className={styles.nav}>
            <NavigateButton
              src="/vote-table.png"
              alt="voting"
              backgroundColor="#B4B7FF"
              name="voting"
              onClick={onClose}
            />

            <NavigateButton
              src="/pet-breeds.png"
              alt="breeds"
              backgroundColor="#97EAB9"
              name="breeds"
              onClick={onClose}
            />

            <NavigateButton
              src="/images-search.png"
              alt="gallery"
              backgroundColor="#FFD280"
              name="gallery"
              onClick={onClose}
            />
          </ul>
        </nav>
      </div>
    </div>
  ) : null;
};

export default MobileMenu;
