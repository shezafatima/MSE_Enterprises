"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useRef, useState } from "react"

export default function CustomerCarousel() {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )

  const customers = [
    { image: "/images/puma_logo.png" },
    { image: "/images/nike_logo.png" },
    { image: "/images/adidas_logo.png" },
    { image: "/images/derbystar_logo.png" },
    { image: "/images/zara_logo.png" },
    { image: "/images/pb_logo.png" },
    { image: "/images/ikea_logo.png" },
    { image: "/images/jako_logo.png" },
  ]

  const [itemsPerSlide, setItemsPerSlide] = useState(4)

  // Responsive logic
  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(window.innerWidth < 768 ? 2 : 4)
    }

    handleResize() // run on mount
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Group items based on screen size
  const groupedCustomers = []
  for (let i = 0; i < customers.length; i += itemsPerSlide) {
    groupedCustomers.push(customers.slice(i, i + itemsPerSlide))
  }

  return (
    <div className="w-full max-w-6xl mx-auto py-10 px-4">
      <Carousel
        opts={{ loop: true }}
        plugins={[plugin.current]}
        className="overflow-hidden"
      >
        <CarouselContent>
          {groupedCustomers.map((group, groupIndex) => (
            <CarouselItem
              key={groupIndex}
              className="flex justify-between gap-4"
            >
              {group.map((customer, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br to-orange-600 from-orange-400  border-orange-700 border-2 flex items-center justify-center w-full h-40 rounded-md"
                >
                  <Image
                    src={customer.image}
                    alt={`Customer logo ${groupIndex * itemsPerSlide + index + 1}`}
                    width={100}
                    height={100}
                    className="object-contain md:w-52 w-48"
                  />
                </div>
              ))}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
