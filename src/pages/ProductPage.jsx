import React from "react";
import { useLocation } from "react-router";

const ProductPage = () => {
  const location = useLocation();
  const data = location.state.params;

  const addToCart = () => {
    console.log("Legg til ");
    let cart = JSON.parse(localStorage.getItem("handlekurv")) || [];
    cart.push(data);
    localStorage.setItem("handlekurv", JSON.stringify(cart));
  };

  return (
    <div>
      <p>{data.name}</p>
      <button onClick={addToCart}>Legg til i handlekurv</button>
    </div>
  );
};

export default ProductPage;
