"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./carousel.module.scss";
import Image from "next/image";
import { TBreedImage } from "@/types/theCatApi";

const ResponsiveCarousel = ({ images }: { images: TBreedImage[] }) => {
  return (
    <Carousel
      className={styles.carousel}
      autoPlay={false}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
      showIndicators={true}
      emulateTouch={true}
      centerMode={true}
      centerSlidePercentage={100}
    >
      {images.map((img, idx: number) => (
        <div key={`${idx}-${img.id}`} className={styles.responsiveImage}>
          <Image alt={img.id} src={img.url} fill objectFit="cover" />
        </div>
      ))}
    </Carousel>
  );
};

export default ResponsiveCarousel;
