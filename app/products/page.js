import { useRouter } from "next/navigation";
import HomeButton from "../Components/Button/HomeButton";
import { getAllProducts } from "@/app/utils/apiCalls";
import DetailsButton from "../Components/Button/DetailsButton";

export default async function Products() {
  const products = await getAllProducts();
  console.log(products);

  return (
    <div className="">
      <h1 className="text-2xl text-center p-5">Products Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 m-10">
        {products?.length > 0
          ? products?.map((product) => (
              <div className="border border-gray-100 hover:bg-gray-200 duration-300 shadow-md flex flex-col justify-between text-[#1E1E1E]">
                <div
                  className=" flex flex-col items-center px-3"
                  key={product.id}
                >
                  <div className="bg-gray-100 w-full my-3">
                    <img
                      className="h-64 w-full object-contain mix-blend-multiply py-2"
                      src={product.image}
                      alt="Product"
                    />
                  </div>
                  <p className="text-center">{product.title}</p>
                </div>
                <div className="flex justify-center items-center">
                  <DetailsButton id={product.id} />
                </div>
              </div>
            ))
          : null}
      </div>
      <HomeButton />

      {/* <svg class="social__icons hover:fill-primary">
        <use xmlnsXlink="/public/icons8-html-5.svg#html"></use>
      </svg> */}
    </div>
  );
}
