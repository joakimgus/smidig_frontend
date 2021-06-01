import React from "react";
import "./style/AboutUsPage.css";
import LogoMiniMuseum from '../images/hovedlogo-web.png';
import LogoTidvis from '../images/tidvis-rund.png';

const AboutUsPage = () => {

  const aboutUs = [
    {
      name: 'Mobilt minimuseum',
      description: 'Mobilt minimuseum er datterselskapet til Tidvis. Mobilt minimuseums oppgave er å gi bedre tilgang på museum og kulturliv.',
      logo: LogoMiniMuseum
    },
    {
      name: 'Tidvis',
      description: 'Tidvis er et ideelt selskap som utforsker og utvikler nye måter å formidle og tilgjengeliggjøre forskning på, med et spesielt fokus på historie. Vi mener historie er viktig, fordi det danner utgangspunktet for vår forståelse av nåtiden og hva vi forventer av fremtiden. Vår målsetning er å benytte både velkjente og nye virkemidler og teknologier. Eksempler på slike er databaser, spill, 3D-modeller, augmented og virtual reality, animasjoner, interaktive sanseopplevelser og god, fleksibel design på alle flater. Vi ønsker å nå bredt ut til flest mulig med elegante løsninger. Slik gjør vi det lettere for mennesker i dag å få erfaring med fortiden, og legger til rette for at flere får et bredere kunnskapsgrunnlag for å reflektere over nåtiden og fremtiden.',
      logo: LogoTidvis
    }
  ]

  return (
    <div className={"about-us-page-container"}>
      {aboutUs.map((m, i) => (
          <div
              className={'company-wrapper'}
              key={i}
          >
            <h1>{m.name}</h1>
            <div
                className={'card-box'}
                key={i}
            >
              <p>{m.description}</p>
              <img src={m.logo} alt={'logo'} style={{height: '15em', objectFit: 'scale-down'}} />
            </div>
          </div>
      ))}
    </div>
  );
};

export default AboutUsPage;
