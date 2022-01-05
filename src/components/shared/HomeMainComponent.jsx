import React from "react";
import TitleComponent from "./TitleComponent";

import "./HomeMainComponent.css";

const HomeMainComponent = ({ preTitle, title, text, button, imageSrc }) => {
  return (
    <div className="HomeMainComponent">
      <div>
        <TitleComponent preTitle={preTitle} title={title} text={text} />
        {button}
      </div>
      <img src={imageSrc} />
    </div>
  );
};

export default HomeMainComponent;
