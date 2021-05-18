import React, { useEffect, useState } from "react";
import Navigationbar from "../components/Navigationbar";
import Footer from "../components/Footer";
import MuseumCard from "../components/MuseumCard";
import "./MuseumPage.css";
import { fetchData } from "../api/apiHandler";

const MuseumPage = () => {
  const [museums, setMuseums] = useState();

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
      <div className={"museum-card-container"}>
        {museums.map((m) =>
            <MuseumCard
              key={m.id}
              name={m.name}
              description={m.description}
              picture={m.picture}
            />
        )}
      </div>
    </>
  );
};

export default MuseumPage;
