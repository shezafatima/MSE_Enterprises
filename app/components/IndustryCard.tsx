"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function IndustryCard({
  name,
  iconName,
  index,
}: {
  name: string
  iconName: string
  index: number
}) {
  return (
    <motion.div
      
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className=" flex flex-col items-center  text-black  bg-white/10 p-6 rounded-xl shadow-md "
    >
      <Image
        src={`/icons/${iconName}.svg`}
        alt={name}
        width={40}
        height={40}
        className="mb-3  filter brightness-0  transition-all duration-300 "
      />
      <p className="font-medium text-center">{name}</p>
    </motion.div>
  )
}
