import IconButton from "../iconButton";
import SearchIcon from "../icons/search";
import styles from "./searchBar.module.css";

const SearchBar = () => {
  return (
    <form className={styles.container}>
      <input
        className={styles.input}
        type="text"
        name="search"
        placeholder="Search for breeds by name"
        autoComplete="off"
      />
      <IconButton className={styles.button}>
        <SearchIcon className={styles.icon} />
      </IconButton>
    </form>
  );
};

export default SearchBar;
