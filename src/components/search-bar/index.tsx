"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useContext, useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@/assets/icons/icons";
import { ClearSearchContext } from "@/app/providers";
import styles from "./search-bar.module.css";

export default function SearchBar({
  numberOfResults,
}: {
  numberOfResults: number;
}) {
  const { state } = useContext(ClearSearchContext);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const searchText = searchParams.get("search") ?? "";
  const [delayedInputData, setDelayedInputData] = useState(searchText);
  const modifyQueryString = useCallback(
    (name: string, value: string, action: "set" | "delete") => {
      const params = new URLSearchParams(searchParams.toString());
      if (action === "set") {
        params.set(name, value);
      } else {
        params.delete(name);
      }

      return params.toString();
    },
    [searchParams]
  );
  useEffect(() => {
    setDelayedInputData("");
  }, [state]);
  useEffect(() => {
    const getData = setTimeout(() => {
      const updatedQueryString = modifyQueryString(
        "search",
        delayedInputData,
        delayedInputData === "" ? "delete" : "set"
      );
      router.replace(`${pathname}?${updatedQueryString}`);
    }, 700);
    return () => {
      clearTimeout(getData);
    };
  }, [modifyQueryString, delayedInputData, pathname, router]);
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchRow}>
        <MagnifyingGlassIcon />
        <input
          className={styles.inputSearch}
          onChange={(event) => {
            setDelayedInputData(event.target.value);
          }}
          value={delayedInputData}
          placeholder="Search a character..."
        />
      </div>
      <span className={styles.spanNumberResults}>
        {numberOfResults} results
      </span>
    </div>
  );
}
