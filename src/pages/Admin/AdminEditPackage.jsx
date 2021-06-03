import React, { useEffect, useState } from "react";
import "../style/Admin/EditPackage.css";
import { useHistory, useLocation } from "react-router";
import { fetchData, postData } from "../../api/apiHandler";
import Loading from "../../components/Loading";
import Photo from "../../images/placeholder-image.png";
import { GrAdd, TiDelete } from "react-icons/all";
import FileBase from "react-file-base64";

const AdminEditPackage = () => {
  const location = useLocation();
  const data = location.state.params;
  const [developer, setDeveloper] = useState();
  const [exhibition, setExhibition] = useState({});

  const history = useHistory();

  useEffect(() => {
    // Should handle if anyone tries to load this page without clicking from the previous page
    if (!data) {
      setExhibition(null);
    }
    fetchDeveloper();
    fetchData("/exhibitions/" + data).then((res) => setExhibition(res));
    window.scrollTo(0, 0);
  }, []);

  const fetchDeveloper = async () => {
    const res = await fetchData("/museums/names");
    setDeveloper(res);
  };

  const updatePackage = async () => {
    // Should handle possible error message here
    const res = await postData("/exhibitions/admin/update", exhibition);

    history.push("/admin/pakker");
  };

  const handleChange = (e) => {
    setExhibition({
      ...exhibition,
      [e.target.accessKey]: e.target.outerText,
    });
  };

  // Have to have ID for each product to be able to update it
  // Can be able to add new products to package instead?
  const handleArrChange = (e, i) => {
    /*console.log(e.target.outerText);
    const products = [...exhibition.products];
    products[i] = e.target.outerText;*/
  };

  if (!developer || !exhibition) {
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
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setExhibition({
                    ...exhibition,
                    media: [...exhibition.media, base64],
                  })
                }
              />
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
              accessKey={"name"}
              onInput={handleChange}
            >
              {exhibition.name}
            </h3>
            <p contenteditable="true" className={"tags-p-container"}>
              {exhibition.tags.map((t, i) => (
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
              accessKey={"shortDescription"}
            >
              {exhibition.shortDescription}
            </p>
            <h4>Du trenger:</h4>
            {exhibition.requiredEquipment.map((e, i) => (
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
            accessKey={"description"}
          >
            {exhibition.description}
          </div>
        </div>
        <div className={"package-bottom-right-wrapper"}>
          <div className={"package-list-container"}>
            <h3>Produkter i pakken</h3>
            {exhibition.products.map((p, i) => (
              <p
                contenteditable="true"
                key={i}
                accessKey={"products"}
                onInput={(e) => handleArrChange(e, i)}
              >
                <span>&#8212;</span>
                {p}
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

export default AdminEditPackage;
