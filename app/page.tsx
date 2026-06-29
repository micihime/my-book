import Image from "next/image";
import { Welcome } from "@/components/Welcome";
import { Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack>
      <Image
        src="/logo.png"
        alt="Brave Hearts logo"
        width={100}
        height={100}
        priority
      />
      <Welcome />
    </Stack>
  );
}
