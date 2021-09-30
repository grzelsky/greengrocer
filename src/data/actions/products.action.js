import {
  PRODUCTS_GET_REQUEST,
  PRODUCTS_GET_SUCCESS,
  PRODUCTS_GET_FAILURE,
} from "data/constants";

export const fetchProducts = () => async (dispatch) => {
  dispatch({
    type: PRODUCTS_GET_REQUEST,
  });
  try {
    const response = await fetch(`http://localhost:3001/products`);

    const data = await response.json();

    dispatch({
      type: PRODUCTS_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_GET_FAILURE,
    });
  }
};
