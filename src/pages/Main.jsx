import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Gallery from "./Gallery";

import Home from "./Home";
import News from "./News";
import Services from "./Services";

const Main = () => (
  <Routes>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/news" component={News} />
    <Route exact path="/gallery" component={Gallery} />
    <Route exact path="/services" component={Services} />
  </Routes>
);

export default Main;
