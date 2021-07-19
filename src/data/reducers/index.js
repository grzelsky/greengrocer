import { combineReducers } from 'redux';
import productsCategoriesAndProducts from './productsCategoriesAndProducts.reducer';


const rootReducer = combineReducers({
  productsCategoriesAndProducts,


});

export default rootReducer;