import React from "react";
import "./Header.css";

const Header = ({ title, description }) => {
  const imgPath = require("../images/header-img.png").default;

  return (
    <div className={"header-container"}>
      <div className={"text-container"}>
        <h1 className={"h1-header"}>{title}</h1>
        <p className={"p-header"}>{description}</p>
      </div>
        {((title === "Museum") || (title === "Utvalg")) && <img className={"img-header"} src={imgPath} alt={""} />  }
    </div>
  );
};

export default Header;
