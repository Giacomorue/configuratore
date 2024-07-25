import React from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTiktok   } from "react-icons/fa";

function Navbar() {
  return (
    <div className="h-[70px] fixed top-0 w-full bg-white border-b border-neutral-300 z-[10000]">
      <Container className="flex flex-row items-center justify-between px-3 relative">
        <Link href="/">
          <Image src={"/logo.png"} alt="logo" width={130} height={100} />
        </Link>

        <div className="flex flex-row items-center gap-8">
          <p className="text-neutral-500 hover:text-red-600 transition-all duration-150 cursor-pointer">Home</p>
          <p className="text-neutral-500 hover:text-red-600 transition-all duration-150 cursor-pointer">Chi siamo</p>
          <p className="text-neutral-500 hover:text-red-600 transition-all duration-150 cursor-pointer">Prodotti</p>
          <p className="text-neutral-500 hover:text-red-600 transition-all duration-150 cursor-pointer">Usato</p>
          <p className="text-neutral-500 hover:text-red-600 transition-all duration-150 cursor-pointer">Eventi</p>
          <p className="text-neutral-500 hover:text-red-600 transition-all duration-150 cursor-pointer">Contatti</p>
        </div>

        <div className="flex flex-row items-center gap-5">
          <FaInstagram className="w-6 h-6 text-neutral-500 hover:text-red-600 transition-all duration-150 cursor-pointer" />
          <FaFacebookF className="w-6 h-6 text-neutral-500 hover:text-red-600 transition-all duration-150 cursor-pointer" />
          <FaTiktok className="w-6 h-6 text-neutral-500 hover:text-red-600 transition-all duration-150 cursor-pointer" />
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
