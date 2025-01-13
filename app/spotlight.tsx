import { Title, Text } from "@mantine/core";

export default function Spotlight() {
    return (
        <>
            {/* Character Spotlights: Introduce the three friends with small illustrations and short bios. For example: */}
            <Title>Meet the Characters</Title>
            <Text>
                Klotilda: Always ready for an adventure, Frog is brave but knows when to ask for help. With a big heart, he jumps into challenges headfirst, often leading the way for his friends.
            </Text>
            <Text>
                Vladík: Calm and wise, Snake offers thoughtful advice and keeps the group grounded. His gentle nature shows that even those who may seem different can be kind and caring.
            </Text>
            <Text>
                Miško: Full of energy and always up for a game, Rabbit reminds everyone that fun and laughter are just as important as courage and wisdom.
            </Text>
            {/* Interactive Element: Clicking on the characters could trigger a small animation or sound related to their personalities. */}
        </>
    );
}