import React from 'react';
import { GoToProductFromMain } from './GoToProduct.css';

const GoToProducts = ({ name, image }) => {

  return (
    <GoToProductFromMain >
      <p>{name}</p>
      <img src={image} alt="" />
    </GoToProductFromMain>
  );
}

export default GoToProducts;