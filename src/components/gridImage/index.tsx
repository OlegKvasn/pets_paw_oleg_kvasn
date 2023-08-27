"use client";

import styles from "./gridImage.module.css";
import Image from "next/image";
import Grid from "../grid";
import Link from "next/link";
import IconButton from "@/ui/iconButton";
import FavIcon from "@/ui/icons/fav";
import { TBreedImage, TFav } from "@/types/theCatApi";
import useSWR from "swr";
import { fetchWithToken, fetcher } from "@/utils/api";
import { useEffect, useState } from "react";
import FavColorIcon from "@/ui/icons/favColor";
import { createLog } from "@/utils/log";

const GridImage = ({
  name,
  isLink,
  breedId = "",
  src,
  action,
}: {
  name: string;
  isLink: boolean;
  breedId?: string;
  src?: string;
  action?: () => void;
}) => {
  const [favorite, setFavorite] = useState(false);

  const { data } = useSWR<TBreedImage[]>(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
    fetcher
  );
  const favorites = useSWR<TFav[], Error>(
    `https://api.thecatapi.com/v1/favourites?sub_id=OlegTest`,
    fetchWithToken
  );

  const singleFavImage = favorites.data
    ? favorites.data.find(({ image_id }) => image_id === name)
    : undefined;
  const favId = singleFavImage ? singleFavImage.id : undefined;

  const postFav = async () => {
    try {
      await fetch("https://api.thecatapi.com/v1/favourites", {
        method: "POST",
        headers: {
          "x-api-key": `live_xkmTWHDiWCfoRWZ76onuP8ygd7eAQV89obHlrIIL0Ec3bo2WCUAnSptpeVW9Eq8Y`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image_id: name,
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
          setFavorite(true);
          createLog(name, "added to Favorites");
          action ? action() : undefined;
          console.log(res.message);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteActualFav = async () => {
    try {
      await fetch(`https://api.thecatapi.com/v1/favourites/${favId}`, {
        method: "DELETE",
        headers: {
          "x-api-key": `live_xkmTWHDiWCfoRWZ76onuP8ygd7eAQV89obHlrIIL0Ec3bo2WCUAnSptpeVW9Eq8Y`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error("Whoops! Error deleting from Favorites.");
        })
        .then((res: { message: string; id: string }) => {
          setFavorite(false);
          createLog(name, "removed from Favorites");
          action ? action() : undefined;
          console.log(res.message);
        });
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.stack;
      else message = error;
      console.error(message);
    }
  };

  const handleClick = async () => {
    if (!favorite) {
      postFav();
    }
    if (favorite && favId) {
      deleteActualFav();
    }
  };

  useEffect(() => {
    if (favId) {
      setFavorite(true);
    }
  }, [favId]);

  return (
    <Grid.Item className={styles.imageContainer}>
      {isLink ? (
        <Link href={`/breeds/${breedId}`}>
          {" "}
          {data ? (
            <Image
              className={styles.image}
              src={data[0].url}
              alt={name}
              fill
              sizes="(max-width:1060px) 640px,800px"
              priority
            />
          ) : null}
          <p className={styles.title}>{name}</p>
        </Link>
      ) : (
        <>
          <Image
            className={styles.image}
            src={src ? src : "/test-bengal.jpg"}
            alt={name ? name : "/test"}
            fill
            sizes="(max-width:1060px) 640px,800px"
            priority
          />
          <IconButton className={styles.iconButton} onClick={handleClick}>
            {favorite ? <FavColorIcon height={18} /> : <FavIcon height={18} />}
          </IconButton>
        </>
      )}
    </Grid.Item>
  );
};

export default GridImage;
