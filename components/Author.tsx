import {
  Heading,
  Text,
  Box,
  VStack,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";

export default function Author() {
  return (
    <Box maxW="1000px" mx="auto" px="4" py="16">
      <SimpleGrid columns={{ base: 1, md: 3 }} gap="12">
        <Box>
          <VStack gap="6" align="center" position="sticky" top="8">
            <Flex
              w="240px"
              h="240px"
              bg="teal.50"
              borderRadius="3xl"
              align="center"
              justify="center"
              borderWidth="2px"
              borderColor="teal.100"
              boxShadow="inner"
            >
              <Text fontSize="5xl">✍️</Text>
            </Flex>

            <VStack gap="1" textAlign="center">
              <Heading as="h2" size="lg" color="gray.800">
                The Storyteller
              </Heading>
              <Text
                fontSize="sm"
                fontWeight="bold"
                color="teal.500"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                Author & Illustrator
              </Text>
            </VStack>
          </VStack>
        </Box>

        <Box gridColumn={{ base: "span 1", md: "span 2" }}>
          <VStack gap="8" align="start">
            <VStack gap="2" align="start">
              <Heading as="h1" size="2xl" color="teal.600">
                About the Author
              </Heading>
              <Box h="4px" w="60px" bg="teal.400" borderRadius="full" />
            </VStack>

            <Text fontSize="lg" color="gray.700" lineHeight="relaxed">
              I&apos;ve always loved storytelling, and this book is my way of
              creating something new while learning new skills along the
              way—like writing, illustrating, and even understanding how to make
              and share a book. It&apos;s a journey into the world of
              creativity, marketing, and business that I&apos;ve always dreamed
              of exploring.
            </Text>

            <Box
              bg="gray.50"
              p="6"
              borderRadius="2xl"
              borderWidth="1px"
              borderColor="gray.100"
              width="100%"
            >
              <Text color="gray.600" lineHeight="relaxed" fontStyle="italic">
                &ldquo;This project is deeply personal to me. Growing up, my
                father used to tell me stories about the forest and its
                wonderful creatures. Those stories are precious memories from my
                childhood, and even though I only remember a few of them,
                they&apos;ve inspired me to continue his legacy by writing new
                tales for a new generation.&rdquo;
              </Text>
            </Box>

            <VStack gap="4" align="start" width="100%">
              <Heading as="h3" size="md" color="gray.800">
                Values I Wish to Pass On
              </Heading>
              <Text color="gray.600" lineHeight="tall">
                Through these stories, I hope to share the important lessons
                that I learned the hard way. I want kids to know that it&apos;s
                okay to ask for help, that friendship and kindness are
                priceless, and that it&apos;s perfectly normal to feel afraid
                sometimes.
              </Text>

              <Flex gap="3" wrap="wrap" pt="2">
                {[
                  "🗣️ Communication",
                  "🤝 Honesty",
                  "🌱 Staying True to You",
                  "✨ Embracing Failure",
                ].map((value) => (
                  <Box
                    key={value}
                    bg="teal.50"
                    color="teal.800"
                    px="4"
                    py="2"
                    borderRadius="lg"
                    fontSize="sm"
                    fontWeight="medium"
                  >
                    {value}
                  </Box>
                ))}
              </Flex>
            </VStack>
          </VStack>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
