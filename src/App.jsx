import * as React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import "./App.css";
import FrontPage from "./FrontPage";
import MuseumPage from "./MuseumPage";
import ExhibitionPage from "./ExhibitionPage";
import AboutUsPage from "./AboutUsPage";
import ContactPage from "./ContactPage";
import ShoppingCartPage from "./ShoppingCartPage";
import LoginPage from "./LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <FrontPage />
        </Route>
        <Route path="/museum">
          <MuseumPage />
        </Route>
        <Route path="/utvalg">
          <ExhibitionPage />
        </Route>
        <Route path="/om">
          <AboutUsPage />
        </Route>
        <Route path="/kontakt">
          <ContactPage />
        </Route>
        <Route path="/handlekurv">
          <ShoppingCartPage />
        </Route>
        <Route path="/logginn">
          <LoginPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
