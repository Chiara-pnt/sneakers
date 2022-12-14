import React, { useState } from "react";
import { images } from "./Images";
import Info from "./Info";

const HeroDesktop = () => {
  const [selectedImg, setSelectedImg] = useState(images[0]);

  return (
    <div className="container">
      <div className="images">
        <div>
          <img src={selectedImg} alt="img" className="show" />
        </div>

        <div className="thumbnails" key="thumbs">
          {images.map((img, index) => (
            <img
              className="preview"
              style={{
                boxShadow:
                  selectedImg === img
                    ? "5px 5px 10px hsla(26, 89%, 72%, 0.47)"
                    : "",
                opacity: selectedImg === img ? "0.4" : "",
                border: selectedImg === img ? "1px solid var(--Orange)" : "",
              }}
              key={index}
              src={img}
              alt="img"
              onClick={() => setSelectedImg(img)}
            />
          ))}
        </div>
      </div>
      <Info />
    </div>
  );
};

export default HeroDesktop;
