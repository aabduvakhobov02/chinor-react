import React from "react";
import "./SocialMediaLinkComponent.css";

const SocialMediaLinkComponent = ({ link, icon }) => {
  return (
    <a href={link} className="SocialMediaLinkComponent">
      {icon}
    </a>
  );
};

export default SocialMediaLinkComponent;
