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
        <div className="product-top-right-container">
          <h3>{data.name}</h3>
          <h4>Inneholder</h4>
          <p>{data.shortDescription}</p>
          <h4>Du trenger:</h4>
          {data.requiredEquipment.map((e) => (
              <p className={'equipment-p'}>{e.requiredEquipment}</p>
          ))}
          <button onClick={addToCart}>Legg til i handlekurv</button>
        </div>
      </div>
      <div className={'product-bottom-wrapper'}>
        <div className={'product-info-container'}>
          <h3>Mer informasjon</h3>
          <p>{data.description}</p>
        </div>
        <div className={'product-bottom-right-wrapper'}>
          <div className={'product-list-container'}>
            <h3>Produkter i pakken</h3>
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
