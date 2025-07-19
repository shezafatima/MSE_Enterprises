"use client";

import { useState } from "react";
import Link from "next/link";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\//g, "-")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  const aboutItems = [
    "Quality Policy",
            "Industries We Serve",
            "Our Vision & Mission",
            "Our Certifications",
            
            "Client Feedback",
            "Our Customers",
  ];

  const productItems = [
    "HDPE / LDPE Bags",
    "PVS Shrinkable Rolls",
    "Zip Lock Bags",
    "PP Bags / Rolls",
    "Garbage Bags",
    "PE Shrink Film Sheet Rolls",
    "PE Lamination Sheet Rolls",
    "HDPE / LDPE Rolls",
    "POF / PE Stretch Films",
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-3xl text-blue-600">
          <Menu />
        </button>
      </DialogTrigger>

      <DialogContent
        className="bg-white border-blue-600 text-blue-600 px-6 py-6 rounded-none w-full max-w-full h-screen overflow-y-auto"
        showCloseButton={false}
      >
        <DialogTitle className="sr-only">Mobile Navigation Menu</DialogTitle>
        <div className="flex justify-end">
          
          <button onClick={() => setOpen(false)} className="text-blue-600 ">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="border-b border-blue-600 pb-1"
          >
            Home
          </Link>

          {/* About Dropdown */}
          <Collapsible open={aboutOpen} onOpenChange={setAboutOpen}>
            <CollapsibleTrigger className="flex justify-between w-full items-center border-b border-blue-600 pb-1">
              About {aboutOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 flex p-2 flex-col gap-4 bg-gray-200 mt-3 rounded-2xl">
              {aboutItems.map((item) => (
                <Link
                  key={item}
                 href={`/about#${slugify(item)}`}
                  onClick={() => setOpen(false)}
                  className="hover:underline border-b border-blue-600 pb-1"
                >
                  {item}
                </Link>
              ))}
            </CollapsibleContent>
          </Collapsible>

          {/* Products Dropdown */}
          <Collapsible open={productOpen} onOpenChange={setProductOpen}>
            <CollapsibleTrigger className="flex justify-between w-full items-center mt-2 border-b border-blue-600 pb-1">
              Products {productOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 flex p-2 flex-col gap-4 bg-gray-200 mt-3 rounded-2xl">
              {productItems.map((item) => (
                <Link
                  key={item}
                  href={`/products/${item.toLowerCase().replace(/\s+\/\s+|\s+/g, "-")}`}
                  onClick={() => setOpen(false)}
                  className="hover:underline border-b border-blue-600 pb-1"
                >
                  {item}
                </Link>
              ))}
            </CollapsibleContent>
          </Collapsible>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="border-b border-blue-600 pb-1"
          >
            Contact Us
          </Link>

         
           <Link  href={"/quote"}  onClick={() => setOpen(false)}
            className="mt-4 border-2 bg-blue-600 text-white border-blue-600 text-center py-2 rounded-full hover:bg-white hover:text-blue-600 font-bold">
    Request A Quote
  </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
