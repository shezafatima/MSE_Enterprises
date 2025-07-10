"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const images = [
  "/images/hero1.png",
  "/images/hero2.png",
  "/images/hero3.png",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-0 w-full h-screen overflow-hidden">
      {/* Background Images */}
      {images.map((img, index) => (
        <motion.div
          key={img}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${img})`,
            opacity: index === current ? 1 : 0,
          }}
          animate={{ opacity: index === current ? 1 : 0 }}
          transition={{ duration: 1.2 }}
        />
      ))}

      {/* Dot Overlay */}
      <div className="hero-overlay absolute inset-0 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <motion.h1
  initial={{ opacity: 0, y: 40, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="text-4xl md:text-6xl font-extrabold mb-4 outlined-text text-transparent bg-gradient-to-r from-orange-400 via-orange-600 to-orange-800 bg-clip-text "
>
  Welcome to MSE Enterprises
</motion.h1>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-white max-w-2xl"
        >
          Manufacturer & Importer of Plastic Products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8"
        >
          <div className="flex flex-row flex-wrap justify-center items-center relative">

          <button className="w-34 mr-3 inline-flex items-center justify-center border-2 border-orange-600 py-1 px-3  text-white font-bold text-base mt-4 md:mt-0 
  transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-orange-600
  hover:text-black hover:bg-gradient-to-r hover:from-orange-600 hover:to-yellow-600">
  <Link target="_blank" href="/products">
    Our Products
  </Link>
</button>
<span className="absolute bg-orange-600 text-white rounded-full p-3 text-sm text-center shadow-[0_0_10px_4px_grey] z-10">
  OR
</span>

  <button className="w-34 ml-3 inline-flex items-center justify-center border-2 border-orange-600 py-1 px-3  text-white font-bold text-base mt-4 md:mt-0 
  transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-orange-600
  hover:text-black hover:bg-gradient-to-r hover:from-orange-600 hover:to-yellow-600">
  <Link target="_blank" href="/products">
    About Us
  </Link>
</button>


          </div>
        </motion.div>
      </div>
    </section>
  );
}
