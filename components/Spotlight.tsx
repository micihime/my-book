import {
  Heading,
  Text,
  SimpleGrid,
  Box,
  Flex,
  VStack,
  Badge,
} from "@chakra-ui/react";
import Image from "next/image";

// Character data structure
export interface Character {
  name: string;
  title: string;
  role: string;
  trait: string;
  bio: string;
  src: string;
}

export default function Spotlight() {
  const characters: Character[] = [
    {
      name: "Klotilda",
      title: "The Courageous Leader",
      role: "Frog",
      trait: "Brave & Resilient",
      bio: "Always ready for an adventure, Klotilda is a tiny frog with an incredibly massive heart. She never hesitates to step into the unknown, leading her companions through murky swamps and deep forests alike. Despite her fearless exterior, Klotilda's truest strength lies in her humility—she knows exactly when a challenge is too large to face alone and isn't afraid to ask her friends for help. Armed with her trusty lily-pad shield and a joyful leap, she inspires everyone around her to bounce back from failure.",
      src: "/frog.png",
    },
    {
      name: "Vladík",
      title: "The Silent Philosopher",
      role: "Snake",
      trait: "Wise & Grounded",
      bio: "Calm, deliberate, and deeply thoughtful, Vladík provides the steady anchor that the energetic team often needs. While others might rush blindly into situations, Vladík prefers to observe, slithering ahead to scout paths and offering quiet, profound advice that has saved the group from countless traps. His gentle nature serves as a powerful reminder to the world that appearances can be deceiving—proving that even those who seem mysterious or intimidating can possess the kindest and most fiercely loyal souls.",
      src: "/snake.png",
    },
    {
      name: "Miško",
      title: "The Heart of the Party",
      role: "Rabbit",
      trait: "Energetic & Joyful",
      bio: "Bursting with boundless energy and an unshakeable sense of optimism, Miško is a whirlwind of fun. He firmly believes that no adventure is complete without a healthy dose of laughter and games. Whenever the journey grows tiring or spirits begin to fade, Miško is right there to crack a joke, initiate a friendly race, or remind his friends that joy and playfulness are just as crucial to overcoming darkness as courage and wisdom. His quick reflexes are matched only by his quick wit.",
      src: "/rabbit.png",
    },
  ];

  return (
    <Box maxW="1200px" mx="auto" px="4" py="12">
      <VStack gap="2" textAlign="center" mb="12">
        <Heading as="h1" size="2xl" color="teal.600">
          Meet the Characters
        </Heading>
        <Text fontSize="lg" color="gray.500">
          Discover the unique personalities, strengths, and stories of the Brave
          Hearts team.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 3 }} gap="8">
        {characters.map((char: Character) => (
          <Box
            key={char.name}
            borderWidth="1px"
            borderRadius="xl"
            overflow="hidden"
            p="6"
            boxShadow="md"
            bg="white"
            transition="all 0.3s"
            _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
            display="flex"
            flexDirection="column"
          >
            <VStack gap="4" align="stretch" height="100%">
              <Flex
                justify="center"
                align="center"
                bg="gray.50"
                py="6"
                borderRadius="lg"
              >
                <Image
                  src={char.src}
                  alt={`${char.name} the ${char.role}`}
                  width={120}
                  height={120}
                  style={{ objectFit: "contain" }}
                  priority
                />
              </Flex>

              <VStack gap="1" align="start">
                <Flex width="100%" justify="space-between" align="center">
                  <Heading as="h3" size="md">
                    {char.name}
                  </Heading>
                  <Badge colorScheme="teal" variant="subtle">
                    {char.trait}
                  </Badge>
                </Flex>
                <Text
                  fontSize="sm"
                  fontWeight="bold"
                  color="teal.500"
                  textTransform="uppercase"
                >
                  {char.title} ({char.role})
                </Text>
              </VStack>

              <Text color="gray.600" fontSize="sm" lineHeight="tall" flex="1">
                {char.bio}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
