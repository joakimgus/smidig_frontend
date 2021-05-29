import React, { useEffect, useState } from "react";
import { fetchData } from "../api/apiHandler";
import Loading from "../components/Loading";
import moment from "moment";
import "./AdminProducts.css";
import { TiDelete } from "react-icons/all";

const AdminProducts = () => {
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

  return (
    <div className={"admin-products-page-container"}>
      <div className={"admin-products-top-text-container"}>
        <h1>Produkter</h1>
        <p>
          Her vil du finne en oversikt over hvilke enkelt produkter som ligger i
          databasen. Disse produktene kan brukes til å sette sammen
          pakkeløsninger.
        </p>
      </div>
      <div className={"admin-table-specifications"}>
        <h5 className={"date-title-section"}>Dato lagt til</h5>
        <h5 className={"product-id-title-section"}>Artikkelnr.</h5>
        <h5 className={"owner-title-section"}>Museum</h5>
        <h5 className={"product-name-title-section"}>Produktnavn</h5>
        <h5 className={"product-amount-title-section"}>Antall</h5>
        <h5 className={"delete-title-section"}>Slett</h5>
        <hr />
      </div>
      {products.map((o) => (
        <>
          <div className="admin-products-container">
            <div className="admin-product-order-date-column">
              <p className="product-date-added">
                {moment(o.orderDate).format("YYYY-MM-DD HH:mm")}
              </p>
            </div>
            <div className="admin-product-order-nr-column">
              <p className={"order-nr"}>{o._id}</p>
            </div>
            <div className="admin-product-owner-column">
              <p className={"product-owner-museum"}>{o.developer}</p>
            </div>
            <div className="admin-product-name-column">
              <p className={"product-item-name"}>{o.name}</p>
            </div>
            <div className="admin-product-amount-column">
              <p className={"product-amount"}>{o.stock}</p>
            </div>
            <div className="admin-product-delete-column">
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
  );
};

export default AdminProducts;
