"use client";
import styles from "./header.module.css";
import { HeartIcon, MarvelIcon } from "@/assets/icons/icons";
import { useContext } from "react";
import { FavoriteContext } from "@/app/theme-provider";
import Link from "next/link";

export default function Header() {
  const { favoriteListContext } = useContext(FavoriteContext);
  const numberOfFavorites = favoriteListContext?.numberOfFavorites;
  return (
    <div className={styles.headerContainer}>
      <Link className={styles.headerLink} href="/">
        <MarvelIcon />
      </Link>
      <Link
        href={{
          pathname: "/",
          query: { favorite: "active" },
        }}
        className={styles.headerLink}
      >
        <HeartIcon className={styles.headerHeartIcon} />
        <span className={styles.spanFavTotal}>{numberOfFavorites}</span>
      </Link>
    </div>
  );
}
