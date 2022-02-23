import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

import Content from "../content/Content";

import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";
import { languageMenu } from "../../configs/i18nConfig";

import PhoneIcon from "@mui/icons-material/Phone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import "./Preheader.css";

const Preheader = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(languageMenu[1]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const headerMenuRef = useRef(null);
  const [isOutsideClicked] = useOutsideAlerter(headerMenuRef);

  const handleOnLanguageMenuItemSelected = (item) => {
    if (language.id !== item.id) {
      console.log(item);
      setLanguage(item);
      i18n.changeLanguage(item.code);
    }
  };

  useEffect(() => {
    const detectedLanguageMenu = languageMenu.find((l) =>
      i18n.language.includes(l.code)
    );

    setLanguage(detectedLanguageMenu);
  }, [i18n.language]);

  useEffect(() => {
    if (isOutsideClicked && isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  }, [isOutsideClicked]);

  const options = languageMenu.filter((item) => language.id !== item.id);

  return (
    <div className="Preheader">
      <Content>
        <div className="Preheader-wrapper">
          <div className="Phone-number">
            <PhoneIcon />
            <p>Tel: 555-000-556</p>
          </div>
          <div className="Language" ref={headerMenuRef}>
            <div
              className="LanguageWrapper"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              <div className="LanguageFirst">
                <img
                  src={language.icon}
                  alt="LanguageIcon"
                  className="LanguageIcon"
                />
                {language.title}
                {isDropdownOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </div>
            </div>
            {isDropdownOpen && (
              <ul className="LanguageList">
                {options.map((item) => (
                  <li
                    className="LanguageListItem"
                    key={item.id}
                    onClick={() => handleOnLanguageMenuItemSelected(item)}
                  >
                    <img
                      src={item.icon}
                      alt="LanguageIcon"
                      className="LanguageIcon"
                    />
                    <p>{item.title}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Content>
    </div>
  );
};

export default Preheader;
