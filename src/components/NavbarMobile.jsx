import React, { useState } from "react";
import Menu from "../images/icon-menu.svg";
import Sidebar from "./Sidebar";
import AvatarImg from "./AvatarImg";
import LogoImg from "./Logo";
import CartIcon from "./CartIcon";

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <nav style={{ margin: "0px", padding: "0px", display: "flex" }}>
        <button
          style={{ border: "none", background: "transparent" }}
          onClick={handleOpen}
          className="menu"
        >
          <img alt="menu" src={Menu} />
        </button>
        <LogoImg />
        <CartIcon />
        <AvatarImg />
      </nav>
      {open ? <Sidebar setOpen={setOpen} open={open} /> : ""}
    </>
  );
};

export default NavbarMobile;
