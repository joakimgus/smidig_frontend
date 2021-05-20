import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "./ProductSelectionPage.css";
import { fetchData } from "../api/apiHandler";
import Loading from "../components/Loading";
import { useHistory } from "react-router";

const ProductSelectionPage = () => {
  const [exhibitions, setExhibitions] = useState();

  const history = useHistory();

  useEffect(() => {
    fetchExhibitions();
  }, []);

  const fetchExhibitions = async () => {
    const res = await fetchData("/exhibitions");
    setExhibitions(res);
  };

  const headerText = {
    title: "Utvalg",
    description:
      "Her vil du finne en oversikt over de forskjellige pakkene museene har skreddersydd og hva de inneholder.\r\n" +
      "Hele utvalget er i utgangspunktet gratis med mindre annen informasjon er oppgitt, men frakt kostnader kan forekomme på alle våre pakkeløsninger, med unntak av de heldigitale.",
  };

  if (!exhibitions) {
    return <Loading />;
  }

  return (
    <>
      <Header title={headerText.title} description={headerText.description} />
      <div className={"utvalg-page-container"}>
        {exhibitions.map((e) => (
          <div>
            <hr />
            <p>{e.name}</p>
            {e.tags.map((t) => (
              <p style={{ display: "inline-block" }}>{t}, </p>
            ))}
            <p>{e.description}</p>
            {e.media.map((m) => (
              <img src={m} alt="img" />
            ))}
            <button
              onClick={() => history.push("/utvalg/pakke", { params: e })}
            >
              Les mer
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductSelectionPage;
