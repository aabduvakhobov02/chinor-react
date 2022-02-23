import React from "react";
import { Link } from "react-router-dom";

import { headerLinks } from "../../Data";

import "./FooterMenu.css";

const FooterMenu = () => {
  return (
    <div className="FooterMenu">
      <h3 className="FooterMenuTitle">Links</h3>
      <div className="FooterList">
        {headerLinks.map((item) => (
          <Link className="FooterListItem" to={item.link} key={item.text}>
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterMenu;
