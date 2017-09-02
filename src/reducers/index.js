import { combineReducers } from 'redux'
import productsReducer from './products_reducer';
import cartReducer from './cart_reducer'

export default combineReducers({
  products: productsReducer,
  cart: cartReducer
});
