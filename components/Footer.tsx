import Link from "next/link";
import { Flex, Text, Box } from "@chakra-ui/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Clean, reusable styling for footer links
  const linkStyles = {
    color: "teal.700",
    fontWeight: "medium",
    fontSize: "sm",
    transition: "color 0.2s ease",
    _hover: { color: "teal.500" },
  };

  return (
    <Box
      as="footer"
      borderTop="1px solid"
      borderColor="teal.100"
      bg="teal.50/30"
    >
      <Flex
        p="6"
        gap="4"
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
        direction={{ base: "column", md: "row" }}
      >
        <Box {...linkStyles}>
          <Link
            href="https://mhresko.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            mhresko.com
          </Link>
        </Box>

        <Flex direction="column" align="center" gap="0.5">
          <Text fontSize="sm" fontWeight="medium" color="teal.800">
            © {currentYear} Forest Adventures.
          </Text>
          <Text fontSize="xs" color="gray.500">
            All rights reserved.
          </Text>
        </Flex>

        <Flex gap="6">
          <Box {...linkStyles}>
            <Link href="#">Contact</Link>
          </Box>
          <Box {...linkStyles}>
            <Link href="mailto:mitchie.code@gmail.com">Email Us</Link>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
