'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useContext, useEffect } from 'react';
import { MagnifyingGlassIcon } from '@/assets/icons/icons';
import { InputSearchContext } from '@/app/providers';
import styles from './search-bar.module.css';

export default function SearchBar({
  numberOfResults,
}: {
  numberOfResults: number;
}) {
  const { inputState, setInputState } = useContext(InputSearchContext);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const modifyQueryString = useCallback(
    (name: string, value: string, action: 'set' | 'delete') => {
      const params = new URLSearchParams(searchParams.toString());
      if (action === 'set') {
        params.set(name, value);
      } else {
        params.delete(name);
      }

      return params.toString();
    },
    [searchParams],
  );

  useEffect(() => {
    const getData = setTimeout(() => {
      const updatedQueryString = modifyQueryString(
        'search',
        inputState ?? '',
        inputState === '' ? 'delete' : 'set',
      );
      router.replace(`${pathname}?${updatedQueryString}`);
    }, 600);
    return () => {
      clearTimeout(getData);
    };
  }, [modifyQueryString, inputState, pathname, router]);
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchRow}>
        <MagnifyingGlassIcon />
        <input
          className={styles.inputSearch}
          onChange={event => {
            setInputState && setInputState(event.target.value);
          }}
          value={inputState}
          placeholder="Search a character..."
        />
      </div>
      <span className={styles.spanNumberResults}>
        {numberOfResults} results
      </span>
    </div>
  );
}
