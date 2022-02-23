import React from "react";
import Footer from "./footer/Footer";
import Head from "./head/Head";
import Preheader from "./preheader/Preheader";
import Header from "./header/Header";
import Pages from "../routes/Pages";

const Layout = () => {
  return (
    <div>
      <Head title="Loading" />
      <Preheader />
      <Header />
      <Pages />
      <Footer />
    </div>
  );
};

export default Layout;
