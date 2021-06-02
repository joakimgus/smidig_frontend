import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { useHistory } from "react-router";
import FileBase from "react-file-base64";

const SuperUserAddPackageInfo = () => {
  const [info, setInfo] = useState({
    media: [],
    tags: [],
    requiredEquipment: [],
    name: "",
    shortDescription: "",
    description: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const pIds = products.items.map((p) => p._id);

    const exhibition = {
      ...info,
      products: pIds,
    };

    console.log(exhibition);
    // SEND TO SERVER

    history.push("/");
    // REDIRECT
  };

  if (!products) {
    return <Loading />;
  }

  return (
    <div style={{ padding: "10rem 2rem" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={"Navn"}
          name={"name"}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder={"Beskrivelse"}
          name={"description"}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder={"Kort beskrivelse"}
          name={"shortDescription"}
          onChange={handleChange}
        />
        <button type={"submit"}>Lag pakke</button>
      </form>
      <FileBase
        type="file"
        multiple={false}
        onDone={({ base64 }) => setInfo({ ...info, media: [base64] })}
      />
    </div>
  );
};

export default SuperUserAddPackageInfo;
