
"use client";
import dynamic from "next/dynamic";


const WhatsAppButton = dynamic(() => import("./WhatsappButton"), {
  ssr: false,
  loading: () => <div aria-hidden style={{ width: 64, height: 64 }} />,
});

const ScrollToTop = dynamic(() => import("./ScrollToTop"), {
  ssr: false,
  loading: () => <div aria-hidden style={{ height: 56 }} />,
});

export default function ClientOnlyWidgets() {
  return (
    <>
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
