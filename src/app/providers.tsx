'use client';

import {
  type Dispatch,
  createContext,
  useEffect,
  useReducer,
  useState,
  type SetStateAction,
  Suspense,
} from 'react';
import { useSearchParams } from 'next/navigation';
import { saveFavorite, getFavorites } from '@/utils/local-storage';
import { type CharacterSaved, type FavoriteStorage } from '@/utils/types';

type SetFavoriteAction = {
  type: 'setFavorites';
  data: FavoriteStorage;
};
type AddFavoriteAction = {
  type: 'addFavorite';
  data: CharacterSaved;
};

type RemoveFavoriteAction = {
  type: 'removeFavorite';
  data: number;
};
type ReducerInput = {
  state: { favorites: FavoriteStorage; numberOfFavorites: number };
  action: AddFavoriteAction | RemoveFavoriteAction | SetFavoriteAction;
};
export const FavoriteContext = createContext<{
  favoriteListContext?: ReducerInput['state'];
  dispatchFavoriteActions?: Dispatch<ReducerInput['action']>;
}>({});

function reducerFavorite(
  state: ReducerInput['state'],
  action: ReducerInput['action'],
): typeof state {
  const { favorites } = { ...state };
  switch (action.type) {
    case 'addFavorite': {
      const updatedFavorites = { ...favorites, [action.data.id]: action.data };
      const updatedNumberOfFavorites = Object.keys(updatedFavorites).length;
      saveFavorite(updatedFavorites);
      return {
        favorites: updatedFavorites,
        numberOfFavorites: updatedNumberOfFavorites,
      };
    }
    case 'removeFavorite': {
      const updatedFavorites = { ...favorites };
      if (action.data in updatedFavorites) {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete -- its ok
        delete updatedFavorites[action.data];
        saveFavorite(updatedFavorites);
      }
      const updatedNumberOfFavorites = Object.keys(updatedFavorites).length;
      return {
        favorites: updatedFavorites,
        numberOfFavorites: updatedNumberOfFavorites,
      };
    }
    case 'setFavorites': {
      return {
        favorites: action.data,
        numberOfFavorites: Object.keys(action.data).length,
      };
    }
  }
}

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favoriteListContext, dispatchFavoriteActions] = useReducer(
    reducerFavorite,
    {
      numberOfFavorites: 0,
      favorites: {},
    },
  );
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const favorites = getFavorites();
      dispatchFavoriteActions({ type: 'setFavorites', data: favorites });
    }
  }, []);
  return (
    <FavoriteContext.Provider
      value={{ favoriteListContext, dispatchFavoriteActions }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export const InputSearchContext = createContext<{
  inputState?: string;
  setInputState?: Dispatch<SetStateAction<string>>;
}>({});

export function InputSearchProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <SuspendableSearchProvider>{children}</SuspendableSearchProvider>
    </Suspense>
  );
}

function SuspendableSearchProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const searchText = searchParams.get('search') ?? '';
  const [inputState, setInputState] = useState(searchText);

  return (
    <InputSearchContext.Provider value={{ inputState, setInputState }}>
      {children}
    </InputSearchContext.Provider>
  );
}
