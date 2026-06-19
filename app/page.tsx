import Image from "next/image";
import styles from "./page.module.css";
import { Welcome } from '@/components/Welcome/Welcome'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="Brave Hearts logo"
          width={100}
          height={20}
          priority
        />
        <Welcome />
      </main>
    </div>
  );
}
