import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.background}></div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src="/girl-and-pet 1.png"
          alt="girl-and-pet"
          fill
          priority
        ></Image>
      </div>
    </main>
  );
}
