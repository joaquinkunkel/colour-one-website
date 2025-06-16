"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  contentParentVariants,
  contentVariants,
} from "../utils/motionVariants";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={contentParentVariants}
        className="container mx-auto px-6 py-10 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 row-start-2 items-center"
      >
        <motion.div variants={contentVariants}>
          <Image
            src="/images/giancarlo-1.png"
            width={890}
            height={1112}
            alt={"Services photo"}
          />
        </motion.div>
        <div className="flex flex-col leading-[2] sticky bottom-[20vh] lg:text-xl container max-w-lg mx-auto px-6 text-center flex flex-col gap-2">
          <motion.h2
            className="font-light text-[40px] leading-tight"
            variants={contentVariants}
          >
            Giancarlo Giammetti
          </motion.h2>
          <motion.p className="font-light text-xl" variants={contentVariants}>
            An interview with the Italian businessman on the power of art to
            enrich life.
          </motion.p>
          <motion.div variants={contentVariants}>
            <Link
              href="#"
              className="font-light text-sm mt-2 text-muted-foreground hover:text-foreground"
            >
              Discover
            </Link>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={contentParentVariants}
        className="container px-6 mx-auto py-8 flex flex-col md:flex-row gap-12"
      >
        <motion.div
          variants={contentVariants}
          className="flex flex-col gap-6 text-center"
        >
          <Image
            src="/images/basquiat-1.png"
            width={1144}
            height={684}
            alt={"Basquiat and Powell: An intimate look"}
          />
          <div className="max-w-md mx-auto flex flex-col gap-4">
            <h3 className="text-[28px] font-light leading-[1.3]">
              Basquiat & Powell: An intimate look
            </h3>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur. Quam dolor consequat et
              ornare ut morbi parturient.
            </p>
            <Link
              href="#"
              className="font-light text-sm mt-2 text-muted-foreground hover:text-foreground"
            >
              Discover
            </Link>
          </div>
        </motion.div>
        <motion.div
          variants={contentVariants}
          className="flex flex-col gap-6 text-center"
        >
          <Image
            src="/images/condo-1.png"
            width={1144}
            height={684}
            alt={"Basquiat and Powell: An intimate look"}
          />
          <div className="max-w-md mx-auto flex flex-col gap-4">
            <h3 className="text-[28px] font-light leading-[1.3]">
              In the studio with George Condo
            </h3>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur. Quam dolor consequat et
              ornare ut morbi parturient.
            </p>
            <Link
              href="#"
              className="font-light text-sm mt-2 text-muted-foreground hover:text-foreground"
            >
              Discover
            </Link>
          </div>
        </motion.div>
        <motion.div
          variants={contentVariants}
          className="flex flex-col gap-6 text-center"
        >
          <Image
            src="/images/warhol-1.png"
            width={1144}
            height={684}
            alt={"Basquiat and Powell: An intimate look"}
          />
          <div className="max-w-md mx-auto flex flex-col gap-4">
            <h3 className="text-[28px] font-light leading-[1.3]">
              Andy Warhol’s Flowers: Pop culture and commercialism
            </h3>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur. Quam dolor consequat et
              ornare ut morbi parturient.
            </p>
            <Link
              href="#"
              className="font-light text-sm mt-2 text-muted-foreground hover:text-foreground"
            >
              Discover
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
