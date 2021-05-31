import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "./style/ProductSelectionPage.css";
import { fetchData } from "../api/apiHandler";
import Loading from "../components/Loading";
import { useHistory } from "react-router";
import FilterSidebar from "../components/FilterSidebar";
import SearchBar from "../components/SearchBar";

const ProductSelectionPage = () => {
  const [exhibitions, setExhibitions] = useState();
  const [allExhibitions, setAllExhibitions] = useState();
  const [filter, setFilter] = useState({
    museums: [],
    tags: [],
  });
  const [searchFilter, setSearchFilter] = useState("");

  const history = useHistory();

  useEffect(() => {
    fetchExhibitions().then((res) => {
      setAllExhibitions(res);
      setExhibitions(res);
    });
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    console.log(exhibitions);
    if (filter.museums.length === 0) {
      setExhibitions(allExhibitions);
      //return;
    }
    let filteredItems = allExhibitions;
    if (exhibitions) {
      if (filter.museums.length > 0) {
        filteredItems = allExhibitions.filter((item) => {
          return filter.museums.indexOf(item.developer) !== -1;
        });
      }
      if (filter.tags.length > 0) {
        filteredItems = filteredItems.filter((item) => {
          return filter.tags.indexOf(item.tags[0].toLowerCase()) !== -1;
        });
      }
      setExhibitions(filteredItems);
    }
  }, [filter]);

  useEffect(() => {
    if (searchFilter.length === 0) {
      setExhibitions(allExhibitions);
    } else {
      console.log(searchFilter);
      let filteredItems = exhibitions.filter((item) => {
        const name = item.name.toLowerCase();
        return name.includes(searchFilter);
      });
      setExhibitions(filteredItems);
    }
  }, [searchFilter]);

  const fetchExhibitions = async () => {
    return await Promise.all(await fetchData("/exhibitions"));
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
    <div className={'contain-page-products'}>
      <Header title={headerText.title} description={headerText.description} />
      <div className={"utvalg-page-container"}>
        <FilterSidebar
          filter={filter}
          setFilter={setFilter}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <div className={"utvalg-products-container"}>
          {exhibitions.map((e, a) => (
            <div
              className={"utvalg-product-container button"}
              onClick={() => history.push("/utvalg/pakke", { params: e })}
              key={a}
            >
              <img
                className={"utvalg-product-img"}
                src={e.media[0]}
                alt="img"
              />
              <h3>{e.name}</h3>
              <div className={"utvalg-tags-container"}>
                {e.tags.map((t, c) => (
                  <p
                    className={"utvalg-tags"}
                    style={{ display: "inline-block" }}
                    key={c}
                  >
                    {c === e.tags.length - 1 ? t : t + ","}
                  </p>
                ))}
              </div>
              <p className={"utvalg-description"}>
                {e.description.length > 250
                  ? `${e.description.substring(0, 250)}...`
                  : e.description}
              </p>
              <p className={"product-price"}>NOK 0</p>
              <button className={"utvalg-add-cart-btn"}>Les mer</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSelectionPage;
