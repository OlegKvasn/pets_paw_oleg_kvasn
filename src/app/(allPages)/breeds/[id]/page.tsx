import styles from "./breed.module.css";
import IconButton from "@/ui/iconButton";
import BackIcon from "@/ui/icons/back";
import Button from "@/ui/button";
import ResponsiveCarousel from "@/ui/carousel";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";
import { TBreedImage, TBreeds } from "@/types/theCatApi";

const { CAT_API_KAY } = process.env;

interface BreedPageProps {
  params: { id: string };
}

export async function generateMetadata(
  { params }: BreedPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const breed = await getBreedDesc(params.id);
  return {
    title: breed.name + " - Pets Paw",
  };
}

async function getBreedDesc(breed_ids: string): Promise<TBreeds> {
  const data = await fetch(`https://api.thecatapi.com/v1/breeds/${breed_ids}`);
  if (!data.ok) {
    throw new Error("Failed to fetch description");
  }
  return data.json();
}

async function getBreedImages(breed_ids: string): Promise<TBreedImage[]> {
  const data = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=5&breed_ids=${breed_ids}&api_key=${CAT_API_KAY}`
  );
  if (!data.ok) {
    throw new Error("Failed to fetch images");
  }
  return data.json();
}

const BreedPage = async ({ params }: BreedPageProps) => {
  const breed = await getBreedDesc(params.id);
  const images = await getBreedImages(params.id);

  return (
    <section className={styles.mainContainer}>
      <div className={styles.buttons}>
        <IconButton className={styles.backButton}>
          <Link href="/breeds">
            <BackIcon className={styles.icon} />
          </Link>
        </IconButton>
        <Button className={styles.breedsButton}>
          <Link href="/breeds">BREEDS</Link>
        </Button>
        <Button className={styles.idButton}>{params.id}</Button>
      </div>
      <ResponsiveCarousel images={images} />
      {/* <Carousel>
        {slides.map((slide) => (
          <div key={slide.title} className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={slide.src}
              alt={slide.title}
              fill
              priority
            ></Image>
          </div>
        ))}
      </Carousel> */}
      <article className={styles.desc}>
        <h1 className={styles.title}>{breed.name}</h1>
        <p className={styles.subTitle}>{breed.description}</p>
        <div className={styles.details}>
          <p className={styles.left}>
            Temperament: <span>{breed.temperament}</span>
          </p>
          <div className={styles.right}>
            <p>
              Origin: <span>{breed.origin}</span>
            </p>
            <p>
              Weight: <span>{`${breed.weight.metric} kgs`}</span>
            </p>
            <p>
              Life span: <span>{`${breed.life_span} years`}</span>
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default BreedPage;
