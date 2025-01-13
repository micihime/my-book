import { Button, Group, Tooltip } from "@mantine/core";
import { Welcome } from "./components/Welcome/Welcome";

export default function HomePage() {
  return <>
    <Welcome />
    <Group justify="center" mt="xl">
      <Tooltip label="Coming soon!">
        <Button disabled>Start the Adventure</Button>
      </Tooltip>
    </Group>
    {/* <Text>Welcome to the Forest Adventures!</Text>
  <Text>
    Join Frog, Snake, and Rabbit on their exciting journeys through the forest, where they discover the true meaning of friendship, kindness, and courage. Inspired by tales passed down through generations, this heartwarming book teaches children that it&apos;s okay to be afraid, and that friends are always there to support one another.
  </Text>
  <Text>
    Explore the magical world of these three brave friends, learn about their unique stories, and watch as they come to life with fun animations like Frog jumping into a pond and Rabbit leaving playful paw prints! Stay tuned for interactive minigames that let you be part of their adventures.
  </Text>
  <Text>Ready to dive into the adventure?</Text>
  <Group justify="center" mt="xl">
    <Button component="a" href="about">Preview the Book</Button>
  </Group> */}
    {/* <ColorSchemeToggle /> */}
  </>
}
