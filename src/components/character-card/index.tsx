'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { FavoriteContext } from '@/app/providers';
import { HeartIcon, CutIcon, HeartIconOutline } from '@/assets/icons/icons';
import styles from './character-card.module.css';

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
    default: { height: '0.375rem' },
    hovered: { height: '100%' },
  };
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  return (
    <motion.div
      role="button"
      tabIndex={0}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`${styles.container} ${className}`}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onClick={() => {
        router.push(`/character/${id}`);
      }}
      onKeyDown={event => {
        if (event.key === 'Enter') {
          router.push(`/character/${id}`);
        }
      }}
    >
      <div className={styles.imageContainer}>
        <Image src={imageUrl} alt={name} fill sizes="12.5rem" />
      </div>
      <div className={styles.infoContainer}>
        <CutIcon className={styles.cutIcon} />
        <motion.span
          className={styles.motionSpan}
          variants={variants}
          transition={{ duration: 0.3 }}
          animate={isHovered ? 'hovered' : 'default'}
        />
        <div className={styles.row}>
          <span className={styles.name}>{name}</span>
          <FavoriteButton
            isFavoriteProp={isFavoriteCard}
            id={id}
            imageUrl={imageUrl}
            name={name}
            isHovered={isHovered}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function FavoriteButton({
  isFavoriteProp,
  id,
  imageUrl,
  name,
  isHovered,
  className = '',
}: {
  isFavoriteProp?: boolean;
  id: number;
  isHovered?: boolean;
  name: string;
  imageUrl: string;
  className?: string;
}) {
  const { favoriteListContext, dispatchFavoriteActions } =
    useContext(FavoriteContext);
  const isFavorite = isFavoriteProp
    ? true
    : id in (favoriteListContext?.favorites ?? {});
  return (
    <button
      type="button"
      className={styles.buttonContainer}
      onClick={event => {
        event.stopPropagation();
        if (isFavorite) {
          dispatchFavoriteActions &&
            dispatchFavoriteActions({ type: 'removeFavorite', data: id });
        } else {
          dispatchFavoriteActions &&
            dispatchFavoriteActions({
              type: 'addFavorite',
              data: { id, name, imageUrl },
            });
        }
      }}
      onKeyDown={event => {
        event.stopPropagation();
      }}
    >
      <AnimatePresence mode="popLayout">
        {isFavorite ? (
          <motion.div
            key="heartFilled"
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
          >
            <HeartIcon
              className={`${styles.heartIcon} ${
                isHovered ? styles.whiteColor : styles.redColor
              } ${className}`}
            />
          </motion.div>
        ) : (
          <motion.div
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            key="heartOutline"
          >
            <HeartIconOutline
              className={`${styles.heartIconOutline} ${className}`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
