import { combineReducers } from "redux";
import productsCategoriesInShop from "./productsCategoriesInShop.reducer";
import productsInShop from "./productsInShop.reducer";

const rootReducer = combineReducers({
  productsCategoriesInShop,
  productsInShop,
});

export default rootReducer;
