import React, { useEffect } from "react";
import Header from "../components/Header";
import "./style/ContactPage.css";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const headerText = {
    title: "Kontakt oss",
    description:
      "Ta gjerne kontakt dersom du skulle ha noen spørsmål angående våre produkter eller ønsker å ta del i prosjektet!",
  };

  return (
    <div>
      <Header title={headerText.title} description={headerText.description} />
      <div className={"contact-page-container"}>
        <div className={"contact-text-container"}>
          <h1>
            Kontaktinformasjon for bedrifter <br />
            som ønsker å delta i prosjektet
          </h1>
          <p>mobiltminimuseum.no</p>
          <p>Rådhusgata 7</p>
          <p>0151 Oslo</p>
          <p>Tlf 93 42 32 07</p>
          <p>post@tidvis.no</p>
          <div className={"some-container"}>
            <img
              id={"face-logo"}
              src={
                "https://i.pinimg.com/originals/b7/63/69/b763699fd1fa3bfb374442593ae642e1.png"
              }
              style={{ width: "54px" }}
              alt={"facebook ikon"}
            />
            <img
              id={"insta-logo"}
              src={
                "https://i.pinimg.com/originals/63/9b/3d/639b3dafb544d6f061fcddd2d6686ddb.png"
              }
              style={{ width: "60px" }}
              alt={"instagram ikon"}
            />
            <img
              id={"linkedin-logo"}
              src={
                "https://lightbulbgrip.com/wp-content/uploads/2018/11/linkedin-icon-png-transparent-background-13.png"
              }
              style={{ width: "50px" }}
              alt={"linkedin ikon"}
            />
          </div>
        </div>

        <div className={"form-container"}>
          <form>
            <p className={"p-label"}>Navn</p>
            <input name="name" type="text" />
            <p className={"p-label"}>E-post</p>
            <input name="email" type="email" />
            <p className={"p-label"}>Melding</p>
            <textarea id={"contact-input-message"} name="message" />
            <button type={"submit"}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
