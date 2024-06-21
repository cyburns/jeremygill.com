"use client";

import React, { useRef } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import Image from "next/image";
import J_G_1 from "@/public/j-g-1.jpg";
import J_G_7 from "@/public/j-g-7.png";
import J_G_5 from "@/public/j-g-5.png";
import CatPerson from "@/public/cat-person.png";
import ViolentCreatures from "@/public/v-c-1.png";
import PoleCat from "@/public/polecat.png";

const Hero = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 800]);

  const imageClassName =
    "object-contain w-full filter grayscale hover:filter-none transition duration-500";
  const pClass =
    "text-sm font-medium p-1 group-hover:text-black text-white transition duration-500";

  return (
    <div ref={container} className="text-black mt-10 mb-[50rem] z-50">
      <h1 className="text-[24vw] font-black !leading-[0.9]">
        Jeremy <br />
        —Gill
      </h1>

      <motion.div
        style={{ y }}
        className="flex flex-col lg:flex-row space-y-10 justify-center lg:justify-between mt-24 lg:-mt-[18rem] z-50"
      >
        <div className="md:w-[80%] lg:w-[23%] lg:pt-64 flex flex-col group">
          <Image
            src={J_G_5}
            alt="Jeremy Gill"
            placeholder="blur"
            className={imageClassName}
          />
          <p className={pClass}>ACTOR / DIRECTOR</p>
        </div>
        <div className="md:w-[80%] lg:w-[23%] flex flex-col group">
          <Image
            src={J_G_1}
            alt="Jeremy Gill"
            placeholder="blur"
            className={imageClassName}
          />
          <p className={pClass}>ACTOR / DIRECTOR</p>
        </div>
        <div className="md:w-[80%] lg:w-[23%] lg:pt-72 flex flex-col group">
          <Image
            src={CatPerson}
            alt="Jeremy Gill"
            placeholder="blur"
            className={imageClassName}
          />
          <p className={pClass}>CAT PERSON / 2023 HORROR</p>
        </div>
      </motion.div>

      <motion.div
        style={{ y }}
        className="flex flex-col lg:flex-row items-center space-y-10 justify-center lg:justify-between mt-10 lg:-mt-[12rem] z-50"
      >
        <div className="md:w-[80%] lg:w-[23%] lg:pt-48 flex flex-col group">
          <Image
            src={PoleCat}
            alt="Jeremy Gill"
            placeholder="blur"
            className={imageClassName}
          />
          <p className={pClass}>POLECAT / 2023 THRILLER</p>
        </div>
        <div className="md:w-[80%] lg:w-[23%] flex flex-col group">
          <Image
            src={ViolentCreatures}
            alt="Jeremy Gill"
            placeholder="blur"
            className={imageClassName}
          />
          <p className={pClass}>VIOLENT CREATURES / TV MINI SERIES</p>
        </div>
        <div className="md:w-[80%] lg:w-[23%] lg:pt-80 flex flex-col group">
          <Image
            src={J_G_7}
            alt="Jeremy Gill"
            placeholder="blur"
            className={imageClassName}
          />
          <p className={pClass}>ACTOR / DIRECTOR</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
