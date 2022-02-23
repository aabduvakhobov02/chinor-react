import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ButtonComponent from "../../components/shared/ButtonComponent";
import Logo from "../logo/Logo";
import Content from "../content/Content";

import { headerLinks } from "../../Data";

import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [links] = useState(headerLinks);
  const { t } = useTranslation();

  return (
    <div className="Header">
      <Content>
        <div className="Header-inner">
          <Logo />
          <nav className="Header-content">
            <ul className="menu__list">
              {links.map((item) => (
                <li className="menu__list-item" key={item.link}>
                  <NavLink
                    className="Header-navlink"
                    to={item.link}
                    key={item.text}
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#5ac430" : "",
                      };
                    }}
                  >
                    {t(item.text)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <ButtonComponent
              title={"MAKE AN APPOINTMENT"}
              onClick={() => navigate("/contact", { replace: true })}
            />
          </div>
        </div>
      </Content>
    </div>
  );
};

export default Header;
