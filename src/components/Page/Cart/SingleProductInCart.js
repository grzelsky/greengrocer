import React from "react";
import { SinglePosition } from "./Cart.css";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "data/actions/buyProducts.action";

const SingleProductInCart = ({ productsInCartData }) => {
  const dispatch = useDispatch();

  const { name, id, toPay, quantity, index } = productsInCartData;
  return (
    <SinglePosition>
      <p className="name">{name}</p>
      <p className="qty">quantity: {quantity} kg</p>
      <p className="toPay">
        to pay: {toPay} zł
        <button onClick={() => dispatch(deleteFromCart(id, index, quantity))}>
          &times;
        </button>
      </p>
    </SinglePosition>
  );
};

export default SingleProductInCart;
