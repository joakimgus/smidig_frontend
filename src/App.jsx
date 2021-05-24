import * as React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import "./App.css";
import FrontPage from "./pages/FrontPage";
import MuseumPage from "./pages/MuseumPage";
import ProductSelectionPage from "./pages/ProductSelectionPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import Cart from "./pages/Cart";
import LoginPage from "./pages/LoginPage";
import Navigationbar from "./components/Navigationbar";
import Footer from "./components/Footer";
import { fetchData } from "./api/apiHandler";
import { UserContext } from "./context/context";
import ProfilePage from "./pages/ProfilePage";
import ProductPage from "./pages/ProductPage";
import CustomerInformation from "./pages/CustomerInformation";

const App = () => {
  // User context
  const [user, setUser] = useState();
  useEffect(() => {
    fetchData("/auth/getUser").then((res) => setUser(res));
    console.log(user);
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Navigationbar />
        <Switch>
          <Route path="/" exact>
            <FrontPage />
          </Route>
          <Route path="/museum">
            <MuseumPage />
          </Route>
          <Route path="/utvalg" exact>
            <ProductSelectionPage />
          </Route>
          <Route path="/utvalg/pakke">
            <ProductPage />
          </Route>
          <Route path="/om">
            <AboutUsPage />
          </Route>
          <Route path="/kontakt">
            <ContactPage />
          </Route>
          <Route path="/handlekurv">
            <Cart />
          </Route>
          <Route path="/kundeopplysninger">
            <CustomerInformation />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/minside">
            <ProfilePage />
          </Route>
        </Switch>
        <Footer />
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
