import "./Footer.css"

const Footer = () => {
  return(
      <div className={"footer-container"}>
          <div className={"nav-links"}>
              <div className={"nav-links-item"}>
                  <div className={"nav-links-item-text"}>
                    Museums
                  </div>
              </div>
              <div className={"nav-links-item"}>
                  <div className={"nav-links-item-text"}>
                      Utstillinger
                  </div>
              </div>
              <div className={"nav-links-item"}>
                  <div className={"nav-links-item-text"}>
                      Om oss
                  </div>
              </div>
              <div className={"nav-links-item"}>
                  <div className={"nav-links-item-text"}>
                      Kontakt oss
                  </div>
              </div>
          </div>
          <div className={"contact-information-container"}>
              <div className={"contact-information-item"}>
                KONTAKT OSS
              </div>
              <div className={"contact-information-item"}>
                  mobiltminimuseum.no
              </div>
              <div className={"contact-information-item"}>
                  Adresse
              </div>
              <div className={"contact-information-item"}>
                  0123 Fire
              </div>
              <div className={"contact-information-item"}>
                  Tlf 11 22 33 44
              </div>
              <div className={"contact-information-item"}>
                  info@mobiltminimuseum.no
              </div>
          </div>
          <div className={"three"}>three</div>
          <div className={"four"}>four</div>
      </div>
  );
};

export default Footer;
