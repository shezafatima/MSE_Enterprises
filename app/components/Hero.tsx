'use client';

import dynamic from 'next/dynamic';
import Loader from './Loader';

const HeroSection = dynamic(() => import('./HeroSection'), {
  ssr: false,
   loading: () => <Loader />,
});

export default function Hero() {
  return (
    <div>
      <HeroSection />
    </div>
  );
}
