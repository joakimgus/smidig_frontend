import "./Footer.css";

const Footer = () => {
  return (
    <div className={"footer-container"}>
      <div className={"nav-links-container"}>
        <div className={"nav-links-item"}>
          <div className={"nav-links-item-text"}>Museum</div>
        </div>
        <div className={"nav-links-item"}>
          <div className={"nav-links-item-text"}>Utstillinger</div>
        </div>
        <div className={"nav-links-item"}>
          <div className={"nav-links-item-text"}>Om oss</div>
        </div>
        <div className={"nav-links-item"}>
          <div className={"nav-links-item-text"}>Kontakt oss</div>
        </div>
      </div>
      <div className={"contact-information-container"}>
        <div className={"contact-information-item"}>KONTAKT OSS</div>
        <div className={"contact-information-item contact-info"}>mobiltminimuseum.no</div>
        <div className={"contact-information-item contact-info"}>Adresse</div>
        <div className={"contact-information-item contact-info"}>0123 Fire</div>
        <div className={"contact-information-item contact-info"}>Tlf 11 22 33 44</div>
        <div className={"contact-information-item contact-info"}>
          info@mobiltminimuseum.no
        </div>
      </div>
      <div className={"about-us-container"}>
          <div className={"about-us-title"}>
              mobiltminumuseum.no
          </div>
          <div className={"about-us-information"}>
              Mobiltminimuseum.no distribuerer materiell fra museum og lignende kulturorganisasjoner til barnehager, eldrehjem og lignende institusjoner i Norge. Tjenesten er gratis å benytte for lærere og helsepersonell ved godkjente institusjoner.
          </div>
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
