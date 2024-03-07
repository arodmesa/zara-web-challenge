import styles from "./page.module.css";
import { getCharactersInfo } from "@/utils/fetch";
import CharacterCard from "@/components/character-card";
import SearchBar from "@/components/search-bar";

export default function Home() {
  return (
    <main className={styles.main}>
      <CharacterCardsContainer />
    </main>
  );
}

async function CharacterCardsContainer() {
  const characters = await getCharactersInfo();
  return (
    <>
      <SearchBar numberOfResults={characters.length} />
      <div className={styles.charactersContainer}>
        {characters.map(({ id, name, thumbnail }) => {
          return (
            <CharacterCard
              id={id}
              name={name}
              key={id}
              imageUrl={`${thumbnail.path}.${thumbnail.extension}`}
            />
          );
        })}
      </div>
    </>
  );
}
