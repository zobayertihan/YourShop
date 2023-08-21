"use client";
import { createContext, useEffect, useState } from "react";

export const Context = createContext(0);

function GlobalState({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(item) {
    console.log(item);
    let copyCartItems = [...cartItems];
    const indexOfCurrentItem = copyCartItems.findIndex(
      (items) => items.id === item.id
    );
    console.log(indexOfCurrentItem);

    if (indexOfCurrentItem === -1) {
      copyCartItems.push(item);
    }

    setCartItems(copyCartItems);

    localStorage.setItem("cartItems", JSON.stringify(copyCartItems));
  }

  function removeFromCart(item) {
    console.log(item);
    let copyCartItems = [...cartItems];
    copyCartItems = copyCartItems.filter((product) => product.id !== item.id);
    setCartItems(copyCartItems);
    localStorage.setItem("cartItems", JSON.stringify(copyCartItems));
  }

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cartItems")) || []);
  }, []);

  return (
    <Context.Provider value={{ cartItems, handleAddToCart, removeFromCart }}>
      {children}
    </Context.Provider>
  );
}

export default GlobalState;
