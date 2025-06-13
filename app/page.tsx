"use client"; // To do: Remove this once motion.div is extracted into imported component?

import { HomeCarousel } from "@/components/HomeCarousel";
import Link from "next/link";
import Image from "next/image";
import { featuredWorks, teamMembers } from "./data/homepage.js";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-folio)]">
      <main className="flex flex-col gap-[64px] row-start-2 pb-[24] pt-[80] sm:pt-[0] items-center sm:items-start">
        <div className="container w-full mx-auto overflow-x-hidden">
          <HomeCarousel />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeInOut", delay: 0.15 },
          }}
          viewport={{ once: true }}
          className="container w-full mx-auto overflow-x-hidden"
        >
          <div className="container mx-auto px-[24px]">
            <h3 className="font-light text-center text-[40px] leading-tight max-w-[1000px] mx-auto">
              Colour One is an independent art advisory with more than a decade
              of experience advising our clients across modern and contemporary
              art.
            </h3>
          </div>
        </motion.div>
        {featuredWorks.map((featuredWork, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {
                opacity: 0,
                y: 80,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeInOut",
                  staggerChildren: 0.1,
                  delay: 0.15,
                },
              },
            }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div
              key={index}
              className="container max-w-[800px] mx-auto px-[24px] text-center flex flex-col gap-2"
            >
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 60,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  },
                }}
              >
                <Image
                  className="mt-8 mb-12"
                  src={featuredWork.imageSrc}
                  alt={featuredWork.imageAlt}
                  width={featuredWork.imageWidth}
                  height={featuredWork.imageHeight}
                />
              </motion.div>

              {featuredWork.eyebrowText && (
                <motion.p
                  className="font-light italic mb-2"
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 60,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: "easeInOut" },
                    },
                  }}
                >
                  {featuredWork.eyebrowText}
                </motion.p>
              )}
              <motion.h2
                className="font-light text-[40px] leading-tight"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 60,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
              >
                {featuredWork.title}
              </motion.h2>
              <motion.p
                className="font-light text-xl"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  },
                }}
              >
                {featuredWork.caption}
              </motion.p>
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  },
                }}
              >
                <Link
                  href={featuredWork.href}
                  className="font-light mt-2 text-muted-foreground hover:text-foreground"
                >
                  Discover
                </Link>
              </motion.div>
            </div>
          </motion.div>
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
          <motion.div
            className="col-span-2 lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { y: 60, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  ease: "easeInOut",
                  staggerChildren: 0.15,
                  delay: 0.15,
                },
              },
            }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-xl font-light mb-12"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.3, ease: "easeInOut" },
                },
              }}
            >
              Team
            </motion.p>
            <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-3 grid-flow-row lg:max-h-240 gap-4">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { y: 12, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: { duration: 0.3, ease: "easeInOut" },
                    },
                  }}
                >
                  <p className="text-xl font-light">{member.name}</p>
                  <p className="text-s font-light">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
