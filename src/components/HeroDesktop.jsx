import React from "react";

import Img1 from "../images/image-product-1.jpg";
import Img2 from "../images/image-product-2.jpg";
import Img3 from "../images/image-product-3.jpg";
import Img4 from "../images/image-product-4.jpg";

import ImgTh1 from "../images/image-product-1-thumbnail.jpg";
import ImgTh2 from "../images/image-product-2-thumbnail.jpg";
import ImgTh3 from "../images/image-product-3-thumbnail.jpg";
import ImgTh4 from "../images/image-product-4-thumbnail.jpg";
import Info from "./Info";
// import { useRef } from "react";

const HeroDesktop = () => {
  // const currentImg = useRef({
  //   id: "",
  // });

  return (
    <div className="container">
      <div className="images">
        <div>
          <img id="img1" alt="img" src={Img1} className="show"></img>
          <img id="img2" alt="img" src={Img2} className="hide"></img>
          <img id="img3" alt="img" src={Img3} className="hide"></img>
          <img id="img4" alt="img" src={Img4} className="hide"></img>
        </div>

        <div className="thumbnails">
          <img alt="img" src={ImgTh1} className="thumbs" />
          <img alt="img" src={ImgTh2} className="thumbs" />
          <img alt="img" src={ImgTh3} className="thumbs" />
          <img alt="img" src={ImgTh4} className="thumbs" />
        </div>
        <Info />
      </div>
    </div>
  );
};

export default HeroDesktop;
