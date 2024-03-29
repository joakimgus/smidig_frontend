import React from "react";
import { useEffect, useState } from "react";
import "../style/Superuser/SuperuserPackages.css";
import {
  BiShow,
  GrAdd,
  GrFormEdit,
  RiSearchEyeLine,
  TiDelete,
  BiLowVision,
} from "react-icons/all";
import { fetchData } from "../../api/apiHandler";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const SuperuserPackages = () => {
  const [packages, setPackages] = useState();
  const history = useHistory();

  useEffect(() => {
    fetchData("/exhibitions/ourExhibitions").then((res) => {
      setPackages(res);
      console.log(res);
    });
    window.scrollTo(0, 0);
  }, []);

  const deletePackage = async (id) => {
    console.log("Deleting package " + id + ", but not really");
  };

  if (!packages) {
    return <Loading />;
  }

  return (
    <div className={"su-packages-page-container"}>
      <div className={"su-packages-top-text-container"}>
        <h1>Pakkeløsninger</h1>
        <p>
          Her vil du finne en oversikt over eksisterende pakkeløsninger laget av
          bedriften.
        </p>
        <Link
          className={"su-add-new-packages-container button"}
          to={"/superbruker/lag-ny-pakke"}
        >
          <GrAdd />
          <p>Lag ny pakkeløsning</p>
        </Link>
      </div>
      <div className={"su-packages-table-specifications"}>
        <h5 className={"su-packages-title-section"}>Pakke</h5>
        <h5 className={"su-packages-preview-section"}>Forhåndsvisning</h5>
        <h5 className={"su-packages-active-section"}>Status</h5>
        <h5 className={"su-packages-edit-section"}>Rediger</h5>
        <h5 className={"su-packages-delete-section"}>Slett</h5>
        <hr />
      </div>
      {packages?.map((p) => (
        <>
          <div
            style={!p.isActive ? { opacity: "0.5" } : { opacity: "1" }}
            className={"su-packages-item-container"}
          >
            <div className={"su-packages-img-text-container"}>
              <img src={p.media[0]} alt={"Package"} />
              <div className={"su-packages-item-text-container"}>
                <h3>{p.name}</h3>
                <p className={"su-packages-description"}>
                  Produkter i pakken: {p.products.length}
                </p>
                <p>Artikkelnr: {p._id}</p>
              </div>
            </div>
            <p
              className={"su-packages-preview-btn button"}
              onClick={() =>
                history.push("/superbruker/forhandsvis-pakke", { params: p })
              }
            >
              <RiSearchEyeLine />
            </p>
            <p className={"su-packages-active-btn button"}>
              {p.isActive ? <BiShow /> : <BiLowVision />}
            </p>
            <p
              className={"su-packages-edit-btn button"}
              onClick={() =>
                history.push("/superbruker/rediger-pakke", { params: p })
              }
            >
              <GrFormEdit />
            </p>
            <p className={"su-packages-delete-btn button"}>
              <TiDelete />
            </p>
          </div>
        </>
      ))}
    </div>
  );
};
export default SuperuserPackages;
