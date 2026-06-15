import { Button, Group, Tooltip } from "@mantine/core";
import { Welcome } from "./components/Welcome/Welcome";
import { Footer } from "./components/Footer/Footer";
import styles from "./page.module.css";
import { Header } from "./components/Header/Header";

export default function HomePage() {
  return (
    <div className={styles.pageContainer}>
      <Header />

      <main className={styles.contentWrap}>
        <Welcome />
      </main>
      <Footer />
    </div>
  );
}
