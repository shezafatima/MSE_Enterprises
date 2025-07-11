import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
      <Image
        src="/images/MSE_logo.png"
        alt="MSE Enterprises Logo"
        className="md:w-20 md:h-16 w-14 h-10"
        width={400}
        height={400}
      />
    </Link>
  );
}
