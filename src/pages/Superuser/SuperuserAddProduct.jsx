import React, { useContext, useState } from "react";
import "../style/Superuser/SuperuserAddProduct.css";
import { useHistory } from "react-router";
import { IoArrowBackCircle } from "react-icons/all";
import { postData } from "../../api/apiHandler";
import { UserContext } from "../../context/context";

const SuperuserAddProduct = () => {
  const { user } = useContext(UserContext);

  let initialState;
  if (user.type === "SUPER") {
    initialState = { developer: user.museumId };
  }

  const [formData, setFormData] = useState(initialState);

  const history = useHistory();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    console.log("test");
    {
      /* TODO */
    }
    if (Object.keys(formData).length === 4) {
      console.log(formData);
      const res = await postData("/products/addProduct", formData);
      if (res === "success") {
        history.push("/superbruker/produkter");
      } else {
        setErrorMessage(res);
      }
    } else {
      setErrorMessage("Du må fylle ut alle feltene");
    }
  };

  return (
    <div className={"su-add-product-page-container"}>
      <div className={"su-add-product-top-text-container"}>
        <div
          className="back-container"
          onClick={() => history.push("/superbruker/produkter")}
        >
          <IoArrowBackCircle />
        </div>
        <h3>Legg til produkt</h3>
      </div>
      <div
        className={"add-product-sidebar add-product-left"}
        onClick={() => history.push("/superbruker/produkter")}
      />
      <div
        className={"add-product-sidebar add-product-right"}
        onClick={() => history.push("/superbruker/produkter")}
      />
      <div
        className={"add-product-top-bot-bar add-product-top"}
        onClick={() => history.push("/superbruker/produkter")}
      />
      <div
        className={"add-product-top-bot-bar add-product-bot"}
        onClick={() => history.push("/superbruker/produkter")}
      />
      <form className={"su-add-product-text-container"} onSubmit={saveProduct}>
        <label id={"su-add-product-name-label"}>
          Navn:
          <br />
          <input
            id={"su-add-product-name-input"}
            type={"text"}
            name={"name"}
            onChange={handleChange}
          />
        </label>
        <label id={"su-add-product-description-label"}>
          Beskrivelse:
          <br />
          <textarea
            id={"su-add-product-description-ta"}
            name={"description"}
            onChange={handleChange}
          />
        </label>
        <label id={"su-add-product-stock-label"}>
          Antall:
          <br />
          <input
            id={"su-add-product-stock-input"}
            type={"text"}
            name={"stock"}
            onChange={handleChange}
          />
        </label>
        <button id={"su-add-product-add-btn"} type={"submit"}>
          Legg til produkt
        </button>
      </form>
    </div>
  );
};

export default SuperuserAddProduct;
