'use client';

import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('./HeroSection'), { ssr: false });

export default function Hero(){
    return(
        <div>
            <HeroSection/>
        </div>
    )
}