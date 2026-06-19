import styles from "../page.module.css";
import Author from '@/components/Author'

export default function AuthorPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Author />
      </main>
    </div>
  );
}
