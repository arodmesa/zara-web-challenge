'use client';
import { useContext } from 'react';
import { FavoriteContext } from '@/app/providers';
import CharacterCardsContainer from '../character-cards-container';

export default function FavoriteCharacterCards({
  filterName = '',
}: {
  filterName?: string;
}) {
  const { favoriteListContext } = useContext(FavoriteContext);
  const favoritesCharacters = Object.values(
    favoriteListContext?.favorites ?? {},
  ).filter(({ name }) => {
    return name.toLowerCase().startsWith(filterName.toLocaleLowerCase());
  });

  return (
    <CharacterCardsContainer characters={favoritesCharacters} isFavorite />
  );
}
