"use client";
import CharacterCardsContainer from "../character-cards-container";
import { useContext } from "react";
import { FavoriteContext } from "@/app/theme-provider";

export default function FavoriteCharacterCards({
  filterName = "",
}: {
  filterName?: string;
}) {
  const { favoriteListContext } = useContext(FavoriteContext);
  const favoritesCharacters = Object.values(
    favoriteListContext?.favorites ?? {}
  ).filter(({ name }) => {
    return name.toLowerCase().includes(filterName?.toLocaleLowerCase());
  });

  return <CharacterCardsContainer characters={favoritesCharacters} />;
}
