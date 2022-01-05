import React from "react";
import HomeMainComponent from "../components/homeComponents/HomeMainComponent";
import HomeBenefits from "../components/homeComponents/HomeBenefitsComponent";
import HomePresentationComponent from "../components/homeComponents/HomePresentationComponent";
import ButtonComponent from "../components/shared/ButtonComponent";

import mainImage from "../assets/gallery/gallery-1.jpg";

const Home = () => {
  return (
    <div>
      <div className="Container">
        <HomeMainComponent
          preTitle={"Вдохновляя лучшее здоровье"}
          title={"Мы заботимся о вашей жизни"}
          text={
            "Инструменты, руководства, эксперты по дизайну и инновациям - все в одном месте! Самый интуитивно понятный способ представить себе следующий пользовательский опыт."
          }
          button={<ButtonComponent title={"ПОСМОТРЕТЬ НАШИ УСЛУГИ"} />}
          img={<img src={mainImage} />}
          marginTop={"50px"}
        />
        <HomeBenefits />
        <HomePresentationComponent />
      </div>
    </div>
  );
};

export default Home;
