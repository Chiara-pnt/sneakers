import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const countPlus = () => {
    setCount((prev) => prev + 1);
  };

  const countMinus = () => {
    if (count === 0) {
      return;
    } else {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <StateContext.Provider value={{ count, setCount, countPlus, countMinus }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
