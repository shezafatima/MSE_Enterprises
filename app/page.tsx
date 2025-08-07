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
  title: "MSE Plastic Industries | Quality Polybags Manufacturer",
  description:
    "MSE Plastic Industries offers high-quality polybags tailored for your packaging needs. Durable, customizable, and affordable.",
  keywords: [
    "MSE Plastic Industries",
    "polybags",
    "plastic bags",
    "packaging",
    "manufacturer",
    "Karachi",
    "custom bags",
  ],
  authors: [{ name: "MSE Plastic Industries" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "MSE Plastic Industries | Quality Polybags Manufacturer",
    description:
      "We provide premium polybags and packaging solutions in Pakistan.",
    url: "https://www.mseplasticindustries.com",
    siteName: "MSE Plastic Industries",
    images: [
      {
        url: "https://www.mseplasticindustries.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MSE Plastic Industries Polybags",
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
