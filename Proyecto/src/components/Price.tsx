"use client";

import React, { useEffect, useState } from "react";

type Option = {
  title: string;
  additionalPrice: number;
};

type Props = {
  price: number;
  id: number;
  options?: Option[];
};

const MAX_QUANTITY = 9;

const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const optionPrice = options ? options[selected]?.additionalPrice || 0 : 0;
      setTotal(quantity * (price + optionPrice));
    };
    calculateTotal();
  }, [quantity, selected, options, price]);

  const increaseQuantity = () => {
    setQuantity((prev) => (prev < MAX_QUANTITY ? prev + 1 : MAX_QUANTITY));
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      {/* OPTIONS CONTAINER */}
      <div className="flex gap-4">
        {options?.map(({ title }, index) => (
          <button
            key={title}
            className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
            style={{
              background: selected === index ? "rgb(248 113 113)" : "white",
              color: selected === index ? "white" : "red",
            }}
            onClick={() => setSelected(index)}
          >
            {title}
          </button>
        ))}
      </div>
      {/* QUANTITY AND ADD BUTTON CONTAINER */}
      <div className="flex items-center justify-between">
        {/* QUANTITY */}
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="flex items-center gap-4">
            <button onClick={decreaseQuantity} aria-label="Decrease quantity">
              {"<"}
            </button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity} aria-label="Increase quantity">
              {">"}
            </button>
          </div>
        </div>
        {/* CART BUTTON */}
        <button className="w-56 p-3 text-white uppercase bg-red-500 ring-1 ring-red-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
