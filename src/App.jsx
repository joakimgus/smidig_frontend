import * as React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
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
import DeliveryInformation from "./pages/DeliveryInformation";
import PaymentOptions from "./pages/PaymentOptions";
import InvoiceInformation from "./pages/InvoiceInformation";
import OrderConfirmation from "./pages/OrderConfirmation";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminProducts from "./pages/Admin/AdminProducts";
import AdminPackages from "./pages/Admin/AdminPackages";
import ManageUsers from "./pages/Admin/ManageUsers";
import SuperuserDashboard from "./pages/Superuser/SuperuserDashboard";
import AdminPackagesForApproval from "./pages/Admin/AdminPackagesForApproval";
import SuperuserProducts from "./pages/Superuser/SuperuserProducts";
import SuperuserPackages from "./pages/Superuser/SuperuserPackages";
import SuperuserAddProduct from "./pages/Superuser/SuperuserAddProduct";
import AddPackage from "./pages/AddPackage";
import SuperuserEditPackage from "./pages/Superuser/SuperuserEditPackage";
import AdminAddPackage from "./pages/Admin/AdminAddPackage";
import AdminAddProduct from "./pages/Admin/AdminAddProduct";
import AdminEditPackage from "./pages/Admin/AdminEditPackage";
import SuperuserAddPackageInfo from "./pages/AddPackageInfo";
import PreviewPackage from "./pages/Admin/PreviewPackage";
import AddProduct from "./pages/AddProduct";
import AddPackagePreview from "./pages/AddPackagePreview";

const App = () => {
  // User context
  const [user, setUser] = useState();
  useEffect(() => {
    fetchData("/auth/getUser").then((res) => setUser(res));
    console.log(user);
  }, []);

  return (
    <BrowserRouter>
      <div id="top" style={{ height: "0px" }} />
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
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/kundeopplysninger">
            <CustomerInformation />
          </Route>
          <Route path="/leveringsinformasjon">
            <DeliveryInformation />
          </Route>
          <Route path="/betaling">
            <PaymentOptions />
          </Route>
          <Route path="/faktura">
            <InvoiceInformation />
          </Route>
          <Route path="/bekreftelse">
            <OrderConfirmation />
          </Route>
          <Route path="/minside">
            <ProfilePage />
          </Route>
          <Route path="/admin" exact>
            <AdminDashboard />
          </Route>
          <Route path="/admin/produkter">
            <AdminProducts />
          </Route>
          <Route path={"/admin/legg-til-produkt"}>
            <AddProduct />
          </Route>
          <Route path="/admin/pakker">
            <AdminPackages />
          </Route>
          <Route path={"/admin/lag-ny-pakke"}>
            <AdminAddPackage />
          </Route>
          <Route path={"/admin/forhandsvis-pakke"}>
            <PreviewPackage />
          </Route>
          <Route path={"/admin/rediger-pakke"}>
            <AdminEditPackage />
          </Route>
          <Route path="/admin/pakker-til-godkjenning">
            <AdminPackagesForApproval />
          </Route>
          <Route path="/admin/brukere">
            <ManageUsers />
          </Route>
          <Route path={"/superbruker"} exact>
            <SuperuserDashboard />
          </Route>
          <Route path={"/superbruker/produkter"}>
            <SuperuserProducts />
          </Route>
          <Route path={"/superbruker/pakker"}>
            <SuperuserPackages />
          </Route>
          <Route path={"/superbruker/legg-til-produkt"}>
            <AddProduct />
          </Route>
          <Route exact path={"/superbruker/lag-ny-pakke"}>
            <AddPackage />
          </Route>
          <Route path={"/superbruker/lag-ny-pakke/info"}>
            <SuperuserAddPackageInfo />
          </Route>
          <Route path={"/superbruker/lag-ny-pakke/forhandsvisning"}>
            <AddPackagePreview />
          </Route>
          <Route path={"/superbruker/forhandsvis-pakke"}>
            <PreviewPackage />
          </Route>
          <Route path={"/superbruker/rediger-pakke"}>
            <SuperuserEditPackage />
          </Route>
        </Switch>
        <Footer />
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
