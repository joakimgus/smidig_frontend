import { Input } from "../components/Input";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/context";
import React, { useContext, useState } from "react";
import "./InvoiceInformation.css";

const InvoiceInformation = () => {
  const [formData, setFormData] = useState({
    address: "",
  });
  const { user } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState(null);

  const history = useHistory();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const saveInvoiceInfo = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length === 3) {
      const checkout = JSON.parse(localStorage.getItem("checkout")) || {};
      checkout.invoiceInfo = formData;
      localStorage.setItem("checkout", JSON.stringify(checkout));
      history.push("/bekreftelse");
    } else {
      setErrorMessage("Du må fylle ut alle feltene");
    }
  };

  return (
    <>
      {user ? (
        <div id={"invoice-information-container"}>
          <div id={"invoice-information-img-container"}>
            <img
              src={require("../images/payment-information.png").default}
              alt={"invoice-information"}
            />
          </div>
          <div id={"invoice-information-header-text"}>
            <h1>BETALING</h1>
            <hr />
            <p>Fyll inn fakturainformasjon</p>
          </div>
          <div id={"invoice-information-form-container"}>
            <form onSubmit={saveInvoiceInfo}>
              <Input
                label={"ADRESSE"}
                type={"text"}
                name={"address"}
                handleChange={handleChange}
              />
              <Input
                label={"POSTNUMMER"}
                type={"text"}
                name={"zip-code"}
                handleChange={handleChange}
              />
              <Input
                label={"STED"}
                type={"text"}
                name={"city"}
                handleChange={handleChange}
              />
              <button type="submit" id={"continue-btn"}>
                Fortsett
              </button>
            </form>
            {errorMessage && <div>{errorMessage}</div>}
          </div>
        </div>
      ) : (
        <div>Log in</div>
      )}
    </>
  );
};

export default InvoiceInformation;
