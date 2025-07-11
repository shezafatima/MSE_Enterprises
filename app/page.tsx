import Hero from "./components/Hero";
import About from "./components/About";
import Customers from "./components/Customer";
import IndustriesSection from "./components/IndustrySection";

export default function Home() {
  return (
   <div>
    <Hero/>
    <About/>
    <IndustriesSection/>
    <Customers/>
   </div>
  );
}
