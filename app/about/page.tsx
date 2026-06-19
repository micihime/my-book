import styles from "../page.module.css";
import About from '@/components/About'

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <About />
      </main>
    </div>
  );
}
