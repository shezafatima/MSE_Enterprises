import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
      <Image
        src="/images/MSE_logo.png"
        loading="lazy"
        alt="MSE Enterprises Logo"
        className="w-24 "
        width={400}
        height={400}
      />
       <p className="text-[9px] text-blue-600 font-bold -ml-3 mt-3 capitalize">Haris Packages</p>
    </Link>
  );
}
