import { HomeCarousel } from "@/components/HomeCarousel";
import Link from "next/link";
import Image from "next/image";

const teamMembers = [
  {
    name: 'CJ Jones',
    role: 'Partner',
  },
    {
    name: 'Thomas Trautmann',
    role: 'PA to Partner',
  },
    {
    name: 'Annabelle Jones',
    role: 'General Manager',
  },
    {
    name: 'Amelia Lowe',
    role: 'Head of Research & Collection Development',
  },
    {
    name: 'Lydia Rivera',
    role: 'Senior Registrar',
  },
    {
    name: 'Hector Rosenfalck',
    role: 'Art Technician',
  },
    {
    name: 'Philip Rebeiz',
    role: 'Partner',
  },
    {
    name: 'Nathalie Roberts',
    role: 'PA to Partner',
  },
    {
    name: 'Maxi Siegrist',
    role: 'Associate Director',
  },
    {
    name: 'Valentin Benoit',
    role: 'Sales Associate',
  },
    {
    name: 'Geri McMeekin',
    role: 'Director of Logistics',
  },
    {
    name: 'Cristian Rizea',
    role: 'Head Technician',
  },
    {
    name: 'Eleanor Dilloway',
    role: 'Director',
  },
    {
    name: 'Britt Cole',
    role: 'Chief Operating Officer',
  },
    {
    name: 'Katie Delane',
    role: 'Executive Assistant',
  },
    {
    name: 'Eliot Engelmaier',
    role: 'Sales and Design Assistant',
  },
    {
    name: 'Aaliyah Kaur',
    role: 'Registrar',
  },
]

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-folio)]">
      <main className="flex flex-col gap-[64px] row-start-2 py-[24] items-center sm:items-start">
        <div className="container w-full mx-auto overflow-x-hidden">
          <HomeCarousel />
        </div>
        <div className="container mx-auto px-[24px]">
          <h3 className="font-light text-center text-[40px] leading-tight">
            Colour One is an independent art advisory with more than a decade of
            experience advising our clients across modern and contemporary art.
          </h3>
        </div>
        <div className="container max-w-[800px] mx-auto px-[24px] text-center flex flex-col gap-2">
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
        </div>
        <div className="container mx-auto px-[24px] grid grid-cols-1 md:grid-cols-5 gap-20 md:items-start xl:items-center">
          <div className="col-span-3 lg:col-span-2 sticky top-20">
            <Image
              className="w-full"
              src="/images/image-5.png"
              alt="team-side-image"
              width={1460}
              height={1946}
            />
          </div>
          <div className="col-span-2 lg:col-span-3">
            <p className="text-xl font-light mb-12">
              Team
            </p>
            <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-3 grid-flow-row lg:max-h-240 gap-4">
                {
                  teamMembers.map((member, index) => (
                    <div key={index}>
                      <p className="text-xl font-light">
                        {member.name}
                      </p>
                      <p className="text-s font-light">
                        {member.role}
                      </p>
                    </div>
                  ))
                }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
