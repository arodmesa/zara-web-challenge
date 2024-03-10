'use client';
import { useContext } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { HeartIcon, MarvelIcon } from '@/assets/icons/icons';
import { FavoriteContext, InputSearchContext } from '@/app/providers';
import styles from './header.module.css';

export default function Header() {
  const { favoriteListContext } = useContext(FavoriteContext);
  const { setInputState } = useContext(InputSearchContext);
  const numberOfFavorites = favoriteListContext?.numberOfFavorites;
  return (
    <nav className={styles.headerContainer}>
      <Link
        className={styles.headerLink}
        href="/"
        onClick={() => {
          setInputState && setInputState('');
        }}
      >
        <MarvelIcon />
      </Link>
      <Link
        href={{
          pathname: '/',
          query: { favorites: 'active' },
        }}
        className={styles.headerLink}
        onClick={() => {
          setInputState && setInputState('');
        }}
      >
        <HeartIcon className={styles.headerHeartIcon} />
        <span id="totalFavorites" className={styles.spanFavTotal}>
          {numberOfFavorites ?? 0}
        </span>
      </Link>
    </nav>
  );
}

export function FavoriteLabel({ isFavorite }: { isFavorite: boolean }) {
  return (
    <AnimatePresence>
      {Boolean(isFavorite) && (
        <motion.div
          key="favoriteLabel"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className={styles.favoritesSpan}
          transition={{ duration: 0.3 }}
        >
          <span>Favorites</span>
          <div style={{ height: '2rem' }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
