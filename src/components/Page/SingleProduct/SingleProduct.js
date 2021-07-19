import React from "react";
import {
  Product,
  Image,
  BuyInfoLabel,
  PriceAndQuantity,
  Buy,
  Button,
} from "./SingleProduct.css";
import { useDispatch } from "react-redux";
import {
  addProduct,
  subtractProduct,
  addProductToCart,
} from "data/actions/buyProducts.action";

const SingleProduct = ({ productData }) => {
  const toPay = (productData.buyQuantity * productData.price).toFixed(2);
  const { image, name, price, buyQuantity, avaibleProducts, id } = productData;
  const dispatch = useDispatch();
  return (
    <Product>
      <Image>
        <img src={image} alt="" />
      </Image>
      <BuyInfoLabel>
        <PriceAndQuantity>
          <p>
            price:<span> {price}</span>
          </p>
          <p>
            qty:<span> {buyQuantity}</span>
          </p>
        </PriceAndQuantity>
        <Buy>
          <p>to pay: {toPay}</p>
          <Button
            disabled={buyQuantity >= avaibleProducts ? true : false}
            onClick={() => dispatch(addProduct(id))}
          >
            +
          </Button>
          <Button
            disabled={buyQuantity ? false : true}
            onClick={() => dispatch(subtractProduct(id))}
          >
            -
          </Button>
          <Button
            id="buy"
            buy
            disabled={
              avaibleProducts === 0 ||
              buyQuantity === 0 ||
              buyQuantity > avaibleProducts
                ? true
                : false
            }
            onClick={() =>
              dispatch(addProductToCart(id, name, toPay, buyQuantity))
            }
          >
            buy
          </Button>
        </Buy>
      </BuyInfoLabel>
    </Product>
  );
};

export default SingleProduct;
