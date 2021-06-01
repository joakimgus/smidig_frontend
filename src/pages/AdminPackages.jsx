import React, { useState, useEffect } from "react";
import { fetchData } from "../api/apiHandler";
import Loading from "../components/Loading";
import "./style/AdminPackages.css";
import {BiShow, GrFormEdit, TiDelete, RiSearchEyeLine} from "react-icons/all";

const AdminPackages = () => {
  const [packages, setPackages] = useState();

  useEffect(() => {
    fetchData("/exhibitions").then((res) => {
      setPackages(res);
    });
  }, []);

  console.log(packages);

  const deletePackage = async (id) => {
    console.log("Deleting package " + id + ", but not really");
  };

  if (!packages) {
    return <Loading />;
  }

  return (
    <div id={"admin-packages-page-container"}>
      <div className={"admin-packages-top-text-container"}>
        <h1>Pakker</h1>
        <p>
            Her vil du finne en oversikt over hvilke pakkeløsninger som ligger i
            databasen. Disse pakkene kan vises i nettbutikken.
        </p>
      </div>
      <div className={"admin-packages-table-specifications"}>
        <h5 className={"admin-packages-title-section"}>Pakke</h5>
        <h5 className={"admin-packages-preview-section"}>Forhåndsvisning</h5>
        <h5 className={"admin-packages-active-section"}>Status</h5>
        <h5 className={"admin-packages-edit-section"}>Rediger</h5>
        <h5 className={"admin-packages-delete-section"}>Slett</h5>
        <hr />
      </div>
      {packages?.map((p) => (
        <>
          <div className={"admin-packages-item-container"}>
            <div className={"admin-packages-img-text-container"}>
              <img src={p.media[0]} alt={"item image"} />
              <div className={"admin-packages-item-text-container"}>
                <h3>{p.name}</h3>
                <p className={"admin-packages-description"}>
                  Produkter i pakken: {p.products.length}
                </p>
                <p>Artikkelnr: {p._id}</p>
              </div>
            </div>
            <p className={"admin-packages-preview-btn button"}>
              <RiSearchEyeLine />
            </p>
            <p className={"admin-packages-active-btn button"}>
              <BiShow />
            </p>
            <p className={"admin-packages-edit-btn button"}>
              <GrFormEdit />
            </p>
            <p className={"admin-packages-delete-btn button"}>
              <TiDelete />
            </p>
          </div>
        </>
      ))}
    </div>
  );
};

export default AdminPackages;
