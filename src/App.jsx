import * as React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import './App.css';
import FrontPage from "./FrontPage";

const App = () => {
  return (
      <BrowserRouter>
          <Switch>
              <Route path="/">
                  <FrontPage />
              </Route>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
