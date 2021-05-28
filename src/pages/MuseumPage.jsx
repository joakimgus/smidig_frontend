import React, { useContext, useEffect, useState } from "react";
import MuseumCard from "../components/MuseumCard";
import "./MuseumPage.css";
import { fetchData } from "../api/apiHandler";
import Header from "../components/Header";
import Loading from "../components/Loading";

const MuseumPage = () => {
  const [museums, setMuseums] = useState();

  const headerText = {
    title: "Museum",
    description:
      "Her finner du en oversikt over alle museenne som er med på prosjektet, og alle utstillingene de tilbyr skreddersydde pakkeløsninger fra.",
  };

  useEffect(() => {
    fetchMuseums();
    window.scrollTo(0, 0);
  }, []);

  const fetchMuseums = async () => {
    const res = await fetchData("/museums");
    setMuseums(res);
  };

  if (!museums) {
    return <Loading />;
  }

  return (
    <>
      <Header title={headerText.title} description={headerText.description} />
      <div className={"museum-card-container"}>
        {museums.map((m, i) => (
          <MuseumCard
            key={i}
            name={m.name}
            description={m.description}
            picture={m.picture}
            exhibitions={m.exhibitions}
          />
        ))}
      </div>
    </>
  );
};

export default MuseumPage;
