import React, { useState } from "react";
import Menu from "../images/icon-menu.svg";
import Logo from "../images/logo.svg";
import Cart from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";
import Sidebar from "./Sidebar";

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <nav>
        <button
          style={{ border: "none", background: "transparent" }}
          onClick={handleOpen}
        >
          <img alt="menu" src={Menu} />
        </button>

        <img alt="logo" src={Logo} />
        <img alt="cart" src={Cart} />
        <img alt="avatar" src={Avatar} />
      </nav>
      {open ? <Sidebar setOpen={setOpen} open={open} /> : ""}
    </>
  );
};

export default NavbarMobile;
