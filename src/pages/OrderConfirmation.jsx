import React, { useState, useEffect } from "react";
import "./OrderConfirmation.css";
import { postData } from "../api/apiHandler";
import { useHistory } from "react-router";

const OrderConfirmation = () => {
  const [order, setOrder] = useState();

  const history = useHistory();

  useEffect(() => {
    let savedOrder = JSON.parse(localStorage.getItem("checkout")) || {};
    let savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setOrder({
      orderInfo: savedOrder,
      cart: savedCart,
    });
  }, []);

  const confirmOrder = async () => {
    // Register order if there is any order
    if (order.orderInfo.length < 1 || Object.keys(order.cart).length < 1) {
      console.log("Nothing to order");
    } else {
      // Remove data that should not be sent to server
      order.cart = order.cart.map((e) => {
        return e._id;
      });
      console.log(order);
      const res = await postData("/orders", order);

      if (res === "Success") {
        // Clean localstorage after ordering
        localStorage.removeItem("cart");
        localStorage.removeItem("checkout");

        history.push("/");
      } else {
        console.log("Did not register");
      }
    }
  };

  return (
    <div id={"order-confirmation-container"}>
      <div id={"order-confirmation-img-container"}>
        <img
          src={require("../images/confirmation.png").default}
          alt={"order-confirmation"}
        />
      </div>
      <div id={"order-confirmation-header-text"}>
        <h1>BEKREFTELSE</h1>
        <hr />
        <p>
          Bestillingen er fullført og du vil få tilsendt en bekreftelse på mail.
        </p>
      </div>
      <div id={"order-confirmation-text"}>
        <div id={"customer-details"}>
          <h3>BETALING OG LEVERING</h3>
          <label className={"column-one"}>ORGANISASJONSNUMMER:</label>
          <label className={"column-one"}>KONTAKTPERSON:</label>
          <label className={"column-one"}>E-POST:</label>
          <label className={"column-one"}>TELEFON:</label>
          <label className={"column-one"}>LEVERINGSADRESSE:</label>
          <label className={"column-one"}>POSTNUMMER:</label>
          <label className={"column-one"}>STED:</label>
          <label className={"column-two"}></label>
          <label className={"column-two"}>{order.orderInfo.contactInfo.contactPerson}</label>
          <label className={"column-two"}>{order.orderInfo.contactInfo.email}</label>
          <label className={"column-two"}>{order.orderInfo.contactInfo.phoneNumber}</label>
          <label className={"column-two"}>{order.orderInfo.deliveryInformation.address}</label>
          <label className={"column-two"}>{order.orderInfo.deliveryInformation.zipCode}</label>
          <label className={"column-two"}>{order.orderInfo.deliveryInformation.city}</label>
        </div>
        <div id={"product-details"}>
          <h3>BESTILTE PRODUKTER</h3>
        </div>
      </div>
      <button onClick={confirmOrder}>Bekreft bestilling</button>
    </div>
  );
};

export default OrderConfirmation;