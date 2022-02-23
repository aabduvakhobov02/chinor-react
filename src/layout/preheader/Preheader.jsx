import React, { useEffect, useState } from "react";
import UsaIcon from "../../assets/flag-icons/usa.svg";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import { useTranslation } from "react-i18next";

import Content from "../content/Content";

import { languageMenu } from "../../configs/i18nConfig";

import PhoneIcon from "@mui/icons-material/Phone";

import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import "./Preheader.css";

const Preheader = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(languageMenu[1]);
  // const [dropdown open]

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

  const options = languageMenu.filter((item) => language.id !== item.id);

  return (
    <div className="Preheader">
      <Content>
        <div className="Preheader-wrapper">
          <div className="Phone-number">
            <PhoneIcon />
            <p>Tel: 555-000-556</p>
          </div>
          <div className="Language">
            <div className="LanguageWrapper">
              <div className="LanguageFirst">
                <img
                  src={language.icon}
                  alt="LanguageIcon"
                  className="LanguageIcon"
                />
                {language.title}
              </div>
            </div>
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
          </div>
        </div>
      </Content>
    </div>
  );
};

export default Preheader;
