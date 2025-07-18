import ProductGrid from "./ProductGrid"
import products from "../data/products.json"
import Link from "next/link"

export default function HomeProduct() {
  const featured = products.slice(0, 4)

  return (
    <section className=" text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-6">
        <div>
          <p className="text-sm uppercase text-blue-600 tracking-widest mb-1">Flexible Packaging</p>
         <h2 className="text-4xl md:text-5xl font-bold mb-2 mt-2">
          <span className="text-blue-600 font-extralight">Our </span>
          <span className="text-blue-600">Products</span>
        </h2>
        </div>
        <Link
          href="/products"
          className="sm:block hidden text-blue-600 hover:bg-blue-600 hover:text-black  border-blue-600 border-2 font-semibold py-2 px-5 rounded-full transition-all"
        >
          All Products &gt;&gt;
        </Link>
      </div>
      <p className="text-gray-500 mb-12">Explore our wide range of premium packaging solutions designed to meet diverse industry needs. From durable poly bags to high-performance shrink films, each product reflects our commitment to quality, innovation, and customer satisfaction.</p>

      <ProductGrid products={featured} />
        <Link
          href="/products"
          className="flex justify-center items-center mt-8 sm:hidden text-blue-600 hover:bg-blue-600 hover:text-black  border-blue-600 border-2 font-semibold py-2 px-5 rounded-full transition-all"
        >
          All Products &gt;&gt;
        </Link>
    </section>
  )
}
