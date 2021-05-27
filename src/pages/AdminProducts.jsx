import React, { useEffect, useState } from "react";
import { fetchData } from "../api/apiHandler";
import Loading from "../components/Loading";
import moment from "moment";
import "./AdminProducts.css";

const AdminProducts = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetchData("/products").then((res) => {
      setProducts(res);
    });
  }, []);

  const deleteProduct = async (id) => {
    console.log(id);
  };

  if (!products) {
    return <Loading />;
  }

  return (
    <div id={"admin-products-container"}>
      <table id={"order-history-table"}>
        <tr id={"header-row"}>
          <th className={"table-header date-column"}>Dato</th>
          <th className={"table-header ordernr-column"}>Artikkel Nr.</th>
          <th className={"table-header museum-column"}>Museum</th>
          <th className={"table-header museum-column"}>Produktnavn</th>
          <th className={"table-header museum-column"}>Antall</th>
          <th className={"table-header museum-column"}>Slett</th>
        </tr>
        {products.map((o) => (
          <tr className={"order-row"}>
            <td className={"date-column"}>
              {moment(o.orderDate).format("YYYY-MM-DD HH:mm")}
            </td>
            <td className={"ordernr-column"}>{o._id}</td>
            <td className={"museum-column"}>
              <div>{o.developer}</div>
            </td>
            <td className={"package-column"}>
              <div>{o.name}</div>
            </td>
            <td className={"package-column"}>
              <div>{o.stock}</div>
            </td>
            <td
              className={"package-column button"}
              onClick={() => deleteProduct(o._id)}
            >
              X
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default AdminProducts;
