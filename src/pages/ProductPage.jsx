import React from "react";
import { useLocation } from "react-router";

const ProductPage = () => {
  const location = useLocation();
  const data = location.state.params;

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productInCart = cart.findIndex((x) => x._id === data._id);
    if (productInCart >= 0) {
      cart[productInCart].counter++;
    } else {
      data.counter = 1;
      cart.push(data);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div>
      <p>{data.name}</p>
      <button onClick={addToCart}>Legg til i handlekurv</button>
    </div>
  );
};

export default ProductPage;
