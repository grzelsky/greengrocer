export const addProduct = (id) => {
  return {
    type: "ADD_PRODUCT",
    id,
  };
};

export const subtractProduct = (id) => {
  return {
    type: "SUBTRACT_PRODUCT",
    id,
  };
};

let index = 0;
export const addProductToCart = (id, name, toPay, buyQuantity) => {
  const singleProduct = {
    index: index++,
    id: id,
    name: name,
    toPay: toPay,
    quantity: buyQuantity,
  };
  return {
    type: "ADD_PRODUCT_TO_CART",
    id,
    singleProduct,
  };
};

export const deleteFromCart = (id, index, quantity) => {
  return {
    type: "DELETE_PRODUCT_FROM_CART",
    id,
    index,
    quantity,
  };
};
