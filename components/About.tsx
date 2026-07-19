import Link from "next/link";
import {
  Heading,
  Text,
  Button,
  Box,
  SimpleGrid,
  VStack,
  Flex,
} from "@chakra-ui/react";

export default function About() {
  return (
    <Box maxW="900px" mx="auto" px="4" py="16">
      <VStack gap="16" align="stretch">
        <VStack gap="6" align="start">
          <Heading as="h1" size="2xl" color="teal.600">
            About the Book
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap="8" width="100%">
            <VStack gap="4" align="start">
              <Text fontSize="lg" color="gray.700" lineHeight="relaxed">
                <strong>Forest Adventures</strong> is a heartfelt
                children&apos;s book about three unlikely friends—a curious
                Frog, a thoughtful Snake, and a playful Rabbit—living together
                in the enchanting world of the forest.
              </Text>
              <Text color="gray.600" lineHeight="tall">
                Through their adventures, children will learn important life
                lessons about friendship, bravery, and kindness. Each story
                reminds us that it&apos;s okay to be scared, but with good
                friends by your side, you can overcome any obstacle.
              </Text>
            </VStack>

            <Box
              bg="teal.50"
              p="6"
              borderRadius="2xl"
              borderLeft="4px solid"
              borderColor="teal.400"
            >
              <VStack gap="3" align="start">
                <Heading
                  as="h3"
                  size="sm"
                  color="teal.800"
                  textTransform="uppercase"
                  letterSpacing="wider"
                >
                  The Inspiration
                </Heading>
                <Text fontSize="sm" color="teal.900" lineHeight="relaxed">
                  This book was inspired by stories my father used to tell me
                  when I was a child. Although I only remember a few of them,
                  those memories sparked my imagination to create new tales of
                  my own, blending the warmth of his storytelling with fresh
                  ideas that can inspire young readers today.
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>

        <Box
          borderWidth="1px"
          borderColor="gray.100"
          borderRadius="2xl"
          p="8"
          bg="gray.50"
          boxShadow="sm"
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} gap="6">
            <VStack gap="3" align="start" justify="center">
              <Heading as="h2" size="xl" color="gray.800">
                Meet the Characters
              </Heading>
              <Text color="gray.600">
                Together, they explore the forest, learn new things, and help
                each other grow along the way.
              </Text>

              <Button
                colorScheme="teal"
                size="md"
                mt="2"
                asChild
                width="fit-content"
              >
                <Link href="/spotlight">View Character Spotlight</Link>
              </Button>
            </VStack>

            <Flex
              gap="3"
              wrap="wrap"
              align="center"
              justify={{ base: "flex-start", md: "flex-end" }}
            >
              {["🐸 Frog", "🐍 Snake", "🐰 Rabbit"].map((emojiLabel) => (
                <Box
                  key={emojiLabel}
                  bg="white"
                  px="5"
                  py="3"
                  borderRadius="full"
                  fontWeight="bold"
                  boxShadow="xs"
                  borderWidth="1px"
                  borderColor="gray.200"
                  color="gray.700"
                >
                  {emojiLabel}
                </Box>
              ))}
            </Flex>
          </SimpleGrid>
        </Box>

        <Box
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "1fr 2fr" }}
          gap="6"
          pt="4"
        >
          <Box>
            <Heading
              as="h2"
              size="xl"
              color="gray.800"
              position="sticky"
              top="4"
            >
              About the Author
            </Heading>
          </Box>

          <Box>
            <VStack gap="6" align="start">
              <Text color="gray.600" fontSize="md" lineHeight="relaxed">
                As someone who grew up loving these tales, I decided to bring
                them to life for a new generation of readers. I&apos;m
                passionate about storytelling and illustration, and this book is
                the start of a dream to create magical, inspiring stories for
                children.
              </Text>

              <Button
                variant="outline"
                colorScheme="gray"
                asChild
                width="fit-content"
              >
                <Link href="/author">Read My Full Story</Link>
              </Button>
            </VStack>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
}
