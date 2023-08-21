import Link from "next/link";
import React from "react";

const BestSelling = () => {
  return (
    <div className="tw-container">
      <div className="py-12 flex flex-col lg:flex-row gap-10">
        <div className="inline-flex flex-col gap-6 items-start max-w-[256px] max-h-[264px]">
          <div className="flex flex-col gap-3">
            <h1 className="text-[#1E1E1E] text-4xl font-bold">
              Best Selling Products
            </h1>
            <p className="text-[#1E1E1E] text-opacity-50 text-lg font-medium">
              Easiest way to buy your necessary products.
            </p>
          </div>
          <Link
            className="bg-[#C1DCDC] px-6 py-3 font-medium text-lg text-[#1E1E1E] flex gap-2 items-center "
            href={"/products"}
          >
            See More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="21"
              viewBox="0 0 24 21"
              fill="none"
              className="font-bold"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.5 10.5001C1.5 10.3343 1.57902 10.1753 1.71967 10.0581C1.86032 9.94091 2.05109 9.87506 2.25 9.87506H19.9395L15.219 5.94256C15.0782 5.8252 14.9991 5.66603 14.9991 5.50006C14.9991 5.33409 15.0782 5.17492 15.219 5.05756C15.3598 4.9402 15.5508 4.87427 15.75 4.87427C15.9492 4.87427 16.1402 4.9402 16.281 5.05756L22.281 10.0576C22.3508 10.1156 22.4063 10.1846 22.4441 10.2605C22.4819 10.3364 22.5013 10.4178 22.5013 10.5001C22.5013 10.5823 22.4819 10.6637 22.4441 10.7396C22.4063 10.8155 22.3508 10.8845 22.281 10.9426L16.281 15.9426C16.1402 16.0599 15.9492 16.1258 15.75 16.1258C15.5508 16.1258 15.3598 16.0599 15.219 15.9426C15.0782 15.8252 14.9991 15.666 14.9991 15.5001C14.9991 15.3341 15.0782 15.1749 15.219 15.0576L19.9395 11.1251H2.25C2.05109 11.1251 1.86032 11.0592 1.71967 10.942C1.57902 10.8248 1.5 10.6658 1.5 10.5001Z"
                fill="#1E1E1E"
              />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-[#1E1E1E] w-full">
          <div className="max-w-[300px] max-h-[436px] flex flex-col gap-3">
            <img
              className="md:max-w-[300px] md:max-h-[363px] max-w-[250px] max-h-[300px]"
              src="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
              alt=""
            />
            <h1>WD 4TB Gaming Drive Works with ...</h1>
            <p>$ 114</p>
          </div>
          <div className="max-w-[300px] max-h-[436px] flex flex-col gap-3">
            <img
              className="md:max-w-[300px] md:max-h-[363px] max-w-[250px] max-h-[300px]"
              src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
              alt=""
            />
            <h1>White Gold Plated Princess</h1>
            <p>$ 9.99</p>
          </div>
          <div className="max-w-[300px] max-h-[436px] flex flex-col gap-3">
            <img
              className="md:max-w-[300px] md:max-h-[363px] max-w-[250px] max-h-[300px]"
              src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
              alt=""
            />
            <h1>MBJ Women's Solid Short Sleeve ...</h1>
            <p>$ 9.85</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
