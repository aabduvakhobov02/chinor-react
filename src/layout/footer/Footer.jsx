import React from "react";
import SubFooter from "./SubFooter";
import FooterInfo from "./FooterInfo";
import FooterTimetable from "./FooterTimetable";
import FooterMenu from "./FooterMenu";
import Content from "../content/Content";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <Content>
        <div className="Footer__inner">
          <FooterInfo />
          <FooterTimetable />
          <FooterMenu />
        </div>
        <SubFooter />
      </Content>
    </div>
  );
};

export default Footer;
