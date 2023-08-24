import DislikeIcon from "../icons/dislike";
import FavIcon from "../icons/fav";
import LikeIcon from "../icons/like";
import styles from "./navigateLink.module.css";
import Link from "next/link";

interface INavigateLink {
  type: "likes" | "dislikes" | "favorites";
  className?: string;
}

const NavigateLink = ({ type, ...props }: INavigateLink) => {
  return (
    <li>
      <Link href={`/${type}`}>
        <button
          type="button"
          className={`${styles.button} ${props.className}`}
          {...props}
        >
          {type == "likes" ? <LikeIcon className={styles.icon} /> : null}
          {type == "dislikes" ? <DislikeIcon className={styles.icon} /> : null}
          {type == "favorites" ? <FavIcon className={styles.icon} /> : null}
        </button>
      </Link>
    </li>
  );
};

export default NavigateLink;
