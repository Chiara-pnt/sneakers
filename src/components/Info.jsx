import React from "react";

import Cart from "../images/icon-cart.svg";
import IconPlus from "../images/icon-plus.svg";
import IconMinus from "../images/icon-minus.svg";
import { useStateContext } from "./ContextProvider";

const Info = () => {
  const { count, countPlus, countMinus } = useStateContext();

  return (
    <div className="data">
      <h6
        style={{
          color: "var(--Orange)",
          textTransform: "uppercase",
          fontWeight: "400",
        }}
      >
        sneaker company
      </h6>
      <h1 style={{ fontSize: "30px" }}>Fall Limited Edition Sneakers</h1>
      <p style={{ color: "var(--DarkGrayishBlue)" }}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <h2 style={{ fontSize: "30px" }}>$125.00</h2>
      <span
        style={{
          color: "var(--Orange)",
          background: "var(--PaleOrange)",
          padding: "3px",
          borderRadius: "5px",
        }}
      >
        50%
      </span>
      <p
        style={{ color: "var(--GrayishBlue)", textDecoration: "line-through" }}
      >
        $250.00
      </p>
      <div className="action">
        <button onClick={countMinus} className="addbuttons">
          <img alt="-" src={IconMinus}></img>
        </button>
        <p className="count">{count}</p>
        <button onClick={countPlus} className="addbuttons">
          <img alt="+" src={IconPlus}></img>
        </button>
        <button className="addcart">
          <img alt="cart" src={Cart} />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Info;
