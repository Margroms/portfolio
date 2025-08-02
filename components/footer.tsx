import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
      <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
        <h1 className="text-3xl md:text-5xl font-medium ">
          <Image
            src={"/logo/logo.png"}
            width={10000}
            height={10000}
            className="w-40"
            alt="image"
          />{" "}
        </h1>
        <p className="text-left  text-xl  text-gray-500">519-319-1562</p>
        <p className="text-left  text-xl  text-gray-500">
          margrosmarketing@gmail.com
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:justify-center items-center gap-4 mt-10">
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <Link href="/terms" className="hover:text-[#FFB982] transition-colors">
            Terms of Service
          </Link>
          <span className="hidden md:inline">|</span>
          <Link href="/privacy" className="hover:text-[#FFB982] transition-colors">
            Privacy Policy
          </Link>
          <span className="hidden md:inline">|</span>
          <Link href="/refund" className="hover:text-[#FFB982] transition-colors">
            Cancellation & Refund
          </Link>
          <span className="hidden md:inline">|</span>
          <Link href="/shipping" className="hover:text-[#FFB982] transition-colors">
            Shipping & Delivery
          </Link>
        </div>
        <div className="text-sm text-gray-500">
          © 2024 Margros. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
