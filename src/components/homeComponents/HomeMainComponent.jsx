import React from "react";
import TitleComponent from "../shared/TitleComponent";

import "./HomeMainComponent.css";

const HomeMainComponent = ({
  preTitle,
  title,
  text,
  button,
  img,
  marginTop,
}) => {
  return (
    <div style={{ marginTop: marginTop }} className="HomeMainComponent">
      <div>
        <TitleComponent preTitle={preTitle} title={title} text={text} />
        {button}
      </div>
      {img}
    </div>
  );
};

export default HomeMainComponent;
