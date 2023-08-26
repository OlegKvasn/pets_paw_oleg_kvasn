"use client";

import styles from "./votingPage.module.css";
import TwoButtons from "@/components/twoButtons/page";
import Image from "next/image";
import VotingButtons from "@/components/votingButtons";
import Logs from "@/components/logs";
import { TBreedImage } from "@/types/theCatApi";
import { fetcher } from "@/utils/api";
import useSWR from "swr";
import { useState } from "react";
import { createLog } from "@/utils/log";

// const { CAT_API_ID, CAT_API_KAY } = process.env;

const VotingPage = () => {
  const [isFavorite, setFavorite] = useState(false);
  const [actualImageFavId, setId] = useState<string | null>(null);

  const { data, mutate } = useSWR<TBreedImage[], Error>(
    `https://api.thecatapi.com/v1/images/search`,
    fetcher
  );

  const postVote = async (imageId: TBreedImage[], value: 1 | -1) => {
    try {
      await fetch("https://api.thecatapi.com/v1/votes", {
        method: "POST",
        headers: {
          "x-api-key": `live_xkmTWHDiWCfoRWZ76onuP8ygd7eAQV89obHlrIIL0Ec3bo2WCUAnSptpeVW9Eq8Y`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image_id: imageId[0].id,
          sub_id: "OlegTest",
          value: value,
        }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error("Whoops! Error sending Vote.");
        })
        .then((res: { message: string; id: string }) => {
          createLog(
            imageId[0].id,
            value === 1 ? "added to Likes" : "added to Dislikes"
          );
          mutate();
          console.log(res.message);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const postFav = async (imageId: TBreedImage[]) => {
    try {
      await fetch("https://api.thecatapi.com/v1/favourites", {
        method: "POST",
        headers: {
          "x-api-key": `live_xkmTWHDiWCfoRWZ76onuP8ygd7eAQV89obHlrIIL0Ec3bo2WCUAnSptpeVW9Eq8Y`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image_id: imageId[0].id,
          sub_id: "OlegTest",
        }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error("Whoops! Error adding to Favorites.");
        })
        .then((res: { message: string; id: string }) => {
          setId(res.id);
          setFavorite(true);
          createLog(imageId[0].id, "added to Favorites");
          console.log(res.message);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteActualFav = async (imageId: TBreedImage[]) => {
    try {
      await fetch(
        `https://api.thecatapi.com/v1/favourites/${actualImageFavId}`,
        {
          method: "DELETE",
          headers: {
            "x-api-key": `live_xkmTWHDiWCfoRWZ76onuP8ygd7eAQV89obHlrIIL0Ec3bo2WCUAnSptpeVW9Eq8Y`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error("Whoops! Error deleting from Favorites.");
        })
        .then((res: { message: string; id: string }) => {
          setId(null);
          setFavorite(false);
          createLog(imageId[0].id, "removed from Favorites");
          console.log(res.message);
        });
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.stack;
      else message = error;
      console.error(message);
    }
  };

  const handleLike = async () => {
    if (!data) return;
    await postVote(data, 1);
    console.log("like");
  };

  const handleDislike = async () => {
    if (!data) return;
    await postVote(data, -1);
    console.log("dislike");
  };

  const handleFav = async () => {
    if (!data) return;
    if (!isFavorite) {
      await postFav(data);
      return;
    }
    if (isFavorite && actualImageFavId) {
      await deleteActualFav(data);
      return;
    }
  };

  return (
    <section className={styles.mainContainer}>
      <div className={styles.buttons}>
        <TwoButtons pageName="Voting" />
      </div>
      <div className={styles.imageContainer}>
        {data ? (
          <Image
            className={styles.image}
            src={data[0].url}
            alt={data[0].id}
            fill
            priority
          ></Image>
        ) : null}
        <VotingButtons
          className={styles.votingButtons}
          onClickLike={handleLike}
          onClickDislike={handleDislike}
          onClickFav={handleFav}
          isFavActive={isFavorite}
        />
      </div>
      <Logs />
    </section>
  );
};

export default VotingPage;
