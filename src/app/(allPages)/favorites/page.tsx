"use client";

import styles from "./likes.module.css";
import TwoButtons from "@/components/twoButtons/page";
import Grid from "@/components/grid";
import GridImage from "@/components/gridImage";
import { fetchWithToken } from "@/utils/api";
import useSWR from "swr";
import { TFav } from "@/types/theCatApi";
import NoItemFound from "@/components/noItemFound";
import Logs from "@/components/logs";
import { useEffect, useState } from "react";
import { TLog } from "@/utils/log";

// const { CAT_API_ID, CAT_API_KAY } = process.env;

const FavoritePage = () => {
  const [logs, setLogs] = useState<TLog[]>([]);
  const [rerenderPage, setRerenderPage] = useState(false);

  const { data, mutate } = useSWR<TFav[], Error>(
    `https://api.thecatapi.com/v1/favourites?sub_id=OlegTest`,
    fetchWithToken
  );

  useEffect(() => {
    setLogs(JSON.parse(localStorage.getItem("logs") || "[]").reverse());
  }, []);

  const rerender = () => {
    setLogs(JSON.parse(localStorage.getItem("logs") || "[]").reverse());
    setRerenderPage(!rerenderPage);
    mutate();
  };

  const filteredLogs = logs?.filter(
    (log) =>
      log.action === "added to Favorites" ||
      log.action === "removed from Favorites"
  );

  return (
    <section className={styles.mainContainer} onClick={rerender}>
      <div className={styles.buttons}>
        <TwoButtons pageName={"favorite"} />
      </div>
      <Grid>
        {data
          ? data.map((image) => (
              <GridImage
                action={rerender}
                key={image.image_id}
                name={image.image_id}
                src={image.image.url}
                isLink={false}
              />
            ))
          : null}
      </Grid>
      {data && data.length < 1 ? <NoItemFound /> : null}
      <Logs logs={filteredLogs} isRerender={rerenderPage} />
    </section>
  );
};

export default FavoritePage;
