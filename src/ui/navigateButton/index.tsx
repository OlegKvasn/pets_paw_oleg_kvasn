import Image from "next/image";
import styles from "./navigateButton.module.css";
import Link from "next/link";

interface INavigateButton {
  className?: string;
  backgroundColor: string;
  src: string;
  alt: string;
  name: string;
}

const NavigateButton = ({
  src,
  alt,
  backgroundColor,
  name,
  ...props
}: INavigateButton) => {
  return (
    <li className={styles.mainContainer}>
      <Link className={styles.container} href={`/${name}`}>
        <button
          type="button"
          style={{
            backgroundColor: `${backgroundColor}`,
          }}
          className={`${styles.imgButton} ${props.className}`}
          {...props}
        >
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={src}
              alt={alt}
              fill
              priority
            ></Image>
          </div>
        </button>
        <button className={styles.bottomButton} type="button">
          {name}
        </button>
      </Link>
    </li>
  );
};

export default NavigateButton;
