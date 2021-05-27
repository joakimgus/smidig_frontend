import React from "react";
import './AdminProducts.css';

const AdminProducts = () => {
    return(
        <div className={'admin-products-page-container'}>
            <div className={"admin-top-text-container"}>
                <h1>Handlekurv</h1>
                <p>
                    Her vil du finne en oversikt over hvilke varer du har i handlekurven
                    din.
                </p>
            </div>
            <div className={"admin-products-table-specifications"}>
                <h5>Dato lagt til</h5>
                <h5>Artikkelnr.</h5>
                <h5>Museum</h5>
                <h5>Produktnavn</h5>
                <h5>Antall</h5>
                <h5>Slett</h5>
                <hr />
            </div>
        </div>
    )
}
export default AdminProducts;