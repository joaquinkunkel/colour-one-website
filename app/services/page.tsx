"use client"

import Image from "next/image";
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main>
      <motion.div
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
              ease: "easeInOut" as const,
              staggerChildren: 0.15,
              delay: 0.15,
            },
          },
        }}
        className="container mx-auto px-6 py-10 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 row-start-2 items-center"
      >
        <div className="flex flex-col gap-6 leading-[2] sticky bottom-[20vh] text-md lg:text-xl">
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
            <p >
              <strong>Colour One</strong> is an independent art advisory with
              more than a decade of experience advising our clients across
              modern and contemporary art.
            </p>
          </motion.div>
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              vestibulum diam nec magna sollicitudin posuere. Duis a porttitor
              sem.
            </p>
          </motion.div>
        </div>
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
            src="/images/services-image.png"
            width={1760}
            height={2354}
            alt={"Services photo"}
          />
        </motion.div>
      </motion.div>
    </main>
  );
}
