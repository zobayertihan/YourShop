import CartButton from "@/app/Components/Button/CartButton";
import { getProductDetails } from "@/app/utils/apiCalls";

export default async function ProductDetails({ params }) {
  const { productDetails } = params;
  console.log(productDetails);
  const product = await getProductDetails(productDetails);
  console.log(product);
  return (
    <div className=" tw-container flex flex-col items-center px-3 text-[#000] w-96 bg-gray-100 ">
      <div className="flex gap-10">
        <div className=" my-3">
          <img
            className="h-64 w-full object-contain mix-blend-multiply py-2"
            src={product.image}
            alt="Product"
          />
        </div>
        <div className="text-start">
          <p className="">{product.title}</p>
          <p className="">Category: {product.category}</p>
          <p className="">Price: {product.price} $</p>
          <div>
            <p className="">Rating: {product.rating.rate}</p>
            <p className="">Count: {product.rating.count}</p>
          </div>
          <p className=" w-96 mb-5">{product.description}</p>
        </div>
      </div>
      <CartButton product={product} />
    </div>
  );
}
