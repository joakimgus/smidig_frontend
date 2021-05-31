import React, {useEffect, useState} from "react";
import './style/SuperuserProducts.css';
import moment from "moment";
import {TiDelete} from "react-icons/all";
import {fetchData} from "../api/apiHandler";
import Loading from "../components/Loading";

const SuperuserProducts = () => {

    const [products, setProducts] = useState();

    useEffect(() => {
        fetchData("/products").then((res) => {
            setProducts(res);
        });
    }, []);

    const deleteProduct = async (id) => {
        console.log("Deleting product " + id + ", but not really");
    };

    if (!products) {
        return <Loading />;
    }

    return(
        <div className={"su-products-page-container"}>
            <div className={"su-products-top-text-container"}>
                <h1>Produkter</h1>
                <p>
                    Her vil du finne en oversikt over hvilke enkelt produkter som ligger i
                    databasen. Disse produktene kan brukes til å sette sammen
                    pakkeløsninger.
                </p>
            </div>
            <div className={"su-table-specifications"}>
                <h5 className={"su-date-title-section"}>Dato lagt til</h5>
                <h5 className={"su-product-id-title-section"}>Artikkelnr.</h5>
                <h5 className={"su-product-name-title-section"}>Produktnavn</h5>
                <h5 className={"su-product-amount-title-section"}>Antall</h5>
                <h5 className={"su-delete-title-section"}>Slett</h5>
                <hr />
            </div>
            {products.map((o) => (
                <>
                    <div className="su-products-container">
                        <div className="su-product-order-date-column">
                            <p className="su-product-date-added">
                                {moment(o.orderDate).format("YYYY-MM-DD HH:mm")}
                            </p>
                        </div>
                        <div className="su-product-order-nr-column">
                            <p className={"order-nr"}>{o._id}</p>
                        </div>
                        <div className="su-product-name-column">
                            <p className={"product-item-name"}>{o.name}</p>
                        </div>
                        <div className="su-product-amount-column">
                            <p className={"product-amount"}>{o.stock}</p>
                        </div>
                        <div className="su-product-delete-column">
                            <p
                                className={"product-delete-btn button"}
                                onClick={() => deleteProduct(o._id)}
                            >
                                <TiDelete />
                            </p>
                        </div>
                    </div>
                </>
            ))}
        </div>
    )
}

export default SuperuserProducts;