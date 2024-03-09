import md5 from 'md5';
import { charactersEndpoint, charactersQueries } from './constants/url';
import {
  type MarvelApiCharacterResponse,
  type MarvelApiCharactersResponse,
  type MarvelApiComicsResponse,
} from './types';

type ErrorType = { error: boolean; status: number };

const hash = md5(
  `${process.env.TIME_STAMP}${process.env.MARVEL_PRIVATE_KEY}${process.env.MARVEL_PUBLIC_KEY}`,
);
async function getApiData(endpoint: string) {
  const res = await fetch(
    `${process.env.MARVEL_API_SERVER}${endpoint}${
      endpoint.includes('?') ? '&' : '?'
    }ts=${process.env.TIME_STAMP}&apikey=${
      process.env.MARVEL_PUBLIC_KEY
    }&hash=${hash}`,
  );
  if (!res.ok) {
    return { error: true, status: res.status };
  }
  return res.json();
}

export async function getCharactersInfo(name = '', numberOfCharacters = 50) {
  const apiResponse = (await getApiData(
    `${charactersEndpoint}?${
      name ? `${charactersQueries.nameStartsWith}${name}&` : ''
    }${charactersQueries.limit}${numberOfCharacters}`,
  )) as MarvelApiCharactersResponse | ErrorType;
  if ('error' in apiResponse) {
    return apiResponse;
  }
  return apiResponse.data.results;
}

export async function getCharacterDetails(id: string | number) {
  const apiResponse = (await getApiData(`${charactersEndpoint}/${id}`)) as
    | MarvelApiCharacterResponse
    | ErrorType;
  if ('error' in apiResponse) {
    return apiResponse;
  }
  return apiResponse.data.results;
}

type OrderByOptions =
  | 'onsaleDate'
  | '-onsaleDate'
  | 'focDate'
  | '-focDate'
  | 'title'
  | 'issueNumber'
  | '-issueNumber'
  | 'modified'
  | '-modified';

export async function getCharacterComics(
  id: string | number,
  numberOfResults = 20,
  orderByOption: OrderByOptions = 'onsaleDate',
) {
  const apiResponse = (await getApiData(
    `${charactersEndpoint}/${id}/comics?orderBy=${orderByOption}&limit=${numberOfResults}`,
  )) as MarvelApiComicsResponse | ErrorType;
  if ('error' in apiResponse) {
    return apiResponse;
  }
  return apiResponse.data.results;
}
