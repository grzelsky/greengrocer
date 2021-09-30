import {
  LOADING_STATES,
  PRODUCTS_CATEGORIES_GET_REQUEST,
  PRODUCTS_CATEGORIES_GET_SUCCESS,
  PRODUCTS_CATEGORIES_GET_FAILURE,
} from "data/constants";

const initialState = {
  loadingState: {},
  productsCategories: [],
};

const productsCategoriesInShop = (state = initialState, action) => {
  const newLoadingState = { ...state.loadingState };

  switch (action.type) {
    case PRODUCTS_CATEGORIES_GET_REQUEST:
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          [action.type]: LOADING_STATES.LOADING,
        },
      };
    case PRODUCTS_CATEGORIES_GET_SUCCESS:
      delete newLoadingState.PRODUCTS_CATEGORIES_GET_REQUEST;
      return {
        ...state,
        productsCategories: action.payload,
        loadingState: newLoadingState,
      };
    case PRODUCTS_CATEGORIES_GET_FAILURE:
      delete newLoadingState.PRODUCTS_CATEGORIES_GET_REQUEST;
      return {
        ...state,
        productsCategories: {},
        loadingState: newLoadingState,
      };

    default:
      return state;
  }
};
export default productsCategoriesInShop;
