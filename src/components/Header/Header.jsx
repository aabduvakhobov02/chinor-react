import Preheader from "./Preheader";
import ChinorLogo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Preheader />
      <div>
        <img src={ChinorLogo} className="logo" />
        <div className="header-content"></div>
      </div>
    </div>
  );
};

export default Header;
