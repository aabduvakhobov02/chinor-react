import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import "./App.css";

const App = () => (
  <Router>
    <div className="App">
      <Layout />
    </div>
  </Router>
);

export default App;
