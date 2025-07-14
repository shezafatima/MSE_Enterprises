import CertificateViewer from "../components/CertificateViewer"

export default function Certifications() {
  return (
    <section
      className="bg-black text-white py-20 px-6 md:px-12 lg:px-24"
      id="our-certifications"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-2">
          <span className="text-orange-600 font-extralight">Our </span>
          <span className="text-orange-600">Certifications</span>
        </h2>
        <div className="w-20 h-1 bg-orange-600 mx-auto rounded-full"></div>
      </div>

      {/* Responsive Grid: Text left, Certificate right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Block */}
        <div className="text-gray-500 md:text-lg text-sm leading-relaxed">
          <p className="mb-4">
            At MSE, quality assurance is not just a promise — it&apos;s a verified standard.
            Our certifications reflect our dedication to high-quality manufacturing,
            environmental responsibility, and consistent customer satisfaction.
          </p>
          <p>
            This certificate demonstrates our compliance with global packaging and safety norms,
            building trust with clients around the world.
          </p>
        </div>

        
        <CertificateViewer  />
      </div>
    </section>
  )
}
