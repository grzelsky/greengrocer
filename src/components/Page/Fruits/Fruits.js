import React from 'react';
import Products from '../Products';
import { useSelector } from "react-redux";

const Fruits = () => {
  const products = useSelector(state => state.productsCategoriesAndProducts.products);
  const fruits = products.filter(product => product.category === "fruit")

  return (
    <Products productsInfo={fruits} />
  );
}

export default Fruits;