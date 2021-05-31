import React, { useState, useEffect } from "react";
import { fetchData } from "../api/apiHandler";
import Loading from "../components/Loading";

const AdminPackages = () => {
  const [packages, setPackages] = useState();

  useEffect(() => {
    fetchData("/exhibitions").then((res) => {
      setPackages(res);
    });
  }, []);

  const deletePackage = async (id) => {
    console.log("Deleting package " + id + ", but not really");
  };

  if (!packages) {
    return <Loading />;
  }

  return (
    <div id={"admin-packages-container"}>
      <div className={"admin-packages-top-text-container"}>
        <h1>Pakker</h1>
        <p>
          Jeg kan ikke skrive, dette er slik produkter-siden har ting, bare noe
          litt mer meningsfullt her (fix)
        </p>
      </div>
      {packages?.map((p) => (
        <>
          <div>
            {/*Dette burde linke videre til en egen side for den spesifike pakken der man kan endre på alt + vise alt*/}
            <p>Navn: {p.name}</p>
            <p>ID/Artikkelnr: {p._id}</p>
            <p>ID utvikler(museum): {p.developer}</p>
            <p>Aktiv: {p.isActive ? "Aktiv" : "Inaktiv"}</p>{" "}
            {/*Kanskje en knapp her for å endre aktiv:inaktiv?*/}
          </div>
          <br />
        </>
      ))}
    </div>
  );
};

export default AdminPackages;
