import { NavLink } from "react-router-dom";
import Preheader from "./Preheader";
import ButtonComponent from "../shared/ButtonComponent";

import ChinorLogo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
  const headerLinks = [
    { name: "HOME", link: "/" },
    { name: "ABOUT US", link: "/about" },
    { name: "SERVICES", link: "/services" },
    { name: "GALLERY", link: "/gallery" },
    { name: "CONTACT", link: "/contact" },
  ];

  return (
    <>
      <Preheader />
      <div className="Container">
        <div className="Header">
          <div>
            <img src={ChinorLogo} className="logo" />
          </div>
          <nav className="Header-content">
            <ul className="menu__list">
              {headerLinks.map((link) => (
                <li className="menu__list-item">
                  <NavLink className="Header-navlink" to={link.link}>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <ButtonComponent title={"MAKE AN APPOINTMENT"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
