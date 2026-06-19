import Link from 'next/link'
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          Home
        </Link>
        <Link href="/about" className={styles.logo}>
          About
        </Link>
        <Link href="/spotlight" className={styles.logo}>
          Meet the characters
        </Link>
        <Link href="/author" className={styles.logo}>
          Author
        </Link>
      </div>
    </header>
  );
}
