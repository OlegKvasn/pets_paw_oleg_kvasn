import styles from "./likes.module.css";
import TwoButtons from "@/components/twoButtons/page";
import Grid from "@/components/grid";
import GridImage from "@/components/gridImage";

const testImage = { src: "/test-bengal.jpg", alt: "testTitle" };
const LikesPage = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.buttons}>
        <TwoButtons pageName="likes" />
      </div>
      <Grid>
        <GridImage src={testImage.src} alt={testImage.alt} isLink={false} />
        <GridImage src={testImage.src} alt={testImage.alt} isLink={false} />
        <GridImage src={testImage.src} alt={testImage.alt} isLink={false} />
      </Grid>
    </section>
  );
};

export default LikesPage;
