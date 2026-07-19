"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flex, Box } from "@chakra-ui/react";

export function Header() {
  const pathname = usePathname();

  // Helper function to handle conditional styling cleanly
  const getLinkStyles = (href: string) => {
    const isActive = pathname === href;
    return {
      fontWeight: isActive ? "bold" : "medium",
      color: isActive ? "teal.600" : "gray.600",
      _hover: { color: isActive ? "teal.700" : "teal.500" },
      transition: "color 0.2s, font-weight 0.2s",
      px: "2",
      py: "1",
      borderRadius: "md",
    };
  };

  return (
    <Box as="header" borderBottom="1px solid" borderColor="gray.100" bg="white">
      <Flex
        p="4"
        gap="6"
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
      >
        <Box {...getLinkStyles("/")}>
          <Link href="/">Home</Link>
        </Box>

        <Flex gap="4" justify="flex-end" align="center">
          <Box {...getLinkStyles("/about")}>
            <Link href="/about">About</Link>
          </Box>
          <Box {...getLinkStyles("/spotlight")}>
            <Link href="/spotlight">Character spotlight</Link>
          </Box>
          <Box {...getLinkStyles("/author")}>
            <Link href="/author">Author</Link>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
