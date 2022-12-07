import React, { useState } from "react";
import Info from "./Info";
import { images } from "./Images";

const HeroMobile = () => {
  const [num, setNum] = useState(1);
  const [selectedImg, setSelectedImg] = useState(images[num]);

  const nextPic = () => {
    if (num < 4) {
      setNum((prev) => prev + 1);
    }
    return;
  };

  const prevPic = () => {
    if (selectedImg !== 0) {
      setNum((prev) => prev - 1);
    } else {
      return;
    }
  };

  return (
    <div style={{ paddingTop: "50p" }}>
      <div className="arrows">
        <svg
          onClick={prevPic}
          style={{
            marginLeft: "10px",
            padding: "12px",
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.7)",
            cursor: "pointer",
          }}
          width="12"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            stroke-width="3"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
        <svg
          onClick={nextPic}
          style={{
            transform: "translatex(450px)",
            padding: "12px",
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.7)",
            cursor: "pointer",
          }}
          width="13"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            stroke-width="3"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </div>

      <div>
        <img
          src={selectedImg}
          alt="img"
          style={{ width: "100vw", marginTop: "60px" }}
        />
        {/* {images.map((img, index) => (
          <img
            className={images.index === selectedImg ? "show" : "hide"}
            key={index}
            src={img}
            alt="img"
            style={{ width: "100vw", margin: "0" }}
          />
        ))} */}
      </div>
      <Info />
    </div>
  );
};

export default HeroMobile;
