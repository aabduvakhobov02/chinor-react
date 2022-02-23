import React from "react";
import HomeMainComponent from "../components/homeComponents/HomeMainComponent";
import HomeBenefits from "../components/homeComponents/HomeBenefitsComponent";
import ButtonComponent from "../components/shared/ButtonComponent";

import mainImage from "../assets/gallery/gallery-1.jpg";
import Content from "../layout/content/Content";
import Head from "../layout/head/Head";

const Home = () => {
  return (
    <>
      <Head title="Home" />
      <Content>
        <HomeMainComponent
          preTitle={"Вдохновляя лучшее здоровье"}
          title={"Мы заботимся о вашей жизни"}
          text={
            "Инструменты, руководства, эксперты по дизайну и инновациям - все в одном месте! Самый интуитивно понятный способ представить себе следующий пользовательский опыт."
          }
          button={<ButtonComponent title={"ПОСМОТРЕТЬ НАШИ УСЛУГИ"} />}
          img={<img src={mainImage} />}
        />
        <HomeBenefits />
      </Content>
    </>
  );
};

export default Home;
