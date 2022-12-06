import React from "react";

import Avatar from "../images/image-avatar.png";

function AvatarImg() {
  return (
    <div style={{ float: "right", display: "flex" }}>
      <div className="avatar">
        <img alt="avatar" src={Avatar} width="25px" />
      </div>
    </div>
  );
}

export default AvatarImg;
