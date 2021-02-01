import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./../../pages/Home";
import "./style.scss";

function App() {
  return (
    <div className="app-root">
      <Router>
        <Route path="/" exact>
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
