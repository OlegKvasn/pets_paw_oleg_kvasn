"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "./carousel.module.scss";
import Image from "next/image";

interface Images {
  src: string;
  title: string;
}

const ResponsiveCarousel = ({ images }: { images: Images[] }) => {
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
        <div key={`${idx}-${img.title}`} className={styles.responsiveImage}>
          <Image alt={img.title} src={img.src} fill objectFit="cover" />
        </div>
      ))}
    </Carousel>
  );
};

export default ResponsiveCarousel;
