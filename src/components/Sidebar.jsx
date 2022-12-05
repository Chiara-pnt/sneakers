import React from "react";
import Close from "../images/icon-close.svg";

const Sidebar = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={open ? "show" : "hide"}>
      <button
        onClick={handleClose}
        style={{ border: "none", background: "transparent" }}
      >
        <img alt="close" src={Close} />
      </button>

      <ul>
        <li>Collection</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contacts</li>
      </ul>
    </div>
  );
};

export default Sidebar;
