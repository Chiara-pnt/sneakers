import React from "react";
import Logo from "../images/logo.svg";
import Cart from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";

const NavbarDesktop = () => {
  return (
    <nav style={{ display: "flex" }}>
      <img className="logo" src={Logo} alt="logo" />
      <ul className="nav-list" style={{ listStyle: "none", display: "flex" }}>
        <li className="nav-link">Collection</li>
        <li className="nav-link">Men</li>
        <li className="nav-link">Women</li>
        <li className="nav-link">About</li>
        <li className="nav-link">Contact</li>
      </ul>

      <div>
        <button style={{ border: "none", background: "transparent" }}>
          <img alt="cart" src={Cart} />
        </button>
        <img className="avatar" alt="avatar" src={Avatar} />
      </div>
    </nav>
  );
};

export default NavbarDesktop;
