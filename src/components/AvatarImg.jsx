import React from "react";

import Avatar from "../images/image-avatar.png";

function AvatarImg() {
  return (
    <div className="avatar">
      <img alt="avatar" src={Avatar} width="35px" />
    </div>
  );
}

export default AvatarImg;
