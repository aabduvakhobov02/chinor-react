import React from "react";

import benefit1 from "../../assets/direction-1.svg";
import benefit2 from "../../assets/direction-2.svg";
import benefit3 from "../../assets/direction-3.svg";
import benefit4 from "../../assets/direction-4.svg";

import "./HomeBenefitsComponent.css";

const HomeBenefitsComponent = () => {
  return (
    <div className="HomeBenefitsComponent">
      <h2>Our Benefits</h2>
      <div>
        <Benefit
          img={benefit1}
          title={"Индивидуальный подход к каждому пациенту"}
        />
        <Benefit img={benefit2} title={"Программы для всей семьи"} />
        <Benefit img={benefit3} title={"Удобное расположение клиники"} />
        <Benefit img={benefit4} title={"Работа центра без выходных"} />
      </div>
    </div>
  );
};

const Benefit = ({ img, title }) => {
  return (
    <div className="Benefit">
      <img src={img} alt="img" />
      <span>{title}</span>
    </div>
  );
};

export default HomeBenefitsComponent;
