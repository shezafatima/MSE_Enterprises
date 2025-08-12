import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast"

import ClientOnlyWidgets from "./components/ClientOnlyWidget";





const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display:"swap"
});



export const metadata: Metadata = {
  title: "Haris Packages",
   description:
    "Discover high-quality HDPE, LDPE, PE Stretch Films, Zip Lock Bags, and other custom packaging solutions with Haris Packages. Trusted for innovation, durability, and timely delivery across industries.",
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
<ClientOnlyWidgets/>
      </body>
    </html>
  );
}
