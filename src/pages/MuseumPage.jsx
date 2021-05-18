import React, { useEffect, useState } from "react";
import MuseumCard from "../components/MuseumCard";
import "./MuseumPage.css";
import { fetchData } from "../api/apiHandler";
import Header from "../components/Header";

const MuseumPage = () => {
  const [museums, setMuseums] = useState();

  const exhibitions = [require("../images/fotogrammeri.png").default, require("../images/Gokstad.png").default, require("../images/Tune.png").default, require("../images/Osberg.png").default]

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
      <Header />
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
