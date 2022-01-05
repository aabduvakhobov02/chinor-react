import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Gallery from "./Gallery";

import Home from "./Home";
import News from "./News";
import Services from "./Services";

const Main = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/about" element={<About />} />
    <Route exact path="/contact" element={<Contact />} />
    <Route exact path="/news" element={<News />} />
    <Route exact path="/gallery" element={<Gallery />} />
    <Route exact path="/services" element={<Services />} />
  </Routes>
);

export default Main;
