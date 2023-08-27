"use client";

import { useState } from "react";
import IconButton from "../iconButton";
import SearchIcon from "../icons/search";
import styles from "./searchBar.module.css";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const newParams = new URLSearchParams(searchParams.toString());

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (inputValue.length > 0) {
      newParams.set("q", inputValue);
    } else {
      newParams.delete("q");
    }

    router.replace(`/search?${newParams}`);
    // setInputValue("");
  }

  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <input
        onChange={({ target }) => setInputValue(target.value)}
        className={styles.input}
        value={inputValue}
        type="text"
        name="search"
        placeholder="Search for breeds by name"
        autoComplete="off"
      />
      <IconButton className={styles.button} type="submit">
        <SearchIcon className={styles.icon} />
      </IconButton>
    </form>
  );
};

export default SearchBar;
