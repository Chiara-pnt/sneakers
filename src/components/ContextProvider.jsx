import React, { createContext, useState, useContext } from "react";
import { useReducer } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [full, setFull] = useState(false);

  const products = [
    {
      id: count,
      price: 250,
      discountPercentage: "50%",
      finalPrice: 150,
      name: "Fall Limited Edition Sneakers",
      desctription:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer",
      count,
    },
  ];

  const cartReducer = (add, action) => {
    switch (action.type) {
      case "ADD_PRODUCT":
        if (full) {
          alert("You already added the product in your cart");
        }
        return setFull(true);
      case "REMOVE_ALL_PRODUCT":
        return setFull(false);
      default:
        return add;
    }
  };

  const [add, dispatch] = useReducer(cartReducer, {
    id: 1 + count,
    name: "Autumn Limited Edition...",
    count,
    price: 125,
    total: count * 125,
  });

  return (
    <StateContext.Provider
      value={{ products, full, count, setCount, dispatch, add }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
