import React from "react";

import Logo from "../images/logo.svg";

const LogoImg = () => {
  return (
    <img
      className="logo"
      src={Logo}
      alt="logo"
      height="20px"
      style={{ padding: "18px 0", cursor: "pointer", marginRight: "25px" }}
    />
  );
};

export default LogoImg;
