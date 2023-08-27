"use client";

import styles from "./likes.module.css";
import TwoButtons from "@/components/twoButtons/page";
import Grid from "@/components/grid";
import GridImage from "@/components/gridImage";
import { fetchWithToken } from "@/utils/api";
import useSWR from "swr";
import { TFav } from "@/types/theCatApi";
import NoItemFound from "@/components/noItemFound";

// const { CAT_API_ID, CAT_API_KAY } = process.env;

const FavoritePage = () => {
  const { data } = useSWR<TFav[], Error>(
    `https://api.thecatapi.com/v1/favourites?sub_id=OlegTest`,
    fetchWithToken
  );

  return (
    <section className={styles.mainContainer}>
      <div className={styles.buttons}>
        <TwoButtons pageName={"favorite"} />
      </div>
      <Grid>
        {data
          ? data.map((image) => (
              <GridImage
                key={image.image_id}
                name={image.image_id}
                src={image.image.url}
                isLink={false}
              />
            ))
          : null}
      </Grid>
      {data && data.length < 1 ? <NoItemFound /> : null}
    </section>
  );
};

export default FavoritePage;
