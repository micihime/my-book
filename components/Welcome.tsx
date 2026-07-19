import {
  Heading,
  Text,
  Button,
  Box,
  VStack,
  Highlight,
} from "@chakra-ui/react";

export function Welcome() {
  return (
    <Box
      as="section"
      maxW="800px"
      mx="auto"
      px="4"
      py={{ base: "16", md: "24" }}
    >
      <VStack gap="8" textAlign="center">
        <VStack gap="3">
          <Heading
            as="h1"
            size={{ base: "3xl", md: "5xl" }}
            letterSpacing="tight"
            fontWeight="extrabold"
            lineHeight="shorter"
            color="gray.900"
          >
            <Highlight
              query="Brave Hearts"
              styles={{ color: "teal.600", px: "1" }}
            >
              Welcome to Brave Hearts!
            </Highlight>
          </Heading>

          <Text
            fontSize={{ base: "md", md: "xl" }}
            fontWeight="medium"
            color="teal.700"
            letterSpacing="wide"
            textTransform="uppercase"
          >
            An Interactive Storybook Experience
          </Text>
        </VStack>

        <Text
          fontSize={{ base: "md", md: "lg" }}
          color="gray.600"
          lineHeight="relaxed"
          maxW="2xl"
        >
          Join three adventurous friends on a journey full of fun, discovery,
          and excitement! This interactive children&apos;s book brings their
          story to life with engaging animations, captivating illustrations, and
          imaginative minigames. Explore the world of friendship, bravery, and
          teamwork as you dive into the pages of their adventure.
        </Text>

        <Box pt="4">
          <Button
            disabled
            size="lg"
            px="8"
            py="6"
            borderRadius="full"
            fontWeight="bold"
            boxShadow="md"
            _disabled={{
              bg: "gray.100",
              color: "gray.400",
              cursor: "not-allowed",
              boxShadow: "none",
            }}
          >
            Start the Adventure
          </Button>

          <Text fontSize="xs" color="gray.400" mt="2">
            Coming soon to web and mobile browsers!
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
