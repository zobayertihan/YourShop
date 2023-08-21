import { getAllProducts } from "@/app/utils/apiCalls";

export default async function Banner() {
  const products = await getAllProducts();
  console.log(products);
  let image = [];
  console.log(image);
  products.map((product) => image.push(product.image));
  console.log(image);
  return (
    <div className="tw-container">
      <div className=" mx-auto bg-[#C1DCDC] rounded-xl md:py-10 md:h-[512px] flex md:flex-row flex-col justify-between gap-6 px-6 py-5 md:px-12 relative">
        <div className="flex flex-col gap-6 max-h-[339px] max-w-[512px] mt-10">
          <h1 className=" font-extrabold text-[#000] md:text-[64px] md:w-[512px] h-auto text-[20px]">
            Buy Your Dream Products
          </h1>
          <div className="text-[#1E1E1E] flex gap-6 md:gap-12">
            <div className="flex flex-col">
              <p className="md:text-3xl">50+</p>
              <p className="md:text-lg">Products</p>
            </div>
            <p className="text-2xl">|</p>
            <div className="flex flex-col">
              <p className="md:text-3xl">100+</p>
              <p className="md:text-lg">Customers</p>
            </div>
          </div>
          <div className="relative">
            <input
              className="py-5 px-5 w-full md:w-[450px] rounded-xl"
              placeholder="What are you looking for?"
              type="text"
            />
            <button className="h-12 w-12 border rounded-xl bg-[#C1DCDC] flex flex-row items-center justify-center absolute top-2 left-72 md:left-[393px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_9_53)">
                  <path
                    d="M14.6776 12.93C15.888 11.2784 16.4301 9.23062 16.1955 7.19644C15.9609 5.16226 14.9668 3.29168 13.4123 1.95892C11.8577 0.626155 9.85727 -0.070492 7.81113 0.00834944C5.76499 0.0871909 3.82406 0.935706 2.37667 2.38414C0.929274 3.83257 0.0821478 5.7741 0.00477057 7.8203C-0.0726067 9.86649 0.625471 11.8665 1.95934 13.4201C3.29322 14.9737 5.16452 15.9663 7.19886 16.1995C9.2332 16.4326 11.2806 15.8891 12.9313 14.6775H12.9301C12.9676 14.7275 13.0076 14.775 13.0526 14.8213L17.8651 19.6338C18.0995 19.8683 18.4174 20.0001 18.749 20.0003C19.0806 20.0004 19.3987 19.8688 19.6332 19.6344C19.8678 19.4 19.9996 19.082 19.9997 18.7504C19.9998 18.4189 19.8682 18.1008 19.6338 17.8663L14.8213 13.0538C14.7766 13.0085 14.7286 12.968 14.6776 12.93ZM15.0001 8.125C15.0001 9.02784 14.8223 9.92184 14.4768 10.756C14.1313 11.5901 13.6248 12.348 12.9864 12.9864C12.348 13.6248 11.5901 14.1312 10.756 14.4767C9.92192 14.8222 9.02792 15 8.12508 15C7.22225 15 6.32825 14.8222 5.49414 14.4767C4.66002 14.1312 3.90213 13.6248 3.26373 12.9864C2.62532 12.348 2.11891 11.5901 1.77341 10.756C1.42791 9.92184 1.25008 9.02784 1.25008 8.125C1.25008 6.30164 1.97441 4.55296 3.26373 3.26364C4.55304 1.97433 6.30172 1.25 8.12508 1.25C9.94845 1.25 11.6971 1.97433 12.9864 3.26364C14.2758 4.55296 15.0001 6.30164 15.0001 8.125Z"
                    fill="#1E1E1E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_9_53">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
        <div className=" md:flex items-center hidden">
          <img
            className="h-96 w-96 mix-blend-multiply"
            src={
              "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
            }
            alt=""
          />
        </div>
        <div className="absolute top-0 right-0 hidden md:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="90"
            height="150"
            viewBox="0 0 90 176"
            fill="none"
          >
            <path
              d="M2.71253 3.45809C33.8814 10.7611 28.1791 8.8238 52.4497 28.3829C57.9929 32.8501 66.4402 38.6547 68.0203 44.7901C70.352 53.8443 50.7384 75.4277 39.704 63.5084C32.5728 55.8053 34.749 45.7162 46.4271 45.4662C65.5785 45.0563 79.7992 61.6993 84.856 74.5055C90.4232 88.6044 84.0452 101.312 68.2617 106.479C61.0513 108.839 49.9754 104.646 56.6878 97.761C70.4941 83.5986 83.6825 107.299 80.9249 118.106C75.9581 137.57 44.0603 157.613 16.2346 147.271C7.53469 144.038 10.6122 141.723 14.4524 140.351C18.3492 138.958 28.3215 132.946 25.582 135.457C20.7927 139.847 15.0382 140.779 8.55867 142.558C0.201336 144.853 16.9101 157.483 21.7093 161.738C24.2286 163.971 27.7986 168.522 28.3235 171.384C29.3599 177.035 20.1709 160.858 18.7172 155.213"
              stroke="black"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
