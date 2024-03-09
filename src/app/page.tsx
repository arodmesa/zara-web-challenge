import { getCharactersInfo } from '@/utils/fetch';
import FavoriteCharacterCards from '@/components/favorites-character-cards-container';
import CharacterCardsContainer from '@/components/character-cards-container';
import { FavoriteLabel } from '@/components/header';
import styles from './page.module.css';

type SearchParams = {
  searchParams: Record<string, string | undefined>;
};
export default function Home({ searchParams }: SearchParams) {
  const isFavorite = searchParams.favorites === 'active';
  return (
    <main className={styles.main}>
      <FavoriteLabel isFavorite={isFavorite} />
      <div className={styles.charactersDiv}>
        {isFavorite ? (
          <FavoriteCharacterCards filterName={searchParams.search} />
        ) : (
          <CharacterCardsApi filterName={searchParams.search} />
        )}
      </div>
    </main>
  );
}

async function CharacterCardsApi({ filterName }: { filterName?: string }) {
  const characters = await getCharactersInfo(filterName);
  if ('error' in characters) {
    throw new Error('Something went wrong!');
  }
  return <CharacterCardsContainer characters={characters} />;
}
