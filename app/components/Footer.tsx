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
    <p className="mt-2 text-sm text-white md:w-5/6">
      M.S.E Enterprises is one of the largest and most progressive
      organization in Polyethylene manufacturing of polythene bags its
      monthly production capacity of over 300 m/tons per month.
    </p>
  </div>

  {/* Link Columns */}
  <div className="md:w-2/3 w-full flex flex-wrap">
    {/* Quick Links */}
    <div className="w-full md:w-1/3 px-4 mb-10 md:mb-0 md:mt-7">
      <h2 className="text-orange-600 font-medium tracking-widest text-[20px] ">Quick Links</h2>
      <span className="block bg-orange-600 w-10 h-[3px] my-2"></span>
      <nav className="list-none">
        <li><Link href="" className="text-white text-[14px] hover:text-orange-600">Products</Link></li>
        <li><Link href="" className="text-white text-[14px] hover:text-orange-600">About Us</Link></li>
        <li><Link href="" className="text-white text-[14px] hover:text-orange-600">Our Certifications</Link></li>
        <li><Link href="" className="text-white text-[14px] hover:text-orange-600">Contact Us</Link></li>
      </nav>
    </div>

    {/* Our Products */}
    <div className="w-full md:w-1/3 px-4 mb-10 md:mb-0 md:mt-7">
      <h2 className="text-orange-600 font-medium tracking-widest text-[20px] ">Our Products</h2>
       <span className="block bg-orange-600 w-10 h-[3px] my-2"></span>
      <nav className="list-none">
        <li><Link href="" className="text-white text-[14px] hover:text-orange-600">First Link</Link></li>
        <li><Link href="" className="text-white text-[14px] hover:text-orange-600">Second Link</Link></li>
        <li><Link href="" className="text-white text-[14px] hover:text-orange-600">Third Link</Link></li>
        <li><Link href="" className="text-white text-[14px] hover:text-orange-600">Fourth Link</Link></li>
      </nav>
    </div>

    {/* Get in Touch */}
    <div className="w-full md:w-1/3 px-4 md:mt-7">
      <h2 className="text-orange-600 font-medium tracking-widest text-[20px]">Get in Touch</h2>
       <span className="block bg-orange-600 w-10 h-[3px] my-2"></span>
      <nav className="list-none">
        <div className="flex items-center gap-2 my-4">
          <span className="bg-orange-600 p-2 rounded-sm inline-flex">
            <Phone className=" text-white" />
          </span>
          <ul><Link href="" className="text-white hover:text-orange-600 text-sm">Contact Us</Link>
          <li className="text-sm">
            +92-330-3512225
          </li>
           <li className="text-sm">
            +92-321-2424299
          </li>
          </ul>
        </div>
        <div className="flex items-center gap-2 my-4">
          <span className="bg-orange-600 p-2 rounded-sm inline-flex ">
            <MapPin className="text-lg text-white " />
          </span>
          <ul><Link href="" className="text-white hover:text-orange-600 text-sm  ">Location</Link>
          <li className="text-sm">
            Karachi Unit 1:4-A, 2/3, Commercial Area, Nazimabad # 4, Karachi Pakistan
          </li>
          </ul>
        </div>
        <div className="flex items-center gap-2 my-4">
          <span className="bg-orange-600 p-2 rounded-sm inline-flex">
            <Mail className="text-lg text-white" />
          </span>
          <ul><Link href="" className="text-white hover:text-orange-600 text-sm">Mail Us</Link>
          <li className="text-sm">
            mse_enterprises@gmail.com
          </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</div>
<hr className="w-full bg-orange-700 h-[2px]  border-none">

</hr>
      <div className="bg-black">
        <div className=" mx-auto py-4  ">
          <p className="text-gray-500 text-sm text-center ">
           Copy Right © {new Date().getFullYear()} M.S.E Enterprises 
           
          </p>
          {/* <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
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
          </span> */}
        </div>
      </div>
    </footer>
  );
}
