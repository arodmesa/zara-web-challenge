import { CharacterSaved, MarvelCharacter } from "@/utils/types";
import CharacterCard from "../character-card";
import SearchBar from "../search-bar";
import styles from "./character-cards-container.module.css";

export default function CharacterCardsContainer({
  characters,
  isFavorite = false,
}: {
  characters: MarvelCharacter[] | CharacterSaved[];
  isFavorite?: boolean;
}) {
  return (
    <>
      <SearchBar numberOfResults={characters.length} />
      <div className={styles.charactersContainer}>
        {characters.map((character) => {
          const { id, name } = character;
          const imageUrl =
            "thumbnail" in character
              ? `${character.thumbnail.path}.${character.thumbnail.extension}`
              : character.imageUrl;
          return (
            <CharacterCard
              isFavoriteCard={isFavorite}
              id={id}
              name={name}
              key={id}
              imageUrl={imageUrl}
            />
          );
        })}
      </div>
    </>
  );
}
