import React, { useContext } from "react";
import "./Navigationbar.css";
import Logo from "../images/Logo.svg";
import CartIcon from "../images/shopping-cart-sign.png";
import UserIcon from "../images/user-icon.png";
import { Link, useHistory } from "react-router-dom";
import "./Navigationbar.css";
import { UserContext } from "../context/context";
import { fetchData } from "../api/apiHandler";
import ProfilePage from "../pages/ProfilePage";

const Navigationbar = () => {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  /*
  const logout = async () => {
    const res = await fetchData("/auth/logout");
    if (res === "done") {
      setUser(undefined);
      history.push("/");
    }
  };

   */

  return (
    <div className={"navbar-container"}>
      <Link name="top" id="home-link" to="/">
        <button className={"nav-btn"} id={"home-btn"}>
          <img id={"logo-img"} src={Logo} />
        </button>
      </Link>
      <Link to="/museum">
        <button className={"nav-btn"} id={"museum-btn"}>
          Museum
        </button>
      </Link>
      <Link to="/utvalg">
        <button className={"nav-btn"} id={"utvalg-btn"}>
          Utvalg
        </button>
      </Link>
      <Link to="/om">
        <button className={"nav-btn"} id={"om-oss-btn"}>
          Om oss
        </button>
      </Link>
      <Link to="/kontakt">
        <button className={"nav-btn"} id={"kontakt-oss-btn"}>
          Kontakt oss
        </button>
      </Link>
      <Link to="/handlekurv">
        <button className={"nav-btn"} id={"cart-btn"}>
          <img src={CartIcon} alt={"Handlekurv ikon"} />
          <p>Handlekurv</p>
        </button>
      </Link>
      {!user ? (
        <Link to="/login">
          <button className={"nav-btn"} id={"login-btn"}>
            <img src={UserIcon} alt={"Bruker ikon"} />
            <p>Logg inn</p>
          </button>
        </Link>
      ) : (
        <Link to={"/minside"}>
          <button className={"nav-btn"} id={"login-btn"}>
            <img src={UserIcon} alt={"Bruker ikon"} />
            <p>Min side</p>
          </button>
        </Link>

        /*
        <Link onClick={logout}>
          <button className={"nav-btn"} id={"login-btn"}>
            <img src={UserIcon} alt={"Bruker ikon"} />
            <p>Logg ut</p>
          </button>
        </Link>
           */
      )}
    </div>
  );
};

export default Navigationbar;
