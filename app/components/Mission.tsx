import VisionMissionCards from "./MissionCard";

export default function VisionMissionSection() {
  return (
    <section className="relative bg-black py-20  px-6 md:px-12 lg:px-24 text-white" id="our-vision-&-mission">
      <div className="text-center mb-16">
        <h2 className="text-4xl   text-orange-600">
          Our Vision & Mission
        </h2>
        <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
          Driving excellence through innovation and integrity
        </p>
      </div>

      <VisionMissionCards />
    </section>
  )
}
