import styles from "./breedsPage.module.css";
import TwoButtons from "@/components/twoButtons/page";
import Grid from "@/components/grid";
import GridImage from "@/components/gridImage";
import Select from "@/ui/select";
import SortIcon from "@/ui/icons/sort";
import SortRevertIcon from "@/ui/icons/sortRevert";
import IconButton from "@/ui/iconButton";

const testImage = { src: "/test-bengal.jpg", alt: "testTitle" };

const BreedsPage = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.buttons}>
        <TwoButtons pageName="breeds" />
        <Select className={styles.selectBreeds} name="All breeds" id="breeds">
          <Select.Option value={"All breeds"}>{"All breeds"}</Select.Option>
          <Select.Option value={"Abyssinian"}>{"Abyssinian"}</Select.Option>
          <Select.Option value={"Aegean"}>{"Aegean"}</Select.Option>
        </Select>
        <Select className={styles.selectLimit} name="Limit" id="Limit">
          <Select.Option value={"Limit: 5"}>{"Limit: 5"}</Select.Option>
          <Select.Option value={"Limit: 10"}>{"Limit: 10"}</Select.Option>
          <Select.Option value={"Limit: 15"}>{"Limit: 15"}</Select.Option>
          <Select.Option value={"Limit: 20"}>{"Limit: 20"}</Select.Option>
        </Select>
        <IconButton className={styles.sortButton}>
          <SortIcon className={styles.sortIcon} />
        </IconButton>
        <IconButton className={styles.sortButton}>
          <SortRevertIcon className={styles.sortIcon} />
        </IconButton>
      </div>
      <Grid>
        <GridImage src={testImage.src} alt={testImage.alt} isLink={false} />
        <GridImage src={testImage.src} alt={testImage.alt} isLink={false} />
        <GridImage src={testImage.src} alt={testImage.alt} isLink={true} />
        <GridImage src={testImage.src} alt={testImage.alt} isLink={true} />
        <GridImage src={testImage.src} alt={testImage.alt} isLink={true} />
        <GridImage src={testImage.src} alt={testImage.alt} isLink={true} />
        <GridImage src={testImage.src} alt={testImage.alt} isLink={true} />
        <GridImage src={testImage.src} alt={testImage.alt} isLink={true} />
        <GridImage src={testImage.src} alt={testImage.alt} isLink={true} />
        <GridImage src={testImage.src} alt={testImage.alt} isLink={true} />
        <GridImage src={testImage.src} alt={testImage.alt} isLink={true} />
        <GridImage src={testImage.src} alt={testImage.alt} isLink={true} />
        <GridImage src={testImage.src} alt={testImage.alt} isLink={true} />
        <GridImage src={testImage.src} alt={testImage.alt} isLink={true} />
        <GridImage src={testImage.src} alt={testImage.alt} isLink={true} />
        <GridImage src={testImage.src} alt={testImage.alt} isLink={true} />
        <GridImage src={testImage.src} alt={testImage.alt} isLink={true} />
        <GridImage src={testImage.src} alt={testImage.alt} isLink={true} />
        <GridImage src={testImage.src} alt={testImage.alt} isLink={true} />
        <GridImage src={testImage.src} alt={testImage.alt} isLink={true} />
      </Grid>
    </section>
  );
};

export default BreedsPage;
