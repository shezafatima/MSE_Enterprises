import Image from "next/image";

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 pt-20 pb-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="my-2">Who We Are</h2>
            <span className="bg-orange-600 w-10 h-[3px] my-2"></span>
            <h1 className="title-font sm:font-medium text-4xl mb-4  drop-shadow-lg text-orange-600 mt-2">
              About Us
            </h1>
            <p className="mb-8 leading-relaxed text-gray-500 text-[18px]">
              We M.S.E Enterprises is one of the reputed names in the local market
              manufacturing of Polyethylene & Polypropylene bags, Rolls, Sheets,
              Printed bags, and other Plastic Packing Materials. M.S.E Enterprises
              was conventional in 1965 having 40 years experience in the field of
              manufacturing of Polythene & Packaging materials. Our company is
              well-known and has a reputed name in the plastic industry of
              Pakistan for its uphill struggle of labor and Production of high
              quality goods. The existing set up of the company comprises of 15
              Extruder machines, 6 Flexo Printing Machine & 4 Auto Cutting
              Sealing Machines for the production of Polyethylene &
              Polypropylene materials and other unit containing imported
              automatic machines for the production of Printed and double
              layered Polythene.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mt-6">
            <Image
              className="object-cover object-center rounded sm:w-[450px] h-full"
              src="/images/about.png"
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
