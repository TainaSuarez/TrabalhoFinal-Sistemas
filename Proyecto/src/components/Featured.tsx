import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* WRAPPER */}
      <div className="flex w-max">
        {featuredProducts.map((item) => (
          <React.Fragment key={item.id}>
            <div
              className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 
                         hover:bg-fuchsia-50 transition-all duration-300 
                         md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
            >
              {/* IMAGE CONTAINER */}
              {item.img && (
                <div className="relative flex-1 w-full transition-all duration-500 hover:rotate-[60deg]">
                  <Image src={item.img} alt={item.title} fill className="object-contain" />
                </div>
              )}

              {/* TEXT CONTAINER */}
              <div className="flex flex-col items-center justify-center flex-1 gap-4 text-center">
                <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                  {item.title}
                </h1>
                <p className="p-4 2xl:p-8">{item.desc}</p>
                <span className="text-xl font-bold">${item.price}</span>
                <button className="p-2 text-white transition-colors duration-300 bg-red-500 rounded-md hover:bg-red-600">
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Featured;
