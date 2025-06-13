import { HomeCarousel } from "@/components/HomeCarousel";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-folio)]">
      <main className="flex flex-col gap-[64px] row-start-2 py-[24] items-center sm:items-start">
        <div className="container w-full mx-auto overflow-x-hidden">
          <HomeCarousel />
        </div>
        <div className="container max-w-[900px] mx-auto px-[24px]">
          <h3 className="font-light text-center text-[40px] leading-tight">
            Colour One is an independent art advisory with more than a decade of
            experience advising our clients across modern and contemporary art.
          </h3>
        </div>
        <div className="container max-w-[800px] mx-auto px-[24px]">
          <section className="text-center flex flex-col gap-2">
          <Image
            className="mb-8"
            src="/images/image-3.png"
            alt="Richard Prince: Same Man"
            width={2652}
            height={1768}
          />
          <h2 className="font-light text-[40px] leading-tight">
            Richard Prince: <span className="whitespace-nowrap">Same Man</span>
          </h2>
          <p className="font-light">
            Louisiana Museum, Copenhagen
            <br />
            17th November 2022 - 10th April 2023
          </p>
          <Link href="special-projects" className="font-light text-muted-foreground hover:text-foreground">
            Discover
          </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
