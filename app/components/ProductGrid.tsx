'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

interface Product {
  id: string
  title: string
  slug: string
  image: string
  shortDescription: string
}

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link 
          key={product.id}
        href={`/products/${product.slug}`}>
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="relative overflow-hidden rounded-xl group shadow-lg"
        >
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={300}
            className="w-full h-56 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all p-4 flex flex-col justify-end">
            <h3 className="text-white text-xl font-semibold">{product.title}</h3>
            <p className="text-gray-300 text-sm mt-1">{product.shortDescription}</p>
            
              <button className="text-black mt-4 self-start bg-orange-600 text-sm px-4 py-1.5 rounded-full font-medium border border-orange-600 hover:text-orange-600 hover:bg-black transition">
                View Details →
              </button>
          </div>
        </motion.div>
            </Link>
      ))}
    </div>
  )
}

