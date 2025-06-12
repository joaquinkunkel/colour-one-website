import { SiteFooter } from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-folio)]">
      <nav>
        <NavBar />
      </nav>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          src='/images/image-1.png' width={3552} height={2400} alt={"Cover photo"}
        />
        <h3>
          Colour One is an independent art advisory with more than a decade of experience advising our clients across modern and contemporary art.
        </h3>
      </main>
      <SiteFooter />
    </div>
  );
}
