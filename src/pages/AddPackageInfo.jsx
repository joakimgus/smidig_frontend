import React, { useContext, useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useHistory } from "react-router";
import FileBase from "react-file-base64";
import { fetchData, postData } from "../api/apiHandler";
import "./style/AddPackageInfo.css";
import { UserContext } from "../context/context";

const AddPackageInfo = () => {
  const { user } = useContext(UserContext);

  let redirect;
  let initialState;
  if (user.type === "SUPER") {
    initialState = { developer: user.museumId };
    redirect = "/superbruker/lag-ny-pakke/forhandsvisning";
  } else if (user.type === "ADMIN") {
    // initialState = {};
    redirect = "/admin/lag-ny-pakke/forhandsvisning";
  }

  const [info, setInfo] = useState({
    ...initialState,
    media: [],
    tags: [],
    requiredEquipment: [],
    name: "",
    shortDescription: "",
    description: "",
  });

  const [developer, setDeveloper] = useState();
  const [error, setError] = useState();
  const [products, setProducts] = useState();
  const [museums, setMuseums] = useState();

  const history = useHistory();

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("newExhibition")));
  }, []);

  useEffect(() => {
    fetchData("/museums/names").then((res) => setMuseums(res));
  }, []);

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const pIds = products.items.map((p) => p._id);

    let exhibition;
    if (!developer) {
      if (user.type === "ADMIN") {
        setError("Du må velge en utvikler");
      } else {
        exhibition = { ...info, products: pIds };
      }
    } else {
      exhibition = { ...info, developer, products: pIds };
    }

    console.log(exhibition);

    localStorage.setItem("newExhibition", JSON.stringify(exhibition));

    history.push(redirect);

    /*// SEND TO SERVER
    console.log(exhibition);

    // REDIRECT

    const res = await postData("/exhibitions/add", exhibition);

    if (res === "success") {
      history.push("/superbruker/lag-ny-pakke/forhandsvisning");
    } else {
      setError(res);
    }*/
  };

  if (!products || !museums || !user) {
    return <Loading />;
  }

  return (
    <div className={"add-package-info-container"}>
      <div className={"su-new-package-top-text-container"}>
        <h3>Lag ny pakkeløsning</h3>
        <p>
          På denne siden kan du sette sammen enkeltprodukter for å lage en
          pakkeløsning som kan bestilles av kunder.
          <br />
          Dra produktene du vil ha med i pakkeløsningen fra "Lagerbeholdning"
          til "Ny pakkeløsning" (fra venstre til høyre).
        </p>
        <div className={"su-new-package-img-container"}>
          <img src={require("../images/add-package-process-2.png").default} />
        </div>
      </div>
      <div className="add-package-form-wrapper">
        <form className={"new-package-info-form"} onSubmit={handleSubmit}>
          <p>Pakkenavn</p>
          <input
            type="text"
            placeholder={"Navn"}
            name={"name"}
            onChange={handleChange}
          />
          <p>Pakken inneholder</p>
          <textarea
            type="text"
            placeholder={"Kort beskrivelse"}
            name={"shortDescription"}
            onChange={handleChange}
          />
          <p>Mer informasjon</p>
          <textarea
            type="text"
            placeholder={"Beskrivelse"}
            name={"description"}
            onChange={handleChange}
          />
          <div className="choose-file-wrapper">
            <FileBase
              className={"button choose-file"}
              type="file"
              multiple={false}
              onDone={({ base64 }) => setInfo({ ...info, media: [base64] })}
            />
            {error && error}
          </div>
          {user.type === "ADMIN" && (
            <label id={"admin-add-product-developer-label"}>
              Utvikler:
              <br />
              <select
                id={"admin-add-product-select-developer"}
                onChange={(e) => setDeveloper(e.target.value)}
                value={developer}
              >
                {museums.map((m) => (
                  <option value={m._id}>{m.name}</option>
                ))}
              </select>
            </label>
          )}
          <button type={"submit"}>Gå videre</button>
        </form>
      </div>
    </div>
  );
};

export default AddPackageInfo;
