import Link from "next/link";
import { Flex, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <footer>
      <Flex p="4" gap="3" justify="space-between" align="center">
        <Link href="https://mhresko.com/">mhresko.com</Link>

        <Flex direction="column" align="center">
          <Text>© {new Date().getFullYear()} Forest Adventures.</Text>
          <Text>All rights reserved.</Text>
        </Flex>

        <Flex gap="4">
          <Link href="#">Contact</Link>
          <Link href="mailto:mitchie.code@gmail.com">Email Us</Link>
        </Flex>
      </Flex>
    </footer>
  );
}
