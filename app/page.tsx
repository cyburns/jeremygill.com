"use client";

import { useEffect, useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import { AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();

    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  return (
    <main className="-z-50 overflow-hidden max-w-[100%] bg-white p-5">
      <AnimatePresence mode="wait">
        {isLoading && <SplashScreen />}
      </AnimatePresence>
      <Hero />
    </main>
  );
}
