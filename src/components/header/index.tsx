"use client";
import styles from "./header.module.css";
import { HeartIcon, MarvelIcon } from "@/assets/icons/icons";
import { useContext } from "react";
import { FavoriteContext, ClearSearchContext } from "@/app/providers";
import Link from "next/link";

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
