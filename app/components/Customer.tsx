import CustomerCarousel from "./CustomerCarousel";

export default function Customers() {
  return (
    <div className="py-20">
      <div className="text-center">
        <h1 className="text-4xl sm:font-medium  mb-4  drop-shadow-lg text-orange-600 ">
          WE Are Making For
        </h1>
        <p className="text-orange-600 mt-4 max-w-2xl mx-auto">
          Trusted by renowned brands. From
          household names to specialized manufacturers, our commitment to
          quality, consistency, and customer satisfaction makes us a reliable
          partner for brands that demand excellence.
        </p>
      </div>
      <CustomerCarousel />
    </div>
  );
}
