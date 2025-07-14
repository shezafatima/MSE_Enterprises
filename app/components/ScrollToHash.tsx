"use client";

import { useEffect } from "react";

export default function ScrollToHash() {
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 200); // Delay ensures element is in DOM
      }
    }
  }, []);

  return null; // No UI needed
}
