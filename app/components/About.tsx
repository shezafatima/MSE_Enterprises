import {  ChevronsRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const About = () => {
  return (
    <div id="about">




      <section className="text-gray-600 body-font ">
        
        <div className="container mx-auto flex px-5 pt-20 pb-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="my-2">Who We Are</h2>
            <span className="bg-blue-600 w-10 h-[3px] my-2"></span>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-blue-400 text-transparent bg-clip-text">
              About Us
            </h1>
            <p className="mb-2 leading-relaxed text-gray-500 md:text-[18px] text-[11px]">
              We Haris Packages is one of the reputed names in the local market
              manufacturing of Polyethylene & Polypropylene bags, Rolls, Sheets,
              Printed bags, and other Plastic Packing Materials. Haris Packages
              was conventional in 1965 having 40 years experience in the field of
              manufacturing of Polythene & Packaging materials. Our company is
              well-known and has a reputed name in the plastic industry of
              Pakistan for its uphill struggle of labor and Production of high
              quality goods. 
            </p>
            <button className="md:mb-8">
              <Link href={"/about"} className="flex text-blue-700 hover:text-blue-600 text-[18px] font-semibold">
              Read More <ChevronsRight className="text-sm mt-[2px]"/>
              </Link>
            </button>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mt-6">
            <Image
              className="object-cover object-center rounded sm:w-[450px] h-full"
              src="/images/about.jpg"
              loading="lazy"
              alt="about"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
