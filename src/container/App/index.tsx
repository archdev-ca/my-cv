import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DefaultLayout from "./../../layouts/DefaultLayout";
import Home from "./../../pages/Home";
import Page from "./../../components/Page";
import "./style.scss";

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Page layout={DefaultLayout} page={Home} />
      </Route>
      <Route path="/" exact>
        <Page layout={DefaultLayout} page={Home} />
      </Route>
      <Route path="/education" exact>
        <Page layout={DefaultLayout} page={Home} />
      </Route>
      <Route path="/experience" exact>
        <Page layout={DefaultLayout} page={Home} />
      </Route>
    </Router>
  );
}

export default App;
