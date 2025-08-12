// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { Player } from "@lottiefiles/react-lottie-player";
// import * as THREE from "three";
// // @ts-expect-error: vanta.globe has no TypeScript types
// import GLOBE from "vanta/dist/vanta.globe.min";
// import Button from "./Button";

// export default function HeroSection() {
//   const vantaRef = useRef<HTMLDivElement>(null);
//   const [vantaEffect, setVantaEffect] = useState<ReturnType<typeof GLOBE> | null>(null);

//   useEffect(() => {
//     if (!vantaEffect && vantaRef.current) {
//       setVantaEffect(
//         GLOBE({
//           el: vantaRef.current,
//           THREE,
//           mouseControls: true,
//           touchControls: true,
//           gyroControls: false,
//           minHeight: 200.0,
//           minWidth: 200.0,
//           scale: 1.0,
//           scaleMobile: 1.0,
//           color: 0x87c5ed,
//           backgroundColor: 0xd4e5f0,
//         })
//       );
//     }

//     return () => {
//       if (vantaEffect) vantaEffect.destroy();
//     };
//   }, [vantaEffect]);


//   return (
//     <section className="relative w-full min-h-screen overflow-hidden">
//       {/* Vanta Background */}
//       <div
//         ref={vantaRef}
//         className="absolute inset-0 w-full h-full scale-x-[-1] z-0"
//       />

//       {/* Content */}
//       <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 gap-y-10 md:gap-y-0 sm:mt-0 mt-6 ">
//         {/* Right Animation (First on mobile) */}
      

//         {/* Left Content (Second on mobile) */}
//         <div className="w-full md:w-1/2 text-center md:text-left space-y-4 ">
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="md:text-5xl text-3xl font-extrabold text-transparent bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 bg-clip-text"
//           >
//             MSE PLASTIC INDUSTRIES 
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto md:mx-0"
//           >
//             Manufacturer & Importer of Plastic Products.
//           </motion.p>

//           {/* Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8, duration: 0.8 }}
//             className="mt-6 flex justify-center md:justify-start"
//           >
//             <Button />
//           </motion.div>
//         </div>
//           <div className="w-full md:w-1/2 flex justify-center items-center ">
//           <Player
//             autoplay
//             loop
//             src="/animations/hero.json"
//             className="w-[400px] h-[400px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px]"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
// No "use client" here — server render, minimal JS
// HeroSection.tsx  (server component)
// import Image from "next/image";
// import dynamic from "next/dynamic";
// import Loader from "./Loader"; // your loader small component

// // load client-only effects as a dynamic client module; loader will render in this spot until hydrated
// const HeroClient = dynamic(() => import("./HeroClient"), { ssr: false, loading: () => <Loader /> });

// export default function HeroSection() {
//   return (
//     <section className="relative w-full min-h-screen overflow-hidden">
//       <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 gap-y-10">
//         {/* LEFT - server-rendered text (fast LCP) */}
//         <div className="w-full md:w-1/2 text-center md:text-left space-y-4 z-20">
//           <h1 className="md:text-5xl text-3xl font-extrabold text-transparent bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 bg-clip-text">
//             MSE PLASTIC INDUSTRIES
//           </h1>

//           <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto md:mx-0">
//             Manufacturer & Importer of Plastic Products.
//           </p>

//           <div className="mt-6 flex justify-center md:justify-start z-20">
//             <a className="btn">Get Quote</a>
//           </div>
//         </div>

//         {/* RIGHT - animation area (relative container). the dynamic HeroClient will mount here */}
//         <div className="w-full md:w-1/2 relative flex justify-center items-center">
//           {/* placeholder image / poster for LCP */}
//           <Image
//             src="/hero-static.webp"
//             alt="Hero placeholder"
//             width={500}
//             height={500}
//             priority
//             className="object-contain z-10"
//           />

//           {/* Client-only heavy effects (Vanta / Lottie) mount here.
//               Until it hydrates, the dynamic() loader (Loader) will show in this exact place. */}
//           <HeroClient />
//         </div>
//       </div>
//     </section>
//   );
// }
// "use client";

// import HeroAnimation from "./HeroAnimation";
// import HeroBackground from "./HeroBackground";
// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import dynamic from "next/dynamic";
// const Player = dynamic(
//   () => import("@lottiefiles/react-lottie-player").then(mod => mod.Player),
//   { ssr: false, loading: () => <div style={{width: 400, height: 400, background: '#ccc'}} /> }
// );
// import * as THREE from "three";

// // Create a type declaration for vanta.globe so TS stops complaining
// declare module "vanta/dist/vanta.globe.min";

// import GLOBE from "vanta/dist/vanta.globe.min";
// import Button from "./Button";
// import HeroText from "./HeroText";

// export default function HeroSection() {



//   return (
//     <section className="relative w-full min-h-screen overflow-hidden">
//       <HeroBackground/>


//       {/* Content */}
//       <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 gap-y-10 md:gap-y-0">
//         {/* Left Content */}
//         <HeroText/>
      

//         {/* Right Lottie Animation */}
//         <HeroAnimation/>

       
//       </div>
//     </section>
//   );
// }
// "use client";
// import dynamic from "next/dynamic";
// import HeroText from "./HeroText";
// import React from "react";

// // Load heavy components without blocking HeroText
// const HeroBackground = dynamic(() => import("./HeroBackground"), { ssr: false });
// const HeroAnimation = dynamic(() => import("./HeroAnimation"), { ssr: false });

// export default function HeroSection() {
//   const [showHeavy, setShowHeavy] = React.useState(false);

//   React.useEffect(() => {
//     // Wait until browser is idle, so text paints first
//     if ("requestIdleCallback" in window) {
//       requestIdleCallback(() => setShowHeavy(true), { timeout: 2000 });
//     } else {
//       setShowHeavy(true);
//     }
//   }, []);

//   return (
//     <section className="relative w-full min-h-screen overflow-hidden">
//       {showHeavy && <HeroBackground />}
      
//       <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 gap-y-10 md:gap-y-0">
//         {/* TEXT FIRST - will be LCP */}
//         <HeroText />

//         {/* Right Side - heavy content after idle */}
//         {showHeavy ? (
//           <HeroAnimation />
//         ) : (
//           <div
//             className="w-full md:w-1/2"
//             aria-hidden="true"
//             style={{ minHeight: 350 }}
//           />
//         )}
//       </div>
//     </section>
//   );
// }
// "use client";

// import dynamic from "next/dynamic";
// import HeroText from "./HeroText";
// import React from "react";
// import Script from "next/script";

// export default function HeroSection() {
//   const [showHeavy, setShowHeavy] = React.useState(false);

//   React.useEffect(() => {
//     if ("requestIdleCallback" in window) {
//       requestIdleCallback(() => setShowHeavy(true), { timeout: 2500 });
//     } else {
//       setTimeout(() => setShowHeavy(true), 2500);
//     }
//   }, []);

//   const HeroBackground = showHeavy
//     ? dynamic(() => import("./HeroBackground"), { ssr: false })
//     : null;

//   const HeroAnimation = showHeavy
//     ? dynamic(() => import("./HeroAnimation"), { ssr: false })
//     : null;

//   return (
//     <section className="relative w-full min-h-screen overflow-hidden">
//       {/* Preload text instantly for LCP */}
//       <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 gap-y-10 md:gap-y-0">
//         <HeroText />

//         {/* Right Side - placeholder until heavy stuff loads */}
//         {showHeavy && HeroAnimation ? (
//           <HeroAnimation />
//         ) : (
//           <div
//             className="w-full md:w-1/2 bg-gray-200 animate-pulse"
//             style={{ minHeight: 350 }}
//             aria-hidden="true"
//           />
//         )}
//       </div>

//       {/* Background loaded after idle */}
//       {showHeavy && HeroBackground ? <HeroBackground /> : null}

//       {/* Load heavy libraries in background */}
//       {showHeavy && (
//         <>
//           <Script src="https://unpkg.com/three@0.158.0/build/three.min.js" strategy="lazyOnload" />
//           <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" strategy="lazyOnload" />
//         </>
//       )}
//     </section>
//   );
// }
// "use client";

// import dynamic from "next/dynamic";
// import HeroText from "./HeroText";
// import React from "react";
// import Script from "next/script";

// // Dynamically load heavy parts without blocking LCP
// const HeroBackground = dynamic(() => import("./HeroBackground"), { ssr: false });
// const HeroAnimation = dynamic(() => import("./HeroAnimation"), { ssr: false });

// export default function HeroSection() {
//   const [showHeavy, setShowHeavy] = React.useState(false);

//   React.useEffect(() => {
//     if ("requestIdleCallback" in window) {
//       requestIdleCallback(() => setShowHeavy(true), { timeout: 2000 });
//     } else {
//       setTimeout(() => setShowHeavy(true), 2000);
//     }
//   }, []);

//   return (
//     <section className="relative w-full min-h-screen overflow-hidden">
//       {/* Background loads after idle */}
//       {showHeavy && <HeroBackground />}

//       <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 gap-y-10 md:gap-y-0">
//         {/* TEXT renders instantly for LCP */}
//         <HeroText />

//         {/* Fade-in effect for heavy animation */}
//         <div
//           className={`transition-opacity duration-700 ease-out ${
//             showHeavy ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           {showHeavy ? (
//             <HeroAnimation />
//           ) : (
//             <div
//               className="w-full md:w-1/2 bg-gray-200 animate-pulse"
//               style={{ minHeight: 350 }}
//               aria-hidden="true"
//             />
//           )}
//         </div>
//       </div>

//       {/* Preload heavy scripts after idle */}
//       {showHeavy && (
//         <>
//           <Script
//             src="https://unpkg.com/three@0.158.0/build/three.min.js"
//             strategy="lazyOnload"
//           />
//           <Script
//             src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
//             strategy="lazyOnload"
//           />
//         </>
//       )}
//     </section>
//   );
// }
"use client";

import dynamic from "next/dynamic";
import HeroText from "./HeroText";
import React from "react";

// Stage-loaded components
const HeroBackground = dynamic(() => import("./HeroBackground"), { ssr: false });
const HeroAnimation = dynamic(() => import("./HeroAnimation"), { ssr: false });

export default function HeroSection() {
  const [showBackground, setShowBackground] = React.useState(false);
  const [showAnimation, setShowAnimation] = React.useState(false);

  React.useEffect(() => {
    // Stage 2: load background
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => setShowBackground(true), { timeout: 2000 });
    } else {
      setTimeout(() => setShowBackground(true), 2000);
    }

    // Stage 3: load animation separately to avoid blocking
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => setShowAnimation(true), { timeout: 3500 });
    } else {
      setTimeout(() => setShowAnimation(true), 3500);
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Stage 2 - background */}
      {showBackground && <HeroBackground />}

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 gap-y-10 md:gap-y-0">
        {/* Stage 1 - text for LCP */}
        <HeroText />

        {/* Stage 3 - animation */}
        {showAnimation ? (
          <HeroAnimation />
        ) : (
          <div
            className="w-full md:w-1/2 bg-gray-200 animate-pulse"
            style={{ minHeight: 350 }}
            aria-hidden="true"
          />
        )}
      </div>
    </section>
  );
}
