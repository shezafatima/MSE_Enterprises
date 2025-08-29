import { CornerDownRight } from "lucide-react";
import Customers from "../components/Customer";
import IndustriesSection from "../components/IndustrySection";
import Image from "next/image";
import QualityPolicy from "../components/QualityPolicy";
import VisionMissionSection from "../components/Mission";
import Certifications from "../components/Certifications";
import ClientFeedback from "../components/ClientFeedback";
import QuoteSection from "../components/QuoteSection";


export default function About() {
  return (
    <div>

      <div className="container mx-auto flex px-5 pt-12 pb-12 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:font-medium text-4xl  drop-shadow-lg text-blue-600 ">
            Who We Are
          </h1>
          <span className="bg-blue-600 w-10 h-[3px] my-2"></span>
          <p className="mb-2 leading-relaxed text-gray-500 md:text-[18px] text-[11px] mt-3">
            We Haris Packages is one of the reputed names in the local market
            manufacturing of Polyethylene &. Polypropylene bags, Rolls, Sheets,
            Printed bags, and other Plastic Packing Materials. Haris Packages
            was conventional in1965 having 40 years experience in the field of
            manufacturing of Polythene&. Packaging materials. Our company is
            well-known and has a reputed name in the plastic industry of
            Pakistan for its uphill struggle of labor and Production of high
            quality goods. The existing set up of the company comprises of 15
            Extruder machines, 6 Flexo Printing Machine &. 4 Auto Cutting
            Sealing Machines for the production of Polyethylene &. Polypropylene
            materials and other unit containing imported automatic machines for
            the production of Printed and double layered Polythene.
          </p>
          <div className="mt-4">

          <h2 className="text-blue-600 text-xl">
            What We Offer
          </h2>
          </div>
          <hr className="w-full mt-2 border-none bg-gray-600 h-[2px]"/>
          <div className="flex md:flex-nowrap flex-wrap justify-between items-center sm:gap-16 mt-4">
            <ul className="list-none ">
                <li className="text-gray-500 text-[15px] flex items-center gap-2"><CornerDownRight className="w-4 h-4 text-blue-500"/>High Quality Products</li>
                <li className="text-gray-500 text-[15px] flex items-center gap-2"><CornerDownRight className="w-4 h-4 text-blue-500"/>Competitive Prices</li>
                <li className="text-gray-500 text-[15px] flex items-center gap-2"><CornerDownRight className="w-4 h-4 text-blue-500"/>Timely Delivery</li>

            </ul>
            <ul>
                <li className="text-gray-500 text-[15px] flex items-center gap-2"><CornerDownRight className="w-4 h-4 text-blue-500"/>Custom Solutions</li>
                <li className="text-gray-500 text-[15px] flex items-center gap-2"><CornerDownRight className="w-4 h-4 text-blue-500"/>Excellent Customer Service</li>
                <li className="text-gray-500 text-[15px] flex items-center gap-2"><CornerDownRight className="w-4 h-4 text-blue-500"/>Sustainability Practices</li>
            </ul>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mt-6">
          <Image
            className="object-cover object-center rounded sm:w-[450px] h-full"
            loading="lazy"
            src="/images/whoweare.png"
            alt="about"
            width={500}
            height={500}
          />
        </div>
      </div>
      <QualityPolicy/>
      <IndustriesSection />
      <VisionMissionSection/>
      <Certifications/>
      <ClientFeedback/>
      <QuoteSection/>
      <Customers />
    </div>
  );
}
