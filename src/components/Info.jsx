import React, { useState } from "react";
import IconPlus from "../images/icon-plus.svg";
import IconMinus from "../images/icon-minus.svg";
import { useStateContext } from "./ContextProvider";

const Info = () => {
  const [count, setCount] = useState(0);
  const { products, cart } = useStateContext();

  const items = products.map((element) => {
    return (
      <>
        <h1
          key={element.name}
          style={{ fontSize: "30px", marginBottom: "20px" }}
        >
          {element.name}
        </h1>
        <p
          key={element.id}
          style={{ color: "var(--DarkGrayishBlue)", marginBottom: "20px" }}
        >
          {element.desctription}
        </p>
        <div key={element.cont} style={{ display: "flex" }}>
          <h2
            key={element.finalPrice}
            style={{ fontSize: "30px", marginBottom: "20px" }}
          >
            ${element.finalPrice}
          </h2>
          <span
            key={element.discountPercentage}
            style={{
              color: "var(--Orange)",
              background: "var(--PaleOrange)",
              padding: "3px",
              borderRadius: "5px",
              margin: "5px 15px",
              height: "20px",
            }}
          >
            {element.discountPercentage}
          </span>
        </div>
        <p
          key={element.price}
          style={{
            color: "var(--GrayishBlue)",
            textDecoration: "line-through",
            marginBottom: "20px",
          }}
        >
          ${element.price}
        </p>
      </>
    );
  });

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

  const handleAddCart = () => {
    // setCart();
  };

  return (
    <div className="data">
      <h6
        style={{
          color: "var(--Orange)",
          textTransform: "uppercase",
          fontWeight: "700",
          fontSize: "14px",
          marginBottom: "20px",
        }}
      >
        sneaker company
      </h6>
      {items}
      <div className="action">
        <div className="counters">
          <button
            style={{ borderRadius: "15px 0 0 15px", cursor: "pointer" }}
            onClick={countMinus}
            className="addbuttons"
          >
            <img alt="-" src={IconMinus}></img>
          </button>
          <p className="count">{count}</p>
          <button
            style={{ borderRadius: " 0 15px 15px 0 ", cursor: "pointer" }}
            onClick={countPlus}
            className="addbuttons"
          >
            <img alt="+" src={IconPlus}></img>
          </button>
        </div>

        <button className="addcart" onClick={handleAddCart}>
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#fff"
              fillRule="nonzero"
            />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Info;
