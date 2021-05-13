import React from "react";
import Navigationbar from "../components/Navigationbar";
import Footer from "../components/Footer";
import MuseumCard from "../components/MuseumCard";
import {museums} from "../database";

const MuseumPage = () => {
  return (
    <div>
      <Navigationbar />
      <div>
          {museums.map(museum => {
              return <MuseumCard />
          })}
      </div>
      <Footer />
    </div>
  );
};

export default MuseumPage;
