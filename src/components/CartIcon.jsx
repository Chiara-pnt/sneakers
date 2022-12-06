import React from "react";

import Cart from "../images/icon-cart.svg";

const CartIcon = () => {
  return (
    <button style={{ border: "none", background: "transparent" }}>
      <img alt="cart" src={Cart} />
    </button>
  );
};

export default CartIcon;
