"use client";

import styles from "./likes.module.css";
import TwoButtons from "@/components/twoButtons/page";
import Grid from "@/components/grid";
import GridImage from "@/components/gridImage";
import { fetchWithToken } from "@/utils/api";
import useSWR from "swr";
import { TVotes } from "@/types/theCatApi";
import NoItemFound from "@/components/noItemFound";

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
            ? likedImages.map((image) => (
                <GridImage
                  key={image.image_id}
                  name={image.image_id}
                  src={image.image.url}
                  isLink={false}
                />
              ))
            : null}
        </Grid>
      ) : null}
      {params.likePages === "likes" && likedImages && likedImages.length < 1 ? (
        <NoItemFound />
      ) : null}
      {params.likePages === "dislikes" ? (
        <Grid>
          {dislikedImages
            ? dislikedImages.map((image) => (
                <GridImage
                  key={image.image_id}
                  name={image.image_id}
                  src={image.image.url}
                  isLink={false}
                />
              ))
            : null}
        </Grid>
      ) : null}
      {params.likePages === "dislikes" &&
      dislikedImages &&
      dislikedImages.length < 1 ? (
        <NoItemFound />
      ) : null}
    </section>
  );
};

export default LikesPage;
