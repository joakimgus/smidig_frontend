import React, {useState} from "react";
import "../style/Superuser/SuperuserAddProduct.css";

const SuperuserAddProduct = () => {
    const [formData, setFormData] = useState({
        product: "",
    });

    const [errorMessage, setErrorMessage] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const saveProduct = (e) => {
        e.preventDefault();
        {/* TODO */ }
        if (Object.keys(formData).length === 3) {
            console.log(formData);
        } else {
            setErrorMessage("Du må fylle ut alle feltene");
        }
    };

  return (
    <div className={"su-add-product-page-container"}>
        <div className={"su-add-product-top-text-container"}>
            <h3>Legg til produkt</h3>
        </div>
        <div className={"add-product-sidebar add-product-left"} />
        <div className={"add-product-sidebar add-product-right"} />
        <form
            className={"su-add-product-text-container"}
            onSubmit={saveProduct}
        >
            <label id={"su-add-product-name-label"}>
                Navn:
                <br />
                <input
                    id={"su-add-product-name-input"}
                    type={"text"}
                    name={"productName"}
                    onChange={handleChange}
                />
            </label>
            <label id={"su-add-product-description-label"}>
                Beskrivelse:
                <br />
                <textarea
                    id={"su-add-product-description-ta"}
                    name={"productDescription"}
                    onChange={handleChange}
                />
            </label>
            <button
                id={"su-add-product-add-btn"}
                type={"submit"}
            >
                Legg til produkt
            </button>
        </form>
    </div>
  );
};

export default SuperuserAddProduct;
