import React, { useState } from "react";
import Menu from "../images/icon-menu.svg";
import Sidebar from "./Sidebar";
import AvatarImg from "./AvatarImg";
import LogoImg from "./Logo";
import CartIcon from "./CartIcon";
import Cart from "./Cart";

const NavbarMobile = ({ openCart }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <nav
        style={{
          margin: "0px",
          padding: "0px",
          display: "flex",
          backgroundColor: "white",
          position: "fixed",
          width: "100%",
        }}
      >
        <button
          style={{ border: "none", background: "transparent" }}
          onClick={handleOpen}
          className="menu"
        >
          <img alt="menu" src={Menu} />
        </button>
        <LogoImg />
        <div
          style={{
            marginTop: "20px",
            display: "flex",
          }}
        >
          <div>
            <CartIcon />
            {openCart ? <Cart /> : ""}
          </div>
          <AvatarImg />
        </div>
      </nav>
      {open ? <Sidebar setOpen={setOpen} /> : ""}
    </>
  );
};

export default NavbarMobile;
