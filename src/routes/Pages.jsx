import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import Home from "../pages/Home";
import News from "../pages/News";
import Services from "../pages/Services";

const Pages = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/news" element={<News />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/services" element={<Services />} />
  </Routes>
);

export default Pages;
