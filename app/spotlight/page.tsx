import styles from "../page.module.css";
import Spotlight from '@/components/Spotlight'

export default function SpotlightPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Spotlight />
      </main>
    </div>
  );
}
