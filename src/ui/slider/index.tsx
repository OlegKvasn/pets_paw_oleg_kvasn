"use client";

import styles from "./slider.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  slidesToScroll?: number;
  slidesToShow?: number;
  initialSlide?: number;
  arrows?: boolean;
  dots?: boolean;
  fade?: boolean;
  infinite?: boolean;
  swipeToSlide?: boolean;
  draggable?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  speed?: number;
}

const Carousel = ({
  children,
  className,
  slidesToShow = 1,
  slidesToScroll = 1,
  initialSlide = 0,
  arrows = false,
  dots = true,
  fade = false,
  infinite = false,
  swipeToSlide = false,
  draggable = true,
  autoplay = false,
  autoplaySpeed = 2000,
  speed = 2000,
}: CarouselProps) => {
  return (
    <section className={styles.mainContainer}>
      <Slider
        className={`${styles.slider} ${className}`}
        slidesToShow={slidesToShow}
        slidesToScroll={slidesToScroll}
        initialSlide={initialSlide}
        arrows={arrows}
        dots={dots}
        fade={fade}
        infinite={infinite}
        swipeToSlide={swipeToSlide}
        draggable={draggable}
        autoplay={autoplay}
        autoplaySpeed={autoplaySpeed}
        speed={speed}
      >
        {children}
      </Slider>
    </section>
  );
};

export default Carousel;
