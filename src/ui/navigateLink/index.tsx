"use client";

import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  const isActive = pathname === `/${type}`;
  return (
    <li>
      <Link href={`/${type}`}>
        <button
          type="button"
          className={`${styles.button} ${props.className}`}
          data-active={isActive}
          {...props}
        >
          {type == "likes" ? (
            <LikeIcon className={styles.icon} data-active={isActive} />
          ) : null}
          {type == "dislikes" ? (
            <DislikeIcon className={styles.icon} data-active={isActive} />
          ) : null}
          {type == "favorites" ? (
            <FavIcon className={styles.icon} data-active={isActive} />
          ) : null}
        </button>
      </Link>
    </li>
  );
};

export default NavigateLink;
