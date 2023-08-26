"use client";

import styles from "./likes.module.css";
import TwoButtons from "@/components/twoButtons/page";
import Grid from "@/components/grid";
import GridImage from "@/components/gridImage";
import { fetchWithToken } from "@/utils/api";
import useSWR from "swr";
import { TVotes } from "@/types/theCatApi";

// const { CAT_API_ID, CAT_API_KAY } = process.env;

interface PagesProps {
  params: { likePages: "likes" | "dislikes" };
}

const LikesPage = ({ params }: PagesProps) => {
  const { data } = useSWR<TVotes[], Error>(
    `https://api.thecatapi.com/v1/votes?limit=20&order=DESC&sub_id=OlegTest`,
    fetchWithToken
  );
  const likedImages = data?.filter((img) => img.value > 0);
  const dislikedImages = data?.filter((img) => img.value < 0);

  return (
    <section className={styles.mainContainer}>
      <div className={styles.buttons}>
        <TwoButtons
          pageName={
            params.likePages === "likes"
              ? params.likePages
              : params.likePages === "dislikes"
              ? params.likePages
              : "Page not found"
          }
        />
      </div>
      {params.likePages === "likes" ? (
        <Grid>
          {likedImages
            ? likedImages.map((breed) => (
                <GridImage
                  key={breed.image_id}
                  breedId={breed.image_id}
                  name={breed.image_id}
                  src={breed.image.url}
                  isLink={false}
                />
              ))
            : null}
        </Grid>
      ) : null}
      {params.likePages === "dislikes" ? (
        <Grid>
          {dislikedImages
            ? dislikedImages.map((breed) => (
                <GridImage
                  key={breed.image_id}
                  breedId={breed.image_id}
                  name={breed.image_id}
                  src={breed.image.url}
                  isLink={false}
                />
              ))
            : null}
        </Grid>
      ) : null}
    </section>
  );
};

export default LikesPage;
