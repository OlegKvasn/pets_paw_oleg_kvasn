import { Suspense } from "react";
import styles from "./allPages.module.css";
import TopNavigation from "@/components/topNavigation";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <main className={styles.main}>
        <TopNavigation />
        {children}
      </main>
    </Suspense>
  );
}
