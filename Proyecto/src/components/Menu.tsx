"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  // TEMPORARY: Simulación de usuario no autenticado
  const user = false;

  return (
    <div>
      {/* Icono de abrir/cerrar menú */}
      <Image
        src={open ? "/close.png" : "/open.png"}
        alt={open ? "Cerrar menú" : "Abrir menú"}
        width={20}
        height={20}
        onClick={() => setOpen(!open)}
        className="cursor-pointer"
      />
      
      {open && (
        <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map(({ id, title, url }) => (
            <Link href={url} key={id} onClick={() => setOpen(false)}>
              {title}
            </Link>
          ))}

          {/* Login/Orders Link */}
          <Link
            href={user ? "/orders" : "/login"}
            onClick={() => setOpen(false)}
          >
            {user ? "Orders" : "Login"}
          </Link>

          {/* Link para el carrito */}
          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;