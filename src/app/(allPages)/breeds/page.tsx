"use client";

import styles from "./breedsPage.module.css";
import TwoButtons from "@/components/twoButtons/page";
import Grid from "@/components/grid";
import GridImage from "@/components/gridImage";
import Select from "@/ui/select";
import SortIcon from "@/ui/icons/sort";
import SortRevertIcon from "@/ui/icons/sortRevert";
import IconButton from "@/ui/iconButton";
import { TBreeds } from "@/types/theCatApi";
import useSWR from "swr";
import { fetcher } from "@/utils/api";
import { useEffect, useState } from "react";

const initialSortState = {
  limit: 10,
  breeds: "allBreeds",
  reverseSort: false,
};

const BreedsPage = () => {
  const [singleBreed, setSingleBreed] = useState<TBreeds>();
  const [sortOptions, setSortOptions] = useState(initialSortState);

  const { data } = useSWR<TBreeds[], Error>(
    "https://api.thecatapi.com/v1/breeds",
    fetcher
  );

  const handleChangeLimit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOptions({ ...sortOptions, limit: +e.target.value });
  };

  const handleChangeBreed = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOptions({ ...sortOptions, breeds: e.target.value });
  };

  useEffect(() => {
    if (sortOptions.breeds === "allBreeds") {
      return;
    }
    const getData = async () => {
      const res = await fetch(
        `https://api.thecatapi.com/v1/breeds/${sortOptions.breeds}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch single breed");
      }

      const breed = await res.json();
      setSingleBreed(breed);
    };
    getData();
  }, [sortOptions.breeds]);

  return (
    <section className={styles.mainContainer}>
      <div className={styles.buttons}>
        <TwoButtons pageName="breeds" />
        <Select
          className={styles.selectBreeds}
          name="breeds"
          id="breeds"
          onChange={handleChangeBreed}
        >
          <Select.Option value={"allBreeds"}>{"All breeds"}</Select.Option>
          {data
            ? data.map((breed) => (
                <Select.Option key={breed.id} value={breed.id}>
                  {breed.name}
                </Select.Option>
              ))
            : null}
        </Select>
        <Select
          defaultValue={10}
          className={styles.selectLimit}
          name="limit"
          id="limit"
          onChange={handleChangeLimit}
        >
          <Select.Option value={5}>{"Limit: 5"}</Select.Option>
          <Select.Option value={10}>{"Limit: 10"}</Select.Option>
          <Select.Option value={15}>{"Limit: 15"}</Select.Option>
          <Select.Option value={20}>{"Limit: 20"}</Select.Option>
        </Select>
        <IconButton
          className={styles.sortButton}
          onClick={() => setSortOptions({ ...sortOptions, reverseSort: true })}
        >
          <SortIcon className={styles.sortIcon} />
        </IconButton>
        <IconButton
          className={styles.sortButton}
          onClick={() => setSortOptions({ ...sortOptions, reverseSort: false })}
        >
          <SortRevertIcon className={styles.sortIcon} />
        </IconButton>
      </div>
      {sortOptions.breeds === "allBreeds" ? (
        <Grid>
          {data && sortOptions.reverseSort
            ? data
                .map((breed) => (
                  <GridImage
                    key={breed.id}
                    breedId={breed.id}
                    name={breed.name}
                    isLink={true}
                  />
                ))
                .reverse()
                .slice(0, sortOptions.limit)
            : data && !sortOptions.reverseSort
            ? data
                .map((breed) => (
                  <GridImage
                    key={breed.id}
                    breedId={breed.id}
                    name={breed.name}
                    isLink={true}
                  />
                ))
                .slice(0, sortOptions.limit)
            : null}
        </Grid>
      ) : (
        <Grid>
          {singleBreed ? (
            <GridImage
              breedId={singleBreed.id}
              name={singleBreed.name}
              isLink={true}
            />
          ) : null}
        </Grid>
      )}
    </section>
  );
};

export default BreedsPage;
