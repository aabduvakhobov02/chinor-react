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
    <Route path="/about" element={About} />
    <Route path="/contact" element={Contact} />
    <Route path="/news" element={News} />
    <Route path="/gallery" element={Gallery} />
    <Route path="/services" element={Services} />
  </Routes>
);

export default Main;
