import { Suspense } from "react";
import styles from "./allPages.module.css";
import SearchBar from "@/ui/searchBar";
import NavigateLink from "@/ui/navigateLink";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <main className={styles.main}>
        <nav className={styles.container}>
          <SearchBar />
          <ul className={styles.nav}>
            <NavigateLink type="likes" />
            <NavigateLink type="favorites" />
            <NavigateLink type="dislikes" />
          </ul>
        </nav>
        {children}
      </main>
    </Suspense>
  );
}
