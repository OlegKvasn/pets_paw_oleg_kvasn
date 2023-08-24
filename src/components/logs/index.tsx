import styles from "./logs.module.css";
import FavIcon from "@/ui/icons/fav";

const Logs = () => {
  return (
    <article className={styles.logs}>
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
    </article>
  );
};

export default Logs;
