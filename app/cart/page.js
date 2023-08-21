import { Context } from "@/app/context/context";
import { useContext } from "react";
import CartItems from "../Components/CartItems/CartItems";

export default function Cart() {
  return (
    <div>
      <CartItems />
    </div>
  );
}
