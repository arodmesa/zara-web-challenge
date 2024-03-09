import styles from './error.module.css';

export default function ErrorComponent() {
  return (
    <div className={styles.error}>
      <span>Some error has occurred</span>
      <span>Try reloading the page</span>
    </div>
  );
}
