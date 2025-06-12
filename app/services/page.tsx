import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-folio)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          src='/images/image-1.png' width={3552} height={2400} alt={"Cover photo"}
        />
        <h3>
          Colour One is an independent art advisory with more than a decade of experience advising our clients across modern and contemporary art.
        </h3>
      </main>
    </div>
  );
}
