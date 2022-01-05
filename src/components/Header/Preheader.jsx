import React from "react";
import UsaIcon from "../../assets/flag-icons/usa.svg";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";

import PhoneIcon from "@mui/icons-material/Phone";

import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import "./Preheader.css";

const Preheader = () => {
  return (
    <div className="Preheader">
      <div className="Container">
        <div className="Preheader-wrapper">
          <div className="Phone-number">
            <PhoneIcon />
            <p>Tel: 555-000-556</p>
          </div>
          <div className="Language">
            <Menu menuButton={<MenuButton>ENG</MenuButton>} transition>
              <MenuItem>RUS</MenuItem>
              <MenuItem>UZB</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preheader;
