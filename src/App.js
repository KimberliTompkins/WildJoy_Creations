import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import ComponentRenderer from "ComponentRenderer.js";
import Home from "pages/Home.js";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ImplicitCallback } from '@okta/okta-react';

export default function App() {
  // return <AnimationRevealPage disabled></AnimationRevealPage>;
  return (
    <Router>
      <Switch>
        <Route path="/components/:type/:subtype/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/components/:type/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/implicit/callback" component={ImplicitCallback} />
      </Switch>
    </Router>
  );
}
