import "./Footer.css";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className={"footer-container"}>
      <div className={"nav-links-container"}>
        <div className={"nav-links-item"}>
            <Link to={"/museum"}>
                <h3 className={"nav-links-item-text"}>Museum</h3>
            </Link>
        </div>
        <div className={"nav-links-item"}>
            <Link to={"/utvalg"}>
                <h3 className={"nav-links-item-text"}>Utstillinger</h3>
            </Link>
        </div>
        <div className={"nav-links-item"}>
            <Link to={"/om"}>
                <h3 className={"nav-links-item-text"}>Om oss</h3>
            </Link>
        </div>
        <div className={"nav-links-item"}>
            <Link to={"/kontakt"}>
                <h3 className={"nav-links-item-text"}>Kontakt oss</h3>
            </Link>
        </div>
      </div>
      <div className={"contact-information-container"}>
        <h3 className={"contact-information-item"}>KONTAKT OSS</h3>
        <p>mobiltminimuseum.no</p>
        <p>Adresse</p>
        <p>0123 Fire</p>
        <p>Tlf 11 22 33 44</p>
        <p>
          info@mobiltminimuseum.no
        </p>
      </div>
      <div className={"about-us-container"}>
          <h2>
              mobiltminumuseum.no
          </h2>
          <p>
              Mobiltminimuseum.no distribuerer materiell fra museum og lignende kulturorganisasjoner til barnehager, eldrehjem og lignende institusjoner i Norge. Tjenesten er gratis å benytte for lærere og helsepersonell ved godkjente institusjoner.
          </p>
      </div>
      <div className={"social-links-container"}>
          <div className={"top-link"}>
              <a href="#top">&#8593; Til toppen</a>
          </div>
          <div className={"social-media-image"}>
              <img src={require("../images/facebook.png").default} />
          </div>
          <div className={"social-media-image"}>
              <img src={require("../images/instagram.png").default} />
          </div>
          <div className={"social-media-image"}>
              <img src={require("../images/linkedin.png").default} />
          </div>
      </div>
    </div>
  );
};

export default Footer;
