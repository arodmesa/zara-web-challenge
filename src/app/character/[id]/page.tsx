// eslint-disable-next-line check-file/folder-naming-convention -- its ok
import Image from "next/image";
import { CutIcon } from "@/assets/icons/icons";
import { FavoriteButton } from "@/components/character-card";
import ErrorComponent from "@/components/error";
import ScrollContainerWrapper from "@/components/scroll-container-wrapper";
import { getCharacterComics, getCharacterDetails } from "@/utils/fetch";
import styles from "./page.module.css";

export default function CharacterPage({ params }: { params: { id: string } }) {
  return (
    <main className={styles.mainCharacter}>
      <CharacterInfoTop id={params.id} />
      <Comics id={params.id} />
    </main>
  );
}

async function CharacterInfoTop({ id }: { id: string }) {
  const character = await getCharacterDetails(id);
  if ("error" in character) {
    return <ErrorComponent />;
  }
  const { thumbnail, name, description } = character[0];
  const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;
  return (
    <div className={styles.characterContainer}>
      <CutIcon className={styles.cutIconCharacterDetail} />
      <div className={styles.characterInfo}>
        <div className={styles.imageContainer}>
          <Image src={imageUrl} alt={name} fill />
        </div>
        <div className={styles.characterInfoColumn}>
          <div className={styles.characterInfoRow}>
            <span className={styles.characterName}>{name}</span>
            <FavoriteButton
              id={Number(id)}
              imageUrl={imageUrl}
              name={name}
              className={styles.favoriteIconCharacterDetails}
            />
          </div>
          <p className={styles.characterDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

async function Comics({ id }: { id: string }) {
  const comics = await getCharacterComics(id);
  if ("error" in comics) {
    return <ErrorComponent />;
  }
  return (
    <div className={styles.comicsContainerSection}>
      <span className={styles.comicsSpan}>Comics</span>
      <ScrollContainerWrapper
        hideScrollbars={false}
        vertical={false}
        horizontal
        className={styles.comicsContainer}
      >
        {comics.map(({ dates, title, thumbnail, id: comicId }) => {
          const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;
          const onSaleDateString = dates.find(
            ({ type }) => type === "onsaleDate"
          );
          let year: string | number = "--";
          if (onSaleDateString) {
            const dateObject = new Date(onSaleDateString.date);
            year = dateObject.getFullYear();
          }

          return (
            <Comic
              key={comicId}
              comicTitle={title}
              characterName={title}
              imageUrl={imageUrl}
              year={year}
            />
          );
        })}
      </ScrollContainerWrapper>
    </div>
  );
}

function Comic({
  comicTitle,
  year,
  characterName,
  imageUrl,
}: {
  comicTitle: string;
  year: string | number;
  imageUrl: string;
  characterName: string;
}) {
  return (
    <div className={styles.comicColumm}>
      <div className={styles.comicImageContainer}>
        <Image src={imageUrl} alt={characterName} fill />
      </div>
      <span className={styles.comicTitle}>{comicTitle}</span>
      <span className={styles.comicYear}>{year}</span>
    </div>
  );
}
