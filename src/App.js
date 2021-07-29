import React from "react";
import { Home } from "pages/HomePage/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "globalStyle";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}
