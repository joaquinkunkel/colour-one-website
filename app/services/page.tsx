"use client"

import Image from "next/image";
import { motion } from "framer-motion"
import { contentParentVariants, contentVariants } from "../utils/motionVariants";

export default function Home() {
  return (
    <main>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={contentParentVariants}
        className="container mx-auto px-6 py-10 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 row-start-2 items-center"
      >
        <div className="flex flex-col gap-6 leading-[2] sticky bottom-[20vh] text-lg lg:text-xl">
          <motion.div
            variants={contentVariants}
          >
            <p >
              <strong>Colour One</strong> is an independent art advisory with
              more than a decade of experience advising our clients across
              modern and contemporary art.
            </p>
          </motion.div>
          <motion.div
            variants={contentVariants}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              vestibulum diam nec magna sollicitudin posuere. Duis a porttitor
              sem.
            </p>
          </motion.div>
        </div>
        <motion.div
          variants={contentVariants}
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
