import Link from "next/link";
import styles from "./navbar.module.css";
import LogoIcon from "@/ui/icons/logo";
import PetsPawIcon from "@/ui/icons/petsPaw";
import ThemeToggle from "@/ui/themeToggle";
import NavigateButton from "@/ui/navigateButton";

const Navigation = () => {
  return (
    <header className={styles.header}>
      <section className={styles.mainContainer}>
        <div className={styles.top}>
          <Link className={styles.logo} href="/">
            <LogoIcon />
            <PetsPawIcon />
          </Link>
          <ThemeToggle />
        </div>
        <article className={styles.article}>
          <h1>Hi!👋</h1>
          <p>Welcome to MacPaw Bootcamp 2023</p>
        </article>
        <p>Lets start using The Cat API</p>
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
      </section>
    </header>
  );
};

export default Navigation;
