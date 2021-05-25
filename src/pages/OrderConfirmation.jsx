import React, { useState, useEffect } from "react";
import "./OrderConfirmation.css";
import { postData } from "../api/apiHandler";
import { useHistory } from "react-router";
import Loading from "../components/Loading";

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

  console.log(order);

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

  if(!order){
      return <Loading />;
  }

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
        {Object.keys(order.orderInfo).length > 0 ? (
            <div id={"order-confirmation-text"}>
                <div id={"customer-details"}>
                    <label className={"column-one row-two"}>KONTAKTPERSON:</label>
                    <label className={"column-one row-three"}>E-POST:</label>
                    <label className={"column-one row-four"}>TELEFON:</label>
                    <label className={"column-one row-five"}>LEVERINGSADRESSE:</label>
                    <label className={"column-one row-six"}>POSTNUMMER:</label>
                    <label className={"column-one row-seven"}>STED:</label>
                    <label className={"column-two row-two"}>{order.orderInfo.contactInfo.contactPerson}</label>
                    <label className={"column-two row-three"}>{order.orderInfo.contactInfo.email}</label>
                    <label className={"column-two row-four"}>{order.orderInfo.contactInfo.phoneNumber}</label>
                    <label className={"column-two row-five"}>{order.orderInfo.deliveryInformation.address}</label>
                    <label className={"column-two row-six"}>{order.orderInfo.deliveryInformation.zipCode}</label>
                    <label className={"column-two row-seven"}>{order.orderInfo.deliveryInformation.city}</label>
                </div>
                <div id={"product-details"}>
                    <h3>BESTILTE PRODUKTER</h3>
                    <p>test</p>
                </div>
            </div>
        ) :
            (<div>
                <p>No orders</p>
            </div>)
        }
      <button onClick={confirmOrder}>Bekreft bestilling</button>
    </div>
  );
};

export default OrderConfirmation;