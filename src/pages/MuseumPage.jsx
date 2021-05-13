import React from "react";
import Navigationbar from "../components/Navigationbar";
import Footer from "../components/Footer";
import MuseumCard from "../components/MuseumCard";
import { museums } from "../database";
import "./MuseumPage.css";

const MuseumPage = () => {

  return (
    <div>
      <Navigationbar />
      <div className={"main-container"}>
        {museums.map((museum) => {
            return <MuseumCard
              name={museum.name}
              description={museum.description}
              picture={museum.picture}
          />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default MuseumPage;
