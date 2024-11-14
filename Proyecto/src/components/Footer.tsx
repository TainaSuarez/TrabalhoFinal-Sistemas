import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-between h-12 p-4 text-red-500 md:h-24 lg:px-20 xl:px-40">
      <Link href="/" className="text-xl font-bold">Maca Pizza</Link>
      <p>© TODOS OS DIREITOS RESERVADOS.</p>
    </div>
  );
};

export default Footer;
