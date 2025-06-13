import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-folio)]">
      <main className="flex flex-col gap-[64px] row-start-2 py-[24] items-center sm:items-start">
        <div className="container max-w-[900px] mx-auto px-[24px]">
          <Image
            src='/images/image-1.png' width={3552} height={2400} alt={"Cover photo"}
          />
        </div>
        <div className="container max-w-[900px] mx-auto px-[24px]">
          <h3 className="font-light text-center text-[32px] leading-tight">
            Colour One is an independent art advisory with more than a decade of experience advising our clients across modern and contemporary art.
          </h3>
        </div>
      </main>
    </div>
  );
}
