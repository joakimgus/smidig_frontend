import React, { useState, useEffect } from "react";
import "./OrderConfirmation.css";

const OrderConfirmation = () => {
    const [order, setOrder] = useState();
    const [cart, setCart] = useState();

    useEffect(() => {
        let savedOrder = JSON.parse(localStorage.getItem("checkout")) || [];
        let savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
        setOrder(savedOrder);
    }, []);

    console.log(order);
    console.log(cart);

    return(
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
                <p>Bestillingen er fullført og du vil få tilsendt en bekreftelse på mail.</p>
            </div>
            <div id={"order-confirmation-text"}>
            </div>
        </div>
    );
}

export default OrderConfirmation;