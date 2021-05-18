import React from "react";
import Header from "../components/Header";
import './ContactPage.css';

const ContactPage = () => {
    const headerText = {
        title: "Kontakt oss",
        description:
            "Ta gjerne kontakt dersom du skulle ha noen spørsmål angående våre produkter eller ønsker å ta del i prosjektet!"
    };

  return (
    <div>
        <Header
            title={headerText.title}
            description={headerText.description}
        />
      <div className={'contact-page-container'}>basic kontaktinformasjon</div>
    </div>
  );
};

export default ContactPage;
