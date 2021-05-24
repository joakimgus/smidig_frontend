import { Input } from "../components/Input";
import { useHistory } from "react-router-dom";
import "./DeliveryInformation.css";
import { UserContext } from "../context/context";
import React, { useContext, useState } from "react";

const DeliveryInformation = () => {
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

  const saveDeliveryInfo = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length === 3) {
      const checkout = JSON.parse(localStorage.getItem("checkout")) || {};
      checkout.deliveryInformation = formData;
      localStorage.setItem("checkout", JSON.stringify(checkout));
      history.push("/betaling");
    } else {
      setErrorMessage("Du må fylle ut alle feltene");
    }
  };

  return (
    <div>
      {user ? (
        <div id={"delivery-information-container"}>
          <div id={"delivery-information-img-container"}>
            <img
              src={require("../images/delivery-information.png").default}
              alt={"delivery-information"}
            />
          </div>
          <div id={"delivery-information-header-text"}>
            <h1>LEVERING</h1>
            <hr />
            <p>Fyll inn leveringsadresse</p>
          </div>
          <div id={"delivery-information-form-container"}>
            <form onSubmit={saveDeliveryInfo}>
              <Input
                label={"ADRESSE"}
                type={"text"}
                name={"address"}
                handleChange={handleChange}
              />
              <Input
                label={"POSTNUMMER"}
                type={"text"}
                name={"zipCode"}
                handleChange={handleChange}
              />
              <Input
                label={"STED"}
                type={"text"}
                name={"city"}
                handleChange={handleChange}
              />
              <button type="submit" id={"continue-btn"}>
                Bekreft
              </button>
            </form>
            {errorMessage && <div>{errorMessage}</div>}
          </div>
        </div>
      ) : (
        <div>Du må logge inn</div>
      )}
    </div>
  );
};

export default DeliveryInformation;
