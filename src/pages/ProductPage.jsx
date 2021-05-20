import React from "react";
import { useLocation } from "react-router";

const ProductPage = () => {
  const location = useLocation();
  const data = location.state.params;

  return (
    <div>
      <p>{data.name}</p>
    </div>
  );
};

export default ProductPage;
