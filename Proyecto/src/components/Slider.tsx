"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "sempre fresco e sempre crocante e sempre quente",
    image: "/slider-04.jpg",
  },
  {
    id: 2,
    title: "entregamos seu pedido",
    image: "/slider-05.jpg",
  },
  {
    id: 3,
    title: "a melhor pizza para compartilhar com sua família",
    image: "/slider-06.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  // Función para renderizar el texto con diferentes colores
  const renderTitle = (title) => {
    const words = title.split(' '); // Separar las palabras
    return words.map((word, index) => (
      <span key={index} className={index % 2 === 0 ? 'text-red-500' : 'text-red-800'}>
        {word}{' '}
      </span>
    ));
  };

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* TEXT CONTAINER */}
      <div className="flex flex-col items-center justify-center flex-1 gap-8 font-bold">
        <h1 className="p-4 text-5xl text-center uppercase md:p-10 md:text-6xl xl:text-7xl">
          {renderTitle(data[currentSlide].title)}
        </h1>
        <button className="px-8 py-4 text-white bg-red-500">Encomende agora</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="relative flex-1 w-full">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
