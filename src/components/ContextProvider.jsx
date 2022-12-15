import React, { createContext, useContext, useState } from "react";
import { useReducer } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(1);

  const products = () => {
    return [
      {
        id: 1,
        finalPrice: 125,
        name: "Fall Limited Edition Sneakers",
        quantity: count,
      },
    ];
  };

  const cartReducer = (cart, action) => {
    switch (action.type) {
      case "ADD_PRODUCT":
        return products(action.payload);
      case "REMOVE_ALL_PRODUCT":
        return [];
      default:
        return cart;
    }
  };

  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <StateContext.Provider
      value={{ products, dispatch, cart, count, setCount }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
