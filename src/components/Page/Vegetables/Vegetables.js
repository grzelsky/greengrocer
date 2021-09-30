import React from "react";
import Products from "../Products";
import { useSelector } from "react-redux";

const Vegetables = () => {
  const products = useSelector((state) => state.productsInShop.products);
  const vegetables = products.filter(
    (product) => product.category === "vegetable"
  );

  return <Products productsInfo={vegetables} />;
};

export default Vegetables;
