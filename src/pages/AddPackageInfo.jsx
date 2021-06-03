import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useHistory } from "react-router";
import FileBase from "react-file-base64";
import { postData } from "../api/apiHandler";
import './style/AddPackageInfo.css';

const AddPackageInfo = () => {
  const [info, setInfo] = useState({
    media: [],
    tags: [],
    requiredEquipment: [],
    name: "",
    shortDescription: "",
    description: "",
  });
  const [error, setError] = useState();
  const [products, setProducts] = useState();

  const history = useHistory();

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("newExhibition")));
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

    const exhibition = {
      ...info,
      products: pIds,
    };

    // SEND TO SERVER
    console.log(exhibition);

    // REDIRECT

    const res = await postData("/exhibitions/add", exhibition);

    if (res === "success") {
      history.push("/");
    } else {
      setError(res);
    }
  };

  if (!products) {
    return <Loading />;
  }

  return (
    <div className={'add-package-info-container'}>
      <div className={"su-new-package-top-text-container"}>
        <h3>Lag ny pakkeløsning</h3>
        <p>På denne siden kan du sette sammen enkeltprodukter for å lage en pakkeløsning som kan bestilles av kunder.<br/>Dra produktene du vil ha med i pakkeløsningen fra "Lagerbeholdning" til "Ny pakkeløsning" (fra venstre til høyre).</p>
        <div className={"su-new-package-img-container"}>
          <img src={require("../images/add-package-process-2.png").default} />
        </div>
      </div>
      <div className="add-package-form-wrapper">
        <form className={'new-package-info-form'} onSubmit={handleSubmit}>
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
                className={'button choose-file'}
                type="file"
                multiple={false}
                onDone={({ base64 }) => setInfo({ ...info, media: [base64] })}
            />
            {error && error}
          </div>
          <button type={"submit"}>Gå videre</button>
        </form>
      </div>
    </div>
  );
};

export default AddPackageInfo;
