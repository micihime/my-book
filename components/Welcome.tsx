import { Heading, Text, Button, Stack } from '@chakra-ui/react'

export function Welcome() {
  return (
    <Stack>
      <Heading as="h1">
        Welcome to Brave Hearts
      </Heading>
      <Text>
        Join three adventurous friends on a journey full of fun, discovery, and
        excitement! This interactive children&apos;s book brings their story to
        life with engaging animations, captivating illustrations, and
        imaginative minigames. Explore the world of friendship, bravery, and
        teamwork as you dive into the pages of their adventure.
      </Text>
      <Button disabled>Start the Adventure</Button>
    </Stack>
  );
}
