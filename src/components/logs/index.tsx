"use client";

import { TLog } from "@/utils/log";
import styles from "./logs.module.css";
import FavIcon from "@/ui/icons/fav";
import LikeIcon from "@/ui/icons/like";
import DislikeIcon from "@/ui/icons/dislike";

const Logs = ({
  logs,
  limit = 10,
  isRerender,
}: {
  logs: TLog[];
  limit?: number;
  isRerender?: boolean;
}) => {
  const limitLogs = logs.slice(0, limit);

  return (
    <>
      {logs.length > 0 ? (
        <article
          className={styles.logs}
          data-active={isRerender ? "yes" : "no"}
        >
          {limitLogs.map((log, i) => (
            <div key={`${log.time}${i}`} className={styles.log}>
              <div className={styles.leftSide}>
                <span className={styles.time}>{log.time}</span>
                <p className={styles.info}>
                  Image ID: <span>{log.image}</span>
                  {` was ${log.action}`}
                </p>
              </div>
              {log.action === "added to Favorites" ? (
                <FavIcon height={20} />
              ) : log.action === "added to Likes" ? (
                <LikeIcon height={20} className={styles.likeIcon} />
              ) : log.action === "added to Dislikes" ? (
                <DislikeIcon height={20} className={styles.dislikeIcon} />
              ) : null}
            </div>
          ))}
        </article>
      ) : null}
    </>
  );
};

export default Logs;
