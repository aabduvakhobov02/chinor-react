import React from "react";
import { Link } from "react-router-dom";
import ChinorLogo from "../../assets/logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <Link to="/" className="logo-link">
      <img className="logo" src={ChinorLogo} alt="logo" />
    </Link>
  );
};

export default Logo;
