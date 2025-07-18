"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import * as THREE from "three";
// @ts-expect-error: vanta.globe has no TypeScript types
import GLOBE from "vanta/dist/vanta.globe.min";
import Button from "./Button";

export default function HeroSection() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<ReturnType<typeof GLOBE> | null>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x87c5ed,
          backgroundColor: 0xd4e5f0,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);


  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Vanta Background */}
      <div
        ref={vantaRef}
        className="absolute inset-0 w-full h-full scale-x-[-1] z-0"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 gap-y-10 md:gap-y-0 sm:mt-0 mt-6 ">
        {/* Right Animation (First on mobile) */}
      

        {/* Left Content (Second on mobile) */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4 ">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:text-5xl text-3xl font-extrabold text-transparent bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 bg-clip-text"
          >
            MSE PLASTIC INDUSTRIES 
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto md:mx-0"
          >
            Manufacturer & Importer of Plastic Products.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-6 flex justify-center md:justify-start"
          >
            <Button />
          </motion.div>
        </div>
          <div className="w-full md:w-1/2 flex justify-center items-center ">
          <Player
            autoplay
            loop
            src="/animations/hero.json"
            className="w-[400px] h-[400px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
