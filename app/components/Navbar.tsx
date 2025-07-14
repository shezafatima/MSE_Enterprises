
import Link from "next/link";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";



export default function Navbar() {
  return (
    <header className="">
      <div className="container mx-auto flex flex-wrap md:p-5 p-3 flex-row justify-between  items-center">
   

        <Logo />
       
      

        <nav className="hidden md:ml-auto md:mr-auto md:flex flex-wrap items-center text-base gap-12 justify-center">
          <NavLinks />
        </nav>
        <button className="hidden md:inline-flex items-center border-2 border-orange-600 py-1 px-3 rounded-full text-orange-600 font-bold text-base mt-4 md:mt-0 
  transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-orange-600
  hover:text-black hover:bg-gradient-to-r hover:from-orange-600 hover:to-yellow-600">
  <Link target="_blank" href={"/mse_profile.pdf"} download>
    Company Profile
  </Link>
</button>

      <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
