import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route exact path={"/"} component={Home} />
    </Router>
  );
};

export default App;
