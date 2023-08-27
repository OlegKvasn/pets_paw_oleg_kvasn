"use client";

import styles from "./gallery.module.css";
import TwoButtons from "@/components/twoButtons/page";
import Grid from "@/components/grid";
import GridImage from "@/components/gridImage";
import Select from "@/ui/select";
import IconButton from "@/ui/iconButton";
import Button from "@/ui/button";
import UploadIcon from "@/ui/icons/upload";
import UpdateIcon from "@/ui/icons/update";
import { fetcher } from "@/utils/api";
import useSWR from "swr";
import { TBreedImage, TBreeds } from "@/types/theCatApi";
import { useState } from "react";
import NoItemFound from "@/components/noItemFound";

const initialQueryParams = {
  order: "RAND",
  type: "jpg,gif,png",
  breeds: "",
  limit: "10",
};

const BreedsPage = () => {
  const [queryParams, setQueryPrams] = useState(initialQueryParams);
  const { order, type, breeds, limit } = queryParams;

  const imageUrl = `https://api.thecatapi.com/v1/images/search?limit=${limit}&mime_types=${type}&order=${order}&breed_ids=${breeds}&api_key=live_xkmTWHDiWCfoRWZ76onuP8ygd7eAQV89obHlrIIL0Ec3bo2WCUAnSptpeVW9Eq8Y`;

  const images = useSWR<TBreedImage[], Error>(imageUrl, fetcher);
  const breedsList = useSWR<TBreeds[], Error>(
    "https://api.thecatapi.com/v1/breeds",
    fetcher
  );

  const handleChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    setQueryPrams({ ...queryParams, [target.name]: target.value });
  };

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
          <label htmlFor="order">ORDER</label>
          <Select
            className={styles.select}
            name="order"
            id="order"
            onChange={handleChange}
          >
            <Select.Option value={"RAND"}>{"Random"}</Select.Option>
            <Select.Option value={"DESC"}>{"Desc"}</Select.Option>
            <Select.Option value={"ASC"}>{"Asc"}</Select.Option>
          </Select>
        </fieldset>
        <fieldset className={styles.item}>
          <label htmlFor="type">TYPE</label>
          <Select
            className={styles.select}
            name="type"
            id="type"
            onChange={handleChange}
          >
            <Select.Option value={"jpg,gif,png"}>{"All"}</Select.Option>
            <Select.Option value={"jpg,png"}>{"Static"}</Select.Option>
            <Select.Option value={"gif"}>{"Animated"}</Select.Option>
          </Select>
        </fieldset>
        <fieldset className={styles.item}>
          <label htmlFor="breeds">BREEDS</label>
          <Select
            className={styles.select}
            name="breeds"
            id="breeds"
            onChange={handleChange}
          >
            <Select.Option value={""}>{"None"}</Select.Option>
            {breedsList.data
              ? breedsList.data.map((breed) => (
                  <Select.Option key={breed.id} value={breed.id}>
                    {breed.name}
                  </Select.Option>
                ))
              : null}
          </Select>
        </fieldset>
        <div className={styles.lastItem}>
          <fieldset className={styles.item}>
            <label htmlFor="limit">LIMIT</label>
            <Select
              className={styles.select}
              name="limit"
              id="limit"
              defaultValue={"10"}
              onChange={handleChange}
            >
              <Select.Option value={"5"}>{"5 items per page"}</Select.Option>
              <Select.Option value={"10"}>{"10 items per page"}</Select.Option>
              <Select.Option value={"15"}>{"15 items per page"}</Select.Option>
              <Select.Option value={"20"}>{"20 items per page"}</Select.Option>
            </Select>
          </fieldset>
          <IconButton
            className={styles.updateButton}
            onClick={() => images.mutate()}
          >
            <UpdateIcon className={styles.updateIcon} />
          </IconButton>
        </div>
      </form>
      <Grid>
        {images.data
          ? images.data.map((image) => (
              <GridImage
                key={image.id}
                src={image.url}
                name={image.id}
                isLink={false}
              />
            ))
          : null}
      </Grid>
      {images.data && images.data.length < 1 ? <NoItemFound /> : null}
    </section>
  );
};

export default BreedsPage;
