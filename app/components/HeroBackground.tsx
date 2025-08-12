
// "use client";
// import * as THREE from "three";
// import { useEffect, useRef } from "react";


// declare module "vanta/dist/vanta.globe.min";


// import GLOBE from "vanta/dist/vanta.globe.min";


// export default function HeroBackground() {
//   const vantaRef = useRef<HTMLDivElement | null>(null);


//   useEffect(() => {
//     let vantaInstance: any = null;
//     if (vantaRef.current) {
//       vantaInstance = GLOBE({
//         el: vantaRef.current,
//         THREE,
//         // Disable controls to reduce CPU usage while keeping visuals
//         mouseControls: false,
//         touchControls: false,
//         gyroControls: false,
//         minHeight: 200.0,
//         minWidth: 200.0,
//         scale: 1.0,
//         scaleMobile: 1.0,
//         color: 0x87c5ed,
//         backgroundColor: 0xd4e5f0,
//       });
//     }
//     return () => {
//       if (vantaInstance && vantaInstance.destroy) vantaInstance.destroy();
//     };
//   }, []);


//   return (
    
// <div>
//            <div
//         ref={vantaRef}
//         className="absolute inset-0 w-full h-full scale-x-[-1] z-0"
//       />
  
//   </div>

//   );
// }
// "use client";
// import * as THREE from "three";
// import { useEffect, useRef } from "react";

// declare module "vanta/dist/vanta.globe.min";

// import GLOBE from "vanta/dist/vanta.globe.min";

// // Minimal type for Vanta effect instances
// type VantaEffect = {
//   destroy?: () => void;
// };

// export default function HeroBackground() {
//   const vantaRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     let vantaInstance: VantaEffect | null = null;

//     if (vantaRef.current) {
//       vantaInstance = GLOBE({
//         el: vantaRef.current,
//         THREE,
//         mouseControls: false,
//         touchControls: false,
//         gyroControls: false,
//         minHeight: 200.0,
//         minWidth: 200.0,
//         scale: 1.0,
//         scaleMobile: 1.0,
//         color: 0x87c5ed,
//         backgroundColor: 0xd4e5f0,
//       }) as VantaEffect;
//     }

//     return () => {
//       vantaInstance?.destroy?.();
//     };
//   }, []);

//   return (
//     <div>
//       <div
//         ref={vantaRef}
//         className="absolute inset-0 w-full h-full scale-x-[-1] z-0"
//       />
//     </div>
//   );
// }
"use client";

import * as THREE from "three";
import { useEffect, useRef } from "react";

// Minimal type for Vanta effect instances
type VantaEffect = {
  destroy?: () => void;
};

export default function HeroBackground() {
  const vantaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let vantaInstance: VantaEffect | null = null;

    // Dynamically import only on client and after initial render
    import("vanta/dist/vanta.globe.min").then((GLOBE) => {
      if (vantaRef.current) {
        vantaInstance = (GLOBE.default || GLOBE)({
          el: vantaRef.current,
          THREE,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x87c5ed,
          backgroundColor: 0xd4e5f0,
        }) as VantaEffect;
      }
    });

    return () => {
      vantaInstance?.destroy?.();
    };
  }, []);

  return (
    <div>
      <div
        ref={vantaRef}
        className="absolute inset-0 w-full h-full scale-x-[-1] z-0"
      />
    </div>
  );
}
