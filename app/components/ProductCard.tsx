// components/ProductCard.tsx
'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface ProductCardProps {
  id: string
  title: string
  slug: string
  image: string
  shortDescription: string
}

export default function ProductCard({  title, slug, image, shortDescription }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative group w-full h-full rounded-xl overflow-hidden shadow-2xl border border-white/10"
    >
      <Link href={`/products/${slug}`} className="block h-full">
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src={image}
            alt={title}
            loading="lazy"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        
        <div className="relative -mt-12 z-10 bg-black/70 backdrop-blur-md px-5 py-6">
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <p className="text-gray-400 text-sm line-clamp-2">{shortDescription}</p>
            <button className="cursor-pointer text-white mt-4 self-start bg-blue-600 text-sm px-4 py-1.5 rounded-full font-medium border border-blue-600 hover:text-blue-600 hover:bg-white transition">
                View Details →
              </button>
        </div>
      </Link>
    </motion.div>
  )
}
