import React, { useEffect } from "react";
import "./style/AboutUsPage.css";
import LogoMiniMuseum from "../images/hovedlogo-web.png";
import LogoTidvis from "../images/tidvis-rund.png";

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const aboutUs = [
    {
      name: "Hvem er vi?",
      description:
        "Hvem er tidvis og hva er Mobilt minimuseum? \n Tidvis er et ideelt selskap som utforsker og utvikler nye måter å formidle og tilgjengeliggjøre forskning på, med et spesielt fokus på historie. Vi mener historie er viktig, fordi det danner utgangspunktet for vår forståelse av nåtiden og hva vi forventer av fremtiden. Vår målsetning er å benytte både velkjente og nye virkemidler og teknologier. \n Mobilt minimuseum er et konsept som har blitt utviklet i av tidvis og både utvikles og produseres in house. Vi har et stort ønske om å kunne tilby fullverdige opplevelser rett hjem til folket. Dette prosjektet startet som en tanke og utviklet seg til et fullverdig nytenkende konsept, som utnytter ny teknologi og kreativitet, for å kunne skape en helt unik opplevelse i en helt annen formfaktor enn før.",
      logo: LogoTidvis,
    },
    {
      name: "Vårt formål",
      description:
          'Mobilt minimuseum er utviklet for å kunne gjennskape fullverdige museumsopplevelser skreddersydd for aldershjem og institusjoner, som de kan få levert til seg.  Utstillingene er utviklet med fundament i Møte Med Minner-håndboken, hvor personer med demens og lettere hukommelsestap skal kunne få opplevelser som er givende og spesielt tilpasset med tanke på deres utfordringer. Vi ønsker å utforske hvordan ny teknologi kan brukes til å bringe museenes gjennstander inn, og til de som kanskje trenger det mest.',
      logo: LogoMiniMuseum,
    },
  ];

  return (
    <div className={"about-us-page-container"}>
      {aboutUs.map((m, i) => (
        <div className={"company-wrapper"} key={i}>
          <div className={"card-box"} key={i}>
            <h1>{m.name}</h1>
            <p>{m.description}</p>
          </div>
          <div className="box">
            <img
              src={m.logo}
              alt={"logo"}
              style={{ width: "17em", objectFit: "scale-down" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUsPage;
