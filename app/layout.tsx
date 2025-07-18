import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast"
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsappButton";
import Script from 'next/script'


<Script

  src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"
  strategy="beforeInteractive"
/>

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});



export const metadata: Metadata = {
  title: "MSE Plastic Industries",
   description:
    "Discover high-quality HDPE, LDPE, PE Stretch Films, Zip Lock Bags, and other custom packaging solutions with MSE Plastic Industries. Trusted for innovation, durability, and timely delivery across industries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}  antialiased bg-white`}
      >
        <Navbar/>
        {children}
        <Toaster position="top-right" reverseOrder={false}/>
        <Footer/>
        <WhatsAppButton/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
