import Link from "next/link";
import Logo from "./Logo";
import { Locate, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Logo />
          <p className="mt-2 text-sm text-white">
            M.S.E Enterprises is one of the largest and most progressive
            organization in Polyethylene manufacturing of polythene bags its
            monthly production capacity of over 300 m/tons per month.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font  text-orange-600 font-medium tracking-widest text-[20px] mb-3">
              Quick Links
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="" className="text-white text-[14px] hover:text-orange-600">Products</Link>
              </li>
              <li>
                <Link href="" className="text-white text-[14px] hover:text-orange-600">About Us</Link>
              </li>
              <li>
                <Link href="" className="text-white text-[14px] hover:text-orange-600">Our Certifications </Link>
              </li>
              <li>
                <Link href="" className="text-white text-[14px] hover:text-orange-600">Contact Us</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
             <h2 className="title-font  text-orange-600 font-medium tracking-widest text-[20px] mb-3">
             Our Products
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="" className="text-gray-600 hover:text-gray-800">First Link</Link>
              </li>
              <li>
                <Link href="" className="text-gray-600 hover:text-gray-800">Second Link</Link>
              </li>
              <li>
                <Link href="" className="text-gray-600 hover:text-gray-800">Third Link</Link>
              </li>
              <li>
                <Link href="" className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
             <h2 className="title-font  text-orange-600 font-medium tracking-widest text-[20px] mb-3">
              Get in Touch
            </h2>
            <nav className="list-none mb-10">
              <div className="flex items-center gap-2 my-4">
<span className="bg-orange-600 p-2 rounded-sm inline-flex">
  <Phone className="text-lg text-white" />
</span>
              <li>
                <Link href={""} className="text-white hover:text-orange-600">Contact Us</Link>
              </li>
              </div>
              <div className="flex items-center gap-2 my-4">
<span className="bg-orange-600 p-2 rounded-sm inline-flex">
  <Locate className="text-lg text-white" />
</span>
              <li>
                <Link href={""} className="text-white hover:text-orange-600">Location</Link>
              </li>
              </div>
              <div className="flex items-center gap-2 my-4">
<span className="bg-orange-600 p-2 rounded-sm inline-flex">
  <Mail className="text-lg text-white" />
</span>
              <li>
                <Link href={""} className="text-white hover:text-orange-600">Mail Us</Link>
              </li>
              </div>
              
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} M.S.E Enterprises —
            <Link
            href=""
            
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              mse_enterprises@gmail.com
            </Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <Link
            href="" className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </Link>
            <Link
            href="" className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </Link>
            <Link href={""} className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </Link>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
