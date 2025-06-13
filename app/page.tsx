import { HomeCarousel } from "@/components/HomeCarousel";
import Link from "next/link";
import Image from "next/image";
import { featuredWorks, teamMembers } from './data/homepage.js'


export default function Home() {
  return (
    <div className="font-[family-name:var(--font-folio)]">
      <main className="flex flex-col gap-[64px] row-start-2 py-[24] items-center sm:items-start">
        <div className="container w-full mx-auto overflow-x-hidden">
          <HomeCarousel />
        </div>
        <div className="container mx-auto px-[24px]">
          <h3 className="font-light text-center text-[40px] leading-tight max-w-[1000px] mx-auto">
            Colour One is an independent art advisory with more than a decade of
            experience advising our clients across modern and contemporary art.
          </h3>
        </div>
        {featuredWorks.map((featuredWork, index) => (
          <div key={index} className="container max-w-[800px] mx-auto px-[24px] text-center flex flex-col gap-2">
            <Image
              className="mt-8 mb-12"
              src={featuredWork.imageSrc}
              alt={featuredWork.imageAlt}
              width={featuredWork.imageWidth}
              height={featuredWork.imageHeight}
            />
            {featuredWork.eyebrowText && <p className="font-light italic mb-2">{featuredWork.eyebrowText}</p>}
            <h2 className="font-light text-[40px] leading-tight">
              {featuredWork.title}
            </h2>
            <p className="font-light text-xl">{featuredWork.caption}</p>
            <Link
              href={featuredWork.href}
              className="font-light mt-2 text-muted-foreground hover:text-foreground"
            >
              Discover
            </Link>
          </div>
        ))}
        <div className="container py-8 mx-auto px-[24px] grid grid-cols-1 md:grid-cols-5 gap-20 md:items-start xl:items-center">
          <div className="col-span-3 lg:col-span-2 md:sticky top-20">
            <Image
              className="w-full"
              src="/images/image-5.png"
              alt="team-side-image"
              width={1460}
              height={1946}
            />
          </div>
          <div className="col-span-2 lg:col-span-3">
            <p className="text-xl font-light mb-12">Team</p>
            <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-3 grid-flow-row lg:max-h-240 gap-4">
              {teamMembers.map((member, index) => (
                <div key={index}>
                  <p className="text-xl font-light">{member.name}</p>
                  <p className="text-s font-light">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
