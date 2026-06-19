import { Container, Group, Text, Anchor } from "@mantine/core";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <Group justify="center" w="100%">
          <Anchor href="https://mhresko.com/" size="sm" c="dimmed" ta="center">
            mhresko.com
          </Anchor>

          {/* <Text size="sm" c="dimmed">
            © {new Date().getFullYear()} Forest Adventures. All rights reserved.
          </Text>
          <Group gap={10} wrap="nowrap">
            <Anchor size="sm" href="#" c="dimmed">
              Privacy Policy
            </Anchor>
            <Anchor size="sm" href="#" c="dimmed">
              Contact
            </Anchor>
            <Anchor size="sm" href="mailto:mitchie.code@gmail.com" c="dimmed">
              Email Us
            </Anchor>
          </Group> */}
        </Group>
      </Container>
    </footer>
  );
}
