import Link from "next/link";
import Logo from "./Logo";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
     <div className="container px-5 py-16 mx-auto flex flex-col md:flex-row md:items-start">
  {/* Left Logo Section */}
  <div className="md:w-1/3 w-full text-center md:text-left mb-10 md:mb-0">
    <Logo />
    <p className="mt-2 text-sm text-gray-500 md:w-5/6">
      Haris Packages is one of the largest and most progressive
      organization in Polyethylene manufacturing of polythene bags its
      monthly production capacity of over 300 m/tons per month.
    </p>
  </div>

  {/* Link Columns */}
  <div className="md:w-2/3 w-full flex flex-wrap">
    {/* Quick Links */}
    <div className="w-full md:w-1/3 px-4 mb-10 md:mb-0 md:mt-7">
      <h2 className="text-blue-600 font-medium tracking-widest text-[20px] ">Quick Links</h2>
      <span className="block bg-blue-600 w-10 h-[3px] my-2"></span>
      <nav className="list-none">
        <li><Link href="/products" className="text-gray-500 text-[14px] hover:text-blue-600">Products</Link></li>
        <li><Link href="/about" className="text-gray-500 text-[14px] hover:text-blue-600">About Us</Link></li>
        <li><Link href="/about#our-certifications" className="text-gray-500 text-[14px] hover:text-blue-600">Our Certifications</Link></li>
        <li><Link href="/contact" className="text-gray-500 text-[14px] hover:text-blue-600">Contact Us</Link></li>
      </nav>
    </div>

    {/* Our Products */}
    <div className="w-full md:w-1/3 px-4 mb-10 md:mb-0 md:mt-7">
      <h2 className="text-blue-600 font-medium tracking-widest text-[20px] ">Our Products</h2>
       <span className="block bg-blue-600 w-10 h-[3px] my-2"></span>
      <nav className="list-none">
      
       <li><Link href="/products/hdpe-ldpe-bags" className="text-gray-500 text-[14px] hover:text-blue-600">HDPE / LDPE Bags</Link></li>
  <li><Link href="/products/pvs-shrinkable-rolls" className="text-gray-500 text-[14px] hover:text-blue-600">PVS Shrinkable Rolls</Link></li>
  <li><Link href="/products/zip-lock-bags" className="text-gray-500 text-[14px] hover:text-blue-600">Zip Lock Bags</Link></li>
  <li><Link href="/products/pp-bags-rolls" className="text-gray-500 text-[14px] hover:text-blue-600">PP Bags / Rolls</Link></li>
  <li><Link href="/products/garbage-bags" className="text-gray-500 text-[14px] hover:text-blue-600">Garbage Bags</Link></li>
  <li><Link href="/products/pe-shrink-film-sheet-rolls" className="text-gray-500 text-[14px] hover:text-blue-600">PE Shrink Film Sheet Rolls</Link></li>
  <li><Link href="/products/pe-lamination-sheet-rolls" className="text-gray-500 text-[14px] hover:text-blue-600">PE Lamination Sheet Rolls</Link></li>
  <li><Link href="/products/hdpe-ldpe-rolls" className="text-gray-500 text-[14px] hover:text-blue-600">HDPE / LDPE Rolls</Link></li>
  <li><Link href="/products/pof-pe-stretch-films" className="text-gray-500 text-[14px] hover:text-blue-600">POF / PE Stretch Films</Link></li>
      </nav>
    </div>

    {/* Get in Touch */}
    <div className="w-full md:w-1/3 px-4 md:mt-7">
      <h2 className="text-blue-600 font-medium tracking-widest text-[20px]">Get in Touch</h2>
       <span className="block bg-blue-600 w-10 h-[3px] my-2"></span>
      <nav className="list-none">
        <div className="flex items-center gap-2 my-4">
          <span className="bg-blue-600 p-2 rounded-sm inline-flex">
            <Phone className=" text-white" />
          </span>
          <ul><Link href="" className="text-blue-700 hover:text-blue-600 text-sm">Contact Us</Link>
          <li className="text-[15px]">
            Mr Hassan Butt &#x2772;Director&#x2773;:
          </li>
          <li className="text-sm">
            +92-330-3512225
          </li>
           <li className="text-sm">
            +92-321-2424299
          </li>
          </ul>
        </div>
        <div className="flex items-center gap-2 my-4">
          <span className="bg-blue-600 p-2 rounded-sm inline-flex ">
            <MapPin className="text-lg text-white " />
          </span>
          <ul><Link href="" className="text-blue-700 hover:text-blue-600 text-sm  ">Location</Link>
          <li className="text-sm">
           4-C, 4/2, Commercial Area Nazimabad No 4, Karachi Centeral
          </li>
          </ul>
        </div>
        <div className="flex items-center gap-2 my-4">
          <span className="bg-blue-600 p-2 rounded-sm inline-flex">
            <Mail className="text-lg text-white" />
          </span>
          <ul><Link href="" className="text-blue-700 hover:text-blue-600 text-sm">Mail Us</Link>
          <li className="text-sm">
     
Hassanbutt@harispackages.com

          </li>
           <li className="text-sm">

Harisbutt@harispackages.com
          </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</div>
<hr className="w-full bg-blue-700 h-[2px]  border-none">

</hr>
      <div className="">
        <div className=" mx-auto py-4  ">
          <p className="text-gray-500 text-sm text-center ">
           Copy Right © {new Date().getFullYear()} Info@harispackages.com

           
          </p>
         
        </div>
      </div>
    </footer>
  );
}
