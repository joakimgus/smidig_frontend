import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { useHistory } from "react-router";

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

  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();

    // SEND TO SERVER
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
    </div>
  );
};

export default SuperUserAddPackageInfo;
