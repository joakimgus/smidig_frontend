import "./style/Footer.css";
import { Link } from "react-router-dom";
import { Link as SmoothScroll } from "react-scroll";
import React from "react";

const Footer = () => {
  return (
    <div className={"footer-container"}>
      <div className={"nav-links-container"}>
        <div className={"nav-links-item"}>
          <Link to={"/museum"}>
            <p className={"nav-links-item-text"}>Museum</p>
          </Link>
        </div>
        <div className={"nav-links-item"}>
          <Link to={"/utvalg"}>
            <p className={"nav-links-item-text"}>Utstillinger</p>
          </Link>
        </div>
        <div className={"nav-links-item"}>
          <Link to={"/om"}>
            <p className={"nav-links-item-text"}>Om oss</p>
          </Link>
        </div>
        <div className={"nav-links-item"}>
          <Link to={"/kontakt"}>
            <p className={"nav-links-item-text"}>Kontakt oss</p>
          </Link>
        </div>
      </div>
      <div className={"contact-information-container"}>
        <h2 className={"contact-information-item"}>KONTAKT OSS</h2>
        <p>mobiltminimuseum.no</p>
        <p>Rådhusgata 7</p>
        <p>0151 Oslo</p>
        <p>Tlf 93 42 32 07</p>
        <p>post@tidvis.no</p>
      </div>
      <div className={"about-us-container"}>
        <h2 id={"about-us-title"}>mobiltminumuseum.no</h2>
        <p>
          Vi i Mobiltminimuseum.no distribuerer materiell og opplevelser fra
          museer og kulturorganisasjoner til barnehager, aldershjem og
          institusjoner i Norge. Tjenesten er i prinsippet gratis for
          helsepersonell ved godkjente institusjoner.
        </p>
      </div>
      <div className={"social-links-container"}>
        <div className={"top-link"}>
          <SmoothScroll className="button" to="top" spy={true} smooth={true}>
            &#8593; Til toppen
          </SmoothScroll>
        </div>
        <div className={"social-media-image"}>
          <img
            className={"button"}
            src={require("../images/facebook.png").default}
          />
        </div>
        <div className={"social-media-image"}>
          <img
            className={"button"}
            src={require("../images/instagram.png").default}
          />
        </div>
        <div className={"social-media-image"}>
          <img
            className={"button"}
            src={require("../images/linkedin.png").default}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
