"use client";

import React from "react";
import { useRouter } from "next/navigation";

const DetailsButton = ({ id }) => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center">
      <button
        className=" mb-2 bg-gray-100 px-10 py-3 text-gray-900 rounded-xl text-xl "
        onClick={() => router.push(`/products/${id}`)}
      >
        Details
      </button>
    </div>
  );
};

export default DetailsButton;
