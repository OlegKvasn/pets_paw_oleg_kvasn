import styles from "./searchPage.module.css";
import TwoButtons from "@/components/twoButtons/page";
import Grid from "@/components/grid";
import GridImage from "@/components/gridImage";
import { TBreedImage, TBreeds, TFav } from "@/types/theCatApi";
import NoItemFound from "@/components/noItemFound";
import Link from "next/link";

export const metadata = {
  title: "Search - Pets Paw",
};

const { CAT_API_KAY } = process.env;

async function getImages(breedId: string): Promise<TBreedImage[]> {
  const data = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=20&breed_ids=${breedId}&api_key=${CAT_API_KAY}`,
    { cache: "no-cache" }
  );
  if (!data.ok) {
    throw new Error("Failed to fetch images");
  }
  return data.json();
}
async function getBreeds(): Promise<TBreeds[]> {
  const data = await fetch(`https://api.thecatapi.com/v1/breeds`);
  if (!data.ok) {
    throw new Error("Failed to fetch description");
  }
  return data.json();
}

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { q?: string };
}) => {
  const breeds = await getBreeds();
  const searchQuery = searchParams.q ?? "";
  const singleBreed = breeds.find(
    ({ name }) =>
      name === searchQuery.charAt(0).toUpperCase() + searchQuery.slice(1)
  );

  const images = await getImages(singleBreed ? singleBreed.id : searchQuery);

  return (
    <section className={styles.mainContainer}>
      <div className={styles.buttons}>
        <TwoButtons pageName={"search"} />
      </div>
      <p className={styles.message}>
        Search results for: <span>{searchQuery}</span>
      </p>
      {singleBreed ? (
        <p className={styles.message}>
          See breed:{" "}
          <Link href={`/${singleBreed.id}`}>
            <span>{singleBreed.name}</span>
          </Link>
        </p>
      ) : null}
      <Grid>
        {images
          ? images.map((image) => (
              <GridImage
                key={image.id}
                name={image.id}
                src={image.url}
                isLink={false}
              />
            ))
          : null}
      </Grid>
      {images && images.length < 1 ? (
        <NoItemFound message="No breed found..." />
      ) : null}
    </section>
  );
};

export default SearchPage;
