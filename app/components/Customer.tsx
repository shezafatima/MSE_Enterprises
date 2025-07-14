import CustomerCarousel from "./CustomerCarousel";

export default function Customers() {
  return (
    <div className="py-20 px-4" id="our-customers">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-2">
          <span className="text-orange-600 font-extralight">We&apos;re </span>
          <span className="text-orange-600">Making for</span>

        </h2>
        <div className="w-20 h-1 bg-orange-600 mx-auto rounded-full"></div>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
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
