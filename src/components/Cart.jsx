import React, { useState, useReducer } from "react";
import Close from "../images/icon-close.svg";
import { useStateContext } from "./ContextProvider";

const cartReducer = (add, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...add, quantity: "" };
    case "REMOVE_ALL_PRODUCT":
      return { ...add, quantity: "0" };
    default:
      return add;
  }
};

const Cart = ({ setOpenCart }) => {
  const { products, cart } = useStateContext();
  const [full, setFull] = useState(true);
  const [add, dispatch] = useReducer(cartReducer, cart);

  const handleCloseCart = () => {
    setOpenCart(false);
  };

  const addedElement = cart.map((element) => {
    return (
      <>
        <p key={element.id}>{element.quantity}</p>
        <h2 key={element.h2}>{element.totalPrice}</h2>
      </>
    );
  });

  return (
    <div className="cart-container">
      <button
        onClick={handleCloseCart}
        style={{ border: "none", background: "transparent" }}
      >
        <img alt="x" src={Close} style={{ padding: "20px" }} />
      </button>
      <div className="cart-title">Cart</div>
      {full ? (
        { addedElement }
      ) : (
        <div className="cart-body">Your cart is empty</div>
      )}
    </div>
  );
};

export default Cart;
