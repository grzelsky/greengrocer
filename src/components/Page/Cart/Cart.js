import React from "react";
import SingleProductInCart from "./SingleProductInCart";
import { useSelector } from "react-redux";
import { ProductsInCart, ProductsListInCart } from "./Cart.css";

const Cart = () => {
  const productsInCart = useSelector(
    (state) => state.productsInShop.productsInCart
  );

  const products = productsInCart.map((singleProduct) => (
    <SingleProductInCart
      key={singleProduct.index}
      productsInCartData={singleProduct}
    />
  ));
  return (
    <ProductsInCart>
      <ProductsListInCart>
        <ul>
          <li>{products}</li>
        </ul>
      </ProductsListInCart>
    </ProductsInCart>
  );
};

export default Cart;
