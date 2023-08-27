"use client";

import styles from "./mobileMenu.module.css";
import Link from "next/link";
import IconButton from "@/ui/iconButton";
import BurgerIcon from "@/ui/icons/burger";
import { useState } from "react";
import CloseIcon from "@/ui/icons/close";
import ThemeToggle from "@/ui/themeToggle";
import NavigateButton from "@/ui/navigateButton";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <IconButton
        padding={15}
        borderRadius={20}
        className={styles.burgerButton}
        onClick={() => setMenuOpen(true)}
      >
        <BurgerIcon />
      </IconButton>
      {menuOpen ? (
        <div className={styles.container}>
          <div className={styles.menuContent}>
            <div className={styles.topButtonContainer}>
              <ThemeToggle />
              <IconButton
                padding={15}
                borderRadius={20}
                className={styles.closeButton}
                onClick={() => setMenuOpen(false)}
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
                />

                <NavigateButton
                  src="/pet-breeds.png"
                  alt="breeds"
                  backgroundColor="#97EAB9"
                  name="breeds"
                />

                <NavigateButton
                  src="/images-search.png"
                  alt="gallery"
                  backgroundColor="#FFD280"
                  name="gallery"
                />
              </ul>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MobileMenu;
