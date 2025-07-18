'use client'

import { useState } from "react"
import { X } from "lucide-react"
import Image from "next/image"

export default function CertificateViewer() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Thumbnail Preview */}
      <div className="flex justify-center">
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-zoom-in bg-white rounded-xl shadow-lg p-4 max-w-2xl  transition-transform hover:scale-105"
        >
          <Image
          width={500}
            height={500}
            loading="lazy"
            src={"/images/certificate.png"}
            alt="Certification"
            className="w-60 h-auto object-contain rounded-md"
          />
        </div>
      </div>

      {/* Zoom Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full px-6">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-blue-500 transition"
              onClick={() => setIsOpen(false)}
            >
              <X size={30} />
            </button>

            <Image
            width={500}
              height={500}
              loading="lazy"
              src={"/images/certificate.png"}
              alt="Zoomed Certificate"
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  )
}
