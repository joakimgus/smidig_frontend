import React, { useEffect, useState } from "react";
import MuseumCard from "../components/MuseumCard";
import "./MuseumPage.css";
import { fetchData } from "../api/apiHandler";
import Header from "../components/Header";

const MuseumPage = () => {
  const [museums, setMuseums] = useState();

  const headerText = {
    title: "Museum",
    description: "Her finner du en oversikt over alle museenne som er med på prosjektet, og alle utstillingene de tilbyr skreddersydde pakkeløsninger fra."
  }
  
  const exhibitions = [require("../images/fotogrammeri.png").default, require("../images/Gokstad.png").default, require("../images/Tune.png").default, require("../images/Osberg.png").default];

  useEffect(() => {
    fetchMuseums();
  }, []);

  const fetchMuseums = async () => {
    const res = await fetchData("/museums");
    setMuseums(res);
  }

  if(!museums) {
    return "loading..";
  }

  return (
    <>
      <Header
          title={headerText.title}
          description={headerText.description}
      />
      <div className={"museum-card-container"}>
        {museums.map((m, i) =>
            <MuseumCard
              key={m.id}
              name={m.name}
              description={m.description}
              picture={m.picture}
              exhibitions={exhibitions}
            />
        )}
      </div>
    </>
  );
};

export default MuseumPage;
