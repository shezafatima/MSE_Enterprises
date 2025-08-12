"use client"

import Image from "next/image";

export default function WhatsAppButton() {
  const openWhatsApp = () => {
    window.open("https://wa.me/923303512225", "_blank");
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <button
        onClick={openWhatsApp}
        className="group relative flex items-center space-x-2"
      >
        <span className="absolute right-14 bg-green-600 text-white text-[11px] font-medium px-4 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200">
          WhatsApp Us
        </span>

        <Image
          src="/images/whatsapp.png"
          loading="lazy"
          alt="Chat on WhatsApp"
          width={400}
          height={400}
          className="w-12 h-12 rounded-full shadow-lg cursor-pointer"
        />
      </button>
    </div>
  );
}

