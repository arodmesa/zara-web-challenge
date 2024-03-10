import { describe, expect, it } from 'vitest';
import {
  getCharactersInfo,
  getCharacterComics,
  getCharacterDetails,
} from '@/utils/fetch';

describe('test getCharactersInfo', () => {
  it('check correct fetch and length of 50 characters', async () => {
    const characters = await getCharactersInfo();
    expect('error' in characters).toBe(false);
    expect(!('error' in characters) && characters.length).toBe(50);
  });
  it('check correct fetch and custom length of 25 characters', async () => {
    const customCharacterNumber = 25;
    const characters = await getCharactersInfo(
      undefined,
      customCharacterNumber,
    );
    expect('error' in characters).toBe(false);
    expect(!('error' in characters) && characters.length).toBe(
      customCharacterNumber,
    );
  });
  it('check correct fetch filtering characters', async () => {
    const customCharacterNumber = 25;
    const searchName = 'am';
    const characters = await getCharactersInfo(
      searchName,
      customCharacterNumber,
    );
    expect('error' in characters).toBe(false);
    const charactersFiltered =
      !('error' in characters) &&
      characters.filter(({ name }) =>
        name.toLowerCase().startsWith(searchName.toLowerCase()),
      );
    expect(!('error' in characters) && characters.length).toBe(
      charactersFiltered && charactersFiltered.length,
    );
  });
});

describe('test getCharacterDetails', () => {
  it('check correct fetch of individual existing character', async () => {
    const character = await getCharacterDetails(1010354);
    expect('error' in character).toBe(false);
    expect(!('error' in character) && character.length).toBe(1);
  });
  it('check fetch with error for non exiting character in api', async () => {
    const characters = await getCharacterDetails(9999999);
    expect('error' in characters).toBe(true);
  });
});

describe('test getCharacterComics', () => {
  it('check correct fetch and length of 20 comics', async () => {
    const comics = await getCharacterComics(1010354);
    expect('error' in comics).toBe(false);
    expect(!('error' in comics) && comics.length).toBe(20);
  });
  it('check correct fetch and custom length of 10 comics', async () => {
    const customCharacterNumber = 10;
    const comics = await getCharacterComics(1010354, customCharacterNumber);
    expect('error' in comics).toBe(false);
    expect(!('error' in comics) && comics.length).toBe(customCharacterNumber);
  });
  it('check fetch with for non exiting character in api, must return an empty array', async () => {
    const comics = await getCharacterComics(9999999);
    expect('error' in comics).toBe(false);
    expect(!('error' in comics) && comics.length).toBe(0);
  });
});
