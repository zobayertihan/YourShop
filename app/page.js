import Link from "next/link";
import Banner from "./Components/HomePage/Banner/Banner";
import BestSelling from "./Components/HomePage/BestSeling/BestSelling";
import AboutUs from "./Components/HomePage/AboutUs/AboutUs";
import Reviews from "./Components/HomePage/Reviews/Reviews";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Banner />
      <BestSelling />
      <AboutUs />
      <Reviews />
    </div>
  );
}
