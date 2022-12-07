import React, { createContext, useContext } from "react";
// import { useRef } from "react";

const StateContext = createContext();

const products = [
  {
    id: 1,
    price: "250.00",
    discountPercentage: "50%",
    finalPrice: "150.00",
    name: "Fall Limited Edition Sneakers",
    desctription:
      "These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they'll withstand everything the weather can offer",
    cont: 2,
  },
];

const cart = [
  {
    id: 1,
    quantity: 1,
    price: 0,
    totalPrice: 0,
    h2: "4",
  },
];

export const ContextProvider = ({ children }) => {
  return (
    <StateContext.Provider value={{ products, cart }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
