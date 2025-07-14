import Hero from "./components/Hero";
import About from "./components/About";
import Customers from "./components/Customer";
import IndustriesSection from "./components/IndustrySection";
import HomeProduct from "./components/HomeProducts";
import ClientFeedback from "./components/ClientFeedback";
import Banner from "./components/Banner";

export default function Home() {
  return (
   <div>
    <Hero/>
    <About/>
    <IndustriesSection/>
    <HomeProduct/>
    <Banner/>
    <ClientFeedback/>
    <Customers/>
    
   </div>
  );
}
