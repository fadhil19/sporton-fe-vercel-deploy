"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import CartPopup from "../ui/cart-popup";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  const pathname = usePathname();

  // Auto close saat pindah halaman
  useEffect(() => {
    setIsCartPopupOpen(false);
  }, [pathname]);

  return (
    // PERUBAHAN ADA DI SINI:
    // sticky: Agar elemen menempel
    // top-0: Menempel tepat di garis atas layar
    // z-50: Agar header selalu berada di ATAS tumpukan elemen lain (tidak tertutup gambar/text)
    // bg-white: Memberi warna background putih (agar teks website tidak membayang di belakang header saat discroll)
    <header className="sticky top-0 z-50 bg-white shadow-sm"> 
      
      <div className="flex justify-between gap-10 container mx-auto py-7">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="sporton logo"
            width={127}
            height={30}
          />
        </Link>
        <nav className="flex gap-24 font-medium">
          <Link
            href="/"
            className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:h-[3px] after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after:translate-y-1"
          >
            Home
          </Link>
          <Link href="#">Category</Link>
          <Link href="#">Explore Products</Link>
        </nav>
        <div className="relative flex gap-10">
          <FiSearch size={24} />
          <button
            className="relative cursor-pointer"
            onClick={() => setIsCartPopupOpen(!isCartPopupOpen)}
          >
            <FiShoppingBag size={24} />
            <div className="bg-primary rounded-full w-3.5 h-3.5 absolute -top-1 -right-1 text-[10px] text-white text-center">
              3
            </div>
          </button>
          
          {isCartPopupOpen && <CartPopup />}
        </div>
      </div>
    </header>
  );
};

export default Header;