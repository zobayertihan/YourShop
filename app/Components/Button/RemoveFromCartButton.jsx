"use client";

import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { Context } from "@/app/context/context";

const RemoveFromCartButton = ({ product }) => {
  const router = useRouter();
  const { removeFromCart } = useContext(Context);
  return (
    <div className="flex justify-center items-center mt-5">
      <button
        className=" mb-2 bg-gray-200 px-10 py-1 text-gray-900 rounded-xl text-xl "
        onClick={() => removeFromCart(product)}
      >
        Remove from Cart
      </button>
    </div>
  );
};

export default RemoveFromCartButton;
