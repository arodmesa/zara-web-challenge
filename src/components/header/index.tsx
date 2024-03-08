"use client";
import styles from "./header.module.css";
import { HeartIcon, MarvelIcon } from "@/assets/icons/icons";
import { useContext } from "react";
import { FavoriteContext, ClearSearchContext } from "@/app/providers";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const { favoriteListContext } = useContext(FavoriteContext);
  const { changeState } = useContext(ClearSearchContext);
  const numberOfFavorites = favoriteListContext?.numberOfFavorites;
  return (
    <nav className={styles.headerContainer}>
      <Link className={styles.headerLink} href="/" onClick={changeState}>
        <MarvelIcon />
      </Link>
      <Link
        href={{
          pathname: "/",
          query: { favorites: "active" },
        }}
        className={styles.headerLink}
        onClick={changeState}
      >
        <HeartIcon className={styles.headerHeartIcon} />
        <span className={styles.spanFavTotal}>{numberOfFavorites}</span>
      </Link>
    </nav>
  );
}

export function FavoriteLabel({ isFavorite }: { isFavorite: boolean }) {
  return (
    <AnimatePresence>
      {isFavorite && (
        <motion.div
          key="favoriteLabel"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className={styles.favoritesSpan}
          transition={{ duration: 0.3 }}
        >
          <span>Favorites</span>
          <div style={{ height: "2rem" }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
