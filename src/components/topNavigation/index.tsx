"use client";

import styles from "./topNavigation.module.css";
import { useState } from "react";
import ThemeToggle from "@/ui/themeToggle";
import SearchBar from "@/ui/searchBar";
import NavigateLink from "@/ui/navigateLink";
import MobileMenu from "../mobileMenu";
import IconButton from "@/ui/iconButton";
import BurgerIcon from "@/ui/icons/burger";

const TopNavigation = ({ className }: { className?: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={styles.container}>
        <IconButton
          padding={15}
          borderRadius={20}
          className={styles.burgerButton}
          onClick={() => setMenuOpen(true)}
        >
          <BurgerIcon />
        </IconButton>
        <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        <ThemeToggle className={styles.theme} />
        <SearchBar />
        <ul className={styles.nav}>
          <NavigateLink type="likes" />
          <NavigateLink type="favorites" />
          <NavigateLink type="dislikes" />
        </ul>
      </nav>
      <nav className={styles.containerMobile}>
        <div className={styles.buttonContainer}>
          <div className={styles.left}>
            <IconButton
              padding={15}
              borderRadius={20}
              className={styles.burgerButton}
              onClick={() => setMenuOpen(true)}
            >
              <BurgerIcon />
            </IconButton>
            <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
            <ThemeToggle className={styles.theme} />
          </div>
          <ul className={styles.nav}>
            <NavigateLink type="likes" />
            <NavigateLink type="favorites" />
            <NavigateLink type="dislikes" />
          </ul>
        </div>
        <SearchBar />
      </nav>
    </>
  );
};

export default TopNavigation;
