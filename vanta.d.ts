// // types/vanta.d.ts
// import * as THREE from "three";

// declare module "vanta/dist/vanta.globe.min" {
//   export interface VantaOptions {
//     el?: HTMLElement | null;
//     THREE?: typeof THREE;
//     mouseControls?: boolean;
//     touchControls?: boolean;
//     gyroControls?: boolean;
//     minHeight?: number;
//     minWidth?: number;
//     scale?: number;
//     scaleMobile?: number;
//     color?: number;
//     backgroundColor?: number;
//     [key: string]: any;
//   }

//   function VANTA(options: VantaOptions): {
//     destroy: () => void;
//     [key: string]: any;
//   };

//   export default VANTA;
// }
// types/vanta.d.ts
declare module "vanta/dist/vanta.globe.min" {
  const VANTA: any;
  export default VANTA;
}
declare module "vanta/dist/vanta.*" {
  const VANTA: any;
  export default VANTA;
}
declare module "vanta" {
  const VANTA: any;
  export default VANTA;
}
