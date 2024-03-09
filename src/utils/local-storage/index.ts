import { type FavoriteStorage } from '../types';

export function saveFavorite(data: FavoriteStorage) {
  localStorage.setItem('favorites', JSON.stringify(data));
}
export function getFavorites(name = 'favorites'): FavoriteStorage {
  const retrievedFavorites = localStorage.getItem(name);
  if (retrievedFavorites) {
    return JSON.parse(retrievedFavorites) as FavoriteStorage;
  }
  return {};
}
