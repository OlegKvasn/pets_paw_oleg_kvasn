import styles from "./breed.module.css";
import IconButton from "@/ui/iconButton";
import BackIcon from "@/ui/icons/back";
import Button from "@/ui/button";
import ResponsiveCarousel from "@/ui/carousel";
import Link from "next/link";

const slides = [
  { src: "/test-bengal.jpg", title: "test-1" },
  { src: "/test-bengal-2.jpg", title: "test-2" },
  { src: "/test-bengal.jpg", title: "test-3" },
  { src: "/test-bengal-2.jpg", title: "test-4" },
];

const breed = {
  title: "Basenji",
  desc: "Family companion cat",
  temperament: "Active, Energetic, Independent, Intelligent, Gentle",
  origin: "United States",
  weight: "3 - 5 kgs",
  lifeSpan: "14 - 15 years",
};

const BreedPage = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.buttons}>
        <IconButton className={styles.backButton}>
          <BackIcon className={styles.icon} />
        </IconButton>
        <Button className={styles.breedsButton}>
          <Link href="/breeds">BREEDS</Link>
        </Button>
        <Button className={styles.idButton}>28</Button>
      </div>
      <ResponsiveCarousel images={slides} />
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
        <h1 className={styles.title}>{breed.title}</h1>
        <p className={styles.subTitle}>{breed.desc}</p>
        <div className={styles.details}>
          <p className={styles.left}>
            Temperament: <span>{breed.temperament}</span>
          </p>
          <div className={styles.right}>
            <p>
              Origin: <span>{breed.origin}</span>
            </p>
            <p>
              Weight: <span>{breed.weight}</span>
            </p>
            <p>
              Life span: <span>{breed.lifeSpan}</span>
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default BreedPage;
