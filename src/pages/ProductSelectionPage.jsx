import React from "react";
import Header from "../components/Header";

const ProductSelectionPage = () => {

    const headerText = {
        title: "Utvalg",
        description:
            "Her vil du finne en oversikt over de forskjellige pakkene museene har skreddersydd og hva de inneholder.\r\n" +
            "Hele utvalget er i utgangspunktet gratis med mindre annen informasjon er oppgitt, men frakt kostnader kan forekomme på alle våre pakkeløsninger, med unntak av de heldigitale.",
    };

  return (
      <>
          <Header
              title={headerText.title}
              description={headerText.description}
          />
          <div>
              <div>her kommer det produkter</div>
          </div>
      </>
  );
};

export default ProductSelectionPage;
