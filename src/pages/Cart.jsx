import React, { useEffect, useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useState();

  useEffect(() => {
    let savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const changeCounter = (isIncreaseCounter, index) => {
    const newCart = [...cart];
    if (newCart[index].counter <= 0 && !isIncreaseCounter) {
      removeItem(index);
    } else {
      if (isIncreaseCounter) {
        newCart[index].counter++;
      } else {
        newCart[index].counter--;
      }
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <div className={"cart-page-container"}>
      <div className={"cart-top-text-container"}>
        <h1>Handlekurv</h1>
        <hr />
        <p>
          Her vil du finne en oversikt over hvilke varer du har i handlekurven
          din.
        </p>
      </div>
      <div className={"cart-table-specifications"}>
        <h5 className={"product-title-section"}>Produkt</h5>
        <h5 className={"amount-title-section"}>Antall</h5>
        <h5 className={"price-title-section"}>Pris</h5>
        <h5 className={"remove-title-section"}>Slett</h5>
        <hr />
      </div>
      {cart &&
        cart.map((i, index) => (
          <div className={"cart-item-container"}>
            <div className={"cart-img-text-container"}>
              <img src={i.media[0]} alt={"item image"} />
              <div className={"cart-item-text-container"}>
                <h3>{i.name}</h3>
                <p className={"cart-product-description"}>
                  {i.description.substring(0, 50)}
                </p>
                <p>Artikkelnr. {i._id}</p>
              </div>
            </div>
            <div className={"item-amount-container"}>
              <p>
                <span onClick={() => changeCounter(false, index)}>-</span>{" "}
                {i.counter}{" "}
                <span onClick={() => changeCounter(true, index)}>+</span>
              </p>
            </div>
            <div className={"item-price-container"}>
              <p>
                <span>NOK </span>0.00
              </p>
            </div>
            <div className={"item-remove-container"}>
              <button onClick={() => removeItem(index)}>x</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cart;
