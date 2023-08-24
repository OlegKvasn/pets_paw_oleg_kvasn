import LikeIcon from "@/ui/icons/like";
import styles from "./votingButtons.module.css";
import DislikeIcon from "@/ui/icons/dislike";
import FavColorIcon from "@/ui/icons/favColor";
import FavIcon from "@/ui/icons/fav";

const VotingButtons = ({ className }: { className: string }) => {
  const isActive = false;
  return (
    <section className={`${styles.container} ${className}`}>
      <button type="button" className={styles.likeButton}>
        <LikeIcon className={styles.likeIcon} />
      </button>
      <button type="button" className={styles.favButton}>
        {isActive ? (
          <FavColorIcon className={styles.favIcon} />
        ) : (
          <FavIcon className={styles.favIcon} />
        )}
      </button>
      <button type="button" className={styles.dislikeButton}>
        <DislikeIcon className={styles.dislikeIcon} />
      </button>
    </section>
  );
};

export default VotingButtons;
