import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* TEXT CONTAINER */}
      <div className="flex flex-col items-center justify-center flex-1 gap-8 p-6 text-center">
        <h1 className="text-5xl font-bold text-white xl:text-6xl">Delicioso Hambúrguer e Batata Frita</h1>
        <p className="text-white xl:text-xl">
        Simplifique progressivamente os e-toilers eficazes e os métodos centrados em processos
        de empoderamento. Pontifique rapidamente o paralelo.
        </p>
        <CountDown/>
        <button className="px-6 py-3 text-white bg-red-500 rounded-md">peça agora</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="relative flex-1 w-full md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
