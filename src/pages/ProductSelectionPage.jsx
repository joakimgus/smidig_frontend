import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "./ProductSelectionPage.css";
import { fetchData } from "../api/apiHandler";
import Loading from "../components/Loading";
import { useHistory } from "react-router";
import FilterSidebar from "../components/FilterSidebar";

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
        <FilterSidebar />
        <div className={"utvalg-products-container"}>
          {exhibitions.map((e, a) => (
            <div
                className={"utvalg-product-container button"}
                onClick={() => history.push("/utvalg/pakke", { params: e })}
                key={a}
            >
              {e.media.map((m,b) => (
                <img className={"utvalg-product-img"}
                     src={m}
                     alt="img"
                     key={b}
                />
              ))}
              <h3>{e.name}</h3>
              <div className={"utvalg-tags-container"}>
                {e.tags.map((t,c) => (
                  <p
                    className={"utvalg-tags"}
                    style={{ display: "inline-block" }}
                    key={c}
                  >
                    {t}, {" "}
                  </p>
                ))}
              </div>
              <p className={"utvalg-description"}>
                {e.description.length > 250
                  ? `${e.description.substring(0, 250)}...`
                  : e.description}
              </p>
              <p className={'product-price'}>NOK 0</p>
              <button className={"utvalg-add-cart-btn"}>
                Les mer
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductSelectionPage;
