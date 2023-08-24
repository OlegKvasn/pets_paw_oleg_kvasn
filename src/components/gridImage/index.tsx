import styles from "./gridImage.module.css";
import Image from "next/image";
import Grid from "../grid";
import Link from "next/link";
import IconButton from "@/ui/iconButton";
import FavIcon from "@/ui/icons/fav";

const GridImage = ({
  src,
  alt,
  isLink,
}: {
  src: string;
  alt: string;
  isLink: boolean;
}) => {
  return (
    <Grid.Item className={styles.imageContainer}>
      {isLink ? (
        <Link href="/">
          {" "}
          <Image className={styles.image} src={src} alt={alt} fill priority />
          <p className={styles.title}>{alt}</p>
        </Link>
      ) : (
        <>
          {" "}
          <Image className={styles.image} src={src} alt={alt} fill priority />
          <IconButton className={styles.iconButton}>
            <FavIcon height={18} />
          </IconButton>
        </>
      )}
    </Grid.Item>
  );
};

export default GridImage;
