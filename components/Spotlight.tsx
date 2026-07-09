import { Heading, Text, Stack, Flex } from "@chakra-ui/react";
import Image from "next/image";

export default function Spotlight() {
  return (
    <Stack>
      <Heading as="h1">Meet the Characters</Heading>
      <Flex>
        <Stack>
          <Text>
            Klotilda: Always ready for an adventure, Frog is brave but knows
            when to ask for help. With a big heart, he jumps into challenges
            headfirst, often leading the way for his friends.
          </Text>
          <Image
            src="/frog.png"
            alt="Brave Hearts logo"
            width={100}
            height={100}
            priority
          />
        </Stack>
        <Stack>
          <Text>
            Vladík: Calm and wise, Snake offers thoughtful advice and keeps the
            group grounded. His gentle nature shows that even those who may seem
            different can be kind and caring.
          </Text>
          <Image
            src="/snake.png"
            alt="Brave Hearts logo"
            width={100}
            height={100}
            priority
          />
        </Stack>
        <Stack>
          <Text>
            Miško: Full of energy and always up for a game, Rabbit reminds
            everyone that fun and laughter are just as important as courage and
            wisdom.
          </Text>
          <Image
            src="/rabbit.png"
            alt="Brave Hearts logo"
            width={100}
            height={100}
            priority
          />
        </Stack>
      </Flex>
    </Stack>
  );
}
