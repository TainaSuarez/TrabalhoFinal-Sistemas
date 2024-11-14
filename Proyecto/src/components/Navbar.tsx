import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="flex items-center justify-between h-12 p-4 text-red-500 uppercase border-b-2 border-b-red-500 md:h-24 lg:px-20 xl:px-40">
      {/* LEFT LINKS */}
      <div className="flex-1 hidden gap-4 md:flex">
        <Link href="/">Página inicial</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contato</Link>
      </div>
      {/* LOGO */}
      <div className="flex-1 text-xl md:font-bold md:text-center">
        <Link href="/">Maca Pizza</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="items-center justify-end flex-1 hidden gap-4 md:flex">
        <div className="flex items-center gap-2 px-1 bg-orange-300 rounded-md cursor-pointer md:absolute top-3 r-2 lg:static">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>+55xxxxx</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Pedidos</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
