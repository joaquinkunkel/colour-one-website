"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  contentParentVariants,
  contentVariants,
} from "../utils/motionVariants";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Home() {
  return (
    <main>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={contentParentVariants}
        className="container mx-auto px-6 py-2 md:py-8 grid grid-cols-1 xl:items-center lg:grid-cols-5 gap-12 md:gap-20 row-start-2 items-start"
      >
        <motion.div
          className="col-span-5 lg:col-span-2 xl:col-span-3"
          variants={contentVariants}
        >
          <Image
            src="/images/image-2.png"
            width={3552}
            height={2400}
            alt={"Contact photo"}
          />
        </motion.div>
        <div
          id="contact-info"
          className="flex flex-col col-span-5 lg:col-span-3 xl:col-span-2 leading-[2] lg:text-xl container mx-auto flex flex-col gap-2"
        >
          <motion.div variants={contentVariants}>
            <h1 className="text-4xl font-light mb-8">Contact</h1>
          </motion.div>

          <motion.div
            className="font-light text-base"
            variants={contentVariants}
          >
            <div className="container mx-auto flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <Link
                  href="mailto:info@colourone.com"
                  className="text-foreground hover:text-muted-foreground transition-colors"
                >
                  info@colourone.com
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <Link
                  href="tel:+442074950700"
                  className="block text-foreground hover:text-muted-foreground transition-colors"
                >
                  +44 (0) 207 495 0700
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
