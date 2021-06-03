import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../style/Admin/AdminAddProduct.css";
import {useHistory} from "react-router";
import {IoArrowBackCircle} from "react-icons/all";

const AdminAddProduct = () => {
    const [formData, setFormData] = useState({
        product: "",
    });

    const history = useHistory();

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
        <div className={"admin-add-product-page-container"}>
            <div className={"admin-add-product-top-text-container"}>
                <div className="back-container" onClick={() => history.push("/admin/produkter")}>
                    <IoArrowBackCircle />
                </div>
                <h3>Legg til produkt</h3>
            </div>
            <div
                className={"add-product-sidebar add-product-left"}
                onClick={() => history.push("/admin/produkter")}
            />
            <div
                className={"add-product-sidebar add-product-right"}
                onClick={() => history.push("/admin/produkter")}
            />
            <div
                className={"add-product-top-bot-bar add-product-top"}
                onClick={() => history.push("/admin/produkter")}
            />
            <div
                className={"add-product-top-bot-bar add-product-bot"}
                onClick={() => history.push("/admin/produkter")}
            />
            <form
                className={"admin-add-product-text-container"}
                onSubmit={saveProduct}
            >
                <label id={"admin-add-product-name-label"}>
                    Navn:
                    <br />
                    <input
                        id={"admin-add-product-name-input"}
                        type={"text"}
                        name={"productName"}
                        onChange={handleChange}
                    />
                </label>
                <label id={"admin-add-product-description-label"}>
                    Beskrivelse:
                    <br />
                    <textarea
                        id={"admin-add-product-description-ta"}
                        name={"productDescription"}
                        onChange={handleChange}
                    />
                </label>
                <label id={"admin-add-product-stock-label"}>
                    Antall:
                    <br />
                    <input
                        id={"admin-add-product-stock-input"}
                        type={"text"}
                        name={"productStock"}
                        onChange={handleChange}
                    />
                </label>
                <label id={"admin-add-product-developer-label"}>
                    Utvikler:
                    <br />
                    <select id={"admin-add-product-select-developer"}>
                        {/* TODO map gjennom eksisterende museer/superbrukere */}
                        <option>Tidvis</option>
                        <option>Viking</option>
                    </select>
                </label>
                <button
                    id={"admin-add-product-add-btn"}
                    type={"adminbmit"}
                >
                    Legg til produkt
                </button>
            </form>
        </div>
    );
};

export default AdminAddProduct;
