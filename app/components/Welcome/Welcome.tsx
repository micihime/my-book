import { Title, Text } from "@mantine/core";
import classes from "./Welcome.module.css";

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{" "}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: "green", to: "blue" }}
        >
          Brave Hearts
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Join three adventurous friends on a journey full of fun, discovery, and excitement! This interactive children&apos;s book brings their story to life with engaging animations, captivating illustrations, and imaginative minigames. Explore the world of friendship, bravery, and teamwork as you dive into the pages of their adventure.
      </Text>
    </>
  );
}
