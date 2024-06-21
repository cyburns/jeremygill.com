"use client";

import React, { forwardRef, useEffect, useState } from "react";
import gsap from "gsap";
import Link from "next/link";

const Navbar = forwardRef<HTMLLIElement>((props, ref) => {
  useEffect(() => {
    const listItems = document.querySelectorAll("li");
    const animations = new Map();

    listItems.forEach((li) => {
      li.addEventListener("mouseenter", () => {
        const animation = gsap.to(li.querySelector(".indicator"), {
          opacity: 1,
          duration: 0.1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
        animations.set(li, animation);
      });

      li.addEventListener("mouseleave", () => {
        const animation = animations.get(li);
        if (animation) {
          animation.kill();
          animations.delete(li);
          gsap.to(li.querySelector(".indicator"), {
            opacity: 0,
            duration: 0.2,
          });
        }
      });
    });
  }, []);

  return (
    <nav className="pt-[20px] fixed left-0 top-0 w-full z-[9999] h-[62px] mix-blend-difference text-white box-border text-[12px]">
      <div className="w-full px-[25px] mx-auto flex flex-row justify-between">
        <div className="flex flex-wrap w-1/3 sm:w-[37.5%]">
          <ul className="z-[999999]" ref={ref as any}>
            <li className="relative">
              <span className="indicator absolute left-[-10px] top-[50%] translate-y-[-50%] w-[5px] h-[5px] bg-white rounded-full opacity-0"></span>
              <Link href="/">
                JEREMY <br /> GILL-
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden sm:flex flex-wrap w-[12.5%] uppercase">
          <ul className="z-[999999]">
            <li className="relative">
              <span className="indicator absolute left-[-10px] top-[50%] translate-y-[-50%] w-[5px] h-[5px] bg-white rounded-full opacity-0"></span>
              <div>actor</div>
            </li>
            <li className="relative">
              <span className="indicator absolute left-[-10px] top-[50%] translate-y-[-50%] w-[5px] h-[5px] bg-white rounded-full opacity-0"></span>
              <div>
                STUDIO<sup>tm</sup>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap w-1/3 sm:w-[12.5%] uppercase">
          <ul className="z-[999999]">
            <li className="relative">
              <span className="indicator absolute left-[-10px] top-[50%] translate-y-[-50%] w-[5px] h-[5px] bg-white rounded-full opacity-0"></span>
              <div>polecat [pc]</div>
            </li>
            <li className="relative">
              <span className="indicator absolute left-[-10px] top-[50%] translate-y-[-50%] w-[5px] h-[5px] bg-white rounded-full opacity-0"></span>
              <div>Violent Creatures</div>
            </li>
          </ul>
        </div>
        <div className="hidden sm:flex flex-wrap w-[25%] uppercase">
          <ul className="z-[999999]">
            <li className="relative">
              <span className="indicator absolute left-[-10px] top-[50%] translate-y-[-50%] w-[5px] h-[5px] bg-white rounded-full opacity-0"></span>
              <a href="">jeremygill@gmail.com</a>
            </li>
            <li className="relative">
              <span className="indicator absolute left-[-10px] top-[50%] translate-y-[-50%] w-[5px] h-[5px] bg-white rounded-full opacity-0"></span>
              <a href="">+1 [413] 854-3541</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-end md:justify-start flex-wrap sm:w-1/3 lg:w-[25%] md:w-[12.5%] uppercase">
          <ul className="z-[999999]">
            <li className="relative">
              <span className="indicator absolute left-[-10px] top-[50%] translate-y-[-50%] w-[5px] h-[5px] bg-white rounded-full opacity-0"></span>
              <a href="https://www.linkedin.com/in/cyburns/">imdb</a>
            </li>
            <li className="relative">
              <span className="indicator absolute left-[-10px] top-[50%] translate-y-[-50%] w-[5px] h-[5px] bg-white rounded-full opacity-0"></span>
              <a href="https://github.com/cyburns">instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
});

export default Navbar;
