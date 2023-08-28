"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./navigateButton.module.css";
import Link from "next/link";
import { MouseEventHandler } from "react";

interface INavigateButton {
  className?: string;
  backgroundColor: string;
  src: string;
  alt: string;
  name: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const NavigateButton = ({
  src,
  alt,
  backgroundColor,
  name,
  onClick,
  ...props
}: INavigateButton) => {
  const pathname = usePathname();

  const isActive = pathname === `/${name}`;

  return (
    <li className={styles.mainContainer}>
      <Link className={styles.container} href={`/${name}`}>
        <button
          type="button"
          style={{
            backgroundColor: `${backgroundColor}`,
          }}
          className={`${styles.imgButton} ${props.className}`}
          data-active={isActive}
          onClick={onClick}
          {...props}
        >
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={src}
              alt={alt}
              fill
              sizes="(max-width:640px) 640px"
              priority
            ></Image>
          </div>
        </button>
        <button
          className={styles.bottomButton}
          data-active={isActive}
          type="button"
          onClick={onClick}
        >
          {name}
        </button>
      </Link>
    </li>
  );
};

export default NavigateButton;
