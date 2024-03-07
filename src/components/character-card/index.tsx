"use client";
import styles from "./character-card.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { HeartIcon, CutIcon, HeartIconOutline } from "@/assets/icons/icons";
import { useState } from "react";
import { useContext } from "react";
import { FavoriteContext } from "@/app/providers";
import { useRouter } from "next/navigation";

type CharacterCardProps = {
  id: number;
  name: string;
  imageUrl: string;
  className?: string;
  isFavoriteCard?: boolean;
};

export default function CharacterCard({
  id,
  name,
  imageUrl,
  className,
  isFavoriteCard,
}: CharacterCardProps) {
  const variants = {
    default: { height: "0.375rem" },
    hovered: { height: "100%" },
  };
  const [isHovered, setIsHovered] = useState(false);
  const { favoriteListContext, dispatchFavoriteActions } =
    useContext(FavoriteContext);
  const isFavorite = isFavoriteCard
    ? true
    : id in (favoriteListContext?.favorites ?? {});
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`${styles.container} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => router.push(`/character/${id}`)}
    >
      <div className={styles.imageContainer}>
        <Image src={imageUrl} alt={name} fill />
      </div>
      <div className={styles.infoContainer}>
        <CutIcon className={styles.cutIcon} />
        <motion.span
          className={styles.motionSpan}
          variants={variants}
          transition={{ duration: 0.3 }}
          animate={isHovered ? "hovered" : "default"}
        />
        <div className={styles.row}>
          <span className={styles.name}>{name}</span>
          {isFavorite ? (
            <button
              type="button"
              className={styles.buttonContainer}
              onClick={(event) => {
                event.stopPropagation();
                dispatchFavoriteActions &&
                  dispatchFavoriteActions({ type: "removeFavorite", data: id });
              }}
            >
              <HeartIcon
                className={`${styles.heartIcon} ${
                  isHovered ? styles.whiteColor : styles.redColor
                }`}
              />
            </button>
          ) : (
            <button
              type="button"
              className={styles.buttonContainer}
              onClick={(event) => {
                event.stopPropagation();
                dispatchFavoriteActions &&
                  dispatchFavoriteActions({
                    type: "addFavorite",
                    data: { id, name, imageUrl },
                  });
              }}
            >
              <HeartIconOutline className={styles.heartIconOutline} />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
