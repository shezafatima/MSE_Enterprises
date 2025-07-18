import Link from "next/link";

export default function Button(){
    return(
         <div className="flex flex-row justify-center  items-center relative">

          <button className="w-34 mr-3  border-2 border-blue-600 py-1 px-3  text-blue-600 font-bold text-base mt-4 md:mt-0 
  transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-600
  hover:text-white  hover:bg-blue-600">
  <Link  href="/products">
    Our Products
  </Link>
</button>
<span className="absolute bg-blue-600 md:mt-0 mt-4  text-white rounded-full p-3 text-sm text-center shadow-[0_0_10px_4px_grey] z-10">
  OR
</span>

  <button className="w-34 ml-3  border-2 border-blue-600 py-1 px-3  text-blue-600 font-bold text-base mt-4 md:mt-0 
  transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-600
  hover:text-white  hover:bg-blue-600">
  <Link  href="/about">
    About Us
  </Link>
</button>


          </div>
    )
}