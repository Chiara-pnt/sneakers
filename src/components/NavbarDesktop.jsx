import React from "react";
import ItemList from "./ItemList";
import LogoImg from "./Logo";
import AvatarImg from "./AvatarImg";
import CartIcon from "./CartIcon";

const NavbarDesktop = () => {
  return (
    <nav style={{ display: "flex" }} className="navbar">
      <LogoImg />
      <div className="nav-list">
        <ItemList />
      </div>
      <div>
        <CartIcon />
        <AvatarImg />
      </div>
    </nav>
  );
};

export default NavbarDesktop;
