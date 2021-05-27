import React, { useEffect, useState } from "react";
import { fetchData } from "../api/apiHandler";
import Loading from "../components/Loading";

const AdminProducts = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetchData("/products").then((res) => {
      setProducts(res);
    });
  }, []);

  if (!products) {
    return <Loading />;
  }

  return (
    <div id={"admin-products-container"}>
      {products.map((p) => (
        <>
          <p>{p.name}</p>
        </>
      ))}
    </div>
  );
};

export default AdminProducts;
