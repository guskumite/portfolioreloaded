"use client";
import { fadeIn } from "@/utils/motionTransitions";
import { motion } from "framer-motion";
import Link from "next/link";
import { socialNetworks } from "./dataHeader";
import React, { useState } from "react";

export function Header() {
  const [selectedLang, setSelectedLang] = useState(0);

  let fourthClassName =
    "my-3 text-3xl text-center text-white md:text-left md:text-lg bg-zinc-800 bg-opacity-100";
  return (
    <div className="absolute z-20 inline-block w-full top-5 md:top-10">
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <div className="container justify-between mx-auto md:flex">
          <Link href="/">
            <h1 id="fourth" className={fourthClassName}>
              Gustavo Molano
              <span className="text-zinc-500">Dev</span>
            </h1>
          </Link>
          <div className="flex flex-row absolute top-[57vh] left-[10vw] items-center justify-center gap-7">
            {socialNetworks.map(({ logo, src, id }) => (
              <Link
                id={id}
                key={src}
                href={src}
                target="_blank"
                className="transition-all duration-300 hover:text-zinc-500"
              >
                {logo}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
