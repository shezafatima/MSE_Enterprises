"use client";
import dynamic from "next/dynamic";


const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then(mod => mod.Player),
  { ssr: false, loading: () => null }
);


export default function HeroAnimation(){
return(
    <>
            <div className="w-full md:w-1/2 flex justify-center items-center">
          <Player
          
            autoplay
            loop
            src="/animations/hero.json"
            className="w-[400px] h-[400px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px]"
          />
        </div>
    </>
)
}