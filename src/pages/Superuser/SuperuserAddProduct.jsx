import React from "react";
import "../style/Superuser/SuperuserAddProduct.css";

const SuperuserAddProduct = () => {
  return (
    <div className={"su-add-product-page-container"}>
        <div className={"su-add-product-top-text-container"}>
            <h3>Legg til produkt</h3>
        </div>
        <div className={"su-add-product-img-container"}>
            img here
        </div>
        <div className={"su-add-product-text-container"}>
            <label id={"su-add-product-name-label"}>
                Navn:
                <br />
                <input id={"su-add-product-name-input"} />
            </label>
            <label id={"su-add-product-description-label"}>
                Beskrivelse:
                <br />
                <textarea id={"su-add-product-description-ta"} />
            </label>
            <label id={"su-add-product-package-label"}>
                Legge til produkt i pakke?
                <br />
                <select id={"su-add-product-package-select"}>
                    <option>Nei</option>
                </select>
            </label>
            <button id={"su-add-product-back-btn"}>Tilbake</button>
            <button id={"su-add-product-add-btn"}>Legg til produkt</button>
        </div>
    </div>
  );
};

export default SuperuserAddProduct;
