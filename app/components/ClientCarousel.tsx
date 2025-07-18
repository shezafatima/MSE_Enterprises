'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"
import { UserRound } from "lucide-react"

const testimonials = [
  {
    name: "Ali Raza",
    feedback: "Excellent service and great product quality. Highly recommended!",
    company: "Raza Packaging"
  },
  {
    name: "Sara Khan",
    feedback: "Very professional team and timely delivery. Loved working with MSE.",
    company: "SK Solutions"
  },
  {
    name: "Usman Javed",
    feedback: "Affordable pricing and premium service. Will order again!",
    company: "UJ Traders"
  },
  {
    name: "Fatima Noor",
    feedback: "They handled everything very professionally. Loved the communication.",
    company: "FN Enterprises"
  },
  {
    name: "Hamza Malik",
    feedback: "High-quality packaging with great attention to detail.",
    company: "HM Traders"
  }
]

export default function ClientCarousel() {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      

      <Carousel plugins={[plugin.current]}>

        <CarouselContent className="-ml-4 md:-ml-2">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div
                className="bg-white/5 text-gray-600 border border-gray-700 rounded-xl p-4 md:py-8 shadow-lg backdrop-blur-md text-center h-full"
                
              >
                <UserRound className="mx-auto mb-4 w-10 h-10 text-blue-600" />
                <p className="text-gray-700 italic mb-4">“{testimonial.feedback}”</p>
                <h4 className="text-xl font-semibold text-blue-600">{testimonial.name}</h4>
                <p className="text-sm text-gray-400">{testimonial.company}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
