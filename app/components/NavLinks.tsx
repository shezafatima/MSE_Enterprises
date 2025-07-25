"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function NavLinks() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href);

  return (
    <>
      {/* Home */}
      <Link
        href="/"
        className={clsx(
          "group relative text-blue-600 transition-colors duration-300 pb-1",
          isActive("/") ? "font-semibold" : "hover:text-blue-600"
        )}
      >
        <span
          className={clsx(
            "absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ease-out",
            isActive("/") ? "w-full" : "w-0 group-hover:w-full"
          )}
        />
        Home
      </Link>

      {/* About Dropdown */}
      <div
        className="relative group z-40"
        onMouseEnter={() => setHovered("about")}
        onMouseLeave={() => setHovered(null)}
      >
        <Link
          href="/about"
          className={clsx(
            "group relative flex items-center text-blue-600 transition-colors duration-300 pb-1",
            isActive("/about") && "font-semibold"
          )}
        >
          About
          <ChevronDown className="ml-2 w-4 h-4" />
          <span
            className={clsx(
              "absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ease-out",
              hovered === "about" || isActive("/about")
                ? "w-full"
                : "w-0 group-hover:w-full"
            )}
          />
        </Link>

        {/* About Dropdown Content */}
        <div
          className={clsx(
            "absolute top-full left-0 mt-2 w-52 rounded-md shadow-lg border border-blue-600 bg-white text-sm transition-all duration-300 z-50",
            hovered === "about"
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          )}
        >
          {[
            "Quality Policy",
            "Industries We Serve",
            "Our Vision & Mission",
            "Our Certifications",
            "Client Feedback",
            "Our Customers",
          ].map((item, idx) => (
            <Link
              key={idx}
              href={`/about#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="block px-4 py-2 text-blue-600 hover:font-semibold transition-all"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* Products Dropdown */}
      <div
        className="relative group z-40"
        onMouseEnter={() => setHovered("products")}
        onMouseLeave={() => setHovered(null)}
      >
        <Link
          href="/products"
          className={clsx(
            "group relative flex items-center text-blue-600 transition-colors duration-300 pb-1",
            isActive("/products") && "font-semibold"
          )}
        >
          Products
          <ChevronDown className="ml-2 w-4 h-4" />
          <span
            className={clsx(
              "absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ease-out",
              hovered === "products" || isActive("/products")
                ? "w-full"
                : "w-0 group-hover:w-full"
            )}
          />
        </Link>

        {/* Products Dropdown Content */}
        <div
          className={clsx(
            "absolute top-full left-0 mt-2 w-[220px] rounded-md shadow-lg border border-blue-600 bg-white text-sm transition-all duration-300 z-50",
            hovered === "products"
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          )}
        >
          {[
            "HDPE / LDPE Bags",
            "PVS Shrinkable Rolls",
            "Zip Lock Bags",
            "PP Bags / Rolls",
            "Garbage Bags",
            "PE Shrink Film Sheet Rolls",
            "PE Lamination Sheet Rolls",
            "HDPE / LDPE Rolls",
            "POF / PE Stretch Films",
          ].map((item, idx) => (
            <Link
              key={idx}
              href={`/products/${item
                .toLowerCase()
                .replace(/\s+\/\s+|\s+/g, "-")}`}
              className="block px-4 py-2 text-blue-600 hover:font-semibold transition-all"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* Contact Us */}
      <Link
        href="/contact"
        className={clsx(
          "group relative text-blue-600 transition-colors duration-300 pb-1",
          isActive("/contact") ? "font-semibold" : "hover:text-blue-600"
        )}
      >
        <span
          className={clsx(
            "absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ease-out",
            isActive("/contact") ? "w-full" : "w-0 group-hover:w-full"
          )}
        />
        Contact Us
      </Link>
    </>
  );
}
