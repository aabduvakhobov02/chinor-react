import { BrowserRouter as Router } from "react-router-dom";
import Main from "./pages/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
    ;
  </Router>
);

export default App;
