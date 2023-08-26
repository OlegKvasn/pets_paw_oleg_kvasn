"use client";

import styles from "./gridImage.module.css";
import Image from "next/image";
import Grid from "../grid";
import Link from "next/link";
import IconButton from "@/ui/iconButton";
import FavIcon from "@/ui/icons/fav";
import { TBreedImage } from "@/types/theCatApi";
import useSWR from "swr";
import { fetcher } from "@/utils/api";

const GridImage = ({
  name,
  isLink,
  breedId,
  src,
}: {
  name: string;
  isLink: boolean;
  breedId?: string;
  src?: string;
}) => {
  const { data } = useSWR<TBreedImage[]>(
    isLink
      ? `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
      : `https://api.thecatapi.com/v1/images/search`,
    fetcher
  );

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
              priority
            />
          ) : null}
          <p className={styles.title}>{name}</p>
        </Link>
      ) : (
        <>
          {" "}
          {data ? (
            <Image
              className={styles.image}
              src={src ? src : "/test-bengal.jpg"}
              alt={name ? name : "/test"}
              fill
              priority
            />
          ) : null}
          <IconButton className={styles.iconButton}>
            <FavIcon height={18} />
          </IconButton>
        </>
      )}
    </Grid.Item>
  );
};

export default GridImage;
