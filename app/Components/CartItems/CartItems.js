"use client";
import { Context } from "@/app/context/context";
import React, { useContext } from "react";
import RemoveFromCartButton from "../Button/RemoveFromCartButton";

const CartItems = () => {
  const { cartItems } = useContext(Context);
  console.log(cartItems);
  return (
    <div className="grid grid-cols-4 gap-5 m-10">
      {cartItems?.length > 0
        ? cartItems.map((item) => (
            <div
              className="border border-gray-200 flex flex-col justify-between text-[#1E1E1E]"
              key={item.id}
            >
              <div className=" flex flex-col items-center px-3">
                <div className="bg-gray-100 w-full my-3">
                  <img
                    className="h-64 w-full object-contain mix-blend-multiply py-2"
                    src={item.image}
                    alt="Product"
                  />
                </div>
                <p className="text-center">
                  {item.title.length > 10
                    ? item.title.slice(0, 15) + "..."
                    : item.title}
                </p>
              </div>
              <div className="flex justify-center items-center">
                <RemoveFromCartButton product={item} />
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default CartItems;
