import IndustryCarousel from "./IndustryCarousel"

export default function IndustriesSection() {
  return (
    <section className="bg-orange-500 py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-black  text-4xl font-bold">
          Industries <span className="font-light">We Serve</span>
        </h2>
        <p className="text-black mt-4 max-w-2xl mx-auto">
          We proudly serve a broad range of industries with our premium plastic sheet wrapping solutions,
          catering to diverse needs of packing and assuring customer satisfaction.
        </p>
      </div>

      <IndustryCarousel />
    </section>
  )
}
