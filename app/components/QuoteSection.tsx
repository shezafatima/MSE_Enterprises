import Link from "next/link";

export default function QuoteSection() {
  return (
    <section
      className="relative py-20 px-4"
      style={{
        backgroundImage: "url('/images/quote.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 text-white text-center mb-12">
        <h2 className="text-4xl font-bold">
          Request <span className="font-light">a Quote</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto">
          Discover Premium Polybags: LDPE, HDPE, PP, PVC & More
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-row justify-center items-center relative z-10">
        <button className="md:w-44 w-32 mr-3 border-2 border-white py-1 px-3 text-white font-bold text-base mt-4 md:mt-0 
          transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-white hover:text-blue-600 hover:bg-white">
          <Link  href="/contact">
            General Query
          </Link>
        </button>

        <span className="absolute bg-blue-600 md:mt-0 mt-4 text-white rounded-full p-3 text-sm text-center shadow-[0_0_10px_4px_grey] z-10">
          OR
        </span>

        <button className="md:w-44 w-32 ml-3 border-2 border-white py-1 px-3 text-white font-bold text-base mt-4 md:mt-0 
          transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-white hover:text-blue-600 hover:bg-white">
          <Link  href="/quote">
            Request a Quote
          </Link>
        </button>
      </div>
    </section>
  );
}
