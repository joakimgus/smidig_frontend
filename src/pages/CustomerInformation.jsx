import { useHistory } from "react-router-dom";
import { Input } from "../components/Input";
import "./style/CustomerInformation.css";
import React, { useContext, useState } from "react";
import { UserContext } from "../context/context";

const CustomerInformation = () => {
  const [formData, setFormData] = useState({
    contactPerson: "",
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

  const saveContactInfo = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length === 3) {
      localStorage.setItem(
        "checkout",
        JSON.stringify({ contactInfo: formData })
      );
      history.push("/leveringsinformasjon");
    } else {
      setErrorMessage("Du må fylle ut alle feltene");
    }
  };

  return (
    <>
      {user ? (
        <div id={"customer-information-container"}>
          <div id={"customer-information-img-container"}>
            <img
              src={require("../images/customer-information.png").default}
              alt={"customer-information"}
            />
          </div>
          <div id={"customer-information-header-text"}>
            <h1>KUNDEOPPLYSNINGER</h1>
            <hr />
            <p>Sjekk at kundeopplysningene stemmer.</p>
          </div>
          <div id={"customer-information-form-container"}>
            <div className="form-wrap-customer-cart">
              <form onSubmit={saveContactInfo}>
                <label>
                  ORGANISASJONSNUMMER:
                  <p id={"customer-information-orgnr"}>{user.orgNr}</p>
                </label>

                <Input
                  label={"KONTAKTPERSON"}
                  type={"text"}
                  name={"contactPerson"}
                  handleChange={handleChange}
                />
                <Input
                  label={"E-POST"}
                  type={"email"}
                  name={"email"}
                  handleChange={handleChange}
                />
                <Input
                  label={"TELEFON"}
                  type={"text"}
                  name={"phoneNumber"}
                  handleChange={handleChange}
                />
                <button type="submit" id={"confirm-btn"}>
                  Bekreft
                </button>
              </form>
              {errorMessage && <div>{errorMessage}</div>}
            </div>
          </div>
        </div>
      ) : (
        <div style={{ padding: "5rem 1rem" }}>
          Du må være innlogget for å bestille
        </div>
      )}
    </>
  );
};

export default CustomerInformation;
