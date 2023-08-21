"use client";

import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { Context } from "@/app/context/context";

const CartButton = ({ product }) => {
  const router = useRouter();
  const { handleAddToCart, cartItems } = useContext(Context);
  return (
    <div className="flex justify-center items-center">
      <button
        disabled={cartItems.findIndex((item) => item.id === product.id) !== -1}
        className=" mb-2 bg-gray-200 px-10 py-3 text-gray-900 rounded-xl text-xl disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => handleAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default CartButton;
