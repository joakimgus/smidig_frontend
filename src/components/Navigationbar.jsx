import React, { useContext } from "react";
import "./Navigationbar.css";
import Logo from "../images/Logo.svg";
import CartIcon from "../images/shopping-cart-sign.png";
import UserIcon from "../images/user-icon.png";
import { Link } from "react-router-dom";
import "./Navigationbar.css";
import { UserContext } from "../context/context";

const Navigationbar = () => {
  const { user } = useContext(UserContext);

  return (
    <div className={"navbar-container"}>
      <Link name="top" id="home-link" to="/">
        <button className={"nav-btn"} id={"home-btn"}>
          <img id={"logo-img"} src={Logo} alt={"logo"} />
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
        <>
          {user.type === "ADMIN" ? (
            <Link to={"/admin"}>
              <button className={"nav-btn"} id={"login-btn"}>
                <img src={UserIcon} alt={"Bruker ikon"} />
                <p>Admin dashboard</p>
              </button>
            </Link>
          ) : (
            <Link to={"/minside"}>
              <button className={"nav-btn"} id={"login-btn"}>
                <img src={UserIcon} alt={"Bruker ikon"} />
                <p>Min side</p>
              </button>
            </Link>
          )}
        </>
      )}
    </div>
  );
};

export default Navigationbar;
