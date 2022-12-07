import React from "react";
import ItemList from "./ItemList";
import LogoImg from "./Logo";
import AvatarImg from "./AvatarImg";
import CartIcon from "./CartIcon";

const NavbarDesktop = () => {
  return (
    <nav className="navbar-desktop">
      <LogoImg />
      <div className="nav-list">
        <ItemList />
      </div>
      <div className="icons">
        <div>
          <CartIcon />
        </div>

        <AvatarImg />
      </div>
    </nav>
  );
};

export default NavbarDesktop;
