import styles from "./votingPage.module.css";
import TwoButtons from "@/components/twoButtons/page";
import Image from "next/image";
import FavIcon from "@/ui/icons/fav";
import VotingButtons from "@/components/votingButtons";

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

      <div className={styles.logs}>
        <div className={styles.log}>
          <div className={styles.leftSide}>
            <span className={styles.time}>22:30</span>
            <p className={styles.info}>
              Image ID: <span>HJd0XecNX</span>
              {` was added to Likes`}
            </p>
          </div>
          <FavIcon height={20} />
        </div>
        <div className={styles.log}>
          <div className={styles.leftSide}>
            <span className={styles.time}>22:30</span>
            <p className={styles.info}>
              Image ID: <span>HJd0XecNX</span>
              {` was added to Likes`}
            </p>
          </div>
          <FavIcon height={20} />
        </div>
        <div className={styles.log}>
          <div className={styles.leftSide}>
            <span className={styles.time}>22:30</span>
            <p className={styles.info}>
              Image ID: <span>HJd0XecNX</span>
              {` was added to Likes`}
            </p>
          </div>
          <FavIcon height={20} />
        </div>
        <div className={styles.log}>
          <div className={styles.leftSide}>
            <span className={styles.time}>22:30</span>
            <p className={styles.info}>
              Image ID: <span>HJd0XecNX</span>
              {` was added to Likes`}
            </p>
          </div>
          <FavIcon height={20} />
        </div>
        <div className={styles.log}>
          <div className={styles.leftSide}>
            <span className={styles.time}>22:30</span>
            <p className={styles.info}>
              Image ID: <span>HJd0XecNX</span>
              {` was added to Likes`}
            </p>
          </div>
          <FavIcon height={20} />
        </div>
      </div>
    </section>
  );
};

export default VotingPage;
