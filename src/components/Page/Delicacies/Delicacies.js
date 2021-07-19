import React from 'react';
import Products from '../Products';
import { useSelector } from "react-redux";

const Delicacies = () => {
  const products = useSelector(state => state.productsCategoriesAndProducts.products);
  const delicacies = products.filter(product => product.category === "delicacies")
  return (
    <Products productsInfo={delicacies} />
  );
}

export default Delicacies;