import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 gap-2">
      <Image
        src="/images/hp-logo.png"
        loading="lazy"
        alt="MSE Enterprises Logo"
        className="w-24 "
        width={400}
        height={400}
      />
       <p className="text-[11px] text-blue-600 font-bold -ml-3 mt-3 capitalize ">Haris Packages</p>
    </Link>
  );
}
