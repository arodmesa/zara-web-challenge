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

// Optional nested types for detailed information within comics, series, stories, and events (if needed)
type ComicsItemType = {
  name: string;
  resourceURI: string;
};

type SeriesItemType = {
  name: string;
  resourceURI: string;
};

type StoriesItemType = {
  name: string;
  resourceURI: string;
};

type EventsItemType = {
  name: string;
  resourceURI: string;
};

type MarvelUrlType = {
  type: string;
  url: string;
};

export type MarvelApiCharactersResponse = {
  data: {
    results: MarvelCharacter[];
  };
};
export type MarvelApiCharacterResponse = {
  data: {
    results: [MarvelCharacter];
  };
};

export type CharacterSaved = {
  name: string;
  id: number;
  imageUrl: string;
};

export type FavoriteStorage = {
  [idString: string]: CharacterSaved;
};

type Comic = {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string; // Date string
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: Url[];
  series: Series;
  variants: Series[]; // List of Series objects
  collections: Collection[]; // List of Collection objects
  collectedIssues: any[]; // Could be an array of objects or other types
  dates: Date[]; // List of Date objects with different types
  prices: Price[]; // List of Price objects with printPrice and digitalPurchasePrice
  thumbnail: Image; // Image object
  images: Image[]; // List of Image objects
  creators: Creators; // Creators object with available, collectionURI, items, and returned properties
  characters: Characters; // Characters object with similar properties to Creators
  stories: Stories; // Stories object with similar properties to Creators
  events: Events; // Events object with similar properties to Creators (but available is 0)
};

type TextObject = {
  type: string;
  language: string;
  text: string;
};

type Url = {
  type: string;
  url: string;
};

type Series = {
  resourceURI: string;
  name: string;
};

type Collection = {
  resourceURI: string;
  name: string;
};

type Date = {
  type: string;
  date: string; // Date string
};

type Price = {
  type: string;
  price: number;
};

type Image = {
  path: string;
  extension: string;
};

type Creators = {
  available: number;
  collectionURI: string;
  items: Creator[];
  returned: number;
};

type Creator = {
  resourceURI: string;
  name: string;
  role: string;
};

type Characters = {
  available: number;
  collectionURI: string;
  items: Character[];
  returned: number;
};

type Character = {
  resourceURI: string;
  name: string;
};

type Stories = {
  available: number;
  collectionURI: string;
  items: Story[];
  returned: number;
};

type Story = {
  resourceURI: string;
  name: string;
  type: string;
};

type Events = {
  available: number;
  collectionURI: string;
  items: [];
  returned: number;
};

export type MarvelApiComicsResponse = {
  data: {
    results: Comic[];
  };
};
