import styles from "./gallery.module.css";
import TwoButtons from "@/components/twoButtons/page";
import Grid from "@/components/grid";
import GridImage from "@/components/gridImage";
import Select from "@/ui/select";
import IconButton from "@/ui/iconButton";
import Button from "@/ui/button";
import UploadIcon from "@/ui/icons/upload";
import UpdateIcon from "@/ui/icons/update";

const testImage = { src: "/test-bengal.jpg", alt: "testTitle" };

const BreedsPage = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.buttons}>
        <div className={styles.twoButtons}>
          <TwoButtons pageName="gallery" />
        </div>
        <Button className={styles.uploadButton}>
          <UploadIcon className={styles.uploadIcon} />
          <span>upload</span>
        </Button>
      </div>
      <form className={styles.form}>
        <fieldset className={styles.item}>
          <label htmlFor="ORDER">ORDER</label>
          <Select className={styles.select} name="ORDER" id="ORDER">
            <Select.Option value={"Random"}>{"Random"}</Select.Option>
            <Select.Option value={"Desc"}>{"Desc"}</Select.Option>
            <Select.Option value={"Asc"}>{"Asc"}</Select.Option>
          </Select>
        </fieldset>
        <fieldset className={styles.item}>
          <label htmlFor="TYPE">TYPE</label>
          <Select className={styles.select} name="TYPE" id="TYPE">
            <Select.Option value={"All"}>{"All"}</Select.Option>
            <Select.Option value={"Static"}>{"Static"}</Select.Option>
            <Select.Option value={"Animated"}>{"Animated"}</Select.Option>
          </Select>
        </fieldset>
        <fieldset className={styles.item}>
          <label htmlFor="BREEDS">BREEDS</label>
          <Select className={styles.select} name="BREEDS" id="BREEDS">
            <Select.Option value={"All breeds"}>{"All breeds"}</Select.Option>
            <Select.Option value={"Abyssinian"}>{"Abyssinian"}</Select.Option>
            <Select.Option value={"Aegean"}>{"Aegean"}</Select.Option>
          </Select>
        </fieldset>
        <div className={styles.lastItem}>
          <fieldset className={styles.item}>
            <label htmlFor="LIMIT">LIMIT</label>
            <Select className={styles.select} name="LIMIT" id="LIMIT">
              <Select.Option value={"5"}>{"5 items per page"}</Select.Option>
              <Select.Option value={"10"}>{"10 items per page"}</Select.Option>
              <Select.Option value={"15"}>{"15 items per page"}</Select.Option>
              <Select.Option value={"20"}>{"20 items per page"}</Select.Option>
            </Select>
          </fieldset>
          <IconButton className={styles.updateButton}>
            <UpdateIcon className={styles.updateIcon} />
          </IconButton>
        </div>
      </form>
      <Grid>
        <GridImage src={testImage.src} alt={testImage.alt} isLink={false} />
        <GridImage src={testImage.src} alt={testImage.alt} isLink={false} />
        <GridImage src={testImage.src} alt={testImage.alt} isLink={false} />
        <GridImage src={testImage.src} alt={testImage.alt} isLink={false} />
        <GridImage src={testImage.src} alt={testImage.alt} isLink={false} />
        <GridImage src={testImage.src} alt={testImage.alt} isLink={false} />
        <GridImage src={testImage.src} alt={testImage.alt} isLink={false} />
        <GridImage src={testImage.src} alt={testImage.alt} isLink={false} />
        <GridImage src={testImage.src} alt={testImage.alt} isLink={false} />
        <GridImage src={testImage.src} alt={testImage.alt} isLink={false} />
      </Grid>
    </section>
  );
};

export default BreedsPage;
