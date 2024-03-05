export type MarvelCharacter = {
  id: number;
  name: string;
  description: string; // Include description even if it's empty initially
  modified: string; // Date string in ISO 8601 format
  thumbnail: {
    // Nested object for thumbnail information
    path: string | undefined; // Optional path (might be missing)
    extension: string | undefined; // Optional extension (might be missing)
  };
  resourceURI: string;
  comics: {
    // Nested object for comics information (might be empty)
    available: number | undefined;
    collectionURI: string | undefined;
    items: ComicsItemType[] | undefined; // Array of comics (optional)
  };
  series: {
    // Nested object for series information (might be empty)
    available: number | undefined;
    collectionURI: string | undefined;
    items: SeriesItemType[] | undefined; // Array of series (optional)
  };
  stories: {
    // Nested object for stories information (might be empty)
    available: number | undefined;
    collectionURI: string | undefined;
    items: StoriesItemType[] | undefined; // Array of stories (optional)
  };
  events: {
    // Nested object for events information (might be empty)
    available: number | undefined;
    collectionURI: string | undefined;
    items: EventsItemType[] | undefined; // Array of events (optional)
  };
  urls: MarvelUrlType[]; // Array of MarvelUrl objects
};

// Optional nested interfaces for detailed information within comics, series, stories, and events (if needed)
interface ComicsItemType {
  name: string;
  resourceURI: string;
}

interface SeriesItemType {
  name: string;
  resourceURI: string;
}

interface StoriesItemType {
  name: string;
  resourceURI: string;
}

interface EventsItemType {
  name: string;
  resourceURI: string;
}

interface MarvelUrlType {
  type: string;
  url: string;
}

export type MarvelApiCharactersResponse = {
  data: {
    results: MarvelCharacter[];
  };
};
