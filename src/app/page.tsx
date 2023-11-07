import { Cover } from "@/components/Cover";
import { Transition } from "@/components/Transition/Transition";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio GusMolDev - NextJS",
  description: "Portfolio animated ",
};

export default function Home() {
  return (
    <main id="first" className="bg-[#393A47] h-[100vh]">
      <Transition />
      <Cover />
    </main>
  );
}
