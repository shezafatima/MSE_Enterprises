import ClientCarousel from "../components/ClientCarousel"

export default function ClientFeedback() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-2">
          <span className="text-orange-600 font-extralight">Client </span>
          <span className="text-orange-600">Feedback</span>
        </h2>
        <div className="w-20 h-1 bg-orange-600 mx-auto rounded-full"></div>
      </div>

      <ClientCarousel />
    </section>
  )
}
