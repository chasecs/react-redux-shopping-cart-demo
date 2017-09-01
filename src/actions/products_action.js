import * as types from '../constants/action_types';

export const showInventory = () => {
  let products = {
    1: {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
    2: {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
    3: {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
  }
  return {
    type: types.SHOW_INVENTORY,
    products
  }
}

export const addToCart = productId => {
  // if(getState().products[productId].inventory > 0){
  //   return dispatch({
  //     type: types.ADD_TO_CART,
  //     productId
  //   })
  // }
  return ({
    type: types.ADD_TO_CART,
    productId
  })
}
