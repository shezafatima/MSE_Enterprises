
import Image from "next/image"
import Link from "next/link"

export default function Banner() {
  return (
    <section className="relative w-full  py-10 px-4 md:px-12 mt-6">
      <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-2">
          <span className="text-blue-600 font-extralight">Seamless Solutions </span>
          <span className="text-blue-600">for all Packaging</span>
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
      <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-4 mt-3">
           Discover Our Versatile Polythene Bags
          </p>
      </div>
        <Link href={"/products"}>
        <Image
          src="/images/banner.png"
          
          alt="Packaging Solutions"
          width={1920}
          height={1080}
          className="w-full h-auto object-contain"
          priority
          />
          </Link>
      </div>
    </section>
  )
}
