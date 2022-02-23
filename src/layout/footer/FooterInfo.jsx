import React from "react";

import SocialMediaLinkComponent from "../../components/shared/SocialMediaLinkComponent";
import Logo from "../logo/Logo";

import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

import "./FooterInfo.css";

const FooterInfo = () => {
  return (
    <div className="FooterInfo">
      <Logo />
      <div className="FooterInfo-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, iusto
        reprehenderit quasi ab omnis fuga quo quas culpa ipsa quisquam magni
        maiores voluptates harum nobis cumque accusantium. Velit, quae veniam.
      </div>
      <div className="FooterInfo-socialMedia">
        <p className="FooterInfo-socialMedia-title">Follow Us At</p>
        <div className="FooterInfo-socialMedia-links">
          <SocialMediaLinkComponent
            link=""
            icon={<TelegramIcon className="SocialMediaLinkComponent-icon" />}
          />
          <SocialMediaLinkComponent
            link=""
            icon={<InstagramIcon className="SocialMediaLinkComponent-icon" />}
          />
          <SocialMediaLinkComponent
            link=""
            icon={<FacebookIcon className="SocialMediaLinkComponent-icon" />}
          />
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
