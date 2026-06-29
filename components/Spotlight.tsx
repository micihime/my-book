import { Heading, Text, Stack } from "@chakra-ui/react";
// import Image from "next/image";

export default function Spotlight() {
  return (
    <Stack>
      <Heading as="h1">Meet the Characters</Heading>
      <Text>
        Klotilda: Always ready for an adventure, Frog is brave but knows when to
        ask for help. With a big heart, he jumps into challenges headfirst,
        often leading the way for his friends.
      </Text>
      <Text>
        Vladík: Calm and wise, Snake offers thoughtful advice and keeps the
        group grounded. His gentle nature shows that even those who may seem
        different can be kind and caring.
      </Text>
      <Text>
        Miško: Full of energy and always up for a game, Rabbit reminds everyone
        that fun and laughter are just as important as courage and wisdom.
      </Text>
    </Stack>
  );
}
