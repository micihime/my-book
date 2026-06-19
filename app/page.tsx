import Image from "next/image";
import { Welcome } from '@/components/Welcome/Welcome'

export default function Home() {
  return (
    <>
      <Image
        src="/logo.png"
        alt="Brave Hearts logo"
        width={100}
        height={100}
        priority
      />
      <Welcome />
    </>
  );
}
