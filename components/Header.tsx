import Link from 'next/link'
import { Flex } from '@chakra-ui/react'

export function Header() {
  return (
    <header>
      <Flex p="4" gap="3" justify="space-between">
        <Link href="/">
          Home
        </Link>
        <Flex gap="3" justify="flex-end">
          <Link href="/about">
            About
          </Link>
          <Link href="/spotlight">
            Character spotlight
          </Link>
          <Link href="/author">
            Author
          </Link>
        </Flex>
      </Flex>
    </header>
  );
}
