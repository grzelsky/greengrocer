import React from 'react';
import { ProductsInCart, ProductsListInCart } from './Cart.css';
import SingleProductInCart from './SingleProductInCart';
import { useSelector } from "react-redux";

const Cart = () => {
  const productsInCart = useSelector(state => state.productsCategoriesAndProducts.productsInCart);

  const products = productsInCart.map(singleProduct => <SingleProductInCart key={singleProduct.index} productsInCartData={singleProduct} />)
  return (
    <ProductsInCart>
      <ProductsListInCart>
        <ul>
          <li>
            {products}
          </li>
        </ul>
      </ProductsListInCart>
    </ProductsInCart>
  );
}

export default Cart;