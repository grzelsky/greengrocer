import {
  LOADING_STATES,
  PRODUCTS_CATEGORIES_GET_REQUEST,
  PRODUCTS_CATEGORIES_GET_SUCCESS,
  PRODUCTS_CATEGORIES_GET_FAILURE,
  PRODUCTS_GET_REQUEST,
  PRODUCTS_GET_SUCCESS,
  PRODUCTS_GET_FAILURE,
  ADD_PRODUCT,
  SUBTRACT_PRODUCT,
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_FROM_CART,
} from "data/constants";

const initialState = {
  loadingState: {},
  productsCategories: [],
  products: [],
  productsInCart: [],
};

const productsCategoriesAndProducts = (state = initialState, action) => {
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
    case PRODUCTS_GET_REQUEST:
      return {
        ...state,
        loadingState: {
          ...state.loadingstate,
          [action.type]: LOADING_STATES.LOADING,
        },
      };
    case PRODUCTS_GET_SUCCESS:
      delete newLoadingState.PRODUCTS_GET_REQUEST;
      return {
        ...state,
        products: action.payload,
        loadingState: newLoadingState,
      };
    case PRODUCTS_GET_FAILURE:
      delete newLoadingState.PRODUCTS_GET_REQUEST;
      return {
        ...state,
        products: [],
        loadingState: newLoadingState,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          action.id === product.id
            ? { ...product, buyQuantity: product.buyQuantity + 1 }
            : product
        ),
      };
    case SUBTRACT_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          action.id === product.id
            ? { ...product, buyQuantity: product.buyQuantity - 1 }
            : product
        ),
      };
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        products: state.products.map((product) =>
          action.id === product.id
            ? {
                ...product,
                avaibleProducts: product.avaibleProducts - product.buyQuantity,
              }
            : product
        ),
        productsInCart: [...state.productsInCart, action.singleProduct],
      };

    case DELETE_PRODUCT_FROM_CART:
      const productsInCart = [...state.productsInCart];
      const index = productsInCart.findIndex(
        (singleProduct) => singleProduct.index === action.index
      );
      productsInCart.splice(index, 1);
      return {
        ...state,
        productsInCart: productsInCart,
        products: state.products.map((product) =>
          action.id === product.id
            ? {
                ...product,
                avaibleProducts: product.avaibleProducts + action.quantity,
              }
            : product
        ),
      };

    default:
      return state;
  }
};
export default productsCategoriesAndProducts;
