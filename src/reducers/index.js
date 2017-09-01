import { combineReducers } from 'redux'
import products from './products_reducer';
import cart from './cart_reducer'

export default combineReducers({
  products,
  cart
});
