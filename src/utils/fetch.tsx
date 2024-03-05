import md5 from "md5";
import { charactersEndpoint, charactersQueries } from "./constants/url";
import { MarvelApiCharactersResponse } from "./types";

const hash = md5(
  `${process.env.TIME_STAMP}${process.env.MARVEL_PRIVATE_KEY}${process.env.MARVEL_PUBLIC_KEY}`
);
async function getApiData(endpoint: string) {
  const res = await fetch(
    `${process.env.MARVEL_API_SERVER}${endpoint}${
      endpoint.includes("?") ? "&" : "?"
    }ts=${process.env.TIME_STAMP}&apikey=${
      process.env.MARVEL_PUBLIC_KEY
    }&hash=${hash}`
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getCharactersInfo(name = "", numberOfCharacters = 50) {
  const apiResponse = (await getApiData(
    `${charactersEndpoint}?${name ? charactersQueries.nameStartsWith : ""}${
      charactersQueries.limit
    }${numberOfCharacters}`
  )) as MarvelApiCharactersResponse;
  return apiResponse.data.results;
}
