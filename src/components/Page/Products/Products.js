import React from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import { ProductsList } from './Products.css';


const Products = ({ productsInfo }) => {
  const productData = productsInfo.map(singleProductsInfo => <SingleProduct key={singleProductsInfo.id} productData={singleProductsInfo} />)

  return (
    <ProductsList>
      {productData}
    </ProductsList>
  );
}

export default Products;