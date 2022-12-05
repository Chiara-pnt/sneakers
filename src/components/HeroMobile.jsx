import React from "react";
import Product1 from "../images/image-product-1.jpg";
import Product2 from "../images/image-product-2.jpg";
import Product3 from "../images/image-product-3.jpg";
import Product4 from "../images/image-product-4.jpg";

const HeroMobile = () => {
  return (
    <div>
      <img alt="img" src={Product1} />
      <img alt="img" src={Product2} />
      <img alt="img" src={Product3} />
      <img alt="img" src={Product4} />
    </div>
  );
};

export default HeroMobile;
