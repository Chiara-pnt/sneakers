import React from "react";
import Product1 from "../images/image-product-1.jpg";
import Product2 from "../images/image-product-2.jpg";
import Product3 from "../images/image-product-3.jpg";
import Product4 from "../images/image-product-4.jpg";
import Info from "./Info";

const HeroMobile = () => {
  return (
    <div>
      <div className="imagesDesktop">
        <img alt="img" src={Product1} className="hide" />
        <img alt="img" src={Product2} className="hide" />
        <img alt="img" src={Product3} className="hide" />
        <img alt="img" src={Product4} />
      </div>
      <Info />
    </div>
  );
};

export default HeroMobile;
