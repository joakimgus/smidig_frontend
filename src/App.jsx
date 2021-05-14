import * as React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import "./App.css";
import FrontPage from "./pages/FrontPage";
import MuseumPage from "./pages/MuseumPage";
import ExhibitionPage from "./pages/ExhibitionPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import LoginPage from "./pages/LoginPage";
import Navigationbar from "./components/Navigationbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navigationbar />
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
      <Footer />
    </BrowserRouter>
  );
};

export default App;
