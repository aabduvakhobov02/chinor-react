import React from "react";
import TitleComponent from "../shared/TitleComponent";

import "./HomeMainComponent.css";

const HomeMainComponent = ({ preTitle, title, text, button, img }) => {
  return (
    <div className="HomeMainComponent">
      <div>
        <TitleComponent preTitle={preTitle} title={title} text={text} />
        {button}
      </div>
      {img}
    </div>
  );
};

export default HomeMainComponent;
