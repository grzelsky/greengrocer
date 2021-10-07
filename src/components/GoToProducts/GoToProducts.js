import React from "react";
import { GoToProductFromMain } from "./GoToProduct.css";

const GoToProducts = ({ name, image }) => {
  return (
    <GoToProductFromMain style={{ backgroundImage: `url(${image})` }}>
      <p>{name}</p>
    </GoToProductFromMain>
  );
};

export default GoToProducts;
