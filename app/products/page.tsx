import ProductCard from "../components/ProductCard"
import products from "../data/products.json"

export default function ProductsPage() {
  return (
    <section className="bg-white  py-20 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-2">
          <span className="text-blue-600 font-extralight">Our </span>
          <span className="text-blue-600">Products</span>
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}
