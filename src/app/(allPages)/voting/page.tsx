import styles from "./votingPage.module.css";
import TwoButtons from "@/components/twoButtons/page";
import Image from "next/image";
import VotingButtons from "@/components/votingButtons";
import Logs from "@/components/logs";

const VotingPage = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.buttons}>
        <TwoButtons pageName="Voting" />
      </div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src="/test-bengal.jpg"
          alt="test"
          fill
          priority
        ></Image>
        <VotingButtons className={styles.votingButtons} />
      </div>
      <Logs />
    </section>
  );
};

export default VotingPage;
