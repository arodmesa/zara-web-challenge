"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./search-bar.module.css";
import { MagnifyingGlassIcon } from "@/assets/icons/icons";
import { useCallback } from "react";

export default function SearchBar({
  numberOfResults,
}: {
  numberOfResults: number;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const searchText = searchParams.get("search") ?? "";
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const inputHandler = (text: string) => {
    const updatedQueryString = createQueryString("search", text);
    router.replace(pathname + "?" + updatedQueryString);
  };
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchRow}>
        <MagnifyingGlassIcon />
        <input
          className={styles.inputSearch}
          onChange={(event) => inputHandler(event.target.value)}
          value={searchText}
          placeholder="Search a character..."
        />
      </div>
      <span className={styles.spanNumberResults}>
        {numberOfResults} results
      </span>
    </div>
  );
}
