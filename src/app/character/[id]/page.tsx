import { FavoriteButton } from "@/components/character-card";
import styles from "./page.module.css";
import ErrorComponent from "@/components/error";
import { getCharacterDetails } from "@/utils/fetch";
import Image from "next/image";
import { CutIcon } from "@/assets/icons/icons";

export default function CharacterPage({ params }: { params: { id: string } }) {
  return (
    <main className={styles.mainCharacter}>
      <CharacterInfoTop id={params.id} />
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
