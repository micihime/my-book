import { Container, Group, Anchor } from "@mantine/core";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Group w="100%">
          <Anchor href="/" className={styles.logo}>
            Brave
          </Anchor>
          {/* Navigation items can be added here later */}
        </Group>
      </Container>
    </header>
  );
}
