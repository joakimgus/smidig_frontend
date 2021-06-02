import React, { useState, useEffect } from "react";
import { fetchData } from "../../api/apiHandler";
import Loading from "../../components/Loading";
import "../style/Admin/AdminPackages.css";
import {
  BiShow,
  GrFormEdit,
  TiDelete,
  RiSearchEyeLine,
  GrAdd,
  BsCheck,
  AiOutlineCheck,
  BiLowVision,
} from "react-icons/all";
import { Link } from "react-router-dom";
import {useHistory} from "react-router";

const AdminPackages = () => {
  const [packages, setPackages] = useState();
  const history = useHistory();

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
        <h1>Pakkeløsninger</h1>
        <p>
          Her vil du finne en oversikt over hvilke pakkeløsninger som ligger i
          databasen, og kan administreres.
        </p>
        <div className={"admin-package-link-container"}>
          <Link
            className={"admin-add-new-packages-container button"}
            to={"/admin/lag-ny-pakke"}
          >
            <GrAdd />
            <p>Lag ny pakkeløsning</p>
          </Link>
          <Link
            className={"admin-approve-packages-container button"}
            to={"/admin/pakker-til-godkjenning"}
          >
            <AiOutlineCheck />
            <p>Pakkeløsninger til godkjenning</p>
          </Link>
        </div>
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
          <div
            style={!p.isActive ? { opacity: "0.5" } : { opacity: "1" }}
            className={"admin-packages-item-container"}
          >
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
              {p.isActive ? <BiShow /> : <BiLowVision />}
            </p>
            <p
                className={"admin-packages-edit-btn button"}
                onClick={() => history.push("/admin/rediger-pakke", { params: p })}
            >
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
