import Hero from "./components/Hero";
import About from "./components/About";
import Customers from "./components/Customer";

import IndustriesSection from "./components/IndustrySection";
import HomeProduct from "./components/HomeProducts";
import ClientFeedback from "./components/ClientFeedback";
import Banner from "./components/Banner";
import QuoteSection from "./components/QuoteSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haris Packages | Quality Polybags Manufacturer",
  description:
    "Haris Packages offers high-quality polybags tailored for your packaging needs. Durable, customizable, and affordable.",
  keywords: [
    "Haris Packages",
    "polybags",
    "plastic bags",
    "packaging",
    "manufacturer",
    "Karachi",
    "custom bags",
  ],
  authors: [{ name: "Haris Packages" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Haris Packages | Quality Polybags Manufacturer",
    description:
      "We provide premium polybags and packaging solutions in Pakistan.",
    url: "https://www.mseplasticindustries.com",
    siteName: "Haris Packages",
    images: [
      {
        url: "https://www.harispackages.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Haris Packages Polybags",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <IndustriesSection />
      <HomeProduct />
      <Banner />
      <ClientFeedback />
      <QuoteSection />
      <Customers />
    </div>
  );
}
