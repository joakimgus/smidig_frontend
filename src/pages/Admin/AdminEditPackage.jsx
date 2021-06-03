import React, { useEffect, useState } from "react";
import "../style/Admin/EditPackage.css";
import { useLocation } from "react-router";
import { fetchData } from "../../api/apiHandler";
import Loading from "../../components/Loading";
import Photo from "../../images/placeholder-image.png";
import { GrAdd, TiDelete } from "react-icons/all";

const EditPackage = () => {
  const location = useLocation();
  const data = location.state.params;
  const [developer, setDeveloper] = useState();
  const [exhibition, setExhibition] = useState({
    ...data,
  });

  useEffect(() => {
    fetchDeveloper();
    window.scrollTo(0, 0);
  }, []);

  const fetchDeveloper = async () => {
    const res = await fetchData("/museums/names");
    setDeveloper(res);
  };

  const updatePackage = () => {};

  const handleChange = (e) => {
    console.log(e);
    setExhibition({
      ...exhibition,
      [e.target.attributes[e.target.attributes.length - 1].nodeValue]:
        e.target.outerText,
    });
  };

  if (!developer) {
    return <Loading />;
  }

  return (
    <div className={"admin-edit-package-page"}>
      <div className={"admin-edit-mode-box"}>
        <p>
          Du er i redigeringsmodus. Trykk på det du ønsker å endre, deretter
          lagre.
        </p>
        <button
          onClick={updatePackage}
          className={"save-admin-edit-mode button"}
        >
          Lagre
        </button>
      </div>
      <div className={"package-top-container"}>
        <div className={"package-top-left-container"}>
          <img src={Photo} width={"250px"} alt={""} />
          <div className="img-add-delete-wrapper">
            <div className={"package-add-img-btn button"}>
              <GrAdd />
              <p>Legg til bilder</p>
            </div>
            <div className={"package-delete-img-btn button"}>
              <TiDelete />
              <p>Slett bilder</p>
            </div>
          </div>
        </div>
        <div className="package-top-right-container">
          <div className="row-one-container">
            <h3
              contenteditable="true"
              identifier={"name"}
              onInput={handleChange}
            >
              {data.name}
            </h3>
            <p contenteditable="true" className={"tags-p-container"}>
              {data.tags.map((t, i) => (
                <p
                  className={"tags-p"}
                  style={{ display: "inline-block" }}
                  key={i}
                >
                  {t} |
                </p>
              ))}
            </p>
          </div>
          <div className="row-two-container">
            <h4>Inneholder</h4>
            <p
              contenteditable="true"
              onInput={handleChange}
              className={"short-desc-p"}
              identifier={"shortDescription"}
            >
              {data.shortDescription}
            </p>
            <h4>Du trenger:</h4>
            {data.requiredEquipment.map((e, i) => (
              <p contenteditable="true" className={"equipment-p"} key={i}>
                <span>&#8212;</span> {e}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className={"package-bottom-wrapper"}>
        <div className={"package-info-container"}>
          <h3>Mer informasjon</h3>
          <div
            contenteditable="true"
            onInput={handleChange}
            identifier={"description"}
          >
            {data.description}
          </div>
        </div>
        <div className={"package-bottom-right-wrapper"}>
          <div className={"package-list-container"}>
            <h3>Produkter i pakken</h3>
            {data.products.map((e, i) => (
              <p contenteditable="true" key={i}>
                <span>&#8212;</span>
                {e}
              </p>
            ))}
          </div>
          <div className={"package-owner-container"}>
            <h3>Utviklet av</h3>
            <select
              onChange={(e) =>
                setExhibition({ ...exhibition, developer: e.target.value })
              }
              value={exhibition.developer}
            >
              {developer.map((d) => (
                <option value={d._id}>{d.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPackage;
