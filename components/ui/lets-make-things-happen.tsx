"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import { TextRotate } from "@/components/ui/text-rotate";

function LetsMakeThingsHappenSection() {
  return (
    <section className="my-10 md:py-20 md:mx-auto bg-accent rounded-[24px] md:rounded-[45px] p-6 sm:p-10 md:p-[60px] relative overflow-hidden">
      <div className="md:pr-[22rem] space-y-4">
        <LayoutGroup>
          <motion.div
            className="flex flex-wrap items-center gap-x-3 text-3xl md:text-4xl font-medium"
            layout
          >
            <motion.span
              layout
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            >
              Let&apos;s make things
            </motion.span>
            <TextRotate
              texts={[
                "happen!",
                "grow 🚀",
                "work",
                "faster",
                "better",
                "click ✽",
                "count",
              ]}
              mainClassName="text-white px-3 py-1 bg-[#FF9B50] overflow-hidden justify-center rounded-lg"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </motion.div>
        </LayoutGroup>

        <p className="text-base md:text-xl text-gray-600">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>

        <Link
          href="/meeting"
          className="block sm:inline-block text-center py-3 px-10 md:px-16 text-base md:text-xl hover:bg-[#FFB982] rounded-[6px] border-2 border-black bg-[#121212] text-white transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]"
        >
          Book a Call
        </Link>
      </div>
      <div className="absolute -top-8 right-8 hidden md:block">
        <Image
          src="/logo/logo.png"
          alt="proposal illustration"
          width={300}
          height={300}
          className="p-8 mt-40"
        />
      </div>
    </section>
  );
}

export default LetsMakeThingsHappenSection;
