import React from "react";
import { useLocation } from "react-router";
import './ProductPage.css';

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
    <div className={'productpage-container'}>
      <div className={'product-top-container'}>
        <img className={'product-image'} src={data.media} alt={'Produkt bilde'} />
        <p>{data.name}</p>
        <button onClick={addToCart}>Legg til i handlekurv</button>
      </div>
      <div className={'product-bottom-wrapper'}>
        <div className={'product-info-container'}>
          <p>{data.description}</p>
        </div>
        <div className={'product-bottom-right-wrapper'}>
          <div className={'product-list-container'}>
            <h4>Produkter i pakken</h4>
            <p>-- Item 1</p>
          </div>
          <div className={'owner-container'}>
            <h3>Utviklet av</h3>
            <img alt={'logo'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
