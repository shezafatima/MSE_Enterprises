
"use client"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import IndustryCard from "./IndustryCard"
import Autoplay from "embla-carousel-autoplay"


const industries = [
    { name: "Bread & Bun", iconName: "bread-slice" },
  { name: "Chemical", iconName: "flask" },
    { name: "Food", iconName: "salad" },
      { name: "Personal Care", iconName: "soap" },
        { name: "Beverages", iconName: "coffee" },
          { name: "Automotive", iconName: "settings" },
            { name: "Pharmaceuticals", iconName: "capsules" },
  { name: "Engineering", iconName: "tools" },
  { name: "Edible Oil", iconName: "oil" },
//   { name: "Textile", iconName: "" },
  { name: "Spices", iconName: "salt-pepper" },
]

export default function IndustryCarousel() {
      const plugin = (
        Autoplay({ delay: 3000, stopOnInteraction: false })
      )
    
  return (
    <Carousel
      opts={{ align: "center", loop: true }}
        plugins={[plugin]}
        
      className="w-full max-w-6xl mx-auto"
    >
      <CarouselContent className="-ml-2">
        {industries.map((industry, index) => (
          <CarouselItem
            key={index}
            className="pl-2 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
          >
            <IndustryCard
              name={industry.name}
              iconName={industry.iconName}
              index={index}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      
    </Carousel>
  )
}
