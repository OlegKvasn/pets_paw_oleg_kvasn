import LikeIcon from "@/ui/icons/like";
import styles from "./votingButtons.module.css";
import DislikeIcon from "@/ui/icons/dislike";
import FavColorIcon from "@/ui/icons/favColor";
import FavIcon from "@/ui/icons/fav";
import type { MouseEventHandler } from "react";

interface IVotingButtons {
  className: string;
  onClickLike: MouseEventHandler<HTMLButtonElement>;
  onClickDislike: MouseEventHandler<HTMLButtonElement>;
  onClickFav: MouseEventHandler<HTMLButtonElement>;
  isFavActive: boolean;
}

const VotingButtons = ({
  className,
  onClickLike,
  onClickDislike,
  onClickFav,
  isFavActive,
}: IVotingButtons) => {
  return (
    <section className={`${styles.container} ${className}`}>
      <button type="button" className={styles.likeButton} onClick={onClickLike}>
        <LikeIcon className={styles.likeIcon} />
      </button>
      <button type="button" className={styles.favButton} onClick={onClickFav}>
        {isFavActive ? (
          <FavColorIcon className={styles.favIcon} />
        ) : (
          <FavIcon className={styles.favIcon} />
        )}
      </button>
      <button
        type="button"
        className={styles.dislikeButton}
        onClick={onClickDislike}
      >
        <DislikeIcon className={styles.dislikeIcon} />
      </button>
    </section>
  );
};

export default VotingButtons;
