import React from "react";
import Close from "../images/icon-close.svg";
import ItemList from "./ItemList";

const Sidebar = ({ setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-nav">
        <button
          onClick={handleClose}
          style={{ border: "none", background: "transparent", padding: "20px" }}
        >
          <img alt="close" src={Close} />
        </button>
        <ItemList />
      </div>
    </div>
  );
};

export default Sidebar;
