"use client"; // To do: Remove this once motion.div is extracted into imported component?

import Image from "next/image";
import { motion } from "framer-motion";
import {
  contentParentVariants,
  viewportOnce,
  contentVariants,
} from "../utils/motionVariants";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-folio)]">
      <main className="flex flex-col gap-8 md:gap-16 row-start-2 items-center sm:items-start">
        <motion.div
          className="container mx-auto flex flex-col gap-8 md:gap-16 px-6 row-start-2 items-center sm:items-start"
          variants={contentParentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div
            variants={contentVariants}
            className="container w-full mx-auto overflow-x-hidden"
          >
            <Image
              key={1}
              src="/images/richard-prince-0.png"
              width={2358}
              height={2354}
              alt={"Cover photo"}
            />
          </motion.div>
          <motion.div
            variants={contentVariants}
            className="container w-full mx-auto overflow-x-hidden"
          >
            <div className="container mx-auto justify-between flex md:flex-row flex-col gap-4">
              <h3 className="font-light text-[40px] text-center md:text-left leading-tight">
                Richard Prince: Same Man
              </h3>
              <p className="text-xl font-light text-center md:text-right">
                Louisiana Museum, Copenhagen
                <br />
                17th November 2022 - 10th April 2023
              </p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={contentParentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="container px-6 mx-auto text-lg flex flex-col-reverse md:grid md:grid-cols-5 gap-8 md:gap-12"
        >
          <motion.div
            variants={contentVariants}
            className="col-span-4 md:col-span-2 leading-[1.8] font-light flex flex-col gap-8"
          >
            <p>
              {`One of the most influential US artists from the 1980s onwards and a
              central figure of American ‘The Pictures Generation’, Richard Prince
              (b. 1949) often uses banal images from our entertainment and
              consumption culture, which he twists and transforms in a way where
              the ordinary is "uplifted" into something both strange and
              seductive.
              `}
            </p>
            <p>
              {`In art historical terms Prince belongs to the Pictures
              Generation, known for appropriating – that is, ‘stealing’ – existing
              images. In so doing, Prince undermines the idea that an artist will
              always have something recognisable about them, a style that binds
              their different groups of works together. Prince is an ambiguous
              figure and his style is subject to variation. In isolation this
              sometimes aids the impression that his works are inaccessible – that
              they float around without a creator. Nevertheless, all of Prince’s
              work revolves around identity, thus turning his visual world into a
              portrait of the late twentieth-century.`}
            </p>
            <p>
              {`
              In his work, Prince highlights the marginal and banal aspects of society: jokes,
              photographs, advertisements, idol worship and other forms of
              "everyday cult". He manages to identify and sample visual codes and
              finely tune them so that they become seductive and strange despite
              their banality.`}
            </p>
          </motion.div>
          <motion.div
            variants={contentVariants}
            className="col-span-1 md:col-span-3 grid grid-cols-2 md:flex md:flex-col gap-8 w-full"
          >
            <Image
              src="/images/richard-prince-1.png"
              width={3552}
              height={2400}
              alt={"Cover photo"}
            />
            <Image
              src="/images/richard-prince-2.png"
              width={3552}
              height={2400}
              alt={"Cover photo"}
            />
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
