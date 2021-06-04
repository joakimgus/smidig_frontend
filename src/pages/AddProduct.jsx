import React, { useContext, useEffect, useState } from "react";
import "./style/Admin/AdminAddProduct.css";
import "./style/Superuser/SuperuserAddProduct.css";
import { useHistory } from "react-router";
import { IoArrowBackCircle } from "react-icons/all";
import { fetchData, postData } from "../api/apiHandler";
import { UserContext } from "../context/context";
import Loading from "../components/Loading";

const AddProduct = () => {
  const { user } = useContext(UserContext);

  const [developer, setDeveloper] = useState();
  const [museums, setMuseums] = useState();

  let redirect;
  let initialState;
  if (user.type === "SUPER") {
    initialState = { developer: user.museumId };
    redirect = "/superbruker/produkter";
  } else if (user.type === "ADMIN") {
    initialState = {};
    redirect = "/admin/produkter";
  }

  const [formData, setFormData] = useState(initialState);

  const [errorMessage, setErrorMessage] = useState(null);

  const history = useHistory();

  useEffect(() => {
    fetchData("/museums/names").then((res) => setMuseums(res));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    let product;
    if (!developer) {
      if (user.type === "ADMIN") {
        setErrorMessage("Du må velge en utvikler");
      } else {
        product = { ...formData };
      }
    } else {
      product = { ...formData, developer };
    }

    if (Object.keys(product).length === 4) {
      const res = await postData("/products/addProduct", product);
      if (res === "success") {
        history.push(redirect);
      } else {
        setErrorMessage(res);
      }
    } else {
      setErrorMessage("Du må fylle ut alle feltene");
    }
  };

  if (!museums) {
    return <Loading />;
  }

  return (
    <div className={"su-add-product-page-container"}>
      <div className={"su-add-product-top-text-container"}>
        <div className="back-container" onClick={() => history.push(redirect)}>
          <IoArrowBackCircle />
        </div>
        <h3>Legg til produkt</h3>
      </div>
      <div
        className={"add-product-sidebar add-product-left"}
        onClick={() => history.push(redirect)}
      />
      <div
        className={"add-product-sidebar add-product-right"}
        onClick={() => history.push(redirect)}
      />
      <div
        className={"add-product-top-bot-bar add-product-top"}
        onClick={() => history.push(redirect)}
      />
      <div
        className={"add-product-top-bot-bar add-product-bot"}
        onClick={() => history.push(redirect)}
      />
      <form className={"admin-add-product-text-container"} onSubmit={saveProduct}>
        <label id={"su-add-product-name-label"}>
          Navn:
          <br />
          <input
            id={"admin-add-product-name-input"}
            type={"text"}
            name={"name"}
            onChange={handleChange}
          />
        </label>
        <label id={"admin-add-product-description-label"}>
          Beskrivelse:
          <br />
          <textarea
            id={"admin-add-product-description-ta"}
            name={"description"}
            onChange={handleChange}
          />
        </label>
        <label id={"admin-add-product-stock-label"}>
          Antall:
          <br />
          <input
            id={"admin-add-product-stock-input"}
            type={"text"}
            name={"stock"}
            onChange={handleChange}
          />
        </label>
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
        <button id={"admin-add-product-add-btn"} type={"submit"}>
          Legg til produkt
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
