import styles from "./page.module.css";
import { getCharactersInfo } from "@/utils/fetch";
import FavoriteCharacterCards from "@/components/favorites-character-cards-container";
import CharacterCardsContainer from "@/components/character-cards-container";

type SearchParams = {
  searchParams: { [key: string]: string | undefined };
};
export default function Home({ searchParams }: SearchParams) {
  const isFavorite = searchParams?.favorites === "active";
  return (
    <main className={styles.main}>
      {isFavorite ? (
        <FavoriteCharacterCards filterName={searchParams?.search} />
      ) : (
        <CharacterCardsApi filterName={searchParams?.search} />
      )}
    </main>
  );
}

async function CharacterCardsApi({ filterName }: { filterName?: string }) {
  const characters = await getCharactersInfo(filterName);
  if ("error" in characters) {
    return (
      <div className={styles.error}>
        <span>Some error has occurred</span>
        <span>Try reloading the page</span>
      </div>
    );
  }
  return <CharacterCardsContainer characters={characters} />;
}
